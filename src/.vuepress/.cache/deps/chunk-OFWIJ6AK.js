import {
  P,
  q
} from "./chunk-ZHHLGMR3.js";
import {
  Do,
  Io,
  Ln,
  a1,
  c1,
  f1,
  h1,
  l1,
  n1,
  o1,
  r1,
  s1,
  u1
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/arc-1bdcaf65.js
function cn(l) {
  return l.innerRadius;
}
function yn(l) {
  return l.outerRadius;
}
function gn(l) {
  return l.startAngle;
}
function mn(l) {
  return l.endAngle;
}
function pn(l) {
  return l && l.padAngle;
}
function dn(l, h, E, q2, v, A, X, a) {
  var I = E - l, i = q2 - h, n = X - v, m = a - A, r = m * I - n * i;
  if (!(r * r < Io))
    return r = (n * (h - A) - m * (l - v)) / r, [l + r * I, h + r * i];
}
function K(l, h, E, q2, v, A, X) {
  var a = l - E, I = h - q2, i = (X ? A : -A) / h1(a * a + I * I), n = i * I, m = -i * a, r = l + n, s = h + m, f = E + n, c = q2 + m, Y = (r + f) / 2, o = (s + c) / 2, p = f - r, g = c - s, R = p * p + g * g, T = v - A, b = r * c - f * s, O = (g < 0 ? -1 : 1) * h1(s1(0, T * T * R - b * b)), S = (b * g - p * O) / R, V = (-b * p - g * O) / R, P2 = (b * g + p * O) / R, d = (-b * p + g * O) / R, x = S - Y, e = V - o, u = P2 - Y, Z = d - o;
  return x * x + e * e > u * u + Z * Z && (S = P2, V = d), {
    cx: S,
    cy: V,
    x01: -n,
    y01: -m,
    x11: S * (v / T - 1),
    y11: V * (v / T - 1)
  };
}
function vn() {
  var l = cn, h = yn, E = P(0), q2 = null, v = gn, A = mn, X = pn, a = null, I = q(i);
  function i() {
    var n, m, r = +l.apply(this, arguments), s = +h.apply(this, arguments), f = v.apply(this, arguments) - Do, c = A.apply(this, arguments) - Do, Y = r1(c - f), o = c > f;
    if (a || (a = n = I()), s < r && (m = s, s = r, r = m), !(s > Io))
      a.moveTo(0, 0);
    else if (Y > c1 - Io)
      a.moveTo(s * o1(f), s * l1(f)), a.arc(0, 0, s, f, c, !o), r > Io && (a.moveTo(r * o1(c), r * l1(c)), a.arc(0, 0, r, c, f, o));
    else {
      var p = f, g = c, R = f, T = c, b = Y, O = Y, S = X.apply(this, arguments) / 2, V = S > Io && (q2 ? +q2.apply(this, arguments) : h1(r * r + s * s)), P2 = a1(r1(s - r) / 2, +E.apply(this, arguments)), d = P2, x = P2, e, u;
      if (V > Io) {
        var Z = f1(V / r * l1(S)), C = f1(V / s * l1(S));
        (b -= Z * 2) > Io ? (Z *= o ? 1 : -1, R += Z, T -= Z) : (b = 0, R = T = (f + c) / 2), (O -= C * 2) > Io ? (C *= o ? 1 : -1, p += C, g -= C) : (O = 0, p = g = (f + c) / 2);
      }
      var j = s * o1(p), z = s * l1(p), F = r * o1(T), G = r * l1(T);
      if (P2 > Io) {
        var H = s * o1(g), J = s * l1(g), L = r * o1(R), M = r * l1(R), D;
        if (Y < Ln)
          if (D = dn(j, z, L, M, H, J, F, G)) {
            var N = j - D[0], Q = z - D[1], U = H - D[0], k = J - D[1], nn = 1 / l1(u1((N * U + Q * k) / (h1(N * N + Q * Q) * h1(U * U + k * k))) / 2), en = h1(D[0] * D[0] + D[1] * D[1]);
            d = a1(P2, (r - en) / (nn - 1)), x = a1(P2, (s - en) / (nn + 1));
          } else
            d = x = 0;
      }
      O > Io ? x > Io ? (e = K(L, M, j, z, s, x, o), u = K(H, J, F, G, s, x, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), x < P2 ? a.arc(e.cx, e.cy, x, n1(e.y01, e.x01), n1(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, x, n1(e.y01, e.x01), n1(e.y11, e.x11), !o), a.arc(0, 0, s, n1(e.cy + e.y11, e.cx + e.x11), n1(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, x, n1(u.y11, u.x11), n1(u.y01, u.x01), !o))) : (a.moveTo(j, z), a.arc(0, 0, s, p, g, !o)) : a.moveTo(j, z), !(r > Io) || !(b > Io) ? a.lineTo(F, G) : d > Io ? (e = K(F, G, H, J, r, -d, o), u = K(j, z, L, M, r, -d, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), d < P2 ? a.arc(e.cx, e.cy, d, n1(e.y01, e.x01), n1(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, d, n1(e.y01, e.x01), n1(e.y11, e.x11), !o), a.arc(0, 0, r, n1(e.cy + e.y11, e.cx + e.x11), n1(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, d, n1(u.y11, u.x11), n1(u.y01, u.x01), !o))) : a.arc(0, 0, r, T, R, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2, m = (+v.apply(this, arguments) + +A.apply(this, arguments)) / 2 - Ln / 2;
    return [o1(m) * n, l1(m) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : P(+n), i) : l;
  }, i.outerRadius = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : P(+n), i) : h;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (E = typeof n == "function" ? n : P(+n), i) : E;
  }, i.padRadius = function(n) {
    return arguments.length ? (q2 = n == null ? null : typeof n == "function" ? n : P(+n), i) : q2;
  }, i.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : P(+n), i) : v;
  }, i.endAngle = function(n) {
    return arguments.length ? (A = typeof n == "function" ? n : P(+n), i) : A;
  }, i.padAngle = function(n) {
    return arguments.length ? (X = typeof n == "function" ? n : P(+n), i) : X;
  }, i.context = function(n) {
    return arguments.length ? (a = n ?? null, i) : a;
  }, i;
}

export {
  vn
};
//# sourceMappingURL=chunk-OFWIJ6AK.js.map
