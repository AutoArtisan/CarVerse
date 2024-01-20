import {
  Hn,
  Nn,
  Un,
  Vn,
  _
} from "./chunk-CXDRTXNI.js";
import {
  t
} from "./chunk-UFOO6DEV.js";
import {
  A,
  B_,
  Ct,
  F_,
  In,
  Ke,
  Ms,
  S_,
  T_,
  Xn,
  Xs,
  Ys,
  ft,
  hh,
  hi,
  i1,
  k_,
  lh,
  uh,
  uu,
  v_,
  vn,
  w_,
  wl
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/ganttDiagram-a6dd55d8.js
function Rn(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Bn(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Zn(t2) {
  return t2;
}
var Bt = 1;
var te = 2;
var ue = 3;
var Rt = 4;
var Ye = 1e-6;
function Xn2(t2) {
  return "translate(" + t2 + ",0)";
}
function qn(t2) {
  return "translate(0," + t2 + ")";
}
function Gn(t2) {
  return (e) => +t2(e);
}
function jn(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function Qn() {
  return !this.__axis;
}
function Ge(t2, e) {
  var n = [], r = null, i = null, s = 6, a = 6, y = 3, _2 = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, k = t2 === Bt || t2 === Rt ? -1 : 1, C = t2 === Rt || t2 === te ? "x" : "y", F = t2 === Bt || t2 === ue ? Xn2 : qn;
  function w(x) {
    var q = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), g = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Zn), L = Math.max(s, 0) + y, O = e.range(), W = +O[0] + _2, B = +O[O.length - 1] + _2, Z = (e.bandwidth ? jn : Gn)(e.copy(), _2), Q = x.selection ? x.selection() : x, b = Q.selectAll(".domain").data([null]), A2 = Q.selectAll(".tick").data(q, e).order(), T = A2.exit(), Y = A2.enter().append("g").attr("class", "tick"), D = A2.select("line"), v = A2.select("text");
    b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A2 = A2.merge(Y), D = D.merge(Y.append("line").attr("stroke", "currentColor").attr(C + "2", k * s)), v = v.merge(Y.append("text").attr("fill", "currentColor").attr(C, k * L).attr("dy", t2 === Bt ? "0em" : t2 === ue ? "0.71em" : "0.32em")), x !== Q && (b = b.transition(x), A2 = A2.transition(x), D = D.transition(x), v = v.transition(x), T = T.transition(x).attr("opacity", Ye).attr("transform", function(o) {
      return isFinite(o = Z(o)) ? F(o + _2) : this.getAttribute("transform");
    }), Y.attr("opacity", Ye).attr("transform", function(o) {
      var d = this.parentNode.__axis;
      return F((d && isFinite(d = d(o)) ? d : Z(o)) + _2);
    })), T.remove(), b.attr("d", t2 === Rt || t2 === te ? a ? "M" + k * a + "," + W + "H" + _2 + "V" + B + "H" + k * a : "M" + _2 + "," + W + "V" + B : a ? "M" + W + "," + k * a + "V" + _2 + "H" + B + "V" + k * a : "M" + W + "," + _2 + "H" + B), A2.attr("opacity", 1).attr("transform", function(o) {
      return F(Z(o) + _2);
    }), D.attr(C + "2", k * s), v.attr(C, k * L).text(g), Q.filter(Qn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === te ? "start" : t2 === Rt ? "end" : "middle"), Q.each(function() {
      this.__axis = Z;
    });
  }
  return w.scale = function(x) {
    return arguments.length ? (e = x, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(x) {
    return arguments.length ? (n = x == null ? [] : Array.from(x), w) : n.slice();
  }, w.tickValues = function(x) {
    return arguments.length ? (r = x == null ? null : Array.from(x), w) : r && r.slice();
  }, w.tickFormat = function(x) {
    return arguments.length ? (i = x, w) : i;
  }, w.tickSize = function(x) {
    return arguments.length ? (s = a = +x, w) : s;
  }, w.tickSizeInner = function(x) {
    return arguments.length ? (s = +x, w) : s;
  }, w.tickSizeOuter = function(x) {
    return arguments.length ? (a = +x, w) : a;
  }, w.tickPadding = function(x) {
    return arguments.length ? (y = +x, w) : y;
  }, w.offset = function(x) {
    return arguments.length ? (_2 = +x, w) : _2;
  }, w;
}
function Jn(t2) {
  return Ge(Bt, t2);
}
function $n(t2) {
  return Ge(ue, t2);
}
var Kn = Math.PI / 180;
var tr = 180 / Math.PI;
var Gt = 18;
var je = 0.96422;
var Qe = 1;
var Je = 0.82521;
var $e = 4 / 29;
var wt = 6 / 29;
var Ke2 = 3 * wt * wt;
var er = wt * wt * wt;
function tn(t2) {
  if (t2 instanceof ot)
    return new ot(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ut)
    return en(t2);
  t2 instanceof ft || (t2 = uu(t2));
  var e = ie(t2.r), n = ie(t2.g), r = ie(t2.b), i = ee((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / Qe), s, a;
  return e === n && n === r ? s = a = i : (s = ee((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / je), a = ee((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / Je)), new ot(116 * i - 16, 500 * (s - i), 200 * (i - a), t2.opacity);
}
function nr(t2, e, n, r) {
  return arguments.length === 1 ? tn(t2) : new ot(t2, e, n, r ?? 1);
}
function ot(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
vn(ot, nr, Ys(hi, {
  brighter(t2) {
    return new ot(this.l + Gt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ot(this.l - Gt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = je * ne(e), t2 = Qe * ne(t2), n = Je * ne(n), new ft(
      re(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      re(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      re(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ee(t2) {
  return t2 > er ? Math.pow(t2, 1 / 3) : t2 / Ke2 + $e;
}
function ne(t2) {
  return t2 > wt ? t2 * t2 * t2 : Ke2 * (t2 - $e);
}
function re(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function ie(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function rr(t2) {
  if (t2 instanceof ut)
    return new ut(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ot || (t2 = tn(t2)), t2.a === 0 && t2.b === 0)
    return new ut(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * tr;
  return new ut(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function fe(t2, e, n, r) {
  return arguments.length === 1 ? rr(t2) : new ut(t2, e, n, r ?? 1);
}
function ut(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function en(t2) {
  if (isNaN(t2.h))
    return new ot(t2.l, 0, 0, t2.opacity);
  var e = t2.h * Kn;
  return new ot(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
vn(ut, fe, Ys(hi, {
  brighter(t2) {
    return new ut(this.h, this.c, this.l + Gt * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ut(this.h, this.c, this.l - Gt * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return en(this).rgb();
  }
}));
function ir(t2) {
  return function(e, n) {
    var r = t2((e = fe(e)).h, (n = fe(n)).h), i = Xs(e.c, n.c), s = Xs(e.l, n.l), a = Xs(e.opacity, n.opacity);
    return function(y) {
      return e.h = r(y), e.c = i(y), e.l = s(y), e.opacity = a(y), e + "";
    };
  };
}
var sr = ir(i1);
function ar(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, i = t2[n], s = t2[r], a;
  return s < i && (a = n, n = r, r = a, a = i, i = s, s = a), t2[n] = e.floor(i), t2[r] = e.ceil(s), t2;
}
var se = /* @__PURE__ */ new Date();
var ae = /* @__PURE__ */ new Date();
function K(t2, e, n, r) {
  function i(s) {
    return t2(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return i.floor = (s) => (t2(s = /* @__PURE__ */ new Date(+s)), s), i.ceil = (s) => (t2(s = new Date(s - 1)), e(s, 1), t2(s), s), i.round = (s) => {
    const a = i(s), y = i.ceil(s);
    return s - a < y - s ? a : y;
  }, i.offset = (s, a) => (e(s = /* @__PURE__ */ new Date(+s), a == null ? 1 : Math.floor(a)), s), i.range = (s, a, y) => {
    const _2 = [];
    if (s = i.ceil(s), y = y == null ? 1 : Math.floor(y), !(s < a) || !(y > 0))
      return _2;
    let k;
    do
      _2.push(k = /* @__PURE__ */ new Date(+s)), e(s, y), t2(s);
    while (k < s && s < a);
    return _2;
  }, i.filter = (s) => K((a) => {
    if (a >= a)
      for (; t2(a), !s(a); )
        a.setTime(a - 1);
  }, (a, y) => {
    if (a >= a)
      if (y < 0)
        for (; ++y <= 0; )
          for (; e(a, -1), !s(a); )
            ;
      else
        for (; --y >= 0; )
          for (; e(a, 1), !s(a); )
            ;
  }), n && (i.count = (s, a) => (se.setTime(+s), ae.setTime(+a), t2(se), t2(ae), Math.floor(n(se, ae))), i.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(r ? (a) => r(a) % s === 0 : (a) => i.count(0, a) % s === 0) : i)), i;
}
var Dt = K(() => {
}, (t2, e) => {
  t2.setTime(+t2 + e);
}, (t2, e) => e - t2);
Dt.every = (t2) => (t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? K((e) => {
  e.setTime(Math.floor(e / t2) * t2);
}, (e, n) => {
  e.setTime(+e + n * t2);
}, (e, n) => (n - e) / t2) : Dt);
Dt.range;
var ft2 = 1e3;
var rt = ft2 * 60;
var ht = rt * 60;
var dt = ht * 24;
var pe = dt * 7;
var Fe = dt * 30;
var oe = dt * 365;
var gt = K((t2) => {
  t2.setTime(t2 - t2.getMilliseconds());
}, (t2, e) => {
  t2.setTime(+t2 + e * ft2);
}, (t2, e) => (e - t2) / ft2, (t2) => t2.getUTCSeconds());
gt.range;
var Et = K((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ft2);
}, (t2, e) => {
  t2.setTime(+t2 + e * rt);
}, (t2, e) => (e - t2) / rt, (t2) => t2.getMinutes());
Et.range;
var or = K((t2) => {
  t2.setUTCSeconds(0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * rt);
}, (t2, e) => (e - t2) / rt, (t2) => t2.getUTCMinutes());
or.range;
var At = K((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ft2 - t2.getMinutes() * rt);
}, (t2, e) => {
  t2.setTime(+t2 + e * ht);
}, (t2, e) => (e - t2) / ht, (t2) => t2.getHours());
At.range;
var cr = K((t2) => {
  t2.setUTCMinutes(0, 0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * ht);
}, (t2, e) => (e - t2) / ht, (t2) => t2.getUTCHours());
cr.range;
var yt = K(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * rt) / dt,
  (t2) => t2.getDate() - 1
);
yt.range;
var Te = K((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / dt, (t2) => t2.getUTCDate() - 1);
Te.range;
var lr = K((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / dt, (t2) => Math.floor(t2 / dt));
lr.range;
function Tt(t2) {
  return K((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / pe);
}
var Ot = Tt(0);
var It = Tt(1);
var nn = Tt(2);
var rn = Tt(3);
var kt = Tt(4);
var sn = Tt(5);
var an = Tt(6);
Ot.range;
It.range;
nn.range;
rn.range;
kt.range;
sn.range;
an.range;
function bt(t2) {
  return K((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / pe);
}
var on = bt(0);
var jt = bt(1);
var ur = bt(2);
var fr = bt(3);
var Mt = bt(4);
var hr = bt(5);
var dr = bt(6);
on.range;
jt.range;
ur.range;
fr.range;
Mt.range;
hr.range;
dr.range;
var Wt = K((t2) => {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setMonth(t2.getMonth() + e);
}, (t2, e) => e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12, (t2) => t2.getMonth());
Wt.range;
var mr = K((t2) => {
  t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCMonth(t2.getUTCMonth() + e);
}, (t2, e) => e.getUTCMonth() - t2.getUTCMonth() + (e.getUTCFullYear() - t2.getUTCFullYear()) * 12, (t2) => t2.getUTCMonth());
mr.range;
var mt = K((t2) => {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setFullYear(t2.getFullYear() + e);
}, (t2, e) => e.getFullYear() - t2.getFullYear(), (t2) => t2.getFullYear());
mt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : K((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t2);
});
mt.range;
var pt = K((t2) => {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, (t2, e) => e.getUTCFullYear() - t2.getUTCFullYear(), (t2) => t2.getUTCFullYear());
pt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : K((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t2);
});
pt.range;
function gr(t2, e, n, r, i, s) {
  const a = [
    [gt, 1, ft2],
    [gt, 5, 5 * ft2],
    [gt, 15, 15 * ft2],
    [gt, 30, 30 * ft2],
    [s, 1, rt],
    [s, 5, 5 * rt],
    [s, 15, 15 * rt],
    [s, 30, 30 * rt],
    [i, 1, ht],
    [i, 3, 3 * ht],
    [i, 6, 6 * ht],
    [i, 12, 12 * ht],
    [r, 1, dt],
    [r, 2, 2 * dt],
    [n, 1, pe],
    [e, 1, Fe],
    [e, 3, 3 * Fe],
    [t2, 1, oe]
  ];
  function y(k, C, F) {
    const w = C < k;
    w && ([k, C] = [C, k]);
    const x = F && typeof F.range == "function" ? F : _2(k, C, F), q = x ? x.range(k, +C + 1) : [];
    return w ? q.reverse() : q;
  }
  function _2(k, C, F) {
    const w = Math.abs(C - k) / F, x = _(([, , L]) => L).right(a, w);
    if (x === a.length)
      return t2.every(Nn(k / oe, C / oe, F));
    if (x === 0)
      return Dt.every(Math.max(Nn(k, C, F), 1));
    const [q, g] = a[w / a[x - 1][2] < a[x][2] / w ? x - 1 : x];
    return q.every(g);
  }
  return [y, _2];
}
var [yr, kr] = gr(mt, Wt, Ot, yt, At, Et);
function ce(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function le(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function Yt(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function pr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, i = t2.periods, s = t2.days, a = t2.shortDays, y = t2.months, _2 = t2.shortMonths, k = Ft(i), C = Lt(i), F = Ft(s), w = Lt(s), x = Ft(a), q = Lt(a), g = Ft(y), L = Lt(y), O = Ft(_2), W = Lt(_2), B = {
    a: c,
    A: X,
    b: f,
    B: h,
    c: null,
    d: Oe,
    e: Oe,
    f: Vr,
    g: Jr,
    G: Kr,
    H: Hr,
    I: zr,
    j: Nr,
    L: cn,
    m: Pr,
    M: Rr,
    p: U,
    q: G,
    Q: Ne,
    s: Ve,
    S: Br,
    u: Zr,
    U: Xr,
    V: qr,
    w: Gr,
    W: jr,
    x: null,
    X: null,
    y: Qr,
    Y: $r,
    Z: ti,
    "%": ze
  }, Z = {
    a: H,
    A: N,
    b: I,
    B: V,
    c: null,
    d: He,
    e: He,
    f: ii,
    g: mi,
    G: yi,
    H: ei,
    I: ni,
    j: ri,
    L: un,
    m: si,
    M: ai,
    p: st,
    q: it,
    Q: Ne,
    s: Ve,
    S: oi,
    u: ci,
    U: li,
    V: ui,
    w: fi,
    W: hi2,
    x: null,
    X: null,
    y: di,
    Y: gi,
    Z: ki,
    "%": ze
  }, Q = {
    a: D,
    A: v,
    b: o,
    B: d,
    c: m,
    d: Ie,
    e: Ie,
    f: Ar,
    g: Ae,
    G: Ee,
    H: We,
    I: We,
    j: Yr,
    L: Er,
    m: Ur,
    M: Fr,
    p: Y,
    q: _r,
    Q: Wr,
    s: Or,
    S: Lr,
    u: wr,
    U: Cr,
    V: Dr,
    w: xr,
    W: Mr,
    x: u,
    X: S,
    y: Ae,
    Y: Ee,
    Z: Sr,
    "%": Ir
  };
  B.x = b(n, B), B.X = b(r, B), B.c = b(e, B), Z.x = b(n, Z), Z.X = b(r, Z), Z.c = b(e, Z);
  function b(p, E) {
    return function(M) {
      var l = [], R = -1, z = 0, j = p.length, J, et, Ut;
      for (M instanceof Date || (M = /* @__PURE__ */ new Date(+M)); ++R < j; )
        p.charCodeAt(R) === 37 && (l.push(p.slice(z, R)), (et = Le[J = p.charAt(++R)]) != null ? J = p.charAt(++R) : et = J === "e" ? " " : "0", (Ut = E[J]) && (J = Ut(M, et)), l.push(J), z = R + 1);
      return l.push(p.slice(z, R)), l.join("");
    };
  }
  function A2(p, E) {
    return function(M) {
      var l = Yt(1900, void 0, 1), R = T(l, p, M += "", 0), z, j;
      if (R != M.length)
        return null;
      if ("Q" in l)
        return new Date(l.Q);
      if ("s" in l)
        return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
      if (E && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + l.p * 12), l.m === void 0 && (l.m = "q" in l ? l.q : 0), "V" in l) {
        if (l.V < 1 || l.V > 53)
          return null;
        "w" in l || (l.w = 1), "Z" in l ? (z = le(Yt(l.y, 0, 1)), j = z.getUTCDay(), z = j > 4 || j === 0 ? jt.ceil(z) : jt(z), z = Te.offset(z, (l.V - 1) * 7), l.y = z.getUTCFullYear(), l.m = z.getUTCMonth(), l.d = z.getUTCDate() + (l.w + 6) % 7) : (z = ce(Yt(l.y, 0, 1)), j = z.getDay(), z = j > 4 || j === 0 ? It.ceil(z) : It(z), z = yt.offset(z, (l.V - 1) * 7), l.y = z.getFullYear(), l.m = z.getMonth(), l.d = z.getDate() + (l.w + 6) % 7);
      } else
        ("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), j = "Z" in l ? le(Yt(l.y, 0, 1)).getUTCDay() : ce(Yt(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + l.W * 7 - (j + 5) % 7 : l.w + l.U * 7 - (j + 6) % 7);
      return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, le(l)) : ce(l);
    };
  }
  function T(p, E, M, l) {
    for (var R = 0, z = E.length, j = M.length, J, et; R < z; ) {
      if (l >= j)
        return -1;
      if (J = E.charCodeAt(R++), J === 37) {
        if (J = E.charAt(R++), et = Q[J in Le ? E.charAt(R++) : J], !et || (l = et(p, M, l)) < 0)
          return -1;
      } else if (J != M.charCodeAt(l++))
        return -1;
    }
    return l;
  }
  function Y(p, E, M) {
    var l = k.exec(E.slice(M));
    return l ? (p.p = C.get(l[0].toLowerCase()), M + l[0].length) : -1;
  }
  function D(p, E, M) {
    var l = x.exec(E.slice(M));
    return l ? (p.w = q.get(l[0].toLowerCase()), M + l[0].length) : -1;
  }
  function v(p, E, M) {
    var l = F.exec(E.slice(M));
    return l ? (p.w = w.get(l[0].toLowerCase()), M + l[0].length) : -1;
  }
  function o(p, E, M) {
    var l = O.exec(E.slice(M));
    return l ? (p.m = W.get(l[0].toLowerCase()), M + l[0].length) : -1;
  }
  function d(p, E, M) {
    var l = g.exec(E.slice(M));
    return l ? (p.m = L.get(l[0].toLowerCase()), M + l[0].length) : -1;
  }
  function m(p, E, M) {
    return T(p, e, E, M);
  }
  function u(p, E, M) {
    return T(p, n, E, M);
  }
  function S(p, E, M) {
    return T(p, r, E, M);
  }
  function c(p) {
    return a[p.getDay()];
  }
  function X(p) {
    return s[p.getDay()];
  }
  function f(p) {
    return _2[p.getMonth()];
  }
  function h(p) {
    return y[p.getMonth()];
  }
  function U(p) {
    return i[+(p.getHours() >= 12)];
  }
  function G(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function H(p) {
    return a[p.getUTCDay()];
  }
  function N(p) {
    return s[p.getUTCDay()];
  }
  function I(p) {
    return _2[p.getUTCMonth()];
  }
  function V(p) {
    return y[p.getUTCMonth()];
  }
  function st(p) {
    return i[+(p.getUTCHours() >= 12)];
  }
  function it(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var E = b(p += "", B);
      return E.toString = function() {
        return p;
      }, E;
    },
    parse: function(p) {
      var E = A2(p += "", false);
      return E.toString = function() {
        return p;
      }, E;
    },
    utcFormat: function(p) {
      var E = b(p += "", Z);
      return E.toString = function() {
        return p;
      }, E;
    },
    utcParse: function(p) {
      var E = A2(p += "", true);
      return E.toString = function() {
        return p;
      }, E;
    }
  };
}
var Le = { "-": "", _: " ", 0: "0" };
var tt = /^\s*\d+/;
var Tr = /^%/;
var br = /[\\^$*+?|[\]().{}]/g;
function P(t2, e, n) {
  var r = t2 < 0 ? "-" : "", i = (r ? -t2 : t2) + "", s = i.length;
  return r + (s < n ? new Array(n - s + 1).join(e) + i : i);
}
function vr(t2) {
  return t2.replace(br, "\\$&");
}
function Ft(t2) {
  return new RegExp("^(?:" + t2.map(vr).join("|") + ")", "i");
}
function Lt(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function xr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function wr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Cr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Dr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function Mr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function Ee(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function Ae(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Sr(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function _r(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ur(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function Ie(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Yr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function We(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Fr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function Lr(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function Er(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = tt.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ir(t2, e, n) {
  var r = Tr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Wr(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function Or(t2, e, n) {
  var r = tt.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function Oe(t2, e) {
  return P(t2.getDate(), e, 2);
}
function Hr(t2, e) {
  return P(t2.getHours(), e, 2);
}
function zr(t2, e) {
  return P(t2.getHours() % 12 || 12, e, 2);
}
function Nr(t2, e) {
  return P(1 + yt.count(mt(t2), t2), e, 3);
}
function cn(t2, e) {
  return P(t2.getMilliseconds(), e, 3);
}
function Vr(t2, e) {
  return cn(t2, e) + "000";
}
function Pr(t2, e) {
  return P(t2.getMonth() + 1, e, 2);
}
function Rr(t2, e) {
  return P(t2.getMinutes(), e, 2);
}
function Br(t2, e) {
  return P(t2.getSeconds(), e, 2);
}
function Zr(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function Xr(t2, e) {
  return P(Ot.count(mt(t2) - 1, t2), e, 2);
}
function ln(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? kt(t2) : kt.ceil(t2);
}
function qr(t2, e) {
  return t2 = ln(t2), P(kt.count(mt(t2), t2) + (mt(t2).getDay() === 4), e, 2);
}
function Gr(t2) {
  return t2.getDay();
}
function jr(t2, e) {
  return P(It.count(mt(t2) - 1, t2), e, 2);
}
function Qr(t2, e) {
  return P(t2.getFullYear() % 100, e, 2);
}
function Jr(t2, e) {
  return t2 = ln(t2), P(t2.getFullYear() % 100, e, 2);
}
function $r(t2, e) {
  return P(t2.getFullYear() % 1e4, e, 4);
}
function Kr(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? kt(t2) : kt.ceil(t2), P(t2.getFullYear() % 1e4, e, 4);
}
function ti(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + P(e / 60 | 0, "0", 2) + P(e % 60, "0", 2);
}
function He(t2, e) {
  return P(t2.getUTCDate(), e, 2);
}
function ei(t2, e) {
  return P(t2.getUTCHours(), e, 2);
}
function ni(t2, e) {
  return P(t2.getUTCHours() % 12 || 12, e, 2);
}
function ri(t2, e) {
  return P(1 + Te.count(pt(t2), t2), e, 3);
}
function un(t2, e) {
  return P(t2.getUTCMilliseconds(), e, 3);
}
function ii(t2, e) {
  return un(t2, e) + "000";
}
function si(t2, e) {
  return P(t2.getUTCMonth() + 1, e, 2);
}
function ai(t2, e) {
  return P(t2.getUTCMinutes(), e, 2);
}
function oi(t2, e) {
  return P(t2.getUTCSeconds(), e, 2);
}
function ci(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function li(t2, e) {
  return P(on.count(pt(t2) - 1, t2), e, 2);
}
function fn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Mt(t2) : Mt.ceil(t2);
}
function ui(t2, e) {
  return t2 = fn(t2), P(Mt.count(pt(t2), t2) + (pt(t2).getUTCDay() === 4), e, 2);
}
function fi(t2) {
  return t2.getUTCDay();
}
function hi2(t2, e) {
  return P(jt.count(pt(t2) - 1, t2), e, 2);
}
function di(t2, e) {
  return P(t2.getUTCFullYear() % 100, e, 2);
}
function mi(t2, e) {
  return t2 = fn(t2), P(t2.getUTCFullYear() % 100, e, 2);
}
function gi(t2, e) {
  return P(t2.getUTCFullYear() % 1e4, e, 4);
}
function yi(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Mt(t2) : Mt.ceil(t2), P(t2.getUTCFullYear() % 1e4, e, 4);
}
function ki() {
  return "+0000";
}
function ze() {
  return "%";
}
function Ne(t2) {
  return +t2;
}
function Ve(t2) {
  return Math.floor(+t2 / 1e3);
}
var vt;
var Qt;
pi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pi(t2) {
  return vt = pr(t2), Qt = vt.format, vt.parse, vt.utcFormat, vt.utcParse, vt;
}
function Ti(t2) {
  return new Date(t2);
}
function bi(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function hn(t2, e, n, r, i, s, a, y, _2, k) {
  var C = Un(), F = C.invert, w = C.domain, x = k(".%L"), q = k(":%S"), g = k("%I:%M"), L = k("%I %p"), O = k("%a %d"), W = k("%b %d"), B = k("%B"), Z = k("%Y");
  function Q(b) {
    return (_2(b) < b ? x : y(b) < b ? q : a(b) < b ? g : s(b) < b ? L : r(b) < b ? i(b) < b ? O : W : n(b) < b ? B : Z)(b);
  }
  return C.invert = function(b) {
    return new Date(F(b));
  }, C.domain = function(b) {
    return arguments.length ? w(Array.from(b, bi)) : w().map(Ti);
  }, C.ticks = function(b) {
    var A2 = w();
    return t2(A2[0], A2[A2.length - 1], b ?? 10);
  }, C.tickFormat = function(b, A2) {
    return A2 == null ? Q : k(A2);
  }, C.nice = function(b) {
    var A2 = w();
    return (!b || typeof b.range != "function") && (b = e(A2[0], A2[A2.length - 1], b ?? 10)), b ? w(ar(A2, b)) : C;
  }, C.copy = function() {
    return Vn(C, hn(t2, e, n, r, i, s, a, y, _2, k));
  }, C;
}
function vi() {
  return t.apply(hn(yr, kr, mt, Wt, Ot, yt, At, Et, gt, Qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var he = function() {
  var t2 = function(v, o, d, m) {
    for (d = d || {}, m = v.length; m--; d[v[m]] = o)
      ;
    return d;
  }, e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 33, 35, 37], n = [1, 25], r = [1, 26], i = [1, 27], s = [1, 28], a = [1, 29], y = [1, 30], _2 = [1, 31], k = [1, 9], C = [1, 10], F = [1, 11], w = [1, 12], x = [1, 13], q = [1, 14], g = [1, 15], L = [1, 16], O = [1, 18], W = [1, 19], B = [1, 20], Z = [1, 21], Q = [1, 22], b = [1, 24], A2 = [1, 32], T = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, dateFormat: 19, inclusiveEndDates: 20, topAxis: 21, axisFormat: 22, tickInterval: 23, excludes: 24, includes: 25, todayMarker: 26, title: 27, acc_title: 28, acc_title_value: 29, acc_descr: 30, acc_descr_value: 31, acc_descr_multiline_value: 32, section: 33, clickStatement: 34, taskTxt: 35, taskData: 36, click: 37, callbackname: 38, callbackargs: 39, href: 40, clickStatementDebug: 41, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 19: "dateFormat", 20: "inclusiveEndDates", 21: "topAxis", 22: "axisFormat", 23: "tickInterval", 24: "excludes", 25: "includes", 26: "todayMarker", 27: "title", 28: "acc_title", 29: "acc_title_value", 30: "acc_descr", 31: "acc_descr_value", 32: "acc_descr_multiline_value", 33: "section", 35: "taskTxt", 36: "taskData", 37: "click", 38: "callbackname", 39: "callbackargs", 40: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [34, 2], [34, 3], [34, 3], [34, 4], [34, 3], [34, 4], [34, 2], [41, 2], [41, 3], [41, 3], [41, 4], [41, 3], [41, 4], [41, 2]],
    performAction: function(o, d, m, u, S, c, X) {
      var f = c.length - 1;
      switch (S) {
        case 1:
          return c[f - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          c[f - 1].push(c[f]), this.$ = c[f - 1];
          break;
        case 4:
        case 5:
          this.$ = c[f];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          u.setWeekday("monday");
          break;
        case 9:
          u.setWeekday("tuesday");
          break;
        case 10:
          u.setWeekday("wednesday");
          break;
        case 11:
          u.setWeekday("thursday");
          break;
        case 12:
          u.setWeekday("friday");
          break;
        case 13:
          u.setWeekday("saturday");
          break;
        case 14:
          u.setWeekday("sunday");
          break;
        case 15:
          u.setDateFormat(c[f].substr(11)), this.$ = c[f].substr(11);
          break;
        case 16:
          u.enableInclusiveEndDates(), this.$ = c[f].substr(18);
          break;
        case 17:
          u.TopAxis(), this.$ = c[f].substr(8);
          break;
        case 18:
          u.setAxisFormat(c[f].substr(11)), this.$ = c[f].substr(11);
          break;
        case 19:
          u.setTickInterval(c[f].substr(13)), this.$ = c[f].substr(13);
          break;
        case 20:
          u.setExcludes(c[f].substr(9)), this.$ = c[f].substr(9);
          break;
        case 21:
          u.setIncludes(c[f].substr(9)), this.$ = c[f].substr(9);
          break;
        case 22:
          u.setTodayMarker(c[f].substr(12)), this.$ = c[f].substr(12);
          break;
        case 24:
          u.setDiagramTitle(c[f].substr(6)), this.$ = c[f].substr(6);
          break;
        case 25:
          this.$ = c[f].trim(), u.setAccTitle(this.$);
          break;
        case 26:
        case 27:
          this.$ = c[f].trim(), u.setAccDescription(this.$);
          break;
        case 28:
          u.addSection(c[f].substr(8)), this.$ = c[f].substr(8);
          break;
        case 30:
          u.addTask(c[f - 1], c[f]), this.$ = "task";
          break;
        case 31:
          this.$ = c[f - 1], u.setClickEvent(c[f - 1], c[f], null);
          break;
        case 32:
          this.$ = c[f - 2], u.setClickEvent(c[f - 2], c[f - 1], c[f]);
          break;
        case 33:
          this.$ = c[f - 2], u.setClickEvent(c[f - 2], c[f - 1], null), u.setLink(c[f - 2], c[f]);
          break;
        case 34:
          this.$ = c[f - 3], u.setClickEvent(c[f - 3], c[f - 2], c[f - 1]), u.setLink(c[f - 3], c[f]);
          break;
        case 35:
          this.$ = c[f - 2], u.setClickEvent(c[f - 2], c[f], null), u.setLink(c[f - 2], c[f - 1]);
          break;
        case 36:
          this.$ = c[f - 3], u.setClickEvent(c[f - 3], c[f - 1], c[f]), u.setLink(c[f - 3], c[f - 2]);
          break;
        case 37:
          this.$ = c[f - 1], u.setLink(c[f - 1], c[f]);
          break;
        case 38:
        case 44:
          this.$ = c[f - 1] + " " + c[f];
          break;
        case 39:
        case 40:
        case 42:
          this.$ = c[f - 2] + " " + c[f - 1] + " " + c[f];
          break;
        case 41:
        case 43:
          this.$ = c[f - 3] + " " + c[f - 2] + " " + c[f - 1] + " " + c[f];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t2(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: i, 15: s, 16: a, 17: y, 18: _2, 19: k, 20: C, 21: F, 22: w, 23: x, 24: q, 25: g, 26: L, 27: O, 28: W, 30: B, 32: Z, 33: Q, 34: 23, 35: b, 37: A2 }, t2(e, [2, 7], { 1: [2, 1] }), t2(e, [2, 3]), { 9: 33, 11: 17, 12: n, 13: r, 14: i, 15: s, 16: a, 17: y, 18: _2, 19: k, 20: C, 21: F, 22: w, 23: x, 24: q, 25: g, 26: L, 27: O, 28: W, 30: B, 32: Z, 33: Q, 34: 23, 35: b, 37: A2 }, t2(e, [2, 5]), t2(e, [2, 6]), t2(e, [2, 15]), t2(e, [2, 16]), t2(e, [2, 17]), t2(e, [2, 18]), t2(e, [2, 19]), t2(e, [2, 20]), t2(e, [2, 21]), t2(e, [2, 22]), t2(e, [2, 23]), t2(e, [2, 24]), { 29: [1, 34] }, { 31: [1, 35] }, t2(e, [2, 27]), t2(e, [2, 28]), t2(e, [2, 29]), { 36: [1, 36] }, t2(e, [2, 8]), t2(e, [2, 9]), t2(e, [2, 10]), t2(e, [2, 11]), t2(e, [2, 12]), t2(e, [2, 13]), t2(e, [2, 14]), { 38: [1, 37], 40: [1, 38] }, t2(e, [2, 4]), t2(e, [2, 25]), t2(e, [2, 26]), t2(e, [2, 30]), t2(e, [2, 31], { 39: [1, 39], 40: [1, 40] }), t2(e, [2, 37], { 38: [1, 41] }), t2(e, [2, 32], { 40: [1, 42] }), t2(e, [2, 33]), t2(e, [2, 35], { 39: [1, 43] }), t2(e, [2, 34]), t2(e, [2, 36])],
    defaultActions: {},
    parseError: function(o, d) {
      if (d.recoverable)
        this.trace(o);
      else {
        var m = new Error(o);
        throw m.hash = d, m;
      }
    },
    parse: function(o) {
      var d = this, m = [0], u = [], S = [null], c = [], X = this.table, f = "", h = 0, U = 0, G = 2, H = 1, N = c.slice.call(arguments, 1), I = Object.create(this.lexer), V = { yy: {} };
      for (var st in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, st) && (V.yy[st] = this.yy[st]);
      I.setInput(o, V.yy), V.yy.lexer = I, V.yy.parser = this, typeof I.yylloc > "u" && (I.yylloc = {});
      var it = I.yylloc;
      c.push(it);
      var p = I.options && I.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function E() {
        var ct;
        return ct = u.pop() || I.lex() || H, typeof ct != "number" && (ct instanceof Array && (u = ct, ct = u.pop()), ct = d.symbols_[ct] || ct), ct;
      }
      for (var M, l, R, z, j = {}, J, et, Ut, Vt; ; ) {
        if (l = m[m.length - 1], this.defaultActions[l] ? R = this.defaultActions[l] : ((M === null || typeof M > "u") && (M = E()), R = X[l] && X[l][M]), typeof R > "u" || !R.length || !R[0]) {
          var $t = "";
          Vt = [];
          for (J in X[l])
            this.terminals_[J] && J > G && Vt.push("'" + this.terminals_[J] + "'");
          I.showPosition ? $t = "Parse error on line " + (h + 1) + `:
` + I.showPosition() + `
Expecting ` + Vt.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : $t = "Parse error on line " + (h + 1) + ": Unexpected " + (M == H ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError($t, {
            text: I.match,
            token: this.terminals_[M] || M,
            line: I.yylineno,
            loc: it,
            expected: Vt
          });
        }
        if (R[0] instanceof Array && R.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + M);
        switch (R[0]) {
          case 1:
            m.push(M), S.push(I.yytext), c.push(I.yylloc), m.push(R[1]), M = null, U = I.yyleng, f = I.yytext, h = I.yylineno, it = I.yylloc;
            break;
          case 2:
            if (et = this.productions_[R[1]][1], j.$ = S[S.length - et], j._$ = {
              first_line: c[c.length - (et || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (et || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, p && (j._$.range = [
              c[c.length - (et || 1)].range[0],
              c[c.length - 1].range[1]
            ]), z = this.performAction.apply(j, [
              f,
              U,
              h,
              V.yy,
              R[1],
              S,
              c
            ].concat(N)), typeof z < "u")
              return z;
            et && (m = m.slice(0, -1 * et * 2), S = S.slice(0, -1 * et), c = c.slice(0, -1 * et)), m.push(this.productions_[R[1]][0]), S.push(j.$), c.push(j._$), Ut = X[m[m.length - 2]][m[m.length - 1]], m.push(Ut);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, Y = /* @__PURE__ */ function() {
    var v = {
      EOF: 1,
      parseError: function(d, m) {
        if (this.yy.parser)
          this.yy.parser.parseError(d, m);
        else
          throw new Error(d);
      },
      // resets the lexer, sets new input
      setInput: function(o, d) {
        return this.yy = d || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var d = o.match(/(?:\r\n?|\n).*/g);
        return d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), o;
      },
      // unshifts one char (or a string) into the input
      unput: function(o) {
        var d = o.length, m = o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - d), this.offset -= d;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), m.length - 1 && (this.yylineno -= m.length - 1);
        var S = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: m ? (m.length === u.length ? this.yylloc.first_column : 0) + u[u.length - m.length].length - m[0].length : this.yylloc.first_column - d
        }, this.options.ranges && (this.yylloc.range = [S[0], S[0] + this.yyleng - d]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(o) {
        this.unput(this.match.slice(o));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var o = this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var o = this.match;
        return o.length < 20 && (o += this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var o = this.pastInput(), d = new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + d + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(o, d) {
        var m, u, S;
        if (this.options.backtrack_lexer && (S = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (S.yylloc.range = this.yylloc.range.slice(0))), u = o[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(o[0].length), this.matched += o[0], m = this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), m)
          return m;
        if (this._backtrack) {
          for (var c in S)
            this[c] = S[c];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var o, d, m, u;
        this._more || (this.yytext = "", this.match = "");
        for (var S = this._currentRules(), c = 0; c < S.length; c++)
          if (m = this._input.match(this.rules[S[c]]), m && (!d || m[0].length > d[0].length)) {
            if (d = m, u = c, this.options.backtrack_lexer) {
              if (o = this.test_match(m, S[c]), o !== false)
                return o;
              if (this._backtrack) {
                d = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return d ? (o = this.test_match(d, S[u]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var d = this.next();
        return d || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(d) {
        this.conditionStack.push(d);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var d = this.conditionStack.length - 1;
        return d > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(d) {
        return d = this.conditionStack.length - 1 - Math.abs(d || 0), d >= 0 ? this.conditionStack[d] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(d) {
        this.begin(d);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(d, m, u, S) {
        switch (u) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 28;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 30;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            this.begin("href");
            break;
          case 16:
            this.popState();
            break;
          case 17:
            return 40;
          case 18:
            this.begin("callbackname");
            break;
          case 19:
            this.popState();
            break;
          case 20:
            this.popState(), this.begin("callbackargs");
            break;
          case 21:
            return 38;
          case 22:
            this.popState();
            break;
          case 23:
            return 39;
          case 24:
            this.begin("click");
            break;
          case 25:
            this.popState();
            break;
          case 26:
            return 37;
          case 27:
            return 4;
          case 28:
            return 19;
          case 29:
            return 20;
          case 30:
            return 21;
          case 31:
            return 22;
          case 32:
            return 23;
          case 33:
            return 25;
          case 34:
            return 24;
          case 35:
            return 26;
          case 36:
            return 12;
          case 37:
            return 13;
          case 38:
            return 14;
          case 39:
            return 15;
          case 40:
            return 16;
          case 41:
            return 17;
          case 42:
            return 18;
          case 43:
            return "date";
          case 44:
            return 27;
          case 45:
            return "accDescription";
          case 46:
            return 33;
          case 47:
            return 35;
          case 48:
            return 36;
          case 49:
            return ":";
          case 50:
            return 6;
          case 51:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [22, 23], inclusive: false }, callbackname: { rules: [19, 20, 21], inclusive: false }, href: { rules: [16, 17], inclusive: false }, click: { rules: [25, 26], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 18, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], inclusive: true } }
    };
    return v;
  }();
  T.lexer = Y;
  function D() {
    this.yy = {};
  }
  return D.prototype = T, T.Parser = D, new D();
}();
he.parser = he;
var xi = he;
var dn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(lh, function() {
    var n = "day";
    return function(r, i, s) {
      var a = function(k) {
        return k.add(4 - k.isoWeekday(), n);
      }, y = i.prototype;
      y.isoWeekYear = function() {
        return a(this).year();
      }, y.isoWeek = function(k) {
        if (!this.$utils().u(k))
          return this.add(7 * (k - this.isoWeek()), n);
        var C, F, w, x, q = a(this), g = (C = this.isoWeekYear(), F = this.$u, w = (F ? s.utc : s)().year(C).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return q.diff(g, "week") + 1;
      }, y.isoWeekday = function(k) {
        return this.$utils().u(k) ? this.day() || 7 : this.day(this.day() % 7 ? k : k - 7);
      };
      var _2 = y.startOf;
      y.startOf = function(k, C) {
        var F = this.$utils(), w = !!F.u(C) || C;
        return F.p(k) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : _2.bind(this)(k, C);
      };
    };
  });
})(dn);
var wi = dn.exports;
var Ci = hh(wi);
var mn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(lh, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, s = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, y = {}, _2 = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, k = function(g) {
      return function(L) {
        this[g] = +L;
      };
    }, C = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(L) {
        if (!L || L === "Z")
          return 0;
        var O = L.match(/([+-]|\d\d)/g), W = 60 * O[1] + (+O[2] || 0);
        return W === 0 ? 0 : O[0] === "+" ? -W : W;
      }(g);
    }], F = function(g) {
      var L = y[g];
      return L && (L.indexOf ? L : L.s.concat(L.f));
    }, w = function(g, L) {
      var O, W = y.meridiem;
      if (W) {
        for (var B = 1; B <= 24; B += 1)
          if (g.indexOf(W(B, 0, L)) > -1) {
            O = B > 12;
            break;
          }
      } else
        O = g === (L ? "pm" : "PM");
      return O;
    }, x = { A: [a, function(g) {
      this.afternoon = w(g, false);
    }], a: [a, function(g) {
      this.afternoon = w(g, true);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [i, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [s, k("seconds")], ss: [s, k("seconds")], m: [s, k("minutes")], mm: [s, k("minutes")], H: [s, k("hours")], h: [s, k("hours")], HH: [s, k("hours")], hh: [s, k("hours")], D: [s, k("day")], DD: [i, k("day")], Do: [a, function(g) {
      var L = y.ordinal, O = g.match(/\d+/);
      if (this.day = O[0], L)
        for (var W = 1; W <= 31; W += 1)
          L(W).replace(/\[|\]/g, "") === g && (this.day = W);
    }], M: [s, k("month")], MM: [i, k("month")], MMM: [a, function(g) {
      var L = F("months"), O = (F("monthsShort") || L.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(g) + 1;
      if (O < 1)
        throw new Error();
      this.month = O % 12 || O;
    }], MMMM: [a, function(g) {
      var L = F("months").indexOf(g) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], Y: [/[+-]?\d+/, k("year")], YY: [i, function(g) {
      this.year = _2(g);
    }], YYYY: [/\d{4}/, k("year")], Z: C, ZZ: C };
    function q(g) {
      var L, O;
      L = g, O = y && y.formats;
      for (var W = (g = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Y, D, v) {
        var o = v && v.toUpperCase();
        return D || O[v] || n[v] || O[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(d, m, u) {
          return m || u.slice(1);
        });
      })).match(r), B = W.length, Z = 0; Z < B; Z += 1) {
        var Q = W[Z], b = x[Q], A2 = b && b[0], T = b && b[1];
        W[Z] = T ? { regex: A2, parser: T } : Q.replace(/^\[|\]$/g, "");
      }
      return function(Y) {
        for (var D = {}, v = 0, o = 0; v < B; v += 1) {
          var d = W[v];
          if (typeof d == "string")
            o += d.length;
          else {
            var m = d.regex, u = d.parser, S = Y.slice(o), c = m.exec(S)[0];
            u.call(D, c), Y = Y.replace(c, "");
          }
        }
        return function(X) {
          var f = X.afternoon;
          if (f !== void 0) {
            var h = X.hours;
            f ? h < 12 && (X.hours += 12) : h === 12 && (X.hours = 0), delete X.afternoon;
          }
        }(D), D;
      };
    }
    return function(g, L, O) {
      O.p.customParseFormat = true, g && g.parseTwoDigitYear && (_2 = g.parseTwoDigitYear);
      var W = L.prototype, B = W.parse;
      W.parse = function(Z) {
        var Q = Z.date, b = Z.utc, A2 = Z.args;
        this.$u = b;
        var T = A2[1];
        if (typeof T == "string") {
          var Y = A2[2] === true, D = A2[3] === true, v = Y || D, o = A2[2];
          D && (o = A2[2]), y = this.$locale(), !Y && o && (y = O.Ls[o]), this.$d = function(S, c, X) {
            try {
              if (["x", "X"].indexOf(c) > -1)
                return new Date((c === "X" ? 1e3 : 1) * S);
              var f = q(c)(S), h = f.year, U = f.month, G = f.day, H = f.hours, N = f.minutes, I = f.seconds, V = f.milliseconds, st = f.zone, it = /* @__PURE__ */ new Date(), p = G || (h || U ? 1 : it.getDate()), E = h || it.getFullYear(), M = 0;
              h && !U || (M = U > 0 ? U - 1 : it.getMonth());
              var l = H || 0, R = N || 0, z = I || 0, j = V || 0;
              return st ? new Date(Date.UTC(E, M, p, l, R, z, j + 60 * st.offset * 1e3)) : X ? new Date(Date.UTC(E, M, p, l, R, z, j)) : new Date(E, M, p, l, R, z, j);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(Q, T, b), this.init(), o && o !== true && (this.$L = this.locale(o).$L), v && Q != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
        } else if (T instanceof Array)
          for (var d = T.length, m = 1; m <= d; m += 1) {
            A2[1] = T[m - 1];
            var u = O.apply(this, A2);
            if (u.isValid()) {
              this.$d = u.$d, this.$L = u.$L, this.init();
              break;
            }
            m === d && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          B.call(this, Z);
      };
    };
  });
})(mn);
var Di = mn.exports;
var Mi = hh(Di);
var gn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(lh, function() {
    return function(n, r) {
      var i = r.prototype, s = i.format;
      i.format = function(a) {
        var y = this, _2 = this.$locale();
        if (!this.isValid())
          return s.bind(this)(a);
        var k = this.$utils(), C = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(F) {
          switch (F) {
            case "Q":
              return Math.ceil((y.$M + 1) / 3);
            case "Do":
              return _2.ordinal(y.$D);
            case "gggg":
              return y.weekYear();
            case "GGGG":
              return y.isoWeekYear();
            case "wo":
              return _2.ordinal(y.week(), "W");
            case "w":
            case "ww":
              return k.s(y.week(), F === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return k.s(y.isoWeek(), F === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return k.s(String(y.$H === 0 ? 24 : y.$H), F === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(y.$d.getTime() / 1e3);
            case "x":
              return y.$d.getTime();
            case "z":
              return "[" + y.offsetName() + "]";
            case "zzz":
              return "[" + y.offsetName("long") + "]";
            default:
              return F;
          }
        });
        return s.bind(this)(C);
      };
    };
  });
})(gn);
var Si = gn.exports;
var _i = hh(Si);
uh.extend(Ci);
uh.extend(Mi);
uh.extend(_i);
var at = "";
var be = "";
var ve;
var xe = "";
var Ht = [];
var zt = [];
var we = {};
var Ce = [];
var Jt = [];
var St = "";
var De = "";
var yn = ["active", "done", "crit", "milestone"];
var Me = [];
var Nt = false;
var Se = false;
var _e = "sunday";
var de = 0;
var Ui = function() {
  Ce = [], Jt = [], St = "", Me = [], Zt = 0, ge = void 0, Xt = void 0, $ = [], at = "", be = "", De = "", ve = void 0, xe = "", Ht = [], zt = [], Nt = false, Se = false, de = 0, we = {}, T_(), _e = "sunday";
};
var Yi = function(t2) {
  be = t2;
};
var Fi = function() {
  return be;
};
var Li = function(t2) {
  ve = t2;
};
var Ei = function() {
  return ve;
};
var Ai = function(t2) {
  xe = t2;
};
var Ii = function() {
  return xe;
};
var Wi = function(t2) {
  at = t2;
};
var Oi = function() {
  Nt = true;
};
var Hi = function() {
  return Nt;
};
var zi = function() {
  Se = true;
};
var Ni = function() {
  return Se;
};
var Vi = function(t2) {
  De = t2;
};
var Pi = function() {
  return De;
};
var Ri = function() {
  return at;
};
var Bi = function(t2) {
  Ht = t2.toLowerCase().split(/[\s,]+/);
};
var Zi = function() {
  return Ht;
};
var Xi = function(t2) {
  zt = t2.toLowerCase().split(/[\s,]+/);
};
var qi = function() {
  return zt;
};
var Gi = function() {
  return we;
};
var ji = function(t2) {
  St = t2, Ce.push(t2);
};
var Qi = function() {
  return Ce;
};
var Ji = function() {
  let t2 = Pe();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = Pe(), n++;
  return Jt = $, Jt;
};
var kn = function(t2, e, n, r) {
  return r.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(t2.format(e.trim()));
};
var $i = function(t2) {
  _e = t2;
};
var Ki = function() {
  return _e;
};
var pn = function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = uh(t2.startTime) : i = uh(t2.startTime, e, true), i = i.add(1, "d");
  let s;
  t2.endTime instanceof Date ? s = uh(t2.endTime) : s = uh(t2.endTime, e, true);
  const [a, y] = ts(
    i,
    s,
    e,
    n,
    r
  );
  t2.endTime = a.toDate(), t2.renderEndTime = y;
};
var ts = function(t2, e, n, r, i) {
  let s = false, a = null;
  for (; t2 <= e; )
    s || (a = e.toDate()), s = kn(t2, n, r, i), s && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, a];
};
var me = function(t2, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let a = null;
    if (i[1].split(" ").forEach(function(y) {
      let _2 = _t(y);
      _2 !== void 0 && (a ? _2.endTime > a.endTime && (a = _2) : a = _2);
    }), a)
      return a.endTime;
    {
      const y = /* @__PURE__ */ new Date();
      return y.setHours(0, 0, 0, 0), y;
    }
  }
  let s = uh(n, e.trim(), true);
  if (s.isValid())
    return s.toDate();
  {
    A.debug("Invalid date:" + n), A.debug("With date format:" + e.trim());
    const a = new Date(n);
    if (a === void 0 || isNaN(a.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    a.getFullYear() < -1e4 || a.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return a;
  }
};
var Tn = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var bn = function(t2, e, n, r = false) {
  n = n.trim();
  let i = uh(n, e.trim(), true);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let s = uh(t2);
  const [a, y] = Tn(n);
  if (!Number.isNaN(a)) {
    const _2 = s.add(a, y);
    _2.isValid() && (s = _2);
  }
  return s.toDate();
};
var Zt = 0;
var Ct2 = function(t2) {
  return t2 === void 0 ? (Zt = Zt + 1, "task" + Zt) : t2;
};
var es = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Cn(r, i, yn);
  for (let a = 0; a < r.length; a++)
    r[a] = r[a].trim();
  let s = "";
  switch (r.length) {
    case 1:
      i.id = Ct2(), i.startTime = t2.endTime, s = r[0];
      break;
    case 2:
      i.id = Ct2(), i.startTime = me(void 0, at, r[0]), s = r[1];
      break;
    case 3:
      i.id = Ct2(r[0]), i.startTime = me(void 0, at, r[1]), s = r[2];
      break;
  }
  return s && (i.endTime = bn(i.startTime, at, s, Nt), i.manualEndTime = uh(s, "YYYY-MM-DD", true).isValid(), pn(i, at, zt, Ht)), i;
};
var ns = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Cn(r, i, yn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  switch (r.length) {
    case 1:
      i.id = Ct2(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = Ct2(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = Ct2(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
var ge;
var Xt;
var $ = [];
var vn2 = {};
var rs = function(t2, e) {
  const n = {
    section: St,
    type: St,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = ns(Xt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Xt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = de, de++;
  const i = $.push(n);
  Xt = n.id, vn2[n.id] = i - 1;
};
var _t = function(t2) {
  const e = vn2[t2];
  return $[e];
};
var is = function(t2, e) {
  const n = {
    section: St,
    type: St,
    description: t2,
    task: t2,
    classes: []
  }, r = es(ge, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, ge = n, Jt.push(n);
};
var Pe = function() {
  const t2 = function(n) {
    const r = $[n];
    let i = "";
    switch ($[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const s = _t(r.prevTaskId);
        r.startTime = s.endTime;
        break;
      }
      case "getStartDate":
        i = me(void 0, at, $[n].raw.startTime.startData), i && ($[n].startTime = i);
        break;
    }
    return $[n].startTime && ($[n].endTime = bn(
      $[n].startTime,
      at,
      $[n].raw.endTime.data,
      Nt
    ), $[n].endTime && ($[n].processed = true, $[n].manualEndTime = uh(
      $[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), pn($[n], at, zt, Ht))), $[n].processed;
  };
  let e = true;
  for (const [n, r] of $.entries())
    t2(n), e = e && r.processed;
  return e;
};
var ss = function(t2, e) {
  let n = e;
  Xn().securityLevel !== "loose" && (n = Ms(e)), t2.split(",").forEach(function(r) {
    _t(r) !== void 0 && (wn(r, () => {
      window.open(n, "_self");
    }), we[r] = n);
  }), xn(t2, "clickable");
};
var xn = function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = _t(n);
    r !== void 0 && r.classes.push(e);
  });
};
var as = function(t2, e, n) {
  if (Xn().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let s = 0; s < r.length; s++) {
      let a = r[s].trim();
      a.charAt(0) === '"' && a.charAt(a.length - 1) === '"' && (a = a.substr(1, a.length - 2)), r[s] = a;
    }
  }
  r.length === 0 && r.push(t2), _t(t2) !== void 0 && wn(t2, () => {
    Ke.runFunc(e, ...r);
  });
};
var wn = function(t2, e) {
  Me.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
};
var os = function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    as(r, e, n);
  }), xn(t2, "clickable");
};
var cs = function(t2) {
  Me.forEach(function(e) {
    e(t2);
  });
};
var ls = {
  getConfig: () => Xn().gantt,
  clear: Ui,
  setDateFormat: Wi,
  getDateFormat: Ri,
  enableInclusiveEndDates: Oi,
  endDatesAreInclusive: Hi,
  enableTopAxis: zi,
  topAxisEnabled: Ni,
  setAxisFormat: Yi,
  getAxisFormat: Fi,
  setTickInterval: Li,
  getTickInterval: Ei,
  setTodayMarker: Ai,
  getTodayMarker: Ii,
  setAccTitle: k_,
  getAccTitle: S_,
  setDiagramTitle: B_,
  getDiagramTitle: F_,
  setDisplayMode: Vi,
  getDisplayMode: Pi,
  setAccDescription: v_,
  getAccDescription: w_,
  addSection: ji,
  getSections: Qi,
  getTasks: Ji,
  addTask: rs,
  findTaskById: _t,
  addTaskOrg: is,
  setIncludes: Bi,
  getIncludes: Zi,
  setExcludes: Xi,
  getExcludes: qi,
  setClickEvent: os,
  setLink: ss,
  getLinks: Gi,
  bindFunctions: cs,
  parseDuration: Tn,
  isInvalidDate: kn,
  setWeekday: $i,
  getWeekday: Ki
};
function Cn(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(i) {
      const s = "^\\s*" + i + "\\s*$", a = new RegExp(s);
      t2[0].match(a) && (e[i] = true, t2.shift(1), r = true);
    });
}
var us = function() {
  A.debug("Something is calling, setConf, remove the call");
};
var Re = {
  monday: It,
  tuesday: nn,
  wednesday: rn,
  thursday: kt,
  friday: sn,
  saturday: an,
  sunday: Ot
};
var fs = (t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((s, a) => s.startTime - a.startTime || s.order - a.order), i = 0;
  for (const s of r)
    for (let a = 0; a < n.length; a++)
      if (s.startTime >= n[a]) {
        n[a] = s.endTime, s.order = a + e, a > i && (i = a);
        break;
      }
  return i;
};
var lt;
var hs = function(t2, e, n, r) {
  const i = Xn().gantt, s = Xn().securityLevel;
  let a;
  s === "sandbox" && (a = Ct("#i" + e));
  const y = s === "sandbox" ? Ct(a.nodes()[0].contentDocument.body) : Ct("body"), _2 = s === "sandbox" ? a.nodes()[0].contentDocument : document, k = _2.getElementById(e);
  lt = k.parentElement.offsetWidth, lt === void 0 && (lt = 1200), i.useWidth !== void 0 && (lt = i.useWidth);
  const C = r.db.getTasks();
  let F = [];
  for (const T of C)
    F.push(T.type);
  F = A2(F);
  const w = {};
  let x = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const T = {};
    for (const D of C)
      T[D.section] === void 0 ? T[D.section] = [D] : T[D.section].push(D);
    let Y = 0;
    for (const D of Object.keys(T)) {
      const v = fs(T[D], Y) + 1;
      Y += v, x += v * (i.barHeight + i.barGap), w[D] = v;
    }
  } else {
    x += C.length * (i.barHeight + i.barGap);
    for (const T of F)
      w[T] = C.filter((Y) => Y.type === T).length;
  }
  k.setAttribute("viewBox", "0 0 " + lt + " " + x);
  const q = y.select(`[id="${e}"]`), g = vi().domain([
    Bn(C, function(T) {
      return T.startTime;
    }),
    Rn(C, function(T) {
      return T.endTime;
    })
  ]).rangeRound([0, lt - i.leftPadding - i.rightPadding]);
  function L(T, Y) {
    const D = T.startTime, v = Y.startTime;
    let o = 0;
    return D > v ? o = 1 : D < v && (o = -1), o;
  }
  C.sort(L), O(C, lt, x), wl(q, x, lt, i.useMaxWidth), q.append("text").text(r.db.getDiagramTitle()).attr("x", lt / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function O(T, Y, D) {
    const v = i.barHeight, o = v + i.barGap, d = i.topPadding, m = i.leftPadding, u = Hn().domain([0, F.length]).range(["#00B9FA", "#F95002"]).interpolate(sr);
    B(
      o,
      d,
      m,
      Y,
      D,
      T,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), Z(m, d, Y, D), W(T, o, d, m, v, u, Y), Q(o, d), b(m, d, Y, D);
  }
  function W(T, Y, D, v, o, d, m) {
    const S = [...new Set(T.map((h) => h.order))].map((h) => T.find((U) => U.order === h));
    q.append("g").selectAll("rect").data(S).enter().append("rect").attr("x", 0).attr("y", function(h, U) {
      return U = h.order, U * Y + D - 2;
    }).attr("width", function() {
      return m - i.rightPadding / 2;
    }).attr("height", Y).attr("class", function(h) {
      for (const [U, G] of F.entries())
        if (h.type === G)
          return "section section" + U % i.numberSectionStyles;
      return "section section0";
    });
    const c = q.append("g").selectAll("rect").data(T).enter(), X = r.db.getLinks();
    if (c.append("rect").attr("id", function(h) {
      return h.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(h) {
      return h.milestone ? g(h.startTime) + v + 0.5 * (g(h.endTime) - g(h.startTime)) - 0.5 * o : g(h.startTime) + v;
    }).attr("y", function(h, U) {
      return U = h.order, U * Y + D;
    }).attr("width", function(h) {
      return h.milestone ? o : g(h.renderEndTime || h.endTime) - g(h.startTime);
    }).attr("height", o).attr("transform-origin", function(h, U) {
      return U = h.order, (g(h.startTime) + v + 0.5 * (g(h.endTime) - g(h.startTime))).toString() + "px " + (U * Y + D + 0.5 * o).toString() + "px";
    }).attr("class", function(h) {
      const U = "task";
      let G = "";
      h.classes.length > 0 && (G = h.classes.join(" "));
      let H = 0;
      for (const [I, V] of F.entries())
        h.type === V && (H = I % i.numberSectionStyles);
      let N = "";
      return h.active ? h.crit ? N += " activeCrit" : N = " active" : h.done ? h.crit ? N = " doneCrit" : N = " done" : h.crit && (N += " crit"), N.length === 0 && (N = " task"), h.milestone && (N = " milestone " + N), N += H, N += " " + G, U + N;
    }), c.append("text").attr("id", function(h) {
      return h.id + "-text";
    }).text(function(h) {
      return h.task;
    }).attr("font-size", i.fontSize).attr("x", function(h) {
      let U = g(h.startTime), G = g(h.renderEndTime || h.endTime);
      h.milestone && (U += 0.5 * (g(h.endTime) - g(h.startTime)) - 0.5 * o), h.milestone && (G = U + o);
      const H = this.getBBox().width;
      return H > G - U ? G + H + 1.5 * i.leftPadding > m ? U + v - 5 : G + v + 5 : (G - U) / 2 + U + v;
    }).attr("y", function(h, U) {
      return U = h.order, U * Y + i.barHeight / 2 + (i.fontSize / 2 - 2) + D;
    }).attr("text-height", o).attr("class", function(h) {
      const U = g(h.startTime);
      let G = g(h.endTime);
      h.milestone && (G = U + o);
      const H = this.getBBox().width;
      let N = "";
      h.classes.length > 0 && (N = h.classes.join(" "));
      let I = 0;
      for (const [st, it] of F.entries())
        h.type === it && (I = st % i.numberSectionStyles);
      let V = "";
      return h.active && (h.crit ? V = "activeCritText" + I : V = "activeText" + I), h.done ? h.crit ? V = V + " doneCritText" + I : V = V + " doneText" + I : h.crit && (V = V + " critText" + I), h.milestone && (V += " milestoneText"), H > G - U ? G + H + 1.5 * i.leftPadding > m ? N + " taskTextOutsideLeft taskTextOutside" + I + " " + V : N + " taskTextOutsideRight taskTextOutside" + I + " " + V + " width-" + H : N + " taskText taskText" + I + " " + V + " width-" + H;
    }), Xn().securityLevel === "sandbox") {
      let h;
      h = Ct("#i" + e);
      const U = h.nodes()[0].contentDocument;
      c.filter(function(G) {
        return X[G.id] !== void 0;
      }).each(function(G) {
        var H = U.querySelector("#" + G.id), N = U.querySelector("#" + G.id + "-text");
        const I = H.parentNode;
        var V = U.createElement("a");
        V.setAttribute("xlink:href", X[G.id]), V.setAttribute("target", "_top"), I.appendChild(V), V.appendChild(H), V.appendChild(N);
      });
    }
  }
  function B(T, Y, D, v, o, d, m, u) {
    if (m.length === 0 && u.length === 0)
      return;
    let S, c;
    for (const { startTime: H, endTime: N } of d)
      (S === void 0 || H < S) && (S = H), (c === void 0 || N > c) && (c = N);
    if (!S || !c)
      return;
    if (uh(c).diff(uh(S), "year") > 5) {
      A.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const X = r.db.getDateFormat(), f = [];
    let h = null, U = uh(S);
    for (; U.valueOf() <= c; )
      r.db.isInvalidDate(U, X, m, u) ? h ? h.end = U : h = {
        start: U,
        end: U
      } : h && (f.push(h), h = null), U = U.add(1, "d");
    q.append("g").selectAll("rect").data(f).enter().append("rect").attr("id", function(H) {
      return "exclude-" + H.start.format("YYYY-MM-DD");
    }).attr("x", function(H) {
      return g(H.start) + D;
    }).attr("y", i.gridLineStartPadding).attr("width", function(H) {
      const N = H.end.add(1, "day");
      return g(N) - g(H.start);
    }).attr("height", o - Y - i.gridLineStartPadding).attr("transform-origin", function(H, N) {
      return (g(H.start) + D + 0.5 * (g(H.end) - g(H.start))).toString() + "px " + (N * T + 0.5 * o).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function Z(T, Y, D, v) {
    let o = $n(g).tickSize(-v + Y + i.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const m = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (m !== null) {
      const u = m[1], S = m[2], c = r.db.getWeekday() || i.weekday;
      switch (S) {
        case "millisecond":
          o.ticks(Dt.every(u));
          break;
        case "second":
          o.ticks(gt.every(u));
          break;
        case "minute":
          o.ticks(Et.every(u));
          break;
        case "hour":
          o.ticks(At.every(u));
          break;
        case "day":
          o.ticks(yt.every(u));
          break;
        case "week":
          o.ticks(Re[c].every(u));
          break;
        case "month":
          o.ticks(Wt.every(u));
          break;
      }
    }
    if (q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + (v - 50) + ")").call(o).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let u = Jn(g).tickSize(-v + Y + i.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (m !== null) {
        const S = m[1], c = m[2], X = r.db.getWeekday() || i.weekday;
        switch (c) {
          case "millisecond":
            u.ticks(Dt.every(S));
            break;
          case "second":
            u.ticks(gt.every(S));
            break;
          case "minute":
            u.ticks(Et.every(S));
            break;
          case "hour":
            u.ticks(At.every(S));
            break;
          case "day":
            u.ticks(yt.every(S));
            break;
          case "week":
            u.ticks(Re[X].every(S));
            break;
          case "month":
            u.ticks(Wt.every(S));
            break;
        }
      }
      q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + Y + ")").call(u).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function Q(T, Y) {
    let D = 0;
    const v = Object.keys(w).map((o) => [o, w[o]]);
    q.append("g").selectAll("text").data(v).enter().append(function(o) {
      const d = o[0].split(In.lineBreakRegex), m = -(d.length - 1) / 2, u = _2.createElementNS("http://www.w3.org/2000/svg", "text");
      u.setAttribute("dy", m + "em");
      for (const [S, c] of d.entries()) {
        const X = _2.createElementNS("http://www.w3.org/2000/svg", "tspan");
        X.setAttribute("alignment-baseline", "central"), X.setAttribute("x", "10"), S > 0 && X.setAttribute("dy", "1em"), X.textContent = c, u.appendChild(X);
      }
      return u;
    }).attr("x", 10).attr("y", function(o, d) {
      if (d > 0)
        for (let m = 0; m < d; m++)
          return D += v[d - 1][1], o[1] * T / 2 + D * T + Y;
      else
        return o[1] * T / 2 + Y;
    }).attr("font-size", i.sectionFontSize).attr("class", function(o) {
      for (const [d, m] of F.entries())
        if (o[0] === m)
          return "sectionTitle sectionTitle" + d % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function b(T, Y, D, v) {
    const o = r.db.getTodayMarker();
    if (o === "off")
      return;
    const d = q.append("g").attr("class", "today"), m = /* @__PURE__ */ new Date(), u = d.append("line");
    u.attr("x1", g(m) + T).attr("x2", g(m) + T).attr("y1", i.titleTopMargin).attr("y2", v - i.titleTopMargin).attr("class", "today"), o !== "" && u.attr("style", o.replace(/,/g, ";"));
  }
  function A2(T) {
    const Y = {}, D = [];
    for (let v = 0, o = T.length; v < o; ++v)
      Object.prototype.hasOwnProperty.call(Y, T[v]) || (Y[T[v]] = true, D.push(T[v]));
    return D;
  }
};
var ds = {
  setConf: us,
  draw: hs
};
var ms = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var gs = ms;
var Ts = {
  parser: xi,
  db: ls,
  renderer: ds,
  styles: gs
};
export {
  Ts as diagram
};
//# sourceMappingURL=ganttDiagram-a6dd55d8-L4MAQZET.js.map
