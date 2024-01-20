// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/mermaid-d06ecb0d.js
function ah(t9) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t9 == "string" ? [t9] : t9);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(u) {
      var f, c;
      return (c = (f = u.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && c !== void 0 ? c : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), u = h ? h[1] : "", f = a;
    typeof a == "string" && a.includes(`
`) && (f = String(a).split(`
`).map(function(c, p) {
      return p === 0 ? c : "" + u + c;
    }).join(`
`)), s += f + r[l + 1];
  }), s;
}
var lh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hh(t9) {
  return t9 && t9.__esModule && Object.prototype.hasOwnProperty.call(t9, "default") ? t9.default : t9;
}
var Es = { exports: {} };
(function(t9, e) {
  (function(i, r) {
    t9.exports = r();
  })(lh, function() {
    var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", h = "day", u = "week", f = "month", c = "quarter", p = "year", y = "date", v = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var k = ["th", "st", "nd", "rd"], C = E % 100;
      return "[" + E + (k[(C - 20) % 10] || k[C] || k[0]) + "]";
    } }, z = function(E, k, C) {
      var O = String(E);
      return !O || O.length >= k ? E : "" + Array(k + 1 - O.length).join(C) + E;
    }, Q = { s: z, z: function(E) {
      var k = -E.utcOffset(), C = Math.abs(k), O = Math.floor(C / 60), x = C % 60;
      return (k <= 0 ? "+" : "-") + z(O, 2, "0") + ":" + z(x, 2, "0");
    }, m: function E(k, C) {
      if (k.date() < C.date())
        return -E(C, k);
      var O = 12 * (C.year() - k.year()) + (C.month() - k.month()), x = k.clone().add(O, f), D = C - x < 0, T = k.clone().add(O + (D ? -1 : 1), f);
      return +(-(O + (C - x) / (D ? x - T : T - x)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: f, y: p, w: u, d: h, D: y, h: l, m: a, s, ms: o, Q: c }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, X = "en", G = {};
    G[X] = S;
    var W = function(E) {
      return E instanceof Nt;
    }, Xt = function E(k, C, O) {
      var x;
      if (!k)
        return X;
      if (typeof k == "string") {
        var D = k.toLowerCase();
        G[D] && (x = D), C && (G[D] = C, x = D);
        var T = k.split("-");
        if (!x && T.length > 1)
          return E(T[0]);
      } else {
        var H = k.name;
        G[H] = k, x = H;
      }
      return !O && x && (X = x), x || !O && X;
    }, K = function(E, k) {
      if (W(E))
        return E.clone();
      var C = typeof k == "object" ? k : {};
      return C.date = E, C.args = arguments, new Nt(C);
    }, I = Q;
    I.l = Xt, I.i = W, I.w = function(E, k) {
      return K(E, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
    };
    var Nt = function() {
      function E(C) {
        this.$L = Xt(C.locale, null, true), this.parse(C);
      }
      var k = E.prototype;
      return k.parse = function(C) {
        this.$d = function(O) {
          var x = O.date, D = O.utc;
          if (x === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(x))
            return /* @__PURE__ */ new Date();
          if (x instanceof Date)
            return new Date(x);
          if (typeof x == "string" && !/Z$/i.test(x)) {
            var T = x.match(M);
            if (T) {
              var H = T[2] - 1 || 0, R = (T[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R)) : new Date(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R);
            }
          }
          return new Date(x);
        }(C), this.$x = C.x || {}, this.init();
      }, k.init = function() {
        var C = this.$d;
        this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
      }, k.$utils = function() {
        return I;
      }, k.isValid = function() {
        return this.$d.toString() !== v;
      }, k.isSame = function(C, O) {
        var x = K(C);
        return this.startOf(O) <= x && x <= this.endOf(O);
      }, k.isAfter = function(C, O) {
        return K(C) < this.startOf(O);
      }, k.isBefore = function(C, O) {
        return this.endOf(O) < K(C);
      }, k.$g = function(C, O, x) {
        return I.u(C) ? this[O] : this.set(x, C);
      }, k.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, k.valueOf = function() {
        return this.$d.getTime();
      }, k.startOf = function(C, O) {
        var x = this, D = !!I.u(O) || O, T = I.p(C), H = function(Pt, it) {
          var st = I.w(x.$u ? Date.UTC(x.$y, it, Pt) : new Date(x.$y, it, Pt), x);
          return D ? st : st.endOf(h);
        }, R = function(Pt, it) {
          return I.w(x.toDate()[Pt].apply(x.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(it)), x);
        }, U = this.$W, P = this.$M, ct = this.$D, pt = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case p:
            return D ? H(1, 0) : H(31, 11);
          case f:
            return D ? H(1, P) : H(0, P + 1);
          case u:
            var Kt = this.$locale().weekStart || 0, Rt = (U < Kt ? U + 7 : U) - Kt;
            return H(D ? ct - Rt : ct + (6 - Rt), P);
          case h:
          case y:
            return R(pt + "Hours", 0);
          case l:
            return R(pt + "Minutes", 1);
          case a:
            return R(pt + "Seconds", 2);
          case s:
            return R(pt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, k.endOf = function(C) {
        return this.startOf(C, false);
      }, k.$set = function(C, O) {
        var x, D = I.p(C), T = "set" + (this.$u ? "UTC" : ""), H = (x = {}, x[h] = T + "Date", x[y] = T + "Date", x[f] = T + "Month", x[p] = T + "FullYear", x[l] = T + "Hours", x[a] = T + "Minutes", x[s] = T + "Seconds", x[o] = T + "Milliseconds", x)[D], R = D === h ? this.$D + (O - this.$W) : O;
        if (D === f || D === p) {
          var U = this.clone().set(y, 1);
          U.$d[H](R), U.init(), this.$d = U.set(y, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          H && this.$d[H](R);
        return this.init(), this;
      }, k.set = function(C, O) {
        return this.clone().$set(C, O);
      }, k.get = function(C) {
        return this[I.p(C)]();
      }, k.add = function(C, O) {
        var x, D = this;
        C = Number(C);
        var T = I.p(O), H = function(P) {
          var ct = K(D);
          return I.w(ct.date(ct.date() + Math.round(P * C)), D);
        };
        if (T === f)
          return this.set(f, this.$M + C);
        if (T === p)
          return this.set(p, this.$y + C);
        if (T === h)
          return H(1);
        if (T === u)
          return H(7);
        var R = (x = {}, x[a] = r, x[l] = n, x[s] = i, x)[T] || 1, U = this.$d.getTime() + C * R;
        return I.w(U, this);
      }, k.subtract = function(C, O) {
        return this.add(-1 * C, O);
      }, k.format = function(C) {
        var O = this, x = this.$locale();
        if (!this.isValid())
          return x.invalidDate || v;
        var D = C || "YYYY-MM-DDTHH:mm:ssZ", T = I.z(this), H = this.$H, R = this.$m, U = this.$M, P = x.weekdays, ct = x.months, pt = function(it, st, kt, Zt) {
          return it && (it[st] || it(O, D)) || kt[st].slice(0, Zt);
        }, Kt = function(it) {
          return I.s(H % 12 || 12, it, "0");
        }, Rt = x.meridiem || function(it, st, kt) {
          var Zt = it < 12 ? "AM" : "PM";
          return kt ? Zt.toLowerCase() : Zt;
        }, Pt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: I.s(U + 1, 2, "0"), MMM: pt(x.monthsShort, U, ct, 3), MMMM: pt(ct, U), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: pt(x.weekdaysMin, this.$W, P, 2), ddd: pt(x.weekdaysShort, this.$W, P, 3), dddd: P[this.$W], H: String(H), HH: I.s(H, 2, "0"), h: Kt(1), hh: Kt(2), a: Rt(H, R, true), A: Rt(H, R, false), m: String(R), mm: I.s(R, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: T };
        return D.replace(q, function(it, st) {
          return st || Pt[it] || T.replace(":", "");
        });
      }, k.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, k.diff = function(C, O, x) {
        var D, T = I.p(O), H = K(C), R = (H.utcOffset() - this.utcOffset()) * r, U = this - H, P = I.m(this, H);
        return P = (D = {}, D[p] = P / 12, D[f] = P, D[c] = P / 3, D[u] = (U - R) / 6048e5, D[h] = (U - R) / 864e5, D[l] = U / n, D[a] = U / r, D[s] = U / i, D)[T] || U, x ? P : I.a(P);
      }, k.daysInMonth = function() {
        return this.endOf(f).$D;
      }, k.$locale = function() {
        return G[this.$L];
      }, k.locale = function(C, O) {
        if (!C)
          return this.$L;
        var x = this.clone(), D = Xt(C, O, true);
        return D && (x.$L = D), x;
      }, k.clone = function() {
        return I.w(this.$d, this);
      }, k.toDate = function() {
        return new Date(this.valueOf());
      }, k.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, k.toISOString = function() {
        return this.$d.toISOString();
      }, k.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), At = Nt.prototype;
    return K.prototype = At, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", h], ["$M", f], ["$y", p], ["$D", y]].forEach(function(E) {
      At[E[1]] = function(k) {
        return this.$g(k, E[0], E[1]);
      };
    }), K.extend = function(E, k) {
      return E.$i || (E(k, Nt, K), E.$i = true), K;
    }, K.locale = Xt, K.isDayjs = W, K.unix = function(E) {
      return K(1e3 * E);
    }, K.en = G[X], K.Ls = G, K.p = {}, K;
  });
})(Es);
var ch = Es.exports;
var uh = hh(ch);
var Wt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var A = {
  trace: (...t9) => {
  },
  debug: (...t9) => {
  },
  info: (...t9) => {
  },
  warn: (...t9) => {
  },
  error: (...t9) => {
  },
  fatal: (...t9) => {
  }
};
var bn = function(t9 = "fatal") {
  let e = Wt.fatal;
  typeof t9 == "string" ? (t9 = t9.toLowerCase(), t9 in Wt && (e = Wt[t9])) : typeof t9 == "number" && (e = t9), A.trace = () => {
  }, A.debug = () => {
  }, A.info = () => {
  }, A.warn = () => {
  }, A.error = () => {
  }, A.fatal = () => {
  }, e <= Wt.fatal && (A.fatal = console.error ? console.error.bind(console, _t("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", _t("FATAL"))), e <= Wt.error && (A.error = console.error ? console.error.bind(console, _t("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", _t("ERROR"))), e <= Wt.warn && (A.warn = console.warn ? console.warn.bind(console, _t("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", _t("WARN"))), e <= Wt.info && (A.info = console.info ? console.info.bind(console, _t("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", _t("INFO"))), e <= Wt.debug && (A.debug = console.debug ? console.debug.bind(console, _t("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", _t("DEBUG"))), e <= Wt.trace && (A.trace = console.debug ? console.debug.bind(console, _t("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", _t("TRACE")));
};
var _t = (t9) => `%c${uh().format("ss.SSS")} : ${t9} : `;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: true });
var Ms = Tn.sanitizeUrl = void 0;
var fh = /^([^\w]*)(javascript|data|vbscript)/im;
var dh = /&#(\w+)(^\w|;)?/g;
var ph = /&(newline|tab);/gi;
var gh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var mh = /^.+(:|&colon;)/gim;
var yh = [".", "/"];
function _h(t9) {
  return yh.indexOf(t9[0]) > -1;
}
function Ch(t9) {
  return t9.replace(dh, function(e, i) {
    return String.fromCharCode(i);
  });
}
function xh(t9) {
  var e = Ch(t9 || "").replace(ph, "").replace(gh, "").trim();
  if (!e)
    return "about:blank";
  if (_h(e))
    return e;
  var i = e.match(mh);
  if (!i)
    return e;
  var r = i[0];
  return fh.test(r) ? "about:blank" : e;
}
Ms = Tn.sanitizeUrl = xh;
var bh = { value: () => {
} };
function Os() {
  for (var t9 = 0, e = arguments.length, i = {}, r; t9 < e; ++t9) {
    if (!(r = arguments[t9] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Fi(i);
}
function Fi(t9) {
  this._ = t9;
}
function Th(t9, e) {
  return t9.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Fi.prototype = Os.prototype = {
  constructor: Fi,
  on: function(t9, e) {
    var i = this._, r = Th(t9 + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t9 = r[o]).type) && (n = kh(i[n], t9.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t9 = r[o]).type)
        i[n] = Co(i[n], t9.name, e);
      else if (e == null)
        for (n in i)
          i[n] = Co(i[n], t9.name, null);
    return this;
  },
  copy: function() {
    var t9 = {}, e = this._;
    for (var i in e)
      t9[i] = e[i].slice();
    return new Fi(t9);
  },
  call: function(t9, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (o = this._[t9], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t9, e, i) {
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (var r = this._[t9], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function kh(t9, e) {
  for (var i = 0, r = t9.length, n; i < r; ++i)
    if ((n = t9[i]).name === e)
      return n.value;
}
function Co(t9, e, i) {
  for (var r = 0, n = t9.length; r < n; ++r)
    if (t9[r].name === e) {
      t9[r] = bh, t9 = t9.slice(0, r).concat(t9.slice(r + 1));
      break;
    }
  return i != null && t9.push({ name: e, value: i }), t9;
}
var Zr = "http://www.w3.org/1999/xhtml";
var xo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ar(t9) {
  var e = t9 += "", i = e.indexOf(":");
  return i >= 0 && (e = t9.slice(0, i)) !== "xmlns" && (t9 = t9.slice(i + 1)), xo.hasOwnProperty(e) ? { space: xo[e], local: t9 } : t9;
}
function Sh(t9) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === Zr && e.documentElement.namespaceURI === Zr ? e.createElement(t9) : e.createElementNS(i, t9);
  };
}
function vh(t9) {
  return function() {
    return this.ownerDocument.createElementNS(t9.space, t9.local);
  };
}
function $s(t9) {
  var e = ar(t9);
  return (e.local ? vh : Sh)(e);
}
function wh() {
}
function kn(t9) {
  return t9 == null ? wh : function() {
    return this.querySelector(t9);
  };
}
function Bh(t9) {
  typeof t9 != "function" && (t9 = kn(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, u = 0; u < s; ++u)
      (l = o[u]) && (h = t9.call(l, l.__data__, u, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[u] = h);
  return new mt(r, this._parents);
}
function Fh(t9) {
  return t9 == null ? [] : Array.isArray(t9) ? t9 : Array.from(t9);
}
function Ah() {
  return [];
}
function Is(t9) {
  return t9 == null ? Ah : function() {
    return this.querySelectorAll(t9);
  };
}
function Lh(t9) {
  return function() {
    return Fh(t9.apply(this, arguments));
  };
}
function Eh(t9) {
  typeof t9 == "function" ? t9 = Lh(t9) : t9 = Is(t9);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t9.call(l, l.__data__, h, s)), n.push(l));
  return new mt(r, n);
}
function Ds(t9) {
  return function() {
    return this.matches(t9);
  };
}
function Ns(t9) {
  return function(e) {
    return e.matches(t9);
  };
}
var Mh = Array.prototype.find;
function Oh(t9) {
  return function() {
    return Mh.call(this.children, t9);
  };
}
function $h() {
  return this.firstElementChild;
}
function Ih(t9) {
  return this.select(t9 == null ? $h : Oh(typeof t9 == "function" ? t9 : Ns(t9)));
}
var Dh = Array.prototype.filter;
function Nh() {
  return Array.from(this.children);
}
function Rh(t9) {
  return function() {
    return Dh.call(this.children, t9);
  };
}
function Ph(t9) {
  return this.selectAll(t9 == null ? Nh : Rh(typeof t9 == "function" ? t9 : Ns(t9)));
}
function qh(t9) {
  typeof t9 != "function" && (t9 = Ds(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new mt(r, this._parents);
}
function Rs(t9) {
  return new Array(t9.length);
}
function zh() {
  return new mt(this._enter || this._groups.map(Rs), this._parents);
}
function Ri(t9, e) {
  this.ownerDocument = t9.ownerDocument, this.namespaceURI = t9.namespaceURI, this._next = null, this._parent = t9, this.__data__ = e;
}
Ri.prototype = {
  constructor: Ri,
  appendChild: function(t9) {
    return this._parent.insertBefore(t9, this._next);
  },
  insertBefore: function(t9, e) {
    return this._parent.insertBefore(t9, e);
  },
  querySelector: function(t9) {
    return this._parent.querySelector(t9);
  },
  querySelectorAll: function(t9) {
    return this._parent.querySelectorAll(t9);
  }
};
function Wh(t9) {
  return function() {
    return t9;
  };
}
function Hh(t9, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new Ri(t9, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function jh(t9, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), u = e.length, f = o.length, c = new Array(u), p;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (c[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < f; ++a)
    p = s.call(t9, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new Ri(t9, o[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && h.get(c[a]) === l && (n[a] = l);
}
function Uh(t9) {
  return t9.__data__;
}
function Yh(t9, e) {
  if (!arguments.length)
    return Array.from(this, Uh);
  var i = e ? jh : Hh, r = this._parents, n = this._groups;
  typeof t9 != "function" && (t9 = Wh(t9));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var u = r[h], f = n[h], c = f.length, p = Gh(t9.call(u, u && u.__data__, h, r)), y = p.length, v = a[h] = new Array(y), M = s[h] = new Array(y), q = l[h] = new Array(c);
    i(u, f, v, M, q, p, e);
    for (var S = 0, z = 0, Q, X; S < y; ++S)
      if (Q = v[S]) {
        for (S >= z && (z = S + 1); !(X = M[z]) && ++z < y; )
          ;
        Q._next = X || null;
      }
  }
  return s = new mt(s, r), s._enter = a, s._exit = l, s;
}
function Gh(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
function Vh() {
  return new mt(this._exit || this._groups.map(Rs), this._parents);
}
function Xh(t9, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t9 == "function" ? (r = t9(r), r && (r = r.selection())) : r = r.append(t9 + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function Kh(t9) {
  for (var e = t9.selection ? t9.selection() : t9, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], u = r[l], f = h.length, c = a[l] = new Array(f), p, y = 0; y < f; ++y)
      (p = h[y] || u[y]) && (c[y] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new mt(a, this._parents);
}
function Zh() {
  for (var t9 = this._groups, e = -1, i = t9.length; ++e < i; )
    for (var r = t9[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Jh(t9) {
  t9 || (t9 = Qh);
  function e(f, c) {
    return f && c ? t9(f.__data__, c.__data__) : !f - !c;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, u = 0; u < a; ++u)
      (h = s[u]) && (l[u] = h);
    l.sort(e);
  }
  return new mt(n, this._parents).order();
}
function Qh(t9, e) {
  return t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
function tc() {
  var t9 = arguments[0];
  return arguments[0] = this, t9.apply(null, arguments), this;
}
function ec() {
  return Array.from(this);
}
function ic() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function rc() {
  let t9 = 0;
  for (const e of this)
    ++t9;
  return t9;
}
function nc() {
  return !this.node();
}
function oc(t9) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t9.call(a, a.__data__, o, n);
  return this;
}
function sc(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function ac(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function lc(t9, e) {
  return function() {
    this.setAttribute(t9, e);
  };
}
function hc(t9, e) {
  return function() {
    this.setAttributeNS(t9.space, t9.local, e);
  };
}
function cc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t9) : this.setAttribute(t9, i);
  };
}
function uc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t9.space, t9.local) : this.setAttributeNS(t9.space, t9.local, i);
  };
}
function fc(t9, e) {
  var i = ar(t9);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? ac : sc : typeof e == "function" ? i.local ? uc : cc : i.local ? hc : lc)(i, e));
}
function Ps(t9) {
  return t9.ownerDocument && t9.ownerDocument.defaultView || t9.document && t9 || t9.defaultView;
}
function dc(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function pc(t9, e, i) {
  return function() {
    this.style.setProperty(t9, e, i);
  };
}
function gc(t9, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t9) : this.style.setProperty(t9, r, i);
  };
}
function mc(t9, e, i) {
  return arguments.length > 1 ? this.each((e == null ? dc : typeof e == "function" ? gc : pc)(t9, e, i ?? "")) : Fe(this.node(), t9);
}
function Fe(t9, e) {
  return t9.style.getPropertyValue(e) || Ps(t9).getComputedStyle(t9, null).getPropertyValue(e);
}
function yc(t9) {
  return function() {
    delete this[t9];
  };
}
function _c(t9, e) {
  return function() {
    this[t9] = e;
  };
}
function Cc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t9] : this[t9] = i;
  };
}
function xc(t9, e) {
  return arguments.length > 1 ? this.each((e == null ? yc : typeof e == "function" ? Cc : _c)(t9, e)) : this.node()[t9];
}
function qs(t9) {
  return t9.trim().split(/^|\s+/);
}
function Sn(t9) {
  return t9.classList || new zs(t9);
}
function zs(t9) {
  this._node = t9, this._names = qs(t9.getAttribute("class") || "");
}
zs.prototype = {
  add: function(t9) {
    var e = this._names.indexOf(t9);
    e < 0 && (this._names.push(t9), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t9) {
    var e = this._names.indexOf(t9);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t9) {
    return this._names.indexOf(t9) >= 0;
  }
};
function Ws(t9, e) {
  for (var i = Sn(t9), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function Hs(t9, e) {
  for (var i = Sn(t9), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function bc(t9) {
  return function() {
    Ws(this, t9);
  };
}
function Tc(t9) {
  return function() {
    Hs(this, t9);
  };
}
function kc(t9, e) {
  return function() {
    (e.apply(this, arguments) ? Ws : Hs)(this, t9);
  };
}
function Sc(t9, e) {
  var i = qs(t9 + "");
  if (arguments.length < 2) {
    for (var r = Sn(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? kc : e ? bc : Tc)(i, e));
}
function vc() {
  this.textContent = "";
}
function wc(t9) {
  return function() {
    this.textContent = t9;
  };
}
function Bc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Fc(t9) {
  return arguments.length ? this.each(t9 == null ? vc : (typeof t9 == "function" ? Bc : wc)(t9)) : this.node().textContent;
}
function Ac() {
  this.innerHTML = "";
}
function Lc(t9) {
  return function() {
    this.innerHTML = t9;
  };
}
function Ec(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Mc(t9) {
  return arguments.length ? this.each(t9 == null ? Ac : (typeof t9 == "function" ? Ec : Lc)(t9)) : this.node().innerHTML;
}
function Oc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $c() {
  return this.each(Oc);
}
function Ic() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dc() {
  return this.each(Ic);
}
function Nc(t9) {
  var e = typeof t9 == "function" ? t9 : $s(t9);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Rc() {
  return null;
}
function Pc(t9, e) {
  var i = typeof t9 == "function" ? t9 : $s(t9), r = e == null ? Rc : typeof e == "function" ? e : kn(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qc() {
  var t9 = this.parentNode;
  t9 && t9.removeChild(this);
}
function zc() {
  return this.each(qc);
}
function Wc() {
  var t9 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function Hc() {
  var t9 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function jc(t9) {
  return this.select(t9 ? Hc : Wc);
}
function Uc(t9) {
  return arguments.length ? this.property("__data__", t9) : this.node().__data__;
}
function Yc(t9) {
  return function(e) {
    t9.call(this, e, this.__data__);
  };
}
function Gc(t9) {
  return t9.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function Vc(t9) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t9.type || o.type === t9.type) && o.name === t9.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Xc(t9, e, i) {
  return function() {
    var r = this.__on, n, o = Yc(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t9.type && n.name === t9.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t9.type, o, i), n = { type: t9.type, name: t9.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function Kc(t9, e, i) {
  var r = Gc(t9 + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, u; l < h; ++l)
        for (n = 0, u = a[l]; n < o; ++n)
          if ((s = r[n]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? Xc : Vc, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function js(t9, e, i) {
  var r = Ps(t9), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t9.dispatchEvent(n);
}
function Zc(t9, e) {
  return function() {
    return js(this, t9, e);
  };
}
function Jc(t9, e) {
  return function() {
    return js(this, t9, e.apply(this, arguments));
  };
}
function Qc(t9, e) {
  return this.each((typeof e == "function" ? Jc : Zc)(t9, e));
}
function* tu() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var Us = [null];
function mt(t9, e) {
  this._groups = t9, this._parents = e;
}
function li() {
  return new mt([[document.documentElement]], Us);
}
function eu() {
  return this;
}
mt.prototype = li.prototype = {
  constructor: mt,
  select: Bh,
  selectAll: Eh,
  selectChild: Ih,
  selectChildren: Ph,
  filter: qh,
  data: Yh,
  enter: zh,
  exit: Vh,
  join: Xh,
  merge: Kh,
  selection: eu,
  order: Zh,
  sort: Jh,
  call: tc,
  nodes: ec,
  node: ic,
  size: rc,
  empty: nc,
  each: oc,
  attr: fc,
  style: mc,
  property: xc,
  classed: Sc,
  text: Fc,
  html: Mc,
  raise: $c,
  lower: Dc,
  append: Nc,
  insert: Pc,
  remove: zc,
  clone: jc,
  datum: Uc,
  on: Kc,
  dispatch: Qc,
  [Symbol.iterator]: tu
};
function Ct(t9) {
  return typeof t9 == "string" ? new mt([[document.querySelector(t9)]], [document.documentElement]) : new mt([[t9]], Us);
}
function vn(t9, e, i) {
  t9.prototype = e.prototype = i, i.constructor = t9;
}
function Ys(t9, e) {
  var i = Object.create(t9.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function hi() {
}
var Je = 0.7;
var Pi = 1 / Je;
var Be = "\\s*([+-]?\\d+)\\s*";
var Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var iu = /^#([0-9a-f]{3,8})$/;
var ru = new RegExp(`^rgb\\(${Be},${Be},${Be}\\)$`);
var nu = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`);
var ou = new RegExp(`^rgba\\(${Be},${Be},${Be},${Qe}\\)$`);
var su = new RegExp(`^rgba\\(${Et},${Et},${Et},${Qe}\\)$`);
var au = new RegExp(`^hsl\\(${Qe},${Et},${Et}\\)$`);
var lu = new RegExp(`^hsla\\(${Qe},${Et},${Et},${Qe}\\)$`);
var bo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
vn(hi, ti, {
  copy(t9) {
    return Object.assign(new this.constructor(), this, t9);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: To,
  // Deprecated! Use color.formatHex.
  formatHex: To,
  formatHex8: hu,
  formatHsl: cu,
  formatRgb: ko,
  toString: ko
});
function To() {
  return this.rgb().formatHex();
}
function hu() {
  return this.rgb().formatHex8();
}
function cu() {
  return Gs(this).formatHsl();
}
function ko() {
  return this.rgb().formatRgb();
}
function ti(t9) {
  var e, i;
  return t9 = (t9 + "").trim().toLowerCase(), (e = iu.exec(t9)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? So(e) : i === 3 ? new ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Ci(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Ci(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ru.exec(t9)) ? new ft(e[1], e[2], e[3], 1) : (e = nu.exec(t9)) ? new ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ou.exec(t9)) ? Ci(e[1], e[2], e[3], e[4]) : (e = su.exec(t9)) ? Ci(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = au.exec(t9)) ? Bo(e[1], e[2] / 100, e[3] / 100, 1) : (e = lu.exec(t9)) ? Bo(e[1], e[2] / 100, e[3] / 100, e[4]) : bo.hasOwnProperty(t9) ? So(bo[t9]) : t9 === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function So(t9) {
  return new ft(t9 >> 16 & 255, t9 >> 8 & 255, t9 & 255, 1);
}
function Ci(t9, e, i, r) {
  return r <= 0 && (t9 = e = i = NaN), new ft(t9, e, i, r);
}
function uu(t9) {
  return t9 instanceof hi || (t9 = ti(t9)), t9 ? (t9 = t9.rgb(), new ft(t9.r, t9.g, t9.b, t9.opacity)) : new ft();
}
function Jr(t9, e, i, r) {
  return arguments.length === 1 ? uu(t9) : new ft(t9, e, i, r ?? 1);
}
function ft(t9, e, i, r) {
  this.r = +t9, this.g = +e, this.b = +i, this.opacity = +r;
}
vn(ft, Jr, Ys(hi, {
  brighter(t9) {
    return t9 = t9 == null ? Pi : Math.pow(Pi, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Je : Math.pow(Je, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(he(this.r), he(this.g), he(this.b), qi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vo,
  // Deprecated! Use color.formatHex.
  formatHex: vo,
  formatHex8: fu,
  formatRgb: wo,
  toString: wo
}));
function vo() {
  return `#${le(this.r)}${le(this.g)}${le(this.b)}`;
}
function fu() {
  return `#${le(this.r)}${le(this.g)}${le(this.b)}${le((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wo() {
  const t9 = qi(this.opacity);
  return `${t9 === 1 ? "rgb(" : "rgba("}${he(this.r)}, ${he(this.g)}, ${he(this.b)}${t9 === 1 ? ")" : `, ${t9})`}`;
}
function qi(t9) {
  return isNaN(t9) ? 1 : Math.max(0, Math.min(1, t9));
}
function he(t9) {
  return Math.max(0, Math.min(255, Math.round(t9) || 0));
}
function le(t9) {
  return t9 = he(t9), (t9 < 16 ? "0" : "") + t9.toString(16);
}
function Bo(t9, e, i, r) {
  return r <= 0 ? t9 = e = i = NaN : i <= 0 || i >= 1 ? t9 = e = NaN : e <= 0 && (t9 = NaN), new vt(t9, e, i, r);
}
function Gs(t9) {
  if (t9 instanceof vt)
    return new vt(t9.h, t9.s, t9.l, t9.opacity);
  if (t9 instanceof hi || (t9 = ti(t9)), !t9)
    return new vt();
  if (t9 instanceof vt)
    return t9;
  t9 = t9.rgb();
  var e = t9.r / 255, i = t9.g / 255, r = t9.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new vt(s, a, l, t9.opacity);
}
function du(t9, e, i, r) {
  return arguments.length === 1 ? Gs(t9) : new vt(t9, e, i, r ?? 1);
}
function vt(t9, e, i, r) {
  this.h = +t9, this.s = +e, this.l = +i, this.opacity = +r;
}
vn(vt, du, Ys(hi, {
  brighter(t9) {
    return t9 = t9 == null ? Pi : Math.pow(Pi, t9), new vt(this.h, this.s, this.l * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Je : Math.pow(Je, t9), new vt(this.h, this.s, this.l * t9, this.opacity);
  },
  rgb() {
    var t9 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t9) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new ft(
      Ir(t9 >= 240 ? t9 - 240 : t9 + 120, n, r),
      Ir(t9, n, r),
      Ir(t9 < 120 ? t9 + 240 : t9 - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new vt(Fo(this.h), xi(this.s), xi(this.l), qi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t9 = qi(this.opacity);
    return `${t9 === 1 ? "hsl(" : "hsla("}${Fo(this.h)}, ${xi(this.s) * 100}%, ${xi(this.l) * 100}%${t9 === 1 ? ")" : `, ${t9})`}`;
  }
}));
function Fo(t9) {
  return t9 = (t9 || 0) % 360, t9 < 0 ? t9 + 360 : t9;
}
function xi(t9) {
  return Math.max(0, Math.min(1, t9 || 0));
}
function Ir(t9, e, i) {
  return (t9 < 60 ? e + (i - e) * t9 / 60 : t9 < 180 ? i : t9 < 240 ? e + (i - e) * (240 - t9) / 60 : e) * 255;
}
var wn = (t9) => () => t9;
function Vs(t9, e) {
  return function(i) {
    return t9 + i * e;
  };
}
function pu(t9, e, i) {
  return t9 = Math.pow(t9, i), e = Math.pow(e, i) - t9, i = 1 / i, function(r) {
    return Math.pow(t9 + r * e, i);
  };
}
function i1(t9, e) {
  var i = e - t9;
  return i ? Vs(t9, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : wn(isNaN(t9) ? e : t9);
}
function gu(t9) {
  return (t9 = +t9) == 1 ? Xs : function(e, i) {
    return i - e ? pu(e, i, t9) : wn(isNaN(e) ? i : e);
  };
}
function Xs(t9, e) {
  var i = e - t9;
  return i ? Vs(t9, i) : wn(isNaN(t9) ? e : t9);
}
var Ao = function t(e) {
  var i = gu(e);
  function r(n, o) {
    var s = i((n = Jr(n)).r, (o = Jr(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = Xs(n.opacity, o.opacity);
    return function(u) {
      return n.r = s(u), n.g = a(u), n.b = l(u), n.opacity = h(u), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Qt(t9, e) {
  return t9 = +t9, e = +e, function(i) {
    return t9 * (1 - i) + e * i;
  };
}
var Qr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Dr = new RegExp(Qr.source, "g");
function mu(t9) {
  return function() {
    return t9;
  };
}
function yu(t9) {
  return function(e) {
    return t9(e) + "";
  };
}
function _u(t9, e) {
  var i = Qr.lastIndex = Dr.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t9 = t9 + "", e = e + ""; (r = Qr.exec(t9)) && (n = Dr.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: Qt(r, n) })), i = Dr.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? yu(l[0].x) : mu(e) : (e = l.length, function(h) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(h);
    return a.join("");
  });
}
var Lo = 180 / Math.PI;
var tn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ks(t9, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t9 * t9 + e * e)) && (t9 /= s, e /= s), (l = t9 * i + e * r) && (i -= t9 * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t9 * r < e * i && (t9 = -t9, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t9) * Lo,
    skewX: Math.atan(l) * Lo,
    scaleX: s,
    scaleY: a
  };
}
var bi;
function Cu(t9) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t9 + "");
  return e.isIdentity ? tn : Ks(e.a, e.b, e.c, e.d, e.e, e.f);
}
function xu(t9) {
  return t9 == null || (bi || (bi = document.createElementNS("http://www.w3.org/2000/svg", "g")), bi.setAttribute("transform", t9), !(t9 = bi.transform.baseVal.consolidate())) ? tn : (t9 = t9.matrix, Ks(t9.a, t9.b, t9.c, t9.d, t9.e, t9.f));
}
function Zs(t9, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, u, f, c, p, y) {
    if (h !== f || u !== c) {
      var v = p.push("translate(", null, e, null, i);
      y.push({ i: v - 4, x: Qt(h, f) }, { i: v - 2, x: Qt(u, c) });
    } else
      (f || c) && p.push("translate(" + f + e + c + i);
  }
  function s(h, u, f, c) {
    h !== u ? (h - u > 180 ? u += 360 : u - h > 180 && (h += 360), c.push({ i: f.push(n(f) + "rotate(", null, r) - 2, x: Qt(h, u) })) : u && f.push(n(f) + "rotate(" + u + r);
  }
  function a(h, u, f, c) {
    h !== u ? c.push({ i: f.push(n(f) + "skewX(", null, r) - 2, x: Qt(h, u) }) : u && f.push(n(f) + "skewX(" + u + r);
  }
  function l(h, u, f, c, p, y) {
    if (h !== f || u !== c) {
      var v = p.push(n(p) + "scale(", null, ",", null, ")");
      y.push({ i: v - 4, x: Qt(h, f) }, { i: v - 2, x: Qt(u, c) });
    } else
      (f !== 1 || c !== 1) && p.push(n(p) + "scale(" + f + "," + c + ")");
  }
  return function(h, u) {
    var f = [], c = [];
    return h = t9(h), u = t9(u), o(h.translateX, h.translateY, u.translateX, u.translateY, f, c), s(h.rotate, u.rotate, f, c), a(h.skewX, u.skewX, f, c), l(h.scaleX, h.scaleY, u.scaleX, u.scaleY, f, c), h = u = null, function(p) {
      for (var y = -1, v = c.length, M; ++y < v; )
        f[(M = c[y]).i] = M.x(p);
      return f.join("");
    };
  };
}
var bu = Zs(Cu, "px, ", "px)", "deg)");
var Tu = Zs(xu, ", ", ")", ")");
var Ae = 0;
var He = 0;
var Pe = 0;
var Js = 1e3;
var zi;
var je;
var Wi = 0;
var fe = 0;
var lr = 0;
var ei = typeof performance == "object" && performance.now ? performance : Date;
var Qs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t9) {
  setTimeout(t9, 17);
};
function Bn() {
  return fe || (Qs(ku), fe = ei.now() + lr);
}
function ku() {
  fe = 0;
}
function Hi() {
  this._call = this._time = this._next = null;
}
Hi.prototype = ta.prototype = {
  constructor: Hi,
  restart: function(t9, e, i) {
    if (typeof t9 != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? Bn() : +i) + (e == null ? 0 : +e), !this._next && je !== this && (je ? je._next = this : zi = this, je = this), this._call = t9, this._time = i, en();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, en());
  }
};
function ta(t9, e, i) {
  var r = new Hi();
  return r.restart(t9, e, i), r;
}
function Su() {
  Bn(), ++Ae;
  for (var t9 = zi, e; t9; )
    (e = fe - t9._time) >= 0 && t9._call.call(void 0, e), t9 = t9._next;
  --Ae;
}
function Eo() {
  fe = (Wi = ei.now()) + lr, Ae = He = 0;
  try {
    Su();
  } finally {
    Ae = 0, wu(), fe = 0;
  }
}
function vu() {
  var t9 = ei.now(), e = t9 - Wi;
  e > Js && (lr -= e, Wi = t9);
}
function wu() {
  for (var t9, e = zi, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t9 = e, e = e._next) : (i = e._next, e._next = null, e = t9 ? t9._next = i : zi = i);
  je = t9, en(r);
}
function en(t9) {
  if (!Ae) {
    He && (He = clearTimeout(He));
    var e = t9 - fe;
    e > 24 ? (t9 < 1 / 0 && (He = setTimeout(Eo, t9 - ei.now() - lr)), Pe && (Pe = clearInterval(Pe))) : (Pe || (Wi = ei.now(), Pe = setInterval(vu, Js)), Ae = 1, Qs(Eo));
  }
}
function Mo(t9, e, i) {
  var r = new Hi();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t9(n + e);
  }, e, i), r;
}
var Bu = Os("start", "end", "cancel", "interrupt");
var Fu = [];
var ea = 0;
var Oo = 1;
var rn = 2;
var Ai = 3;
var $o = 4;
var nn = 5;
var Li = 6;
function hr(t9, e, i, r, n, o) {
  var s = t9.__transition;
  if (!s)
    t9.__transition = {};
  else if (i in s)
    return;
  Au(t9, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Bu,
    tween: Fu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ea
  });
}
function Fn(t9, e) {
  var i = Ft(t9, e);
  if (i.state > ea)
    throw new Error("too late; already scheduled");
  return i;
}
function It(t9, e) {
  var i = Ft(t9, e);
  if (i.state > Ai)
    throw new Error("too late; already running");
  return i;
}
function Ft(t9, e) {
  var i = t9.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function Au(t9, e, i) {
  var r = t9.__transition, n;
  r[e] = i, i.timer = ta(o, 0, i.time);
  function o(h) {
    i.state = Oo, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var u, f, c, p;
    if (i.state !== Oo)
      return l();
    for (u in r)
      if (p = r[u], p.name === i.name) {
        if (p.state === Ai)
          return Mo(s);
        p.state === $o ? (p.state = Li, p.timer.stop(), p.on.call("interrupt", t9, t9.__data__, p.index, p.group), delete r[u]) : +u < e && (p.state = Li, p.timer.stop(), p.on.call("cancel", t9, t9.__data__, p.index, p.group), delete r[u]);
      }
    if (Mo(function() {
      i.state === Ai && (i.state = $o, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = rn, i.on.call("start", t9, t9.__data__, i.index, i.group), i.state === rn) {
      for (i.state = Ai, n = new Array(c = i.tween.length), u = 0, f = -1; u < c; ++u)
        (p = i.tween[u].value.call(t9, t9.__data__, i.index, i.group)) && (n[++f] = p);
      n.length = f + 1;
    }
  }
  function a(h) {
    for (var u = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = nn, 1), f = -1, c = n.length; ++f < c; )
      n[f].call(t9, u);
    i.state === nn && (i.on.call("end", t9, t9.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = Li, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t9.__transition;
  }
}
function Lu(t9, e) {
  var i = t9.__transition, r, n, o = true, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = false;
        continue;
      }
      n = r.state > rn && r.state < nn, r.state = Li, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t9, t9.__data__, r.index, r.group), delete i[s];
    }
    o && delete t9.__transition;
  }
}
function Eu(t9) {
  return this.each(function() {
    Lu(this, t9);
  });
}
function Mu(t9, e) {
  var i, r;
  return function() {
    var n = It(this, t9), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Ou(t9, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = It(this, t9), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function $u(t9, e) {
  var i = this._id;
  if (t9 += "", arguments.length < 2) {
    for (var r = Ft(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t9)
        return s.value;
    return null;
  }
  return this.each((e == null ? Mu : Ou)(i, t9, e));
}
function An(t9, e, i) {
  var r = t9._id;
  return t9.each(function() {
    var n = It(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Ft(n, r).value[e];
  };
}
function ia(t9, e) {
  var i;
  return (typeof e == "number" ? Qt : e instanceof ti ? Ao : (i = ti(e)) ? (e = i, Ao) : _u)(t9, e);
}
function Iu(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function Du(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function Nu(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Ru(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t9.space, t9.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Pu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t9) : (s = this.getAttribute(t9), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function qu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t9.space, t9.local) : (s = this.getAttributeNS(t9.space, t9.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function zu(t9, e) {
  var i = ar(t9), r = i === "transform" ? Tu : ia;
  return this.attrTween(t9, typeof e == "function" ? (i.local ? qu : Pu)(i, r, An(this, "attr." + t9, e)) : e == null ? (i.local ? Du : Iu)(i) : (i.local ? Ru : Nu)(i, r, e));
}
function Wu(t9, e) {
  return function(i) {
    this.setAttribute(t9, e.call(this, i));
  };
}
function Hu(t9, e) {
  return function(i) {
    this.setAttributeNS(t9.space, t9.local, e.call(this, i));
  };
}
function ju(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Hu(t9, o)), i;
  }
  return n._value = e, n;
}
function Uu(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && Wu(t9, o)), i;
  }
  return n._value = e, n;
}
function Yu(t9, e) {
  var i = "attr." + t9;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = ar(t9);
  return this.tween(i, (r.local ? ju : Uu)(r, e));
}
function Gu(t9, e) {
  return function() {
    Fn(this, t9).delay = +e.apply(this, arguments);
  };
}
function Vu(t9, e) {
  return e = +e, function() {
    Fn(this, t9).delay = e;
  };
}
function Xu(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Gu : Vu)(e, t9)) : Ft(this.node(), e).delay;
}
function Ku(t9, e) {
  return function() {
    It(this, t9).duration = +e.apply(this, arguments);
  };
}
function Zu(t9, e) {
  return e = +e, function() {
    It(this, t9).duration = e;
  };
}
function Ju(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Ku : Zu)(e, t9)) : Ft(this.node(), e).duration;
}
function Qu(t9, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    It(this, t9).ease = e;
  };
}
function tf(t9) {
  var e = this._id;
  return arguments.length ? this.each(Qu(e, t9)) : Ft(this.node(), e).ease;
}
function ef(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    It(this, t9).ease = i;
  };
}
function rf(t9) {
  if (typeof t9 != "function")
    throw new Error();
  return this.each(ef(this._id, t9));
}
function nf(t9) {
  typeof t9 != "function" && (t9 = Ds(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new Gt(r, this._parents, this._name, this._id);
}
function of(t9) {
  if (t9._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t9._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], u = l.length, f = s[a] = new Array(u), c, p = 0; p < u; ++p)
      (c = l[p] || h[p]) && (f[p] = c);
  for (; a < r; ++a)
    s[a] = e[a];
  return new Gt(s, this._parents, this._name, this._id);
}
function sf(t9) {
  return (t9 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function af(t9, e, i) {
  var r, n, o = sf(e) ? Fn : It;
  return function() {
    var s = o(this, t9), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function lf(t9, e) {
  var i = this._id;
  return arguments.length < 2 ? Ft(this.node(), i).on.on(t9) : this.each(af(i, t9, e));
}
function hf(t9) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t9)
        return;
    e && e.removeChild(this);
  };
}
function cf() {
  return this.on("end.remove", hf(this._id));
}
function uf(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = kn(t9));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), u, f, c = 0; c < l; ++c)
      (u = a[c]) && (f = t9.call(u, u.__data__, c, a)) && ("__data__" in u && (f.__data__ = u.__data__), h[c] = f, hr(h[c], e, i, c, h, Ft(u, i)));
  return new Gt(o, this._parents, e, i);
}
function ff(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = Is(t9));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, u, f = 0; f < h; ++f)
      if (u = l[f]) {
        for (var c = t9.call(u, u.__data__, f, l), p, y = Ft(u, i), v = 0, M = c.length; v < M; ++v)
          (p = c[v]) && hr(p, e, i, v, c, y);
        o.push(c), s.push(u);
      }
  return new Gt(o, s, e, i);
}
var df = li.prototype.constructor;
function pf() {
  return new df(this._groups, this._parents);
}
function gf(t9, e) {
  var i, r, n;
  return function() {
    var o = Fe(this, t9), s = (this.style.removeProperty(t9), Fe(this, t9));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function ra(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function mf(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = Fe(this, t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function yf(t9, e, i) {
  var r, n, o;
  return function() {
    var s = Fe(this, t9), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t9), Fe(this, t9))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function _f(t9, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = It(this, t9), h = l.on, u = l.value[o] == null ? a || (a = ra(e)) : void 0;
    (h !== i || n !== u) && (r = (i = h).copy()).on(s, n = u), l.on = r;
  };
}
function Cf(t9, e, i) {
  var r = (t9 += "") == "transform" ? bu : ia;
  return e == null ? this.styleTween(t9, gf(t9, r)).on("end.style." + t9, ra(t9)) : typeof e == "function" ? this.styleTween(t9, yf(t9, r, An(this, "style." + t9, e))).each(_f(this._id, t9)) : this.styleTween(t9, mf(t9, r, e), i).on("end.style." + t9, null);
}
function xf(t9, e, i) {
  return function(r) {
    this.style.setProperty(t9, e.call(this, r), i);
  };
}
function bf(t9, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && xf(t9, s, i)), r;
  }
  return o._value = e, o;
}
function Tf(t9, e, i) {
  var r = "style." + (t9 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, bf(t9, e, i ?? ""));
}
function kf(t9) {
  return function() {
    this.textContent = t9;
  };
}
function Sf(t9) {
  return function() {
    var e = t9(this);
    this.textContent = e ?? "";
  };
}
function vf(t9) {
  return this.tween("text", typeof t9 == "function" ? Sf(An(this, "text", t9)) : kf(t9 == null ? "" : t9 + ""));
}
function wf(t9) {
  return function(e) {
    this.textContent = t9.call(this, e);
  };
}
function Bf(t9) {
  var e, i;
  function r() {
    var n = t9.apply(this, arguments);
    return n !== i && (e = (i = n) && wf(n)), e;
  }
  return r._value = t9, r;
}
function Ff(t9) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t9 == null)
    return this.tween(e, null);
  if (typeof t9 != "function")
    throw new Error();
  return this.tween(e, Bf(t9));
}
function Af() {
  for (var t9 = this._name, e = this._id, i = na(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var u = Ft(l, e);
        hr(l, t9, i, h, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Gt(r, this._parents, t9, i);
}
function Lf() {
  var t9, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = It(this, r), u = h.on;
      u !== t9 && (e = (t9 = u).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var Ef = 0;
function Gt(t9, e, i, r) {
  this._groups = t9, this._parents = e, this._name = i, this._id = r;
}
function na() {
  return ++Ef;
}
var Ht = li.prototype;
Gt.prototype = {
  constructor: Gt,
  select: uf,
  selectAll: ff,
  selectChild: Ht.selectChild,
  selectChildren: Ht.selectChildren,
  filter: nf,
  merge: of,
  selection: pf,
  transition: Af,
  call: Ht.call,
  nodes: Ht.nodes,
  node: Ht.node,
  size: Ht.size,
  empty: Ht.empty,
  each: Ht.each,
  on: lf,
  attr: zu,
  attrTween: Yu,
  style: Cf,
  styleTween: Tf,
  text: vf,
  textTween: Ff,
  remove: cf,
  tween: $u,
  delay: Xu,
  duration: Ju,
  ease: tf,
  easeVarying: rf,
  end: Lf,
  [Symbol.iterator]: Ht[Symbol.iterator]
};
function Mf(t9) {
  return ((t9 *= 2) <= 1 ? t9 * t9 * t9 : (t9 -= 2) * t9 * t9 + 2) / 2;
}
var Of = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mf
};
function $f(t9, e) {
  for (var i; !(i = t9.__transition) || !(i = i[e]); )
    if (!(t9 = t9.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function If(t9) {
  var e, i;
  t9 instanceof Gt ? (e = t9._id, t9 = t9._name) : (e = na(), (i = Of).time = Bn(), t9 = t9 == null ? null : t9 + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && hr(l, t9, e, h, s, i || $f(l, e));
  return new Gt(r, this._parents, t9, e);
}
li.prototype.interrupt = Eu;
li.prototype.transition = If;
var r1 = Math.abs;
var n1 = Math.atan2;
var o1 = Math.cos;
var s1 = Math.max;
var a1 = Math.min;
var l1 = Math.sin;
var h1 = Math.sqrt;
var Io = 1e-12;
var Ln = Math.PI;
var Do = Ln / 2;
var c1 = 2 * Ln;
function u1(t9) {
  return t9 > 1 ? 0 : t9 < -1 ? Ln : Math.acos(t9);
}
function f1(t9) {
  return t9 >= 1 ? Do : t9 <= -1 ? -Do : Math.asin(t9);
}
function oa(t9) {
  this._context = t9;
}
oa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t9, e);
        break;
    }
  }
};
function Df(t9) {
  return new oa(t9);
}
var sa = class {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
};
function Nf(t9) {
  return new sa(t9, true);
}
function Rf(t9) {
  return new sa(t9, false);
}
function ie() {
}
function ji(t9, e, i) {
  t9._context.bezierCurveTo(
    (2 * t9._x0 + t9._x1) / 3,
    (2 * t9._y0 + t9._y1) / 3,
    (t9._x0 + 2 * t9._x1) / 3,
    (t9._y0 + 2 * t9._y1) / 3,
    (t9._x0 + 4 * t9._x1 + e) / 6,
    (t9._y0 + 4 * t9._y1 + i) / 6
  );
}
function cr(t9) {
  this._context = t9;
}
cr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ji(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Pf(t9) {
  return new cr(t9);
}
function aa(t9) {
  this._context = t9;
}
aa.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t9, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t9, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t9, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t9) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function qf(t9) {
  return new aa(t9);
}
function la(t9) {
  this._context = t9;
}
la.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t9) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function zf(t9) {
  return new la(t9);
}
function ha(t9, e) {
  this._basis = new cr(t9), this._beta = e;
}
ha.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length - 1;
    if (i > 0)
      for (var r = t9[0], n = e[0], o = t9[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t9[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
var Wf = function t2(e) {
  function i(r) {
    return e === 1 ? new cr(r) : new ha(r, e);
  }
  return i.beta = function(r) {
    return t2(+r);
  }, i;
}(0.85);
function Ui(t9, e, i) {
  t9._context.bezierCurveTo(
    t9._x1 + t9._k * (t9._x2 - t9._x0),
    t9._y1 + t9._k * (t9._y2 - t9._y0),
    t9._x2 + t9._k * (t9._x1 - e),
    t9._y2 + t9._k * (t9._y1 - i),
    t9._x2,
    t9._y2
  );
}
function En(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
En.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Ui(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2, this._x1 = t9, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Hf = function t3(e) {
  function i(r) {
    return new En(r, e);
  }
  return i.tension = function(r) {
    return t3(+r);
  }, i;
}(0);
function Mn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
Mn.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var jf = function t4(e) {
  function i(r) {
    return new Mn(r, e);
  }
  return i.tension = function(r) {
    return t4(+r);
  }, i;
}(0);
function On(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
On.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Uf = function t5(e) {
  function i(r) {
    return new On(r, e);
  }
  return i.tension = function(r) {
    return t5(+r);
  }, i;
}(0);
function $n(t9, e, i) {
  var r = t9._x1, n = t9._y1, o = t9._x2, s = t9._y2;
  if (t9._l01_a > Io) {
    var a = 2 * t9._l01_2a + 3 * t9._l01_a * t9._l12_a + t9._l12_2a, l = 3 * t9._l01_a * (t9._l01_a + t9._l12_a);
    r = (r * a - t9._x0 * t9._l12_2a + t9._x2 * t9._l01_2a) / l, n = (n * a - t9._y0 * t9._l12_2a + t9._y2 * t9._l01_2a) / l;
  }
  if (t9._l23_a > Io) {
    var h = 2 * t9._l23_2a + 3 * t9._l23_a * t9._l12_a + t9._l12_2a, u = 3 * t9._l23_a * (t9._l23_a + t9._l12_a);
    o = (o * h + t9._x1 * t9._l23_2a - e * t9._l12_2a) / u, s = (s * h + t9._y1 * t9._l23_2a - i * t9._l12_2a) / u;
  }
  t9._context.bezierCurveTo(r, n, o, s, t9._x2, t9._y2);
}
function ca(t9, e) {
  this._context = t9, this._alpha = e;
}
ca.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Yf = function t6(e) {
  function i(r) {
    return e ? new ca(r, e) : new En(r, 0);
  }
  return i.alpha = function(r) {
    return t6(+r);
  }, i;
}(0.5);
function ua(t9, e) {
  this._context = t9, this._alpha = e;
}
ua.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Gf = function t7(e) {
  function i(r) {
    return e ? new ua(r, e) : new Mn(r, 0);
  }
  return i.alpha = function(r) {
    return t7(+r);
  }, i;
}(0.5);
function fa(t9, e) {
  this._context = t9, this._alpha = e;
}
fa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Vf = function t8(e) {
  function i(r) {
    return e ? new fa(r, e) : new On(r, 0);
  }
  return i.alpha = function(r) {
    return t8(+r);
  }, i;
}(0.5);
function da(t9) {
  this._context = t9;
}
da.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t9, e) {
    t9 = +t9, e = +e, this._point ? this._context.lineTo(t9, e) : (this._point = 1, this._context.moveTo(t9, e));
  }
};
function Xf(t9) {
  return new da(t9);
}
function No(t9) {
  return t9 < 0 ? -1 : 1;
}
function Ro(t9, e, i) {
  var r = t9._x1 - t9._x0, n = e - t9._x1, o = (t9._y1 - t9._y0) / (r || n < 0 && -0), s = (i - t9._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (No(o) + No(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function Po(t9, e) {
  var i = t9._x1 - t9._x0;
  return i ? (3 * (t9._y1 - t9._y0) / i - e) / 2 : e;
}
function Nr(t9, e, i) {
  var r = t9._x0, n = t9._y0, o = t9._x1, s = t9._y1, a = (o - r) / 3;
  t9._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function Yi(t9) {
  this._context = t9;
}
Yi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Nr(this, this._t0, Po(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    var i = NaN;
    if (t9 = +t9, e = +e, !(t9 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Nr(this, Po(this, i = Ro(this, t9, e)), i);
          break;
        default:
          Nr(this, this._t0, i = Ro(this, t9, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function pa(t9) {
  this._context = new ga(t9);
}
(pa.prototype = Object.create(Yi.prototype)).point = function(t9, e) {
  Yi.prototype.point.call(this, e, t9);
};
function ga(t9) {
  this._context = t9;
}
ga.prototype = {
  moveTo: function(t9, e) {
    this._context.moveTo(e, t9);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t9, e) {
    this._context.lineTo(e, t9);
  },
  bezierCurveTo: function(t9, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t9, r, i, o, n);
  }
};
function Kf(t9) {
  return new Yi(t9);
}
function Zf(t9) {
  return new pa(t9);
}
function ma(t9) {
  this._context = t9;
}
ma.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length;
    if (i)
      if (this._line ? this._context.lineTo(t9[0], e[0]) : this._context.moveTo(t9[0], e[0]), i === 2)
        this._context.lineTo(t9[1], e[1]);
      else
        for (var r = qo(t9), n = qo(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t9[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
function qo(t9) {
  var e, i = t9.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t9[0] + 2 * t9[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t9[e] + 2 * t9[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t9[i - 1] + t9[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t9[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t9[e + 1] - n[e + 1];
  return [n, o];
}
function Jf(t9) {
  return new ma(t9);
}
function ur(t9, e) {
  this._context = t9, this._t = e;
}
ur.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t9, e);
        else {
          var i = this._x * (1 - this._t) + t9 * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t9, this._y = e;
  }
};
function Qf(t9) {
  return new ur(t9, 0.5);
}
function td(t9) {
  return new ur(t9, 0);
}
function ed(t9) {
  return new ur(t9, 1);
}
function Ue(t9, e, i) {
  this.k = t9, this.x = e, this.y = i;
}
Ue.prototype = {
  constructor: Ue,
  scale: function(t9) {
    return t9 === 1 ? this : new Ue(this.k * t9, this.x, this.y);
  },
  translate: function(t9, e) {
    return t9 === 0 & e === 0 ? this : new Ue(this.k, this.x + this.k * t9, this.y + this.k * e);
  },
  apply: function(t9) {
    return [t9[0] * this.k + this.x, t9[1] * this.k + this.y];
  },
  applyX: function(t9) {
    return t9 * this.k + this.x;
  },
  applyY: function(t9) {
    return t9 * this.k + this.y;
  },
  invert: function(t9) {
    return [(t9[0] - this.x) / this.k, (t9[1] - this.y) / this.k];
  },
  invertX: function(t9) {
    return (t9 - this.x) / this.k;
  },
  invertY: function(t9) {
    return (t9 - this.y) / this.k;
  },
  rescaleX: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertX, this).map(t9.invert, t9));
  },
  rescaleY: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertY, this).map(t9.invert, t9));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ue.prototype;
var {
  entries: ya,
  setPrototypeOf: zo,
  isFrozen: id,
  getPrototypeOf: rd,
  getOwnPropertyDescriptor: nd
} = Object;
var {
  freeze: ht,
  seal: Bt,
  create: od
} = Object;
var {
  apply: on,
  construct: sn
} = typeof Reflect < "u" && Reflect;
on || (on = function(e, i, r) {
  return e.apply(i, r);
});
ht || (ht = function(e) {
  return e;
});
Bt || (Bt = function(e) {
  return e;
});
sn || (sn = function(e, i) {
  return new e(...i);
});
var sd = bt(Array.prototype.forEach);
var Wo = bt(Array.prototype.pop);
var qe = bt(Array.prototype.push);
var Ei = bt(String.prototype.toLowerCase);
var Rr = bt(String.prototype.toString);
var ad = bt(String.prototype.match);
var St = bt(String.prototype.replace);
var ld = bt(String.prototype.indexOf);
var hd = bt(String.prototype.trim);
var gt = bt(RegExp.prototype.test);
var ze = cd(TypeError);
function bt(t9) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return on(t9, e, r);
  };
}
function cd(t9) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return sn(t9, i);
  };
}
function N(t9, e, i) {
  var r;
  i = (r = i) !== null && r !== void 0 ? r : Ei, zo && zo(t9, null);
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (id(e) || (e[n] = s), o = s);
    }
    t9[o] = true;
  }
  return t9;
}
function ke(t9) {
  const e = od(null);
  for (const [i, r] of ya(t9))
    e[i] = r;
  return e;
}
function Ti(t9, e) {
  for (; t9 !== null; ) {
    const r = nd(t9, e);
    if (r) {
      if (r.get)
        return bt(r.get);
      if (typeof r.value == "function")
        return bt(r.value);
    }
    t9 = rd(t9);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Ho = ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Pr = ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var qr = ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var ud = ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var zr = ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var fd = ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var jo = ht(["#text"]);
var Uo = ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var Wr = ht(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Yo = ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var ki = ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var dd = Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var pd = Bt(/<%[\w\W]*|[\w\W]*%>/gm);
var gd = Bt(/\${[\w\W]*}/gm);
var md = Bt(/^data-[\-\w.\u00B7-\uFFFF]/);
var yd = Bt(/^aria-[\-\w]+$/);
var _a = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var _d = Bt(/^(?:\w+script|data):/i);
var Cd = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var Ca = Bt(/^html$/i);
var Go = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: dd,
  ERB_EXPR: pd,
  TMPLIT_EXPR: gd,
  DATA_ATTR: md,
  ARIA_ATTR: yd,
  IS_ALLOWED_URI: _a,
  IS_SCRIPT_OR_DATA: _d,
  ATTR_WHITESPACE: Cd,
  DOCTYPE_NAME: Ca
});
var xd = () => typeof window > "u" ? null : window;
var bd = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function xa() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xd();
  const e = (w) => xa(w);
  if (e.version = "3.0.5", e.removed = [], !t9 || !t9.document || t9.document.nodeType !== 9)
    return e.isSupported = false, e;
  const i = t9.document, r = i.currentScript;
  let {
    document: n
  } = t9;
  const {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: u = t9.NamedNodeMap || t9.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: c,
    trustedTypes: p
  } = t9, y = l.prototype, v = Ti(y, "cloneNode"), M = Ti(y, "nextSibling"), q = Ti(y, "childNodes"), S = Ti(y, "parentNode");
  if (typeof s == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let z, Q = "";
  const {
    implementation: X,
    createNodeIterator: G,
    createDocumentFragment: W,
    getElementsByTagName: Xt
  } = n, {
    importNode: K
  } = i;
  let I = {};
  e.isSupported = typeof ya == "function" && typeof S == "function" && X && X.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Nt,
    ERB_EXPR: At,
    TMPLIT_EXPR: E,
    DATA_ATTR: k,
    ARIA_ATTR: C,
    IS_SCRIPT_OR_DATA: O,
    ATTR_WHITESPACE: x
  } = Go;
  let {
    IS_ALLOWED_URI: D
  } = Go, T = null;
  const H = N({}, [...Ho, ...Pr, ...qr, ...zr, ...jo]);
  let R = null;
  const U = N({}, [...Uo, ...Wr, ...Yo, ...ki]);
  let P = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), ct = null, pt = null, Kt = true, Rt = true, Pt = false, it = true, st = false, kt = false, Zt = false, wr = false, _e = false, di = false, pi = false, io = true, ro = false;
  const Jl = "user-content-";
  let Br = true, Re = false, Ce = {}, xe = null;
  const no = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let oo = null;
  const so = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let Fr = null;
  const ao = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gi = "http://www.w3.org/1998/Math/MathML", mi = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let be = qt, Ar = false, Lr = null;
  const Ql = N({}, [gi, mi, qt], Rr);
  let oe;
  const th = ["application/xhtml+xml", "text/html"], eh = "text/html";
  let tt, Te = null;
  const ih = n.createElement("form"), lo = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, Er = function(d) {
    if (!(Te && Te === d)) {
      if ((!d || typeof d != "object") && (d = {}), d = ke(d), oe = // eslint-disable-next-line unicorn/prefer-includes
      th.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? oe = eh : oe = d.PARSER_MEDIA_TYPE, tt = oe === "application/xhtml+xml" ? Rr : Ei, T = "ALLOWED_TAGS" in d ? N({}, d.ALLOWED_TAGS, tt) : H, R = "ALLOWED_ATTR" in d ? N({}, d.ALLOWED_ATTR, tt) : U, Lr = "ALLOWED_NAMESPACES" in d ? N({}, d.ALLOWED_NAMESPACES, Rr) : Ql, Fr = "ADD_URI_SAFE_ATTR" in d ? N(
        ke(ao),
        // eslint-disable-line indent
        d.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : ao, oo = "ADD_DATA_URI_TAGS" in d ? N(
        ke(so),
        // eslint-disable-line indent
        d.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : so, xe = "FORBID_CONTENTS" in d ? N({}, d.FORBID_CONTENTS, tt) : no, ct = "FORBID_TAGS" in d ? N({}, d.FORBID_TAGS, tt) : {}, pt = "FORBID_ATTR" in d ? N({}, d.FORBID_ATTR, tt) : {}, Ce = "USE_PROFILES" in d ? d.USE_PROFILES : false, Kt = d.ALLOW_ARIA_ATTR !== false, Rt = d.ALLOW_DATA_ATTR !== false, Pt = d.ALLOW_UNKNOWN_PROTOCOLS || false, it = d.ALLOW_SELF_CLOSE_IN_ATTR !== false, st = d.SAFE_FOR_TEMPLATES || false, kt = d.WHOLE_DOCUMENT || false, _e = d.RETURN_DOM || false, di = d.RETURN_DOM_FRAGMENT || false, pi = d.RETURN_TRUSTED_TYPE || false, wr = d.FORCE_BODY || false, io = d.SANITIZE_DOM !== false, ro = d.SANITIZE_NAMED_PROPS || false, Br = d.KEEP_CONTENT !== false, Re = d.IN_PLACE || false, D = d.ALLOWED_URI_REGEXP || _a, be = d.NAMESPACE || qt, P = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && lo(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && lo(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (Rt = false), di && (_e = true), Ce && (T = N({}, [...jo]), R = [], Ce.html === true && (N(T, Ho), N(R, Uo)), Ce.svg === true && (N(T, Pr), N(R, Wr), N(R, ki)), Ce.svgFilters === true && (N(T, qr), N(R, Wr), N(R, ki)), Ce.mathMl === true && (N(T, zr), N(R, Yo), N(R, ki))), d.ADD_TAGS && (T === H && (T = ke(T)), N(T, d.ADD_TAGS, tt)), d.ADD_ATTR && (R === U && (R = ke(R)), N(R, d.ADD_ATTR, tt)), d.ADD_URI_SAFE_ATTR && N(Fr, d.ADD_URI_SAFE_ATTR, tt), d.FORBID_CONTENTS && (xe === no && (xe = ke(xe)), N(xe, d.FORBID_CONTENTS, tt)), Br && (T["#text"] = true), kt && N(T, ["html", "head", "body"]), T.table && (N(T, ["tbody"]), delete ct.tbody), d.TRUSTED_TYPES_POLICY) {
        if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = d.TRUSTED_TYPES_POLICY, Q = z.createHTML("");
      } else
        z === void 0 && (z = bd(p, r)), z !== null && typeof Q == "string" && (Q = z.createHTML(""));
      ht && ht(d), Te = d;
    }
  }, ho = N({}, ["mi", "mo", "mn", "ms", "mtext"]), co = N({}, ["foreignobject", "desc", "title", "annotation-xml"]), rh = N({}, ["title", "style", "font", "a", "script"]), yi = N({}, Pr);
  N(yi, qr), N(yi, ud);
  const Mr = N({}, zr);
  N(Mr, fd);
  const nh = function(d) {
    let m = S(d);
    (!m || !m.tagName) && (m = {
      namespaceURI: be,
      tagName: "template"
    });
    const b = Ei(d.tagName), j = Ei(m.tagName);
    return Lr[d.namespaceURI] ? d.namespaceURI === mi ? m.namespaceURI === qt ? b === "svg" : m.namespaceURI === gi ? b === "svg" && (j === "annotation-xml" || ho[j]) : !!yi[b] : d.namespaceURI === gi ? m.namespaceURI === qt ? b === "math" : m.namespaceURI === mi ? b === "math" && co[j] : !!Mr[b] : d.namespaceURI === qt ? m.namespaceURI === mi && !co[j] || m.namespaceURI === gi && !ho[j] ? false : !Mr[b] && (rh[b] || !yi[b]) : !!(oe === "application/xhtml+xml" && Lr[d.namespaceURI]) : false;
  }, se = function(d) {
    qe(e.removed, {
      element: d
    });
    try {
      d.parentNode.removeChild(d);
    } catch {
      d.remove();
    }
  }, Or = function(d, m) {
    try {
      qe(e.removed, {
        attribute: m.getAttributeNode(d),
        from: m
      });
    } catch {
      qe(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(d), d === "is" && !R[d])
      if (_e || di)
        try {
          se(m);
        } catch {
        }
      else
        try {
          m.setAttribute(d, "");
        } catch {
        }
  }, uo = function(d) {
    let m, b;
    if (wr)
      d = "<remove></remove>" + d;
    else {
      const yt = ad(d, /^[\r\n\t ]+/);
      b = yt && yt[0];
    }
    oe === "application/xhtml+xml" && be === qt && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const j = z ? z.createHTML(d) : d;
    if (be === qt)
      try {
        m = new c().parseFromString(j, oe);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = X.createDocument(be, "template", null);
      try {
        m.documentElement.innerHTML = Ar ? Q : j;
      } catch {
      }
    }
    const et = m.body || m.documentElement;
    return d && b && et.insertBefore(n.createTextNode(b), et.childNodes[0] || null), be === qt ? Xt.call(m, kt ? "html" : "body")[0] : kt ? m.documentElement : et;
  }, fo = function(d) {
    return G.call(
      d.ownerDocument || d,
      d,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT,
      null,
      false
    );
  }, oh = function(d) {
    return d instanceof f && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof u) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
  }, _i = function(d) {
    return typeof a == "object" ? d instanceof a : d && typeof d == "object" && typeof d.nodeType == "number" && typeof d.nodeName == "string";
  }, zt = function(d, m, b) {
    I[d] && sd(I[d], (j) => {
      j.call(e, m, b, Te);
    });
  }, po = function(d) {
    let m;
    if (zt("beforeSanitizeElements", d, null), oh(d))
      return se(d), true;
    const b = tt(d.nodeName);
    if (zt("uponSanitizeElement", d, {
      tagName: b,
      allowedTags: T
    }), d.hasChildNodes() && !_i(d.firstElementChild) && (!_i(d.content) || !_i(d.content.firstElementChild)) && gt(/<[/\w]/g, d.innerHTML) && gt(/<[/\w]/g, d.textContent))
      return se(d), true;
    if (!T[b] || ct[b]) {
      if (!ct[b] && mo(b) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
        return false;
      if (Br && !xe[b]) {
        const j = S(d) || d.parentNode, et = q(d) || d.childNodes;
        if (et && j) {
          const yt = et.length;
          for (let V = yt - 1; V >= 0; --V)
            j.insertBefore(v(et[V], true), M(d));
        }
      }
      return se(d), true;
    }
    return d instanceof l && !nh(d) || (b === "noscript" || b === "noembed" || b === "noframes") && gt(/<\/no(script|embed|frames)/i, d.innerHTML) ? (se(d), true) : (st && d.nodeType === 3 && (m = d.textContent, m = St(m, Nt, " "), m = St(m, At, " "), m = St(m, E, " "), d.textContent !== m && (qe(e.removed, {
      element: d.cloneNode()
    }), d.textContent = m)), zt("afterSanitizeElements", d, null), false);
  }, go = function(d, m, b) {
    if (io && (m === "id" || m === "name") && (b in n || b in ih))
      return false;
    if (!(Rt && !pt[m] && gt(k, m))) {
      if (!(Kt && gt(C, m))) {
        if (!R[m] || pt[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(mo(d) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, d) || P.tagNameCheck instanceof Function && P.tagNameCheck(d)) && (P.attributeNameCheck instanceof RegExp && gt(P.attributeNameCheck, m) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
          )
            return false;
        } else if (!Fr[m]) {
          if (!gt(D, St(b, x, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && d !== "script" && ld(b, "data:") === 0 && oo[d])) {
              if (!(Pt && !gt(O, St(b, x, "")))) {
                if (b)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, mo = function(d) {
    return d.indexOf("-") > 0;
  }, yo = function(d) {
    let m, b, j, et;
    zt("beforeSanitizeAttributes", d, null);
    const {
      attributes: yt
    } = d;
    if (!yt)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: R
    };
    for (et = yt.length; et--; ) {
      m = yt[et];
      const {
        name: Lt,
        namespaceURI: $r
      } = m;
      if (b = Lt === "value" ? m.value : hd(m.value), j = tt(Lt), V.attrName = j, V.attrValue = b, V.keepAttr = true, V.forceKeepAttr = void 0, zt("uponSanitizeAttribute", d, V), b = V.attrValue, V.forceKeepAttr || (Or(Lt, d), !V.keepAttr))
        continue;
      if (!it && gt(/\/>/i, b)) {
        Or(Lt, d);
        continue;
      }
      st && (b = St(b, Nt, " "), b = St(b, At, " "), b = St(b, E, " "));
      const _o = tt(d.nodeName);
      if (go(_o, j, b)) {
        if (ro && (j === "id" || j === "name") && (Or(Lt, d), b = Jl + b), z && typeof p == "object" && typeof p.getAttributeType == "function" && !$r)
          switch (p.getAttributeType(_o, j)) {
            case "TrustedHTML": {
              b = z.createHTML(b);
              break;
            }
            case "TrustedScriptURL": {
              b = z.createScriptURL(b);
              break;
            }
          }
        try {
          $r ? d.setAttributeNS($r, Lt, b) : d.setAttribute(Lt, b), Wo(e.removed);
        } catch {
        }
      }
    }
    zt("afterSanitizeAttributes", d, null);
  }, sh = function w(d) {
    let m;
    const b = fo(d);
    for (zt("beforeSanitizeShadowDOM", d, null); m = b.nextNode(); )
      zt("uponSanitizeShadowNode", m, null), !po(m) && (m.content instanceof o && w(m.content), yo(m));
    zt("afterSanitizeShadowDOM", d, null);
  };
  return e.sanitize = function(w) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m, b, j, et;
    if (Ar = !w, Ar && (w = "<!-->"), typeof w != "string" && !_i(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw ze("dirty is not a string, aborting");
      } else
        throw ze("toString is not a function");
    if (!e.isSupported)
      return w;
    if (Zt || Er(d), e.removed = [], typeof w == "string" && (Re = false), Re) {
      if (w.nodeName) {
        const Lt = tt(w.nodeName);
        if (!T[Lt] || ct[Lt])
          throw ze("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof a)
      m = uo("<!---->"), b = m.ownerDocument.importNode(w, true), b.nodeType === 1 && b.nodeName === "BODY" || b.nodeName === "HTML" ? m = b : m.appendChild(b);
    else {
      if (!_e && !st && !kt && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return z && pi ? z.createHTML(w) : w;
      if (m = uo(w), !m)
        return _e ? null : pi ? Q : "";
    }
    m && wr && se(m.firstChild);
    const yt = fo(Re ? w : m);
    for (; j = yt.nextNode(); )
      po(j) || (j.content instanceof o && sh(j.content), yo(j));
    if (Re)
      return w;
    if (_e) {
      if (di)
        for (et = W.call(m.ownerDocument); m.firstChild; )
          et.appendChild(m.firstChild);
      else
        et = m;
      return (R.shadowroot || R.shadowrootmode) && (et = K.call(i, et, true)), et;
    }
    let V = kt ? m.outerHTML : m.innerHTML;
    return kt && T["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && gt(Ca, m.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + V), st && (V = St(V, Nt, " "), V = St(V, At, " "), V = St(V, E, " ")), z && pi ? z.createHTML(V) : V;
  }, e.setConfig = function(w) {
    Er(w), Zt = true;
  }, e.clearConfig = function() {
    Te = null, Zt = false;
  }, e.isValidAttribute = function(w, d, m) {
    Te || Er({});
    const b = tt(w), j = tt(d);
    return go(b, j, m);
  }, e.addHook = function(w, d) {
    typeof d == "function" && (I[w] = I[w] || [], qe(I[w], d));
  }, e.removeHook = function(w) {
    if (I[w])
      return Wo(I[w]);
  }, e.removeHooks = function(w) {
    I[w] && (I[w] = []);
  }, e.removeAllHooks = function() {
    I = {};
  }, e;
}
var Gi = xa();
var fr = /<br\s*\/?>/gi;
var Td = (t9) => t9 ? Ta(t9).replace(/\\n/g, "#br#").split("#br#") : [""];
var ba = (t9) => Gi.sanitize(t9);
var Vo = (t9, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t9 = ba(t9) : r !== "loose" && (t9 = Ta(t9), t9 = t9.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t9 = t9.replace(/=/g, "&equals;"), t9 = wd(t9));
  }
  return t9;
};
var ii = (t9, e) => t9 && (e.dompurifyConfig ? t9 = Gi.sanitize(Vo(t9, e), e.dompurifyConfig).toString() : t9 = Gi.sanitize(Vo(t9, e), {
  FORBID_TAGS: ["style"]
}).toString(), t9);
var kd = (t9, e) => typeof t9 == "string" ? ii(t9, e) : t9.flat().map((i) => ii(i, e));
var Sd = (t9) => fr.test(t9);
var vd = (t9) => t9.split(fr);
var wd = (t9) => t9.replace(/#br#/g, "<br/>");
var Ta = (t9) => t9.replace(fr, "#br#");
var Bd = (t9) => {
  let e = "";
  return t9 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
};
var ka = (t9) => !(t9 === false || ["false", "null", "0"].includes(String(t9).trim().toLowerCase()));
var Fd = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.max(...e);
};
var Ad = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.min(...e);
};
var d1 = function(t9) {
  const e = t9.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n === "," && r > 0 && r + 1 < e.length) {
      const o = e[r - 1], s = e[r + 1];
      Ld(o, s) && (n = o + "," + s, r++, i.pop());
    }
    i.push(Ed(n));
  }
  return i.join("");
};
var an = (t9, e) => Math.max(0, t9.split(e).length - 1);
var Ld = (t9, e) => {
  const i = an(t9, "~"), r = an(e, "~");
  return i === 1 && r === 1;
};
var Ed = (t9) => {
  const e = an(t9, "~");
  let i = false;
  if (e <= 1)
    return t9;
  e % 2 !== 0 && t9.startsWith("~") && (t9 = t9.substring(1), i = true);
  const r = [...t9];
  let n = r.indexOf("~"), o = r.lastIndexOf("~");
  for (; n !== -1 && o !== -1 && n !== o; )
    r[n] = "<", r[o] = ">", n = r.indexOf("~"), o = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
};
var In = {
  getRows: Td,
  sanitizeText: ii,
  sanitizeTextOrArray: kd,
  hasBreaks: Sd,
  splitBreaks: vd,
  lineBreakRegex: fr,
  removeScript: ba,
  getUrl: Bd,
  evaluate: ka,
  getMax: Fd,
  getMin: Ad
};
var Mi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    g: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    b: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    h: (t9) => t9 % 360,
    s: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    l: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    a: (t9) => t9 >= 1 ? 1 : t9 < 0 ? 0 : t9
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t9) => {
    const e = t9 / 255;
    return t9 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t9, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t9 + (e - t9) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t9 + (e - t9) * (2 / 3 - i) * 6 : t9),
  hsl2rgb: ({ h: t9, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t9 /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Mi.hue2rgb(o, n, t9 + 1 / 3) * 255;
      case "g":
        return Mi.hue2rgb(o, n, t9) * 255;
      case "b":
        return Mi.hue2rgb(o, n, t9 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t9, g: e, b: i }, r) => {
    t9 /= 255, e /= 255, i /= 255;
    const n = Math.max(t9, e, i), o = Math.min(t9, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t9:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t9) / a + 2) * 60;
      case i:
        return ((t9 - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var Md = Mi;
var Od = {
  /* API */
  clamp: (t9, e, i) => e > i ? Math.min(e, Math.max(i, t9)) : Math.min(i, Math.max(e, t9)),
  round: (t9) => Math.round(t9 * 1e10) / 1e10
};
var $d = Od;
var Id = {
  /* API */
  dec2hex: (t9) => {
    const e = Math.round(t9).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
};
var Dd = Id;
var Nd = {
  channel: Md,
  lang: $d,
  unit: Dd
};
var $ = Nd;
var Jt = {};
for (let t9 = 0; t9 <= 255; t9++)
  Jt[t9] = $.unit.dec2hex(t9);
var rt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var Rd = class {
  constructor() {
    this.type = rt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = rt.ALL;
  }
  is(e) {
    return this.type === e;
  }
};
var Pd = Rd;
var qd = class {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = false, this.data = e, this.type = new Pd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = false, this.data = e, this.type.type = rt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = $.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = $.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = $.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = $.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = $.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = $.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
};
var zd = qd;
var Wd = new zd({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var dr = Wd;
var Sa = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t9) => {
    if (t9.charCodeAt(0) !== 35)
      return;
    const e = t9.match(Sa.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, u = s ? 255 : 15;
    return dr.set({
      r: (r >> l * (h + 3) & u) * a,
      g: (r >> l * (h + 2) & u) * a,
      b: (r >> l * (h + 1) & u) * a,
      a: o ? (r & u) * a / 255 : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}${Jt[Math.round(n * 255)]}` : `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}`;
  }
};
var Ye = Sa;
var Oi = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t9) => {
    const e = t9.match(Oi.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return $.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return $.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return $.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return $.channel.clamp.h(parseFloat(t9));
  },
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t9.match(Oi.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return dr.set({
      h: Oi._hue2deg(r),
      s: $.channel.clamp.s(parseFloat(n)),
      l: $.channel.clamp.l(parseFloat(o)),
      a: s ? $.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { h: e, s: i, l: r, a: n } = t9;
    return n < 1 ? `hsla(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%, ${n})` : `hsl(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%)`;
  }
};
var Si = Oi;
var $i = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t9) => {
    t9 = t9.toLowerCase();
    const e = $i.colors[t9];
    if (e)
      return Ye.parse(e);
  },
  stringify: (t9) => {
    const e = Ye.stringify(t9);
    for (const i in $i.colors)
      if ($i.colors[i] === e)
        return i;
  }
};
var Xo = $i;
var va = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t9.match(va.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, u] = i;
    return dr.set({
      r: $.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: $.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: $.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? $.channel.clamp.a(u ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `rgba(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)}, ${$.lang.round(n)})` : `rgb(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)})`;
  }
};
var vi = va;
var Hd = {
  /* VARIABLES */
  format: {
    keyword: Xo,
    hex: Ye,
    rgb: vi,
    rgba: vi,
    hsl: Si,
    hsla: Si
  },
  /* API */
  parse: (t9) => {
    if (typeof t9 != "string")
      return t9;
    const e = Ye.parse(t9) || vi.parse(t9) || Si.parse(t9) || Xo.parse(t9);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t9}"`);
  },
  stringify: (t9) => !t9.changed && t9.color ? t9.color : t9.type.is(rt.HSL) || t9.data.r === void 0 ? Si.stringify(t9) : t9.a < 1 || !Number.isInteger(t9.r) || !Number.isInteger(t9.g) || !Number.isInteger(t9.b) ? vi.stringify(t9) : Ye.stringify(t9)
};
var Ot = Hd;
var jd = (t9, e) => {
  const i = Ot.parse(t9);
  for (const r in e)
    i[r] = $.channel.clamp[r](e[r]);
  return Ot.stringify(i);
};
var wa = jd;
var Ud = (t9, e, i = 0, r = 1) => {
  if (typeof t9 != "number")
    return wa(t9, { a: e });
  const n = dr.set({
    r: $.channel.clamp.r(t9),
    g: $.channel.clamp.g(e),
    b: $.channel.clamp.b(i),
    a: $.channel.clamp.a(r)
  });
  return Ot.stringify(n);
};
var Ge = Ud;
var Yd = (t9) => {
  const { r: e, g: i, b: r } = Ot.parse(t9), n = 0.2126 * $.channel.toLinear(e) + 0.7152 * $.channel.toLinear(i) + 0.0722 * $.channel.toLinear(r);
  return $.lang.round(n);
};
var Gd = Yd;
var Vd = (t9) => Gd(t9) >= 0.5;
var Xd = Vd;
var Kd = (t9) => !Xd(t9);
var ci = Kd;
var Zd = (t9, e, i) => {
  const r = Ot.parse(t9), n = r[e], o = $.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), Ot.stringify(r);
};
var Ba = Zd;
var Jd = (t9, e) => Ba(t9, "l", e);
var B = Jd;
var Qd = (t9, e) => Ba(t9, "l", -e);
var L = Qd;
var tp = (t9, e) => {
  const i = Ot.parse(t9), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return wa(t9, r);
};
var g = tp;
var ep = (t9, e, i = 50) => {
  const { r, g: n, b: o, a: s } = Ot.parse(t9), { r: a, g: l, b: h, a: u } = Ot.parse(e), f = i / 100, c = f * 2 - 1, p = s - u, v = ((c * p === -1 ? c : (c + p) / (1 + c * p)) + 1) / 2, M = 1 - v, q = r * v + a * M, S = n * v + l * M, z = o * v + h * M, Q = s * f + u * (1 - f);
  return Ge(q, S, z, Q);
};
var ip = ep;
var rp = (t9, e = 100) => {
  const i = Ot.parse(t9);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, ip(i, t9, e);
};
var _ = rp;
var lt = (t9, e) => e ? g(t9, { s: -40, l: 10 }) : g(t9, { s: -40, l: -10 });
var pr = "#ffffff";
var gr = "#f2f2f2";
var np = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var i, r, n, o, s, a, l, h, u, f, c;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || g(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || g(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || lt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || lt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? L(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || L(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || B(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this.darkMode)
      for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
        this["cScale" + p] = L(this["cScale" + p], 75);
    else
      for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
        this["cScale" + p] = L(this["cScale" + p], 25);
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this["cScaleInv" + p] = this["cScaleInv" + p] || _(this["cScale" + p]);
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this.darkMode ? this["cScalePeer" + p] = this["cScalePeer" + p] || B(this["cScale" + p], 10) : this["cScalePeer" + p] = this["cScalePeer" + p] || L(this["cScale" + p], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let p = 0; p < this.THEME_COLOR_LIMIT; p++)
      this["cScaleLabel" + p] = this["cScaleLabel" + p] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let p = 0; p < 5; p++)
      this["surface" + p] = this["surface" + p] || g(this.mainBkg, { h: 180, s: -15, l: e * (5 + p * 3) }), this["surfacePeer" + p] = this["surfacePeer" + p] || g(this.mainBkg, { h: 180, s: -15, l: e * (8 + p * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || g(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || g(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || g(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || g(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || g(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : L(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((i = this.xyChart) == null ? void 0 : i.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((u = this.xyChart) == null ? void 0 : u.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((f = this.xyChart) == null ? void 0 : f.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((c = this.xyChart) == null ? void 0 : c.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? L(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = L(this.git0, 25), this.git1 = L(this.git1, 25), this.git2 = L(this.git2, 25), this.git3 = L(this.git3, 25), this.git4 = L(this.git4, 25), this.git5 = L(this.git5, 25), this.git6 = L(this.git6, 25), this.git7 = L(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var op = (t9) => {
  const e = new np();
  return e.calculate(t9), e;
};
var sp = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = B(this.primaryColor, 16), this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = B(_("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = Ge(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = L("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = L(this.sectionBkgColor, 10), this.taskBorderColor = Ge(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ge(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.secondBkg = B(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = B(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = B(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || _(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScalePeer" + c] = this["cScalePeer" + c] || B(this["cScale" + c], 10);
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(-10 + c * 4) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(-7 + c * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : L(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? L(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = B(this.secondaryColor, 20), this.git1 = B(this.pie2 || this.secondaryColor, 20), this.git2 = B(this.pie3 || this.tertiaryColor, 20), this.git3 = B(this.pie4 || g(this.primaryColor, { h: -30 }), 20), this.git4 = B(this.pie5 || g(this.primaryColor, { h: -60 }), 20), this.git5 = B(this.pie6 || g(this.primaryColor, { h: -90 }), 10), this.git6 = B(this.pie7 || g(this.primaryColor, { h: 60 }), 10), this.git7 = B(this.pie8 || g(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || B(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || B(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var ap = (t9) => {
  const e = new sp();
  return e.calculate(t9), e;
};
var lp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = g(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Ge(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || L(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || L(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = L(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || L(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || g(this["cScale" + c], { h: 180 });
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, l: -(7 + c * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || _(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || _(this.labelTextColor);
      for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
        this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || g(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || g(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : L(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = L(this.git0, 25), this.git1 = L(this.git1, 25), this.git2 = L(this.git2, 25), this.git3 = L(this.git3, 25), this.git4 = L(this.git4, 25), this.git5 = L(this.git5, 25), this.git6 = L(this.git6, 25), this.git7 = L(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(_(this.git0), 25), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var hp = (t9) => {
  const e = new lp();
  return e.calculate(t9), e;
};
var cp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = B("#cde498", 10), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.primaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.actorBorder = L(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || g(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || g(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || g(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || g(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || g(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || g(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || g(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || g(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || L(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || L(this.tertiaryColor, 40);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScale" + c] = L(this["cScale" + c], 10), this["cScalePeer" + c] = this["cScalePeer" + c] || L(this["cScale" + c], 25);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || g(this["cScale" + c], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { h: 30, s: -30, l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || g(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || g(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || g(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || g(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || g(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || g(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || g(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || g(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : L(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, { h: -30 }), this.git4 = this.git4 || g(this.primaryColor, { h: -60 }), this.git5 = this.git5 || g(this.primaryColor, { h: -90 }), this.git6 = this.git6 || g(this.primaryColor, { h: 60 }), this.git7 = this.git7 || g(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = L(this.git0, 25), this.git1 = L(this.git1, 25), this.git2 = L(this.git2, 25), this.git3 = L(this.git3, 25), this.git4 = L(this.git4, 25), this.git5 = L(this.git5, 25), this.git6 = L(this.git6, 25), this.git7 = L(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var up = (t9) => {
  const e = new cp();
  return e.calculate(t9), e;
};
var fp = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = B(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = g(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var e, i, r, n, o, s, a, l, h, u, f;
    this.secondBkg = B(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleInv" + c] = this["cScaleInv" + c] || _(this["cScale" + c]);
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this.darkMode ? this["cScalePeer" + c] = this["cScalePeer" + c] || B(this["cScale" + c], 10) : this["cScalePeer" + c] = this["cScalePeer" + c] || L(this["cScale" + c], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["cScaleLabel" + c] = this["cScaleLabel" + c] || this.scaleLabelColor;
    for (let c = 0; c < 5; c++)
      this["surface" + c] = this["surface" + c] || g(this.mainBkg, { l: -(5 + c * 5) }), this["surfacePeer" + c] = this["surfacePeer" + c] || g(this.mainBkg, { l: -(8 + c * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = B(this.contrast, 30), this.sectionBkgColor2 = B(this.contrast, 30), this.taskBorderColor = L(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = B(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = L(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, { h: 64 }), this.fillType3 = g(this.secondaryColor, { h: 64 }), this.fillType4 = g(this.primaryColor, { h: -64 }), this.fillType5 = g(this.secondaryColor, { h: -64 }), this.fillType6 = g(this.primaryColor, { h: 128 }), this.fillType7 = g(this.secondaryColor, { h: 128 });
    for (let c = 0; c < this.THEME_COLOR_LIMIT; c++)
      this["pie" + c] = this["cScale" + c];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : L(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
      titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((o = this.xyChart) == null ? void 0 : o.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((s = this.xyChart) == null ? void 0 : s.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((h = this.xyChart) == null ? void 0 : h.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((u = this.xyChart) == null ? void 0 : u.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((f = this.xyChart) == null ? void 0 : f.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = L(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || g(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || g(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || g(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || g(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || g(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var dp = (t9) => {
  const e = new fp();
  return e.calculate(t9), e;
};
var Yt = {
  base: {
    getThemeVariables: op
  },
  dark: {
    getThemeVariables: ap
  },
  default: {
    getThemeVariables: hp
  },
  forest: {
    getThemeVariables: up
  },
  neutral: {
    getThemeVariables: dp
  }
};
var jt = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: true,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showTitle: true,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: true,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: true,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: true,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: true,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: true,
    prefix: "",
    suffix: ""
  },
  theme: "default",
  maxTextSize: 5e4,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize"
  ],
  deterministicIds: false,
  fontSize: 16
};
var Fa = {
  ...jt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Yt.default.getThemeVariables(),
  sequence: {
    ...jt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...jt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...jt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...jt.pie,
    useWidth: 984
  },
  xyChart: {
    ...jt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...jt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...jt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: false
  },
  sankey: {
    ...jt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: false
  }
};
var Aa = (t9, e = "") => Object.keys(t9).reduce((i, r) => Array.isArray(t9[r]) ? i : typeof t9[r] == "object" && t9[r] !== null ? [...i, e + r, ...Aa(t9[r], "")] : [...i, e + r], []);
var pp = new Set(Aa(Fa, ""));
var gp = Fa;
var Vi = (t9) => {
  if (A.debug("sanitizeDirective called with", t9), !(typeof t9 != "object" || t9 == null)) {
    if (Array.isArray(t9)) {
      t9.forEach((e) => Vi(e));
      return;
    }
    for (const e of Object.keys(t9)) {
      if (A.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !pp.has(e) || t9[e] == null) {
        A.debug("sanitize deleting key: ", e), delete t9[e];
        continue;
      }
      if (typeof t9[e] == "object") {
        A.debug("sanitizing object", e), Vi(t9[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && (A.debug("sanitizing css option", e), t9[e] = mp(t9[e]));
    }
    if (t9.themeVariables)
      for (const e of Object.keys(t9.themeVariables)) {
        const i = t9.themeVariables[e];
        i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t9.themeVariables[e] = "");
      }
    A.debug("After sanitization", t9);
  }
};
var mp = (t9) => {
  let e = 0, i = 0;
  for (const r of t9) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t9;
};
var La = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var Ve = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var yp = /\s*%%.*\n/gm;
var Ea = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var Le = {};
var mr = function(t9, e) {
  t9 = t9.replace(La, "").replace(Ve, "").replace(yp, `
`);
  for (const [i, { detector: r }] of Object.entries(Le))
    if (r(t9, e))
      return i;
  throw new Ea(
    `No diagram type detected matching given configuration for text: ${t9}`
  );
};
var Ma = (...t9) => {
  for (const { id: e, detector: i, loader: r } of t9)
    Oa(e, i, r);
};
var Oa = (t9, e, i) => {
  Le[t9] ? A.error(`Detector with key ${t9} already exists`) : Le[t9] = { detector: e, loader: i }, A.debug(`Detector with key ${t9} added${i ? " with loader" : ""}`);
};
var _p = (t9) => Le[t9].loader;
var ln = (t9, e, { depth: i = 2, clobber: r = false } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t9) ? (e.forEach((o) => ln(t9, o, n)), t9) : Array.isArray(e) && Array.isArray(t9) ? (e.forEach((o) => {
    t9.includes(o) || t9.push(o);
  }), t9) : t9 === void 0 || i <= 0 ? t9 != null && typeof t9 == "object" && typeof e == "object" ? Object.assign(t9, e) : e : (e !== void 0 && typeof t9 == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t9[o] === void 0 || typeof t9[o] == "object") ? (t9[o] === void 0 && (t9[o] = Array.isArray(e[o]) ? [] : {}), t9[o] = ln(t9[o], e[o], { depth: i - 1, clobber: r })) : (r || typeof t9[o] != "object" && typeof e[o] != "object") && (t9[o] = e[o]);
  }), t9);
};
var nt = ln;
var Cp = typeof global == "object" && global && global.Object === Object && global;
var $a = Cp;
var xp = typeof self == "object" && self && self.Object === Object && self;
var bp = $a || xp || Function("return this")();
var Dt = bp;
var Tp = Dt.Symbol;
var Xi = Tp;
var Ia = Object.prototype;
var kp = Ia.hasOwnProperty;
var Sp = Ia.toString;
var We = Xi ? Xi.toStringTag : void 0;
function vp(t9) {
  var e = kp.call(t9, We), i = t9[We];
  try {
    t9[We] = void 0;
    var r = true;
  } catch {
  }
  var n = Sp.call(t9);
  return r && (e ? t9[We] = i : delete t9[We]), n;
}
var wp = Object.prototype;
var Bp = wp.toString;
function Fp(t9) {
  return Bp.call(t9);
}
var Ap = "[object Null]";
var Lp = "[object Undefined]";
var Ko = Xi ? Xi.toStringTag : void 0;
function Ie(t9) {
  return t9 == null ? t9 === void 0 ? Lp : Ap : Ko && Ko in Object(t9) ? vp(t9) : Fp(t9);
}
function ge(t9) {
  var e = typeof t9;
  return t9 != null && (e == "object" || e == "function");
}
var Ep = "[object AsyncFunction]";
var Mp = "[object Function]";
var Op = "[object GeneratorFunction]";
var $p = "[object Proxy]";
function Dn(t9) {
  if (!ge(t9))
    return false;
  var e = Ie(t9);
  return e == Mp || e == Op || e == Ep || e == $p;
}
var Ip = Dt["__core-js_shared__"];
var Hr = Ip;
var Zo = function() {
  var t9 = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return t9 ? "Symbol(src)_1." + t9 : "";
}();
function Dp(t9) {
  return !!Zo && Zo in t9;
}
var Np = Function.prototype;
var Rp = Np.toString;
function me(t9) {
  if (t9 != null) {
    try {
      return Rp.call(t9);
    } catch {
    }
    try {
      return t9 + "";
    } catch {
    }
  }
  return "";
}
var Pp = /[\\^$.*+?()[\]{}|]/g;
var qp = /^\[object .+?Constructor\]$/;
var zp = Function.prototype;
var Wp = Object.prototype;
var Hp = zp.toString;
var jp = Wp.hasOwnProperty;
var Up = RegExp(
  "^" + Hp.call(jp).replace(Pp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yp(t9) {
  if (!ge(t9) || Dp(t9))
    return false;
  var e = Dn(t9) ? Up : qp;
  return e.test(me(t9));
}
function Gp(t9, e) {
  return t9 == null ? void 0 : t9[e];
}
function ye(t9, e) {
  var i = Gp(t9, e);
  return Yp(i) ? i : void 0;
}
var Vp = ye(Object, "create");
var ri = Vp;
function Xp() {
  this.__data__ = ri ? ri(null) : {}, this.size = 0;
}
function Kp(t9) {
  var e = this.has(t9) && delete this.__data__[t9];
  return this.size -= e ? 1 : 0, e;
}
var Zp = "__lodash_hash_undefined__";
var Jp = Object.prototype;
var Qp = Jp.hasOwnProperty;
function tg(t9) {
  var e = this.__data__;
  if (ri) {
    var i = e[t9];
    return i === Zp ? void 0 : i;
  }
  return Qp.call(e, t9) ? e[t9] : void 0;
}
var eg = Object.prototype;
var ig = eg.hasOwnProperty;
function rg(t9) {
  var e = this.__data__;
  return ri ? e[t9] !== void 0 : ig.call(e, t9);
}
var ng = "__lodash_hash_undefined__";
function og(t9, e) {
  var i = this.__data__;
  return this.size += this.has(t9) ? 0 : 1, i[t9] = ri && e === void 0 ? ng : e, this;
}
function de(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = Xp;
de.prototype.delete = Kp;
de.prototype.get = tg;
de.prototype.has = rg;
de.prototype.set = og;
function sg() {
  this.__data__ = [], this.size = 0;
}
function yr(t9, e) {
  return t9 === e || t9 !== t9 && e !== e;
}
function _r(t9, e) {
  for (var i = t9.length; i--; )
    if (yr(t9[i][0], e))
      return i;
  return -1;
}
var ag = Array.prototype;
var lg = ag.splice;
function hg(t9) {
  var e = this.__data__, i = _r(e, t9);
  if (i < 0)
    return false;
  var r = e.length - 1;
  return i == r ? e.pop() : lg.call(e, i, 1), --this.size, true;
}
function cg(t9) {
  var e = this.__data__, i = _r(e, t9);
  return i < 0 ? void 0 : e[i][1];
}
function ug(t9) {
  return _r(this.__data__, t9) > -1;
}
function fg(t9, e) {
  var i = this.__data__, r = _r(i, t9);
  return r < 0 ? (++this.size, i.push([t9, e])) : i[r][1] = e, this;
}
function Vt(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
Vt.prototype.clear = sg;
Vt.prototype.delete = hg;
Vt.prototype.get = cg;
Vt.prototype.has = ug;
Vt.prototype.set = fg;
var dg = ye(Dt, "Map");
var ni = dg;
function pg() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (ni || Vt)(),
    string: new de()
  };
}
function gg(t9) {
  var e = typeof t9;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t9 !== "__proto__" : t9 === null;
}
function Cr(t9, e) {
  var i = t9.__data__;
  return gg(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function mg(t9) {
  var e = Cr(this, t9).delete(t9);
  return this.size -= e ? 1 : 0, e;
}
function yg(t9) {
  return Cr(this, t9).get(t9);
}
function _g(t9) {
  return Cr(this, t9).has(t9);
}
function Cg(t9, e) {
  var i = Cr(this, t9), r = i.size;
  return i.set(t9, e), this.size += i.size == r ? 0 : 1, this;
}
function ne(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = pg;
ne.prototype.delete = mg;
ne.prototype.get = yg;
ne.prototype.has = _g;
ne.prototype.set = Cg;
var xg = "Expected a function";
function ui(t9, e) {
  if (typeof t9 != "function" || e != null && typeof e != "function")
    throw new TypeError(xg);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t9.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (ui.Cache || ne)(), i;
}
ui.Cache = ne;
function bg() {
  this.__data__ = new Vt(), this.size = 0;
}
function Tg(t9) {
  var e = this.__data__, i = e.delete(t9);
  return this.size = e.size, i;
}
function kg(t9) {
  return this.__data__.get(t9);
}
function Sg(t9) {
  return this.__data__.has(t9);
}
var vg = 200;
function wg(t9, e) {
  var i = this.__data__;
  if (i instanceof Vt) {
    var r = i.__data__;
    if (!ni || r.length < vg - 1)
      return r.push([t9, e]), this.size = ++i.size, this;
    i = this.__data__ = new ne(r);
  }
  return i.set(t9, e), this.size = i.size, this;
}
function De(t9) {
  var e = this.__data__ = new Vt(t9);
  this.size = e.size;
}
De.prototype.clear = bg;
De.prototype.delete = Tg;
De.prototype.get = kg;
De.prototype.has = Sg;
De.prototype.set = wg;
var Bg = function() {
  try {
    var t9 = ye(Object, "defineProperty");
    return t9({}, "", {}), t9;
  } catch {
  }
}();
var Ki = Bg;
function Nn(t9, e, i) {
  e == "__proto__" && Ki ? Ki(t9, e, {
    configurable: true,
    enumerable: true,
    value: i,
    writable: true
  }) : t9[e] = i;
}
function hn(t9, e, i) {
  (i !== void 0 && !yr(t9[e], i) || i === void 0 && !(e in t9)) && Nn(t9, e, i);
}
function Fg(t9) {
  return function(e, i, r) {
    for (var n = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
      var l = s[t9 ? a : ++n];
      if (i(o[l], l, o) === false)
        break;
    }
    return e;
  };
}
var Ag = Fg();
var Lg = Ag;
var Da = typeof exports == "object" && exports && !exports.nodeType && exports;
var Jo = Da && typeof module == "object" && module && !module.nodeType && module;
var Eg = Jo && Jo.exports === Da;
var Qo = Eg ? Dt.Buffer : void 0;
var ts = Qo ? Qo.allocUnsafe : void 0;
function Mg(t9, e) {
  if (e)
    return t9.slice();
  var i = t9.length, r = ts ? ts(i) : new t9.constructor(i);
  return t9.copy(r), r;
}
var Og = Dt.Uint8Array;
var es = Og;
function $g(t9) {
  var e = new t9.constructor(t9.byteLength);
  return new es(e).set(new es(t9)), e;
}
function Ig(t9, e) {
  var i = e ? $g(t9.buffer) : t9.buffer;
  return new t9.constructor(i, t9.byteOffset, t9.length);
}
function Dg(t9, e) {
  var i = -1, r = t9.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t9[i];
  return e;
}
var is = Object.create;
var Ng = /* @__PURE__ */ function() {
  function t9() {
  }
  return function(e) {
    if (!ge(e))
      return {};
    if (is)
      return is(e);
    t9.prototype = e;
    var i = new t9();
    return t9.prototype = void 0, i;
  };
}();
var Rg = Ng;
function Na(t9, e) {
  return function(i) {
    return t9(e(i));
  };
}
var Pg = Na(Object.getPrototypeOf, Object);
var Ra = Pg;
var qg = Object.prototype;
function xr(t9) {
  var e = t9 && t9.constructor, i = typeof e == "function" && e.prototype || qg;
  return t9 === i;
}
function zg(t9) {
  return typeof t9.constructor == "function" && !xr(t9) ? Rg(Ra(t9)) : {};
}
function fi(t9) {
  return t9 != null && typeof t9 == "object";
}
var Wg = "[object Arguments]";
function rs(t9) {
  return fi(t9) && Ie(t9) == Wg;
}
var Pa = Object.prototype;
var Hg = Pa.hasOwnProperty;
var jg = Pa.propertyIsEnumerable;
var Ug = rs(/* @__PURE__ */ function() {
  return arguments;
}()) ? rs : function(t9) {
  return fi(t9) && Hg.call(t9, "callee") && !jg.call(t9, "callee");
};
var Zi = Ug;
var Yg = Array.isArray;
var Ji = Yg;
var Gg = 9007199254740991;
function qa(t9) {
  return typeof t9 == "number" && t9 > -1 && t9 % 1 == 0 && t9 <= Gg;
}
function br(t9) {
  return t9 != null && qa(t9.length) && !Dn(t9);
}
function Vg(t9) {
  return fi(t9) && br(t9);
}
function Xg() {
  return false;
}
var za = typeof exports == "object" && exports && !exports.nodeType && exports;
var ns = za && typeof module == "object" && module && !module.nodeType && module;
var Kg = ns && ns.exports === za;
var os = Kg ? Dt.Buffer : void 0;
var Zg = os ? os.isBuffer : void 0;
var Jg = Zg || Xg;
var Rn = Jg;
var Qg = "[object Object]";
var tm = Function.prototype;
var em = Object.prototype;
var Wa = tm.toString;
var im = em.hasOwnProperty;
var rm = Wa.call(Object);
function nm(t9) {
  if (!fi(t9) || Ie(t9) != Qg)
    return false;
  var e = Ra(t9);
  if (e === null)
    return true;
  var i = im.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && Wa.call(i) == rm;
}
var om = "[object Arguments]";
var sm = "[object Array]";
var am = "[object Boolean]";
var lm = "[object Date]";
var hm = "[object Error]";
var cm = "[object Function]";
var um = "[object Map]";
var fm = "[object Number]";
var dm = "[object Object]";
var pm = "[object RegExp]";
var gm = "[object Set]";
var mm = "[object String]";
var ym = "[object WeakMap]";
var _m = "[object ArrayBuffer]";
var Cm = "[object DataView]";
var xm = "[object Float32Array]";
var bm = "[object Float64Array]";
var Tm = "[object Int8Array]";
var km = "[object Int16Array]";
var Sm = "[object Int32Array]";
var vm = "[object Uint8Array]";
var wm = "[object Uint8ClampedArray]";
var Bm = "[object Uint16Array]";
var Fm = "[object Uint32Array]";
var Y = {};
Y[xm] = Y[bm] = Y[Tm] = Y[km] = Y[Sm] = Y[vm] = Y[wm] = Y[Bm] = Y[Fm] = true;
Y[om] = Y[sm] = Y[_m] = Y[am] = Y[Cm] = Y[lm] = Y[hm] = Y[cm] = Y[um] = Y[fm] = Y[dm] = Y[pm] = Y[gm] = Y[mm] = Y[ym] = false;
function Am(t9) {
  return fi(t9) && qa(t9.length) && !!Y[Ie(t9)];
}
function Lm(t9) {
  return function(e) {
    return t9(e);
  };
}
var Ha = typeof exports == "object" && exports && !exports.nodeType && exports;
var Xe = Ha && typeof module == "object" && module && !module.nodeType && module;
var Em = Xe && Xe.exports === Ha;
var jr = Em && $a.process;
var Mm = function() {
  try {
    var t9 = Xe && Xe.require && Xe.require("util").types;
    return t9 || jr && jr.binding && jr.binding("util");
  } catch {
  }
}();
var ss = Mm;
var as = ss && ss.isTypedArray;
var Om = as ? Lm(as) : Am;
var Pn = Om;
function cn(t9, e) {
  if (!(e === "constructor" && typeof t9[e] == "function") && e != "__proto__")
    return t9[e];
}
var $m = Object.prototype;
var Im = $m.hasOwnProperty;
function Dm(t9, e, i) {
  var r = t9[e];
  (!(Im.call(t9, e) && yr(r, i)) || i === void 0 && !(e in t9)) && Nn(t9, e, i);
}
function Nm(t9, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var a = e[o], l = r ? r(i[a], t9[a], a, i, t9) : void 0;
    l === void 0 && (l = t9[a]), n ? Nn(i, a, l) : Dm(i, a, l);
  }
  return i;
}
function Rm(t9, e) {
  for (var i = -1, r = Array(t9); ++i < t9; )
    r[i] = e(i);
  return r;
}
var Pm = 9007199254740991;
var qm = /^(?:0|[1-9]\d*)$/;
function ja(t9, e) {
  var i = typeof t9;
  return e = e ?? Pm, !!e && (i == "number" || i != "symbol" && qm.test(t9)) && t9 > -1 && t9 % 1 == 0 && t9 < e;
}
var zm = Object.prototype;
var Wm = zm.hasOwnProperty;
function Hm(t9, e) {
  var i = Ji(t9), r = !i && Zi(t9), n = !i && !r && Rn(t9), o = !i && !r && !n && Pn(t9), s = i || r || n || o, a = s ? Rm(t9.length, String) : [], l = a.length;
  for (var h in t9)
    (e || Wm.call(t9, h)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    ja(h, l))) && a.push(h);
  return a;
}
function jm(t9) {
  var e = [];
  if (t9 != null)
    for (var i in Object(t9))
      e.push(i);
  return e;
}
var Um = Object.prototype;
var Ym = Um.hasOwnProperty;
function Gm(t9) {
  if (!ge(t9))
    return jm(t9);
  var e = xr(t9), i = [];
  for (var r in t9)
    r == "constructor" && (e || !Ym.call(t9, r)) || i.push(r);
  return i;
}
function Ua(t9) {
  return br(t9) ? Hm(t9, true) : Gm(t9);
}
function Vm(t9) {
  return Nm(t9, Ua(t9));
}
function Xm(t9, e, i, r, n, o, s) {
  var a = cn(t9, i), l = cn(e, i), h = s.get(l);
  if (h) {
    hn(t9, i, h);
    return;
  }
  var u = o ? o(a, l, i + "", t9, e, s) : void 0, f = u === void 0;
  if (f) {
    var c = Ji(l), p = !c && Rn(l), y = !c && !p && Pn(l);
    u = l, c || p || y ? Ji(a) ? u = a : Vg(a) ? u = Dg(a) : p ? (f = false, u = Mg(l, true)) : y ? (f = false, u = Ig(l, true)) : u = [] : nm(l) || Zi(l) ? (u = a, Zi(a) ? u = Vm(a) : (!ge(a) || Dn(a)) && (u = zg(l))) : f = false;
  }
  f && (s.set(l, u), n(u, l, r, o, s), s.delete(l)), hn(t9, i, u);
}
function Ya(t9, e, i, r, n) {
  t9 !== e && Lg(e, function(o, s) {
    if (n || (n = new De()), ge(o))
      Xm(t9, e, s, i, Ya, r, n);
    else {
      var a = r ? r(cn(t9, s), o, s + "", t9, e, n) : void 0;
      a === void 0 && (a = o), hn(t9, s, a);
    }
  }, Ua);
}
function Ga(t9) {
  return t9;
}
function Km(t9, e, i) {
  switch (i.length) {
    case 0:
      return t9.call(e);
    case 1:
      return t9.call(e, i[0]);
    case 2:
      return t9.call(e, i[0], i[1]);
    case 3:
      return t9.call(e, i[0], i[1], i[2]);
  }
  return t9.apply(e, i);
}
var ls = Math.max;
function Zm(t9, e, i) {
  return e = ls(e === void 0 ? t9.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, o = ls(r.length - e, 0), s = Array(o); ++n < o; )
      s[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(s), Km(t9, this, a);
  };
}
function Jm(t9) {
  return function() {
    return t9;
  };
}
var Qm = Ki ? function(t9, e) {
  return Ki(t9, "toString", {
    configurable: true,
    enumerable: false,
    value: Jm(e),
    writable: true
  });
} : Ga;
var t0 = Qm;
var e0 = 800;
var i0 = 16;
var r0 = Date.now;
function n0(t9) {
  var e = 0, i = 0;
  return function() {
    var r = r0(), n = i0 - (r - i);
    if (i = r, n > 0) {
      if (++e >= e0)
        return arguments[0];
    } else
      e = 0;
    return t9.apply(void 0, arguments);
  };
}
var o0 = n0(t0);
var s0 = o0;
function a0(t9, e) {
  return s0(Zm(t9, e, Ga), t9 + "");
}
function l0(t9, e, i) {
  if (!ge(i))
    return false;
  var r = typeof e;
  return (r == "number" ? br(i) && ja(e, i.length) : r == "string" && e in i) ? yr(i[e], t9) : false;
}
function h0(t9) {
  return a0(function(e, i) {
    var r = -1, n = i.length, o = n > 1 ? i[n - 1] : void 0, s = n > 2 ? i[2] : void 0;
    for (o = t9.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && l0(i[0], i[1], s) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t9(e, a, r, o);
    }
    return e;
  });
}
var c0 = h0(function(t9, e, i) {
  Ya(t9, e, i);
});
var u0 = c0;
var f0 = "​";
var d0 = {
  curveBasis: Pf,
  curveBasisClosed: qf,
  curveBasisOpen: zf,
  curveBumpX: Nf,
  curveBumpY: Rf,
  curveBundle: Wf,
  curveCardinalClosed: jf,
  curveCardinalOpen: Uf,
  curveCardinal: Hf,
  curveCatmullRomClosed: Gf,
  curveCatmullRomOpen: Vf,
  curveCatmullRom: Yf,
  curveLinear: Df,
  curveLinearClosed: Xf,
  curveMonotoneX: Kf,
  curveMonotoneY: Zf,
  curveNatural: Jf,
  curveStep: Qf,
  curveStepAfter: ed,
  curveStepBefore: td
};
var p0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var g0 = function(t9, e) {
  const i = Va(t9, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const s = i.map((a) => a.args);
    Vi(s), r = nt(r, [...s]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = mr(t9, e);
  const o = "config";
  return r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]), r;
};
var Va = function(t9, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${p0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t9 = t9.trim().replace(i, "").replace(/'/gm, '"'), A.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t9}`
    );
    let r;
    const n = [];
    for (; (r = Ve.exec(t9)) !== null; )
      if (r.index === Ve.lastIndex && Ve.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 ? { type: t9, args: null } : n.length === 1 ? n[0] : n;
  } catch (i) {
    return A.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t9}'`
    ), { type: void 0, args: null };
  }
};
var m0 = function(t9) {
  return t9.replace(Ve, "");
};
var y0 = function(t9, e) {
  for (const [i, r] of e.entries())
    if (r.match(t9))
      return i;
  return -1;
};
function _0(t9, e) {
  if (!t9)
    return e;
  const i = `curve${t9.charAt(0).toUpperCase() + t9.slice(1)}`;
  return d0[i] ?? e;
}
function C0(t9, e) {
  const i = t9.trim();
  if (i)
    return e.securityLevel !== "loose" ? Ms(i) : i;
}
var x0 = (t9, ...e) => {
  const i = t9.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o) {
      A.error(`Function name: ${t9} not found in window`);
      return;
    }
  o[n](...e);
};
function Xa(t9, e) {
  return !t9 || !e ? 0 : Math.sqrt(Math.pow(e.x - t9.x, 2) + Math.pow(e.y - t9.y, 2));
}
function b0(t9) {
  let e, i = 0;
  t9.forEach((n) => {
    i += Xa(n, e), e = n;
  });
  const r = i / 2;
  return qn(t9, r);
}
function T0(t9) {
  return t9.length === 1 ? t9[0] : b0(t9);
}
var hs = (t9, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t9 * i) / i;
};
var qn = (t9, e) => {
  let i, r = e;
  for (const n of t9) {
    if (i) {
      const o = Xa(n, i);
      if (o < r)
        r -= o;
      else {
        const s = r / o;
        if (s <= 0)
          return i;
        if (s >= 1)
          return { x: n.x, y: n.y };
        if (s > 0 && s < 1)
          return {
            x: hs((1 - s) * i.x + s * n.x, 5),
            y: hs((1 - s) * i.y + s * n.y, 5)
          };
      }
    }
    i = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
};
var k0 = (t9, e, i) => {
  A.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const n = qn(e, 25), o = t9 ? 10 : 5, s = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(s) * o + (e[0].x + n.x) / 2, a.y = -Math.cos(s) * o + (e[0].y + n.y) / 2, a;
};
function S0(t9, e, i) {
  const r = structuredClone(i);
  A.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const n = 25 + t9, o = qn(r, n), s = 10 + t9 * 0.5, a = Math.atan2(r[0].y - o.y, r[0].x - o.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a + Math.PI) * s + (r[0].y + o.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * s + (r[0].y + o.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2 - 5) : (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2), l;
}
function v0(t9) {
  let e = "", i = "";
  for (const r of t9)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
var cs = 0;
var w0 = () => (cs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + cs);
function B0(t9) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t9; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
var F0 = (t9) => B0(t9.length);
var A0 = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
};
var L0 = function(t9, e) {
  const i = e.text.replace(In.lineBreakRegex, " "), [, r] = Wn(e.fontSize), n = t9.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
};
var E0 = ui(
  (t9, e, i) => {
    if (!t9 || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), In.lineBreakRegex.test(t9)))
      return t9;
    const r = t9.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = Qi(`${s} `, i), h = Qi(o, i);
      if (l > e) {
        const { hyphenatedStrings: c, remainingWord: p } = M0(s, e, "-", i);
        n.push(o, ...c), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t9, e, i) => `${t9}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
);
var M0 = ui(
  (t9, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t9], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (Qi(h, r) >= e) {
        const f = l + 1, c = n.length === f, p = `${h}${i}`;
        o.push(c ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t9, e, i = "-", r) => `${t9}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function O0(t9, e) {
  return zn(t9, e).height;
}
function Qi(t9, e) {
  return zn(t9, e).width;
}
var zn = ui(
  (t9, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t9)
      return { width: 0, height: 0 };
    const [, o] = Wn(i), s = ["sans-serif", r], a = t9.split(In.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const u = h.append("svg");
    for (const c of s) {
      let p = 0;
      const y = { width: 0, height: 0, lineHeight: 0 };
      for (const v of a) {
        const M = A0();
        M.text = v || f0;
        const q = L0(u, M).style("font-size", o).style("font-weight", n).style("font-family", c), S = (q._groups || q)[0][0].getBBox();
        if (S.width === 0 && S.height === 0)
          throw new Error("svg element not in render tree");
        y.width = Math.round(Math.max(y.width, S.width)), p = Math.round(S.height), y.height += p, y.lineHeight = Math.round(Math.max(y.lineHeight, p));
      }
      l.push(y);
    }
    u.remove();
    const f = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[f];
  },
  (t9, e) => `${t9}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var $0 = class {
  constructor(e = false, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
};
var wi;
var I0 = function(t9) {
  return wi = wi || document.createElement("div"), t9 = escape(t9).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), wi.innerHTML = t9, unescape(wi.textContent);
};
function Ka(t9) {
  return "str" in t9;
}
var D0 = (t9, e, i, r) => {
  var o;
  if (!r)
    return;
  const n = (o = t9.node()) == null ? void 0 : o.getBBox();
  n && t9.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
};
var Wn = (t9) => {
  if (typeof t9 == "number")
    return [t9, t9 + "px"];
  const e = parseInt(t9 ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t9 === String(e) ? [e, t9 + "px"] : [e, t9];
};
function Za(t9, e) {
  return u0({}, t9, e);
}
var Ke = {
  assignWithDepth: nt,
  wrapLabel: E0,
  calculateTextHeight: O0,
  calculateTextWidth: Qi,
  calculateTextDimensions: zn,
  cleanAndMerge: Za,
  detectInit: g0,
  detectDirective: Va,
  isSubstringInArray: y0,
  interpolateToCurve: _0,
  calcLabelPosition: T0,
  calcCardinalityPosition: k0,
  calcTerminalLabelPosition: S0,
  formatUrl: C0,
  getStylesFromArray: v0,
  generateId: w0,
  random: F0,
  runFunc: x0,
  entityDecode: I0,
  insertTitle: D0,
  parseFontSize: Wn,
  InitIDGenerator: $0
};
var Ja = "comm";
var Qa = "rule";
var tl = "decl";
var N0 = "@import";
var R0 = "@keyframes";
var P0 = Math.abs;
var Hn = String.fromCharCode;
function el(t9) {
  return t9.trim();
}
function un(t9, e, i) {
  return t9.replace(e, i);
}
function q0(t9, e) {
  return t9.indexOf(e);
}
function oi(t9, e) {
  return t9.charCodeAt(e) | 0;
}
function si(t9, e, i) {
  return t9.slice(e, i);
}
function te(t9) {
  return t9.length;
}
function il(t9) {
  return t9.length;
}
function Bi(t9, e) {
  return e.push(t9), t9;
}
var Tr = 1;
var Ee = 1;
var rl = 0;
var Tt = 0;
var Z = 0;
var Ne = "";
function jn(t9, e, i, r, n, o, s) {
  return { value: t9, root: e, parent: i, type: r, props: n, children: o, line: Tr, column: Ee, length: s, return: "" };
}
function z0() {
  return Z;
}
function W0() {
  return Z = Tt > 0 ? oi(Ne, --Tt) : 0, Ee--, Z === 10 && (Ee = 1, Tr--), Z;
}
function wt() {
  return Z = Tt < rl ? oi(Ne, Tt++) : 0, Ee++, Z === 10 && (Ee = 1, Tr++), Z;
}
function ce() {
  return oi(Ne, Tt);
}
function Ii() {
  return Tt;
}
function kr(t9, e) {
  return si(Ne, t9, e);
}
function fn(t9) {
  switch (t9) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function H0(t9) {
  return Tr = Ee = 1, rl = te(Ne = t9), Tt = 0, [];
}
function j0(t9) {
  return Ne = "", t9;
}
function Ur(t9) {
  return el(kr(Tt - 1, dn(t9 === 91 ? t9 + 2 : t9 === 40 ? t9 + 1 : t9)));
}
function U0(t9) {
  for (; (Z = ce()) && Z < 33; )
    wt();
  return fn(t9) > 2 || fn(Z) > 3 ? "" : " ";
}
function Y0(t9, e) {
  for (; --e && wt() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return kr(t9, Ii() + (e < 6 && ce() == 32 && wt() == 32));
}
function dn(t9) {
  for (; wt(); )
    switch (Z) {
      case t9:
        return Tt;
      case 34:
      case 39:
        t9 !== 34 && t9 !== 39 && dn(Z);
        break;
      case 40:
        t9 === 41 && dn(t9);
        break;
      case 92:
        wt();
        break;
    }
  return Tt;
}
function G0(t9, e) {
  for (; wt() && t9 + Z !== 47 + 10; )
    if (t9 + Z === 42 + 42 && ce() === 47)
      break;
  return "/*" + kr(e, Tt - 1) + "*" + Hn(t9 === 47 ? t9 : wt());
}
function V0(t9) {
  for (; !fn(ce()); )
    wt();
  return kr(t9, Tt);
}
function X0(t9) {
  return j0(Di("", null, null, null, [""], t9 = H0(t9), 0, [0], t9));
}
function Di(t9, e, i, r, n, o, s, a, l) {
  for (var h = 0, u = 0, f = s, c = 0, p = 0, y = 0, v = 1, M = 1, q = 1, S = 0, z = "", Q = n, X = o, G = r, W = z; M; )
    switch (y = S, S = wt()) {
      case 40:
        if (y != 108 && oi(W, f - 1) == 58) {
          q0(W += un(Ur(S), "&", "&\f"), "&\f") != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += Ur(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += U0(y);
        break;
      case 92:
        W += Y0(Ii() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Bi(K0(G0(wt(), Ii()), e, i), l);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * v:
        a[h++] = te(W) * q;
      case 125 * v:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            M = 0;
          case 59 + u:
            p > 0 && te(W) - f && Bi(p > 32 ? fs(W + ";", r, i, f - 1) : fs(un(W, " ", "") + ";", r, i, f - 2), l);
            break;
          case 59:
            W += ";";
          default:
            if (Bi(G = us(W, e, i, h, u, n, a, z, Q = [], X = [], f), o), S === 123)
              if (u === 0)
                Di(W, e, G, G, Q, o, f, a, X);
              else
                switch (c === 99 && oi(W, 3) === 110 ? 100 : c) {
                  case 100:
                  case 109:
                  case 115:
                    Di(t9, G, G, r && Bi(us(t9, G, G, 0, 0, n, a, z, n, Q = [], f), X), n, X, f, a, r ? Q : X);
                    break;
                  default:
                    Di(W, G, G, G, [""], X, 0, a, X);
                }
        }
        h = u = p = 0, v = q = 1, z = W = "", f = s;
        break;
      case 58:
        f = 1 + te(W), p = y;
      default:
        if (v < 1) {
          if (S == 123)
            --v;
          else if (S == 125 && v++ == 0 && W0() == 125)
            continue;
        }
        switch (W += Hn(S), S * v) {
          case 38:
            q = u > 0 ? 1 : (W += "\f", -1);
            break;
          case 44:
            a[h++] = (te(W) - 1) * q, q = 1;
            break;
          case 64:
            ce() === 45 && (W += Ur(wt())), c = ce(), u = f = te(z = W += V0(Ii())), S++;
            break;
          case 45:
            y === 45 && te(W) == 2 && (v = 0);
        }
    }
  return o;
}
function us(t9, e, i, r, n, o, s, a, l, h, u) {
  for (var f = n - 1, c = n === 0 ? o : [""], p = il(c), y = 0, v = 0, M = 0; y < r; ++y)
    for (var q = 0, S = si(t9, f + 1, f = P0(v = s[y])), z = t9; q < p; ++q)
      (z = el(v > 0 ? c[q] + " " + S : un(S, /&\f/g, c[q]))) && (l[M++] = z);
  return jn(t9, e, i, n === 0 ? Qa : a, l, h, u);
}
function K0(t9, e, i) {
  return jn(t9, e, i, Ja, Hn(z0()), si(t9, 2, -2), 0);
}
function fs(t9, e, i, r) {
  return jn(t9, e, i, tl, si(t9, 0, r), si(t9, r + 1, -1), r);
}
function pn(t9, e) {
  for (var i = "", r = il(t9), n = 0; n < r; n++)
    i += e(t9[n], n, t9, e) || "";
  return i;
}
function Z0(t9, e, i, r) {
  switch (t9.type) {
    case N0:
    case tl:
      return t9.return = t9.return || t9.value;
    case Ja:
      return "";
    case R0:
      return t9.return = t9.value + "{" + pn(t9.children, r) + "}";
    case Qa:
      t9.value = t9.props.join(",");
  }
  return te(i = pn(t9.children, r)) ? t9.return = t9.value + "{" + i + "}" : "";
}
var ds = "10.6.1";
var Me = Object.freeze(gp);
var ut = nt({}, Me);
var nl;
var Oe = [];
var Ze = nt({}, Me);
var Sr = (t9, e) => {
  let i = nt({}, t9), r = {};
  for (const n of e)
    al(n), r = nt(r, n);
  if (i = nt(i, r), r.theme && r.theme in Yt) {
    const n = nt({}, nl), o = nt(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Yt && (i.themeVariables = Yt[i.theme].getThemeVariables(o));
  }
  return Ze = i, ll(Ze), Ze;
};
var J0 = (t9) => (ut = nt({}, Me), ut = nt(ut, t9), t9.theme && Yt[t9.theme] && (ut.themeVariables = Yt[t9.theme].getThemeVariables(t9.themeVariables)), Sr(ut, Oe), ut);
var Q0 = (t9) => {
  nl = nt({}, t9);
};
var ty = (t9) => (ut = nt(ut, t9), Sr(ut, Oe), ut);
var ol = () => nt({}, ut);
var sl = (t9) => (ll(t9), nt(Ze, t9), $t());
var $t = () => nt({}, Ze);
var al = (t9) => {
  t9 && (["secure", ...ut.secure ?? []].forEach((e) => {
    Object.hasOwn(t9, e) && (A.debug(`Denied attempt to modify a secure key ${e}`, t9[e]), delete t9[e]);
  }), Object.keys(t9).forEach((e) => {
    e.startsWith("__") && delete t9[e];
  }), Object.keys(t9).forEach((e) => {
    typeof t9[e] == "string" && (t9[e].includes("<") || t9[e].includes(">") || t9[e].includes("url(data:")) && delete t9[e], typeof t9[e] == "object" && al(t9[e]);
  }));
};
var ey = (t9) => {
  Vi(t9), t9.fontFamily && (!t9.themeVariables || !t9.themeVariables.fontFamily) && (t9.themeVariables = { fontFamily: t9.fontFamily }), Oe.push(t9), Sr(ut, Oe);
};
var tr = (t9 = ut) => {
  Oe = [], Sr(t9, Oe);
};
var iy = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var ps = {};
var ry = (t9) => {
  ps[t9] || (A.warn(iy[t9]), ps[t9] = true);
};
var ll = (t9) => {
  t9 && (t9.lazyLoadedDiagrams || t9.loadExternalDiagramsAtStartup) && ry("LAZY_LOAD_DEPRECATED");
};
var hl = "c4";
var ny = (t9) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t9);
var oy = async () => {
  const { diagram: t9 } = await import("./c4Diagram-ec3bb67c-JUYJQWOU.js");
  return { id: hl, diagram: t9 };
};
var sy = {
  id: hl,
  detector: ny,
  loader: oy
};
var ay = sy;
var cl = "flowchart";
var ly = (t9, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9);
};
var hy = async () => {
  const { diagram: t9 } = await import("./flowDiagram-1541572e-HX7JYWP3.js");
  return { id: cl, diagram: t9 };
};
var cy = {
  id: cl,
  detector: ly,
  loader: hy
};
var uy = cy;
var ul = "flowchart-v2";
var fy = (t9, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(t9);
};
var dy = async () => {
  const { diagram: t9 } = await import("./flowDiagram-v2-67a58972-JA5TFSH7.js");
  return { id: ul, diagram: t9 };
};
var py = {
  id: ul,
  detector: fy,
  loader: dy
};
var gy = py;
var fl = "er";
var my = (t9) => /^\s*erDiagram/.test(t9);
var yy = async () => {
  const { diagram: t9 } = await import("./erDiagram-a329e5de-LZQN3UGU.js");
  return { id: fl, diagram: t9 };
};
var _y = {
  id: fl,
  detector: my,
  loader: yy
};
var Cy = _y;
var dl = "gitGraph";
var xy = (t9) => /^\s*gitGraph/.test(t9);
var by = async () => {
  const { diagram: t9 } = await import("./gitGraphDiagram-2083142e-SMLG7XFO.js");
  return { id: dl, diagram: t9 };
};
var Ty = {
  id: dl,
  detector: xy,
  loader: by
};
var ky = Ty;
var pl = "gantt";
var Sy = (t9) => /^\s*gantt/.test(t9);
var vy = async () => {
  const { diagram: t9 } = await import("./ganttDiagram-a6dd55d8-L4MAQZET.js");
  return { id: pl, diagram: t9 };
};
var wy = {
  id: pl,
  detector: Sy,
  loader: vy
};
var By = wy;
var gl = "info";
var Fy = (t9) => /^\s*info/.test(t9);
var Ay = async () => {
  const { diagram: t9 } = await import("./infoDiagram-3423a8e0-UAQM72NI.js");
  return { id: gl, diagram: t9 };
};
var Ly = {
  id: gl,
  detector: Fy,
  loader: Ay
};
var ml = "pie";
var Ey = (t9) => /^\s*pie/.test(t9);
var My = async () => {
  const { diagram: t9 } = await import("./pieDiagram-2fe1d2bb-GU6OZQHP.js");
  return { id: ml, diagram: t9 };
};
var Oy = {
  id: ml,
  detector: Ey,
  loader: My
};
var yl = "quadrantChart";
var $y = (t9) => /^\s*quadrantChart/.test(t9);
var Iy = async () => {
  const { diagram: t9 } = await import("./quadrantDiagram-140db9f1-BSH2ACMA.js");
  return { id: yl, diagram: t9 };
};
var Dy = {
  id: yl,
  detector: $y,
  loader: Iy
};
var Ny = Dy;
var _l = "xychart";
var Ry = (t9) => /^\s*xychart-beta/.test(t9);
var Py = async () => {
  const { diagram: t9 } = await import("./xychartDiagram-ad0c231b-BBBQ2DMU.js");
  return { id: _l, diagram: t9 };
};
var qy = {
  id: _l,
  detector: Ry,
  loader: Py
};
var zy = qy;
var Cl = "requirement";
var Wy = (t9) => /^\s*requirement(Diagram)?/.test(t9);
var Hy = async () => {
  const { diagram: t9 } = await import("./requirementDiagram-dd25f257-2LIT3YHZ.js");
  return { id: Cl, diagram: t9 };
};
var jy = {
  id: Cl,
  detector: Wy,
  loader: Hy
};
var Uy = jy;
var xl = "sequence";
var Yy = (t9) => /^\s*sequenceDiagram/.test(t9);
var Gy = async () => {
  const { diagram: t9 } = await import("./sequenceDiagram-d9c89af8-B5SQ73TT.js");
  return { id: xl, diagram: t9 };
};
var Vy = {
  id: xl,
  detector: Yy,
  loader: Gy
};
var Xy = Vy;
var bl = "class";
var Ky = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(t9);
};
var Zy = async () => {
  const { diagram: t9 } = await import("./classDiagram-46f60f18-6O6POIP3.js");
  return { id: bl, diagram: t9 };
};
var Jy = {
  id: bl,
  detector: Ky,
  loader: Zy
};
var Qy = Jy;
var Tl = "classDiagram";
var t_ = (t9, e) => {
  var i;
  return /^\s*classDiagram/.test(t9) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(t9);
};
var e_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-v2-1fad7961-C45H7OOC.js");
  return { id: Tl, diagram: t9 };
};
var i_ = {
  id: Tl,
  detector: t_,
  loader: e_
};
var r_ = i_;
var kl = "state";
var n_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(t9);
};
var o_ = async () => {
  const { diagram: t9 } = await import("./stateDiagram-61a94aa8-4JLBGQXX.js");
  return { id: kl, diagram: t9 };
};
var s_ = {
  id: kl,
  detector: n_,
  loader: o_
};
var a_ = s_;
var Sl = "stateDiagram";
var l_ = (t9, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t9) || /^\s*stateDiagram/.test(t9) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
};
var h_ = async () => {
  const { diagram: t9 } = await import("./stateDiagram-v2-ee6f52b7-Z3T47JA4.js");
  return { id: Sl, diagram: t9 };
};
var c_ = {
  id: Sl,
  detector: l_,
  loader: h_
};
var u_ = c_;
var vl = "journey";
var f_ = (t9) => /^\s*journey/.test(t9);
var d_ = async () => {
  const { diagram: t9 } = await import("./journeyDiagram-66140ef0-CAUPX67Q.js");
  return { id: vl, diagram: t9 };
};
var p_ = {
  id: vl,
  detector: f_,
  loader: d_
};
var g_ = p_;
var m_ = function(t9, e) {
  for (let i of e)
    t9.attr(i[0], i[1]);
};
var y_ = function(t9, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t9), r.set("width", e)), r;
};
var wl = function(t9, e, i, r) {
  const n = y_(e, i, r);
  m_(t9, n);
};
var __ = function(t9, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  A.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  A.info(`Graph bounds: ${a}x${l}`, t9), a = o + i * 2, l = s + i * 2, A.info(`Calculated bounds: ${a}x${l}`), wl(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
};
var Ni = {};
var C_ = (t9, e, i) => {
  let r = "";
  return t9 in Ni && Ni[t9] ? r = Ni[t9](i) : A.warn(`No theme found for ${t9}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
};
var x_ = (t9, e) => {
  e !== void 0 && (Ni[t9] = e);
};
var b_ = C_;
var Un = "";
var Yn = "";
var Gn = "";
var Vn = (t9) => ii(t9, $t());
var T_ = () => {
  Un = "", Gn = "", Yn = "";
};
var k_ = (t9) => {
  Un = Vn(t9).replace(/^\s+/g, "");
};
var S_ = () => Un;
var v_ = (t9) => {
  Gn = Vn(t9).replace(/\n\s+/g, `
`);
};
var w_ = () => Gn;
var B_ = (t9) => {
  Yn = Vn(t9);
};
var F_ = () => Yn;
var A_ = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: T_,
  getAccDescription: w_,
  getAccTitle: S_,
  getDiagramTitle: F_,
  setAccDescription: v_,
  setAccTitle: k_,
  setDiagramTitle: B_
}, Symbol.toStringTag, { value: "Module" }));
var L_ = A;
var E_ = bn;
var Xn = $t;
var _1 = sl;
var C1 = Me;
var M_ = (t9) => ii(t9, Xn());
var O_ = __;
var $_ = () => A_;
var er = {};
var ir = (t9, e, i) => {
  var r;
  if (er[t9])
    throw new Error(`Diagram ${t9} already registered.`);
  er[t9] = e, i && Oa(t9, i), x_(t9, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    L_,
    E_,
    Xn,
    M_,
    O_,
    $_(),
    () => {
    }
  );
};
var Kn = (t9) => {
  if (t9 in er)
    return er[t9];
  throw new I_(t9);
};
var I_ = class extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
};
var D_ = (t9) => {
  var n;
  const { securityLevel: e } = Xn();
  let i = Ct("body");
  if (e === "sandbox") {
    const s = ((n = Ct(`#i${t9}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    i = Ct(s.body);
  }
  return i.select(`#${t9}`);
};
var N_ = (t9, e, i) => {
  A.debug(`renering svg for syntax error
`);
  const r = D_(e);
  r.attr("viewBox", "0 0 2412 512"), wl(r, 100, 512, true);
  const n = r.append("g");
  n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
};
var Bl = { draw: N_ };
var R_ = Bl;
var P_ = {
  db: {},
  renderer: Bl,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
};
var q_ = P_;
var Fl = "flowchart-elk";
var z_ = (t9, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t9) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t9) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
};
var W_ = async () => {
  const { diagram: t9 } = await import("./flowchart-elk-definition-6aadd678-CL4EKBAY.js");
  return { id: Fl, diagram: t9 };
};
var H_ = {
  id: Fl,
  detector: z_,
  loader: W_
};
var j_ = H_;
var Al = "timeline";
var U_ = (t9) => /^\s*timeline/.test(t9);
var Y_ = async () => {
  const { diagram: t9 } = await import("./timeline-definition-82eccf71-D6OK3M5G.js");
  return { id: Al, diagram: t9 };
};
var G_ = {
  id: Al,
  detector: U_,
  loader: Y_
};
var V_ = G_;
var Ll = "mindmap";
var X_ = (t9) => /^\s*mindmap/.test(t9);
var K_ = async () => {
  const { diagram: t9 } = await import("./mindmap-definition-ad21433c-JMVNWBL4.js");
  return { id: Ll, diagram: t9 };
};
var Z_ = {
  id: Ll,
  detector: X_,
  loader: K_
};
var J_ = Z_;
var El = "sankey";
var Q_ = (t9) => /^\s*sankey-beta/.test(t9);
var tC = async () => {
  const { diagram: t9 } = await import("./sankeyDiagram-51de3a0d-TYFW4WDV.js");
  return { id: El, diagram: t9 };
};
var eC = {
  id: El,
  detector: Q_,
  loader: tC
};
var iC = eC;
var gs = false;
var Zn = () => {
  gs || (gs = true, ir("error", q_, (t9) => t9.toLowerCase().trim() === "error"), ir(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t9) => t9.toLowerCase().trimStart().startsWith("---")
  ), Ma(
    ay,
    r_,
    Qy,
    Cy,
    By,
    Ly,
    Oy,
    Uy,
    Xy,
    j_,
    gy,
    uy,
    J_,
    V_,
    ky,
    u_,
    a_,
    g_,
    Ny,
    iC,
    zy
  ));
};
var Ml = class {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text += `
`;
    const r = $t();
    try {
      this.type = mr(e, r);
    } catch (o) {
      this.type = "error", this.detectError = o;
    }
    const n = Kn(this.type);
    A.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
  }
  parse() {
    var i, r, n, o, s;
    if (this.detectError)
      throw this.detectError;
    (r = (i = this.db).clear) == null || r.call(i);
    const e = $t();
    (n = this.init) == null || n.call(this, e), this.metadata.title && ((s = (o = this.db).setDiagramTitle) == null || s.call(o, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var Jn = async (t9, e = {}) => {
  const i = mr(t9, $t());
  try {
    Kn(i);
  } catch {
    const n = _p(i);
    if (!n)
      throw new Ea(`Diagram ${i} not found.`);
    const { id: o, diagram: s } = await n();
    ir(o, s);
  }
  return new Ml(t9, e);
};
var gn = [];
var x1 = (t9) => {
  gn.push(t9);
};
var rC = () => {
  gn.forEach((t9) => {
    t9();
  }), gn = [];
};
var nC = Na(Object.keys, Object);
var oC = nC;
var sC = Object.prototype;
var aC = sC.hasOwnProperty;
function lC(t9) {
  if (!xr(t9))
    return oC(t9);
  var e = [];
  for (var i in Object(t9))
    aC.call(t9, i) && i != "constructor" && e.push(i);
  return e;
}
var hC = ye(Dt, "DataView");
var mn = hC;
var cC = ye(Dt, "Promise");
var yn = cC;
var uC = ye(Dt, "Set");
var _n = uC;
var fC = ye(Dt, "WeakMap");
var Cn = fC;
var ms = "[object Map]";
var dC = "[object Object]";
var ys = "[object Promise]";
var _s = "[object Set]";
var Cs = "[object WeakMap]";
var xs = "[object DataView]";
var pC = me(mn);
var gC = me(ni);
var mC = me(yn);
var yC = me(_n);
var _C = me(Cn);
var ae = Ie;
(mn && ae(new mn(new ArrayBuffer(1))) != xs || ni && ae(new ni()) != ms || yn && ae(yn.resolve()) != ys || _n && ae(new _n()) != _s || Cn && ae(new Cn()) != Cs) && (ae = function(t9) {
  var e = Ie(t9), i = e == dC ? t9.constructor : void 0, r = i ? me(i) : "";
  if (r)
    switch (r) {
      case pC:
        return xs;
      case gC:
        return ms;
      case mC:
        return ys;
      case yC:
        return _s;
      case _C:
        return Cs;
    }
  return e;
});
var CC = ae;
var xC = "[object Map]";
var bC = "[object Set]";
var TC = Object.prototype;
var kC = TC.hasOwnProperty;
function Yr(t9) {
  if (t9 == null)
    return true;
  if (br(t9) && (Ji(t9) || typeof t9 == "string" || typeof t9.splice == "function" || Rn(t9) || Pn(t9) || Zi(t9)))
    return !t9.length;
  var e = CC(t9);
  if (e == xC || e == bC)
    return !t9.size;
  if (xr(t9))
    return !lC(t9).length;
  for (var i in t9)
    if (kC.call(t9, i))
      return false;
  return true;
}
var SC = "graphics-document document";
function vC(t9, e) {
  t9.attr("role", SC), e !== "" && t9.attr("aria-roledescription", e);
}
function wC(t9, e, i, r) {
  if (t9.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t9.attr("aria-describedby", n), t9.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t9.attr("aria-labelledby", n), t9.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
var BC = (t9) => t9.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
function Ol(t9) {
  return typeof t9 > "u" || t9 === null;
}
function FC(t9) {
  return typeof t9 == "object" && t9 !== null;
}
function AC(t9) {
  return Array.isArray(t9) ? t9 : Ol(t9) ? [] : [t9];
}
function LC(t9, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t9[n] = e[n];
  return t9;
}
function EC(t9, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t9;
  return i;
}
function MC(t9) {
  return t9 === 0 && Number.NEGATIVE_INFINITY === 1 / t9;
}
var OC = Ol;
var $C = FC;
var IC = AC;
var DC = EC;
var NC = MC;
var RC = LC;
var at = {
  isNothing: OC,
  isObject: $C,
  toArray: IC,
  repeat: DC,
  isNegativeZero: NC,
  extend: RC
};
function $l(t9, e) {
  var i = "", r = t9.reason || "(unknown reason)";
  return t9.mark ? (t9.mark.name && (i += 'in "' + t9.mark.name + '" '), i += "(" + (t9.mark.line + 1) + ":" + (t9.mark.column + 1) + ")", !e && t9.mark.snippet && (i += `

` + t9.mark.snippet), r + " " + i) : r;
}
function ai(t9, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t9, this.mark = e, this.message = $l(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ai.prototype = Object.create(Error.prototype);
ai.prototype.constructor = ai;
ai.prototype.toString = function(e) {
  return this.name + ": " + $l(this, e);
};
var Ut = ai;
function Gr(t9, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t9.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function Vr(t9, e) {
  return at.repeat(" ", e - t9.length) + t9;
}
function PC(t9, e) {
  if (e = Object.create(e || null), !t9.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t9.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t9.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, u = Math.min(t9.line + e.linesAfter, n.length).toString().length, f = e.maxLength - (e.indent + u + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = Gr(
      t9.buffer,
      r[s - l],
      n[s - l],
      t9.position - (r[s] - r[s - l]),
      f
    ), a = at.repeat(" ", e.indent) + Vr((t9.line - l + 1).toString(), u) + " | " + h.str + `
` + a;
  for (h = Gr(t9.buffer, r[s], n[s], t9.position, f), a += at.repeat(" ", e.indent) + Vr((t9.line + 1).toString(), u) + " | " + h.str + `
`, a += at.repeat("-", e.indent + u + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = Gr(
      t9.buffer,
      r[s + l],
      n[s + l],
      t9.position - (r[s] - r[s + l]),
      f
    ), a += at.repeat(" ", e.indent) + Vr((t9.line + l + 1).toString(), u) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var qC = PC;
var zC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var WC = [
  "scalar",
  "sequence",
  "mapping"
];
function HC(t9) {
  var e = {};
  return t9 !== null && Object.keys(t9).forEach(function(i) {
    t9[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function jC(t9, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (zC.indexOf(i) === -1)
      throw new Ut('Unknown option "' + i + '" is met in definition of "' + t9 + '" YAML type.');
  }), this.options = e, this.tag = t9, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = HC(e.styleAliases || null), WC.indexOf(this.kind) === -1)
    throw new Ut('Unknown kind "' + this.kind + '" is specified for "' + t9 + '" YAML type.');
}
var ot = jC;
function bs(t9, e) {
  var i = [];
  return t9[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function UC() {
  var t9 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t9.multi[n.kind].push(n), t9.multi.fallback.push(n)) : t9[n.kind][n.tag] = t9.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t9;
}
function xn(t9) {
  return this.extend(t9);
}
xn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof ot)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Ut("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof ot))
      throw new Ut("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new Ut("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new Ut("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof ot))
      throw new Ut("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(xn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = bs(n, "implicit"), n.compiledExplicit = bs(n, "explicit"), n.compiledTypeMap = UC(n.compiledImplicit, n.compiledExplicit), n;
};
var YC = xn;
var GC = new ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t9) {
    return t9 !== null ? t9 : "";
  }
});
var VC = new ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t9) {
    return t9 !== null ? t9 : [];
  }
});
var XC = new ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t9) {
    return t9 !== null ? t9 : {};
  }
});
var KC = new YC({
  explicit: [
    GC,
    VC,
    XC
  ]
});
function ZC(t9) {
  if (t9 === null)
    return true;
  var e = t9.length;
  return e === 1 && t9 === "~" || e === 4 && (t9 === "null" || t9 === "Null" || t9 === "NULL");
}
function JC() {
  return null;
}
function QC(t9) {
  return t9 === null;
}
var tx = new ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: ZC,
  construct: JC,
  predicate: QC,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function ex(t9) {
  if (t9 === null)
    return false;
  var e = t9.length;
  return e === 4 && (t9 === "true" || t9 === "True" || t9 === "TRUE") || e === 5 && (t9 === "false" || t9 === "False" || t9 === "FALSE");
}
function ix(t9) {
  return t9 === "true" || t9 === "True" || t9 === "TRUE";
}
function rx(t9) {
  return Object.prototype.toString.call(t9) === "[object Boolean]";
}
var nx = new ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: ex,
  construct: ix,
  predicate: rx,
  represent: {
    lowercase: function(t9) {
      return t9 ? "true" : "false";
    },
    uppercase: function(t9) {
      return t9 ? "TRUE" : "FALSE";
    },
    camelcase: function(t9) {
      return t9 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function ox(t9) {
  return 48 <= t9 && t9 <= 57 || 65 <= t9 && t9 <= 70 || 97 <= t9 && t9 <= 102;
}
function sx(t9) {
  return 48 <= t9 && t9 <= 55;
}
function ax(t9) {
  return 48 <= t9 && t9 <= 57;
}
function lx(t9) {
  if (t9 === null)
    return false;
  var e = t9.length, i = 0, r = false, n;
  if (!e)
    return false;
  if (n = t9[i], (n === "-" || n === "+") && (n = t9[++i]), n === "0") {
    if (i + 1 === e)
      return true;
    if (n = t9[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!ox(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!sx(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return false;
  for (; i < e; i++)
    if (n = t9[i], n !== "_") {
      if (!ax(t9.charCodeAt(i)))
        return false;
      r = true;
    }
  return !(!r || n === "_");
}
function hx(t9) {
  var e = t9, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function cx(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && t9 % 1 === 0 && !at.isNegativeZero(t9);
}
var ux = new ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: lx,
  construct: hx,
  predicate: cx,
  represent: {
    binary: function(t9) {
      return t9 >= 0 ? "0b" + t9.toString(2) : "-0b" + t9.toString(2).slice(1);
    },
    octal: function(t9) {
      return t9 >= 0 ? "0o" + t9.toString(8) : "-0o" + t9.toString(8).slice(1);
    },
    decimal: function(t9) {
      return t9.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t9) {
      return t9 >= 0 ? "0x" + t9.toString(16).toUpperCase() : "-0x" + t9.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var fx = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function dx(t9) {
  return !(t9 === null || !fx.test(t9) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t9[t9.length - 1] === "_");
}
function px(t9) {
  var e, i;
  return e = t9.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var gx = /^[-+]?[0-9]+e/;
function mx(t9, e) {
  var i;
  if (isNaN(t9))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (at.isNegativeZero(t9))
    return "-0.0";
  return i = t9.toString(10), gx.test(i) ? i.replace("e", ".e") : i;
}
function yx(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && (t9 % 1 !== 0 || at.isNegativeZero(t9));
}
var _x = new ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: dx,
  construct: px,
  predicate: yx,
  represent: mx,
  defaultStyle: "lowercase"
});
var Il = KC.extend({
  implicit: [
    tx,
    nx,
    ux,
    _x
  ]
});
var Cx = Il;
var Dl = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var Nl = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function xx(t9) {
  return t9 === null ? false : Dl.exec(t9) !== null || Nl.exec(t9) !== null;
}
function bx(t9) {
  var e, i, r, n, o, s, a, l = 0, h = null, u, f, c;
  if (e = Dl.exec(t9), e === null && (e = Nl.exec(t9)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (u = +e[10], f = +(e[11] || 0), h = (u * 60 + f) * 6e4, e[9] === "-" && (h = -h)), c = new Date(Date.UTC(i, r, n, o, s, a, l)), h && c.setTime(c.getTime() - h), c;
}
function Tx(t9) {
  return t9.toISOString();
}
var kx = new ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: xx,
  construct: bx,
  instanceOf: Date,
  represent: Tx
});
function Sx(t9) {
  return t9 === "<<" || t9 === null;
}
var vx = new ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Sx
});
var Qn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function wx(t9) {
  if (t9 === null)
    return false;
  var e, i, r = 0, n = t9.length, o = Qn;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t9.charAt(i)), !(e > 64)) {
      if (e < 0)
        return false;
      r += 6;
    }
  return r % 8 === 0;
}
function Bx(t9) {
  var e, i, r = t9.replace(/[\r\n=]/g, ""), n = r.length, o = Qn, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Fx(t9) {
  var e = "", i = 0, r, n, o = t9.length, s = Qn;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t9[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function Ax(t9) {
  return Object.prototype.toString.call(t9) === "[object Uint8Array]";
}
var Lx = new ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: wx,
  construct: Bx,
  predicate: Ax,
  represent: Fx
});
var Ex = Object.prototype.hasOwnProperty;
var Mx = Object.prototype.toString;
function Ox(t9) {
  if (t9 === null)
    return true;
  var e = [], i, r, n, o, s, a = t9;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = false, Mx.call(n) !== "[object Object]")
      return false;
    for (o in n)
      if (Ex.call(n, o))
        if (!s)
          s = true;
        else
          return false;
    if (!s)
      return false;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return false;
  }
  return true;
}
function $x(t9) {
  return t9 !== null ? t9 : [];
}
var Ix = new ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Ox,
  construct: $x
});
var Dx = Object.prototype.toString;
function Nx(t9) {
  if (t9 === null)
    return true;
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], Dx.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return false;
    o[e] = [n[0], r[n[0]]];
  }
  return true;
}
function Rx(t9) {
  if (t9 === null)
    return [];
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var Px = new ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Nx,
  construct: Rx
});
var qx = Object.prototype.hasOwnProperty;
function zx(t9) {
  if (t9 === null)
    return true;
  var e, i = t9;
  for (e in i)
    if (qx.call(i, e) && i[e] !== null)
      return false;
  return true;
}
function Wx(t9) {
  return t9 !== null ? t9 : {};
}
var Hx = new ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: zx,
  construct: Wx
});
var jx = Cx.extend({
  implicit: [
    kx,
    vx
  ],
  explicit: [
    Lx,
    Ix,
    Px,
    Hx
  ]
});
var re = Object.prototype.hasOwnProperty;
var rr = 1;
var Rl = 2;
var Pl = 3;
var nr = 4;
var Xr = 1;
var Ux = 2;
var Ts = 3;
var Yx = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var Gx = /[\x85\u2028\u2029]/;
var Vx = /[,\[\]\{\}]/;
var ql = /^(?:!|!!|![a-z\-]+!)$/i;
var zl = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ks(t9) {
  return Object.prototype.toString.call(t9);
}
function Mt(t9) {
  return t9 === 10 || t9 === 13;
}
function ue(t9) {
  return t9 === 9 || t9 === 32;
}
function dt(t9) {
  return t9 === 9 || t9 === 32 || t9 === 10 || t9 === 13;
}
function ve(t9) {
  return t9 === 44 || t9 === 91 || t9 === 93 || t9 === 123 || t9 === 125;
}
function Xx(t9) {
  var e;
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : (e = t9 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Kx(t9) {
  return t9 === 120 ? 2 : t9 === 117 ? 4 : t9 === 85 ? 8 : 0;
}
function Zx(t9) {
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : -1;
}
function Ss(t9) {
  return t9 === 48 ? "\0" : t9 === 97 ? "\x07" : t9 === 98 ? "\b" : t9 === 116 || t9 === 9 ? "	" : t9 === 110 ? `
` : t9 === 118 ? "\v" : t9 === 102 ? "\f" : t9 === 114 ? "\r" : t9 === 101 ? "\x1B" : t9 === 32 ? " " : t9 === 34 ? '"' : t9 === 47 ? "/" : t9 === 92 ? "\\" : t9 === 78 ? "" : t9 === 95 ? " " : t9 === 76 ? "\u2028" : t9 === 80 ? "\u2029" : "";
}
function Jx(t9) {
  return t9 <= 65535 ? String.fromCharCode(t9) : String.fromCharCode(
    (t9 - 65536 >> 10) + 55296,
    (t9 - 65536 & 1023) + 56320
  );
}
var Wl = new Array(256);
var Hl = new Array(256);
for (Se = 0; Se < 256; Se++)
  Wl[Se] = Ss(Se) ? 1 : 0, Hl[Se] = Ss(Se);
var Se;
function Qx(t9, e) {
  this.input = t9, this.filename = e.filename || null, this.schema = e.schema || jx, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t9.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function jl(t9, e) {
  var i = {
    name: t9.filename,
    buffer: t9.input.slice(0, -1),
    // omit trailing \0
    position: t9.position,
    line: t9.line,
    column: t9.position - t9.lineStart
  };
  return i.snippet = qC(i), new Ut(e, i);
}
function F(t9, e) {
  throw jl(t9, e);
}
function or(t9, e) {
  t9.onWarning && t9.onWarning.call(null, jl(t9, e));
}
var vs = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && F(e, "duplication of %YAML directive"), r.length !== 1 && F(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && F(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && F(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && or(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && F(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], ql.test(n) || F(e, "ill-formed tag handle (first argument) of the TAG directive"), re.call(e.tagMap, n) && F(e, 'there is a previously declared suffix for "' + n + '" tag handle'), zl.test(o) || F(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      F(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function ee(t9, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t9.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || F(t9, "expected valid JSON character");
    else
      Yx.test(a) && F(t9, "the stream contains non-printable characters");
    t9.result += a;
  }
}
function ws(t9, e, i, r) {
  var n, o, s, a;
  for (at.isObject(i) || F(t9, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], re.call(e, o) || (e[o] = i[o], r[o] = true);
}
function we(t9, e, i, r, n, o, s, a, l) {
  var h, u;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, u = n.length; h < u; h += 1)
      Array.isArray(n[h]) && F(t9, "nested arrays are not supported inside keys"), typeof n == "object" && ks(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && ks(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, u = o.length; h < u; h += 1)
        ws(t9, e, o[h], i);
    else
      ws(t9, e, o, i);
  else
    !t9.json && !re.call(i, n) && re.call(e, n) && (t9.line = s || t9.line, t9.lineStart = a || t9.lineStart, t9.position = l || t9.position, F(t9, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function to(t9) {
  var e;
  e = t9.input.charCodeAt(t9.position), e === 10 ? t9.position++ : e === 13 ? (t9.position++, t9.input.charCodeAt(t9.position) === 10 && t9.position++) : F(t9, "a line break is expected"), t9.line += 1, t9.lineStart = t9.position, t9.firstTabInLine = -1;
}
function J(t9, e, i) {
  for (var r = 0, n = t9.input.charCodeAt(t9.position); n !== 0; ) {
    for (; ue(n); )
      n === 9 && t9.firstTabInLine === -1 && (t9.firstTabInLine = t9.position), n = t9.input.charCodeAt(++t9.position);
    if (e && n === 35)
      do
        n = t9.input.charCodeAt(++t9.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Mt(n))
      for (to(t9), n = t9.input.charCodeAt(t9.position), r++, t9.lineIndent = 0; n === 32; )
        t9.lineIndent++, n = t9.input.charCodeAt(++t9.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t9.lineIndent < i && or(t9, "deficient indentation"), r;
}
function vr(t9) {
  var e = t9.position, i;
  return i = t9.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t9.input.charCodeAt(e + 1) && i === t9.input.charCodeAt(e + 2) && (e += 3, i = t9.input.charCodeAt(e), i === 0 || dt(i)));
}
function eo(t9, e) {
  e === 1 ? t9.result += " " : e > 1 && (t9.result += at.repeat(`
`, e - 1));
}
function tb(t9, e, i) {
  var r, n, o, s, a, l, h, u, f = t9.kind, c = t9.result, p;
  if (p = t9.input.charCodeAt(t9.position), dt(p) || ve(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && ve(n)))
    return false;
  for (t9.kind = "scalar", t9.result = "", o = s = t9.position, a = false; p !== 0; ) {
    if (p === 58) {
      if (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && ve(n))
        break;
    } else if (p === 35) {
      if (r = t9.input.charCodeAt(t9.position - 1), dt(r))
        break;
    } else {
      if (t9.position === t9.lineStart && vr(t9) || i && ve(p))
        break;
      if (Mt(p))
        if (l = t9.line, h = t9.lineStart, u = t9.lineIndent, J(t9, false, -1), t9.lineIndent >= e) {
          a = true, p = t9.input.charCodeAt(t9.position);
          continue;
        } else {
          t9.position = s, t9.line = l, t9.lineStart = h, t9.lineIndent = u;
          break;
        }
    }
    a && (ee(t9, o, s, false), eo(t9, t9.line - l), o = s = t9.position, a = false), ue(p) || (s = t9.position + 1), p = t9.input.charCodeAt(++t9.position);
  }
  return ee(t9, o, s, false), t9.result ? true : (t9.kind = f, t9.result = c, false);
}
function eb(t9, e) {
  var i, r, n;
  if (i = t9.input.charCodeAt(t9.position), i !== 39)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, r = n = t9.position; (i = t9.input.charCodeAt(t9.position)) !== 0; )
    if (i === 39)
      if (ee(t9, r, t9.position, true), i = t9.input.charCodeAt(++t9.position), i === 39)
        r = t9.position, t9.position++, n = t9.position;
      else
        return true;
    else
      Mt(i) ? (ee(t9, r, n, true), eo(t9, J(t9, false, e)), r = n = t9.position) : t9.position === t9.lineStart && vr(t9) ? F(t9, "unexpected end of the document within a single quoted scalar") : (t9.position++, n = t9.position);
  F(t9, "unexpected end of the stream within a single quoted scalar");
}
function ib(t9, e) {
  var i, r, n, o, s, a;
  if (a = t9.input.charCodeAt(t9.position), a !== 34)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, i = r = t9.position; (a = t9.input.charCodeAt(t9.position)) !== 0; ) {
    if (a === 34)
      return ee(t9, i, t9.position, true), t9.position++, true;
    if (a === 92) {
      if (ee(t9, i, t9.position, true), a = t9.input.charCodeAt(++t9.position), Mt(a))
        J(t9, false, e);
      else if (a < 256 && Wl[a])
        t9.result += Hl[a], t9.position++;
      else if ((s = Kx(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t9.input.charCodeAt(++t9.position), (s = Xx(a)) >= 0 ? o = (o << 4) + s : F(t9, "expected hexadecimal character");
        t9.result += Jx(o), t9.position++;
      } else
        F(t9, "unknown escape sequence");
      i = r = t9.position;
    } else
      Mt(a) ? (ee(t9, i, r, true), eo(t9, J(t9, false, e)), i = r = t9.position) : t9.position === t9.lineStart && vr(t9) ? F(t9, "unexpected end of the document within a double quoted scalar") : (t9.position++, r = t9.position);
  }
  F(t9, "unexpected end of the stream within a double quoted scalar");
}
function rb(t9, e) {
  var i = true, r, n, o, s = t9.tag, a, l = t9.anchor, h, u, f, c, p, y = /* @__PURE__ */ Object.create(null), v, M, q, S;
  if (S = t9.input.charCodeAt(t9.position), S === 91)
    u = 93, p = false, a = [];
  else if (S === 123)
    u = 125, p = true, a = {};
  else
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = a), S = t9.input.charCodeAt(++t9.position); S !== 0; ) {
    if (J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === u)
      return t9.position++, t9.tag = s, t9.anchor = l, t9.kind = p ? "mapping" : "sequence", t9.result = a, true;
    i ? S === 44 && F(t9, "expected the node content, but found ','") : F(t9, "missed comma between flow collection entries"), M = v = q = null, f = c = false, S === 63 && (h = t9.input.charCodeAt(t9.position + 1), dt(h) && (f = c = true, t9.position++, J(t9, true, e))), r = t9.line, n = t9.lineStart, o = t9.position, $e(t9, e, rr, false, true), M = t9.tag, v = t9.result, J(t9, true, e), S = t9.input.charCodeAt(t9.position), (c || t9.line === r) && S === 58 && (f = true, S = t9.input.charCodeAt(++t9.position), J(t9, true, e), $e(t9, e, rr, false, true), q = t9.result), p ? we(t9, a, y, M, v, q, r, n, o) : f ? a.push(we(t9, null, y, M, v, q, r, n, o)) : a.push(v), J(t9, true, e), S = t9.input.charCodeAt(t9.position), S === 44 ? (i = true, S = t9.input.charCodeAt(++t9.position)) : i = false;
  }
  F(t9, "unexpected end of the stream within a flow collection");
}
function nb(t9, e) {
  var i, r, n = Xr, o = false, s = false, a = e, l = 0, h = false, u, f;
  if (f = t9.input.charCodeAt(t9.position), f === 124)
    r = false;
  else if (f === 62)
    r = true;
  else
    return false;
  for (t9.kind = "scalar", t9.result = ""; f !== 0; )
    if (f = t9.input.charCodeAt(++t9.position), f === 43 || f === 45)
      Xr === n ? n = f === 43 ? Ts : Ux : F(t9, "repeat of a chomping mode identifier");
    else if ((u = Zx(f)) >= 0)
      u === 0 ? F(t9, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? F(t9, "repeat of an indentation width identifier") : (a = e + u - 1, s = true);
    else
      break;
  if (ue(f)) {
    do
      f = t9.input.charCodeAt(++t9.position);
    while (ue(f));
    if (f === 35)
      do
        f = t9.input.charCodeAt(++t9.position);
      while (!Mt(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (to(t9), t9.lineIndent = 0, f = t9.input.charCodeAt(t9.position); (!s || t9.lineIndent < a) && f === 32; )
      t9.lineIndent++, f = t9.input.charCodeAt(++t9.position);
    if (!s && t9.lineIndent > a && (a = t9.lineIndent), Mt(f)) {
      l++;
      continue;
    }
    if (t9.lineIndent < a) {
      n === Ts ? t9.result += at.repeat(`
`, o ? 1 + l : l) : n === Xr && o && (t9.result += `
`);
      break;
    }
    for (r ? ue(f) ? (h = true, t9.result += at.repeat(`
`, o ? 1 + l : l)) : h ? (h = false, t9.result += at.repeat(`
`, l + 1)) : l === 0 ? o && (t9.result += " ") : t9.result += at.repeat(`
`, l) : t9.result += at.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = t9.position; !Mt(f) && f !== 0; )
      f = t9.input.charCodeAt(++t9.position);
    ee(t9, i, t9.position, false);
  }
  return true;
}
function Bs(t9, e) {
  var i, r = t9.tag, n = t9.anchor, o = [], s, a = false, l;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = o), l = t9.input.charCodeAt(t9.position); l !== 0 && (t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, F(t9, "tab characters must not be used in indentation")), !(l !== 45 || (s = t9.input.charCodeAt(t9.position + 1), !dt(s)))); ) {
    if (a = true, t9.position++, J(t9, true, -1) && t9.lineIndent <= e) {
      o.push(null), l = t9.input.charCodeAt(t9.position);
      continue;
    }
    if (i = t9.line, $e(t9, e, Pl, false, true), o.push(t9.result), J(t9, true, -1), l = t9.input.charCodeAt(t9.position), (t9.line === i || t9.lineIndent > e) && l !== 0)
      F(t9, "bad indentation of a sequence entry");
    else if (t9.lineIndent < e)
      break;
  }
  return a ? (t9.tag = r, t9.anchor = n, t9.kind = "sequence", t9.result = o, true) : false;
}
function ob(t9, e, i) {
  var r, n, o, s, a, l, h = t9.tag, u = t9.anchor, f = {}, c = /* @__PURE__ */ Object.create(null), p = null, y = null, v = null, M = false, q = false, S;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = f), S = t9.input.charCodeAt(t9.position); S !== 0; ) {
    if (!M && t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, F(t9, "tab characters must not be used in indentation")), r = t9.input.charCodeAt(t9.position + 1), o = t9.line, (S === 63 || S === 58) && dt(r))
      S === 63 ? (M && (we(t9, f, c, p, y, null, s, a, l), p = y = v = null), q = true, M = true, n = true) : M ? (M = false, n = true) : F(t9, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t9.position += 1, S = r;
    else {
      if (s = t9.line, a = t9.lineStart, l = t9.position, !$e(t9, i, Rl, false, true))
        break;
      if (t9.line === o) {
        for (S = t9.input.charCodeAt(t9.position); ue(S); )
          S = t9.input.charCodeAt(++t9.position);
        if (S === 58)
          S = t9.input.charCodeAt(++t9.position), dt(S) || F(t9, "a whitespace character is expected after the key-value separator within a block mapping"), M && (we(t9, f, c, p, y, null, s, a, l), p = y = v = null), q = true, M = false, n = false, p = t9.tag, y = t9.result;
        else if (q)
          F(t9, "can not read an implicit mapping pair; a colon is missed");
        else
          return t9.tag = h, t9.anchor = u, true;
      } else if (q)
        F(t9, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t9.tag = h, t9.anchor = u, true;
    }
    if ((t9.line === o || t9.lineIndent > e) && (M && (s = t9.line, a = t9.lineStart, l = t9.position), $e(t9, e, nr, true, n) && (M ? y = t9.result : v = t9.result), M || (we(t9, f, c, p, y, v, s, a, l), p = y = v = null), J(t9, true, -1), S = t9.input.charCodeAt(t9.position)), (t9.line === o || t9.lineIndent > e) && S !== 0)
      F(t9, "bad indentation of a mapping entry");
    else if (t9.lineIndent < e)
      break;
  }
  return M && we(t9, f, c, p, y, null, s, a, l), q && (t9.tag = h, t9.anchor = u, t9.kind = "mapping", t9.result = f), q;
}
function sb(t9) {
  var e, i = false, r = false, n, o, s;
  if (s = t9.input.charCodeAt(t9.position), s !== 33)
    return false;
  if (t9.tag !== null && F(t9, "duplication of a tag property"), s = t9.input.charCodeAt(++t9.position), s === 60 ? (i = true, s = t9.input.charCodeAt(++t9.position)) : s === 33 ? (r = true, n = "!!", s = t9.input.charCodeAt(++t9.position)) : n = "!", e = t9.position, i) {
    do
      s = t9.input.charCodeAt(++t9.position);
    while (s !== 0 && s !== 62);
    t9.position < t9.length ? (o = t9.input.slice(e, t9.position), s = t9.input.charCodeAt(++t9.position)) : F(t9, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !dt(s); )
      s === 33 && (r ? F(t9, "tag suffix cannot contain exclamation marks") : (n = t9.input.slice(e - 1, t9.position + 1), ql.test(n) || F(t9, "named tag handle cannot contain such characters"), r = true, e = t9.position + 1)), s = t9.input.charCodeAt(++t9.position);
    o = t9.input.slice(e, t9.position), Vx.test(o) && F(t9, "tag suffix cannot contain flow indicator characters");
  }
  o && !zl.test(o) && F(t9, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    F(t9, "tag name is malformed: " + o);
  }
  return i ? t9.tag = o : re.call(t9.tagMap, n) ? t9.tag = t9.tagMap[n] + o : n === "!" ? t9.tag = "!" + o : n === "!!" ? t9.tag = "tag:yaml.org,2002:" + o : F(t9, 'undeclared tag handle "' + n + '"'), true;
}
function ab(t9) {
  var e, i;
  if (i = t9.input.charCodeAt(t9.position), i !== 38)
    return false;
  for (t9.anchor !== null && F(t9, "duplication of an anchor property"), i = t9.input.charCodeAt(++t9.position), e = t9.position; i !== 0 && !dt(i) && !ve(i); )
    i = t9.input.charCodeAt(++t9.position);
  return t9.position === e && F(t9, "name of an anchor node must contain at least one character"), t9.anchor = t9.input.slice(e, t9.position), true;
}
function lb(t9) {
  var e, i, r;
  if (r = t9.input.charCodeAt(t9.position), r !== 42)
    return false;
  for (r = t9.input.charCodeAt(++t9.position), e = t9.position; r !== 0 && !dt(r) && !ve(r); )
    r = t9.input.charCodeAt(++t9.position);
  return t9.position === e && F(t9, "name of an alias node must contain at least one character"), i = t9.input.slice(e, t9.position), re.call(t9.anchorMap, i) || F(t9, 'unidentified alias "' + i + '"'), t9.result = t9.anchorMap[i], J(t9, true, -1), true;
}
function $e(t9, e, i, r, n) {
  var o, s, a, l = 1, h = false, u = false, f, c, p, y, v, M;
  if (t9.listener !== null && t9.listener("open", t9), t9.tag = null, t9.anchor = null, t9.kind = null, t9.result = null, o = s = a = nr === i || Pl === i, r && J(t9, true, -1) && (h = true, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)), l === 1)
    for (; sb(t9) || ab(t9); )
      J(t9, true, -1) ? (h = true, a = o, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)) : a = false;
  if (a && (a = h || n), (l === 1 || nr === i) && (rr === i || Rl === i ? v = e : v = e + 1, M = t9.position - t9.lineStart, l === 1 ? a && (Bs(t9, M) || ob(t9, M, v)) || rb(t9, v) ? u = true : (s && nb(t9, v) || eb(t9, v) || ib(t9, v) ? u = true : lb(t9) ? (u = true, (t9.tag !== null || t9.anchor !== null) && F(t9, "alias node should not have any properties")) : tb(t9, v, rr === i) && (u = true, t9.tag === null && (t9.tag = "?")), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : l === 0 && (u = a && Bs(t9, M))), t9.tag === null)
    t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
  else if (t9.tag === "?") {
    for (t9.result !== null && t9.kind !== "scalar" && F(t9, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t9.kind + '"'), f = 0, c = t9.implicitTypes.length; f < c; f += 1)
      if (y = t9.implicitTypes[f], y.resolve(t9.result)) {
        t9.result = y.construct(t9.result), t9.tag = y.tag, t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
        break;
      }
  } else if (t9.tag !== "!") {
    if (re.call(t9.typeMap[t9.kind || "fallback"], t9.tag))
      y = t9.typeMap[t9.kind || "fallback"][t9.tag];
    else
      for (y = null, p = t9.typeMap.multi[t9.kind || "fallback"], f = 0, c = p.length; f < c; f += 1)
        if (t9.tag.slice(0, p[f].tag.length) === p[f].tag) {
          y = p[f];
          break;
        }
    y || F(t9, "unknown tag !<" + t9.tag + ">"), t9.result !== null && y.kind !== t9.kind && F(t9, "unacceptable node kind for !<" + t9.tag + '> tag; it should be "' + y.kind + '", not "' + t9.kind + '"'), y.resolve(t9.result, t9.tag) ? (t9.result = y.construct(t9.result, t9.tag), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : F(t9, "cannot resolve a node with !<" + t9.tag + "> explicit tag");
  }
  return t9.listener !== null && t9.listener("close", t9), t9.tag !== null || t9.anchor !== null || u;
}
function hb(t9) {
  var e = t9.position, i, r, n, o = false, s;
  for (t9.version = null, t9.checkLineBreaks = t9.legacy, t9.tagMap = /* @__PURE__ */ Object.create(null), t9.anchorMap = /* @__PURE__ */ Object.create(null); (s = t9.input.charCodeAt(t9.position)) !== 0 && (J(t9, true, -1), s = t9.input.charCodeAt(t9.position), !(t9.lineIndent > 0 || s !== 37)); ) {
    for (o = true, s = t9.input.charCodeAt(++t9.position), i = t9.position; s !== 0 && !dt(s); )
      s = t9.input.charCodeAt(++t9.position);
    for (r = t9.input.slice(i, t9.position), n = [], r.length < 1 && F(t9, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; ue(s); )
        s = t9.input.charCodeAt(++t9.position);
      if (s === 35) {
        do
          s = t9.input.charCodeAt(++t9.position);
        while (s !== 0 && !Mt(s));
        break;
      }
      if (Mt(s))
        break;
      for (i = t9.position; s !== 0 && !dt(s); )
        s = t9.input.charCodeAt(++t9.position);
      n.push(t9.input.slice(i, t9.position));
    }
    s !== 0 && to(t9), re.call(vs, r) ? vs[r](t9, r, n) : or(t9, 'unknown document directive "' + r + '"');
  }
  if (J(t9, true, -1), t9.lineIndent === 0 && t9.input.charCodeAt(t9.position) === 45 && t9.input.charCodeAt(t9.position + 1) === 45 && t9.input.charCodeAt(t9.position + 2) === 45 ? (t9.position += 3, J(t9, true, -1)) : o && F(t9, "directives end mark is expected"), $e(t9, t9.lineIndent - 1, nr, false, true), J(t9, true, -1), t9.checkLineBreaks && Gx.test(t9.input.slice(e, t9.position)) && or(t9, "non-ASCII line breaks are interpreted as content"), t9.documents.push(t9.result), t9.position === t9.lineStart && vr(t9)) {
    t9.input.charCodeAt(t9.position) === 46 && (t9.position += 3, J(t9, true, -1));
    return;
  }
  if (t9.position < t9.length - 1)
    F(t9, "end of the stream or a document separator is expected");
  else
    return;
}
function Ul(t9, e) {
  t9 = String(t9), e = e || {}, t9.length !== 0 && (t9.charCodeAt(t9.length - 1) !== 10 && t9.charCodeAt(t9.length - 1) !== 13 && (t9 += `
`), t9.charCodeAt(0) === 65279 && (t9 = t9.slice(1)));
  var i = new Qx(t9, e), r = t9.indexOf("\0");
  for (r !== -1 && (i.position = r, F(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    hb(i);
  return i.documents;
}
function cb(t9, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = Ul(t9, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function ub(t9, e) {
  var i = Ul(t9, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Ut("expected a single document in the stream, but found more");
  }
}
var fb = cb;
var db = ub;
var pb = {
  loadAll: fb,
  load: db
};
var gb = Il;
var mb = pb.load;
function yb(t9) {
  const e = t9.match(La);
  if (!e)
    return {
      text: t9,
      metadata: {}
    };
  let i = mb(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: gb
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t9.slice(e[0].length),
    metadata: r
  };
}
var _b = (t9) => t9.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
);
var Cb = (t9) => {
  const { text: e, metadata: i } = yb(t9), { displayMode: r, title: n, config: o = {} } = i;
  return r && (o.gantt || (o.gantt = {}), o.gantt.displayMode = r), { title: n, config: o, text: e };
};
var xb = (t9) => {
  const e = Ke.detectInit(t9) ?? {}, i = Ke.detectDirective(t9, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : (i == null ? void 0 : i.type) === "wrap" && (e.wrap = true), {
    text: m0(t9),
    directive: e
  };
};
function bb(t9) {
  const e = _b(t9), i = Cb(e), r = xb(i.text), n = Za(i.config, r.directive);
  return t9 = BC(r.text), {
    code: t9,
    title: i.title,
    config: n
  };
}
var Tb = 5e4;
var kb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var Sb = "sandbox";
var vb = "loose";
var wb = "http://www.w3.org/2000/svg";
var Bb = "http://www.w3.org/1999/xlink";
var Fb = "http://www.w3.org/1999/xhtml";
var Ab = "100%";
var Lb = "100%";
var Eb = "border:0;margin:0;";
var Mb = "margin:0";
var Ob = "allow-top-navigation-by-user-activation allow-popups";
var $b = 'The "iframe" tag is not supported by your browser.';
var Ib = ["foreignobject"];
var Db = ["dominant-baseline"];
function Yl(t9) {
  const e = bb(t9);
  return tr(), ey(e.config ?? {}), e;
}
async function Nb(t9, e) {
  Zn(), t9 = Yl(t9).code;
  try {
    await Jn(t9);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return false;
    throw i;
  }
  return true;
}
var Rb = function(t9) {
  let e = t9;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
};
var Pb = function(t9) {
  return t9.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var Fs = (t9, e, i = []) => `
.${t9} ${e} { ${i.join(" !important; ")} !important; }`;
var qb = (t9, e = {}) => {
  var r;
  let i = "";
  if (t9.themeCSS !== void 0 && (i += `
${t9.themeCSS}`), t9.fontFamily !== void 0 && (i += `
:root { --mermaid-font-family: ${t9.fontFamily}}`), t9.altFontFamily !== void 0 && (i += `
:root { --mermaid-alt-font-family: ${t9.altFontFamily}}`), !Yr(e)) {
    const a = t9.htmlLabels || ((r = t9.flowchart) == null ? void 0 : r.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const h = e[l];
      Yr(h.styles) || a.forEach((u) => {
        i += Fs(h.id, u, h.styles);
      }), Yr(h.textStyles) || (i += Fs(h.id, "tspan", h.textStyles));
    }
  }
  return i;
};
var zb = (t9, e, i, r) => {
  const n = qb(t9, i), o = b_(e, n, t9.themeVariables);
  return pn(X0(`${r}{${o}}`), Z0);
};
var Wb = (t9 = "", e, i) => {
  let r = t9;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = Pb(r), r = r.replace(/<br>/g, "<br/>"), r;
};
var Hb = (t9 = "", e) => {
  var n, o;
  const i = (o = (n = e == null ? void 0 : e.viewBox) == null ? void 0 : n.baseVal) != null && o.height ? e.viewBox.baseVal.height + "px" : Lb, r = btoa('<body style="' + Mb + '">' + t9 + "</body>");
  return `<iframe style="width:${Ab};height:${i};${Eb}" src="data:text/html;base64,${r}" sandbox="${Ob}">
  ${$b}
</iframe>`;
};
var As = (t9, e, i, r, n) => {
  const o = t9.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", wb);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t9;
};
function Ls(t9, e) {
  return t9.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var jb = (t9, e, i, r) => {
  var n, o, s;
  (n = t9.getElementById(e)) == null || n.remove(), (o = t9.getElementById(i)) == null || o.remove(), (s = t9.getElementById(r)) == null || s.remove();
};
var Ub = async function(t9, e, i) {
  var E, k, C, O, x, D;
  Zn();
  const r = Yl(e);
  e = r.code;
  const n = $t();
  A.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? Tb) && (e = kb);
  const o = "#" + t9, s = "i" + t9, a = "#" + s, l = "d" + t9, h = "#" + l;
  let u = Ct("body");
  const f = n.securityLevel === Sb, c = n.securityLevel === vb, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), f) {
      const T = Ls(Ct(i), s);
      u = Ct(T.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Ct(i);
    As(u, t9, l, `font-family: ${p}`, Bb);
  } else {
    if (jb(document, t9, l, s), f) {
      const T = Ls(Ct("body"), s);
      u = Ct(T.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Ct("body");
    As(u, t9, l);
  }
  e = Rb(e);
  let y, v;
  try {
    y = await Jn(e, { title: r.title });
  } catch (T) {
    y = new Ml("error"), v = T;
  }
  const M = u.select(h).node(), q = y.type, S = M.firstChild, z = S.firstChild, Q = (k = (E = y.renderer).getClasses) == null ? void 0 : k.call(E, e, y), X = zb(n, q, Q, o), G = document.createElement("style");
  G.innerHTML = X, S.insertBefore(G, z);
  try {
    await y.renderer.draw(e, t9, ds, y);
  } catch (T) {
    throw R_.draw(e, t9, ds), T;
  }
  const W = u.select(`${h} svg`), Xt = (O = (C = y.db).getAccTitle) == null ? void 0 : O.call(C), K = (D = (x = y.db).getAccDescription) == null ? void 0 : D.call(x);
  Gb(q, W, Xt, K), u.select(`[id="${t9}"]`).selectAll("foreignobject > *").attr("xmlns", Fb);
  let I = u.select(h).node().innerHTML;
  if (A.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), I = Wb(I, f, ka(n.arrowMarkerAbsolute)), f) {
    const T = u.select(h + " svg").node();
    I = Hb(I, T);
  } else
    c || (I = Gi.sanitize(I, {
      ADD_TAGS: Ib,
      ADD_ATTR: Db
    }));
  if (rC(), v)
    throw v;
  const At = Ct(f ? a : h).node();
  return At && "remove" in At && At.remove(), {
    svg: I,
    bindFunctions: y.db.bindFunctions
  };
};
function Yb(t9 = {}) {
  var i;
  t9 != null && t9.fontFamily && !((i = t9.themeVariables) != null && i.fontFamily) && (t9.themeVariables || (t9.themeVariables = {}), t9.themeVariables.fontFamily = t9.fontFamily), Q0(t9), t9 != null && t9.theme && t9.theme in Yt ? t9.themeVariables = Yt[t9.theme].getThemeVariables(
    t9.themeVariables
  ) : t9 && (t9.themeVariables = Yt.default.getThemeVariables(t9.themeVariables));
  const e = typeof t9 == "object" ? J0(t9) : ol();
  bn(e.logLevel), Zn();
}
function Gb(t9, e, i, r) {
  vC(e, t9), wC(e, i, r, e.attr("id"));
}
var pe = Object.freeze({
  render: Ub,
  parse: Nb,
  getDiagramFromText: Jn,
  initialize: Yb,
  getConfig: $t,
  setConfig: sl,
  getSiteConfig: ol,
  updateSiteConfig: ty,
  reset: () => {
    tr();
  },
  globalReset: () => {
    tr(Me);
  },
  defaultConfig: Me
});
bn($t().logLevel);
tr($t());
var Vb = async () => {
  A.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Le).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          Kn(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            ir(a, s, r);
          } catch (s) {
            throw A.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Le[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    A.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      A.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var Xb = (t9, e, i) => {
  A.warn(t9), Ka(t9) ? (i && i(t9.str, t9.hash), e.push({ ...t9, message: t9.str, error: t9 })) : (i && i(t9), t9 instanceof Error && e.push({
    str: t9.message,
    message: t9.message,
    hash: t9.name,
    error: t9
  }));
};
var Gl = async function(t9 = {
  querySelector: ".mermaid"
}) {
  try {
    await Kb(t9);
  } catch (e) {
    if (Ka(e) && A.error(e.str), xt.parseError && xt.parseError(e), !t9.suppressErrors)
      throw A.error("Use the suppressErrors option to suppress these errors"), e;
  }
};
var Kb = async function({ postRenderCallback: t9, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = pe.getConfig();
  A.debug(`${t9 ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  A.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (A.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), pe.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new Ke.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    A.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = ah(Ke.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const u = Ke.detectInit(s);
    u && A.debug("Detected early reinit: ", u);
    try {
      const { svg: f, bindFunctions: c } = await Zl(h, s, l);
      l.innerHTML = f, t9 && await t9(h), c && c(l);
    } catch (f) {
      Xb(f, a, xt.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
};
var Vl = function(t9) {
  pe.initialize(t9);
};
var Zb = async function(t9, e, i) {
  A.warn("mermaid.init is deprecated. Please use run instead."), t9 && Vl(t9);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Gl(r);
};
var Jb = async (t9, {
  lazyLoad: e = true
} = {}) => {
  Ma(...t9), e === false && await Vb();
};
var Xl = function() {
  if (xt.startOnLoad) {
    const { startOnLoad: t9 } = pe.getConfig();
    t9 && xt.run().catch((e) => A.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", Xl, false);
}
var Qb = function(t9) {
  xt.parseError = t9;
};
var sr = [];
var Kr = false;
var Kl = async () => {
  if (!Kr) {
    for (Kr = true; sr.length > 0; ) {
      const t9 = sr.shift();
      if (t9)
        try {
          await t9();
        } catch (e) {
          A.error("Error executing queue", e);
        }
    }
    Kr = false;
  }
};
var t1 = async (t9, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    pe.parse(t9, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        A.error("Error parsing", a), (l = xt.parseError) == null || l.call(xt, a), s(a), r(a);
      }
    );
  });
  sr.push(n), Kl().catch(r);
});
var Zl = (t9, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    pe.render(t9, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        A.error("Error parsing", l), (h = xt.parseError) == null || h.call(xt, l), a(l), n(l);
      }
    );
  });
  sr.push(o), Kl().catch(n);
});
var xt = {
  startOnLoad: true,
  mermaidAPI: pe,
  parse: t1,
  render: Zl,
  init: Zb,
  run: Gl,
  registerExternalDiagrams: Jb,
  initialize: Vl,
  parseError: void 0,
  contentLoaded: Xl,
  setParseErrorHandler: Qb,
  detectType: mr
};

export {
  ah,
  lh,
  hh,
  uh,
  A,
  Ms,
  Fh,
  Us,
  mt,
  Ct,
  vn,
  Ys,
  hi,
  ti,
  uu,
  ft,
  wn,
  i1,
  Xs,
  Ao,
  Qt,
  _u,
  r1,
  n1,
  o1,
  s1,
  a1,
  l1,
  h1,
  Io,
  Ln,
  Do,
  c1,
  u1,
  f1,
  Df,
  Pf,
  fr,
  ii,
  ka,
  d1,
  In,
  $,
  Ot,
  Ge,
  ci,
  B,
  L,
  hp,
  gp,
  nt,
  Dt,
  Xi,
  Ie,
  ge,
  Dn,
  yr,
  ne,
  ui,
  De,
  Nn,
  Lg,
  Mg,
  es,
  $g,
  Ig,
  Dg,
  Ra,
  zg,
  fi,
  Zi,
  Ji,
  qa,
  br,
  Vg,
  Rn,
  nm,
  Lm,
  ss,
  Pn,
  Dm,
  Nm,
  ja,
  Hm,
  Ua,
  Ga,
  Zm,
  Jm,
  s0,
  a0,
  l0,
  u0,
  f0,
  _0,
  v0,
  w0,
  F0,
  E0,
  O0,
  Qi,
  Wn,
  Za,
  Ke,
  $t,
  wl,
  __,
  T_,
  k_,
  S_,
  v_,
  w_,
  B_,
  F_,
  A_,
  Xn,
  _1,
  C1,
  O_,
  D_,
  x1,
  lC,
  _n,
  CC,
  Yr,
  Pb,
  xt
};
/*! Bundled license information:

mermaid/dist/mermaid-d06ecb0d.js:
  (*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE *)
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-46PFX6EH.js.map
