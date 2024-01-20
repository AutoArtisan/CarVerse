import {
  vn
} from "./chunk-OFWIJ6AK.js";
import {
  c,
  d,
  g,
  x
} from "./chunk-73JFKAGG.js";
import "./chunk-ZHHLGMR3.js";
import {
  B_,
  Ct,
  F_,
  S_,
  T_,
  Xn,
  k_,
  v_,
  w_,
  wl
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/journeyDiagram-66140ef0.js
var G = function() {
  var t = function(p, s, r, a) {
    for (r = r || {}, a = p.length; a--; r[p[a]] = s)
      ;
    return r;
  }, e = [6, 8, 10, 11, 12, 14, 16, 17, 18], i = [1, 9], o = [1, 10], n = [1, 11], h = [1, 12], c2 = [1, 13], d2 = [1, 14], y = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, taskName: 18, taskData: 19, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 18: "taskName", 19: "taskData" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
    performAction: function(s, r, a, u, f, l, w) {
      var k = l.length - 1;
      switch (f) {
        case 1:
          return l[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          l[k - 1].push(l[k]), this.$ = l[k - 1];
          break;
        case 4:
        case 5:
          this.$ = l[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          u.setDiagramTitle(l[k].substr(6)), this.$ = l[k].substr(6);
          break;
        case 9:
          this.$ = l[k].trim(), u.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = l[k].trim(), u.setAccDescription(this.$);
          break;
        case 12:
          u.addSection(l[k].substr(8)), this.$ = l[k].substr(8);
          break;
        case 13:
          u.addTask(l[k - 1], l[k]), this.$ = "task";
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: i, 12: o, 14: n, 16: h, 17: c2, 18: d2 }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 15, 11: i, 12: o, 14: n, 16: h, 17: c2, 18: d2 }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, t(e, [2, 11]), t(e, [2, 12]), { 19: [1, 18] }, t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 13])],
    defaultActions: {},
    parseError: function(s, r) {
      if (r.recoverable)
        this.trace(s);
      else {
        var a = new Error(s);
        throw a.hash = r, a;
      }
    },
    parse: function(s) {
      var r = this, a = [0], u = [], f = [null], l = [], w = this.table, k = "", R = 0, Z = 0, ot = 2, J = 1, ct = l.slice.call(arguments, 1), x2 = Object.create(this.lexer), S = { yy: {} };
      for (var z in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, z) && (S.yy[z] = this.yy[z]);
      x2.setInput(s, S.yy), S.yy.lexer = x2, S.yy.parser = this, typeof x2.yylloc > "u" && (x2.yylloc = {});
      var Y = x2.yylloc;
      l.push(Y);
      var ht = x2.options && x2.options.ranges;
      typeof S.yy.parseError == "function" ? this.parseError = S.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ut() {
        var $;
        return $ = u.pop() || x2.lex() || J, typeof $ != "number" && ($ instanceof Array && (u = $, $ = u.pop()), $ = r.symbols_[$] || $), $;
      }
      for (var _, E, b, O, A = {}, N, T, K, B; ; ) {
        if (E = a[a.length - 1], this.defaultActions[E] ? b = this.defaultActions[E] : ((_ === null || typeof _ > "u") && (_ = ut()), b = w[E] && w[E][_]), typeof b > "u" || !b.length || !b[0]) {
          var q = "";
          B = [];
          for (N in w[E])
            this.terminals_[N] && N > ot && B.push("'" + this.terminals_[N] + "'");
          x2.showPosition ? q = "Parse error on line " + (R + 1) + `:
` + x2.showPosition() + `
Expecting ` + B.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : q = "Parse error on line " + (R + 1) + ": Unexpected " + (_ == J ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(q, {
            text: x2.match,
            token: this.terminals_[_] || _,
            line: x2.yylineno,
            loc: Y,
            expected: B
          });
        }
        if (b[0] instanceof Array && b.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + _);
        switch (b[0]) {
          case 1:
            a.push(_), f.push(x2.yytext), l.push(x2.yylloc), a.push(b[1]), _ = null, Z = x2.yyleng, k = x2.yytext, R = x2.yylineno, Y = x2.yylloc;
            break;
          case 2:
            if (T = this.productions_[b[1]][1], A.$ = f[f.length - T], A._$ = {
              first_line: l[l.length - (T || 1)].first_line,
              last_line: l[l.length - 1].last_line,
              first_column: l[l.length - (T || 1)].first_column,
              last_column: l[l.length - 1].last_column
            }, ht && (A._$.range = [
              l[l.length - (T || 1)].range[0],
              l[l.length - 1].range[1]
            ]), O = this.performAction.apply(A, [
              k,
              Z,
              R,
              S.yy,
              b[1],
              f,
              l
            ].concat(ct)), typeof O < "u")
              return O;
            T && (a = a.slice(0, -1 * T * 2), f = f.slice(0, -1 * T), l = l.slice(0, -1 * T)), a.push(this.productions_[b[1]][0]), f.push(A.$), l.push(A._$), K = w[a[a.length - 2]][a[a.length - 1]], a.push(K);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, m = /* @__PURE__ */ function() {
    var p = {
      EOF: 1,
      parseError: function(r, a) {
        if (this.yy.parser)
          this.yy.parser.parseError(r, a);
        else
          throw new Error(r);
      },
      // resets the lexer, sets new input
      setInput: function(s, r) {
        return this.yy = r || this.yy || {}, this._input = s, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var s = this._input[0];
        this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
        var r = s.match(/(?:\r\n?|\n).*/g);
        return r ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
      },
      // unshifts one char (or a string) into the input
      unput: function(s) {
        var r = s.length, a = s.split(/(?:\r\n?|\n)/g);
        this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - r), this.offset -= r;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), a.length - 1 && (this.yylineno -= a.length - 1);
        var f = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: a ? (a.length === u.length ? this.yylloc.first_column : 0) + u[u.length - a.length].length - a[0].length : this.yylloc.first_column - r
        }, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - r]), this.yyleng = this.yytext.length, this;
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
      less: function(s) {
        this.unput(this.match.slice(s));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var s = this.matched.substr(0, this.matched.length - this.match.length);
        return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var s = this.match;
        return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var s = this.pastInput(), r = new Array(s.length + 1).join("-");
        return s + this.upcomingInput() + `
` + r + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(s, r) {
        var a, u, f;
        if (this.options.backtrack_lexer && (f = {
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
        }, this.options.ranges && (f.yylloc.range = this.yylloc.range.slice(0))), u = s[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
        }, this.yytext += s[0], this.match += s[0], this.matches = s, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(s[0].length), this.matched += s[0], a = this.performAction.call(this, this.yy, this, r, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), a)
          return a;
        if (this._backtrack) {
          for (var l in f)
            this[l] = f[l];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var s, r, a, u;
        this._more || (this.yytext = "", this.match = "");
        for (var f = this._currentRules(), l = 0; l < f.length; l++)
          if (a = this._input.match(this.rules[f[l]]), a && (!r || a[0].length > r[0].length)) {
            if (r = a, u = l, this.options.backtrack_lexer) {
              if (s = this.test_match(a, f[l]), s !== false)
                return s;
              if (this._backtrack) {
                r = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return r ? (s = this.test_match(r, f[u]), s !== false ? s : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var r = this.next();
        return r || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(r) {
        this.conditionStack.push(r);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var r = this.conditionStack.length - 1;
        return r > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(r) {
        return r = this.conditionStack.length - 1 - Math.abs(r || 0), r >= 0 ? this.conditionStack[r] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(r) {
        this.begin(r);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(r, a, u, f) {
        switch (u) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      },
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true } }
    };
    return p;
  }();
  y.lexer = m;
  function g2() {
    this.yy = {};
  }
  return g2.prototype = y, y.Parser = g2, new g2();
}();
G.parser = G;
var wt = G;
var C = "";
var H = [];
var V = [];
var F = [];
var Tt = function() {
  H.length = 0, V.length = 0, C = "", F.length = 0, T_();
};
var $t = function(t) {
  C = t, H.push(t);
};
var Mt = function() {
  return H;
};
var St = function() {
  let t = D();
  const e = 100;
  let i = 0;
  for (; !t && i < e; )
    t = D(), i++;
  return V.push(...F), V;
};
var Et = function() {
  const t = [];
  return V.forEach((i) => {
    i.people && t.push(...i.people);
  }), [...new Set(t)].sort();
};
var Pt = function(t, e) {
  const i = e.substr(1).split(":");
  let o = 0, n = [];
  i.length === 1 ? (o = Number(i[0]), n = []) : (o = Number(i[0]), n = i[1].split(","));
  const h = n.map((d2) => d2.trim()), c2 = {
    section: C,
    type: C,
    people: h,
    task: t,
    score: o
  };
  F.push(c2);
};
var It = function(t) {
  const e = {
    section: C,
    type: C,
    description: t,
    task: t,
    classes: []
  };
  V.push(e);
};
var D = function() {
  const t = function(i) {
    return F[i].processed;
  };
  let e = true;
  for (const [i, o] of F.entries())
    t(i), e = e && o.processed;
  return e;
};
var At = function() {
  return Et();
};
var tt = {
  getConfig: () => Xn().journey,
  clear: Tt,
  setDiagramTitle: B_,
  getDiagramTitle: F_,
  setAccTitle: k_,
  getAccTitle: S_,
  setAccDescription: v_,
  getAccDescription: w_,
  addSection: $t,
  getSections: Mt,
  getTasks: St,
  addTask: Pt,
  addTaskOrg: It,
  getActors: At
};
var Ct2 = (t) => `.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
`;
var Vt = Ct2;
var U = function(t, e) {
  return c(t, e);
};
var Ft = function(t, e) {
  const o = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), n = t.append("g");
  n.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), n.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function h(y) {
    const m = vn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    y.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  function c2(y) {
    const m = vn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    y.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  function d2(y) {
    y.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return e.score > 3 ? h(n) : e.score < 3 ? c2(n) : d2(n), o;
};
var rt = function(t, e) {
  const i = t.append("circle");
  return i.attr("cx", e.cx), i.attr("cy", e.cy), i.attr("class", "actor-" + e.pos), i.attr("fill", e.fill), i.attr("stroke", e.stroke), i.attr("r", e.r), i.class !== void 0 && i.attr("class", i.class), e.title !== void 0 && i.append("title").text(e.title), i;
};
var at = function(t, e) {
  return d(t, e);
};
var Lt = function(t, e) {
  function i(n, h, c2, d2, y) {
    return n + "," + h + " " + (n + c2) + "," + h + " " + (n + c2) + "," + (h + d2 - y) + " " + (n + c2 - y * 1.2) + "," + (h + d2) + " " + n + "," + (h + d2);
  }
  const o = t.append("polygon");
  o.attr("points", i(e.x, e.y, 50, 20, 7)), o.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, at(t, e);
};
var Rt = function(t, e, i) {
  const o = t.append("g"), n = g();
  n.x = e.x, n.y = e.y, n.fill = e.fill, n.width = i.width * e.taskCount + // width of the tasks
  i.diagramMarginX * (e.taskCount - 1), n.height = i.height, n.class = "journey-section section-type-" + e.num, n.rx = 3, n.ry = 3, U(o, n), lt(i)(
    e.text,
    o,
    n.x,
    n.y,
    n.width,
    n.height,
    { class: "journey-section section-type-" + e.num },
    i,
    e.colour
  );
};
var et = -1;
var Nt = function(t, e, i) {
  const o = e.x + i.width / 2, n = t.append("g");
  et++;
  const h = 300 + 5 * 30;
  n.append("line").attr("id", "task" + et).attr("x1", o).attr("y1", e.y).attr("x2", o).attr("y2", h).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Ft(n, {
    cx: o,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  const c2 = g();
  c2.x = e.x, c2.y = e.y, c2.fill = e.fill, c2.width = i.width, c2.height = i.height, c2.class = "task task-type-" + e.num, c2.rx = 3, c2.ry = 3, U(n, c2);
  let d2 = e.x + 14;
  e.people.forEach((y) => {
    const m = e.actors[y].color, g2 = {
      cx: d2,
      cy: e.y,
      r: 7,
      fill: m,
      stroke: "#000",
      title: y,
      pos: e.actors[y].position
    };
    rt(n, g2), d2 += 10;
  }), lt(i)(
    e.task,
    n,
    c2.x,
    c2.y,
    c2.width,
    c2.height,
    { class: "task" },
    i,
    e.colour
  );
};
var Bt = function(t, e) {
  x(t, e);
};
var lt = /* @__PURE__ */ function() {
  function t(n, h, c2, d2, y, m, g2, p) {
    const s = h.append("text").attr("x", c2 + y / 2).attr("y", d2 + m / 2 + 5).style("font-color", p).style("text-anchor", "middle").text(n);
    o(s, g2);
  }
  function e(n, h, c2, d2, y, m, g2, p, s) {
    const { taskFontSize: r, taskFontFamily: a } = p, u = n.split(/<br\s*\/?>/gi);
    for (let f = 0; f < u.length; f++) {
      const l = f * r - r * (u.length - 1) / 2, w = h.append("text").attr("x", c2 + y / 2).attr("y", d2).attr("fill", s).style("text-anchor", "middle").style("font-size", r).style("font-family", a);
      w.append("tspan").attr("x", c2 + y / 2).attr("dy", l).text(u[f]), w.attr("y", d2 + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), o(w, g2);
    }
  }
  function i(n, h, c2, d2, y, m, g2, p) {
    const s = h.append("switch"), a = s.append("foreignObject").attr("x", c2).attr("y", d2).attr("width", y).attr("height", m).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    a.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(n), e(n, s, c2, d2, y, m, g2, p), o(a, g2);
  }
  function o(n, h) {
    for (const c2 in h)
      c2 in h && n.attr(c2, h[c2]);
  }
  return function(n) {
    return n.textPlacement === "fo" ? i : n.textPlacement === "old" ? t : e;
  };
}();
var jt = function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
var L = {
  drawRect: U,
  drawCircle: rt,
  drawSection: Rt,
  drawText: at,
  drawLabel: Lt,
  drawTask: Nt,
  drawBackgroundRect: Bt,
  initGraphics: jt
};
var zt = function(t) {
  Object.keys(t).forEach(function(i) {
    j[i] = t[i];
  });
};
var M = {};
function Yt(t) {
  const e = Xn().journey;
  let i = 60;
  Object.keys(M).forEach((o) => {
    const n = M[o].color, h = {
      cx: 20,
      cy: i,
      r: 7,
      fill: n,
      stroke: "#000",
      pos: M[o].position
    };
    L.drawCircle(t, h);
    const c2 = {
      x: 40,
      y: i + 7,
      fill: "#666",
      text: o,
      textMargin: e.boxTextMargin | 5
    };
    L.drawText(t, c2), i += 20;
  });
}
var j = Xn().journey;
var P = j.leftMargin;
var Ot = function(t, e, i, o) {
  const n = Xn().journey, h = Xn().securityLevel;
  let c2;
  h === "sandbox" && (c2 = Ct("#i" + e));
  const d2 = h === "sandbox" ? Ct(c2.nodes()[0].contentDocument.body) : Ct("body");
  v.init();
  const y = d2.select("#" + e);
  L.initGraphics(y);
  const m = o.db.getTasks(), g2 = o.db.getDiagramTitle(), p = o.db.getActors();
  for (const l in M)
    delete M[l];
  let s = 0;
  p.forEach((l) => {
    M[l] = {
      color: n.actorColours[s % n.actorColours.length],
      position: s
    }, s++;
  }), Yt(y), v.insert(0, 0, P, Object.keys(M).length * 50), qt(y, m, 0);
  const r = v.getBounds();
  g2 && y.append("text").text(g2).attr("x", P).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
  const a = r.stopy - r.starty + 2 * n.diagramMarginY, u = P + r.stopx + 2 * n.diagramMarginX;
  wl(y, a, u, n.useMaxWidth), y.append("line").attr("x1", P).attr("y1", n.height * 4).attr("x2", u - P - 4).attr("y2", n.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const f = g2 ? 70 : 0;
  y.attr("viewBox", `${r.startx} -25 ${u} ${a + f}`), y.attr("preserveAspectRatio", "xMinYMin meet"), y.attr("height", a + f + 25);
};
var v = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  },
  updateVal: function(t, e, i, o) {
    t[e] === void 0 ? t[e] = i : t[e] = o(i, t[e]);
  },
  updateBounds: function(t, e, i, o) {
    const n = Xn().journey, h = this;
    let c2 = 0;
    function d2(y) {
      return function(g2) {
        c2++;
        const p = h.sequenceItems.length - c2 + 1;
        h.updateVal(g2, "starty", e - p * n.boxMargin, Math.min), h.updateVal(g2, "stopy", o + p * n.boxMargin, Math.max), h.updateVal(v.data, "startx", t - p * n.boxMargin, Math.min), h.updateVal(v.data, "stopx", i + p * n.boxMargin, Math.max), y !== "activation" && (h.updateVal(g2, "startx", t - p * n.boxMargin, Math.min), h.updateVal(g2, "stopx", i + p * n.boxMargin, Math.max), h.updateVal(v.data, "starty", e - p * n.boxMargin, Math.min), h.updateVal(v.data, "stopy", o + p * n.boxMargin, Math.max));
      };
    }
    this.sequenceItems.forEach(d2());
  },
  insert: function(t, e, i, o) {
    const n = Math.min(t, i), h = Math.max(t, i), c2 = Math.min(e, o), d2 = Math.max(e, o);
    this.updateVal(v.data, "startx", n, Math.min), this.updateVal(v.data, "starty", c2, Math.min), this.updateVal(v.data, "stopx", h, Math.max), this.updateVal(v.data, "stopy", d2, Math.max), this.updateBounds(n, c2, h, d2);
  },
  bumpVerticalPos: function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return this.data;
  }
};
var X = j.sectionFills;
var st = j.sectionColours;
var qt = function(t, e, i) {
  const o = Xn().journey;
  let n = "";
  const h = o.height * 2 + o.diagramMarginY, c2 = i + h;
  let d2 = 0, y = "#CCC", m = "black", g2 = 0;
  for (const [p, s] of e.entries()) {
    if (n !== s.section) {
      y = X[d2 % X.length], g2 = d2 % X.length, m = st[d2 % st.length];
      let a = 0;
      const u = s.section;
      for (let l = p; l < e.length && e[l].section == u; l++)
        a = a + 1;
      const f = {
        x: p * o.taskMargin + p * o.width + P,
        y: 50,
        text: s.section,
        fill: y,
        num: g2,
        colour: m,
        taskCount: a
      };
      L.drawSection(t, f, o), n = s.section, d2++;
    }
    const r = s.people.reduce((a, u) => (M[u] && (a[u] = M[u]), a), {});
    s.x = p * o.taskMargin + p * o.width + P, s.y = c2, s.width = o.diagramMarginX, s.height = o.diagramMarginY, s.colour = m, s.fill = y, s.num = g2, s.actors = r, L.drawTask(t, s, o), v.insert(s.x, s.y, s.x + s.width + o.taskMargin, 300 + 5 * 30);
  }
};
var nt = {
  setConf: zt,
  draw: Ot
};
var Ut = {
  parser: wt,
  db: tt,
  renderer: nt,
  styles: Vt,
  init: (t) => {
    nt.setConf(t.journey), tt.clear();
  }
};
export {
  Ut as diagram
};
//# sourceMappingURL=journeyDiagram-66140ef0-CAUPX67Q.js.map
