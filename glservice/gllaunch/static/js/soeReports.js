(function(){
    'use strict';

    angular.module('generalLedger')
        .service('reports', function(chartOfAccounts){
            var reports = this;

            [generalLedger, trialBalance, balanceSheet, incomeStatement, statementOfOwnersEquity, statementOfRetainedEarnings].each(function(f){
                reports[f.name] = f.memoize(function(solution){
                    // console.log([solution.currentPeriodNumber, solution.problem.number, solution.generalJournal.rows]);
                    return JSON.stringify([solution.currentPeriodNumber, solution.problem.number, solution.generalJournal.rows]);
                });
            });

            function debit(balance){
                return balance > 0 ? balance : 0;
            }

            function credit(balance){
                return balance < 0 ? -balance : 0;
            }

            function generalLedger(solution){
                var period = solution.getCurrentPeriod();
                return solution.problem.includedAccounts.map(function(act){
                    var openingBalance = periodTotal(solution, act.number).start;
                    var openingRow = {
                        date    : period.start,
                        debit   : debit(openingBalance),
                        credit  : credit(openingBalance)
                    };
                    var rows = solution.generalJournal.periodRows
                        .filter({account : act.number})
                        .reduce(function(a, b){
                            a.balance += b.amount;
                            a.rows.add({
                                date            : b.date,
                                debit           : debit(b.amount),
                                credit          : credit(b.amount),
                                balanceDebit    : debit(a.balance),
                                balanceCredit   : credit(a.balance)
                            });
                            return a;
                        }, {
                            balance: openingBalance,
                            rows: []
                        })
                        .rows
                    ;
                    return {
                        account: act,
                        openingRow: openingRow,
                        rows: rows
                    };
                });
            }

            function trialBalance(solution){
                var period = solution.getCurrentPeriod();
                var rows = solution.problem.includedAccounts.reduce(function(a,b){
                    var total = periodTotal(solution, b.number).end;
                    // var total = solution.generalJournal.periodRows
                    //     .filter({account: b.number})
                    //     .sum('amount')
                    // ;
                    if (total) a.add({
                        account: b,
                        debit: debit(total),
                        credit: credit(total)
                    });
                    return a;
                }, []);
                return {
                    rows: rows,
                    totalDebit: rows.sum('debit'),
                    totalCredit: rows.sum('credit')
                };
            }

            function balanceSheet(solution){
                var problem = solution.problem
                var period = solution.getCurrentPeriod();
                var includedKey = ['balanceSheet', problem.ownerType, problem.companyType].join('.');
                // Get the accounts that should be included in the balance sheet
                var bsAccounts = chartOfAccounts.accountList.filter(function(act){
                    return act.includedInReports.any(includedKey);
                });

                var accounts = bsAccounts.reduce(function(list,act){
                    var category = categoryForAccount(act.number);
                    var sign = signForCategory(category);
                    var amount = periodTotal(solution, act.number).end * sign;
                    if (! act.contraAssetOf) {
                        list.add({
                            number      : act.number,
                            amount      : amount,
                            subAccounts :[],
                            total       : amount
                        });
                    } else if (amount != 0) {
                        var superAccount = list.find({number: act.contraAssetOf});
                        superAccount.subAccounts.add({
                            number  : act.number,
                            amount  : amount
                        });
                        superAccount.total += amount;
                    }
                    return list;
                }, []);
                accounts.remove(function(act){
                    return act.total == 0 && act.subAccounts.length == 0;
                });

                var sections = accounts.reduce(function(list,act){
                    var sectionName = sectionForAccount(act.number);
                    var section = list.find({name: sectionName}) || function(){
                        var section = {
                            name    : sectionName,
                            accounts: [],
                            total   : 0
                        };
                        list.add(section);
                        return section;
                    }();
                    section.accounts.add(act);
                    section.total += act.total;
                    return list;
                }, []);

                var categories = sections.reduce(function(list,section){
                    var catName = categoryForAccount(section.accounts.first().number);
                    var category = list.find({name: catName}) || function(){
                        var category = {
                            name: catName,
                            sections: [],
                            total: 0
                        };
                        list.add(category);
                        return category;
                    }();
                    category.sections.add(section);
                    category.total += section.total;
                    return list;
                }, []);

                return { categories: categories };
            };

            function icsmMajorItemList(problem){
                return {
                    'soleProprietorship.service': [
                        // 'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        // 'grossProfit',
                        'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        // 'incomeBeforeTax',
                        'netIncome',
                    ],
                    'soleProprietorship.merchandiserPerpetual': [
                        'netSalesRevenue',
                        'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        'grossProfit',
                        // 'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        // 'incomeBeforeTax',
                        'netIncome',
                    ],
                   'soleProprietorship.merchandiserPeriodic': [
                        'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        'costOfGoodsSoldSection',
                        'grossProfit',
                        // 'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        // 'incomeBeforeTax',
                        'netIncome',
                    ]

                }[problem.ownerType + '.' + problem.companyType];
            }

            // Income statement functions
            function icsmMajorItem(id){
                return {
                    netSalesRevenue: {
                        type            : 'account',
                        account         : 40100,
                        name            : 'Net Sales Revenue'
                    },
                    costOfGoodsSoldAccount: {
                        type            : 'account',
                        account         : 50100,
                        name            : 'Cost of Goods Sold',
                    },
                    costOfGoodsSold: {
                        type            : 'costOfGoodsSold',
                    },
                    grossProfit: {
                        type            : 'sum',
                        name            : 'Gross Profit'
                    },
                    serviceRevenue: {
                        type            : 'account',
                        account         : 40250,
                        name            : 'Service Revenue'
                    },
                    operatingExpenses: {
                        type            : '2-2',
                        accountRange    : [50350,51800],
                        name            : 'Total Operating Expenses',    
                        sectionName     : 'Operating Expenses'
                    },
                    operatingIncome: {
                        type            : 'sum',
                        name            : 'Operating Income (Loss)'
                    },
                    otherRevenues: {
                        type            : '2-2',
                        accountRange    : [60100,70550],
                        sectionName     : 'Other Revenues (Expenses) & Gains (Losses)',
                        name            : 'Total Other Revenus (Expenses) & Gains (Losses)'
                    },
                    // incomeBeforeTax: {
                    //  type            : 'sumWithAccount',
                    //  account         : 70600
                    // },
                    netIncome: {
                        type            : 'sum',
                        name            : 'Net Income (Loss)'
                    }
                }[id];
            }

            function incomeStatement(solution){
                var period = solution.getCurrentPeriod();
                var problem = solution.problem;
                var runningTotal = 0;
                var majorItems = icsmMajorItemList(solution.problem).map(function(id){
                    var majorItem = Object.clone(icsmMajorItem(id));
                    if (majorItem.type == 'sum'){
                        majorItem.amount = runningTotal;
                    } else if (majorItem.type == 'account'){
                        majorItem.amount = periodTotal(solution, majorItem.account).end;
                        majorItem.subAccounts = chartOfAccounts.accountList
                            .filter(function(act){
                                return act.contraAssetOf == majorItem.account;
                            })
                            .map(function(act){
                                return {
                                    number: act.number,
                                    amount: periodTotal(solution, act.number).end
                                }
                            })
                        ;
                        majorItem.total = majorItem.amount + majorItem.subAccounts.map('amount').sum();
                        runningTotal += majorItem.total;
                    } else if (majorItem.type == 'costOfGoodsSold') {
                        majorItem.miStart = solution.balanceAtDate(period.start, act.number);       
                        majorItem.miEnd = majorItem.miStart + periodTotal(solution, 10600).end;
                        
                    } else {
                        var inRange = function(n){
                            return n >= majorItem.accountRange[0] &&
                                   n <= majorItem.accountRange[1];
                        }
                        var accounts = chartOfAccounts.accountList
                            .map('number')
                            .filter(inRange);
                        ;
                        majorItem.accounts = accounts.map(function(n){
                            return {
                                number: n,
                                amount: periodTotal(solution, n).end
                            };
                        });
                        majorItem.total = majorItem.accounts.map('amount').sum() || 0;
                        runningTotal += majorItem.total;
                        majorItem.accounts.remove(function(act){
                            return act.amount == 0;
                        });
                    }
                    return majorItem;
                });
                return { majorItems: majorItems };
            }

            // Balance Sheet functions
            function signForCategory(categoryName){
                return categoryName == 'Assets' ? 1 : -1;
            }

            function categoryForAccount(n){
                if (n < 20100)               return 'Assets';
                else if (n < 30100)          return 'Liabilities';
                else if (n == 30100)         return "Owner's Equity";
                else                         return "Stockholder's Equity";
            }

            function sectionForAccount(n){
                if (n >= 10100 && n < 10800) return 'Current Assets';
                else if (n < 11000)          return 'Long-Term Investments';
                else if (n < 11750)          return 'Property, Plant, and Equipment';
                else if (n < 12050)          return 'Intangible Assets';
                else if (n < 20100)          return 'Other Long-Term Assets';
                else if (n < 21000)          return 'Current Liabilities';
                else if (n < 30100)          return 'Long-Term Liabilities';
            }

            // Statement of Equity functions

            function isCapitalAccount(accountNumber) {
                return accountNumber == 30100;
            }

            function periodTotalCapitalAccount(solution, accountNumber, n){
                if (accountNumber == 30100) {
                    // some kind of bug here if I leave out reports.
                    var sooe = reports.statementOfOwnersEquity(solution, n);
                    return {
                        start: sooe.startingCapital,
                        end: sooe.endingCapital
                    };
                }
            }

            function periodTotal(solution, accountNumber, n){
                if (isCapitalAccount(accountNumber)) return periodTotalCapitalAccount(solution, accountNumber, n); 
                var period = solution.getPeriod(n);
                var start = function(){
                    if (chartOfAccounts.getAccount(accountNumber).isBalanceZeroed) return 0;
                    else return solution.generalJournal.rows
                        .filter(function(row){
                            return row.date.isBefore(period.start) && row.account == accountNumber;
                        })
                        .map('amount')
                        .sum() || 0;
                }();
                var end = start + (solution.generalJournal.getPeriodRows(n).filter({account: accountNumber}).map('amount').sum() || 0);
                return { start : start, end : end };
            }

            function netIncomeForPeriod(solution, n){
                var problem = solution.problem;
                var period = solution.getPeriod(n);
                var includedKey = ['incomeStatement', problem.ownerType, problem.companyType].join('.');
                // Get the accounts that should be included in the income statement
                var icsmAccounts = chartOfAccounts.accountList.filter(function(act){
                    return act.includedInReports.any(includedKey);
                });
                return icsmAccounts
                    .map(function(act){
                        return periodTotal(solution, act.number, n).end;
                    })
                    .sum() || 0
                ;
            }

            function statementOfOwnersEquity(solution, n){
                if (n === undefined) n = solution.currentPeriodNumber;
                var period = solution.getPeriod(n);
                var startingCapital = function(){
                    if (n === 0) return solution.problem.accounts[30100].openingBalance;
                    else         return reports.statementOfOwnersEquity(solution, n-1).endingCapital;
                }();
                var ownerContribution = -solution.generalJournal.getPeriodRows(n).filter({account: 30100}).sum('amount');
                var netIncome = -netIncomeForPeriod(solution, n);
                var ownerWithdrawal = -periodTotal(solution, 30150, n).end;
                var endingCapital = startingCapital + ownerContribution + netIncome + ownerWithdrawal;
                return {
                    startingCapital     : startingCapital,
                    ownerContribution   : ownerContribution,
                    netIncome           : netIncome,
                    ownerWithdrawal     : ownerWithdrawal,
                    endingCapital       : endingCapital
                };
            }

            function statementOfRetainedEarnings(solution, n){
                if (n === undefined) n = solution.currentPeriodNumber;
                var period = solution.getPeriod(n);
                var startingRE = function(){
                    if (n === 0) return solution.problem.accounts[30700].openingBalance;
                    else         return reports.statementOfRetainedEarnings(solution, n-1).endingRE;
                }();
                var netIncome = -netIncomeForPeriod(solution, n);
                var dividends = -(periodTotal(solution, 30850, n).end + periodTotal(solution, 30900, n).end);
                var endingRE = startingRE + netIncome + dividends;
                return {
                    startingRE : startingRE,
                    netIncome  : netIncome,
                    dividends  : dividends,
                    endingRE   : endingRE
                };
            }
        })
    ;
}());
