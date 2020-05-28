!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function(a, b) {
        return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase();
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return m.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
        c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, 
        f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            if (k.ownLast) for (b in a) return j.call(a, b);
            for (b in a) ;
            return void 0 === b || j.call(a, b);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
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
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, 
    m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a);
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [ d ] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0));
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), 
                u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);
                this.length = 1, this[0] = d;
            }
            return this.context = y, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), m.makeArray(a, this));
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), 
            e = e[b];
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return m.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return m.sibling(a.firstChild);
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), 
            this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }
                return this;
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                }), this;
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], e = 0, this;
            },
            disable: function() {
                return h = i = c = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, c || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? i.push(c) : j(c)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, m.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", m.Callbacks("once memory"), "resolved" ], [ "reject", "fail", m.Callbacks("once memory"), "rejected" ], [ "notify", "progress", m.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this;
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [ m ]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), 
                m(y).off("ready")));
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), 
        a.detachEvent("onload", J));
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), 
        m.ready());
    }
    m.ready.promise = function(b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), 
        a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    I(), m.ready();
                }
            }();
        }
        return H.promise(b);
    };
    var K = "undefined", L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
        d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }
        a = null;
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}
                m.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function P(a) {
        var b;
        for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 
            "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, 
            f;
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [ b ] : (b = m.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([ a ], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        },
        data: function(a, b, c) {
            return Q(a, b, c);
        },
        removeData: function(a, b) {
            return R(a, b);
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return R(a, b, !0);
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), 
                    O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a);
            });
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                })
            });
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [ "Top", "Right", "Bottom", "Left" ], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c) m.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(m(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, 
        k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, 
        a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
        c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, 
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null;
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() {
        return !0;
    }
    function ba() {
        return !1;
    }
    function ca() {
        try {
            return y.activeElement;
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), 
                (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [ "" ], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), 
                o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, 
                j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), 
                j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                m.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), 
                    g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), 
                    delete k[o]);
                } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [ d || y ], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
            p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : m.makeArray(c, [ b ]), 
            k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, 
                f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), 
                f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]();
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l);
                }
                return b.result;
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                    a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                    void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [ i ]).length), 
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, 
                e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, 
        b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), 
            a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            }
        };
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), 
            this.each(function() {
                m.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0;
        }
    });
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: k.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, 
    ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([ a ], f) : f;
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = m.extend({}, g.data));
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando);
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, 
            ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), 
            h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], 
            f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [ f ] : f); else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || [ "", "" ])[1].toLowerCase(), 
                l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], 
                e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), 
                !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, 
                    e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild;
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), 
            h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++]) oa.test(f.type || "") && c.push(f);
            }
            return h = null, o;
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], 
            g = f && j[f])) {
                if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, 
                c.push(f));
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), 
            c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b);
            });
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 
            1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), 
                f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], 
                oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null;
            }
            return this;
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), 
            m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var Ca, Da = {};
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f;
    }
    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), 
        c = Ea(a, b), Ca.detach()), Da[a] = c), c;
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), 
            d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
            c.removeChild(d), a) : void 0;
        };
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), 
        Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle;
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
        Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
        h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
        void 0 === g ? g : g + "" || "auto";
    });
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, 
            b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, 
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g;
                },
                boxSizingReliable: function() {
                    return null == f && i(), f;
                },
                pixelPosition: function() {
                    return null == e && i(), e;
                },
                reliableMarginRight: function() {
                    return null == h && i(), h;
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
                d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), 
                b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
                i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
                g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", 
                g = 0 === i[0].offsetHeight), c.removeChild(d));
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ta = [ "Webkit", "O", "Moz", "ms" ];
    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
        while (e--) if (b = Ta[e] + c, b in a) return b;
        return d;
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), 
        (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), 
        d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), 
        "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g;
    }
    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], 
            g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), 
            "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        }
    }), m.each([ "height", "width" ], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d);
                }) : Ya(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [ a, "marginRight" ]) : void 0;
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Va(this, !0);
        },
        hide: function() {
            return Va(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide();
            });
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e);
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, m.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ ib ], eb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function fb() {
        return setTimeout(function() {
            $a = void 0;
        }), $a = m.now();
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, 
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0;
            }
            o[d] = r && r[d] || m.style(a, d);
        } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), 
            q ? m(a).show() : n.done(function() {
                m(a).hide();
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b]);
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a);
        }
    }), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), m.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
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
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0;
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function() {
        clearInterval(_a), _a = null;
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), 
        a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, 
        k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), 
        k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, 
        c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), 
        k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
        k.radioValue = "t" === a.value;
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0;
                    } catch (h) {
                        d.scrollHeight;
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), m.each([ "radio", "checkbox" ], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a);
            });
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void m.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), 
            a.removeAttribute(qb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            ob[b] = f), e;
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
            "value" === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c);
        }
    }, m.each([ "width", "height" ], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            }
        };
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, 
            e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), k.hrefNormalized || m.each([ "href", "src" ], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
            c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), 
        c;
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href;
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href;
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Mb(a, b, c, d) {
        var e = {}, f = a === Ib;
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a;
    }
    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
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
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2];
                        }
                        b = j[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), 
            Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), 
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), 
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), 
                w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), h && (n.trigger("ajaxComplete", [ v, k ]), --m.active || m.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script");
        }
    }), m.each([ "get", "post" ], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b));
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a);
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+");
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                };
            }).get();
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
    } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0);
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, 
                        e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a;
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                    b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a;
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = m.buildFragment([ a ], b, e), e && e.length && m(e).remove(), 
        m.merge([], d.childNodes));
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, e || [ a.responseText, b, a ]);
        }), this;
    }, m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var cc = a.document.documentElement;
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), 
            i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [ f, i ]) > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), 
            null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b);
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), 
            c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), 
                c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc;
            });
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each([ "top", "left" ], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function() {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m;
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }, typeof b === K && (a.jQuery = a.$ = m), m;
});

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    $.ui = $.ui || {};
    $.extend($.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    $.fn.extend({
        scrollParent: function(includeHidden) {
            var position = this.css("position"), excludeStaticParent = position === "absolute", overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent = this.parents().filter(function() {
                var parent = $(this);
                if (excludeStaticParent && parent.css("position") === "static") {
                    return false;
                }
                return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
            }).eq(0);
            return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
        },
        uniqueId: function() {
            var uuid = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + ++uuid;
                    }
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });
    function focusable(element, isTabIndexNotNaN) {
        var map, mapName, img, nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap='#" + mapName + "']")[0];
            return !!img && visible(img);
        }
        return (/^(input|select|textarea|button|object)$/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
    }
    function visible(element) {
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
            return $.css(this, "visibility") === "hidden";
        }).length;
    }
    $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName);
            };
        }) : function(elem, i, match) {
            return !!$.data(elem, match[3]);
        },
        focusable: function(element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        },
        tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"), isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
        }
    });
    if (!$("<a>").outerWidth(1).jquery) {
        $.each([ "Width", "Height" ], function(i, name) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ], type = name.toLowerCase(), orig = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
            function reduce(elem, size, border, margin) {
                $.each(side, function() {
                    size -= parseFloat($.css(elem, "padding" + this)) || 0;
                    if (border) {
                        size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
                    }
                    if (margin) {
                        size -= parseFloat($.css(elem, "margin" + this)) || 0;
                    }
                });
                return size;
            }
            $.fn["inner" + name] = function(size) {
                if (size === undefined) {
                    return orig["inner" + name].call(this);
                }
                return this.each(function() {
                    $(this).css(type, reduce(this, size) + "px");
                });
            };
            $.fn["outer" + name] = function(size, margin) {
                if (typeof size !== "number") {
                    return orig["outer" + name].call(this, size);
                }
                return this.each(function() {
                    $(this).css(type, reduce(this, size, true, margin) + "px");
                });
            };
        });
    }
    if (!$.fn.addBack) {
        $.fn.addBack = function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        };
    }
    if ($("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        $.fn.removeData = function(removeData) {
            return function(key) {
                if (arguments.length) {
                    return removeData.call(this, $.camelCase(key));
                } else {
                    return removeData.call(this);
                }
            };
        }($.fn.removeData);
    }
    $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    $.fn.extend({
        focus: function(orig) {
            return function(delay, fn) {
                return typeof delay === "number" ? this.each(function() {
                    var elem = this;
                    setTimeout(function() {
                        $(elem).focus();
                        if (fn) {
                            fn.call(elem);
                        }
                    }, delay);
                }) : orig.apply(this, arguments);
            };
        }($.fn.focus),
        disableSelection: function() {
            var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(eventType + ".ui-disableSelection", function(event) {
                    event.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(zIndex) {
            if (zIndex !== undefined) {
                return this.css("zIndex", zIndex);
            }
            if (this.length) {
                var elem = $(this[0]), position, value;
                while (elem.length && elem[0] !== document) {
                    position = elem.css("position");
                    if (position === "absolute" || position === "relative" || position === "fixed") {
                        value = parseInt(elem.css("zIndex"), 10);
                        if (!isNaN(value) && value !== 0) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }
            return 0;
        }
    });
    $.ui.plugin = {
        add: function(module, option, set) {
            var i, proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([ option, set[i] ]);
            }
        },
        call: function(instance, name, args, allowDisconnected) {
            var i, set = instance.plugins[name];
            if (!set) {
                return;
            }
            if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
                return;
            }
            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };
    var widget_uuid = 0, widget_slice = Array.prototype.slice;
    $.cleanData = function(orig) {
        return function(elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }
                } catch (e) {}
            }
            orig(elems);
        };
    }($.cleanData);
    $.widget = function(name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {}, namespace = name.split(".")[0];
        name = name.split(".")[1];
        fullName = namespace + "-" + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
                return new constructor(options, element);
            }
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = function() {
                var _super = function() {
                    return base.prototype[prop].apply(this, arguments);
                }, _superApply = function(args) {
                    return base.prototype[prop].apply(this, args);
                };
                return function() {
                    var __super = this._super, __superApply = this._superApply, returnValue;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue;
                };
            }();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
        return constructor;
    };
    $.widget.extend = function(target) {
        var input = widget_slice.call(arguments, 1), inputIndex = 0, inputLength = input.length, key, value;
        for (;inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string", args = widget_slice.call(arguments, 1), returnValue = this;
            if (isMethodCall) {
                this.each(function() {
                    var methodValue, instance = $.data(this, fullName);
                    if (options === "instance") {
                        returnValue = instance;
                        return false;
                    }
                    if (!instance) {
                        return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                    }
                    methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && methodValue !== undefined) {
                        returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                        return false;
                    }
                });
            } else {
                if (args.length) {
                    options = $.widget.extend.apply(null, [ options ].concat(args));
                }
                this.each(function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }
            return returnValue;
        };
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var options = key, parts, curOption, i;
            if (arguments.length === 0) {
                return $.widget.extend({}, this.options);
            }
            if (typeof key === "string") {
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }
            this._setOptions(options);
            return this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },
        _setOption: function(key, value) {
            this.options[key] = value;
            if (key === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);
                if (value) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus");
                }
            }
            return this;
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement, instance = this;
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }
            $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                }
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }
                var match = event.match(/^([\w:-]*)\s*(.*)$/), eventName = match[1] + instance.eventNamespace, selector = match[2];
                if (selector) {
                    delegateElement.delegate(selector, eventName, handlerProxy);
                } else {
                    element.bind(eventName, handlerProxy);
                }
            });
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    $(event.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(event) {
                    $(event.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    $(event.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(event) {
                    $(event.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop, orig, callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [ event ].concat(data)) === false || event.isDefaultPrevented());
        }
    };
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
                options = {
                    effect: options
                };
            }
            var hasOptions, effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = {
                    duration: options
                };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });
    var widget = $.widget;
    var mouseHandled = false;
    $(document).mouseup(function() {
        mouseHandled = false;
    });
    var mouse = $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;
            this.element.bind("mousedown." + this.widgetName, function(event) {
                return that._mouseDown(event);
            }).bind("click." + this.widgetName, function(event) {
                if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                    $.removeData(event.target, that.widgetName + ".preventClickEvent");
                    event.stopImmediatePropagation();
                    return false;
                }
            });
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },
        _mouseDown: function(event) {
            if (mouseHandled) {
                return;
            }
            this._mouseMoved = false;
            this._mouseStarted && this._mouseUp(event);
            this._mouseDownEvent = event;
            var that = this, btnIsLeft = event.which === 1, elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(event) !== false;
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            event.preventDefault();
            mouseHandled = true;
            return true;
        },
        _mouseMove: function(event) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
                    return this._mouseUp(event);
                } else if (!event.which) {
                    return this._mouseUp(event);
                }
            }
            if (event.which || event.button) {
                this._mouseMoved = true;
            }
            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
                this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
            }
            return !this._mouseStarted;
        },
        _mouseUp: function(event) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }
                this._mouseStop(event);
            }
            mouseHandled = false;
            return false;
        },
        _mouseDistanceMet: function(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true;
        }
    });
    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original") {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable");
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled");
            }
            this._setHandleClassName();
            this._mouseInit();
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return;
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var o = this.options;
            this._blurActiveElement(event);
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }
            this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);
            return true;
        },
        _blockFrames: function(selector) {
            this.iframeBlocks = this.document.find(selector).map(function() {
                var iframe = $(this);
                return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
            });
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },
        _blurActiveElement: function(event) {
            var document = this.document[0];
            if (!this.handleElement.is(event.target)) {
                return;
            }
            try {
                if (document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body") {
                    $(document.activeElement).blur();
                }
            } catch (error) {}
        },
        _mouseStart: function(event) {
            var o = this.options;
            this.helper = this._createHelper(event);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return $(this).css("position") === "fixed";
            }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
            this._setContainment();
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }
            this._cacheHelperProportions();
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }
            this._normalizeRightBottom();
            this._mouseDrag(event, true);
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }
            return true;
        },
        _refreshOffsets: function(event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },
        _mouseDrag: function(event, noPropagation) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = ui.position;
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }
            return false;
        },
        _mouseStop: function(event) {
            var that = this, dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }
            if (this.options.revert === "invalid" && !dropped || this.options.revert === "valid" && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }
            return false;
        },
        _mouseUp: function(event) {
            this._unblockFrames();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }
            if (this.handleElement.is(event.target)) {
                this.element.focus();
            }
            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }
            return this;
        },
        _getHandle: function(event) {
            return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle");
        },
        _createHelper: function(event) {
            var o = this.options, helperIsFunction = $.isFunction(o.helper), helper = helperIsFunction ? $(o.helper.apply(this.element[0], [ event ])) : o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            if (!helper.parents("body").length) {
                helper.appendTo(o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo);
            }
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }
            if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
                helper.css("position", "absolute");
            }
            return helper;
        },
        _setPositionRelative: function() {
            if (!/^(?:r|a|f)/.test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
        },
        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {
                    left: +obj[0],
                    top: +obj[1] || 0
                };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },
        _isRootNode: function(element) {
            return /(html|body)/i.test(element.tagName) || element === this.document[0];
        },
        _getParentOffset: function() {
            var po = this.offsetParent.offset(), document = this.document[0];
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }
            if (this._isRootNode(this.offsetParent[0])) {
                po = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") {
                return {
                    top: 0,
                    left: 0
                };
            }
            var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var isUserScrollable, c, ce, o = this.options, document = this.document[0];
            this.relativeContainer = null;
            if (!o.containment) {
                this.containment = null;
                return;
            }
            if (o.containment === "window") {
                this.containment = [ $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment === "document") {
                this.containment = [ 0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            c = $(o.containment);
            ce = c[0];
            if (!ce) {
                return;
            }
            isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ];
            this.relativeContainer = c;
        },
        _convertPositionTo: function(d, pos) {
            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            };
        },
        _generatePosition: function(event, constrainPosition) {
            var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY;
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [ this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top ];
                    } else {
                        containment = this.containment;
                    }
                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }
                if (o.grid) {
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }
                if (o.axis === "y") {
                    pageX = this.originalPageX;
                }
                if (o.axis === "x") {
                    pageY = this.originalPageY;
                }
            }
            return {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },
        _normalizeRightBottom: function() {
            if (this.options.axis !== "y" && this.helper.css("right") !== "auto") {
                this.helper.width(this.helper.width());
                this.helper.css("right", "auto");
            }
            if (this.options.axis !== "x" && this.helper.css("bottom") !== "auto") {
                this.helper.height(this.helper.height());
                this.helper.css("bottom", "auto");
            }
        },
        _trigger: function(type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [ event, ui, this ], true);
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    });
    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.sortables = [];
            $(draggable.options.connectToSortable).each(function() {
                var sortable = $(this).sortable("instance");
                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.cancelHelperRemoval = false;
            $.each(draggable.sortables, function() {
                var sortable = this;
                if (sortable.isOver) {
                    sortable.isOver = 0;
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;
                    sortable._storedCSS = {
                        position: sortable.placeholder.css("position"),
                        top: sortable.placeholder.css("top"),
                        left: sortable.placeholder.css("left")
                    };
                    sortable._mouseStop(event);
                    sortable.options.helper = sortable.options._helper;
                } else {
                    sortable.cancelHelperRemoval = true;
                    sortable._trigger("deactivate", event, uiSortable);
                }
            });
        },
        drag: function(event, ui, draggable) {
            $.each(draggable.sortables, function() {
                var innermostIntersecting = false, sortable = this;
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;
                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;
                    $.each(draggable.sortables, function() {
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;
                        if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }
                        return innermostIntersecting;
                    });
                }
                if (innermostIntersecting) {
                    if (!sortable.isOver) {
                        sortable.isOver = 1;
                        draggable._parent = ui.helper.parent();
                        sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true);
                        sortable.options._helper = sortable.options.helper;
                        sortable.options.helper = function() {
                            return ui.helper[0];
                        };
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;
                        draggable._trigger("toSortable", event);
                        draggable.dropped = sortable.element;
                        $.each(draggable.sortables, function() {
                            this.refreshPositions();
                        });
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }
                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);
                        ui.position = sortable.position;
                    }
                } else {
                    if (sortable.isOver) {
                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;
                        sortable._trigger("out", event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;
                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);
                        draggable._trigger("fromSortable", event);
                        draggable.dropped = false;
                        $.each(draggable.sortables, function() {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });
    $.ui.plugin.add("draggable", "cursor", {
        start: function(event, ui, instance) {
            var t = $("body"), o = instance.options;
            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });
    $.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });
    $.ui.plugin.add("draggable", "scroll", {
        start: function(event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }
            if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function(event, ui, i) {
            var o = i.options, scrolled = false, scrollParent = i.scrollParentNotHidden[0], document = i.document[0];
            if (scrollParent !== document && scrollParent.tagName !== "HTML") {
                if (!o.axis || o.axis !== "x") {
                    if (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }
                if (!o.axis || o.axis !== "y") {
                    if (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }
            } else {
                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }
                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }
            }
            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }
        }
    });
    $.ui.plugin.add("draggable", "snap", {
        start: function(event, ui, i) {
            var o = i.options;
            i.snapElements = [];
            $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var $t = $(this), $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(),
                        height: $t.outerHeight(),
                        top: $o.top,
                        left: $o.left
                    });
                }
            });
        },
        drag: function(event, ui, inst) {
            var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
            for (i = inst.snapElements.length - 1; i >= 0; i--) {
                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;
                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                            snapItem: inst.snapElements[i].item
                        }));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }
                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r
                        }).left;
                    }
                }
                first = ts || bs || ls || rs;
                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }
                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                        snapItem: inst.snapElements[i].item
                    }));
                }
                inst.snapElements[i].snapping = ts || bs || ls || rs || first;
            }
        }
    });
    $.ui.plugin.add("draggable", "stack", {
        start: function(event, ui, instance) {
            var min, o = instance.options, group = $.makeArray($(o.stack)).sort(function(a, b) {
                return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
            });
            if (!group.length) {
                return;
            }
            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", min + group.length);
        }
    });
    $.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });
    var draggable = $.ui.draggable;
    $.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",
            enableExtendedEvents: false,
            onOverSelfEvent: "over",
            onOverRestrictedEvent: "over",
            onOutSelfEvent: "out",
            onOutRestrictedEvent: "out",
            hoverSelfClass: false,
            hoverRestrictedClass: false,
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var proportions, o = this.options, accept = o.accept;
            this.isover = false;
            this.isout = true;
            this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept);
            };
            this.proportions = function() {
                if (arguments.length) {
                    proportions = arguments[0];
                } else {
                    return proportions ? proportions : proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    };
                }
            };
            this._addToManager(o.scope);
            o.addClasses && this.element.addClass("ui-droppable");
        },
        _addToManager: function(scope) {
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
            $.ui.ddmanager.droppables[scope].push(this);
        },
        _splice: function(drop) {
            var i = 0;
            for (;i < drop.length; i++) {
                if (drop[i] === this) {
                    drop.splice(i, 1);
                }
            }
        },
        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop);
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(key, value) {
            if (key === "accept") {
                this.accept = $.isFunction(value) ? value : function(d) {
                    return d.is(value);
                };
            } else if (key === "scope") {
                var drop = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(drop);
                this._addToManager(value);
            }
            this._super(key, value);
        },
        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("activate", event, this.ui(draggable));
            }
        },
        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass);
            }
            if (draggable) {
                this._trigger("deactivate", event, this.ui(draggable));
            }
        },
        _over: function(event) {
            var draggable = $.ui.ddmanager.current, sameElement = (draggable.currentItem || draggable.element)[0] === this.element[0];
            if (!draggable || sameElement && !this.options.enableExtendedEvents) {
                return;
            }
            if (sameElement && this.options.enableExtendedEvents) {
                if (this.options.hoverSelfClass) {
                    this.element.addClass(this.options.hoverSelfClass);
                }
                this._trigger(this.options.onOverSelfEvent, event, this.ui(draggable));
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
                this._trigger("over", event, this.ui(draggable));
            } else if (this.options.enableExtendedEvents) {
                if (this.options.hoverRestrictedClass) {
                    this.element.addClass(this.options.hoverRestrictedClass);
                }
                this._trigger(this.options.onOverRestrictedEvent, event, this.ui(draggable));
            }
        },
        _out: function(event) {
            var draggable = $.ui.ddmanager.current, sameElement = (draggable.currentItem || draggable.element)[0] === this.element[0];
            if (!draggable || sameElement && !this.options.enableExtendedEvents) {
                return;
            }
            if (sameElement && this.options.enableExtendedEvents) {
                if (this.options.hoverSelfClass) {
                    this.element.removeClass(this.options.hoverSelfClass);
                }
                this._trigger(this.options.onOutSelfEvent, event, this.ui(draggable));
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("out", event, this.ui(draggable));
            } else if (this.options.enableExtendedEvents) {
                if (this.options.hoverRestrictedClass) {
                    this.element.removeClass(this.options.hoverRestrictedClass);
                }
                this._trigger(this.options.onOutRestrictedEvent, event, this.ui(draggable));
            }
        },
        _drop: function(event, custom) {
            var draggable = custom || $.ui.ddmanager.current, childrenIntersection = false;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return false;
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var inst = $(this).droppable("instance");
                if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && $.ui.intersect(draggable, $.extend(inst, {
                    offset: inst.element.offset()
                }), inst.options.tolerance, event)) {
                    childrenIntersection = true;
                    return false;
                }
            });
            if (childrenIntersection) {
                return false;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
                this._trigger("drop", event, this.ui(draggable));
                return this.element;
            }
            return false;
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        }
    });
    $.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
            return x >= reference && x < reference + size;
        }
        return function(draggable, droppable, toleranceMode, event) {
            if (!droppable.offset) {
                return false;
            }
            var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height;
            switch (toleranceMode) {
              case "fit":
                return l <= x1 && x2 <= r && t <= y1 && y2 <= b;

              case "intersect":
                return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;

              case "pointer":
                return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);

              case "touch":
                return (y1 >= t && y1 <= b || y2 >= t && y2 <= b || y1 < t && y2 > b) && (x1 >= l && x1 <= r || x2 >= l && x2 <= r || x1 < l && x2 > r);

              default:
                return false;
            }
        };
    }();
    $.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, event) {
            var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (i = 0; i < m.length; i++) {
                if (m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element)) {
                    continue;
                }
                if (!m[i].options.enableExtendedEvents) {
                    for (j = 0; j < list.length; j++) {
                        if (list[j] === m[i].element[0]) {
                            m[i].proportions().height = 0;
                            continue droppablesLoop;
                        }
                    }
                }
                m[i].visible = m[i].element.css("display") !== "none";
                if (!m[i].visible) {
                    continue;
                }
                if (type === "mousedown") {
                    m[i]._activate.call(m[i], event);
                }
                m[i].offset = m[i].element.offset();
                m[i].proportions({
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight
                });
            }
        },
        drop: function(draggable, event) {
            var dropped = false;
            $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance, event)) {
                    dropped = this._drop.call(this, event) || dropped;
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }
            });
            return dropped;
        },
        dragStart: function(draggable, event) {
            draggable.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!draggable.options.refreshPositions) {
                    $.ui.ddmanager.prepareOffsets(draggable, event);
                }
            });
        },
        drag: function(draggable, event) {
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }
                var parentInstance, scope, parent, intersects = $.ui.intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? "isout" : intersects && !this.isover ? "isover" : null;
                if (!c) {
                    return;
                }
                if (this.options.greedy) {
                    scope = this.options.scope;
                    parent = this.element.parents(":data(ui-droppable)").filter(function() {
                        return $(this).droppable("instance").options.scope === scope;
                    });
                    if (parent.length) {
                        parentInstance = $(parent[0]).droppable("instance");
                        parentInstance.greedyChild = c === "isover";
                    }
                }
                if (parentInstance && c === "isover") {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }
                this[c] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call(this, event);
                if (parentInstance && c === "isout") {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            });
        },
        dragStop: function(draggable, event) {
            draggable.element.parentsUntil("body").unbind("scroll.droppable");
            if (!draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
        }
    };
    var droppable = $.ui.droppable;
    var selectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            cssHelper: {
                offsetTop: 0,
                offsetLeft: 0,
                heightIncrement: 0,
                widthIncrement: 0
            },
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var selectees, that = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                selectees = $(that.options.filter, that.element[0]);
                selectees.addClass("ui-selectee");
                selectees.each(function() {
                    var $this = $(this), pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.repositionCssHelper = function(heightIncrement, widthIncrement) {
                if (this.dragged) {
                    this.options.cssHelper.heightIncrement = heightIncrement;
                    this.options.cssHelper.widthIncrement = widthIncrement;
                    this._mouseDrag(this.lastEvent);
                }
            };
            this.refresh();
            this.selectees = selectees.addClass("ui-selectee");
            this._mouseInit();
            this.helper = $("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy();
        },
        _mouseStart: function(event) {
            var that = this, options = this.options;
            this.opos = [ event.pageX, event.pageY ];
            if (this.options.disabled) {
                return;
            }
            this.selectees = $(options.filter, this.element[0]);
            this._trigger("start", event);
            this.options.cssHelper.offsetLeft = $(options.appendTo).offset().left;
            this.options.cssHelper.offsetTop = $(options.appendTo).offset().top;
            $(options.appendTo).append(this.helper);
            this.helper.css({
                left: event.pageX - this.options.cssHelper.offsetLeft,
                top: event.pageY - this.options.cssHelper.offsetTop,
                width: 0,
                height: 0
            });
            if (options.autoRefresh) {
                this.refresh();
            }
            this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    selectee.$element.removeClass("ui-selected");
                    selectee.selected = false;
                    selectee.$element.addClass("ui-unselecting");
                    selectee.unselecting = true;
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });
            $(event.target).parents().addBack().each(function() {
                var doSelect, selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected");
                    selectee.$element.removeClass(doSelect ? "ui-unselecting" : "ui-selected").addClass(doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });
        },
        _mouseDrag: function(event) {
            this.lastEvent = event;
            this.dragged = true;
            if (this.options.disabled) {
                return;
            }
            var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX + this.options.cssHelper.widthIncrement, y2 = event.pageY + this.options.cssHelper.heightIncrement;
            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({
                left: x1 - this.options.cssHelper.offsetLeft,
                top: y1 - this.options.cssHelper.offsetTop,
                width: x2 - x1,
                height: y2 - y1
            });
            this.selectees.each(function() {
                var selectee = $.data(this, "selectable-item"), hit = false;
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }
                if (options.tolerance === "touch") {
                    hit = !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1);
                } else if (options.tolerance === "fit") {
                    hit = selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2;
                }
                if (hit) {
                    if (selectee.selected) {
                        selectee.$element.removeClass("ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        selectee.$element.removeClass("ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        selectee.$element.addClass("ui-selecting");
                        selectee.selecting = true;
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            selectee.$element.addClass("ui-selected");
                            selectee.selected = true;
                        } else {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                selectee.$element.addClass("ui-unselecting");
                                selectee.unselecting = true;
                            }
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            selectee.$element.removeClass("ui-selected");
                            selectee.selected = false;
                            selectee.$element.addClass("ui-unselecting");
                            selectee.unselecting = true;
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });
            return false;
        },
        _mouseStop: function(event) {
            var that = this;
            this.dragged = false;
            this.options.cssHelper.heightIncrement = 0;
            this.options.cssHelper.widthIncrement = 0;
            $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);
            this.helper.remove();
            return false;
        }
    });
});

var matched, browser;

jQuery.uaMatch = function(ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
};

matched = jQuery.uaMatch(navigator.userAgent);

browser = {};

if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
}

if (browser.chrome) {
    browser.webkit = true;
} else if (browser.webkit) {
    browser.safari = true;
}

jQuery.browser = browser;

(function() {
    (function(n) {
        var x = this || (0, eval)("this"), u = x.document, M = x.navigator, v = x.jQuery, F = x.JSON;
        (function(n) {
            "function" === typeof define && define.amd ? define([ "exports", "require" ], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(x.ko = {});
        })(function(N, O) {
            function J(a, c) {
                return null === a || typeof a in T ? a === c : !1;
            }
            function U(b, c) {
                var d;
                return function() {
                    d || (d = a.a.setTimeout(function() {
                        d = n;
                        b();
                    }, c));
                };
            }
            function V(b, c) {
                var d;
                return function() {
                    clearTimeout(d);
                    d = a.a.setTimeout(b, c);
                };
            }
            function W(a, c) {
                c && c !== I ? "beforeChange" === c ? this.Kb(a) : this.Ha(a, c) : this.Lb(a);
            }
            function X(a, c) {
                null !== c && c.k && c.k();
            }
            function Y(a, c) {
                var d = this.Hc, e = d[s];
                e.R || (this.lb && this.Ma[c] ? (d.Pb(c, a, this.Ma[c]), this.Ma[c] = null, --this.lb) : e.r[c] || d.Pb(c, a, e.s ? {
                    ia: a
                } : d.uc(a)));
            }
            function K(b, c, d, e) {
                a.d[b] = {
                    init: function(b, g, k, l, m) {
                        var h, r;
                        a.m(function() {
                            var q = a.a.c(g()), p = !d !== !q, A = !r;
                            if (A || c || p !== h) A && a.va.Aa() && (r = a.a.ua(a.f.childNodes(b), !0)), p ? (A || a.f.da(b, a.a.ua(r)), 
                            a.eb(e ? e(m, q) : m, b)) : a.f.xa(b), h = p;
                        }, null, {
                            i: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        };
                    }
                };
                a.h.ta[b] = !1;
                a.f.Z[b] = !0;
            }
            var a = "undefined" !== typeof N ? N : {};
            a.b = function(b, c) {
                for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
                e[d[d.length - 1]] = c;
            };
            a.G = function(a, c, d) {
                a[c] = d;
            };
            a.version = "3.4.0";
            a.b("version", a.version);
            a.options = {
                deferUpdates: !1,
                useOnlyNativeEvents: !1
            };
            a.a = function() {
                function b(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b(c, a[c]);
                }
                function c(a, b) {
                    if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a;
                }
                function d(a, b) {
                    a.__proto__ = b;
                    return a;
                }
                function e(b, c, d, e) {
                    var h = b[c].match(r) || [];
                    a.a.q(d.match(r), function(b) {
                        a.a.pa(h, b, e);
                    });
                    b[c] = h.join(" ");
                }
                var f = {
                    __proto__: []
                } instanceof Array, g = "function" === typeof Symbol, k = {}, l = {};
                k[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = [ "keyup", "keydown", "keypress" ];
                k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(k, function(a, b) {
                    if (b.length) for (var c = 0, d = b.length; c < d; c++) l[b[c]] = a;
                });
                var m = {
                    propertychange: !0
                }, h = u && function() {
                    for (var a = 3, b = u.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->", 
                    c[0]; ) ;
                    return 4 < a ? a : n;
                }(), r = /\S+/g;
                return {
                    cc: [ "authenticity_token", /^__RequestVerificationToken(_.*)?$/ ],
                    q: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) b(a[c], c);
                    },
                    o: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                        return -1;
                    },
                    Sb: function(a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d)) return a[d];
                        return null;
                    },
                    La: function(b, c) {
                        var d = a.a.o(b, c);
                        0 < d ? b.splice(d, 1) : 0 === d && b.shift();
                    },
                    Tb: function(b) {
                        b = b || [];
                        for (var c = [], d = 0, e = b.length; d < e; d++) 0 > a.a.o(c, b[d]) && c.push(b[d]);
                        return c;
                    },
                    fb: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d));
                        return c;
                    },
                    Ka: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
                        return c;
                    },
                    ra: function(a, b) {
                        if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                        return a;
                    },
                    pa: function(b, c, d) {
                        var e = a.a.o(a.a.zb(b), c);
                        0 > e ? d && b.push(c) : d || b.splice(e, 1);
                    },
                    ka: f,
                    extend: c,
                    Xa: d,
                    Ya: f ? d : c,
                    D: b,
                    Ca: function(a, b) {
                        if (!a) return a;
                        var c = {}, d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c;
                    },
                    ob: function(b) {
                        for (;b.firstChild; ) a.removeNode(b.firstChild);
                    },
                    jc: function(b) {
                        b = a.a.V(b);
                        for (var c = (b[0] && b[0].ownerDocument || u).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.$(b[d]));
                        return c;
                    },
                    ua: function(b, c) {
                        for (var d = 0, e = b.length, h = []; d < e; d++) {
                            var m = b[d].cloneNode(!0);
                            h.push(c ? a.$(m) : m);
                        }
                        return h;
                    },
                    da: function(b, c) {
                        a.a.ob(b);
                        if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d]);
                    },
                    qc: function(b, c) {
                        var d = b.nodeType ? [ b ] : b;
                        if (0 < d.length) {
                            for (var e = d[0], h = e.parentNode, m = 0, l = c.length; m < l; m++) h.insertBefore(c[m], e);
                            m = 0;
                            for (l = d.length; m < l; m++) a.removeNode(d[m]);
                        }
                    },
                    za: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b; ) a.splice(0, 1);
                            for (;1 < a.length && a[a.length - 1].parentNode !== b; ) a.length--;
                            if (1 < a.length) {
                                var c = a[0], d = a[a.length - 1];
                                for (a.length = 0; c !== d; ) a.push(c), c = c.nextSibling;
                                a.push(d);
                            }
                        }
                        return a;
                    },
                    sc: function(a, b) {
                        7 > h ? a.setAttribute("selected", b) : a.selected = b;
                    },
                    $a: function(a) {
                        return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                    },
                    nd: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b;
                    },
                    Mc: function(a, b) {
                        if (a === b) return !0;
                        if (11 === a.nodeType) return !1;
                        if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
                        for (;a && a != b; ) a = a.parentNode;
                        return !!a;
                    },
                    nb: function(b) {
                        return a.a.Mc(b, b.ownerDocument.documentElement);
                    },
                    Qb: function(b) {
                        return !!a.a.Sb(b, a.a.nb);
                    },
                    A: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase();
                    },
                    Wb: function(b) {
                        return a.onError ? function() {
                            try {
                                return b.apply(this, arguments);
                            } catch (c) {
                                throw a.onError && a.onError(c), c;
                            }
                        } : b;
                    },
                    setTimeout: function(b, c) {
                        return setTimeout(a.a.Wb(b), c);
                    },
                    $b: function(b) {
                        setTimeout(function() {
                            a.onError && a.onError(b);
                            throw b;
                        }, 0);
                    },
                    p: function(b, c, d) {
                        var e = a.a.Wb(d);
                        d = h && m[c];
                        if (a.options.useOnlyNativeEvents || d || !v) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                            var l = function(a) {
                                e.call(b, a);
                            }, f = "on" + c;
                            b.attachEvent(f, l);
                            a.a.F.oa(b, function() {
                                b.detachEvent(f, l);
                            });
                        } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else v(b).bind(c, e);
                    },
                    Da: function(b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.A(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (a.options.useOnlyNativeEvents || !v || d) if ("function" == typeof u.createEvent) if ("function" == typeof b.dispatchEvent) d = u.createEvent(l[c] || "HTMLEvents"), 
                        d.initEvent(c, !0, !0, x, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events"); else v(b).trigger(c);
                    },
                    c: function(b) {
                        return a.H(b) ? b() : b;
                    },
                    zb: function(b) {
                        return a.H(b) ? b.t() : b;
                    },
                    bb: function(b, c, d) {
                        var h;
                        c && ("object" === typeof b.classList ? (h = b.classList[d ? "add" : "remove"], 
                        a.a.q(c.match(r), function(a) {
                            h.call(b.classList, a);
                        })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d));
                    },
                    Za: function(b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === n) d = "";
                        var e = a.f.firstChild(b);
                        !e || 3 != e.nodeType || a.f.nextSibling(e) ? a.f.da(b, [ b.ownerDocument.createTextNode(d) ]) : e.data = d;
                        a.a.Rc(b);
                    },
                    rc: function(a, b) {
                        a.name = b;
                        if (7 >= h) try {
                            a.mergeAttributes(u.createElement("<input name='" + a.name + "'/>"), !1);
                        } catch (c) {}
                    },
                    Rc: function(a) {
                        9 <= h && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
                    },
                    Nc: function(a) {
                        if (h) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b;
                        }
                    },
                    hd: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], e = b; e <= c; e++) d.push(e);
                        return d;
                    },
                    V: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                        return b;
                    },
                    Yb: function(a) {
                        return g ? Symbol(a) : a;
                    },
                    rd: 6 === h,
                    sd: 7 === h,
                    C: h,
                    ec: function(b, c) {
                        for (var d = a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function(a) {
                            return a.name === c;
                        } : function(a) {
                            return c.test(a.name);
                        }, h = [], m = d.length - 1; 0 <= m; m--) e(d[m]) && h.push(d[m]);
                        return h;
                    },
                    ed: function(b) {
                        return "string" == typeof b && (b = a.a.$a(b)) ? F && F.parse ? F.parse(b) : new Function("return " + b)() : null;
                    },
                    Eb: function(b, c, d) {
                        if (!F || !F.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return F.stringify(a.a.c(b), c, d);
                    },
                    fd: function(c, d, e) {
                        e = e || {};
                        var h = e.params || {}, m = e.includeFields || this.cc, l = c;
                        if ("object" == typeof c && "form" === a.a.A(c)) for (var l = c.action, f = m.length - 1; 0 <= f; f--) for (var g = a.a.ec(c, m[f]), k = g.length - 1; 0 <= k; k--) h[g[k].name] = g[k].value;
                        d = a.a.c(d);
                        var r = u.createElement("form");
                        r.style.display = "none";
                        r.action = l;
                        r.method = "post";
                        for (var n in d) c = u.createElement("input"), c.type = "hidden", c.name = n, c.value = a.a.Eb(a.a.c(d[n])), 
                        r.appendChild(c);
                        b(h, function(a, b) {
                            var c = u.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            r.appendChild(c);
                        });
                        u.body.appendChild(r);
                        e.submitter ? e.submitter(r) : r.submit();
                        setTimeout(function() {
                            r.parentNode.removeChild(r);
                        }, 0);
                    }
                };
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.q);
            a.b("utils.arrayFirst", a.a.Sb);
            a.b("utils.arrayFilter", a.a.Ka);
            a.b("utils.arrayGetDistinctValues", a.a.Tb);
            a.b("utils.arrayIndexOf", a.a.o);
            a.b("utils.arrayMap", a.a.fb);
            a.b("utils.arrayPushAll", a.a.ra);
            a.b("utils.arrayRemoveItem", a.a.La);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.cc);
            a.b("utils.getFormFields", a.a.ec);
            a.b("utils.peekObservable", a.a.zb);
            a.b("utils.postJson", a.a.fd);
            a.b("utils.parseJson", a.a.ed);
            a.b("utils.registerEventHandler", a.a.p);
            a.b("utils.stringifyJson", a.a.Eb);
            a.b("utils.range", a.a.hd);
            a.b("utils.toggleDomNodeCssClass", a.a.bb);
            a.b("utils.triggerEvent", a.a.Da);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.D);
            a.b("utils.addOrRemoveItem", a.a.pa);
            a.b("utils.setTextContent", a.a.Za);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var c = this;
                if (1 === arguments.length) return function() {
                    return c.apply(a, arguments);
                };
                var d = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var e = d.slice(0);
                    e.push.apply(e, arguments);
                    return c.apply(a, e);
                };
            });
            a.a.e = new function() {
                function a(b, g) {
                    var k = b[d];
                    if (!k || "null" === k || !e[k]) {
                        if (!g) return n;
                        k = b[d] = "ko" + c++;
                        e[k] = {};
                    }
                    return e[k];
                }
                var c = 0, d = "__ko__" + new Date().getTime(), e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === n ? n : e[d];
                    },
                    set: function(c, d, e) {
                        if (e !== n || a(c, !1) !== n) a(c, !0)[d] = e;
                    },
                    clear: function(a) {
                        var b = a[d];
                        return b ? (delete e[b], a[d] = null, !0) : !1;
                    },
                    I: function() {
                        return c++ + d;
                    }
                };
            }();
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.F = new function() {
                function b(b, c) {
                    var e = a.a.e.get(b, d);
                    e === n && c && (e = [], a.a.e.set(b, d, e));
                    return e;
                }
                function c(d) {
                    var e = b(d, !1);
                    if (e) for (var e = e.slice(0), l = 0; l < e.length; l++) e[l](d);
                    a.a.e.clear(d);
                    a.a.F.cleanExternalData(d);
                    if (f[d.nodeType]) for (e = d.firstChild; d = e; ) e = d.nextSibling, 8 === d.nodeType && c(d);
                }
                var d = a.a.e.I(), e = {
                    1: !0,
                    8: !0,
                    9: !0
                }, f = {
                    1: !0,
                    9: !0
                };
                return {
                    oa: function(a, c) {
                        if ("function" != typeof c) throw Error("Callback must be a function");
                        b(a, !0).push(c);
                    },
                    pc: function(c, e) {
                        var l = b(c, !1);
                        l && (a.a.La(l, e), 0 == l.length && a.a.e.set(c, d, n));
                    },
                    $: function(b) {
                        if (e[b.nodeType] && (c(b), f[b.nodeType])) {
                            var d = [];
                            a.a.ra(d, b.getElementsByTagName("*"));
                            for (var l = 0, m = d.length; l < m; l++) c(d[l]);
                        }
                        return b;
                    },
                    removeNode: function(b) {
                        a.$(b);
                        b.parentNode && b.parentNode.removeChild(b);
                    },
                    cleanExternalData: function(a) {
                        v && "function" == typeof v.cleanData && v.cleanData([ a ]);
                    }
                };
            }();
            a.$ = a.a.F.$;
            a.removeNode = a.a.F.removeNode;
            a.b("cleanNode", a.$);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.F);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.F.oa);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.F.pc);
            (function() {
                var b = [ 0, "", "" ], c = [ 1, "<table>", "</table>" ], d = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ], e = [ 1, "<select multiple='multiple'>", "</select>" ], f = {
                    thead: c,
                    tbody: c,
                    tfoot: c,
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: d,
                    th: d,
                    option: e,
                    optgroup: e
                }, g = 8 >= a.a.C;
                a.a.ma = function(c, d) {
                    var e;
                    if (v) if (v.parseHTML) e = v.parseHTML(c, d) || []; else {
                        if ((e = v.clean([ c ], d)) && e[0]) {
                            for (var h = e[0]; h.parentNode && 11 !== h.parentNode.nodeType; ) h = h.parentNode;
                            h.parentNode && h.parentNode.removeChild(h);
                        }
                    } else {
                        (e = d) || (e = u);
                        var h = e.parentWindow || e.defaultView || x, r = a.a.$a(c).toLowerCase(), q = e.createElement("div"), p;
                        p = (r = r.match(/^<([a-z]+)[ >]/)) && f[r[1]] || b;
                        r = p[0];
                        p = "ignored<div>" + p[1] + c + p[2] + "</div>";
                        "function" == typeof h.innerShiv ? q.appendChild(h.innerShiv(p)) : (g && e.appendChild(q), 
                        q.innerHTML = p, g && q.parentNode.removeChild(q));
                        for (;r--; ) q = q.lastChild;
                        e = a.a.V(q.lastChild.childNodes);
                    }
                    return e;
                };
                a.a.Cb = function(b, c) {
                    a.a.ob(b);
                    c = a.a.c(c);
                    if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c); else for (var d = a.a.ma(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e]);
                };
            })();
            a.b("utils.parseHtmlFragment", a.a.ma);
            a.b("utils.setHtml", a.a.Cb);
            a.M = function() {
                function b(c, e) {
                    if (c) if (8 == c.nodeType) {
                        var f = a.M.lc(c.nodeValue);
                        null != f && e.push({
                            Lc: c,
                            cd: f
                        });
                    } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, k = g.length; f < k; f++) b(g[f], e);
                }
                var c = {};
                return {
                    wb: function(a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        c[b] = a;
                        return "<!--[ko_memo:" + b + "]-->";
                    },
                    xc: function(a, b) {
                        var f = c[a];
                        if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return f.apply(null, b || []), !0;
                        } finally {
                            delete c[a];
                        }
                    },
                    yc: function(c, e) {
                        var f = [];
                        b(c, f);
                        for (var g = 0, k = f.length; g < k; g++) {
                            var l = f[g].Lc, m = [ l ];
                            e && a.a.ra(m, e);
                            a.M.xc(f[g].cd, m);
                            l.nodeValue = "";
                            l.parentNode && l.parentNode.removeChild(l);
                        }
                    },
                    lc: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
                    }
                };
            }();
            a.b("memoization", a.M);
            a.b("memoization.memoize", a.M.wb);
            a.b("memoization.unmemoize", a.M.xc);
            a.b("memoization.parseMemoText", a.M.lc);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.M.yc);
            a.Y = function() {
                function b() {
                    if (e) for (var b = e, c = 0, m; g < e; ) if (m = d[g++]) {
                        if (g > b) {
                            if (5e3 <= ++c) {
                                g = e;
                                a.a.$b(Error("'Too much recursion' after processing " + c + " task groups."));
                                break;
                            }
                            b = e;
                        }
                        try {
                            m();
                        } catch (h) {
                            a.a.$b(h);
                        }
                    }
                }
                function c() {
                    b();
                    g = e = d.length = 0;
                }
                var d = [], e = 0, f = 1, g = 0;
                return {
                    scheduler: x.MutationObserver ? function(a) {
                        var b = u.createElement("div");
                        new MutationObserver(a).observe(b, {
                            attributes: !0
                        });
                        return function() {
                            b.classList.toggle("foo");
                        };
                    }(c) : u && "onreadystatechange" in u.createElement("script") ? function(a) {
                        var b = u.createElement("script");
                        b.onreadystatechange = function() {
                            b.onreadystatechange = null;
                            u.documentElement.removeChild(b);
                            b = null;
                            a();
                        };
                        u.documentElement.appendChild(b);
                    } : function(a) {
                        setTimeout(a, 0);
                    },
                    Wa: function(b) {
                        e || a.Y.scheduler(c);
                        d[e++] = b;
                        return f++;
                    },
                    cancel: function(a) {
                        a -= f - e;
                        a >= g && a < e && (d[a] = null);
                    },
                    resetForTesting: function() {
                        var a = e - g;
                        g = e = d.length = 0;
                        return a;
                    },
                    md: b
                };
            }();
            a.b("tasks", a.Y);
            a.b("tasks.schedule", a.Y.Wa);
            a.b("tasks.runEarly", a.Y.md);
            a.ya = {
                throttle: function(b, c) {
                    b.throttleEvaluation = c;
                    var d = null;
                    return a.B({
                        read: b,
                        write: function(e) {
                            clearTimeout(d);
                            d = a.a.setTimeout(function() {
                                b(e);
                            }, c);
                        }
                    });
                },
                rateLimit: function(a, c) {
                    var d, e, f;
                    "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
                    a.cb = !1;
                    f = "notifyWhenChangesStop" == e ? V : U;
                    a.Ta(function(a) {
                        return f(a, d);
                    });
                },
                deferred: function(b, c) {
                    if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                    b.cb || (b.cb = !0, b.Ta(function(c) {
                        var e;
                        return function() {
                            a.Y.cancel(e);
                            e = a.Y.Wa(c);
                            b.notifySubscribers(n, "dirty");
                        };
                    }));
                },
                notify: function(a, c) {
                    a.equalityComparer = "always" == c ? null : J;
                }
            };
            var T = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.ya);
            a.vc = function(b, c, d) {
                this.ia = b;
                this.gb = c;
                this.Kc = d;
                this.R = !1;
                a.G(this, "dispose", this.k);
            };
            a.vc.prototype.k = function() {
                this.R = !0;
                this.Kc();
            };
            a.J = function() {
                a.a.Ya(this, D);
                D.rb(this);
            };
            var I = "change", D = {
                rb: function(a) {
                    a.K = {};
                    a.Nb = 1;
                },
                X: function(b, c, d) {
                    var e = this;
                    d = d || I;
                    var f = new a.vc(e, c ? b.bind(c) : b, function() {
                        a.a.La(e.K[d], f);
                        e.Ia && e.Ia(d);
                    });
                    e.sa && e.sa(d);
                    e.K[d] || (e.K[d] = []);
                    e.K[d].push(f);
                    return f;
                },
                notifySubscribers: function(b, c) {
                    c = c || I;
                    c === I && this.zc();
                    if (this.Pa(c)) try {
                        a.l.Ub();
                        for (var d = this.K[c].slice(0), e = 0, f; f = d[e]; ++e) f.R || f.gb(b);
                    } finally {
                        a.l.end();
                    }
                },
                Na: function() {
                    return this.Nb;
                },
                Uc: function(a) {
                    return this.Na() !== a;
                },
                zc: function() {
                    ++this.Nb;
                },
                Ta: function(b) {
                    var c = this, d = a.H(c), e, f, g;
                    c.Ha || (c.Ha = c.notifySubscribers, c.notifySubscribers = W);
                    var k = b(function() {
                        c.Mb = !1;
                        d && g === c && (g = c());
                        e = !1;
                        c.tb(f, g) && c.Ha(f = g);
                    });
                    c.Lb = function(a) {
                        c.Mb = e = !0;
                        g = a;
                        k();
                    };
                    c.Kb = function(a) {
                        e || (f = a, c.Ha(a, "beforeChange"));
                    };
                },
                Pa: function(a) {
                    return this.K[a] && this.K[a].length;
                },
                Sc: function(b) {
                    if (b) return this.K[b] && this.K[b].length || 0;
                    var c = 0;
                    a.a.D(this.K, function(a, b) {
                        "dirty" !== a && (c += b.length);
                    });
                    return c;
                },
                tb: function(a, c) {
                    return !this.equalityComparer || !this.equalityComparer(a, c);
                },
                extend: function(b) {
                    var c = this;
                    b && a.a.D(b, function(b, e) {
                        var f = a.ya[b];
                        "function" == typeof f && (c = f(c, e) || c);
                    });
                    return c;
                }
            };
            a.G(D, "subscribe", D.X);
            a.G(D, "extend", D.extend);
            a.G(D, "getSubscriptionsCount", D.Sc);
            a.a.ka && a.a.Xa(D, Function.prototype);
            a.J.fn = D;
            a.hc = function(a) {
                return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers;
            };
            a.b("subscribable", a.J);
            a.b("isSubscribable", a.hc);
            a.va = a.l = function() {
                function b(a) {
                    d.push(e);
                    e = a;
                }
                function c() {
                    e = d.pop();
                }
                var d = [], e, f = 0;
                return {
                    Ub: b,
                    end: c,
                    oc: function(b) {
                        if (e) {
                            if (!a.hc(b)) throw Error("Only subscribable things can act as dependencies");
                            e.gb.call(e.Gc, b, b.Cc || (b.Cc = ++f));
                        }
                    },
                    w: function(a, d, e) {
                        try {
                            return b(), a.apply(d, e || []);
                        } finally {
                            c();
                        }
                    },
                    Aa: function() {
                        if (e) return e.m.Aa();
                    },
                    Sa: function() {
                        if (e) return e.Sa;
                    }
                };
            }();
            a.b("computedContext", a.va);
            a.b("computedContext.getDependenciesCount", a.va.Aa);
            a.b("computedContext.isInitial", a.va.Sa);
            a.b("ignoreDependencies", a.qd = a.l.w);
            var E = a.a.Yb("_latestValue");
            a.N = function(b) {
                function c() {
                    if (0 < arguments.length) return c.tb(c[E], arguments[0]) && (c.ga(), c[E] = arguments[0], 
                    c.fa()), this;
                    a.l.oc(c);
                    return c[E];
                }
                c[E] = b;
                a.a.ka || a.a.extend(c, a.J.fn);
                a.J.fn.rb(c);
                a.a.Ya(c, B);
                a.options.deferUpdates && a.ya.deferred(c, !0);
                return c;
            };
            var B = {
                equalityComparer: J,
                t: function() {
                    return this[E];
                },
                fa: function() {
                    this.notifySubscribers(this[E]);
                },
                ga: function() {
                    this.notifySubscribers(this[E], "beforeChange");
                }
            };
            a.a.ka && a.a.Xa(B, a.J.fn);
            var H = a.N.gd = "__ko_proto__";
            B[H] = a.N;
            a.Oa = function(b, c) {
                return null === b || b === n || b[H] === n ? !1 : b[H] === c ? !0 : a.Oa(b[H], c);
            };
            a.H = function(b) {
                return a.Oa(b, a.N);
            };
            a.Ba = function(b) {
                return "function" == typeof b && b[H] === a.N || "function" == typeof b && b[H] === a.B && b.Vc ? !0 : !1;
            };
            a.b("observable", a.N);
            a.b("isObservable", a.H);
            a.b("isWriteableObservable", a.Ba);
            a.b("isWritableObservable", a.Ba);
            a.b("observable.fn", B);
            a.G(B, "peek", B.t);
            a.G(B, "valueHasMutated", B.fa);
            a.G(B, "valueWillMutate", B.ga);
            a.la = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.N(b);
                a.a.Ya(b, a.la.fn);
                return b.extend({
                    trackArrayChanges: !0
                });
            };
            a.la.fn = {
                remove: function(b) {
                    for (var c = this.t(), d = [], e = "function" != typeof b || a.H(b) ? function(a) {
                        return a === b;
                    } : b, f = 0; f < c.length; f++) {
                        var g = c[f];
                        e(g) && (0 === d.length && this.ga(), d.push(g), c.splice(f, 1), f--);
                    }
                    d.length && this.fa();
                    return d;
                },
                removeAll: function(b) {
                    if (b === n) {
                        var c = this.t(), d = c.slice(0);
                        this.ga();
                        c.splice(0, c.length);
                        this.fa();
                        return d;
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.o(b, c);
                    }) : [];
                },
                destroy: function(b) {
                    var c = this.t(), d = "function" != typeof b || a.H(b) ? function(a) {
                        return a === b;
                    } : b;
                    this.ga();
                    for (var e = c.length - 1; 0 <= e; e--) d(c[e]) && (c[e]._destroy = !0);
                    this.fa();
                },
                destroyAll: function(b) {
                    return b === n ? this.destroy(function() {
                        return !0;
                    }) : b ? this.destroy(function(c) {
                        return 0 <= a.a.o(b, c);
                    }) : [];
                },
                indexOf: function(b) {
                    var c = this();
                    return a.a.o(c, b);
                },
                replace: function(a, c) {
                    var d = this.indexOf(a);
                    0 <= d && (this.ga(), this.t()[d] = c, this.fa());
                }
            };
            a.a.ka && a.a.Xa(a.la.fn, a.N.fn);
            a.a.q("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.la.fn[b] = function() {
                    var a = this.t();
                    this.ga();
                    this.Vb(a, b, arguments);
                    var d = a[b].apply(a, arguments);
                    this.fa();
                    return d === a ? this : d;
                };
            });
            a.a.q([ "slice" ], function(b) {
                a.la.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments);
                };
            });
            a.b("observableArray", a.la);
            a.ya.trackArrayChanges = function(b, c) {
                function d() {
                    if (!e) {
                        e = !0;
                        var c = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && b !== I || ++k;
                            return c.apply(this, arguments);
                        };
                        var d = [].concat(b.t() || []);
                        f = null;
                        g = b.X(function(c) {
                            c = [].concat(c || []);
                            if (b.Pa("arrayChange")) {
                                var e;
                                if (!f || 1 < k) f = a.a.ib(d, c, b.hb);
                                e = f;
                            }
                            d = c;
                            f = null;
                            k = 0;
                            e && e.length && b.notifySubscribers(e, "arrayChange");
                        });
                    }
                }
                b.hb = {};
                c && "object" == typeof c && a.a.extend(b.hb, c);
                b.hb.sparse = !0;
                if (!b.Vb) {
                    var e = !1, f = null, g, k = 0, l = b.sa, m = b.Ia;
                    b.sa = function(a) {
                        l && l.call(b, a);
                        "arrayChange" === a && d();
                    };
                    b.Ia = function(a) {
                        m && m.call(b, a);
                        "arrayChange" !== a || b.Pa("arrayChange") || (g.k(), e = !1);
                    };
                    b.Vb = function(b, c, d) {
                        function m(a, b, c) {
                            return l[l.length] = {
                                status: a,
                                value: b,
                                index: c
                            };
                        }
                        if (e && !k) {
                            var l = [], g = b.length, t = d.length, G = 0;
                            switch (c) {
                              case "push":
                                G = g;

                              case "unshift":
                                for (c = 0; c < t; c++) m("added", d[c], G + c);
                                break;

                              case "pop":
                                G = g - 1;

                              case "shift":
                                g && m("deleted", b[G], G);
                                break;

                              case "splice":
                                c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g);
                                for (var g = 1 === t ? g : Math.min(c + (d[1] || 0), g), t = c + t - 2, G = Math.max(g, t), P = [], n = [], Q = 2; c < G; ++c, 
                                ++Q) c < g && n.push(m("deleted", b[c], c)), c < t && P.push(m("added", d[Q], c));
                                a.a.dc(n, P);
                                break;

                              default:
                                return;
                            }
                            f = l;
                        }
                    };
                }
            };
            var s = a.a.Yb("_state");
            a.m = a.B = function(b, c, d) {
                function e() {
                    if (0 < arguments.length) {
                        if ("function" === typeof f) f.apply(g.pb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this;
                    }
                    a.l.oc(e);
                    (g.S || g.s && e.Qa()) && e.aa();
                    return g.T;
                }
                "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
                if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
                var f = d.write, g = {
                    T: n,
                    S: !0,
                    Ra: !1,
                    Fb: !1,
                    R: !1,
                    Va: !1,
                    s: !1,
                    jd: d.read,
                    pb: c || d.owner,
                    i: d.disposeWhenNodeIsRemoved || d.i || null,
                    wa: d.disposeWhen || d.wa,
                    mb: null,
                    r: {},
                    L: 0,
                    bc: null
                };
                e[s] = g;
                e.Vc = "function" === typeof f;
                a.a.ka || a.a.extend(e, a.J.fn);
                a.J.fn.rb(e);
                a.a.Ya(e, z);
                d.pure ? (g.Va = !0, g.s = !0, a.a.extend(e, $)) : d.deferEvaluation && a.a.extend(e, aa);
                a.options.deferUpdates && a.ya.deferred(e, !0);
                g.i && (g.Fb = !0, g.i.nodeType || (g.i = null));
                g.s || d.deferEvaluation || e.aa();
                g.i && e.ba() && a.a.F.oa(g.i, g.mb = function() {
                    e.k();
                });
                return e;
            };
            var z = {
                equalityComparer: J,
                Aa: function() {
                    return this[s].L;
                },
                Pb: function(a, c, d) {
                    if (this[s].Va && c === this) throw Error("A 'pure' computed must not be called recursively");
                    this[s].r[a] = d;
                    d.Ga = this[s].L++;
                    d.na = c.Na();
                },
                Qa: function() {
                    var a, c, d = this[s].r;
                    for (a in d) if (d.hasOwnProperty(a) && (c = d[a], c.ia.Uc(c.na))) return !0;
                },
                bd: function() {
                    this.Fa && !this[s].Ra && this.Fa();
                },
                ba: function() {
                    return this[s].S || 0 < this[s].L;
                },
                ld: function() {
                    this.Mb || this.ac();
                },
                uc: function(a) {
                    if (a.cb && !this[s].i) {
                        var c = a.X(this.bd, this, "dirty"), d = a.X(this.ld, this);
                        return {
                            ia: a,
                            k: function() {
                                c.k();
                                d.k();
                            }
                        };
                    }
                    return a.X(this.ac, this);
                },
                ac: function() {
                    var b = this, c = b.throttleEvaluation;
                    c && 0 <= c ? (clearTimeout(this[s].bc), this[s].bc = a.a.setTimeout(function() {
                        b.aa(!0);
                    }, c)) : b.Fa ? b.Fa() : b.aa(!0);
                },
                aa: function(b) {
                    var c = this[s], d = c.wa;
                    if (!c.Ra && !c.R) {
                        if (c.i && !a.a.nb(c.i) || d && d()) {
                            if (!c.Fb) {
                                this.k();
                                return;
                            }
                        } else c.Fb = !1;
                        c.Ra = !0;
                        try {
                            this.Qc(b);
                        } finally {
                            c.Ra = !1;
                        }
                        c.L || this.k();
                    }
                },
                Qc: function(b) {
                    var c = this[s], d = c.Va ? n : !c.L, e = {
                        Hc: this,
                        Ma: c.r,
                        lb: c.L
                    };
                    a.l.Ub({
                        Gc: e,
                        gb: Y,
                        m: this,
                        Sa: d
                    });
                    c.r = {};
                    c.L = 0;
                    e = this.Pc(c, e);
                    this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"), c.T = e, 
                    c.s ? this.zc() : b && this.notifySubscribers(c.T));
                    d && this.notifySubscribers(c.T, "awake");
                },
                Pc: function(b, c) {
                    try {
                        var d = b.jd;
                        return b.pb ? d.call(b.pb) : d();
                    } finally {
                        a.l.end(), c.lb && !b.s && a.a.D(c.Ma, X), b.S = !1;
                    }
                },
                t: function() {
                    var a = this[s];
                    (a.S && !a.L || a.s && this.Qa()) && this.aa();
                    return a.T;
                },
                Ta: function(b) {
                    a.J.fn.Ta.call(this, b);
                    this.Fa = function() {
                        this.Kb(this[s].T);
                        this[s].S = !0;
                        this.Lb(this);
                    };
                },
                k: function() {
                    var b = this[s];
                    !b.s && b.r && a.a.D(b.r, function(a, b) {
                        b.k && b.k();
                    });
                    b.i && b.mb && a.a.F.pc(b.i, b.mb);
                    b.r = null;
                    b.L = 0;
                    b.R = !0;
                    b.S = !1;
                    b.s = !1;
                    b.i = null;
                }
            }, $ = {
                sa: function(b) {
                    var c = this, d = c[s];
                    if (!d.R && d.s && "change" == b) {
                        d.s = !1;
                        if (d.S || c.Qa()) d.r = null, d.L = 0, d.S = !0, c.aa(); else {
                            var e = [];
                            a.a.D(d.r, function(a, b) {
                                e[b.Ga] = a;
                            });
                            a.a.q(e, function(a, b) {
                                var e = d.r[a], l = c.uc(e.ia);
                                l.Ga = b;
                                l.na = e.na;
                                d.r[a] = l;
                            });
                        }
                        d.R || c.notifySubscribers(d.T, "awake");
                    }
                },
                Ia: function(b) {
                    var c = this[s];
                    c.R || "change" != b || this.Pa("change") || (a.a.D(c.r, function(a, b) {
                        b.k && (c.r[a] = {
                            ia: b.ia,
                            Ga: b.Ga,
                            na: b.na
                        }, b.k());
                    }), c.s = !0, this.notifySubscribers(n, "asleep"));
                },
                Na: function() {
                    var b = this[s];
                    b.s && (b.S || this.Qa()) && this.aa();
                    return a.J.fn.Na.call(this);
                }
            }, aa = {
                sa: function(a) {
                    "change" != a && "beforeChange" != a || this.t();
                }
            };
            a.a.ka && a.a.Xa(z, a.J.fn);
            var R = a.N.gd;
            a.m[R] = a.N;
            z[R] = a.m;
            a.Xc = function(b) {
                return a.Oa(b, a.m);
            };
            a.Yc = function(b) {
                return a.Oa(b, a.m) && b[s] && b[s].Va;
            };
            a.b("computed", a.m);
            a.b("dependentObservable", a.m);
            a.b("isComputed", a.Xc);
            a.b("isPureComputed", a.Yc);
            a.b("computed.fn", z);
            a.G(z, "peek", z.t);
            a.G(z, "dispose", z.k);
            a.G(z, "isActive", z.ba);
            a.G(z, "getDependenciesCount", z.Aa);
            a.nc = function(b, c) {
                if ("function" === typeof b) return a.m(b, c, {
                    pure: !0
                });
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.m(b, c);
            };
            a.b("pureComputed", a.nc);
            (function() {
                function b(a, f, g) {
                    g = g || new d();
                    a = f(a);
                    if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                    var k = a instanceof Array ? [] : {};
                    g.save(a, k);
                    c(a, function(c) {
                        var d = f(a[c]);
                        switch (typeof d) {
                          case "boolean":
                          case "number":
                          case "string":
                          case "function":
                            k[c] = d;
                            break;

                          case "object":
                          case "undefined":
                            var h = g.get(d);
                            k[c] = h !== n ? h : b(d, f, g);
                        }
                    });
                    return k;
                }
                function c(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++) b(c);
                        "function" == typeof a.toJSON && b("toJSON");
                    } else for (c in a) b(c);
                }
                function d() {
                    this.keys = [];
                    this.Ib = [];
                }
                a.wc = function(c) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.H(b) && 10 > c; c++) b = b();
                        return b;
                    });
                };
                a.toJSON = function(b, c, d) {
                    b = a.wc(b);
                    return a.a.Eb(b, c, d);
                };
                d.prototype = {
                    save: function(b, c) {
                        var d = a.a.o(this.keys, b);
                        0 <= d ? this.Ib[d] = c : (this.keys.push(b), this.Ib.push(c));
                    },
                    get: function(b) {
                        b = a.a.o(this.keys, b);
                        return 0 <= b ? this.Ib[b] : n;
                    }
                };
            })();
            a.b("toJS", a.wc);
            a.b("toJSON", a.toJSON);
            (function() {
                a.j = {
                    u: function(b) {
                        switch (a.a.A(b)) {
                          case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.xb) : 7 >= a.a.C ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;

                          case "select":
                            return 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) : n;

                          default:
                            return b.value;
                        }
                    },
                    ha: function(b, c, d) {
                        switch (a.a.A(b)) {
                          case "option":
                            switch (typeof c) {
                              case "string":
                                a.a.e.set(b, a.d.options.xb, n);
                                "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = c;
                                break;

                              default:
                                a.a.e.set(b, a.d.options.xb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : "";
                            }
                            break;

                          case "select":
                            if ("" === c || null === c) c = n;
                            for (var e = -1, f = 0, g = b.options.length, k; f < g; ++f) if (k = a.j.u(b.options[f]), 
                            k == c || "" == k && c === n) {
                                e = f;
                                break;
                            }
                            if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e;
                            break;

                          default:
                            if (null === c || c === n) c = "";
                            b.value = c;
                        }
                    }
                };
            })();
            a.b("selectExtensions", a.j);
            a.b("selectExtensions.readValue", a.j.u);
            a.b("selectExtensions.writeValue", a.j.ha);
            a.h = function() {
                function b(b) {
                    b = a.a.$a(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), r, k = [], p = 0;
                    if (d) {
                        d.push(",");
                        for (var A = 0, y; y = d[A]; ++A) {
                            var t = y.charCodeAt(0);
                            if (44 === t) {
                                if (0 >= p) {
                                    c.push(r && k.length ? {
                                        key: r,
                                        value: k.join("")
                                    } : {
                                        unknown: r || k.join("")
                                    });
                                    r = p = 0;
                                    k = [];
                                    continue;
                                }
                            } else if (58 === t) {
                                if (!p && !r && 1 === k.length) {
                                    r = k.pop();
                                    continue;
                                }
                            } else 47 === t && A && 1 < y.length ? (t = d[A - 1].match(f)) && !g[t[0]] && (b = b.substr(b.indexOf(y) + 1), 
                            d = b.match(e), d.push(","), A = -1, y = "/") : 40 === t || 123 === t || 91 === t ? ++p : 41 === t || 125 === t || 93 === t ? --p : r || k.length || 34 !== t && 39 !== t || (y = y.slice(1, -1));
                            k.push(y);
                        }
                    }
                    return c;
                }
                var c = [ "true", "false", "null", "undefined" ], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = {
                    "in": 1,
                    "return": 1,
                    "typeof": 1
                }, k = {};
                return {
                    ta: [],
                    ea: k,
                    yb: b,
                    Ua: function(e, m) {
                        function h(b, e) {
                            var m;
                            if (!A) {
                                var l = a.getBindingHandler(b);
                                if (l && l.preprocess && !(e = l.preprocess(e, b, h))) return;
                                if (l = k[b]) m = e, 0 <= a.a.o(c, m) ? m = !1 : (l = m.match(d), m = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : m), 
                                l = m;
                                l && g.push("'" + b + "':function(_z){" + m + "=_z}");
                            }
                            p && (e = "function(){return " + e + " }");
                            f.push("'" + b + "':" + e);
                        }
                        m = m || {};
                        var f = [], g = [], p = m.valueAccessors, A = m.bindingParams, y = "string" === typeof e ? b(e) : e;
                        a.a.q(y, function(a) {
                            h(a.key || a.unknown, a.value);
                        });
                        g.length && h("_ko_property_writers", "{" + g.join(",") + " }");
                        return f.join(",");
                    },
                    ad: function(a, b) {
                        for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
                        return !1;
                    },
                    Ea: function(b, c, d, e, f) {
                        if (b && a.H(b)) !a.Ba(b) || f && b.t() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
                    }
                };
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ta);
            a.b("expressionRewriting.parseObjectLiteral", a.h.yb);
            a.b("expressionRewriting.preProcessBindings", a.h.Ua);
            a.b("expressionRewriting._twoWayBindings", a.h.ea);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ua);
            (function() {
                function b(a) {
                    return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue);
                }
                function c(a) {
                    return 8 == a.nodeType && k.test(f ? a.text : a.nodeValue);
                }
                function d(a, d) {
                    for (var e = a, f = 1, l = []; e = e.nextSibling; ) {
                        if (c(e) && (f--, 0 === f)) return l;
                        l.push(e);
                        b(e) && f++;
                    }
                    if (!d) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null;
                }
                function e(a, b) {
                    var c = d(a, b);
                    return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null;
                }
                var f = u && "<!--test-->" === u.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, k = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, l = {
                    ul: !0,
                    ol: !0
                };
                a.f = {
                    Z: {},
                    childNodes: function(a) {
                        return b(a) ? d(a) : a.childNodes;
                    },
                    xa: function(c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d]);
                        } else a.a.ob(c);
                    },
                    da: function(c, d) {
                        if (b(c)) {
                            a.f.xa(c);
                            for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++) e.parentNode.insertBefore(d[f], e);
                        } else a.a.da(c, d);
                    },
                    mc: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
                    },
                    gc: function(c, d, e) {
                        e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.f.mc(c, d);
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild;
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling;
                    },
                    Tc: b,
                    pd: function(a) {
                        return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null;
                    },
                    kc: function(d) {
                        if (l[a.a.A(d)]) {
                            var h = d.firstChild;
                            if (h) {
                                do if (1 === h.nodeType) {
                                    var f;
                                    f = h.firstChild;
                                    var g = null;
                                    if (f) {
                                        do if (g) g.push(f); else if (b(f)) {
                                            var k = e(f, !0);
                                            k ? f = k : g = [ f ];
                                        } else c(f) && (g = [ f ]); while (f = f.nextSibling);
                                    }
                                    if (f = g) for (g = h.nextSibling, k = 0; k < f.length; k++) g ? d.insertBefore(f[k], g) : d.appendChild(f[k]);
                                } while (h = h.nextSibling);
                            }
                        }
                    }
                };
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Z);
            a.b("virtualElements.emptyNode", a.f.xa);
            a.b("virtualElements.insertAfter", a.f.gc);
            a.b("virtualElements.prepend", a.f.mc);
            a.b("virtualElements.setDomNodeChildren", a.f.da);
            (function() {
                a.Q = function() {
                    this.Fc = {};
                };
                a.a.extend(a.Q.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                          case 1:
                            return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);

                          case 8:
                            return a.f.Tc(b);

                          default:
                            return !1;
                        }
                    },
                    getBindings: function(b, c) {
                        var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null;
                        return a.g.Ob(d, b, c, !1);
                    },
                    getBindingAccessors: function(b, c) {
                        var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, {
                            valueAccessors: !0
                        }) : null;
                        return a.g.Ob(d, b, c, !0);
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                          case 1:
                            return b.getAttribute("data-bind");

                          case 8:
                            return a.f.pd(b);

                          default:
                            return null;
                        }
                    },
                    parseBindingsString: function(b, c, d, e) {
                        try {
                            var f = this.Fc, g = b + (e && e.valueAccessors || ""), k;
                            if (!(k = f[g])) {
                                var l, m = "with($context){with($data||{}){return{" + a.h.Ua(b, e) + "}}}";
                                l = new Function("$context", "$element", m);
                                k = f[g] = l;
                            }
                            return k(c, d);
                        } catch (h) {
                            throw h.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + h.message, 
                            h;
                        }
                    }
                });
                a.Q.instance = new a.Q();
            })();
            a.b("bindingProvider", a.Q);
            (function() {
                function b(a) {
                    return function() {
                        return a;
                    };
                }
                function c(a) {
                    return a();
                }
                function d(b) {
                    return a.a.Ca(a.l.w(b), function(a, c) {
                        return function() {
                            return b()[c];
                        };
                    });
                }
                function e(c, e, h) {
                    return "function" === typeof c ? d(c.bind(null, e, h)) : a.a.Ca(c, b);
                }
                function f(a, b) {
                    return d(this.getBindings.bind(this, a, b));
                }
                function g(b, c, d) {
                    var e, h = a.f.firstChild(c), f = a.Q.instance, m = f.preprocessNode;
                    if (m) {
                        for (;e = h; ) h = a.f.nextSibling(e), m.call(f, e);
                        h = a.f.firstChild(c);
                    }
                    for (;e = h; ) h = a.f.nextSibling(e), k(b, e, d);
                }
                function k(b, c, d) {
                    var e = !0, h = 1 === c.nodeType;
                    h && a.f.kc(c);
                    if (h && d || a.Q.instance.nodeHasBindings(c)) e = m(c, null, b, d).shouldBindDescendants;
                    e && !r[a.a.A(c)] && g(b, c, !h);
                }
                function l(b) {
                    var c = [], d = {}, e = [];
                    a.a.D(b, function Z(h) {
                        if (!d[h]) {
                            var f = a.getBindingHandler(h);
                            f && (f.after && (e.push(h), a.a.q(f.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.o(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                                    Z(c);
                                }
                            }), e.length--), c.push({
                                key: h,
                                fc: f
                            }));
                            d[h] = !0;
                        }
                    });
                    return c;
                }
                function m(b, d, e, h) {
                    var m = a.a.e.get(b, q);
                    if (!d) {
                        if (m) throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.e.set(b, q, !0);
                    }
                    !m && h && a.tc(b, e);
                    var g;
                    if (d && "function" !== typeof d) g = d; else {
                        var k = a.Q.instance, r = k.getBindingAccessors || f, p = a.B(function() {
                            (g = d ? d(e, b) : r.call(k, b, e)) && e.P && e.P();
                            return g;
                        }, null, {
                            i: b
                        });
                        g && p.ba() || (p = null);
                    }
                    var u;
                    if (g) {
                        var v = p ? function(a) {
                            return function() {
                                return c(p()[a]);
                            };
                        } : function(a) {
                            return g[a];
                        }, s = function() {
                            return a.a.Ca(p ? p() : g, c);
                        };
                        s.get = function(a) {
                            return g[a] && c(v(a));
                        };
                        s.has = function(a) {
                            return a in g;
                        };
                        h = l(g);
                        a.a.q(h, function(c) {
                            var d = c.fc.init, h = c.fc.update, f = c.key;
                            if (8 === b.nodeType && !a.f.Z[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.l.w(function() {
                                    var a = d(b, v(f), s, e.$data, e);
                                    if (a && a.controlsDescendantBindings) {
                                        if (u !== n) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        u = f;
                                    }
                                }), "function" == typeof h && a.B(function() {
                                    h(b, v(f), s, e.$data, e);
                                }, null, {
                                    i: b
                                });
                            } catch (m) {
                                throw m.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + m.message, 
                                m;
                            }
                        });
                    }
                    return {
                        shouldBindDescendants: u === n
                    };
                }
                function h(b) {
                    return b && b instanceof a.U ? b : new a.U(b);
                }
                a.d = {};
                var r = {
                    script: !0,
                    textarea: !0,
                    template: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b];
                };
                a.U = function(b, c, d, e) {
                    var h = this, f = "function" == typeof b && !a.H(b), m, g = a.B(function() {
                        var m = f ? b() : b, l = a.a.c(m);
                        c ? (c.P && c.P(), a.a.extend(h, c), g && (h.P = g)) : (h.$parents = [], h.$root = l, 
                        h.ko = a);
                        h.$rawData = m;
                        h.$data = l;
                        d && (h[d] = l);
                        e && e(h, c, l);
                        return h.$data;
                    }, null, {
                        wa: function() {
                            return m && !a.a.Qb(m);
                        },
                        i: !0
                    });
                    g.ba() && (h.P = g, g.equalityComparer = null, m = [], g.Ac = function(b) {
                        m.push(b);
                        a.a.F.oa(b, function(b) {
                            a.a.La(m, b);
                            m.length || (g.k(), h.P = g = n);
                        });
                    });
                };
                a.U.prototype.createChildContext = function(b, c, d) {
                    return new a.U(b, this, c, function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a);
                    });
                };
                a.U.prototype.extend = function(b) {
                    return new a.U(this.P || this.$data, this, null, function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b);
                    });
                };
                var q = a.a.e.I(), p = a.a.e.I();
                a.tc = function(b, c) {
                    if (2 == arguments.length) a.a.e.set(b, p, c), c.P && c.P.Ac(b); else return a.a.e.get(b, p);
                };
                a.Ja = function(b, c, d) {
                    1 === b.nodeType && a.f.kc(b);
                    return m(b, c, h(d), !0);
                };
                a.Dc = function(b, c, d) {
                    d = h(d);
                    return a.Ja(b, e(c, d, b), d);
                };
                a.eb = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(h(a), b, !0);
                };
                a.Rb = function(a, b) {
                    !v && x.jQuery && (v = x.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || x.document.body;
                    k(h(a), b, !0);
                };
                a.kb = function(b) {
                    switch (b.nodeType) {
                      case 1:
                      case 8:
                        var c = a.tc(b);
                        if (c) return c;
                        if (b.parentNode) return a.kb(b.parentNode);
                    }
                    return n;
                };
                a.Jc = function(b) {
                    return (b = a.kb(b)) ? b.$data : n;
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.Rb);
                a.b("applyBindingsToDescendants", a.eb);
                a.b("applyBindingAccessorsToNode", a.Ja);
                a.b("applyBindingsToNode", a.Dc);
                a.b("contextFor", a.kb);
                a.b("dataFor", a.Jc);
            })();
            (function(b) {
                function c(c, e) {
                    var m = f.hasOwnProperty(c) ? f[c] : b, h;
                    m ? m.X(e) : (m = f[c] = new a.J(), m.X(e), d(c, function(b, d) {
                        var e = !(!d || !d.synchronous);
                        g[c] = {
                            definition: b,
                            Zc: e
                        };
                        delete f[c];
                        h || e ? m.notifySubscribers(b) : a.Y.Wa(function() {
                            m.notifySubscribers(b);
                        });
                    }), h = !0);
                }
                function d(a, b) {
                    e("getConfig", [ a ], function(c) {
                        c ? e("loadComponent", [ a, c ], function(a) {
                            b(a, c);
                        }) : b(null, null);
                    });
                }
                function e(c, d, f, h) {
                    h || (h = a.g.loaders.slice(0));
                    var g = h.shift();
                    if (g) {
                        var q = g[c];
                        if (q) {
                            var p = !1;
                            if (q.apply(g, d.concat(function(a) {
                                p ? f(null) : null !== a ? f(a) : e(c, d, f, h);
                            })) !== b && (p = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, f, h);
                    } else f(null);
                }
                var f = {}, g = {};
                a.g = {
                    get: function(d, e) {
                        var f = g.hasOwnProperty(d) ? g[d] : b;
                        f ? f.Zc ? a.l.w(function() {
                            e(f.definition);
                        }) : a.Y.Wa(function() {
                            e(f.definition);
                        }) : c(d, e);
                    },
                    Xb: function(a) {
                        delete g[a];
                    },
                    Jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.Xb);
            })();
            (function() {
                function b(b, c, d, e) {
                    function g() {
                        0 === --y && e(k);
                    }
                    var k = {}, y = 2, t = d.template;
                    d = d.viewModel;
                    t ? f(c, t, function(c) {
                        a.g.Jb("loadTemplate", [ b, c ], function(a) {
                            k.template = a;
                            g();
                        });
                    }) : g();
                    d ? f(c, d, function(c) {
                        a.g.Jb("loadViewModel", [ b, c ], function(a) {
                            k[l] = a;
                            g();
                        });
                    }) : g();
                }
                function c(a, b, d) {
                    if ("function" === typeof b) d(function(a) {
                        return new b(a);
                    }); else if ("function" === typeof b[l]) d(b[l]); else if ("instance" in b) {
                        var e = b.instance;
                        d(function() {
                            return e;
                        });
                    } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b);
                }
                function d(b) {
                    switch (a.a.A(b)) {
                      case "script":
                        return a.a.ma(b.text);

                      case "textarea":
                        return a.a.ma(b.value);

                      case "template":
                        if (e(b.content)) return a.a.ua(b.content.childNodes);
                    }
                    return a.a.ua(b.childNodes);
                }
                function e(a) {
                    return x.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
                }
                function f(a, b, c) {
                    "string" === typeof b.require ? O || x.require ? (O || x.require)([ b.require ], c) : a("Uses require, but no AMD loader is present") : c(b);
                }
                function g(a) {
                    return function(b) {
                        throw Error("Component '" + a + "': " + b);
                    };
                }
                var k = {};
                a.g.register = function(b, c) {
                    if (!c) throw Error("Invalid configuration for " + b);
                    if (a.g.ub(b)) throw Error("Component " + b + " is already registered");
                    k[b] = c;
                };
                a.g.ub = function(a) {
                    return k.hasOwnProperty(a);
                };
                a.g.od = function(b) {
                    delete k[b];
                    a.g.Xb(b);
                };
                a.g.Zb = {
                    getConfig: function(a, b) {
                        b(k.hasOwnProperty(a) ? k[a] : null);
                    },
                    loadComponent: function(a, c, d) {
                        var e = g(a);
                        f(e, c, function(c) {
                            b(a, e, c, d);
                        });
                    },
                    loadTemplate: function(b, c, f) {
                        b = g(b);
                        if ("string" === typeof c) f(a.a.ma(c)); else if (c instanceof Array) f(c); else if (e(c)) f(a.a.V(c.childNodes)); else if (c.element) if (c = c.element, 
                        x.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c)); else if ("string" === typeof c) {
                            var l = u.getElementById(c);
                            l ? f(d(l)) : b("Cannot find element with ID " + c);
                        } else b("Unknown element type: " + c); else b("Unknown template value: " + c);
                    },
                    loadViewModel: function(a, b, d) {
                        c(g(a), b, d);
                    }
                };
                var l = "createViewModel";
                a.b("components.register", a.g.register);
                a.b("components.isRegistered", a.g.ub);
                a.b("components.unregister", a.g.od);
                a.b("components.defaultLoader", a.g.Zb);
                a.g.loaders.push(a.g.Zb);
                a.g.Bc = k;
            })();
            (function() {
                function b(b, e) {
                    var f = b.getAttribute("params");
                    if (f) {
                        var f = c.parseBindingsString(f, e, b, {
                            valueAccessors: !0,
                            bindingParams: !0
                        }), f = a.a.Ca(f, function(c) {
                            return a.m(c, null, {
                                i: b
                            });
                        }), g = a.a.Ca(f, function(c) {
                            var e = c.t();
                            return c.ba() ? a.m({
                                read: function() {
                                    return a.a.c(c());
                                },
                                write: a.Ba(e) && function(a) {
                                    c()(a);
                                },
                                i: b
                            }) : e;
                        });
                        g.hasOwnProperty("$raw") || (g.$raw = f);
                        return g;
                    }
                    return {
                        $raw: {}
                    };
                }
                a.g.getComponentNameForNode = function(b) {
                    var c = a.a.A(b);
                    if (a.g.ub(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.C && b.tagName === c)) return c;
                };
                a.g.Ob = function(c, e, f, g) {
                    if (1 === e.nodeType) {
                        var k = a.g.getComponentNameForNode(e);
                        if (k) {
                            c = c || {};
                            if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var l = {
                                name: k,
                                params: b(e, f)
                            };
                            c.component = g ? function() {
                                return l;
                            } : l;
                        }
                    }
                    return c;
                };
                var c = new a.Q();
                9 > a.a.C && (a.g.register = function(a) {
                    return function(b) {
                        u.createElement(b);
                        return a.apply(this, arguments);
                    };
                }(a.g.register), u.createDocumentFragment = function(b) {
                    return function() {
                        var c = b(), f = a.g.Bc, g;
                        for (g in f) f.hasOwnProperty(g) && c.createElement(g);
                        return c;
                    };
                }(u.createDocumentFragment));
            })();
            (function(b) {
                function c(b, c, d) {
                    c = c.template;
                    if (!c) throw Error("Component '" + b + "' has no template");
                    b = a.a.ua(c);
                    a.f.da(d, b);
                }
                function d(a, b, c, d) {
                    var e = a.createViewModel;
                    return e ? e.call(a, d, {
                        element: b,
                        templateNodes: c
                    }) : d;
                }
                var e = 0;
                a.d.component = {
                    init: function(f, g, k, l, m) {
                        function h() {
                            var a = r && r.dispose;
                            "function" === typeof a && a.call(r);
                            q = r = null;
                        }
                        var r, q, p = a.a.V(a.f.childNodes(f));
                        a.a.F.oa(f, h);
                        a.m(function() {
                            var l = a.a.c(g()), k, t;
                            "string" === typeof l ? k = l : (k = a.a.c(l.name), t = a.a.c(l.params));
                            if (!k) throw Error("No component name specified");
                            var n = q = ++e;
                            a.g.get(k, function(e) {
                                if (q === n) {
                                    h();
                                    if (!e) throw Error("Unknown component '" + k + "'");
                                    c(k, e, f);
                                    var g = d(e, f, p, t);
                                    e = m.createChildContext(g, b, function(a) {
                                        a.$component = g;
                                        a.$componentTemplateNodes = p;
                                    });
                                    r = g;
                                    a.eb(e, f);
                                }
                            });
                        }, null, {
                            i: f
                        });
                        return {
                            controlsDescendantBindings: !0
                        };
                    }
                };
                a.f.Z.component = !0;
            })();
            var S = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, c) {
                    var d = a.a.c(c()) || {};
                    a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        var g = !1 === d || null === d || d === n;
                        g && b.removeAttribute(c);
                        8 >= a.a.C && c in S ? (c = S[c], g ? b.removeAttribute(c) : b[c] = d) : g || b.setAttribute(c, d.toString());
                        "name" === c && a.a.rc(b, g ? "" : d.toString());
                    });
                }
            };
            (function() {
                a.d.checked = {
                    after: [ "value", "attr" ],
                    init: function(b, c, d) {
                        function e() {
                            var e = b.checked, f = p ? g() : e;
                            if (!a.va.Sa() && (!l || e)) {
                                var m = a.l.w(c);
                                if (h) {
                                    var k = r ? m.t() : m;
                                    q !== f ? (e && (a.a.pa(k, f, !0), a.a.pa(k, q, !1)), q = f) : a.a.pa(k, f, e);
                                    r && a.Ba(m) && m(k);
                                } else a.h.Ea(m, d, "checked", f, !0);
                            }
                        }
                        function f() {
                            var d = a.a.c(c());
                            b.checked = h ? 0 <= a.a.o(d, g()) : k ? d : g() === d;
                        }
                        var g = a.nc(function() {
                            return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : d.has("value") ? a.a.c(d.get("value")) : b.value;
                        }), k = "checkbox" == b.type, l = "radio" == b.type;
                        if (k || l) {
                            var m = c(), h = k && a.a.c(m) instanceof Array, r = !(h && m.push && m.splice), q = h ? g() : n, p = l || h;
                            l && !b.name && a.d.uniqueName.init(b, function() {
                                return !0;
                            });
                            a.m(e, null, {
                                i: b
                            });
                            a.a.p(b, "click", e);
                            a.m(f, null, {
                                i: b
                            });
                            m = n;
                        }
                    }
                };
                a.h.ea.checked = !0;
                a.d.checkedValue = {
                    update: function(b, c) {
                        b.value = a.a.c(c());
                    }
                };
            })();
            a.d.css = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    null !== d && "object" == typeof d ? a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        a.a.bb(b, c, d);
                    }) : (d = a.a.$a(String(d || "")), a.a.bb(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, 
                    a.a.bb(b, d, !0));
                }
            };
            a.d.enable = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0);
                }
            };
            a.d.disable = {
                update: function(b, c) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(c());
                    });
                }
            };
            a.d.event = {
                init: function(b, c, d, e, f) {
                    var g = c() || {};
                    a.a.D(g, function(g) {
                        "string" == typeof g && a.a.p(b, g, function(b) {
                            var m, h = c()[g];
                            if (h) {
                                try {
                                    var r = a.a.V(arguments);
                                    e = f.$data;
                                    r.unshift(e);
                                    m = h.apply(e, r);
                                } finally {
                                    !0 !== m && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                                }
                                !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
                            }
                        });
                    });
                }
            };
            a.d.foreach = {
                ic: function(b) {
                    return function() {
                        var c = b(), d = a.a.zb(c);
                        if (!d || "number" == typeof d.length) return {
                            foreach: c,
                            templateEngine: a.W.sb
                        };
                        a.a.c(c);
                        return {
                            foreach: d.data,
                            as: d.as,
                            includeDestroyed: d.includeDestroyed,
                            afterAdd: d.afterAdd,
                            beforeRemove: d.beforeRemove,
                            afterRender: d.afterRender,
                            beforeMove: d.beforeMove,
                            afterMove: d.afterMove,
                            templateEngine: a.W.sb
                        };
                    };
                },
                init: function(b, c) {
                    return a.d.template.init(b, a.d.foreach.ic(c));
                },
                update: function(b, c, d, e, f) {
                    return a.d.template.update(b, a.d.foreach.ic(c), d, e, f);
                }
            };
            a.h.ta.foreach = !1;
            a.f.Z.foreach = !0;
            a.d.hasfocus = {
                init: function(b, c, d) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement" in f) {
                            var g;
                            try {
                                g = f.activeElement;
                            } catch (h) {
                                g = f.body;
                            }
                            e = g === b;
                        }
                        f = c();
                        a.h.Ea(f, d, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1;
                    }
                    var f = e.bind(null, !0), g = e.bind(null, !1);
                    a.a.p(b, "focus", f);
                    a.a.p(b, "focusin", f);
                    a.a.p(b, "blur", g);
                    a.a.p(b, "focusout", g);
                },
                update: function(b, c) {
                    var d = !!a.a.c(c());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), 
                    !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.l.w(a.a.Da, null, [ b, d ? "focusin" : "focusout" ]));
                }
            };
            a.h.ea.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.ea.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, c) {
                    a.a.Cb(b, c());
                }
            };
            K("if");
            K("ifnot", !1, !0);
            K("with", !0, !1, function(a, c) {
                return a.createChildContext(c);
            });
            var L = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== a.a.A(b)) throw Error("options binding applies only to SELECT elements");
                    for (;0 < b.length; ) b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, c, d) {
                    function e() {
                        return a.a.Ka(b.options, function(a) {
                            return a.selected;
                        });
                    }
                    function f(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c;
                    }
                    function g(c, e) {
                        if (A && h) a.j.ha(b, a.a.c(d.get("value")), !0); else if (p.length) {
                            var f = 0 <= a.a.o(p, a.j.u(e[0]));
                            a.a.sc(e[0], f);
                            A && !f && a.l.w(a.a.Da, null, [ b, "change" ]);
                        }
                    }
                    var k = b.multiple, l = 0 != b.length && k ? b.scrollTop : null, m = a.a.c(c()), h = d.get("valueAllowUnset") && d.has("value"), r = d.get("optionsIncludeDestroyed");
                    c = {};
                    var q, p = [];
                    h || (k ? p = a.a.fb(e(), a.j.u) : 0 <= b.selectedIndex && p.push(a.j.u(b.options[b.selectedIndex])));
                    m && ("undefined" == typeof m.length && (m = [ m ]), q = a.a.Ka(m, function(b) {
                        return r || b === n || null === b || !a.a.c(b._destroy);
                    }), d.has("optionsCaption") && (m = a.a.c(d.get("optionsCaption")), null !== m && m !== n && q.unshift(L)));
                    var A = !1;
                    c.beforeRemove = function(a) {
                        b.removeChild(a);
                    };
                    m = g;
                    d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (m = function(b, c) {
                        g(0, c);
                        a.l.w(d.get("optionsAfterRender"), null, [ c[0], b !== L ? b : n ]);
                    });
                    a.a.Bb(b, q, function(c, e, g) {
                        g.length && (p = !h && g[0].selected ? [ a.j.u(g[0]) ] : [], A = !0);
                        e = b.ownerDocument.createElement("option");
                        c === L ? (a.a.Za(e, d.get("optionsCaption")), a.j.ha(e, n)) : (g = f(c, d.get("optionsValue"), c), 
                        a.j.ha(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Za(e, c));
                        return [ e ];
                    }, c, m);
                    a.l.w(function() {
                        h ? a.j.ha(b, a.a.c(d.get("value")), !0) : (k ? p.length && e().length < p.length : p.length && 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) !== p[0] : p.length || 0 <= b.selectedIndex) && a.a.Da(b, "change");
                    });
                    a.a.Nc(b);
                    l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l);
                }
            };
            a.d.options.xb = a.a.e.I();
            a.d.selectedOptions = {
                after: [ "options", "foreach" ],
                init: function(b, c, d) {
                    a.a.p(b, "change", function() {
                        var e = c(), f = [];
                        a.a.q(b.getElementsByTagName("option"), function(b) {
                            b.selected && f.push(a.j.u(b));
                        });
                        a.h.Ea(e, d, "selectedOptions", f);
                    });
                },
                update: function(b, c) {
                    if ("select" != a.a.A(b)) throw Error("values binding applies only to SELECT elements");
                    var d = a.a.c(c()), e = b.scrollTop;
                    d && "number" == typeof d.length && a.a.q(b.getElementsByTagName("option"), function(b) {
                        var c = 0 <= a.a.o(d, a.j.u(b));
                        b.selected != c && a.a.sc(b, c);
                    });
                    b.scrollTop = e;
                }
            };
            a.h.ea.selectedOptions = !0;
            a.d.style = {
                update: function(b, c) {
                    var d = a.a.c(c() || {});
                    a.a.D(d, function(c, d) {
                        d = a.a.c(d);
                        if (null === d || d === n || !1 === d) d = "";
                        b.style[c] = d;
                    });
                }
            };
            a.d.submit = {
                init: function(b, c, d, e, f) {
                    if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
                    a.a.p(b, "submit", function(a) {
                        var d, e = c();
                        try {
                            d = e.call(f.$data, b);
                        } finally {
                            !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                        }
                    });
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, c) {
                    a.a.Za(b, c());
                }
            };
            a.f.Z.text = !0;
            (function() {
                if (x && x.navigator) var b = function(a) {
                    if (a) return parseFloat(a[1]);
                }, c = x.opera && x.opera.version && parseInt(x.opera.version()), d = x.navigator.userAgent, e = b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), f = b(d.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.C) var g = a.a.e.I(), k = a.a.e.I(), l = function(b) {
                    var c = this.activeElement;
                    (c = c && a.a.e.get(c, k)) && c(b);
                }, m = function(b, c) {
                    var d = b.ownerDocument;
                    a.a.e.get(d, g) || (a.a.e.set(d, g, !0), a.a.p(d, "selectionchange", l));
                    a.a.e.set(b, k, c);
                };
                a.d.textInput = {
                    init: function(b, d, g) {
                        function l(c, d) {
                            a.a.p(b, c, d);
                        }
                        function k() {
                            var c = a.a.c(d());
                            if (null === c || c === n) c = "";
                            v !== n && c === v ? a.a.setTimeout(k, 4) : b.value !== c && (u = c, b.value = c);
                        }
                        function y() {
                            s || (v = b.value, s = a.a.setTimeout(t, 4));
                        }
                        function t() {
                            clearTimeout(s);
                            v = s = n;
                            var c = b.value;
                            u !== c && (u = c, a.h.Ea(d(), g, "textInput", c));
                        }
                        var u = b.value, s, v, x = 9 == a.a.C ? y : t;
                        10 > a.a.C ? (l("propertychange", function(a) {
                            "value" === a.propertyName && x(a);
                        }), 8 == a.a.C && (l("keyup", t), l("keydown", t)), 8 <= a.a.C && (m(b, x), l("dragend", y))) : (l("input", t), 
                        5 > e && "textarea" === a.a.A(b) ? (l("keydown", y), l("paste", y), l("cut", y)) : 11 > c ? l("keydown", y) : 4 > f && (l("DOMAutoComplete", t), 
                        l("dragdrop", t), l("drop", t)));
                        l("change", t);
                        a.m(k, null, {
                            i: b
                        });
                    }
                };
                a.h.ea.textInput = !0;
                a.d.textinput = {
                    preprocess: function(a, b, c) {
                        c("textInput", a);
                    }
                };
            })();
            a.d.uniqueName = {
                init: function(b, c) {
                    if (c()) {
                        var d = "ko_unique_" + ++a.d.uniqueName.Ic;
                        a.a.rc(b, d);
                    }
                }
            };
            a.d.uniqueName.Ic = 0;
            a.d.value = {
                after: [ "options", "foreach" ],
                init: function(b, c, d) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = [ "change" ], f = d.get("valueUpdate"), g = !1, k = null;
                        f && ("string" == typeof f && (f = [ f ]), a.a.ra(e, f), e = a.a.Tb(e));
                        var l = function() {
                            k = null;
                            g = !1;
                            var e = c(), f = a.j.u(b);
                            a.h.Ea(e, d, "value", f);
                        };
                        !a.a.C || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.o(e, "propertychange") || (a.a.p(b, "propertychange", function() {
                            g = !0;
                        }), a.a.p(b, "focus", function() {
                            g = !1;
                        }), a.a.p(b, "blur", function() {
                            g && l();
                        }));
                        a.a.q(e, function(c) {
                            var d = l;
                            a.a.nd(c, "after") && (d = function() {
                                k = a.j.u(b);
                                a.a.setTimeout(l, 0);
                            }, c = c.substring(5));
                            a.a.p(b, c, d);
                        });
                        var m = function() {
                            var e = a.a.c(c()), f = a.j.u(b);
                            if (null !== k && e === k) a.a.setTimeout(m, 0); else if (e !== f) if ("select" === a.a.A(b)) {
                                var g = d.get("valueAllowUnset"), f = function() {
                                    a.j.ha(b, e, g);
                                };
                                f();
                                g || e === a.j.u(b) ? a.a.setTimeout(f, 0) : a.l.w(a.a.Da, null, [ b, "change" ]);
                            } else a.j.ha(b, e);
                        };
                        a.m(m, null, {
                            i: b
                        });
                    } else a.Ja(b, {
                        checkedValue: c
                    });
                },
                update: function() {}
            };
            a.h.ea.value = !0;
            a.d.visible = {
                update: function(b, c) {
                    var d = a.a.c(c()), e = "none" != b.style.display;
                    d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(c, d, e, f, g) {
                        return a.d.event.init.call(this, c, function() {
                            var a = {};
                            a[b] = d();
                            return a;
                        }, e, f, g);
                    }
                };
            })("click");
            a.O = function() {};
            a.O.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            };
            a.O.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.O.prototype.makeTemplateSource = function(b, c) {
                if ("string" == typeof b) {
                    c = c || u;
                    var d = c.getElementById(b);
                    if (!d) throw Error("Cannot find template with ID " + b);
                    return new a.v.n(d);
                }
                if (1 == b.nodeType || 8 == b.nodeType) return new a.v.qa(b);
                throw Error("Unknown template type: " + b);
            };
            a.O.prototype.renderTemplate = function(a, c, d, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, c, d, e);
            };
            a.O.prototype.isTemplateRewritten = function(a, c) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten");
            };
            a.O.prototype.rewriteTemplate = function(a, c, d) {
                a = this.makeTemplateSource(a, d);
                c = c(a.text());
                a.text(c);
                a.data("isRewritten", !0);
            };
            a.b("templateEngine", a.O);
            a.Gb = function() {
                function b(b, c, d, k) {
                    b = a.h.yb(b);
                    for (var l = a.h.ta, m = 0; m < b.length; m++) {
                        var h = b[m].key;
                        if (l.hasOwnProperty(h)) {
                            var r = l[h];
                            if ("function" === typeof r) {
                                if (h = r(b[m].value)) throw Error(h);
                            } else if (!r) throw Error("This template engine does not support the '" + h + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ua(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c;
                }
                var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    Oc: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.Gb.dd(b, c);
                        }, d);
                    },
                    dd: function(a, f) {
                        return a.replace(c, function(a, c, d, e, h) {
                            return b(h, c, d, f);
                        }).replace(d, function(a, c) {
                            return b(c, "<!-- ko -->", "#comment", f);
                        });
                    },
                    Ec: function(b, c) {
                        return a.M.wb(function(d, k) {
                            var l = d.nextSibling;
                            l && l.nodeName.toLowerCase() === c && a.Ja(l, b, k);
                        });
                    }
                };
            }();
            a.b("__tr_ambtns", a.Gb.Ec);
            (function() {
                a.v = {};
                a.v.n = function(b) {
                    if (this.n = b) {
                        var c = a.a.A(b);
                        this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4;
                    }
                };
                a.v.n.prototype.text = function() {
                    var b = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.n[b];
                    var c = arguments[0];
                    "innerHTML" === b ? a.a.Cb(this.n, c) : this.n[b] = c;
                };
                var b = a.a.e.I() + "_";
                a.v.n.prototype.data = function(c) {
                    if (1 === arguments.length) return a.a.e.get(this.n, b + c);
                    a.a.e.set(this.n, b + c, arguments[1]);
                };
                var c = a.a.e.I();
                a.v.n.prototype.nodes = function() {
                    var b = this.n;
                    if (0 == arguments.length) return (a.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : n);
                    a.a.e.set(b, c, {
                        jb: arguments[0]
                    });
                };
                a.v.qa = function(a) {
                    this.n = a;
                };
                a.v.qa.prototype = new a.v.n();
                a.v.qa.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.n, c) || {};
                        b.Hb === n && b.jb && (b.Hb = b.jb.innerHTML);
                        return b.Hb;
                    }
                    a.a.e.set(this.n, c, {
                        Hb: arguments[0]
                    });
                };
                a.b("templateSources", a.v);
                a.b("templateSources.domElement", a.v.n);
                a.b("templateSources.anonymousTemplate", a.v.qa);
            })();
            (function() {
                function b(b, c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c; ) b = a.f.nextSibling(e), d(e, b);
                }
                function c(c, d) {
                    if (c.length) {
                        var e = c[0], f = c[c.length - 1], g = e.parentNode, k = a.Q.instance, n = k.preprocessNode;
                        if (n) {
                            b(e, f, function(a, b) {
                                var c = a.previousSibling, d = n.call(k, a);
                                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
                            });
                            c.length = 0;
                            if (!e) return;
                            e === f ? c.push(e) : (c.push(e, f), a.a.za(c, g));
                        }
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.Rb(d, b);
                        });
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.M.yc(b, [ d ]);
                        });
                        a.a.za(c, g);
                    }
                }
                function d(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null;
                }
                function e(b, e, f, k, q) {
                    q = q || {};
                    var p = (b && d(b) || f || {}).ownerDocument, n = q.templateEngine || g;
                    a.Gb.Oc(f, n, p);
                    f = n.renderTemplate(f, k, q, p);
                    if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    p = !1;
                    switch (e) {
                      case "replaceChildren":
                        a.f.da(b, f);
                        p = !0;
                        break;

                      case "replaceNode":
                        a.a.qc(b, f);
                        p = !0;
                        break;

                      case "ignoreTargetNode":
                        break;

                      default:
                        throw Error("Unknown renderMode: " + e);
                    }
                    p && (c(f, k), q.afterRender && a.l.w(q.afterRender, null, [ f, k.$data ]));
                    return f;
                }
                function f(b, c, d) {
                    return a.H(b) ? b() : "function" === typeof b ? b(c, d) : b;
                }
                var g;
                a.Db = function(b) {
                    if (b != n && !(b instanceof a.O)) throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b;
                };
                a.Ab = function(b, c, h, k, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (k) {
                        var p = d(k);
                        return a.B(function() {
                            var g = c && c instanceof a.U ? c : new a.U(a.a.c(c)), n = f(b, g.$data, g), g = e(k, q, n, g, h);
                            "replaceNode" == q && (k = g, p = d(k));
                        }, null, {
                            wa: function() {
                                return !p || !a.a.nb(p);
                            },
                            i: p && "replaceNode" == q ? p.parentNode : p
                        });
                    }
                    return a.M.wb(function(d) {
                        a.Ab(b, c, h, d, "replaceNode");
                    });
                };
                a.kd = function(b, d, g, k, q) {
                    function p(a, b) {
                        c(b, s);
                        g.afterRender && g.afterRender(b, a);
                        s = null;
                    }
                    function u(a, c) {
                        s = q.createChildContext(a, g.as, function(a) {
                            a.$index = c;
                        });
                        var d = f(b, a, s);
                        return e(null, "ignoreTargetNode", d, s, g);
                    }
                    var s;
                    return a.B(function() {
                        var b = a.a.c(d) || [];
                        "undefined" == typeof b.length && (b = [ b ]);
                        b = a.a.Ka(b, function(b) {
                            return g.includeDestroyed || b === n || null === b || !a.a.c(b._destroy);
                        });
                        a.l.w(a.a.Bb, null, [ k, b, u, g, p ]);
                    }, null, {
                        i: k
                    });
                };
                var k = a.a.e.I();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        if ("string" == typeof d || d.name) a.f.xa(b); else {
                            if ("nodes" in d) {
                                if (d = d.nodes || [], a.H(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
                            } else d = a.f.childNodes(b);
                            d = a.a.jc(d);
                            new a.v.qa(b).nodes(d);
                        }
                        return {
                            controlsDescendantBindings: !0
                        };
                    },
                    update: function(b, c, d, e, f) {
                        var g = c(), s;
                        c = a.a.c(g);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), 
                        d && "ifnot" in c && (d = !a.a.c(c.ifnot)), s = a.a.c(c.data));
                        "foreach" in c ? e = a.kd(g || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(s, c.as) : f, 
                        e = a.Ab(g || b, f, c, b)) : a.f.xa(b);
                        f = e;
                        (s = a.a.e.get(b, k)) && "function" == typeof s.k && s.k();
                        a.a.e.set(b, k, f && f.ba() ? f : n);
                    }
                };
                a.h.ta.template = function(b) {
                    b = a.h.yb(b);
                    return 1 == b.length && b[0].unknown || a.h.ad(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
                };
                a.f.Z.template = !0;
            })();
            a.b("setTemplateEngine", a.Db);
            a.b("renderTemplate", a.Ab);
            a.a.dc = function(a, c, d) {
                if (a.length && c.length) {
                    var e, f, g, k, l;
                    for (e = f = 0; (!d || e < d) && (k = a[f]); ++f) {
                        for (g = 0; l = c[g]; ++g) if (k.value === l.value) {
                            k.moved = l.index;
                            l.moved = k.index;
                            c.splice(g, 1);
                            e = g = 0;
                            break;
                        }
                        e += g;
                    }
                }
            };
            a.a.ib = function() {
                function b(b, d, e, f, g) {
                    var k = Math.min, l = Math.max, m = [], h, n = b.length, q, p = d.length, s = p - n || 1, u = n + p + 1, t, v, x;
                    for (h = 0; h <= n; h++) for (v = t, m.push(t = []), x = k(p, h + s), q = l(0, h - 1); q <= x; q++) t[q] = q ? h ? b[h - 1] === d[q - 1] ? v[q - 1] : k(v[q] || u, t[q - 1] || u) + 1 : q + 1 : h + 1;
                    k = [];
                    l = [];
                    s = [];
                    h = n;
                    for (q = p; h || q; ) p = m[h][q] - 1, q && p === m[h][q - 1] ? l.push(k[k.length] = {
                        status: e,
                        value: d[--q],
                        index: q
                    }) : h && p === m[h - 1][q] ? s.push(k[k.length] = {
                        status: f,
                        value: b[--h],
                        index: h
                    }) : (--q, --h, g.sparse || k.push({
                        status: "retained",
                        value: d[q]
                    }));
                    a.a.dc(s, l, !g.dontLimitMoves && 10 * n);
                    return k.reverse();
                }
                return function(a, d, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    d = d || [];
                    return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e);
                };
            }();
            a.b("utils.compareArrays", a.a.ib);
            (function() {
                function b(b, c, d, k, l) {
                    var m = [], h = a.B(function() {
                        var h = c(d, l, a.a.za(m, b)) || [];
                        0 < m.length && (a.a.qc(m, h), k && a.l.w(k, null, [ d, h, l ]));
                        m.length = 0;
                        a.a.ra(m, h);
                    }, null, {
                        i: b,
                        wa: function() {
                            return !a.a.Qb(m);
                        }
                    });
                    return {
                        ca: m,
                        B: h.ba() ? h : n
                    };
                }
                var c = a.a.e.I(), d = a.a.e.I();
                a.a.Bb = function(e, f, g, k, l) {
                    function m(b, c) {
                        w = q[c];
                        v !== c && (D[b] = w);
                        w.qb(v++);
                        a.a.za(w.ca, e);
                        u.push(w);
                        z.push(w);
                    }
                    function h(b, c) {
                        if (b) for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.q(c[d].ca, function(a) {
                            b(a, d, c[d].ja);
                        });
                    }
                    f = f || [];
                    k = k || {};
                    var r = a.a.e.get(e, c) === n, q = a.a.e.get(e, c) || [], p = a.a.fb(q, function(a) {
                        return a.ja;
                    }), s = a.a.ib(p, f, k.dontLimitMoves), u = [], t = 0, v = 0, x = [], z = [];
                    f = [];
                    for (var D = [], p = [], w, C = 0, B, E; B = s[C]; C++) switch (E = B.moved, B.status) {
                      case "deleted":
                        E === n && (w = q[t], w.B && (w.B.k(), w.B = n), a.a.za(w.ca, e).length && (k.beforeRemove && (u.push(w), 
                        z.push(w), w.ja === d ? w = null : f[C] = w), w && x.push.apply(x, w.ca)));
                        t++;
                        break;

                      case "retained":
                        m(C, t++);
                        break;

                      case "added":
                        E !== n ? m(C, E) : (w = {
                            ja: B.value,
                            qb: a.N(v++)
                        }, u.push(w), z.push(w), r || (p[C] = w));
                    }
                    a.a.e.set(e, c, u);
                    h(k.beforeMove, D);
                    a.a.q(x, k.beforeRemove ? a.$ : a.removeNode);
                    for (var C = 0, r = a.f.firstChild(e), F; w = z[C]; C++) {
                        w.ca || a.a.extend(w, b(e, g, w.ja, l, w.qb));
                        for (t = 0; s = w.ca[t]; r = s.nextSibling, F = s, t++) s !== r && a.f.gc(e, s, F);
                        !w.Wc && l && (l(w.ja, w.ca, w.qb), w.Wc = !0);
                    }
                    h(k.beforeRemove, f);
                    for (C = 0; C < f.length; ++C) f[C] && (f[C].ja = d);
                    h(k.afterMove, D);
                    h(k.afterAdd, p);
                };
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Bb);
            a.W = function() {
                this.allowTemplateRewriting = !1;
            };
            a.W.prototype = new a.O();
            a.W.prototype.renderTemplateSource = function(b, c, d, e) {
                if (c = (9 > a.a.C ? 0 : b.nodes) ? b.nodes() : null) return a.a.V(c.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ma(b, e);
            };
            a.W.sb = new a.W();
            a.Db(a.W.sb);
            a.b("nativeTemplateEngine", a.W);
            (function() {
                a.vb = function() {
                    var a = this.$c = function() {
                        if (!v || !v.tmpl) return 0;
                        try {
                            if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                        } catch (a) {}
                        return 1;
                    }();
                    this.renderTemplateSource = function(b, e, f, g) {
                        g = g || u;
                        f = f || {};
                        if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var k = b.data("precompiled");
                        k || (k = b.text() || "", k = v.template(null, "{{ko_with $item.koBindingContext}}" + k + "{{/ko_with}}"), 
                        b.data("precompiled", k));
                        b = [ e.$data ];
                        e = v.extend({
                            koBindingContext: e
                        }, f.templateOptions);
                        e = v.tmpl(k, b, e);
                        e.appendTo(g.createElement("div"));
                        v.fragments = {};
                        return e;
                    };
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}";
                    };
                    this.addTemplate = function(a, b) {
                        u.write("<script type='text/html' id='" + a + "'>" + b + "</script>");
                    };
                    0 < a && (v.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, v.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    });
                };
                a.vb.prototype = new a.O();
                var b = new a.vb();
                0 < b.$c && a.Db(b);
                a.b("jqueryTmplTemplateEngine", a.vb);
            })();
        });
    })();
})();

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
})(function($) {
    var toFix = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], toBind = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], slice = Array.prototype.slice, nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            $.data(this, "mousewheel-line-height", special.getLineHeight(this));
            $.data(this, "mousewheel-page-height", special.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            $.removeData(this, "mousewheel-line-height");
            $.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(elem) {
            var $elem = $(elem), $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
            if (!$parent.length) {
                $parent = $("body");
            }
            return parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(elem) {
            return $(elem).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event, args = slice.call(arguments, 1), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0, offsetX = 0, offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if ("detail" in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ("wheelDelta" in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ("wheelDeltaY" in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ("wheelDeltaX" in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ("deltaY" in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ("deltaX" in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return;
        }
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, "mousewheel-line-height");
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, "mousewheel-page-height");
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
    function nullLowestDelta() {
        lowestDelta = null;
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === "mousewheel" && absDelta % 120 === 0;
    }
});

(function($) {
    var browserDetect = function() {
        var N = navigator.appName, ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
            M[2] = tem[1];
        }
        M = M ? [ M[1], M[2] ] : [ N, navigator.appVersion, "-?" ];
        return M;
    }();
    function resize_auto_fired() {
        return browserDetect[0] === "msie" && parseInt(browserDetect[1]) < 9;
    }
    var splitterCounter = 0;
    $.fn.splitter = function(args) {
        args = args || {};
        return this.each(function() {
            if ($(this).attr("data-splitter-initialized")) {
                return;
            }
            var zombie;
            function setBarState(state) {
                bar.removeClass(opts.barStateClasses).addClass(state);
            }
            function startSplitMouse(evt) {
                if (evt.which !== 1) {
                    return;
                }
                bar.removeClass(opts.barHoverClass);
                if (opts.outline) {
                    zombie = zombie || bar.clone(false).insertAfter(A);
                    bar.removeClass(opts.barDockedClass);
                }
                setBarState(opts.barActiveClass);
                panes.css({
                    "user-select": "none",
                    "-webkit-user-select": "none",
                    "-khtml-user-select": "none",
                    "-moz-user-select": "none",
                    "pointer-events": "none"
                }).find("iframe").addClass(opts.iframeClass);
                A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
                $(document).bind("mousemove" + opts.eventNamespace, doSplitMouse).bind("mouseup" + opts.eventNamespace, endSplitMouse);
            }
            function doSplitMouse(evt) {
                var pos = A._posSplit + evt[opts.eventPos], range = Math.max(0, Math.min(pos, splitter._DA - bar._DA)), limit = Math.max(A._min, splitter._DA - B._max, Math.min(pos, A._max, splitter._DA - bar._DA - B._min));
                if (opts.outline) {
                    if (opts.dockPane === A && pos < Math.max(A._min, bar._DA) || opts.dockPane === B && pos > Math.min(pos, A._max, splitter._DA - bar._DA - B._min)) {
                        bar.addClass(opts.barDockedClass).css(opts.origin, range);
                    } else {
                        bar.removeClass(opts.barDockedClass).css(opts.origin, limit);
                    }
                    bar._DA = bar[0][opts.pxSplit];
                } else {
                    resplit(pos);
                }
                setBarState(pos === limit ? opts.barActiveClass : opts.barLimitClass);
            }
            function endSplitMouse(evt) {
                setBarState(opts.barNormalClass);
                bar.addClass(opts.barHoverClass);
                var pos = A._posSplit + evt[opts.eventPos];
                if (opts.outline) {
                    if (zombie) {
                        zombie.remove();
                    }
                    zombie = null;
                    resplit(pos);
                }
                panes.css({
                    "user-select": "text",
                    "-webkit-user-select": "text",
                    "-khtml-user-select": "text",
                    "-moz-user-select": "text",
                    "pointer-events": "auto"
                }).find("iframe").removeClass(opts.iframeClass);
                $(document).unbind("mousemove" + opts.eventNamespace + " mouseup" + opts.eventNamespace);
            }
            function resplit(pos) {
                bar._DA = bar[0][opts.pxSplit];
                if (opts.dockPane === A && pos < Math.max(A._min, bar._DA) || opts.dockPane === B && pos > Math.min(pos, A._max, splitter._DA - bar._DA - B._min)) {
                    bar.addClass(opts.barDockedClass);
                    bar._DA = bar[0][opts.pxSplit];
                    pos = opts.dockPane === A ? 0 : splitter._DA - bar._DA;
                    if (bar._pos === null) {
                        bar._pos = A[0][opts.pxSplit];
                    }
                } else {
                    bar.removeClass(opts.barDockedClass);
                    bar._DA = bar[0][opts.pxSplit];
                    bar._pos = null;
                    pos = Math.max(A._min, splitter._DA - B._max, Math.min(pos, A._max, splitter._DA - bar._DA - B._min));
                }
                bar.css(opts.origin, pos).css(opts.fixed, splitter._DF);
                A.css(opts.origin, 0).css(opts.split, pos).css(opts.fixed, splitter._DF);
                B.css(opts.origin, pos + bar._DA).css(opts.split, splitter._DA - bar._DA - pos).css(opts.fixed, splitter._DF);
                if (!resize_auto_fired()) {
                    panes.triggerHandler("resize");
                }
            }
            function dimSum(jq) {
                var sum = 0;
                for (var i = 1; i < arguments.length; i++) {
                    sum += Math.max(parseInt(jq.css(arguments[i]), 10) || 0, 0);
                }
                return sum;
            }
            function resize(size) {
                splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
                splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
                if (splitter._DF <= 0 || splitter._DA <= 0) {
                    return;
                }
                if (splitter._oldW === splitter.width() && splitter._oldH === splitter.height()) {
                    return;
                }
                splitter._oldW = splitter.width();
                splitter._oldH = splitter.height();
                resplit(!isNaN(size) ? size : !(opts.sizeRight || opts.sizeBottom) ? A[0][opts.pxSplit] : splitter._DA - B[0][opts.pxSplit] - bar._DA);
                setBarState(opts.barNormalClass);
            }
            var vh = (args.splitHorizontal ? "h" : args.splitVertical ? "v" : args.type) || "v";
            var opts = $.extend({
                splitterClass: "splitter ui-widget ui-widget-content",
                paneClass: "splitter-pane",
                barClass: "splitter-bar",
                barNormalClass: "ui-state-default",
                barHoverClass: "ui-state-hover",
                barActiveClass: "ui-state-highlight",
                barLimitClass: "ui-state-error",
                iframeClass: "splitter-iframe-hide",
                eventNamespace: ".splitter" + ++splitterCounter,
                pxPerKey: 8,
                tabIndex: 0,
                accessKey: "",
                dockSpeed: 1,
                undockSpeed: 1,
                dockEase: null,
                undockEase: null
            }, {
                v: {
                    keyLeft: 39,
                    keyRight: 37,
                    cursor: "e-resize",
                    barStateClass: "splitter-bar-vertical",
                    barDockedClass: "splitter-bar-vertical-docked"
                },
                h: {
                    keyTop: 40,
                    keyBottom: 38,
                    cursor: "n-resize",
                    barStateClass: "splitter-bar-horizontal",
                    barDockedClass: "splitter-bar-horizontal-docked"
                }
            }[vh], args, {
                v: {
                    type: "v",
                    eventPos: "pageX",
                    origin: "left",
                    split: "width",
                    pxSplit: "offsetWidth",
                    side1: "Left",
                    side2: "Right",
                    fixed: "height",
                    pxFixed: "offsetHeight",
                    side3: "Top",
                    side4: "Bottom"
                },
                h: {
                    type: "h",
                    eventPos: "pageY",
                    origin: "top",
                    split: "height",
                    pxSplit: "offsetHeight",
                    side1: "Top",
                    side2: "Bottom",
                    fixed: "width",
                    pxFixed: "offsetWidth",
                    side3: "Left",
                    side4: "Right"
                }
            }[vh]);
            opts.barStateClasses = [ opts.barNormalClass, opts.barHoverClass, opts.barActiveClass, opts.barLimitClass ].join(" ");
            var splitter = $(this).css({
                position: "relative"
            }).addClass(opts.splitterClass).attr("data-splitter-initialized", true);
            var panes = $(">*", splitter[0]).addClass(opts.paneClass).css({
                position: "absolute",
                "z-index": "1",
                "-moz-outline-style": "none"
            });
            var A = $(panes[0]), B = $(panes[1]);
            opts.dockPane = opts.dock && (/right|bottom/.test(opts.dock) ? B : A);
            var focuser = $("<a />").attr({
                accessKey: opts.accessKey,
                tabIndex: opts.tabIndex,
                title: opts.splitbarClass
            }).bind((browserDetect === "opera" ? "click" : "focus") + opts.eventNamespace, function() {
                this.focus();
                bar.addClass(opts.barActiveClass);
            }).bind("blur" + opts.eventNamespace, function() {
                bar.removeClass(opts.barActiveClass);
            });
            if (opts.accessKey !== "") {
                focuser.bind("keydown" + opts.eventNamespace, function(e) {
                    var key = e.which || e.keyCode;
                    var dir = key === opts["key" + opts.side1] ? 1 : key === opts["key" + opts.side2] ? -1 : 0;
                    if (dir) {
                        resplit(A[0][opts.pxSplit] + dir * opts.pxPerKey);
                    }
                });
            }
            var bar = $("<div />").insertAfter(A).addClass(opts.barClass).addClass(opts.barStateClass).append(focuser).attr({
                unselectable: "on"
            }).css({
                position: "absolute",
                "user-select": "none",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none",
                "z-index": "100"
            }).bind("mousedown" + opts.eventNamespace, startSplitMouse).bind("mouseover" + opts.eventNamespace, function() {
                $(this).addClass(opts.barHoverClass);
            }).bind("mouseout" + opts.eventNamespace, function() {
                $(this).removeClass(opts.barHoverClass);
            });
            if (/^(auto|default|)$/.test(bar.css("cursor"))) {
                bar.css("cursor", opts.cursor);
            }
            bar._DA = bar[0][opts.pxSplit];
            splitter._PBF = dimSum(splitter, "border" + opts.side3 + "Width", "border" + opts.side4 + "Width");
            splitter._PBA = dimSum(splitter, "border" + opts.side1 + "Width", "border" + opts.side2 + "Width");
            A._pane = opts.side1;
            B._pane = opts.side2;
            $.each([ A, B ], function() {
                this._splitter_style = this.style;
                this._min = opts["min" + this._pane] || dimSum(this, "min-" + opts.split);
                this._max = opts["max" + this._pane] || dimSum(this, "max-" + opts.split) || 9999;
                this._init = opts["size" + this._pane] === true ? parseInt($.css(this[0], opts.split), 10) : opts["size" + this._pane];
            });
            var initPos = A._init;
            if (!isNaN(B._init)) {
                initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
            }
            if (isNaN(initPos)) {
                initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA) / 2);
            }
            if (opts.anchorToWindow) {
                opts.resizeTo = window;
            }
            if (opts.resizeTo) {
                splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
                splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
                $(window).bind("resize" + opts.eventNamespace, function() {
                    var top = splitter.offset().top;
                    var eh = $(opts.resizeTo).height();
                    splitter.css("height", Math.max(eh - top - splitter._hadjust, splitter._hmin) + "px");
                    if (!resize_auto_fired()) {
                        splitter.triggerHandler("resize");
                    }
                }).triggerHandler("resize");
            } else if (opts.resizeToWidth && !resize_auto_fired()) {
                $(window).bind("resize" + opts.eventNamespace, function() {
                    resize();
                });
            }
            if (opts.dock) {
                splitter.bind("toggleDock" + opts.eventNamespace, function() {
                    var pw = opts.dockPane[0][opts.pxSplit];
                    splitter.triggerHandler(pw ? "dock" : "undock");
                }).bind("dock" + opts.eventNamespace, function() {
                    var pw = A[0][opts.pxSplit];
                    if (!pw) {
                        return;
                    }
                    bar._pos = pw;
                    var x = {};
                    x[opts.origin] = opts.dockPane === A ? 0 : splitter[0][opts.pxSplit] - splitter._PBA - bar[0][opts.pxSplit];
                    bar.animate(x, opts.dockSpeed || 1, opts.dockEasing, function() {
                        bar.addClass(opts.barDockedClass);
                        resplit(x[opts.origin]);
                    });
                }).bind("undock" + opts.eventNamespace, function() {
                    var pw = opts.dockPane[0][opts.pxSplit];
                    if (pw) {
                        return;
                    }
                    var x = {};
                    x[opts.origin] = bar._pos + "px";
                    bar.removeClass(opts.barDockedClass).animate(x, opts.undockSpeed || opts.dockSpeed || 1, opts.undockEasing || opts.dockEasing, function() {
                        resplit(bar._pos);
                        bar._pos = null;
                    });
                });
                if (opts.dockKey) {
                    $('<a title="' + opts.splitbarClass + ' toggle dock"></a>').attr({
                        accessKey: opts.dockKey,
                        tabIndex: -1
                    }).appendTo(bar).bind(browserDetect === "opera" ? "click" : "focus", function() {
                        splitter.triggerHandler("toggleDock");
                        this.blur();
                    });
                }
                bar.bind("dblclick", function() {
                    splitter.triggerHandler("toggleDock");
                });
            }
            splitter.bind("destroy" + opts.eventNamespace, function() {
                $([ window, document ]).unbind(opts.eventNamespace);
                bar.unbind().remove();
                panes.removeClass(opts.paneClass);
                splitter.removeClass(opts.splitterClass).add(panes).unbind(opts.eventNamespace).attr("style", function() {
                    return this._splitter_style || "";
                });
                splitter = bar = focuser = panes = A = B = opts = args = null;
            }).bind("resize" + opts.eventNamespace, function(e, size) {
                resize(size);
            }).triggerHandler("resize", [ initPos ]);
        });
    };
})(jQuery);

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof exports === "object") {
        factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    $.support.htmlMenuitem = "HTMLMenuItemElement" in window;
    $.support.htmlCommand = "HTMLCommandElement" in window;
    $.support.eventSelectstart = "onselectstart" in document.documentElement;
    if (!$.ui || !$.widget) {
        $.cleanData = function(orig) {
            return function(elems) {
                var events, elem, i;
                for (i = 0; (elem = elems[i]) != null; i++) {
                    try {
                        events = $._data(elem, "events");
                        if (events && events.remove) {
                            $(elem).triggerHandler("remove");
                        }
                    } catch (e) {}
                }
                orig(elems);
            };
        }($.cleanData);
    }
    var $currentTrigger = null, initialized = false, $win = $(window), counter = 0, namespaces = {}, menus = {}, types = {}, defaults = {
        selector: null,
        appendTo: null,
        trigger: "right",
        autoHide: false,
        delay: 200,
        reposition: true,
        classNames: {
            hover: "context-menu-hover",
            disabled: "context-menu-disabled",
            visible: "context-menu-visible",
            notSelectable: "context-menu-not-selectable",
            icon: "context-menu-icon",
            iconEdit: "context-menu-icon-edit",
            iconCut: "context-menu-icon-cut",
            iconCopy: "context-menu-icon-copy",
            iconPaste: "context-menu-icon-paste",
            iconDelete: "context-menu-icon-delete",
            iconAdd: "context-menu-icon-add",
            iconQuit: "context-menu-icon-quit"
        },
        determinePosition: function($menu) {
            if ($.ui && $.ui.position) {
                $menu.css("display", "block").position({
                    my: "center top",
                    at: "center bottom",
                    of: this,
                    offset: "0 5",
                    collision: "fit"
                }).css("display", "none");
            } else {
                var offset = this.offset();
                offset.top += this.outerHeight();
                offset.left += this.outerWidth() / 2 - $menu.outerWidth() / 2;
                $menu.css(offset);
            }
        },
        position: function(opt, x, y) {
            var offset;
            if (!x && !y) {
                opt.determinePosition.call(this, opt.$menu);
                return;
            } else if (x === "maintain" && y === "maintain") {
                offset = opt.$menu.position();
            } else {
                offset = {
                    top: y,
                    left: x
                };
            }
            var bottom = $win.scrollTop() + $win.height(), right = $win.scrollLeft() + $win.width(), height = opt.$menu.outerHeight(), width = opt.$menu.outerWidth();
            if (offset.top + height > bottom) {
                offset.top -= height;
            }
            if (offset.top < 0) {
                offset.top = 0;
            }
            if (offset.left + width > right) {
                offset.left -= width;
            }
            if (offset.left < 0) {
                offset.left = 0;
            }
            opt.$menu.css(offset);
        },
        positionSubmenu: function($menu) {
            if ($.ui && $.ui.position) {
                $menu.css("display", "block").position({
                    my: "left top",
                    at: "right top",
                    of: this,
                    collision: "flipfit fit"
                }).css("display", "");
            } else {
                var offset = {
                    top: 0,
                    left: this.outerWidth()
                };
                $menu.css(offset);
            }
        },
        zIndex: 1,
        animation: {
            duration: 50,
            show: "slideDown",
            hide: "slideUp"
        },
        events: {
            show: $.noop,
            hide: $.noop
        },
        callback: null,
        items: {}
    }, hoveract = {
        timer: null,
        pageX: null,
        pageY: null
    }, zindex = function($t) {
        var zin = 0, $tt = $t;
        while (true) {
            zin = Math.max(zin, parseInt($tt.css("z-index"), 10) || 0);
            $tt = $tt.parent();
            if (!$tt || !$tt.length || "html body".indexOf($tt.prop("nodeName").toLowerCase()) > -1) {
                break;
            }
        }
        return zin;
    }, handle = {
        abortevent: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
        },
        contextmenu: function(e) {
            var $this = $(this);
            if (e.data.trigger === "right") {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
            if (e.data.trigger !== "right" && e.data.trigger !== "demand" && e.originalEvent) {
                return;
            }
            if (e.mouseButton !== undefined && e.data) {
                if (!(e.data.trigger == "left" && e.mouseButton === 0) && !(e.data.trigger == "right" && e.mouseButton === 2)) {
                    return;
                }
            }
            if ($this.hasClass("context-menu-active")) {
                return;
            }
            if (!$this.hasClass("context-menu-disabled")) {
                $currentTrigger = $this;
                if (e.data.build) {
                    var built = e.data.build($currentTrigger, e);
                    if (built === false) {
                        return;
                    }
                    e.data = $.extend(true, {}, defaults, e.data, built || {});
                    if (!e.data.items || $.isEmptyObject(e.data.items)) {
                        if (window.console) {
                            (console.error || console.log).call(console, "No items specified to show in contextMenu");
                        }
                        throw new Error("No Items specified");
                    }
                    e.data.$trigger = $currentTrigger;
                    op.create(e.data);
                }
                var showMenu = false;
                for (var item in e.data.items) {
                    if (e.data.items.hasOwnProperty(item)) {
                        var visible;
                        if ($.isFunction(e.data.items[item].visible)) {
                            visible = e.data.items[item].visible.call($(e.currentTarget), item, e.data);
                        } else if (typeof item.visible !== "undefined") {
                            visible = e.data.items[item].visible === true;
                        } else {
                            visible = true;
                        }
                        if (visible) {
                            showMenu = true;
                        }
                    }
                }
                if (showMenu) {
                    op.show.call($this, e.data, e.pageX, e.pageY);
                }
            }
        },
        click: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).trigger($.Event("contextmenu", {
                data: e.data,
                pageX: e.pageX,
                pageY: e.pageY
            }));
        },
        mousedown: function(e) {
            var $this = $(this);
            if ($currentTrigger && $currentTrigger.length && !$currentTrigger.is($this)) {
                $currentTrigger.data("contextMenu").$menu.trigger("contextmenu:hide");
            }
            if (e.button === 2) {
                $currentTrigger = $this.data("contextMenuActive", true);
            }
        },
        mouseup: function(e) {
            var $this = $(this);
            if ($this.data("contextMenuActive") && $currentTrigger && $currentTrigger.length && $currentTrigger.is($this) && !$this.hasClass("context-menu-disabled")) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $currentTrigger = $this;
                $this.trigger($.Event("contextmenu", {
                    data: e.data,
                    pageX: e.pageX,
                    pageY: e.pageY
                }));
            }
            $this.removeData("contextMenuActive");
        },
        mouseenter: function(e) {
            var $this = $(this), $related = $(e.relatedTarget), $document = $(document);
            if ($related.is(".context-menu-list") || $related.closest(".context-menu-list").length) {
                return;
            }
            if ($currentTrigger && $currentTrigger.length) {
                return;
            }
            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
            hoveract.data = e.data;
            $document.on("mousemove.contextMenuShow", handle.mousemove);
            hoveract.timer = setTimeout(function() {
                hoveract.timer = null;
                $document.off("mousemove.contextMenuShow");
                $currentTrigger = $this;
                $this.trigger($.Event("contextmenu", {
                    data: hoveract.data,
                    pageX: hoveract.pageX,
                    pageY: hoveract.pageY
                }));
            }, e.data.delay);
        },
        mousemove: function(e) {
            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
        },
        mouseleave: function(e) {
            var $related = $(e.relatedTarget);
            if ($related.is(".context-menu-list") || $related.closest(".context-menu-list").length) {
                return;
            }
            try {
                clearTimeout(hoveract.timer);
            } catch (e) {}
            hoveract.timer = null;
        },
        layerClick: function(e) {
            var $this = $(this), root = $this.data("contextMenuRoot"), button = e.button, x = e.pageX, y = e.pageY, target, offset;
            e.preventDefault();
            e.stopImmediatePropagation();
            setTimeout(function() {
                var $window;
                var triggerAction = root.trigger === "left" && button === 0 || root.trigger === "right" && button === 2;
                if (document.elementFromPoint && root.$layer) {
                    root.$layer.hide();
                    target = document.elementFromPoint(x - $win.scrollLeft(), y - $win.scrollTop());
                    root.$layer.show();
                }
                if (root.reposition && triggerAction) {
                    if (document.elementFromPoint) {
                        if (root.$trigger.is(target) || root.$trigger.has(target).length) {
                            root.position.call(root.$trigger, root, x, y);
                            return;
                        }
                    } else {
                        offset = root.$trigger.offset();
                        $window = $(window);
                        offset.top += $window.scrollTop();
                        if (offset.top <= e.pageY) {
                            offset.left += $window.scrollLeft();
                            if (offset.left <= e.pageX) {
                                offset.bottom = offset.top + root.$trigger.outerHeight();
                                if (offset.bottom >= e.pageY) {
                                    offset.right = offset.left + root.$trigger.outerWidth();
                                    if (offset.right >= e.pageX) {
                                        root.position.call(root.$trigger, root, x, y);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
                if (target && triggerAction) {
                    root.$trigger.one("contextmenu:hidden", function() {
                        $(target).contextMenu({
                            x: x,
                            y: y,
                            button: button
                        });
                    });
                }
                root.$menu.trigger("contextmenu:hide");
            }, 50);
        },
        keyStop: function(e, opt) {
            if (!opt.isInput) {
                e.preventDefault();
            }
            e.stopPropagation();
        },
        key: function(e) {
            var opt = {};
            if ($currentTrigger) {
                opt = $currentTrigger.data("contextMenu") || {};
            }
            switch (e.keyCode) {
              case 9:
              case 38:
                handle.keyStop(e, opt);
                if (opt.isInput) {
                    if (e.keyCode === 9 && e.shiftKey) {
                        e.preventDefault();
                        opt.$selected && opt.$selected.find("input, textarea, select").blur();
                        opt.$menu.trigger("prevcommand");
                        return;
                    } else if (e.keyCode === 38 && opt.$selected.find("input, textarea, select").prop("type") === "checkbox") {
                        e.preventDefault();
                        return;
                    }
                } else if (e.keyCode !== 9 || e.shiftKey) {
                    opt.$menu.trigger("prevcommand");
                    return;
                }

              case 40:
                handle.keyStop(e, opt);
                if (opt.isInput) {
                    if (e.keyCode === 9) {
                        e.preventDefault();
                        opt.$selected && opt.$selected.find("input, textarea, select").blur();
                        opt.$menu.trigger("nextcommand");
                        return;
                    } else if (e.keyCode === 40 && opt.$selected.find("input, textarea, select").prop("type") === "checkbox") {
                        e.preventDefault();
                        return;
                    }
                } else {
                    opt.$menu.trigger("nextcommand");
                    return;
                }
                break;

              case 37:
                handle.keyStop(e, opt);
                if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                    break;
                }
                if (!opt.$selected.parent().hasClass("context-menu-root")) {
                    var $parent = opt.$selected.parent().parent();
                    opt.$selected.trigger("contextmenu:blur");
                    opt.$selected = $parent;
                    return;
                }
                break;

              case 39:
                handle.keyStop(e, opt);
                if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                    break;
                }
                var itemdata = opt.$selected.data("contextMenu") || {};
                if (itemdata.$menu && opt.$selected.hasClass("context-menu-submenu")) {
                    opt.$selected = null;
                    itemdata.$selected = null;
                    itemdata.$menu.trigger("nextcommand");
                    return;
                }
                break;

              case 35:
              case 36:
                if (opt.$selected && opt.$selected.find("input, textarea, select").length) {
                    return;
                } else {
                    (opt.$selected && opt.$selected.parent() || opt.$menu).children(":not(." + opt.classNames.disabled + ", ." + opt.classNames.notSelectable + ")")[e.keyCode === 36 ? "first" : "last"]().trigger("contextmenu:focus");
                    e.preventDefault();
                    return;
                }
                break;

              case 13:
                handle.keyStop(e, opt);
                if (opt.isInput) {
                    if (opt.$selected && !opt.$selected.is("textarea, select")) {
                        e.preventDefault();
                        return;
                    }
                    break;
                }
                if (typeof opt.$selected !== "undefined" && opt.$selected !== null) {
                    opt.$selected.trigger("mouseup");
                }
                return;

              case 32:
              case 33:
              case 34:
                handle.keyStop(e, opt);
                return;

              case 27:
                handle.keyStop(e, opt);
                opt.$menu.trigger("contextmenu:hide");
                return;

              default:
                var k = String.fromCharCode(e.keyCode).toUpperCase();
                if (opt.accesskeys && opt.accesskeys[k]) {
                    opt.accesskeys[k].$node.trigger(opt.accesskeys[k].$menu ? "contextmenu:focus" : "mouseup");
                    return;
                }
                break;
            }
            e.stopPropagation();
            if (typeof opt.$selected !== "undefined" && opt.$selected !== null) {
                opt.$selected.trigger(e);
            }
        },
        prevItem: function(e) {
            e.stopPropagation();
            var opt = $(this).data("contextMenu") || {};
            var root = $(this).data("contextMenuRoot") || {};
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data("contextMenu") || {};
                opt.$selected = $s;
            }
            var $children = opt.$menu.children(), $prev = !opt.$selected || !opt.$selected.prev().length ? $children.last() : opt.$selected.prev(), $round = $prev;
            while ($prev.hasClass(root.classNames.disabled) || $prev.hasClass(root.classNames.notSelectable)) {
                if ($prev.prev().length) {
                    $prev = $prev.prev();
                } else {
                    $prev = $children.last();
                }
                if ($prev.is($round)) {
                    return;
                }
            }
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }
            handle.itemMouseenter.call($prev.get(0), e);
            var $input = $prev.find("input, textarea, select");
            if ($input.length) {
                $input.focus();
            }
        },
        nextItem: function(e) {
            e.stopPropagation();
            var opt = $(this).data("contextMenu") || {};
            var root = $(this).data("contextMenuRoot") || {};
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data("contextMenu") || {};
                opt.$selected = $s;
            }
            var $children = opt.$menu.children(), $next = !opt.$selected || !opt.$selected.next().length ? $children.first() : opt.$selected.next(), $round = $next;
            while ($next.hasClass(root.classNames.disabled) || $next.hasClass(root.classNames.notSelectable)) {
                if ($next.next().length) {
                    $next = $next.next();
                } else {
                    $next = $children.first();
                }
                if ($next.is($round)) {
                    return;
                }
            }
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }
            handle.itemMouseenter.call($next.get(0), e);
            var $input = $next.find("input, textarea, select");
            if ($input.length) {
                $input.focus();
            }
        },
        focusInput: function() {
            var $this = $(this).closest(".context-menu-item"), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            root.$selected = opt.$selected = $this;
            root.isInput = opt.isInput = true;
        },
        blurInput: function() {
            var $this = $(this).closest(".context-menu-item"), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            root.isInput = opt.isInput = false;
        },
        menuMouseenter: function() {
            var root = $(this).data().contextMenuRoot;
            root.hovering = true;
        },
        menuMouseleave: function(e) {
            var root = $(this).data().contextMenuRoot;
            if (root.$layer && root.$layer.is(e.relatedTarget)) {
                root.hovering = false;
            }
        },
        itemMouseenter: function(e) {
            var $this = $(this), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            root.hovering = true;
            if (e && root.$layer && root.$layer.is(e.relatedTarget)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
            (opt.$menu ? opt : root).$menu.children(".hover").trigger("contextmenu:blur");
            if ($this.hasClass(root.classNames.disabled) || $this.hasClass(root.classNames.notSelectable)) {
                opt.$selected = null;
                return;
            }
            $this.trigger("contextmenu:focus");
        },
        itemMouseleave: function(e) {
            var $this = $(this), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            if (root !== opt && root.$layer && root.$layer.is(e.relatedTarget)) {
                if (typeof root.$selected !== "undefined" && root.$selected !== null) {
                    root.$selected.trigger("contextmenu:blur");
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                root.$selected = opt.$selected = opt.$node;
                return;
            }
            $this.trigger("contextmenu:blur");
        },
        itemClick: function(e) {
            var $this = $(this), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot, key = data.contextMenuKey, callback;
            if (!opt.items[key] || $this.is("." + root.classNames.disabled + ", .context-menu-submenu, .context-menu-separator, ." + root.classNames.notSelectable)) {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();
            if ($.isFunction(root.callbacks[key]) && Object.prototype.hasOwnProperty.call(root.callbacks, key)) {
                callback = root.callbacks[key];
            } else if ($.isFunction(root.callback)) {
                callback = root.callback;
            } else {
                return;
            }
            if (callback.call(root.$trigger, key, root) !== false) {
                root.$menu.trigger("contextmenu:hide");
            } else if (root.$menu.parent().length) {
                op.update.call(root.$trigger, root);
            }
        },
        inputClick: function(e) {
            e.stopImmediatePropagation();
        },
        hideMenu: function(e, data) {
            var root = $(this).data("contextMenuRoot");
            op.hide.call(root.$trigger, root, data && data.force);
        },
        focusItem: function(e) {
            e.stopPropagation();
            var $this = $(this), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            $this.addClass([ root.classNames.hover, root.classNames.visible ].join(" ")).siblings().removeClass(root.classNames.visible).filter(root.classNames.hover).trigger("contextmenu:blur");
            opt.$selected = root.$selected = $this;
            if (opt.$node) {
                root.positionSubmenu.call(opt.$node, opt.$menu);
            }
        },
        blurItem: function(e) {
            e.stopPropagation();
            var $this = $(this), data = $this.data(), opt = data.contextMenu, root = data.contextMenuRoot;
            if (opt.autoHide) {
                $this.removeClass(root.classNames.visible);
            }
            $this.removeClass(root.classNames.hover);
            opt.$selected = null;
        }
    }, op = {
        show: function(opt, x, y) {
            var $trigger = $(this), css = {};
            $("#context-menu-layer").trigger("mousedown");
            opt.$trigger = $trigger;
            if (opt.events.show.call($trigger, opt) === false) {
                $currentTrigger = null;
                return;
            }
            op.update.call($trigger, opt);
            opt.position.call($trigger, opt, x, y);
            if (opt.zIndex) {
                css.zIndex = zindex($trigger) + opt.zIndex;
            }
            op.layer.call(opt.$menu, opt, css.zIndex);
            opt.$menu.find("ul").css("zIndex", css.zIndex + 1);
            opt.$menu.css(css)[opt.animation.show](opt.animation.duration, function() {
                $trigger.trigger("contextmenu:visible");
            });
            $trigger.data("contextMenu", opt).addClass("context-menu-active");
            $(document).off("keydown.contextMenu").on("keydown.contextMenu", handle.key);
            if (opt.autoHide) {
                $(document).on("mousemove.contextMenuAutoHide", function(e) {
                    var pos = $trigger.offset();
                    pos.right = pos.left + $trigger.outerWidth();
                    pos.bottom = pos.top + $trigger.outerHeight();
                    if (opt.$layer && !opt.hovering && (!(e.pageX >= pos.left && e.pageX <= pos.right) || !(e.pageY >= pos.top && e.pageY <= pos.bottom))) {
                        opt.$menu.trigger("contextmenu:hide");
                    }
                });
            }
        },
        hide: function(opt, force) {
            var $trigger = $(this);
            if (!opt) {
                opt = $trigger.data("contextMenu") || {};
            }
            if (!force && opt.events && opt.events.hide.call($trigger, opt) === false) {
                return;
            }
            $trigger.removeData("contextMenu").removeClass("context-menu-active");
            if (opt.$layer) {
                setTimeout(function($layer) {
                    return function() {
                        $layer.remove();
                    };
                }(opt.$layer), 10);
                try {
                    delete opt.$layer;
                } catch (e) {
                    opt.$layer = null;
                }
            }
            $currentTrigger = null;
            opt.$menu.find("." + opt.classNames.hover).trigger("contextmenu:blur");
            opt.$selected = null;
            $(document).off(".contextMenuAutoHide").off("keydown.contextMenu");
            opt.$menu && opt.$menu[opt.animation.hide](opt.animation.duration, function() {
                if (opt.build) {
                    opt.$menu.remove();
                    $.each(opt, function(key) {
                        switch (key) {
                          case "ns":
                          case "selector":
                          case "build":
                          case "trigger":
                            return true;

                          default:
                            opt[key] = undefined;
                            try {
                                delete opt[key];
                            } catch (e) {}
                            return true;
                        }
                    });
                }
                setTimeout(function() {
                    $trigger.trigger("contextmenu:hidden");
                }, 10);
            });
        },
        create: function(opt, root) {
            if (root === undefined) {
                root = opt;
            }
            opt.$menu = $('<ul class="context-menu-list"></ul>').addClass(opt.className || "").data({
                contextMenu: opt,
                contextMenuRoot: root
            });
            $.each([ "callbacks", "commands", "inputs" ], function(i, k) {
                opt[k] = {};
                if (!root[k]) {
                    root[k] = {};
                }
            });
            root.accesskeys || (root.accesskeys = {});
            function createNameNode(item) {
                var $name = $("<span></span>");
                if (item._accesskey) {
                    if (item._beforeAccesskey) {
                        $name.append(document.createTextNode(item._beforeAccesskey));
                    }
                    $("<span></span>").addClass("context-menu-accesskey").text(item._accesskey).appendTo($name);
                    if (item._afterAccesskey) {
                        $name.append(document.createTextNode(item._afterAccesskey));
                    }
                } else {
                    $name.text(item.name);
                }
                return $name;
            }
            $.each(opt.items, function(key, item) {
                var $t = $('<li class="context-menu-item"></li>').addClass(item.className || ""), $label = null, $input = null;
                $t.on("click", $.noop);
                if (typeof item === "string") {
                    item = {
                        type: "cm_seperator"
                    };
                }
                item.$node = $t.data({
                    contextMenu: opt,
                    contextMenuRoot: root,
                    contextMenuKey: key
                });
                if (typeof item.accesskey !== "undefined") {
                    var aks = splitAccesskey(item.accesskey);
                    for (var i = 0, ak; ak = aks[i]; i++) {
                        if (!root.accesskeys[ak]) {
                            root.accesskeys[ak] = item;
                            var matched = item.name.match(new RegExp("^(.*?)(" + ak + ")(.*)$", "i"));
                            if (matched) {
                                item._beforeAccesskey = matched[1];
                                item._accesskey = matched[2];
                                item._afterAccesskey = matched[3];
                            }
                            break;
                        }
                    }
                }
                if (item.type && types[item.type]) {
                    types[item.type].call($t, item, opt, root);
                    $.each([ opt, root ], function(i, k) {
                        k.commands[key] = item;
                        if ($.isFunction(item.callback)) {
                            k.callbacks[key] = item.callback;
                        }
                    });
                } else {
                    if (item.type === "cm_seperator") {
                        $t.addClass("context-menu-separator " + root.classNames.notSelectable);
                    } else if (item.type === "html") {
                        $t.addClass("context-menu-html " + root.classNames.notSelectable);
                    } else if (item.type) {
                        $label = $("<label></label>").appendTo($t);
                        createNameNode(item).appendTo($label);
                        $t.addClass("context-menu-input");
                        opt.hasTypes = true;
                        $.each([ opt, root ], function(i, k) {
                            k.commands[key] = item;
                            k.inputs[key] = item;
                        });
                    } else if (item.items) {
                        item.type = "sub";
                    }
                    switch (item.type) {
                      case "seperator":
                        break;

                      case "text":
                        $input = $('<input type="text" value="1" name="" value="">').attr("name", "context-menu-input-" + key).val(item.value || "").appendTo($label);
                        break;

                      case "textarea":
                        $input = $('<textarea name=""></textarea>').attr("name", "context-menu-input-" + key).val(item.value || "").appendTo($label);
                        if (item.height) {
                            $input.height(item.height);
                        }
                        break;

                      case "checkbox":
                        $input = $('<input type="checkbox" value="1" name="" value="">').attr("name", "context-menu-input-" + key).val(item.value || "").prop("checked", !!item.selected).prependTo($label);
                        break;

                      case "radio":
                        $input = $('<input type="radio" value="1" name="" value="">').attr("name", "context-menu-input-" + item.radio).val(item.value || "").prop("checked", !!item.selected).prependTo($label);
                        break;

                      case "select":
                        $input = $('<select name="">').attr("name", "context-menu-input-" + key).appendTo($label);
                        if (item.options) {
                            $.each(item.options, function(value, text) {
                                $("<option></option>").val(value).text(text).appendTo($input);
                            });
                            $input.val(item.selected);
                        }
                        break;

                      case "sub":
                        createNameNode(item).appendTo($t);
                        item.appendTo = item.$node;
                        op.create(item, root);
                        $t.data("contextMenu", item).addClass("context-menu-submenu");
                        item.callback = null;
                        break;

                      case "html":
                        $(item.html).appendTo($t);
                        break;

                      default:
                        $.each([ opt, root ], function(i, k) {
                            k.commands[key] = item;
                            if ($.isFunction(item.callback)) {
                                k.callbacks[key] = item.callback;
                            }
                        });
                        createNameNode(item).appendTo($t);
                        break;
                    }
                    if (item.type && item.type !== "sub" && item.type !== "html" && item.type !== "cm_seperator") {
                        $input.on("focus", handle.focusInput).on("blur", handle.blurInput);
                        if (item.events) {
                            $input.on(item.events, opt);
                        }
                    }
                    if (item.icon) {
                        if ($.isFunction(item.icon)) {
                            item._icon = item.icon.call(this, this, $t, key, item);
                        } else {
                            item._icon = root.classNames.icon + "-" + item.icon;
                        }
                        $t.addClass(item._icon);
                    }
                }
                item.$input = $input;
                item.$label = $label;
                $t.appendTo(opt.$menu);
                if (!opt.hasTypes && $.support.eventSelectstart) {
                    $t.on("selectstart.disableTextSelect", handle.abortevent);
                }
            });
            if (!opt.$node) {
                opt.$menu.css("display", "none").addClass("context-menu-root");
            }
            opt.$menu.appendTo(opt.appendTo || document.body);
        },
        resize: function($menu, nested) {
            $menu.css({
                position: "absolute",
                display: "block"
            });
            $menu.data("width", Math.ceil($menu.width()));
            $menu.css({
                position: "static",
                minWidth: "0px",
                maxWidth: "100000px"
            });
            $menu.find("> li > ul").each(function() {
                op.resize($(this), true);
            });
            if (!nested) {
                $menu.find("ul").addBack().css({
                    position: "",
                    display: "",
                    minWidth: "",
                    maxWidth: ""
                }).width(function() {
                    return $(this).data("width");
                });
            }
        },
        update: function(opt, root) {
            var $trigger = this;
            if (root === undefined) {
                root = opt;
                op.resize(opt.$menu);
            }
            opt.$menu.children().each(function() {
                var $item = $(this), key = $item.data("contextMenuKey"), item = opt.items[key], disabled = $.isFunction(item.disabled) && item.disabled.call($trigger, key, root) || item.disabled === true, visible;
                if ($.isFunction(item.visible)) {
                    visible = item.visible.call($trigger, key, root);
                } else if (typeof item.visible !== "undefined") {
                    visible = item.visible === true;
                } else {
                    visible = true;
                }
                $item[visible ? "show" : "hide"]();
                $item[disabled ? "addClass" : "removeClass"](root.classNames.disabled);
                if ($.isFunction(item.icon)) {
                    $item.removeClass(item._icon);
                    item._icon = item.icon.call(this, $trigger, $item, key, item);
                    $item.addClass(item._icon);
                }
                if (item.type) {
                    $item.find("input, select, textarea").prop("disabled", disabled);
                    switch (item.type) {
                      case "text":
                      case "textarea":
                        item.$input.val(item.value || "");
                        break;

                      case "checkbox":
                      case "radio":
                        item.$input.val(item.value || "").prop("checked", !!item.selected);
                        break;

                      case "select":
                        item.$input.val(item.selected || "");
                        break;
                    }
                }
                if (item.$menu) {
                    op.update.call($trigger, item, root);
                }
            });
        },
        layer: function(opt, zIndex) {
            var $layer = opt.$layer = $('<div id="context-menu-layer" style="position:fixed; z-index:' + zIndex + '; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({
                height: $win.height(),
                width: $win.width(),
                display: "block"
            }).data("contextMenuRoot", opt).insertBefore(this).on("contextmenu", handle.abortevent).on("mousedown", handle.layerClick);
            if (document.body.style.maxWidth === undefined) {
                $layer.css({
                    position: "absolute",
                    height: $(document).height()
                });
            }
            return $layer;
        }
    };
    function splitAccesskey(val) {
        var t = val.split(/\s+/), keys = [];
        for (var i = 0, k; k = t[i]; i++) {
            k = k.charAt(0).toUpperCase();
            keys.push(k);
        }
        return keys;
    }
    $.fn.contextMenu = function(operation) {
        var $t = this, $o = operation;
        if (this.length > 0) {
            if (operation === undefined) {
                this.first().trigger("contextmenu");
            } else if (operation.x !== undefined && operation.y !== undefined) {
                this.first().trigger($.Event("contextmenu", {
                    pageX: operation.x,
                    pageY: operation.y,
                    mouseButton: operation.button
                }));
            } else if (operation === "hide") {
                var $menu = this.first().data("contextMenu") ? this.first().data("contextMenu").$menu : null;
                $menu && $menu.trigger("contextmenu:hide");
            } else if (operation === "destroy") {
                $.contextMenu("destroy", {
                    context: this
                });
            } else if ($.isPlainObject(operation)) {
                operation.context = this;
                $.contextMenu("create", operation);
            } else if (operation) {
                this.removeClass("context-menu-disabled");
            } else if (!operation) {
                this.addClass("context-menu-disabled");
            }
        } else {
            $.each(menus, function() {
                if (this.selector === $t.selector) {
                    $o.data = this;
                    $.extend($o.data, {
                        trigger: "demand"
                    });
                }
            });
            handle.contextmenu.call($o.target, $o);
        }
        return this;
    };
    $.contextMenu = function(operation, options) {
        if (typeof operation !== "string") {
            options = operation;
            operation = "create";
        }
        if (typeof options === "string") {
            options = {
                selector: options
            };
        } else if (options === undefined) {
            options = {};
        }
        var o = $.extend(true, {}, defaults, options || {});
        var $document = $(document);
        var $context = $document;
        var _hasContext = false;
        if (!o.context || !o.context.length) {
            o.context = document;
        } else {
            $context = $(o.context).first();
            o.context = $context.get(0);
            _hasContext = o.context !== document;
        }
        switch (operation) {
          case "create":
            if (!o.selector) {
                throw new Error("No selector specified");
            }
            if (o.selector.match(/.context-menu-(list|item|input)($|\s)/)) {
                throw new Error('Cannot bind to selector "' + o.selector + '" as it contains a reserved className');
            }
            if (!o.build && (!o.items || $.isEmptyObject(o.items))) {
                throw new Error("No Items specified");
            }
            counter++;
            o.ns = ".contextMenu" + counter;
            if (!_hasContext) {
                namespaces[o.selector] = o.ns;
            }
            menus[o.ns] = o;
            if (!o.trigger) {
                o.trigger = "right";
            }
            if (!initialized) {
                $document.on({
                    "contextmenu:hide.contextMenu": handle.hideMenu,
                    "prevcommand.contextMenu": handle.prevItem,
                    "nextcommand.contextMenu": handle.nextItem,
                    "contextmenu.contextMenu": handle.abortevent,
                    "mouseenter.contextMenu": handle.menuMouseenter,
                    "mouseleave.contextMenu": handle.menuMouseleave
                }, ".context-menu-list").on("mouseup.contextMenu", ".context-menu-input", handle.inputClick).on({
                    "mouseup.contextMenu": handle.itemClick,
                    "contextmenu:focus.contextMenu": handle.focusItem,
                    "contextmenu:blur.contextMenu": handle.blurItem,
                    "contextmenu.contextMenu": handle.abortevent,
                    "mouseenter.contextMenu": handle.itemMouseenter,
                    "mouseleave.contextMenu": handle.itemMouseleave
                }, ".context-menu-item");
                initialized = true;
            }
            $context.on("contextmenu" + o.ns, o.selector, o, handle.contextmenu);
            if (_hasContext) {
                $context.on("remove" + o.ns, function() {
                    $(this).contextMenu("destroy");
                });
            }
            switch (o.trigger) {
              case "hover":
                $context.on("mouseenter" + o.ns, o.selector, o, handle.mouseenter).on("mouseleave" + o.ns, o.selector, o, handle.mouseleave);
                break;

              case "left":
                $context.on("click" + o.ns, o.selector, o, handle.click);
                break;
            }
            if (!o.build) {
                op.create(o);
            }
            break;

          case "destroy":
            var $visibleMenu;
            if (_hasContext) {
                var context = o.context;
                $.each(menus, function(ns, o) {
                    if (o.context !== context) {
                        return true;
                    }
                    $visibleMenu = $(".context-menu-list").filter(":visible");
                    if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is($(o.context).find(o.selector))) {
                        $visibleMenu.trigger("contextmenu:hide", {
                            force: true
                        });
                    }
                    try {
                        if (menus[o.ns].$menu) {
                            menus[o.ns].$menu.remove();
                        }
                        delete menus[o.ns];
                    } catch (e) {
                        menus[o.ns] = null;
                    }
                    $(o.context).off(o.ns);
                    return true;
                });
            } else if (!o.selector) {
                $document.off(".contextMenu .contextMenuAutoHide");
                $.each(menus, function(ns, o) {
                    $(o.context).off(o.ns);
                });
                namespaces = {};
                menus = {};
                counter = 0;
                initialized = false;
                $("#context-menu-layer, .context-menu-list").remove();
            } else if (namespaces[o.selector]) {
                $visibleMenu = $(".context-menu-list").filter(":visible");
                if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is(o.selector)) {
                    $visibleMenu.trigger("contextmenu:hide", {
                        force: true
                    });
                }
                try {
                    if (menus[namespaces[o.selector]].$menu) {
                        menus[namespaces[o.selector]].$menu.remove();
                    }
                    delete menus[namespaces[o.selector]];
                } catch (e) {
                    menus[namespaces[o.selector]] = null;
                }
                $document.off(namespaces[o.selector]);
            }
            break;

          case "html5":
            if (!$.support.htmlCommand && !$.support.htmlMenuitem || typeof options === "boolean" && options) {
                $('menu[type="context"]').each(function() {
                    if (this.id) {
                        $.contextMenu({
                            selector: "[contextmenu=" + this.id + "]",
                            items: $.contextMenu.fromMenu(this)
                        });
                    }
                }).css("display", "none");
            }
            break;

          default:
            throw new Error('Unknown operation "' + operation + '"');
        }
        return this;
    };
    $.contextMenu.setInputValues = function(opt, data) {
        if (data === undefined) {
            data = {};
        }
        $.each(opt.inputs, function(key, item) {
            switch (item.type) {
              case "text":
              case "textarea":
                item.value = data[key] || "";
                break;

              case "checkbox":
                item.selected = data[key] ? true : false;
                break;

              case "radio":
                item.selected = (data[item.radio] || "") === item.value;
                break;

              case "select":
                item.selected = data[key] || "";
                break;
            }
        });
    };
    $.contextMenu.getInputValues = function(opt, data) {
        if (data === undefined) {
            data = {};
        }
        $.each(opt.inputs, function(key, item) {
            switch (item.type) {
              case "text":
              case "textarea":
              case "select":
                data[key] = item.$input.val();
                break;

              case "checkbox":
                data[key] = item.$input.prop("checked");
                break;

              case "radio":
                if (item.$input.prop("checked")) {
                    data[item.radio] = item.value;
                }
                break;
            }
        });
        return data;
    };
    function inputLabel(node) {
        return node.id && $('label[for="' + node.id + '"]').val() || node.name;
    }
    function menuChildren(items, $children, counter) {
        if (!counter) {
            counter = 0;
        }
        $children.each(function() {
            var $node = $(this), node = this, nodeName = this.nodeName.toLowerCase(), label, item;
            if (nodeName === "label" && $node.find("input, textarea, select").length) {
                label = $node.text();
                $node = $node.children().first();
                node = $node.get(0);
                nodeName = node.nodeName.toLowerCase();
            }
            switch (nodeName) {
              case "menu":
                item = {
                    name: $node.attr("label"),
                    items: {}
                };
                counter = menuChildren(item.items, $node.children(), counter);
                break;

              case "a":
              case "button":
                item = {
                    name: $node.text(),
                    disabled: !!$node.attr("disabled"),
                    callback: function() {
                        return function() {
                            $node.click();
                        };
                    }()
                };
                break;

              case "menuitem":
              case "command":
                switch ($node.attr("type")) {
                  case undefined:
                  case "command":
                  case "menuitem":
                    item = {
                        name: $node.attr("label"),
                        disabled: !!$node.attr("disabled"),
                        icon: $node.attr("icon"),
                        callback: function() {
                            return function() {
                                $node.click();
                            };
                        }()
                    };
                    break;

                  case "checkbox":
                    item = {
                        type: "checkbox",
                        disabled: !!$node.attr("disabled"),
                        name: $node.attr("label"),
                        selected: !!$node.attr("checked")
                    };
                    break;

                  case "radio":
                    item = {
                        type: "radio",
                        disabled: !!$node.attr("disabled"),
                        name: $node.attr("label"),
                        radio: $node.attr("radiogroup"),
                        value: $node.attr("id"),
                        selected: !!$node.attr("checked")
                    };
                    break;

                  default:
                    item = undefined;
                }
                break;

              case "hr":
                item = "-------";
                break;

              case "input":
                switch ($node.attr("type")) {
                  case "text":
                    item = {
                        type: "text",
                        name: label || inputLabel(node),
                        disabled: !!$node.attr("disabled"),
                        value: $node.val()
                    };
                    break;

                  case "checkbox":
                    item = {
                        type: "checkbox",
                        name: label || inputLabel(node),
                        disabled: !!$node.attr("disabled"),
                        selected: !!$node.attr("checked")
                    };
                    break;

                  case "radio":
                    item = {
                        type: "radio",
                        name: label || inputLabel(node),
                        disabled: !!$node.attr("disabled"),
                        radio: !!$node.attr("name"),
                        value: $node.val(),
                        selected: !!$node.attr("checked")
                    };
                    break;

                  default:
                    item = undefined;
                    break;
                }
                break;

              case "select":
                item = {
                    type: "select",
                    name: label || inputLabel(node),
                    disabled: !!$node.attr("disabled"),
                    selected: $node.val(),
                    options: {}
                };
                $node.children().each(function() {
                    item.options[this.value] = $(this).text();
                });
                break;

              case "textarea":
                item = {
                    type: "textarea",
                    name: label || inputLabel(node),
                    disabled: !!$node.attr("disabled"),
                    value: $node.val()
                };
                break;

              case "label":
                break;

              default:
                item = {
                    type: "html",
                    html: $node.clone(true)
                };
                break;
            }
            if (item) {
                counter++;
                items["key" + counter] = item;
            }
        });
        return counter;
    }
    $.contextMenu.fromMenu = function(element) {
        var $this = $(element), items = {};
        menuChildren(items, $this.children());
        return items;
    };
    $.contextMenu.defaults = defaults;
    $.contextMenu.types = types;
    $.contextMenu.handle = handle;
    $.contextMenu.op = op;
    $.contextMenu.menus = menus;
});

!function() {
    "use strict";
    function t(t) {
        if (t) {
            var e = function() {
                t && t.parentNode && t.parentNode.removeChild(t);
            };
            i(t, "show"), a(t, "hide"), t.addEventListener("transitionend", e), setTimeout(e, u);
        }
    }
    function e(t) {
        var e = t.offsetHeight, n = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, o = n / 2 - e / 2;
        t.style.top = o + "px";
    }
    function n(t) {
        var e = document.createElement("div");
        return e.innerHTML = t, e.firstChild;
    }
    function o(t, e) {
        var n = "data-" + e, o = document.createElement("div");
        o.appendChild(t);
        var i = o.querySelector("[" + n + "]");
        if (!i) throw new Error('Unable to find: "' + n + '" attribute.');
        return i;
    }
    function i(t, e) {
        var n = t.getAttribute("class"), o = n ? n.split(" ") : [], i = o.indexOf(e);
        i !== -1 && o.splice(i, 1), t.className = o.join(" ");
    }
    function a(t, e) {
        var n = t.getAttribute("class"), o = n ? n.split(" ") : [];
        o.push(e), t.className = o.join(" ");
    }
    function s(t) {
        return JSON.parse(JSON.stringify(t));
    }
    function l() {
        var l = {
            parent: document.body,
            dialogWidth: "400px",
            dialogPersistent: !0,
            dialogContainerClass: "alertify",
            dialogButtons: {
                ok: {
                    label: "Ok",
                    autoClose: !0,
                    template: '<button data-alertify-btn="ok" tabindex="1"></button>'
                },
                cancel: {
                    label: "Cancel",
                    autoClose: !0,
                    template: '<button data-alertify-btn="cancel" tabindex="2"></button>'
                },
                custom: {
                    label: "Custom",
                    autoClose: !1,
                    template: '<button data-alertify-btn tabindex="3"></button>'
                }
            },
            logDelay: 5e3,
            logMaxItems: 2,
            logPosition: {
                v: "bottom",
                h: "left"
            },
            logContainerClass: "alertify-logs",
            logTemplateMethod: null,
            templates: {
                dialogButtonsHolder: "<nav data-alertify-btn-holder></nav>",
                dialogMessage: "<div data-alertify-msg></div>",
                dialogInput: '<input data-alertify-input type="text">',
                logMessage: "<div data-alertify-log-msg></div>"
            }
        }, u = function(e) {
            var i = this;
            this.type = e, this.fixed = !1, this.template = d.logTemplateMethod, this.dom = {}, 
            this.createDomElements = function(t) {
                this.dom.wrapper = n(t), this.dom.message = o(this.dom.wrapper, "alertify-log-msg"), 
                setTimeout(function() {
                    i.dom.wrapper.className += " show";
                }, 10);
            }, this.getDomElements = function() {
                return this.dom;
            }, this.setMessage = function(t) {
                var e = t;
                this.template && (e = this.template(t)), e instanceof HTMLElement ? (this.dom.message.innerHTML = "", 
                this.dom.message.appendChild(e)) : this.dom.message.innerHTML = e;
            }, this.setType = function(t) {
                a(this.dom.message, t);
            }, this.setClickEvent = function(t) {
                this.dom.wrapper.addEventListener("click", function(e) {
                    t(e, i);
                });
            }, this.injectHtml = function() {
                var t = r.elements;
                0 === t.length || "top" === d.logPosition.v ? r.container.appendChild(this.dom.wrapper) : r.container.insertBefore(this.dom.wrapper, t[t.length - 1].dom.wrapper), 
                r.elements.push(this);
            }, this.stick = function(t) {
                this.fixed = t;
            }, this.isFixed = function() {
                return this.fixed;
            }, this.remove = function() {
                t(this.dom.wrapper);
                var e = r.elements.indexOf(this);
                e > -1 && r.elements.splice(e, 1);
            };
        }, d = {
            version: "1.0.11",
            parent: l.parent,
            dialogWidth: l.dialogWidth,
            dialogPersistent: l.dialogPersistent,
            dialogContainerClass: l.dialogContainerClass,
            dialogButtons: s(l.dialogButtons),
            promptValue: "",
            logDelay: l.logDelay,
            logMaxItems: l.logMaxItems,
            logPosition: l.logPosition,
            logContainerClass: l.logContainerClass,
            logTemplateMethod: l.logTemplateMethod,
            templates: s(l.templates),
            build: function(t, e) {
                var i = {};
                if (i.container = document.createElement("div"), i.container.className = this.dialogContainerClass + " hide", 
                i.wrapper = document.createElement("div"), i.wrapper.className = "dialog", i.dialog = document.createElement("div"), 
                i.dialog.style.width = this.dialogWidth, i.content = document.createElement("div"), 
                i.content.className = "content", "dialog" === t.type ? i.content.innerHTML = t.message : (i.messageWrapper = n(this.templates.dialogMessage), 
                i.message = o(i.messageWrapper, "alertify-msg"), i.message.innerHTML = t.message, 
                i.content.appendChild(i.messageWrapper)), i.buttonsWrapper = n(this.templates.dialogButtonsHolder), 
                i.buttonsHolder = o(i.buttonsWrapper, "alertify-btn-holder"), "prompt" === t.type) {
                    var a = n(this.templates.dialogInput);
                    i.input = o(a, "alertify-input"), i.content.appendChild(a);
                }
                i.container.appendChild(i.wrapper), i.wrapper.appendChild(i.dialog), i.dialog.appendChild(i.content), 
                i.dialog.appendChild(i.buttonsWrapper), i.buttonsHolder.innerHTML = "", i.buttons = [];
                for (var s = 0; s < e.length; s++) {
                    var l = o(e[s].element, "alertify-btn");
                    l.innerHTML = e[s].label, i.buttonsHolder.appendChild(e[s].element);
                }
                return i;
            },
            prepareDialogButton: function(t, e) {
                var n = {};
                return !e || "object" != typeof e || e instanceof Array || (n = e), "function" == typeof e && (n.click = e), 
                n.type = t, n;
            },
            createButtonsDefinition: function(t) {
                for (var e = [], o = 0; o < t.buttons.length; o++) {
                    var i = this.buildButtonObject(t.buttons[o]);
                    ("dialog" === t.type || "alert" === t.type && "ok" === i.type || [ "confirm", "prompt" ].indexOf(t.type) !== -1 && [ "ok", "cancel" ].indexOf(i.type) !== -1) && (i.element = n(i.template), 
                    e.push(i));
                }
                return e;
            },
            buildButtonObject: function(t) {
                var e = {}, n = t.type || "custom", o = this.dialogButtons, i = [ "ok", "cancel", "custom" ];
                if ("undefined" != typeof t.type && i.indexOf(t.type) === -1) throw new Error('Wrong button type: "' + t.type + '". Valid values: "' + i.join('", "') + '"');
                return e.type = n, e.label = "undefined" != typeof t.label ? t.label : o[n].label, 
                e.autoClose = "undefined" != typeof t.autoClose ? t.autoClose : o[n].autoClose, 
                e.template = "undefined" != typeof t.template ? t.template : o[n].template, e.click = "undefined" != typeof t.click ? t.click : o[n].click, 
                e;
            },
            close: function(t, e) {
                e = e && !isNaN(+e) ? +e : this.logDelay, e < 0 ? t.remove() : e > 0 && setTimeout(function() {
                    t.remove();
                }, e);
            },
            dialog: function(t, e, n) {
                return this.setup({
                    type: e,
                    message: t,
                    buttons: n
                });
            },
            log: function(t, e, n) {
                for (var o = r.elements, i = [], a = 0, s = o.length; a < s; a++) o[a].isFixed() || i.push(o[a]);
                var l = i.length - this.logMaxItems;
                if (l >= 0) for (var u = 0, d = l + 1; u < d; u++) this.close(i[u], -1);
                this.notify(t, e, n);
            },
            setLogContainerClass: function(t) {
                this.logContainerClass = l.logContainerClass + " " + t;
            },
            setLogPosition: function(t) {
                var e = t.split(" ");
                if ([ "top", "bottom" ].indexOf(e[0]) === -1 || [ "left", "right" ].indexOf(e[1]) === -1) throw new Error('Wrong value for "logPosition" parameter.');
                this.logPosition = {
                    v: e[0],
                    h: e[1]
                };
            },
            setLogFixed: function(t) {
                if ("boolean" != typeof t) throw new Error('Wrong value for "logFixed" parameter. Should be boolean.');
                this.logFixed = t;
            },
            setupLogContainer: function() {
                var e = this.logPosition.v + " " + this.logPosition.h, n = this.logContainerClass + " " + e, o = r.container && r.container.parentNode !== this.parent;
                r.container && !o || (o && t(r.container), r.elements = [], r.container = document.createElement("div"), 
                r.container.className = n, this.parent.appendChild(r.container)), r.container.className !== n && (r.container.className = n);
            },
            notify: function(t, e, n) {
                this.setupLogContainer();
                var o = new u();
                o.createDomElements(this.templates.logMessage), o.setMessage(t), o.setType(e), "function" == typeof n && o.setClickEvent(n), 
                o.injectHtml(), this.close(o, this.logDelay);
            },
            setup: function(n) {
                function o(t) {
                    "function" != typeof t && (t = function() {});
                    for (var e = 0; e < l.length; e++) {
                        var n = l[e], o = function(e) {
                            return function(n) {
                                s = e, e.click && "function" == typeof e.click && e.click(n, u), t({
                                    ui: u,
                                    event: n
                                }), e.autoClose === !0 && u.closeDialog();
                            };
                        }(n);
                        n.element.addEventListener("click", o);
                    }
                    d && d.addEventListener("keyup", function(t) {
                        13 === t.which && a.click();
                    });
                }
                for (var a, s, l = this.createButtonsDefinition(n), r = this.build(n, l), u = {}, d = r.input, c = 0; c < l.length; c++) "ok" === l[c].type && (a = l[c].element);
                d && "string" == typeof this.promptValue && (d.value = this.promptValue), u.dom = r, 
                u.closeDialog = function() {
                    t(r.container);
                }, u.centerDialog = function() {
                    e(r.wrapper);
                }, u.setMessage = function(t) {
                    r.message.innerHTML = t;
                }, u.setContent = function(t) {
                    r.content.innerHTML = t;
                }, u.getInputValue = function() {
                    if (r.input) return r.input.value;
                }, u.getButtonObject = function() {
                    if (s) return {
                        type: s.type,
                        label: s.label,
                        autoClose: s.autoClose,
                        element: s.element
                    };
                };
                var p;
                return "function" == typeof Promise ? p = new Promise(o) : o(), this.dialogPersistent === !1 && r.container.addEventListener("click", function(e) {
                    e.target !== this && e.target !== r.wrapper || t(r.container);
                }), window.onresize = function() {
                    u.centerDialog();
                }, this.parent.appendChild(r.container), setTimeout(function() {
                    i(r.container, "hide"), u.centerDialog(), d && n.type && "prompt" === n.type ? (d.select(), 
                    d.focus()) : a && a.focus();
                }, 100), p;
            },
            setLogDelay: function(t) {
                return t = t || 0, this.logDelay = isNaN(t) ? l.logDelay : parseInt(t, 10), this;
            },
            setLogMaxItems: function(t) {
                this.logMaxItems = parseInt(t || l.logMaxItems);
            },
            setDialogWidth: function(t) {
                "number" == typeof t && (t += "px"), this.dialogWidth = "string" == typeof t ? t : l.dialogWidth;
            },
            setDialogPersistent: function(t) {
                this.dialogPersistent = t;
            },
            setDialogContainerClass: function(t) {
                this.dialogContainerClass = l.dialogContainerClass + " " + t;
            },
            setTheme: function(t) {
                if (t) {
                    if ("string" == typeof t) switch (t.toLowerCase()) {
                      case "bootstrap":
                        this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="btn btn-primary" tabindex="1"></button>', 
                        this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="btn btn-danger" tabindex="2"></button>', 
                        this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="btn btn-default" tabindex="3"></button>', 
                        this.templates.dialogInput = "<input data-alertify-input class='form-control' type='text'>";
                        break;

                      case "purecss":
                        this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="pure-button" tabindex="1"></button>', 
                        this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="pure-button" tabindex="2"></button>', 
                        this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="pure-button" tabindex="3"></button>';
                        break;

                      case "mdl":
                      case "material-design-light":
                        this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class=" mdl-button mdl-js-button mdl-js-ripple-effect"  tabindex="1"></button>', 
                        this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class=" mdl-button mdl-js-button mdl-js-ripple-effect" tabindex="2"></button>', 
                        this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class=" mdl-button mdl-js-button mdl-js-ripple-effect" tabindex="3"></button>', 
                        this.templates.dialogInput = '<div class="mdl-textfield mdl-js-textfield"><input data-alertify-input class="mdl-textfield__input"></div>';
                        break;

                      case "angular-material":
                        this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="md-primary md-button" tabindex="1"></button>', 
                        this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="md-button" tabindex="2"></button>', 
                        this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="md-button" tabindex="3"></button>', 
                        this.templates.dialogInput = '<div layout="column"><md-input-container md-no-float><input data-alertify-input type="text"></md-input-container></div>';
                        break;

                      case "default":
                      default:
                        this.dialogButtons = s(l.dialogButtons), this.templates = s(l.templates);
                    }
                    if ("object" == typeof t) {
                        var e = Object.keys(this.templates);
                        for (var n in t) {
                            if (e.indexOf(n) === -1) throw new Error('Wrong template name: "' + n + '". Valid values: "' + e.join('", "') + '"');
                            this.templates[n] = t[n];
                        }
                    }
                }
            },
            reset: function() {
                this.setTheme("default"), this.parent = l.parent, this.dialogWidth = l.dialogWidth, 
                this.dialogPersistent = l.dialogPersistent, this.dialogContainerClass = l.dialogContainerClass, 
                this.promptValue = "", this.logDelay = l.logDelay, this.logMaxItems = l.logMaxItems, 
                this.logPosition = l.logPosition, this.logContainerClass = l.logContainerClass, 
                this.logTemplateMethod = l.logTemplateMethod;
            },
            injectCSS: function() {
                if (!document.querySelector("#alertifyCSS")) {
                    var t = document.getElementsByTagName("head")[0], e = document.createElement("style");
                    e.type = "text/css", e.id = "alertifyCSS", t.insertBefore(e, t.firstChild);
                }
            },
            removeCSS: function() {
                var t = document.querySelector("#alertifyCSS");
                t && t.parentNode && t.parentNode.removeChild(t);
            }
        };
        return d.injectCSS(), {
            _$$alertify: d,
            _$$defaults: l,
            reset: function() {
                return d.reset(), this;
            },
            parent: function(t) {
                d.parent = t;
            },
            theme: function(t) {
                return d.setTheme(t), this;
            },
            dialog: function(t, e) {
                return d.dialog(t, "dialog", e) || this;
            },
            alert: function(t, e) {
                var n = [ d.prepareDialogButton("ok", e) ];
                return d.dialog(t, "alert", n) || this;
            },
            confirm: function(t, e, n) {
                var o = [ d.prepareDialogButton("ok", e), d.prepareDialogButton("cancel", n) ];
                return d.dialog(t, "confirm", o) || this;
            },
            prompt: function(t, e, n, o) {
                var i = [ d.prepareDialogButton("ok", n), d.prepareDialogButton("cancel", o) ];
                return d.promptValue = e || "", d.dialog(t, "prompt", i) || this;
            },
            dialogWidth: function(t) {
                return d.setDialogWidth(t), this;
            },
            dialogPersistent: function(t) {
                return d.setDialogPersistent(t), this;
            },
            dialogContainerClass: function(t) {
                return d.setDialogContainerClass(t || ""), this;
            },
            clearDialogs: function() {
                for (var t; t = d.parent.querySelector(":scope > ." + l.dialogContainerClass); ) d.parent.removeChild(t);
                return this;
            },
            log: function(t, e) {
                return d.log(t, "default", e), this;
            },
            success: function(t, e) {
                return d.log(t, "success", e), this;
            },
            warning: function(t, e) {
                return d.log(t, "warning", e), this;
            },
            error: function(t, e) {
                return d.log(t, "error", e), this;
            },
            logDelay: function(t) {
                return d.setLogDelay(t), this;
            },
            logMaxItems: function(t) {
                return d.setLogMaxItems(t), this;
            },
            logPosition: function(t) {
                return d.setLogPosition(t || ""), this;
            },
            logContainerClass: function(t) {
                return d.setLogContainerClass(t || ""), this;
            },
            logMessageTemplate: function(t) {
                return d.logTemplateMethod = t, this;
            },
            getLogs: function() {
                return r.elements;
            },
            clearLogs: function() {
                return r.container.innerHTML = "", r.elements = [], this;
            },
            version: d.version
        };
    }
    var r = {
        container: null,
        elements: []
    }, u = 500;
    if ("undefined" != typeof module && module && module.exports) {
        module.exports = function() {
            return new l();
        };
        var d = new l();
        for (var c in d) module.exports[c] = d[c];
    } else "function" == typeof define && define.amd ? define(function() {
        return new l();
    }) : window.alertify = new l();
}();

!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
        e.Clipboard = t();
    }
}(function() {
    var t, e, n;
    return function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s;
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n || t);
                }, u, u.exports, t, e, n, o);
            }
            return n[a].exports;
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i;
    }({
        1: [ function(t, e, n) {
            function o(t, e) {
                for (;t && t.nodeType !== i; ) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode;
                }
            }
            var i = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
            }
            e.exports = o;
        }, {} ],
        2: [ function(t, e, n) {
            function o(t, e, n, o, r) {
                var a = i.apply(this, arguments);
                return t.addEventListener(n, a, r), {
                    destroy: function() {
                        t.removeEventListener(n, a, r);
                    }
                };
            }
            function i(t, e, n, o) {
                return function(n) {
                    n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n);
                };
            }
            var r = t("./closest");
            e.exports = o;
        }, {
            "./closest": 1
        } ],
        3: [ function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String;
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t);
            };
        }, {} ],
        4: [ function(t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!c.string(e)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(t)) return i(t, e, n);
                if (c.nodeList(t)) return r(t, e, n);
                if (c.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
            function i(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n);
                    }
                };
            }
            function r(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n);
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n);
                        });
                    }
                };
            }
            function a(t, e, n) {
                return l(document.body, t, e, n);
            }
            var c = t("./is"), l = t("delegate");
            e.exports = o;
        }, {
            "./is": 3,
            delegate: 2
        } ],
        5: [ function(t, e, n) {
            function o(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), 
                    n || t.removeAttribute("readonly"), e = t.value;
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var o = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString();
                }
                return e;
            }
            e.exports = o;
        }, {} ],
        6: [ function(t, e, n) {
            function o() {}
            o.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this;
                },
                once: function(t, e, n) {
                    function o() {
                        i.off(t, o), e.apply(n, arguments);
                    }
                    var i = this;
                    return o._ = e, this.on(t, o, n);
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, i = n.length;
                    for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                    return this;
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}), o = n[t], i = [];
                    if (o && e) for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                    return i.length ? n[t] = i : delete n[t], this;
                }
            }, e.exports = o;
        }, {} ],
        7: [ function(e, n, o) {
            !function(i, r) {
                if ("function" == typeof t && t.amd) t([ "module", "select" ], r); else if (void 0 !== o) r(n, e("select")); else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.select), i.clipboardAction = a.exports;
                }
            }(this, function(t, e) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    };
                }
                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                var i = n(e), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e;
                    };
                }(), c = function() {
                    function t(e) {
                        o(this, t), this.resolveOptions(e), this.initSelection();
                    }
                    return a(t, [ {
                        key: "resolveOptions",
                        value: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, 
                            this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
                        }
                    }, {
                        key: "initSelection",
                        value: function t() {
                            this.text ? this.selectFake() : this.target && this.selectTarget();
                        }
                    }, {
                        key: "selectFake",
                        value: function t() {
                            var e = this, n = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return e.removeFake();
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, 
                            this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                            this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                            this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                            var o = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), 
                            this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, 
                            i.default)(this.fakeElem), this.copyText();
                        }
                    }, {
                        key: "removeFake",
                        value: function t() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), 
                            this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), 
                            this.fakeElem = null);
                        }
                    }, {
                        key: "selectTarget",
                        value: function t() {
                            this.selectedText = (0, i.default)(this.target), this.copyText();
                        }
                    }, {
                        key: "copyText",
                        value: function t() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action);
                            } catch (t) {
                                e = !1;
                            }
                            this.handleResult(e);
                        }
                    }, {
                        key: "handleResult",
                        value: function t(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: "clearSelection",
                        value: function t() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: "destroy",
                        value: function t() {
                            this.removeFake();
                        }
                    }, {
                        key: "action",
                        set: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        },
                        get: function t() {
                            return this._action;
                        }
                    }, {
                        key: "target",
                        set: function t(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e;
                            }
                        },
                        get: function t() {
                            return this._target;
                        }
                    } ]), t;
                }();
                t.exports = c;
            });
        }, {
            select: 5
        } ],
        8: [ function(e, n, o) {
            !function(i, r) {
                if ("function" == typeof t && t.amd) t([ "module", "./clipboard-action", "tiny-emitter", "good-listener" ], r); else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener")); else {
                    var a = {
                        exports: {}
                    };
                    r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports;
                }
            }(this, function(t, e, n, o) {
                "use strict";
                function i(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    };
                }
                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e;
                }
                function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                }
                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n);
                }
                var s = i(e), u = i(n), f = i(o), d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, h = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(t, o.key, o);
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e;
                    };
                }(), p = function(t) {
                    function e(t, n) {
                        r(this, e);
                        var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return o.resolveOptions(n), o.listenClick(t), o;
                    }
                    return c(e, t), h(e, [ {
                        key: "resolveOptions",
                        value: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, 
                            this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body;
                        }
                    }, {
                        key: "listenClick",
                        value: function t(e) {
                            var n = this;
                            this.listener = (0, f.default)(e, "click", function(t) {
                                return n.onClick(t);
                            });
                        }
                    }, {
                        key: "onClick",
                        value: function t(e) {
                            var n = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                action: this.action(n),
                                target: this.target(n),
                                text: this.text(n),
                                container: this.container,
                                trigger: n,
                                emitter: this
                            });
                        }
                    }, {
                        key: "defaultAction",
                        value: function t(e) {
                            return l("action", e);
                        }
                    }, {
                        key: "defaultTarget",
                        value: function t(e) {
                            var n = l("target", e);
                            if (n) return document.querySelector(n);
                        }
                    }, {
                        key: "defaultText",
                        value: function t(e) {
                            return l("text", e);
                        }
                    }, {
                        key: "destroy",
                        value: function t() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
                            this.clipboardAction = null);
                        }
                    } ], [ {
                        key: "isSupported",
                        value: function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [ "copy", "cut" ], n = "string" == typeof e ? [ e ] : e, o = !!document.queryCommandSupported;
                            return n.forEach(function(t) {
                                o = o && !!document.queryCommandSupported(t);
                            }), o;
                        }
                    } ]), e;
                }(u.default);
                t.exports = p;
            });
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        } ]
    }, {}, [ 8 ])(8);
});

(function($, window) {
    var htmlSpecialCharsRegEx = /[<>&\r\n"']/gm;
    var htmlSpecialCharsPlaceHolders = {
        "<": "lt;",
        ">": "gt;",
        "&": "amp;",
        "\r": "#13;",
        "\n": "#10;",
        '"': "quot;",
        "'": "#39;"
    };
    $.extend({
        fileDownload: function(fileUrl, options) {
            var settings = $.extend({
                preparingMessageHtml: null,
                failMessageHtml: null,
                androidPostUnsupportedMessageHtml: "Unfortunately your Android browser doesn't support this type of file download. Please try again with a different browser.",
                dialogOptions: {
                    modal: true
                },
                prepareCallback: function(url) {},
                successCallback: function(url) {},
                abortCallback: function(url) {},
                failCallback: function(responseHtml, url, error) {},
                httpMethod: "GET",
                data: null,
                checkInterval: 100,
                cookieName: "fileDownload",
                cookieValue: "true",
                cookiePath: "/",
                cookieDomain: null,
                popupWindowTitle: "Initiating file download...",
                encodeHTMLEntities: true
            }, options);
            var deferred = new $.Deferred();
            var userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
            var isIos;
            var isAndroid;
            var isOtherMobileBrowser;
            if (/ip(ad|hone|od)/.test(userAgent)) {
                isIos = true;
            } else if (userAgent.indexOf("android") !== -1) {
                isAndroid = true;
            } else {
                isOtherMobileBrowser = /avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|playbook|silk|iemobile|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
            }
            var httpMethodUpper = settings.httpMethod.toUpperCase();
            if (isAndroid && httpMethodUpper !== "GET" && settings.androidPostUnsupportedMessageHtml) {
                if ($().dialog) {
                    $("<div>").html(settings.androidPostUnsupportedMessageHtml).dialog(settings.dialogOptions);
                } else {
                    alert(settings.androidPostUnsupportedMessageHtml);
                }
                return deferred.reject();
            }
            var $preparingDialog = null;
            var internalCallbacks = {
                onPrepare: function(url) {
                    if (settings.preparingMessageHtml) {
                        $preparingDialog = $("<div>").html(settings.preparingMessageHtml).dialog(settings.dialogOptions);
                    } else if (settings.prepareCallback) {
                        settings.prepareCallback(url);
                    }
                },
                onSuccess: function(url) {
                    if ($preparingDialog) {
                        $preparingDialog.dialog("close");
                    }
                    settings.successCallback(url);
                    deferred.resolve(url);
                },
                onAbort: function(url) {
                    if ($preparingDialog) {
                        $preparingDialog.dialog("close");
                    }
                    settings.abortCallback(url);
                    deferred.reject(url);
                },
                onFail: function(responseHtml, url, error) {
                    if ($preparingDialog) {
                        $preparingDialog.dialog("close");
                    }
                    if (settings.failMessageHtml) {
                        $("<div>").html(settings.failMessageHtml).dialog(settings.dialogOptions);
                    }
                    settings.failCallback(responseHtml, url, error);
                    deferred.reject(responseHtml, url);
                }
            };
            internalCallbacks.onPrepare(fileUrl);
            if (settings.data !== null && typeof settings.data !== "string") {
                settings.data = $.param(settings.data);
            }
            var $iframe, downloadWindow, formDoc, $form;
            if (httpMethodUpper === "GET") {
                if (settings.data !== null) {
                    var qsStart = fileUrl.indexOf("?");
                    if (qsStart !== -1) {
                        if (fileUrl.substring(fileUrl.length - 1) !== "&") {
                            fileUrl = fileUrl + "&";
                        }
                    } else {
                        fileUrl = fileUrl + "?";
                    }
                    fileUrl = fileUrl + settings.data;
                }
                if (isIos || isAndroid) {
                    downloadWindow = window.open(fileUrl);
                    downloadWindow.document.title = settings.popupWindowTitle;
                    window.focus();
                } else if (isOtherMobileBrowser) {
                    window.location(fileUrl);
                } else {
                    $iframe = $("<iframe>").hide().prop("src", fileUrl).appendTo("body");
                }
            } else {
                var formInnerHtml = "";
                if (settings.data !== null) {
                    $.each(settings.data.replace(/\+/g, " ").split("&"), function() {
                        var kvp = this.split("=");
                        var k = kvp[0];
                        kvp.shift();
                        var v = kvp.join("=");
                        kvp = [ k, v ];
                        var key = settings.encodeHTMLEntities ? htmlSpecialCharsEntityEncode(decodeURIComponent(kvp[0])) : decodeURIComponent(kvp[0]);
                        if (key) {
                            var value = settings.encodeHTMLEntities ? htmlSpecialCharsEntityEncode(decodeURIComponent(kvp[1])) : decodeURIComponent(kvp[1]);
                            formInnerHtml += '<input type="hidden" name="' + key + '" value="' + value + '" />';
                        }
                    });
                }
                if (isOtherMobileBrowser) {
                    $form = $("<form>").appendTo("body");
                    $form.hide().prop("method", settings.httpMethod).prop("action", fileUrl).html(formInnerHtml);
                } else {
                    if (isIos) {
                        downloadWindow = window.open("about:blank");
                        downloadWindow.document.title = settings.popupWindowTitle;
                        formDoc = downloadWindow.document;
                        window.focus();
                    } else {
                        $iframe = $("<iframe style='display: none' src='about:blank'></iframe>").appendTo("body");
                        formDoc = getiframeDocument($iframe);
                    }
                    formDoc.write("<html><head></head><body><form method='" + settings.httpMethod + "' action='" + fileUrl + "'>" + formInnerHtml + "</form>" + settings.popupWindowTitle + "</body></html>");
                    $form = $(formDoc).find("form");
                }
                $form.submit();
            }
            setTimeout(checkFileDownloadComplete, settings.checkInterval);
            function checkFileDownloadComplete() {
                var cookieValue = settings.cookieValue;
                if (typeof cookieValue == "string") {
                    cookieValue = cookieValue.toLowerCase();
                }
                var lowerCaseCookie = settings.cookieName.toLowerCase() + "=" + cookieValue;
                if (document.cookie.toLowerCase().indexOf(lowerCaseCookie) > -1) {
                    internalCallbacks.onSuccess(fileUrl);
                    var cookieData = settings.cookieName + "=; path=" + settings.cookiePath + "; expires=" + new Date(0).toUTCString() + ";";
                    if (settings.cookieDomain) cookieData += " domain=" + settings.cookieDomain + ";";
                    document.cookie = cookieData;
                    cleanUp(false);
                    return;
                }
                if (downloadWindow || $iframe) {
                    try {
                        var formDoc = downloadWindow ? downloadWindow.document : getiframeDocument($iframe);
                        if (formDoc && formDoc.body !== null && formDoc.body.innerHTML.length) {
                            var isFailure = true;
                            if ($form && $form.length) {
                                var $contents = $(formDoc.body).contents().first();
                                try {
                                    if ($contents.length && $contents[0] === $form[0]) {
                                        isFailure = false;
                                    }
                                } catch (e) {
                                    if (e && e.number == -2146828218) {
                                        isFailure = true;
                                    } else {
                                        throw e;
                                    }
                                }
                            }
                            if (isFailure) {
                                setTimeout(function() {
                                    internalCallbacks.onFail(formDoc.body.innerHTML, fileUrl);
                                    cleanUp(true);
                                }, 100);
                                return;
                            }
                        }
                    } catch (err) {
                        internalCallbacks.onFail("", fileUrl, err);
                        cleanUp(true);
                        return;
                    }
                }
                setTimeout(checkFileDownloadComplete, settings.checkInterval);
            }
            function getiframeDocument($iframe) {
                var iframeDoc = $iframe[0].contentWindow || $iframe[0].contentDocument;
                if (iframeDoc.document) {
                    iframeDoc = iframeDoc.document;
                }
                return iframeDoc;
            }
            function cleanUp(isFailure) {
                setTimeout(function() {
                    if (downloadWindow) {
                        if (isAndroid) {
                            downloadWindow.close();
                        }
                        if (isIos) {
                            if (downloadWindow.focus) {
                                downloadWindow.focus();
                                if (isFailure) {
                                    downloadWindow.close();
                                }
                            }
                        }
                    }
                }, 0);
            }
            function htmlSpecialCharsEntityEncode(str) {
                return str.replace(htmlSpecialCharsRegEx, function(match) {
                    return "&" + htmlSpecialCharsPlaceHolders[match];
                });
            }
            var promise = deferred.promise();
            promise.abort = function() {
                cleanUp();
                $iframe.attr("src", "").html("");
                internalCallbacks.onAbort(fileUrl);
            };
            return promise;
        }
    });
})(jQuery, this || window);

(function($) {
    "use strict";
    var tmpl = function(str, data) {
        var f = !/[^\w\-\.:]/.test(str) ? tmpl.cache[str] = tmpl.cache[str] || tmpl(tmpl.load(str)) : new Function(tmpl.arg + ",tmpl", "var _e=tmpl.encode" + tmpl.helper + ",_s='" + str.replace(tmpl.regexp, tmpl.func) + "';return _s;");
        return data ? f(data, tmpl) : function(data) {
            return f(data, tmpl);
        };
    };
    tmpl.cache = {};
    tmpl.load = function(id) {
        return document.getElementById(id).innerHTML;
    };
    tmpl.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g;
    tmpl.func = function(s, p1, p2, p3, p4, p5) {
        if (p1) {
            return {
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                " ": " "
            }[p1] || "\\" + p1;
        }
        if (p2) {
            if (p2 === "=") {
                return "'+_e(" + p3 + ")+'";
            }
            return "'+(" + p3 + "==null?'':" + p3 + ")+'";
        }
        if (p4) {
            return "';";
        }
        if (p5) {
            return "_s+='";
        }
    };
    tmpl.encReg = /[<>&"'\x00]/g;
    tmpl.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    };
    tmpl.encode = function(s) {
        return (s == null ? "" : "" + s).replace(tmpl.encReg, function(c) {
            return tmpl.encMap[c] || "";
        });
    };
    tmpl.arg = "o";
    tmpl.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}" + ",include=function(s,d){_s+=tmpl(s,d);}";
    if (typeof define === "function" && define.amd) {
        define(function() {
            return tmpl;
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = tmpl;
    } else {
        $.tmpl = tmpl;
    }
})(this);

!function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.toast = t();
    }) : "object" == typeof exports ? module.exports = t() : e.toast = t();
}(this, function() {
    function e() {
        var e = document.getElementsByTagName("head")[0], n = function(t) {
            if (e) {
                if (t.length) {
                    for (var a, r, c = -1; a = t[++c]; ) if ("string" == typeof a) o(a); else if ("function" == typeof a) {
                        r = a;
                        break;
                    }
                    i(r, Array.prototype.slice.call(t, c + 1));
                }
            } else setTimeout(function() {
                n(t);
            }, 50);
        }, o = function(n) {
            var o, i, r = /\.(\w+)$/.exec(n), c = /^\[(\w+)\](.+)/.exec(n);
            if (null !== c) o = c[1], n = c[2]; else {
                if (null === r) return;
                o = r[1];
            }
            if (!(n in t)) switch (t[n] = !1, o) {
              case "js":
                i = document.createElement("script"), i.src = n, i.async = !1, e.appendChild(i);
                var f = navigator.appVersion.match(/MSIE (\d)/);
                null !== f && parseInt(f[1], 10) < 9 ? i.onreadystatechange = function() {
                    /ded|co/.test(this.readyState) && (t[n] = !0, i.onreadystatechange = null);
                } : i.onload = function() {
                    t[n] = !0, i.onload = null;
                };
                break;

              case "css":
                i = document.createElement("link"), i.rel = "styleSheet", i.href = n, e.appendChild(i), 
                a(i, n);
                break;

              default:
                return void delete t[n];
            }
        }, i = function(e, o) {
            for (var a in t) if (!t[a]) return void setTimeout(function() {
                i(e, o);
            }, 50);
            "function" == typeof e && e(), n(o);
        }, a = function(e, n) {
            e.sheet || e.styleSheet ? t[n] = !0 : setTimeout(function() {
                a(e, n);
            }, 50);
        };
        n(arguments);
    }
    var t = {};
    return e;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        root.Cldr = factory();
    }
})(this, function() {
    var arrayIsArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var pathNormalize = function(path, attributes) {
        if (arrayIsArray(path)) {
            path = path.join("/");
        }
        if (typeof path !== "string") {
            throw new Error('invalid path "' + path + '"');
        }
        path = path.replace(/^\//, "").replace(/^cldr\//, "");
        path = path.replace(/{[a-zA-Z]+}/g, function(name) {
            name = name.replace(/^{([^}]*)}$/, "$1");
            return attributes[name];
        });
        return path.split("/");
    };
    var arraySome = function(array, callback) {
        var i, length;
        if (array.some) {
            return array.some(callback);
        }
        for (i = 0, length = array.length; i < length; i++) {
            if (callback(array[i], i, array)) {
                return true;
            }
        }
        return false;
    };
    var coreLikelySubtags = function(Cldr, cldr, subtags, options) {
        var match, matchFound, language = subtags[0], script = subtags[1], sep = Cldr.localeSep, territory = subtags[2], variants = subtags.slice(3, 4);
        options = options || {};
        if (language !== "und" && script !== "Zzzz" && territory !== "ZZ") {
            return [ language, script, territory ].concat(variants);
        }
        if (typeof cldr.get("supplemental/likelySubtags") === "undefined") {
            return;
        }
        matchFound = arraySome([ [ language, script, territory ], [ language, territory ], [ language, script ], [ language ], [ "und", script ] ], function(test) {
            return match = !/\b(Zzzz|ZZ)\b/.test(test.join(sep)) && cldr.get([ "supplemental/likelySubtags", test.join(sep) ]);
        });
        if (matchFound) {
            match = match.split(sep);
            return [ language !== "und" ? language : match[0], script !== "Zzzz" ? script : match[1], territory !== "ZZ" ? territory : match[2] ].concat(variants);
        } else if (options.force) {
            return cldr.get("supplemental/likelySubtags/und").split(sep);
        } else {
            return;
        }
    };
    var coreRemoveLikelySubtags = function(Cldr, cldr, maxLanguageId) {
        var match, matchFound, language = maxLanguageId[0], script = maxLanguageId[1], territory = maxLanguageId[2], variants = maxLanguageId[3];
        matchFound = arraySome([ [ [ language, "Zzzz", "ZZ" ], [ language ] ], [ [ language, "Zzzz", territory ], [ language, territory ] ], [ [ language, script, "ZZ" ], [ language, script ] ] ], function(test) {
            var result = coreLikelySubtags(Cldr, cldr, test[0]);
            match = test[1];
            return result && result[0] === maxLanguageId[0] && result[1] === maxLanguageId[1] && result[2] === maxLanguageId[2];
        });
        if (matchFound) {
            if (variants) {
                match.push(variants);
            }
            return match;
        }
        return maxLanguageId;
    };
    var coreSubtags = function(locale) {
        var aux, unicodeLanguageId, subtags = [];
        locale = locale.replace(/_/, "-");
        aux = locale.split("-u-");
        if (aux[1]) {
            aux[1] = aux[1].split("-t-");
            locale = aux[0] + (aux[1][1] ? "-t-" + aux[1][1] : "");
            subtags[4] = aux[1][0];
        }
        unicodeLanguageId = locale.split("-t-")[0];
        aux = unicodeLanguageId.match(/^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/);
        if (aux === null) {
            return [ "und", "Zzzz", "ZZ" ];
        }
        subtags[0] = aux[10] || aux[2] || "und";
        subtags[1] = aux[4] || "Zzzz";
        subtags[2] = aux[6] || "ZZ";
        if (aux[7] && aux[7].length) {
            subtags[3] = aux[7].slice(1);
        }
        return subtags;
    };
    var arrayForEach = function(array, callback) {
        var i, length;
        if (array.forEach) {
            return array.forEach(callback);
        }
        for (i = 0, length = array.length; i < length; i++) {
            callback(array[i], i, array);
        }
    };
    var bundleLookup = function(Cldr, cldr, minLanguageId) {
        var availableBundleMap = Cldr._availableBundleMap, availableBundleMapQueue = Cldr._availableBundleMapQueue;
        if (availableBundleMapQueue.length) {
            arrayForEach(availableBundleMapQueue, function(bundle) {
                var existing, maxBundle, minBundle, subtags;
                subtags = coreSubtags(bundle);
                maxBundle = coreLikelySubtags(Cldr, cldr, subtags);
                minBundle = coreRemoveLikelySubtags(Cldr, cldr, maxBundle);
                minBundle = minBundle.join(Cldr.localeSep);
                existing = availableBundleMapQueue[minBundle];
                if (existing && existing.length < bundle.length) {
                    return;
                }
                availableBundleMap[minBundle] = bundle;
            });
            Cldr._availableBundleMapQueue = [];
        }
        return availableBundleMap[minLanguageId] || null;
    };
    var objectKeys = function(object) {
        var i, result = [];
        if (Object.keys) {
            return Object.keys(object);
        }
        for (i in object) {
            result.push(i);
        }
        return result;
    };
    var createError = function(code, attributes) {
        var error, message;
        message = code + (attributes && JSON ? ": " + JSON.stringify(attributes) : "");
        error = new Error(message);
        error.code = code;
        arrayForEach(objectKeys(attributes), function(attribute) {
            error[attribute] = attributes[attribute];
        });
        return error;
    };
    var validate = function(code, check, attributes) {
        if (!check) {
            throw createError(code, attributes);
        }
    };
    var validatePresence = function(value, name) {
        validate("E_MISSING_PARAMETER", typeof value !== "undefined", {
            name: name
        });
    };
    var validateType = function(value, name, check, expected) {
        validate("E_INVALID_PAR_TYPE", check, {
            expected: expected,
            name: name,
            value: value
        });
    };
    var validateTypePath = function(value, name) {
        validateType(value, name, typeof value === "string" || arrayIsArray(value), "String or Array");
    };
    var isPlainObject = function(obj) {
        return obj !== null && "" + obj === "[object Object]";
    };
    var validateTypePlainObject = function(value, name) {
        validateType(value, name, typeof value === "undefined" || isPlainObject(value), "Plain Object");
    };
    var validateTypeString = function(value, name) {
        validateType(value, name, typeof value === "string", "a string");
    };
    var resourceGet = function(data, path) {
        var i, node = data, length = path.length;
        for (i = 0; i < length - 1; i++) {
            node = node[path[i]];
            if (!node) {
                return undefined;
            }
        }
        return node[path[i]];
    };
    var coreSetAvailableBundles = function(Cldr, json) {
        var bundle, availableBundleMapQueue = Cldr._availableBundleMapQueue, main = resourceGet(json, [ "main" ]);
        if (main) {
            for (bundle in main) {
                if (main.hasOwnProperty(bundle) && bundle !== "root" && availableBundleMapQueue.indexOf(bundle) === -1) {
                    availableBundleMapQueue.push(bundle);
                }
            }
        }
    };
    var alwaysArray = function(somethingOrArray) {
        return arrayIsArray(somethingOrArray) ? somethingOrArray : [ somethingOrArray ];
    };
    var jsonMerge = function() {
        var merge = function() {
            var destination = {}, sources = [].slice.call(arguments, 0);
            arrayForEach(sources, function(source) {
                var prop;
                for (prop in source) {
                    if (prop in destination && typeof destination[prop] === "object" && !arrayIsArray(destination[prop])) {
                        destination[prop] = merge(destination[prop], source[prop]);
                    } else {
                        destination[prop] = source[prop];
                    }
                }
            });
            return destination;
        };
        return merge;
    }();
    var coreLoad = function(Cldr, source, jsons) {
        var i, j, json;
        validatePresence(jsons[0], "json");
        for (i = 0; i < jsons.length; i++) {
            json = alwaysArray(jsons[i]);
            for (j = 0; j < json.length; j++) {
                validateTypePlainObject(json[j], "json");
                source = jsonMerge(source, json[j]);
                coreSetAvailableBundles(Cldr, json[j]);
            }
        }
        return source;
    };
    var itemGetResolved = function(Cldr, path, attributes) {
        var normalizedPath = pathNormalize(path, attributes);
        return resourceGet(Cldr._resolved, normalizedPath);
    };
    var Cldr = function(locale) {
        this.init(locale);
    };
    Cldr._alwaysArray = alwaysArray;
    Cldr._coreLoad = coreLoad;
    Cldr._createError = createError;
    Cldr._itemGetResolved = itemGetResolved;
    Cldr._jsonMerge = jsonMerge;
    Cldr._pathNormalize = pathNormalize;
    Cldr._resourceGet = resourceGet;
    Cldr._validatePresence = validatePresence;
    Cldr._validateType = validateType;
    Cldr._validateTypePath = validateTypePath;
    Cldr._validateTypePlainObject = validateTypePlainObject;
    Cldr._availableBundleMap = {};
    Cldr._availableBundleMapQueue = [];
    Cldr._resolved = {};
    Cldr.localeSep = "-";
    Cldr.load = function() {
        Cldr._resolved = coreLoad(Cldr, Cldr._resolved, arguments);
    };
    Cldr.prototype.init = function(locale) {
        var attributes, language, maxLanguageId, minLanguageId, script, subtags, territory, unicodeLocaleExtensions, variant, sep = Cldr.localeSep, unicodeLocaleExtensionsRaw = "";
        validatePresence(locale, "locale");
        validateTypeString(locale, "locale");
        subtags = coreSubtags(locale);
        if (subtags.length === 5) {
            unicodeLocaleExtensions = subtags.pop();
            unicodeLocaleExtensionsRaw = sep + "u" + sep + unicodeLocaleExtensions;
            if (!subtags[3]) {
                subtags.pop();
            }
        }
        variant = subtags[3];
        maxLanguageId = coreLikelySubtags(Cldr, this, subtags, {
            force: true
        }) || subtags;
        language = maxLanguageId[0];
        script = maxLanguageId[1];
        territory = maxLanguageId[2];
        minLanguageId = coreRemoveLikelySubtags(Cldr, this, maxLanguageId).join(sep);
        this.attributes = attributes = {
            bundle: bundleLookup(Cldr, this, minLanguageId),
            minLanguageId: minLanguageId + unicodeLocaleExtensionsRaw,
            maxLanguageId: maxLanguageId.join(sep) + unicodeLocaleExtensionsRaw,
            language: language,
            script: script,
            territory: territory,
            region: territory,
            variant: variant
        };
        unicodeLocaleExtensions && ("-" + unicodeLocaleExtensions).replace(/-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function(attribute, key, type) {
            if (key) {
                attributes["u" + key] = type;
            } else {
                attributes["u" + attribute] = true;
            }
        });
        this.locale = locale;
    };
    Cldr.prototype.get = function(path) {
        validatePresence(path, "path");
        validateTypePath(path, "path");
        return itemGetResolved(Cldr, path, this.attributes);
    };
    Cldr.prototype.main = function(path) {
        validatePresence(path, "path");
        validateTypePath(path, "path");
        validate("E_MISSING_BUNDLE", this.attributes.bundle !== null, {
            locale: this.locale
        });
        path = alwaysArray(path);
        return this.get([ "main/{bundle}" ].concat(path));
    };
    return Cldr;
});

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "../cldr" ], factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("../cldr"));
    } else {
        factory(Cldr);
    }
})(function(Cldr) {
    var pathNormalize = Cldr._pathNormalize, validatePresence = Cldr._validatePresence, validateType = Cldr._validateType;
    var EventEmitter;
    EventEmitter = function() {
        function EventEmitter() {}
        var proto = EventEmitter.prototype;
        var exports = {};
        function indexOfListener(listeners, listener) {
            var i = listeners.length;
            while (i--) {
                if (listeners[i].listener === listener) {
                    return i;
                }
            }
            return -1;
        }
        function alias(name) {
            return function aliasClosure() {
                return this[name].apply(this, arguments);
            };
        }
        proto.getListeners = function getListeners(evt) {
            var events = this._getEvents();
            var response;
            var key;
            if (evt instanceof RegExp) {
                response = {};
                for (key in events) {
                    if (events.hasOwnProperty(key) && evt.test(key)) {
                        response[key] = events[key];
                    }
                }
            } else {
                response = events[evt] || (events[evt] = []);
            }
            return response;
        };
        proto.flattenListeners = function flattenListeners(listeners) {
            var flatListeners = [];
            var i;
            for (i = 0; i < listeners.length; i += 1) {
                flatListeners.push(listeners[i].listener);
            }
            return flatListeners;
        };
        proto.getListenersAsObject = function getListenersAsObject(evt) {
            var listeners = this.getListeners(evt);
            var response;
            if (listeners instanceof Array) {
                response = {};
                response[evt] = listeners;
            }
            return response || listeners;
        };
        proto.addListener = function addListener(evt, listener) {
            var listeners = this.getListenersAsObject(evt);
            var listenerIsWrapped = typeof listener === "object";
            var key;
            for (key in listeners) {
                if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                    listeners[key].push(listenerIsWrapped ? listener : {
                        listener: listener,
                        once: false
                    });
                }
            }
            return this;
        };
        proto.on = alias("addListener");
        proto.addOnceListener = function addOnceListener(evt, listener) {
            return this.addListener(evt, {
                listener: listener,
                once: true
            });
        };
        proto.once = alias("addOnceListener");
        proto.defineEvent = function defineEvent(evt) {
            this.getListeners(evt);
            return this;
        };
        proto.defineEvents = function defineEvents(evts) {
            for (var i = 0; i < evts.length; i += 1) {
                this.defineEvent(evts[i]);
            }
            return this;
        };
        proto.removeListener = function removeListener(evt, listener) {
            var listeners = this.getListenersAsObject(evt);
            var index;
            var key;
            for (key in listeners) {
                if (listeners.hasOwnProperty(key)) {
                    index = indexOfListener(listeners[key], listener);
                    if (index !== -1) {
                        listeners[key].splice(index, 1);
                    }
                }
            }
            return this;
        };
        proto.off = alias("removeListener");
        proto.addListeners = function addListeners(evt, listeners) {
            return this.manipulateListeners(false, evt, listeners);
        };
        proto.removeListeners = function removeListeners(evt, listeners) {
            return this.manipulateListeners(true, evt, listeners);
        };
        proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
            var i;
            var value;
            var single = remove ? this.removeListener : this.addListener;
            var multiple = remove ? this.removeListeners : this.addListeners;
            if (typeof evt === "object" && !(evt instanceof RegExp)) {
                for (i in evt) {
                    if (evt.hasOwnProperty(i) && (value = evt[i])) {
                        if (typeof value === "function") {
                            single.call(this, i, value);
                        } else {
                            multiple.call(this, i, value);
                        }
                    }
                }
            } else {
                i = listeners.length;
                while (i--) {
                    single.call(this, evt, listeners[i]);
                }
            }
            return this;
        };
        proto.removeEvent = function removeEvent(evt) {
            var type = typeof evt;
            var events = this._getEvents();
            var key;
            if (type === "string") {
                delete events[evt];
            } else if (evt instanceof RegExp) {
                for (key in events) {
                    if (events.hasOwnProperty(key) && evt.test(key)) {
                        delete events[key];
                    }
                }
            } else {
                delete this._events;
            }
            return this;
        };
        proto.removeAllListeners = alias("removeEvent");
        proto.emitEvent = function emitEvent(evt, args) {
            var listeners = this.getListenersAsObject(evt);
            var listener;
            var i;
            var key;
            var response;
            for (key in listeners) {
                if (listeners.hasOwnProperty(key)) {
                    i = listeners[key].length;
                    while (i--) {
                        listener = listeners[key][i];
                        if (listener.once === true) {
                            this.removeListener(evt, listener.listener);
                        }
                        response = listener.listener.apply(this, args || []);
                        if (response === this._getOnceReturnValue()) {
                            this.removeListener(evt, listener.listener);
                        }
                    }
                }
            }
            return this;
        };
        proto.trigger = alias("emitEvent");
        proto.emit = function emit(evt) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(evt, args);
        };
        proto.setOnceReturnValue = function setOnceReturnValue(value) {
            this._onceReturnValue = value;
            return this;
        };
        proto._getOnceReturnValue = function _getOnceReturnValue() {
            if (this.hasOwnProperty("_onceReturnValue")) {
                return this._onceReturnValue;
            } else {
                return true;
            }
        };
        proto._getEvents = function _getEvents() {
            return this._events || (this._events = {});
        };
        EventEmitter.noConflict = function noConflict() {
            exports.EventEmitter = originalGlobalValue;
            return EventEmitter;
        };
        return EventEmitter;
    }();
    var validateTypeFunction = function(value, name) {
        validateType(value, name, typeof value === "undefined" || typeof value === "function", "Function");
    };
    var superGet, superInit, globalEe = new EventEmitter();
    function validateTypeEvent(value, name) {
        validateType(value, name, typeof value === "string" || value instanceof RegExp, "String or RegExp");
    }
    function validateThenCall(method, self) {
        return function(event, listener) {
            validatePresence(event, "event");
            validateTypeEvent(event, "event");
            validatePresence(listener, "listener");
            validateTypeFunction(listener, "listener");
            return self[method].apply(self, arguments);
        };
    }
    function off(self) {
        return validateThenCall("off", self);
    }
    function on(self) {
        return validateThenCall("on", self);
    }
    function once(self) {
        return validateThenCall("once", self);
    }
    Cldr.off = off(globalEe);
    Cldr.on = on(globalEe);
    Cldr.once = once(globalEe);
    superInit = Cldr.prototype.init;
    Cldr.prototype.init = function() {
        var ee;
        this.ee = ee = new EventEmitter();
        this.off = off(ee);
        this.on = on(ee);
        this.once = once(ee);
        superInit.apply(this, arguments);
    };
    function getOverload() {
        superGet = Cldr.prototype.get;
        Cldr.prototype.get = function(path) {
            var value = superGet.apply(this, arguments);
            path = pathNormalize(path, this.attributes).join("/");
            globalEe.trigger("get", [ path, value ]);
            this.ee.trigger("get", [ path, value ]);
            return value;
        };
    }
    Cldr._eventInit = getOverload;
    getOverload();
    return Cldr;
});

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "../cldr" ], factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require("../cldr"));
    } else {
        factory(Cldr);
    }
})(function(Cldr) {
    var alwaysArray = Cldr._alwaysArray;
    var supplementalMain = function(cldr) {
        var prepend, supplemental;
        prepend = function(prepend) {
            return function(path) {
                path = alwaysArray(path);
                return cldr.get([ prepend ].concat(path));
            };
        };
        supplemental = prepend("supplemental");
        supplemental.weekData = prepend("supplemental/weekData");
        supplemental.weekData.firstDay = function() {
            return cldr.get("supplemental/weekData/firstDay/{territory}") || cldr.get("supplemental/weekData/firstDay/001");
        };
        supplemental.weekData.minDays = function() {
            var minDays = cldr.get("supplemental/weekData/minDays/{territory}") || cldr.get("supplemental/weekData/minDays/001");
            return parseInt(minDays, 10);
        };
        supplemental.timeData = prepend("supplemental/timeData");
        supplemental.timeData.allowed = function() {
            return cldr.get("supplemental/timeData/{territory}/_allowed") || cldr.get("supplemental/timeData/001/_allowed");
        };
        supplemental.timeData.preferred = function() {
            return cldr.get("supplemental/timeData/{territory}/_preferred") || cldr.get("supplemental/timeData/001/_preferred");
        };
        return supplemental;
    };
    var initSuper = Cldr.prototype.init;
    Cldr.prototype.init = function() {
        initSuper.apply(this, arguments);
        this.supplemental = supplementalMain(this);
    };
    return Cldr;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "cldr", "cldr/event" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("cldrjs"));
    } else {
        root.Globalize = factory(root.Cldr);
    }
})(this, function(Cldr) {
    var toString = function(variable) {
        return typeof variable === "string" ? variable : typeof variable === "number" ? "" + variable : JSON.stringify(variable);
    };
    var formatMessage = function(message, data) {
        message = message.replace(/{[0-9a-zA-Z-_. ]+}/g, function(name) {
            name = name.replace(/^{([^}]*)}$/, "$1");
            return toString(data[name]);
        });
        return message;
    };
    var objectExtend = function() {
        var destination = arguments[0], sources = [].slice.call(arguments, 1);
        sources.forEach(function(source) {
            var prop;
            for (prop in source) {
                destination[prop] = source[prop];
            }
        });
        return destination;
    };
    var createError = function(code, message, attributes) {
        var error;
        message = code + (message ? ": " + formatMessage(message, attributes) : "");
        error = new Error(message);
        error.code = code;
        objectExtend(error, attributes);
        return error;
    };
    var stringHash = function(str) {
        return [].reduce.call(str, function(hash, i) {
            var chr = i.charCodeAt(0);
            hash = (hash << 5) - hash + chr;
            return hash | 0;
        }, 0);
    };
    var runtimeKey = function(fnName, locale, args, argsStr) {
        var hash;
        argsStr = argsStr || JSON.stringify(args);
        hash = stringHash(fnName + locale + argsStr);
        return hash > 0 ? "a" + hash : "b" + Math.abs(hash);
    };
    var functionName = function(fn) {
        if (fn.name !== undefined) {
            return fn.name;
        }
        var matches = /^function\s+([\w\$]+)\s*\(/.exec(fn.toString());
        if (matches && matches.length > 0) {
            return matches[1];
        }
    };
    var runtimeBind = function(args, cldr, fn, runtimeArgs) {
        var argsStr = JSON.stringify(args), fnName = functionName(fn), locale = cldr.locale;
        if (!fnName) {
            return fn;
        }
        fn.runtimeKey = runtimeKey(fnName, locale, null, argsStr);
        fn.generatorString = function() {
            return 'Globalize("' + locale + '").' + fnName + "(" + argsStr.slice(1, -1) + ")";
        };
        fn.runtimeArgs = runtimeArgs;
        return fn;
    };
    var validate = function(code, message, check, attributes) {
        if (!check) {
            throw createError(code, message, attributes);
        }
    };
    var alwaysArray = function(stringOrArray) {
        return Array.isArray(stringOrArray) ? stringOrArray : stringOrArray ? [ stringOrArray ] : [];
    };
    var validateCldr = function(path, value, options) {
        var skipBoolean;
        options = options || {};
        skipBoolean = alwaysArray(options.skip).some(function(pathRe) {
            return pathRe.test(path);
        });
        validate("E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
            path: path
        });
    };
    var validateDefaultLocale = function(value) {
        validate("E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.", value !== undefined, {});
    };
    var validateParameterPresence = function(value, name) {
        validate("E_MISSING_PARAMETER", "Missing required parameter `{name}`.", value !== undefined, {
            name: name
        });
    };
    var validateParameterRange = function(value, name, minimum, maximum) {
        validate("E_PAR_OUT_OF_RANGE", "Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].", value === undefined || value >= minimum && value <= maximum, {
            maximum: maximum,
            minimum: minimum,
            name: name,
            value: value
        });
    };
    var validateParameterType = function(value, name, check, expected) {
        validate("E_INVALID_PAR_TYPE", "Invalid `{name}` parameter ({value}). {expected} expected.", check, {
            expected: expected,
            name: name,
            value: value
        });
    };
    var validateParameterTypeLocale = function(value, name) {
        validateParameterType(value, name, value === undefined || typeof value === "string" || value instanceof Cldr, "String or Cldr instance");
    };
    var isPlainObject = function(obj) {
        return obj !== null && "" + obj === "[object Object]";
    };
    var validateParameterTypePlainObject = function(value, name) {
        validateParameterType(value, name, value === undefined || isPlainObject(value), "Plain Object");
    };
    var alwaysCldr = function(localeOrCldr) {
        return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr(localeOrCldr);
    };
    var regexpEscape = function(string) {
        return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    var stringPad = function(str, count, right) {
        var length;
        if (typeof str !== "string") {
            str = String(str);
        }
        for (length = str.length; length < count; length += 1) {
            str = right ? str + "0" : "0" + str;
        }
        return str;
    };
    function validateLikelySubtags(cldr) {
        cldr.once("get", validateCldr);
        cldr.get("supplemental/likelySubtags");
    }
    function Globalize(locale) {
        if (!(this instanceof Globalize)) {
            return new Globalize(locale);
        }
        validateParameterPresence(locale, "locale");
        validateParameterTypeLocale(locale, "locale");
        this.cldr = alwaysCldr(locale);
        validateLikelySubtags(this.cldr);
    }
    Globalize.load = function() {
        Cldr.load.apply(Cldr, arguments);
    };
    Globalize.locale = function(locale) {
        validateParameterTypeLocale(locale, "locale");
        if (arguments.length) {
            this.cldr = alwaysCldr(locale);
            validateLikelySubtags(this.cldr);
        }
        return this.cldr;
    };
    Globalize._alwaysArray = alwaysArray;
    Globalize._createError = createError;
    Globalize._formatMessage = formatMessage;
    Globalize._isPlainObject = isPlainObject;
    Globalize._objectExtend = objectExtend;
    Globalize._regexpEscape = regexpEscape;
    Globalize._runtimeBind = runtimeBind;
    Globalize._stringPad = stringPad;
    Globalize._validate = validate;
    Globalize._validateCldr = validateCldr;
    Globalize._validateDefaultLocale = validateDefaultLocale;
    Globalize._validateParameterPresence = validateParameterPresence;
    Globalize._validateParameterRange = validateParameterRange;
    Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
    Globalize._validateParameterType = validateParameterType;
    return Globalize;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "cldr", "../globalize", "cldr/event", "cldr/supplemental" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("cldrjs"), require("../globalize"));
    } else {
        factory(root.Cldr, root.Globalize);
    }
})(this, function(Cldr, Globalize) {
    var createError = Globalize._createError, regexpEscape = Globalize._regexpEscape, runtimeBind = Globalize._runtimeBind, stringPad = Globalize._stringPad, validateCldr = Globalize._validateCldr, validateDefaultLocale = Globalize._validateDefaultLocale, validateParameterPresence = Globalize._validateParameterPresence, validateParameterRange = Globalize._validateParameterRange, validateParameterType = Globalize._validateParameterType, validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
    var createErrorUnsupportedFeature = function(feature) {
        return createError("E_UNSUPPORTED", "Unsupported {feature}.", {
            feature: feature
        });
    };
    var validateParameterTypeNumber = function(value, name) {
        validateParameterType(value, name, value === undefined || typeof value === "number", "Number");
    };
    var validateParameterTypeString = function(value, name) {
        validateParameterType(value, name, value === undefined || typeof value === "string", "a string");
    };
    var numberFormatGroupingSeparator = function(number, primaryGroupingSize, secondaryGroupingSize) {
        var index, currentGroupingSize = primaryGroupingSize, ret = "", sep = ",", switchToSecondary = secondaryGroupingSize ? true : false;
        number = String(number).split(".");
        index = number[0].length;
        while (index > currentGroupingSize) {
            ret = number[0].slice(index - currentGroupingSize, index) + (ret.length ? sep : "") + ret;
            index -= currentGroupingSize;
            if (switchToSecondary) {
                currentGroupingSize = secondaryGroupingSize;
                switchToSecondary = false;
            }
        }
        number[0] = number[0].slice(0, index) + (ret.length ? sep : "") + ret;
        return number.join(".");
    };
    var numberFormatIntegerFractionDigits = function(number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round, roundIncrement) {
        if (maximumFractionDigits) {
            if (roundIncrement) {
                number = round(number, roundIncrement);
            } else {
                number = round(number, {
                    exponent: -maximumFractionDigits
                });
            }
        } else {
            number = round(number);
        }
        number = String(number);
        if (maximumFractionDigits && /e-/.test(number)) {
            number = (+number).toFixed(maximumFractionDigits).replace(/0+$/, "").replace(/\.$/, "");
        }
        if (minimumFractionDigits) {
            number = number.split(".");
            number[1] = stringPad(number[1] || "", minimumFractionDigits, true);
            number = number.join(".");
        }
        if (minimumIntegerDigits) {
            number = number.split(".");
            number[0] = stringPad(number[0], minimumIntegerDigits);
            number = number.join(".");
        }
        return number;
    };
    var numberToPrecision = function(number, precision, round) {
        var roundOrder;
        number = number.toPrecision(precision + 2);
        roundOrder = Math.ceil(Math.log(Math.abs(number)) / Math.log(10));
        roundOrder -= precision;
        return round(number, {
            exponent: roundOrder
        });
    };
    var numberFormatSignificantDigits = function(number, minimumSignificantDigits, maximumSignificantDigits, round) {
        var atMinimum, atMaximum;
        if (minimumSignificantDigits > maximumSignificantDigits) {
            maximumSignificantDigits = minimumSignificantDigits;
        }
        atMinimum = numberToPrecision(number, minimumSignificantDigits, round);
        atMaximum = numberToPrecision(number, maximumSignificantDigits, round);
        number = +atMinimum === +atMaximum ? atMinimum : atMaximum;
        number = (+number).toString(10);
        if (/e/.test(number)) {
            throw createErrorUnsupportedFeature({
                feature: "integers out of (1e21, 1e-7)"
            });
        }
        if (minimumSignificantDigits - number.replace(/^0+|\./g, "").length > 0) {
            number = number.split(".");
            number[1] = stringPad(number[1] || "", minimumSignificantDigits - number[0].replace(/^0+/, "").length, true);
            number = number.join(".");
        }
        return number;
    };
    var removeLiteralQuotes = function(string) {
        if (string[0] + string[string.length - 1] !== "''") {
            return string;
        }
        if (string === "''") {
            return "";
        }
        return string.replace(/''/g, "'").slice(1, -1);
    };
    var numberFormat = function(number, properties) {
        var infinitySymbol, maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits, nanSymbol, nuDigitsMap, padding, prefix, primaryGroupingSize, pattern, ret, round, roundIncrement, secondaryGroupingSize, suffix, symbolMap;
        padding = properties[1];
        minimumIntegerDigits = properties[2];
        minimumFractionDigits = properties[3];
        maximumFractionDigits = properties[4];
        minimumSignificantDigits = properties[5];
        maximumSignificantDigits = properties[6];
        roundIncrement = properties[7];
        primaryGroupingSize = properties[8];
        secondaryGroupingSize = properties[9];
        round = properties[15];
        infinitySymbol = properties[16];
        nanSymbol = properties[17];
        symbolMap = properties[18];
        nuDigitsMap = properties[19];
        if (isNaN(number)) {
            return nanSymbol;
        }
        if (number < 0) {
            pattern = properties[12];
            prefix = properties[13];
            suffix = properties[14];
        } else {
            pattern = properties[11];
            prefix = properties[0];
            suffix = properties[10];
        }
        if (!isFinite(number)) {
            return prefix + infinitySymbol + suffix;
        }
        ret = prefix;
        if (pattern.indexOf("%") !== -1) {
            number *= 100;
        } else if (pattern.indexOf("‰") !== -1) {
            number *= 1e3;
        }
        if (!isNaN(minimumSignificantDigits * maximumSignificantDigits)) {
            number = numberFormatSignificantDigits(number, minimumSignificantDigits, maximumSignificantDigits, round);
        } else {
            number = numberFormatIntegerFractionDigits(number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round, roundIncrement);
        }
        number = number.replace(/^-/, "");
        if (primaryGroupingSize) {
            number = numberFormatGroupingSeparator(number, primaryGroupingSize, secondaryGroupingSize);
        }
        ret += number;
        ret += suffix;
        return ret.replace(/('([^']|'')+'|'')|./g, function(character, literal) {
            if (literal) {
                return removeLiteralQuotes(literal);
            }
            character = character.replace(/[.,\-+E%\u2030]/, function(symbol) {
                return symbolMap[symbol];
            });
            if (nuDigitsMap) {
                character = character.replace(/[0-9]/, function(digit) {
                    return nuDigitsMap[+digit];
                });
            }
            return character;
        });
    };
    var numberFormatterFn = function(properties) {
        return function numberFormatter(value) {
            validateParameterPresence(value, "value");
            validateParameterTypeNumber(value, "value");
            return numberFormat(value, properties);
        };
    };
    var numberNumberingSystem = function(cldr) {
        var nu = cldr.attributes["u-nu"];
        if (nu) {
            if (nu === "traditio") {
                nu = "traditional";
            }
            if ([ "native", "traditional", "finance" ].indexOf(nu) !== -1) {
                return cldr.main([ "numbers/otherNumberingSystems", nu ]);
            }
            return nu;
        }
        return cldr.main("numbers/defaultNumberingSystem");
    };
    var numberNumberingSystemDigitsMap = function(cldr) {
        var aux, nu = numberNumberingSystem(cldr);
        if (nu === "latn") {
            return;
        }
        aux = cldr.supplemental([ "numberingSystems", nu ]);
        if (aux._type !== "numeric") {
            throw createErrorUnsupportedFeature("`" + aux._type + "` numbering system");
        }
        return aux._digits;
    };
    var numberPatternRe = /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    var numberPatternProperties = function(pattern) {
        var aux1, aux2, fractionPattern, integerFractionOrSignificantPattern, integerPattern, maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits, padding, prefix, primaryGroupingSize, roundIncrement, scientificNotation, secondaryGroupingSize, significantPattern, suffix;
        pattern = pattern.match(numberPatternRe);
        if (!pattern) {
            throw new Error("Invalid pattern: " + pattern);
        }
        prefix = pattern[1];
        padding = pattern[4];
        integerFractionOrSignificantPattern = pattern[5];
        significantPattern = pattern[9];
        scientificNotation = pattern[10];
        suffix = pattern[11];
        if (significantPattern) {
            significantPattern.replace(/(@+)(#*)/, function(match, minimumSignificantDigitsMatch, maximumSignificantDigitsMatch) {
                minimumSignificantDigits = minimumSignificantDigitsMatch.length;
                maximumSignificantDigits = minimumSignificantDigits + maximumSignificantDigitsMatch.length;
            });
        } else {
            fractionPattern = pattern[8];
            integerPattern = pattern[7];
            if (fractionPattern) {
                fractionPattern.replace(/[0-9]+/, function(match) {
                    minimumFractionDigits = match;
                });
                if (minimumFractionDigits) {
                    roundIncrement = +("0." + minimumFractionDigits);
                    minimumFractionDigits = minimumFractionDigits.length;
                } else {
                    minimumFractionDigits = 0;
                }
                maximumFractionDigits = fractionPattern.length - 1;
            }
            integerPattern.replace(/0+$/, function(match) {
                minimumIntegerDigits = match.length;
            });
        }
        if (scientificNotation) {
            throw createErrorUnsupportedFeature({
                feature: "scientific notation (not implemented)"
            });
        }
        if (padding) {
            throw createErrorUnsupportedFeature({
                feature: "padding (not implemented)"
            });
        }
        if ((aux1 = integerFractionOrSignificantPattern.lastIndexOf(",")) !== -1) {
            aux2 = integerFractionOrSignificantPattern.split(".")[0];
            primaryGroupingSize = aux2.length - aux1 - 1;
            if ((aux2 = integerFractionOrSignificantPattern.lastIndexOf(",", aux1 - 1)) !== -1) {
                secondaryGroupingSize = aux1 - 1 - aux2;
            }
        }
        return [ prefix, padding, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, roundIncrement, primaryGroupingSize, secondaryGroupingSize, suffix ];
    };
    var numberSymbol = function(name, cldr) {
        return cldr.main([ "numbers/symbols-numberSystem-" + numberNumberingSystem(cldr), name ]);
    };
    var numberSymbolName = {
        ".": "decimal",
        ",": "group",
        "%": "percentSign",
        "+": "plusSign",
        "-": "minusSign",
        E: "exponential",
        "‰": "perMille"
    };
    var numberSymbolMap = function(cldr) {
        var symbol, symbolMap = {};
        for (symbol in numberSymbolName) {
            symbolMap[symbol] = numberSymbol(numberSymbolName[symbol], cldr);
        }
        return symbolMap;
    };
    var numberTruncate = function(value) {
        if (isNaN(value)) {
            return NaN;
        }
        return Math[value < 0 ? "ceil" : "floor"](value);
    };
    var numberRound = function(method) {
        method = method || "round";
        method = method === "truncate" ? numberTruncate : Math[method];
        return function(value, incrementOrExp) {
            var exp, increment;
            value = +value;
            if (isNaN(value)) {
                return NaN;
            }
            if (typeof incrementOrExp === "object" && incrementOrExp.exponent) {
                exp = +incrementOrExp.exponent;
                increment = 1;
                if (exp === 0) {
                    return method(value);
                }
                if (!(typeof exp === "number" && exp % 1 === 0)) {
                    return NaN;
                }
            } else {
                increment = +incrementOrExp || 1;
                if (increment === 1) {
                    return method(value);
                }
                if (isNaN(increment)) {
                    return NaN;
                }
                increment = increment.toExponential().split("e");
                exp = +increment[1];
                increment = +increment[0];
            }
            value = value.toString().split("e");
            value[0] = +value[0] / increment;
            value[1] = value[1] ? +value[1] - exp : -exp;
            value = method(+(value[0] + "e" + value[1]));
            value = value.toString().split("e");
            value[0] = +value[0] * increment;
            value[1] = value[1] ? +value[1] + exp : exp;
            return +(value[0] + "e" + value[1]);
        };
    };
    var numberFormatProperties = function(pattern, cldr, options) {
        var negativePattern, negativePrefix, negativeProperties, negativeSuffix, positivePattern, roundFn, properties;
        function getOptions(attribute, propertyIndex) {
            if (attribute in options) {
                properties[propertyIndex] = options[attribute];
            }
        }
        options = options || {};
        pattern = pattern.split(";");
        positivePattern = pattern[0];
        negativePattern = pattern[1] || "-" + positivePattern;
        negativeProperties = numberPatternProperties(negativePattern);
        negativePrefix = negativeProperties[0];
        negativeSuffix = negativeProperties[10];
        roundFn = numberRound(options.round);
        roundFn.generatorString = function() {
            return "numberRound(" + (options.round ? '"' + options.round + '"' : "") + ")";
        };
        properties = numberPatternProperties(positivePattern).concat([ positivePattern, negativePrefix + positivePattern + negativeSuffix, negativePrefix, negativeSuffix, roundFn, numberSymbol("infinity", cldr), numberSymbol("nan", cldr), numberSymbolMap(cldr), numberNumberingSystemDigitsMap(cldr) ]);
        getOptions("minimumIntegerDigits", 2);
        getOptions("minimumFractionDigits", 3);
        getOptions("maximumFractionDigits", 4);
        getOptions("minimumSignificantDigits", 5);
        getOptions("maximumSignificantDigits", 6);
        if (options.useGrouping === false) {
            properties[8] = null;
        }
        if ("minimumFractionDigits" in options && !("maximumFractionDigits" in options)) {
            properties[4] = Math.max(properties[3], properties[4]);
        } else if (!("minimumFractionDigits" in options) && "maximumFractionDigits" in options) {
            properties[3] = Math.min(properties[3], properties[4]);
        }
        return properties;
    };
    var regexpCfG = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
    var regexpDashG = /[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g;
    var regexpZsG = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
    var looseMatching = function(value) {
        return value.replace(regexpCfG, "").replace(regexpDashG, "-").replace(regexpZsG, " ");
    };
    var numberParse = function(value, properties) {
        var grammar, invertedNuDigitsMap, invertedSymbolMap, negative, number, prefix, prefixNSuffix, suffix, tokenizer, valid;
        grammar = [ [ "nan" ], [ "prefix", "infinity", "suffix" ], [ "prefix", "number", "suffix" ], [ "negativePrefix", "infinity", "negativeSuffix" ], [ "negativePrefix", "number", "negativeSuffix" ] ];
        invertedSymbolMap = properties[0];
        invertedNuDigitsMap = properties[1] || {};
        tokenizer = properties[2];
        value = looseMatching(value);
        function parse(type) {
            return function(lexeme) {
                lexeme = lexeme.split("").map(function(character) {
                    return invertedSymbolMap[character] || invertedNuDigitsMap[character] || character;
                }).join("");
                switch (type) {
                  case "infinity":
                    number = Infinity;
                    break;

                  case "nan":
                    number = NaN;
                    break;

                  case "number":
                    lexeme = lexeme.replace(/,/g, "");
                    number = +lexeme;
                    break;

                  case "prefix":
                  case "negativePrefix":
                    prefix = lexeme;
                    break;

                  case "suffix":
                    suffix = lexeme;
                    break;

                  case "negativeSuffix":
                    suffix = lexeme;
                    negative = true;
                    break;

                  default:
                    throw new Error("Internal error");
                }
                return "";
            };
        }
        function tokenizeNParse(_value, grammar) {
            return grammar.some(function(statement) {
                var value = _value;
                return statement.every(function(type) {
                    if (value.match(tokenizer[type]) === null) {
                        return false;
                    }
                    value = value.replace(tokenizer[type], parse(type));
                    return true;
                }) && !value.length;
            });
        }
        valid = tokenizeNParse(value, grammar);
        if (!valid || isNaN(number)) {
            return NaN;
        }
        prefixNSuffix = "" + prefix + suffix;
        if (prefixNSuffix.indexOf("%") !== -1) {
            number /= 100;
        } else if (prefixNSuffix.indexOf("‰") !== -1) {
            number /= 1e3;
        }
        if (negative) {
            number *= -1;
        }
        return number;
    };
    var numberParserFn = function(properties) {
        return function numberParser(value) {
            validateParameterPresence(value, "value");
            validateParameterTypeString(value, "value");
            return numberParse(value, properties);
        };
    };
    var numberSymbolInvertedMap = function(cldr) {
        var symbol, symbolMap = {};
        for (symbol in numberSymbolName) {
            symbolMap[numberSymbol(numberSymbolName[symbol], cldr)] = symbol;
        }
        return symbolMap;
    };
    var objectMap = function(object, fn) {
        return Object.keys(object).map(function(key) {
            return fn([ key, object[key] ]);
        }).reduce(function(object, pair) {
            object[pair[0]] = pair[1];
            return object;
        }, {});
    };
    var numberParseProperties = function(pattern, cldr, options) {
        var aux, decimalSymbolRe, digitsRe, groupingSeparatorRe, infinitySymbol, invertedNuDigitsMap, invertedSymbolMap, maximumFractionDigits, maximumSignificantDigits, minimumSignificantDigits, nanSymbol, negativePrefix, negativeSuffix, nuDigitsMap, numberTokenizer, prefix, primaryGroupingSize, secondaryGroupingSize, suffix, symbolMap, formatProperties = numberFormatProperties(pattern, cldr, options);
        prefix = looseMatching(formatProperties[0]);
        maximumFractionDigits = formatProperties[4];
        minimumSignificantDigits = formatProperties[5];
        maximumSignificantDigits = formatProperties[6];
        primaryGroupingSize = formatProperties[8];
        secondaryGroupingSize = formatProperties[9];
        suffix = looseMatching(formatProperties[10]);
        negativePrefix = looseMatching(formatProperties[13]);
        negativeSuffix = looseMatching(formatProperties[14]);
        infinitySymbol = looseMatching(formatProperties[16]);
        nanSymbol = looseMatching(formatProperties[17]);
        symbolMap = objectMap(formatProperties[18], function(pair) {
            return [ pair[0], looseMatching(pair[1]) ];
        });
        nuDigitsMap = formatProperties[19];
        invertedSymbolMap = objectMap(numberSymbolInvertedMap(cldr), function(pair) {
            return [ looseMatching(pair[0]), pair[1] ];
        });
        digitsRe = nuDigitsMap ? "[" + nuDigitsMap + "]" : "\\d";
        groupingSeparatorRe = regexpEscape(symbolMap[","]);
        decimalSymbolRe = regexpEscape(symbolMap["."]);
        if (nuDigitsMap) {
            invertedNuDigitsMap = nuDigitsMap.split("").reduce(function(object, localizedDigit, i) {
                object[localizedDigit] = String(i);
                return object;
            }, {});
        }
        aux = [ prefix, suffix, negativePrefix, negativeSuffix ].map(function(value) {
            return value.replace(/('([^']|'')+'|'')|./g, function(character, literal) {
                if (literal) {
                    return removeLiteralQuotes(literal);
                }
                character = character.replace(/[\-+E%\u2030]/, function(symbol) {
                    return symbolMap[symbol];
                });
                return character;
            });
        });
        prefix = aux[0];
        suffix = aux[1];
        negativePrefix = aux[2];
        negativeSuffix = aux[3];
        numberTokenizer = digitsRe + "+";
        if (primaryGroupingSize) {
            if (secondaryGroupingSize) {
                aux = digitsRe + "{1," + secondaryGroupingSize + "}((" + groupingSeparatorRe + digitsRe + "{" + secondaryGroupingSize + "})*(" + groupingSeparatorRe + digitsRe + "{" + primaryGroupingSize + "}))";
            } else {
                aux = digitsRe + "{1," + primaryGroupingSize + "}(" + groupingSeparatorRe + digitsRe + "{" + primaryGroupingSize + "})+";
            }
            numberTokenizer = "(" + aux + "|" + numberTokenizer + ")";
        }
        if (!isNaN(minimumSignificantDigits * maximumSignificantDigits) || maximumFractionDigits) {
            aux = decimalSymbolRe + digitsRe + "+";
            numberTokenizer = numberTokenizer + "(" + aux + "|" + decimalSymbolRe + ")?" + "|(" + numberTokenizer + ")?" + aux;
            numberTokenizer = "(" + numberTokenizer + ")";
        }
        return [ invertedSymbolMap, invertedNuDigitsMap, {
            infinity: new RegExp("^" + regexpEscape(infinitySymbol)),
            nan: new RegExp("^" + regexpEscape(nanSymbol)),
            negativePrefix: new RegExp("^" + regexpEscape(negativePrefix)),
            negativeSuffix: new RegExp("^" + regexpEscape(negativeSuffix)),
            number: new RegExp("^" + numberTokenizer),
            prefix: new RegExp("^" + regexpEscape(prefix)),
            suffix: new RegExp("^" + regexpEscape(suffix))
        } ];
    };
    var numberPattern = function(style, cldr) {
        if (style !== "decimal" && style !== "percent") {
            throw new Error("Invalid style");
        }
        return cldr.main([ "numbers", style + "Formats-numberSystem-" + numberNumberingSystem(cldr), "standard" ]);
    };
    function validateDigits(properties) {
        var minimumIntegerDigits = properties[2], minimumFractionDigits = properties[3], maximumFractionDigits = properties[4], minimumSignificantDigits = properties[5], maximumSignificantDigits = properties[6];
        if (!isNaN(minimumSignificantDigits * maximumSignificantDigits)) {
            validateParameterRange(minimumSignificantDigits, "minimumSignificantDigits", 1, 21);
            validateParameterRange(maximumSignificantDigits, "maximumSignificantDigits", minimumSignificantDigits, 21);
        } else if (!isNaN(minimumSignificantDigits) || !isNaN(maximumSignificantDigits)) {
            throw new Error("Neither or both the minimum and maximum significant digits must be " + "present");
        } else {
            validateParameterRange(minimumIntegerDigits, "minimumIntegerDigits", 1, 21);
            validateParameterRange(minimumFractionDigits, "minimumFractionDigits", 0, 20);
            validateParameterRange(maximumFractionDigits, "maximumFractionDigits", minimumFractionDigits, 20);
        }
    }
    Globalize.numberFormatter = Globalize.prototype.numberFormatter = function(options) {
        var args, cldr, pattern, properties, returnFn;
        validateParameterTypePlainObject(options, "options");
        options = options || {};
        cldr = this.cldr;
        args = [ options ];
        validateDefaultLocale(cldr);
        cldr.on("get", validateCldr);
        if (options.raw) {
            pattern = options.raw;
        } else {
            pattern = numberPattern(options.style || "decimal", cldr);
        }
        properties = numberFormatProperties(pattern, cldr, options);
        cldr.off("get", validateCldr);
        validateDigits(properties);
        returnFn = numberFormatterFn(properties);
        runtimeBind(args, cldr, returnFn, [ properties ]);
        return returnFn;
    };
    Globalize.numberParser = Globalize.prototype.numberParser = function(options) {
        var args, cldr, pattern, properties, returnFn;
        validateParameterTypePlainObject(options, "options");
        options = options || {};
        cldr = this.cldr;
        args = [ options ];
        validateDefaultLocale(cldr);
        cldr.on("get", validateCldr);
        if (options.raw) {
            pattern = options.raw;
        } else {
            pattern = numberPattern(options.style || "decimal", cldr);
        }
        properties = numberParseProperties(pattern, cldr, options);
        cldr.off("get", validateCldr);
        returnFn = numberParserFn(properties);
        runtimeBind(args, cldr, returnFn, [ properties ]);
        return returnFn;
    };
    Globalize.formatNumber = Globalize.prototype.formatNumber = function(value, options) {
        validateParameterPresence(value, "value");
        validateParameterTypeNumber(value, "value");
        return this.numberFormatter(options)(value);
    };
    Globalize.parseNumber = Globalize.prototype.parseNumber = function(value, options) {
        validateParameterPresence(value, "value");
        validateParameterTypeString(value, "value");
        return this.numberParser(options)(value);
    };
    Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
    Globalize._numberNumberingSystem = numberNumberingSystem;
    Globalize._numberNumberingSystemDigitsMap = numberNumberingSystemDigitsMap;
    Globalize._numberPattern = numberPattern;
    Globalize._numberSymbol = numberSymbol;
    Globalize._looseMatching = looseMatching;
    Globalize._removeLiteralQuotes = removeLiteralQuotes;
    Globalize._stringPad = stringPad;
    Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
    Globalize._validateParameterTypeString = validateParameterTypeString;
    return Globalize;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "cldr", "../globalize", "./number", "cldr/event", "cldr/supplemental" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("cldrjs"), require("../globalize"));
    } else {
        factory(root.Cldr, root.Globalize);
    }
})(this, function(Cldr, Globalize) {
    var createError = Globalize._createError, createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature, formatMessage = Globalize._formatMessage, isPlainObject = Globalize._isPlainObject, looseMatching = Globalize._looseMatching, numberNumberingSystemDigitsMap = Globalize._numberNumberingSystemDigitsMap, numberSymbol = Globalize._numberSymbol, regexpEscape = Globalize._regexpEscape, removeLiteralQuotes = Globalize._removeLiteralQuotes, runtimeBind = Globalize._runtimeBind, stringPad = Globalize._stringPad, validate = Globalize._validate, validateCldr = Globalize._validateCldr, validateDefaultLocale = Globalize._validateDefaultLocale, validateParameterPresence = Globalize._validateParameterPresence, validateParameterType = Globalize._validateParameterType, validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject, validateParameterTypeString = Globalize._validateParameterTypeString;
    var validateParameterTypeDate = function(value, name) {
        validateParameterType(value, name, value === undefined || value instanceof Date, "Date");
    };
    var createErrorInvalidParameterValue = function(name, value) {
        return createError("E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
            name: name,
            value: value
        });
    };
    var validateSkeletonFieldsPosMap = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split("").reduce(function(memo, item, i) {
        memo[item] = i;
        return memo;
    }, {});
    var validateSkeleton = function validateSkeleton(skeleton) {
        var last, fieldsPosMap = validateSkeletonFieldsPosMap;
        skeleton.replace(/[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function(field) {
            throw createError("E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`", {
                invalidField: field,
                type: "skeleton",
                value: skeleton
            });
        });
        skeleton.split("").every(function(field) {
            if (fieldsPosMap[field] < last) {
                throw createError("E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`", {
                    invalidField: field,
                    type: "skeleton",
                    value: skeleton
                });
            }
            last = fieldsPosMap[field];
            return true;
        });
    };
    var objectInvert = function(object, fn) {
        fn = fn || function(object, key, value) {
            object[value] = key;
            return object;
        };
        return Object.keys(object).reduce(function(newObject, key) {
            return fn(newObject, key, object[key]);
        }, {});
    };
    var dateExpandPatternSimilarFieldsMap = objectInvert({
        e: "eEc",
        L: "ML"
    }, function(object, key, value) {
        value.split("").forEach(function(field) {
            object[field] = key;
        });
        return object;
    });
    var dateExpandPatternNormalizePatternType = function(character) {
        return dateExpandPatternSimilarFieldsMap[character] || character;
    };
    var datePatternRe = /([a-z])\1*|'([^']|'')+'|''|./gi;
    var stringRepeat = function(str, count) {
        var i, result = "";
        for (i = 0; i < count; i++) {
            result = result + str;
        }
        return result;
    };
    var dateExpandPatternAugmentFormat = function(requestedSkeleton, bestMatchFormat) {
        var i, j, matchedType, matchedLength, requestedType, requestedLength, normalizePatternType = dateExpandPatternNormalizePatternType;
        requestedSkeleton = requestedSkeleton.match(datePatternRe);
        bestMatchFormat = bestMatchFormat.match(datePatternRe);
        for (i = 0; i < bestMatchFormat.length; i++) {
            matchedType = bestMatchFormat[i].charAt(0);
            matchedLength = bestMatchFormat[i].length;
            for (j = 0; j < requestedSkeleton.length; j++) {
                requestedType = requestedSkeleton[j].charAt(0);
                requestedLength = requestedSkeleton[j].length;
                if (normalizePatternType(matchedType) === normalizePatternType(requestedType) && matchedLength < requestedLength) {
                    bestMatchFormat[i] = stringRepeat(matchedType, requestedLength);
                }
            }
        }
        return bestMatchFormat.join("");
    };
    var dateExpandPatternCompareFormats = function(formatA, formatB) {
        var a, b, distance, lenA, lenB, typeA, typeB, i, j, normalizePatternType = dateExpandPatternNormalizePatternType;
        if (formatA === formatB) {
            return 0;
        }
        formatA = formatA.match(datePatternRe);
        formatB = formatB.match(datePatternRe);
        if (formatA.length !== formatB.length) {
            return -1;
        }
        distance = 1;
        for (i = 0; i < formatA.length; i++) {
            a = formatA[i].charAt(0);
            typeA = normalizePatternType(a);
            typeB = null;
            for (j = 0; j < formatB.length; j++) {
                b = formatB[j].charAt(0);
                typeB = normalizePatternType(b);
                if (typeA === typeB) {
                    break;
                } else {
                    typeB = null;
                }
            }
            if (typeB === null) {
                return -1;
            }
            lenA = formatA[i].length;
            lenB = formatB[j].length;
            distance = distance + Math.abs(lenA - lenB);
            if (a !== b) {
                distance += 1;
            }
            if (lenA < 3 && lenB >= 3 || lenA >= 3 && lenB < 3) {
                distance += 20;
            }
        }
        return distance;
    };
    var dateExpandPatternGetBestMatchPattern = function(cldr, askedSkeleton) {
        var availableFormats, pattern, ratedFormats, skeleton, path = "dates/calendars/gregorian/dateTimeFormats/availableFormats", augmentFormat = dateExpandPatternAugmentFormat, compareFormats = dateExpandPatternCompareFormats;
        pattern = cldr.main([ path, askedSkeleton ]);
        if (askedSkeleton && !pattern) {
            availableFormats = cldr.main([ path ]);
            ratedFormats = [];
            for (skeleton in availableFormats) {
                ratedFormats.push({
                    skeleton: skeleton,
                    pattern: availableFormats[skeleton],
                    rate: compareFormats(askedSkeleton, skeleton)
                });
            }
            ratedFormats = ratedFormats.filter(function(format) {
                return format.rate > -1;
            }).sort(function(formatA, formatB) {
                return formatA.rate - formatB.rate;
            });
            if (ratedFormats.length) {
                pattern = augmentFormat(askedSkeleton, ratedFormats[0].pattern);
            }
        }
        return pattern;
    };
    var dateExpandPattern = function(options, cldr) {
        var dateSkeleton, result, skeleton, timeSkeleton, type, getBestMatchPattern = dateExpandPatternGetBestMatchPattern;
        function combineDateTime(type, datePattern, timePattern) {
            return formatMessage(cldr.main([ "dates/calendars/gregorian/dateTimeFormats", type ]), [ timePattern, datePattern ]);
        }
        switch (true) {
          case "skeleton" in options:
            skeleton = options.skeleton;
            skeleton = skeleton.replace(/j/g, function() {
                return cldr.supplemental.timeData.preferred();
            });
            validateSkeleton(skeleton);
            result = getBestMatchPattern(cldr, skeleton);
            if (result) {
                break;
            }
            timeSkeleton = skeleton.split(/[^hHKkmsSAzZOvVXx]/).slice(-1)[0];
            dateSkeleton = skeleton.split(/[^GyYuUrQqMLlwWdDFgEec]/)[0];
            dateSkeleton = getBestMatchPattern(cldr, dateSkeleton);
            timeSkeleton = getBestMatchPattern(cldr, timeSkeleton);
            if (/(MMMM|LLLL).*[Ec]/.test(dateSkeleton)) {
                type = "full";
            } else if (/MMMM|LLLL/.test(dateSkeleton)) {
                type = "long";
            } else if (/MMM|LLL/.test(dateSkeleton)) {
                type = "medium";
            } else {
                type = "short";
            }
            if (dateSkeleton && timeSkeleton) {
                result = combineDateTime(type, dateSkeleton, timeSkeleton);
            } else {
                result = dateSkeleton || timeSkeleton;
            }
            break;

          case "date" in options:
          case "time" in options:
            result = cldr.main([ "dates/calendars/gregorian", "date" in options ? "dateFormats" : "timeFormats", options.date || options.time ]);
            break;

          case "datetime" in options:
            result = combineDateTime(options.datetime, cldr.main([ "dates/calendars/gregorian/dateFormats", options.datetime ]), cldr.main([ "dates/calendars/gregorian/timeFormats", options.datetime ]));
            break;

          case "raw" in options:
            result = options.raw;
            break;

          default:
            throw createErrorInvalidParameterValue({
                name: "options",
                value: options
            });
        }
        return result;
    };
    var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];
    var dateFirstDayOfWeek = function(cldr) {
        return dateWeekDays.indexOf(cldr.supplemental.weekData.firstDay());
    };
    var dateGetTimeZoneName = function(length, type, timeZone, cldr) {
        var metaZone, result;
        if (!timeZone) {
            return;
        }
        result = cldr.main([ "dates/timeZoneNames/zone", timeZone, length < 4 ? "short" : "long", type ]);
        if (result) {
            return result;
        }
        metaZone = cldr.supplemental([ "metaZones/metazoneInfo/timezone", timeZone, 0, "usesMetazone/_mzone" ]);
        return cldr.main([ "dates/timeZoneNames/metazone", metaZone, length < 4 ? "short" : "long", type ]);
    };
    var dateTimezoneHourFormatH = function(hourFormat) {
        return hourFormat.split(";").map(function(format) {
            return format.slice(0, format.indexOf("H") + 1);
        }).join(";");
    };
    var dateTimezoneHourFormatHm = function(hourFormat, hFormat) {
        return hourFormat.split(";").map(function(format) {
            var parts = format.split(/H+/);
            parts.splice(1, 0, hFormat);
            return parts.join("");
        }).join(";");
    };
    var runtimeCacheDataBind = function(key, data) {
        var fn = function() {
            return data;
        };
        fn.dataCacheKey = key;
        return fn;
    };
    var dateFormatProperties = function(pattern, cldr, timeZone) {
        var properties = {
            numberFormatters: {},
            pattern: pattern,
            timeSeparator: numberSymbol("timeSeparator", cldr)
        }, widths = [ "abbreviated", "wide", "narrow" ];
        function setNumberFormatterPattern(pad) {
            properties.numberFormatters[pad] = stringPad("", pad);
        }
        if (timeZone) {
            properties.timeZoneData = runtimeCacheDataBind("iana/" + timeZone, {
                offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
                untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
                isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
            });
        }
        pattern.replace(datePatternRe, function(current) {
            var aux, chr, daylightTzName, formatNumber, genericTzName, length, standardTzName;
            chr = current.charAt(0);
            length = current.length;
            if (chr === "j") {
                properties.preferredTime = chr = cldr.supplemental.timeData.preferred();
            }
            if (chr === "Z" && length === 4) {
                chr = "O";
                length = 4;
            }
            if (chr === "z") {
                standardTzName = dateGetTimeZoneName(length, "standard", timeZone, cldr);
                daylightTzName = dateGetTimeZoneName(length, "daylight", timeZone, cldr);
                if (standardTzName) {
                    properties.standardTzName = standardTzName;
                }
                if (daylightTzName) {
                    properties.daylightTzName = daylightTzName;
                }
                if (!standardTzName || !daylightTzName) {
                    chr = "O";
                    if (length < 4) {
                        length = 1;
                    }
                }
            }
            if (chr === "v") {
                genericTzName = dateGetTimeZoneName(length, "generic", timeZone, cldr);
                if (!genericTzName) {
                    chr = "V";
                    length = 4;
                }
            }
            switch (chr) {
              case "G":
                properties.eras = cldr.main([ "dates/calendars/gregorian/eras", length <= 3 ? "eraAbbr" : length === 4 ? "eraNames" : "eraNarrow" ]);
                break;

              case "y":
                formatNumber = true;
                break;

              case "Y":
                properties.firstDay = dateFirstDayOfWeek(cldr);
                properties.minDays = cldr.supplemental.weekData.minDays();
                formatNumber = true;
                break;

              case "u":
              case "U":
                throw createErrorUnsupportedFeature({
                    feature: "year pattern `" + chr + "`"
                });

              case "Q":
              case "q":
                if (length > 2) {
                    if (!properties.quarters) {
                        properties.quarters = {};
                    }
                    if (!properties.quarters[chr]) {
                        properties.quarters[chr] = {};
                    }
                    properties.quarters[chr][length] = cldr.main([ "dates/calendars/gregorian/quarters", chr === "Q" ? "format" : "stand-alone", widths[length - 3] ]);
                } else {
                    formatNumber = true;
                }
                break;

              case "M":
              case "L":
                if (length > 2) {
                    if (!properties.months) {
                        properties.months = {};
                    }
                    if (!properties.months[chr]) {
                        properties.months[chr] = {};
                    }
                    properties.months[chr][length] = cldr.main([ "dates/calendars/gregorian/months", chr === "M" ? "format" : "stand-alone", widths[length - 3] ]);
                } else {
                    formatNumber = true;
                }
                break;

              case "w":
              case "W":
                properties.firstDay = dateFirstDayOfWeek(cldr);
                properties.minDays = cldr.supplemental.weekData.minDays();
                formatNumber = true;
                break;

              case "d":
              case "D":
              case "F":
                formatNumber = true;
                break;

              case "g":
                throw createErrorUnsupportedFeature({
                    feature: "Julian day pattern `g`"
                });

              case "e":
              case "c":
                if (length <= 2) {
                    properties.firstDay = dateFirstDayOfWeek(cldr);
                    formatNumber = true;
                    break;
                }

              case "E":
                if (!properties.days) {
                    properties.days = {};
                }
                if (!properties.days[chr]) {
                    properties.days[chr] = {};
                }
                if (length === 6) {
                    properties.days[chr][length] = cldr.main([ "dates/calendars/gregorian/days", chr === "c" ? "stand-alone" : "format", "short" ]) || cldr.main([ "dates/calendars/gregorian/days", chr === "c" ? "stand-alone" : "format", "abbreviated" ]);
                } else {
                    properties.days[chr][length] = cldr.main([ "dates/calendars/gregorian/days", chr === "c" ? "stand-alone" : "format", widths[length < 3 ? 0 : length - 3] ]);
                }
                break;

              case "a":
                properties.dayPeriods = {
                    am: cldr.main("dates/calendars/gregorian/dayPeriods/format/wide/am"),
                    pm: cldr.main("dates/calendars/gregorian/dayPeriods/format/wide/pm")
                };
                break;

              case "h":
              case "H":
              case "K":
              case "k":
              case "m":
              case "s":
              case "S":
              case "A":
                formatNumber = true;
                break;

              case "v":
                if (length !== 1 && length !== 4) {
                    throw createErrorUnsupportedFeature({
                        feature: "timezone pattern `" + pattern + "`"
                    });
                }
                properties.genericTzName = genericTzName;
                break;

              case "V":
                if (length === 1) {
                    throw createErrorUnsupportedFeature({
                        feature: "timezone pattern `" + pattern + "`"
                    });
                }
                if (timeZone) {
                    if (length === 2) {
                        properties.timeZoneName = timeZone;
                        break;
                    }
                    var timeZoneName, exemplarCity = cldr.main([ "dates/timeZoneNames/zone", timeZone, "exemplarCity" ]);
                    if (length === 3) {
                        if (!exemplarCity) {
                            exemplarCity = cldr.main([ "dates/timeZoneNames/zone/Etc/Unknown/exemplarCity" ]);
                        }
                        timeZoneName = exemplarCity;
                    }
                    if (exemplarCity && length === 4) {
                        timeZoneName = formatMessage(cldr.main("dates/timeZoneNames/regionFormat"), [ exemplarCity ]);
                    }
                    if (timeZoneName) {
                        properties.timeZoneName = timeZoneName;
                        break;
                    }
                }
                if (current === "v") {
                    length = 1;
                }

              case "O":
                properties.gmtFormat = cldr.main("dates/timeZoneNames/gmtFormat");
                properties.gmtZeroFormat = cldr.main("dates/timeZoneNames/gmtZeroFormat");
                aux = cldr.main("dates/timeZoneNames/hourFormat");
                properties.hourFormat = length < 4 ? [ dateTimezoneHourFormatH(aux), dateTimezoneHourFormatHm(aux, "H") ] : dateTimezoneHourFormatHm(aux, "HH");

              case "Z":
              case "X":
              case "x":
                setNumberFormatterPattern(1);
                setNumberFormatterPattern(2);
                break;
            }
            if (formatNumber) {
                setNumberFormatterPattern(length);
            }
        });
        return properties;
    };
    var dateFormatterFn = function(dateToPartsFormatter) {
        return function dateFormatter(value) {
            return dateToPartsFormatter(value).map(function(part) {
                return part.value;
            }).join("");
        };
    };
    var dateParseProperties = function(cldr, timeZone) {
        var properties = {
            preferredTimeData: cldr.supplemental.timeData.preferred()
        };
        if (timeZone) {
            properties.timeZoneData = runtimeCacheDataBind("iana/" + timeZone, {
                offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
                untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
                isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
            });
        }
        return properties;
    };
    var ZonedDateTime = function() {
        function definePrivateProperty(object, property, value) {
            Object.defineProperty(object, property, {
                value: value
            });
        }
        function getUntilsIndex(original, untils) {
            var index = 0;
            var originalTime = original.getTime();
            while (index < untils.length - 1 && originalTime >= untils[index]) {
                index++;
            }
            return index;
        }
        function setWrap(fn) {
            var offset1 = this.getTimezoneOffset();
            var ret = fn();
            this.original.setTime(new Date(this.getTime()));
            var offset2 = this.getTimezoneOffset();
            if (offset2 - offset1) {
                this.original.setMinutes(this.original.getMinutes() + offset2 - offset1);
            }
            return ret;
        }
        var ZonedDateTime = function(date, timeZoneData) {
            definePrivateProperty(this, "original", new Date(date.getTime()));
            definePrivateProperty(this, "local", new Date(date.getTime()));
            definePrivateProperty(this, "timeZoneData", timeZoneData);
            definePrivateProperty(this, "setWrap", setWrap);
            if (!(timeZoneData.untils && timeZoneData.offsets && timeZoneData.isdsts)) {
                throw new Error("Invalid IANA data");
            }
            this.setTime(this.local.getTime() - this.getTimezoneOffset() * 60 * 1e3);
        };
        ZonedDateTime.prototype.clone = function() {
            return new ZonedDateTime(this.original, this.timeZoneData);
        };
        [ "getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds" ].forEach(function(method) {
            var utcMethod = "getUTC" + method.substr(3);
            ZonedDateTime.prototype[method] = function() {
                return this.local[utcMethod]();
            };
        });
        ZonedDateTime.prototype.valueOf = ZonedDateTime.prototype.getTime = function() {
            return this.local.getTime() + this.getTimezoneOffset() * 60 * 1e3;
        };
        ZonedDateTime.prototype.getTimezoneOffset = function() {
            var index = getUntilsIndex(this.original, this.timeZoneData.untils);
            return this.timeZoneData.offsets[index];
        };
        [ "setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds" ].forEach(function(method) {
            var utcMethod = "setUTC" + method.substr(3);
            ZonedDateTime.prototype[method] = function(value) {
                var local = this.local;
                return this.setWrap(function() {
                    return local[utcMethod](value);
                });
            };
        });
        ZonedDateTime.prototype.setTime = function(time) {
            return this.local.setTime(time);
        };
        ZonedDateTime.prototype.isDST = function() {
            var index = getUntilsIndex(this.original, this.timeZoneData.untils);
            return Boolean(this.timeZoneData.isdsts[index]);
        };
        ZonedDateTime.prototype.inspect = function() {
            var index = getUntilsIndex(this.original, this.timeZoneData.untils);
            var abbrs = this.timeZoneData.abbrs;
            return this.local.toISOString().replace(/Z$/, "") + " " + (abbrs && abbrs[index] + " " || this.getTimezoneOffset() * -1 + " ") + (this.isDST() ? "(daylight savings)" : "");
        };
        ZonedDateTime.prototype.toDate = function() {
            return new Date(this.getTime());
        };
        [ "toISOString", "toJSON", "toUTCString" ].forEach(function(method) {
            ZonedDateTime.prototype[method] = function() {
                return this.toDate()[method]();
            };
        });
        return ZonedDateTime;
    }();
    var dateIsLeapYear = function(year) {
        return new Date(year, 1, 29).getMonth() === 1;
    };
    var dateLastDayOfMonth = function(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    var dateStartOf = function(date, unit) {
        date = date instanceof ZonedDateTime ? date.clone() : new Date(date.getTime());
        switch (unit) {
          case "year":
            date.setMonth(0);

          case "month":
            date.setDate(1);

          case "day":
            date.setHours(0);

          case "hour":
            date.setMinutes(0);

          case "minute":
            date.setSeconds(0);

          case "second":
            date.setMilliseconds(0);
        }
        return date;
    };
    var dateSetDate = function(date, day) {
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        date.setDate(day < 1 ? 1 : day < lastDay ? day : lastDay);
    };
    var dateSetMonth = function(date, month) {
        var originalDate = date.getDate();
        date.setDate(1);
        date.setMonth(month);
        dateSetDate(date, originalDate);
    };
    var outOfRange = function(value, low, high) {
        return value < low || value > high;
    };
    var dateParse = function(value, tokens, properties) {
        var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid, YEAR = 0, MONTH = 1, DAY = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECONDS = 6, date = new Date(), truncateAt = [], units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];
        if (properties.timeZoneData) {
            date = new ZonedDateTime(date, properties.timeZoneData());
        }
        if (!tokens.length) {
            return null;
        }
        valid = tokens.every(function(token) {
            var century, chr, value, length;
            if (token.type === "literal") {
                return true;
            }
            chr = token.type.charAt(0);
            length = token.type.length;
            if (chr === "j") {
                chr = properties.preferredTimeData;
            }
            switch (chr) {
              case "G":
                truncateAt.push(YEAR);
                era = +token.value;
                break;

              case "y":
                value = token.value;
                if (length === 2) {
                    if (outOfRange(value, 0, 99)) {
                        return false;
                    }
                    century = Math.floor(date.getFullYear() / 100) * 100;
                    value += century;
                    if (value > date.getFullYear() + 20) {
                        value -= 100;
                    }
                }
                date.setFullYear(value);
                truncateAt.push(YEAR);
                break;

              case "Y":
                throw createErrorUnsupportedFeature({
                    feature: "year pattern `" + chr + "`"
                });

              case "Q":
              case "q":
                break;

              case "M":
              case "L":
                if (length <= 2) {
                    value = token.value;
                } else {
                    value = +token.value;
                }
                if (outOfRange(value, 1, 12)) {
                    return false;
                }
                month = value;
                truncateAt.push(MONTH);
                break;

              case "w":
              case "W":
                break;

              case "d":
                day = token.value;
                truncateAt.push(DAY);
                break;

              case "D":
                daysOfYear = token.value;
                truncateAt.push(DAY);
                break;

              case "F":
                break;

              case "e":
              case "c":
              case "E":
                break;

              case "a":
                amPm = token.value;
                break;

              case "h":
                value = token.value;
                if (outOfRange(value, 1, 12)) {
                    return false;
                }
                hour = hour12 = true;
                date.setHours(value === 12 ? 0 : value);
                truncateAt.push(HOUR);
                break;

              case "K":
                value = token.value;
                if (outOfRange(value, 0, 11)) {
                    return false;
                }
                hour = hour12 = true;
                date.setHours(value);
                truncateAt.push(HOUR);
                break;

              case "k":
                value = token.value;
                if (outOfRange(value, 1, 24)) {
                    return false;
                }
                hour = true;
                date.setHours(value === 24 ? 0 : value);
                truncateAt.push(HOUR);
                break;

              case "H":
                value = token.value;
                if (outOfRange(value, 0, 23)) {
                    return false;
                }
                hour = true;
                date.setHours(value);
                truncateAt.push(HOUR);
                break;

              case "m":
                value = token.value;
                if (outOfRange(value, 0, 59)) {
                    return false;
                }
                date.setMinutes(value);
                truncateAt.push(MINUTE);
                break;

              case "s":
                value = token.value;
                if (outOfRange(value, 0, 59)) {
                    return false;
                }
                date.setSeconds(value);
                truncateAt.push(SECOND);
                break;

              case "A":
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);

              case "S":
                value = Math.round(token.value * Math.pow(10, 3 - length));
                date.setMilliseconds(value);
                truncateAt.push(MILLISECONDS);
                break;

              case "z":
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                if (typeof token.value === "number") {
                    timezoneOffset = token.value;
                }
                break;
            }
            return true;
        });
        if (!valid) {
            return null;
        }
        if (hour && !(!amPm ^ hour12)) {
            return null;
        }
        if (era === 0) {
            date.setFullYear(date.getFullYear() * -1 + 1);
        }
        if (month !== undefined) {
            dateSetMonth(date, month - 1);
        }
        if (day !== undefined) {
            if (outOfRange(day, 1, dateLastDayOfMonth(date))) {
                return null;
            }
            date.setDate(day);
        } else if (daysOfYear !== undefined) {
            if (outOfRange(daysOfYear, 1, dateIsLeapYear(date.getFullYear()) ? 366 : 365)) {
                return null;
            }
            date.setMonth(0);
            date.setDate(daysOfYear);
        }
        if (hour12 && amPm === "pm") {
            date.setHours(date.getHours() + 12);
        }
        if (timezoneOffset !== undefined) {
            date.setMinutes(date.getMinutes() + timezoneOffset - date.getTimezoneOffset());
        }
        truncateAt = Math.max.apply(null, truncateAt);
        date = dateStartOf(date, units[truncateAt]);
        if (date instanceof ZonedDateTime) {
            date = date.toDate();
        }
        return date;
    };
    var dateTokenizer = function(value, numberParser, properties) {
        var digitsRe, valid, tokens = [], widths = [ "abbreviated", "wide", "narrow" ];
        digitsRe = properties.digitsRe;
        value = looseMatching(value);
        valid = properties.pattern.match(datePatternRe).every(function(current) {
            var aux, chr, length, numeric, tokenRe, token = {};
            function hourFormatParse(tokenRe, numberParser) {
                var aux, isPositive, match = value.match(tokenRe);
                numberParser = numberParser || function(value) {
                    return +value;
                };
                if (!match) {
                    return false;
                }
                isPositive = match[1];
                if (match.length < 6) {
                    aux = isPositive ? 1 : 3;
                    token.value = numberParser(match[aux]) * 60;
                } else if (match.length < 10) {
                    aux = isPositive ? [ 1, 3 ] : [ 5, 7 ];
                    token.value = numberParser(match[aux[0]]) * 60 + numberParser(match[aux[1]]);
                } else {
                    aux = isPositive ? [ 1, 3, 5 ] : [ 7, 9, 11 ];
                    token.value = numberParser(match[aux[0]]) * 60 + numberParser(match[aux[1]]) + numberParser(match[aux[2]]) / 60;
                }
                if (isPositive) {
                    token.value *= -1;
                }
                return true;
            }
            function oneDigitIfLengthOne() {
                if (length === 1) {
                    numeric = true;
                    return tokenRe = digitsRe;
                }
            }
            function oneOrTwoDigitsIfLengthOne() {
                if (length === 1) {
                    numeric = true;
                    return tokenRe = new RegExp("^(" + digitsRe.source + "){1,2}");
                }
            }
            function oneOrTwoDigitsIfLengthOneOrTwo() {
                if (length === 1 || length === 2) {
                    numeric = true;
                    return tokenRe = new RegExp("^(" + digitsRe.source + "){1,2}");
                }
            }
            function twoDigitsIfLengthTwo() {
                if (length === 2) {
                    numeric = true;
                    return tokenRe = new RegExp("^(" + digitsRe.source + "){2}");
                }
            }
            function lookup(path) {
                var array = properties[path.join("/")];
                if (!array) {
                    return null;
                }
                array.some(function(item) {
                    var valueRe = item[1];
                    if (valueRe.test(value)) {
                        token.value = item[0];
                        tokenRe = item[1];
                        return true;
                    }
                });
                return null;
            }
            token.type = current;
            chr = current.charAt(0);
            length = current.length;
            if (chr === "Z") {
                if (length < 4) {
                    chr = "x";
                    length = 4;
                } else if (length < 5) {
                    chr = "O";
                    length = 4;
                } else {
                    chr = "X";
                    length = 5;
                }
            }
            if (chr === "z") {
                if (properties.standardOrDaylightTzName) {
                    token.value = null;
                    tokenRe = properties.standardOrDaylightTzName;
                }
            }
            if (chr === "v") {
                if (properties.genericTzName) {
                    token.value = null;
                    tokenRe = properties.genericTzName;
                } else {
                    chr = "V";
                    length = 4;
                }
            }
            if (chr === "V" && properties.timeZoneName) {
                token.value = length === 2 ? properties.timeZoneName : null;
                tokenRe = properties.timeZoneNameRe;
            }
            switch (chr) {
              case "G":
                lookup([ "gregorian/eras", length <= 3 ? "eraAbbr" : length === 4 ? "eraNames" : "eraNarrow" ]);
                break;

              case "y":
              case "Y":
                numeric = true;
                if (length === 1) {
                    tokenRe = new RegExp("^(" + digitsRe.source + ")+");
                } else if (length === 2) {
                    tokenRe = new RegExp("^(" + digitsRe.source + "){1,2}");
                } else {
                    tokenRe = new RegExp("^(" + digitsRe.source + "){" + length + ",}");
                }
                break;

              case "Q":
              case "q":
                oneDigitIfLengthOne() || twoDigitsIfLengthTwo() || lookup([ "gregorian/quarters", chr === "Q" ? "format" : "stand-alone", widths[length - 3] ]);
                break;

              case "M":
              case "L":
                oneOrTwoDigitsIfLengthOneOrTwo() || lookup([ "gregorian/months", chr === "M" ? "format" : "stand-alone", widths[length - 3] ]);
                break;

              case "D":
                if (length <= 3) {
                    numeric = true;
                    tokenRe = new RegExp("^(" + digitsRe.source + "){" + length + ",3}");
                }
                break;

              case "W":
              case "F":
                oneDigitIfLengthOne();
                break;

              case "e":
              case "c":
                if (length <= 2) {
                    oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
                    break;
                }

              case "E":
                if (length === 6) {
                    lookup([ "gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], "short" ]) || lookup([ "gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], "abbreviated" ]);
                } else {
                    lookup([ "gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], widths[length < 3 ? 0 : length - 3] ]);
                }
                break;

              case "a":
                lookup([ "gregorian/dayPeriods/format/wide" ]);
                break;

              case "w":
                oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
                break;

              case "d":
              case "h":
              case "H":
              case "K":
              case "k":
              case "j":
              case "m":
              case "s":
                oneOrTwoDigitsIfLengthOneOrTwo();
                break;

              case "S":
                numeric = true;
                tokenRe = new RegExp("^(" + digitsRe.source + "){" + length + "}");
                break;

              case "A":
                numeric = true;
                tokenRe = new RegExp("^(" + digitsRe.source + "){" + (length + 5) + "}");
                break;

              case "v":
              case "V":
              case "z":
                if (tokenRe && tokenRe.test(value)) {
                    break;
                }
                if (chr === "V" && length === 2) {
                    break;
                }

              case "O":
                if (value === properties["timeZoneNames/gmtZeroFormat"]) {
                    token.value = 0;
                    tokenRe = properties["timeZoneNames/gmtZeroFormatRe"];
                } else {
                    aux = properties["timeZoneNames/hourFormat"].some(function(hourFormatRe) {
                        if (hourFormatParse(hourFormatRe, numberParser)) {
                            tokenRe = hourFormatRe;
                            return true;
                        }
                    });
                    if (!aux) {
                        return null;
                    }
                }
                break;

              case "X":
                if (value === "Z") {
                    token.value = 0;
                    tokenRe = /^Z/;
                    break;
                }

              case "x":
                aux = properties.x.some(function(hourFormatRe) {
                    if (hourFormatParse(hourFormatRe)) {
                        tokenRe = hourFormatRe;
                        return true;
                    }
                });
                if (!aux) {
                    return null;
                }
                break;

              case "'":
                token.type = "literal";
                tokenRe = new RegExp("^" + regexpEscape(removeLiteralQuotes(current)));
                break;

              default:
                token.type = "literal";
                tokenRe = new RegExp("^" + regexpEscape(current));
            }
            if (!tokenRe) {
                return false;
            }
            value = value.replace(tokenRe, function(lexeme) {
                token.lexeme = lexeme;
                if (numeric) {
                    token.value = numberParser(lexeme);
                }
                return "";
            });
            if (!token.lexeme) {
                return false;
            }
            if (numeric && isNaN(token.value)) {
                return false;
            }
            tokens.push(token);
            return true;
        });
        if (value !== "") {
            valid = false;
        }
        return valid ? tokens : [];
    };
    var dateParserFn = function(numberParser, parseProperties, tokenizerProperties) {
        return function dateParser(value) {
            var tokens;
            validateParameterPresence(value, "value");
            validateParameterTypeString(value, "value");
            tokens = dateTokenizer(value, numberParser, tokenizerProperties);
            return dateParse(value, tokens, parseProperties) || null;
        };
    };
    var objectFilter = function(object, testRe) {
        var key, copy = {};
        for (key in object) {
            if (testRe.test(key)) {
                copy[key] = object[key];
            }
        }
        return copy;
    };
    var dateTokenizerProperties = function(pattern, cldr, timeZone) {
        var digitsReSource, properties = {
            pattern: looseMatching(pattern)
        }, timeSeparator = numberSymbol("timeSeparator", cldr), widths = [ "abbreviated", "wide", "narrow" ];
        digitsReSource = numberNumberingSystemDigitsMap(cldr);
        digitsReSource = digitsReSource ? "[" + digitsReSource + "]" : "\\d";
        properties.digitsRe = new RegExp(digitsReSource);
        function hourFormatRe(hourFormat, gmtFormat, digitsReSource, timeSeparator) {
            var re;
            if (!digitsReSource) {
                digitsReSource = "\\d";
            }
            if (!gmtFormat) {
                gmtFormat = "{0}";
            }
            re = hourFormat.replace("+", "\\+").replace(/HH|mm|ss/g, "((" + digitsReSource + "){2})").replace(/H|m/g, "((" + digitsReSource + "){1,2})");
            if (timeSeparator) {
                re = re.replace(/:/g, timeSeparator);
            }
            re = re.split(";").map(function(part) {
                return gmtFormat.replace("{0}", part);
            }).join("|");
            return new RegExp("^" + re);
        }
        function populateProperties(path, value) {
            var skipRe = /(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/;
            if (skipRe.test(path)) {
                return;
            }
            if (!value) {
                return;
            }
            path = path.replace(/^.*\/dates\//, "").replace(/calendars\//, "");
            if (path === "gregorian/dayPeriods/format/wide") {
                value = objectFilter(value, /^am|^pm/);
            }
            if (isPlainObject(value)) {
                value = Object.keys(value).map(function(key) {
                    return [ key, new RegExp("^" + regexpEscape(looseMatching(value[key]))) ];
                }).sort(function(a, b) {
                    return b[1].source.length - a[1].source.length;
                });
            } else {
                value = looseMatching(value);
            }
            properties[path] = value;
        }
        function regexpSourceSomeTerm(terms) {
            return "(" + terms.filter(function(item) {
                return item;
            }).reduce(function(memo, item) {
                return memo + "|" + item;
            }) + ")";
        }
        cldr.on("get", populateProperties);
        pattern.match(datePatternRe).forEach(function(current) {
            var aux, chr, daylightTzName, gmtFormat, length, standardTzName;
            chr = current.charAt(0);
            length = current.length;
            if (chr === "Z") {
                if (length < 5) {
                    chr = "O";
                    length = 4;
                } else {
                    chr = "X";
                    length = 5;
                }
            }
            if (chr === "z") {
                standardTzName = dateGetTimeZoneName(length, "standard", timeZone, cldr);
                daylightTzName = dateGetTimeZoneName(length, "daylight", timeZone, cldr);
                if (standardTzName) {
                    standardTzName = regexpEscape(looseMatching(standardTzName));
                }
                if (daylightTzName) {
                    daylightTzName = regexpEscape(looseMatching(daylightTzName));
                }
                if (standardTzName || daylightTzName) {
                    properties.standardOrDaylightTzName = new RegExp("^" + regexpSourceSomeTerm([ standardTzName, daylightTzName ]));
                }
                if (!standardTzName || !daylightTzName) {
                    chr = "O";
                    if (length < 4) {
                        length = 1;
                    }
                }
            }
            if (chr === "v") {
                if (length !== 1 && length !== 4) {
                    throw createErrorUnsupportedFeature({
                        feature: "timezone pattern `" + pattern + "`"
                    });
                }
                var genericTzName = dateGetTimeZoneName(length, "generic", timeZone, cldr);
                if (genericTzName) {
                    properties.genericTzName = new RegExp("^" + regexpEscape(looseMatching(genericTzName)));
                    chr = "O";
                } else {
                    chr = "V";
                    length = 4;
                }
            }
            switch (chr) {
              case "G":
                cldr.main([ "dates/calendars/gregorian/eras", length <= 3 ? "eraAbbr" : length === 4 ? "eraNames" : "eraNarrow" ]);
                break;

              case "u":
              case "U":
                throw createErrorUnsupportedFeature({
                    feature: "year pattern `" + chr + "`"
                });

              case "Q":
              case "q":
                if (length > 2) {
                    cldr.main([ "dates/calendars/gregorian/quarters", chr === "Q" ? "format" : "stand-alone", widths[length - 3] ]);
                }
                break;

              case "M":
              case "L":
                if (length > 2) {
                    cldr.main([ "dates/calendars/gregorian/months", chr === "M" ? "format" : "stand-alone", widths[length - 3] ]);
                }
                break;

              case "g":
                throw createErrorUnsupportedFeature({
                    feature: "Julian day pattern `g`"
                });

              case "e":
              case "c":
                if (length <= 2) {
                    break;
                }

              case "E":
                if (length === 6) {
                    cldr.main([ "dates/calendars/gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], "short" ]) || cldr.main([ "dates/calendars/gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], "abbreviated" ]);
                } else {
                    cldr.main([ "dates/calendars/gregorian/days", [ chr === "c" ? "stand-alone" : "format" ], widths[length < 3 ? 0 : length - 3] ]);
                }
                break;

              case "a":
                cldr.main("dates/calendars/gregorian/dayPeriods/format/wide");
                break;

              case "V":
                if (length === 1) {
                    throw createErrorUnsupportedFeature({
                        feature: "timezone pattern `" + pattern + "`"
                    });
                }
                if (timeZone) {
                    if (length === 2) {
                        properties.timeZoneName = timeZone;
                        properties.timeZoneNameRe = new RegExp("^" + regexpEscape(timeZone));
                        break;
                    }
                    var timeZoneName, exemplarCity = cldr.main([ "dates/timeZoneNames/zone", timeZone, "exemplarCity" ]);
                    if (length === 3) {
                        if (!exemplarCity) {
                            exemplarCity = cldr.main([ "dates/timeZoneNames/zone/Etc/Unknown/exemplarCity" ]);
                        }
                        timeZoneName = exemplarCity;
                    }
                    if (exemplarCity && length === 4) {
                        timeZoneName = formatMessage(cldr.main("dates/timeZoneNames/regionFormat"), [ exemplarCity ]);
                    }
                    if (timeZoneName) {
                        timeZoneName = looseMatching(timeZoneName);
                        properties.timeZoneName = timeZoneName;
                        properties.timeZoneNameRe = new RegExp("^" + regexpEscape(timeZoneName));
                    }
                }
                if (current === "v") {
                    length = 1;
                }

              case "z":
              case "O":
                gmtFormat = cldr.main("dates/timeZoneNames/gmtFormat");
                cldr.main("dates/timeZoneNames/gmtZeroFormat");
                cldr.main("dates/timeZoneNames/hourFormat");
                properties["timeZoneNames/gmtZeroFormatRe"] = new RegExp("^" + regexpEscape(properties["timeZoneNames/gmtZeroFormat"]));
                aux = properties["timeZoneNames/hourFormat"];
                properties["timeZoneNames/hourFormat"] = (length < 4 ? [ dateTimezoneHourFormatHm(aux, "H"), dateTimezoneHourFormatH(aux) ] : [ dateTimezoneHourFormatHm(aux, "HH") ]).map(function(hourFormat) {
                    return hourFormatRe(hourFormat, gmtFormat, digitsReSource, timeSeparator);
                });

              case "X":
              case "x":
                properties.x = [ [ "+HHmm;-HHmm", "+HH;-HH" ], [ "+HHmm;-HHmm" ], [ "+HH:mm;-HH:mm" ], [ "+HHmmss;-HHmmss", "+HHmm;-HHmm" ], [ "+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm" ] ][length - 1].map(function(hourFormat) {
                    return hourFormatRe(hourFormat);
                });
            }
        });
        cldr.off("get", populateProperties);
        return properties;
    };
    var dateDayOfWeek = function(date, firstDay) {
        return (date.getDay() - firstDay + 7) % 7;
    };
    var dateDistanceInDays = function(from, to) {
        var inDays = 864e5;
        return (to.getTime() - from.getTime()) / inDays;
    };
    var dateDayOfYear = function(date) {
        return Math.floor(dateDistanceInDays(dateStartOf(date, "year"), date));
    };
    var dateFieldsMap = objectInvert({
        era: "G",
        year: "yY",
        quarter: "qQ",
        month: "ML",
        week: "wW",
        day: "dDF",
        weekday: "ecE",
        dayperiod: "a",
        hour: "hHkK",
        minute: "m",
        second: "sSA",
        zone: "zvVOxX"
    }, function(object, key, value) {
        value.split("").forEach(function(symbol) {
            object[symbol] = key;
        });
        return object;
    });
    var dateMillisecondsInDay = function(date) {
        return date - dateStartOf(date, "day");
    };
    var dateTimezoneHourFormat = function(date, format, timeSeparator, formatNumber) {
        var absOffset, offset = date.getTimezoneOffset();
        absOffset = Math.abs(offset);
        formatNumber = formatNumber || {
            1: function(value) {
                return stringPad(value, 1);
            },
            2: function(value) {
                return stringPad(value, 2);
            }
        };
        return format.split(";")[offset > 0 ? 1 : 0].replace(":", timeSeparator).replace(/HH?/, function(match) {
            return formatNumber[match.length](Math.floor(absOffset / 60));
        }).replace(/mm/, function() {
            return formatNumber[2](Math.floor(absOffset % 60));
        }).replace(/ss/, function() {
            return formatNumber[2](Math.floor(absOffset % 1 * 60));
        });
    };
    var dateFormat = function(date, numberFormatters, properties) {
        var parts = [];
        var timeSeparator = properties.timeSeparator;
        if (properties.timeZoneData) {
            date = new ZonedDateTime(date, properties.timeZoneData());
        }
        properties.pattern.replace(datePatternRe, function(current) {
            var aux, dateField, type, value, chr = current.charAt(0), length = current.length;
            if (chr === "j") {
                chr = properties.preferredTime;
            }
            if (chr === "Z") {
                if (length < 4) {
                    chr = "x";
                    length = 4;
                } else if (length < 5) {
                    chr = "O";
                    length = 4;
                } else {
                    chr = "X";
                    length = 5;
                }
            }
            if (chr === "z") {
                if (date.isDST) {
                    value = date.isDST() ? properties.daylightTzName : properties.standardTzName;
                }
                if (!value) {
                    chr = "O";
                    if (length < 4) {
                        length = 1;
                    }
                }
            }
            switch (chr) {
              case "G":
                value = properties.eras[date.getFullYear() < 0 ? 0 : 1];
                break;

              case "y":
                value = date.getFullYear();
                if (length === 2) {
                    value = String(value);
                    value = +value.substr(value.length - 2);
                }
                break;

              case "Y":
                value = new Date(date.getTime());
                value.setDate(value.getDate() + 7 - dateDayOfWeek(date, properties.firstDay) - properties.firstDay - properties.minDays);
                value = value.getFullYear();
                if (length === 2) {
                    value = String(value);
                    value = +value.substr(value.length - 2);
                }
                break;

              case "Q":
              case "q":
                value = Math.ceil((date.getMonth() + 1) / 3);
                if (length > 2) {
                    value = properties.quarters[chr][length][value];
                }
                break;

              case "M":
              case "L":
                value = date.getMonth() + 1;
                if (length > 2) {
                    value = properties.months[chr][length][value];
                }
                break;

              case "w":
                value = dateDayOfWeek(dateStartOf(date, "year"), properties.firstDay);
                value = Math.ceil((dateDayOfYear(date) + value) / 7) - (7 - value >= properties.minDays ? 0 : 1);
                break;

              case "W":
                value = dateDayOfWeek(dateStartOf(date, "month"), properties.firstDay);
                value = Math.ceil((date.getDate() + value) / 7) - (7 - value >= properties.minDays ? 0 : 1);
                break;

              case "d":
                value = date.getDate();
                break;

              case "D":
                value = dateDayOfYear(date) + 1;
                break;

              case "F":
                value = Math.floor(date.getDate() / 7) + 1;
                break;

              case "e":
              case "c":
                if (length <= 2) {
                    value = dateDayOfWeek(date, properties.firstDay) + 1;
                    break;
                }

              case "E":
                value = dateWeekDays[date.getDay()];
                value = properties.days[chr][length][value];
                break;

              case "a":
                value = properties.dayPeriods[date.getHours() < 12 ? "am" : "pm"];
                break;

              case "h":
                value = date.getHours() % 12 || 12;
                break;

              case "H":
                value = date.getHours();
                break;

              case "K":
                value = date.getHours() % 12;
                break;

              case "k":
                value = date.getHours() || 24;
                break;

              case "m":
                value = date.getMinutes();
                break;

              case "s":
                value = date.getSeconds();
                break;

              case "S":
                value = Math.round(date.getMilliseconds() * Math.pow(10, length - 3));
                break;

              case "A":
                value = Math.round(dateMillisecondsInDay(date) * Math.pow(10, length - 3));
                break;

              case "z":
                break;

              case "v":
                if (properties.genericTzName) {
                    value = properties.genericTzName;
                    break;
                }

              case "V":
                if (properties.timeZoneName) {
                    value = properties.timeZoneName;
                    break;
                }
                if (current === "v") {
                    length = 1;
                }

              case "O":
                if (date.getTimezoneOffset() === 0) {
                    value = properties.gmtZeroFormat;
                } else {
                    if (length < 4) {
                        aux = date.getTimezoneOffset();
                        aux = properties.hourFormat[aux % 60 - aux % 1 === 0 ? 0 : 1];
                    } else {
                        aux = properties.hourFormat;
                    }
                    value = dateTimezoneHourFormat(date, aux, timeSeparator, numberFormatters);
                    value = properties.gmtFormat.replace(/\{0\}/, value);
                }
                break;

              case "X":
                if (date.getTimezoneOffset() === 0) {
                    value = "Z";
                    break;
                }

              case "x":
                aux = date.getTimezoneOffset();
                if (length === 1 && aux % 60 - aux % 1 !== 0) {
                    length += 1;
                }
                if ((length === 4 || length === 5) && aux % 1 === 0) {
                    length -= 2;
                }
                value = [ "+HH;-HH", "+HHmm;-HHmm", "+HH:mm;-HH:mm", "+HHmmss;-HHmmss", "+HH:mm:ss;-HH:mm:ss" ][length - 1];
                value = dateTimezoneHourFormat(date, value, ":");
                break;

              case ":":
                value = timeSeparator;
                break;

              case "'":
                value = removeLiteralQuotes(current);
                break;

              default:
                value = current;
            }
            if (typeof value === "number") {
                value = numberFormatters[length](value);
            }
            dateField = dateFieldsMap[chr];
            type = dateField ? dateField : "literal";
            if (type === "literal" && parts.length && parts[parts.length - 1].type === "literal") {
                parts[parts.length - 1].value += value;
                return;
            }
            parts.push({
                type: type,
                value: value
            });
        });
        return parts;
    };
    var dateToPartsFormatterFn = function(numberFormatters, properties) {
        return function dateToPartsFormatter(value) {
            validateParameterPresence(value, "value");
            validateParameterTypeDate(value, "value");
            return dateFormat(value, numberFormatters, properties);
        };
    };
    function optionsHasStyle(options) {
        return options.skeleton !== undefined || options.date !== undefined || options.time !== undefined || options.datetime !== undefined || options.raw !== undefined;
    }
    function validateRequiredCldr(path, value) {
        validateCldr(path, value, {
            skip: [ /dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/, /dates\/calendars\/gregorian\/days\/.*\/short/, /dates\/timeZoneNames\/zone/, /dates\/timeZoneNames\/metazone/, /globalize-iana/, /supplemental\/metaZones/, /supplemental\/timeData\/(?!001)/, /supplemental\/weekData\/(?!001)/ ]
        });
    }
    function validateOptionsPreset(options) {
        validateOptionsPresetEach("date", options);
        validateOptionsPresetEach("time", options);
        validateOptionsPresetEach("datetime", options);
    }
    function validateOptionsPresetEach(type, options) {
        var value = options[type];
        validate("E_INVALID_OPTIONS", 'Invalid `{{type}: "{value}"}`.', value === undefined || [ "short", "medium", "long", "full" ].indexOf(value) !== -1, {
            type: type,
            value: value
        });
    }
    function validateOptionsSkeleton(pattern, skeleton) {
        validate("E_INVALID_OPTIONS", 'Invalid `{skeleton: "{value}"}` based on provided CLDR.', skeleton === undefined || typeof pattern === "string" && pattern, {
            type: "skeleton",
            value: skeleton
        });
    }
    function validateRequiredIana(timeZone) {
        return function(path, value) {
            if (!/globalize-iana/.test(path)) {
                return;
            }
            validate("E_MISSING_IANA_TZ", "Missing required IANA timezone content for `{timeZone}`: `{path}`.", value, {
                path: path.replace(/globalize-iana\//, ""),
                timeZone: timeZone
            });
        };
    }
    Globalize.loadTimeZone = function(json) {
        var customData = {
            "globalize-iana": json
        };
        validateParameterPresence(json, "json");
        validateParameterTypePlainObject(json, "json");
        Cldr.load(customData);
    };
    Globalize.dateFormatter = Globalize.prototype.dateFormatter = function(options) {
        var args, dateToPartsFormatter, returnFn;
        validateParameterTypePlainObject(options, "options");
        options = options || {};
        if (!optionsHasStyle(options)) {
            options.skeleton = "yMd";
        }
        args = [ options ];
        dateToPartsFormatter = this.dateToPartsFormatter(options);
        returnFn = dateFormatterFn(dateToPartsFormatter);
        runtimeBind(args, this.cldr, returnFn, [ dateToPartsFormatter ]);
        return returnFn;
    };
    Globalize.dateToPartsFormatter = Globalize.prototype.dateToPartsFormatter = function(options) {
        var args, cldr, numberFormatters, pad, pattern, properties, returnFn, timeZone;
        validateParameterTypePlainObject(options, "options");
        cldr = this.cldr;
        options = options || {};
        if (!optionsHasStyle(options)) {
            options.skeleton = "yMd";
        }
        validateOptionsPreset(options);
        validateDefaultLocale(cldr);
        timeZone = options.timeZone;
        validateParameterTypeString(timeZone, "options.timeZone");
        args = [ options ];
        cldr.on("get", validateRequiredCldr);
        if (timeZone) {
            cldr.on("get", validateRequiredIana(timeZone));
        }
        pattern = dateExpandPattern(options, cldr);
        validateOptionsSkeleton(pattern, options.skeleton);
        properties = dateFormatProperties(pattern, cldr, timeZone);
        cldr.off("get", validateRequiredCldr);
        if (timeZone) {
            cldr.off("get", validateRequiredIana(timeZone));
        }
        numberFormatters = properties.numberFormatters;
        delete properties.numberFormatters;
        for (pad in numberFormatters) {
            numberFormatters[pad] = this.numberFormatter({
                raw: numberFormatters[pad]
            });
        }
        returnFn = dateToPartsFormatterFn(numberFormatters, properties);
        runtimeBind(args, cldr, returnFn, [ numberFormatters, properties ]);
        return returnFn;
    };
    Globalize.dateParser = Globalize.prototype.dateParser = function(options) {
        var args, cldr, numberParser, parseProperties, pattern, returnFn, timeZone, tokenizerProperties;
        validateParameterTypePlainObject(options, "options");
        cldr = this.cldr;
        options = options || {};
        if (!optionsHasStyle(options)) {
            options.skeleton = "yMd";
        }
        validateOptionsPreset(options);
        validateDefaultLocale(cldr);
        timeZone = options.timeZone;
        validateParameterTypeString(timeZone, "options.timeZone");
        args = [ options ];
        cldr.on("get", validateRequiredCldr);
        if (timeZone) {
            cldr.on("get", validateRequiredIana(timeZone));
        }
        pattern = dateExpandPattern(options, cldr);
        validateOptionsSkeleton(pattern, options.skeleton);
        tokenizerProperties = dateTokenizerProperties(pattern, cldr, timeZone);
        parseProperties = dateParseProperties(cldr, timeZone);
        cldr.off("get", validateRequiredCldr);
        if (timeZone) {
            cldr.off("get", validateRequiredIana(timeZone));
        }
        numberParser = this.numberParser({
            raw: "0"
        });
        returnFn = dateParserFn(numberParser, parseProperties, tokenizerProperties);
        runtimeBind(args, cldr, returnFn, [ numberParser, parseProperties, tokenizerProperties ]);
        return returnFn;
    };
    Globalize.formatDate = Globalize.prototype.formatDate = function(value, options) {
        validateParameterPresence(value, "value");
        validateParameterTypeDate(value, "value");
        return this.dateFormatter(options)(value);
    };
    Globalize.formatDateToParts = Globalize.prototype.formatDateToParts = function(value, options) {
        validateParameterPresence(value, "value");
        validateParameterTypeDate(value, "value");
        return this.dateToPartsFormatter(options)(value);
    };
    Globalize.parseDate = Globalize.prototype.parseDate = function(value, options) {
        validateParameterPresence(value, "value");
        validateParameterTypeString(value, "value");
        return this.dateParser(options)(value);
    };
    return Globalize;
});

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function() {
    var tag2attr = {
        a: "href",
        img: "src",
        form: "action",
        base: "href",
        script: "src",
        iframe: "src",
        link: "href",
        embed: "src",
        object: "data"
    }, key = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], aliases = {
        anchor: "fragment"
    }, parser = {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }, isint = /^[0-9]+$/;
    function parseUri(url, strictMode) {
        var str = decodeURI(url), res = parser[strictMode || false ? "strict" : "loose"].exec(str), uri = {
            attr: {},
            param: {},
            seg: {}
        }, i = 14;
        while (i--) {
            uri.attr[key[i]] = res[i] || "";
        }
        uri.param["query"] = parseString(uri.attr["query"]);
        uri.param["fragment"] = parseString(uri.attr["fragment"]);
        uri.seg["path"] = uri.attr.path.replace(/^\/+|\/+$/g, "").split("/");
        uri.seg["fragment"] = uri.attr.fragment.replace(/^\/+|\/+$/g, "").split("/");
        uri.attr["base"] = uri.attr.host ? (uri.attr.protocol ? uri.attr.protocol + "://" + uri.attr.host : uri.attr.host) + (uri.attr.port ? ":" + uri.attr.port : "") : "";
        return uri;
    }
    function getAttrName(elm) {
        var tn = elm.tagName;
        if (typeof tn !== "undefined") return tag2attr[tn.toLowerCase()];
        return tn;
    }
    function promote(parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }
    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ("object" == typeof parent[key]) {
                parent[key] = val;
            } else if ("undefined" == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [ parent[key], val ];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if ("]" == part) {
                if (isArray(obj)) {
                    if ("" !== val) obj.push(val);
                } else if ("object" == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [ parent[key], val ];
                }
            } else if (~part.indexOf("]")) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }
    function merge(parent, key, val) {
        if (~key.indexOf("]")) {
            var parts = key.split("[");
            parse(parts, parent, "base", val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== "") {
                set(parent.base, key, val);
            }
        }
        return parent;
    }
    function parseString(str) {
        return reduce(String(str).split(/&|;/), function(ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, " "));
            } catch (e) {}
            var eql = pair.indexOf("="), brace = lastBraceInKey(pair), key = pair.substr(0, brace || eql), val = pair.substr(brace || eql, pair.length);
            val = val.substr(val.indexOf("=") + 1, val.length);
            if (key === "") {
                key = pair;
                val = "";
            }
            return merge(ret, key, val);
        }, {
            base: {}
        }).base;
    }
    function set(obj, key, val) {
        var v = obj[key];
        if (typeof v === "undefined") {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [ v, val ];
        }
    }
    function lastBraceInKey(str) {
        var len = str.length, brace, c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if ("]" == c) brace = false;
            if ("[" == c) brace = true;
            if ("=" == c && !brace) return i;
        }
    }
    function reduce(obj, accumulator) {
        var i = 0, l = obj.length >> 0, curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }
    function isArray(vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }
    function keys(obj) {
        var key_array = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) key_array.push(prop);
        }
        return key_array;
    }
    function purl(url, strictMode) {
        if (arguments.length === 1 && url === true) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();
        return {
            data: parseUri(url, strictMode),
            attr: function(attr) {
                attr = aliases[attr] || attr;
                return typeof attr !== "undefined" ? this.data.attr[attr] : this.data.attr;
            },
            param: function(param) {
                return typeof param !== "undefined" ? this.data.param.query[param] : this.data.param.query;
            },
            fparam: function(param) {
                return typeof param !== "undefined" ? this.data.param.fragment[param] : this.data.param.fragment;
            },
            segment: function(seg) {
                if (typeof seg === "undefined") {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1;
                    return this.data.seg.path[seg];
                }
            },
            fsegment: function(seg) {
                if (typeof seg === "undefined") {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1;
                    return this.data.seg.fragment[seg];
                }
            }
        };
    }
    purl.jQuery = function($) {
        if ($ != null) {
            $.fn.url = function(strictMode) {
                var url = "";
                if (this.length) {
                    url = $(this).attr(getAttrName(this[0])) || "";
                }
                return purl(url, strictMode);
            };
            $.url = purl;
        }
    };
    purl.jQuery(window.jQuery);
    return purl;
});
//# sourceMappingURL=libs-main.js.map