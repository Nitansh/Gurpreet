(function() {
    'use strict';

    angular.module('generalLedger')

        .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }])

        .filter('bsNumber', function() {
            return function(text, kind) {

                // Chas code: remove $ and , from input
                text = String(text).replace(/\$/g, '').replace(/,/g, '');
                if (text.length===0 || isNaN(parseFloat(text))) {
                    return text;
                }

                // Chas code: log the input if there is a decimal???????
                // if (text.indexOf('.')>=0) {
                //     console.log('*** '+text+' ***');
                // }
                // var val = parseFloat(text);
                // var sgn = val<0 ? -1 : 1;
                // val = Math.round(100*(Math.abs(val)));


                // Chas code: it looks like we are separating dollars and cents.
                // var cents = val % 100;
                // var dolls = (val - cents)/100;

                // Chas code only put in one comma... updating to support multiple commas
                // dolls = String(dolls);
                // if (dolls.length>3) {
                //     dolls = dolls.slice(0,-3)+','+dolls.slice(-3);
                // }

                // if (cents<10) {
                //     cents = '0'+cents;
                // }
                // var res = dolls+'.'+cents;
                var num = parseFloat(text);

                if (num<0) {
                    return "("+(-num).format()+")";
                } else {
                    return num.format();
                }
            };
        })

        .filter('blankIfZero', function(){
            return function(text, sub) {
                if (sub === undefined) sub = '';
                if (isNaN(parseFloat(text)) || parseFloat(text)===0) return sub;
                return text;
            };
        })

        .filter('debit', function($filter){
            return function(amount, sub){
                if (sub === undefined) sub = '';
                if (amount < 0) return '';
                else if (amount === 0) return sub;
                else return $filter('bsNumber')(amount);
            }
        })

        .filter('credit', function($filter){
            return function(amount, sub){
                if (sub === undefined) sub = '';
                if (amount > 0) return '';
                else if (amount === 0) return sub;
                else return $filter('bsNumber')(-amount);
            }
        })
        
        .filter('dateFormat', function() {
            return function(date){ 
                if (!date)
                    return 'no date';
                if (_(date).isString())
                    date = new Date(date);

                var m = date.getMonth()+1; // why???
                if (m<10) m = '0'+m;
                var d = date.getDate(); // why???
                if (d<10) d = '0'+d;

                return m+'/'+d+'/'+date.getFullYear();
            };
        })
    ;
}());