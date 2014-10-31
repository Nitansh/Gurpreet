'use strict';

angular.module('authoringApp').service('dataModel',
  ['chartOfAccounts',
  function dataModel(chartOfAccounts) {
    this.makeGuid = makeGuid;
    this.Problem = Problem;
    this.Solution = Solution;
    this.JournalRow = JournalRow;

    function stringifyDate(date){
      return date.format('{yyyy}-{MM}-{dd}');
    }

    function makeGuid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
             s4() + '-' + s4() + s4() + s4();
    }

    function Problem(guid, jso){
      if (!jso) jso = {}
      this.guid           = guid || makeGuid();
      this.title          = jso.title || '';
      this.background     = jso.background || '';
      this.instructions   = jso.instructions || '';
      this.company        = jso.company || '';
      this.ownerType      = jso.ownerType || 'soleProprietorship';
      this.companyType    = jso.companyType || 'service';
      if (! jso.period) jso.period = {};
      this.period = {
        start             : Date.create(jso.period.start || 'this month'),
        length            : parseInt(jso.period.length, 10) || 1
      };
      if (! jso.events) jso.events = [];
      this.events         = jso.events.map(function(e){
        var id = 1;
        return {
          id              : e.id || id++,
          date            : Date.create(e.date),
          item            : e.item
        };
      });
      this.accounts = jso.accounts && jso.accounts[10100] ? jso.accounts :
                      chartOfAccounts.accountList.reduce(function(a,b){
        a[b.number] = {
          isIncluded: true,
          openingBalance: 0,
          name: b.defaultName
        };
        return a;
      }, {});
      this.reportsHidden  = jso.reportsHidden || {};
      this.status = jso.status;
      this.book = jso.book || '';
      this.chapter = jso.chapter || '';
      this.learningObjective = jso.learningObjective || '';
    }
    Problem.prototype = {
      toJSON: function(){
        var copy = Object.clone(this, true);
        copy.period.start = stringifyDate(this.period.start);
        copy.events.each(function(event){
          event.date = stringifyDate(event.date);
        });
        return copy;
      },
      newEvent: function(date){
        var lastId = this.events.map('id').max() || 1;
        var newId = lastId + 1;
        var newEvent = {
          id    : newId,
          date  : date,
          item  : ''
        };
        this.events.add(newEvent);
      },
      deleteEvent: function(event){
        this.events.remove(event);
      }
    };

    Solution.prototype = {
      newTransaction: function(date){
        var lastId = this.rows.map('transactionId').max() || 1;
        var id = lastId + 1;
        var rows = [
          new JournalRow({
            date            : date,
            transactionId   : id,
            subTransactionId: 1
          }),
          new JournalRow({
            date            : date,
            transactionId   : id,
            subTransactionId: 2
          })
        ]
        var newTx = new Transaction(rows);
        this._txMap[id] = newTx;
        this.transactions.add(newTx);
        this.rows.add(rows);
        return newTx;
      },
      newTransactionRow: function(transaction){
        var lastId = transaction.rows.map('subTransactionId').max() || 1;
        var id = lastId + 1;
        var newRow = new JournalRow({
          date            : transaction.date,
          transactionId   : transaction.id,
          subTransactionId: id
        });
        transaction.rows.add(newRow);
        this.rows.add(newRow);
        return newRow;
      },
      deleteTransaction: function(transaction){
        this.transactions.remove(transaction);
        Array.prototype.remove.apply(this.rows, transaction.rows);
      },
      deleteTransactionRow: function(transaction, row){
        transaction.rows.remove(row);
        this.rows.remove(row);
        if (transaction.rows.isEmpty()) {
          this.transactions.remove(transaction);
        }
      },
      toJSON: function(){
        console.log('toJSON called');
        return this.rows;
      }
    };
    function Solution(guid, jso){
      this.guid = guid || makeGuid();
      if (! jso) jso = [];
      this.rows = jso.map(function(rowJso){
        return new JournalRow(rowJso);
      });
      this._txMap = Object.map(this.rows.groupBy('transactionId'), function(id,rows) {
        return new Transaction(rows);
      });
      this.transactions = Object.values(this._txMap);
    }
    Transaction.prototype = {
      get id() {
        return this.rows[0].transactionId;
      },
      get date() {
        return this.rows[0].date;
      },
      set date(d) {
        this.rows.each(function(row){
          row.date = d;
        });
      }
    };
    function Transaction(rows){
      this.rows = rows;
    }
    JournalRow.prototype = {
      toJSON: function(){
        var copy = Object.clone(this, true);
        copy.date = stringifyDate(this.date);
        return copy;
      },
      get debit(){
        if (this.amount >= 0) {
          return this.amount;
        }
      },
      get credit(){
        if (this.amount < 0) {
          return -this.amount;
        }
      },
      set debit(amount){
        this.amount = amount;
      },
      set credit(amount){
        this.amount = -amount;
      }
      // get isDebit(){
      //   return !!this.debit;
      // },
      // get isCredit(){
      //   return !!this.credit;
      // }
    };
    function JournalRow(jso){
      this.transactionId      = parseInt(jso.transactionId, 10);
      this.subTransactionId   = parseInt(jso.subTransactionId, 10);
      this.date               = Date.create(jso.date);
      this.account            = parseInt(jso.account, 10);
      // If jso has amount, use that. Otherwise use debit/credit.
      this.amount             = jso.debit ? parseInt(jso.debit, 10)
                              : jso.credit ? parseInt(-jso.credit, 10)
                              : jso.amount ? parseInt(jso.amount, 10)
                              : undefined;
    }
  }]
);
