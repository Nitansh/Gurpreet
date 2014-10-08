! function() {
    function a(a) {
        return function() {
            return a
        }
    }

    function b(a) {
        var b, c;
        return /String|Number|Boolean/.test(a) && (b = a.toLowerCase()), c = "Array" === a && Fb.isArray || function(c) {
            return b && typeof c === b ? Bb : Lb.call(c) === "[object " + a + "]"
        }, Nb[a] = c
    }

    function c(a) {
        a.SugarMethods || (h(a, "SugarMethods", {}), d(a, Db, Db, {
            extend: function(b, c, e) {
                d(a, e !== Db, c, b)
            },
            sugarRestore: function() {
                return f(a, arguments, function(a, b, c) {
                    h(a, b, c.method)
                })
            },
            sugarRevert: function() {
                return f(a, arguments, function(a, b, c) {
                    c.qa ? h(a, b, c.Ba) : delete a[b]
                })
            }
        }))
    }

    function d(a, b, d, e) {
        var f = b ? a.prototype : a;
        c(a), q(e, function(c, e) {
            var i = f[c],
                j = p(f, c);
            "function" == typeof d && (e = g(f[c], e, d)), d === Db && f[c] || h(f, c, e), a.SugarMethods[c] = {
                xa: b,
                method: e,
                Ba: i,
                qa: j
            }
        })
    }

    function e(a, b, c, e, f) {
        var g = {};
        e = Vb(e) ? e.split(",") : e, e.forEach(function(a, b) {
            f(g, a, b)
        }), d(a, b, c, g)
    }

    function f(a, b, c) {
        var d = 0 === b.length,
            e = i(b),
            f = Db;
        return q(a.SugarMethods, function(b, g) {
            (d || e.indexOf(b) > -1) && (f = Bb, c(g.xa ? a.prototype : a, b, g))
        }), f
    }

    function g(a, b, c) {
        return function() {
            return (!a || c !== Bb && c.apply(this, arguments) ? b : a).apply(this, arguments)
        }
    }

    function h(a, b, c) {
        Ob ? Eb.defineProperty(a, b, {
            value: c,
            configurable: Bb,
            enumerable: Db,
            writable: Bb
        }) : a[b] = c
    }

    function i(a, b) {
        var c, d, e = [];
        for (c = 0, d = a.length; d > c; c++) e.push(a[c]), b && b.call(a, a[c], c);
        return e
    }

    function j(a, b, c) {
        i(Fb.prototype.concat.apply([], Fb.prototype.slice.call(a, c || 0)), b)
    }

    function k(a) {
        if (!a || !a.call) throw new TypeError("Callback is not callable")
    }

    function l(a) {
        return void 0 !== a
    }

    function m(a) {
        return void 0 === a
    }

    function n(a) {
        return a && "object" == typeof a
    }

    function o(a) {
        return !!a && "[object Object]" === Lb.call(a) && "hasOwnProperty" in a
    }

    function p(a, b) {
        return Eb.hasOwnProperty.call(a, b)
    }

    function q(a, b) {
        for (var c in a)
            if (p(a, c) && b.call(a, c, a[c], a) === Db) break
    }

    function r(a, b) {
        return q(b, function(c) {
            a[c] = b[c]
        }), a
    }

    function s(a) {
        r(this, a)
    }

    function t(a, b, c, d) {
        var e = [];
        a = parseInt(a);
        for (var f = 0 > d; !f && b >= a || f && a >= b;) e.push(a), c && c.call(this, a), a += d || 1;
        return e
    }

    function u(a, b, c) {
        c = Kb[c || "round"];
        var d = Kb.pow(10, Kb.abs(b || 0));
        return 0 > b && (d = 1 / d), c(a * d) / d
    }

    function v(a, b) {
        return u(a, b, "floor")
    }

    function w(a, b, c, d) {
        return d = Kb.abs(a).toString(d || 10), d = z(b - d.replace(/\.\d+/, "").length, "0") + d, (c || 0 > a) && (d = (0 > a ? "-" : "+") + d), d
    }

    function x(a) {
        if (a >= 11 && 13 >= a) return "th";
        switch (a % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th"
        }
    }

    function y() {
        return "	\n\f\r   ᠎             \u2028\u2029　﻿"
    }

    function z(a, b) {
        return Fb(Kb.max(0, l(a) ? a : 1) + 1).join(b || "")
    }

    function A(a, b) {
        var c = a.toString().match(/[^/]*$/)[0];
        return b && (c = (c + b).split("").sort().join("").replace(/([gimy])\1+/g, "$1")), c
    }

    function B(a) {
        return Vb(a) || (a = Ib(a)), a.replace(/([\\/'*+?|()\[\]{}.^$])/g, "\\$1")
    }

    function C(a, b) {
        var c, d, e, f, g, h, i, j = typeof a;
        if ("string" === j) return a;
        if (e = Lb.call(a), c = o(a), d = "[object Array]" === e, a != Cb && c || d) {
            if (b || (b = []), b.length > 1)
                for (h = b.length; h--;)
                    if (b[h] === a) return "CYC";
            for (b.push(a), c = Ib(a.constructor), f = d ? a : Eb.keys(a).sort(), h = 0, i = f.length; i > h; h++) g = d ? h : f[h], c += g + C(a[g], b);
            b.pop()
        } else c = 1 / a === -1 / 0 ? "-0" : Ib(a && a.valueOf ? a.valueOf() : a);
        return j + e + c
    }

    function D(a) {
        return /^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/.test(Lb.call(a)) || o(a)
    }

    function E(a, b, c) {
        var d, e = [],
            f = a.length,
            g = b[b.length - 1] !== Db;
        return i(b, function(b) {
            return Rb(b) ? Db : (g && (b %= f, 0 > b && (b = f + b)), d = c ? a.charAt(b) || "" : a[b], e.push(d), void 0)
        }), e.length < 2 ? e[0] : e
    }

    function F(a, b) {
        e(b, Bb, Db, a, function(a, b) {
            a[b + ("equal" === b ? "s" : "")] = function() {
                return Eb[b].apply(Cb, [this].concat(i(arguments)))
            }
        })
    }

    function G(a, b, c, d) {
        var e = a.length,
            f = -1 == d,
            g = f ? e - 1 : 0;
        for (c = isNaN(c) ? g : parseInt(c >> 0), 0 > c && (c = e + c), (!f && 0 > c || f && c >= e) && (c = g); f && c >= 0 || !f && e > c;) {
            if (a[c] === b) return c;
            c += d
        }
        return -1
    }

    function H(a, b, c, d) {
        var e = a.length,
            f = 0,
            g = l(c);
        if (k(b), 0 == e && !g) throw new TypeError("Reduce called on empty array with no initial value");
        for (g ? c = c : (c = a[d ? e - 1 : f], f++); e > f;) g = d ? e - f - 1 : f, g in a && (c = b(c, a[g], g, a)), f++;
        return c
    }

    function I(a) {
        if (0 === a.length) throw new TypeError("First argument must be defined")
    }

    function J(a, b, c, d) {
        var e = Bb;
        return a === b ? Bb : Wb(b) && Vb(a) ? Gb(b).test(a) : Tb(b) ? b.apply(c, d) : o(b) && n(a) ? (q(b, function(d) {
            J(a[d], b[d], c, [a[d], a]) || (e = Db)
        }), e) : D(a) && D(b) ? C(a) === C(b) : a === b
    }

    function K(a, b, c, d) {
        return m(b) ? a : Tb(b) ? b.apply(c, d || []) : Tb(a[b]) ? a[b].call(a) : a[b]
    }

    function L(a, b, c, d) {
        var e, f;
        for (0 > c && (c = a.length + c), f = isNaN(c) ? 0 : c, c = d === Bb ? a.length + f : a.length; c > f;) {
            if (e = f % a.length, !(e in a)) return M(a, b, f, d);
            if (b.call(a, a[e], e, a) === Db) break;
            f++
        }
    }

    function M(a, b, c) {
        var d, e = [];
        for (d in a) d in a && d >>> 0 == d && 4294967295 != d && d >= c && e.push(parseInt(d));
        return e.sort().each(function(c) {
            return b.call(a, a[c], c, a)
        }), a
    }

    function N(a, b, c, d, e) {
        var f, g;
        return L(a, function(a, c, d) {
            return J(a, b, d, [a, c, d]) ? (f = a, g = c, Db) : void 0
        }, c, d), e ? g : f
    }

    function O(a, b) {
        var c, d = [],
            e = {};
        return L(a, function(f, g) {
            c = b ? K(f, b, a, [f, g, a]) : f, T(e, c) || d.push(f)
        }), d
    }

    function P(a, b, c) {
        var d = [],
            e = {};
        return b.each(function(a) {
            T(e, a)
        }), a.each(function(a) {
            var b = C(a),
                f = !D(a);
            if (S(e, b, a, f) != c) {
                var g = 0;
                if (f)
                    for (b = e[b]; g < b.length;) b[g] === a ? b.splice(g, 1) : g += 1;
                else delete e[b];
                d.push(a)
            }
        }), d
    }

    function Q(a, b, c) {
        b = b || 1 / 0, c = c || 0;
        var d = [];
        return L(a, function(a) {
            Qb(a) && b > c ? d = d.concat(Q(a, b, c + 1)) : d.push(a)
        }), d
    }

    function R(a) {
        var b = [];
        return i(a, function(a) {
            b = b.concat(a)
        }), b
    }

    function S(a, b, c, d) {
        var e = b in a;
        return d && (a[b] || (a[b] = []), e = -1 !== a[b].indexOf(c)), e
    }

    function T(a, b) {
        var c = C(b),
            d = !D(b),
            e = S(a, c, b, d);
        return d ? a[c].push(b) : a[c] = b, e
    }

    function U(a, b, c, d) {
        var e, f = [],
            g = "max" === c,
            h = "min" === c,
            i = Array.isArray(a);
        return q(a, function(c) {
            var d = a[c];
            if (c = K(d, b, a, i ? [d, parseInt(c), a] : []), m(c)) throw new TypeError("Cannot compare with undefined");
            c === e ? f.push(d) : (m(e) || g && c > e || h && e > c) && (f = [d], e = c)
        }), i || (f = Q(f, 1)), d ? f : f[0]
    }

    function V(a) {
        return Fb[Zb] && (a = a.toLowerCase()), a.replace(Fb[Yb], "")
    }

    function W(a, b) {
        var c = a.charAt(b);
        return (Fb[$b] || {})[c] || c
    }

    function X(a) {
        var b = Fb[Xb];
        return a ? b.indexOf(a) : Cb
    }

    function Y(a) {
        return a && a.valueOf && (a = a.valueOf()), Eb.keys(a)
    }

    function Z(a, b) {
        e(Eb, Db, Db, a, function(a, c) {
            a[c] = function(a, d, e) {
                var f = Y(a);
                return e = Fb.prototype[c].call(f, function(c) {
                    return b ? K(a[c], d, a, [c, a[c], a]) : J(a[c], d, a, [c, a[c], a])
                }, e), Qb(e) && (e = e.reduce(function(b, c) {
                    return b[c] = a[c], b
                }, {})), e
            }
        }), F(a, s)
    }

    function $(a) {
        r(this, a), this.ga = lc.concat()
    }

    function _(a, b) {
        var c;
        if (Vb(a) || (a = ""), c = oc[a] || oc[a.slice(0, 2)], b === Db && !c) throw Error("Invalid locale.");
        return c || ec
    }

    function ab(a, b) {
        function c(a) {
            var b = h[a];
            Vb(b) ? h[a] = b.split(",") : b || (h[a] = [])
        }

        function d(a, b) {
            return a = a.split("+").map(function(a) {
                return a.replace(/(.+):(.+)$/, function(a, b, c) {
                    return c.split("|").map(function(a) {
                        return b + a
                    }).join("|")
                })
            }).join("|"), a.split("|").forEach(b)
        }

        function e(a, b, c) {
            var e = [];
            h[a].forEach(function(a, f) {
                b && (a += "+" + a.slice(0, 3)), d(a, function(a, b) {
                    e[b * c + f] = a.toLowerCase()
                })
            }), h[a] = e
        }

        function f(a, b, c) {
            return a = "\\d{" + a + "," + b + "}", c && (a += "|(?:" + db(h.numbers) + ")+"), a
        }

        function g(a, b) {
            h[a] = h[a] || b
        }
        var h, i;
        return h = new $(b), c("modifiers"), "months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(c), i = !h.monthSuffix, e("months", i, 12), e("weekdays", i, 7), e("units", Db, 8), e("numbers", Db, 10), g("code", a), g("date", f(1, 2, h.digitDate)), g("year", "'\\d{2}|" + f(4, 4)), g("num", function() {
                var a = ["\\d+"].concat(h.articles);
                return h.numbers && (a = a.concat(h.numbers)), db(a)
            }()),
            function() {
                var a = [];
                h.ha = {}, h.modifiers.push({
                    name: "day",
                    src: "yesterday",
                    value: -1
                }), h.modifiers.push({
                    name: "day",
                    src: "today",
                    value: 0
                }), h.modifiers.push({
                    name: "day",
                    src: "tomorrow",
                    value: 1
                }), h.modifiers.forEach(function(b) {
                    var c = b.name;
                    d(b.src, function(d) {
                        var e = h[c];
                        h.ha[d] = b, a.push({
                            name: c,
                            src: d,
                            value: b.value
                        }), h[c] = e ? e + "|" + d : d
                    })
                }), h.day += "|" + db(h.weekdays), h.modifiers = a
            }(), h.monthSuffix && (h.month = f(1, 2), h.months = t(1, 12).map(function(a) {
                return a + h.monthSuffix
            })), h.full_month = f(1, 2) + "|" + db(h.months), h.timeSuffixes.length > 0 && h.addFormat(sb(jc, h), Db, ic), h.addFormat("{day}", Bb), h.addFormat("{month}" + (h.monthSuffix || "")), h.addFormat("{year}" + (h.yearSuffix || "")), h.timeParse.forEach(function(a) {
                h.addFormat(a, Bb)
            }), h.dateParse.forEach(function(a) {
                h.addFormat(a)
            }), oc[a] = h
    }

    function bb(a, b, c, d) {
        a.ga.unshift({
            Da: d,
            ya: a,
            Ca: Gb("^" + b + "$", "i"),
            to: c
        })
    }

    function cb(a) {
        return a.slice(0, 1).toUpperCase() + a.slice(1)
    }

    function db(a) {
        return a.filter(function(a) {
            return !!a
        }).join("|")
    }

    function eb(a, b) {
        var c;
        return o(a[0]) ? a : Ub(a[0]) && !Ub(a[1]) ? [a[0]] : Vb(a[0]) && b ? [fb(a[0]), a[1]] : (c = {}, gc.forEach(function(b, d) {
            c[b.$] = a[d]
        }), [c])
    }

    function fb(a, b) {
        var c = {};
        return (match = a.match(/^(\d+)?\s?(\w+?)s?$/i)) && (m(b) && (b = parseInt(match[1]) || 1), c[match[2].toLowerCase()] = b), c
    }

    function gb(a, b) {
        var c, d, e = {};
        return b.forEach(function(b, f) {
            c = a[f + 1], m(c) || "" === c || ("year" === b && (e.Ea = c.replace(/'/, "")), d = parseFloat(c.replace(/'/, "").replace(/,/, ".")), e[b] = isNaN(d) ? c.toLowerCase() : d)
        }), e
    }

    function hb(a) {
        return a = a.trim().replace(/^just (?=now)|\.+$/i, ""), ib(a)
    }

    function ib(a) {
        return a.replace(fc, function(a, b, c) {
            var d, e, f = 0,
                g = 1;
            return b ? a : (c.split("").reverse().forEach(function(a) {
                a = kc[a];
                var b = a > 9;
                b ? (d && (f += g), g *= a / (e || 1), e = a) : (d === Db && (g *= 10), f += g * a), d = b
            }), d && (f += g), f)
        })
    }

    function jb(a, b, c, d) {
        var e, f, g, h, i, j, k, m, n, p = new Hb,
            r = Db;
        return p.utc(d), Sb(a) ? p.utc(a.isUTC()).setTime(a.getTime()) : Ub(a) ? p.setTime(a) : o(a) ? (p.set(a, Bb), h = a) : Vb(a) && (e = _(b), a = hb(a), e && q(e.ta(), function(c, d) {
            var o = a.match(d.Ca);
            return o ? (g = d, f = g.ya, h = gb(o, g.to, f), h.utc && p.utc(), f.ma = g, h.timestamp ? (h = h.timestamp, Db) : (g.Da && !Vb(h.month) && (Vb(h.date) || e.wa(b)) && (m = h.month, h.month = h.date, h.date = m), h.year && 2 === h.Ea.length && (h.year = 100 * u(qb(new Hb, "FullYear") / 100) - 100 * u(h.year / 100) + h.year), h.month && (h.month = f.getMonth(h.month), h.shift && !h.unit && (h.unit = f.units[7])), h.weekday && h.date ? delete h.weekday : h.weekday && (h.weekday = f.getWeekday(h.weekday), h.shift && !h.unit && (h.unit = f.units[5])), h.day && (m = f.ha[h.day]) ? (h.day = m.value, p.reset(), r = Bb) : h.day && (j = f.getWeekday(h.day)) > -1 && (delete h.day, h.num && h.month ? (n = function() {
                var a = p.getWeekday();
                p.setWeekday(7 * (h.num - 1) + (a > j ? j + 7 : j))
            }, h.day = 1) : h.weekday = j), h.date && !Ub(h.date) && (h.date = f.ua(h.date)), f.Aa(h.ampm) && h.hour < 12 ? h.hour += 12 : f.za(h.ampm) && 12 === h.hour && (h.hour = 0), ("offset_hours" in h || "offset_minutes" in h) && (p.utc(), h.offset_minutes = h.offset_minutes || 0, h.offset_minutes += 60 * h.offset_hours, "-" === h.offset_sign && (h.offset_minutes *= -1), h.minute -= h.offset_minutes), h.unit && (r = Bb, k = f.oa(h.num), i = f.sa(h.unit), (h.shift || h.edge) && (k *= (m = f.ha[h.shift]) ? m.value : 0, "month" === i && l(h.date) && (p.set({
                day: h.date
            }, Bb), delete h.date), "year" === i && l(h.month) && (p.set({
                month: h.month,
                day: h.date
            }, Bb), delete h.month, delete h.date)), h.sign && (m = f.ha[h.sign]) && (k *= m.value), l(h.weekday) && (p.set({
                weekday: h.weekday
            }, Bb), delete h.weekday), h[i] = (h[i] || 0) + k), "-" === h.year_sign && (h.year *= -1), hc.slice(1, 4).forEach(function(a, b) {
                var c = h[a.$],
                    d = c % 1;
                d && (h[hc[b].$] = u(d * ("second" === a.$ ? 1e3 : 60)), h[a.$] = v(c))
            }), Db)) : void 0
        }), g ? r ? p.advance(h) : (p._utc && p.reset(), pb(p, h, Bb, Db, c)) : ("now" !== a && (p = new Hb(a)), d && p.addMinutes(-p.getTimezoneOffset())), h && h.edge && (m = f.ha[h.edge], q(hc.slice(4), function(a, b) {
            return l(h[b.$]) ? (i = b.$, Db) : void 0
        }), "year" === i ? h.fa = "month" : ("month" === i || "week" === i) && (h.fa = "day"), p[(m.value < 0 ? "endOf" : "beginningOf") + cb(i)](), -2 === m.value && p.reset()), n && n(), p.utc(Db)), {
            ea: p,
            set: h
        }
    }

    function kb(a) {
        var b, c = Kb.abs(a),
            d = c,
            e = 0;
        return hc.slice(1).forEach(function(a, f) {
            b = v(u(10 * (c / a.da())) / 10), b >= 1 && (d = b, e = f + 1)
        }), [d, e, a]
    }

    function lb(a) {
        var b = kb(a.millisecondsFromNow());
        return 6 === b[1] && (b[0] = Kb.abs(a.monthsFromNow())), b
    }

    function mb(a, b, c, d) {
        var e, f = _(d),
            g = Gb(/^[A-Z]/);
        return a.isValid() ? (Date[b] ? b = Date[b] : Tb(b) && (e = lb(a), b = b.apply(a, e.concat(f))), !b && c ? (e = e || lb(a), 0 === e[1] && (e[1] = 1, e[0] = 1), f.va(e)) : (b = b || "long", b = f[b] || b, mc.forEach(function(c) {
            b = b.replace(Gb("\\{(" + c.ba + ")(\\d)?\\}", c.la ? "i" : ""), function(b, d, e) {
                b = c.format(a, f, e || 1, d), e = d.length;
                var h = d.match(/^(.)\1+$/);
                return c.la ? (3 === e && (b = b.slice(0, 3)), (h || d.match(g)) && (b = cb(b))) : h && !c.text && (b = (Ub(b) ? w(b, e) : b.toString()).slice(-e)), b
            })
        }), b)) : "Invalid Date"
    }

    function nb(a, b, c, d) {
        var e, f, g, h = 0,
            i = 0,
            j = 0;
        return e = jb(b, Cb, Cb, d), c > 0 && (i = j = c, f = Bb), e.ea.isValid() ? (e.set && e.set.fa && (nc.forEach(function(b) {
            b.$ === e.set.fa && (h = b.da(e.ea, a - e.ea) - 1)
        }), b = cb(e.set.fa), (e.set.edge || e.set.shift) && e.ea["beginningOf" + b](), "month" === e.set.fa && (g = e.ea.clone()["endOf" + b]().getTime()), !f && e.set.sign && "millisecond" != e.set.fa && (i = 50, j = -50)), f = a.getTime(), b = e.ea.getTime(), g = g || b + h, g = ob(a, b, g), f >= b - i && g + j >= f) : Db
    }

    function ob(a, b, c) {
        return b = new Date(b), a = new Date(c).utc(a.isUTC()), 23 !== qb(a, "Hours") && (b = b.getTimezoneOffset(), a = a.getTimezoneOffset(), b !== a && (c += (a - b).minutes())), c
    }

    function pb(a, b, c, d, e) {
        function f(a) {
            return l(b[a]) ? b[a] : b[a + "s"]
        }

        function g(a) {
            return l(f(a))
        }
        var h, i;
        if (Ub(b) && d) b = {
            milliseconds: b
        };
        else if (Ub(b)) return a.setTime(b), a;
        return l(b.date) && (b.day = b.date), q(hc, function(d, e) {
                var f = "day" === e.$;
                return g(e.$) || f && g("weekday") ? (b.fa = e.$, i = +d, Db) : (!c || "week" === e.$ || f && g("week") || rb(a, e.method, f ? 1 : 0), void 0)
            }), nc.forEach(function(c) {
                var e = c.$;
                c = c.method;
                var h;
                h = f(e), m(h) || (d ? ("week" === e && (h = (b.day || 0) + 7 * h, c = "Date"), h = h * d + qb(a, c)) : "month" === e && g("day") && rb(a, "Date", 15), rb(a, c, h), d && "month" === e && (e = h, 0 > e && (e = e % 12 + 12), e % 12 != qb(a, "Month") && rb(a, "Date", 0)))
            }), d || g("day") || !g("weekday") || (h = f("weekday"), a.setWeekday(h)),
            function() {
                var b = new Hb;
                return -1 === e && a > b || 1 === e && b > a
            }() && q(hc.slice(i + 1), function(b, c) {
                return !(c.ja || "week" === c.$ && g("weekday")) || g(c.$) || "day" === c.$ && g("weekday") ? void 0 : (a[c.ia](e), Db)
            }), a
    }

    function qb(a, b) {
        return a["get" + (a._utc ? "UTC" : "") + b]()
    }

    function rb(a, b, c) {
        return a["set" + (a._utc && "ISOWeek" != b ? "UTC" : "") + b](c)
    }

    function sb(a, b, c) {
        var d, e = {
            h: 0,
            m: 1,
            s: 2
        };
        return b = b || dc, a.replace(/{([a-z])}/g, function(a, f) {
            var g = [],
                h = "h" === f,
                i = h && !c;
            return "t" === f ? b.ampm.join("|") : (h && g.push(":"), (d = b.timeSuffixes[e[f]]) && g.push(d + "\\s*"), 0 === g.length ? "" : "(?:" + g.join("|") + ")" + (i ? "" : "?"))
        })
    }

    function tb(a, b, c) {
        var d, e;
        return Ub(a[1]) ? d = eb(a)[0] : (d = a[0], e = a[1]), jb(d, e, b, c).ea
    }

    function ub(a, b) {
        function c() {
            return u(this * b)
        }

        function d() {
            return tb(arguments)[a.ia](this)
        }

        function e() {
            return tb(arguments)[a.ia](-this)
        }
        var f = a.$,
            g = {};
        g[f] = c, g[f + "s"] = c, g[f + "Before"] = e, g[f + "sBefore"] = e, g[f + "Ago"] = e, g[f + "sAgo"] = e, g[f + "After"] = d, g[f + "sAfter"] = d, g[f + "FromNow"] = d, g[f + "sFromNow"] = d, Jb.extend(g)
    }

    function vb(a, b, c, d, e) {
        var f;
        1 / 0 !== b && (a.timers || (a.timers = []), Ub(b) || (b = 0), a.timers.push(setTimeout(function() {
            a.timers.splice(f, 1), c.apply(d, e || [])
        }, b)), f = a.timers.length)
    }

    function wb(a, b, c, d, e, f) {
        var g = a.toFixed(20),
            h = g.search(/\./);
        return g = g.search(/[1-9]/), h -= g, h > 0 && (h -= 1), e = Kb.max(Kb.min((h / 3).floor(), e === Db ? c.length : e), -d), d = c.charAt(e + d - 1), -9 > h && (e = -3, b = h.abs() - 9, d = c.slice(0, 1)), (a / (f ? 2..pow(10 * e) : 10..pow(3 * e))).round(b || 0).format() + d.trim()
    }

    function xb(a, b, c, d) {
        var e, f, g, h = /^(.+?)(\[.*\])$/;
        d !== Db && (f = b.match(h)) ? (g = f[1], b = f[2].replace(/^\[|\]$/g, "").split("]["), b.forEach(function(b) {
            e = !b || b.match(/^\d+$/), !g && Qb(a) && (g = a.length), p(a, g) || (a[g] = e ? [] : {}), a = a[g], g = b
        }), !g && e && (g = a.length.toString()), xb(a, g, c)) : a[b] = c.match(/^[+-]?\d+(\.\d+)?$/) ? parseFloat(c) : "true" === c ? Bb : "false" === c ? Db : c
    }

    function yb(a, b) {
        var c;
        return Qb(b) || o(b) && b.toString === Lb ? (c = [], q(b, function(b, d) {
            a && (b = a + "[" + b + "]"), c.push(yb(b, d))
        }), c.join("&")) : a ? zb(a) + "=" + (Sb(b) ? b.getTime() : zb(b)) : ""
    }

    function zb(a) {
        return a || a === Db || 0 === a ? encodeURIComponent(a).replace(/%20/g, "+") : ""
    }

    function Ab(a, b, c) {
        var d, e = {};
        return q(a, function(a, f) {
            d = Db, j(b, function(b) {
                (Wb(b) ? b.test(a) : n(b) ? p(b, a) : a === Ib(b)) && (d = Bb)
            }, 1), d === c && (e[a] = f)
        }), e
    }
    var Bb = !0,
        Cb = null,
        Db = !1,
        Eb = Object,
        Fb = Array,
        Gb = RegExp,
        Hb = Date,
        Ib = String,
        Jb = Number,
        Kb = Math,
        Lb = Eb.prototype.toString,
        Mb = "undefined" != typeof global ? global : this,
        Nb = {},
        Ob = Eb.defineProperty && Eb.defineProperties,
        Pb = "Array,Boolean,Date,Function,Number,String,RegExp".split(","),
        Qb = b(Pb[0]),
        Rb = b(Pb[1]),
        Sb = b(Pb[2]),
        Tb = b(Pb[3]),
        Ub = b(Pb[4]),
        Vb = b(Pb[5]),
        Wb = b(Pb[6]);
    s.prototype.constructor = Eb, c(Eb), q(Pb, function(a, b) {
            c(Mb[b])
        }), d(Eb, Db, Db, {
            keys: function(a) {
                var b = [];
                if (!n(a) && !Wb(a) && !Tb(a)) throw new TypeError("Object required");
                return q(a, function(a) {
                    b.push(a)
                }), b
            }
        }), d(Fb, Db, Db, {
            isArray: function(a) {
                return Qb(a)
            }
        }), d(Fb, Bb, Db, {
            every: function(a, b) {
                var c = this.length,
                    d = 0;
                for (I(arguments); c > d;) {
                    if (d in this && !a.call(b, this[d], d, this)) return Db;
                    d++
                }
                return Bb
            },
            some: function(a, b) {
                var c = this.length,
                    d = 0;
                for (I(arguments); c > d;) {
                    if (d in this && a.call(b, this[d], d, this)) return Bb;
                    d++
                }
                return Db
            },
            map: function(a, b) {
                var c = this.length,
                    d = 0,
                    e = Array(c);
                for (I(arguments); c > d;) d in this && (e[d] = a.call(b, this[d], d, this)), d++;
                return e
            },
            filter: function(a, b) {
                var c = this.length,
                    d = 0,
                    e = [];
                for (I(arguments); c > d;) d in this && a.call(b, this[d], d, this) && e.push(this[d]), d++;
                return e
            },
            indexOf: function(a, b) {
                return Vb(this) ? this.indexOf(a, b) : G(this, a, b, 1)
            },
            lastIndexOf: function(a, b) {
                return Vb(this) ? this.lastIndexOf(a, b) : G(this, a, b, -1)
            },
            forEach: function(a, b) {
                var c = this.length,
                    d = 0;
                for (k(a); c > d;) d in this && a.call(b, this[d], d, this), d++
            },
            reduce: function(a, b) {
                return H(this, a, b)
            },
            reduceRight: function(a, b) {
                return H(this, a, b, Bb)
            }
        }), d(Function, Bb, Db, {
            bind: function(a) {
                var b, c = this,
                    d = i(arguments).slice(1);
                if (!Tb(this)) throw new TypeError("Function.prototype.bind called on a non-function");
                return b = function() {
                    return c.apply(c.prototype && this instanceof c ? this : a, d.concat(i(arguments)))
                }, b.prototype = this.prototype, b
            }
        }), d(Hb, Db, Db, {
            now: function() {
                return (new Hb).getTime()
            }
        }),
        function() {
            var a = y().match(/^\s+$/);
            try {
                Ib.prototype.trim.call([1])
            } catch (b) {
                a = Db
            }
            d(Ib, Bb, !a, {
                trim: function() {
                    return this.toString().trimLeft().trimRight()
                },
                trimLeft: function() {
                    return this.replace(Gb("^[" + y() + "]+"), "")
                },
                trimRight: function() {
                    return this.replace(Gb("[" + y() + "]+$"), "")
                }
            })
        }(),
        function() {
            var a = new Hb(Hb.UTC(1999, 11, 31));
            a = a.toISOString && "1999-12-31T00:00:00.000Z" === a.toISOString(), e(Hb, Bb, !a, "toISOString,toJSON", function(a, b) {
                a[b] = function() {
                    return w(this.getUTCFullYear(), 4) + "-" + w(this.getUTCMonth() + 1, 2) + "-" + w(this.getUTCDate(), 2) + "T" + w(this.getUTCHours(), 2) + ":" + w(this.getUTCMinutes(), 2) + ":" + w(this.getUTCSeconds(), 2) + "." + w(this.getUTCMilliseconds(), 3) + "Z"
                }
            })
        }();
    var Xb = "AlphanumericSortOrder",
        Yb = "AlphanumericSortIgnore",
        Zb = "AlphanumericSortIgnoreCase",
        $b = "AlphanumericSortEquivalents";
    d(Fb, Db, Db, {
        create: function() {
            var a, b = [];
            return i(arguments, function(c) {
                if (n(c)) try {
                    a = Fb.prototype.slice.call(c, 0), a.length > 0 && (c = a)
                } catch (d) {}
                b = b.concat(c)
            }), b
        }
    }), d(Fb, Bb, Db, {
        find: function(a, b, c) {
            return N(this, a, b, c)
        },
        findAll: function(a, b, c) {
            var d = [];
            return L(this, function(b, c, e) {
                J(b, a, e, [b, c, e]) && d.push(b)
            }, b, c), d
        },
        findIndex: function(a, b, c) {
            return a = N(this, a, b, c, Bb), m(a) ? -1 : a
        },
        count: function(a) {
            return m(a) ? this.length : this.findAll(a).length
        },
        removeAt: function(a, b) {
            var c, d;
            if (m(a)) return this;
            for (m(b) && (b = a), c = 0, d = b - a; d >= c; c++) this.splice(a, 1);
            return this
        },
        include: function(a, b) {
            return this.clone().add(a, b)
        },
        exclude: function() {
            return Fb.prototype.remove.apply(this.clone(), arguments)
        },
        clone: function() {
            return r([], this)
        },
        unique: function(a) {
            return O(this, a)
        },
        flatten: function(a) {
            return Q(this, a)
        },
        union: function() {
            return O(this.concat(R(arguments)))
        },
        intersect: function() {
            return P(this, R(arguments), Db)
        },
        subtract: function() {
            return P(this, R(arguments), Bb)
        },
        at: function() {
            return E(this, arguments)
        },
        first: function(a) {
            return m(a) ? this[0] : (0 > a && (a = 0), this.slice(0, a))
        },
        last: function(a) {
            return m(a) ? this[this.length - 1] : this.slice(this.length - a < 0 ? 0 : this.length - a)
        },
        from: function(a) {
            return this.slice(a)
        },
        to: function(a) {
            return m(a) && (a = this.length), this.slice(0, a)
        },
        min: function(a, b) {
            return U(this, a, "min", b)
        },
        max: function(a, b) {
            return U(this, a, "max", b)
        },
        least: function(a, b) {
            return U(this.groupBy.apply(this, [a]), "length", "min", b)
        },
        most: function(a, b) {
            return U(this.groupBy.apply(this, [a]), "length", "max", b)
        },
        sum: function(a) {
            return a = a ? this.map(a) : this, a.length > 0 ? a.reduce(function(a, b) {
                return a + b
            }) : 0
        },
        average: function(a) {
            return a = a ? this.map(a) : this, a.length > 0 ? a.sum() / a.length : 0
        },
        inGroups: function(a, b) {
            var c = arguments.length > 1,
                d = this,
                e = [],
                f = u(this.length / a, void 0, "ceil");
            return t(0, a - 1, function(a) {
                a *= f;
                var g = d.slice(a, a + f);
                c && g.length < f && t(1, f - g.length, function() {
                    g = g.add(b)
                }), e.push(g)
            }), e
        },
        inGroupsOf: function(a, b) {
            var c, d = [],
                e = this.length,
                f = this;
            return 0 === e || 0 === a ? f : (m(a) && (a = 1), m(b) && (b = Cb), t(0, u(e / a, void 0, "ceil") - 1, function(e) {
                for (c = f.slice(a * e, a * e + a); c.length < a;) c.push(b);
                d.push(c)
            }), d)
        },
        isEmpty: function() {
            return 0 == this.compact().length
        },
        sortBy: function(a, b) {
            var c = this.clone();
            return c.sort(function(d, e) {
                var f, g;
                if (f = K(d, a, c, [d]), g = K(e, a, c, [e]), Vb(f) && Vb(g)) {
                    f = f, g = g;
                    var h, i, j, k, l = 0,
                        m = 0;
                    f = V(f), g = V(g);
                    do j = W(f, l), k = W(g, l), h = X(j), i = X(k), (-1 === h || -1 === i) && (h = f.charCodeAt(l) || Cb, i = g.charCodeAt(l) || Cb), j = j !== f.charAt(l), k = k !== g.charAt(l), j !== k && 0 === m && (m = j - k), l += 1; while (h != Cb && i != Cb && h === i);
                    f = h === i ? m : i > h ? -1 : 1
                } else f = g > f ? -1 : f > g ? 1 : 0;
                return f * (b ? -1 : 1)
            }), c
        },
        randomize: function() {
            for (var a, b, c = this.concat(), d = c.length; d;) a = 0 | Kb.random() * d, b = c[--d], c[d] = c[a], c[a] = b;
            return c
        },
        zip: function() {
            var a = i(arguments);
            return this.map(function(b, c) {
                return [b].concat(a.map(function(a) {
                    return c in a ? a[c] : Cb
                }))
            })
        },
        sample: function(a) {
            var b = this.randomize();
            return arguments.length > 0 ? b.slice(0, a) : b[0]
        },
        each: function(a, b, c) {
            return L(this, a, b, c), this
        },
        add: function(a, b) {
            return (!Ub(Jb(b)) || isNaN(b)) && (b = this.length), Fb.prototype.splice.apply(this, [b, 0].concat(a)), this
        },
        remove: function() {
            var a, b = this;
            return i(arguments, function(c) {
                for (a = 0; a < b.length;) J(b[a], c, b, [b[a], a, b]) ? b.splice(a, 1) : a++
            }), b
        },
        compact: function(a) {
            var b = [];
            return L(this, function(c) {
                Qb(c) ? b.push(c.compact()) : a && c ? b.push(c) : !a && c != Cb && c.valueOf() === c.valueOf() && b.push(c)
            }), b
        },
        groupBy: function(a, b) {
            var c, d = this,
                e = {};
            return L(d, function(b, f) {
                c = K(b, a, d, [b, f, d]), e[c] || (e[c] = []), e[c].push(b)
            }), b && q(e, b), e
        },
        none: function() {
            return !this.any.apply(this, arguments)
        }
    }), d(Fb, Bb, Db, {
        all: Fb.prototype.every,
        any: Fb.prototype.some,
        insert: Fb.prototype.add
    }), d(Eb, Db, Db, {
        map: function(a, b) {
            return Y(a).reduce(function(c, d) {
                return c[d] = K(a[d], b, a, [d, a[d], a]), c
            }, {})
        },
        reduce: function(a) {
            var b = Y(a).map(function(b) {
                return a[b]
            });
            return b.reduce.apply(b, i(arguments).slice(1))
        },
        each: function(a, b) {
            return k(b), q(a, b), a
        },
        size: function(a) {
            return Y(a).length
        }
    });
    var _b = "any,all,none,count,find,findAll,isEmpty".split(","),
        ac = "sum,average,min,max,least,most".split(","),
        bc = "map,reduce,size".split(","),
        cc = _b.concat(ac).concat(bc);
    ! function() {
        e(Fb, Bb, function() {
            var a = arguments;
            return a.length > 0 && !Tb(a[0])
        }, "map,every,all,some,any,none,filter", function(a, b) {
            a[b] = function(a) {
                return this[b](function(c, d) {
                    return "map" === b ? K(c, a, this, [c, d, this]) : J(c, a, this, [c, d, this])
                })
            }
        })
    }(),
    function() {
        Fb[Xb] = "AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ".split("").map(function(a) {
            return a + a.toLowerCase()
        }).join("");
        var a = {};
        L("AÁÀÂÃÄ,CÇ,EÉÈÊË,IÍÌİÎÏ,OÓÒÔÕÖ,Sß,UÚÙÛÜ".split(","), function(b) {
            var c = b.charAt(0);
            L(b.slice(1).split(""), function(b) {
                a[b] = c, a[b.toLowerCase()] = c.toLowerCase()
            })
        }), Fb[Zb] = Bb, Fb[$b] = a
    }(), Z(_b), Z(ac, Bb), F(bc, s);
    var dc, ec, fc, gc, hc, ic = ["ampm", "hour", "minute", "second", "ampm", "utc", "offset_sign", "offset_hours", "offset_minutes", "ampm"],
        jc = "({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",
        kc = {},
        lc = [],
        mc = [{
            ba: "f{1,4}|ms|milliseconds",
            format: function(a) {
                return qb(a, "Milliseconds")
            }
        }, {
            ba: "ss?|seconds",
            format: function(a) {
                return qb(a, "Seconds")
            }
        }, {
            ba: "mm?|minutes",
            format: function(a) {
                return qb(a, "Minutes")
            }
        }, {
            ba: "hh?|hours|12hr",
            format: function(a) {
                return a = qb(a, "Hours"), 0 === a ? 12 : a - 12 * v(a / 13)
            }
        }, {
            ba: "HH?|24hr",
            format: function(a) {
                return qb(a, "Hours")
            }
        }, {
            ba: "dd?|date|day",
            format: function(a) {
                return qb(a, "Date")
            }
        }, {
            ba: "dow|weekday",
            la: Bb,
            format: function(a, b, c) {
                return a = qb(a, "Day"), b.weekdays[a + 7 * (c - 1)]
            }
        }, {
            ba: "MM?",
            format: function(a) {
                return qb(a, "Month") + 1
            }
        }, {
            ba: "mon|month",
            la: Bb,
            format: function(a, b, c) {
                return a = qb(a, "Month"), b.months[a + 12 * (c - 1)]
            }
        }, {
            ba: "y{2,4}|year",
            format: function(a) {
                return qb(a, "FullYear")
            }
        }, {
            ba: "[Tt]{1,2}",
            format: function(a, b, c, d) {
                return 0 == b.ampm.length ? "" : (a = qb(a, "Hours"), b = b.ampm[v(a / 12)], 1 === d.length && (b = b.slice(0, 1)), "T" === d.slice(0, 1) && (b = b.toUpperCase()), b)
            }
        }, {
            ba: "z{1,4}|tz|timezone",
            text: Bb,
            format: function(a, b, c, d) {
                return a = a.getUTCOffset(), ("z" == d || "zz" == d) && (a = a.replace(/(\d{2})(\d{2})/, function(a, b) {
                    return w(b, d.length)
                })), a
            }
        }, {
            ba: "iso(tz|timezone)",
            format: function(a) {
                return a.getUTCOffset(Bb)
            }
        }, {
            ba: "ord",
            format: function(a) {
                return a = qb(a, "Date"), a + x(a)
            }
        }],
        nc = [{
            $: "year",
            method: "FullYear",
            ja: Bb,
            da: function(a) {
                return 1e3 * 60 * 60 * 24 * (365 + (a ? a.isLeapYear() ? 1 : 0 : .25))
            }
        }, {
            $: "month",
            method: "Month",
            ja: Bb,
            da: function(a, b) {
                var c, d = 30.4375;
                return a && (c = a.daysInMonth(), b <= c.days() && (d = c)), 1e3 * 60 * 60 * 24 * d
            },
            error: .919
        }, {
            $: "week",
            method: "ISOWeek",
            da: a(6048e5)
        }, {
            $: "day",
            method: "Date",
            ja: Bb,
            da: a(864e5)
        }, {
            $: "hour",
            method: "Hours",
            da: a(36e5)
        }, {
            $: "minute",
            method: "Minutes",
            da: a(6e4)
        }, {
            $: "second",
            method: "Seconds",
            da: a(1e3)
        }, {
            $: "millisecond",
            method: "Milliseconds",
            da: a(1)
        }],
        oc = {};
    $.prototype = {
            getMonth: function(a) {
                return Ub(a) ? a - 1 : this.months.indexOf(a) % 12
            },
            getWeekday: function(a) {
                return this.weekdays.indexOf(a) % 7
            },
            oa: function(a) {
                var b;
                return Ub(a) ? a : a && -1 !== (b = this.numbers.indexOf(a)) ? (b + 1) % 10 : 1
            },
            ua: function(a) {
                var b = this;
                return a.replace(Gb(this.num, "g"), function(a) {
                    return b.oa(a) || ""
                })
            },
            sa: function(a) {
                return dc.units[this.units.indexOf(a) % 8]
            },
            va: function(a) {
                return this.na(a, a[2] > 0 ? "future" : "past")
            },
            ra: function(a) {
                return this.na(kb(a), "duration")
            },
            wa: function(a) {
                return a = a || this.code, "en" === a || "en-US" === a ? Bb : this.variant
            },
            za: function(a) {
                return a === this.ampm[0]
            },
            Aa: function(a) {
                return a && a === this.ampm[1]
            },
            na: function(a, b) {
                var c, d, e = a[0],
                    f = a[1],
                    g = a[2],
                    h = this[b] || this.relative;
                return Tb(h) ? h.call(this, e, f, g, b) : (d = this.units[8 * (this.plural && e > 1 ? 1 : 0) + f] || this.units[f], this.capitalizeUnit && (d = cb(d)), c = this.modifiers.filter(function(a) {
                    return "sign" == a.name && a.value == (g > 0 ? 1 : -1)
                })[0], h.replace(/\{(.*?)\}/g, function(a, b) {
                    switch (b) {
                        case "num":
                            return e;
                        case "unit":
                            return d;
                        case "sign":
                            return c.src
                    }
                }))
            },
            ta: function() {
                return this.ma ? [this.ma].concat(this.ga) : this.ga
            },
            addFormat: function(a, b, c, d, e) {
                var f, g = c || [],
                    h = this;
                a = a.replace(/\s+/g, "[-,. ]*"), a = a.replace(/\{([^,]+?)\}/g, function(a, b) {
                    var d, e, f, i = b.match(/\?$/);
                    f = b.match(/^(\d+)\??$/);
                    var j = b.match(/(\d)(?:-(\d))?/),
                        k = b.replace(/[^a-z]+$/, "");
                    return f ? d = h.tokens[f[1]] : h[k] ? d = h[k] : h[k + "s"] && (d = h[k + "s"], j && (e = [], d.forEach(function(a, b) {
                        var c = b % (h.units ? 8 : d.length);
                        c >= j[1] && c <= (j[2] || j[1]) && e.push(a)
                    }), d = e), d = db(d)), f ? f = "(?:" + d + ")" : (c || g.push(k), f = "(" + d + ")"), i && (f += "?"), f
                }), b ? (b = sb(jc, h, e), e = ["t", "[\\s\\u3000]"].concat(h.timeMarker), f = a.match(/\\d\{\d,\d\}\)+\??$/), bb(h, "(?:" + b + ")[,\\s\\u3000]+?" + a, ic.concat(g), d), bb(h, a + "(?:[,\\s]*(?:" + e.join("|") + (f ? "+" : "*") + ")" + b + ")?", g.concat(ic), d)) : bb(h, a, g, d)
            }
        }, Hb.extend({
            create: function() {
                return tb(arguments)
            },
            past: function() {
                return tb(arguments, -1)
            },
            future: function() {
                return tb(arguments, 1)
            },
            addLocale: function(a, b) {
                return ab(a, b)
            },
            setLocale: function(a) {
                var b = _(a, Db);
                return ec = b, a && a != b.code && (b.code = a), b
            },
            getLocale: function(a) {
                return a ? _(a, Db) : ec
            },
            addFormat: function(a, b, c) {
                bb(_(c), a, b)
            }
        }, Db, Db), Hb.extend({
            set: function() {
                var a = eb(arguments);
                return pb(this, a[0], a[1])
            },
            setWeekday: function(a) {
                return m(a) ? void 0 : rb(this, "Date", qb(this, "Date") + a - qb(this, "Day"))
            },
            setISOWeek: function(a) {
                var b = qb(this, "Day") || 7;
                return m(a) ? void 0 : (this.set({
                    month: 0,
                    date: 4
                }), this.set({
                    weekday: 1
                }), a > 1 && this.addWeeks(a - 1), 1 !== b && this.advance({
                    days: b - 1
                }), this.getTime())
            },
            getISOWeek: function() {
                var a = this;
                a = a.clone();
                var b = qb(a, "Day") || 7;
                return a.addDays(4 - b).reset(), 1 + v(a.daysSince(a.clone().beginningOfYear()) / 7)
            },
            getUTCOffset: function(a) {
                var b = this._utc ? 0 : this.getTimezoneOffset(),
                    c = a === Bb ? ":" : "";
                return !b && a ? "Z" : w(v(-b / 60), 2, Bb) + c + w(Kb.abs(b % 60), 2)
            },
            utc: function(a) {
                return h(this, "_utc", a === Bb || 0 === arguments.length), this
            },
            isUTC: function() {
                return !!this._utc || 0 === this.getTimezoneOffset()
            },
            advance: function() {
                var a = eb(arguments, Bb);
                return pb(this, a[0], a[1], 1)
            },
            rewind: function() {
                var a = eb(arguments, Bb);
                return pb(this, a[0], a[1], -1)
            },
            isValid: function() {
                return !isNaN(this.getTime())
            },
            isAfter: function(a, b) {
                return this.getTime() > Hb.create(a).getTime() - (b || 0)
            },
            isBefore: function(a, b) {
                return this.getTime() < Hb.create(a).getTime() + (b || 0)
            },
            isBetween: function(a, b, c) {
                var d = this.getTime();
                a = Hb.create(a).getTime();
                var e = Hb.create(b).getTime();
                return b = Kb.min(a, e), a = Kb.max(a, e), c = c || 0, d > b - c && a + c > d
            },
            isLeapYear: function() {
                var a = qb(this, "FullYear");
                return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
            },
            daysInMonth: function() {
                return 32 - qb(new Hb(qb(this, "FullYear"), qb(this, "Month"), 32), "Date")
            },
            format: function(a, b) {
                return mb(this, a, Db, b)
            },
            relative: function(a, b) {
                return Vb(a) && (b = a, a = Cb), mb(this, a, Bb, b)
            },
            is: function(a, b, c) {
                var d, e;
                if (this.isValid()) {
                    if (Vb(a)) switch (a = a.trim().toLowerCase(), e = this.clone().utc(c), Bb) {
                        case "future" === a:
                            return this.getTime() > (new Hb).getTime();
                        case "past" === a:
                            return this.getTime() < (new Hb).getTime();
                        case "weekday" === a:
                            return qb(e, "Day") > 0 && qb(e, "Day") < 6;
                        case "weekend" === a:
                            return 0 === qb(e, "Day") || 6 === qb(e, "Day");
                        case (d = dc.weekdays.indexOf(a) % 7) > -1:
                            return qb(e, "Day") === d;
                        case (d = dc.months.indexOf(a) % 12) > -1:
                            return qb(e, "Month") === d
                    }
                    return nb(this, a, b, c)
                }
            },
            reset: function(a) {
                var b, c = {};
                return a = a || "hours", "date" === a && (a = "days"), b = nc.some(function(b) {
                    return a === b.$ || a === b.$ + "s"
                }), c[a] = a.match(/^days?/) ? 1 : 0, b ? this.set(c, Bb) : this
            },
            clone: function() {
                var a = new Hb(this.getTime());
                return a.utc(!!this._utc), a
            }
        }), Hb.extend({
            iso: function() {
                return this.toISOString()
            },
            getWeekday: Hb.prototype.getDay,
            getUTCWeekday: Hb.prototype.getUTCDay
        }), Jb.extend({
            duration: function(a) {
                return _(a).ra(this)
            }
        }), dc = ec = Hb.addLocale("en", {
            plural: Bb,
            timeMarker: "at",
            ampm: "am,pm",
            months: "January,February,March,April,May,June,July,August,September,October,November,December",
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
            units: "millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",
            numbers: "one,two,three,four,five,six,seven,eight,nine,ten",
            articles: "a,an,the",
            tokens: "the,st|nd|rd|th,of",
            "short": "{Month} {d}, {yyyy}",
            "long": "{Month} {d}, {yyyy} {h}:{mm}{tt}",
            full: "{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
            past: "{num} {unit} {sign}",
            future: "{num} {unit} {sign}",
            duration: "{num} {unit}",
            modifiers: [{
                name: "sign",
                src: "ago|before",
                value: -1
            }, {
                name: "sign",
                src: "from now|after|from|in|later",
                value: 1
            }, {
                name: "edge",
                src: "last day",
                value: -2
            }, {
                name: "edge",
                src: "end",
                value: -1
            }, {
                name: "edge",
                src: "first day|beginning",
                value: 1
            }, {
                name: "shift",
                src: "last",
                value: -1
            }, {
                name: "shift",
                src: "the|this",
                value: 0
            }, {
                name: "shift",
                src: "next",
                value: 1
            }],
            dateParse: ["{num} {unit} {sign}", "{sign} {num} {unit}", "{month} {year}", "{shift} {unit=5-7}", "{0?} {date}{1}", "{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],
            timeParse: ["{0} {num}{1} {day} of {month} {year?}", "{weekday?} {month} {date}{1?} {year?}", "{date} {month} {year}", "{date} {month}", "{shift} {weekday}", "{shift} week {weekday}", "{weekday} {2?} {shift} week", "{num} {unit=4-5} {sign} {day}", "{0?} {date}{1} of {month}", "{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]
        }), hc = nc.concat().reverse(), gc = nc.concat(), gc.splice(2, 1), e(Hb, Bb, Db, nc, function(a, b, c) {
            function d(a) {
                a /= i;
                var c = a % 1,
                    d = b.error || .999;
                return c && Kb.abs(c % 1) > d && (a = u(a)), parseInt(a)
            }
            var e, f, g = b.$,
                h = cb(g),
                i = b.da();
            b.ia = "add" + h + "s", e = function(a, b) {
                return d(this.getTime() - Hb.create(a, b).getTime())
            }, f = function(a, b) {
                return d(Hb.create(a, b).getTime() - this.getTime())
            }, a[g + "sAgo"] = f, a[g + "sUntil"] = f, a[g + "sSince"] = e, a[g + "sFromNow"] = e, a[b.ia] = function(a, b) {
                var c = {};
                return c[g] = a, this.advance(c, b)
            }, ub(b, i), 3 > c && ["Last", "This", "Next"].forEach(function(b) {
                a["is" + b + h] = function() {
                    return this.is(b + " " + g)
                }
            }), 4 > c && (a["beginningOf" + h] = function() {
                var a = {};
                switch (g) {
                    case "year":
                        a.year = qb(this, "FullYear");
                        break;
                    case "month":
                        a.month = qb(this, "Month");
                        break;
                    case "day":
                        a.day = qb(this, "Date");
                        break;
                    case "week":
                        a.weekday = 0
                }
                return this.set(a, Bb)
            }, a["endOf" + h] = function() {
                var a = {
                    hours: 23,
                    minutes: 59,
                    seconds: 59,
                    milliseconds: 999
                };
                switch (g) {
                    case "year":
                        a.month = 11, a.day = 31;
                        break;
                    case "month":
                        a.day = this.daysInMonth();
                        break;
                    case "week":
                        a.weekday = 6
                }
                return this.set(a, Bb)
            })
        }), dc.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?", Bb, ["year_sign", "year", "month", "date"], Db, Bb), dc.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?", Bb, ["date", "month", "year"], Bb), dc.addFormat("{full_month}[-.](\\d{4,4})", Db, ["month", "year"]), dc.addFormat("\\/Date\\((\\d+(?:\\+\\d{4,4})?)\\)\\/", Db, ["timestamp"]), dc.addFormat(sb(jc, dc), Db, ic), lc = dc.ga.slice(0, 7).reverse(), dc.ga = dc.ga.slice(7).concat(lc), e(Hb, Bb, Db, "short,long,full", function(a, b) {
            a[b] = function(a) {
                return mb(this, b, Db, a)
            }
        }), "〇一二三四五六七八九十百千万".split("").forEach(function(a, b) {
            b > 9 && (b = Kb.pow(10, b - 9)), kc[a] = b
        }), "０１２３４５６７８９".split("").forEach(function(a, b) {
            kc[a] = b
        }), fc = Gb("([期週周])?([〇一二三四五六七八九十百千万０１２３４５６７８９]+)(?!昨)", "g"),
        function() {
            var a = "today,yesterday,tomorrow,weekday,weekend,future,past".split(","),
                b = dc.weekdays.slice(0, 7),
                c = dc.months.slice(0, 12);
            e(Hb, Bb, Db, a.concat(b).concat(c), function(a, b) {
                a["is" + cb(b)] = function(a) {
                    return this.is(b, 0, a)
                }
            })
        }(),
        function() {
            Hb.extend({
                utc: {
                    create: function() {
                        return tb(arguments, 0, Bb)
                    },
                    past: function() {
                        return tb(arguments, -1, Bb)
                    },
                    future: function() {
                        return tb(arguments, 1, Bb)
                    }
                }
            }, Db, Db)
        }(), Hb.extend({
            RFC1123: "{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",
            RFC1036: "{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",
            ISO8601_DATE: "{yyyy}-{MM}-{dd}",
            ISO8601_DATETIME: "{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"
        }, Db, Db), DateRange = function(a, b) {
            this.start = Hb.create(a), this.end = Hb.create(b)
        }, DateRange.prototype.toString = function() {
            return this.isValid() ? this.start.full() + ".." + this.end.full() : "Invalid DateRange"
        }, d(DateRange, Bb, Db, {
            isValid: function() {
                return this.start < this.end
            },
            duration: function() {
                return this.isValid() ? this.end.getTime() - this.start.getTime() : 0 / 0
            },
            contains: function(a) {
                var b = this;
                return (a.start && a.end ? [a.start, a.end] : [a]).every(function(a) {
                    return a >= b.start && a <= b.end
                })
            },
            every: function(a, b) {
                var c, d, e = this.start.clone(),
                    f = [],
                    g = 0;
                for (Vb(a) ? (e.advance(fb(a, 0), Bb), c = fb(a), d = "day" === a.toLowerCase()) : c = {
                        milliseconds: a
                    }; e <= this.end;) f.push(e), b && b(e, g), d && 23 === qb(e, "Hours") ? (e = e.clone(), rb(e, "Hours", 48)) : e = e.clone().advance(c, Bb), g++;
                return f
            },
            union: function(a) {
                return new DateRange(this.start < a.start ? this.start : a.start, this.end > a.end ? this.end : a.end)
            },
            intersect: function(a) {
                return new DateRange(this.start > a.start ? this.start : a.start, this.end < a.end ? this.end : a.end)
            },
            clone: function() {
                return new DateRange(this.start, this.end)
            }
        }), e(DateRange, Bb, Db, "Millisecond,Second,Minute,Hour,Day,Week,Month,Year", function(a, b) {
            a["each" + b] = function(a) {
                return this.every(b, a)
            }
        }), d(Hb, Db, Db, {
            range: function(a, b) {
                return new DateRange(a, b)
            }
        }), d(Function, Bb, Db, {
            lazy: function(a, b) {
                function c() {
                    return (!j || i.length < b - 1) && (i.push([this, arguments]), d()), g
                }
                var d, e, f, g, h = this,
                    i = [],
                    j = Db;
                return a = a || 1, b = b || 1 / 0, e = u(a, void 0, "ceil"), f = u(e / a) || 1, d = function() {
                    if (!j && 0 != i.length) {
                        for (var a = Kb.max(i.length - f, 0); i.length > a;) g = Function.prototype.apply.apply(h, i.shift());
                        vb(c, e, function() {
                            j = Db, d()
                        }), j = Bb
                    }
                }, c
            },
            delay: function(a) {
                var b = i(arguments).slice(1);
                return vb(this, a, this, this, b), this
            },
            throttle: function(a) {
                return this.lazy(a, 1)
            },
            debounce: function(a) {
                function b() {
                    b.cancel(), vb(b, a, c, this, arguments)
                }
                var c = this;
                return b
            },
            cancel: function() {
                if (Qb(this.timers))
                    for (; this.timers.length > 0;) clearTimeout(this.timers.shift());
                return this
            },
            after: function(a) {
                var b = this,
                    c = 0,
                    d = [];
                if (Ub(a)) {
                    if (0 === a) return b.call(), b
                } else a = 1;
                return function() {
                    var e;
                    return d.push(i(arguments)), c++, c == a ? (e = b.call(this, d), c = 0, d = [], e) : void 0
                }
            },
            once: function() {
                return this.throttle(1 / 0)
            },
            fill: function() {
                var a = this,
                    b = i(arguments);
                return function() {
                    var c = i(arguments);
                    return b.forEach(function(a, b) {
                        (a != Cb || b >= c.length) && c.splice(b, 0, a)
                    }), a.apply(this, c)
                }
            }
        }), d(Jb, Db, Db, {
            random: function(a, b) {
                var c, d;
                return 1 == arguments.length && (b = a, a = 0), c = Kb.min(a || 0, m(b) ? 1 : b), d = Kb.max(a || 0, m(b) ? 1 : b) + 1, v(Kb.random() * (d - c) + c)
            }
        }), d(Jb, Bb, Db, {
            log: function(a) {
                return Kb.log(this) / (a ? Kb.log(a) : 1)
            },
            abbr: function(a) {
                return wb(this, a, "kmbt", 0, 4)
            },
            metric: function(a, b) {
                return wb(this, a, "nμm kMGTPE", 4, m(b) ? 1 : b)
            },
            bytes: function(a, b) {
                return wb(this, a, "kMGTPE", 0, m(b) ? 4 : b, Bb) + "B"
            },
            isInteger: function() {
                return 0 == this % 1
            },
            isOdd: function() {
                return !isNaN(this) && !this.isMultipleOf(2)
            },
            isEven: function() {
                return this.isMultipleOf(2)
            },
            isMultipleOf: function(a) {
                return 0 === this % a
            },
            format: function(a, b, c) {
                var d, e, f, g = "";
                for (m(b) && (b = ","), m(c) && (c = "."), d = (Ub(a) ? u(this, a || 0).toFixed(Kb.max(a, 0)) : this.toString()).replace(/^-/, "").split("."), e = d[0], f = d[1], d = e.length; d > 0; d -= 3) d < e.length && (g = b + g), g = e.slice(Kb.max(0, d - 3), d) + g;
                return f && (g += c + z((a || 0) - f.length, "0") + f), (0 > this ? "-" : "") + g
            },
            hex: function(a) {
                return this.pad(a || 1, Db, 16)
            },
            upto: function(a, b, c) {
                return t(this, a, b, c || 1)
            },
            downto: function(a, b, c) {
                return t(this, a, b, -(c || 1))
            },
            times: function(a) {
                if (a)
                    for (var b = 0; this > b; b++) a.call(this, b);
                return this.toNumber()
            },
            chr: function() {
                return Ib.fromCharCode(this)
            },
            pad: function(a, b, c) {
                return w(this, a, b, c)
            },
            ordinalize: function() {
                var a = this.abs();
                return a = parseInt(a.toString().slice(-2)), this + x(a)
            },
            toNumber: function() {
                return parseFloat(this, 10)
            }
        }), e(Jb, Bb, Db, "round,floor,ceil", function(a, b) {
            a[b] = function(a) {
                return u(this, a, b)
            }
        }), e(Jb, Bb, Db, "abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt", function(a, b) {
            a[b] = function(a, c) {
                return Kb[b](this, a, c)
            }
        });
    var pc = "isObject,isNaN".split(","),
        qc = "keys,values,select,reject,each,merge,clone,equal,watch,tap,has,toQueryString".split(",");
    d(Eb, Db, Bb, {
            watch: function(a, b, c) {
                if (Ob) {
                    var d = a[b];
                    Eb.defineProperty(a, b, {
                        enumerable: Bb,
                        configurable: Bb,
                        get: function() {
                            return d
                        },
                        set: function(e) {
                            d = c.call(a, b, d, e)
                        }
                    })
                }
            }
        }), d(Eb, Db, function(a, b) {
            return Tb(b)
        }, {
            keys: function(a, b) {
                var c = Eb.keys(a);
                return c.forEach(function(c) {
                    b.call(a, c, a[c])
                }), c
            }
        }), d(Eb, Db, Db, {
            isObject: function(a) {
                return o(a)
            },
            isNaN: function(a) {
                return Ub(a) && a.valueOf() !== a.valueOf()
            },
            equal: function(a, b) {
                return D(a) && D(b) ? C(a) === C(b) : a === b
            },
            extended: function(a) {
                return new s(a)
            },
            merge: function(a, b, c, d) {
                var e, f;
                if (a && "string" != typeof b)
                    for (e in b)
                        if (p(b, e) && a) {
                            if (f = b[e], l(a[e])) {
                                if (d === Db) continue;
                                Tb(d) && (f = d.call(b, e, a[e], b[e]))
                            }
                            if (c === Bb && f && n(f))
                                if (Sb(f)) f = new Hb(f.getTime());
                                else {
                                    if (!Wb(f)) {
                                        a[e] || (a[e] = Fb.isArray(f) ? [] : {}), Eb.merge(a[e], b[e], c, d);
                                        continue
                                    }
                                    f = new Gb(f.source, A(f))
                                }
                            a[e] = f
                        }
                return a
            },
            values: function(a, b) {
                var c = [];
                return q(a, function(d, e) {
                    c.push(e), b && b.call(a, e)
                }), c
            },
            clone: function(a, b) {
                var c;
                return Sb(a) && a.clone ? a.clone() : n(a) ? (c = a instanceof s ? new s : new a.constructor, Eb.merge(c, a, b)) : a
            },
            fromQueryString: function(a, b) {
                var c = Eb.extended();
                return a = a && a.toString ? a.toString() : "", a.replace(/^.*?\?/, "").split("&").forEach(function(a) {
                    a = a.split("="), 2 === a.length && xb(c, a[0], decodeURIComponent(a[1]), b)
                }), c
            },
            toQueryString: function(a, b) {
                return yb(b, a)
            },
            tap: function(a, b) {
                var c = b;
                return Tb(b) || (c = function() {
                    b && a[b]()
                }), c.call(a, a), a
            },
            has: function(a, b) {
                return p(a, b)
            },
            select: function(a) {
                return Ab(a, arguments, Bb)
            },
            reject: function(a) {
                return Ab(a, arguments, Db)
            }
        }), e(Eb, Db, Db, Pb, function(a, b) {
            var c = "is" + b;
            pc.push(c), a[c] = Nb[b]
        }),
        function() {
            d(Eb, Db, function() {
                return 0 === arguments.length
            }, {
                extend: function() {
                    var a = pc.concat(qc);
                    "undefined" != typeof cc && (a = a.concat(cc)), F(a, Eb)
                }
            })
        }(), F(qc, s), d(Gb, Db, Db, {
            escape: function(a) {
                return B(a)
            }
        }), d(Gb, Bb, Db, {
            getFlags: function() {
                return A(this)
            },
            setFlags: function(a) {
                return Gb(this.source, a)
            },
            addFlag: function(a) {
                return this.setFlags(A(this, a))
            },
            removeFlag: function(a) {
                return this.setFlags(A(this).replace(a, ""))
            }
        });
    var rc, sc;
    d(Ib, Bb, function(a) {
            return Wb(a) || arguments.length > 2
        }, {
            startsWith: function(a, b, c) {
                var d = this;
                return b && (d = d.slice(b)), m(c) && (c = Bb), a = Wb(a) ? a.source.replace("^", "") : B(a), Gb("^" + a, c ? "" : "i").test(d)
            },
            endsWith: function(a, b, c) {
                var d = this;
                return l(b) && (d = d.slice(0, b)), m(c) && (c = Bb), a = Wb(a) ? a.source.replace("$", "") : B(a), Gb(a + "$", c ? "" : "i").test(d)
            }
        }), d(Ib, Bb, Db, {
            escapeRegExp: function() {
                return B(this)
            },
            escapeURL: function(a) {
                return a ? encodeURIComponent(this) : encodeURI(this)
            },
            unescapeURL: function(a) {
                return a ? decodeURI(this) : decodeURIComponent(this)
            },
            escapeHTML: function() {
                return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2f;")
            },
            unescapeHTML: function() {
                return this.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#x2f;/g, "/").replace(/&amp;/g, "&")
            },
            encodeBase64: function() {
                return rc(this)
            },
            decodeBase64: function() {
                return sc(this)
            },
            each: function(a, b) {
                var c, d, e;
                if (Tb(a) ? (b = a, a = /[\s\S]/g) : a ? Vb(a) ? a = Gb(B(a), "gi") : Wb(a) && (a = Gb(a.source, A(a, "g"))) : a = /[\s\S]/g, c = this.match(a) || [], b)
                    for (d = 0, e = c.length; e > d; d++) c[d] = b.call(this, c[d], d, c) || c[d];
                return c
            },
            shift: function(a) {
                var b = "";
                return a = a || 0, this.codes(function(c) {
                    b += Ib.fromCharCode(c + a)
                }), b
            },
            codes: function(a) {
                var b, c, d = [];
                for (b = 0, c = this.length; c > b; b++) {
                    var e = this.charCodeAt(b);
                    d.push(e), a && a.call(this, e, b)
                }
                return d
            },
            chars: function(a) {
                return this.each(a)
            },
            words: function(a) {
                return this.trim().each(/\S+/g, a)
            },
            lines: function(a) {
                return this.trim().each(/^.*$/gm, a)
            },
            paragraphs: function(a) {
                var b = this.trim().split(/[\r\n]{2,}/);
                return b = b.map(function(b) {
                    if (a) var c = a.call(b);
                    return c ? c : b
                })
            },
            isBlank: function() {
                return 0 === this.trim().length
            },
            has: function(a) {
                return -1 !== this.search(Wb(a) ? a : B(a))
            },
            add: function(a, b) {
                return b = m(b) ? this.length : b, this.slice(0, b) + a + this.slice(b)
            },
            remove: function(a) {
                return this.replace(a, "")
            },
            reverse: function() {
                return this.split("").reverse().join("")
            },
            compact: function() {
                return this.trim().replace(/([\r\n\s\u3000])+/g, function(a, b) {
                    return "　" === b ? b : " "
                })
            },
            at: function() {
                return E(this, arguments, Bb)
            },
            from: function(a) {
                return this.slice(a)
            },
            to: function(a) {
                return m(a) && (a = this.length), this.slice(0, a)
            },
            dasherize: function() {
                return this.underscore().replace(/_/g, "-")
            },
            underscore: function() {
                return this.replace(/[-\s]+/g, "_").replace(Ib.Inflector && Ib.Inflector.acronymRegExp, function(a, b) {
                    return (b > 0 ? "_" : "") + a.toLowerCase()
                }).replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase()
            },
            camelize: function(a) {
                return this.underscore().replace(/(^|_)([^_]+)/g, function(b, c, d, e) {
                    return b = d, b = (c = Ib.Inflector) && c.acronyms[b], b = Vb(b) ? b : void 0, e = a !== Db || e > 0, b ? e ? b : b.toLowerCase() : e ? d.capitalize() : d
                })
            },
            spacify: function() {
                return this.underscore().replace(/_/g, " ")
            },
            stripTags: function() {
                var a = this;
                return j(arguments.length > 0 ? arguments : [""], function(b) {
                    a = a.replace(Gb("</?" + B(b) + "[^<>]*>", "gi"), "")
                }), a
            },
            removeTags: function() {
                var a = this;
                return j(arguments.length > 0 ? arguments : ["\\S+"], function(b) {
                    b = Gb("<(" + b + ")[^<>]*(?:\\/>|>.*?<\\/\\1>)", "gi"), a = a.replace(b, "")
                }), a
            },
            truncate: function(a, b, c, d) {
                var e = "",
                    f = "",
                    g = this.toString(),
                    h = "[" + y() + "]+",
                    i = "[^" + y() + "]*",
                    j = Gb(h + i + "$");
                if (d = m(d) ? "..." : Ib(d), g.length <= a) return g;
                switch (c) {
                    case "left":
                        a = g.length - a, e = d, g = g.slice(a), j = Gb("^" + i + h);
                        break;
                    case "middle":
                        a = v(a / 2), f = d + g.slice(g.length - a).trimLeft(), g = g.slice(0, a);
                        break;
                    default:
                        a = a, f = d, g = g.slice(0, a)
                }
                return b === Db && this.slice(a, a + 1).match(/\S/) && (g = g.remove(j)), e + g + f
            },
            pad: function(a, b) {
                return z(b, a) + this + z(b, a)
            },
            padLeft: function(a, b) {
                return z(b, a) + this
            },
            padRight: function(a, b) {
                return this + z(b, a)
            },
            first: function(a) {
                return m(a) && (a = 1), this.substr(0, a)
            },
            last: function(a) {
                return m(a) && (a = 1), this.substr(this.length - a < 0 ? 0 : this.length - a)
            },
            repeat: function(a) {
                var b = "",
                    c = this;
                if (!Ub(a) || 1 > a) return "";
                for (; a;) 1 & a && (b += c), (a >>= 1) && (c += c);
                return b
            },
            toNumber: function(a) {
                var b = this.replace(/,/g, "");
                return b.match(/\./) ? parseFloat(b) : parseInt(b, a || 10)
            },
            capitalize: function(a) {
                var b;
                return this.toLowerCase().replace(a ? /[\s\S]/g : /^\S/, function(a) {
                    var c, d = a.toUpperCase();
                    return c = b ? a : d, b = d !== a, c
                })
            },
            assign: function() {
                var a = {};
                return i(arguments, function(b, c) {
                    o(b) ? r(a, b) : a[c + 1] = b
                }), this.replace(/\{([^{]+?)\}/g, function(b, c) {
                    return p(a, c) ? a[c] : b
                })
            }
        }), d(Ib, Bb, Db, {
            insert: Ib.prototype.add
        }),
        function(a) {
            if (this.btoa) rc = this.btoa, sc = this.atob;
            else {
                var b = /[^A-Za-z0-9\+\/\=]/g;
                rc = function(b) {
                    var c, d, e, f, g, h, i = "",
                        j = 0;
                    do c = b.charCodeAt(j++), d = b.charCodeAt(j++), e = b.charCodeAt(j++), f = c >> 2, c = (3 & c) << 4 | d >> 4, g = (15 & d) << 2 | e >> 6, h = 63 & e, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), i = i + a.charAt(f) + a.charAt(c) + a.charAt(g) + a.charAt(h); while (j < b.length);
                    return i
                }, sc = function(c) {
                    var d, e, f, g, h, i = "",
                        j = 0;
                    if (c.match(b)) throw Error("String contains invalid base64 characters");
                    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    do d = a.indexOf(c.charAt(j++)), e = a.indexOf(c.charAt(j++)), g = a.indexOf(c.charAt(j++)), h = a.indexOf(c.charAt(j++)), d = d << 2 | e >> 4, e = (15 & e) << 4 | g >> 2, f = (3 & g) << 6 | h, i += Ib.fromCharCode(d), 64 != g && (i += Ib.fromCharCode(e)), 64 != h && (i += Ib.fromCharCode(f)); while (j < c.length);
                    return i
                }
            }
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
}(),
function(a, b) {
    function c(a) {
        var b = a.length,
            c = ib.type(a);
        return ib.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = xb[a] = {};
        return ib.each(a.match(kb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e(a, c, d, e) {
        if (ib.acceptData(a)) {
            var f, g, h = ib.expando,
                i = "string" == typeof c,
                j = a.nodeType,
                k = j ? ib.cache : a,
                l = j ? a[h] : a[h] && h;
            if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.pop() || ib.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = ib.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = ib.extend(k[l], c) : k[l].data = ib.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[ib.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[ib.camelCase(c)])) : g = f, g
        }
    }

    function f(a, b, c) {
        if (ib.acceptData(a)) {
            var d, e, f, g = a.nodeType,
                i = g ? ib.cache : a,
                j = g ? a[ib.expando] : ib.expando;
            if (i[j]) {
                if (b && (f = c ? i[j] : i[j].data)) {
                    ib.isArray(b) ? b = b.concat(ib.map(b, ib.camelCase)) : b in f ? b = [b] : (b = ib.camelCase(b), b = b in f ? [b] : b.split(" "));
                    for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                    if (!(c ? h : ib.isEmptyObject)(f)) return
                }(c || (delete i[j].data, h(i[j]))) && (g ? ib.cleanData([a], !0) : ib.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
            }
        }
    }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(zb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : yb.test(d) ? ib.parseJSON(d) : d
                } catch (f) {}
                ib.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ib.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function i() {
        return !0
    }

    function j() {
        return !1
    }

    function k(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function l(a, b, c) {
        if (b = b || 0, ib.isFunction(b)) return ib.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return ib.grep(a, function(a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = ib.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Rb.test(b)) return ib.filter(b, d, !c);
            b = ib.filter(b, d)
        }
        return ib.grep(a, function(a) {
            return ib.inArray(a, b) >= 0 === c
        })
    }

    function m(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function n(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function o(a) {
        var b = a.getAttributeNode("type");
        return a.type = (b && b.specified) + "/" + a.type, a
    }

    function p(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function q(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ib._data(c, "globalEval", !b || ib._data(b[d], "globalEval"))
    }

    function r(a, b) {
        if (1 === b.nodeType && ib.hasData(a)) {
            var c, d, e, f = ib._data(a),
                g = ib._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) ib.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ib.extend({}, g.data))
        }
    }

    function s(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ib.support.noCloneEvent && b[ib.expando]) {
                e = ib._data(b);
                for (d in e.events) ib.removeEvent(b, d, e.handle);
                b.removeAttribute(ib.expando)
            }
            "script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ib.support.html5Clone && a.innerHTML && !ib.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function t(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== V ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== V ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ib.nodeName(e, c) ? g.push(e) : ib.merge(g, t(e, c));
        return c === b || c && ib.nodeName(a, c) ? ib.merge([a], g) : g
    }

    function u(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }

    function v(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
            if (b = yc[e] + c, b in a) return b;
        return d
    }

    function w(a, b) {
        return a = b || a, "none" === ib.css(a, "display") || !ib.contains(a.ownerDocument, a)
    }

    function x(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ib._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && w(d) && (f[g] = ib._data(d, "olddisplay", B(d.nodeName)))) : f[g] || (e = w(d), (c && "none" !== c || !e) && ib._data(d, "olddisplay", e ? c : ib.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function y(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ib.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= ib.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= ib.css(a, "border" + xc[f] + "Width", !0, e))) : (g += ib.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += ib.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (ib.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a) {
        var b = W,
            c = uc[a];
        return c || (c = C(a, b), "none" !== c && c || (jc = (jc || ib("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jc.detach()), uc[a] = c), c
    }

    function C(a, b) {
        var c = ib(b.createElement(a)).appendTo(b.body),
            d = ib.css(c[0], "display");
        return c.remove(), d
    }

    function D(a, b, c, d) {
        var e;
        if (ib.isArray(b)) ib.each(b, function(b, e) {
            c || Ac.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ib.type(b)) d(a, b);
        else
            for (e in b) D(a + "[" + e + "]", b[e], c, d)
    }

    function E(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(kb) || [];
            if (ib.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function F(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ib.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Rc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function G(a, c) {
        var d, e, f = ib.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ib.extend(!0, a, d), a
    }

    function H(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (h in k) h in d && (c[k[h]] = d[h]);
        for (;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function I(a, b) {
        var c, d, e, f, g = {},
            h = 0,
            i = a.dataTypes.slice(),
            j = i[0];
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1])
            for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
        for (; d = i[++h];)
            if ("*" !== d) {
                if ("*" !== j && j !== d) {
                    if (e = g[j + " " + d] || g["* " + d], !e)
                        for (c in g)
                            if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) {
                                e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                                break
                            }
                    if (e !== !0)
                        if (e && a["throws"]) b = e(b);
                        else try {
                            b = e(b)
                        } catch (k) {
                            return {
                                state: "parsererror",
                                error: e ? k : "No conversion from " + j + " to " + d
                            }
                        }
                }
                j = d
            }
        return {
            state: "success",
            data: b
        }
    }

    function J() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function K() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function L() {
        return setTimeout(function() {
            $c = b
        }), $c = ib.now()
    }

    function M(a, b) {
        ib.each(b, function(b, c) {
            for (var d = (ed[b] || []).concat(ed["*"]), e = 0, f = d.length; f > e; e++)
                if (d[e].call(a, b, c)) return
        })
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = ib.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $c || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ib.extend({}, b),
                opts: ib.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $c || L(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ib.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (O(k, j.opts.specialEasing); g > f; f++)
            if (d = dd[f].call(j, a, k, j.opts)) return d;
        return M(j, k), ib.isFunction(j.opts.start) && j.opts.start.call(a, j), ib.fx.timer(ib.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a, b) {
        var c, d, e, f, g;
        for (e in a)
            if (d = ib.camelCase(e), f = b[d], c = a[e], ib.isArray(c) && (f = c[1], c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = ib.cssHooks[d], g && "expand" in g) {
                c = g.expand(c), delete a[d];
                for (e in c) e in a || (a[e] = c[e], b[e] = f)
            } else b[d] = f
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this,
            n = a.style,
            o = {},
            p = [],
            q = a.nodeType && w(a);
        c.queue || (k = ib._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
            k.unqueued || l()
        }), k.unqueued++, m.always(function() {
            m.always(function() {
                k.unqueued--, ib.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === ib.css(a, "display") && "none" === ib.css(a, "float") && (ib.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ib.support.shrinkWrapBlocks || m.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (e in b)
            if (g = b[e], ad.exec(g)) {
                if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
                p.push(e)
            }
        if (f = p.length) {
            h = ib._data(a, "fxshow") || ib._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? ib(a).show() : m.done(function() {
                ib(a).hide()
            }), m.done(function() {
                var b;
                ib._removeData(a, "fxshow");
                for (b in o) ib.style(a, b, o[b])
            });
            for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || ib.style(a, d), d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e)
    }

    function R(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function S(a) {
        return ib.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var T, U, V = typeof b,
        W = a.document,
        X = a.location,
        Y = a.jQuery,
        Z = a.$,
        $ = {},
        _ = [],
        ab = "1.9.1",
        bb = _.concat,
        cb = _.push,
        db = _.slice,
        eb = _.indexOf,
        fb = $.toString,
        gb = $.hasOwnProperty,
        hb = ab.trim,
        ib = function(a, b) {
            return new ib.fn.init(a, b, U)
        },
        jb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kb = /\S+/g,
        lb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ob = /^[\],:{}\s]*$/,
        pb = /(?:^|:|,)(?:\s*\[)+/g,
        qb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        sb = /^-ms-/,
        tb = /-([\da-z])/gi,
        ub = function(a, b) {
            return b.toUpperCase()
        },
        vb = function(a) {
            (W.addEventListener || "load" === a.type || "complete" === W.readyState) && (wb(), ib.ready())
        },
        wb = function() {
            W.addEventListener ? (W.removeEventListener("DOMContentLoaded", vb, !1), a.removeEventListener("load", vb, !1)) : (W.detachEvent("onreadystatechange", vb), a.detachEvent("onload", vb))
        };
    ib.fn = ib.prototype = {
        jquery: ab,
        constructor: ib,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : mb.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ib ? c[0] : c, ib.merge(this, ib.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : W, !0)), nb.test(e[1]) && ib.isPlainObject(c))
                        for (e in c) ib.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = W.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = W, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ib.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ib.makeArray(a, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return db.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function(a) {
            var b = ib.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return ib.each(this, a, b)
        },
        ready: function(a) {
            return ib.ready.promise().done(a), this
        },
        slice: function() {
            return this.pushStack(db.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function(a) {
            return this.pushStack(ib.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: cb,
        sort: [].sort,
        splice: [].splice
    }, ib.fn.init.prototype = ib.fn, ib.extend = ib.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ib.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (f = arguments[i]))
                for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ib.isPlainObject(d) || (c = ib.isArray(d))) ? (c ? (c = !1, g = a && ib.isArray(a) ? a : []) : g = a && ib.isPlainObject(a) ? a : {}, h[e] = ib.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    }, ib.extend({
        noConflict: function(b) {
            return a.$ === ib && (a.$ = Z), b && a.jQuery === ib && (a.jQuery = Y), ib
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ib.readyWait++ : ib.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--ib.readyWait : !ib.isReady) {
                if (!W.body) return setTimeout(ib.ready);
                ib.isReady = !0, a !== !0 && --ib.readyWait > 0 || (T.resolveWith(W, [ib]), ib.fn.trigger && ib(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === ib.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ib.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? $[fb.call(a)] || "object" : typeof a
        },
        isPlainObject: function(a) {
            if (!a || "object" !== ib.type(a) || a.nodeType || ib.isWindow(a)) return !1;
            try {
                if (a.constructor && !gb.call(a, "constructor") && !gb.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || gb.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || W;
            var d = nb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ib.buildFragment([a], b, e), e && ib(e).remove(), ib.merge([], d.childNodes))
        },
        parseJSON: function(b) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = ib.trim(b), b && ob.test(b.replace(qb, "@").replace(rb, "]").replace(pb, ""))) ? new Function("return " + b)() : (ib.error("Invalid JSON: " + b), void 0)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ib.error("Invalid XML: " + c), d
        },
        noop: function() {},
        globalEval: function(b) {
            b && ib.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(sb, "ms-").replace(tb, ub)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: hb && !hb.call("﻿ ") ? function(a) {
            return null == a ? "" : hb.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(lb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ib.merge(d, "string" == typeof a ? [a] : a) : cb.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (eb) return eb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return bb.apply([], i)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ib.isFunction(a) ? (d = db.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(db.call(arguments)))
            }, e.guid = a.guid = a.guid || ib.guid++, e) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === ib.type(d)) {
                f = !0;
                for (i in d) ib.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, ib.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                    return k.call(ib(a), c)
                })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }), ib.ready.promise = function(b) {
        if (!T)
            if (T = ib.Deferred(), "complete" === W.readyState) setTimeout(ib.ready);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", vb, !1), a.addEventListener("load", vb, !1);
        else {
            W.attachEvent("onreadystatechange", vb), a.attachEvent("onload", vb);
            var c = !1;
            try {
                c = null == a.frameElement && W.documentElement
            } catch (d) {}
            c && c.doScroll && function e() {
                if (!ib.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    wb(), ib.ready()
                }
            }()
        }
        return T.promise(b)
    }, ib.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        $["[object " + b + "]"] = b.toLowerCase()
    }), U = ib(W);
    var xb = {};
    ib.Callbacks = function(a) {
        a = "string" == typeof a ? xb[a] || d(a) : ib.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        e = !1;
                        break
                    }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            ib.each(b, function(b, c) {
                                var e = ib.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function() {
                    return j && ib.each(arguments, function(a, b) {
                        for (var d;
                            (d = ib.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function(a) {
                    return a ? ib.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = k = e = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, e || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return m
    }, ib.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", ib.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ib.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ib.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ib.Deferred(function(c) {
                            ib.each(b, function(b, f) {
                                var g = f[0],
                                    h = ib.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && ib.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ib.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ib.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = db.call(arguments),
                g = f.length,
                h = 1 !== g || a && ib.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ib.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? db.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ib.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), ib.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l = W.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*"), d = l.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
        f = W.createElement("select"), h = f.appendChild(W.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            getSetAttribute: "t" !== l.className,
            leadingWhitespace: 3 === l.firstChild.nodeType,
            tbody: !l.getElementsByTagName("tbody").length,
            htmlSerialize: !!l.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: !!e.value,
            optSelected: h.selected,
            enctype: !!W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = W.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = W.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
                submit: !0,
                change: !0,
                focusin: !0
            }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        return l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, ib(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = W.getElementsByTagName("body")[0];
            g && (c = W.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === l.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(W.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== V && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }();
    var yb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        zb = /([A-Z])/g;
    ib.extend({
        cache: {},
        expando: "jQuery" + (ab + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? ib.cache[a[ib.expando]] : a[ib.expando], !!a && !h(a)
        },
        data: function(a, b, c) {
            return e(a, b, c)
        },
        removeData: function(a, b) {
            return f(a, b)
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return f(a, b, !0)
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ib.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), ib.fn.extend({
        data: function(a, c) {
            var d, e, f = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = ib.data(f), 1 === f.nodeType && !ib._data(f, "parsedAttrs"))) {
                    for (d = f.attributes; h < d.length; h++) e = d[h].name, e.indexOf("data-") || (e = ib.camelCase(e.slice(5)), g(f, e, i[e]));
                    ib._data(f, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function() {
                ib.data(this, a)
            }) : ib.access(this, function(c) {
                return c === b ? f ? g(f, a, ib.data(f, a)) : null : (this.each(function() {
                    ib.data(this, a, c)
                }), void 0)
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                ib.removeData(this, a)
            })
        }
    }), ib.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ib._data(a, b), c && (!d || ib.isArray(c) ? d = ib._data(a, b, ib.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ib.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ib._queueHooks(a, b),
                g = function() {
                    ib.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ib._data(a, c) || ib._data(a, c, {
                empty: ib.Callbacks("once memory").add(function() {
                    ib._removeData(a, b + "queue"), ib._removeData(a, c)
                })
            })
        }
    }), ib.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? ib.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = ib.queue(this, a, c);
                ib._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ib.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ib.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = ib.fx ? ib.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = ib.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ib._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Ab, Bb, Cb = /[\t\r\n]/g,
        Db = /\r/g,
        Eb = /^(?:input|select|textarea|button|object)$/i,
        Fb = /^(?:a|area)$/i,
        Gb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Hb = /^(?:checked|selected)$/i,
        Ib = ib.support.getSetAttribute,
        Jb = ib.support.input;
    ib.fn.extend({
        attr: function(a, b) {
            return ib.access(this, ib.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ib.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return ib.access(this, ib.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ib.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function(b) {
                ib(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = ib.trim(d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function(b) {
                ib(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? ib.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return ib.isFunction(a) ? this.each(function(c) {
                ib(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = ib(this), h = b, i = a.match(kb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === V || "boolean" === c) && (this.className && ib._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ib._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Cb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = ib.isFunction(a), this.each(function(c) {
                    var f, g = ib(this);
                    1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ib.isArray(f) && (f = ib.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), d = ib.valHooks[this.type] || ib.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return d = ib.valHooks[f.type] || ib.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)
            }
        }
    }), ib.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (ib.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ib.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ib(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c = ib.makeArray(b);
                    return ib(a).find("option").each(function() {
                        this.selected = ib.inArray(ib(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return typeof a.getAttribute === V ? ib.prop(a, c, d) : (f = 1 !== h || !ib.isXMLDoc(a), f && (c = c.toLowerCase(), e = ib.attrHooks[c] || (Gb.test(c) ? Bb : Ab)), d === b ? e && f && "get" in e && null !== (g = e.get(a, c)) ? g : (typeof a.getAttribute !== V && (g = a.getAttribute(c)), null == g ? b : g) : null !== d ? e && f && "set" in e && (g = e.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : (ib.removeAttr(a, c), void 0))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(kb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ib.propFix[c] || c, Gb.test(c) ? !Ib && Hb.test(c) ? a[ib.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : ib.attr(a, c, ""), a.removeAttribute(Ib ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ib.support.radioValue && "radio" === b && ib.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !ib.isXMLDoc(a), g && (c = ib.propFix[c] || c, f = ib.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Eb.test(a.nodeName) || Fb.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), Bb = {
        get: function(a, c) {
            var d = ib.prop(a, c),
                e = "boolean" == typeof d && a.getAttribute(c),
                f = "boolean" == typeof d ? Jb && Ib ? null != e : Hb.test(c) ? a[ib.camelCase("default-" + c)] : !!e : a.getAttributeNode(c);
            return f && f.value !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            return b === !1 ? ib.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && ib.propFix[c] || c, c) : a[ib.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, Jb && Ib || (ib.attrHooks.value = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return ib.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b
        },
        set: function(a, b, c) {
            return ib.nodeName(a, "input") ? (a.defaultValue = b, void 0) : Ab && Ab.set(a, b, c)
        }
    }), Ib || (Ab = ib.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, ib.attrHooks.contenteditable = {
        get: Ab.get,
        set: function(a, b, c) {
            Ab.set(a, "" === b ? !1 : b, c)
        }
    }, ib.each(["width", "height"], function(a, b) {
        ib.attrHooks[b] = ib.extend(ib.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    })), ib.support.hrefNormalized || (ib.each(["href", "src", "width", "height"], function(a, c) {
        ib.attrHooks[c] = ib.extend(ib.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null == d ? b : d
            }
        })
    }), ib.each(["href", "src"], function(a, b) {
        ib.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    })), ib.support.style || (ib.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }), ib.support.optSelected || (ib.propHooks.selected = ib.extend(ib.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), ib.support.enctype || (ib.propFix.enctype = "encoding"), ib.support.checkOn || ib.each(["radio", "checkbox"], function() {
        ib.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), ib.each(["radio", "checkbox"], function() {
        ib.valHooks[this] = ib.extend(ib.valHooks[this], {
            set: function(a, b) {
                return ib.isArray(b) ? a.checked = ib.inArray(ib(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Kb = /^(?:input|select|textarea)$/i,
        Lb = /^key/,
        Mb = /^(?:mouse|contextmenu)|click/,
        Nb = /^(?:focusinfocus|focusoutblur)$/,
        Ob = /^([^.]*)(?:\.(.+)|)$/;
    ib.event = {
            global: {},
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q, r = ib._data(a);
                if (r) {
                    for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ib.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                            return typeof ib === V || a && ib.event.triggered === a.type ? b : ib.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = a), c = (c || "").match(kb) || [""], i = c.length; i--;) g = Ob.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), k = ib.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ib.event.special[o] || {}, m = ib.extend({
                        type: o,
                        origType: q,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && ib.expr.match.needsContext.test(f),
                        namespace: p.join(".")
                    }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ib.event.global[o] = !0;
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ib.hasData(a) && ib._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(kb) || [""], j = b.length; j--;)
                        if (h = Ob.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ib.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ib.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ib.event.remove(a, n + b[j], c, d, !0);
                    ib.isEmptyObject(k) && (delete q.handle, ib._removeData(a, "events"))
                }
            },
            trigger: function(c, d, e, f) {
                var g, h, i, j, k, l, m, n = [e || W],
                    o = gb.call(c, "type") ? c.type : c,
                    p = gb.call(c, "namespace") ? c.namespace.split(".") : [];
                if (i = l = e = e || W, 3 !== e.nodeType && 8 !== e.nodeType && !Nb.test(o + ib.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[ib.expando] ? c : new ib.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ib.makeArray(d, [c]), k = ib.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                    if (!f && !k.noBubble && !ib.isWindow(e)) {
                        for (j = k.delegateType || o, Nb.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                        l === (e.ownerDocument || W) && n.push(l.defaultView || l.parentWindow || a)
                    }
                    for (m = 0;
                        (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ib._data(i, "events") || {})[c.type] && ib._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ib.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                    if (c.type = o, !(f || c.isDefaultPrevented() || k._default && k._default.apply(e.ownerDocument, d) !== !1 || "click" === o && ib.nodeName(e, "a") || !ib.acceptData(e) || !h || !e[o] || ib.isWindow(e))) {
                        l = e[h], l && (e[h] = null), ib.event.triggered = o;
                        try {
                            e[o]()
                        } catch (q) {}
                        ib.event.triggered = b, l && (e[h] = l)
                    }
                    return c.result
                }
            },
            dispatch: function(a) {
                a = ib.event.fix(a);
                var c, d, e, f, g, h = [],
                    i = db.call(arguments),
                    j = (ib._data(this, "events") || {})[a.type] || [],
                    k = ib.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = ib.event.handlers.call(this, a, j), c = 0;
                        (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, g = 0;
                            (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ib.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, c) {
                var d, e, f, g, h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j != this; j = j.parentNode || this)
                        if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                            for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ib(d, this).index(j) >= 0 : ib.find(d, this, null, [j]).length), f[d] && f.push(e);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return i < c.length && h.push({
                    elem: this,
                    handlers: c.slice(i)
                }), h
            },
            fix: function(a) {
                if (a[ib.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Mb.test(e) ? this.mouseHooks : Lb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ib.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || W), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || W, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return ib.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== W.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === W.activeElement && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== b && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = ib.extend(new ib.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? ib.event.trigger(e, null, b) : ib.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ib.removeEvent = W.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === V && (a[d] = null), a.detachEvent(d, c))
        }, ib.Event = function(a, b) {
            return this instanceof ib.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && ib.extend(this, b), this.timeStamp = a && a.timeStamp || ib.now(), this[ib.expando] = !0, void 0) : new ib.Event(a, b)
        }, ib.Event.prototype = {
            isDefaultPrevented: j,
            isPropagationStopped: j,
            isImmediatePropagationStopped: j,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = i, this.stopPropagation()
            }
        }, ib.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            ib.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ib.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ib.support.submitBubbles || (ib.event.special.submit = {
            setup: function() {
                return ib.nodeName(this, "form") ? !1 : (ib.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = ib.nodeName(c, "input") || ib.nodeName(c, "button") ? c.form : b;
                    d && !ib._data(d, "submitBubbles") && (ib.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), ib._data(d, "submitBubbles", !0))
                }), void 0)
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ib.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return ib.nodeName(this, "form") ? !1 : (ib.event.remove(this, "._submit"), void 0)
            }
        }), ib.support.changeBubbles || (ib.event.special.change = {
            setup: function() {
                return Kb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ib.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), ib.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), ib.event.simulate("change", this, a, !0)
                })), !1) : (ib.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Kb.test(b.nodeName) && !ib._data(b, "changeBubbles") && (ib.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || ib.event.simulate("change", this.parentNode, a, !0)
                    }), ib._data(b, "changeBubbles", !0))
                }), void 0)
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ib.event.remove(this, "._change"), !Kb.test(this.nodeName)
            }
        }), ib.support.focusinBubbles || ib.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    ib.event.simulate(b, a.target, ib.event.fix(a), !0)
                };
            ib.event.special[b] = {
                setup: function() {
                    0 === c++ && W.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && W.removeEventListener(a, d, !0)
                }
            }
        }), ib.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (g in a) this.on(g, c, d, a[g], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
                else if (!e) return this;
                return 1 === f && (h = e, e = function(a) {
                    return ib().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = ib.guid++)), this.each(function() {
                    ib.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ib(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                    ib.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    ib.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? ib.event.trigger(a, b, c, !0) : void 0
            }
        }),
        function(a, b) {
            function c(a) {
                return ob.test(a + "")
            }

            function d() {
                var a, b = [];
                return a = function(c, d) {
                    return b.push(c += " ") > y.cacheLength && delete a[b.shift()], a[c] = d
                }
            }

            function e(a) {
                return a[N] = !0, a
            }

            function f(a) {
                var b = F.createElement("div");
                try {
                    return a(b)
                } catch (c) {
                    return !1
                } finally {
                    b = null
                }
            }

            function g(a, b, c, d) {
                var e, f, g, h, i, j, k, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (!H && !d) {
                    if (e = pb.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)), c;
                            if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)), c
                        }
                    if (P.qsa && !I.test(a)) {
                        if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sb, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = nb.test(a) && b.parentNode || b, p = j.join(",")
                        }
                        if (p) try {
                            return Z.apply(c, $.call(o.querySelectorAll(p), 0)), c
                        } catch (q) {} finally {
                            k || b.removeAttribute("id")
                        }
                    }
                }
                return u(a.replace(gb, "$1"), b, c, d)
            }

            function h(a, b) {
                var c = b && a,
                    d = c && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function j(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function k(a) {
                return e(function(b) {
                    return b = +b, e(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l(a, b) {
                var c, d, e, f, h, i, j, k = T[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = y.preFilter; h;) {
                    (!c || (d = hb.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = jb.exec(h)) && (c = d.shift(), e.push({
                        value: c,
                        type: d[0].replace(gb, " ")
                    }), h = h.slice(c.length));
                    for (f in y.filter) !(d = mb[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
                        value: c,
                        type: f,
                        matches: d
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? g.error(a) : T(a, i).slice(0)
            }

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = R++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = Q + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === x) return h === !0
                                } else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return !0
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function q(a, b, c, d, f, g) {
                return d && !d[N] && (d = q(d)), f && !f[N] && (f = q(f, g)), e(function(e, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        q = e || t(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !e && b ? q : p(q, m, a, h, i),
                        s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)
                        for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                        }
                    } else s = p(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : Z.apply(g, s)
                })
            }

            function r(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return _.call(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }]; e > h; h++)
                    if (c = y.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                            return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(gb, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function s(a, b) {
                var c = 0,
                    d = b.length > 0,
                    f = a.length > 0,
                    h = function(e, h, i, j, k) {
                        var l, m, n, o = [],
                            q = 0,
                            r = "0",
                            s = e && [],
                            t = null != k,
                            u = D,
                            v = e || f && y.find.TAG("*", k && h.parentNode || h),
                            w = Q += null == u ? 1 : Math.random() || .1;
                        for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
                            if (f && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) {
                                        j.push(l);
                                        break
                                    }
                                t && (Q = w, x = ++c)
                            }
                            d && ((l = !n && l) && q--, e && s.push(l))
                        }
                        if (q += r, d && r !== q) {
                            for (m = 0; n = b[m++];) n(s, o, h, i);
                            if (e) {
                                if (q > 0)
                                    for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
                                o = p(o)
                            }
                            Z.apply(j, o), t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j)
                        }
                        return t && (Q = w, D = u), s
                    };
                return d ? e(h) : h
            }

            function t(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
                return c
            }

            function u(a, b, c, d) {
                var e, f, g, h, i, j = l(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
                        if (b = y.find.ID(g.matches[0].replace(ub, vb), b)[0], !b) return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = mb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                        if ((i = y.find[h]) && (d = i(g.matches[0].replace(ub, vb), nb.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)), c;
                            break
                        }
                }
                return B(a, j)(d, b, H, c, nb.test(a)), c
            }

            function v() {}
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                O = a.document,
                P = {},
                Q = 0,
                R = 0,
                S = d(),
                T = d(),
                U = d(),
                V = typeof b,
                W = 1 << 31,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.slice,
                _ = X.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                ab = "[\\x20\\t\\r\\n\\f]",
                bb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                cb = bb.replace("w", "w#"),
                db = "([*^$|!~]?=)",
                eb = "\\[" + ab + "*(" + bb + ")" + ab + "*(?:" + db + ab + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cb + ")|)|)" + ab + "*\\]",
                fb = ":(" + bb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + eb.replace(3, 8) + ")*)|.*)\\)|)",
                gb = new RegExp("^" + ab + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ab + "+$", "g"),
                hb = new RegExp("^" + ab + "*," + ab + "*"),
                jb = new RegExp("^" + ab + "*([\\x20\\t\\r\\n\\f>+~])" + ab + "*"),
                kb = new RegExp(fb),
                lb = new RegExp("^" + cb + "$"),
                mb = {
                    ID: new RegExp("^#(" + bb + ")"),
                    CLASS: new RegExp("^\\.(" + bb + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + bb + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + bb.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + eb),
                    PSEUDO: new RegExp("^" + fb),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ab + "*(even|odd|(([+-]|)(\\d*)n|)" + ab + "*(?:([+-]|)" + ab + "*(\\d+)|))" + ab + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + ab + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ab + "*((?:-\\d)?\\d*)" + ab + "*\\)|)(?=[^-]|$)", "i")
                },
                nb = /[\x20\t\r\n\f]*[+~]/,
                ob = /^[^{]+\{\s*\[native code/,
                pb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                qb = /^(?:input|select|textarea|button)$/i,
                rb = /^h\d$/i,
                sb = /'|\\/g,
                tb = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                ub = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                vb = function(a, b) {
                    var c = "0x" + b - 65536;
                    return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                };
            try {
                $.call(O.documentElement.childNodes, 0)[0].nodeType
            } catch (wb) {
                $ = function(a) {
                    for (var b, c = []; b = this[a++];) c.push(b);
                    return c
                }
            }
            A = g.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, E = g.setDocument = function(a) {
                var d = a ? a.ownerDocument || a : O;
                return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), P.attributes = f(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return "boolean" !== b && "string" !== b
                }), P.getByClassName = f(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
                }), P.getByName = f(function(a) {
                    a.id = N + 0, a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", G.insertBefore(a, G.firstChild);
                    var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
                    return P.getIdNotName = !d.getElementById(N), G.removeChild(a), b
                }), y.attrHandle = f(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                }, P.getIdNotName ? (y.find.ID = function(a, b) {
                    if (typeof b.getElementById !== V && !H) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, y.filter.ID = function(a) {
                    var b = a.replace(ub, vb);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (y.find.ID = function(a, c) {
                    if (typeof c.getElementById !== V && !H) {
                        var d = c.getElementById(a);
                        return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b : []
                    }
                }, y.filter.ID = function(a) {
                    var b = a.replace(ub, vb);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), y.find.TAG = P.tagNameNoComments ? function(a, b) {
                    return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, y.find.NAME = P.getByName && function(a, b) {
                    return typeof b.getElementsByName !== V ? b.getElementsByName(name) : void 0
                }, y.find.CLASS = P.getByClassName && function(a, b) {
                    return typeof b.getElementsByClassName === V || H ? void 0 : b.getElementsByClassName(a)
                }, J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || I.push("\\[" + ab + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || I.push(":checked")
                }), f(function(a) {
                    a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ab + "*(?:\"\"|'')"), a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), I.push(",.*:")
                })), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function(a) {
                    P.disconnectedMatch = K.call(a, "div"), K.call(a, "[s!='']:x"), J.push("!=", fb)
                }), I = new RegExp(I.join("|")), J = new RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, M = G.compareDocumentPosition ? function(a, b) {
                    var c;
                    return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function(a, b) {
                    var c, e = 0,
                        f = a.parentNode,
                        g = b.parentNode,
                        i = [a],
                        j = [b];
                    if (a === b) return C = !0, 0;
                    if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
                    if (f === g) return h(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F
            }, g.matches = function(a, b) {
                return g(a, null, null, b)
            }, g.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== F && E(a), b = b.replace(tb, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
                    var c = K.call(a, b);
                    if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
                } catch (d) {}
                return g(b, F, null, [a]).length > 0
            }, g.contains = function(a, b) {
                return (a.ownerDocument || a) !== F && E(a), L(a, b)
            }, g.attr = function(a, b) {
                var c;
                return (a.ownerDocument || a) !== F && E(a), H || (b = b.toLowerCase()), (c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null
            }, g.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, g.uniqueSort = function(a) {
                var b, c = [],
                    d = 1,
                    e = 0;
                if (C = !P.detectDuplicates, a.sort(M), C) {
                    for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                    for (; e--;) a.splice(c[e], 1)
                }
                return a
            }, z = g.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += z(b);
                return c
            }, y = g.selectors = {
                cacheLength: 50,
                createPseudo: e,
                match: mb,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ub, vb), a[3] = (a[4] || a[5] || "").replace(ub, vb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[5] && a[2];
                        return mb.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && kb.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        return "*" === a ? function() {
                            return !0
                        } : (a = a.replace(ub, vb).toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function(a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ab + ")" + a + "(" + ab + "|$)")) && S(a, function(a) {
                            return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = g.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [Q, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
                                return m -= e, m === d || 0 === m % d && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                        return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                            for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]), a[e] = !(c[e] = f[g])
                        }) : function(a) {
                            return d(a, 0, c)
                        }) : d
                    }
                },
                pseudos: {
                    not: e(function(a) {
                        var b = [],
                            c = [],
                            d = B(a.replace(gb, "$1"));
                        return d[N] ? e(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: e(function(a) {
                        return function(b) {
                            return g(a, b).length > 0
                        }
                    }),
                    contains: e(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                        }
                    }),
                    lang: e(function(a) {
                        return lb.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ub, vb).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === G
                    },
                    focus: function(a) {
                        return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !y.pseudos.empty(a)
                    },
                    header: function(a) {
                        return rb.test(a.nodeName)
                    },
                    input: function(a) {
                        return qb.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            };
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) y.pseudos[w] = i(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) y.pseudos[w] = j(w);
            B = g.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = U(a, s(e, d))
                }
                return f
            }, y.pseudos.nth = y.pseudos.eq, y.filters = v.prototype = y.pseudos, y.setFilters = new v, E(), g.attr = ib.attr, ib.find = g, ib.expr = g.selectors, ib.expr[":"] = ib.expr.pseudos, ib.unique = g.uniqueSort, ib.text = g.getText, ib.isXMLDoc = g.isXML, ib.contains = g.contains
        }(a);
    var Pb = /Until$/,
        Qb = /^(?:parents|prev(?:Until|All))/,
        Rb = /^.[^:#\[\.,]*$/,
        Sb = ib.expr.match.needsContext,
        Tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ib.fn.extend({
        find: function(a) {
            var b, c, d, e = this.length;
            if ("string" != typeof a) return d = this, this.pushStack(ib(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (ib.contains(d[b], this)) return !0
            }));
            for (c = [], b = 0; e > b; b++) ib.find(a, this[b], c);
            return c = this.pushStack(e > 1 ? ib.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
        },
        has: function(a) {
            var b, c = ib(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ib.contains(this, c[b])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(l(this, a, !1))
        },
        filter: function(a) {
            return this.pushStack(l(this, a, !0))
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? Sb.test(a) ? ib(a, this.context).index(this[0]) >= 0 : ib.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? ib(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : ib.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return this.pushStack(f.length > 1 ? ib.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ib.inArray(this[0], ib(a)) : ib.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? ib(a, b) : ib.makeArray(a && a.nodeType ? [a] : a),
                d = ib.merge(this.get(), c);
            return this.pushStack(ib.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ib.fn.andSelf = ib.fn.addBack, ib.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ib.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ib.dir(a, "parentNode", c)
        },
        next: function(a) {
            return k(a, "nextSibling")
        },
        prev: function(a) {
            return k(a, "previousSibling")
        },
        nextAll: function(a) {
            return ib.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ib.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ib.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ib.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ib.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ib.sibling(a.firstChild)
        },
        contents: function(a) {
            return ib.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ib.merge([], a.childNodes)
        }
    }, function(a, b) {
        ib.fn[a] = function(c, d) {
            var e = ib.map(this, b, c);
            return Pb.test(a) || (d = c), d && "string" == typeof d && (e = ib.filter(d, e)), e = this.length > 1 && !Tb[a] ? ib.unique(e) : e, this.length > 1 && Qb.test(a) && (e = e.reverse()), this.pushStack(e)
        }
    }), ib.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? ib.find.matchesSelector(b[0], a) ? [b[0]] : [] : ib.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ib(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = new RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ib.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        hc = m(W),
        ic = hc.appendChild(W.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, ib.fn.extend({
        text: function(a) {
            return ib.access(this, function(a) {
                return a === b ? ib.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (ib.isFunction(a)) return this.each(function(b) {
                ib(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ib(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return ib.isFunction(a) ? this.each(function(b) {
                ib(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = ib(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ib.isFunction(a);
            return this.each(function(c) {
                ib(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ib.nodeName(this, "body") || ib(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || ib.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || ib.cleanData(t(c)), c.parentNode && (b && ib.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ib.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ib.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ib.clone(this, a, b)
            })
        },
        html: function(a) {
            return ib.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !ib.support.htmlSerialize && Wb.test(a) || !ib.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ib.cleanData(t(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            var b = ib.isFunction(a);
            return b || "string" == typeof a || (a = ib(a).not(this).detach()), this.domManip([a], !0, function(a) {
                var b = this.nextSibling,
                    c = this.parentNode;
                c && (ib(this).remove(), c.insertBefore(a, b))
            })
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = bb.apply([], a);
            var e, f, g, h, i, j, k = 0,
                l = this.length,
                m = this,
                q = l - 1,
                r = a[0],
                s = ib.isFunction(r);
            if (s || !(1 >= l || "string" != typeof r || ib.support.checkClone) && cc.test(r)) return this.each(function(e) {
                var f = m.eq(e);
                s && (a[0] = r.call(this, e, c ? f.html() : b)), f.domManip(a, c, d)
            });
            if (l && (j = ib.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 1 === j.childNodes.length && (j = e), e)) {
                for (c = c && ib.nodeName(e, "tr"), h = ib.map(t(j, "script"), o), g = h.length; l > k; k++) f = j, k !== q && (f = ib.clone(f, !0, !0), g && ib.merge(h, t(f, "script"))), d.call(c && ib.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], f, k);
                if (g)
                    for (i = h[h.length - 1].ownerDocument, ib.map(h, p), k = 0; g > k; k++) f = h[k], dc.test(f.type || "") && !ib._data(f, "globalEval") && ib.contains(i, f) && (f.src ? ib.ajax({
                        url: f.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : ib.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fc, "")));
                j = e = null
            }
            return this
        }
    }), ib.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ib.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ib(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ib(f[d])[b](c), cb.apply(e, c.get());
            return this.pushStack(e)
        }
    }), ib.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ib.contains(a.ownerDocument, a);
            if (ib.support.html5Clone || ib.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(ib.support.noCloneEvent && ib.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ib.isXMLDoc(a)))
                for (d = t(f), h = t(a), g = 0; null != (e = h[g]); ++g) d[g] && s(e, d[g]);
            if (b)
                if (c)
                    for (h = h || t(a), d = d || t(f), g = 0; null != (e = h[g]); g++) r(e, d[g]);
                else r(a, f);
            return d = t(f, "script"), d.length > 0 && q(d, !i && t(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, n = m(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === ib.type(f)) ib.merge(o, f.nodeType ? [f] : f);
                    else if (_b.test(f)) {
                for (h = h || n.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ib.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !ib.support.tbody)
                    for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ib.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ib.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = n.lastChild
            } else o.push(b.createTextNode(f));
            for (h && n.removeChild(h), ib.support.appendChecked || ib.grep(t(o, "input"), u), p = 0; f = o[p++];)
                if ((!d || -1 === ib.inArray(f, d)) && (g = ib.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), g && q(h), c))
                    for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, n
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ib.expando, i = ib.cache, j = ib.support.deleteExpando, k = ib.event.special; null != (c = a[g]); g++)
                if ((b || ib.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ib.event.remove(c, d) : ib.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== V ? c.removeAttribute(h) : c[h] = null, _.push(e))
                }
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = new RegExp("^(" + jb + ")(.*)$", "i"),
        sc = new RegExp("^(" + jb + ")(?!px)[a-z%]+$", "i"),
        tc = new RegExp("^([+-])=(" + jb + ")", "i"),
        uc = {
            BODY: "block"
        },
        vc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    ib.fn.extend({
        css: function(a, c) {
            return ib.access(this, function(a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (ib.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = ib.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? ib.style(a, c, d) : ib.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return x(this, !0)
        },
        hide: function() {
            return x(this)
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : w(this)) ? ib(this).show(): ib(this).hide()
            })
        }
    }), ib.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ib.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ib.camelCase(c),
                    j = a.style;
                if (c = ib.cssProps[i] || (ib.cssProps[i] = v(j, i)), h = ib.cssHooks[c] || ib.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ib.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ib.cssNumber[i] || (d += "px"), ib.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = ib.camelCase(c);
            return c = ib.cssProps[i] || (ib.cssProps[i] = v(a.style, i)), h = ib.cssHooks[c] || ib.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ib.isNumeric(f) ? f || 0 : g) : g
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null)
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ib.contains(a.ownerDocument, a) || (i = ib.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : W.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), ib.each(["height", "width"], function(a, b) {
        ib.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && pc.test(ib.css(a, "display")) ? ib.swap(a, vc, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && kc(a);
                return y(a, c, d ? z(a, b, d, ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ib.support.opacity || (ib.cssHooks.opacity = {
        get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ib.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ib.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }), ib(function() {
        ib.support.reliableMarginRight || (ib.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? ib.swap(a, {
                    display: "inline-block"
                }, lc, [a, "marginRight"]) : void 0
            }
        }), !ib.support.pixelPosition && ib.fn.position && ib.each(["top", "left"], function(a, b) {
            ib.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = lc(a, b), sc.test(c) ? ib(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), ib.expr && ib.expr.filters && (ib.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ib.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ib.css(a, "display"))
    }, ib.expr.filters.visible = function(a) {
        return !ib.expr.filters.hidden(a)
    }), ib.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ib.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qc.test(a) || (ib.cssHooks[a + b].set = y)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    ib.fn.extend({
        serialize: function() {
            return ib.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ib.prop(this, "elements");
                return a ? ib.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ib(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function(a, b) {
                var c = ib(this).val();
                return null == c ? null : ib.isArray(c) ? ib.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }), ib.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = ib.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = ib.ajaxSettings && ib.ajaxSettings.traditional), ib.isArray(a) || a.jquery && !ib.isPlainObject(a)) ib.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) D(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    }, ib.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ib.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ib.fn.hover = function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    };
    var Ec, Fc, Gc = ib.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = ib.fn.load,
        Qc = {},
        Rc = {},
        Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch (Tc) {
        Fc = W.createElement("a"), Fc.href = "", Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], ib.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ib.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ib.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? ib("<div>").append(ib.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, ib.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ib.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ib.each(["get", "post"], function(a, c) {
        ib[c] = function(a, d, e, f) {
            return ib.isFunction(d) && (f = f || e, e = d, d = b), ib.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), ib.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": ib.parseJSON,
                "text xml": ib.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? G(G(a, ib.ajaxSettings), b) : G(ib.ajaxSettings, a)
        },
        ajaxPrefilter: E(Qc),
        ajaxTransport: E(Rc),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ib.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ib.etag[g] = v)), 204 === a ? (f = !0, x = "nocontent") : 304 === a ? (f = !0, x = "notmodified") : (f = I(m, t), x = f.state, l = f.data, s = f.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ib.active || ib.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ib.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ib(n) : ib.event,
                p = ib.Deferred(),
                q = ib.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ib.trim(m.dataType || "*").toLowerCase().match(kb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (Ec[3] || ("http:" === Ec[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = ib.param(m.data, m.traditional)), F(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ib.active++ && ib.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (ib.lastModified[g] && w.setRequestHeader("If-Modified-Since", ib.lastModified[g]), ib.etag[g] && w.setRequestHeader("If-None-Match", ib.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[f](m[f]);
            if (k = F(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getScript: function(a, c) {
            return ib.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return ib.get(a, b, c, "json")
        }
    }), ib.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ib.globalEval(a), a
            }
        }
    }), ib.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ib.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = W.head || ib("head")[0] || W.documentElement;
            return {
                send: function(b, e) {
                    c = W.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    ib.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || ib.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), ib.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ib.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || ib.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && ib.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject && function() {
            var a;
            for (a in Wc) Wc[a](b, !0)
        };
    ib.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && J() || K()
    } : J, Xc = ib.ajaxSettings.xhr(), ib.support.cors = !!Xc && "withCredentials" in Xc, Xc = ib.support.ajax = !!Xc, Xc && ib.ajaxTransport(function(c) {
        if (!c.crossDomain || ib.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = ib.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try {
                                        k = i.statusText
                                    } catch (m) {
                                        k = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, ib(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = new RegExp("^(?:([+-])=|)(" + jb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [P],
        ed = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = bd.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || (ib.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                        h = ib.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, ib.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    ib.Animation = ib.extend(N, {
        tweener: function(a, b) {
            ib.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }), ib.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ib.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Q.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ib.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ib.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ib.fx.step[a.prop] ? ib.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ib.cssProps[a.prop]] || ib.cssHooks[a.prop]) ? ib.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ib.each(["toggle", "show", "hide"], function(a, b) {
        var c = ib.fn[b];
        ib.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e)
        }
    }), ib.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = ib.isEmptyObject(a),
                f = ib.speed(b, c, d),
                g = function() {
                    var b = N(this, ib.extend({}, a), f);
                    g.finish = function() {
                        b.stop(!0)
                    }, (e || ib._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ib.timers,
                    g = ib._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ib.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ib._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ib.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ib.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ib.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ib.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ib.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ib.extend({}, a) : {
            complete: c || !c && b || ib.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ib.isFunction(b) && b
        };
        return d.duration = ib.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ib.fx.speeds ? ib.fx.speeds[d.duration] : ib.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            ib.isFunction(d.old) && d.old.call(this), d.queue && ib.dequeue(this, d.queue)
        }, d
    }, ib.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ib.timers = [], ib.fx = Q.prototype.init, ib.fx.tick = function() {
        var a, c = ib.timers,
            d = 0;
        for ($c = ib.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ib.fx.stop(), $c = b
    }, ib.fx.timer = function(a) {
        a() && ib.timers.push(a) && ib.fx.start()
    }, ib.fx.interval = 13, ib.fx.start = function() {
        _c || (_c = setInterval(ib.fx.tick, ib.fx.interval))
    }, ib.fx.stop = function() {
        clearInterval(_c), _c = null
    }, ib.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ib.fx.step = {}, ib.expr && ib.expr.filters && (ib.expr.filters.animated = function(a) {
        return ib.grep(ib.timers, function(b) {
            return a === b.elem
        }).length
    }), ib.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            ib.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            },
            f = this[0],
            g = f && f.ownerDocument;
        if (g) return c = g.documentElement, ib.contains(c, f) ? (typeof f.getBoundingClientRect !== V && (e = f.getBoundingClientRect()), d = S(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e
    }, ib.offset = {
        setOffset: function(a, b, c) {
            var d = ib.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ib(a),
                h = g.offset(),
                i = ib.css(a, "top"),
                j = ib.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ib.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ib.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, ib.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ib.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ib.nodeName(a[0], "html") || (c = a.offset()), c.top += ib.css(a[0], "borderTopWidth", !0), c.left += ib.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ib.css(d, "marginTop", !0),
                    left: b.left - c.left - ib.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || W.documentElement; a && !ib.nodeName(a, "html") && "static" === ib.css(a, "position");) a = a.offsetParent;
                return a || W.documentElement
            })
        }
    }), ib.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        ib.fn[a] = function(e) {
            return ib.access(this, function(a, e, f) {
                var g = S(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ib(g).scrollLeft() : f, d ? f : ib(g).scrollTop()) : a[e] = f, void 0)
            }, a, e, arguments.length, null)
        }
    }), ib.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        ib.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            ib.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ib.access(this, function(c, d, e) {
                    var f;
                    return ib.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ib.css(c, d, h) : ib.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = ib, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ib
    })
}(window), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, e, f, g) {
            if (Object.defineProperty) try {
                return Object.defineProperty(b, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(g), f
                    },
                    set: function(a) {
                        d(g), f = a
                    }
                }), c
            } catch (h) {}
            a._definePropertyBroken = !0, b[e] = f
        }
        var f = {};
        a.migrateWarnings = [], !a.migrateMute && b.console && b.console.log && b.console.log("JQMIGRATE: Logging is active"), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (4 > h.length && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') may use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var e = (a.nodeName || "").toLowerCase();
                return "button" === e ? j.apply(this, arguments) : ("input" !== e && "option" !== e && d("jQuery.fn.attr('value', val) no longer sets properties"), a.value = b, c)
            }
        };
        var o, p, q = a.fn.init,
            r = a.parseJSON,
            s = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, c, e) {
            var f;
            return b && "string" == typeof b && !a.isPlainObject(c) && (f = s.exec(a.trim(b))) && f[0] && ("<" !== b.charAt(0) && d("$(html) HTML strings must start with '<' character"), f[3] && d("$(html) HTML text after last tag is ignored"), "#" === f[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), c && c.context && (c = c.context), a.parseHTML) ? q.call(this, a.parseHTML(f[2], c, !0), c, e) : q.apply(this, arguments)
        }, a.fn.init.prototype = a.fn, a.parseJSON = function(a) {
            return a || null === a ? r.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                return e && e instanceof a && !(e instanceof b) && (e = b(e)), a.fn.init.call(this, d, e, c)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var t = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? t.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var u = /\/(java|ecma)script/i,
            v = a.fn.andSelf || a.fn.addBack;
        a.fn.andSelf = function() {
            return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments)
        }, a.clean || (a.clean = function(b, e, f, g) {
            e = e || document, e = !e.nodeType && e[0] || e, e = e.ownerDocument || e, d("jQuery.clean() is deprecated");
            var h, i, j, k, l = [];
            if (a.merge(l, a.buildFragment(b, e).childNodes), f)
                for (j = function(a) {
                        return !a.type || u.test(a.type) ? g ? g.push(a.parentNode ? a.parentNode.removeChild(a) : a) : f.appendChild(a) : c
                    }, h = 0; null != (i = l[h]); h++) a.nodeName(i, "script") && j(i) || (f.appendChild(i), i.getElementsByTagName !== c && (k = a.grep(a.merge([], i.getElementsByTagName("script")), j), l.splice.apply(l, [h + 1, 0].concat(k)), h += k.length));
            return l
        });
        var w = a.event.add,
            x = a.event.remove,
            y = a.event.trigger,
            z = a.fn.toggle,
            A = a.fn.live,
            B = a.fn.die,
            C = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            D = RegExp("\\b(?:" + C + ")\\b"),
            E = /(?:^|\s)hover(\.\S+|)\b/,
            F = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (E.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(E, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && D.test(b) && d("AJAX events should be attached to document: " + b), w.call(this, a, F(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            x.call(this, a, F(b) || "", c, d, e)
        }, a.fn.error = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return d("jQuery.fn.error() is deprecated"), a.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)
        }, a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return z.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; e.length > g;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), A ? A.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), B ? B.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || D.test(a) || d("Global events are undocumented and deprecated"), y.call(this, a, b, c || document, e)
        }, a.each(C.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, null, b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        })
    }(jQuery, window),
    function(a, b) {
        function c(b, c) {
            var e = b.nodeName.toLowerCase();
            if ("area" === e) {
                var f, g = b.parentNode,
                    h = g.name;
                return b.href && h && "map" === g.nodeName.toLowerCase() ? (f = a("img[usemap=#" + h + "]")[0], !!f && d(f)) : !1
            }
            return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
        }

        function d(b) {
            return !a(b).parents().andSelf().filter(function() {
                return "hidden" === a.curCSS(this, "visibility") || a.expr.filters.hidden(this)
            }).length
        }
        a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
            version: "1.8.23",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        }), a.fn.extend({
            propAttr: a.fn.prop || a.fn.attr,
            _focus: a.fn.focus,
            focus: function(b, c) {
                return "number" == typeof b ? this.each(function() {
                    var d = this;
                    setTimeout(function() {
                        a(d).focus(), c && c.call(d)
                    }, b)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var b;
                return b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
            },
            zIndex: function(c) {
                if (c !== b) return this.css("zIndex", c);
                if (this.length)
                    for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                        if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                        f = f.parent()
                    }
                return 0
            },
            disableSelection: function() {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
            function e(b, c, d, e) {
                return a.each(f, function() {
                    c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), e && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
                }), c
            }
            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                g = d.toLowerCase(),
                h = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + d] = function(c) {
                return c === b ? h["inner" + d].call(this) : this.each(function() {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function(b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                return function(c) {
                    return !!a.data(c, b)
                }
            }) : function(b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function(b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            },
            tabbable: function(b) {
                var d = a.attr(b, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && c(b, !e)
            }
        }), a(function() {
            var b = document.body,
                c = b.appendChild(c = document.createElement("div"));
            c.offsetHeight, a.extend(c.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), a.support.minHeight = 100 === c.offsetHeight, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
        }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, {
            plugin: {
                add: function(b, c, d) {
                    var e = a.ui[b].prototype;
                    for (var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
                },
                call: function(a, b, c) {
                    var d = a.plugins[b];
                    if (d && a.element[0].parentNode)
                        for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c)
                }
            },
            contains: function(a, b) {
                return document.compareDocumentPosition ? 16 & a.compareDocumentPosition(b) : a !== b && a.contains(b)
            },
            hasScroll: function(b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            },
            isOverAxis: function(a, b, c) {
                return a > b && b + c > a
            },
            isOver: function(b, c, d, e, f, g) {
                return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
            }
        }))
    }(jQuery),
    function($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(a) {
            var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return a.bind("mouseout", function(a) {
                var c = $(a.target).closest(b);
                c.length && c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
            }).bind("mouseover", function(c) {
                var d = $(c.target).closest(b);
                !$.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) && d.length && (d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d.addClass("ui-state-hover"), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(a, b) {
            $.extend(a, b);
            for (var c in b)(null == b[c] || b[c] == undefined) && (a[c] = b[c]);
            return a
        }

        function isArray(a) {
            return a && ($.browser.safari && "object" == typeof a && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/))
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.8.23"
            }
        });
        var PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                return extendRemove(this._defaults, a || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(a, b) {
                var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: c,
                    input: a,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: b,
                    dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(a, b) {
                var c = $(a);
                b.append = $([]), b.trigger = $([]), c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a, c, d) {
                    b.settings[c] = d
                }).bind("getData.datepicker", function(a, c) {
                    return this._get(b, c)
                }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a))
            },
            _attachments: function(a, b) {
                var c = this._get(b, "appendText"),
                    d = this._get(b, "isRTL");
                b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
                var e = this._get(b, "showOn");
                if (("focus" == e || "both" == e) && a.focus(this._showDatepicker), "button" == e || "both" == e) {
                    var f = this._get(b, "buttonText"),
                        g = this._get(b, "buttonImage");
                    b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: g,
                        alt: f,
                        title: f
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == g ? f : $("<img/>").attr({
                        src: g,
                        alt: f,
                        title: f
                    }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1
                    })
                }
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b = new Date(2009, 11, 20),
                        c = this._get(a, "dateFormat");
                    if (c.match(/[DM]/)) {
                        var d = function(a) {
                            for (var b = 0, c = 0, d = 0; d < a.length; d++) a[d].length > b && (b = a[d].length, c = d);
                            return c
                        };
                        b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                    }
                    a.input.attr("size", this._formatDate(a, b).length)
                }
            },
            _inlineDatepicker: function(a, b) {
                var c = $(a);
                c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function(a, c, d) {
                    b.settings[c] = d
                }).bind("getData.datepicker", function(a, c) {
                    return this._get(b, c)
                }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(a, b, c, d, e) {
                var f = this._dialogInst;
                if (!f) {
                    this.uuid += 1;
                    var g = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f)
                }
                if (extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, !this._pos) {
                    var h = document.documentElement.clientWidth,
                        i = document.documentElement.clientHeight,
                        j = document.documentElement.scrollLeft || document.body.scrollLeft,
                        k = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this
            },
            _destroyDatepicker: function(a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    $.removeData(a, PROP_NAME), "input" == d ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == d || "span" == d) && b.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    if ("input" == d) a.disabled = !1, c.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" == d || "span" == d) {
                        var e = b.children("." + this._inlineClass);
                        e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(b) {
                        return b == a ? null : b
                    })
                }
            },
            _disableDatepicker: function(a) {
                var b = $(a),
                    c = $.data(a, PROP_NAME);
                if (b.hasClass(this.markerClassName)) {
                    var d = a.nodeName.toLowerCase();
                    if ("input" == d) a.disabled = !0, c.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" == d || "span" == d) {
                        var e = b.children("." + this._inlineClass);
                        e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(b) {
                        return b == a ? null : b
                    }), this._disabledInputs[this._disabledInputs.length] = a
                }
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)
                    if (this._disabledInputs[b] == a) return !0;
                return !1
            },
            _getInst: function(a) {
                try {
                    return $.data(a, PROP_NAME)
                } catch (b) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(a, b, c) {
                var d = this._getInst(a);
                if (2 == arguments.length && "string" == typeof b) return "defaults" == b ? $.extend({}, $.datepicker._defaults) : d ? "all" == b ? $.extend({}, d.settings) : this._get(d, b) : null;
                var e = b || {};
                if ("string" == typeof b && (e = {}, e[b] = c), d) {
                    this._curInst == d && this._hideDatepicker();
                    var f = this._getDateDatepicker(a, !0),
                        g = this._getMinMaxDate(d, "min"),
                        h = this._getMinMaxDate(d, "max");
                    extendRemove(d.settings, e), null !== g && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), null !== h && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d)
                }
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function(a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function(a) {
                var b = $.datepicker._getInst(a.target),
                    c = !0,
                    d = b.dpDiv.is(".ui-datepicker-rtl");
                if (b._keyEvent = !0, $.datepicker._datepickerShowing) switch (a.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), c = !1;
                        break;
                    case 13:
                        var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
                        e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
                        var f = $.datepicker._get(b, "onSelect");
                        if (f) {
                            var g = $.datepicker._formatDate(b);
                            f.apply(b.input ? b.input[0] : null, [g, b])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 35:
                        (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
                        break;
                    case 36:
                        (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
                        break;
                    case 37:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 38:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
                        break;
                    case 39:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 40:
                        (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
                        break;
                    default:
                        c = !1
                } else 36 == a.keyCode && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
                c && (a.preventDefault(), a.stopPropagation())
            },
            _doKeyPress: function(a) {
                var b = $.datepicker._getInst(a.target);
                if ($.datepicker._get(b, "constrainInput")) {
                    var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
                        d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
                    return a.ctrlKey || a.metaKey || " " > d || !c || c.indexOf(d) > -1
                }
            },
            _doKeyUp: function(a) {
                var b = $.datepicker._getInst(a.target);
                if (b.input.val() != b.lastVal) try {
                    var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
                    c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b))
                } catch (d) {
                    $.datepicker.log(d)
                }
                return !0
            },
            _showDatepicker: function(a) {
                if (a = a.target || a, "input" != a.nodeName.toLowerCase() && (a = $("input", a.parentNode)[0]), !$.datepicker._isDisabledDatepicker(a) && $.datepicker._lastInput != a) {
                    var b = $.datepicker._getInst(a);
                    $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var c = $.datepicker._get(b, "beforeShow"),
                        d = c ? c.apply(a, [a, b]) : {};
                    if (d !== !1) {
                        extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
                        var e = !1;
                        $(a).parents().each(function() {
                            return e |= "fixed" == $(this).css("position"), !e
                        }), e && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                        var f = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
                                display: "none",
                                left: f.left + "px",
                                top: f.top + "px"
                            }), !b.inline) {
                            var g = $.datepicker._get(b, "showAnim"),
                                h = $.datepicker._get(b, "duration"),
                                i = function() {
                                    var a = b.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (a.length) {
                                        var c = $.datepicker._getBorders(b.dpDiv);
                                        a.css({
                                            left: -c[0],
                                            top: -c[1],
                                            width: b.dpDiv.outerWidth(),
                                            height: b.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), g && h || i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b
                        }
                    }
                }
            },
            _updateDatepicker: function(a) {
                var b = this;
                b.maxRows = 4;
                var c = $.datepicker._getBorders(a.dpDiv);
                instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
                var d = a.dpDiv.find("iframe.ui-datepicker-cover");
                d.length && d.css({
                    left: -c[0],
                    top: -c[1],
                    width: a.dpDiv.outerWidth(),
                    height: a.dpDiv.outerHeight()
                }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var e = this._getNumberOfMonths(a),
                    f = e[1],
                    g = 17;
                if (a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"), a.dpDiv[(1 != e[0] || 1 != e[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus(), a.yearshtml) {
                    var h = a.yearshtml;
                    setTimeout(function() {
                        h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), h = a.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(a) {
                var b = function(a) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] || a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function(a, b, c) {
                var d = a.dpDiv.outerWidth(),
                    e = a.dpDiv.outerHeight(),
                    f = a.input ? a.input.outerWidth() : 0,
                    g = a.input ? a.input.outerHeight() : 0,
                    h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
                    i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
                return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b
            },
            _findPos: function(a) {
                for (var b = this._getInst(a), c = this._get(b, "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType || $.expr.filters.hidden(a));) a = a[c ? "previousSibling" : "nextSibling"];
                var d = $(a).offset();
                return [d.left, d.top]
            },
            _hideDatepicker: function(a) {
                var b = this._curInst;
                if (b && (!a || b == $.data(a, PROP_NAME)) && this._datepickerShowing) {
                    var c = this._get(b, "showAnim"),
                        d = this._get(b, "duration"),
                        e = function() {
                            $.datepicker._tidyDialog(b)
                        };
                    $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv["slideDown" == c ? "slideUp" : "fadeIn" == c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1;
                    var f = this._get(b, "onClose");
                    f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(a) {
                if ($.datepicker._curInst) {
                    var b = $(a.target),
                        c = $.datepicker._getInst(b[0]);
                    (b[0].id != $.datepicker._mainDivId && 0 == b.parents("#" + $.datepicker._mainDivId).length && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(a, b, c) {
                var d = $(a),
                    e = this._getInst(d[0]);
                this._isDisabledDatepicker(d[0]) || (this._adjustInstDate(e, b + ("M" == c ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
            },
            _gotoToday: function(a) {
                var b = $(a),
                    c = this._getInst(b[0]);
                if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
                else {
                    var d = new Date;
                    c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
                }
                this._notifyChange(c), this._adjustDate(b)
            },
            _selectMonthYear: function(a, b, c) {
                var d = $(a),
                    e = this._getInst(d[0]);
                e["selected" + ("M" == c ? "Month" : "Year")] = e["draw" + ("M" == c ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
            },
            _selectDay: function(a, b, c, d) {
                var e = $(a);
                if (!$(d).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(e[0])) {
                    var f = this._getInst(e[0]);
                    f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
                }
            },
            _clearDate: function(a) {
                var b = $(a);
                this._getInst(b[0]), this._selectDate(b, "")
            },
            _selectDate: function(a, b) {
                var c = $(a),
                    d = this._getInst(c[0]);
                b = null != b ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);
                var e = this._get(d, "onSelect");
                e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(a) {
                var b = this._get(a, "altField");
                if (b) {
                    var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                        d = this._getDate(a),
                        e = this.formatDate(c, d, this._getFormatConfig(a));
                    $(b).each(function() {
                        $(this).val(e)
                    })
                }
            },
            noWeekends: function(a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function(a) {
                var b = new Date(a.getTime());
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            },
            parseDate: function(a, b, c) {
                if (null == a || null == b) throw "Invalid arguments";
                if (b = "object" == typeof b ? b.toString() : b + "", "" == b) return null;
                var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                d = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
                for (var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = -1, j = -1, k = -1, l = -1, m = !1, n = function(b) {
                        var c = s + 1 < a.length && a.charAt(s + 1) == b;
                        return c && s++, c
                    }, o = function(a) {
                        var c = n(a),
                            d = "@" == a ? 14 : "!" == a ? 20 : "y" == a && c ? 4 : "o" == a ? 3 : 2,
                            e = new RegExp("^\\d{1," + d + "}"),
                            f = b.substring(r).match(e);
                        if (!f) throw "Missing number at position " + r;
                        return r += f[0].length, parseInt(f[0], 10)
                    }, p = function(a, c, d) {
                        var e = $.map(n(a) ? d : c, function(a, b) {
                                return [
                                    [b, a]
                                ]
                            }).sort(function(a, b) {
                                return -(a[1].length - b[1].length)
                            }),
                            f = -1;
                        if ($.each(e, function(a, c) {
                                var d = c[1];
                                return b.substr(r, d.length).toLowerCase() == d.toLowerCase() ? (f = c[0], r += d.length, !1) : void 0
                            }), -1 != f) return f + 1;
                        throw "Unknown name at position " + r
                    }, q = function() {
                        if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r;
                        r++
                    }, r = 0, s = 0; s < a.length; s++)
                    if (m) "'" != a.charAt(s) || n("'") ? q() : m = !1;
                    else switch (a.charAt(s)) {
                        case "d":
                            k = o("d");
                            break;
                        case "D":
                            p("D", e, f);
                            break;
                        case "o":
                            l = o("o");
                            break;
                        case "m":
                            j = o("m");
                            break;
                        case "M":
                            j = p("M", g, h);
                            break;
                        case "y":
                            i = o("y");
                            break;
                        case "@":
                            var t = new Date(o("@"));
                            i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                            break;
                        case "!":
                            var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                            i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                            break;
                        case "'":
                            n("'") ? q() : m = !0;
                            break;
                        default:
                            q()
                    }
                    if (r < b.length) throw "Extra/unparsed characters found in date: " + b.substring(r);
                if (-1 == i ? i = (new Date).getFullYear() : 100 > i && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= i ? 0 : -100)), l > -1)
                    for (j = 1, k = l;;) {
                        var u = this._getDaysInMonth(i, j - 1);
                        if (u >= k) break;
                        j++, k -= u
                    }
                var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
                if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date";
                return t
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    e = (c ? c.dayNames : null) || this._defaults.dayNames,
                    f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    g = (c ? c.monthNames : null) || this._defaults.monthNames,
                    h = function(b) {
                        var c = m + 1 < a.length && a.charAt(m + 1) == b;
                        return c && m++, c
                    },
                    i = function(a, b, c) {
                        var d = "" + b;
                        if (h(a))
                            for (; d.length < c;) d = "0" + d;
                        return d
                    },
                    j = function(a, b, c, d) {
                        return h(a) ? d[b] : c[b]
                    },
                    k = "",
                    l = !1;
                if (b)
                    for (var m = 0; m < a.length; m++)
                        if (l) "'" != a.charAt(m) || h("'") ? k += a.charAt(m) : l = !1;
                        else switch (a.charAt(m)) {
                            case "d":
                                k += i("d", b.getDate(), 2);
                                break;
                            case "D":
                                k += j("D", b.getDay(), d, e);
                                break;
                            case "o":
                                k += i("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                k += i("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                k += j("M", b.getMonth(), f, g);
                                break;
                            case "y":
                                k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                k += b.getTime();
                                break;
                            case "!":
                                k += 1e4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                h("'") ? k += "'" : l = !0;
                                break;
                            default:
                                k += a.charAt(m)
                        }
                        return k
            },
            _possibleChars: function(a) {
                for (var b = "", c = !1, d = function(b) {
                        var c = e + 1 < a.length && a.charAt(e + 1) == b;
                        return c && e++, c
                    }, e = 0; e < a.length; e++)
                    if (c) "'" != a.charAt(e) || d("'") ? b += a.charAt(e) : c = !1;
                    else switch (a.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            b += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            d("'") ? b += "'" : c = !0;
                            break;
                        default:
                            b += a.charAt(e)
                    }
                    return b
            },
            _get: function(a, b) {
                return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function(a, b) {
                if (a.input.val() != a.lastVal) {
                    var c, d, e = this._get(a, "dateFormat"),
                        f = a.lastVal = a.input ? a.input.val() : null;
                    c = d = this._getDefaultDate(a);
                    var g = this._getFormatConfig(a);
                    try {
                        c = this.parseDate(e, f, g) || d
                    } catch (h) {
                        this.log(h), f = b ? "" : f
                    }
                    a.selectedDay = c.getDate(), a.drawMonth = a.selectedMonth = c.getMonth(), a.drawYear = a.selectedYear = c.getFullYear(), a.currentDay = f ? c.getDate() : 0, a.currentMonth = f ? c.getMonth() : 0, a.currentYear = f ? c.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(a, b, c) {
                var d = function(a) {
                        var b = new Date;
                        return b.setDate(b.getDate() + a), b
                    },
                    e = function(b) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
                        } catch (c) {}
                        for (var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(b); i;) {
                            switch (i[2] || "d") {
                                case "d":
                                case "D":
                                    g += parseInt(i[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    g += 7 * parseInt(i[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                                    break;
                                case "y":
                                case "Y":
                                    e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
                            }
                            i = h.exec(b)
                        }
                        return new Date(e, f, g)
                    },
                    f = null == b || "" === b ? c : "string" == typeof b ? e(b) : "number" == typeof b ? isNaN(b) ? c : d(b) : new Date(b.getTime());
                return f = f && "Invalid Date" == f.toString() ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f)
            },
            _daylightSavingAdjust: function(a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e == a.selectedMonth && f == a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                var b = !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b
            },
            _attachHandlers: function(a) {
                var b = this._get(a, "stepMonths"),
                    c = "#" + a.id.replace(/\\\\/g, "\\");
                a.dpDiv.find("[data-handler]").map(function() {
                    var a = {
                        prev: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(a) {
                var b = new Date;
                b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
                var c = this._get(a, "isRTL"),
                    d = this._get(a, "showButtonPanel"),
                    e = this._get(a, "hideIfNoPrevNext"),
                    f = this._get(a, "navigationAsDateFormat"),
                    g = this._getNumberOfMonths(a),
                    h = this._get(a, "showCurrentAtPos"),
                    i = this._get(a, "stepMonths"),
                    j = 1 != g[0] || 1 != g[1],
                    k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    l = this._getMinMaxDate(a, "min"),
                    m = this._getMinMaxDate(a, "max"),
                    n = a.drawMonth - h,
                    o = a.drawYear;
                if (0 > n && (n += 12, o--), m) {
                    var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
                    for (p = l && l > p ? l : p; this._daylightSavingAdjust(new Date(o, n, 1)) > p;) n--, 0 > n && (n = 11, o--)
                }
                a.drawMonth = n, a.drawYear = o;
                var q = this._get(a, "prevText");
                q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
                var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
                    s = this._get(a, "nextText");
                s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
                var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
                    u = this._get(a, "currentText"),
                    v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
                u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
                var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>",
                    x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "",
                    y = parseInt(this._get(a, "firstDay"), 10);
                y = isNaN(y) ? 0 : y;
                var z = this._get(a, "showWeek"),
                    A = this._get(a, "dayNames");
                this._get(a, "dayNamesShort");
                var B = this._get(a, "dayNamesMin"),
                    C = this._get(a, "monthNames"),
                    D = this._get(a, "monthNamesShort"),
                    E = this._get(a, "beforeShowDay"),
                    F = this._get(a, "showOtherMonths"),
                    G = this._get(a, "selectOtherMonths");
                this._get(a, "calculateWeek") || this.iso8601Week;
                for (var H = this._getDefaultDate(a), I = "", J = 0; J < g[0]; J++) {
                    var K = "";
                    this.maxRows = 4;
                    for (var L = 0; L < g[1]; L++) {
                        var M = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
                            N = " ui-corner-all",
                            O = "";
                        if (j) {
                            if (O += '<div class="ui-datepicker-group', g[1] > 1) switch (L) {
                                case 0:
                                    O += " ui-datepicker-group-first", N = " ui-corner-" + (c ? "right" : "left");
                                    break;
                                case g[1] - 1:
                                    O += " ui-datepicker-group-last", N = " ui-corner-" + (c ? "left" : "right");
                                    break;
                                default:
                                    O += " ui-datepicker-group-middle", N = ""
                            }
                            O += '">'
                        }
                        O += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + N + '">' + (/all|left/.test(N) && 0 == J ? c ? t : r : "") + (/all|right/.test(N) && 0 == J ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, J > 0 || L > 0, C, D) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                        for (var P = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "", Q = 0; 7 > Q; Q++) {
                            var R = (Q + y) % 7;
                            P += "<th" + ((Q + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[R] + '">' + B[R] + "</span></th>"
                        }
                        O += P + "</tr></thead><tbody>";
                        var S = this._getDaysInMonth(o, n);
                        o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, S));
                        var T = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
                            U = Math.ceil((T + S) / 7),
                            V = j ? this.maxRows > U ? this.maxRows : U : U;
                        this.maxRows = V;
                        for (var W = this._daylightSavingAdjust(new Date(o, n, 1 - T)), X = 0; V > X; X++) {
                            O += "<tr>";
                            for (var Y = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(W) + "</td>" : "", Q = 0; 7 > Q; Q++) {
                                var Z = E ? E.apply(a.input ? a.input[0] : null, [W]) : [!0, ""],
                                    _ = W.getMonth() != n,
                                    ab = _ && !G || !Z[0] || l && l > W || m && W > m;
                                Y += '<td class="' + ((Q + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (_ ? " ui-datepicker-other-month" : "") + (W.getTime() == M.getTime() && n == a.selectedMonth && a._keyEvent || H.getTime() == W.getTime() && H.getTime() == M.getTime() ? " " + this._dayOverClass : "") + (ab ? " " + this._unselectableClass + " ui-state-disabled" : "") + (_ && !F ? "" : " " + Z[1] + (W.getTime() == k.getTime() ? " " + this._currentClass : "") + (W.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + (_ && !F || !Z[2] ? "" : ' title="' + Z[2] + '"') + (ab ? "" : ' data-handler="selectDay" data-event="click" data-month="' + W.getMonth() + '" data-year="' + W.getFullYear() + '"') + ">" + (_ && !F ? "&#xa0;" : ab ? '<span class="ui-state-default">' + W.getDate() + "</span>" : '<a class="ui-state-default' + (W.getTime() == b.getTime() ? " ui-state-highlight" : "") + (W.getTime() == k.getTime() ? " ui-state-active" : "") + (_ ? " ui-priority-secondary" : "") + '" href="#">' + W.getDate() + "</a>") + "</td>", W.setDate(W.getDate() + 1), W = this._daylightSavingAdjust(W)
                            }
                            O += Y + "</tr>"
                        }
                        n++, n > 11 && (n = 0, o++), O += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && L == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), K += O
                    }
                    I += K
                }
                return I += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, I
            },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
                var i = this._get(a, "changeMonth"),
                    j = this._get(a, "changeYear"),
                    k = this._get(a, "showMonthAfterYear"),
                    l = '<div class="ui-datepicker-title">',
                    m = "";
                if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
                else {
                    var n = d && d.getFullYear() == c,
                        o = e && e.getFullYear() == c;
                    m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var p = 0; 12 > p; p++)(!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
                    m += "</select>"
                }
                if (k || (l += m + (!f && i && j ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";
                    else {
                        var q = this._get(a, "yearRange").split(":"),
                            r = (new Date).getFullYear(),
                            s = function(a) {
                                var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                                return isNaN(b) ? r : b
                            },
                            t = s(q[0]),
                            u = Math.max(t, s(q[1] || ""));
                        for (t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; u >= t; t++) a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
                        a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null
                    }
                return l += this._get(a, "yearSuffix"), k && (l += (!f && i && j ? "" : "&#xa0;") + m), l += "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" == c ? b : 0),
                    e = a.drawMonth + ("M" == c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" == c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" == c || "Y" == c) && this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b;
                return e = d && e > d ? d : e
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function(a, b) {
                var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max");
                return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), $.fn.datepicker = function(a) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var b = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof a || "isDisabled" != a && "getDate" != a && "widget" != a ? "option" == a && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function() {
                "string" == typeof a ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
            }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.23", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function(a) {
        "undefined" == typeof a.fn.each2 && a.fn.extend({
            each2: function(b) {
                for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;);
                return this
            }
        })
    }(jQuery),
    function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c = 0, d = b.length; d > c; c += 1)
                if (e(a, b[c])) return c;
            return -1
        }

        function d() {
            var b = a(L);
            b.appendTo("body");
            var c = {
                width: b.width() - b[0].clientWidth,
                height: b.height() - b[0].clientHeight
            };
            return b.remove(), c
        }

        function e(a, c) {
            return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
        }

        function f(b, c) {
            var d, e, f;
            if (null === b || b.length < 1) return [];
            for (d = b.split(c), e = 0, f = d.length; f > e; e += 1) d[e] = a.trim(d[e]);
            return d
        }

        function g(a) {
            return a.outerWidth(!1) - a.width()
        }

        function h(c) {
            var d = "keyup-change-value";
            c.on("keydown", function() {
                a.data(c, d) === b && a.data(c, d, c.val())
            }), c.on("keyup", function() {
                var e = a.data(c, d);
                e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
            })
        }

        function i(c) {
            c.on("mousemove", function(c) {
                var d = K;
                (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
            })
        }

        function j(a, c, d) {
            d = d || b;
            var e;
            return function() {
                var b = arguments;
                window.clearTimeout(e), e = window.setTimeout(function() {
                    c.apply(d, b)
                }, a)
            }
        }

        function k(a) {
            var b, c = !1;
            return function() {
                return c === !1 && (b = a(), c = !0), b
            }
        }

        function l(a, b) {
            var d = j(a, function(a) {
                b.trigger("scroll-debounced", a)
            });
            b.on("scroll", function(a) {
                c(a.target, b.get()) >= 0 && d(a)
            })
        }

        function m(a) {
            a[0] !== document.activeElement && window.setTimeout(function() {
                var b, c = a[0],
                    d = a.val().length;
                a.focus(), a.is(":visible") && c === document.activeElement && (c.setSelectionRange ? c.setSelectionRange(d, d) : c.createTextRange && (b = c.createTextRange(), b.collapse(!1), b.select()))
            }, 0)
        }

        function n(b) {
            b = a(b)[0];
            var c = 0,
                d = 0;
            if ("selectionStart" in b) c = b.selectionStart, d = b.selectionEnd - c;
            else if ("selection" in document) {
                b.focus();
                var e = document.selection.createRange();
                d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
            }
            return {
                offset: c,
                length: d
            }
        }

        function o(a) {
            a.preventDefault(), a.stopPropagation()
        }

        function p(a) {
            a.preventDefault(), a.stopImmediatePropagation()
        }

        function q(b) {
            if (!H) {
                var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
                H = a(document.createElement("div")).css({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px",
                    display: "none",
                    fontSize: c.fontSize,
                    fontFamily: c.fontFamily,
                    fontStyle: c.fontStyle,
                    fontWeight: c.fontWeight,
                    letterSpacing: c.letterSpacing,
                    textTransform: c.textTransform,
                    whiteSpace: "nowrap"
                }), H.attr("class", "select2-sizer"), a("body").append(H)
            }
            return H.text(b.val()), H.width()
        }

        function r(b, c, d) {
            var e, f, g = [];
            e = b.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() {
                0 === this.indexOf("select2-") && g.push(this)
            })), e = c.attr("class"), e && (e = "" + e, a(e.split(" ")).each2(function() {
                0 !== this.indexOf("select2-") && (f = d(this), f && g.push(this))
            })), b.attr("class", g.join(" "))
        }

        function s(a, b, c, d) {
            var e = a.toUpperCase().indexOf(b.toUpperCase()),
                f = b.length;
            return 0 > e ? (c.push(d(a)), void 0) : (c.push(d(a.substring(0, e))), c.push("<span class='select2-match'>"), c.push(d(a.substring(e, e + f))), c.push("</span>"), c.push(d(a.substring(e + f, a.length))), void 0)
        }

        function t(a) {
            var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            };
            return String(a).replace(/[&<>"'\/\\]/g, function(a) {
                return b[a]
            })
        }

        function u(c) {
            var d, e = 0,
                f = null,
                g = c.quietMillis || 100,
                h = c.url,
                i = this;
            return function(j) {
                window.clearTimeout(d), d = window.setTimeout(function() {
                    e += 1;
                    var d = e,
                        g = c.data,
                        k = h,
                        l = c.transport || a.fn.select2.ajaxDefaults.transport,
                        m = {
                            type: c.type || "GET",
                            cache: c.cache || !1,
                            jsonpCallback: c.jsonpCallback || b,
                            dataType: c.dataType || "json"
                        },
                        n = a.extend({}, a.fn.select2.ajaxDefaults.params, m);
                    g = g ? g.call(i, j.term, j.page, j.context) : null, k = "function" == typeof k ? k.call(i, j.term, j.page, j.context) : k, f && f.abort(), c.params && (a.isFunction(c.params) ? a.extend(n, c.params.call(i)) : a.extend(n, c.params)), a.extend(n, {
                        url: k,
                        dataType: c.dataType,
                        data: g,
                        success: function(a) {
                            if (!(e > d)) {
                                var b = c.results(a, j.page);
                                j.callback(b)
                            }
                        }
                    }), f = l.call(i, n)
                }, g)
            }
        }

        function v(b) {
            var c, d, e = b,
                f = function(a) {
                    return "" + a.text
                };
            a.isArray(e) && (d = e, e = {
                results: d
            }), a.isFunction(e) === !1 && (d = e, e = function() {
                return d
            });
            var g = e();
            return g.text && (f = g.text, a.isFunction(f) || (c = g.text, f = function(a) {
                    return a[c]
                })),
                function(b) {
                    var c, d = b.term,
                        g = {
                            results: []
                        };
                    return "" === d ? (b.callback(e()), void 0) : (c = function(e, g) {
                        var h, i;
                        if (e = e[0], e.children) {
                            h = {};
                            for (i in e) e.hasOwnProperty(i) && (h[i] = e[i]);
                            h.children = [], a(e.children).each2(function(a, b) {
                                c(b, h.children)
                            }), (h.children.length || b.matcher(d, f(h), e)) && g.push(h)
                        } else b.matcher(d, f(e), e) && g.push(e)
                    }, a(e().results).each2(function(a, b) {
                        c(b, g.results)
                    }), b.callback(g), void 0)
                }
        }

        function w(c) {
            var d = a.isFunction(c);
            return function(e) {
                var f = e.term,
                    g = {
                        results: []
                    };
                a(d ? c() : c).each(function() {
                    var a = this.text !== b,
                        c = a ? this.text : this;
                    ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                        id: this,
                        text: this
                    })
                }), e.callback(g)
            }
        }

        function x(b, c) {
            if (a.isFunction(b)) return !0;
            if (!b) return !1;
            throw new Error(c + " must be a function or a falsy value")
        }

        function y(b) {
            return a.isFunction(b) ? b() : b
        }

        function z(b) {
            var c = 0;
            return a.each(b, function(a, b) {
                b.children ? c += z(b.children) : c++
            }), c
        }

        function A(a, c, d, f) {
            var g, h, i, j, k, l = a,
                m = !1;
            if (!f.createSearchChoice || !f.tokenSeparators || f.tokenSeparators.length < 1) return b;
            for (;;) {
                for (h = -1, i = 0, j = f.tokenSeparators.length; j > i && (k = f.tokenSeparators[i], h = a.indexOf(k), !(h >= 0)); i++);
                if (0 > h) break;
                if (g = a.substring(0, h), a = a.substring(h + k.length), g.length > 0 && (g = f.createSearchChoice.call(this, g, c), g !== b && null !== g && f.id(g) !== b && null !== f.id(g))) {
                    for (m = !1, i = 0, j = c.length; j > i; i++)
                        if (e(f.id(g), f.id(c[i]))) {
                            m = !0;
                            break
                        }
                    m || d(g)
                }
            }
            return l !== a ? a : void 0
        }

        function B(b, c) {
            var d = function() {};
            return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
        }
        if (window.Select2 === b) {
            var C, D, E, F, G, H, I, J, K = {
                    x: 0,
                    y: 0
                },
                C = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function(a) {
                        switch (a = a.which ? a.which : a) {
                            case C.LEFT:
                            case C.RIGHT:
                            case C.UP:
                            case C.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function(a) {
                        var b = a.which;
                        switch (b) {
                            case C.SHIFT:
                            case C.CTRL:
                            case C.ALT:
                                return !0
                        }
                        return a.metaKey ? !0 : !1
                    },
                    isFunctionKey: function(a) {
                        return a = a.which ? a.which : a, a >= 112 && 123 >= a
                    }
                },
                L = "<div class='select2-measure-scrollbar'></div>";
            I = a(document), G = function() {
                var a = 1;
                return function() {
                    return a++
                }
            }(), I.on("mousemove", function(a) {
                K.x = a.pageX, K.y = a.pageY
            }), D = B(Object, {
                bind: function(a) {
                    var b = this;
                    return function() {
                        a.apply(b, arguments)
                    }
                },
                init: function(c) {
                    var e, f, g, j, m = ".select2-results";
                    this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + G()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = k(function() {
                        return c.element.closest("body")
                    }), r(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.css(y(c.containerCss)), this.container.addClass(y(c.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), this.dropdown.addClass(y(c.dropdownCssClass)), this.dropdown.data("select2", this), this.results = e = this.container.find(m), this.search = f = this.container.find("input.select2-input"), this.resultsPage = 0, this.context = null, this.initContainer(), i(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", m, this.bind(this.highlightUnderEvent)), l(80, this.results), this.dropdown.on("scroll-debounced", m, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
                        a.stopPropagation()
                    }), a(this.dropdown).on("change", ".select2-input", function(a) {
                        a.stopPropagation()
                    }), a.fn.mousewheel && e.mousewheel(function(a, b, c, d) {
                        var f = e.scrollTop();
                        d > 0 && 0 >= f - d ? (e.scrollTop(0), o(a)) : 0 > d && e.get(0).scrollHeight - e.scrollTop() + d <= e.height() && (e.scrollTop(e.get(0).scrollHeight - e.height()), o(a))
                    }), h(f), f.on("keyup-change input paste", this.bind(this.updateResults)), f.on("focus", function() {
                        f.addClass("select2-focused")
                    }), f.on("blur", function() {
                        f.removeClass("select2-focused")
                    }), this.dropdown.on("mouseup", m, this.bind(function(b) {
                        a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
                    })), this.dropdown.on("click mouseup mousedown", function(a) {
                        a.stopPropagation()
                    }), a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                    var g = c.element.prop("disabled");
                    g === b && (g = !1), this.enable(!g);
                    var j = c.element.prop("readonly");
                    j === b && (j = !1), this.readonly(j), J = J || d(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus()
                },
                destroy: function() {
                    var a = this.opts.element,
                        c = a.data("select2");
                    this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), c !== b && (c.container.remove(), c.dropdown.remove(), a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
                        tabindex: this.elementTabIndex
                    }) : a.removeAttr("tabindex"), a.show())
                },
                optionToData: function(a) {
                    return a.is("option") ? {
                        id: a.prop("value"),
                        text: a.text(),
                        element: a.get(),
                        css: a.attr("class"),
                        disabled: a.prop("disabled"),
                        locked: e(a.attr("locked"), "locked") || e(a.data("locked"), !0)
                    } : a.is("optgroup") ? {
                        text: a.attr("label"),
                        children: [],
                        element: a.get(),
                        css: a.attr("class")
                    } : void 0
                },
                prepareOpts: function(c) {
                    var d, g, h, i, j = this;
                    if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = g = c.element), g && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                            if (this in c) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                        }), c = a.extend({}, {
                            populateResults: function(d, e, f) {
                                var g, h = this.opts.id;
                                g = function(d, e, i) {
                                    var k, l, m, n, o, p, q, r, s, t;
                                    for (d = c.sortResults(d, e, f), k = 0, l = d.length; l > k; k += 1) m = d[k], o = m.disabled === !0, n = !o && h(m) !== b, p = m.children && m.children.length > 0, q = a("<li></li>"), q.addClass("select2-results-dept-" + i), q.addClass("select2-result"), q.addClass(n ? "select2-result-selectable" : "select2-result-unselectable"), o && q.addClass("select2-disabled"), p && q.addClass("select2-result-with-children"), q.addClass(j.opts.formatResultCssClass(m)), r = a(document.createElement("div")), r.addClass("select2-result-label"), t = c.formatResult(m, r, f, j.opts.escapeMarkup), t !== b && r.html(t), q.append(r), p && (s = a("<ul></ul>"), s.addClass("select2-result-sub"), g(m.children, s, i + 1), q.append(s)), q.data("select2-data", m), e.append(q)
                                }, g(e, d, 0)
                            }
                        }, a.fn.select2.defaults, c), "function" != typeof c.id && (h = c.id, c.id = function(a) {
                            return a[h]
                        }), a.isArray(c.element.data("select2Tags"))) {
                        if ("tags" in c) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                        c.tags = c.element.data("select2Tags")
                    }
                    if (g ? (c.query = this.bind(function(a) {
                            var c, e, f, g = {
                                    results: [],
                                    more: !1
                                },
                                h = a.term;
                            f = function(b, c) {
                                var d;
                                b.is("option") ? a.matcher(h, b.text(), b) && c.push(j.optionToData(b)) : b.is("optgroup") && (d = j.optionToData(b), b.children().each2(function(a, b) {
                                    f(b, d.children)
                                }), d.children.length > 0 && c.push(d))
                            }, c = d.children(), this.getPlaceholder() !== b && c.length > 0 && (e = this.getPlaceholderOption(), e && (c = c.not(e))), c.each2(function(a, b) {
                                f(b, g.results)
                            }), a.callback(g)
                        }), c.id = function(a) {
                            return a.id
                        }, c.formatResultCssClass = function(a) {
                            return a.css
                        }) : "query" in c || ("ajax" in c ? (i = c.element.data("ajax-url"), i && i.length > 0 && (c.ajax.url = i), c.query = u.call(c.element, c.ajax)) : "data" in c ? c.query = v(c.data) : "tags" in c && (c.query = w(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(a) {
                            return {
                                id: a,
                                text: a
                            }
                        }), c.initSelection === b && (c.initSelection = function(b, d) {
                            var g = [];
                            a(f(b.val(), c.separator)).each(function() {
                                var b = this,
                                    d = this,
                                    f = c.tags;
                                a.isFunction(f) && (f = f()), a(f).each(function() {
                                    return e(this.id, b) ? (d = this.text, !1) : void 0
                                }), g.push({
                                    id: b,
                                    text: d
                                })
                            }), d(g)
                        }))), "function" != typeof c.query) throw "query function not defined for Select2 " + c.element.attr("id");
                    return c
                },
                monitorSource: function() {
                    var a, c = this.opts.element;
                    c.on("change.select2", this.bind(function() {
                        this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                    })), a = this.bind(function() {
                        var a, d = c.prop("disabled");
                        d === b && (d = !1), this.enable(!d);
                        var a = c.prop("readonly");
                        a === b && (a = !1), this.readonly(a), r(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(y(this.opts.containerCssClass)), r(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(y(this.opts.dropdownCssClass))
                    }), c.on("propertychange.select2 DOMAttrModified.select2", a), this.mutationCallback === b && (this.mutationCallback = function(b) {
                        b.forEach(a)
                    }), "undefined" != typeof WebKitMutationObserver && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new WebKitMutationObserver(this.mutationCallback), this.propertyObserver.observe(c.get(0), {
                        attributes: !0,
                        subtree: !1
                    }))
                },
                triggerSelect: function(b) {
                    var c = a.Event("select2-selecting", {
                        val: this.id(b),
                        object: b
                    });
                    return this.opts.element.trigger(c), !c.isDefaultPrevented()
                },
                triggerChange: function(b) {
                    b = b || {}, b = a.extend({}, b, {
                        type: "change",
                        val: this.val()
                    }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
                },
                isInterfaceEnabled: function() {
                    return this.enabledInterface === !0
                },
                enableInterface: function() {
                    var a = this._enabled && !this._readonly,
                        b = !a;
                    return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
                },
                enable: function(a) {
                    return a === b && (a = !0), this._enabled === a ? !1 : (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface(), !0)
                },
                readonly: function(a) {
                    return a === b && (a = !1), this._readonly === a ? !1 : (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface(), !0)
                },
                opened: function() {
                    return this.container.hasClass("select2-dropdown-open")
                },
                positionDropdown: function() {
                    var b, c, d, e, f = this.dropdown,
                        g = this.container.offset(),
                        h = this.container.outerHeight(!1),
                        i = this.container.outerWidth(!1),
                        j = f.outerHeight(!1),
                        k = a(window).scrollLeft() + a(window).width(),
                        l = a(window).scrollTop() + a(window).height(),
                        m = g.top + h,
                        n = g.left,
                        o = l >= m + j,
                        p = g.top - j >= this.body().scrollTop(),
                        q = f.outerWidth(!1),
                        r = k >= n + q,
                        s = f.hasClass("select2-drop-above");
                    this.opts.dropdownAutoWidth ? (e = a(".select2-results", f)[0], f.addClass("select2-drop-auto-width"), f.css("width", ""), q = f.outerWidth(!1) + (e.scrollHeight === e.clientHeight ? 0 : J.width), q > i ? i = q : q = i, r = k >= n + q) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (b = this.body().offset(), m -= b.top, n -= b.left), s ? (c = !0, !p && o && (c = !1)) : (c = !1, !o && p && (c = !0)), r || (n = g.left + i - q), c ? (m = g.top - j, this.container.addClass("select2-drop-above"), f.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"), f.removeClass("select2-drop-above")), d = a.extend({
                        top: m,
                        left: n,
                        width: i
                    }, y(this.opts.dropdownCss)), f.css(d)
                },
                shouldOpen: function() {
                    var b;
                    return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
                },
                clearDropdownAlignmentPreference: function() {
                    this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
                },
                open: function() {
                    return this.shouldOpen() ? (this.opening(), !0) : !1
                },
                opening: function() {
                    function b() {
                        return {
                            width: Math.max(document.documentElement.scrollWidth, a(window).width()),
                            height: Math.max(document.documentElement.scrollHeight, a(window).height())
                        }
                    }
                    var c, d, e = this.containerId,
                        f = "scroll." + e,
                        g = "resize." + e,
                        h = "orientationchange." + e;
                    this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), c = a("#select2-drop-mask"), 0 == c.length && (c = a(document.createElement("div")), c.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), c.hide(), c.appendTo(this.body()), c.on("mousedown touchstart click", function(b) {
                        var c, d = a("#select2-drop");
                        d.length > 0 && (c = d.data("select2"), c.opts.selectOnBlur && c.selectHighlighted({
                            noFocus: !0
                        }), c.close(), b.preventDefault(), b.stopPropagation())
                    })), this.dropdown.prev()[0] !== c[0] && this.dropdown.before(c), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), d = b(), c.css(d).show(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                    var i = this;
                    this.container.parents().add(window).each(function() {
                        a(this).on(g + " " + f + " " + h, function() {
                            var c = b();
                            a("#select2-drop-mask").css(c), i.positionDropdown()
                        })
                    })
                },
                close: function() {
                    if (this.opened()) {
                        var b = this.containerId,
                            c = "scroll." + b,
                            d = "resize." + b,
                            e = "orientationchange." + b;
                        this.container.parents().add(window).each(function() {
                            a(this).off(c).off(d).off(e)
                        }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
                    }
                },
                externalSearch: function(a) {
                    this.open(), this.search.val(a), this.updateResults(!1)
                },
                clearSearch: function() {},
                getMaximumSelectionSize: function() {
                    return y(this.opts.maximumSelectionSize)
                },
                ensureHighlightVisible: function() {
                    var b, c, d, e, f, g, h, i = this.results;
                    if (c = this.highlight(), !(0 > c)) {
                        if (0 == c) return i.scrollTop(0), void 0;
                        b = this.findHighlightableChoices().find(".select2-result-label"), d = a(b[c]), e = d.offset().top + d.outerHeight(!0), c === b.length - 1 && (h = i.find("li.select2-more-results"), h.length > 0 && (e = h.offset().top + h.outerHeight(!0))), f = i.offset().top + i.outerHeight(!0), e > f && i.scrollTop(i.scrollTop() + (e - f)), g = d.offset().top - i.offset().top, 0 > g && "none" != d.css("display") && i.scrollTop(i.scrollTop() + g)
                    }
                },
                findHighlightableChoices: function() {
                    return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")
                },
                moveHighlight: function(b) {
                    for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
                        d += b;
                        var e = a(c[d]);
                        if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                            this.highlight(d);
                            break
                        }
                    }
                },
                highlight: function(b) {
                    var d, e, f = this.findHighlightableChoices();
                    return 0 === arguments.length ? c(f.filter(".select2-highlighted")[0], f.get()) : (b >= f.length && (b = f.length - 1), 0 > b && (b = 0), this.results.find(".select2-highlighted").removeClass("select2-highlighted"), d = a(f[b]), d.addClass("select2-highlighted"), this.ensureHighlightVisible(), e = d.data("select2-data"), e && this.opts.element.trigger({
                        type: "select2-highlight",
                        val: this.id(e),
                        choice: e
                    }), void 0)
                },
                countSelectableResults: function() {
                    return this.findHighlightableChoices().length
                },
                highlightUnderEvent: function(b) {
                    var c = a(b.target).closest(".select2-result-selectable");
                    if (c.length > 0 && !c.is(".select2-highlighted")) {
                        var d = this.findHighlightableChoices();
                        this.highlight(d.index(c))
                    } else 0 == c.length && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                },
                loadMoreIfNeeded: function() {
                    var a, b = this.results,
                        c = b.find("li.select2-more-results"),
                        d = this.resultsPage + 1,
                        e = this,
                        f = this.search.val(),
                        g = this.context;
                    0 !== c.length && (a = c.offset().top - b.offset().top - b.height(), a <= this.opts.loadMorePadding && (c.addClass("select2-active"), this.opts.query({
                        element: this.opts.element,
                        term: f,
                        page: d,
                        context: g,
                        matcher: this.opts.matcher,
                        callback: this.bind(function(a) {
                            e.opened() && (e.opts.populateResults.call(this, b, a.results, {
                                term: f,
                                page: d,
                                context: g
                            }), e.postprocessResults(a, !1, !1), a.more === !0 ? (c.detach().appendTo(b).text(e.opts.formatLoadMore(d + 1)), window.setTimeout(function() {
                                e.loadMoreIfNeeded()
                            }, 10)) : c.remove(), e.positionDropdown(), e.resultsPage = d, e.context = a.context)
                        })
                    })))
                },
                tokenize: function() {},
                updateResults: function(c) {
                    function d() {
                        i.removeClass("select2-active"), l.positionDropdown()
                    }

                    function f(a) {
                        j.html(a), d()
                    }
                    var g, h, i = this.search,
                        j = this.results,
                        k = this.opts,
                        l = this,
                        m = i.val(),
                        n = a.data(this.container, "select2-last-term");
                    if ((c === !0 || !n || !e(m, n)) && (a.data(this.container, "select2-last-term", m), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                        var o = this.getMaximumSelectionSize();
                        if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && x(k.formatSelectionTooBig, "formatSelectionTooBig"))) return f("<li class='select2-selection-limit'>" + k.formatSelectionTooBig(o) + "</li>"), void 0;
                        if (i.val().length < k.minimumInputLength) return x(k.formatInputTooShort, "formatInputTooShort") ? f("<li class='select2-no-results'>" + k.formatInputTooShort(i.val(), k.minimumInputLength) + "</li>") : f(""), c && this.showSearch && this.showSearch(!0), void 0;
                        if (k.maximumInputLength && i.val().length > k.maximumInputLength) return x(k.formatInputTooLong, "formatInputTooLong") ? f("<li class='select2-no-results'>" + k.formatInputTooLong(i.val(), k.maximumInputLength) + "</li>") : f(""), void 0;
                        k.formatSearching && 0 === this.findHighlightableChoices().length && f("<li class='select2-searching'>" + k.formatSearching() + "</li>"), i.addClass("select2-active"), h = this.tokenize(), h != b && null != h && i.val(h), this.resultsPage = 1, k.query({
                            element: k.element,
                            term: i.val(),
                            page: this.resultsPage,
                            context: null,
                            matcher: k.matcher,
                            callback: this.bind(function(g) {
                                var h;
                                return this.opened() ? (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== i.val() && (h = this.opts.createSearchChoice.call(l, i.val(), g.results), h !== b && null !== h && l.id(h) !== b && null !== l.id(h) && 0 === a(g.results).filter(function() {
                                    return e(l.id(this), l.id(h))
                                }).length && g.results.unshift(h)), 0 === g.results.length && x(k.formatNoMatches, "formatNoMatches") ? (f("<li class='select2-no-results'>" + k.formatNoMatches(i.val()) + "</li>"), void 0) : (j.empty(), l.opts.populateResults.call(this, j, g.results, {
                                    term: i.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), g.more === !0 && x(k.formatLoadMore, "formatLoadMore") && (j.append("<li class='select2-more-results'>" + l.opts.escapeMarkup(k.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    l.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(g, c), d(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: g
                                }), void 0)) : (this.search.removeClass("select2-active"), void 0)
                            })
                        })
                    }
                },
                cancel: function() {
                    this.close()
                },
                blur: function() {
                    this.opts.selectOnBlur && this.selectHighlighted({
                        noFocus: !0
                    }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                },
                focusSearch: function() {
                    m(this.search)
                },
                selectHighlighted: function(a) {
                    var b = this.highlight(),
                        c = this.results.find(".select2-highlighted"),
                        d = c.closest(".select2-result").data("select2-data");
                    d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
                },
                getPlaceholder: function() {
                    var a;
                    return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
                },
                getPlaceholderOption: function() {
                    if (this.select) {
                        var a = this.select.children().first();
                        if (this.opts.placeholderOption !== b) return "first" === this.opts.placeholderOption && a || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                        if ("" === a.text() && "" === a.val()) return a
                    }
                },
                initContainerWidth: function() {
                    function c() {
                        var c, d, e, f, g;
                        if ("off" === this.opts.width) return null;
                        if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                        if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                            if (c = this.opts.element.attr("style"), c !== b)
                                for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                                    if (e = d[f].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1) return e[1];
                            return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                        }
                        return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                    }
                    var d = c.call(this);
                    null !== d && this.container.css("width", d)
                }
            }), E = B(D, {
                createContainer: function() {
                    var b = a(document.createElement("div")).attr({
                        "class": "select2-container"
                    }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                    return b
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                },
                opening: function() {
                    var b, c, d;
                    this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), b = this.search.get(0), b.createTextRange ? (c = b.createTextRange(), c.collapse(!1), c.select()) : b.setSelectionRange && (d = this.search.val().length, b.setSelectionRange(d, d)), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
                },
                close: function() {
                    this.opened() && (this.parent.close.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus())
                },
                focus: function() {
                    this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
                },
                isFocused: function() {
                    return this.container.hasClass("select2-container-active")
                },
                cancel: function() {
                    this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
                },
                initContainer: function() {
                    var b, c = this.container,
                        d = this.dropdown;
                    this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = c.find(".select2-choice"), this.focusser = c.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + G()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled()) {
                            if (a.which === C.PAGE_UP || a.which === C.PAGE_DOWN) return o(a), void 0;
                            switch (a.which) {
                                case C.UP:
                                case C.DOWN:
                                    return this.moveHighlight(a.which === C.UP ? -1 : 1), o(a), void 0;
                                case C.ENTER:
                                    return this.selectHighlighted(), o(a), void 0;
                                case C.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), void 0;
                                case C.ESC:
                                    return this.cancel(a), o(a), void 0
                            }
                        }
                    })), this.search.on("blur", this.bind(function() {
                        document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
                            this.search.focus()
                        }), 0)
                    })), this.focusser.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled() && a.which !== C.TAB && !C.isControl(a) && !C.isFunctionKey(a) && a.which !== C.ESC) {
                            if (this.opts.openOnEnter === !1 && a.which === C.ENTER) return o(a), void 0;
                            if (a.which == C.DOWN || a.which == C.UP || a.which == C.ENTER && this.opts.openOnEnter) {
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return;
                                return this.open(), o(a), void 0
                            }
                            return a.which == C.DELETE || a.which == C.BACKSPACE ? (this.opts.allowClear && this.clear(), o(a), void 0) : void 0
                        }
                    })), h(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                        if (this.opts.minimumResultsForSearch >= 0) {
                            if (a.stopPropagation(), this.opened()) return;
                            this.open()
                        }
                    })), b.on("mousedown", "abbr", this.bind(function(a) {
                        this.isInterfaceEnabled() && (this.clear(), p(a), this.close(), this.selection.focus())
                    })), b.on("mousedown", this.bind(function(b) {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), o(b)
                    })), d.on("mousedown", this.bind(function() {
                        this.search.focus()
                    })), b.on("focus", this.bind(function(a) {
                        o(a)
                    })), this.focusser.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })).on("blur", this.bind(function() {
                        this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
                    })), this.search.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
                },
                clear: function(a) {
                    var b = this.selection.data("select2-data");
                    if (b) {
                        var c = this.getPlaceholderOption();
                        this.opts.element.val(c ? c.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), a !== !1 && (this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(b),
                            choice: b
                        }), this.triggerChange({
                            removed: b
                        }))
                    }
                },
                initSelection: function() {
                    if (this.isPlaceholderOptionSelected()) this.updateSelection([]), this.close(), this.setPlaceholder();
                    else {
                        var a = this;
                        this.opts.initSelection.call(null, this.opts.element, function(c) {
                            c !== b && null !== c && (a.updateSelection(c), a.close(), a.setPlaceholder())
                        })
                    }
                },
                isPlaceholderOptionSelected: function() {
                    var a;
                    return (a = this.getPlaceholderOption()) !== b && a.is(":selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
                },
                prepareOpts: function() {
                    var b = this.parent.prepareOpts.apply(this, arguments),
                        c = this;
                    return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                        var d = a.find(":selected");
                        b(c.optionToData(d))
                    } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                        var f = c.val(),
                            g = null;
                        b.query({
                            matcher: function(a, c, d) {
                                var h = e(f, b.id(d));
                                return h && (g = d), h
                            },
                            callback: a.isFunction(d) ? function() {
                                d(g)
                            } : a.noop
                        })
                    }), b
                },
                getPlaceholder: function() {
                    return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
                },
                setPlaceholder: function() {
                    var a = this.getPlaceholder();
                    if (this.isPlaceholderOptionSelected() && a !== b) {
                        if (this.select && this.getPlaceholderOption() === b) return;
                        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                    }
                },
                postprocessResults: function(a, b, c) {
                    var d = 0,
                        f = this;
                    if (this.findHighlightableChoices().each2(function(a, b) {
                            return e(f.id(b.data("select2-data")), f.opts.element.val()) ? (d = a, !1) : void 0
                        }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
                        var g = this.opts.minimumResultsForSearch;
                        g >= 0 && this.showSearch(z(a.results) >= g)
                    }
                },
                showSearch: function(b) {
                    this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
                },
                onSelect: function(a, b) {
                    if (this.triggerSelect(a)) {
                        var c = this.opts.element.val(),
                            d = this.data();
                        this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
                            type: "select2-selected",
                            val: this.id(a),
                            choice: a
                        }), this.close(), b && b.noFocus || this.selection.focus(), e(c, this.id(a)) || this.triggerChange({
                            added: a,
                            removed: d
                        })
                    }
                },
                updateSelection: function(a) {
                    var c, d, e = this.selection.find(".select2-chosen");
                    this.selection.data("select2-data", a), e.empty(), c = this.opts.formatSelection(a, e, this.opts.escapeMarkup), c !== b && e.append(c), d = this.opts.formatSelectionCssClass(a, e), d !== b && e.addClass(d), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
                },
                val: function() {
                    var a, c = !1,
                        d = null,
                        e = this,
                        f = this.data();
                    if (0 === arguments.length) return this.opts.element.val();
                    if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select) this.select.val(a).find(":selected").each2(function(a, b) {
                        return d = e.optionToData(b), !1
                    }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
                        added: d,
                        removed: f
                    });
                    else {
                        if (!a && 0 !== a) return this.clear(c), void 0;
                        if (this.opts.initSelection === b) throw new Error("cannot call val() if initSelection() is not defined");
                        this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
                            e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
                                added: a,
                                removed: f
                            })
                        })
                    }
                },
                clearSearch: function() {
                    this.search.val(""), this.focusser.val("")
                },
                data: function(a, c) {
                    var d;
                    return 0 === arguments.length ? (d = this.selection.data("select2-data"), d == b && (d = null), d) : (a && "" !== a ? (d = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), c && this.triggerChange({
                        added: a,
                        removed: d
                    })) : this.clear(c), void 0)
                }
            }), F = B(D, {
                createContainer: function() {
                    var b = a(document.createElement("div")).attr({
                        "class": "select2-container select2-container-multi"
                    }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                    return b
                },
                prepareOpts: function() {
                    var b = this.parent.prepareOpts.apply(this, arguments),
                        c = this;
                    return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                        var d = [];
                        a.find(":selected").each2(function(a, b) {
                            d.push(c.optionToData(b))
                        }), b(d)
                    } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                        var g = f(c.val(), b.separator),
                            h = [];
                        b.query({
                            matcher: function(c, d, f) {
                                var i = a.grep(g, function(a) {
                                    return e(a, b.id(f))
                                }).length;
                                return i && h.push(f), i
                            },
                            callback: a.isFunction(d) ? function() {
                                for (var a = [], c = 0; c < g.length; c++)
                                    for (var f = g[c], i = 0; i < h.length; i++) {
                                        var j = h[i];
                                        if (e(f, b.id(j))) {
                                            a.push(j), h.splice(i, 1);
                                            break
                                        }
                                    }
                                d(a)
                            } : a.noop
                        })
                    }), b
                },
                selectChoice: function(a) {
                    var b = this.container.find(".select2-search-choice-focus");
                    b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
                },
                initContainer: function() {
                    var b, c = ".select2-choices";
                    this.searchContainer = this.container.find(".select2-search-field"), this.selection = b = this.container.find(c);
                    var d = this;
                    this.selection.on("mousedown", ".select2-search-choice", function() {
                        d.search[0].focus(), d.selectChoice(a(this))
                    }), this.search.attr("id", "s2id_autogen" + G()), a("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
                        this.isInterfaceEnabled() && (this.opened() || this.open())
                    })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                        if (this.isInterfaceEnabled()) {
                            ++this.keydowns;
                            var c = b.find(".select2-search-choice-focus"),
                                d = c.prev(".select2-search-choice:not(.select2-locked)"),
                                e = c.next(".select2-search-choice:not(.select2-locked)"),
                                f = n(this.search);
                            if (c.length && (a.which == C.LEFT || a.which == C.RIGHT || a.which == C.BACKSPACE || a.which == C.DELETE || a.which == C.ENTER)) {
                                var g = c;
                                return a.which == C.LEFT && d.length ? g = d : a.which == C.RIGHT ? g = e.length ? e : null : a.which === C.BACKSPACE ? (this.unselect(c.first()), this.search.width(10), g = d.length ? d : e) : a.which == C.DELETE ? (this.unselect(c.first()), this.search.width(10), g = e.length ? e : null) : a.which == C.ENTER && (g = null), this.selectChoice(g), o(a), g && g.length || this.open(), void 0
                            }
                            if ((a.which === C.BACKSPACE && 1 == this.keydowns || a.which == C.LEFT) && 0 == f.offset && !f.length) return this.selectChoice(b.find(".select2-search-choice:not(.select2-locked)").last()), o(a), void 0;
                            if (this.selectChoice(null), this.opened()) switch (a.which) {
                                case C.UP:
                                case C.DOWN:
                                    return this.moveHighlight(a.which === C.UP ? -1 : 1), o(a), void 0;
                                case C.ENTER:
                                    return this.selectHighlighted(), o(a), void 0;
                                case C.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), this.close(), void 0;
                                case C.ESC:
                                    return this.cancel(a), o(a), void 0
                            }
                            if (a.which !== C.TAB && !C.isControl(a) && !C.isFunctionKey(a) && a.which !== C.BACKSPACE && a.which !== C.ESC) {
                                if (a.which === C.ENTER) {
                                    if (this.opts.openOnEnter === !1) return;
                                    if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey) return
                                }
                                this.open(), (a.which === C.PAGE_UP || a.which === C.PAGE_DOWN) && o(a), a.which === C.ENTER && o(a)
                            }
                        }
                    })), this.search.on("keyup", this.bind(function() {
                        this.keydowns = 0, this.resizeSearch()
                    })), this.search.on("blur", this.bind(function(b) {
                        this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
                    })), this.container.on("click", c, this.bind(function(b) {
                        this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
                    })), this.container.on("focus", c, this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                    })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                },
                initSelection: function() {
                    if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                        var a = this;
                        this.opts.initSelection.call(null, this.opts.element, function(c) {
                            c !== b && null !== c && (a.updateSelection(c), a.close(), a.clearSearch())
                        })
                    }
                },
                clearSearch: function() {
                    var a = this.getPlaceholder(),
                        c = this.getMaxSearchWidth();
                    a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
                },
                clearPlaceholder: function() {
                    this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                },
                opening: function() {
                    this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
                },
                close: function() {
                    this.opened() && this.parent.close.apply(this, arguments)
                },
                focus: function() {
                    this.close(), this.search.focus()
                },
                isFocused: function() {
                    return this.search.hasClass("select2-focused")
                },
                updateSelection: function(b) {
                    var d = [],
                        e = [],
                        f = this;
                    a(b).each(function() {
                        c(f.id(this), d) < 0 && (d.push(f.id(this)), e.push(this))
                    }), b = e, this.selection.find(".select2-search-choice").remove(), a(b).each(function() {
                        f.addSelectedChoice(this)
                    }), f.postprocessResults()
                },
                tokenize: function() {
                    var a = this.search.val();
                    a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
                },
                onSelect: function(a, b) {
                    this.triggerSelect(a) && (this.addSelectedChoice(a), this.opts.element.trigger({
                        type: "selected",
                        val: this.id(a),
                        choice: a
                    }), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                        added: a
                    }), b && b.noFocus || this.focusSearch())
                },
                cancel: function() {
                    this.close(), this.focusSearch()
                },
                addSelectedChoice: function(c) {
                    var d, e, f = !c.locked,
                        g = a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                        h = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                        i = f ? g : h,
                        j = this.id(c),
                        k = this.getVal();
                    d = this.opts.formatSelection(c, i.find("div"), this.opts.escapeMarkup), d != b && i.find("div").replaceWith("<div>" + d + "</div>"), e = this.opts.formatSelectionCssClass(c, i.find("div")), e != b && i.addClass(e), f && i.find(".select2-search-choice-close").on("mousedown", o).on("click dblclick", this.bind(function(b) {
                        this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
                            this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
                        })).dequeue(), o(b))
                    })).on("focus", this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                    })), i.data("select2-data", c), i.insertBefore(this.searchContainer), k.push(j), this.setVal(k)
                },
                unselect: function(a) {
                    var b, d, e = this.getVal();
                    if (a = a.closest(".select2-search-choice"), 0 === a.length) throw "Invalid argument: " + a + ". Must be .select2-search-choice";
                    b = a.data("select2-data"), b && (d = c(this.id(b), e), d >= 0 && (e.splice(d, 1), this.setVal(e), this.select && this.postprocessResults()), a.remove(), this.opts.element.trigger({
                        type: "removed",
                        val: this.id(b),
                        choice: b
                    }), this.triggerChange({
                        removed: b
                    }))
                },
                postprocessResults: function(a, b, d) {
                    var e = this.getVal(),
                        f = this.results.find(".select2-result"),
                        g = this.results.find(".select2-result-with-children"),
                        h = this;
                    f.each2(function(a, b) {
                        var d = h.id(b.data("select2-data"));
                        c(d, e) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                    }), g.each2(function(a, b) {
                        b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                    }), -1 == this.highlight() && d !== !1 && h.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && x(h.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + h.opts.formatNoMatches(h.search.val()) + "</li>")
                },
                getMaxSearchWidth: function() {
                    return this.selection.width() - g(this.search)
                },
                resizeSearch: function() {
                    var a, b, c, d, e, f = g(this.search);
                    a = q(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(e)
                },
                getVal: function() {
                    var a;
                    return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), f(a, this.opts.separator))
                },
                setVal: function(b) {
                    var d;
                    this.select ? this.select.val(b) : (d = [], a(b).each(function() {
                        c(this, d) < 0 && d.push(this)
                    }), this.opts.element.val(0 === d.length ? "" : d.join(this.opts.separator)))
                },
                buildChangeDetails: function(a, b) {
                    for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                        for (var d = 0; d < a.length; d++) e(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c--, a.splice(d, 1), d--);
                    return {
                        added: b,
                        removed: a
                    }
                },
                val: function(c, d) {
                    var e, f = this;
                    if (0 === arguments.length) return this.getVal();
                    if (e = this.data(), e.length || (e = []), !c && 0 !== c) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
                        added: this.data(),
                        removed: e
                    }), void 0;
                    if (this.setVal(c), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                    else {
                        if (this.opts.initSelection === b) throw new Error("val() cannot be called if initSelection() is not defined");
                        this.opts.initSelection(this.opts.element, function(b) {
                            var c = a.map(b, f.id);
                            f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(this.buildChangeDetails(e, this.data()))
                        })
                    }
                    this.clearSearch()
                },
                onSortStart: function() {
                    if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                    this.search.width(0), this.searchContainer.hide()
                },
                onSortEnd: function() {
                    var b = [],
                        c = this;
                    this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                        b.push(c.opts.id(a(this).data("select2-data")))
                    }), this.setVal(b), this.triggerChange()
                },
                data: function(b, c) {
                    var d, e, f = this;
                    return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
                        return a(this).data("select2-data")
                    }).get() : (e = this.data(), b || (b = []), d = a.map(b, function(a) {
                        return f.opts.id(a)
                    }), this.setVal(d), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(e, this.data())), void 0)
                }
            }), a.fn.select2 = function() {
                var d, e, f, g, h, i = Array.prototype.slice.call(arguments, 0),
                    j = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "readonly", "positionDropdown", "data", "search"],
                    k = ["val", "opened", "isFocused", "container", "data"],
                    l = {
                        search: "externalSearch"
                    };
                return this.each(function() {
                    if (0 === i.length || "object" == typeof i[0]) d = 0 === i.length ? {} : a.extend({}, i[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? h = d.element.prop("multiple") : (h = d.multiple || !1, "tags" in d && (d.multiple = h = !0)), e = h ? new F : new E, e.init(d);
                    else {
                        if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
                        if (c(i[0], j) < 0) throw "Unknown method: " + i[0];
                        if (g = b, e = a(this).data("select2"), e === b) return;
                        if (f = i[0], "container" === f ? g = e.container : "dropdown" === f ? g = e.dropdown : (l[f] && (f = l[f]), g = e[f].apply(e, i.slice(1))), c(i[0], k) >= 0) return !1
                    }
                }), g === b ? this : g
            }, a.fn.select2.defaults = {
                width: "copy",
                loadMorePadding: 0,
                closeOnSelect: !0,
                openOnEnter: !0,
                containerCss: {},
                dropdownCss: {},
                containerCssClass: "",
                dropdownCssClass: "",
                formatResult: function(a, b, c, d) {
                    var e = [];
                    return s(a.text, c.term, e, d), e.join("")
                },
                formatSelection: function(a, c, d) {
                    return a ? d(a.text) : b
                },
                sortResults: function(a) {
                    return a
                },
                formatResultCssClass: function() {
                    return b
                },
                formatSelectionCssClass: function() {
                    return b
                },
                formatNoMatches: function() {
                    return "No matches found"
                },
                formatInputTooShort: function(a, b) {
                    var c = b - a.length;
                    return "Please enter " + c + " more character" + (1 == c ? "" : "s")
                },
                formatInputTooLong: function(a, b) {
                    var c = a.length - b;
                    return "Please delete " + c + " character" + (1 == c ? "" : "s")
                },
                formatSelectionTooBig: function(a) {
                    return "You can only select " + a + " item" + (1 == a ? "" : "s")
                },
                formatLoadMore: function() {
                    return "Loading more results..."
                },
                formatSearching: function() {
                    return "Searching..."
                },
                minimumResultsForSearch: 0,
                minimumInputLength: 0,
                maximumInputLength: null,
                maximumSelectionSize: 0,
                id: function(a) {
                    return a.id
                },
                matcher: function(a, b) {
                    return ("" + b).toUpperCase().indexOf(("" + a).toUpperCase()) >= 0
                },
                separator: ",",
                tokenSeparators: [],
                tokenizer: A,
                escapeMarkup: t,
                blurOnChange: !1,
                selectOnBlur: !1,
                adaptContainerCssClass: function(a) {
                    return a
                },
                adaptDropdownCssClass: function() {
                    return null
                }
            }, a.fn.select2.ajaxDefaults = {
                transport: a.ajax,
                params: {
                    type: "GET",
                    cache: !1,
                    dataType: "json"
                }
            }, window.Select2 = {
                query: {
                    ajax: u,
                    local: v,
                    tags: w
                },
                util: {
                    debounce: j,
                    markMatch: s,
                    escapeMarkup: t
                },
                "class": {
                    "abstract": D,
                    single: E,
                    multi: F
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";

        function b() {
            this.controls = {
                bold: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["b", "strong"],
                    css: {
                        fontWeight: "bold"
                    },
                    tooltip: "Bold",
                    hotkey: {
                        ctrl: 1,
                        key: 66
                    }
                },
                copy: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Copy"
                },
                createLink: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var b = this;
                        a.wysiwyg.controls && a.wysiwyg.controls.link ? a.wysiwyg.controls.link.init(this) : a.wysiwyg.autoload ? a.wysiwyg.autoload.control("wysiwyg.link.js", function() {
                            b.controls.createLink.exec.apply(b)
                        }) : c.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file")
                    },
                    tags: ["a"],
                    tooltip: "Create link"
                },
                unLink: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        this.editorDoc.execCommand("unlink", !1, null)
                    },
                    tooltip: "Remove link"
                },
                cut: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Cut"
                },
                decreaseFontSize: {
                    groupIndex: 9,
                    visible: !1,
                    tags: ["small"],
                    tooltip: "Decrease font size",
                    exec: function() {
                        this.decreaseFontSize()
                    }
                },
                h1: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h1",
                    command: a.browser.msie || a.browser.opera ? "FormatBlock" : "heading",
                    arguments: a.browser.msie || a.browser.opera ? "<h1>" : "h1",
                    tags: ["h1"],
                    tooltip: "Header 1"
                },
                h2: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h2",
                    command: a.browser.msie || a.browser.opera ? "FormatBlock" : "heading",
                    arguments: a.browser.msie || a.browser.opera ? "<h2>" : "h2",
                    tags: ["h2"],
                    tooltip: "Header 2"
                },
                h3: {
                    groupIndex: 7,
                    visible: !0,
                    className: "h3",
                    command: a.browser.msie || a.browser.opera ? "FormatBlock" : "heading",
                    arguments: a.browser.msie || a.browser.opera ? "<h3>" : "h3",
                    tags: ["h3"],
                    tooltip: "Header 3"
                },
                highlight: {
                    tooltip: "Highlight",
                    className: "highlight",
                    groupIndex: 1,
                    visible: !1,
                    css: {
                        backgroundColor: "rgb(255, 255, 102)"
                    },
                    exec: function() {
                        var b, c, d, e;
                        if (b = a.browser.msie || a.browser.opera ? "backcolor" : "hilitecolor", a.browser.msie) c = this.getInternalRange().parentElement();
                        else
                            for (d = this.getInternalSelection(), c = d.extentNode || d.focusNode; void 0 === c.style;)
                                if (c = c.parentNode, c.tagName && "body" === c.tagName.toLowerCase()) return;
                        e = "rgb(255, 255, 102)" === c.style.backgroundColor || "#ffff66" === c.style.backgroundColor ? "#ffffff" : "#ffff66", this.editorDoc.execCommand(b, !1, e)
                    }
                },
                html: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function(b, c) {
                        var d;
                        this.options.resizeOptions && a.fn.resizable && (d = this.element.height()), this.viewHTML ? (this.setContent("function" == typeof c ? c(this.original.value) : this.original.value), a(this.original).hide(), this.editor.show(), this.options.resizeOptions && a.fn.resizable && (d === this.element.height() && this.element.height(d + this.editor.height()), this.element.resizable(a.extend(!0, {
                            alsoResize: this.editor
                        }, this.options.resizeOptions))), this.ui.toolbar.find("li").each(function() {
                            var b = a(this);
                            b.hasClass("html") ? b.removeClass("active") : b.removeClass("disabled")
                        })) : (this.saveContent(b), a(this.original).css({
                            width: this.editor.width(),
                            height: this.editor.height(),
                            resize: "none"
                        }).show(), this.editor.hide(), this.options.resizeOptions && a.fn.resizable && (d === this.element.height() && this.element.height(this.ui.toolbar.height()), this.element.resizable("destroy")), this.ui.toolbar.find("li").each(function() {
                            var b = a(this);
                            b.hasClass("html") ? b.addClass("active") : !1 === b.hasClass("fullscreen") && b.removeClass("active").addClass("disabled")
                        })), this.viewHTML = !this.viewHTML
                    },
                    tooltip: "View source code"
                },
                increaseFontSize: {
                    groupIndex: 9,
                    visible: !1,
                    tags: ["big"],
                    tooltip: "Increase font size",
                    exec: function() {
                        this.increaseFontSize()
                    }
                },
                indent: {
                    groupIndex: 2,
                    visible: !0,
                    tooltip: "Indent"
                },
                insertHorizontalRule: {
                    groupIndex: 6,
                    visible: !0,
                    tags: ["hr"],
                    tooltip: "Insert Horizontal Rule"
                },
                insertImage: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var b = this;
                        a.wysiwyg.controls && a.wysiwyg.controls.image ? a.wysiwyg.controls.image.init(this) : a.wysiwyg.autoload ? a.wysiwyg.autoload.control("wysiwyg.image.js", function() {
                            b.controls.insertImage.exec.apply(b)
                        }) : c.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")
                    },
                    tags: ["img"],
                    tooltip: "Insert image"
                },
                insertOrderedList: {
                    groupIndex: 5,
                    visible: !0,
                    tags: ["ol"],
                    tooltip: "Insert Ordered List"
                },
                insertTable: {
                    groupIndex: 6,
                    visible: !0,
                    exec: function() {
                        var b = this;
                        a.wysiwyg.controls && a.wysiwyg.controls.table ? a.wysiwyg.controls.table(this) : a.wysiwyg.autoload ? a.wysiwyg.autoload.control("wysiwyg.table.js", function() {
                            b.controls.insertTable.exec.apply(b)
                        }) : c.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file")
                    },
                    tags: ["table"],
                    tooltip: "Insert table"
                },
                insertUnorderedList: {
                    groupIndex: 5,
                    visible: !0,
                    tags: ["ul"],
                    tooltip: "Insert Unordered List"
                },
                italic: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["i", "em"],
                    css: {
                        fontStyle: "italic"
                    },
                    tooltip: "Italic",
                    hotkey: {
                        ctrl: 1,
                        key: 73
                    }
                },
                justifyCenter: {
                    groupIndex: 1,
                    visible: !0,
                    tags: ["center"],
                    css: {
                        textAlign: "center"
                    },
                    tooltip: "Justify Center"
                },
                justifyFull: {
                    groupIndex: 1,
                    visible: !0,
                    css: {
                        textAlign: "justify"
                    },
                    tooltip: "Justify Full"
                },
                justifyLeft: {
                    visible: !0,
                    groupIndex: 1,
                    css: {
                        textAlign: "left"
                    },
                    tooltip: "Justify Left"
                },
                justifyRight: {
                    groupIndex: 1,
                    visible: !0,
                    css: {
                        textAlign: "right"
                    },
                    tooltip: "Justify Right"
                },
                ltr: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function() {
                        var b = this.dom.getElement("p");
                        return b ? (a(b).attr("dir", "ltr"), !0) : !1
                    },
                    tooltip: "Left to Right"
                },
                outdent: {
                    groupIndex: 2,
                    visible: !0,
                    tooltip: "Outdent"
                },
                paragraph: {
                    groupIndex: 7,
                    visible: !1,
                    className: "paragraph",
                    command: "FormatBlock",
                    arguments: a.browser.msie || a.browser.opera ? "<p>" : "p",
                    tags: ["p"],
                    tooltip: "Paragraph"
                },
                paste: {
                    groupIndex: 8,
                    visible: !1,
                    tooltip: "Paste"
                },
                redo: {
                    groupIndex: 4,
                    visible: !0,
                    tooltip: "Redo"
                },
                removeFormat: {
                    groupIndex: 10,
                    visible: !0,
                    exec: function() {
                        this.removeFormat()
                    },
                    tooltip: "Remove formatting"
                },
                rtl: {
                    groupIndex: 10,
                    visible: !1,
                    exec: function() {
                        var b = this.dom.getElement("p");
                        return b ? (a(b).attr("dir", "rtl"), !0) : !1
                    },
                    tooltip: "Right to Left"
                },
                strikeThrough: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["s", "strike"],
                    css: {
                        textDecoration: "line-through"
                    },
                    tooltip: "Strike-through"
                },
                subscript: {
                    groupIndex: 3,
                    visible: !0,
                    tags: ["sub"],
                    tooltip: "Subscript"
                },
                superscript: {
                    groupIndex: 3,
                    visible: !0,
                    tags: ["sup"],
                    tooltip: "Superscript"
                },
                underline: {
                    groupIndex: 0,
                    visible: !0,
                    tags: ["u"],
                    css: {
                        textDecoration: "underline"
                    },
                    tooltip: "Underline",
                    hotkey: {
                        ctrl: 1,
                        key: 85
                    }
                },
                undo: {
                    groupIndex: 4,
                    visible: !0,
                    tooltip: "Undo"
                },
                code: {
                    visible: !0,
                    groupIndex: 6,
                    tooltip: "Code snippet",
                    exec: function() {
                        var b = this.getInternalRange(),
                            c = a(b.commonAncestorContainer),
                            d = b.commonAncestorContainer.nodeName.toLowerCase();
                        c.parent("code").length ? c.unwrap() : "body" !== d && c.wrap("<code/>")
                    }
                },
                cssWrap: {
                    visible: !1,
                    groupIndex: 6,
                    tooltip: "CSS Wrapper",
                    exec: function() {
                        a.wysiwyg.controls.cssWrap.init(this)
                    }
                }
            }, this.defaults = {
                html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" style="margin:0"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin:0;">INITIAL_CONTENT</body></html>',
                debug: !1,
                controls: {},
                css: {},
                events: {},
                autoGrow: !1,
                autoSave: !0,
                brIE: !1,
                formHeight: 270,
                formWidth: 440,
                iFrameClass: null,
                initialContent: "<p>Initial content</p>",
                maxHeight: 1e4,
                maxLength: 0,
                messages: {
                    nonSelection: "Select the text you wish to link"
                },
                toolbarHtml: '<ul role="menu" class="toolbar"></ul>',
                removeHeadings: !1,
                replaceDivWithP: !1,
                resizeOptions: !1,
                rmUnusedControls: !1,
                rmUnwantedBr: !0,
                tableFiller: "Lorem ipsum",
                initialMinHeight: null,
                controlImage: {
                    forceRelativeUrls: !1
                },
                controlLink: {
                    forceRelativeUrls: !1
                },
                plugins: {
                    autoload: !1,
                    i18n: !1,
                    rmFormat: {
                        rmMsWordMarkup: !1
                    }
                },
                dialog: "default"
            }, this.availableControlProperties = ["arguments", "callback", "callbackArguments", "className", "command", "css", "custom", "exec", "groupIndex", "hotkey", "icon", "separator", "tags", "tooltip", "visible"], this.editor = null, this.editorDoc = null, this.element = null, this.options = {}, this.original = null, this.savedRange = null, this.timers = [], this.validKeyCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46], this.isDestroyed = !1, this.dom = {
                ie: {
                    parent: null
                },
                w3c: {
                    parent: null
                }
            }, this.dom.parent = this, this.dom.ie.parent = this.dom, this.dom.w3c.parent = this.dom, this.ui = {}, this.ui.self = this, this.ui.toolbar = null, this.ui.initialHeight = null, this.dom.getAncestor = function(a, b) {
                for (b = b.toLowerCase(); a && void 0 !== a.tagName && "body" !== a.tagName.toLowerCase();) {
                    if (b === a.tagName.toLowerCase()) return a;
                    a = a.parentNode
                }
                if (!a.tagName && (a.previousSibling || a.nextSibling)) {
                    if (a.previousSibling && a.previousSibling.tagName.toLowerCase() === b) return a.previousSibling;
                    if (a.nextSibling && a.nextSibling.tagName.toLowerCase() === b) return a.nextSibling
                }
                return null
            }, this.dom.getElement = function(a) {
                var b = this;
                return a = a.toLowerCase(), window.getSelection ? b.w3c.getElement(a) : b.ie.getElement(a)
            }, this.dom.ie.getElement = function(a) {
                var b, c = this.parent,
                    d = c.parent.getInternalSelection(),
                    e = d.createRange();
                if ("Control" === d.type) {
                    if (1 !== e.length) return null;
                    b = e.item(0)
                } else b = e.parentElement();
                return c.getAncestor(b, a)
            }, this.dom.w3c.getElement = function(a) {
                var b, c = this.parent,
                    d = c.parent.getInternalRange();
                if (!d) return null;
                if (b = d.commonAncestorContainer, 3 === b.nodeType && (b = b.parentNode), b === d.startContainer && (b = b.childNodes[d.startOffset]), !b.tagName && (b.previousSibling || b.nextSibling)) {
                    if (b.previousSibling && b.previousSibling.tagName.toLowerCase() === a) return b.previousSibling;
                    if (b.nextSibling && b.nextSibling.tagName.toLowerCase() === a) return b.nextSibling
                }
                return c.getAncestor(b, a)
            }, this.ui.addHoverClass = function() {
                a(this).addClass("wysiwyg-button-hover")
            }, this.ui.appendControls = function() {
                var b, c, d = this,
                    e = this.self,
                    f = e.parseControls(),
                    g = !0,
                    h = [],
                    i = {},
                    j = function(a, b) {
                        b.groupIndex && c !== b.groupIndex && (c = b.groupIndex, g = !1), b.visible && (g || (d.appendItemSeparator(), g = !0), b.custom ? d.appendItemCustom(a, b) : d.appendItem(a, b))
                    };
                for (a.each(f, function(a, b) {
                        var c = "empty";
                        void 0 !== b.groupIndex && (c = "" === b.groupIndex ? "empty" : b.groupIndex), void 0 === i[c] && (h.push(c), i[c] = {}), i[c][a] = b
                    }), h.sort(function(a, b) {
                        return "number" == typeof a && "number" == typeof b ? a - b : (a = a.toString(), b = b.toString(), a > b ? 1 : a === b ? 0 : -1)
                    }), 0 < h.length && (c = h[0]), b = 0; b < h.length; b += 1) a.each(i[h[b]], j)
            }, this.ui.appendItem = function(b, c) {
                var d = this.self,
                    e = c.className || c.command || b || "empty",
                    f = c.tooltip || c.command || b || "";
                return a('<li role="menuitem" unselectable="on">' + e + "</li>").addClass(e).attr("title", f).hover(this.addHoverClass, this.removeHoverClass).click(function(e) {
                    if (a(this).hasClass("disabled")) return !1;
                    d.triggerControl(b, c);
                    var f = a(e.target);
                    for (var g in d.controls)
                        if (f.hasClass(g)) {
                            d.ui.toolbar.find("." + g).toggleClass("active"), d.editorDoc.rememberCommand = !0;
                            break
                        }
                    return this.blur(), d.ui.returnRange(), d.ui.focus(), !0
                }).appendTo(d.ui.toolbar)
            }, this.ui.appendItemCustom = function(b, c) {
                var d = this.self,
                    e = c.tooltip || c.command || b || "";
                return c.callback && a(window).bind("trigger-" + b + ".wysiwyg", c.callback), a('<li role="menuitem" unselectable="on" style="background: url(\'' + c.icon + "') no-repeat;\"></li>").addClass("custom-command-" + b).addClass("wysiwyg-custom-command").addClass(b).attr("title", e).hover(this.addHoverClass, this.removeHoverClass).click(function() {
                    return a(this).hasClass("disabled") ? !1 : (d.triggerControl.apply(d, [b, c]), this.blur(), d.ui.returnRange(), d.ui.focus(), d.triggerControlCallback(b), !0)
                }).appendTo(d.ui.toolbar)
            }, this.ui.appendItemSeparator = function() {
                var b = this.self;
                return a('<li role="separator" class="separator"></li>').appendTo(b.ui.toolbar)
            }, this.autoSaveFunction = function() {
                this.saveContent()
            }, this.ui.checkTargets = function(b) {
                var c = this.self;
                a.each(c.options.controls, function(d, e) {
                    var f, g, h, i, j = e.className || e.command || d || "empty",
                        k = function(b) {
                            var d = 0,
                                e = 0;
                            a.each(b, function(a, b) {
                                "function" == typeof b ? b.apply(c, [i.css(a).toString().toLowerCase(), c]) && (d += 1) : i.css(a).toString().toLowerCase() === b && (d += 1), e += 1
                            }), e === d && c.ui.toolbar.find("." + j).addClass("active")
                        };
                    if ("fullscreen" !== j && c.ui.toolbar.find("." + j).removeClass("active"), e.tags || e.options && e.options.tags)
                        for (f = e.tags || e.options && e.options.tags, g = b; g && 1 === g.nodeType;) - 1 !== a.inArray(g.tagName.toLowerCase(), f) && c.ui.toolbar.find("." + j).addClass("active"), g = g.parentNode;
                    if (e.css || e.options && e.options.css)
                        for (h = e.css || e.options && e.options.css, i = a(b); i && 1 === i[0].nodeType;) k(h), i = i.parent()
                })
            }, this.ui.designMode = function() {
                var a, b = 3,
                    c = this.self;
                a = function(b) {
                    if ("on" === c.editorDoc.designMode) return c.timers.designMode && window.clearTimeout(c.timers.designMode), c.innerDocument() !== c.editorDoc && c.ui.initFrame(), void 0;
                    try {
                        c.editorDoc.designMode = "on"
                    } catch (d) {}
                    b -= 1, b > 0 && (c.timers.designMode = window.setTimeout(function() {
                        a(b)
                    }, 100))
                }, a(b)
            }, this.destroy = function() {
                this.isDestroyed = !0;
                var b, c = this.element.closest("form");
                for (b = 0; b < this.timers.length; b += 1) window.clearTimeout(this.timers[b]);
                return a(this.original).appendTo(a(this.element.parent())), c.unbind(".wysiwyg"), this.element.remove(), a.removeData(this.original, "wysiwyg"), a(this.original).show(), this
            }, this.getRangeText = function() {
                var a = this.getInternalRange();
                return a && (a.toString ? a = a.toString() : a.text && (a = a.text)), a
            }, this.execute = function(a, b) {
                "undefined" == typeof b && (b = null), this.editorDoc.execCommand(a, !1, b)
            }, this.extendOptions = function(b) {
                var c = {};
                return "object" == typeof b.controls && (c = b.controls, delete b.controls), b = a.extend(!0, {}, this.defaults, b), b.controls = a.extend(!0, {}, c, this.controls, c), b.rmUnusedControls && a.each(b.controls, function(a) {
                    c[a] || delete b.controls[a]
                }), b
            }, this.ui.focus = function() {
                var a = this.self;
                return a.editor.get(0).contentWindow.focus(), a
            }, this.ui.returnRange = function() {
                var a, b = this.self;
                if (null !== b.savedRange) {
                    if (window.getSelection) {
                        a = window.getSelection(), a.rangeCount > 0 && a.removeAllRanges();
                        try {
                            a.addRange(b.savedRange)
                        } catch (d) {
                            c.error(d)
                        }
                    } else window.document.createRange ? window.getSelection().addRange(b.savedRange) : window.document.selection && b.savedRange.select();
                    b.savedRange = null
                }
            }, this.increaseFontSize = function() {
                if (a.browser.mozilla || a.browser.opera) this.editorDoc.execCommand("increaseFontSize", !1, null);
                else if (a.browser.webkit) {
                    var b = this.getInternalRange(),
                        d = this.getInternalSelection(),
                        e = this.editorDoc.createElement("big");
                    if (!0 === b.collapsed && 3 === b.commonAncestorContainer.nodeType) {
                        var f = b.commonAncestorContainer.nodeValue.toString(),
                            g = f.lastIndexOf(" ", b.startOffset) + 1,
                            h = -1 === f.indexOf(" ", b.startOffset) ? f : f.indexOf(" ", b.startOffset);
                        b.setStart(b.commonAncestorContainer, g), b.setEnd(b.commonAncestorContainer, h), b.surroundContents(e), d.addRange(b)
                    } else b.surroundContents(e), d.removeAllRanges(), d.addRange(b)
                } else c.error("Internet Explorer?")
            }, this.decreaseFontSize = function() {
                if (a.browser.mozilla || a.browser.opera) this.editorDoc.execCommand("decreaseFontSize", !1, null);
                else if (a.browser.webkit) {
                    var b = this.getInternalRange(),
                        d = this.getInternalSelection(),
                        e = this.editorDoc.createElement("small");
                    if (!0 === b.collapsed && 3 === b.commonAncestorContainer.nodeType) {
                        var f = b.commonAncestorContainer.nodeValue.toString(),
                            g = f.lastIndexOf(" ", b.startOffset) + 1,
                            h = -1 === f.indexOf(" ", b.startOffset) ? f : f.indexOf(" ", b.startOffset);
                        b.setStart(b.commonAncestorContainer, g), b.setEnd(b.commonAncestorContainer, h), b.surroundContents(e), d.addRange(b)
                    } else b.surroundContents(e), d.removeAllRanges(), d.addRange(b)
                } else c.error("Internet Explorer?")
            }, this.getContent = function() {
                return this.viewHTML && this.setContent(this.original.value), this.events.filter("getContent", this.editorDoc.body.innerHTML)
            }, this.events = {
                _events: {},
                bind: function(a, b) {
                    "object" != typeof this._events.eventName && (this._events[a] = []), this._events[a].push(b)
                },
                trigger: function(b, c) {
                    if ("object" == typeof this._events.eventName) {
                        var d = this.editor;
                        a.each(this._events[b], function(a, b) {
                            "function" == typeof b && b.apply(d, c)
                        })
                    }
                },
                filter: function(b, c) {
                    if ("object" == typeof this._events[b]) {
                        var d = this.editor,
                            e = Array.prototype.slice.call(arguments, 1);
                        a.each(this._events[b], function(a, b) {
                            "function" == typeof b && (c = b.apply(d, e))
                        })
                    }
                    return c
                }
            }, this.getElementByAttributeValue = function(b, c, d) {
                var e, f, g = this.editorDoc.getElementsByTagName(b);
                for (e = 0; e < g.length; e += 1)
                    if (f = g[e].getAttribute(c), a.browser.msie && (f = f.substr(f.length - d.length)), f === d) return g[e];
                return !1
            }, this.getInternalRange = function() {
                var a = this.getInternalSelection();
                return a ? a.rangeCount && a.rangeCount > 0 ? a.getRangeAt(0) : a.createRange ? a.createRange() : null : null
            }, this.getInternalSelection = function() {
                var a = this.editor.get(0).contentWindow;
                return a && a.getSelection ? a.getSelection() : this.editorDoc.getSelection ? this.editorDoc.getSelection() : this.editorDoc.selection ? this.editorDoc.selection : null
            }, this.getRange = function() {
                var a = this.getSelection();
                if (!a) return null;
                if (a.rangeCount && a.rangeCount > 0) a.getRangeAt(0);
                else if (a.createRange) return a.createRange();
                return null
            }, this.getSelection = function() {
                var a = window.getSelection && null !== window.getSelection() && window.getSelection().createRange ? window.getSelection() : window.document.selection;
                return a
            }, this.ui.grow = function() {
                var b = this.self,
                    c = a(b.editorDoc.body),
                    d = a.browser.msie ? c[0].scrollHeight : c.height() + 2 + 20,
                    e = b.ui.initialHeight,
                    f = Math.max(d, e);
                return f = Math.min(f, b.options.maxHeight), b.editor.attr("scrolling", f < b.options.maxHeight ? "no" : "auto"), c.css("overflow", f < b.options.maxHeight ? "hidden" : ""), b.editor.get(0).height = f, b
            }, this.init = function(b, c) {
                var d = this,
                    e = a(b).closest("form"),
                    f = b.width || b.clientWidth || 0,
                    g = b.height || b.clientHeight || 0;
                if (this.options = this.extendOptions(c), this.original = b, this.ui.toolbar = a(this.options.toolbarHtml), a.browser.msie && parseInt(a.browser.version, 10) < 8 && (this.options.autoGrow = !1), 0 === f && b.cols && (f = 8 * b.cols + 21), 0 === g && b.rows && (g = 16 * b.rows + 16), this.editor = a("https:" === window.location.protocol ? '<iframe src="javascript:false;"></iframe>' : "<iframe></iframe>").attr("frameborder", "0"), this.options.iFrameClass ? this.editor.addClass(this.options.iFrameClass) : (this.editor.css({
                        minHeight: (g - 6).toString() + "px",
                        width: f > 50 ? f.toString() + "px" : ""
                    }), a.browser.msie && parseInt(a.browser.version, 10) < 7 && this.editor.css("height", g.toString() + "px")), b.id) {
                    var h = b.id + "-wysiwyg-iframe";
                    document.getElementById(h) || this.editor.attr("id", h)
                }
                this.editor.attr("tabindex", a(b).attr("tabindex")), this.element = a("<div/>").addClass("wysiwyg"), this.options.iFrameClass || this.element.css({
                    width: f > 0 ? f.toString() + "px" : "100%"
                }), a(b).hide().before(this.element), this.viewHTML = !1, this.initialContent = a(b).val(), this.ui.initFrame(), this.options.resizeOptions && a.fn.resizable && this.element.resizable(a.extend(!0, {
                    alsoResize: this.editor
                }, this.options.resizeOptions)), this.options.autoSave && e.bind("submit.wysiwyg", function() {
                    d.autoSaveFunction()
                }), e.bind("reset.wysiwyg", function() {
                    d.resetFunction()
                })
            }, this.ui.initFrame = function() {
                var b, c, d, e, f = this.self;
                if (e = a('<div class="toolbar-wrap"><div style="clear: both"><!-- --></div>').prepend(f.ui.toolbar), f.ui.appendControls(), f.element.append(e).append(f.editor).append(f.original), f.editorDoc = f.innerDocument(), f.isDestroyed) return null;
                if (f.ui.designMode(), f.editorDoc.open(), f.editorDoc.write(f.options.html.replace(/INITIAL_CONTENT/, function() {
                        return f.wrapInitialContent()
                    })), f.editorDoc.close(), a.wysiwyg.plugin.bind(f), a(f.editorDoc).trigger("initFrame.wysiwyg"), a(f.editorDoc).bind("click.wysiwyg", function(a) {
                        f.ui.checkTargets(a.target ? a.target : a.srcElement)
                    }), a(f.original).focus(function() {
                        0 === a(this).filter(":visible").length || a.browser.opera || f.ui.focus()
                    }), a(a.wysiwyg.quirk.quirks).each(function(a, b) {
                        b.init(f)
                    }), a(f.editorDoc).keydown(function(a) {
                        var b;
                        return 8 === a.keyCode && (b = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/, b.test(f.getContent())) ? (a.stopPropagation(), !1) : (f.editorDoc.rememberCommand = !1, !0)
                    }), a.browser.msie || a(f.editorDoc).keydown(function(a) {
                        var b, c;
                        if (a.ctrlKey || a.metaKey)
                            for (b in f.options.controls)
                                if (c = f.options.controls[b], c.hotkey && c.hotkey.ctrl && a.keyCode === c.hotkey.key) return f.triggerControl.apply(f, [b, c]), !1;
                        return !0
                    }), f.options.brIE && a(f.editorDoc).keydown(function(b) {
                        if (13 === b.keyCode) {
                            if (a.browser.msie || a.browser.opera) {
                                var c = f.getRange();
                                c ? (c.pasteHTML("<br/>"), c.collapse(!1), c.select()) : f.insertHtml("<br/>")
                            } else {
                                var d = f.editorDoc.getSelection();
                                if (!(d && d.getRangeAt && d.rangeCount)) return !0;
                                var e = d.getRangeAt(0);
                                if (!e) return !0;
                                var g = document.createElement("br");
                                e.deleteContents(), e.insertNode(g), e.setStartAfter(g), e.collapse(!0), d.removeAllRanges(), d.addRange(e)
                            }
                            return !1
                        }
                        return !0
                    }), f.options.plugins.rmFormat.rmMsWordMarkup && a(f.editorDoc).bind("keyup.wysiwyg", function(b) {
                        (b.ctrlKey || b.metaKey) && 86 === b.keyCode && a.wysiwyg.rmFormat && ("object" == typeof f.options.plugins.rmFormat.rmMsWordMarkup ? a.wysiwyg.rmFormat.run(f, {
                            rules: {
                                msWordMarkup: f.options.plugins.rmFormat.rmMsWordMarkup
                            }
                        }) : a.wysiwyg.rmFormat.run(f, {
                            rules: {
                                msWordMarkup: {
                                    enabled: !0
                                }
                            }
                        }))
                    }), f.options.autoSave && a(f.editorDoc).keydown(function() {
                        f.autoSaveFunction()
                    }).keyup(function() {
                        f.autoSaveFunction()
                    }).mousedown(function() {
                        f.autoSaveFunction()
                    }).bind(a.support.noCloneEvent ? "input.wysiwyg" : "paste.wysiwyg", function() {
                        f.autoSaveFunction()
                    }), f.options.autoGrow && (f.ui.initialHeight = null !== f.options.initialMinHeight ? f.options.initialMinHeight : a(f.editorDoc).height(), a(f.editorDoc.body).css("border", "1px solid white"), c = function() {
                        f.ui.grow()
                    }, a(f.editorDoc).keyup(c), a(f.editorDoc).bind("editorRefresh.wysiwyg", c), f.ui.grow()), f.options.css && (String === f.options.css.constructor ? a.browser.msie ? (b = f.editorDoc.createStyleSheet(f.options.css), a(b).attr({
                        media: "all"
                    })) : (b = a("<link/>").attr({
                        href: f.options.css,
                        media: "all",
                        rel: "stylesheet",
                        type: "text/css"
                    }), a(f.editorDoc).find("head").append(b)) : f.timers.initFrame_Css = window.setTimeout(function() {
                        a(f.editorDoc.body).css(f.options.css)
                    }, 0)), 0 === f.initialContent.length && ("function" == typeof f.options.initialContent ? f.setContent(f.options.initialContent()) : f.setContent(f.options.initialContent)), f.options.maxLength > 0 && a(f.editorDoc).keydown(function(b) {
                        a(f.editorDoc).text().length >= f.options.maxLength && -1 === a.inArray(b.which, f.validKeyCodes) && b.preventDefault()
                    }), a.each(f.options.events, function(b, c) {
                        a(f.editorDoc).bind(b + ".wysiwyg", function(a) {
                            c.apply(f.editorDoc, [a, f])
                        })
                    }), a.browser.msie ? a(f.editorDoc).bind("beforedeactivate.wysiwyg", function() {
                        f.savedRange = f.getInternalRange()
                    }) : a(f.editorDoc).bind("blur.wysiwyg", function() {
                        f.savedRange = f.getInternalRange()
                    }), a(f.editorDoc.body).addClass("wysiwyg"), f.options.events && f.options.events.save && (d = f.options.events.save, a(f.editorDoc).bind("keyup.wysiwyg", d), a(f.editorDoc).bind("change.wysiwyg", d), a.support.noCloneEvent ? a(f.editorDoc).bind("input.wysiwyg", d) : (a(f.editorDoc).bind("paste.wysiwyg", d), a(f.editorDoc).bind("cut.wysiwyg", d))), f.options.xhtml5 && f.options.unicode) {
                    var g = {
                        ne: 8800,
                        le: 8804,
                        para: 182,
                        xi: 958,
                        darr: 8595,
                        nu: 957,
                        oacute: 243,
                        Uacute: 218,
                        omega: 969,
                        prime: 8242,
                        pound: 163,
                        igrave: 236,
                        thorn: 254,
                        forall: 8704,
                        emsp: 8195,
                        lowast: 8727,
                        brvbar: 166,
                        alefsym: 8501,
                        nbsp: 160,
                        delta: 948,
                        clubs: 9827,
                        lArr: 8656,
                        Omega: 937,
                        Auml: 196,
                        cedil: 184,
                        and: 8743,
                        plusmn: 177,
                        ge: 8805,
                        raquo: 187,
                        uml: 168,
                        equiv: 8801,
                        laquo: 171,
                        rdquo: 8221,
                        Epsilon: 917,
                        divide: 247,
                        fnof: 402,
                        chi: 967,
                        Dagger: 8225,
                        iacute: 237,
                        rceil: 8969,
                        sigma: 963,
                        Oslash: 216,
                        acute: 180,
                        frac34: 190,
                        lrm: 8206,
                        upsih: 978,
                        Scaron: 352,
                        part: 8706,
                        exist: 8707,
                        nabla: 8711,
                        image: 8465,
                        prop: 8733,
                        zwj: 8205,
                        omicron: 959,
                        aacute: 225,
                        Yuml: 376,
                        Yacute: 221,
                        weierp: 8472,
                        rsquo: 8217,
                        otimes: 8855,
                        kappa: 954,
                        thetasym: 977,
                        harr: 8596,
                        Ouml: 214,
                        Iota: 921,
                        ograve: 242,
                        sdot: 8901,
                        copy: 169,
                        oplus: 8853,
                        acirc: 226,
                        sup: 8835,
                        zeta: 950,
                        Iacute: 205,
                        Oacute: 211,
                        crarr: 8629,
                        Nu: 925,
                        bdquo: 8222,
                        lsquo: 8216,
                        apos: 39,
                        Beta: 914,
                        eacute: 233,
                        egrave: 232,
                        lceil: 8968,
                        Kappa: 922,
                        piv: 982,
                        Ccedil: 199,
                        ldquo: 8220,
                        Xi: 926,
                        cent: 162,
                        uarr: 8593,
                        hellip: 8230,
                        Aacute: 193,
                        ensp: 8194,
                        sect: 167,
                        Ugrave: 217,
                        aelig: 230,
                        ordf: 170,
                        curren: 164,
                        sbquo: 8218,
                        macr: 175,
                        Phi: 934,
                        Eta: 919,
                        rho: 961,
                        Omicron: 927,
                        sup2: 178,
                        euro: 8364,
                        aring: 229,
                        Theta: 920,
                        mdash: 8212,
                        uuml: 252,
                        otilde: 245,
                        eta: 951,
                        uacute: 250,
                        rArr: 8658,
                        nsub: 8836,
                        agrave: 224,
                        notin: 8713,
                        ndash: 8211,
                        Psi: 936,
                        Ocirc: 212,
                        sube: 8838,
                        szlig: 223,
                        micro: 181,
                        not: 172,
                        sup1: 185,
                        middot: 183,
                        iota: 953,
                        ecirc: 234,
                        lsaquo: 8249,
                        thinsp: 8201,
                        sum: 8721,
                        ntilde: 241,
                        scaron: 353,
                        cap: 8745,
                        atilde: 227,
                        lang: 10216,
                        __replacement: 65533,
                        isin: 8712,
                        gamma: 947,
                        Euml: 203,
                        ang: 8736,
                        upsilon: 965,
                        Ntilde: 209,
                        hearts: 9829,
                        Alpha: 913,
                        Tau: 932,
                        spades: 9824,
                        dagger: 8224,
                        THORN: 222,
                        "int": 8747,
                        lambda: 955,
                        Eacute: 201,
                        Uuml: 220,
                        infin: 8734,
                        rlm: 8207,
                        Aring: 197,
                        ugrave: 249,
                        Egrave: 200,
                        Acirc: 194,
                        rsaquo: 8250,
                        ETH: 208,
                        oslash: 248,
                        alpha: 945,
                        Ograve: 210,
                        Prime: 8243,
                        mu: 956,
                        ni: 8715,
                        real: 8476,
                        bull: 8226,
                        beta: 946,
                        icirc: 238,
                        eth: 240,
                        prod: 8719,
                        larr: 8592,
                        ordm: 186,
                        perp: 8869,
                        Gamma: 915,
                        reg: 174,
                        ucirc: 251,
                        Pi: 928,
                        psi: 968,
                        tilde: 732,
                        asymp: 8776,
                        zwnj: 8204,
                        Agrave: 192,
                        deg: 176,
                        AElig: 198,
                        times: 215,
                        Delta: 916,
                        sim: 8764,
                        Otilde: 213,
                        Mu: 924,
                        uArr: 8657,
                        circ: 710,
                        theta: 952,
                        Rho: 929,
                        sup3: 179,
                        diams: 9830,
                        tau: 964,
                        Chi: 935,
                        frac14: 188,
                        oelig: 339,
                        shy: 173,
                        or: 8744,
                        dArr: 8659,
                        phi: 966,
                        iuml: 239,
                        Lambda: 923,
                        rfloor: 8971,
                        iexcl: 161,
                        cong: 8773,
                        ccedil: 231,
                        Icirc: 206,
                        frac12: 189,
                        loz: 9674,
                        rarr: 8594,
                        cup: 8746,
                        radic: 8730,
                        frasl: 8260,
                        euml: 235,
                        OElig: 338,
                        hArr: 8660,
                        Atilde: 195,
                        Upsilon: 933,
                        there4: 8756,
                        ouml: 246,
                        oline: 8254,
                        Ecirc: 202,
                        yacute: 253,
                        auml: 228,
                        permil: 8240,
                        sigmaf: 962,
                        iquest: 191,
                        empty: 8709,
                        pi: 960,
                        Ucirc: 219,
                        supe: 8839,
                        Igrave: 204,
                        yen: 165,
                        rang: 10217,
                        trade: 8482,
                        lfloor: 8970,
                        minus: 8722,
                        Zeta: 918,
                        sub: 8834,
                        epsilon: 949,
                        yuml: 255,
                        Sigma: 931,
                        Iuml: 207,
                        ocirc: 244
                    };
                    f.events.bind("getContent", function(a) {
                        return a.replace(/&(?:amp;)?(?!amp|lt|gt|quot)([a-z][a-z0-9]*);/gi, function(a, b) {
                            g[b] || (b = b.toLowerCase(), g[b] || (b = "__replacement"));
                            var c = g[b];
                            return String.fromCharCode(c)
                        })
                    })
                }
                a(f.original).trigger("ready.jwysiwyg", [f.editorDoc, f])
            }, this.innerDocument = function() {
                var a = this.editor.get(0);
                if ("iframe" === a.nodeName.toLowerCase()) {
                    if (a.contentDocument) return a.contentDocument;
                    if (a.contentWindow) return a.contentWindow.document;
                    if (this.isDestroyed) return null;
                    c.error("Unexpected error in innerDocument")
                }
                return a
            }, this.insertHtml = function(b) {
                var c, d;
                return b && 0 !== b.length ? (a.browser.msie ? (this.ui.focus(), this.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), c = this.getElementByAttributeValue("img", "src", "#jwysiwyg#"), c && a(c).replaceWith(b)) : a.browser.mozilla ? 1 === a(b).length ? (d = this.getInternalRange(), d.deleteContents(), d.insertNode(a(b).get(0))) : this.editorDoc.execCommand("insertHTML", !1, b) : this.editorDoc.execCommand("insertHTML", !1, b) || (this.editor.focus(), this.editorDoc.execCommand("insertHTML", !1, b)), this.saveContent(), this) : this
            }, this.parseControls = function() {
                var b = this;
                return a.each(this.options.controls, function(c, d) {
                    a.each(d, function(d) {
                        if (-1 === a.inArray(d, b.availableControlProperties)) throw c + '["' + d + '"]: property "' + d + '" not exists in Wysiwyg.availableControlProperties'
                    })
                }), this.options.parseControls ? this.options.parseControls.call(this) : this.options.controls
            }, this.removeFormat = function() {
                return a.browser.msie && this.ui.focus(), this.options.removeHeadings && this.editorDoc.execCommand("formatBlock", !1, "<p>"), this.editorDoc.execCommand("removeFormat", !1, null), this.editorDoc.execCommand("unlink", !1, null), a.wysiwyg.rmFormat && a.wysiwyg.rmFormat.enabled && ("object" == typeof this.options.plugins.rmFormat.rmMsWordMarkup ? a.wysiwyg.rmFormat.run(this, {
                    rules: {
                        msWordMarkup: this.options.plugins.rmFormat.rmMsWordMarkup
                    }
                }) : a.wysiwyg.rmFormat.run(this, {
                    rules: {
                        msWordMarkup: {
                            enabled: !0
                        }
                    }
                })), this
            }, this.ui.removeHoverClass = function() {
                a(this).removeClass("wysiwyg-button-hover")
            }, this.resetFunction = function() {
                this.setContent(this.initialContent)
            }, this.saveContent = function(b) {
                if (!this.viewHTML) {
                    if (this.original) {
                        var c, d;
                        c = "function" == typeof b ? b(this.getContent()) : this.getContent(), this.options.rmUnwantedBr && (c = c.replace(/<br\/?>$/, "")), this.options.replaceDivWithP && (d = a("<div/>").addClass("temp").append(c), d.children("div").each(function() {
                            var b, c = a(this),
                                d = c.find("p");
                            if (0 === d.length) {
                                if (d = a("<p></p>"), this.attributes.length > 0)
                                    for (b = 0; b < this.attributes.length; b += 1) d.attr(this.attributes[b].name, c.attr(this.attributes[b].name));
                                d.append(c.html()), c.replaceWith(d)
                            }
                        }), c = d.html());
                        var e = a.Event("change");
                        e.source = this, a(this.original).val(c).trigger(e), this.options.events && this.options.events.save && this.options.events.save.call(this)
                    }
                    return this
                }
            }, this.setContent = function(a) {
                return this.editorDoc.body.innerHTML = a, this.saveContent(), this
            }, this.triggerControl = function(a, b) {
                var d = b.command || a,
                    e = b.arguments || [];
                if (b.exec) b.exec.apply(this, b.callbackArguments);
                else {
                    this.ui.focus(), this.ui.withoutCss();
                    try {
                        this.editorDoc.execCommand(d, !1, e)
                    } catch (f) {
                        c.error(f)
                    }
                }
                this.options.autoSave && this.autoSaveFunction()
            }, this.triggerControlCallback = function(b) {
                a(window).trigger("trigger-" + b + ".wysiwyg", [this])
            }, this.ui.withoutCss = function() {
                var b = this.self;
                if (a.browser.mozilla) try {
                    b.editorDoc.execCommand("styleWithCSS", !1, !1)
                } catch (c) {
                    try {
                        b.editorDoc.execCommand("useCSS", !1, !0)
                    } catch (d) {}
                }
                return b
            }, this.wrapInitialContent = function() {
                var a = this.initialContent;
                return a
            }
        }
        var c = window.console || {
                log: a.noop,
                error: function(b) {
                    a.error(b)
                }
            },
            d = void 0 !== a.fn.prop && void 0 !== a.fn.removeProp;
        a.wysiwyg = {
            messages: {
                noObject: "Something goes wrong, check object"
            },
            addControl: function(b, c, d) {
                return b.each(function() {
                    var b, e = a(this).data("wysiwyg"),
                        f = {};
                    return e ? (f[c] = a.extend(!0, {
                        visible: !0,
                        custom: !0
                    }, d), a.extend(!0, e.options.controls, f), b = a(e.options.toolbarHtml), e.ui.toolbar.replaceWith(b), e.ui.toolbar = b, e.ui.appendControls(), void 0) : this
                })
            },
            clear: function(b) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.setContent(""), void 0) : this
                })
            },
            console: c,
            destroy: function(b) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.destroy(), void 0) : this
                })
            },
            document: function(b) {
                var c = b.data("wysiwyg");
                return c ? a(c.editorDoc) : void 0
            },
            focus: function(a) {
                var b = a.data("wysiwyg");
                return b ? (b.ui.focus(), a) : void 0
            },
            getContent: function(a) {
                var b = a.data("wysiwyg");
                return b ? b.getContent() : void 0
            },
            getSelection: function(a) {
                var b = a.data("wysiwyg");
                return b ? b.getRangeText() : void 0
            },
            init: function(c, d) {
                return c.each(function() {
                    var c, e = a.extend(!0, {}, d);
                    "textarea" !== this.nodeName.toLowerCase() || a(this).data("wysiwyg") || (c = new b, c.init(this, e), a.data(this, "wysiwyg", c), a(c.editorDoc).trigger("afterInit.wysiwyg"))
                })
            },
            insertHtml: function(b, c) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.insertHtml(c), void 0) : this
                })
            },
            plugin: {
                listeners: {},
                bind: function(b) {
                    var c = this,
                        d = function() {
                            return function(c) {
                                var d = c.data.plugin.name,
                                    e = c.data.plugin.method;
                                a.wysiwyg[d][e].apply(a.wysiwyg[d], [b])
                            }
                        };
                    a.each(this.listeners, function(e, f) {
                        var g, h;
                        for (g = 0; g < f.length; g += 1) h = c.parseName(f[g]), a(b.editorDoc).bind(e + ".wysiwyg", {
                            plugin: h
                        }, d())
                    })
                },
                exists: function(b) {
                    var c;
                    return "string" != typeof b ? !1 : (c = this.parseName(b), a.wysiwyg[c.name] && a.wysiwyg[c.name][c.method] ? !0 : !1)
                },
                listen: function(b, c) {
                    var d;
                    return d = this.parseName(c), a.wysiwyg[d.name] && a.wysiwyg[d.name][d.method] ? (this.listeners[b] || (this.listeners[b] = []), this.listeners[b].push(c), !0) : !1
                },
                parseName: function(a) {
                    var b;
                    return "string" != typeof a ? !1 : (b = a.split("."), 2 > b.length ? !1 : {
                        name: b[0],
                        method: b[1]
                    })
                },
                register: function(b) {
                    return b.name || c.error("Plugin name missing"), a.each(a.wysiwyg, function(a) {
                        a === b.name && c.error("Plugin with name '" + b.name + "' was already registered")
                    }), a.wysiwyg[b.name] = b, !0
                }
            },
            quirk: {
                quirks: [],
                assert: function(a, b) {
                    if (!a) throw new Error(b)
                },
                register: function(a) {
                    this.assert("function" == typeof a.init, "quirk.init must be a function"), this.quirks.push(a)
                }
            },
            removeFormat: function(b) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.removeFormat(), void 0) : this
                })
            },
            save: function(b) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.saveContent(), void 0) : this
                })
            },
            selectAll: function(a) {
                var b, c, d, e = a.data("wysiwyg");
                return e ? (b = e.editorDoc.body, window.getSelection ? (d = e.getInternalSelection(), d.selectAllChildren(b)) : (c = b.createTextRange(), c.moveToElementText(b), c.select()), void 0) : this
            },
            setContent: function(b, c) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.setContent(c), void 0) : this
                })
            },
            triggerControl: function(b, d) {
                return b.each(function() {
                    var b = a(this).data("wysiwyg");
                    return b ? (b.controls[d] || c.error("Control '" + d + "' not exists"), b.triggerControl.apply(b, [d, b.controls[d]]), void 0) : this
                })
            },
            support: {
                prop: d
            },
            utils: {
                extraSafeEntities: [
                    ["<", ">", "'", '"', " "],
                    [32]
                ],
                encodeEntities: function(b) {
                    var c, d = this,
                        e = [];
                    return 0 === this.extraSafeEntities[1].length && a.each(this.extraSafeEntities[0], function(a, b) {
                        d.extraSafeEntities[1].push(b.charCodeAt(0))
                    }), c = b.split(""), a.each(c, function(b) {
                        var f = c[b].charCodeAt(0);
                        a.inArray(f, d.extraSafeEntities[1]) && (65 > f || f > 127 || f > 90 && 97 > f) ? e.push("&#" + f + ";") : e.push(c[b])
                    }), e.join("")
                }
            }
        }, a.wysiwyg.dialog = function(b, c) {
            var d = b && b.options && b.options.dialog ? b.options.dialog : c.theme ? c.theme : "default",
                e = new a.wysiwyg.dialog.createDialog(d),
                f = this,
                g = a(f);
            return this.options = {
                modal: !0,
                draggable: !0,
                title: "Title",
                content: "Content",
                width: "auto",
                height: "auto",
                zIndex: 2e3,
                open: !1,
                close: !1
            }, this.isOpen = !1, a.extend(this.options, c), this.object = e, this.open = function() {
                this.isOpen = !0, e.init.apply(f, []);
                var a = e.show.apply(f, []);
                g.trigger("afterOpen", [a])
            }, this.show = function() {
                this.isOpen = !0, g.trigger("beforeShow"), g.trigger("afterShow")
            }, this.hide = function() {
                this.isOpen = !1, g.trigger("beforeHide");
                var a = e.hide.apply(f, []);
                g.trigger("afterHide", [a])
            }, this.close = function() {
                this.isOpen = !1;
                var a = e.hide.apply(f, []);
                g.trigger("beforeClose", [a]), e.destroy.apply(f, []), g.trigger("afterClose", [a]), b.ui.focus()
            }, this.options.open && g.bind("afterOpen", this.options.open), this.options.close && g.bind("afterClose", this.options.close), this
        }, a.extend(!0, a.wysiwyg.dialog, {
            _themes: {},
            _theme: "",
            register: function(b, c) {
                a.wysiwyg.dialog._themes[b] = c
            },
            deregister: function(b) {
                delete a.wysiwyg.dialog._themes[b]
            },
            createDialog: function(b) {
                return new a.wysiwyg.dialog._themes[b]
            },
            getDimensions: function() {
                var b = document.body.scrollWidth,
                    c = document.body.scrollHeight;
                return a.browser.opera && (c = Math.max(a(document).height(), a(window).height(), document.documentElement.clientHeight)), [b, c]
            }
        }), a(function() {
            a.ui && a.wysiwyg.dialog.register("jqueryui", function() {
                var b = this;
                this._$dialog = null, this.init = function() {
                    var c = this.options.content;
                    "object" == typeof c && ("function" == typeof c.html ? c = c.html() : "function" == typeof c.toString && (c = c.toString())), b._$dialog = a("<div></div>").attr("title", this.options.title).html(c);
                    var d = "auto" === this.options.height ? 300 : this.options.height,
                        e = "auto" === this.options.width ? 450 : this.options.width;
                    return b._$dialog.dialog({
                        modal: this.options.modal,
                        draggable: this.options.draggable,
                        height: d,
                        width: e
                    }), b._$dialog
                }, this.show = function() {
                    return b._$dialog.dialog("open"), b._$dialog
                }, this.hide = function() {
                    return b._$dialog.dialog("close"), b._$dialog
                }, this.destroy = function() {
                    return b._$dialog.dialog("destroy"), b._$dialog
                }
            }), a.wysiwyg.dialog.register("default", function() {
                var b = this;
                this._$dialog = null, this.init = function() {
                    var c = this,
                        d = this.options.content;
                    "object" == typeof d && ("function" == typeof d.html ? d = d.html() : "function" == typeof d.toString && (d = d.toString())), b._$dialog = a('<div class="wysiwyg-dialog"></div>').css({
                        "z-index": this.options.zIndex
                    });
                    var e = a('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">' + this.options.title + "</div></div>"),
                        f = a('<a href="#" class="wysiwyg-dialog-close-button">X</a>');
                    f.click(function() {
                        c.close()
                    }), e.find(".wysiwyg-dialog-close-wrapper").prepend(f);
                    var g = a('<div class="wysiwyg-dialog-content">' + d + "</div>");
                    b._$dialog.append(e).append(g);
                    var h = "auto" === this.options.height ? 300 : this.options.height,
                        i = "auto" === this.options.width ? 450 : this.options.width;
                    return b._$dialog.hide().css({
                        width: i,
                        height: h,
                        left: (a(window).width() - i) / 2,
                        top: (a(window).height() - h) / 3
                    }), a("body").append(b._$dialog), b._$dialog
                }, this.show = function() {
                    if (this.options.modal) {
                        var c = a.wysiwyg.dialog.getDimensions(),
                            d = a('<div class="wysiwyg-dialog-modal-div"></div>').css({
                                width: c[0],
                                height: c[1]
                            });
                        b._$dialog.wrap(d)
                    }
                    if (this.options.draggable) {
                        var e = !1;
                        b._$dialog.find("div.wysiwyg-dialog-topbar").bind("mousedown", function(b) {
                            b.preventDefault(), a(this).css({
                                cursor: "move"
                            });
                            var c = a(this),
                                d = a(this).parents(".wysiwyg-dialog"),
                                f = b.pageX - parseInt(d.css("left"), 10),
                                g = b.pageY - parseInt(d.css("top"), 10);
                            e = !0, a(this).css({
                                cursor: "move"
                            }), a(document).bind("mousemove", function(a) {
                                a.preventDefault(), e && d.css({
                                    top: a.pageY - g,
                                    left: a.pageX - f
                                })
                            }).bind("mouseup", function(b) {
                                b.preventDefault(), e = !1, c.css({
                                    cursor: "auto"
                                }), a(document).unbind("mousemove").unbind("mouseup")
                            })
                        })
                    }
                    return b._$dialog.show(), b._$dialog
                }, this.hide = function() {
                    return b._$dialog.hide(), b._$dialog
                }, this.destroy = function() {
                    return this.options.modal && b._$dialog.unwrap(), this.options.draggable && b._$dialog.find("div.wysiwyg-dialog-topbar").unbind("mousedown"), b._$dialog.remove(), b._$dialog
                }
            })
        }), void 0 === a.browser && (jQuery.browser = function() {
            var a = function(a) {
                    a = a.toLowerCase();
                    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                b = a(navigator.userAgent),
                c = {};
            return b.browser && (c[b.browser] = !0, c.version = b.version), c.chrome ? c.webkit = !0 : c.webkit && (c.safari = !0), c
        }), a.fn.wysiwyg = function(b) {
            var d, e = arguments;
            return "undefined" != typeof a.wysiwyg[b] ? (e = Array.prototype.concat.call([e[0]], [this], Array.prototype.slice.call(e, 1)), a.wysiwyg[b].apply(a.wysiwyg, Array.prototype.slice.call(e, 1))) : "object" != typeof b && b ? a.wysiwyg.plugin.exists(b) ? (d = a.wysiwyg.plugin.parseName(b), e = Array.prototype.concat.call([e[0]], [this], Array.prototype.slice.call(e, 1)), a.wysiwyg[d.name][d.method].apply(a.wysiwyg[d.name], Array.prototype.slice.call(e, 1))) : (c.error("Method '" + b + "' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins"), void 0) : (Array.prototype.unshift.call(e, this), a.wysiwyg.init.apply(a.wysiwyg, e))
        }, a.fn.getWysiwyg = function() {
            return this.data("wysiwyg")
        }
    }(jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
                setTimeout(a.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = a(b), this.checkPosition()
        };
        b.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b, c = a(document).height(),
                    d = this.$window.scrollTop(),
                    e = this.$element.offset(),
                    f = this.options.offset,
                    g = f.bottom,
                    h = f.top,
                    i = "affix affix-top affix-bottom";
                "object" != typeof f && (g = h = f), "function" == typeof h && (h = f.top()), "function" == typeof g && (g = f.bottom()), b = null != this.unpin && d + this.unpin <= e.top ? !1 : null != g && e.top + this.$element.height() >= c - g ? "bottom" : null != h && h >= d ? "top" : !1, this.affixed !== b && (this.affixed = b, this.unpin = "bottom" == b ? e.top - d : null, this.$element.removeClass(i).addClass("affix" + (b ? "-" + b : "")))
            }
        };
        var c = a.fn.affix;
        a.fn.affix = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("affix"),
                    f = "object" == typeof c && c;
                e || d.data("affix", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
            offset: 0
        }, a.fn.affix.noConflict = function() {
            return a.fn.affix = c, this
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var b = a(this),
                    c = b.data();
                c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
            })
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = '[data-dismiss="alert"]',
            c = function(c) {
                a(c).on("click", b, this.close)
            };
        c.prototype.close = function(b) {
            function c() {
                d.trigger("closed").remove()
            }
            var d, e = a(this),
                f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d = a(f), b && b.preventDefault(), d.length || (d = e.hasClass("alert") ? e : e.parent()), d.trigger(b = a.Event("close")), b.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c())
        };
        var d = a.fn.alert;
        a.fn.alert = function(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("alert");
                e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d)
            })
        }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
            return a.fn.alert = d, this
        }, a(document).on("click.alert.data-api", b, c.prototype.close)
    }(window.jQuery), ! function(a) {
        "use strict";

        function b() {
            a(".dropdown-backdrop").remove(), a(d).each(function() {
                c(a(this)).removeClass("open")
            })
        }

        function c(b) {
            var c, d = b.attr("data-target");
            return d || (d = b.attr("href"), d = d && /#/.test(d) && d.replace(/.*(?=#[^\s]*$)/, "")), c = d && a(d), c && c.length || (c = b.parent()), c
        }
        var d = "[data-toggle=dropdown]",
            e = function(b) {
                var c = a(b).on("click.dropdown.data-api", this.toggle);
                a("html").on("click.dropdown.data-api", function() {
                    c.parent().removeClass("open")
                })
            };
        e.prototype = {
            constructor: e,
            toggle: function() {
                var d, e, f = a(this);
                if (!f.is(".disabled, :disabled")) return d = c(f), e = d.hasClass("open"), b(), e || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", b), d.toggleClass("open")), f.focus(), !1
            },
            keydown: function(b) {
                var e, f, g, h, i;
                if (/(38|40|27)/.test(b.keyCode) && (e = a(this), b.preventDefault(), b.stopPropagation(), !e.is(".disabled, :disabled"))) {
                    if (g = c(e), h = g.hasClass("open"), !h || h && 27 == b.keyCode) return 27 == b.which && g.find(d).focus(), e.click();
                    f = a("[role=menu] li:not(.divider):visible a", g), f.length && (i = f.index(f.filter(":focus")), 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < f.length - 1 && i++, ~i || (i = 0), f.eq(i).focus())
                }
            }
        };
        var f = a.fn.dropdown;
        a.fn.dropdown = function(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("dropdown");
                d || c.data("dropdown", d = new e(this)), "string" == typeof b && d[b].call(c)
            })
        }, a.fn.dropdown.Constructor = e, a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = f, this
        }, a(document).on("click.dropdown.data-api", b).on("click.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.dropdown.data-api", d, e.prototype.toggle).on("keydown.dropdown.data-api", d + ", [role=menu]", e.prototype.keydown)
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("tooltip", a, b)
        };
        b.prototype = {
            constructor: b,
            init: function(b, c, d) {
                var e, f, g, h, i;
                for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
                this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(b) {
                return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                }), b
            },
            enter: function(b) {
                var c, d = a.fn[this.type].defaults,
                    e = {};
                return this._options && a.each(this._options, function(a, b) {
                    d[a] != b && (e[a] = b)
                }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == c.hoverState && c.show()
                }, c.options.delay.show), void 0) : c.show()
            },
            leave: function(b) {
                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", this.timeout = setTimeout(function() {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide), void 0) : c.hide()
            },
            show: function() {
                var b, c, d, e, f, g, h = a.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                    switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                        case "bottom":
                            g = {
                                top: c.top + c.height,
                                left: c.left + c.width / 2 - d / 2
                            };
                            break;
                        case "top":
                            g = {
                                top: c.top - e,
                                left: c.left + c.width / 2 - d / 2
                            };
                            break;
                        case "left":
                            g = {
                                top: c.top + c.height / 2 - e / 2,
                                left: c.left - d
                            };
                            break;
                        case "right":
                            g = {
                                top: c.top + c.height / 2 - e / 2,
                                left: c.left + c.width
                            }
                    }
                    this.applyPlacement(g, f), this.$element.trigger("shown")
                }
            },
            applyPlacement: function(a, b) {
                var c, d, e, f, g = this.tip(),
                    h = g[0].offsetWidth,
                    i = g[0].offsetHeight;
                g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
            },
            replaceArrow: function(a, b, c) {
                this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
            },
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function b() {
                    var b = setTimeout(function() {
                        c.off(a.support.transition.end).detach()
                    }, 500);
                    c.one(a.support.transition.end, function() {
                        clearTimeout(b), c.detach()
                    })
                }
                var c = this.tip(),
                    d = a.Event("hide");
                return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
            },
            fixTitle: function() {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function() {
                var b = this.$element[0];
                return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                    width: b.offsetWidth,
                    height: b.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
            },
            tip: function() {
                return this.$tip = this.$tip || a(this.options.template)
            },
            arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(b) {
                var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
                c.tip().hasClass("in") ? c.hide() : c.show()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var c = a.fn.tooltip;
        a.fn.tooltip = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tooltip"),
                    f = "object" == typeof c && c;
                e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = c, this
        }
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        b.prototype = {
            constructor: b,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var b = this,
                    c = a.Event("show");
                this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var c = a.support.transition && b.$element.hasClass("fade");
                    b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                        b.$element.focus().trigger("shown")
                    }) : b.$element.focus().trigger("shown")
                }))
            },
            hide: function(b) {
                b && b.preventDefault(), b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var b = this;
                a(document).on("focusin.modal", function(a) {
                    b.$element[0] === a.target || b.$element.has(a.target).length || b.$element.focus()
                })
            },
            escape: function() {
                var a = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                    27 == b.which && a.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var b = this,
                    c = setTimeout(function() {
                        b.$element.off(a.support.transition.end), b.hideModal()
                    }, 500);
                this.$element.one(a.support.transition.end, function() {
                    clearTimeout(c), b.hideModal()
                })
            },
            hideModal: function() {
                var a = this;
                this.$element.hide(), this.backdrop(function() {
                    a.removeBackdrop(), a.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(b) {
                var c = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var d = a.support.transition && c;
                    if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                    d ? this.$backdrop.one(a.support.transition.end, b) : b()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
            }
        };
        var c = a.fn.modal;
        a.fn.modal = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("modal"),
                    f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
                e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
            })
        }, a.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
            return a.fn.modal = c, this
        }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
            var c = a(this),
                d = c.attr("href"),
                e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = e.data("modal") ? "toggle" : a.extend({
                    remote: !/#/.test(d) && d
                }, e.data(), c.data());
            b.preventDefault(), e.modal(f).one("hide", function() {
                c.focus()
            })
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        a(function() {
            a.support.transition = function() {
                var a = function() {
                    var a, b = document.createElement("bootstrap"),
                        c = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (a in c)
                        if (void 0 !== b.style[a]) return c[a]
                }();
                return a && {
                    end: a
                }
            }()
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
        };
        b.prototype.setState = function(a) {
            var b = "disabled",
                c = this.$element,
                d = c.data(),
                e = c.is("input") ? "val" : "html";
            a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
                "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
            }, 0)
        }, b.prototype.toggle = function() {
            var a = this.$element.closest('[data-toggle="buttons-radio"]');
            a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var c = a.fn.button;
        a.fn.button = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("button"),
                    f = "object" == typeof c && c;
                e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
            })
        }, a.fn.button.defaults = {
            loadingText: "loading..."
        }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
            return a.fn.button = c, this
        }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
            var c = a(b.target);
            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("popover", a, b)
        };
        b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
            constructor: b,
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
            },
            tip: function() {
                return this.$tip || (this.$tip = a(this.options.template)), this.$tip
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var c = a.fn.popover;
        a.fn.popover = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("popover"),
                    f = "object" == typeof c && c;
                e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), a.fn.popover.noConflict = function() {
            return a.fn.popover = c, this
        }
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
        };
        b.prototype = {
            constructor: b,
            select: function() {
                var a = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(a)).change(), this.hide()
            },
            updater: function(a) {
                return a
            },
            show: function() {
                var b = a.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.insertAfter(this.$element).css({
                    top: b.top + b.height,
                    left: b.left
                }).show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function() {
                var b;
                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (b = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, b ? this.process(b) : this)
            },
            process: function(b) {
                var c = this;
                return b = a.grep(b, function(a) {
                    return c.matcher(a)
                }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },
            matcher: function(a) {
                return ~a.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(a) {
                for (var b, c = [], d = [], e = []; b = a.shift();) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
                return c.concat(d, e)
            },
            highlighter: function(a) {
                var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                    return "<strong>" + b + "</strong>"
                })
            },
            render: function(b) {
                var c = this;
                return b = a(b).map(function(b, d) {
                    return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
                }), b.first().addClass("active"), this.$menu.html(b), this
            },
            next: function() {
                var b = this.$menu.find(".active").removeClass("active"),
                    c = b.next();
                c.length || (c = a(this.$menu.find("li")[0])), c.addClass("active")
            },
            prev: function() {
                var a = this.$menu.find(".active").removeClass("active"),
                    b = a.prev();
                b.length || (b = this.$menu.find("li").last()), b.addClass("active")
            },
            listen: function() {
                this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
            },
            eventSupported: function(a) {
                var b = a in this.$element;
                return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
            },
            move: function(a) {
                if (this.shown) {
                    switch (a.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            a.preventDefault();
                            break;
                        case 38:
                            a.preventDefault(), this.prev();
                            break;
                        case 40:
                            a.preventDefault(), this.next()
                    }
                    a.stopPropagation()
                }
            },
            keydown: function(b) {
                this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
            },
            keypress: function(a) {
                this.suppressKeyPressRepeat || this.move(a)
            },
            keyup: function(a) {
                switch (a.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                a.stopPropagation(), a.preventDefault()
            },
            focus: function() {
                this.focused = !0
            },
            blur: function() {
                this.focused = !1, !this.mousedover && this.shown && this.hide()
            },
            click: function(a) {
                a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
            },
            mouseenter: function(b) {
                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
            },
            mouseleave: function() {
                this.mousedover = !1, !this.focused && this.shown && this.hide()
            }
        };
        var c = a.fn.typeahead;
        a.fn.typeahead = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typeahead"),
                    f = "object" == typeof c && c;
                e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>',
            minLength: 1
        }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
            return a.fn.typeahead = c, this
        }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
            var b = a(this);
            b.data("typeahead") || b.typeahead(b.data())
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
        };
        b.prototype = {
            cycle: function(b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
            },
            getActiveIndex: function() {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            },
            to: function(b) {
                var c = this.getActiveIndex(),
                    d = this;
                if (!(b > this.$items.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
                    d.to(b)
                }) : c == b ? this.pause().cycle() : this.slide(b > c ? "next" : "prev", a(this.$items[b]))
            },
            pause: function(b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                return this.sliding ? void 0 : this.slide("next")
            },
            prev: function() {
                return this.sliding ? void 0 : this.slide("prev")
            },
            slide: function(b, c) {
                var d, e = this.$element.find(".item.active"),
                    f = c || e[b](),
                    g = this.interval,
                    h = "next" == b ? "left" : "right",
                    i = "next" == b ? "first" : "last",
                    j = this;
                if (this.sliding = !0, g && this.pause(), f = f.length ? f : this.$element.find(".item")[i](), d = a.Event("slide", {
                        relatedTarget: f[0],
                        direction: h
                    }), !f.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                            var b = a(j.$indicators.children()[j.getActiveIndex()]);
                            b && b.addClass("active")
                        })), a.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                        f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), this.$element.one(a.support.transition.end, function() {
                            f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function() {
                                j.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                        e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return g && this.cycle(), this
                }
            }
        };
        var c = a.fn.carousel;
        a.fn.carousel = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("carousel"),
                    f = a.extend({}, a.fn.carousel.defaults, "object" == typeof c && c),
                    g = "string" == typeof c ? c : f.slide;
                e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }, a.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = c, this
        }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
            var c, d, e = a(this),
                f = a(e.attr("data-target") || (c = e.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
                g = a.extend({}, f.data(), e.data());
            f.carousel(g), (d = e.attr("data-slide-to")) && f.data("carousel").pause().to(d).cycle(), b.preventDefault()
        })
    }(window.jQuery), ! function(a) {
        "use strict";

        function b(b, c) {
            var d, e = a.proxy(this.process, this),
                f = a(b).is("body") ? a(window) : a(b);
            this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = f.on("scroll.scroll-spy.data-api", e), this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
        }
        b.prototype = {
            constructor: b,
            refresh: function() {
                var b, c = this;
                this.offsets = a([]), this.targets = a([]), b = this.$body.find(this.selector).map(function() {
                    var b = a(this),
                        d = b.data("target") || b.attr("href"),
                        e = /^#\w/.test(d) && a(d);
                    return e && e.length && [
                        [e.position().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), d]
                    ] || null
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).each(function() {
                    c.offsets.push(this[0]), c.targets.push(this[1])
                })
            },
            process: function() {
                var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                    d = c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
                for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
            },
            activate: function(b) {
                var c, d;
                this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
            }
        };
        var c = a.fn.scrollspy;
        a.fn.scrollspy = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
            offset: 10
        }, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = c, this
        }, a(window).on("load", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                b.scrollspy(b.data())
            })
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        b.prototype = {
            constructor: b,
            dimension: function() {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height"
            },
            show: function() {
                var b, c, d, e;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), d && d.length) {
                        if (e = d.data("collapse"), e && e.transitioning) return;
                        d.collapse("hide"), e || d.data("collapse", null)
                    }
                    this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
                }
            },
            hide: function() {
                var b;
                !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0))
            },
            reset: function(a) {
                var b = this.dimension();
                return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(b, c, d) {
                var e = this,
                    f = function() {
                        "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                    };
                this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        };
        var c = a.fn.collapse;
        a.fn.collapse = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("collapse"),
                    f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
                e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.collapse.defaults = {
            toggle: !0
        }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = c, this
        }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
            var c, d = a(this),
                e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
                f = a(e).data("collapse") ? "toggle" : d.data();
            d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
        })
    }(window.jQuery), ! function(a) {
        "use strict";
        var b = function(b) {
            this.element = a(b)
        };
        b.prototype = {
            constructor: b,
            show: function() {
                var b, c, d, e = this.element,
                    f = e.closest("ul:not(.dropdown-menu)"),
                    g = e.attr("data-target");
                g || (g = e.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, "")), e.parent("li").hasClass("active") || (b = f.find(".active:last a")[0], d = a.Event("show", {
                    relatedTarget: b
                }), e.trigger(d), d.isDefaultPrevented() || (c = a(g), this.activate(e.parent("li"), f), this.activate(c, c.parent(), function() {
                    e.trigger({
                        type: "shown",
                        relatedTarget: b
                    })
                })))
            },
            activate: function(b, c, d) {
                function e() {
                    f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
                }
                var f = c.find("> .active"),
                    g = d && a.support.transition && f.hasClass("fade");
                g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in")
            }
        };
        var c = a.fn.tab;
        a.fn.tab = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tab");
                e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
            })
        }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
            return a.fn.tab = c, this
        }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
            b.preventDefault(), a(this).tab("show")
        })
    }(window.jQuery),
    function(a) {
        function b() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function c(b, c) {
            var d, e = a(b).data(),
                f = {},
                g = new RegExp("^" + c.toLowerCase() + "([A-Z])"),
                c = new RegExp("^" + c.toLowerCase());
            for (var h in e) c.test(h) && (d = h.replace(g, function(a, b) {
                return b.toLowerCase()
            }), f[d] = e[h]);
            return f
        }

        function d(b) {
            var c = {};
            if (h[b] || (b = b.split("-")[0], h[b])) {
                var d = h[b];
                return a.each(a.fn.datepicker.locale_opts, function(a, b) {
                    b in d && (c[b] = d[b])
                }), c
            }
        }
        var e = function(b, c) {
            this._process_options(c), this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(i.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(a, b) {
                return parseInt(b) + 1
            }), this._allow_update = !1, this.setStartDate(this.o.startDate), this.setEndDate(this.o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
        e.prototype = {
            constructor: e,
            _process_options: function(b) {
                this._o = a.extend({}, this._o, b);
                var c = this.o = a.extend({}, this._o),
                    d = c.language;
                switch (h[d] || (d = d.split("-")[0], h[d] || (d = a.fn.datepicker.defaults.language)), c.language = d, c.startView) {
                    case 2:
                    case "decade":
                        c.startView = 2;
                        break;
                    case 1:
                    case "year":
                        c.startView = 1;
                        break;
                    default:
                        c.startView = 0
                }
                switch (c.minViewMode) {
                    case 1:
                    case "months":
                        c.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        c.minViewMode = 2;
                        break;
                    default:
                        c.minViewMode = 0
                }
                c.startView = Math.max(c.startView, c.minViewMode), c.weekStart %= 7, c.weekEnd = (c.weekStart + 6) % 7;
                var e = i.parseFormat(c.format);
                c.startDate !== -1 / 0 && (c.startDate = i.parseDate(c.startDate, e, c.language)), 1 / 0 !== c.endDate && (c.endDate = i.parseDate(c.endDate, e, c.language)), c.daysOfWeekDisabled = c.daysOfWeekDisabled || [], a.isArray(c.daysOfWeekDisabled) || (c.daysOfWeekDisabled = c.daysOfWeekDisabled.split(/[,\s]*/)), c.daysOfWeekDisabled = a.map(c.daysOfWeekDisabled, function(a) {
                    return parseInt(a, 10)
                })
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(a) {
                for (var b, c, d = 0; d < a.length; d++) b = a[d][0], c = a[d][1], b.on(c)
            },
            _unapplyEvents: function(a) {
                for (var b, c, d = 0; d < a.length; d++) b = a[d][0], c = a[d][1], b.off(c)
            },
            _buildEvents: function() {
                this.isInput ? this._events = [
                    [this.element, {
                        focus: a.proxy(this.show, this),
                        keyup: a.proxy(this.update, this),
                        keydown: a.proxy(this.keydown, this)
                    }]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), {
                        focus: a.proxy(this.show, this),
                        keyup: a.proxy(this.update, this),
                        keydown: a.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: a.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: a.proxy(this.show, this)
                    }]
                ], this._secondaryEvents = [
                    [this.picker, {
                        click: a.proxy(this.click, this)
                    }],
                    [a(window), {
                        resize: a.proxy(this.place, this)
                    }],
                    [a(document), {
                        mousedown: a.proxy(function(a) {
                            this.element.is(a.target) || this.element.find(a.target).size() || this.picker.is(a.target) || this.picker.find(a.target).size() || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(b, c) {
                var d = c || this.date,
                    e = new Date(d.getTime() + 6e4 * d.getTimezoneOffset());
                this.element.trigger({
                    type: b,
                    date: e,
                    format: a.proxy(function(a) {
                        var b = a || this.o.format;
                        return i.formatDate(d, b, this.o.language)
                    }, this)
                })
            },
            show: function(a) {
                this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), a && a.preventDefault(), this._trigger("show")
            },
            hide: function() {
                this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
            },
            remove: function() {
                this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
            },
            getDate: function() {
                var a = this.getUTCDate();
                return new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
            },
            getUTCDate: function() {
                return this.date
            },
            setDate: function(a) {
                this.setUTCDate(new Date(a.getTime() - 6e4 * a.getTimezoneOffset()))
            },
            setUTCDate: function(a) {
                this.date = a, this.setValue()
            },
            setValue: function() {
                var a = this.getFormattedDate();
                this.isInput ? this.element.val(a) : this.component && this.element.find("input").val(a)
            },
            getFormattedDate: function(a) {
                return void 0 === a && (a = this.o.format), i.formatDate(this.date, a, this.o.language)
            },
            setStartDate: function(a) {
                this._process_options({
                    startDate: a
                }), this.update(), this.updateNavArrows()
            },
            setEndDate: function(a) {
                this._process_options({
                    endDate: a
                }), this.update(), this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function(a) {
                this._process_options({
                    daysOfWeekDisabled: a
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (!this.isInline) {
                    var b = parseInt(this.element.parents().filter(function() {
                            return "auto" != a(this).css("z-index")
                        }).first().css("z-index")) + 10,
                        c = this.component ? this.component.parent().offset() : this.element.offset(),
                        d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);
                    this.picker.css({
                        top: c.top + d,
                        left: c.left,
                        zIndex: b
                    })
                }
            },
            _allow_update: !0,
            update: function() {
                if (this._allow_update) {
                    var a, b = !1;
                    arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (a = arguments[0], b = !0) : (a = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = i.parseDate(a, this.o.format, this.o.language), b && this.setValue(), this.viewDate = this.date < this.o.startDate ? new Date(this.o.startDate) : this.date > this.o.endDate ? new Date(this.o.endDate) : new Date(this.date), this.fill()
                }
            },
            fillDow: function() {
                var a = this.o.weekStart,
                    b = "<tr>";
                if (this.o.calendarWeeks) {
                    var c = '<th class="cw">&nbsp;</th>';
                    b += c, this.picker.find(".datepicker-days thead tr:first-child").prepend(c)
                }
                for (; a < this.o.weekStart + 7;) b += '<th class="dow">' + h[this.o.language].daysMin[a++ % 7] + "</th>";
                b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
            },
            fillMonths: function() {
                for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + h[this.o.language].monthsShort[b++] + "</span>";
                this.picker.find(".datepicker-months td").html(a)
            },
            setRange: function(b) {
                b && b.length ? this.range = a.map(b, function(a) {
                    return a.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(b) {
                var c = [],
                    d = this.viewDate.getUTCFullYear(),
                    e = this.viewDate.getUTCMonth(),
                    f = this.date.valueOf(),
                    g = new Date;
                return b.getUTCFullYear() < d || b.getUTCFullYear() == d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() == d && b.getUTCMonth() > e) && c.push("new"), this.o.todayHighlight && b.getUTCFullYear() == g.getFullYear() && b.getUTCMonth() == g.getMonth() && b.getUTCDate() == g.getDate() && c.push("today"), f && b.valueOf() == f && c.push("active"), (b.valueOf() < this.o.startDate || b.valueOf() > this.o.endDate || -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)) && c.push("disabled"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 != a.inArray(b.valueOf(), this.range) && c.push("selected")), c
            },
            fill: function() {
                var c, d = new Date(this.viewDate),
                    e = d.getUTCFullYear(),
                    f = d.getUTCMonth(),
                    g = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    j = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    k = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;
                this.date && this.date.valueOf(), this.picker.find(".datepicker-days thead th.datepicker-switch").text(h[this.o.language].months[f] + " " + e), this.picker.find("tfoot th.today").text(h[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(h[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var m = b(e, f - 1, 28, 0, 0, 0, 0),
                    n = i.getDaysInMonth(m.getUTCFullYear(), m.getUTCMonth());
                m.setUTCDate(n), m.setUTCDate(n - (m.getUTCDay() - this.o.weekStart + 7) % 7);
                var o = new Date(m);
                o.setUTCDate(o.getUTCDate() + 42), o = o.valueOf();
                for (var p, q = []; m.valueOf() < o;) {
                    if (m.getUTCDay() == this.o.weekStart && (q.push("<tr>"), this.o.calendarWeeks)) {
                        var r = new Date(+m + 864e5 * ((this.o.weekStart - m.getUTCDay() - 7) % 7)),
                            s = new Date(+r + 864e5 * ((11 - r.getUTCDay()) % 7)),
                            t = new Date(+(t = b(s.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - t.getUTCDay()) % 7)),
                            u = (s - t) / 864e5 / 7 + 1;
                        q.push('<td class="cw">' + u + "</td>")
                    }
                    p = this.getClassNames(m), p.push("day");
                    var v = this.o.beforeShowDay(m);
                    void 0 === v ? v = {} : "boolean" == typeof v ? v = {
                        enabled: v
                    } : "string" == typeof v && (v = {
                        classes: v
                    }), v.enabled === !1 && p.push("disabled"), v.classes && (p = p.concat(v.classes.split(/\s+/))), v.tooltip && (c = v.tooltip), p = a.unique(p), q.push('<td class="' + p.join(" ") + '"' + (c ? ' title="' + c + '"' : "") + ">" + m.getUTCDate() + "</td>"), m.getUTCDay() == this.o.weekEnd && q.push("</tr>"), m.setUTCDate(m.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(q.join(""));
                var w = this.date && this.date.getUTCFullYear(),
                    x = this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
                w && w == e && x.eq(this.date.getUTCMonth()).addClass("active"), (g > e || e > k) && x.addClass("disabled"), e == g && x.slice(0, j).addClass("disabled"), e == k && x.slice(l + 1).addClass("disabled"), q = "", e = 10 * parseInt(e / 10, 10);
                var y = this.picker.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
                e -= 1;
                for (var z = -1; 11 > z; z++) q += '<span class="year' + (-1 == z ? " old" : 10 == z ? " new" : "") + (w == e ? " active" : "") + (g > e || e > k ? " disabled" : "") + '">' + e + "</span>", e += 1;
                y.html(q)
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var a = new Date(this.viewDate),
                        b = a.getUTCFullYear(),
                        c = a.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), 1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), 1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function(c) {
                c.preventDefault();
                var d = a(c.target).closest("span, td, th");
                if (1 == d.length) switch (d[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (d[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var e = i.modes[this.viewMode].navStep * ("prev" == d[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, e);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, e)
                                }
                                this.fill();
                                break;
                            case "today":
                                var f = new Date;
                                f = b(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0), this.showMode(-2);
                                var g = "linked" == this.o.todayBtn ? null : "view";
                                this._setDate(f, g);
                                break;
                            case "clear":
                                var h;
                                this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide()
                        }
                        break;
                    case "span":
                        if (!d.is(".disabled")) {
                            if (this.viewDate.setUTCDate(1), d.is(".month")) {
                                var j = 1,
                                    k = d.parent().find("span").index(d),
                                    l = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(k), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(b(l, k, j, 0, 0, 0, 0))
                            } else {
                                var l = parseInt(d.text(), 10) || 0,
                                    j = 1,
                                    k = 0;
                                this.viewDate.setUTCFullYear(l), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(b(l, k, j, 0, 0, 0, 0))
                            }
                            this.showMode(-1), this.fill()
                        }
                        break;
                    case "td":
                        if (d.is(".day") && !d.is(".disabled")) {
                            var j = parseInt(d.text(), 10) || 1,
                                l = this.viewDate.getUTCFullYear(),
                                k = this.viewDate.getUTCMonth();
                            d.is(".old") ? 0 === k ? (k = 11, l -= 1) : k -= 1 : d.is(".new") && (11 == k ? (k = 0, l += 1) : k += 1), this._setDate(b(l, k, j, 0, 0, 0, 0))
                        }
                }
            },
            _setDate: function(a, b) {
                b && "date" != b || (this.date = new Date(a)), b && "view" != b || (this.viewDate = new Date(a)), this.fill(), this.setValue(), this._trigger("changeDate");
                var c;
                this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && (c.change(), !this.o.autoclose || b && "date" != b || this.hide())
            },
            moveMonth: function(a, b) {
                if (!b) return a;
                var c, d, e = new Date(a.valueOf()),
                    f = e.getUTCDate(),
                    g = e.getUTCMonth(),
                    h = Math.abs(b);
                if (b = b > 0 ? 1 : -1, 1 == h) d = -1 == b ? function() {
                    return e.getUTCMonth() == g
                } : function() {
                    return e.getUTCMonth() != c
                }, c = g + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);
                else {
                    for (var i = 0; h > i; i++) e = this.moveMonth(e, b);
                    c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
                        return c != e.getUTCMonth()
                    }
                }
                for (; d();) e.setUTCDate(--f), e.setUTCMonth(c);
                return e
            },
            moveYear: function(a, b) {
                return this.moveMonth(a, 12 * b)
            },
            dateWithinRange: function(a) {
                return a >= this.o.startDate && a <= this.o.endDate
            },
            keydown: function(a) {
                if (this.picker.is(":not(:visible)")) return 27 == a.keyCode && this.show(), void 0;
                var b, c, d, e = !1;
                switch (a.keyCode) {
                    case 27:
                        this.hide(), a.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation) break;
                        b = 37 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : (c = new Date(this.date), c.setUTCDate(this.date.getUTCDate() + b), d = new Date(this.viewDate), d.setUTCDate(this.viewDate.getUTCDate() + b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation) break;
                        b = 38 == a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.date, b), d = this.moveYear(this.viewDate, b)) : a.shiftKey ? (c = this.moveMonth(this.date, b), d = this.moveMonth(this.viewDate, b)) : (c = new Date(this.date), c.setUTCDate(this.date.getUTCDate() + 7 * b), d = new Date(this.viewDate), d.setUTCDate(this.viewDate.getUTCDate() + 7 * b)), this.dateWithinRange(c) && (this.date = c, this.viewDate = d, this.setValue(), this.update(), a.preventDefault(), e = !0);
                        break;
                    case 13:
                        this.hide(), a.preventDefault();
                        break;
                    case 9:
                        this.hide()
                }
                if (e) {
                    this._trigger("changeDate");
                    var f;
                    this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change()
                }
            },
            showMode: function(a) {
                a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var f = function(b, c) {
            this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
                return a.jquery ? a[0] : a
            }), delete c.inputs, a(this.inputs).datepicker(c).bind("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
                return a(b).data("datepicker")
            }), this.updateDates()
        };
        f.prototype = {
            updateDates: function() {
                this.dates = a.map(this.pickers, function(a) {
                    return a.date
                }), this.updateRanges()
            },
            updateRanges: function() {
                var b = a.map(this.dates, function(a) {
                    return a.valueOf()
                });
                a.each(this.pickers, function(a, c) {
                    c.setRange(b)
                })
            },
            dateUpdated: function(b) {
                var c = a(b.target).data("datepicker"),
                    d = c.getUTCDate(),
                    e = a.inArray(b.target, this.inputs),
                    f = this.inputs.length;
                if (-1 != e) {
                    if (d < this.dates[e])
                        for (; e >= 0 && d < this.dates[e];) this.pickers[e--].setUTCDate(d);
                    else if (d > this.dates[e])
                        for (; f > e && d > this.dates[e];) this.pickers[e++].setUTCDate(d);
                    this.updateDates()
                }
            },
            remove: function() {
                a.map(this.pickers, function(a) {
                    a.remove()
                }), delete this.element.data().datepicker
            }
        };
        var g = a.fn.datepicker;
        a.fn.datepicker = function(b) {
            var g = Array.apply(null, arguments);
            g.shift();
            var h;
            return this.each(function() {
                var i = a(this),
                    j = i.data("datepicker"),
                    k = "object" == typeof b && b;
                if (!j) {
                    var l = c(this, "date"),
                        m = a.extend({}, a.fn.datepicker.defaults, l, k),
                        n = d(m.language),
                        o = a.extend({}, a.fn.datepicker.defaults, n, l, k);
                    if (i.is(".input-daterange") || o.inputs) {
                        var p = {
                            inputs: o.inputs || i.find("input").toArray()
                        };
                        i.data("datepicker", j = new f(this, a.extend(o, p)))
                    } else i.data("datepicker", j = new e(this, o))
                }
                return "string" == typeof b && "function" == typeof j[b] && (h = j[b].apply(j, g), void 0 !== h) ? !1 : void 0
            }), void 0 !== h ? h : this
        }, a.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: a.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            daysOfWeekDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0
        }, a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"], a.fn.datepicker.Constructor = e;
        var h = a.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            i = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(a) {
                    return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
                },
                getDaysInMonth: function(a, b) {
                    return [31, i.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(a) {
                    var b = a.replace(this.validParts, "\0").split("\0"),
                        c = a.match(this.validParts);
                    if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
                    return {
                        separators: b,
                        parts: c
                    }
                },
                parseDate: function(c, d, f) {
                    if (c instanceof Date) return c;
                    if ("string" == typeof d && (d = i.parseFormat(d)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)) {
                        var g, j, k = /([\-+]\d+)([dmwy])/,
                            l = c.match(/([\-+]\d+)([dmwy])/g);
                        c = new Date;
                        for (var m = 0; m < l.length; m++) switch (g = k.exec(l[m]), j = parseInt(g[1]), g[2]) {
                            case "d":
                                c.setUTCDate(c.getUTCDate() + j);
                                break;
                            case "m":
                                c = e.prototype.moveMonth.call(e.prototype, c, j);
                                break;
                            case "w":
                                c.setUTCDate(c.getUTCDate() + 7 * j);
                                break;
                            case "y":
                                c = e.prototype.moveYear.call(e.prototype, c, j)
                        }
                        return b(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), 0, 0, 0)
                    }
                    var n, o, g, l = c && c.match(this.nonpunctuation) || [],
                        c = new Date,
                        p = {},
                        q = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        r = {
                            yyyy: function(a, b) {
                                return a.setUTCFullYear(b)
                            },
                            yy: function(a, b) {
                                return a.setUTCFullYear(2e3 + b)
                            },
                            m: function(a, b) {
                                for (b -= 1; 0 > b;) b += 12;
                                for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() != b;) a.setUTCDate(a.getUTCDate() - 1);
                                return a
                            },
                            d: function(a, b) {
                                return a.setUTCDate(b)
                            }
                        };
                    r.M = r.MM = r.mm = r.m, r.dd = r.d, c = b(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0);
                    var s = d.parts.slice();
                    if (l.length != s.length && (s = a(s).filter(function(b, c) {
                            return -1 !== a.inArray(c, q)
                        }).toArray()), l.length == s.length) {
                        for (var m = 0, t = s.length; t > m; m++) {
                            if (n = parseInt(l[m], 10), g = s[m], isNaN(n)) switch (g) {
                                case "MM":
                                    o = a(h[f].months).filter(function() {
                                        var a = this.slice(0, l[m].length),
                                            b = l[m].slice(0, a.length);
                                        return a == b
                                    }), n = a.inArray(o[0], h[f].months) + 1;
                                    break;
                                case "M":
                                    o = a(h[f].monthsShort).filter(function() {
                                        var a = this.slice(0, l[m].length),
                                            b = l[m].slice(0, a.length);
                                        return a == b
                                    }), n = a.inArray(o[0], h[f].monthsShort) + 1
                            }
                            p[g] = n
                        }
                        for (var u, m = 0; m < q.length; m++) u = q[m], u in p && !isNaN(p[u]) && r[u](c, p[u])
                    }
                    return c
                },
                formatDate: function(b, c, d) {
                    "string" == typeof c && (c = i.parseFormat(c));
                    var e = {
                        d: b.getUTCDate(),
                        D: h[d].daysShort[b.getUTCDay()],
                        DD: h[d].days[b.getUTCDay()],
                        m: b.getUTCMonth() + 1,
                        M: h[d].monthsShort[b.getUTCMonth()],
                        MM: h[d].months[b.getUTCMonth()],
                        yy: b.getUTCFullYear().toString().substring(2),
                        yyyy: b.getUTCFullYear()
                    };
                    e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m;
                    for (var b = [], f = a.extend([], c.separators), g = 0, j = c.parts.length; j >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                    return b.join("")
                },
                headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        i.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + "<tbody></tbody>" + i.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "</table>" + "</div>" + "</div>", a.fn.datepicker.DPGlobal = i, a.fn.datepicker.noConflict = function() {
            return a.fn.datepicker = g, this
        }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
            var c = a(this);
            c.data("datepicker") || (b.preventDefault(), c.datepicker("show"))
        }), a(function() {
            a('[data-provide="datepicker-inline"]').datepicker()
        })
    }(window.jQuery),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return a && "number" == typeof a.length ? "function" != typeof a.hasOwnProperty && "function" != typeof a.constructor ? !0 : a instanceof fb || Vc && a instanceof Vc || "[object Object]" !== _c.call(a) || "function" == typeof a.callee : !1
        }

        function e(a, b, c) {
            var f;
            if (a)
                if (x(a))
                    for (f in a) "prototype" != f && "length" != f && "name" != f && a.hasOwnProperty(f) && b.call(c, a[f], f);
                else if (a.forEach && a.forEach !== e) a.forEach(b, c);
            else if (d(a))
                for (f = 0; f < a.length; f++) b.call(c, a[f], f);
            else
                for (f in a) a.hasOwnProperty(f) && b.call(c, a[f], f);
            return a
        }

        function f(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b.sort()
        }

        function g(a, b, c) {
            for (var d = f(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
            return d
        }

        function h(a) {
            return function(b, c) {
                a(c, b)
            }
        }

        function i() {
            for (var a, b = bd.length; b;) {
                if (b--, a = bd[b].charCodeAt(0), 57 == a) return bd[b] = "A", bd.join("");
                if (90 != a) return bd[b] = String.fromCharCode(a + 1), bd.join("");
                bd[b] = "0"
            }
            return bd.unshift("0"), bd.join("")
        }

        function j(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }

        function k(a) {
            var b = a.$$hashKey;
            return e(arguments, function(b) {
                b !== a && e(b, function(b, c) {
                    a[c] = b
                })
            }), j(a, b), a
        }

        function l(a) {
            return parseInt(a, 10)
        }

        function m(a, b) {
            return k(new(k(function() {}, {
                prototype: a
            })), b)
        }

        function n() {}

        function o(a) {
            return a
        }

        function p(a) {
            return function() {
                return a
            }
        }

        function q(a) {
            return "undefined" == typeof a
        }

        function r(a) {
            return "undefined" != typeof a
        }

        function s(a) {
            return null != a && "object" == typeof a
        }

        function t(a) {
            return "string" == typeof a
        }

        function u(a) {
            return "number" == typeof a
        }

        function v(a) {
            return "[object Date]" == _c.apply(a)
        }

        function w(a) {
            return "[object Array]" == _c.apply(a)
        }

        function x(a) {
            return "function" == typeof a
        }

        function y(a) {
            return a && a.document && a.location && a.alert && a.setInterval
        }

        function z(a) {
            return a && a.$evalAsync && a.$watch
        }

        function A(a) {
            return "[object File]" === _c.apply(a)
        }

        function B(a) {
            return t(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
        }

        function C(a) {
            return a && (a.nodeName || a.bind && a.find)
        }

        function D(a, b, c) {
            var d = [];
            return e(a, function(a, e, f) {
                d.push(b.call(c, a, e, f))
            }), d
        }

        function E(a, b) {
            return -1 != F(a, b)
        }

        function F(a, b) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++)
                if (b === a[c]) return c;
            return -1
        }

        function G(a, b) {
            var c = F(a, b);
            return c >= 0 && a.splice(c, 1), b
        }

        function H(a, b) {
            if (y(a) || z(a)) throw Error("Can't copy Window or Scope");
            if (b) {
                if (a === b) throw Error("Can't copy equivalent objects or arrays");
                if (w(a)) {
                    b.length = 0;
                    for (var c = 0; c < a.length; c++) b.push(H(a[c]))
                } else {
                    var d = b.$$hashKey;
                    e(b, function(a, c) {
                        delete b[c]
                    });
                    for (var f in a) b[f] = H(a[f]);
                    j(b, d)
                }
            } else b = a, a && (w(a) ? b = H(a, []) : v(a) ? b = new Date(a.getTime()) : s(a) && (b = H(a, {})));
            return b
        }

        function I(a, b) {
            b = b || {};
            for (var c in a) a.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (b[c] = a[c]);
            return b
        }

        function J(a, b) {
            if (a === b) return !0;
            if (null === a || null === b) return !1;
            if (a !== a && b !== b) return !0;
            var d, e, f, g = typeof a,
                h = typeof b;
            if (g == h && "object" == g) {
                if (!w(a)) {
                    if (v(a)) return v(b) && a.getTime() == b.getTime();
                    if (z(a) || z(b) || y(a) || y(b)) return !1;
                    f = {};
                    for (e in a)
                        if ("$" !== e.charAt(0) && !x(a[e])) {
                            if (!J(a[e], b[e])) return !1;
                            f[e] = !0
                        }
                    for (e in b)
                        if (!f[e] && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                    return !0
                }
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++)
                        if (!J(a[e], b[e])) return !1;
                    return !0
                }
            }
            return !1
        }

        function K(a, b, c) {
            return a.concat(Zc.call(b, c))
        }

        function L(a, b) {
            return Zc.call(a, b || 0)
        }

        function M(a, b) {
            var c = arguments.length > 2 ? L(arguments, 2) : [];
            return !x(b) || b instanceof RegExp ? b : c.length ? function() {
                return arguments.length ? b.apply(a, c.concat(Zc.call(arguments, 0))) : b.apply(a, c)
            } : function() {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
        }

        function N(a, d) {
            var e = d;
            return /^\$+/.test(a) ? e = c : y(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : z(d) && (e = "$SCOPE"), e
        }

        function O(a, b) {
            return JSON.stringify(a, N, b ? "  " : null)
        }

        function P(a) {
            return t(a) ? JSON.parse(a) : a
        }

        function Q(a) {
            if (a && 0 !== a.length) {
                var b = Qc("" + a);
                a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
            } else a = !1;
            return a
        }

        function R(a) {
            a = Uc(a).clone();
            try {
                a.html("")
            } catch (b) {}
            var c = 3,
                d = Uc("<div>").append(a).html();
            try {
                return a[0].nodeType === c ? Qc(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                    return "<" + Qc(b)
                })
            } catch (b) {
                return Qc(d)
            }
        }

        function S(a) {
            var b, c, d = {};
            return e((a || "").split("&"), function(a) {
                a && (b = a.split("="), c = decodeURIComponent(b[0]), d[c] = r(b[1]) ? decodeURIComponent(b[1]) : !0)
            }), d
        }

        function T(a) {
            var b = [];
            return e(a, function(a, c) {
                b.push(V(c, !0) + (a === !0 ? "" : "=" + V(a, !0)))
            }), b.length ? b.join("&") : ""
        }

        function U(a) {
            return V(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function V(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
        }

        function W(a, c) {
            function d(a) {
                a && h.push(a)
            }
            var f, g, h = [a],
                i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            e(i, function(c) {
                i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (e(a.querySelectorAll("." + c), d), e(a.querySelectorAll("." + c + "\\:"), d), e(a.querySelectorAll("[" + c + "]"), d))
            }), e(h, function(a) {
                if (!f) {
                    var b = " " + a.className + " ",
                        c = j.exec(b);
                    c ? (f = a, g = (c[2] || "").replace(/\s+/g, ",")) : e(a.attributes, function(b) {
                        !f && i[b.name] && (f = a, g = b.value)
                    })
                }
            }), f && c(f, g ? [g] : [])
        }

        function X(b, c) {
            var d = function() {
                    b = Uc(b), c = c || [], c.unshift(["$provide", function(a) {
                        a.value("$rootElement", b)
                    }]), c.unshift("ng");
                    var a = yb(c);
                    return a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                        a.$apply(function() {
                            b.data("$injector", d), c(b)(a)
                        })
                    }]), a
                },
                f = /^NG_DEFER_BOOTSTRAP!/;
            return a && !f.test(a.name) ? d() : (a.name = a.name.replace(f, ""), ad.resumeBootstrap = function(a) {
                e(a, function(a) {
                    c.push(a)
                }), d()
            }, void 0)
        }

        function Y(a, b) {
            return b = b || "_", a.replace(cd, function(a, c) {
                return (c ? b : "") + a.toLowerCase()
            })
        }

        function Z() {
            Vc = a.jQuery, Vc ? (Uc = Vc, k(Vc.fn, {
                scope: ld.scope,
                controller: ld.controller,
                injector: ld.injector,
                inheritedData: ld.inheritedData
            }), eb("remove", !0), eb("empty"), eb("html")) : Uc = fb, ad.element = Uc
        }

        function $(a, b, c) {
            if (!a) throw new Error("Argument '" + (b || "?") + "' is " + (c || "required"));
            return a
        }

        function _(a, b, c) {
            return c && w(a) && (a = a[a.length - 1]), $(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
        }

        function ab(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }
            return b(b(a, "angular", Object), "module", function() {
                var a = {};
                return function(c, d, e) {
                    return d && a.hasOwnProperty(c) && (a[c] = null), b(a, c, function() {
                        function a(a, c, d) {
                            return function() {
                                return b[d || "push"]([a, c, arguments]), h
                            }
                        }
                        if (!d) throw Error("No module: " + c);
                        var b = [],
                            f = [],
                            g = a("$injector", "invoke"),
                            h = {
                                _invokeQueue: b,
                                _runBlocks: f,
                                requires: d,
                                name: c,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: g,
                                run: function(a) {
                                    return f.push(a), this
                                }
                            };
                        return e && g(e), h
                    })
                }
            })
        }

        function bb(b) {
            k(b, {
                bootstrap: X,
                copy: H,
                extend: k,
                equals: J,
                element: Uc,
                forEach: e,
                injector: yb,
                noop: n,
                bind: M,
                toJson: O,
                fromJson: P,
                identity: o,
                isUndefined: q,
                isDefined: r,
                isString: t,
                isFunction: x,
                isObject: s,
                isNumber: u,
                isElement: C,
                isArray: w,
                version: dd,
                isDate: v,
                lowercase: Qc,
                uppercase: Rc,
                callbacks: {
                    counter: 0
                }
            }), Wc = ab(a);
            try {
                Wc("ngLocale")
            } catch (c) {
                Wc("ngLocale", []).provider("$locale", qc)
            }
            Wc("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider("$compile", Eb).directive({
                    a: Id,
                    input: Sd,
                    textarea: Sd,
                    form: Md,
                    script: Ae,
                    select: Ce,
                    style: Ee,
                    option: De,
                    ngBind: ce,
                    ngBindHtmlUnsafe: ee,
                    ngBindTemplate: de,
                    ngClass: fe,
                    ngClassEven: he,
                    ngClassOdd: ge,
                    ngCsp: ke,
                    ngCloak: ie,
                    ngController: je,
                    ngForm: Nd,
                    ngHide: te,
                    ngInclude: ne,
                    ngInit: oe,
                    ngNonBindable: pe,
                    ngPluralize: qe,
                    ngRepeat: re,
                    ngShow: se,
                    ngSubmit: me,
                    ngStyle: ue,
                    ngSwitch: ve,
                    ngSwitchWhen: we,
                    ngSwitchDefault: xe,
                    ngOptions: Be,
                    ngView: ze,
                    ngTransclude: ye,
                    ngModel: Yd,
                    ngList: _d,
                    ngChange: Zd,
                    required: $d,
                    ngRequired: $d,
                    ngValue: be
                }).directive(Jd).directive(le), a.provider({
                    $anchorScroll: zb,
                    $browser: Bb,
                    $cacheFactory: Cb,
                    $controller: Gb,
                    $document: Hb,
                    $exceptionHandler: Ib,
                    $filter: sc,
                    $interpolate: Jb,
                    $http: nc,
                    $httpBackend: oc,
                    $location: Vb,
                    $log: Wb,
                    $parse: bc,
                    $route: ec,
                    $routeParams: fc,
                    $rootScope: gc,
                    $q: cc,
                    $sniffer: hc,
                    $templateCache: Db,
                    $timeout: rc,
                    $window: ic
                })
            }])
        }

        function cb() {
            return ++gd
        }

        function db(a) {
            return a.replace(jd, function(a, b, c, d) {
                return d ? c.toUpperCase() : c
            }).replace(kd, "Moz$1")
        }

        function eb(a, b) {
            function c() {
                for (var a, c, e, f, g, h, i, j = [this], k = b; j.length;)
                    for (a = j.shift(), c = 0, e = a.length; e > c; c++)
                        for (f = Uc(a[c]), k ? f.triggerHandler("$destroy") : k = !k, g = 0, h = (i = f.children()).length; h > g; g++) j.push(Vc(i[g]));
                return d.apply(this, arguments)
            }
            var d = Vc.fn[a];
            d = d.$original || d, c.$original = d, Vc.fn[a] = c
        }

        function fb(a) {
            if (a instanceof fb) return a;
            if (!(this instanceof fb)) {
                if (t(a) && "<" != a.charAt(0)) throw Error("selectors not implemented");
                return new fb(a)
            }
            if (t(a)) {
                var c = b.createElement("div");
                c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), pb(this, c.childNodes), this.remove()
            } else pb(this, a)
        }

        function gb(a) {
            return a.cloneNode(!0)
        }

        function hb(a) {
            jb(a);
            for (var b = 0, c = a.childNodes || []; b < c.length; b++) hb(c[b])
        }

        function ib(a, b, c) {
            var d = kb(a, "events"),
                f = kb(a, "handle");
            f && (q(b) ? e(d, function(b, c) {
                id(a, c, b), delete d[c]
            }) : q(c) ? (id(a, b, d[b]), delete d[b]) : G(d[b], c))
        }

        function jb(a) {
            var b = a[fd],
                d = ed[b];
            d && (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), ib(a)), delete ed[b], a[fd] = c)
        }

        function kb(a, b, c) {
            var d = a[fd],
                e = ed[d || -1];
            return r(c) ? (e || (a[fd] = d = cb(), e = ed[d] = {}), e[b] = c, void 0) : e && e[b]
        }

        function lb(a, b, c) {
            var d = kb(a, "data"),
                e = r(c),
                f = !e && r(b),
                g = f && !s(b);
            if (d || g || kb(a, "data", d = {}), e) d[b] = c;
            else {
                if (!f) return d;
                if (g) return d && d[b];
                k(d, b)
            }
        }

        function mb(a, b) {
            return (" " + a.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1
        }

        function nb(a, b) {
            b && e(b.split(" "), function(b) {
                a.className = B((" " + a.className + " ").replace(/[\n\t]/g, " ").replace(" " + B(b) + " ", " "))
            })
        }

        function ob(a, b) {
            b && e(b.split(" "), function(b) {
                mb(a, b) || (a.className = B(a.className + " " + B(b)))
            })
        }

        function pb(a, b) {
            if (b) {
                b = b.nodeName || !r(b.length) || y(b) ? [b] : b;
                for (var c = 0; c < b.length; c++) a.push(b[c])
            }
        }

        function qb(a, b) {
            return rb(a, "$" + (b || "ngController") + "Controller")
        }

        function rb(a, b, c) {
            for (a = Uc(a), 9 == a[0].nodeType && (a = a.find("html")); a.length;) {
                if (c = a.data(b)) return c;
                a = a.parent()
            }
        }

        function sb(a, b) {
            var c = md[b.toLowerCase()];
            return c && nd[a.nodeName] && c
        }

        function tb(a, c) {
            var d = function(d, f) {
                if (d.preventDefault || (d.preventDefault = function() {
                        d.returnValue = !1
                    }), d.stopPropagation || (d.stopPropagation = function() {
                        d.cancelBubble = !0
                    }), d.target || (d.target = d.srcElement || b), q(d.defaultPrevented)) {
                    var g = d.preventDefault;
                    d.preventDefault = function() {
                        d.defaultPrevented = !0, g.call(d)
                    }, d.defaultPrevented = !1
                }
                d.isDefaultPrevented = function() {
                    return d.defaultPrevented
                }, e(c[f || d.type], function(b) {
                    b.call(a, d)
                }), 8 >= Yc ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
            };
            return d.elem = a, d
        }

        function ub(a) {
            var b, d = typeof a;
            return "object" == d && null !== a ? "function" == typeof(b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = i()) : b = a, d + ":" + b
        }

        function vb(a) {
            e(a, this.put, this)
        }

        function wb() {}

        function xb(a) {
            var b, c, d, f;
            return "function" == typeof a ? (b = a.$inject) || (b = [], c = a.toString().replace(rd, ""), d = c.match(od), e(d[1].split(pd), function(a) {
                a.replace(qd, function(a, c, d) {
                    b.push(d)
                })
            }), a.$inject = b) : w(a) ? (f = a.length - 1, _(a[f], "fn"), b = a.slice(0, f)) : _(a, "fn", !0), b
        }

        function yb(a) {
            function b(a) {
                return function(b, c) {
                    return s(b) ? (e(b, h(a)), void 0) : a(b, c)
                }
            }

            function c(a, b) {
                if ((x(b) || w(b)) && (b = v.instantiate(b)), !b.$get) throw Error("Provider " + a + " must define $get factory method.");
                return u[a + o] = b
            }

            function d(a, b) {
                return c(a, {
                    $get: b
                })
            }

            function f(a, b) {
                return d(a, ["$injector", function(a) {
                    return a.instantiate(b)
                }])
            }

            function g(a, b) {
                return d(a, p(b))
            }

            function i(a, b) {
                u[a] = b, y[a] = b
            }

            function j(a, b) {
                var c = v.get(a + o),
                    d = c.$get;
                c.$get = function() {
                    var a = z.invoke(d, c);
                    return z.invoke(b, null, {
                        $delegate: a
                    })
                }
            }

            function k(a) {
                var b = [];
                return e(a, function(a) {
                    if (!r.get(a))
                        if (r.put(a, !0), t(a)) {
                            var c = Wc(a);
                            b = b.concat(k(c.requires)).concat(c._runBlocks);
                            try {
                                for (var d = c._invokeQueue, e = 0, f = d.length; f > e; e++) {
                                    var g = d[e],
                                        h = "$injector" == g[0] ? v : v.get(g[0]);
                                    h[g[1]].apply(h, g[2])
                                }
                            } catch (i) {
                                throw i.message && (i.message += " from " + a), i
                            }
                        } else if (x(a)) try {
                        b.push(v.invoke(a))
                    } catch (i) {
                        throw i.message && (i.message += " from " + a), i
                    } else if (w(a)) try {
                        b.push(v.invoke(a))
                    } catch (i) {
                        throw i.message && (i.message += " from " + String(a[a.length - 1])), i
                    } else _(a, "module")
                }), b
            }

            function l(a, b) {
                function c(c) {
                    if ("string" != typeof c) throw Error("Service name expected");
                    if (a.hasOwnProperty(c)) {
                        if (a[c] === m) throw Error("Circular dependency: " + q.join(" <- "));
                        return a[c]
                    }
                    try {
                        return q.unshift(c), a[c] = m, a[c] = b(c)
                    } finally {
                        q.shift()
                    }
                }

                function d(a, b, d) {
                    var e, f, g, h = [],
                        i = xb(a);
                    for (f = 0, e = i.length; e > f; f++) g = i[f], h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
                    switch (a.$inject || (a = a[e]), b ? -1 : h.length) {
                        case 0:
                            return a();
                        case 1:
                            return a(h[0]);
                        case 2:
                            return a(h[0], h[1]);
                        case 3:
                            return a(h[0], h[1], h[2]);
                        case 4:
                            return a(h[0], h[1], h[2], h[3]);
                        case 5:
                            return a(h[0], h[1], h[2], h[3], h[4]);
                        case 6:
                            return a(h[0], h[1], h[2], h[3], h[4], h[5]);
                        case 7:
                            return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6]);
                        case 8:
                            return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
                        case 9:
                            return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8]);
                        case 10:
                            return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9]);
                        default:
                            return a.apply(b, h)
                    }
                }

                function e(a, b) {
                    var c, e, f = function() {};
                    return f.prototype = (w(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), s(e) ? e : c
                }
                return {
                    invoke: d,
                    instantiate: e,
                    get: c,
                    annotate: xb
                }
            }
            var m = {},
                o = "Provider",
                q = [],
                r = new vb,
                u = {
                    $provide: {
                        provider: b(c),
                        factory: b(d),
                        service: b(f),
                        value: b(g),
                        constant: b(i),
                        decorator: j
                    }
                },
                v = l(u, function() {
                    throw Error("Unknown provider: " + q.join(" <- "))
                }),
                y = {},
                z = y.$injector = l(y, function(a) {
                    var b = v.get(a + o);
                    return z.invoke(b.$get, b)
                });
            return e(k(a), function(a) {
                z.invoke(a || n)
            }), z
        }

        function zb() {
            var a = !0;
            this.disableAutoScrolling = function() {
                a = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
                function f(a) {
                    var b = null;
                    return e(a, function(a) {
                        b || "a" !== Qc(a.nodeName) || (b = a)
                    }), b
                }

                function g() {
                    var a, d = c.hash();
                    d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = f(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
                }
                var h = b.document;
                return a && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(g)
                }), g
            }]
        }

        function Ab(a, b, d, f) {
            function g(a) {
                try {
                    a.apply(null, L(arguments, 1))
                } finally {
                    if (s--, 0 === s)
                        for (; u.length;) try {
                            u.pop()()
                        } catch (b) {
                            d.error(b)
                        }
                }
            }

            function h(a, b) {
                ! function c() {
                    e(w, function(a) {
                        a()
                    }), v = b(c, a)
                }()
            }

            function i() {
                x != j.url() && (x = j.url(), e(z, function(a) {
                    a(j.url())
                }))
            }
            var j = this,
                k = b[0],
                l = a.location,
                m = a.history,
                o = a.setTimeout,
                p = a.clearTimeout,
                r = {};
            j.isMock = !1;
            var s = 0,
                u = [];
            j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
                s++
            }, j.notifyWhenNoOutstandingRequests = function(a) {
                e(w, function(a) {
                    a()
                }), 0 === s ? a() : u.push(a)
            };
            var v, w = [];
            j.addPollFn = function(a) {
                return q(v) && h(100, o), w.push(a), a
            };
            var x = l.href,
                y = b.find("base");
            j.url = function(a, b) {
                if (a) {
                    if (x == a) return;
                    return x = a, f.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a), y.attr("href", y.attr("href"))) : b ? l.replace(a) : l.href = a, j
                }
                return l.href.replace(/%27/g, "'")
            };
            var z = [],
                A = !1;
            j.onUrlChange = function(b) {
                return A || (f.history && Uc(a).bind("popstate", i), f.hashchange ? Uc(a).bind("hashchange", i) : j.addPollFn(i), A = !0), z.push(b), b
            }, j.baseHref = function() {
                var a = y.attr("href");
                return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
            };
            var B = {},
                C = "",
                D = j.baseHref();
            j.cookies = function(a, b) {
                var e, f, g, h, i;
                if (!a) {
                    if (k.cookie !== C)
                        for (C = k.cookie, f = C.split("; "), B = {}, h = 0; h < f.length; h++)
                            if (g = f[h], i = g.indexOf("="), i > 0) {
                                var a = unescape(g.substring(0, i));
                                B[a] === c && (B[a] = unescape(g.substring(i + 1)))
                            }
                    return B
                }
                b === c ? k.cookie = escape(a) + "=;path=" + D + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : t(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + D).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
            }, j.defer = function(a, b) {
                var c;
                return s++, c = o(function() {
                    delete r[c], g(a)
                }, b || 0), r[c] = !0, c
            }, j.defer.cancel = function(a) {
                return r[a] ? (delete r[a], p(a), g(n), !0) : !1
            }
        }

        function Bb() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
                return new Ab(a, d, b, c)
            }]
        }

        function Cb() {
            this.$get = function() {
                function a(a, c) {
                    function d(a) {
                        a != l && (m ? m == a && (m = a.n) : m = a, e(a.n, a.p), e(a, l), l = a, l.n = null)
                    }

                    function e(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }
                    if (a in b) throw Error("cacheId " + a + " taken");
                    var f = 0,
                        g = k({}, c, {
                            id: a
                        }),
                        h = {},
                        i = c && c.capacity || Number.MAX_VALUE,
                        j = {},
                        l = null,
                        m = null;
                    return b[a] = {
                        put: function(a, b) {
                            var c = j[a] || (j[a] = {
                                key: a
                            });
                            d(c), q(b) || (a in h || f++, h[a] = b, f > i && this.remove(m.key))
                        },
                        get: function(a) {
                            var b = j[a];
                            if (b) return d(b), h[a]
                        },
                        remove: function(a) {
                            var b = j[a];
                            b && (b == l && (l = b.p), b == m && (m = b.n), e(b.n, b.p), delete j[a], delete h[a], f--)
                        },
                        removeAll: function() {
                            h = {}, f = 0, j = {}, l = m = null
                        },
                        destroy: function() {
                            h = null, g = null, j = null, delete b[a]
                        },
                        info: function() {
                            return k({}, g, {
                                size: f
                            })
                        }
                    }
                }
                var b = {};
                return a.info = function() {
                    var a = {};
                    return e(b, function(b, c) {
                        a[c] = b.info()
                    }), a
                }, a.get = function(a) {
                    return b[a]
                }, a
            }
        }

        function Db() {
            this.$get = ["$cacheFactory", function(a) {
                return a("templates")
            }]
        }

        function Eb(a) {
            var d = {},
                f = "Directive",
                g = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
                i = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
                j = "Template must have exactly one root element. was: ",
                l = /^\s*(https?|ftp|mailto|file):/;
            this.directive = function m(b, c) {
                return t(b) ? ($(c, "directive"), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + f, ["$injector", "$exceptionHandler", function(a, c) {
                    var f = [];
                    return e(d[b], function(d) {
                        try {
                            var e = a.invoke(d);
                            x(e) ? e = {
                                compile: p(e)
                            } : !e.compile && e.link && (e.compile = p(e.link)), e.priority = e.priority || 0, e.name = e.name || b, e.require = e.require || e.controller && e.name, e.restrict = e.restrict || "A", f.push(e)
                        } catch (g) {
                            c(g)
                        }
                    }), f
                }])), d[b].push(c)) : e(b, h(m)), this
            }, this.urlSanitizationWhitelist = function(a) {
                return r(a) ? (l = a, this) : l
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function(a, h, m, n, q, r, u, v, y) {
                function z(a, b, c) {
                    a instanceof Uc || (a = Uc(a)), e(a, function(b, c) {
                        3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Uc(b).wrap("<span></span>").parent()[0])
                    });
                    var d = C(a, b, a, c);
                    return function(b, c) {
                        $(b, "scope");
                        for (var e = c ? ld.clone.call(a) : a, f = 0, g = e.length; g > f; f++) {
                            var h = e[f];
                            (1 == h.nodeType || 9 == h.nodeType) && e.eq(f).data("$scope", b)
                        }
                        return A(e, "ng-scope"), c && c(e, b), d && d(b, e, e), e
                    }
                }

                function A(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function C(a, b, d, e) {
                    function f(a, d, e, f) {
                        var g, h, i, j, k, m, n, o, p = [];
                        for (m = 0, n = d.length; n > m; m++) p.push(d[m]);
                        for (m = 0, o = 0, n = l.length; n > m; o++) i = p[o], g = l[m++], h = l[m++], g ? (g.scope ? (j = a.$new(s(g.scope)), Uc(i).data("$scope", j)) : j = a, k = g.transclude, k || !f && b ? g(h, j, i, e, function(b) {
                            return function(c) {
                                var d = a.$new();
                                return d.$$transcluded = !0, b(d, c).bind("$destroy", M(d, d.$destroy))
                            }
                        }(k || b)) : g(h, j, i, c, f)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var g, h, i, j, k, l = [], m = 0; m < a.length; m++) j = new P, i = D(a[m], [], j, e), g = i.length ? E(i, a[m], j, b, d) : null, h = g && g.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : C(a[m].childNodes, g ? g.transclude : b), l.push(g), l.push(h), k = k || g || h;
                    return k ? f : null
                }

                function D(a, b, c, d) {
                    var e, f, h = a.nodeType,
                        j = c.$attr;
                    switch (h) {
                        case 1:
                            F(b, Fb(Xc(a).toLowerCase()), "E", d);
                            for (var k, l, m, n, o = a.attributes, p = 0, q = o && o.length; q > p; p++) k = o[p], k.specified && (l = k.name, m = Fb(l.toLowerCase()), j[m] = l, c[m] = n = B(Yc && "href" == l ? decodeURIComponent(a.getAttribute(l, 2)) : k.value), sb(a, m) && (c[m] = !0), N(a, b, n, m), F(b, m, "A", d));
                            if (f = a.className, t(f) && "" !== f)
                                for (; e = i.exec(f);) m = Fb(e[2]), F(b, m, "C", d) && (c[m] = B(e[3])), f = f.substr(e.index + e[0].length);
                            break;
                        case 3:
                            L(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                e = g.exec(a.nodeValue), e && (m = Fb(e[1]), F(b, m, "M", d) && (c[m] = B(e[2])))
                            } catch (r) {}
                    }
                    return b.sort(J), b
                }

                function E(a, d, f, g, h) {
                    function i(a, b) {
                        a && (a.require = n.require, F.push(a)), b && (b.require = n.require, J.push(b))
                    }

                    function k(a, b) {
                        var c, d = "data",
                            f = !1;
                        if (t(a)) {
                            for (;
                                "^" == (c = a.charAt(0)) || "?" == c;) a = a.substr(1), "^" == c && (d = "inheritedData"), f = f || "?" == c;
                            if (c = b[d]("$" + a + "Controller"), !c && !f) throw Error("No controller: " + a);
                            return c
                        }
                        return w(a) && (c = [], e(a, function(a) {
                            c.push(k(a, b))
                        })), c
                    }

                    function l(a, b, g, h, i) {
                        var j, l, n, o, p, q;
                        if (j = d === g ? f : I(f, new P(Uc(g), f.$attr)), l = j.$$element, M) {
                            var s = /^\s*([@=&])\s*(\w*)\s*$/,
                                t = b.$parent || b;
                            e(M.scope, function(a, c) {
                                var d, e, f, g = a.match(s) || [],
                                    h = g[2] || c,
                                    i = g[1];
                                switch (b.$$isolateBindings[c] = i + h, i) {
                                    case "@":
                                        j.$observe(h, function(a) {
                                            b[c] = a
                                        }), j.$$observers[h].$$scope = t;
                                        break;
                                    case "=":
                                        e = r(j[h]), f = e.assign || function() {
                                            throw d = b[c] = e(t), Error(sd + j[h] + " (directive: " + M.name + ")")
                                        }, d = b[c] = e(t), b.$watch(function() {
                                            var a = e(t);
                                            return a !== b[c] && (a !== d ? d = b[c] = a : f(t, a = d = b[c])), a
                                        });
                                        break;
                                    case "&":
                                        e = r(j[h]), b[c] = function(a) {
                                            return e(t, a)
                                        };
                                        break;
                                    default:
                                        throw Error("Invalid isolate scope definition for directive " + M.name + ": " + a)
                                }
                            })
                        }
                        for (v && e(v, function(a) {
                                var c = {
                                    $scope: b,
                                    $element: l,
                                    $attrs: j,
                                    $transclude: i
                                };
                                q = a.controller, "@" == q && (q = j[a.name]), l.data("$" + a.name + "Controller", u(q, c))
                            }), n = 0, o = F.length; o > n; n++) try {
                            p = F[n], p(b, l, j, p.require && k(p.require, l))
                        } catch (w) {
                            m(w, R(l))
                        }
                        for (a && a(b, g.childNodes, c, i), n = 0, o = J.length; o > n; n++) try {
                            p = J[n], p(b, l, j, p.require && k(p.require, l))
                        } catch (w) {
                            m(w, R(l))
                        }
                    }
                    for (var n, o, p, q, v, y, C, E = -Number.MAX_VALUE, F = [], J = [], L = null, M = null, N = null, Q = f.$$element = Uc(d), S = g, T = 0, V = a.length; V > T && (n = a[T], p = c, !(E > n.priority)); T++) {
                        if ((C = n.scope) && (K("isolated scope", M, n, Q), s(C) && (A(Q, "ng-isolate-scope"), M = n), A(Q, "ng-scope"), L = L || n), o = n.name, (C = n.controller) && (v = v || {}, K("'" + o + "' controller", v[o], n, Q), v[o] = n), (C = n.transclude) && (K("transclusion", q, n, Q), q = n, E = n.priority, "element" == C ? (p = Uc(d), Q = f.$$element = Uc(b.createComment(" " + o + ": " + f[o] + " ")), d = Q[0], O(h, Uc(p[0]), d), S = z(p, g, E)) : (p = Uc(gb(d)).contents(), Q.html(""), S = z(p, g))), C = n.template)
                            if (K("template", N, n, Q), N = n, C = U(C), n.replace) {
                                if (p = Uc("<div>" + B(C) + "</div>").contents(), d = p[0], 1 != p.length || 1 !== d.nodeType) throw new Error(j + C);
                                O(h, Q, d);
                                var W = {
                                    $attr: {}
                                };
                                a = a.concat(D(d, a.splice(T + 1, a.length - (T + 1)), W)), G(f, W), V = a.length
                            } else Q.html(C);
                        if (n.templateUrl) K("template", N, n, Q), N = n, l = H(a.splice(T, a.length - T), l, Q, f, h, n.replace, S), V = a.length;
                        else if (n.compile) try {
                            y = n.compile(Q, f, S), x(y) ? i(null, y) : y && i(y.pre, y.post)
                        } catch (X) {
                            m(X, R(Q))
                        }
                        n.terminal && (l.terminal = !0, E = Math.max(E, n.priority))
                    }
                    return l.scope = L && L.scope, l.transclude = q && S, l
                }

                function F(b, e, g, h) {
                    var i = !1;
                    if (d.hasOwnProperty(e))
                        for (var j, k = a.get(e + f), l = 0, n = k.length; n > l; l++) try {
                            j = k[l], (h === c || h > j.priority) && -1 != j.restrict.indexOf(g) && (b.push(j), i = !0)
                        } catch (o) {
                            m(o)
                        }
                    return i
                }

                function G(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        f = a.$$element;
                    e(a, function(d, e) {
                        "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), e(b, function(b, e) {
                        "class" == e ? (A(f, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == e ? f.attr("style", f.attr("style") + ";" + b) : "$" == e.charAt(0) || a.hasOwnProperty(e) || (a[e] = b, d[e] = c[e])
                    })
                }

                function H(a, b, c, d, e, f, g) {
                    var h, i, l = [],
                        m = c[0],
                        o = a.shift(),
                        p = k({}, o, {
                            controller: null,
                            templateUrl: null,
                            transclude: null,
                            scope: null
                        });
                    return c.html(""), n.get(o.templateUrl, {
                            cache: q
                        }).success(function(k) {
                            var n, o, q;
                            if (k = U(k), f) {
                                if (q = Uc("<div>" + B(k) + "</div>").contents(), n = q[0], 1 != q.length || 1 !== n.nodeType) throw new Error(j + k);
                                o = {
                                    $attr: {}
                                }, O(e, c, n), D(n, a, o), G(d, o)
                            } else n = m, c.html(k);
                            for (a.unshift(p), h = E(a, n, d, g), i = C(c[0].childNodes, g); l.length;) {
                                var r = l.pop(),
                                    s = l.pop(),
                                    t = l.pop(),
                                    u = l.pop(),
                                    v = n;
                                t !== m && (v = gb(n), O(s, Uc(t), v)), h(function() {
                                    b(i, u, v, e, r)
                                }, u, v, e, r)
                            }
                            l = null
                        }).error(function(a, b, c, d) {
                            throw Error("Failed to load template: " + d.url)
                        }),
                        function(a, c, d, e, f) {
                            l ? (l.push(c), l.push(d), l.push(e), l.push(f)) : h(function() {
                                b(i, c, d, e, f)
                            }, c, d, e, f)
                        }
                }

                function J(a, b) {
                    return b.priority - a.priority
                }

                function K(a, b, c, d) {
                    if (b) throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + R(d))
                }

                function L(a, b) {
                    var c = h(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: p(function(a, b) {
                            var d = b.parent(),
                                e = d.data("$binding") || [];
                            e.push(c), A(d.data("$binding", e), "ng-binding"), a.$watch(c, function(a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function N(a, b, d, e) {
                    var f = h(d, !0);
                    f && b.push({
                        priority: 100,
                        compile: p(function(a, b, d) {
                            var g = d.$$observers || (d.$$observers = {});
                            "class" === e && (f = h(d[e], !0)), d[e] = c, (g[e] || (g[e] = [])).$$inter = !0, (d.$$observers && d.$$observers[e].$$scope || a).$watch(f, function(a) {
                                d.$set(e, a)
                            })
                        })
                    })
                }

                function O(a, b, c) {
                    var d, e, f = b[0],
                        g = f.parentNode;
                    if (a)
                        for (d = 0, e = a.length; e > d; d++)
                            if (a[d] == f) {
                                a[d] = c;
                                break
                            }
                    g && g.replaceChild(c, f), c[Uc.expando] = f[Uc.expando], b[0] = c
                }
                var P = function(a, b) {
                    this.$$element = a, this.$attr = b || {}
                };
                P.prototype = {
                    $normalize: Fb,
                    $set: function(a, b, d, f) {
                        var g, h = sb(this.$$element[0], a),
                            i = this.$$observers;
                        h && (this.$$element.prop(a, b), f = h), this[a] = b, f ? this.$attr[a] = f : (f = this.$attr[a], f || (this.$attr[a] = f = Y(a, "-"))), "A" === Xc(this.$$element[0]) && "href" === a && (Q.setAttribute("href", b), g = Q.href, g.match(l) || (this[a] = b = "unsafe:" + g)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(f) : this.$$element.attr(f, b)), i && e(i[a], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                m(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        return e.push(b), v.$evalAsync(function() {
                            e.$$inter || b(c[a])
                        }), b
                    }
                };
                var Q = y[0].createElement("a"),
                    S = h.startSymbol(),
                    T = h.endSymbol(),
                    U = "{{" == S || "}}" == T ? o : function(a) {
                        return a.replace(/\{\{/g, S).replace(/}}/g, T)
                    };
                return z
            }]
        }

        function Fb(a) {
            return db(a.replace(td, ""))
        }

        function Gb() {
            var a = {};
            this.register = function(b, c) {
                s(b) ? k(a, b) : a[b] = c
            }, this.$get = ["$injector", "$window", function(b, c) {
                return function(d, e) {
                    if (t(d)) {
                        var f = d;
                        d = a.hasOwnProperty(f) ? a[f] : $b(e.$scope, f, !0) || $b(c, f, !0), _(d, f, !0)
                    }
                    return b.instantiate(d, e)
                }
            }]
        }

        function Hb() {
            this.$get = ["$window", function(a) {
                return Uc(a.document)
            }]
        }

        function Ib() {
            this.$get = ["$log", function(a) {
                return function() {
                    a.error.apply(a, arguments)
                }
            }]
        }

        function Jb() {
            var a = "{{",
                b = "}}";
            this.startSymbol = function(b) {
                return b ? (a = b, this) : a
            }, this.endSymbol = function(a) {
                return a ? (b = a, this) : b
            }, this.$get = ["$parse", function(d) {
                function e(e, h) {
                    for (var i, j, k, l, m = 0, n = [], o = e.length, p = !1, q = []; o > m;) - 1 != (i = e.indexOf(a, m)) && -1 != (j = e.indexOf(b, i + f)) ? (m != i && n.push(e.substring(m, i)), n.push(k = d(l = e.substring(i + f, j))), k.exp = l, m = j + g, p = !0) : (m != o && n.push(e.substring(m)), m = o);
                    return (o = n.length) || (n.push(""), o = 1), !h || p ? (q.length = o, k = function(a) {
                        for (var b, d = 0, e = o; e > d; d++) "function" == typeof(b = n[d]) && (b = b(a), null == b || b == c ? b = "" : "string" != typeof b && (b = O(b))), q[d] = b;
                        return q.join("")
                    }, k.exp = e, k.parts = n, k) : void 0
                }
                var f = a.length,
                    g = b.length;
                return e.startSymbol = function() {
                    return a
                }, e.endSymbol = function() {
                    return b
                }, e
            }]
        }

        function Kb(a) {
            for (var b = a.split("/"), c = b.length; c--;) b[c] = U(b[c]);
            return b.join("/")
        }

        function Lb(a, b) {
            var c = ud.exec(a);
            return c = {
                protocol: c[1],
                host: c[3],
                port: l(c[5]) || xd[c[1]] || null,
                path: c[6] || "/",
                search: c[8],
                hash: c[10]
            }, b && (b.$$protocol = c.protocol, b.$$host = c.host, b.$$port = c.port), c
        }

        function Mb(a, b, c) {
            return a + "://" + b + (c == xd[a] ? "" : ":" + c)
        }

        function Nb(a) {
            return a.substr(0, a.lastIndexOf("/"))
        }

        function Ob(a, b, c) {
            var d = Lb(a);
            return decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c) ? a : Mb(d.protocol, d.host, d.port) + Nb(b) + d.hash.substr(c.length)
        }

        function Pb(a, b, c) {
            var d = Lb(a);
            if (decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c)) {
                var e = d.search && "?" + d.search || "",
                    f = d.hash && "#" + d.hash || "",
                    g = Nb(b),
                    h = d.path.substr(g.length);
                if (0 !== d.path.indexOf(g)) throw Error('Invalid url "' + a + '", missing path prefix "' + g + '" !');
                return Mb(d.protocol, d.host, d.port) + b + "#" + c + h + e + f
            }
            return a
        }

        function Qb(a, b, c) {
            b = b || "", this.$$parse = function(a) {
                var c = Lb(a, this);
                if (0 !== c.path.indexOf(b)) throw Error('Invalid url "' + a + '", missing path prefix "' + b + '" !');
                this.$$path = decodeURIComponent(c.path.substr(b.length)), this.$$search = S(c.search), this.$$hash = c.hash && decodeURIComponent(c.hash) || "", this.$$compose()
            }, this.$$compose = function() {
                var a = T(this.$$search),
                    c = this.$$hash ? "#" + U(this.$$hash) : "";
                this.$$url = Kb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Mb(this.$$protocol, this.$$host, this.$$port) + b + this.$$url
            }, this.$$rewriteAppUrl = function(a) {
                return 0 == a.indexOf(c) ? a : void 0
            }, this.$$parse(a)
        }

        function Rb(a, b, c) {
            var d;
            this.$$parse = function(a) {
                var c = Lb(a, this);
                if (c.hash && 0 !== c.hash.indexOf(b)) throw Error('Invalid url "' + a + '", missing hash prefix "' + b + '" !');
                d = c.path + (c.search ? "?" + c.search : ""), c = wd.exec((c.hash || "").substr(b.length)), this.$$path = c[1] ? ("/" == c[1].charAt(0) ? "" : "/") + decodeURIComponent(c[1]) : "", this.$$search = S(c[3]), this.$$hash = c[5] && decodeURIComponent(c[5]) || "", this.$$compose()
            }, this.$$compose = function() {
                var a = T(this.$$search),
                    c = this.$$hash ? "#" + U(this.$$hash) : "";
                this.$$url = Kb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = Mb(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + b + this.$$url : "")
            }, this.$$rewriteAppUrl = function(a) {
                return 0 == a.indexOf(c) ? a : void 0
            }, this.$$parse(a)
        }

        function Sb(a, b, c, d) {
            Rb.apply(this, arguments), this.$$rewriteAppUrl = function(a) {
                return 0 == a.indexOf(c) ? c + d + "#" + b + a.substr(c.length) : void 0
            }
        }

        function Tb(a) {
            return function() {
                return this[a]
            }
        }

        function Ub(a, b) {
            return function(c) {
                return q(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
            }
        }

        function Vb() {
            var b = "",
                c = !1;
            this.hashPrefix = function(a) {
                return r(a) ? (b = a, this) : b
            }, this.html5Mode = function(a) {
                return r(a) ? (c = a, this) : c
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
                function h(a) {
                    d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
                }
                var i, j, k, l, m = e.url(),
                    n = Lb(m);
                c ? (j = e.baseHref() || "/", k = Nb(j), l = Mb(n.protocol, n.host, n.port) + k + "/", i = f.history ? new Qb(Ob(m, j, b), k, l) : new Sb(Pb(m, j, b), b, l, j.substr(k.length + 1))) : (l = Mb(n.protocol, n.host, n.port) + (n.path || "") + (n.search ? "?" + n.search : "") + "#" + b + "/", i = new Rb(m, b, l)), g.bind("click", function(b) {
                    if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                        for (var c = Uc(b.target);
                            "a" !== Qc(c[0].nodeName);)
                            if (c[0] === g[0] || !(c = c.parent())[0]) return;
                        var e = c.prop("href"),
                            f = i.$$rewriteAppUrl(e);
                        e && !c.attr("target") && f && (i.$$parse(f), d.$apply(), b.preventDefault(), a.angular["ff-684208-preventDefault"] = !0)
                    }
                }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
                    if (i.absUrl() != a) {
                        if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented) return e.url(i.absUrl()), void 0;
                        d.$evalAsync(function() {
                            var b = i.absUrl();
                            i.$$parse(a), h(b)
                        }), d.$$phase || d.$digest()
                    }
                });
                var o = 0;
                return d.$watch(function() {
                    var a = e.url(),
                        b = i.$$replace;
                    return o && a == i.absUrl() || (o++, d.$evalAsync(function() {
                        d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                    })), i.$$replace = !1, o
                }), i
            }]
        }

        function Wb() {
            this.$get = ["$window", function(a) {
                function b(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function c(c) {
                    var d = a.console || {},
                        f = d[c] || d.log || n;
                    return f.apply ? function() {
                        var a = [];
                        return e(arguments, function(c) {
                            a.push(b(c))
                        }), f.apply(d, a)
                    } : function(a, b) {
                        f(a, b)
                    }
                }
                return {
                    log: c("log"),
                    warn: c("warn"),
                    info: c("info"),
                    error: c("error")
                }
            }]
        }

        function Xb(a, b) {
            function c(a) {
                return -1 != a.indexOf(p)
            }

            function d(a) {
                return -1 != a.indexOf(u)
            }

            function e() {
                return s + 1 < a.length ? a.charAt(s + 1) : !1
            }

            function f(a) {
                return a >= "0" && "9" >= a
            }

            function g(a) {
                return " " == a || "\r" == a || "	" == a || "\n" == a || "" == a || " " == a
            }

            function h(a) {
                return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" == a || "$" == a
            }

            function i(a) {
                return "-" == a || "+" == a || f(a)
            }

            function j(b, c, d) {
                throw d = d || s, Error("Lexer Error: " + b + " at column" + (r(c) ? "s " + c + "-" + s + " [" + a.substring(c, d) + "]" : " " + d) + " in expression [" + a + "].")
            }

            function l() {
                for (var b = "", c = s; s < a.length;) {
                    var d = Qc(a.charAt(s));
                    if ("." == d || f(d)) b += d;
                    else {
                        var g = e();
                        if ("e" == d && i(g)) b += d;
                        else if (i(d) && g && f(g) && "e" == b.charAt(b.length - 1)) b += d;
                        else {
                            if (!i(d) || g && f(g) || "e" != b.charAt(b.length - 1)) break;
                            j("Invalid exponent")
                        }
                    }
                    s++
                }
                b = 1 * b, q.push({
                    index: c,
                    text: b,
                    json: !0,
                    fn: function() {
                        return b
                    }
                })
            }

            function m() {
                for (var c, d, e, i, j = "", l = s; s < a.length && (i = a.charAt(s), "." == i || h(i) || f(i));) "." == i && (c = s), j += i, s++;
                if (c)
                    for (d = s; d < a.length;) {
                        if (i = a.charAt(d), "(" == i) {
                            e = j.substr(c - l + 1), j = j.substr(0, c - l), s = d;
                            break
                        }
                        if (!g(i)) break;
                        d++
                    }
                var m = {
                    index: l,
                    text: j
                };
                if (yd.hasOwnProperty(j)) m.fn = m.json = yd[j];
                else {
                    var n = ac(j, b);
                    m.fn = k(function(a, b) {
                        return n(a, b)
                    }, {
                        assign: function(a, b) {
                            return Zb(a, j, b)
                        }
                    })
                }
                q.push(m), e && (q.push({
                    index: c,
                    text: ".",
                    json: !1
                }), q.push({
                    index: c + 1,
                    text: e,
                    json: !1
                }))
            }

            function n(b) {
                var c = s;
                s++;
                for (var d = "", e = b, f = !1; s < a.length;) {
                    var g = a.charAt(s);
                    if (e += g, f) {
                        if ("u" == g) {
                            var h = a.substring(s + 1, s + 5);
                            h.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + h + "]"), s += 4, d += String.fromCharCode(parseInt(h, 16))
                        } else {
                            var i = zd[g];
                            d += i ? i : g
                        }
                        f = !1
                    } else if ("\\" == g) f = !0;
                    else {
                        if (g == b) return s++, q.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        }), void 0;
                        d += g
                    }
                    s++
                }
                j("Unterminated quote", c)
            }
            for (var o, p, q = [], s = 0, t = [], u = ":"; s < a.length;) {
                if (p = a.charAt(s), c("\"'")) n(p);
                else if (f(p) || c(".") && f(e())) l();
                else if (h(p)) m(), d("{,") && "{" == t[0] && (o = q[q.length - 1]) && (o.json = -1 == o.text.indexOf("."));
                else if (c("(){}[].,;:")) q.push({
                    index: s,
                    text: p,
                    json: d(":[,") && c("{[") || c("}]:,")
                }), c("{[") && t.unshift(p), c("}]") && t.shift(), s++;
                else {
                    if (g(p)) {
                        s++;
                        continue
                    }
                    var v = p + e(),
                        w = yd[p],
                        x = yd[v];
                    x ? (q.push({
                        index: s,
                        text: v,
                        fn: x
                    }), s += 2) : w ? (q.push({
                        index: s,
                        text: p,
                        fn: w,
                        json: d("[,:") && c("+-")
                    }), s += 1) : j("Unexpected next character ", s, s + 1)
                }
                u = p
            }
            return q
        }

        function Yb(a, b, d, e) {
            function f(b, c) {
                throw Error("Syntax Error: Token '" + c.text + "' " + b + " at column " + (c.index + 1) + " of the expression [" + a + "] starting at [" + a.substring(c.index) + "].")
            }

            function g() {
                if (0 === J.length) throw Error("Unexpected end of expression: " + a);
                return J[0]
            }

            function h(a, b, c, d) {
                if (J.length > 0) {
                    var e = J[0],
                        f = e.text;
                    if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
                }
                return !1
            }

            function i(a, c, d, e) {
                var g = h(a, c, d, e);
                return g ? (b && !g.json && f("is not valid json", g), J.shift(), g) : !1
            }

            function j(a) {
                i(a) || f("is unexpected, expecting [" + a + "]", h())
            }

            function l(a, b) {
                return function(c, d) {
                    return a(c, d, b)
                }
            }

            function m(a, b, c) {
                return function(d, e) {
                    return b(d, e, a, c)
                }
            }

            function o() {
                for (var a = [];;)
                    if (J.length > 0 && !h("}", ")", ";", "]") && a.push(O()), !i(";")) return 1 == a.length ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f = a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
            }

            function q() {
                for (var a, b = s();;) {
                    if (!(a = i("|"))) return b;
                    b = m(b, a.fn, r())
                }
            }

            function r() {
                for (var a = i(), b = d(a.text), c = [];;) {
                    if (!(a = i(":"))) {
                        var e = function(a, d, e) {
                            for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                            return b.apply(a, f)
                        };
                        return function() {
                            return e
                        }
                    }
                    c.push(s())
                }
            }

            function s() {
                return K()
            }

            function t() {
                var b, c, d = u();
                return (c = i("=")) ? (d.assign || f("implies assignment but [" + a.substring(0, c.index) + "] can not be assigned to", c), b = u(), function(a, c) {
                    return d.assign(a, b(a, c), c)
                }) : d
            }

            function u() {
                for (var a, b = v();;) {
                    if (!(a = i("||"))) return b;
                    b = m(b, a.fn, v())
                }
            }

            function v() {
                var a, b = w();
                return (a = i("&&")) && (b = m(b, a.fn, v())), b
            }

            function w() {
                var a, b = x();
                return (a = i("==", "!=")) && (b = m(b, a.fn, w())), b
            }

            function x() {
                var a, b = y();
                return (a = i("<", ">", "<=", ">=")) && (b = m(b, a.fn, x())), b
            }

            function y() {
                for (var a, b = z(); a = i("+", "-");) b = m(b, a.fn, z());
                return b
            }

            function z() {
                for (var a, b = A(); a = i("*", "/", "%");) b = m(b, a.fn, A());
                return b
            }

            function A() {
                var a;
                return i("+") ? B() : (a = i("-")) ? m(I, a.fn, A()) : (a = i("!")) ? l(a.fn, A()) : B()
            }

            function B() {
                var a;
                if (i("(")) a = O(), j(")");
                else if (i("[")) a = F();
                else if (i("{")) a = G();
                else {
                    var b = i();
                    a = b.fn, a || f("not a primary expression", b)
                }
                for (var c, d; c = i("(", "[", ".");) "(" === c.text ? (a = L(a, d), d = null) : "[" === c.text ? (d = a, a = N(a)) : "." === c.text ? (d = a, a = M(a)) : f("IMPOSSIBLE");
                return a
            }

            function C(a) {
                var b = i().text,
                    c = ac(b, e);
                return k(function(b, d, e) {
                    return c(e || a(b, d), d)
                }, {
                    assign: function(c, d, e) {
                        return Zb(a(c, e), b, d)
                    }
                })
            }

            function D(a) {
                var b = s();
                return j("]"), k(function(d, e) {
                    var f, g, h = a(d, e),
                        i = b(d, e);
                    return h ? (f = h[i], f && f.then && (g = f, "$$v" in f || (g.$$v = c, g.then(function(a) {
                        g.$$v = a
                    })), f = f.$$v), f) : c
                }, {
                    assign: function(c, d, e) {
                        return a(c, e)[b(c, e)] = d
                    }
                })
            }

            function E(a, b) {
                var c = [];
                if (")" != g().text)
                    do c.push(s()); while (i(","));
                return j(")"),
                    function(d, e) {
                        for (var f = [], g = b ? b(d, e) : d, h = 0; h < c.length; h++) f.push(c[h](d, e));
                        var i = a(d, e, g) || n;
                        return i.apply ? i.apply(g, f) : i(f[0], f[1], f[2], f[3], f[4])
                    }
            }

            function F() {
                var a = [];
                if ("]" != g().text)
                    do a.push(s()); while (i(","));
                return j("]"),
                    function(b, c) {
                        for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                        return d
                    }
            }

            function G() {
                var a = [];
                if ("}" != g().text)
                    do {
                        var b = i(),
                            c = b.string || b.text;
                        j(":");
                        var d = s();
                        a.push({
                            key: c,
                            value: d
                        })
                    } while (i(","));
                return j("}"),
                    function(b, c) {
                        for (var d = {}, e = 0; e < a.length; e++) {
                            var f = a[e];
                            d[f.key] = f.value(b, c)
                        }
                        return d
                    }
            }
            var H, I = p(0),
                J = Xb(a, e),
                K = t,
                L = E,
                M = C,
                N = D,
                O = q;
            return b ? (K = u, L = M = N = O = function() {
                f("is not valid json", {
                    text: a,
                    index: 0
                })
            }, H = B()) : H = o(), 0 !== J.length && f("is an unexpected token", J[0]), H
        }

        function Zb(a, b, c) {
            for (var d = b.split("."), e = 0; d.length > 1; e++) {
                var f = d.shift(),
                    g = a[f];
                g || (g = {}, a[f] = g), a = g
            }
            return a[d.shift()] = c, c
        }

        function $b(a, b, c) {
            if (!b) return a;
            for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
            return !c && x(a) ? M(f, a) : a
        }

        function _b(a, b, d, e, f) {
            return function(g, h) {
                var i, j = h && h.hasOwnProperty(a) ? h : g;
                return null === j || j === c ? j : (j = j[a], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function(a) {
                    i.$$v = a
                })), j = j.$$v), b && null !== j && j !== c ? (j = j[b], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function(a) {
                    i.$$v = a
                })), j = j.$$v), d && null !== j && j !== c ? (j = j[d], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function(a) {
                    i.$$v = a
                })), j = j.$$v), e && null !== j && j !== c ? (j = j[e], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function(a) {
                    i.$$v = a
                })), j = j.$$v), f && null !== j && j !== c ? (j = j[f], j && j.then && ("$$v" in j || (i = j, i.$$v = c, i.then(function(a) {
                    i.$$v = a
                })), j = j.$$v), j) : j) : j) : j) : j)
            }
        }

        function ac(a, b) {
            if (Ad.hasOwnProperty(a)) return Ad[a];
            var d, f = a.split("."),
                g = f.length;
            if (b) d = 6 > g ? _b(f[0], f[1], f[2], f[3], f[4]) : function(a, b) {
                var d, e = 0;
                do d = _b(f[e++], f[e++], f[e++], f[e++], f[e++])(a, b), b = c, a = d; while (g > e);
                return d
            };
            else {
                var h = "var l, fn, p;\n";
                e(f, function(a, b) {
                    h += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"]' + ";\n" + "if (s && s.then) {\n" + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n"
                }), h += "return s;", d = Function("s", "k", h), d.toString = function() {
                    return h
                }
            }
            return Ad[a] = d
        }

        function bc() {
            var a = {};
            this.$get = ["$filter", "$sniffer", function(b, c) {
                return function(d) {
                    switch (typeof d) {
                        case "string":
                            return a.hasOwnProperty(d) ? a[d] : a[d] = Yb(d, !1, b, c.csp);
                        case "function":
                            return d;
                        default:
                            return n
                    }
                }
            }]
        }

        function cc() {
            this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
                return dc(function(b) {
                    a.$evalAsync(b)
                }, b)
            }]
        }

        function dc(a, b) {
            function d(a) {
                return a
            }

            function f(a) {
                return j(a)
            }

            function g(a) {
                var b = h(),
                    c = a.length,
                    d = [];
                return c ? e(a, function(a, e) {
                    i(a).then(function(a) {
                        e in d || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        e in d || b.reject(a)
                    })
                }) : b.resolve(d), b.promise
            }
            var h = function() {
                    var e, g, k = [];
                    return g = {
                        resolve: function(b) {
                            if (k) {
                                var d = k;
                                k = c, e = i(b), d.length && a(function() {
                                    for (var a, b = 0, c = d.length; c > b; b++) a = d[b], e.then(a[0], a[1])
                                })
                            }
                        },
                        reject: function(a) {
                            g.resolve(j(a))
                        },
                        promise: {
                            then: function(a, c) {
                                var g = h(),
                                    i = function(c) {
                                        try {
                                            g.resolve((a || d)(c))
                                        } catch (e) {
                                            b(e), g.reject(e)
                                        }
                                    },
                                    j = function(a) {
                                        try {
                                            g.resolve((c || f)(a))
                                        } catch (d) {
                                            b(d), g.reject(d)
                                        }
                                    };
                                return k ? k.push([i, j]) : e.then(i, j), g.promise
                            }
                        }
                    }
                },
                i = function(b) {
                    return b && b.then ? b : {
                        then: function(c) {
                            var d = h();
                            return a(function() {
                                d.resolve(c(b))
                            }), d.promise
                        }
                    }
                },
                j = function(b) {
                    return {
                        then: function(c, d) {
                            var e = h();
                            return a(function() {
                                e.resolve((d || f)(b))
                            }), e.promise
                        }
                    }
                },
                k = function(c, e, g) {
                    var k, l = h(),
                        m = function(a) {
                            try {
                                return (e || d)(a)
                            } catch (c) {
                                return b(c), j(c)
                            }
                        },
                        n = function(a) {
                            try {
                                return (g || f)(a)
                            } catch (c) {
                                return b(c), j(c)
                            }
                        };
                    return a(function() {
                        i(c).then(function(a) {
                            k || (k = !0, l.resolve(i(a).then(m, n)))
                        }, function(a) {
                            k || (k = !0, l.resolve(n(a)))
                        })
                    }), l.promise
                };
            return {
                defer: h,
                reject: j,
                when: k,
                all: g
            }
        }

        function ec() {
            var a = {};
            this.when = function(b, c) {
                if (a[b] = k({
                        reloadOnSearch: !0
                    }, c), b) {
                    var d = "/" == b[b.length - 1] ? b.substr(0, b.length - 1) : b + "/";
                    a[d] = {
                        redirectTo: b
                    }
                }
                return this
            }, this.otherwise = function(a) {
                return this.when(null, a), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(b, c, d, f, g, h, i) {
                function j(a, b) {
                    b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                    for (var c, d = "", f = [], g = {}, h = /:(\w+)/g, i = 0; null !== (c = h.exec(b));) d += b.slice(i, c.index), d += "([^\\/]*)", f.push(c[1]), i = h.lastIndex;
                    d += b.substr(i);
                    var j = a.match(new RegExp(d));
                    return j && e(f, function(a, b) {
                        g[a] = j[b + 1]
                    }), j ? g : null
                }

                function l() {
                    var a = n(),
                        j = q.current;
                    a && j && a.$$route === j.$$route && J(a.pathParams, j.pathParams) && !a.reloadOnSearch && !p ? (j.params = a.params, H(j.params, d), b.$broadcast("$routeUpdate", j)) : (a || j) && (p = !1, b.$broadcast("$routeChangeStart", a, j), q.current = a, a && a.redirectTo && (t(a.redirectTo) ? c.path(o(a.redirectTo, a.params)).search(a.params).replace() : c.url(a.redirectTo(a.pathParams, c.path(), c.search())).replace()), f.when(a).then(function() {
                        if (a) {
                            var b, c = [],
                                d = [];
                            return e(a.resolve || {}, function(a, b) {
                                c.push(b), d.push(t(a) ? g.get(a) : g.invoke(a))
                            }), r(b = a.template) || r(b = a.templateUrl) && (b = h.get(b, {
                                cache: i
                            }).then(function(a) {
                                return a.data
                            })), r(b) && (c.push("$template"), d.push(b)), f.all(d).then(function(a) {
                                var b = {};
                                return e(a, function(a, d) {
                                    b[c[d]] = a
                                }), b
                            })
                        }
                    }).then(function(c) {
                        a == q.current && (a && (a.locals = c, H(a.params, d)), b.$broadcast("$routeChangeSuccess", a, j))
                    }, function(c) {
                        a == q.current && b.$broadcast("$routeChangeError", a, j, c)
                    }))
                }

                function n() {
                    var b, d;
                    return e(a, function(a, e) {
                        !d && (b = j(c.path(), e)) && (d = m(a, {
                            params: k({}, c.search(), b),
                            pathParams: b
                        }), d.$$route = a)
                    }), d || a[null] && m(a[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function o(a, b) {
                    var c = [];
                    return e((a || "").split(":"), function(a, d) {
                        if (0 == d) c.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            c.push(b[f]), c.push(e[2] || ""), delete b[f]
                        }
                    }), c.join("")
                }
                var p = !1,
                    q = {
                        routes: a,
                        reload: function() {
                            p = !0, b.$evalAsync(l)
                        }
                    };
                return b.$on("$locationChangeSuccess", l), q
            }]
        }

        function fc() {
            this.$get = p({})
        }

        function gc() {
            var a = 10;
            this.digestTtl = function(b) {
                return arguments.length && (a = b), a
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", function(b, c, d) {
                function e() {
                    this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
                }

                function f(a) {
                    if (k.$$phase) throw Error(k.$$phase + " already in progress");
                    k.$$phase = a
                }

                function g() {
                    k.$$phase = null
                }

                function h(a, b) {
                    var c = d(a);
                    return _(c, b), c
                }

                function j() {}
                e.prototype = {
                    $new: function(a) {
                        var b, c;
                        if (x(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                        return a ? (c = new e, c.$root = this.$root) : (b = function() {}, b.prototype = this, c = new b, c.$id = i()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$asyncQueue = [], c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
                    },
                    $watch: function(a, b, c) {
                        var d = this,
                            e = h(a, "watch"),
                            f = d.$$watchers,
                            g = {
                                fn: b,
                                last: j,
                                get: e,
                                exp: a,
                                eq: !!c
                            };
                        if (!x(b)) {
                            var i = h(b || n, "listener");
                            g.fn = function(a, b, c) {
                                i(c)
                            }
                        }
                        return f || (f = d.$$watchers = []), f.unshift(g),
                            function() {
                                G(f, g)
                            }
                    },
                    $digest: function() {
                        var b, d, e, h, i, k, l, m, n, o, p, q = a,
                            r = this,
                            s = [];
                        f("$digest");
                        do {
                            l = !1, n = r;
                            do {
                                for (i = n.$$asyncQueue; i.length;) try {
                                    n.$eval(i.shift())
                                } catch (t) {
                                    c(t)
                                }
                                if (h = n.$$watchers)
                                    for (k = h.length; k--;) try {
                                        b = h[k], (d = b.get(n)) === (e = b.last) || (b.eq ? J(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e)) || (l = !0, b.last = b.eq ? H(d) : d, b.fn(d, e === j ? d : e, n), 5 > q && (o = 4 - q, s[o] || (s[o] = []), p = x(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp, p += "; newVal: " + O(d) + "; oldVal: " + O(e), s[o].push(p)))
                                    } catch (t) {
                                        c(t)
                                    }
                                if (!(m = n.$$childHead || n !== r && n.$$nextSibling))
                                    for (; n !== r && !(m = n.$$nextSibling);) n = n.$parent
                            } while (n = m);
                            if (l && !q--) throw g(), Error(a + " $digest() iterations reached. Aborting!\n" + "Watchers fired in the last 5 iterations: " + O(s))
                        } while (l || i.length);
                        g()
                    },
                    $destroy: function() {
                        if (k != this && !this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                        }
                    },
                    $eval: function(a, b) {
                        return d(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        this.$$asyncQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return f("$apply"), this.$eval(a)
                        } catch (b) {
                            c(b)
                        } finally {
                            g();
                            try {
                                k.$digest()
                            } catch (b) {
                                throw c(b), b
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        return c || (this.$$listeners[a] = c = []), c.push(b),
                            function() {
                                c[F(c, b)] = null
                            }
                    },
                    $emit: function(a) {
                        var b, d, e, f = [],
                            g = this,
                            h = !1,
                            i = {
                                name: a,
                                targetScope: g,
                                stopPropagation: function() {
                                    h = !0
                                },
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = K([i], arguments, 1);
                        do {
                            for (b = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = b.length; e > d; d++)
                                if (b[d]) try {
                                    if (b[d].apply(null, j), h) return i
                                } catch (k) {
                                    c(k)
                                } else b.splice(d, 1), d--, e--;
                            g = g.$parent
                        } while (g);
                        return i
                    },
                    $broadcast: function(a) {
                        var b, d, e, f = this,
                            g = f,
                            h = f,
                            i = {
                                name: a,
                                targetScope: f,
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = K([i], arguments, 1);
                        do {
                            for (g = h, i.currentScope = g, b = g.$$listeners[a] || [], d = 0, e = b.length; e > d; d++)
                                if (b[d]) try {
                                    b[d].apply(null, j)
                                } catch (k) {
                                    c(k)
                                } else b.splice(d, 1), d--, e--;
                            if (!(h = g.$$childHead || g !== f && g.$$nextSibling))
                                for (; g !== f && !(h = g.$$nextSibling);) g = g.$parent
                        } while (g = h);
                        return i
                    }
                };
                var k = new e;
                return k
            }]
        }

        function hc() {
            this.$get = ["$window", function(a) {
                var b = {},
                    c = l((/android (\d+)/.exec(Qc(a.navigator.userAgent)) || [])[1]);
                return {
                    history: !(!a.history || !a.history.pushState || 4 > c),
                    hashchange: "onhashchange" in a && (!a.document.documentMode || a.document.documentMode > 7),
                    hasEvent: function(c) {
                        if ("input" == c && 9 == Yc) return !1;
                        if (q(b[c])) {
                            var d = a.document.createElement("div");
                            b[c] = "on" + c in d
                        }
                        return b[c]
                    },
                    csp: !1
                }
            }]
        }

        function ic() {
            this.$get = p(a)
        }

        function jc(a) {
            var b, c, d, f = {};
            return a ? (e(a.split("\n"), function(a) {
                d = a.indexOf(":"), b = Qc(B(a.substr(0, d))), c = B(a.substr(d + 1)), b && (f[b] ? f[b] += ", " + c : f[b] = c)
            }), f) : f
        }

        function kc(a) {
            var b = s(a) ? a : c;
            return function(c) {
                return b || (b = jc(a)), c ? b[Qc(c)] || null : b
            }
        }

        function lc(a, b, c) {
            return x(c) ? c(a, b) : (e(c, function(c) {
                a = c(a, b)
            }), a)
        }

        function mc(a) {
            return a >= 200 && 300 > a
        }

        function nc() {
            var a = /^\s*(\[|\{[^\{])/,
                b = /[\}\]]\s*$/,
                d = /^\)\]\}',?\n/,
                f = this.defaults = {
                    transformResponse: [function(c) {
                        return t(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = P(c, !0))), c
                    }],
                    transformRequest: [function(a) {
                        return s(a) && !A(a) ? O(a) : a
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        post: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        put: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    }
                },
                h = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, i, j, l) {
                function m(a) {
                    function c(a) {
                        var b = k({}, a, {
                            data: lc(a.data, a.headers, h)
                        });
                        return mc(a.status) ? b : j.reject(b)
                    }
                    a.method = Rc(a.method);
                    var d, g = a.transformRequest || f.transformRequest,
                        h = a.transformResponse || f.transformResponse,
                        i = f.headers,
                        l = k({
                            "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                        }, i.common, i[Qc(a.method)], a.headers),
                        m = lc(a.data, kc(l), g);
                    return q(a.data) && delete l["Content-Type"], d = p(a, m, l), d = d.then(c, c), e(v, function(a) {
                        d = a(d)
                    }), d.success = function(b) {
                        return d.then(function(c) {
                            b(c.data, c.status, c.headers, a)
                        }), d
                    }, d.error = function(b) {
                        return d.then(null, function(c) {
                            b(c.data, c.status, c.headers, a)
                        }), d
                    }, d
                }

                function n() {
                    e(arguments, function(a) {
                        m[a] = function(b, c) {
                            return m(k(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }

                function o() {
                    e(arguments, function(a) {
                        m[a] = function(b, c, d) {
                            return m(k(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }

                function p(b, c, d) {
                    function e(a, b, c) {
                        h && (mc(a) ? h.put(o, [a, b, jc(c)]) : h.remove(o)), f(b, a, c), i.$apply()
                    }

                    function f(a, c, d) {
                        c = Math.max(c, 0), (mc(c) ? l.resolve : l.reject)({
                            data: a,
                            status: c,
                            headers: kc(d),
                            config: b
                        })
                    }

                    function g() {
                        var a = F(m.pendingRequests, b); - 1 !== a && m.pendingRequests.splice(a, 1)
                    }
                    var h, k, l = j.defer(),
                        n = l.promise,
                        o = r(b.url, b.params);
                    if (m.pendingRequests.push(b), n.then(g, g), b.cache && "GET" == b.method && (h = s(b.cache) ? b.cache : u), h)
                        if (k = h.get(o)) {
                            if (k.then) return k.then(g, g), k;
                            w(k) ? f(k[1], k[0], H(k[2])) : f(k, 200, {})
                        } else h.put(o, n);
                    return k || a(b.method, o, c, e, d, b.timeout, b.withCredentials), n
                }

                function r(a, b) {
                    if (!b) return a;
                    var d = [];
                    return g(b, function(a, b) {
                        null != a && a != c && (s(a) && (a = O(a)), d.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                    }), a + (-1 == a.indexOf("?") ? "?" : "&") + d.join("&")
                }
                var u = d("$http"),
                    v = [];
                return e(h, function(a) {
                    v.push(t(a) ? l.get(a) : l.invoke(a))
                }), m.pendingRequests = [], n("get", "delete", "head", "jsonp"), o("post", "put"), m.defaults = f, m
            }]
        }

        function oc() {
            this.$get = ["$browser", "$window", "$document", function(a, b, c) {
                return pc(a, Bd, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""))
            }]
        }

        function pc(a, b, c, d, f, g) {
            function h(a, b) {
                var c = f.createElement("script"),
                    d = function() {
                        f.body.removeChild(c), b && b()
                    };
                c.type = "text/javascript", c.src = a, Yc ? c.onreadystatechange = function() {
                    /loaded|complete/.test(c.readyState) && d()
                } : c.onload = c.onerror = d, f.body.appendChild(c)
            }
            return function(f, i, j, k, l, m, o) {
                function p(b, c, d, e) {
                    var f = (i.match(ud) || ["", g])[1];
                    c = "file" == f ? d ? 200 : 404 : c, c = 1223 == c ? 204 : c, b(c, d, e), a.$$completeOutstandingRequest(n)
                }
                if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Qc(f)) {
                    var q = "_" + (d.counter++).toString(36);
                    d[q] = function(a) {
                        d[q].data = a
                    }, h(i.replace("JSON_CALLBACK", "angular.callbacks." + q), function() {
                        d[q].data ? p(k, 200, d[q].data) : p(k, -2), delete d[q]
                    })
                } else {
                    var r = new b;
                    r.open(f, i, !0), e(l, function(a, b) {
                        a && r.setRequestHeader(b, a)
                    });
                    var s;
                    r.onreadystatechange = function() {
                        if (4 == r.readyState) {
                            var a = r.getAllResponseHeaders(),
                                b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                            a || (a = "", e(b, function(b) {
                                var c = r.getResponseHeader(b);
                                c && (a += b + ": " + c + "\n")
                            })), p(k, s || r.status, r.responseText, a)
                        }
                    }, o && (r.withCredentials = !0), r.send(j || ""), m > 0 && c(function() {
                        s = -1, r.abort()
                    }, m)
                }
            }
        }

        function qc() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function rc() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
                function e(e, g, h) {
                    var i, j, k = c.defer(),
                        l = k.promise,
                        m = r(h) && !h;
                    return i = b.defer(function() {
                        try {
                            k.resolve(e())
                        } catch (b) {
                            k.reject(b), d(b)
                        }
                        m || a.$apply()
                    }, g), j = function() {
                        delete f[l.$$timeoutId]
                    }, l.$$timeoutId = i, f[i] = k, l.then(j, j), l
                }
                var f = {};
                return e.cancel = function(a) {
                    return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), b.defer.cancel(a.$$timeoutId)) : !1
                }, e
            }]
        }

        function sc(a) {
            function b(b, d) {
                return a.factory(b + c, d)
            }
            var c = "Filter";
            this.register = b, this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }], b("currency", uc), b("date", Cc), b("filter", tc), b("json", Dc), b("limitTo", Ec), b("lowercase", Gd), b("number", vc), b("orderBy", Fc), b("uppercase", Hd)
        }

        function tc() {
            return function(a, b) {
                if (!w(a)) return a;
                var c = [];
                c.check = function(a) {
                    for (var b = 0; b < c.length; b++)
                        if (!c[b](a)) return !1;
                    return !0
                };
                var d = function(a, b) {
                    if ("!" === b.charAt(0)) return !d(a, b.substr(1));
                    switch (typeof a) {
                        case "boolean":
                        case "number":
                        case "string":
                            return ("" + a).toLowerCase().indexOf(b) > -1;
                        case "object":
                            for (var c in a)
                                if ("$" !== c.charAt(0) && d(a[c], b)) return !0;
                            return !1;
                        case "array":
                            for (var e = 0; e < a.length; e++)
                                if (d(a[e], b)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof b) {
                    case "boolean":
                    case "number":
                    case "string":
                        b = {
                            $: b
                        };
                    case "object":
                        for (var e in b) "$" == e ? function() {
                            var a = ("" + b[e]).toLowerCase();
                            a && c.push(function(b) {
                                return d(b, a)
                            })
                        }() : function() {
                            var a = e,
                                f = ("" + b[e]).toLowerCase();
                            f && c.push(function(b) {
                                return d($b(b, a), f)
                            })
                        }();
                        break;
                    case "function":
                        c.push(b);
                        break;
                    default:
                        return a
                }
                for (var f = [], g = 0; g < a.length; g++) {
                    var h = a[g];
                    c.check(h) && f.push(h)
                }
                return f
            }
        }

        function uc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return q(c) && (c = b.CURRENCY_SYM), wc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
            }
        }

        function vc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return wc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
            }
        }

        function wc(a, b, c, d, e) {
            if (isNaN(a) || !isFinite(a)) return "";
            var f = 0 > a;
            a = Math.abs(a);
            var g = a + "",
                h = "",
                i = [],
                j = !1;
            if (-1 !== g.indexOf("e")) {
                var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
            }
            if (!j) {
                var l = (g.split(Cd)[1] || "").length;
                q(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
                var m = Math.pow(10, e);
                a = Math.round(a * m) / m;
                var n = ("" + a).split(Cd),
                    o = n[0];
                n = n[1] || "";
                var p = 0,
                    r = b.lgSize,
                    s = b.gSize;
                if (o.length >= r + s) {
                    p = o.length - r;
                    for (var t = 0; p > t; t++) 0 === (p - t) % s && 0 !== t && (h += c), h += o.charAt(t)
                }
                for (t = p; t < o.length; t++) 0 === (o.length - t) % r && 0 !== t && (h += c), h += o.charAt(t);
                for (; n.length < e;) n += "0";
                e && "0" !== e && (h += d + n.substr(0, e))
            }
            return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
        }

        function xc(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function yc(a, b, c, d) {
            return c = c || 0,
                function(e) {
                    var f = e["get" + a]();
                    return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), xc(f, b, d)
                }
        }

        function zc(a, b) {
            return function(c, d) {
                var e = c["get" + a](),
                    f = Rc(b ? "SHORT" + a : a);
                return d[f][e]
            }
        }

        function Ac(a) {
            var b = -1 * a.getTimezoneOffset(),
                c = b >= 0 ? "+" : "";
            return c += xc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + xc(Math.abs(b % 60), 2)
        }

        function Bc(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
        }

        function Cc(a) {
            function b(a) {
                var b;
                if (b = a.match(c)) {
                    var d = new Date(0),
                        e = 0,
                        f = 0;
                    return b[9] && (e = l(b[9] + b[10]), f = l(b[9] + b[11])), d.setUTCFullYear(l(b[1]), l(b[2]) - 1, l(b[3])), d.setUTCHours(l(b[4] || 0) - e, l(b[5] || 0) - f, l(b[6] || 0), l(b[7] || 0)), d
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c, d) {
                var f, g, h = "",
                    i = [];
                if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, t(c) && (c = Fd.test(c) ? l(c) : b(c)), u(c) && (c = new Date(c)), !v(c)) return c;
                for (; d;) g = Ed.exec(d), g ? (i = K(i, g, 1), d = i.pop()) : (i.push(d), d = null);
                return e(i, function(b) {
                    f = Dd[b], h += f ? f(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), h
            }
        }

        function Dc() {
            return function(a) {
                return O(a, !0)
            }
        }

        function Ec() {
            return function(a, b) {
                if (!(a instanceof Array)) return a;
                b = l(b);
                var c, d, e = [];
                if (!(a && a instanceof Array)) return e;
                for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
                return e
            }
        }

        function Fc(a) {
            return function(b, c, d) {
                function e(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                }

                function f(a, b) {
                    return Q(b) ? function(b, c) {
                        return a(c, b)
                    } : a
                }

                function g(a, b) {
                    var c = typeof a,
                        d = typeof b;
                    return c == d ? ("string" == c && (a = a.toLowerCase()), "string" == c && (b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
                }
                if (!w(b)) return b;
                if (!c) return b;
                c = w(c) ? c : [c], c = D(c, function(b) {
                    var c = !1,
                        d = b || o;
                    return t(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b)), f(function(a, b) {
                        return g(d(a), d(b))
                    }, c)
                });
                for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
                return h.sort(f(e, d))
            }
        }

        function Gc(a) {
            return x(a) && (a = {
                link: a
            }), a.restrict = a.restrict || "AC", p(a)
        }

        function Hc(a, b) {
            function c(b, c) {
                c = c ? "-" + Y(c, "-") : "", a.removeClass((b ? Ud : Td) + c).addClass((b ? Td : Ud) + c)
            }
            var d = this,
                f = a.parent().controller("form") || Kd,
                g = 0,
                h = d.$error = {};
            d.$name = b.name, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, f.$addControl(d), a.addClass(Vd), c(!0), d.$addControl = function(a) {
                a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
            }, d.$removeControl = function(a) {
                a.$name && d[a.$name] === a && delete d[a.$name], e(h, function(b, c) {
                    d.$setValidity(c, !0, a)
                })
            }, d.$setValidity = function(a, b, e) {
                var i = h[a];
                if (b) i && (G(i, e), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), f.$setValidity(a, !0, d)));
                else {
                    if (g || c(b), i) {
                        if (E(i, e)) return
                    } else h[a] = i = [], g++, c(!1, a), f.$setValidity(a, !1, d);
                    i.push(e), d.$valid = !1, d.$invalid = !0
                }
            }, d.$setDirty = function() {
                a.removeClass(Vd).addClass(Wd), d.$dirty = !0, d.$pristine = !1, f.$setDirty()
            }
        }

        function Ic(a) {
            return q(a) || "" === a || null === a || a !== a
        }

        function Jc(a, b, d, e, f, g) {
            var h = function() {
                var c = B(b.val());
                e.$viewValue !== c && a.$apply(function() {
                    e.$setViewValue(c)
                })
            };
            if (f.hasEvent("input")) b.bind("input", h);
            else {
                var i, j = function() {
                    i || (i = g.defer(function() {
                        h(), i = null
                    }))
                };
                b.bind("keydown", function(a) {
                    var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || j()
                }), b.bind("change", h), f.hasEvent("paste") && b.bind("paste cut", j)
            }
            e.$render = function() {
                b.val(Ic(e.$viewValue) ? "" : e.$viewValue)
            };
            var k, m = d.ngPattern,
                n = function(a, b) {
                    return Ic(b) || a.test(b) ? (e.$setValidity("pattern", !0), b) : (e.$setValidity("pattern", !1), c)
                };
            if (m && (m.match(/^\/(.*)\/$/) ? (m = new RegExp(m.substr(1, m.length - 2)), k = function(a) {
                    return n(m, a)
                }) : k = function(b) {
                    var c = a.$eval(m);
                    if (!c || !c.test) throw new Error("Expected " + m + " to be a RegExp but was " + c);
                    return n(c, b)
                }, e.$formatters.push(k), e.$parsers.push(k)), d.ngMinlength) {
                var o = l(d.ngMinlength),
                    p = function(a) {
                        return !Ic(a) && a.length < o ? (e.$setValidity("minlength", !1), c) : (e.$setValidity("minlength", !0), a)
                    };
                e.$parsers.push(p), e.$formatters.push(p)
            }
            if (d.ngMaxlength) {
                var q = l(d.ngMaxlength),
                    r = function(a) {
                        return !Ic(a) && a.length > q ? (e.$setValidity("maxlength", !1), c) : (e.$setValidity("maxlength", !0), a)
                    };
                e.$parsers.push(r), e.$formatters.push(r)
            }
        }

        function Kc(a, b, d, e, f, g) {
            if (Jc(a, b, d, e, f, g), e.$parsers.push(function(a) {
                    var b = Ic(a);
                    return b || Qd.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
                }), e.$formatters.push(function(a) {
                    return Ic(a) ? "" : "" + a
                }), d.min) {
                var h = parseFloat(d.min),
                    i = function(a) {
                        return !Ic(a) && h > a ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
                    };
                e.$parsers.push(i), e.$formatters.push(i)
            }
            if (d.max) {
                var j = parseFloat(d.max),
                    k = function(a) {
                        return !Ic(a) && a > j ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
                    };
                e.$parsers.push(k), e.$formatters.push(k)
            }
            e.$formatters.push(function(a) {
                return Ic(a) || u(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
            })
        }

        function Lc(a, b, d, e, f, g) {
            Jc(a, b, d, e, f, g);
            var h = function(a) {
                return Ic(a) || Od.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
            };
            e.$formatters.push(h), e.$parsers.push(h)
        }

        function Mc(a, b, d, e, f, g) {
            Jc(a, b, d, e, f, g);
            var h = function(a) {
                return Ic(a) || Pd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
            };
            e.$formatters.push(h), e.$parsers.push(h)
        }

        function Nc(a, b, c, d) {
            q(c.name) && b.attr("name", i()), b.bind("click", function() {
                b[0].checked && a.$apply(function() {
                    d.$setViewValue(c.value)
                })
            }), d.$render = function() {
                var a = c.value;
                b[0].checked = a == d.$viewValue
            }, c.$observe("value", d.$render)
        }

        function Oc(a, b, c, d) {
            var e = c.ngTrueValue,
                f = c.ngFalseValue;
            t(e) || (e = !0), t(f) || (f = !1), b.bind("click", function() {
                a.$apply(function() {
                    d.$setViewValue(b[0].checked)
                })
            }), d.$render = function() {
                b[0].checked = d.$viewValue
            }, d.$formatters.push(function(a) {
                return a === e
            }), d.$parsers.push(function(a) {
                return a ? e : f
            })
        }

        function Pc(a, b) {
            return a = "ngClass" + a, Gc(function(d, e, f) {
                function g(a) {
                    (b === !0 || d.$index % 2 === b) && (j && !J(a, j) && h(j), i(a)), j = H(a)
                }

                function h(a) {
                    s(a) && !w(a) && (a = D(a, function(a, b) {
                        return a ? b : void 0
                    })), e.removeClass(w(a) ? a.join(" ") : a)
                }

                function i(a) {
                    s(a) && !w(a) && (a = D(a, function(a, b) {
                        return a ? b : void 0
                    })), a && e.addClass(w(a) ? a.join(" ") : a)
                }
                var j = c;
                d.$watch(f[a], g, !0), f.$observe("class", function() {
                    var b = d.$eval(f[a]);
                    g(b, b)
                }), "ngClass" !== a && d.$watch("$index", function(c, e) {
                    var g = 1 & c;
                    1 & g !== e && (g === b ? i(d.$eval(f[a])) : h(d.$eval(f[a])))
                })
            })
        }
        var Qc = function(a) {
                return t(a) ? a.toLowerCase() : a
            },
            Rc = function(a) {
                return t(a) ? a.toUpperCase() : a
            },
            Sc = function(a) {
                return t(a) ? a.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(32 | a.charCodeAt(0))
                }) : a
            },
            Tc = function(a) {
                return t(a) ? a.replace(/[a-z]/g, function(a) {
                    return String.fromCharCode(-33 & a.charCodeAt(0))
                }) : a
            };
        "i" !== "I".toLowerCase() && (Qc = Sc, Rc = Tc);
        var Uc, Vc, Wc, Xc, Yc = l((/msie (\d+)/.exec(Qc(navigator.userAgent)) || [])[1]),
            Zc = [].slice,
            $c = [].push,
            _c = Object.prototype.toString,
            ad = a.angular || (a.angular = {}),
            bd = ["0", "0", "0"];
        n.$inject = [], o.$inject = [], Xc = 9 > Yc ? function(a) {
            return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? Rc(a.scopeName + ":" + a.nodeName) : a.nodeName
        } : function(a) {
            return a.nodeName ? a.nodeName : a[0].nodeName
        };
        var cd = /[A-Z]/g,
            dd = {
                full: "1.0.7",
                major: 1,
                minor: 0,
                dot: 7,
                codeName: "monochromatic-rainbow"
            },
            ed = fb.cache = {},
            fd = fb.expando = "ng-" + (new Date).getTime(),
            gd = 1,
            hd = a.document.addEventListener ? function(a, b, c) {
                a.addEventListener(b, c, !1)
            } : function(a, b, c) {
                a.attachEvent("on" + b, c)
            },
            id = a.document.removeEventListener ? function(a, b, c) {
                a.removeEventListener(b, c, !1)
            } : function(a, b, c) {
                a.detachEvent("on" + b, c)
            },
            jd = /([\:\-\_]+(.))/g,
            kd = /^moz([A-Z])/,
            ld = fb.prototype = {
                ready: function(b) {
                    function c() {
                        d || (d = !0, b())
                    }
                    var d = !1;
                    this.bind("DOMContentLoaded", c), fb(a).bind("load", c)
                },
                toString: function() {
                    var a = [];
                    return e(this, function(b) {
                        a.push("" + b)
                    }), "[" + a.join(", ") + "]"
                },
                eq: function(a) {
                    return a >= 0 ? Uc(this[a]) : Uc(this[this.length + a])
                },
                length: 0,
                push: $c,
                sort: [].sort,
                splice: [].splice
            },
            md = {};
        e("multiple,selected,checked,disabled,readOnly,required".split(","), function(a) {
            md[Qc(a)] = a
        });
        var nd = {};
        e("input,select,option,textarea,button,form".split(","), function(a) {
            nd[Rc(a)] = !0
        }), e({
            data: lb,
            inheritedData: rb,
            scope: function(a) {
                return rb(a, "$scope")
            },
            controller: qb,
            injector: function(a) {
                return rb(a, "$injector")
            },
            removeAttr: function(a, b) {
                a.removeAttribute(b)
            },
            hasClass: mb,
            css: function(a, b, d) {
                if (b = db(b), !r(d)) {
                    var e;
                    return 8 >= Yc && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= Yc && (e = "" === e ? c : e), e
                }
                a.style[b] = d
            },
            attr: function(a, b, d) {
                var e = Qc(b);
                if (md[e]) {
                    if (!r(d)) return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (r(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? c : f
                }
            },
            prop: function(a, b, c) {
                return r(c) ? (a[b] = c, void 0) : a[b]
            },
            text: k(9 > Yc ? function(a, b) {
                if (1 == a.nodeType) {
                    if (q(b)) return a.innerText;
                    a.innerText = b
                } else {
                    if (q(b)) return a.nodeValue;
                    a.nodeValue = b
                }
            } : function(a, b) {
                return q(b) ? a.textContent : (a.textContent = b, void 0)
            }, {
                $dv: ""
            }),
            val: function(a, b) {
                return q(b) ? a.value : (a.value = b, void 0)
            },
            html: function(a, b) {
                if (q(b)) return a.innerHTML;
                for (var c = 0, d = a.childNodes; c < d.length; c++) hb(d[c]);
                a.innerHTML = b
            }
        }, function(a, b) {
            fb.prototype[b] = function(b, d) {
                var e, f;
                if ((2 == a.length && a !== mb && a !== qb ? b : d) !== c) {
                    for (e = 0; e < this.length; e++) a(this[e], b, d);
                    return this
                }
                if (s(b)) {
                    for (e = 0; e < this.length; e++)
                        if (a === lb) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                return this.length ? a(this[0], b, d) : a.$dv
            }
        }), e({
            removeData: jb,
            dealoc: hb,
            bind: function Fe(a, c, d) {
                var f = kb(a, "events"),
                    g = kb(a, "handle");
                f || kb(a, "events", f = {}), g || kb(a, "handle", g = tb(a, f)), e(c.split(" "), function(c) {
                    var e = f[c];
                    if (!e) {
                        if ("mouseenter" == c || "mouseleave" == c) {
                            var h = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                                var c = 9 === a.nodeType ? a.documentElement : a,
                                    d = b && b.parentNode;
                                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                            } : function(a, b) {
                                if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a) return !0;
                                return !1
                            };
                            f[c] = [];
                            var i = {
                                mouseleave: "mouseout",
                                mouseenter: "mouseover"
                            };
                            Fe(a, i[c], function(a) {
                                var b = this,
                                    d = a.relatedTarget;
                                (!d || d !== b && !h(b, d)) && g(a, c)
                            })
                        } else hd(a, c, g), f[c] = [];
                        e = f[c]
                    }
                    e.push(d)
                })
            },
            unbind: ib,
            replaceWith: function(a, b) {
                var c, d = a.parentNode;
                hb(a), e(new fb(b), function(b) {
                    c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
                })
            },
            children: function(a) {
                var b = [];
                return e(a.childNodes, function(a) {
                    1 === a.nodeType && b.push(a)
                }), b
            },
            contents: function(a) {
                return a.childNodes || []
            },
            append: function(a, b) {
                e(new fb(b), function(b) {
                    1 === a.nodeType && a.appendChild(b)
                })
            },
            prepend: function(a, b) {
                if (1 === a.nodeType) {
                    var c = a.firstChild;
                    e(new fb(b), function(b) {
                        c ? a.insertBefore(b, c) : (a.appendChild(b), c = b)
                    })
                }
            },
            wrap: function(a, b) {
                b = Uc(b)[0];
                var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a)
            },
            remove: function(a) {
                hb(a);
                var b = a.parentNode;
                b && b.removeChild(a)
            },
            after: function(a, b) {
                var c = a,
                    d = a.parentNode;
                e(new fb(b), function(a) {
                    d.insertBefore(a, c.nextSibling), c = a
                })
            },
            addClass: ob,
            removeClass: nb,
            toggleClass: function(a, b, c) {
                q(c) && (c = !mb(a, b)), (c ? ob : nb)(a, b)
            },
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            next: function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
                return b
            },
            find: function(a, b) {
                return a.getElementsByTagName(b)
            },
            clone: gb,
            triggerHandler: function(a, b) {
                var c = (kb(a, "events") || {})[b];
                e(c, function(b) {
                    b.call(a, null)
                })
            }
        }, function(a, b) {
            fb.prototype[b] = function(b, d) {
                for (var e, f = 0; f < this.length; f++) e == c ? (e = a(this[f], b, d), e !== c && (e = Uc(e))) : pb(e, a(this[f], b, d));
                return e == c ? this : e
            }
        }), vb.prototype = {
            put: function(a, b) {
                this[ub(a)] = b
            },
            get: function(a) {
                return this[ub(a)]
            },
            remove: function(a) {
                var b = this[a = ub(a)];
                return delete this[a], b
            }
        }, wb.prototype = {
            push: function(a, b) {
                var c = this[a = ub(a)];
                c ? c.push(b) : this[a] = [b]
            },
            shift: function(a) {
                var b = this[a = ub(a)];
                return b ? 1 == b.length ? (delete this[a], b[0]) : b.shift() : void 0
            },
            peek: function(a) {
                var b = this[ub(a)];
                return b ? b[0] : void 0
            }
        };
        var od = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            pd = /,/,
            qd = /^\s*(_?)(\S+?)\1\s*$/,
            rd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            sd = "Non-assignable model expression: ";
        Eb.$inject = ["$provide"];
        var td = /^(x[\:\-_]|data[\:\-_])/i,
            ud = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            vd = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            wd = vd,
            xd = {
                http: 80,
                https: 443,
                ftp: 21
            };
        Qb.prototype = {
            $$replace: !1,
            absUrl: Tb("$$absUrl"),
            url: function(a, b) {
                if (q(a)) return this.$$url;
                var c = vd.exec(a);
                return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
            },
            protocol: Tb("$$protocol"),
            host: Tb("$$host"),
            port: Tb("$$port"),
            path: Ub("$$path", function(a) {
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                return q(a) ? this.$$search : (r(b) ? null === b ? delete this.$$search[a] : this.$$search[a] = b : this.$$search = t(a) ? S(a) : a, this.$$compose(), this)
            },
            hash: Ub("$$hash", o),
            replace: function() {
                return this.$$replace = !0, this
            }
        }, Rb.prototype = m(Qb.prototype), Sb.prototype = m(Rb.prototype);
        var yd = {
                "null": function() {
                    return null
                },
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                },
                undefined: n,
                "+": function(a, b, d, e) {
                    return d = d(a, b), e = e(a, b), r(d) ? r(e) ? d + e : d : r(e) ? e : c
                },
                "-": function(a, b, c, d) {
                    return c = c(a, b), d = d(a, b), (r(c) ? c : 0) - (r(d) ? d : 0)
                },
                "*": function(a, b, c, d) {
                    return c(a, b) * d(a, b)
                },
                "/": function(a, b, c, d) {
                    return c(a, b) / d(a, b)
                },
                "%": function(a, b, c, d) {
                    return c(a, b) % d(a, b)
                },
                "^": function(a, b, c, d) {
                    return c(a, b) ^ d(a, b)
                },
                "=": n,
                "==": function(a, b, c, d) {
                    return c(a, b) == d(a, b)
                },
                "!=": function(a, b, c, d) {
                    return c(a, b) != d(a, b)
                },
                "<": function(a, b, c, d) {
                    return c(a, b) < d(a, b)
                },
                ">": function(a, b, c, d) {
                    return c(a, b) > d(a, b)
                },
                "<=": function(a, b, c, d) {
                    return c(a, b) <= d(a, b)
                },
                ">=": function(a, b, c, d) {
                    return c(a, b) >= d(a, b)
                },
                "&&": function(a, b, c, d) {
                    return c(a, b) && d(a, b)
                },
                "||": function(a, b, c, d) {
                    return c(a, b) || d(a, b)
                },
                "&": function(a, b, c, d) {
                    return c(a, b) & d(a, b)
                },
                "|": function(a, b, c, d) {
                    return d(a, b)(a, b, c(a, b))
                },
                "!": function(a, b, c) {
                    return !c(a, b)
                }
            },
            zd = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            },
            Ad = {},
            Bd = a.XMLHttpRequest || function() {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (a) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (b) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (c) {}
                throw new Error("This browser does not support XMLHttpRequest.")
            };
        sc.$inject = ["$provide"], uc.$inject = ["$locale"], vc.$inject = ["$locale"];
        var Cd = ".",
            Dd = {
                yyyy: yc("FullYear", 4),
                yy: yc("FullYear", 2, 0, !0),
                y: yc("FullYear", 1),
                MMMM: zc("Month"),
                MMM: zc("Month", !0),
                MM: yc("Month", 2, 1),
                M: yc("Month", 1, 1),
                dd: yc("Date", 2),
                d: yc("Date", 1),
                HH: yc("Hours", 2),
                H: yc("Hours", 1),
                hh: yc("Hours", 2, -12),
                h: yc("Hours", 1, -12),
                mm: yc("Minutes", 2),
                m: yc("Minutes", 1),
                ss: yc("Seconds", 2),
                s: yc("Seconds", 1),
                EEEE: zc("Day"),
                EEE: zc("Day", !0),
                a: Bc,
                Z: Ac
            },
            Ed = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            Fd = /^\d+$/;
        Cc.$inject = ["$locale"];
        var Gd = p(Qc),
            Hd = p(Rc);
        Fc.$inject = ["$parse"];
        var Id = p({
                restrict: "E",
                compile: function(a, c) {
                    return 8 >= Yc && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))),
                        function(a, b) {
                            b.bind("click", function(a) {
                                b.attr("href") || a.preventDefault()
                            })
                        }
                }
            }),
            Jd = {};
        e(md, function(a, b) {
            var c = Fb("ng-" + b);
            Jd[c] = function() {
                return {
                    priority: 100,
                    compile: function() {
                        return function(a, d, e) {
                            a.$watch(e[c], function(a) {
                                e.$set(b, !!a)
                            })
                        }
                    }
                }
            }
        }), e(["src", "href"], function(a) {
            var b = Fb("ng-" + a);
            Jd[b] = function() {
                return {
                    priority: 99,
                    link: function(c, d, e) {
                        e.$observe(b, function(b) {
                            b && (e.$set(a, b), Yc && d.prop(a, e[a]))
                        })
                    }
                }
            }
        });
        var Kd = {
            $addControl: n,
            $removeControl: n,
            $setValidity: n,
            $setDirty: n
        };
        Hc.$inject = ["$element", "$attrs", "$scope"];
        var Ld = function(a) {
                return ["$timeout", function(b) {
                    var d = {
                        name: "form",
                        restrict: "E",
                        controller: Hc,
                        compile: function() {
                            return {
                                pre: function(a, d, e, f) {
                                    if (!e.action) {
                                        var g = function(a) {
                                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                        };
                                        hd(d[0], "submit", g), d.bind("$destroy", function() {
                                            b(function() {
                                                id(d[0], "submit", g)
                                            }, 0, !1)
                                        })
                                    }
                                    var h = d.parent().controller("form"),
                                        i = e.name || e.ngForm;
                                    i && (a[i] = f), h && d.bind("$destroy", function() {
                                        h.$removeControl(f), i && (a[i] = c), k(f, Kd)
                                    })
                                }
                            }
                        }
                    };
                    return a ? k(H(d), {
                        restrict: "EAC"
                    }) : d
                }]
            },
            Md = Ld(),
            Nd = Ld(!0),
            Od = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Pd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            Qd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Rd = {
                text: Jc,
                number: Kc,
                url: Lc,
                email: Mc,
                radio: Nc,
                checkbox: Oc,
                hidden: n,
                button: n,
                submit: n,
                reset: n
            },
            Sd = ["$browser", "$sniffer", function(a, b) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(c, d, e, f) {
                        f && (Rd[Qc(e.type)] || Rd.text)(c, d, e, f, b, a)
                    }
                }
            }],
            Td = "ng-valid",
            Ud = "ng-invalid",
            Vd = "ng-pristine",
            Wd = "ng-dirty",
            Xd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, b, c, d, f) {
                function g(a, b) {
                    b = b ? "-" + Y(b, "-") : "", d.removeClass((a ? Ud : Td) + b).addClass((a ? Td : Ud) + b)
                }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
                var h = f(c.ngModel),
                    i = h.assign;
                if (!i) throw Error(sd + c.ngModel + " (" + R(d) + ")");
                this.$render = n;
                var j = d.inheritedData("$formController") || Kd,
                    k = 0,
                    l = this.$error = {};
                d.addClass(Vd), g(!0), this.$setValidity = function(a, b) {
                    l[a] !== !b && (b ? (l[a] && k--, k || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1), this.$invalid = !0, this.$valid = !1, k++), l[a] = !b, g(b, a), j.$setValidity(a, b, this))
                }, this.$setViewValue = function(c) {
                    this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, d.removeClass(Vd).addClass(Wd), j.$setDirty()), e(this.$parsers, function(a) {
                        c = a(c)
                    }), this.$modelValue !== c && (this.$modelValue = c, i(a, c), e(this.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    }))
                };
                var m = this;
                a.$watch(function() {
                    var b = h(a);
                    if (m.$modelValue !== b) {
                        var c = m.$formatters,
                            d = c.length;
                        for (m.$modelValue = b; d--;) b = c[d](b);
                        m.$viewValue !== b && (m.$viewValue = b, m.$render())
                    }
                })
            }],
            Yd = function() {
                return {
                    require: ["ngModel", "^?form"],
                    controller: Xd,
                    link: function(a, b, c, d) {
                        var e = d[0],
                            f = d[1] || Kd;
                        f.$addControl(e), b.bind("$destroy", function() {
                            f.$removeControl(e)
                        })
                    }
                }
            },
            Zd = p({
                require: "ngModel",
                link: function(a, b, c, d) {
                    d.$viewChangeListeners.push(function() {
                        a.$eval(c.ngChange)
                    })
                }
            }),
            $d = function() {
                return {
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            c.required = !0;
                            var e = function(a) {
                                return c.required && (Ic(a) || a === !1) ? (d.$setValidity("required", !1), void 0) : (d.$setValidity("required", !0), a)
                            };
                            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
                                e(d.$viewValue)
                            })
                        }
                    }
                }
            },
            _d = function() {
                return {
                    require: "ngModel",
                    link: function(a, b, d, f) {
                        var g = /\/(.*)\//.exec(d.ngList),
                            h = g && new RegExp(g[1]) || d.ngList || ",",
                            i = function(a) {
                                var b = [];
                                return a && e(a.split(h), function(a) {
                                    a && b.push(B(a))
                                }), b
                            };
                        f.$parsers.push(i), f.$formatters.push(function(a) {
                            return w(a) ? a.join(", ") : c
                        })
                    }
                }
            },
            ae = /^(true|false|\d+)$/,
            be = function() {
                return {
                    priority: 100,
                    compile: function(a, b) {
                        return ae.test(b.ngValue) ? function(a, b, c) {
                            c.$set("value", a.$eval(c.ngValue))
                        } : function(a, b, c) {
                            a.$watch(c.ngValue, function(a) {
                                c.$set("value", a, !1)
                            })
                        }
                    }
                }
            },
            ce = Gc(function(a, b, d) {
                b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
                    b.text(a == c ? "" : a)
                })
            }),
            de = ["$interpolate", function(a) {
                return function(b, c, d) {
                    var e = a(c.attr(d.$attr.ngBindTemplate));
                    c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) {
                        c.text(a)
                    })
                }
            }],
            ee = [function() {
                return function(a, b, c) {
                    b.addClass("ng-binding").data("$binding", c.ngBindHtmlUnsafe), a.$watch(c.ngBindHtmlUnsafe, function(a) {
                        b.html(a || "")
                    })
                }
            }],
            fe = Pc("", !0),
            ge = Pc("Odd", 0),
            he = Pc("Even", 1),
            ie = Gc({
                compile: function(a, b) {
                    b.$set("ngCloak", c), a.removeClass("ng-cloak")
                }
            }),
            je = [function() {
                return {
                    scope: !0,
                    controller: "@"
                }
            }],
            ke = ["$sniffer", function(a) {
                return {
                    priority: 1e3,
                    compile: function() {
                        a.csp = !0
                    }
                }
            }],
            le = {};
        e("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(a) {
            var b = Fb("ng-" + a);
            le[b] = ["$parse", function(c) {
                return function(d, e, f) {
                    var g = c(f[b]);
                    e.bind(Qc(a), function(a) {
                        d.$apply(function() {
                            g(d, {
                                $event: a
                            })
                        })
                    })
                }
            }]
        });
        var me = Gc(function(a, b, c) {
                b.bind("submit", function() {
                    a.$apply(c.ngSubmit)
                })
            }),
            ne = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, b, c, d) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    compile: function(e, f) {
                        var g = f.ngInclude || f.src,
                            h = f.onload || "",
                            i = f.autoscroll;
                        return function(e, f) {
                            var j, k = 0,
                                l = function() {
                                    j && (j.$destroy(), j = null), f.html("")
                                };
                            e.$watch(g, function(g) {
                                var m = ++k;
                                g ? a.get(g, {
                                    cache: b
                                }).success(function(a) {
                                    m === k && (j && j.$destroy(), j = e.$new(), f.html(a), d(f.contents())(j), !r(i) || i && !e.$eval(i) || c(), j.$emit("$includeContentLoaded"), e.$eval(h))
                                }).error(function() {
                                    m === k && l()
                                }) : l()
                            })
                        }
                    }
                }
            }],
            oe = Gc({
                compile: function() {
                    return {
                        pre: function(a, b, c) {
                            a.$eval(c.ngInit)
                        }
                    }
                }
            }),
            pe = Gc({
                terminal: !0,
                priority: 1e3
            }),
            qe = ["$locale", "$interpolate", function(a, b) {
                var c = /{}/g;
                return {
                    restrict: "EA",
                    link: function(d, f, g) {
                        var h = g.count,
                            i = f.attr(g.$attr.when),
                            j = g.offset || 0,
                            k = d.$eval(i),
                            l = {},
                            m = b.startSymbol(),
                            n = b.endSymbol();
                        e(k, function(a, d) {
                            l[d] = b(a.replace(c, m + h + "-" + j + n))
                        }), d.$watch(function() {
                            var b = parseFloat(d.$eval(h));
                            return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, f, !0))
                        }, function(a) {
                            f.text(a)
                        })
                    }
                }
            }],
            re = Gc({
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                compile: function(a, b, c) {
                    return function(a, b, d) {
                        var e, f, g, h, i = d.ngRepeat,
                            j = i.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                        if (!j) throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + i + "'.");
                        if (e = j[1], f = j[2], j = e.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !j) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + e + "'.");
                        g = j[3] || j[1], h = j[2];
                        var k = new wb;
                        a.$watch(function(a) {
                            var d, e, i, j, l, m, n, o, p = a.$eval(f),
                                q = b,
                                r = new wb;
                            if (w(p)) n = p || [];
                            else {
                                n = [];
                                for (l in p) p.hasOwnProperty(l) && "$" != l.charAt(0) && n.push(l);
                                n.sort()
                            }
                            for (i = n.length - 1, d = 0, e = n.length; e > d; d++) l = p === n ? d : n[d], m = p[l], o = k.shift(m), o ? (j = o.scope, r.push(m, o), d === o.index ? q = o.element : (o.index = d, q.after(o.element), q = o.element)) : j = a.$new(), j[g] = m, h && (j[h] = l), j.$index = d, j.$first = 0 === d, j.$last = d === i, j.$middle = !(j.$first || j.$last), o || c(j, function(a) {
                                q.after(a), o = {
                                    scope: j,
                                    element: q = a,
                                    index: d
                                }, r.push(m, o)
                            });
                            for (l in k)
                                if (k.hasOwnProperty(l))
                                    for (n = k[l]; n.length;) m = n.pop(), m.element.remove(), m.scope.$destroy();
                            k = r
                        })
                    }
                }
            }),
            se = Gc(function(a, b, c) {
                a.$watch(c.ngShow, function(a) {
                    b.css("display", Q(a) ? "" : "none")
                })
            }),
            te = Gc(function(a, b, c) {
                a.$watch(c.ngHide, function(a) {
                    b.css("display", Q(a) ? "none" : "")
                })
            }),
            ue = Gc(function(a, b, c) {
                a.$watch(c.ngStyle, function(a, c) {
                    c && a !== c && e(c, function(a, c) {
                        b.css(c, "")
                    }), a && b.css(a)
                }, !0)
            }),
            ve = p({
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(a, b, c, d) {
                    var e, f, g, h = c.ngSwitch || c.on;
                    a.$watch(h, function(h) {
                        f && (g.$destroy(), f.remove(), f = g = null), (e = d.cases["!" + h] || d.cases["?"]) && (a.$eval(c.change), g = a.$new(), e(g, function(a) {
                            f = a, b.append(a)
                        }))
                    })
                }
            }),
            we = Gc({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, b, c) {
                    return function(a, d, e, f) {
                        f.cases["!" + b.ngSwitchWhen] = c
                    }
                }
            }),
            xe = Gc({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, b, c) {
                    return function(a, b, d, e) {
                        e.cases["?"] = c
                    }
                }
            }),
            ye = Gc({
                controller: ["$transclude", "$element", function(a, b) {
                    a(function(a) {
                        b.append(a)
                    })
                }]
            }),
            ze = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, b, c, d, e, f) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    link: function(a, b, g) {
                        function h() {
                            k && (k.$destroy(), k = null)
                        }

                        function i() {
                            b.html(""), h()
                        }

                        function j() {
                            var g = c.current && c.current.locals,
                                j = g && g.$template;
                            if (j) {
                                b.html(j), h();
                                var m, n = e(b.contents()),
                                    o = c.current;
                                k = o.scope = a.$new(), o.controller && (g.$scope = k, m = f(o.controller, g), b.children().data("$ngControllerController", m)), n(k), k.$emit("$viewContentLoaded"), k.$eval(l), d()
                            } else i()
                        }
                        var k, l = g.onload || "";
                        a.$on("$routeChangeSuccess", j), j()
                    }
                }
            }],
            Ae = ["$templateCache", function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(b, c) {
                        if ("text/ng-template" == c.type) {
                            var d = c.id,
                                e = b[0].text;
                            a.put(d, e)
                        }
                    }
                }
            }],
            Be = p({
                terminal: !0
            }),
            Ce = ["$compile", "$parse", function(a, d) {
                var g = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                    h = {
                        $setViewValue: n
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(a, b, c) {
                        var d, e, f = this,
                            g = {},
                            i = h;
                        f.databound = c.ngModel, f.init = function(a, b, c) {
                            i = a, d = b, e = c
                        }, f.addOption = function(b) {
                            g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                        }, f.removeOption = function(a) {
                            this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                        }, f.renderUnknownOption = function(b) {
                            var c = "? " + ub(b) + " ?";
                            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                        }, f.hasOption = function(a) {
                            return g.hasOwnProperty(a)
                        }, b.$on("$destroy", function() {
                            f.renderUnknownOption = n
                        })
                    }],
                    link: function(h, i, j, k) {
                        function l(a, b, c, d) {
                            c.$render = function() {
                                var a = c.$viewValue;
                                d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : q(a) && o ? b.val("") : d.renderUnknownOption(a)
                            }, b.bind("change", function() {
                                a.$apply(function() {
                                    y.parent() && y.remove(), c.$setViewValue(b.val())
                                })
                            })
                        }

                        function m(a, b, c) {
                            var d;
                            c.$render = function() {
                                var a = new vb(c.$viewValue);
                                e(b.find("option"), function(b) {
                                    b.selected = r(a.get(b.value))
                                })
                            }, a.$watch(function() {
                                J(d, c.$viewValue) || (d = H(c.$viewValue), c.$render())
                            }), b.bind("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    e(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    }), c.$setViewValue(a)
                                })
                            })
                        }

                        function n(b, e, h) {
                            function i() {
                                var a, d, g, i, j, r, s, u, y, z, A, B, C, D, E = {
                                        "": []
                                    },
                                    F = [""],
                                    G = h.$modelValue,
                                    H = p(b) || [],
                                    I = m ? f(H) : H,
                                    J = {},
                                    K = !1;
                                for (t && (K = new vb(G)), z = 0; u = I.length, u > z; z++) J[l] = H[m ? J[m] = I[z] : z], a = n(b, J) || "", (d = E[a]) || (d = E[a] = [], F.push(a)), t ? A = K.remove(o(b, J)) != c : (A = G === o(b, J), K = K || A), D = k(b, J), D = D === c ? "" : D, d.push({
                                    id: m ? I[z] : z,
                                    label: D,
                                    selected: A
                                });
                                for (t || (v || null === G ? E[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !K
                                    }) : K || E[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), y = 0, s = F.length; s > y; y++) {
                                    for (a = F[y], d = E[a], q.length <= y ? (i = {
                                            element: x.clone().attr("label", a),
                                            label: d.label
                                        }, j = [i], q.push(j), e.append(i.element)) : (j = q[y], i = j[0], i.label != a && i.element.attr("label", i.label = a)), B = null, z = 0, u = d.length; u > z; z++) g = d[z], (r = j[z + 1]) ? (B = r.element, r.label !== g.label && B.text(r.label = g.label), r.id !== g.id && B.val(r.id = g.id), B[0].selected !== g.selected && B.prop("selected", r.selected = g.selected)) : ("" === g.id && v ? C = v : (C = w.clone()).val(g.id).attr("selected", g.selected).text(g.label), j.push(r = {
                                        element: C,
                                        label: g.label,
                                        id: g.id,
                                        selected: g.selected
                                    }), B ? B.after(C) : i.element.append(C), B = C);
                                    for (z++; j.length > z;) j.pop().element.remove()
                                }
                                for (; q.length > y;) q.pop()[0].element.remove()
                            }
                            var j;
                            if (!(j = u.match(g))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + u + "'.");
                            var k = d(j[2] || j[1]),
                                l = j[4] || j[6],
                                m = j[5],
                                n = d(j[3] || ""),
                                o = d(j[2] ? j[1] : l),
                                p = d(j[7]),
                                q = [
                                    [{
                                        element: e,
                                        label: ""
                                    }]
                                ];
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), e.html(""), e.bind("change", function() {
                                b.$apply(function() {
                                    var a, d, f, g, i, j, k, n, r = p(b) || [],
                                        s = {};
                                    if (t)
                                        for (f = [], j = 0, n = q.length; n > j; j++)
                                            for (a = q[j], i = 1, k = a.length; k > i; i++)(g = a[i].element)[0].selected && (d = g.val(), m && (s[m] = d), s[l] = r[d], f.push(o(b, s)));
                                    else d = e.val(), "?" == d ? f = c : "" == d ? f = null : (s[l] = r[d], m && (s[m] = d), f = o(b, s));
                                    h.$setViewValue(f)
                                })
                            }), h.$render = i, b.$watch(i)
                        }
                        if (k[1]) {
                            for (var o, p = k[0], s = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = Uc(b.createElement("option")), x = Uc(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)
                                if ("" == A[z].value) {
                                    o = v = A.eq(z);
                                    break
                                }
                            if (p.init(s, v, y), t && (j.required || j.ngRequired)) {
                                var C = function(a) {
                                    return s.$setValidity("required", !j.required || a && a.length), a
                                };
                                s.$parsers.push(C), s.$formatters.unshift(C), j.$observe("required", function() {
                                    C(s.$viewValue)
                                })
                            }
                            u ? n(h, i, s) : t ? m(h, i, s) : l(h, i, s, p)
                        }
                    }
                }
            }],
            De = ["$interpolate", function(a) {
                var b = {
                    addOption: n,
                    removeOption: n
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(c, d) {
                        if (q(d.value)) {
                            var e = a(c.text(), !0);
                            e || d.$set("value", c.text())
                        }
                        return function(a, c, d) {
                            var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) {
                                d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                            }) : h.addOption(d.value), c.bind("$destroy", function() {
                                h.removeOption(d.value)
                            })
                        }
                    }
                }
            }],
            Ee = p({
                restrict: "E",
                terminal: !0
            });
        Z(), bb(ad), Uc(b).ready(function() {
            W(b, X)
        })
    }(window, document), angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>'), angular.module("ui.date", []).constant("uiDateConfig", {}).directive("uiDate", ["uiDateConfig", "$timeout", function(a, b) {
        "use strict";
        var c;
        return c = {}, angular.extend(c, a), {
            require: "?ngModel",
            link: function(c, d, e, f) {
                var g = function() {
                        return angular.extend({}, a, c.$eval(e.uiDate))
                    },
                    h = function() {
                        var a = g();
                        if (f) {
                            var e = f.$setViewValue,
                                h = !1;
                            f.$setViewValue = function() {
                                h || (h = !0, d.datepicker("setDate", d.datepicker("getDate")), e.call(f, d.datepicker("getDate")), b(function() {
                                    h = !1
                                }))
                            };
                            var i = a.onSelect || angular.noop;
                            a.onSelect = function(a, b) {
                                c.$apply(function() {
                                    f.$setViewValue(a), i(a, b), d.blur()
                                })
                            };
                            var j = a.beforeShow || angular.noop;
                            a.beforeShow = function(a, b) {
                                return !h && j(a, b)
                            }, f.$render = function() {
                                var a = f.$viewValue;
                                if (angular.isDefined(a) && null !== a && !angular.isDate(a)) throw new Error("ng-Model value must be a Date object - currently it is a " + typeof a + " - use ui-date-format to convert it from a string");
                                d.datepicker("setDate", a)
                            }
                        }
                        d.datepicker("destroy"), d.datepicker(a), f && f.$render()
                    };
                c.$watch(g, h, !0)
            }
        }
    }]).constant("uiDateFormatConfig", "").directive("uiDateFormat", ["uiDateFormatConfig", function(a) {
        var b = {
            require: "ngModel",
            link: function(b, c, d, e) {
                var f = d.uiDateFormat || a;
                f ? (e.$formatters.push(function(a) {
                    return angular.isString(a) ? jQuery.datepicker.parseDate(f, a) : null
                }), e.$parsers.push(function(a) {
                    return a ? jQuery.datepicker.formatDate(f, a) : null
                })) : (e.$formatters.push(function(a) {
                    return angular.isString(a) ? new Date(a) : null
                }), e.$parsers.push(function(a) {
                    return a ? a.toISOString() : null
                }))
            }
        };
        return b
    }]), angular.module("ui.select2", []).value("uiSelect2Config", {}).directive("uiSelect2", ["uiSelect2Config", "$timeout", function(a, b) {
        var c = {};
        return a && angular.extend(c, a), {
            require: "?ngModel",
            compile: function(a, d) {
                var e, f, g, h = a.is("select"),
                    i = void 0 !== d.multiple;
                return a.is("select") && (f = a.find("option[ng-repeat], option[data-ng-repeat]"), f.length && (g = f.attr("ng-repeat") || f.attr("data-ng-repeat"), e = jQuery.trim(g.split("|")[0]).split(" ").pop())),
                    function(a, d, f, g) {
                        var j = angular.extend({}, c, a.$eval(f.uiSelect2));
                        if (h ? (delete j.multiple, delete j.initSelection) : i && (j.multiple = !0), g && (g.$render = function() {
                                h ? d.select2("val", g.$viewValue) : i ? g.$viewValue ? angular.isArray(g.$viewValue) ? d.select2("data", g.$viewValue) : d.select2("val", g.$viewValue) : d.select2("data", []) : angular.isObject(g.$viewValue) ? d.select2("data", g.$viewValue) : g.$viewValue ? d.select2("val", g.$viewValue) : d.select2("data", null)
                            }, e && a.$watch(e, function(a) {
                                a && b(function() {
                                    d.select2("val", g.$viewValue), d.trigger("change")
                                })
                            }), g.$parsers.push(function(a) {
                                var b = d.prev();
                                return b.toggleClass("ng-invalid", !g.$valid).toggleClass("ng-valid", g.$valid).toggleClass("ng-invalid-required", !g.$valid).toggleClass("ng-valid-required", g.$valid).toggleClass("ng-dirty", g.$dirty).toggleClass("ng-pristine", g.$pristine), a
                            }), !h && (d.bind("change", function() {
                                a.$$phase || a.$apply(function() {
                                    g.$setViewValue(d.select2("data"))
                                })
                            }), j.initSelection))) {
                            var k = j.initSelection;
                            j.initSelection = function(a, b) {
                                k(a, function(a) {
                                    g.$setViewValue(a), b(a)
                                })
                            }
                        }
                        f.$observe("disabled", function(a) {
                            d.select2("enable", !a)
                        }), f.$observe("readonly", function(a) {
                            d.select2("readonly", !!a)
                        }), f.ngMultiple && a.$watch(f.ngMultiple, function() {
                            d.select2(j)
                        }), b(function() {
                            d.select2(j), d.val(g.$viewValue), g.$render(), j.initSelection || h || g.$setViewValue(d.select2("data"))
                        })
                    }
            }
        }
    }]), angular.module("$strap.config", []).value("$strapConfig", {}), angular.module("$strap.filters", ["$strap.config"]), angular.module("$strap.directives", ["$strap.config"]), angular.module("$strap", ["$strap.filters", "$strap.directives", "$strap.config"]), angular.module("$strap.directives").directive("bsAlert", ["$parse", "$timeout", "$compile", function(a, b, c) {
        return {
            restrict: "A",
            link: function(d, e, f) {
                var g = a(f.bsAlert),
                    h = (g.assign, g(d)),
                    i = function(a) {
                        b(function() {
                            e.alert("close")
                        }, 1 * a)
                    };
                f.bsAlert ? d.$watch(f.bsAlert, function(a, b) {
                    h = a, e.html((a.title ? "<strong>" + a.title + "</strong>&nbsp;" : "") + a.content || ""), a.closed && e.hide(), c(e.contents())(d), (a.type || b.type) && (b.type && e.removeClass("alert-" + b.type), a.type && e.addClass("alert-" + a.type)), angular.isDefined(a.closeAfter) ? i(a.closeAfter) : f.closeAfter && i(f.closeAfter), (angular.isUndefined(f.closeButton) || "0" !== f.closeButton && "false" !== f.closeButton) && e.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>')
                }, !0) : ((angular.isUndefined(f.closeButton) || "0" !== f.closeButton && "false" !== f.closeButton) && e.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>'), f.closeAfter && i(f.closeAfter)), e.addClass("alert").alert(), e.hasClass("fade") && (e.removeClass("in"), setTimeout(function() {
                    e.addClass("in")
                }));
                var j = f.ngRepeat && f.ngRepeat.split(" in ").pop();
                e.on("close", function(a) {
                    var b;
                    j ? (a.preventDefault(), e.removeClass("in"), b = function() {
                        e.trigger("closed"), d.$parent && d.$parent.$apply(function() {
                            for (var a = j.split("."), b = d.$parent, c = 0; c < a.length; ++c) b && (b = b[a[c]]);
                            b && b.splice(d.$index, 1)
                        })
                    }, $.support.transition && e.hasClass("fade") ? e.on($.support.transition.end, b) : b()) : h && (a.preventDefault(), e.removeClass("in"), b = function() {
                        e.trigger("closed"), d.$apply(function() {
                            h.closed = !0
                        })
                    }, $.support.transition && e.hasClass("fade") ? e.on($.support.transition.end, b) : b())
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsButton", ["$parse", "$timeout", function(a) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(b, c, d, e) {
                if (e) {
                    c.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length || c.attr("data-toggle", "button");
                    var f = !!b.$eval(d.ngModel);
                    f && c.addClass("active"), b.$watch(d.ngModel, function(a, b) {
                        var d = !!a,
                            e = !!b;
                        d !== e ? $.fn.button.Constructor.prototype.toggle.call(g) : d && !f && c.addClass("active")
                    })
                }
                c.hasClass("btn") || c.on("click.button.data-api", function() {
                    c.button("toggle")
                }), c.button();
                var g = c.data("button");
                g.toggle = function() {
                    if (!e) return $.fn.button.Constructor.prototype.toggle.call(this);
                    var d = c.parent('[data-toggle="buttons-radio"]');
                    d.length ? (c.siblings("[ng-model]").each(function(c, d) {
                        a($(d).attr("ng-model")).assign(b, !1)
                    }), b.$digest(), e.$modelValue || (e.$setViewValue(!e.$modelValue), b.$digest())) : b.$apply(function() {
                        e.$setViewValue(!e.$modelValue)
                    })
                }
            }
        }
    }]).directive("bsButtonsCheckbox", ["$parse", function() {
        return {
            restrict: "A",
            require: "?ngModel",
            compile: function(a) {
                a.attr("data-toggle", "buttons-checkbox").find("a, button").each(function(a, b) {
                    $(b).attr("bs-button", "")
                })
            }
        }
    }]).directive("bsButtonsRadio", ["$timeout", function(a) {
        return {
            restrict: "A",
            require: "?ngModel",
            compile: function(b, c) {
                return b.attr("data-toggle", "buttons-radio"), c.ngModel || b.find("a, button").each(function(a, b) {
                        $(b).attr("bs-button", "")
                    }),
                    function(b, c, d, e) {
                        e && (a(function() {
                            c.find("[value]").button().filter('[value="' + e.$viewValue + '"]').addClass("active")
                        }), c.on("click.button.data-api", function(a) {
                            b.$apply(function() {
                                e.$setViewValue($(a.target).closest("button").attr("value"))
                            })
                        }), b.$watch(d.ngModel, function(a, e) {
                            if (a !== e) {
                                var f = c.find('[value="' + b.$eval(d.ngModel) + '"]');
                                f.length && f.button("toggle")
                            }
                        }))
                    }
            }
        }
    }]), angular.module("$strap.directives").directive("bsButtonSelect", ["$parse", "$timeout", function(a) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(b, c, d, e) {
                var f = a(d.bsButtonSelect);
                f.assign, e && (c.text(b.$eval(d.ngModel)), b.$watch(d.ngModel, function(a) {
                    c.text(a)
                }));
                var g, h, i, j;
                c.bind("click", function() {
                    g = f(b), h = e ? b.$eval(d.ngModel) : c.text(), i = g.indexOf(h), j = i > g.length - 2 ? g[0] : g[i + 1], b.$apply(function() {
                        c.text(j), e && e.$setViewValue(j)
                    })
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsDatepicker", ["$timeout", "$strapConfig", function(a, b) {
        var c = /(iP(a|o)d|iPhone)/g.test(navigator.userAgent),
            d = function(a) {
                return a = a || "en", {
                    "/": "[\\/]",
                    "-": "[-]",
                    ".": "[.]",
                    " ": "[\\s]",
                    dd: "(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",
                    d: "(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",
                    mm: "(?:[0]?[1-9]|[1][012])",
                    m: "(?:[0]?[1-9]|[1][012])",
                    DD: "(?:" + $.fn.datepicker.dates[a].days.join("|") + ")",
                    D: "(?:" + $.fn.datepicker.dates[a].daysShort.join("|") + ")",
                    MM: "(?:" + $.fn.datepicker.dates[a].months.join("|") + ")",
                    M: "(?:" + $.fn.datepicker.dates[a].monthsShort.join("|") + ")",
                    yyyy: "(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])",
                    yy: "(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])"
                }
            },
            e = function(a, b) {
                var c, e = a,
                    f = d(b);
                return c = 0, angular.forEach(f, function(a, b) {
                    e = e.split(b).join("${" + c + "}"), c++
                }), c = 0, angular.forEach(f, function(a) {
                    e = e.split("${" + c + "}").join(a), c++
                }), new RegExp("^" + e + "$", ["i"])
            };
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, d, f, g) {
                var h = angular.extend({
                        autoclose: !0
                    }, b.datepicker || {}),
                    i = f.dateType || h.type || "date";
                angular.forEach(["format", "weekStart", "calendarWeeks", "startDate", "endDate", "daysOfWeekDisabled", "autoclose", "startView", "minViewMode", "todayBtn", "todayHighlight", "keyboardNavigation", "language", "forceParse"], function(a) {
                    angular.isDefined(f[a]) && (h[a] = f[a])
                });
                var j = h.language || "en",
                    k = f.dateFormat || h.format || $.fn.datepicker.dates[j] && $.fn.datepicker.dates[j].format || "mm/dd/yyyy",
                    l = c ? "yyyy-mm-dd" : k,
                    m = e(l, j);
                g && (g.$formatters.unshift(function(a) {
                    return "date" === i && angular.isString(a) && a ? $.fn.datepicker.DPGlobal.parseDate(a, $.fn.datepicker.DPGlobal.parseFormat(k), j) : a
                }), g.$parsers.unshift(function(a) {
                    return a ? "date" === i && angular.isDate(a) ? (g.$setValidity("date", !0), a) : angular.isString(a) && m.test(a) ? (g.$setValidity("date", !0), c ? new Date(a) : "string" === i ? a : $.fn.datepicker.DPGlobal.parseDate(a, $.fn.datepicker.DPGlobal.parseFormat(l), j)) : (g.$setValidity("date", !1), void 0) : (g.$setValidity("date", !0), null)
                }), g.$render = function() {
                    if (c) {
                        var a = g.$viewValue ? $.fn.datepicker.DPGlobal.formatDate(g.$viewValue, $.fn.datepicker.DPGlobal.parseFormat(l), j) : "";
                        return d.val(a), a
                    }
                    return g.$viewValue || d.val(""), d.datepicker("update", g.$viewValue)
                }), c ? d.prop("type", "date").css("-webkit-appearance", "textfield") : (g && d.on("changeDate", function(b) {
                    a.$apply(function() {
                        g.$setViewValue("string" === i ? d.val() : b.date)
                    })
                }), d.datepicker(angular.extend(h, {
                    format: l,
                    language: j
                })), a.$on("$destroy", function() {
                    var a = d.data("datepicker");
                    a && (a.picker.remove(), d.data("datepicker", null))
                }), f.$observe("startDate", function(a) {
                    d.datepicker("setStartDate", a)
                }), f.$observe("endDate", function(a) {
                    d.datepicker("setEndDate", a)
                }));
                var n = d.siblings('[data-toggle="datepicker"]');
                n.length && n.on("click", function() {
                    d.prop("disabled") || d.trigger("focus")
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsDropdown", ["$parse", "$compile", "$timeout", function(a, b, c) {
        var d = function(a, b) {
            return b || (b = ['<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">', "</ul>"]), angular.forEach(a, function(a, c) {
                if (a.divider) return b.splice(c + 1, 0, '<li class="divider"></li>');
                var e = "<li" + (a.submenu && a.submenu.length ? ' class="dropdown-submenu"' : "") + ">" + '<a tabindex="-1" ng-href="' + (a.href || "") + '"' + (a.click ? '" ng-click="' + a.click + '"' : "") + (a.target ? '" target="' + a.target + '"' : "") + (a.method ? '" data-method="' + a.method + '"' : "") + ">" + (a.text || "") + "</a>";
                a.submenu && a.submenu.length && (e += d(a.submenu).join("\n")), e += "</li>", b.splice(c + 1, 0, e)
            }), b
        };
        return {
            restrict: "EA",
            scope: !0,
            link: function(e, f, g) {
                var h = a(g.bsDropdown),
                    i = h(e);
                c(function() {
                    !angular.isArray(i);
                    var a = angular.element(d(i).join(""));
                    a.insertAfter(f), b(f.next("ul.dropdown-menu"))(e)
                }), f.addClass("dropdown-toggle").attr("data-toggle", "dropdown")
            }
        }
    }]), angular.module("$strap.directives").factory("$modal", ["$rootScope", "$compile", "$http", "$timeout", "$q", "$templateCache", "$strapConfig", function(a, b, c, d, e, f, g) {
        var h = function(h) {
            function i(h) {
                var i = angular.extend({
                        show: !0
                    }, g.modal, h),
                    j = i.scope ? i.scope : a.$new(),
                    k = i.template;
                return e.when(f.get(k) || c.get(k, {
                    cache: !0
                }).then(function(a) {
                    return a.data
                })).then(function(a) {
                    var c = k.replace(".html", "").replace(/[\/|\.|:]/g, "-") + "-" + j.$id,
                        e = $('<div class="modal hide" tabindex="-1"></div>').attr("id", c).addClass("fade").html(a);
                    return i.modalClass && e.addClass(i.modalClass), $("body").append(e), d(function() {
                        b(e)(j)
                    }), j.$modal = function(a) {
                        e.modal(a)
                    }, angular.forEach(["show", "hide"], function(a) {
                        j[a] = function() {
                            e.modal(a)
                        }
                    }), j.dismiss = j.hide, angular.forEach(["show", "shown", "hide", "hidden"], function(a) {
                        e.on(a, function(b) {
                            j.$emit("modal-" + a, b)
                        })
                    }), e.on("shown", function() {
                        $("input[autofocus], textarea[autofocus]", e).first().trigger("focus")
                    }), e.on("hidden", function() {
                        i.persist || j.$destroy()
                    }), j.$on("$destroy", function() {
                        e.remove()
                    }), e.modal(i), e
                })
            }
            return new i(h)
        };
        return h
    }]).directive("bsModal", ["$q", "$modal", function(a, b) {
        return {
            restrict: "A",
            scope: !0,
            link: function(c, d, e) {
                var f = {
                    template: c.$eval(e.bsModal),
                    persist: !0,
                    show: !1,
                    scope: c
                };
                angular.forEach(["modalClass", "backdrop", "keyboard"], function(a) {
                    angular.isDefined(e[a]) && (f[a] = e[a])
                }), a.when(b(f)).then(function(a) {
                    d.attr("data-target", "#" + a.attr("id")).attr("data-toggle", "modal")
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsNavbar", ["$location", function(a) {
        return {
            restrict: "A",
            link: function(b, c) {
                b.$watch(function() {
                    return a.path()
                }, function(a) {
                    $("li[data-match-route]", c).each(function(b, c) {
                        var d = angular.element(c),
                            e = d.attr("data-match-route"),
                            f = new RegExp("^" + e + "$", ["i"]);
                        f.test(a) ? d.addClass("active").find(".collapse.in").collapse("hide") : d.removeClass("active")
                    })
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsPopover", ["$parse", "$compile", "$http", "$timeout", "$q", "$templateCache", function(a, b, c, d, e, f) {
        return $("body").on("keyup", function(a) {
            27 === a.keyCode && $(".popover.in").each(function() {
                $(this).popover("hide")
            })
        }), {
            restrict: "A",
            scope: !0,
            link: function(g, h, i) {
                var j = a(i.bsPopover),
                    k = (j.assign, j(g)),
                    l = {};
                angular.isObject(k) && (l = k), e.when(l.content || f.get(k) || c.get(k, {
                    cache: !0
                })).then(function(a) {
                    angular.isObject(a) && (a = a.data), i.unique && h.on("show", function() {
                        $(".popover.in").each(function() {
                            var a = $(this),
                                b = a.data("popover");
                            b && !b.$element.is(h) && a.popover("hide")
                        })
                    }), i.hide && g.$watch(i.hide, function(a, b) {
                        a ? c.hide() : a !== b && c.show()
                    }), i.show && g.$watch(i.show, function(a, b) {
                        a ? d(function() {
                            c.show()
                        }) : a !== b && c.hide()
                    }), h.popover(angular.extend({}, l, {
                        content: a,
                        html: !0
                    }));
                    var c = h.data("popover");
                    c.hasContent = function() {
                        return this.getTitle() || a
                    }, c.getPosition = function() {
                        var a = $.fn.popover.Constructor.prototype.getPosition.apply(this, arguments);
                        return b(this.$tip)(g), g.$digest(), this.$tip.data("popover", this), a
                    }, g.$popover = function(a) {
                        c(a)
                    }, angular.forEach(["show", "hide"], function(a) {
                        g[a] = function() {
                            c[a]()
                        }
                    }), g.dismiss = g.hide, angular.forEach(["show", "shown", "hide", "hidden"], function(a) {
                        h.on(a, function(b) {
                            g.$emit("popover-" + a, b)
                        })
                    })
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsSelect", ["$timeout", function(a) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(b, c, d, e) {
                var f = b.$eval(d.bsSelect) || {};
                a(function() {
                    c.selectpicker(f), c.next().removeClass("ng-scope")
                }), e && b.$watch(d.ngModel, function(a, b) {
                    angular.equals(a, b) || c.selectpicker("refresh")
                })
            }
        }
    }]), angular.module("$strap.directives").directive("bsTabs", ["$parse", "$compile", "$timeout", function(a, b, c) {
        var d = '<div class="tabs"><ul class="nav nav-tabs"><li ng-repeat="pane in panes" ng-class="{active:pane.active}"><a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a></li></ul><div class="tab-content" ng-transclude></div>';
        return {
            restrict: "A",
            require: "?ngModel",
            priority: 0,
            scope: !0,
            template: d,
            replace: !0,
            transclude: !0,
            compile: function() {
                return function(b, d, e, f) {
                    var g = a(e.bsTabs);
                    g.assign, g(b), b.panes = [];
                    var h, i, j, k = d.find("ul.nav-tabs"),
                        l = d.find("div.tab-content"),
                        m = 0;
                    c(function() {
                        l.find("[data-title], [data-tab]").each(function(a) {
                            var c = angular.element(this);
                            h = "tab-" + b.$id + "-" + a, i = c.data("title") || c.data("tab"), j = !j && c.hasClass("active"), c.attr("id", h).addClass("tab-pane"), e.fade && c.addClass("fade"), b.panes.push({
                                id: h,
                                title: i,
                                content: this.innerHTML,
                                active: j
                            })
                        }), b.panes.length && !j && (l.find(".tab-pane:first-child").addClass("active" + (e.fade ? " in" : "")), b.panes[0].active = !0)
                    }), f && (d.on("show", function(a) {
                        var c = $(a.target);
                        b.$apply(function() {
                            f.$setViewValue(c.data("index"))
                        })
                    }), b.$watch(e.ngModel, function(a) {
                        angular.isUndefined(a) || (m = a, setTimeout(function() {
                            var b = $(k[0].querySelectorAll("li")[1 * a]);
                            b.hasClass("active") || b.children("a").tab("show")
                        }))
                    }))
                }
            }
        }
    }]), angular.module("$strap.directives").directive("bsTimepicker", ["$timeout", "$strapConfig", function(a, b) {
        var c = "((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)";
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(d, e, f, g) {
                if (g) {
                    e.on("changeTime.timepicker", function() {
                        a(function() {
                            g.$setViewValue(e.val())
                        })
                    });
                    var h = new RegExp("^" + c + "$", ["i"]);
                    g.$parsers.unshift(function(a) {
                        return !a || h.test(a) ? (g.$setValidity("time", !0), a) : (g.$setValidity("time", !1), void 0)
                    })
                }
                e.attr("data-toggle", "timepicker"), e.parent().addClass("bootstrap-timepicker"), e.timepicker(b.timepicker || {});
                var i = e.data("timepicker"),
                    j = e.siblings('[data-toggle="timepicker"]');
                j.length && j.on("click", $.proxy(i.showWidget, i))
            }
        }
    }]), angular.module("$strap.directives").directive("bsTooltip", ["$parse", "$compile", function(a) {
        return {
            restrict: "A",
            scope: !0,
            link: function(b, c, d) {
                var e = a(d.bsTooltip),
                    f = (e.assign, e(b));
                b.$watch(d.bsTooltip, function(a, b) {
                    a !== b && (f = a)
                }), d.unique && c.on("show", function() {
                    $(".tooltip.in").each(function() {
                        var a = $(this),
                            b = a.data("tooltip");
                        b && !b.$element.is(c) && a.tooltip("hide")
                    })
                }), c.tooltip({
                    title: function() {
                        return angular.isFunction(f) ? f.apply(null, arguments) : f
                    },
                    html: !0
                });
                var g = c.data("tooltip");
                g.show = function() {
                    var a = $.fn.tooltip.Constructor.prototype.show.apply(this, arguments);
                    return this.tip().data("tooltip", this), a
                }, b._tooltip = function(a) {
                    c.tooltip(a)
                }, b.hide = function() {
                    c.tooltip("hide")
                }, b.show = function() {
                    c.tooltip("show")
                }, b.dismiss = b.hide
            }
        }
    }]), angular.module("$strap.directives").directive("bsTypeahead", ["$parse", function(a) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(b, c, d, e) {
                var f = a(d.bsTypeahead),
                    g = (f.assign, f(b));
                b.$watch(d.bsTypeahead, function(a, b) {
                    a !== b && (g = a)
                }), c.attr("data-provide", "typeahead"), c.typeahead({
                    source: function() {
                        return angular.isFunction(g) ? g.apply(null, arguments) : g
                    },
                    minLength: d.minLength || 1,
                    items: d.items,
                    updater: function(a) {
                        return e && b.$apply(function() {
                            e.$setViewValue(a)
                        }), b.$emit("typeahead-updated", a), a
                    }
                });
                var h = c.data("typeahead");
                h.lookup = function() {
                    var a;
                    return this.query = this.$element.val() || "", this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (a = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source, a ? this.process(a) : this)
                }, d.matchAll && (h.matcher = function() {
                    return !0
                }), "0" === d.minLength && setTimeout(function() {
                    c.on("focus", function() {
                        0 === c.val().length && setTimeout(c.typeahead.bind(c, "lookup"), 200)
                    })
                })
            }
        }
    }]), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.datepicker", "ui.bootstrap.dialog", "ui.bootstrap.dropdownToggle", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.position", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/dialog/message.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function() {
                        c.$apply(function() {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function() {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function() {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
        var b = function(a, b, c) {
            b.removeClass("collapse"), b.css({
                height: c
            }), b[0].offsetWidth, b.addClass("collapse")
        };
        return {
            link: function(c, d, e) {
                var f, g = !0;
                c.$watch(function() {
                    return d[0].scrollHeight
                }, function() {
                    0 !== d[0].scrollHeight && (f || (g ? b(c, d, d[0].scrollHeight + "px") : b(c, d, "auto")))
                }), c.$watch(e.collapse, function(a) {
                    a ? k() : j()
                });
                var h, i = function(b) {
                        return h && h.cancel(), h = a(d, b), h.then(function() {
                            h = void 0
                        }, function() {
                            h = void 0
                        }), h
                    },
                    j = function() {
                        g ? (g = !1, f || b(c, d, "auto")) : i({
                            height: d[0].scrollHeight + "px"
                        }).then(function() {
                            f || b(c, d, "auto")
                        }), f = !1
                    },
                    k = function() {
                        f = !0, g ? (g = !1, b(c, d, 0)) : (b(c, d, d[0].scrollHeight + "px"), i({
                            height: "0"
                        }))
                    }
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(this.groups.indexOf(a), 1)
        }
    }]).directive("accordion", function() {
        return {
            restrict: "EA",
            controller: "AccordionController",
            transclude: !0,
            replace: !1,
            templateUrl: "template/accordion/accordion.html"
        }
    }).directive("accordionGroup", ["$parse", "$transition", "$timeout", function(a) {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@"
            },
            controller: ["$scope", function() {
                this.setHeading = function(a) {
                    this.heading = a
                }
            }],
            link: function(b, c, d, e) {
                var f, g;
                e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$watch(function() {
                    return f(b.$parent)
                }, function(a) {
                    b.isOpen = a
                }), b.isOpen = f ? f(b.$parent) : !1), b.$watch("isOpen", function(a) {
                    a && e.closeOthers(b), g && g(b.$parent, a)
                })
            }
        }
    }]).directive("accordionHeading", function() {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            compile: function(a, b, c) {
                return function(a, b, d, e) {
                    e.setHeading(c(a, function() {}))
                }
            }
        }
    }).directive("accordionTransclude", function() {
        return {
            require: "^accordionGroup",
            link: function(a, b, c, d) {
                a.$watch(function() {
                    return d[c.accordionTransclude]
                }, function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).directive("alert", function() {
        return {
            restrict: "EA",
            templateUrl: "template/alert/alert.html",
            transclude: !0,
            replace: !0,
            scope: {
                type: "=",
                close: "&"
            },
            link: function(a, b, c) {
                a.closeable = "close" in c
            }
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).directive("btnRadio", ["buttonConfig", function(a) {
        var b = a.activeClass || "active",
            c = a.toggleEvent || "click";
        return {
            require: "ngModel",
            link: function(a, d, e, f) {
                f.$render = function() {
                    d.toggleClass(b, angular.equals(f.$modelValue, a.$eval(e.btnRadio)))
                }, d.bind(c, function() {
                    d.hasClass(b) || a.$apply(function() {
                        f.$setViewValue(a.$eval(e.btnRadio)), f.$render()
                    })
                })
            }
        }
    }]).directive("btnCheckbox", ["buttonConfig", function(a) {
        var b = a.activeClass || "active",
            c = a.toggleEvent || "click";
        return {
            require: "ngModel",
            link: function(a, d, e, f) {
                var g = a.$eval(e.btnCheckboxTrue),
                    h = a.$eval(e.btnCheckboxFalse);
                g = angular.isDefined(g) ? g : !0, h = angular.isDefined(h) ? h : !1, f.$render = function() {
                    d.toggleClass(b, angular.equals(f.$modelValue, g))
                }, d.bind(c, function() {
                    a.$apply(function() {
                        f.$setViewValue(d.hasClass(b) ? h : g), f.$render()
                    })
                })
            }
        }
    }]), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", "$q", function(a, b, c) {
        function d() {
            function c() {
                f ? (a.next(), d()) : a.pause()
            }
            e && b.cancel(e);
            var g = +a.interval;
            !isNaN(g) && g >= 0 && (e = b(c, g))
        }
        var e, f, g = this,
            h = g.slides = [],
            i = -1;
        g.currentSlide = null, g.select = function(e, f) {
            function j() {
                g.currentSlide && angular.isString(f) && !a.noTransition && e.$element ? (e.$element.addClass(f), e.$element[0].offsetWidth = e.$element[0].offsetWidth, angular.forEach(h, function(a) {
                    angular.extend(a, {
                        direction: "",
                        entering: !1,
                        leaving: !1,
                        active: !1
                    })
                }), angular.extend(e, {
                    direction: f,
                    active: !0,
                    entering: !0
                }), angular.extend(g.currentSlide || {}, {
                    direction: f,
                    leaving: !0
                }), a.$currentTransition = c(e.$element, {}), function(b, c) {
                    a.$currentTransition.then(function() {
                        k(b, c)
                    }, function() {
                        k(b, c)
                    })
                }(e, g.currentSlide)) : k(e, g.currentSlide), g.currentSlide = e, i = l, d()
            }

            function k(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var l = h.indexOf(e);
            void 0 === f && (f = l > i ? "next" : "prev"), e && e !== g.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(j)) : j())
        }, g.indexOfSlide = function(a) {
            return h.indexOf(a)
        }, a.next = function() {
            var b = (i + 1) % h.length;
            return a.$currentTransition ? void 0 : g.select(h[b], "next")
        }, a.prev = function() {
            var b = 0 > i - 1 ? h.length - 1 : i - 1;
            return a.$currentTransition ? void 0 : g.select(h[b], "prev")
        }, a.select = function(a) {
            g.select(a)
        }, a.isActive = function(a) {
            return g.currentSlide === a
        }, a.slides = function() {
            return h
        }, a.$watch("interval", d), a.play = function() {
            f || (f = !0, d())
        }, a.pause = function() {
            a.noPause || (f = !1, e && b.cancel(e))
        }, g.addSlide = function(b, c) {
            b.$element = c, h.push(b), 1 === h.length || b.active ? (g.select(h[h.length - 1]), 1 == h.length && a.play()) : b.active = !1
        }, g.removeSlide = function(a) {
            var b = h.indexOf(a);
            h.splice(b, 1), h.length > 0 && a.active ? b >= h.length ? g.select(h[b - 1]) : g.select(h[b]) : i > b && i--
        }
    }]).directive("carousel", [function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }]).directive("slide", ["$parse", function(a) {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {},
            link: function(b, c, d, e) {
                if (d.active) {
                    var f = a(d.active),
                        g = f.assign,
                        h = b.active = f(b.$parent);
                    b.$watch(function() {
                        var a = f(b.$parent);
                        return a !== b.active && (a !== h ? h = b.active = a : g(b.$parent, a = h = b.active)), a
                    })
                }
                e.addSlide(b, c), b.$on("$destroy", function() {
                    e.removeSlide(b)
                }), b.$watch("active", function(a) {
                    a && e.select(b)
                })
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", []).constant("datepickerConfig", {
        dayFormat: "dd",
        monthFormat: "MMMM",
        yearFormat: "yyyy",
        dayHeaderFormat: "EEE",
        dayTitleFormat: "MMMM yyyy",
        monthTitleFormat: "yyyy",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20
    }).directive("datepicker", ["dateFilter", "$parse", "datepickerConfig", function(a, b, c) {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                model: "=ngModel",
                dateDisabled: "&"
            },
            templateUrl: "template/datepicker/datepicker.html",
            link: function(d, e, f) {
                function g(a, b, c) {
                    d.rows = a, d.labels = b, d.title = c
                }

                function h() {
                    d.showWeekNumbers = "day" === d.mode && l
                }

                function j(a, b) {
                    return "year" === d.mode ? b.getFullYear() - a.getFullYear() : "month" === d.mode ? new Date(b.getFullYear(), b.getMonth()) - new Date(a.getFullYear(), a.getMonth()) : "day" === d.mode ? new Date(b.getFullYear(), b.getMonth(), b.getDate()) - new Date(a.getFullYear(), a.getMonth(), a.getDate()) : void 0
                }

                function k(a) {
                    return m && j(a, m) > 0 || n && j(a, n) < 0 || d.dateDisabled && d.dateDisabled({
                        date: a,
                        mode: d.mode
                    })
                }
                d.mode = "day";
                var l, m, n, o = new Date,
                    p = {};
                p.day = angular.isDefined(f.dayFormat) ? d.$eval(f.dayFormat) : c.dayFormat, p.month = angular.isDefined(f.monthFormat) ? d.$eval(f.monthFormat) : c.monthFormat, p.year = angular.isDefined(f.yearFormat) ? d.$eval(f.yearFormat) : c.yearFormat, p.dayHeader = angular.isDefined(f.dayHeaderFormat) ? d.$eval(f.dayHeaderFormat) : c.dayHeaderFormat, p.dayTitle = angular.isDefined(f.dayTitleFormat) ? d.$eval(f.dayTitleFormat) : c.dayTitleFormat, p.monthTitle = angular.isDefined(f.monthTitleFormat) ? d.$eval(f.monthTitleFormat) : c.monthTitleFormat;
                var q = angular.isDefined(f.startingDay) ? d.$eval(f.startingDay) : c.startingDay,
                    r = angular.isDefined(f.yearRange) ? d.$eval(f.yearRange) : c.yearRange;
                f.showWeeks ? d.$parent.$watch(b(f.showWeeks), function(a) {
                    l = !!a, h()
                }) : (l = c.showWeeks, h()), f.min && d.$parent.$watch(b(f.min), function(a) {
                    m = new Date(a), v()
                }), f.max && d.$parent.$watch(b(f.max), function(a) {
                    n = new Date(a), v()
                });
                var s = function(a, b) {
                        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
                        return c
                    },
                    t = function(a, b) {
                        return new Date(a, b + 1, 0).getDate()
                    },
                    u = {
                        day: function() {
                            function b(b, d, f) {
                                for (var g = 0; d > g; g++) c.push({
                                    date: new Date(b),
                                    isCurrent: f,
                                    isSelected: w(b),
                                    label: a(b, p.day),
                                    disabled: k(b)
                                }), b.setDate(b.getDate() + 1);
                                e = b
                            }
                            var c = [],
                                d = [],
                                e = null,
                                f = new Date(o);
                            f.setDate(1);
                            var h = q - f.getDay(),
                                j = h > 0 ? 7 - h : -h;
                            for (j > 0 && (f.setDate(-j + 1), b(f, j, !1)), b(e || f, t(o.getFullYear(), o.getMonth()), !0), b(e, (7 - c.length % 7) % 7, !1), i = 0; 7 > i; i++) d.push(a(c[i].date, p.dayHeader));
                            g(s(c, 7), d, a(o, p.dayTitle))
                        },
                        month: function() {
                            for (var b = [], c = 0, d = o.getFullYear(); 12 > c;) {
                                var e = new Date(d, c++, 1);
                                b.push({
                                    date: e,
                                    isCurrent: !0,
                                    isSelected: w(e),
                                    label: a(e, p.month),
                                    disabled: k(e)
                                })
                            }
                            g(s(b, 3), [], a(o, p.monthTitle))
                        },
                        year: function() {
                            for (var b = [], c = parseInt((o.getFullYear() - 1) / r, 10) * r + 1, d = 0; r > d; d++) {
                                var e = new Date(c + d, 0, 1);
                                b.push({
                                    date: e,
                                    isCurrent: !0,
                                    isSelected: w(e),
                                    label: a(e, p.year),
                                    disabled: k(e)
                                })
                            }
                            var f = b[0].label + " - " + b[b.length - 1].label;
                            g(s(b, 5), [], f)
                        }
                    },
                    v = function() {
                        u[d.mode]()
                    },
                    w = function(a) {
                        if (d.model && d.model.getFullYear() === a.getFullYear()) {
                            if ("year" === d.mode) return !0;
                            if (d.model.getMonth() === a.getMonth()) return "month" === d.mode || "day" === d.mode && d.model.getDate() === a.getDate()
                        }
                        return !1
                    };
                d.$watch("model", function(a, b) {
                    angular.isDate(a) && (o = angular.copy(a)), angular.equals(a, b) || v()
                }), d.$watch("mode", function() {
                    h(), v()
                }), d.select = function(a) {
                    o = new Date(a), "year" === d.mode ? (d.mode = "month", o.setFullYear(a.getFullYear())) : "month" === d.mode ? (d.mode = "day", o.setMonth(a.getMonth())) : "day" === d.mode && (d.model = new Date(o))
                }, d.move = function(a) {
                    "day" === d.mode ? o.setMonth(o.getMonth() + a) : "month" === d.mode ? o.setFullYear(o.getFullYear() + a) : "year" === d.mode && o.setFullYear(o.getFullYear() + a * r), v()
                }, d.toggleMode = function() {
                    d.mode = "day" === d.mode ? "month" : "month" === d.mode ? "year" : "day"
                }, d.getWeekNumber = function(a) {
                    if ("day" === d.mode && d.showWeekNumbers && 7 === a.length) {
                        var b = q > 4 ? 11 - q : 4 - q,
                            c = new Date(a[b].date);
                        return c.setHours(0, 0, 0), Math.ceil(((c - new Date(c.getFullYear(), 0, 1)) / 864e5 + 1) / 7)
                    }
                }
            }
        }
    }]);
var dialogModule = angular.module("ui.bootstrap.dialog", ["ui.bootstrap.transition"]);
dialogModule.controller("MessageBoxController", ["$scope", "dialog", "model", function(a, b, c) {
    a.title = c.title, a.message = c.message, a.buttons = c.buttons, a.close = function(a) {
        b.close(a)
    }
}]), dialogModule.provider("$dialog", function() {
    var a = {
            backdrop: !0,
            dialogClass: "modal",
            backdropClass: "modal-backdrop",
            transitionClass: "fade",
            triggerClass: "in",
            resolve: {},
            backdropFade: !1,
            dialogFade: !1,
            keyboard: !0,
            backdropClick: !0
        },
        b = {},
        c = {
            value: 0
        };
    this.options = function(a) {
        b = a
    }, this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition", "$injector", function(d, e, f, g, h, i, j, k, l) {
        function m(a) {
            var b = angular.element("<div>");
            return b.addClass(a), b
        }

        function n(c) {
            var d = this,
                e = this.options = angular.extend({}, a, b, c);
            this._open = !1, this.backdropEl = m(e.backdropClass), e.backdropFade && (this.backdropEl.addClass(e.transitionClass), this.backdropEl.removeClass(e.triggerClass)), this.modalEl = m(e.dialogClass), e.dialogFade && (this.modalEl.addClass(e.transitionClass), this.modalEl.removeClass(e.triggerClass)), this.handledEscapeKey = function(a) {
                27 === a.which && (d.close(), a.preventDefault(), d.$scope.$apply())
            }, this.handleBackDropClick = function(a) {
                d.close(), a.preventDefault(), d.$scope.$apply()
            }, this.handleLocationChange = function() {
                d.close()
            }
        }
        var o = e.find("body");
        return n.prototype.isOpen = function() {
            return this._open
        }, n.prototype.open = function(a, b) {
            var c = this,
                d = this.options;
            if (a && (d.templateUrl = a), b && (d.controller = b), !d.template && !d.templateUrl) throw new Error("Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.");
            return this._loadResolves().then(function(a) {
                var b = a.$scope = c.$scope = a.$scope ? a.$scope : g.$new();
                if (c.modalEl.html(a.$template), c.options.controller) {
                    var d = h(c.options.controller, a);
                    c.modalEl.children().data("ngControllerController", d)
                }
                f(c.modalEl)(b), c._addElementsToDom(), setTimeout(function() {
                    c.options.dialogFade && c.modalEl.addClass(c.options.triggerClass), c.options.backdropFade && c.backdropEl.addClass(c.options.triggerClass)
                }), c._bindEvents()
            }), this.deferred = j.defer(), this.deferred.promise
        }, n.prototype.close = function(a) {
            function b(a) {
                a.removeClass(d.options.triggerClass)
            }

            function c() {
                d._open && d._onCloseComplete(a)
            }
            var d = this,
                e = this._getFadingElements();
            if (e.length > 0)
                for (var f = e.length - 1; f >= 0; f--) k(e[f], b).then(c);
            else this._onCloseComplete(a)
        }, n.prototype._getFadingElements = function() {
            var a = [];
            return this.options.dialogFade && a.push(this.modalEl), this.options.backdropFade && a.push(this.backdropEl), a
        }, n.prototype._bindEvents = function() {
            this.options.keyboard && o.bind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind("click", this.handleBackDropClick)
        }, n.prototype._unbindEvents = function() {
            this.options.keyboard && o.unbind("keydown", this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind("click", this.handleBackDropClick)
        }, n.prototype._onCloseComplete = function(a) {
            this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(a)
        }, n.prototype._addElementsToDom = function() {
            o.append(this.modalEl), this.options.backdrop && (0 === c.value && o.append(this.backdropEl), c.value++), this._open = !0
        }, n.prototype._removeElementsFromDom = function() {
            this.modalEl.remove(), this.options.backdrop && (c.value--, 0 === c.value && this.backdropEl.remove()), this._open = !1
        }, n.prototype._loadResolves = function() {
            var a, b = [],
                c = [],
                e = this;
            return this.options.template ? a = j.when(this.options.template) : this.options.templateUrl && (a = d.get(this.options.templateUrl, {
                cache: i
            }).then(function(a) {
                return a.data
            })), angular.forEach(this.options.resolve || [], function(a, d) {
                c.push(d), b.push(angular.isString(a) ? l.get(a) : l.invoke(a))
            }), c.push("$template"), b.push(a), j.all(b).then(function(a) {
                var b = {};
                return angular.forEach(a, function(a, d) {
                    b[c[d]] = a
                }), b.dialog = e, b
            })
        }, {
            dialog: function(a) {
                return new n(a)
            },
            messageBox: function(a, b, c) {
                return new n({
                    templateUrl: "template/dialog/message.html",
                    controller: "MessageBoxController",
                    resolve: {
                        model: function() {
                            return {
                                title: a,
                                message: b,
                                buttons: c
                            }
                        }
                    }
                })
            }
        }
    }]
}), angular.module("ui.bootstrap.dropdownToggle", []).directive("dropdownToggle", ["$document", "$location", function(a) {
    var b = null,
        c = angular.noop;
    return {
        restrict: "CA",
        link: function(d, e) {
            d.$watch("$location.path", function() {
                c()
            }), e.parent().bind("click", function() {
                c()
            }), e.bind("click", function(d) {
                var f = e === b;
                d.preventDefault(), d.stopPropagation(), b && c(), f || (e.parent().addClass("open"), b = e, c = function(d) {
                    d && (d.preventDefault(), d.stopPropagation()), a.unbind("click", c), e.parent().removeClass("open"), c = angular.noop, b = null
                }, a.bind("click", c))
            })
        }
    }
}]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.dialog"]).directive("modal", ["$parse", "$dialog", function(a, b) {
    return {
        restrict: "EA",
        terminal: !0,
        link: function(c, d, e) {
            var f, g = angular.extend({}, c.$eval(e.uiOptions || e.bsOptions || e.options)),
                h = e.modal || e.show;
            g = angular.extend(g, {
                template: d.html(),
                resolve: {
                    $scope: function() {
                        return c
                    }
                }
            });
            var i = b.dialog(g);
            d.remove(), f = e.close ? function() {
                a(e.close)(c)
            } : function() {
                angular.isFunction(a(h).assign) && a(h).assign(c, !1)
            }, c.$watch(h, function(a) {
                a ? i.open().then(function() {
                    f()
                }) : i.isOpen() && i.close()
            })
        }
    }
}]), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", function(a) {
    a.noPrevious = function() {
        return 1 === a.currentPage
    }, a.noNext = function() {
        return a.currentPage === a.numPages
    }, a.isActive = function(b) {
        return a.currentPage === b
    }, a.selectPage = function(b) {
        !a.isActive(b) && b > 0 && b <= a.numPages && (a.currentPage = b, a.onSelectPage({
            page: b
        }))
    }
}]).constant("paginationConfig", {
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["paginationConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            numPages: "=",
            currentPage: "=",
            maxSize: "=",
            onSelectPage: "&"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(b, c, d) {
            function e(a, b, c, d) {
                return {
                    number: a,
                    text: b,
                    active: c,
                    disabled: d
                }
            }
            var f = angular.isDefined(d.boundaryLinks) ? b.$eval(d.boundaryLinks) : a.boundaryLinks,
                g = angular.isDefined(d.directionLinks) ? b.$eval(d.directionLinks) : a.directionLinks,
                h = angular.isDefined(d.firstText) ? b.$parent.$eval(d.firstText) : a.firstText,
                i = angular.isDefined(d.previousText) ? b.$parent.$eval(d.previousText) : a.previousText,
                j = angular.isDefined(d.nextText) ? b.$parent.$eval(d.nextText) : a.nextText,
                k = angular.isDefined(d.lastText) ? b.$parent.$eval(d.lastText) : a.lastText,
                l = angular.isDefined(d.rotate) ? b.$eval(d.rotate) : a.rotate;
            b.$watch("numPages + currentPage + maxSize", function() {
                b.pages = [];
                var a = 1,
                    c = b.numPages,
                    d = angular.isDefined(b.maxSize) && b.maxSize < b.numPages;
                d && (l ? (a = Math.max(b.currentPage - Math.floor(b.maxSize / 2), 1), c = a + b.maxSize - 1, c > b.numPages && (c = b.numPages, a = c - b.maxSize + 1)) : (a = (Math.ceil(b.currentPage / b.maxSize) - 1) * b.maxSize + 1, c = Math.min(a + b.maxSize - 1, b.numPages)));
                for (var m = a; c >= m; m++) {
                    var n = e(m, m, b.isActive(m), !1);
                    b.pages.push(n)
                }
                if (d && !l) {
                    if (a > 1) {
                        var o = e(a - 1, "...", !1, !1);
                        b.pages.unshift(o)
                    }
                    if (c < b.numPages) {
                        var p = e(c + 1, "...", !1, !1);
                        b.pages.push(p)
                    }
                }
                if (g) {
                    var q = e(b.currentPage - 1, i, !1, b.noPrevious());
                    b.pages.unshift(q);
                    var r = e(b.currentPage + 1, j, !1, b.noNext());
                    b.pages.push(r)
                }
                if (f) {
                    var s = e(1, h, !1, b.noPrevious());
                    b.pages.unshift(s);
                    var t = e(b.numPages, k, !1, b.noNext());
                    b.pages.push(t)
                }
                b.currentPage > b.numPages && b.selectPage(b.numPages)
            })
        }
    }
}]).constant("pagerConfig", {
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            numPages: "=",
            currentPage: "=",
            onSelectPage: "&"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d) {
            function e(a, b, c, d, e) {
                return {
                    number: a,
                    text: b,
                    disabled: c,
                    previous: h && d,
                    next: h && e
                }
            }
            var f = angular.isDefined(d.previousText) ? b.$parent.$eval(d.previousText) : a.previousText,
                g = angular.isDefined(d.nextText) ? b.$parent.$eval(d.nextText) : a.nextText,
                h = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align;
            b.$watch("numPages + currentPage", function() {
                b.pages = [];
                var a = e(b.currentPage - 1, f, b.noPrevious(), !0, !1);
                b.pages.unshift(a);
                var c = e(b.currentPage + 1, g, b.noNext(), !1, !0);
                b.pages.push(c), b.currentPage > b.numPages && b.selectPage(b.numPages)
            })
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return "static" === (c(a, "position") || "static")
    }
    var e, f;
    a.bind("mousemove", function(a) {
        e = a.pageX, f = a.pageY
    });
    var g = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
        return e || c
    };
    return {
        position: function(b) {
            var c = this.offset(b),
                d = {
                    top: 0,
                    left: 0
                },
                e = g(b[0]);
            return e != a[0] && (d = this.offset(angular.element(e)), d.top += e.clientTop, d.left += e.clientLeft), {
                width: b.prop("offsetWidth"),
                height: b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: c.prop("offsetWidth"),
                height: c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].body.scrollTop),
                left: d.left + (b.pageXOffset || a[0].body.scrollLeft)
            }
        },
        mouse: function() {
            return {
                x: e,
                y: f
            }
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function(e, f, g, h, i, j, k) {
        return function(e, l, m) {
            function n(a) {
                var b, d;
                return b = a || o.trigger || m, d = angular.isDefined(o.trigger) ? c[o.trigger] || b : c[b] || b, {
                    show: b,
                    hide: d
                }
            }
            var o = angular.extend({}, b, d),
                p = a(e),
                q = n(void 0),
                r = k.startSymbol(),
                s = k.endSymbol(),
                t = "<" + p + "-popup " + 'title="' + r + "tt_title" + s + '" ' + 'content="' + r + "tt_content" + s + '" ' + 'placement="' + r + "tt_placement" + s + '" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + ">" + "</" + p + "-popup>";
            return {
                restrict: "EA",
                scope: !0,
                link: function(a, b, c) {
                    function d() {
                        a.tt_isOpen ? m() : k()
                    }

                    function k() {
                        a.tt_popupDelay ? u = g(p, a.tt_popupDelay) : a.$apply(p)
                    }

                    function m() {
                        a.$apply(function() {
                            r()
                        })
                    }

                    function p() {
                        var c, d, e, f;
                        if (a.tt_content) {
                            switch (s && g.cancel(s), w.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), x ? (v = v || i.find("body"), v.append(w)) : b.after(w), c = o.appendToBody ? j.offset(b) : j.position(b), d = w.prop("offsetWidth"), e = w.prop("offsetHeight"), a.tt_placement) {
                                case "mouse":
                                    var h = j.mouse();
                                    f = {
                                        top: h.y,
                                        left: h.x
                                    };
                                    break;
                                case "right":
                                    f = {
                                        top: c.top + c.height / 2 - e / 2,
                                        left: c.left + c.width
                                    };
                                    break;
                                case "bottom":
                                    f = {
                                        top: c.top + c.height,
                                        left: c.left + c.width / 2 - d / 2
                                    };
                                    break;
                                case "left":
                                    f = {
                                        top: c.top + c.height / 2 - e / 2,
                                        left: c.left - d
                                    };
                                    break;
                                default:
                                    f = {
                                        top: c.top - e,
                                        left: c.left + c.width / 2 - d / 2
                                    }
                            }
                            f.top += "px", f.left += "px", w.css(f), a.tt_isOpen = !0
                        }
                    }

                    function r() {
                        a.tt_isOpen = !1, g.cancel(u), angular.isDefined(a.tt_animation) && a.tt_animation() ? s = g(function() {
                            w.remove()
                        }, 500) : w.remove()
                    }
                    var s, u, v, w = f(t)(a),
                        x = angular.isDefined(o.appendToBody) ? o.appendToBody : !1;
                    a.tt_isOpen = !1, c.$observe(e, function(b) {
                        a.tt_content = b
                    }), c.$observe(l + "Title", function(b) {
                        a.tt_title = b
                    }), c.$observe(l + "Placement", function(b) {
                        a.tt_placement = angular.isDefined(b) ? b : o.placement
                    }), c.$observe(l + "Animation", function(b) {
                        a.tt_animation = angular.isDefined(b) ? h(b) : function() {
                            return o.animation
                        }
                    }), c.$observe(l + "PopupDelay", function(b) {
                        var c = parseInt(b, 10);
                        a.tt_popupDelay = isNaN(c) ? o.popupDelay : c
                    }), c.$observe(l + "Trigger", function(a) {
                        b.unbind(q.show), b.unbind(q.hide), q = n(a), q.show === q.hide ? b.bind(q.show, d) : (b.bind(q.show, k), b.bind(q.hide, m))
                    }), c.$observe(l + "AppendToBody", function(b) {
                        x = angular.isDefined(b) ? h(b)(a) : x
                    }), x && a.$on("$locationChangeSuccess", function() {
                        a.tt_isOpen && r()
                    }), a.$on("$destroy", function() {
                        a.tt_isOpen ? r() : w.remove()
                    })
                }
            }
        }
    }]
}).directive("tooltipPopup", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$compile", "$timeout", "$parse", "$window", "$tooltip", function(a, b, c, d, e) {
    return e("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", ["ui.bootstrap.transition"]).constant("progressConfig", {
    animate: !0,
    autoType: !1,
    stackedTypes: ["success", "info", "warning", "danger"]
}).controller("ProgressBarController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    function d(a) {
        return g[a]
    }
    var e = angular.isDefined(b.animate) ? a.$eval(b.animate) : c.animate,
        f = angular.isDefined(b.autoType) ? a.$eval(b.autoType) : c.autoType,
        g = angular.isDefined(b.stackedTypes) ? a.$eval("[" + b.stackedTypes + "]") : c.stackedTypes;
    this.makeBar = function(a, b, c) {
        var g = angular.isObject(a) ? a.value : a || 0,
            h = angular.isObject(b) ? b.value : b || 0,
            i = angular.isObject(a) && angular.isDefined(a.type) ? a.type : f ? d(c || 0) : null;
        return {
            from: h,
            to: g,
            type: i,
            animate: e
        }
    }, this.addBar = function(b) {
        a.bars.push(b), a.totalPercent += b.to
    }, this.clearBars = function() {
        a.bars = [], a.totalPercent = 0
    }, this.clearBars()
}]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        controller: "ProgressBarController",
        scope: {
            value: "=percent",
            onFull: "&",
            onEmpty: "&"
        },
        templateUrl: "template/progressbar/progress.html",
        link: function(a, b, c, d) {
            a.$watch("value", function(a, b) {
                if (d.clearBars(), angular.isArray(a))
                    for (var c = 0, e = a.length; e > c; c++) d.addBar(d.makeBar(a[c], b[c], c));
                else d.addBar(d.makeBar(a, b))
            }, !0), a.$watch("totalPercent", function(b) {
                b >= 100 ? a.onFull() : 0 >= b && a.onEmpty()
            }, !0)
        }
    }
}).directive("progressbar", ["$transition", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            width: "=",
            old: "=",
            type: "=",
            animate: "="
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(b, c) {
            b.$watch("width", function(d) {
                b.animate ? (c.css("width", b.old + "%"), a(c, {
                    width: d + "%"
                })) : c.css("width", d + "%")
            })
        }
    }
}]), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5
}).directive("rating", ["ratingConfig", "$parse", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            value: "="
        },
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(c, d, e) {
            var f = angular.isDefined(e.max) ? c.$eval(e.max) : a.max;
            c.range = [];
            for (var g = 1; f >= g; g++) c.range.push(g);
            c.rate = function(a) {
                c.readonly || (c.value = a)
            }, c.enter = function(a) {
                c.readonly || (c.val = a)
            }, c.reset = function() {
                c.val = angular.copy(c.value)
            }, c.reset(), c.$watch("value", function(a) {
                c.val = a
            }), c.readonly = !1, e.readonly && c.$parent.$watch(b(e.readonly), function(a) {
                c.readonly = !!a
            })
        }
    }
}]), angular.module("ui.bootstrap.tabs", []).directive("tabs", function() {
    return function() {
        throw new Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")
    }
}).controller("TabsetController", ["$scope", "$element", function(a) {
    var b = this,
        c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(a) {
            a.active = !1
        }), a.active = !0
    }, b.addTab = function(a) {
        c.push(a), 1 == c.length && b.select(a)
    }, b.removeTab = function(a) {
        var d = c.indexOf(a);
        if (a.active && c.length > 1) {
            var e = d == c.length - 1 ? d - 1 : d + 1;
            b.select(c[e])
        }
        c.splice(d, 1)
    }
}]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        scope: {},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$eval(c.vertical) : !1, a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs"
        }
    }
}).directive("tab", ["$parse", "$http", "$templateCache", "$compile", function(a) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            heading: "@",
            onSelect: "&select"
        },
        controller: function() {},
        compile: function(b, c, d) {
            return function(b, c, e, f) {
                var g, h;
                b.active = !1, e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function(a) {
                    a && b.disabled ? h(b.$parent, !1) : b.active = !!a
                })) : h = g = angular.noop, b.$watch("active", function(a) {
                    h(b.$parent, a), a && (f.select(b), b.onSelect())
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                    b.disabled = !!a
                }), b.select = function() {
                    b.disabled || (b.active = !0)
                }, f.addTab(b), b.$on("$destroy", function() {
                    f.removeTab(b)
                }), b.active && h(b.$parent, !0), d(b.$parent, function(a) {
                    var c, d = [];
                    angular.forEach(a, function(a) {
                        a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" == a.tagName.toLowerCase() || "data-tab-heading" == a.tagName.toLowerCase()) ? c = a : d.push(a)
                    }), c && (b.headingElement = angular.element(c)), b.contentElement = angular.element(d)
                })
            }
        }
    }
}]).directive("tabHeadingTransclude", [function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}]).directive("tabContentTransclude", ["$parse", function(a) {
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            b.$watch(a(d.tabContentTransclude), function(a) {
                c.html(""), a && c.append(a.contentElement)
            })
        }
    }
}]), angular.module("ui.bootstrap.timepicker", []).filter("pad", function() {
    return function(a) {
        return angular.isDefined(a) && a.toString().length < 2 && (a = "0" + a), a
    }
}).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: ["AM", "PM"],
    readonlyInput: !1,
    mousewheel: !0
}).directive("timepicker", ["padFilter", "$parse", "timepickerConfig", function(a, b, c) {
    return {
        restrict: "EA",
        require: "ngModel",
        replace: !0,
        templateUrl: "template/timepicker/timepicker.html",
        scope: {
            model: "=ngModel"
        },
        link: function(d, e, f) {
            function g() {
                var a = parseInt(d.hours, 10),
                    b = d.showMeridian ? a > 0 && 13 > a : a >= 0 && 24 > a;
                return b ? (d.showMeridian && (12 === a && (a = 0), d.meridian === k[1] && (a += 12)), a) : void 0
            }

            function h() {
                var b = j.getHours();
                d.showMeridian && (b = 0 === b || 12 === b ? 12 : b % 12), d.hours = "h" === s ? b : a(b), d.validHours = !0;
                var c = j.getMinutes();
                d.minutes = "m" === s ? c : a(c), d.validMinutes = !0, d.meridian = d.showMeridian ? j.getHours() < 12 ? k[0] : k[1] : "", s = !1
            }

            function i(a) {
                var b = new Date(j.getTime() + 6e4 * a);
                b.getDate() !== j.getDate() && b.setDate(b.getDate() - 1), j.setTime(b.getTime()), d.model = new Date(j)
            }
            var j = new Date,
                k = c.meridians,
                l = c.hourStep;
            f.hourStep && d.$parent.$watch(b(f.hourStep), function(a) {
                l = parseInt(a, 10)
            });
            var m = c.minuteStep;
            f.minuteStep && d.$parent.$watch(b(f.minuteStep), function(a) {
                m = parseInt(a, 10)
            }), d.showMeridian = c.showMeridian, f.showMeridian && d.$parent.$watch(b(f.showMeridian), function(a) {
                if (d.showMeridian = !!a, d.model) h();
                else {
                    var b = new Date(j),
                        c = g();
                    angular.isDefined(c) && b.setHours(c), d.model = new Date(b)
                }
            });
            var n = e.find("input"),
                o = n.eq(0),
                p = n.eq(1),
                q = angular.isDefined(f.mousewheel) ? d.$eval(f.mousewheel) : c.mousewheel;
            if (q) {
                var r = function(a) {
                    return a.originalEvent && (a = a.originalEvent), a.detail || a.wheelDelta > 0
                };
                o.bind("mousewheel", function(a) {
                    d.$apply(r(a) ? d.incrementHours() : d.decrementHours()), a.preventDefault()
                }), p.bind("mousewheel", function(a) {
                    d.$apply(r(a) ? d.incrementMinutes() : d.decrementMinutes()), a.preventDefault()
                })
            }
            var s = !1;
            d.readonlyInput = angular.isDefined(f.readonlyInput) ? d.$eval(f.readonlyInput) : c.readonlyInput, d.readonlyInput ? (d.updateHours = angular.noop, d.updateMinutes = angular.noop) : (d.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (s = "h", null === d.model && (d.model = new Date(j)), d.model.setHours(a)) : (d.model = null, d.validHours = !1)
            }, o.bind("blur", function() {
                d.validHours && d.hours < 10 && d.$apply(function() {
                    d.hours = a(d.hours)
                })
            }), d.updateMinutes = function() {
                var a = parseInt(d.minutes, 10);
                a >= 0 && 60 > a ? (s = "m", null === d.model && (d.model = new Date(j)), d.model.setMinutes(a)) : (d.model = null, d.validMinutes = !1)
            }, p.bind("blur", function() {
                d.validMinutes && d.minutes < 10 && d.$apply(function() {
                    d.minutes = a(d.minutes)
                })
            })), d.$watch(function() {
                return +d.model
            }, function(a) {
                !isNaN(a) && a > 0 && (j = new Date(a), h())
            }), d.incrementHours = function() {
                i(60 * l)
            }, d.decrementHours = function() {
                i(60 * -l)
            }, d.incrementMinutes = function() {
                i(m)
            }, d.decrementMinutes = function() {
                i(-m)
            }, d.toggleMeridian = function() {
                i(720 * (j.getHours() < 12 ? 1 : -1))
            }
        }
    }
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            }
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1,
                o = i.$eval(k.typeaheadWaitMs) || 0,
                p = g.parse(k.typeahead),
                q = i.$eval(k.typeaheadEditable) !== !1,
                r = b(k.typeaheadLoading).assign || angular.noop,
                s = b(k.typeaheadOnSelect),
                t = angular.element("<typeahead-popup></typeahead-popup>");
            t.attr({
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            });
            var u = i.$new();
            i.$on("$destroy", function() {
                u.$destroy()
            });
            var v = function() {
                    u.matches = [], u.activeIdx = -1
                },
                w = function(a) {
                    var b = {
                        $viewValue: a
                    };
                    r(i, !0), c.when(p.source(u, b)).then(function(c) {
                        if (a === l.$viewValue) {
                            if (c.length > 0) {
                                u.activeIdx = 0, u.matches.length = 0;
                                for (var d = 0; d < c.length; d++) b[p.itemName] = c[d], u.matches.push({
                                    label: p.viewMapper(u, b),
                                    model: c[d]
                                });
                                u.query = a, u.position = f.position(j), u.position.top = u.position.top + j.prop("offsetHeight")
                            } else v();
                            r(i, !1)
                        }
                    }, function() {
                        v(), r(i, !1)
                    })
                };
            v(), u.query = void 0, l.$parsers.push(function(a) {
                var b;
                return v(), m ? a : (a && a.length >= n && (o > 0 ? (b && d.cancel(b), b = d(function() {
                    w(a)
                }, o)) : w(a)), q ? a : void 0)
            }), l.$render = function() {
                var a = {};
                a[p.itemName] = m || l.$viewValue, j.val(p.viewMapper(u, a) || l.$viewValue), m = void 0
            }, u.select = function(a) {
                var b, c, d = {};
                d[p.itemName] = c = m = u.matches[a].model, b = p.modelMapper(u, d), l.$setViewValue(b), l.$render(), s(u, {
                    $item: c,
                    $model: b,
                    $label: p.viewMapper(u, d)
                }), j[0].focus()
            }, j.bind("keydown", function(a) {
                0 !== u.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (u.activeIdx = (u.activeIdx + 1) % u.matches.length, u.$digest()) : 38 === a.which ? (u.activeIdx = (u.activeIdx ? u.activeIdx : u.matches.length) - 1, u.$digest()) : 13 === a.which || 9 === a.which ? u.$apply(function() {
                    u.select(u.activeIdx)
                }) : 27 === a.which && (a.stopPropagation(), v(), u.$digest()))
            }), e.bind("click", function() {
                v(), u.$digest()
            }), j.after(a(t)(u))
        }
    }
}]).directive("typeaheadPopup", function() {
    return {
        restrict: "E",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead.html",
        link: function(a) {
            a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : c
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="accordion" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", "<div class='alert' ng-class='type && \"alert-\" + type'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<table class="well well-large">\n  <thead>\n    <tr class="text-center">\n      <th><button class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th>\n    </tr>\n    <tr class="text-center" ng-show="labels.length > 0">\n      <th ng-show="showWeekNumbers">#</th>\n      <th ng-repeat="label in labels">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button style="width:100%;" class="btn" ng-class="{\'btn-info\': dt.isSelected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: ! dt.isCurrent}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/dialog/message.html", []).run(["$templateCache", function(a) {
    a.put("template/dialog/message.html", '<div class="modal-header">\n	<h3>{{ title }}</h3>\n</div>\n<div class="modal-body">\n	<p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n	<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class="btn" ng-class="btn.cssClass">{{ btn.label }}</button>\n</div>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop"></div>')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div class="modal in" ng-transclude></div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<div class="pager">\n  <ul>\n    <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="bar" ng-class=\'type && "bar-" + type\'></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n	<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i>\n</span>\n')
}]), angular.module("template/tabs/pane.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/pane.html", '<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-transclude></div>\n')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabs.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabs.html", '<div class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\n      <a ng-click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class="tab-content" ng-transclude></div>\n</div>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '\n<div class="tabbable">\n  <ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical}" ng-transclude>\n  </ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab" tt="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table class="form-inline">\n	<tr class="text-center">\n		<td><a ng-click="incrementHours()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="incrementMinutes()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n	<tr>\n		<td class="control-group" ng-class="{\'error\': !validHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="span1 text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2" /></td>\n		<td>:</td>\n		<td class="control-group" ng-class="{\'error\': !validMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="span1 text-center" ng-readonly="readonlyInput" maxlength="2"></td>\n		<td ng-show="showMeridian"><button ng-click="toggleMeridian()" class="btn text-center">{{meridian}}</button></td>\n	</tr>\n	<tr class="text-center">\n		<td><a ng-click="decrementHours()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="decrementMinutes()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n</table>')
}]), angular.module("template/typeahead/typeahead.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead.html", '<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>')
}]);