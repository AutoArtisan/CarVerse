import {
  Ae,
  De,
  Le
} from "./chunk-FR76KJV7.js";
import {
  L,
  js
} from "./chunk-4YS3YQEV.js";
import {
  P
} from "./chunk-JKN7I2EK.js";
import "./chunk-BC4DT56R.js";
import "./chunk-ZHHLGMR3.js";
import {
  A,
  Ct,
  In,
  Ke,
  Pf,
  Xn,
  wl
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/stateDiagram-61a94aa8.js
var L2 = {};
var $ = (e, i) => {
  L2[e] = i;
};
var v = (e) => L2[e];
var P2 = () => Object.keys(L2);
var I = () => P2().length;
var _ = {
  get: v,
  set: $,
  keys: P2,
  size: I
};
var j = (e) => e.append("circle").attr("class", "start-state").attr("r", Xn().state.sizeUnit).attr("cx", Xn().state.padding + Xn().state.sizeUnit).attr("cy", Xn().state.padding + Xn().state.sizeUnit);
var q = (e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", Xn().state.textHeight).attr("class", "divider").attr("x2", Xn().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
var Z = (e, i) => {
  const o = e.append("text").attr("x", 2 * Xn().state.padding).attr("y", Xn().state.textHeight + 2 * Xn().state.padding).attr("font-size", Xn().state.fontSize).attr("class", "state-title").text(i.id), d = o.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", Xn().state.padding).attr("y", Xn().state.padding).attr("width", d.width + 2 * Xn().state.padding).attr("height", d.height + 2 * Xn().state.padding).attr("rx", Xn().state.radius), o;
};
var K = (e, i) => {
  const o = function(l, m, w) {
    const k = l.append("tspan").attr("x", 2 * Xn().state.padding).text(m);
    w || k.attr("dy", Xn().state.textHeight);
  }, s = e.append("text").attr("x", 2 * Xn().state.padding).attr("y", Xn().state.textHeight + 1.3 * Xn().state.padding).attr("font-size", Xn().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), g = s.height, p = e.append("text").attr("x", Xn().state.padding).attr(
    "y",
    g + Xn().state.padding * 0.4 + Xn().state.dividerMargin + Xn().state.textHeight
  ).attr("class", "state-description");
  let a = true, r = true;
  i.descriptions.forEach(function(l) {
    a || (o(p, l, r), r = false), a = false;
  });
  const y = e.append("line").attr("x1", Xn().state.padding).attr("y1", Xn().state.padding + g + Xn().state.dividerMargin / 2).attr("y2", Xn().state.padding + g + Xn().state.dividerMargin / 2).attr("class", "descr-divider"), x = p.node().getBBox(), c = Math.max(x.width, s.width);
  return y.attr("x2", c + 3 * Xn().state.padding), e.insert("rect", ":first-child").attr("x", Xn().state.padding).attr("y", Xn().state.padding).attr("width", c + 2 * Xn().state.padding).attr("height", x.height + g + 2 * Xn().state.padding).attr("rx", Xn().state.radius), e;
};
var Q = (e, i, o) => {
  const d = Xn().state.padding, s = 2 * Xn().state.padding, g = e.node().getBBox(), p = g.width, a = g.x, r = e.append("text").attr("x", 0).attr("y", Xn().state.titleShift).attr("font-size", Xn().state.fontSize).attr("class", "state-title").text(i.id), x = r.node().getBBox().width + s;
  let c = Math.max(x, p);
  c === p && (c = c + s);
  let l;
  const m = e.node().getBBox();
  i.doc, l = a - d, x > p && (l = (p - c) / 2 + d), Math.abs(a - m.x) < d && x > p && (l = a - (x - p) / 2);
  const w = 1 - Xn().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", l).attr("y", w).attr("class", o ? "alt-composit" : "composit").attr("width", c).attr(
    "height",
    m.height + Xn().state.textHeight + Xn().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", l + d), x <= p && r.attr("x", a + (c - s) / 2 - x / 2 + d), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    Xn().state.titleShift - Xn().state.textHeight - Xn().state.padding
  ).attr("width", c).attr("height", Xn().state.textHeight * 3).attr("rx", Xn().state.radius), e.insert("rect", ":first-child").attr("x", l).attr(
    "y",
    Xn().state.titleShift - Xn().state.textHeight - Xn().state.padding
  ).attr("width", c).attr("height", m.height + 3 + 2 * Xn().state.textHeight).attr("rx", Xn().state.radius), e;
};
var V = (e) => (e.append("circle").attr("class", "end-state-outer").attr("r", Xn().state.sizeUnit + Xn().state.miniPadding).attr(
  "cx",
  Xn().state.padding + Xn().state.sizeUnit + Xn().state.miniPadding
).attr(
  "cy",
  Xn().state.padding + Xn().state.sizeUnit + Xn().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", Xn().state.sizeUnit).attr("cx", Xn().state.padding + Xn().state.sizeUnit + 2).attr("cy", Xn().state.padding + Xn().state.sizeUnit + 2));
var D = (e, i) => {
  let o = Xn().state.forkWidth, d = Xn().state.forkHeight;
  if (i.parentId) {
    let s = o;
    o = d, d = s;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", o).attr("height", d).attr("x", Xn().state.padding).attr("y", Xn().state.padding);
};
var tt = (e, i, o, d) => {
  let s = 0;
  const g = d.append("text");
  g.style("text-anchor", "start"), g.attr("class", "noteText");
  let p = e.replace(/\r\n/g, "<br/>");
  p = p.replace(/\n/g, "<br/>");
  const a = p.split(In.lineBreakRegex);
  let r = 1.25 * Xn().state.noteMargin;
  for (const y of a) {
    const x = y.trim();
    if (x.length > 0) {
      const c = g.append("tspan");
      if (c.text(x), r === 0) {
        const l = c.node().getBBox();
        r += l.height;
      }
      s += r, c.attr("x", i + Xn().state.noteMargin), c.attr("y", o + s + 1.25 * Xn().state.noteMargin);
    }
  }
  return { textWidth: g.node().getBBox().width, textHeight: s };
};
var et = (e, i) => {
  i.attr("class", "state-note");
  const o = i.append("rect").attr("x", 0).attr("y", Xn().state.padding), d = i.append("g"), { textWidth: s, textHeight: g } = tt(e, 0, 0, d);
  return o.attr("height", g + 2 * Xn().state.noteMargin), o.attr("width", s + Xn().state.noteMargin * 2), o;
};
var G = function(e, i) {
  const o = i.id, d = {
    id: o,
    label: i.id,
    width: 0,
    height: 0
  }, s = e.append("g").attr("id", o).attr("class", "stateGroup");
  i.type === "start" && j(s), i.type === "end" && V(s), (i.type === "fork" || i.type === "join") && D(s, i), i.type === "note" && et(i.note.text, s), i.type === "divider" && q(s), i.type === "default" && i.descriptions.length === 0 && Z(s, i), i.type === "default" && i.descriptions.length > 0 && K(s, i);
  const g = s.node().getBBox();
  return d.width = g.width + 2 * Xn().state.padding, d.height = g.height + 2 * Xn().state.padding, _.set(o, d), d;
};
var A2 = 0;
var at = function(e, i, o) {
  const d = function(r) {
    switch (r) {
      case Ae.relationType.AGGREGATION:
        return "aggregation";
      case Ae.relationType.EXTENSION:
        return "extension";
      case Ae.relationType.COMPOSITION:
        return "composition";
      case Ae.relationType.DEPENDENCY:
        return "dependency";
    }
  };
  i.points = i.points.filter((r) => !Number.isNaN(r.y));
  const s = i.points, g = P().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(Pf), p = e.append("path").attr("d", g(s)).attr("id", "edge" + A2).attr("class", "transition");
  let a = "";
  if (Xn().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), p.attr(
    "marker-end",
    "url(" + a + "#" + d(Ae.relationType.DEPENDENCY) + "End)"
  ), o.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x: y, y: x } = Ke.calcLabelPosition(i.points), c = In.getRows(o.title);
    let l = 0;
    const m = [];
    let w = 0, k = 0;
    for (let u = 0; u <= c.length; u++) {
      const h = r.append("text").attr("text-anchor", "middle").text(c[u]).attr("x", y).attr("y", x + l), f = h.node().getBBox();
      w = Math.max(w, f.width), k = Math.min(k, f.x), A.info(f.x, y, x + l), l === 0 && (l = h.node().getBBox().height, A.info("Title height", l, x)), m.push(h);
    }
    let E = l * c.length;
    if (c.length > 1) {
      const u = (c.length - 1) * l * 0.5;
      m.forEach((h, f) => h.attr("y", x + f * l - u)), E = l * c.length;
    }
    const n = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", y - w / 2 - Xn().state.padding / 2).attr("y", x - E / 2 - Xn().state.padding / 2 - 3.5).attr("width", w + Xn().state.padding).attr("height", E + Xn().state.padding), A.info(n);
  }
  A2++;
};
var B;
var z = {};
var it = function() {
};
var nt = function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
var st = function(e, i, o, d) {
  B = Xn().state;
  const s = Xn().securityLevel;
  let g;
  s === "sandbox" && (g = Ct("#i" + i));
  const p = s === "sandbox" ? Ct(g.nodes()[0].contentDocument.body) : Ct("body"), a = s === "sandbox" ? g.nodes()[0].contentDocument : document;
  A.debug("Rendering diagram " + e);
  const r = p.select(`[id='${i}']`);
  nt(r);
  const y = d.db.getRootDoc();
  W(y, r, void 0, false, p, a, d);
  const x = B.padding, c = r.node().getBBox(), l = c.width + x * 2, m = c.height + x * 2, w = l * 1.75;
  wl(r, m, w, B.useMaxWidth), r.attr(
    "viewBox",
    `${c.x - B.padding}  ${c.y - B.padding} ` + l + " " + m
  );
};
var rt = (e) => e ? e.length * B.fontSizeFactor : 1;
var W = (e, i, o, d, s, g, p) => {
  const a = new L({
    compound: true,
    multigraph: true
  });
  let r, y = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      y = false;
      break;
    }
  o ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: y ? 1 : B.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: y ? 1 : B.edgeLengthFactor,
    nodeSep: y ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  }), p.db.extract(e);
  const x = p.db.getStates(), c = p.db.getRelations(), l = Object.keys(x);
  for (const n of l) {
    const u = x[n];
    o && (u.parentId = o);
    let h;
    if (u.doc) {
      let f = i.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = W(u.doc, f, u.id, !d, s, g, p);
      {
        f = Q(f, u, d);
        let S = f.node().getBBox();
        h.width = S.width, h.height = S.height + B.padding / 2, z[u.id] = { y: B.compositTitleSize };
      }
    } else
      h = G(i, u);
    if (u.note) {
      const f = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, S = G(i, f);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", S), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", S)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  A.debug("Count=", a.nodeCount(), a);
  let m = 0;
  c.forEach(function(n) {
    m++, A.debug("Setting edge", n), a.setEdge(
      n.id1,
      n.id2,
      {
        relation: n,
        width: rt(n.title),
        height: B.labelHeight * In.getRows(n.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), js(a), A.debug("Graph after layout", a.nodes());
  const w = i.node();
  a.nodes().forEach(function(n) {
    n !== void 0 && a.node(n) !== void 0 ? (A.warn("Node " + n + ": " + JSON.stringify(a.node(n))), s.select("#" + w.id + " #" + n).attr(
      "transform",
      "translate(" + (a.node(n).x - a.node(n).width / 2) + "," + (a.node(n).y + (z[n] ? z[n].y : 0) - a.node(n).height / 2) + " )"
    ), s.select("#" + w.id + " #" + n).attr("data-x-shift", a.node(n).x - a.node(n).width / 2), g.querySelectorAll("#" + w.id + " #" + n + " .divider").forEach((h) => {
      const f = h.parentElement;
      let S = 0, M = 0;
      f && (f.parentElement && (S = f.parentElement.getBBox().width), M = parseInt(f.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", S - M - 8);
    })) : A.debug("No Node " + n + ": " + JSON.stringify(a.node(n)));
  });
  let k = w.getBBox();
  a.edges().forEach(function(n) {
    n !== void 0 && a.edge(n) !== void 0 && (A.debug("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(a.edge(n))), at(i, a.edge(n), a.edge(n).relation));
  }), k = w.getBBox();
  const E = {
    id: o || "root",
    label: o || "root",
    width: 0,
    height: 0
  };
  return E.width = k.width + 2 * B.padding, E.height = k.height + 2 * B.padding, A.debug("Doc rendered", E, a), E;
};
var ot = {
  setConf: it,
  draw: st
};
var xt = {
  parser: De,
  db: Ae,
  renderer: ot,
  styles: Le,
  init: (e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute, Ae.clear();
  }
};
export {
  xt as diagram
};
//# sourceMappingURL=stateDiagram-61a94aa8-4JLBGQXX.js.map
