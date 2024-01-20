import {
  Ms,
  fr
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/svgDrawCommon-3ea91b14.js
var c = (s, t) => {
  const e = s.append("rect");
  if (e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), t.rx !== void 0 && e.attr("rx", t.rx), t.ry !== void 0 && e.attr("ry", t.ry), t.attrs !== void 0)
    for (const r in t.attrs)
      e.attr(r, t.attrs[r]);
  return t.class !== void 0 && e.attr("class", t.class), e;
};
var x = (s, t) => {
  const e = {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    stroke: t.stroke,
    class: "rect"
  };
  c(s, e).lower();
};
var d = (s, t) => {
  const e = t.text.replace(fr, " "), r = s.append("text");
  r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class !== void 0 && r.attr("class", t.class);
  const n = r.append("tspan");
  return n.attr("x", t.x + t.textMargin * 2), n.text(e), r;
};
var h = (s, t, e, r) => {
  const n = s.append("image");
  n.attr("x", t), n.attr("y", e);
  const a = Ms(r);
  n.attr("xlink:href", a);
};
var y = (s, t, e, r) => {
  const n = s.append("use");
  n.attr("x", t), n.attr("y", e);
  const a = Ms(r);
  n.attr("xlink:href", `#${a}`);
};
var g = () => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "#EDF2AE",
  stroke: "#666",
  anchor: "start",
  rx: 0,
  ry: 0
});
var p = () => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  "text-anchor": "start",
  style: "#666",
  textMargin: 0,
  rx: 0,
  ry: 0,
  tspan: true
});

export {
  c,
  x,
  d,
  h,
  y,
  g,
  p
};
//# sourceMappingURL=chunk-73JFKAGG.js.map
