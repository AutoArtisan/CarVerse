import {
  t
} from "./chunk-BC4DT56R.js";
import {
  P,
  q
} from "./chunk-ZHHLGMR3.js";
import {
  Df
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/line-6e3107d9.js
function w(t2) {
  return t2[0];
}
function b(t2) {
  return t2[1];
}
function P2(t2, u) {
  var s = P(true), i = null, l = Df, r = null, m = q(e);
  t2 = typeof t2 == "function" ? t2 : t2 === void 0 ? w : P(t2), u = typeof u == "function" ? u : u === void 0 ? b : P(u);
  function e(n) {
    var f, g = (n = t(n)).length, p, c = false, a;
    for (i == null && (r = l(a = m())), f = 0; f <= g; ++f)
      !(f < g && s(p = n[f], f, n)) === c && ((c = !c) ? r.lineStart() : r.lineEnd()), c && r.point(+t2(p, f, n), +u(p, f, n));
    if (a)
      return r = null, a + "" || null;
  }
  return e.x = function(n) {
    return arguments.length ? (t2 = typeof n == "function" ? n : P(+n), e) : t2;
  }, e.y = function(n) {
    return arguments.length ? (u = typeof n == "function" ? n : P(+n), e) : u;
  }, e.defined = function(n) {
    return arguments.length ? (s = typeof n == "function" ? n : P(!!n), e) : s;
  }, e.curve = function(n) {
    return arguments.length ? (l = n, i != null && (r = l(i)), e) : l;
  }, e.context = function(n) {
    return arguments.length ? (n == null ? i = r = null : r = l(i = n), e) : i;
  }, e;
}

export {
  P2 as P
};
//# sourceMappingURL=chunk-JKN7I2EK.js.map
