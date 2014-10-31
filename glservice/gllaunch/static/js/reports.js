(function(){
    'use strict';

    angular.module('generalLedger')
        .service('reports', function(chartOfAccounts){
            var reports = this;

            this.generalLedger = generalLedger.memoize(memofn);
            this.trialBalance = trialBalance.memoize(memofn);
            this.balanceSheet = balanceSheet.memoize(memofn);
            this.incomeStatement = incomeStatement.memoize(memofn);
            this.statementOfOwnersEquity = statementOfOwnersEquity.memoize(memofn);
            this.statementOfRetainedEarnings = statementOfRetainedEarnings.memoize(memofn);

            function memofn(solution){
                return JSON.stringify([solution.currentPeriodNumber, solution.problem.number, solution.generalJournal.rows]);
            }

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
                        amount  : openingBalance
                    };
                    var rows = solution.generalJournal.periodRows
                        .filter({account : act.number})
                        .reduce(function(a, b){
                            a.balance += b.amount;
                            a.rows.add({
                                date            : b.date,
                                amount          : b.amount,
                                balance         : a.balance,
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

            function balanceSheetTotal(solution, accountNumber, n){
                // Cynthia says statement of equity is special; only apply special logic there
                // if (accountNumber == 30100) return reports.statementOfOwnersEquity(solution, n).endingCapital;
                // else if (accountNumber == 30700) return reports.statementOfRetainedEarnings(solution, n).endingRE;
                // else
                return periodTotal(solution, accountNumber, n).end;
            }

            function applySarahSpecialLogic(balanceSheet){
                var totalAssets = balanceSheet.assets.total || 0;
                var totalLiabilities = balanceSheet.liabilities.total || 0;
                var ownersCapital = balanceSheet.accounts.find({number:30100});
                if (ownersCapital) {
                    ownersCapital.amount = totalAssets - totalLiabilities;
                }
                var retainedEarnings = balanceSheet.accounts.find({number:30700});
                if (retainedEarnings) {
                    retainedEarnings.amount = totalAssets - totalLiabilities - (balanceSheet.accounts.find({number:30500}).amount || 0);
                }
                return balanceSheet;
            }

            function balanceSheet(solution, n){
                if (n === undefined) n = solution.currentPeriodNumber;
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
                    var amount = balanceSheetTotal(solution, act.number, n) * sign;
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

                function newCat(catName) { return {
                    name: catName,
                    sections: [],
                    total: 0
                }};
                var categories = sections.reduce(function(list,section){
                    var catName = categoryForAccount(section.accounts.first().number);
                    var category = list.find({name: catName}) || function(){
                        var category = newCat(catName);
                        list.add(category);
                        return category;
                    }();
                    category.sections.add(section);
                    category.total += section.total;
                    return list;
                }, [newCat('Assets'), newCat('Liabilities')]);

                return applySarahSpecialLogic({
                    accounts: accounts,
                    sections: sections,
                    categories: categories,
                    assets: categories.find({name: 'Assets'}),
                    liabilities: categories.find({name: 'Liabilities'})
                });
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
                    'soleProprietorship.service+merchandiserPerpetual': [
                        'netSalesRevenue',
                        'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        'grossProfit',
                        'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        // 'incomeBeforeTax',
                        'netIncome',
                    ],
                   'soleProprietorship.service+merchandiserPeriodic': [
                        'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        'costOfGoodsSoldSection',
                        'grossProfit',
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
                    ],
                    'corporation.service': [
                        // 'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        // 'grossProfit',
                        'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        'incomeBeforeTax',
                        'netIncome',
                    ],
                    'corporation.service+merchandiserPerpetual': [
                        'netSalesRevenue',
                        'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        'grossProfit',
                        'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        'incomeBeforeTax',
                        'netIncome',
                    ],
                   'corporation.service+merchandiserPeriodic': [
                        'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        'costOfGoodsSoldSection',
                        'grossProfit',
                        'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        'incomeBeforeTax',
                        'netIncome',
                    ],
                    'corporation.merchandiserPerpetual': [
                        'netSalesRevenue',
                        'costOfGoodsSoldAccount',
                        // 'costOfGoodsSoldSection',
                        'grossProfit',
                        // 'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        'incomeBeforeTax',
                        'netIncome',
                    ],
                   'corporation.merchandiserPeriodic': [
                        'netSalesRevenue',
                        // 'costOfGoodsSoldAccount',
                        'costOfGoodsSoldSection',
                        'grossProfit',
                        // 'serviceRevenue',
                        'operatingExpenses',
                        'operatingIncome',
                        'otherRevenues',
                        'incomeBeforeTax',
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
                        name            : 'Net Sales Revenue',
                        sign            : -1
                    },
                    costOfGoodsSoldAccount: {
                        type            : 'account',
                        account         : 50100,
                        name            : 'Cost of Goods Sold',
                        sign            : 1
                    },
                    costOfGoodsSoldSection: {
                        type            : 'costOfGoodsSoldSection',
                        sign            : 1
                    },
                    grossProfit: {
                        type            : 'sum',
                        name            : 'Gross Profit',
                        sign            : -1
                    },
                    serviceRevenue: {
                        type            : 'account',
                        account         : 40250,
                        name            : 'Service Revenue',
                        sign            : -1
                    },
                    operatingExpenses: {
                        type            : 'section',
                        accountRange    : [50350,51800],
                        name            : 'Total Operating Expenses',    
                        sectionName     : 'Operating Expenses',
                        sign            : 1
                    },
                    operatingIncome: {
                        type            : 'sum',
                        name            : 'Operating Income (Loss)',
                        sign            : -1
                    },
                    otherRevenues: {
                        type            : 'section',
                        accountRange    : [60100,70550],
                        sectionName     : 'Other Revenues (Expenses) & Gains (Losses)',
                        name            : 'Total Other Revenues (Expenses) & Gains (Losses)',
                        sign            : -1
                    },
                    incomeBeforeTax: {
                        type            : 'sumWithAccount',
                        account         : 70600,
                        sumName         : 'Income before Income Tax',
                        sign            : -1
                    },
                    netIncome: {
                        type            : 'sum',
                        name            : 'Net Income (Loss)',
                        sign            : -1
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
                    } else if (majorItem.type == 'costOfGoodsSoldSection') {
                        majorItem.merchandiseInventory = periodTotal(solution, 10600);
                        majorItem.purchases = periodTotal(solution, 50150).end;
                        majorItem.purchaseReturns = periodTotal(solution, 50200).end;
                        majorItem.purchaseDiscounts = periodTotal(solution, 50250).end;
                        majorItem.hasPurchaseSubitems = majorItem.purchaseReturns || majorItem.purchaseDiscounts;
                        majorItem.netPurchases = majorItem.purchases + majorItem.purchaseReturns + majorItem.purchaseDiscounts;
                        majorItem.freightIn = periodTotal(solution, 50300).end;
                        majorItem.costOfGoodsPurchased = majorItem.netPurchases + majorItem.freightIn;
                        majorItem.costOfGoodsAvailableForSale = majorItem.merchandiseInventory.start + majorItem.costOfGoodsPurchased;
                        majorItem.costOfGoodsSold = majorItem.costOfGoodsAvailableForSale - majorItem.merchandiseInventory.end;
                    } else if (majorItem.type == 'sumWithAccount') {
                        majorItem.sum = runningTotal;
                        majorItem.accountAmount = periodTotal(solution, majorItem.account).end;
                        runningTotal += majorItem.accountAmount;
                    } else if (majorItem.type == 'section') {
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
                }).filter(function(item){
                    return item.type != 'section' || item.accounts.length > 0;
                }).reduce(function(a,b){
                   // Delete consecutive sums 
                   if (a.last() && a.last().type === 'sum' && b.type === 'sum') a.pop();
                   a.add(b);
                   return a;
                }, []);
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
            }

            function sectionForAccount(n){
                if (n >= 10100 && n < 10800) return 'Current Assets';
                else if (n < 11000)          return 'Long-Term Investments';
                else if (n < 11750)          return 'Property, Plant, and Equipment';
                else if (n < 12050)          return 'Intangible Assets';
                else if (n < 20100)          return 'Other Long-Term Assets';
                else if (n < 21000)          return 'Current Liabilities';
                else if (n < 30100)          return 'Long-Term Liabilities';
                else if (n >= 30400 &&
                         n < 30700)          return "stockholders_equity";
            }

            // Statement of Equity functions

            function periodTotal(solution, accountNumber, n){
                var period = solution.getPeriod(n);
                var openingBalance = solution.problem.accounts[accountNumber].openingBalance || 0;
                var start = function(){
                    if (chartOfAccounts.getAccount(accountNumber).isBalanceZeroed) return 0;
                    else return solution.generalJournal.rows
                        .filter(function(row){
                            return row.date.isBefore(period.start) && row.account == accountNumber;
                        })
                        .map('amount')
                        .sum() + openingBalance || 0;
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
                var startingCapital = periodTotal(solution, 30100, n).start;
                var ownerContribution = solution.generalJournal.periodRows.reduce(function(a,b){
                    return b.account == 30100 && b.amount < 0 ? a - b.amount : a;
                }, 0);
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
