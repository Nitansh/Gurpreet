(function(){
	'use strict';

	angular.module('generalLedger').controller('ReportsController', controller);

	function controller($scope, $state) {
		$scope.$watch('solution.currentPeriodNumber', function(){
			var accounts = $scope.problem.accounts;
			var currentPeriod = $scope.solution.getCurrentPeriod();
			var periodLengths = {
				1: 'Month',
				2: '2 Months',
				3: 'Quarter',
				4: '4 Months',
				5: '5 Months',
				6: '6 Months',
				7: '7 Months',
				8: '8 Months',
				9: '9 Months',
				10: '10 Months',
				11: '11 Months',
				12: 'Year',
			};
			$scope.periodEndedLine = periodLengths[$scope.problem.period.length] + ' Ended ' + currentPeriod.end.short();
			$scope.generalJournal = $scope.solution.generalJournal.rows.filter(function(row){
				var t = row.date.isBetween(currentPeriod.start, currentPeriod.end, 1);
				return t;
			});
			$scope.cashIsCredit = false; // oh god!! please stop it!

			// IncomeStatementController
			$scope.expenses = {};
			$scope.expenses.sections = [
				{
						title: 'Operating Expenses', 
						accounts: [] // we'll fill this in below...
				},
				
				];		
					
			for (var acct = 50350; acct<=51800; acct += 50) {
				$scope.expenses.sections[0].accounts.push(String(acct));
			}
			
			$scope.other = {}
			$scope.other.sections = [
				{
						title: 'Other Revenues and Gains', 
						accounts: [], // we'll fill this in below...
						sectionSign: -1
				},
				
				{
						title: 'Other Expenses and Losses',
						accounts: [], // we'll fill this in below...
						sectionSign: 1
				}
					
			];
			
			for (var acct = 60100; acct<=60600; acct += 50) {
				$scope.other.sections[0].accounts.push(String(acct));
			}

			for (var acct = 70100; acct<=70550; acct += 50) {
				$scope.other.sections[1].accounts.push(String(acct));
			}

			$scope.totalForCategory = function (category) {
				var tot = 0;
				for (var i in category.sections) {
					tot += $scope.totalForAcct(category.sections[i].accounts);
				}
				return tot;
			};

			$scope.totalForAcct = function(acct_number, entryType) {
				if (typeof entryType==undefined) entryType = '';
					
				var asNum = function(v) {
					v = String(v);
					if (v.indexOf('.')>=0) {
						console.log('* "'+v+'" *'+parseFloat(v));
					}
					v = parseFloat(v);
					if (isNaN(v)) {
						return 0;
					} else {
						return v;
					}
				}

				var tot = 0;
			
				if (typeof acct_number=='string') {
				
					for (var i in $scope.generalJournal) {
						var entry = $scope.generalJournal[i];
						if (entry.account.indexOf(acct_number)==0) {
							var deb = asNum(entry.debit);
							var cred = asNum(entry.credit);
							switch (entryType) {
								case 'debit':
									tot += -deb;
									break;
								case 'credit':
									tot += cred;
									break;
								default:
									tot += (cred - deb);
									break;
							}
						}
					}
					if (!$scope.cashIsCredit) {
						// Eventually, this should be removed; it represents my initial confusion about whether Cash is a Credit or Debit account
						// I now know that it is, in fact, a DEBIT account; which inverts the sign of everything I was doing before...
						tot = -tot;
					}
				} else {
					for (var acct in acct_number) {
						tot += $scope.totalForAcct(acct_number[acct], entryType);
					}
				}

				return tot;
			};
		
			// Trial balance for account
			var usedAccounts = [];
			for (var i in $scope.generalJournal) {
				var entry = $scope.generalJournal[i];
				var acct_number = entry.account.split(' - ')[0];
				if (usedAccounts.indexOf(acct_number)<0) usedAccounts.push(acct_number);
			}
			usedAccounts.sort();
			$scope.usedAccounts = usedAccounts;
			
			$scope.totalForAcct = function(acct_number, entryType) {
				if (typeof entryType==undefined) entryType = '';
					
				var asNum = function(v) {
					v = String(v);
					if (v.indexOf('.')>=0) {
						console.log('* "'+v+'" *'+parseFloat(v));
					}
					v = parseFloat(v);
					if (isNaN(v)) {
						return 0;
					} else {
						return v;
					}
				}

				var tot = 0;
		
				if (typeof acct_number=='string') {
				
					for (var i in $scope.generalJournal) {
						var entry = $scope.generalJournal[i];
						if (entry.account.indexOf(acct_number)==0) {
							var deb = asNum(entry.debit);
							var cred = asNum(entry.credit);
							switch (entryType) {
								case 'debit':
									tot += -deb;
									break;
								case 'credit':
									tot += cred;
									break;
								default:
									tot += (cred - deb);
									break;
							}
						}
					}
					if (!$scope.cashIsCredit) {
						// Eventually, this should be removed; it represents my initial confusion about whether Cash is a Credit or Debit account
						// I now know that it is, in fact, a DEBIT account; which inverts the sign of everything I was doing before...
						tot = -tot;
					}
				} else {
					for (var acct in acct_number) {
						tot += $scope.totalForAcct(acct_number[acct], entryType);
					}
				}

				return tot;
			}

			$scope.totalDebitsForAccount = function(acct_number) {
				if ($scope.totalForAcct(acct_number) > 0) {
					return $scope.totalForAcct(acct_number);
				} else {
					return 0;
				}
				
				var tot = 0;
				for (var i in $scope.generalJournal) {
					var entry = $scope.generalJournal[i];
					if (entry.account.split(' - ')[0]==acct_number) {
						if (entry.debit!='') {
							var val = parseFloat(entry.debit);
							if (!isNaN(val)) {
								tot += val;
							}
						}
					}
				}
				
				return tot;
			}
			
			$scope.totalCreditsForAccount = function(acct_number) {
				if ($scope.totalForAcct(acct_number) < 0) {
					return -$scope.totalForAcct(acct_number);
				} else {
					return 0;
				}
				
				var tot = 0;
				for (var i in $scope.generalJournal) {
					var entry = $scope.generalJournal[i];
					if (entry.account.split(' - ')[0]==acct_number) {
						if (entry.credit!='') {
							var val = parseFloat(entry.credit);
							if (!isNaN(val)) {
								tot += val;
							}
						}
					}
				}
				
				return tot;
			}
			
			$scope.totalDebits = function() {
				var tot = 0;
				for (var i in $scope.usedAccounts) {
					tot += $scope.totalDebitsForAccount($scope.usedAccounts[i]);
				}
				return tot;
			}
			
			$scope.totalCredits = function() {
				var tot = 0;
				for (var i in $scope.usedAccounts) {
					tot += $scope.totalCreditsForAccount($scope.usedAccounts[i]);
				}
				return tot;
			}

			$scope.numberForAccount = function (acct_name) {
				for (var i in accounts.fullChart) {
					if (accounts.fullChart[i].acct_name.toLowerCase().indexOf(acct_name.toLowerCase())==0) {
						return i;
					}
				}
				return '"'+acct_name+'" unknown account!';
			};

			$scope.nameForAccount = function (acct_number) {
				return accounts[acct_number].name;
			}

			// GeneralLedgerController
			$scope.startingBalance = function(acct_number, entryType) {
				return -$scope.solution.balanceAtDate(currentPeriod.start, acct_number);
			}

			var glRows = {};
			for (var i in $scope.generalJournal) {
				var entry = $scope.generalJournal[i];
				
				var acct_number = entry.account.split(' - ')[0];
				var acct_name = entry.account.split(' - ').slice(1).join(' - ');
				if (acct_number==null || acct_number=="") {
					continue;
				}
				var glAccount;
				if (glRows[acct_number]==null) {
					glRows[acct_number] = {};
					glAccount = glRows[acct_number];
					glAccount.acct_number = acct_number;
					glAccount.acct_name = acct_name;
					glAccount.startingBalance = $scope.startingBalance(acct_number);
					glAccount.balance = glAccount.startingBalance;
					if (! glAccount.balance) {
						glAccount.debit = '–';
						glAccount.credit = '–';
					} else if (glAccount.balance < 0) {
						glAccount.debit = -glAccount.balance;
						glAccount.credit = '';
					} else if (glAccount.balance > 0) {
						glAccount.debit = '';
						glAccount.credit = glAccount.balance;
					}
					glAccount.entries = [];
				}
				
				var glAccount = glRows[acct_number];
			
				var newEntry = {date: entry.date, debit: entry.debit, credit: entry.credit};
				if (newEntry.debit) {
					glAccount.balance -= parseFloat(newEntry.debit);
				} else {
					glAccount.balance += parseFloat(newEntry.credit);
				}
				newEntry.balance = glAccount.balance;
				if (newEntry.balance<0) {
					newEntry.balanceDebit = -newEntry.balance;
					newEntry.balanceCredit = '';
				} else {
					newEntry.balanceDebit = ''; 
					newEntry.balanceCredit = (newEntry.balance>0 ? newEntry.balance : '–');
				}
				glAccount.entries.push(newEntry);
				
				
			}
			
			$scope.glRows = glRows;

			$scope.netIncome = function() {
				return -$scope.totalForAcct('40250')-$scope.totalForCategory($scope.expenses)-$scope.totalForCategory($scope.other);
			}
			
			$scope.newOEBalance = function() {
				return -$scope.startingBalance('30100')-$scope.totalForAcct('30100', 'credit')+$scope.netIncome()-$scope.totalForAcct('30150');
			}
			

			// CashFlowController
			$scope.sections = {
				
			};
			
			$scope.entryAsNum = function(v) {
				v = String(v);
				if (v.indexOf('.')>=0) {
					console.log('* "'+v+'" *'+parseFloat(v));
				}
				v = parseFloat(v);
				if (isNaN(v)) {
					return 0;
				} else {
					return v;
				}
			};

			$scope.cashTotalTransactionsForAcct = function(acct_number) {
				// find all transactions for the indicated account...
				var trans = [];
				var transAmount = [];
				for (var i in $scope.generalJournal) {
						var entry = $scope.generalJournal[i];
						if (entry.account.indexOf(acct_number)==0) {
							trans.push(String(entry.transactionId));
							transAmount.push($scope.entryAsNum(entry.debit) - $scope.entryAsNum(entry.credit));
						}
				}

				// next find all cash transactions in that same set of transactions...
				var tot = 0;
				for (var i in $scope.generalJournal) {
					var entry = $scope.generalJournal[i];
					if (entry.account.indexOf('10100')==0 && trans.indexOf(String(entry.transactionId))>=0) {
						var v = $scope.entryAsNum(entry.debit) - $scope.entryAsNum(entry.credit);
						if (v * transAmount[trans.indexOf(String(entry.transactionId))] < 0) {
							// then they are opposing signs, and this represents a transfer between the cash account and acct_number
							tot += v;
						}
					}
				}
				
				return tot;
			}
			
			$scope.cashTotalForAccts = function(acct_list) {
				var tot = 0;
				for (var i in acct_list) {
					tot += $scope.cashTotalTransactionsForAcct(acct_list[i]);
				}
				return tot;
			}
			
			function generateSection(acct_list) {
				var items = [];
				for (var i in acct_list) {
					var acct = acct_list[i];
					var amount = $scope.cashTotalTransactionsForAcct(acct);
					if (amount!=0) {
						items.push({title: $scope.nameForAccount(acct), amount:amount});
					}
				}
				return items;
			}
			
			function generateSubtotal(section) {
				var tot = 0;
				for (var i in section) {
					tot += section[i].amount;
				}
				return tot;
			}

			$scope.receipts = {title: 'Collections from customers', amount:$scope.cashTotalForAccts(['40250', '40100', '10400'])};
			
			$scope.paymentAccounts = ['10650', '10700', '10750', '50100', '50350', '50400', '50450', '50500', '50550', '50600', '50650', '50700', '50750',
																'50800', '50850', '50900', '50950', '51000', '51050'];
			$scope.investingAccounts = ['11000', '11050', '11150', '11250', '11350', '11450', '11550', '11650','10150', '10250', '10350',
																			'70100'];
			$scope.financingAccounts = ['30100', '30150', '30200', '30250', '30300', '30350'];
			
			$scope.payments = generateSection($scope.paymentAccounts);
			$scope.investing = generateSection($scope.investingAccounts);
			$scope.financing = generateSection($scope.financingAccounts);
			
			$scope.paymentsTotal = generateSubtotal($scope.payments);
			$scope.investingTotal = generateSubtotal($scope.investing);
			$scope.financingTotal = generateSubtotal($scope.financing);

			// BalanceSheetController
			$scope.assets = {};
			$scope.assets.sections = [
					{
							title: 'Current Assets', 
							accounts: ['10100', ['10150', '10200'], ['10250', '10300'], '10350', ['10400', '10450'], '10500', '10550', '10650', '10700', '10750']
					},
					
					{
							title: 'Long Term Investments',
							accounts: ['10900', '10950']
					},
					{
							title: 'Property, Plant, and Equipment',
							accounts: ['11000', ['11050', '11100'], ['11150', '11200'], ['11250', '11300'], ['11350', '11400'], ['11450', '11500'], ['11550', '11600'],
													['11650', '11700']]  
					},
					{
							title: 'Intangible Assets',
							accounts: ['11750', '11800', '11850', '11900', '11950', '12000']
					},
					{
							title: 'Other Long-Term Assets',
							accounts: ['12050', '12100']
					}
			];
			
			$scope.liabilities = {};
			$scope.liabilities.sections = [
					{
							title: 'Current Liabilities',
							accounts: ['20100', '20150', '20200', '20250', '20300', '20350', '20400', '20500', '20550', '20750', '20800', '20850', '20900', '20950']  
					},
					{
							title: 'Long-Term Liabilities',
							accounts: ['21000', '21050', '21300']
					}
			];
			
			$scope.totalForCategory = function (category) {
				var tot = 0;
				for (var i in category.sections) {
					tot += $scope.totalForAcct(category.sections[i].accounts);
				}
				return tot;
			};
			
			$scope.multiAccount = function(acct) {
				return typeof acct != 'string';
			};
			
			$scope.proprietorCapital = function() {
				var tot = 0;
				tot += $scope.totalForAcct(['30100', '30150']); // propietor's Captial/Withdrawl
				// we'd need to caluclate the Income profit/loss here; haven't done that yet...
				return tot;	
			}
		});
	}
}());