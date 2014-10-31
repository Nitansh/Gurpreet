/*globals angular, _*/

/**
 * Assignment includes all problems.
 * SolutionSet includes student's solution for each problem, including review and current state.
 * ClientState is the state of the client app, including current problem number and tab.
 */

(function(){
    'use strict';

    angular.module('generalLedger').service('glModels', function(glModes, chartOfAccounts){
        this.Assignment = Assignment;
        this.Problem = Problem;
        this.SolutionSet = SolutionSet;
        this.Solution = Solution;
        this.GeneralJournal = GeneralJournal;
        this.GeneralJournalRow = GeneralJournalRow;
        this.ClientState = ClientState;

        function parseNumber(s){
            if (Object.isString(s)) s = s.remove(/\$|,/g)
            return Math.round(parseFloat(s));
        }

        function readDate(s){
            return Date.create(Object.isString(s) ? s.replace(/T.*/, '') : s);
        }

        function stringifyDate(date){
            return date.format('{yyyy}-{MM}-{dd}');
        }

        function Assignment(id, jso){
            this.id             = id;
            this.title          = jso.custom_assignmenttitle;
            this.origState      = jso.custom_mode;
            this.attemptsAllowed = parseInt(jso.custom_attemptsallowed, 10) || 0;

            var problemNumbers = Object.keys(jso).reduce(function(nums, key){
                var re = /custom_target_(\d+)/;
                var match = key.match(re);
                if (match) {
                    var num = parseInt(match[1], 10);
                    if (Object.isNumber(num)) nums.add(num);
                }
                return nums;
            }, []).sortBy();

            this.problems       = problemNumbers.map(function(n){
                return {
                    number: n,
                    guid:   jso['custom_target_' + n],
                    title:  jso['custom_questiontitle_' + n]
                };
            });

            this.initialProblem = jso.custom_currentquestion ?
                                  parseInt(jso.custom_currentquestion, 10) :
                                  problemNumbers.first();
        }
        Assignment.prototype = {
            getProblemNumber: function(number){
                return _(this.problems).findWhere({number: +number});
            }
        };

        function Problem(assignment, number, guid, title, jso){
            this.assignment     = assignment;
            this.number         = number;
            this.guid           = guid;
            this.title          = title;
            this.background     = jso.background;
            this.instructions   = jso.instructions;
            this.company        = jso.company;
            this.ownerType      = jso.ownerType || 'soleProprietorship';
            this.companyType    = jso.companyType || 'service';
            this.reportsHidden  = jso.reportsHidden || {};
            this.period         = {};
            this.period.start   = readDate(jso.period.start);
            this.period.length  = parseInt(jso.period.length, 10);
            this.accounts = ! jso.accounts
                ? chartOfAccounts.accountList.reduce(function(a,b){
                    a[b.number] = {
                        number: b.number,
                        name: b.defaultName,
                        type: b.type,
                        openingBalance: 0,
                        isIncluded: true
                    };
                    return a;
                }, Object.extended())
                : Object.extended(jso.accounts).keys().reduce(function(a,b){
                    // This is ugly, accounts should really be an Array
                    var number = parseInt(b, 10);
                    var act = jso.accounts[b];
                    a[number] = {
                       number: number,
                       name: act.name,
                       type: chartOfAccounts.getAccount(number).type,
                       openingBalance: parseInt(act.openingBalance, 10), 
                       isIncluded: act.isIncluded
                    };
                    return a;
                }, Object.extended())
            ;
            this.includedAccounts = this.accounts.values()
                .filter({isIncluded: true})
                .sortBy('number')
            ;
            if (! jso.events) jso.events = [];
            this.events         = _(jso.events).map(function(ev){
                return {
                    date        : readDate(ev.date),
                    item        : ev.item
                };
            });
        }
        Problem.prototype = {
            ownerTypeText: function(){
                return {
                    soleProprietorship: 'Sole Proprietorship',
                    corporation: 'Corporation'
                }[this.ownerType];
            },
            companyTypeText: function(){
                return {
                    service: 'Service',
                    'service+merchandiserPerpetual': 'Service + Merchandising, Perpetual Inventory System',
                    'service+merchandiserPeriodic': 'Service + Merchandising, Periodic Inventory System',
                    merchandiserPerpetual: 'Merchandising, Perpetual Inventory System',
                    merchandiserPeriodic: 'Merchandising, Periodic Inventory System'
                }[this.companyType];
            },
            previous: function(){
                var thisIndex = _(this.assignment.problems).indexOf(this);
                return this.assignment.problems[thisIndex-1];
            },
            next: function(){
                var thisIndex = _(this.assignment.problems).indexOf(this);
                return this.assignment.problems[thisIndex+1];
            }
        };

        function SolutionSet(assignment, jso){
            this.assignment = assignment;
            if (!jso || !jso.solutions) jso = {solutions: []};

            this.solutions = _(assignment.problems).map(function(problem){
                var jsoSolution = _(jso.solutions).findWhere({problemNumber: problem.number}) ||
                    {problemNumber: problem.number, state: assignment.origState, generalJournal: []}
                ;
                return new Solution(problem, jsoSolution);
            });
        }
        SolutionSet.prototype = {
            getSolution: function(problem){
                return _(this.solutions).findWhere({problem: problem});
            },
            setSolution: function(solution){
                this.solutions = _(this.solutions).map(function(existing){
                    if (existing.problem.number == solution.problem.number) return solution;
                    else return existing;
                });
            },
            toJSO: function(){
                return {
                    solutions: _(this.solutions).map(function(solution){
                        return solution.toJSO();
                    })
                };
            }
        };

        function Solution(problem, jso){
            this.problem = problem;
            this.nAttempts = parseInt(jso.nAttempts, 10) || 0;
            this.attemptStartedTime = new Date(jso.attemptStartedTime || Date.now());
            this.setMode(jso.state);
            this.feedback = jso.feedback ? new Feedback(this, jso.feedback) : undefined;
            this.generalJournal = new GeneralJournal(this, jso.generalJournal);
            this.currentPeriodNumber = parseInt(jso.currentPeriodNumber, 10) || 0;
        }
        Solution.prototype = {
            prevPeriod: function(){
                if (this.currentPeriodNumber > 0) this.currentPeriodNumber--;
            },
            nextPeriod: function(){
                this.currentPeriodNumber++;
            },
            getPeriod: function(n){
                if (n === undefined) n = this.currentPeriodNumber;
                var start = this.problem.period.start.clone();
                var nMonths = this.problem.period.length;
                start.addMonths(nMonths * n);
                var end = start.clone();
                end.addMonths(nMonths).addDays(-1);
                return {
                    start: start,
                    end: end
                };
            },
            getCurrentPeriod: function(){
                return this.getPeriod();
            },
            setFeedback: function(jso){
                this.feedback = new Feedback(this, jso);
            },
            setMode: function(newMode){
                this.state = newMode;
                this.mode = glModes.modeFor(this);
            },
            balanceAtDate: function(date, accountNumber){
                return this.generalJournal.rows
                    .filter(function(row){
                        return row.account == accountNumber &&
                               row.date.isBefore(date)
                        ;
                    })
                    .sum('amount') + this.problem.accounts[accountNumber].openingBalance;
                ;
            },
            toJSO: function(){
                return {
                    problemNumber: this.problem.number,
                    nAttempts: this.nAttempts,
                    state: this.state,
                    generalJournal: {
                        rows: _(this.generalJournal.rows).map(function(row){
                            return row.toJSO();
                        })
                    },
                    feedback: this.feedback,
                    attemptStartedTime: this.attemptStartedTime
                };
            }
        };

        function Feedback(solution, jso){
            this.expectedTransactions = jso.expectedTransactions;
            this.transactionsCorrect = jso.transactionsCorrect;
            this.transactionsIncorrect = jso.transactionsIncorrect;
            this.correctMap = jso.correctMap || _(_.zip(solution.generalJournal.rows, jso.rowStatus)).map(function(fbItem){
                var row = fbItem[0], status = fbItem[1];
                return {
                    transactionId: row.transactionId,
                    subTransactionId: row.subTransactionId,
                    status: status
                };
            });
        }
        Feedback.prototype = {
            isCorrect: function(row){
                return _(this.correctMap).findWhere({
                    transactionId: row.transactionId,
                    subTransactionId: row.subTransactionId
                }).status;
            },
            isTransactionCorrect: function(row){
                return this.correctMap
                    .filter({transactionId: row.transactionId})
                    .map('status')
                    .all(true)
                ;
            }
        };

        function GeneralJournal(solution, jso){
            this.solution = solution;
            if (! jso.allRows) jso.allRows = [];
            this.allRows =  jso.allRows.map(function(jso){
                return new GeneralJournalRow(jso);
            });
            if (! jso.rows) jso.rows = [];
            this.rows = jso.rows.map(function(jso){
                return new GeneralJournalRow(jso);
            });
        }
        GeneralJournal.prototype = {
            clear: function(){
                this.rows = [];
            },
            addTransaction: function(newRows){
                // Pick out a new transaction id
                var lastTransactionId = _(this.rows).chain()
                    .pluck('transactionId')
                    .max()
                    .value();
                var newTxId = lastTransactionId >= 0 ?
                              lastTransactionId + 1 : 0;
                _(newRows).each(function(row){
                    row.transactionId = newTxId;
                });
                this.rows.push.apply(this.rows, newRows);
            },
            updateTransaction: function(transactionId, rows){
                this.deleteTransactions([transactionId]);
                this.rows = this.rows.concat(rows);
            },
            deleteTransactions: function(txIds){
                this.rows = _(this.rows).filter(function(row){
                    return txIds.indexOf(row.transactionId) < 0;
                });
            },
            getPeriodRows: function(n) {
                var period = this.solution.getPeriod(n);
                return this.rows.filter(function(row){
                    return row.date.isBetween(period.start, period.end, 1);
                });
            },
            get periodRows() {
                return this.getPeriodRows();
            }
        };

        function GeneralJournalRow(jso){
            this.transactionId      = parseInt(jso.transactionId, 10);
            this.subTransactionId   = parseInt(jso.subTransactionId, 10);
            this.date               = readDate(jso.date);
            // Using string since that is what existing reports expect
            this.account            = parseInt(jso.account, 10);
            // If jso has amount, use that. Otherwise use debit/credit.
            this.amount             = jso.debit ? parseNumber(jso.debit)
                                    : jso.credit ? -parseNumber(jso.credit)
                                    : jso.amount ? parseNumber(jso.amount)
                                    : -1;
        }
        GeneralJournalRow.prototype = {
            toJSON: function(){
                var copy = Object.clone(this);
                copy.date = stringifyDate(this.date);
                return copy;
            },
            get debit(){
                if (this.amount >= 0) return this.amount;
                else return '';
            },
            get credit(){
                if (this.amount < 0) return -this.amount;
                else return '';
            },
            get isDebit(){
                return !!this.debit;
            },
            get isCredit(){
                return !!this.credit;
            },
            toJSO: function(){
                return {
                    transactionId: this.transactionId,
                    subTransactionId: this.subTransactionId,
                    date: stringifyDate(this.date),
                    account: this.account,
                    amount: this.amount
                };
            }
        };

        /* Not being used yet. */
        function ClientState(){
        }
        ClientState.prototype = {
        };
    });
}());