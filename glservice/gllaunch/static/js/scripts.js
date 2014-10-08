"use strict";
angular.module("authoringApp", ["ui.date", "ui.select2", "$strap.directives", "ui.bootstrap"]).config(["$routeProvider", function(a) {
        a.when("/test", {
            templateUrl: "/static/views/main.html",
            controller: "MainCtrl"
        }).when("/", {
            templateUrl: "/static/views/list.html",
            controller: "ListCtrl"
        }).when("/details/:guid", {
            templateUrl: "/static/views/details.html",
            controller: "DetailsCtrl",
            resolve: {
                problem: ["$route", "dataService", function(a, b) {
                    var c = a.current.params.guid;
                    return c ? b.getProblem(c) : void 0
                }],
                solution: ["$route", "dataService", function(a, b) {
                    var c = a.current.params.guid;
                    return c ? b.getSolution(c) : void 0
                }]
            }
        }).otherwise({
            redirectTo: "/"
        })
    }]).value("$strapConfig", {
        datepicker: {
            language: "en",
            format: "M d, yyyy"
        }
    }), angular.module("authoringApp").controller("MainCtrl", ["$scope", function(a) {
        a.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }]), angular.module("authoringApp").controller("ListCtrl", ["$scope", "$location", "$dialog", "dataModel", "dataService", "problemMetadata", function(a, b, c, d, e, f) {
        e.getProblemList().then(function(b) {
            a.problems = b
        }), a.statuses = f.statuses, a.deleteProblem = function(b) {
            var d = "Delete Problem",
                f = "Delete problem " + b.guid + "?",
                g = [{
                    result: !1,
                    label: "Cancel",
                    cssClass: "btn-primary"
                }, {
                    result: !0,
                    label: "Delete"
                }];
            c.messageBox(d, f, g).open().then(function(c) {
                c && e.deleteProblem(b).then(function() {
                    a.problems.remove(b)
                }, function() {
                    alert("There was an error deleting problem " + b.guid)
                })
            })
        }, a.newProblem = function() {
            var a = d.makeGuid();
            b.path("details/" + a)
        }
    }]),
    function() {
        var a = [{
                normalBalance: "Debit",
                number: 10100,
                defaultName: "Cash",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10150,
                defaultName: "Short-term Investments - Trading Securities",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "No specific normal balance {could be either a debit or a credit correctly}. Considered a contra-asset if its end-of-period balance is a credit; Considered an adjunct-asset if its end-of-period balance is a debit.",
                contraAssetOf: 10150,
                number: 10200,
                defaultName: "Fair Value Adjustment - Trading Securites",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Fair Value Adjustment - Trading Securites"
            }, {
                normalBalance: "Debit",
                number: 10250,
                defaultName: "Short-term Investments - Available-for-Sale Securities",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "No specific normal balance {could be either a debit or a credit correctly}. Considered a contra-asset if its end-of-period balance is a credit; Considered an adjunct-asset if its end-of-period balance is a debit.",
                contraAssetOf: 10250,
                number: 10300,
                defaultName: "Fair Value Adjustment - Available-for-Sale Securities , Short-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Fair Value Adjustment - Available-for-Sale Securities , Short-term"
            }, {
                normalBalance: "Debit",
                number: 10350,
                defaultName: "Short-term Investments - Held-to-Maturity Securities",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10400,
                defaultName: "Accounts Receivable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 10400,
                number: 10450,
                defaultName: "Allowance for Bad Debts",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 10500,
                defaultName: "Notes Receivable, Short-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10550,
                defaultName: "Interest Receivable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10600,
                defaultName: "Merchandise Inventory",
                includedInReports: ["balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "incomeStatement.partnership.merchandiserPeriodic", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10650,
                defaultName: "Supplies",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.merchandiserPerpetual"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10700,
                defaultName: "Prepaid Insurance",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.merchandiserPerpetual"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10750,
                defaultName: "Prepaid Rent",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.merchandiserPerpetual"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Asset"
            }, {
                normalBalance: "Debit",
                number: 10800,
                defaultName: "Long-term Investments - Available-for-Sale Securities",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Investment"
            }, {
                normalBalance: "No specific normal balance {could be either a debit or a credit correctly}. Considered a contra-asset if its end-of-period balance is a credit; Considered an adjunct-asset if its end-of-period balance is a debit.",
                contraAssetOf: 10800,
                number: 10850,
                defaultName: "Fair Value Adjustment - Available-for-Sale Securities, Long-term",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Fair Value Adjustment - Available-for-Sale Securities, Long-term"
            }, {
                normalBalance: "Debit",
                number: 10900,
                defaultName: "Long-term Investments - Held-to-Maturity Securities",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Investment"
            }, {
                normalBalance: "Debit",
                number: 10950,
                defaultName: "Long-term Investments - Equity-Method",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Investment"
            }, {
                normalBalance: "Debit",
                number: 11e3,
                defaultName: "Land",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Debit",
                number: 11050,
                defaultName: "Land Improvements",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11050,
                number: 11100,
                defaultName: "Accumulated Depreciation - Land Improvements",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11150,
                defaultName: "Buildings",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11150,
                number: 11200,
                defaultName: "Accumulated Depreciation - Buildings",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11250,
                defaultName: "Equipment",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11250,
                number: 11300,
                defaultName: "Accumulated Depreciation - Equipment",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11350,
                defaultName: "Furniture and Fixtures",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11350,
                number: 11400,
                defaultName: "Accumulated Depreciation - Furniture and Fixtures",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11450,
                defaultName: "Vehicles",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11450,
                number: 11500,
                defaultName: "Accumulated Depreciation - Vehicles",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11550,
                defaultName: "Leasehold Improvements",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11550,
                number: 11600,
                defaultName: "Accumulated Depreciation - Leasehold Improvements",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11650,
                defaultName: "Capital Leases",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Property, Plant, and Equipment"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 11650,
                number: 11700,
                defaultName: "Accumulated Depreciation - Capital Leases",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Asset"
            }, {
                normalBalance: "Debit",
                number: 11750,
                defaultName: "Patents",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 11800,
                defaultName: "Copyrights",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 11850,
                defaultName: "Trademarks",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 11900,
                defaultName: "Franchises",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 11950,
                defaultName: "Leaseholds",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 12e3,
                defaultName: "Goodwill",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Intangible Asset"
            }, {
                normalBalance: "Debit",
                number: 12050,
                defaultName: "Notes Receivable, Long-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Other Long-term Asset"
            }, {
                normalBalance: "Debit",
                number: 12100,
                defaultName: "Other Receivables, Long-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Other Long-term Asset"
            }, {
                normalBalance: "Credit",
                number: 20100,
                defaultName: "Accounts Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20150,
                defaultName: "Notes Payable, Short-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20200,
                defaultName: "Interest Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20250,
                defaultName: "Salaries Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20300,
                defaultName: "Wages Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20350,
                defaultName: "Income Tax Payable",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20400,
                defaultName: "Sales Tax Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20450,
                defaultName: "Estimated Warranty Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20500,
                defaultName: "Unearned Rent Revenue",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20550,
                defaultName: "Unearned Service Revenue",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20600,
                defaultName: "Unearned Sales Revenue",
                includedInReports: ["balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20650,
                defaultName: "Dividends Payable - Preferred",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20700,
                defaultName: "Dividends Payable - Common",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20750,
                defaultName: "Employee Income Taxes Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20800,
                defaultName: "FICA Taxes Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20850,
                defaultName: "Federal Unemployment Taxes Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20900,
                defaultName: "State Unemployment Taxes Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 20950,
                defaultName: "Employee Benefits Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Current Liability"
            }, {
                normalBalance: "Credit",
                number: 21e3,
                defaultName: "Notes Payable, Long-term",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Liability"
            }, {
                normalBalance: "Credit",
                number: 21050,
                defaultName: "Mortgage Payable",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Liability"
            }, {
                normalBalance: "Credit",
                number: 21100,
                defaultName: "Bonds Payable",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Liability"
            }, {
                normalBalance: "Debit",
                contraAssetOf: 21100,
                number: 21150,
                defaultName: "Discount on Bonds Payable",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Liability"
            }, {
                normalBalance: "Credit",
                contraAssetOf: 21100,
                number: 21200,
                defaultName: "Premium on Bonds Payable",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Adjunct-Liability"
            }, {
                normalBalance: "Credit",
                number: 21250,
                defaultName: "Deferred Income Taxes",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Liability"
            }, {
                normalBalance: "Credit",
                number: 21300,
                defaultName: "Capital Lease Liability",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic", "balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic", "balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Long-term Liability"
            }, {
                normalBalance: "Credit",
                number: 30100,
                defaultName: "Proprietor's Last Name, Capital",
                includedInReports: ["balanceSheet.soleProprietorship.service", "balanceSheet.soleProprietorship.service+merchandiserPerpetual", "balanceSheet.soleProprietorship.service+merchandiserPeriodic", "balanceSheet.soleProprietorship.merchandiserPerpetual", "balanceSheet.soleProprietorship.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Proprietor Capital"
            }, {
                normalBalance: "Debit",
                number: 30150,
                defaultName: "Proprietor's Last Name, Withdrawals",
                includedInReports: [],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Proprietor Withdrawals"
            }, {
                normalBalance: "Credit",
                number: 30200,
                defaultName: "Partner #1's Last Name, Capital",
                includedInReports: ["balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic"],
                defaultIncludedIn: ["partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Partner Capital"
            }, {
                normalBalance: "Debit",
                number: 30250,
                defaultName: "Partner #1's Last Name, Withdrawals",
                includedInReports: [],
                defaultIncludedIn: ["partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Partner Withdrawals"
            }, {
                normalBalance: "Credit",
                number: 30300,
                defaultName: "Partner #2's Last Name, Capital",
                includedInReports: ["balanceSheet.partnership.service", "balanceSheet.partnership.service+merchandiserPerpetual", "balanceSheet.partnership.service+merchandiserPeriodic", "balanceSheet.partnership.merchandiserPerpetual", "balanceSheet.partnership.merchandiserPeriodic"],
                defaultIncludedIn: ["partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Partner Capital"
            }, {
                normalBalance: "Debit",
                number: 30350,
                defaultName: "Partner #2's Last Name, Withdrawals",
                includedInReports: [],
                defaultIncludedIn: ["partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Partner Withdrawals"
            }, {
                normalBalance: "Credit",
                number: 30400,
                defaultName: "Preferred Stock",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30450,
                defaultName: "Paid-In Capital in Excess of Par - Preferred",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30500,
                defaultName: "Common Stock",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30550,
                defaultName: "Paid-In Capital in Excess of Par - Common",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30600,
                defaultName: "Paid-In Capital from Treasury Stock Transactions",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30650,
                defaultName: "Common Stock Dividend Distributable",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Credit",
                number: 30700,
                defaultName: "Retained Earnings",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Debit",
                contraAssetOf: 30700,
                number: 30750,
                defaultName: "Treasury Stock",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Contra-Equity"
            }, {
                normalBalance: "Credit",
                number: 30800,
                defaultName: "Accumulated Other Comprehensive Income",
                includedInReports: ["balanceSheet.corporation.service", "balanceSheet.corporation.service+merchandiserPerpetual", "balanceSheet.corporation.service+merchandiserPeriodic", "balanceSheet.corporation.merchandiserPerpetual", "balanceSheet.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !1,
                type: "Stockholders' Equity"
            }, {
                normalBalance: "Debit",
                number: 30850,
                defaultName: "Dividends - Common",
                includedInReports: [],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Dividends - Common"
            }, {
                normalBalance: "Debit",
                number: 30900,
                defaultName: "Dividends - Preferred",
                includedInReports: [],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Dividends - Preferred"
            }, {
                normalBalance: "No specific normal balance.  Used in the Closing Process {isn't reported on any Financial Statements nor the Trial Balance}",
                number: 39950,
                defaultName: "Income Summary",
                includedInReports: [],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Income Summary"
            }, {
                normalBalance: "Credit",
                number: 40100,
                defaultName: "Sales Revenue",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Sales Revenue"
            }, {
                normalBalance: "Debit",
                contraAssetOf: 40100,
                number: 40150,
                defaultName: "Sales Returns and Allowances",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Contra-Revenue"
            }, {
                normalBalance: "Debit",
                contraAssetOf: 40100,
                number: 40200,
                defaultName: "Sales Discounts",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Contra-Revenue"
            }, {
                normalBalance: "Credit",
                number: 40250,
                defaultName: "Service Revenue",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Service Revenue"
            }, {
                normalBalance: "Debit",
                number: 50100,
                defaultName: "Cost of Goods Sold",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.merchandiserPerpetual"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.merchandiserPerpetual", "partnership.service+merchandiserPerpetual", "partnership.merchandiserPerpetual", "corporation.service+merchandiserPerpetual", "corporation.merchandiserPerpetual"],
                isBalanceZeroed: !0,
                type: "Cost of Goods Sold"
            }, {
                normalBalance: "Debit",
                number: 50150,
                defaultName: "Purchases",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Purchases"
            }, {
                normalBalance: "Credit",
                number: 50200,
                defaultName: "Purchase Returns and Allowances",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Purchase Returns and Allowances"
            }, {
                normalBalance: "Credit",
                number: 50250,
                defaultName: "Purchase Discounts",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Purchase Discounts"
            }, {
                normalBalance: "Debit",
                number: 50300,
                defaultName: "Freight In",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Freight In"
            }, {
                normalBalance: "Debit",
                number: 50350,
                defaultName: "Salaries Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50400,
                defaultName: "Wages Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50450,
                defaultName: "Sales Commissions Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50500,
                defaultName: "Advertising Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50550,
                defaultName: "Bad Debts Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50600,
                defaultName: "Delivery Expense / Freight Out",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50650,
                defaultName: "Warranty Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50700,
                defaultName: "Supplies Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50750,
                defaultName: "Insurance Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50800,
                defaultName: "Rent Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50850,
                defaultName: "Utilities Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50900,
                defaultName: "Property Tax Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 50950,
                defaultName: "Credit Card Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51e3,
                defaultName: "Payroll Tax Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51050,
                defaultName: "Employee Benefits Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51100,
                defaultName: "Research and Development",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51150,
                defaultName: "Organization / Start-up Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51200,
                defaultName: "Depreciation Expense - Land Improvements",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51250,
                defaultName: "Depreciation Expense - Buildings",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51300,
                defaultName: "Depreciation Expense - Equipment",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51350,
                defaultName: "Depreciation Expense - Furniture and Fixtures",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51400,
                defaultName: "Depreciation Expense - Vehicles",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51450,
                defaultName: "Depreciation Expense - Leasehold Improvements",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51500,
                defaultName: "Depreciation Expense - Capital Leases",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51550,
                defaultName: "Amortization Expense - Patents",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51600,
                defaultName: "Amortization Expense - Copyrights",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51650,
                defaultName: "Amortization Expense - Trademarks",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51700,
                defaultName: "Amortization Expense - Franchises",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51750,
                defaultName: "Amortization Expense - Leaseholds",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Debit",
                number: 51800,
                defaultName: "Miscellaneous Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Operating Expense"
            }, {
                normalBalance: "Credit",
                number: 60100,
                defaultName: "Interest Revenue",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Revenue"
            }, {
                normalBalance: "Credit",
                number: 60150,
                defaultName: "Dividend Revenue",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Revenue"
            }, {
                normalBalance: "Credit",
                number: 60200,
                defaultName: "Revenue from Investments , Equity Method",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Revenue"
            }, {
                normalBalance: "Credit",
                number: 60250,
                defaultName: "Unrealized Holding Gain on Trading Securities",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60300,
                defaultName: "Gain on Sale of Investments",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60350,
                defaultName: "Gain on Disposal of Land",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60400,
                defaultName: "Gain on Disposal of Building",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60450,
                defaultName: "Gain on Disposal of Equipment",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60500,
                defaultName: "Gain on Disposal of Furniture and Fixtures",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60550,
                defaultName: "Gain on Disposal of Vehicles",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Credit",
                number: 60600,
                defaultName: "Foreign Currency Transaction Gain",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Gain"
            }, {
                normalBalance: "Debit",
                number: 70100,
                defaultName: "Interest Expense",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Expense"
            }, {
                normalBalance: "Debit",
                number: 70150,
                defaultName: "Unrealized Holding Loss on Trading Securities",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70200,
                defaultName: "Loss on Sale of Investments",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70250,
                defaultName: "Loss on Disposal of Land",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70300,
                defaultName: "Loss on Disposal of Building",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70350,
                defaultName: "Loss on Disposal of Equipment",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70400,
                defaultName: "Loss on Disposal of Furniture and Fixtures",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70450,
                defaultName: "Loss on Disposal of Vehicles",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70500,
                defaultName: "Loss on Impairment",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70550,
                defaultName: "Foreign Currency Transaction Loss",
                includedInReports: ["incomeStatement.soleProprietorship.service", "incomeStatement.soleProprietorship.service+merchandiserPerpetual", "incomeStatement.soleProprietorship.service+merchandiserPeriodic", "incomeStatement.soleProprietorship.merchandiserPerpetual", "incomeStatement.soleProprietorship.merchandiserPeriodic", "incomeStatement.partnership.service", "incomeStatement.partnership.service+merchandiserPerpetual", "incomeStatement.partnership.service+merchandiserPeriodic", "incomeStatement.partnership.merchandiserPerpetual", "incomeStatement.partnership.merchandiserPeriodic", "incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["soleProprietorship.service", "soleProprietorship.service+merchandiserPerpetual", "soleProprietorship.service+merchandiserPeriodic", "soleProprietorship.merchandiserPerpetual", "soleProprietorship.merchandiserPeriodic", "partnership.service", "partnership.service+merchandiserPerpetual", "partnership.service+merchandiserPeriodic", "partnership.merchandiserPerpetual", "partnership.merchandiserPeriodic", "corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Loss"
            }, {
                normalBalance: "Debit",
                number: 70600,
                defaultName: "Income Tax Expense",
                includedInReports: ["incomeStatement.corporation.service", "incomeStatement.corporation.service+merchandiserPerpetual", "incomeStatement.corporation.service+merchandiserPeriodic", "incomeStatement.corporation.merchandiserPerpetual", "incomeStatement.corporation.merchandiserPeriodic"],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Income Tax Expense"
            }, {
                normalBalance: "Credit",
                number: 80100,
                defaultName: "Unrealized Holding Gain on Available-for-Sale Securities",
                includedInReports: [],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Comprehensive Income"
            }, {
                normalBalance: "Debit",
                number: 80150,
                defaultName: "Unrealized Holding Loss on Available-for-Sale Securities",
                includedInReports: [],
                defaultIncludedIn: ["corporation.service", "corporation.service+merchandiserPerpetual", "corporation.service+merchandiserPeriodic", "corporation.merchandiserPerpetual", "corporation.merchandiserPeriodic"],
                isBalanceZeroed: !0,
                type: "Other Comprehensive Income"
            }],
            b = a.reduce(function(a, b) {
                return a[b.number] = b, a
            }, {});
        angular.module("authoringApp").constant("chartOfAccounts", {
            accountList: a,
            getAccount: function(a) {
                return b[parseInt(a, 10)]
            }
        })
    }(), angular.module("authoringApp").service("dataModel", ["chartOfAccounts", function(a) {
        function b(a) {
            return a.format("{yyyy}-{MM}-{dd}")
        }

        function c() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }

        function d(b, d) {
            d || (d = {}), this.guid = b || c(), this.title = d.title || "", this.background = d.background || "", this.instructions = d.instructions || "", this.company = d.company || "", this.ownerType = d.ownerType || "soleProprietorship", this.companyType = d.companyType || "service", d.period || (d.period = {}), this.period = {
                start: Date.create(d.period.start || "this month"),
                length: parseInt(d.period.length, 10) || 1
            }, d.events || (d.events = []), this.events = d.events.map(function(a) {
                var b = 1;
                return {
                    id: a.id || b++,
                    date: Date.create(a.date),
                    item: a.item
                }
            }), this.accounts = d.accounts && d.accounts[10100] ? d.accounts : a.accountList.reduce(function(a, b) {
                return a[b.number] = {
                    isIncluded: !0,
                    openingBalance: 0,
                    name: b.defaultName
                }, a
            }, {}), this.reportsHidden = d.reportsHidden || {}, this.status = d.status, this.book = d.book || "", this.chapter = d.chapter || "", this.learningObjective = d.learningObjective || ""
        }

        function e(a, b) {
            this.guid = a || c(), b || (b = []), this.rows = b.map(function(a) {
                return new g(a)
            }), this._txMap = Object.map(this.rows.groupBy("transactionId"), function(a, b) {
                return new f(b)
            }), this.transactions = Object.values(this._txMap)
        }

        function f(a) {
            this.rows = a
        }

        function g(a) {
            this.transactionId = parseInt(a.transactionId, 10), this.subTransactionId = parseInt(a.subTransactionId, 10), this.date = Date.create(a.date), this.account = parseInt(a.account, 10), this.amount = a.debit ? parseInt(a.debit, 10) : a.credit ? parseInt(-a.credit, 10) : a.amount ? parseInt(a.amount, 10) : void 0
        }
        this.makeGuid = c, this.Problem = d, this.Solution = e, this.JournalRow = g, d.prototype = {
            toJSON: function() {
                var a = Object.clone(this, !0);
                return a.period.start = b(this.period.start), a.events.each(function(a) {
                    a.date = b(a.date)
                }), a
            },
            newEvent: function(a) {
                var b = this.events.map("id").max() || 1,
                    c = b + 1,
                    d = {
                        id: c,
                        date: a,
                        item: ""
                    };
                this.events.add(d)
            },
            deleteEvent: function(a) {
                this.events.remove(a)
            }
        }, e.prototype = {
            newTransaction: function(a) {
                var b = this.rows.map("transactionId").max() || 1,
                    c = b + 1,
                    d = [new g({
                        date: a,
                        transactionId: c,
                        subTransactionId: 1
                    }), new g({
                        date: a,
                        transactionId: c,
                        subTransactionId: 2
                    })],
                    e = new f(d);
                return this._txMap[c] = e, this.transactions.add(e), this.rows.add(d), e
            },
            newTransactionRow: function(a) {
                var b = a.rows.map("subTransactionId").max() || 1,
                    c = b + 1,
                    d = new g({
                        date: a.date,
                        transactionId: a.id,
                        subTransactionId: c
                    });
                return a.rows.add(d), this.rows.add(d), d
            },
            deleteTransaction: function(a) {
                this.transactions.remove(a), Array.prototype.remove.apply(this.rows, a.rows)
            },
            deleteTransactionRow: function(a, b) {
                a.rows.remove(b), this.rows.remove(b), a.rows.isEmpty() && this.transactions.remove(a)
            },
            toJSON: function() {
                return console.log("toJSON called"), this.rows
            }
        }, f.prototype = {get id() {
                return this.rows[0].transactionId
            },
            get date() {
                return this.rows[0].date
            },
            set date(a) {
                this.rows.each(function(b) {
                    b.date = a
                })
            }
        }, g.prototype = {
            toJSON: function() {
                var a = Object.clone(this, !0);
                return a.date = b(this.date), a
            },
            get debit() {
                return this.amount >= 0 ? this.amount : void 0
            },
            get credit() {
                return this.amount < 0 ? -this.amount : void 0
            },
            set debit(a) {
                this.amount = a
            },
            set credit(a) {
                this.amount = -a
            }
        }
    }]), angular.module("authoringApp").service("dataService", ["$q", "$http", "dataModel", function(a, b, c) {
        var d = "/gldata/";
        this.getProblemList = function() {
            return b.get(d + "get_problem_list/").then(function(a) {
                return a.data
            })
        }, this.getProblem = function(a) {
            return b.get(d + "get_problem/" + a + "/").then(function(b) {
                return new c.Problem(a, b.data)
            }, function() {
                return new c.Problem(a)
            })
        }, this.putProblem = function(a) {
            return b.post(d + "put_problem_definition/" + a.guid + "/", a).then(function() {
                console.log("Successfully saved problem " + a.guid)
            }, function(b) {
                console.log("Error saving problem " + a.guid), console.log(b)
            })
        }, this.deleteProblem = function(a) {
            return b.post(d + "delete_problem_definition/" + a.guid + "/", a).then(function() {
                console.log("Successfully deleted problem " + a.guid)
            }, function(b) {
                console.log("Error deleting problem " + a.guid), console.log(b)
            })
        }, this.getSolution = function(a) {
            return b.get(d + "get_problem_definition/" + a + "/").then(function(b) {
                return new c.Solution(a, b.data.correct_data)
            }, function() {
                return new c.Solution(a)
            })
        }, this.putSolution = function(c) {
            return b.post(d + "put_solution/" + c.guid + "/", c).then(function() {
                console.log("Successfully saved solution " + c.guid)
            }, function(b) {
                return console.log("Error saving solution " + c.guid), console.log(b), a.reject(b)
            })
        }, this.putProblemAndSolution = function(a, c) {
            return b.post(d + "put_problem_and_solution/" + a.guid + "/", {
                problem: a,
                solution: c
            }).then(function() {
                console.log("Successfully saved problem " + a.guid)
            }, function(b) {
                console.log("Error saving problem " + a.guid), console.log(b)
            })
        }
    }]), angular.module("authoringApp").constant("problemMetadata", {
        statuses: Object.extended({
            1: "In development",
            2: "QA - accuracy",
            3: "QA - functionality",
            4: "Ready to publish",
            5: "Live",
            6: "Ready to update live",
            7: "Not suitable"
        })
    }), angular.module("authoringApp").controller("DetailsCtrl", ["$scope", "dataService", "problem", "solution", "chartOfAccounts", "problemMetadata", function(a, b, c, d, e, f) {
        var g, h;
        a.problem = c, a.solution = d, a.chartOfAccounts = e, a.statuses = f.statuses, a.save = function() {
            b.putProblemAndSolution(c, d).then(function() {
                g = angular.copy(c), h = angular.copy(d)
            })
        }, a.newEvent = function() {
            var a = c.events.map("date").max("valueOf");
            c.newEvent(a || c.period.start)
        }, a.deleteEvent = function(a) {
            c.deleteEvent(a)
        }, a.newTransaction = function() {
            var a = d.transactions.map("date").max("valueOf");
            d.newTransaction(a || c.period.start)
        }, a.newTransactionRow = function(a) {
            d.newTransactionRow(a)
        }, a.deleteTransactionRow = function(a, b) {
            a.rows.length <= 2 ? d.deleteTransaction(a) : d.deleteTransactionRow(a, b)
        }, a.selectNone = function() {
            e.accountList.each(function(a) {
                c.accounts[a.number].isIncluded = !1
            })
        }, a.selectAll = function() {
            e.accountList.each(function(a) {
                c.accounts[a.number].isIncluded = !0
            })
        }, a.defaultIncludedAccounts = function() {
            var a = c.ownerType + "." + c.companyType;
            e.accountList.each(function(b) {
                c.accounts[b.number].isIncluded = b.defaultIncludedIn.some(a)
            })
        }, a.defaultAccountNames = function() {
            e.accountList.each(function(a) {
                c.accounts[a.number].name = a.defaultName
            })
        }, a.zeroInitialBalances = function() {
            Object.each(c.accounts, function(a, b) {
                b.openingBalance = 0
            })
        }, a.accountIncludedInProblem = function(a) {
            return c.accounts[a.number].isIncluded
        }, a.isDataSaved = function() {
            return angular.equals(c, g) && angular.equals(d, h)
        }
    }]), angular.module("authoringApp").directive("jwysiwyg", ["$timeout", function(a) {
        return {
            require: "?ngModel",
            link: function(b, c, d, e) {
                a(function() {
                    c.wysiwyg({
                        css: "styles/jwysiwyg.css",
                        controls: {
                            h1: {
                                visible: !1
                            },
                            h2: {
                                visible: !1
                            },
                            h3: {
                                visible: !1
                            },
                            createLink: {
                                visible: !1
                            },
                            unLink: {
                                visible: !1
                            },
                            insertImage: {
                                visible: !1
                            },
                            code: {
                                visible: !1
                            },
                            insertHorizontalRule: {
                                visible: !1
                            },
                            insertTable: {
                                visible: !1
                            },
                            decreaseFontSize: {
                                visible: !0
                            },
                            increaseFontSize: {
                                visible: !0
                            }
                        },
                        autoGrow: !0,
                        initialContent: e.$viewValue || ""
                    }), c.bind("change", function(a) {
                        e.$setViewValue(a.currentTarget.value)
                    })
                }), e.$render = function() {
                    c.wysiwyg("setContent", e.$viewValue || "")
                }
            }
        }
    }]), angular.module("authoringApp").directive("initFocus", function() {
        return {
            restrict: "A",
            link: function(a, b) {
                b.focus()
            }
        }
    }), angular.module("authoringApp").directive("whenVisible", ["$window", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                var e = angular.element(a);
                e.bind("scroll", function() {
                    var a = e.scrollTop(),
                        f = a + e.height(),
                        g = c.offset().top,
                        h = g + c.height(),
                        i = g > a && f > g || h > a && f > h || a > g && h > f;
                    b.$apply(function() {
                        b[d.whenVisible] = i
                    })
                })
            }
        }
    }]);