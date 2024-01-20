import {
  vn
} from "./chunk-OFWIJ6AK.js";
import {
  h
} from "./chunk-6NA5HRQ5.js";
import "./chunk-UFOO6DEV.js";
import {
  t
} from "./chunk-BC4DT56R.js";
import {
  P
} from "./chunk-ZHHLGMR3.js";
import {
  A,
  B_,
  D_,
  F_,
  S_,
  T_,
  Wn,
  Xn,
  Za,
  c1,
  gp,
  ii,
  k_,
  v_,
  w_,
  wl
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/pieDiagram-2fe1d2bb.js
function vt(e, h2) {
  return h2 < e ? -1 : h2 > e ? 1 : h2 >= e ? 0 : NaN;
}
function bt(e) {
  return e;
}
function St() {
  var e = bt, h2 = vt, S = null, f = P(0), g = P(c1), E = P(0);
  function u(r) {
    var l, k = (r = t(r)).length, I, v, w = 0, d = new Array(k), c = new Array(k), A2 = +f.apply(this, arguments), $ = Math.min(c1, Math.max(-c1, g.apply(this, arguments) - A2)), T, O = Math.min(Math.abs($) / k, E.apply(this, arguments)), x = O * ($ < 0 ? -1 : 1), t2;
    for (l = 0; l < k; ++l)
      (t2 = c[d[l] = l] = +e(r[l], l, r)) > 0 && (w += t2);
    for (h2 != null ? d.sort(function(i, n) {
      return h2(c[i], c[n]);
    }) : S != null && d.sort(function(i, n) {
      return S(r[i], r[n]);
    }), l = 0, v = w ? ($ - k * x) / w : 0; l < k; ++l, A2 = T)
      I = d[l], t2 = c[I], T = A2 + (t2 > 0 ? t2 * v : 0) + x, c[I] = {
        data: r[I],
        index: l,
        value: t2,
        startAngle: A2,
        endAngle: T,
        padAngle: O
      };
    return c;
  }
  return u.value = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : P(+r), u) : e;
  }, u.sortValues = function(r) {
    return arguments.length ? (h2 = r, S = null, u) : h2;
  }, u.sort = function(r) {
    return arguments.length ? (S = r, h2 = null, u) : S;
  }, u.startAngle = function(r) {
    return arguments.length ? (f = typeof r == "function" ? r : P(+r), u) : f;
  }, u.endAngle = function(r) {
    return arguments.length ? (g = typeof r == "function" ? r : P(+r), u) : g;
  }, u.padAngle = function(r) {
    return arguments.length ? (E = typeof r == "function" ? r : P(+r), u) : E;
  }, u;
}
var J = function() {
  var e = function(x, t2, i, n) {
    for (i = i || {}, n = x.length; n--; i[x[n]] = t2)
      ;
    return i;
  }, h2 = [1, 3], S = [1, 4], f = [1, 5], g = [1, 6], E = [1, 10, 12, 14, 16, 18, 19, 20, 21, 22], u = [2, 4], r = [1, 5, 10, 12, 14, 16, 18, 19, 20, 21, 22], l = [20, 21, 22], k = [2, 7], I = [1, 12], v = [1, 13], w = [1, 14], d = [1, 15], c = [1, 16], A2 = [1, 17], $ = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, PIE: 5, document: 6, showData: 7, line: 8, statement: 9, txt: 10, value: 11, title: 12, title_value: 13, acc_title: 14, acc_title_value: 15, acc_descr: 16, acc_descr_value: 17, acc_descr_multiline_value: 18, section: 19, NEWLINE: 20, ";": 21, EOF: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "PIE", 7: "showData", 10: "txt", 11: "value", 12: "title", 13: "title_value", 14: "acc_title", 15: "acc_title_value", 16: "acc_descr", 17: "acc_descr_value", 18: "acc_descr_multiline_value", 19: "section", 20: "NEWLINE", 21: ";", 22: "EOF" },
    productions_: [0, [3, 2], [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [9, 0], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [4, 1], [4, 1], [4, 1]],
    performAction: function(t2, i, n, a, o, s, V) {
      var m = s.length - 1;
      switch (o) {
        case 3:
          a.setShowData(true);
          break;
        case 6:
          this.$ = s[m - 1];
          break;
        case 8:
          a.addSection(s[m - 1], a.cleanupValue(s[m]));
          break;
        case 9:
          this.$ = s[m].trim(), a.setDiagramTitle(this.$);
          break;
        case 10:
          this.$ = s[m].trim(), a.setAccTitle(this.$);
          break;
        case 11:
        case 12:
          this.$ = s[m].trim(), a.setAccDescription(this.$);
          break;
        case 13:
          a.addSection(s[m].substr(8)), this.$ = s[m].substr(8);
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: h2, 20: S, 21: f, 22: g }, { 1: [3] }, { 3: 7, 4: 2, 5: h2, 20: S, 21: f, 22: g }, e(E, u, { 6: 8, 7: [1, 9] }), e(r, [2, 14]), e(r, [2, 15]), e(r, [2, 16]), { 1: [2, 1] }, e(l, k, { 8: 10, 9: 11, 1: [2, 2], 10: I, 12: v, 14: w, 16: d, 18: c, 19: A2 }), e(E, u, { 6: 18 }), e(E, [2, 5]), { 4: 19, 20: S, 21: f, 22: g }, { 11: [1, 20] }, { 13: [1, 21] }, { 15: [1, 22] }, { 17: [1, 23] }, e(l, [2, 12]), e(l, [2, 13]), e(l, k, { 8: 10, 9: 11, 1: [2, 3], 10: I, 12: v, 14: w, 16: d, 18: c, 19: A2 }), e(E, [2, 6]), e(l, [2, 8]), e(l, [2, 9]), e(l, [2, 10]), e(l, [2, 11])],
    defaultActions: { 7: [2, 1] },
    parseError: function(t2, i) {
      if (i.recoverable)
        this.trace(t2);
      else {
        var n = new Error(t2);
        throw n.hash = i, n;
      }
    },
    parse: function(t2) {
      var i = this, n = [0], a = [], o = [null], s = [], V = this.table, m = "", p = 0, P2 = 0, z = 2, j = 1, B = s.slice.call(arguments, 1), y = Object.create(this.lexer), N = { yy: {} };
      for (var Y in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Y) && (N.yy[Y] = this.yy[Y]);
      y.setInput(t2, N.yy), N.yy.lexer = y, N.yy.parser = this, typeof y.yylloc > "u" && (y.yylloc = {});
      var X = y.yylloc;
      s.push(X);
      var st = y.options && y.options.ranges;
      typeof N.yy.parseError == "function" ? this.parseError = N.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function rt() {
        var C;
        return C = a.pop() || y.lex() || j, typeof C != "number" && (C instanceof Array && (a = C, C = a.pop()), C = i.symbols_[C] || C), C;
      }
      for (var _, L, b, Z, R = {}, M, D, Q, W; ; ) {
        if (L = n[n.length - 1], this.defaultActions[L] ? b = this.defaultActions[L] : ((_ === null || typeof _ > "u") && (_ = rt()), b = V[L] && V[L][_]), typeof b > "u" || !b.length || !b[0]) {
          var q = "";
          W = [];
          for (M in V[L])
            this.terminals_[M] && M > z && W.push("'" + this.terminals_[M] + "'");
          y.showPosition ? q = "Parse error on line " + (p + 1) + `:
` + y.showPosition() + `
Expecting ` + W.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : q = "Parse error on line " + (p + 1) + ": Unexpected " + (_ == j ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(q, {
            text: y.match,
            token: this.terminals_[_] || _,
            line: y.yylineno,
            loc: X,
            expected: W
          });
        }
        if (b[0] instanceof Array && b.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + L + ", token: " + _);
        switch (b[0]) {
          case 1:
            n.push(_), o.push(y.yytext), s.push(y.yylloc), n.push(b[1]), _ = null, P2 = y.yyleng, m = y.yytext, p = y.yylineno, X = y.yylloc;
            break;
          case 2:
            if (D = this.productions_[b[1]][1], R.$ = o[o.length - D], R._$ = {
              first_line: s[s.length - (D || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - (D || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, st && (R._$.range = [
              s[s.length - (D || 1)].range[0],
              s[s.length - 1].range[1]
            ]), Z = this.performAction.apply(R, [
              m,
              P2,
              p,
              N.yy,
              b[1],
              o,
              s
            ].concat(B)), typeof Z < "u")
              return Z;
            D && (n = n.slice(0, -1 * D * 2), o = o.slice(0, -1 * D), s = s.slice(0, -1 * D)), n.push(this.productions_[b[1]][0]), o.push(R.$), s.push(R._$), Q = V[n[n.length - 2]][n[n.length - 1]], n.push(Q);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, T = /* @__PURE__ */ function() {
    var x = {
      EOF: 1,
      parseError: function(i, n) {
        if (this.yy.parser)
          this.yy.parser.parseError(i, n);
        else
          throw new Error(i);
      },
      // resets the lexer, sets new input
      setInput: function(t2, i) {
        return this.yy = i || this.yy || {}, this._input = t2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var t2 = this._input[0];
        this.yytext += t2, this.yyleng++, this.offset++, this.match += t2, this.matched += t2;
        var i = t2.match(/(?:\r\n?|\n).*/g);
        return i ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t2;
      },
      // unshifts one char (or a string) into the input
      unput: function(t2) {
        var i = t2.length, n = t2.split(/(?:\r\n?|\n)/g);
        this._input = t2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - i), this.offset -= i;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
        var o = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === a.length ? this.yylloc.first_column : 0) + a[a.length - n.length].length - n[0].length : this.yylloc.first_column - i
        }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - i]), this.yyleng = this.yytext.length, this;
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
      less: function(t2) {
        this.unput(this.match.slice(t2));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var t2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (t2.length > 20 ? "..." : "") + t2.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var t2 = this.match;
        return t2.length < 20 && (t2 += this._input.substr(0, 20 - t2.length)), (t2.substr(0, 20) + (t2.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var t2 = this.pastInput(), i = new Array(t2.length + 1).join("-");
        return t2 + this.upcomingInput() + `
` + i + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(t2, i) {
        var n, a, o;
        if (this.options.backtrack_lexer && (o = {
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
        }, this.options.ranges && (o.yylloc.range = this.yylloc.range.slice(0))), a = t2[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t2[0].length
        }, this.yytext += t2[0], this.match += t2[0], this.matches = t2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(t2[0].length), this.matched += t2[0], n = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n)
          return n;
        if (this._backtrack) {
          for (var s in o)
            this[s] = o[s];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var t2, i, n, a;
        this._more || (this.yytext = "", this.match = "");
        for (var o = this._currentRules(), s = 0; s < o.length; s++)
          if (n = this._input.match(this.rules[o[s]]), n && (!i || n[0].length > i[0].length)) {
            if (i = n, a = s, this.options.backtrack_lexer) {
              if (t2 = this.test_match(n, o[s]), t2 !== false)
                return t2;
              if (this._backtrack) {
                i = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return i ? (t2 = this.test_match(i, o[a]), t2 !== false ? t2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var i = this.next();
        return i || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(i) {
        this.conditionStack.push(i);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var i = this.conditionStack.length - 1;
        return i > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(i) {
        return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(i) {
        this.begin(i);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(i, n, a, o) {
        switch (a) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 20;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return this.begin("title"), 12;
          case 6:
            return this.popState(), "title_value";
          case 7:
            return this.begin("acc_title"), 14;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 16;
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
            this.begin("string");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return "txt";
          case 17:
            return 5;
          case 18:
            return 7;
          case 19:
            return "value";
          case 20:
            return 22;
        }
      },
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[\s]+)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:pie\b)/i, /^(?:showData\b)/i, /^(?::[\s]*[\d]+(?:\.[\d]+)?)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [6], inclusive: false }, string: { rules: [15, 16], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 18, 19, 20], inclusive: true } }
    };
    return x;
  }();
  $.lexer = T;
  function O() {
    this.yy = {};
  }
  return O.prototype = $, $.Parser = O, new O();
}();
J.parser = J;
var Et = J;
var nt = gp.pie;
var G = {
  sections: {},
  showData: false,
  config: nt
};
var U = G.sections;
var K = G.showData;
var wt = structuredClone(nt);
var At = () => structuredClone(wt);
var $t = () => {
  U = structuredClone(G.sections), K = G.showData, T_();
};
var Tt = (e, h2) => {
  e = ii(e, Xn()), U[e] === void 0 && (U[e] = h2, A.debug(`added new section: ${e}, with value: ${h2}`));
};
var It = () => U;
var Dt = (e) => (e.substring(0, 1) === ":" && (e = e.substring(1).trim()), Number(e.trim()));
var Ct = (e) => {
  K = e;
};
var Ot = () => K;
var Vt = {
  getConfig: At,
  clear: $t,
  setDiagramTitle: B_,
  getDiagramTitle: F_,
  setAccTitle: k_,
  getAccTitle: S_,
  setAccDescription: v_,
  getAccDescription: w_,
  addSection: Tt,
  getSections: It,
  cleanupValue: Dt,
  setShowData: Ct,
  getShowData: Ot
};
var Pt = (e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`;
var Nt = Pt;
var Lt = (e) => {
  const h2 = Object.entries(e).map((f) => ({
    label: f[0],
    value: f[1]
  })).sort((f, g) => g.value - f.value);
  return St().value(
    (f) => f.value
  )(h2);
};
var Ft = (e, h2, S, f) => {
  var V, m;
  A.debug(`rendering pie chart
` + e);
  const g = f.db, E = Xn(), u = Za(g.getConfig(), E.pie), r = 450, l = ((m = (V = document.getElementById(h2)) == null ? void 0 : V.parentElement) == null ? void 0 : m.offsetWidth) ?? u.useWidth, k = D_(h2);
  k.attr("viewBox", `0 0 ${l} ${r}`), wl(k, r, l, u.useMaxWidth);
  const I = 40, v = 18, w = 4, d = k.append("g");
  d.attr("transform", "translate(" + l / 2 + "," + r / 2 + ")");
  const { themeVariables: c } = E;
  let [A2] = Wn(c.pieOuterStrokeWidth);
  A2 ?? (A2 = 2);
  const $ = u.textPosition, T = Math.min(l, r) / 2 - I, O = vn().innerRadius(0).outerRadius(T), x = vn().innerRadius(T * $).outerRadius(T * $);
  d.append("circle").attr("cx", 0).attr("cy", 0).attr("r", T + A2 / 2).attr("class", "pieOuterCircle");
  const t2 = g.getSections(), i = Lt(t2), n = [
    c.pie1,
    c.pie2,
    c.pie3,
    c.pie4,
    c.pie5,
    c.pie6,
    c.pie7,
    c.pie8,
    c.pie9,
    c.pie10,
    c.pie11,
    c.pie12
  ], a = h(n);
  d.selectAll("mySlices").data(i).enter().append("path").attr("d", O).attr("fill", (p) => a(p.data.label)).attr("class", "pieCircle");
  let o = 0;
  Object.keys(t2).forEach((p) => {
    o += t2[p];
  }), d.selectAll("mySlices").data(i).enter().append("text").text((p) => (p.data.value / o * 100).toFixed(0) + "%").attr("transform", (p) => "translate(" + x.centroid(p) + ")").style("text-anchor", "middle").attr("class", "slice"), d.append("text").text(g.getDiagramTitle()).attr("x", 0).attr("y", -(r - 50) / 2).attr("class", "pieTitleText");
  const s = d.selectAll(".legend").data(a.domain()).enter().append("g").attr("class", "legend").attr("transform", (p, P2) => {
    const z = v + w, j = z * a.domain().length / 2, B = 12 * v, y = P2 * z - j;
    return "translate(" + B + "," + y + ")";
  });
  s.append("rect").attr("width", v).attr("height", v).style("fill", a).style("stroke", a), s.data(i).append("text").attr("x", v + w).attr("y", v - w).text((p) => {
    const { label: P2, value: z } = p.data;
    return g.getShowData() ? `${P2} [${z}]` : P2;
  });
};
var zt = { draw: Ft };
var Bt = {
  parser: Et,
  db: Vt,
  renderer: zt,
  styles: Nt
};
export {
  Bt as diagram
};
//# sourceMappingURL=pieDiagram-2fe1d2bb-GU6OZQHP.js.map
