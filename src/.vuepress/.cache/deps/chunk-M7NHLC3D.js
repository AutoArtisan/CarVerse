import {
  I,
  S,
  _t,
  ar,
  cr,
  er,
  hr,
  ir,
  lr,
  nr,
  rr,
  sr
} from "./chunk-ZDDOMXF6.js";
import {
  E,
  L,
  js,
  tn,
  y
} from "./chunk-4YS3YQEV.js";
import {
  Ur
} from "./chunk-KZV3ZYSK.js";
import {
  A,
  Ct,
  Xn,
  ka
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/index-8f0054e7.js
var Q = 4;
function Z(e) {
  return tn(e, Q);
}
function x(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: I2(e),
    edges: tt(e)
  };
  return y(e.graph()) || (t.value = Z(e.graph())), t;
}
function I2(e) {
  return E(e.nodes(), function(t) {
    var n = e.node(t), r = e.parent(t), s = { v: t };
    return y(n) || (s.value = n), y(r) || (s.parent = r), s;
  });
}
function tt(e) {
  return E(e.edges(), function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return y(t.name) || (r.name = t.name), y(n) || (r.value = n), r;
  });
}
var f = {};
var g = {};
var J = {};
var et = () => {
  g = {}, J = {}, f = {};
};
var X = (e, t) => (A.trace("In isDecendant", t, " ", e, " = ", g[t].includes(e)), !!g[t].includes(e));
var nt = (e, t) => (A.info("Decendants of ", t, " is ", g[t]), A.info("Edge is ", e), e.v === t || e.w === t ? false : g[t] ? g[t].includes(e.v) || X(e.v, t) || X(e.w, t) || g[t].includes(e.w) : (A.debug("Tilt, ", t, ",not in decendants"), false));
var R = (e, t, n, r) => {
  A.warn(
    "Copying children of ",
    e,
    "root",
    r,
    "data",
    t.node(e),
    r
  );
  const s = t.children(e) || [];
  e !== r && s.push(e), A.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((c) => {
    if (t.children(c).length > 0)
      R(c, t, n, r);
    else {
      const d = t.node(c);
      A.info("cp ", c, " to ", r, " with parent ", e), n.setNode(c, d), r !== t.parent(c) && (A.warn("Setting parent", c, t.parent(c)), n.setParent(c, t.parent(c))), e !== r && c !== e ? (A.debug("Setting parent", c, e), n.setParent(c, e)) : (A.info("In copy ", e, "root", r, "data", t.node(e), r), A.debug(
        "Not Setting parent for node=",
        c,
        "cluster!==rootId",
        e !== r,
        "node!==clusterId",
        c !== e
      ));
      const l = t.edges(c);
      A.debug("Copying Edges", l), l.forEach((u) => {
        A.info("Edge", u);
        const h = t.edge(u.v, u.w, u.name);
        A.info("Edge data", h, r);
        try {
          nt(u, r) ? (A.info("Copying as ", u.v, u.w, h, u.name), n.setEdge(u.v, u.w, h, u.name), A.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : A.info(
            "Skipping copy of edge ",
            u.v,
            "-->",
            u.w,
            " rootId: ",
            r,
            " clusterId:",
            e
          );
        } catch (w) {
          A.error(w);
        }
      });
    }
    A.debug("Removing node", c), t.removeNode(c);
  });
};
var p = (e, t) => {
  const n = t.children(e);
  let r = [...n];
  for (const s of n)
    J[s] = e, r = [...r, ...p(s, t)];
  return r;
};
var v = (e, t) => {
  A.trace("Searching", e);
  const n = t.children(e);
  if (A.trace("Searching children of id ", e, n), n.length < 1)
    return A.trace("This is a valid node", e), e;
  for (const r of n) {
    const s = v(r, t);
    if (s)
      return A.trace("Found replacement for", e, " => ", s), s;
  }
};
var E2 = (e) => !f[e] || !f[e].externalConnections ? e : f[e] ? f[e].id : e;
var it = (e, t) => {
  if (!e || t > 10) {
    A.debug("Opting out, no graph ");
    return;
  } else
    A.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (A.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      v(n, e)
    ), g[n] = p(n, e), f[n] = { id: v(n, e), clusterData: e.node(n) });
  }), e.nodes().forEach(function(n) {
    const r = e.children(n), s = e.edges();
    r.length > 0 ? (A.debug("Cluster identified", n, g), s.forEach((c) => {
      if (c.v !== n && c.w !== n) {
        const d = X(c.v, n), l = X(c.w, n);
        d ^ l && (A.warn("Edge: ", c, " leaves cluster ", n), A.warn("Decendants of XXX ", n, ": ", g[n]), f[n].externalConnections = true);
      }
    })) : A.debug("Not a cluster ", n, g);
  }), e.edges().forEach(function(n) {
    const r = e.edge(n);
    A.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), A.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let s = n.v, c = n.w;
    if (A.warn(
      "Fix XXX",
      f,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      f[n.v],
      " --- ",
      f[n.w]
    ), f[n.v] && f[n.w] && f[n.v] === f[n.w]) {
      A.warn("Fixing and trixing link to self - removing XXX", n.v, n.w, n.name), A.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = E2(n.v), c = E2(n.w), e.removeEdge(n.v, n.w, n.name);
      const d = n.w + "---" + n.v;
      e.setNode(d, {
        domId: d,
        id: d,
        labelStyle: "",
        labelText: r.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const l = structuredClone(r), u = structuredClone(r);
      l.label = "", l.arrowTypeEnd = "none", u.label = "", l.fromCluster = n.v, u.toCluster = n.v, e.setEdge(s, d, l, n.name + "-cyclic-special"), e.setEdge(d, c, u, n.name + "-cyclic-special");
    } else
      (f[n.v] || f[n.w]) && (A.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = E2(n.v), c = E2(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v && (r.fromCluster = n.v), c !== n.w && (r.toCluster = n.w), A.warn("Fix Replacing with XXX", s, c, n.name), e.setEdge(s, c, r, n.name));
  }), A.warn("Adjusted Graph", x(e)), P(e, 0), A.trace(f);
};
var P = (e, t) => {
  if (A.warn("extractor - ", t, x(e), e.children("D")), t > 10) {
    A.error("Bailing out");
    return;
  }
  let n = e.nodes(), r = false;
  for (const s of n) {
    const c = e.children(s);
    r = r || c.length > 0;
  }
  if (!r) {
    A.debug("Done, no node has children", e.nodes());
    return;
  }
  A.debug("Nodes = ", n, t);
  for (const s of n)
    if (A.debug(
      "Extracting node",
      s,
      f,
      f[s] && !f[s].externalConnections,
      !e.parent(s),
      e.node(s),
      e.children("D"),
      " Depth ",
      t
    ), !f[s])
      A.debug("Not a cluster", s, t);
    else if (!f[s].externalConnections && // !graph.parent(node) &&
    e.children(s) && e.children(s).length > 0) {
      A.warn(
        "Cluster without external connections, without a parent and with children",
        s,
        t
      );
      let d = e.graph().rankdir === "TB" ? "LR" : "TB";
      f[s] && f[s].clusterData && f[s].clusterData.dir && (d = f[s].clusterData.dir, A.warn("Fixing dir", f[s].clusterData.dir, d));
      const l = new L({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: d,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      A.warn("Old graph before copy", x(e)), R(s, e, l, s), e.setNode(s, {
        clusterNode: true,
        id: s,
        clusterData: f[s].clusterData,
        labelText: f[s].labelText,
        graph: l
      }), A.warn("New graph after copy node: (", s, ")", x(l)), A.debug("Old graph after copy", x(e));
    } else
      A.warn(
        "Cluster ** ",
        s,
        " **not meeting the criteria !externalConnections:",
        !f[s].externalConnections,
        " no parent: ",
        !e.parent(s),
        " children ",
        e.children(s) && e.children(s).length > 0,
        e.children("D"),
        t
      ), A.debug(f);
  n = e.nodes(), A.warn("New list of nodes", n);
  for (const s of n) {
    const c = e.node(s);
    A.warn(" Now next level", s, c), c.clusterNode && P(c.graph, t + 1);
  }
};
var F = (e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign(t);
  return t.forEach((r) => {
    const s = e.children(r), c = F(e, s);
    n = [...n, ...c];
  }), n;
};
var st = (e) => F(e, e.children());
var rt = (e, t) => {
  A.info("Creating subgraph rect for ", t.id, t);
  const n = e.insert("g").attr("class", "cluster" + (t.class ? " " + t.class : "")).attr("id", t.id), r = n.insert("rect", ":first-child"), s = ka(Xn().flowchart.htmlLabels), c = n.insert("g").attr("class", "cluster-label"), d = t.labelType === "markdown" ? Ur(c, t.labelText, { style: t.labelStyle, useHtmlLabels: s }) : c.node().appendChild(I(t.labelText, t.labelStyle, void 0, true));
  let l = d.getBBox();
  if (ka(Xn().flowchart.htmlLabels)) {
    const a = d.children[0], o = Ct(d);
    l = a.getBoundingClientRect(), o.attr("width", l.width), o.attr("height", l.height);
  }
  const u = 0 * t.padding, h = u / 2, w = t.width <= l.width + u ? l.width + u : t.width;
  t.width <= l.width + u ? t.diff = (l.width - t.width) / 2 - t.padding / 2 : t.diff = -t.padding / 2, A.trace("Data ", t, JSON.stringify(t)), r.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - w / 2).attr("y", t.y - t.height / 2 - h).attr("width", w).attr("height", t.height + u), s ? c.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2) + ")"
  ) : c.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    "translate(" + t.x + ", " + (t.y - t.height / 2) + ")"
  );
  const m = r.node().getBBox();
  return t.width = m.width, t.height = m.height, t.intersect = function(a) {
    return _t(t, a);
  }, n;
};
var at = (e, t) => {
  const n = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, c = s / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - c).attr("y", t.y - t.height / 2 - c).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const d = r.node().getBBox();
  return t.width = d.width, t.height = d.height, t.intersect = function(l) {
    return _t(t, l);
  }, n;
};
var ct = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = n.insert("g").attr("class", "cluster-label"), c = n.append("rect"), d = s.node().appendChild(I(t.labelText, t.labelStyle, void 0, true));
  let l = d.getBBox();
  if (ka(Xn().flowchart.htmlLabels)) {
    const a = d.children[0], o = Ct(d);
    l = a.getBoundingClientRect(), o.attr("width", l.width), o.attr("height", l.height);
  }
  l = d.getBBox();
  const u = 0 * t.padding, h = u / 2, w = t.width <= l.width + t.padding ? l.width + t.padding : t.width;
  t.width <= l.width + t.padding ? t.diff = (l.width + t.padding * 0 - t.width) / 2 : t.diff = -t.padding / 2, r.attr("class", "outer").attr("x", t.x - w / 2 - h).attr("y", t.y - t.height / 2 - h).attr("width", w + u).attr("height", t.height + u), c.attr("class", "inner").attr("x", t.x - w / 2 - h).attr("y", t.y - t.height / 2 - h + l.height - 1).attr("width", w + u).attr("height", t.height + u - l.height - 3), s.attr(
    "transform",
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2 - t.padding / 3 + (ka(Xn().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const m = r.node().getBBox();
  return t.height = m.height, t.intersect = function(a) {
    return _t(t, a);
  }, n;
};
var ot = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, c = s / 2;
  r.attr("class", "divider").attr("x", t.x - t.width / 2 - c).attr("y", t.y - t.height / 2).attr("width", t.width + s).attr("height", t.height + s);
  const d = r.node().getBBox();
  return t.width = d.width, t.height = d.height, t.diff = -t.padding / 2, t.intersect = function(l) {
    return _t(t, l);
  }, n;
};
var lt = { rect: rt, roundedWithTitle: ct, noteGroup: at, divider: ot };
var k = {};
var ft = (e, t) => {
  A.trace("Inserting cluster");
  const n = t.shape || "rect";
  k[t.id] = lt[n](e, t);
};
var dt = () => {
  k = {};
};
var j = async (e, t, n, r, s) => {
  A.info("Graph in recursive render: XXX", x(t), s);
  const c = t.graph().rankdir;
  A.trace("Dir in recursive render - dir:", c);
  const d = e.insert("g").attr("class", "root");
  t.nodes() ? A.info("Recursive render XXX", t.nodes()) : A.info("No nodes found for", t), t.edges().length > 0 && A.trace("Recursive edges", t.edge(t.edges()[0]));
  const l = d.insert("g").attr("class", "clusters"), u = d.insert("g").attr("class", "edgePaths"), h = d.insert("g").attr("class", "edgeLabels"), w = d.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(a) {
      const o = t.node(a);
      if (s !== void 0) {
        const y2 = JSON.parse(JSON.stringify(s.clusterData));
        A.info("Setting data for cluster XXX (", a, ") ", y2, s), t.setNode(s.id, y2), t.parent(a) || (A.trace("Setting parent", a, s.id), t.setParent(a, s.id, y2));
      }
      if (A.info("(Insert) Node XXX" + a + ": " + JSON.stringify(t.node(a))), o && o.clusterNode) {
        A.info("Cluster identified", a, o.width, t.node(a));
        const y2 = await j(w, o.graph, n, r, t.node(a)), B = y2.elem;
        S(o, B), o.diff = y2.diff || 0, A.info("Node bounds (abc123)", a, o, o.width, o.x, o.y), er(B, o), A.warn("Recursive render complete ", B, o);
      } else
        t.children(a).length > 0 ? (A.info("Cluster - the non recursive path XXX", a, o.id, o, t), A.info(v(o.id, t)), f[o.id] = { id: v(o.id, t), node: o }) : (A.info("Node - the non recursive path", a, o.id, o), await ar(w, t.node(a), c));
    })
  ), t.edges().forEach(function(a) {
    const o = t.edge(a.v, a.w, a.name);
    A.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(a)), A.info("Edge " + a.v + " -> " + a.w + ": ", a, " ", JSON.stringify(t.edge(a))), A.info("Fix", f, "ids:", a.v, a.w, "Translateing: ", f[a.v], f[a.w]), lr(h, o);
  }), t.edges().forEach(function(a) {
    A.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(a));
  }), A.info("#############################################"), A.info("###                Layout                 ###"), A.info("#############################################"), A.info(t), js(t), A.info("Graph after layout:", x(t));
  let m = 0;
  return st(t).forEach(function(a) {
    const o = t.node(a);
    A.info("Position " + a + ": " + JSON.stringify(t.node(a))), A.info(
      "Position " + a + ": (" + o.x,
      "," + o.y,
      ") width: ",
      o.width,
      " height: ",
      o.height
    ), o && o.clusterNode ? ir(o) : t.children(a).length > 0 ? (ft(l, o), f[o.id].node = o) : ir(o);
  }), t.edges().forEach(function(a) {
    const o = t.edge(a);
    A.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(o), o);
    const y2 = hr(u, a, o, f, n, t, r);
    cr(o, y2);
  }), t.nodes().forEach(function(a) {
    const o = t.node(a);
    A.info(a, o.type, o.diff), o.type === "group" && (m = o.diff);
  }), { elem: d, diff: m };
};
var xt = async (e, t, n, r, s) => {
  rr(e, n, r, s), sr(), nr(), dt(), et(), A.warn("Graph at first:", JSON.stringify(x(t))), it(t), A.warn("Graph after:", JSON.stringify(x(t))), await j(e, t, r, s);
};

export {
  xt
};
//# sourceMappingURL=chunk-M7NHLC3D.js.map
