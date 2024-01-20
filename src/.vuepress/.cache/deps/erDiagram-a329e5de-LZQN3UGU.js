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
  B_,
  Ct,
  F_,
  Ke,
  Pf,
  S_,
  T_,
  Xn,
  d1,
  k_,
  v_,
  w_,
  wl
} from "./chunk-46PFX6EH.js";

// node_modules/.pnpm/mermaid@10.6.1/node_modules/mermaid/dist/erDiagram-a329e5de.js
var at = function() {
  var t = function(w, a, n, c) {
    for (n = n || {}, c = w.length; c--; n[w[c]] = a)
      ;
    return n;
  }, e = [6, 8, 10, 20, 22, 24, 26, 27, 28], r = [1, 10], u = [1, 11], l = [1, 12], p = [1, 13], f = [1, 14], o = [1, 15], h = [1, 21], _ = [1, 22], m = [1, 23], g = [1, 24], x = [1, 25], y = [6, 8, 10, 13, 15, 18, 19, 20, 22, 24, 26, 27, 28, 41, 42, 43, 44, 45], N = [1, 34], I = [27, 28, 46, 47], F = [41, 42, 43, 44, 45], W = [17, 34], C = [1, 54], T = [1, 53], M = [17, 34, 36, 38], R = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, ER_DIAGRAM: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, entityName: 11, relSpec: 12, ":": 13, role: 14, BLOCK_START: 15, attributes: 16, BLOCK_STOP: 17, SQS: 18, SQE: 19, title: 20, title_value: 21, acc_title: 22, acc_title_value: 23, acc_descr: 24, acc_descr_value: 25, acc_descr_multiline_value: 26, ALPHANUM: 27, ENTITY_NAME: 28, attribute: 29, attributeType: 30, attributeName: 31, attributeKeyTypeList: 32, attributeComment: 33, ATTRIBUTE_WORD: 34, attributeKeyType: 35, COMMA: 36, ATTRIBUTE_KEY: 37, COMMENT: 38, cardinality: 39, relType: 40, ZERO_OR_ONE: 41, ZERO_OR_MORE: 42, ONE_OR_MORE: 43, ONLY_ONE: 44, MD_PARENT: 45, NON_IDENTIFYING: 46, IDENTIFYING: 47, WORD: 48, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "ER_DIAGRAM", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 13: ":", 15: "BLOCK_START", 17: "BLOCK_STOP", 18: "SQS", 19: "SQE", 20: "title", 21: "title_value", 22: "acc_title", 23: "acc_title_value", 24: "acc_descr", 25: "acc_descr_value", 26: "acc_descr_multiline_value", 27: "ALPHANUM", 28: "ENTITY_NAME", 34: "ATTRIBUTE_WORD", 36: "COMMA", 37: "ATTRIBUTE_KEY", 38: "COMMENT", 41: "ZERO_OR_ONE", 42: "ZERO_OR_MORE", 43: "ONE_OR_MORE", 44: "ONLY_ONE", 45: "MD_PARENT", 46: "NON_IDENTIFYING", 47: "IDENTIFYING", 48: "WORD" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 5], [9, 4], [9, 3], [9, 1], [9, 7], [9, 6], [9, 4], [9, 2], [9, 2], [9, 2], [9, 1], [11, 1], [11, 1], [16, 1], [16, 2], [29, 2], [29, 3], [29, 3], [29, 4], [30, 1], [31, 1], [32, 1], [32, 3], [35, 1], [33, 1], [12, 3], [39, 1], [39, 1], [39, 1], [39, 1], [39, 1], [40, 1], [40, 1], [14, 1], [14, 1], [14, 1]],
    performAction: function(a, n, c, d, E, i, K) {
      var s = i.length - 1;
      switch (E) {
        case 1:
          break;
        case 2:
          this.$ = [];
          break;
        case 3:
          i[s - 1].push(i[s]), this.$ = i[s - 1];
          break;
        case 4:
        case 5:
          this.$ = i[s];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          d.addEntity(i[s - 4]), d.addEntity(i[s - 2]), d.addRelationship(i[s - 4], i[s], i[s - 2], i[s - 3]);
          break;
        case 9:
          d.addEntity(i[s - 3]), d.addAttributes(i[s - 3], i[s - 1]);
          break;
        case 10:
          d.addEntity(i[s - 2]);
          break;
        case 11:
          d.addEntity(i[s]);
          break;
        case 12:
          d.addEntity(i[s - 6], i[s - 4]), d.addAttributes(i[s - 6], i[s - 1]);
          break;
        case 13:
          d.addEntity(i[s - 5], i[s - 3]);
          break;
        case 14:
          d.addEntity(i[s - 3], i[s - 1]);
          break;
        case 15:
        case 16:
          this.$ = i[s].trim(), d.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = i[s].trim(), d.setAccDescription(this.$);
          break;
        case 19:
        case 43:
          this.$ = i[s];
          break;
        case 20:
        case 41:
        case 42:
          this.$ = i[s].replace(/"/g, "");
          break;
        case 21:
        case 29:
          this.$ = [i[s]];
          break;
        case 22:
          i[s].push(i[s - 1]), this.$ = i[s];
          break;
        case 23:
          this.$ = { attributeType: i[s - 1], attributeName: i[s] };
          break;
        case 24:
          this.$ = { attributeType: i[s - 2], attributeName: i[s - 1], attributeKeyTypeList: i[s] };
          break;
        case 25:
          this.$ = { attributeType: i[s - 2], attributeName: i[s - 1], attributeComment: i[s] };
          break;
        case 26:
          this.$ = { attributeType: i[s - 3], attributeName: i[s - 2], attributeKeyTypeList: i[s - 1], attributeComment: i[s] };
          break;
        case 27:
        case 28:
        case 31:
          this.$ = i[s];
          break;
        case 30:
          i[s - 2].push(i[s]), this.$ = i[s - 2];
          break;
        case 32:
          this.$ = i[s].replace(/"/g, "");
          break;
        case 33:
          this.$ = { cardA: i[s], relType: i[s - 1], cardB: i[s - 2] };
          break;
        case 34:
          this.$ = d.Cardinality.ZERO_OR_ONE;
          break;
        case 35:
          this.$ = d.Cardinality.ZERO_OR_MORE;
          break;
        case 36:
          this.$ = d.Cardinality.ONE_OR_MORE;
          break;
        case 37:
          this.$ = d.Cardinality.ONLY_ONE;
          break;
        case 38:
          this.$ = d.Cardinality.MD_PARENT;
          break;
        case 39:
          this.$ = d.Identification.NON_IDENTIFYING;
          break;
        case 40:
          this.$ = d.Identification.IDENTIFYING;
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 9, 20: r, 22: u, 24: l, 26: p, 27: f, 28: o }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 16, 11: 9, 20: r, 22: u, 24: l, 26: p, 27: f, 28: o }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 11], { 12: 17, 39: 20, 15: [1, 18], 18: [1, 19], 41: h, 42: _, 43: m, 44: g, 45: x }), { 21: [1, 26] }, { 23: [1, 27] }, { 25: [1, 28] }, t(e, [2, 18]), t(y, [2, 19]), t(y, [2, 20]), t(e, [2, 4]), { 11: 29, 27: f, 28: o }, { 16: 30, 17: [1, 31], 29: 32, 30: 33, 34: N }, { 11: 35, 27: f, 28: o }, { 40: 36, 46: [1, 37], 47: [1, 38] }, t(I, [2, 34]), t(I, [2, 35]), t(I, [2, 36]), t(I, [2, 37]), t(I, [2, 38]), t(e, [2, 15]), t(e, [2, 16]), t(e, [2, 17]), { 13: [1, 39] }, { 17: [1, 40] }, t(e, [2, 10]), { 16: 41, 17: [2, 21], 29: 32, 30: 33, 34: N }, { 31: 42, 34: [1, 43] }, { 34: [2, 27] }, { 19: [1, 44] }, { 39: 45, 41: h, 42: _, 43: m, 44: g, 45: x }, t(F, [2, 39]), t(F, [2, 40]), { 14: 46, 27: [1, 49], 28: [1, 48], 48: [1, 47] }, t(e, [2, 9]), { 17: [2, 22] }, t(W, [2, 23], { 32: 50, 33: 51, 35: 52, 37: C, 38: T }), t([17, 34, 37, 38], [2, 28]), t(e, [2, 14], { 15: [1, 55] }), t([27, 28], [2, 33]), t(e, [2, 8]), t(e, [2, 41]), t(e, [2, 42]), t(e, [2, 43]), t(W, [2, 24], { 33: 56, 36: [1, 57], 38: T }), t(W, [2, 25]), t(M, [2, 29]), t(W, [2, 32]), t(M, [2, 31]), { 16: 58, 17: [1, 59], 29: 32, 30: 33, 34: N }, t(W, [2, 26]), { 35: 60, 37: C }, { 17: [1, 61] }, t(e, [2, 13]), t(M, [2, 30]), t(e, [2, 12])],
    defaultActions: { 34: [2, 27], 41: [2, 22] },
    parseError: function(a, n) {
      if (n.recoverable)
        this.trace(a);
      else {
        var c = new Error(a);
        throw c.hash = n, c;
      }
    },
    parse: function(a) {
      var n = this, c = [0], d = [], E = [null], i = [], K = this.table, s = "", Q = 0, st = 0, ft = 2, ot = 1, yt = i.slice.call(arguments, 1), b = Object.create(this.lexer), z = { yy: {} };
      for (var J in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, J) && (z.yy[J] = this.yy[J]);
      b.setInput(a, z.yy), z.yy.lexer = b, z.yy.parser = this, typeof b.yylloc > "u" && (b.yylloc = {});
      var $ = b.yylloc;
      i.push($);
      var pt = b.options && b.options.ranges;
      typeof z.yy.parseError == "function" ? this.parseError = z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function _t() {
        var Y;
        return Y = d.pop() || b.lex() || ot, typeof Y != "number" && (Y instanceof Array && (d = Y, Y = d.pop()), Y = n.symbols_[Y] || Y), Y;
      }
      for (var S, G, D, tt, H = {}, j, P2, lt, q; ; ) {
        if (G = c[c.length - 1], this.defaultActions[G] ? D = this.defaultActions[G] : ((S === null || typeof S > "u") && (S = _t()), D = K[G] && K[G][S]), typeof D > "u" || !D.length || !D[0]) {
          var et = "";
          q = [];
          for (j in K[G])
            this.terminals_[j] && j > ft && q.push("'" + this.terminals_[j] + "'");
          b.showPosition ? et = "Parse error on line " + (Q + 1) + `:
` + b.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : et = "Parse error on line " + (Q + 1) + ": Unexpected " + (S == ot ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(et, {
            text: b.match,
            token: this.terminals_[S] || S,
            line: b.yylineno,
            loc: $,
            expected: q
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + G + ", token: " + S);
        switch (D[0]) {
          case 1:
            c.push(S), E.push(b.yytext), i.push(b.yylloc), c.push(D[1]), S = null, st = b.yyleng, s = b.yytext, Q = b.yylineno, $ = b.yylloc;
            break;
          case 2:
            if (P2 = this.productions_[D[1]][1], H.$ = E[E.length - P2], H._$ = {
              first_line: i[i.length - (P2 || 1)].first_line,
              last_line: i[i.length - 1].last_line,
              first_column: i[i.length - (P2 || 1)].first_column,
              last_column: i[i.length - 1].last_column
            }, pt && (H._$.range = [
              i[i.length - (P2 || 1)].range[0],
              i[i.length - 1].range[1]
            ]), tt = this.performAction.apply(H, [
              s,
              st,
              Q,
              z.yy,
              D[1],
              E,
              i
            ].concat(yt)), typeof tt < "u")
              return tt;
            P2 && (c = c.slice(0, -1 * P2 * 2), E = E.slice(0, -1 * P2), i = i.slice(0, -1 * P2)), c.push(this.productions_[D[1]][0]), E.push(H.$), i.push(H._$), lt = K[c[c.length - 2]][c[c.length - 1]], c.push(lt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, O = /* @__PURE__ */ function() {
    var w = {
      EOF: 1,
      parseError: function(n, c) {
        if (this.yy.parser)
          this.yy.parser.parseError(n, c);
        else
          throw new Error(n);
      },
      // resets the lexer, sets new input
      setInput: function(a, n) {
        return this.yy = n || this.yy || {}, this._input = a, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var a = this._input[0];
        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
        var n = a.match(/(?:\r\n?|\n).*/g);
        return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a;
      },
      // unshifts one char (or a string) into the input
      unput: function(a) {
        var n = a.length, c = a.split(/(?:\r\n?|\n)/g);
        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
        var d = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - n
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
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
      less: function(a) {
        this.unput(this.match.slice(a));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var a = this.matched.substr(0, this.matched.length - this.match.length);
        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var a = this.match;
        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var a = this.pastInput(), n = new Array(a.length + 1).join("-");
        return a + this.upcomingInput() + `
` + n + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(a, n) {
        var c, d, E;
        if (this.options.backtrack_lexer && (E = {
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
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), d = a[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + a[0].length
        }, this.yytext += a[0], this.match += a[0], this.matches = a, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(a[0].length), this.matched += a[0], c = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), c)
          return c;
        if (this._backtrack) {
          for (var i in E)
            this[i] = E[i];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var a, n, c, d;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), i = 0; i < E.length; i++)
          if (c = this._input.match(this.rules[E[i]]), c && (!n || c[0].length > n[0].length)) {
            if (n = c, d = i, this.options.backtrack_lexer) {
              if (a = this.test_match(c, E[i]), a !== false)
                return a;
              if (this._backtrack) {
                n = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return n ? (a = this.test_match(n, E[d]), a !== false ? a : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var n = this.next();
        return n || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(n) {
        this.conditionStack.push(n);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var n = this.conditionStack.length - 1;
        return n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(n) {
        return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(n) {
        this.begin(n);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(n, c, d, E) {
        switch (d) {
          case 0:
            return this.begin("acc_title"), 22;
          case 1:
            return this.popState(), "acc_title_value";
          case 2:
            return this.begin("acc_descr"), 24;
          case 3:
            return this.popState(), "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return 10;
          case 8:
            break;
          case 9:
            return 8;
          case 10:
            return 28;
          case 11:
            return 48;
          case 12:
            return 4;
          case 13:
            return this.begin("block"), 15;
          case 14:
            return 36;
          case 15:
            break;
          case 16:
            return 37;
          case 17:
            return 34;
          case 18:
            return 34;
          case 19:
            return 38;
          case 20:
            break;
          case 21:
            return this.popState(), 17;
          case 22:
            return c.yytext[0];
          case 23:
            return 18;
          case 24:
            return 19;
          case 25:
            return 41;
          case 26:
            return 43;
          case 27:
            return 43;
          case 28:
            return 43;
          case 29:
            return 41;
          case 30:
            return 41;
          case 31:
            return 42;
          case 32:
            return 42;
          case 33:
            return 42;
          case 34:
            return 42;
          case 35:
            return 42;
          case 36:
            return 43;
          case 37:
            return 42;
          case 38:
            return 43;
          case 39:
            return 44;
          case 40:
            return 44;
          case 41:
            return 44;
          case 42:
            return 44;
          case 43:
            return 41;
          case 44:
            return 42;
          case 45:
            return 43;
          case 46:
            return 45;
          case 47:
            return 46;
          case 48:
            return 47;
          case 49:
            return 47;
          case 50:
            return 46;
          case 51:
            return 46;
          case 52:
            return 46;
          case 53:
            return 27;
          case 54:
            return c.yytext[0];
          case 55:
            return 6;
        }
      },
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:[\s]+)/i, /^(?:"[^"%\r\n\v\b\\]+")/i, /^(?:"[^"]*")/i, /^(?:erDiagram\b)/i, /^(?:\{)/i, /^(?:,)/i, /^(?:\s+)/i, /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i, /^(?:(.*?)[~](.*?)*[~])/i, /^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i, /^(?:"[^"]*")/i, /^(?:[\n]+)/i, /^(?:\})/i, /^(?:.)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:one or zero\b)/i, /^(?:one or more\b)/i, /^(?:one or many\b)/i, /^(?:1\+)/i, /^(?:\|o\b)/i, /^(?:zero or one\b)/i, /^(?:zero or more\b)/i, /^(?:zero or many\b)/i, /^(?:0\+)/i, /^(?:\}o\b)/i, /^(?:many\(0\))/i, /^(?:many\(1\))/i, /^(?:many\b)/i, /^(?:\}\|)/i, /^(?:one\b)/i, /^(?:only one\b)/i, /^(?:1\b)/i, /^(?:\|\|)/i, /^(?:o\|)/i, /^(?:o\{)/i, /^(?:\|\{)/i, /^(?:\s*u\b)/i, /^(?:\.\.)/i, /^(?:--)/i, /^(?:to\b)/i, /^(?:optionally to\b)/i, /^(?:\.-)/i, /^(?:-\.)/i, /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i, /^(?:.)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [5, 6], inclusive: false }, acc_descr: { rules: [3], inclusive: false }, acc_title: { rules: [1], inclusive: false }, block: { rules: [14, 15, 16, 17, 18, 19, 20, 21, 22], inclusive: false }, INITIAL: { rules: [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55], inclusive: true } }
    };
    return w;
  }();
  R.lexer = O;
  function L2() {
    this.yy = {};
  }
  return L2.prototype = R, R.Parser = L2, new L2();
}();
at.parser = at;
var It = at;
var U = {};
var nt = [];
var Dt = {
  ZERO_OR_ONE: "ZERO_OR_ONE",
  ZERO_OR_MORE: "ZERO_OR_MORE",
  ONE_OR_MORE: "ONE_OR_MORE",
  ONLY_ONE: "ONLY_ONE",
  MD_PARENT: "MD_PARENT"
};
var Lt = {
  NON_IDENTIFYING: "NON_IDENTIFYING",
  IDENTIFYING: "IDENTIFYING"
};
var dt = function(t, e = void 0) {
  return U[t] === void 0 ? (U[t] = { attributes: [], alias: e }, A.info("Added new entity :", t)) : U[t] && !U[t].alias && e && (U[t].alias = e, A.info(`Add alias '${e}' to entity '${t}'`)), U[t];
};
var vt = () => U;
var Bt = function(t, e) {
  let r = dt(t), u;
  for (u = e.length - 1; u >= 0; u--)
    r.attributes.push(e[u]), A.debug("Added attribute ", e[u].attributeName);
};
var Ct2 = function(t, e, r, u) {
  let l = {
    entityA: t,
    roleA: e,
    entityB: r,
    relSpec: u
  };
  nt.push(l), A.debug("Added new relationship :", l);
};
var Pt = () => nt;
var Yt = function() {
  U = {}, nt = [], T_();
};
var Zt = {
  Cardinality: Dt,
  Identification: Lt,
  getConfig: () => Xn().er,
  addEntity: dt,
  addAttributes: Bt,
  getEntities: vt,
  addRelationship: Ct2,
  getRelationships: Pt,
  clear: Yt,
  setAccTitle: k_,
  getAccTitle: S_,
  setAccDescription: v_,
  getAccDescription: w_,
  setDiagramTitle: B_,
  getDiagramTitle: F_
};
var v = {
  ONLY_ONE_START: "ONLY_ONE_START",
  ONLY_ONE_END: "ONLY_ONE_END",
  ZERO_OR_ONE_START: "ZERO_OR_ONE_START",
  ZERO_OR_ONE_END: "ZERO_OR_ONE_END",
  ONE_OR_MORE_START: "ONE_OR_MORE_START",
  ONE_OR_MORE_END: "ONE_OR_MORE_END",
  ZERO_OR_MORE_START: "ZERO_OR_MORE_START",
  ZERO_OR_MORE_END: "ZERO_OR_MORE_END",
  MD_PARENT_END: "MD_PARENT_END",
  MD_PARENT_START: "MD_PARENT_START"
};
var Ft = function(t, e) {
  let r;
  t.append("defs").append("marker").attr("id", v.MD_PARENT_START).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", v.MD_PARENT_END).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), t.append("defs").append("marker").attr("id", v.ONLY_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M9,0 L9,18 M15,0 L15,18"), t.append("defs").append("marker").attr("id", v.ONLY_ONE_END).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M3,0 L3,18 M9,0 L9,18"), r = t.append("defs").append("marker").attr("id", v.ZERO_OR_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto"), r.append("circle").attr("stroke", e.stroke).attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), r.append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M9,0 L9,18"), r = t.append("defs").append("marker").attr("id", v.ZERO_OR_ONE_END).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto"), r.append("circle").attr("stroke", e.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), r.append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M21,0 L21,18"), t.append("defs").append("marker").attr("id", v.ONE_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), t.append("defs").append("marker").attr("id", v.ONE_OR_MORE_END).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"), r = t.append("defs").append("marker").attr("id", v.ZERO_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto"), r.append("circle").attr("stroke", e.stroke).attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), r.append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18"), r = t.append("defs").append("marker").attr("id", v.ZERO_OR_MORE_END).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto"), r.append("circle").attr("stroke", e.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), r.append("path").attr("stroke", e.stroke).attr("fill", "none").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
};
var B = {
  ERMarkers: v,
  insertMarkers: Ft
};
var Wt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ut(t) {
  return typeof t == "string" && Wt.test(t);
}
var A2 = [];
for (let t = 0; t < 256; ++t)
  A2.push((t + 256).toString(16).slice(1));
function zt(t, e = 0) {
  return (A2[t[e + 0]] + A2[t[e + 1]] + A2[t[e + 2]] + A2[t[e + 3]] + "-" + A2[t[e + 4]] + A2[t[e + 5]] + "-" + A2[t[e + 6]] + A2[t[e + 7]] + "-" + A2[t[e + 8]] + A2[t[e + 9]] + "-" + A2[t[e + 10]] + A2[t[e + 11]] + A2[t[e + 12]] + A2[t[e + 13]] + A2[t[e + 14]] + A2[t[e + 15]]).toLowerCase();
}
function Gt(t) {
  if (!Ut(t))
    throw TypeError("Invalid UUID");
  let e;
  const r = new Uint8Array(16);
  return r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = e & 255, r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, r[5] = e & 255, r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, r[7] = e & 255, r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, r[9] = e & 255, r[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = e / 4294967296 & 255, r[12] = e >>> 24 & 255, r[13] = e >>> 16 & 255, r[14] = e >>> 8 & 255, r[15] = e & 255, r;
}
function Ht(t) {
  t = unescape(encodeURIComponent(t));
  const e = [];
  for (let r = 0; r < t.length; ++r)
    e.push(t.charCodeAt(r));
  return e;
}
var Kt = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var Vt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Xt(t, e, r) {
  function u(l, p, f, o) {
    var h;
    if (typeof l == "string" && (l = Ht(l)), typeof p == "string" && (p = Gt(p)), ((h = p) === null || h === void 0 ? void 0 : h.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + l.length);
    if (_.set(p), _.set(l, p.length), _ = r(_), _[6] = _[6] & 15 | e, _[8] = _[8] & 63 | 128, f) {
      o = o || 0;
      for (let m = 0; m < 16; ++m)
        f[o + m] = _[m];
      return f;
    }
    return zt(_);
  }
  try {
    u.name = t;
  } catch {
  }
  return u.DNS = Kt, u.URL = Vt, u;
}
function Qt(t, e, r, u) {
  switch (t) {
    case 0:
      return e & r ^ ~e & u;
    case 1:
      return e ^ r ^ u;
    case 2:
      return e & r ^ e & u ^ r & u;
    case 3:
      return e ^ r ^ u;
  }
}
function it(t, e) {
  return t << e | t >>> 32 - e;
}
function jt(t) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782], r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof t == "string") {
    const f = unescape(encodeURIComponent(t));
    t = [];
    for (let o = 0; o < f.length; ++o)
      t.push(f.charCodeAt(o));
  } else
    Array.isArray(t) || (t = Array.prototype.slice.call(t));
  t.push(128);
  const u = t.length / 4 + 2, l = Math.ceil(u / 16), p = new Array(l);
  for (let f = 0; f < l; ++f) {
    const o = new Uint32Array(16);
    for (let h = 0; h < 16; ++h)
      o[h] = t[f * 64 + h * 4] << 24 | t[f * 64 + h * 4 + 1] << 16 | t[f * 64 + h * 4 + 2] << 8 | t[f * 64 + h * 4 + 3];
    p[f] = o;
  }
  p[l - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), p[l - 1][14] = Math.floor(p[l - 1][14]), p[l - 1][15] = (t.length - 1) * 8 & 4294967295;
  for (let f = 0; f < l; ++f) {
    const o = new Uint32Array(80);
    for (let y = 0; y < 16; ++y)
      o[y] = p[f][y];
    for (let y = 16; y < 80; ++y)
      o[y] = it(o[y - 3] ^ o[y - 8] ^ o[y - 14] ^ o[y - 16], 1);
    let h = r[0], _ = r[1], m = r[2], g = r[3], x = r[4];
    for (let y = 0; y < 80; ++y) {
      const N = Math.floor(y / 20), I = it(h, 5) + Qt(N, _, m, g) + x + e[N] + o[y] >>> 0;
      x = g, g = m, m = it(_, 30) >>> 0, _ = h, h = I;
    }
    r[0] = r[0] + h >>> 0, r[1] = r[1] + _ >>> 0, r[2] = r[2] + m >>> 0, r[3] = r[3] + g >>> 0, r[4] = r[4] + x >>> 0;
  }
  return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, r[0] & 255, r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, r[1] & 255, r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, r[2] & 255, r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, r[3] & 255, r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, r[4] & 255];
}
var qt = Xt("v5", 80, jt);
var Jt = qt;
var $t = /[^\dA-Za-z](\W)*/g;
var k = {};
var X = /* @__PURE__ */ new Map();
var te = function(t) {
  const e = Object.keys(t);
  for (const r of e)
    k[r] = t[r];
};
var ee = (t, e, r) => {
  const u = k.entityPadding / 3, l = k.entityPadding / 3, p = k.fontSize * 0.85, f = e.node().getBBox(), o = [];
  let h = false, _ = false, m = 0, g = 0, x = 0, y = 0, N = f.height + u * 2, I = 1;
  r.forEach((T) => {
    T.attributeKeyTypeList !== void 0 && T.attributeKeyTypeList.length > 0 && (h = true), T.attributeComment !== void 0 && (_ = true);
  }), r.forEach((T) => {
    const M = `${e.node().id}-attr-${I}`;
    let R = 0;
    const O = d1(T.attributeType), L2 = t.append("text").classed("er entityLabel", true).attr("id", `${M}-type`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", Xn().fontFamily).style("font-size", p + "px").text(O), w = t.append("text").classed("er entityLabel", true).attr("id", `${M}-name`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", Xn().fontFamily).style("font-size", p + "px").text(T.attributeName), a = {};
    a.tn = L2, a.nn = w;
    const n = L2.node().getBBox(), c = w.node().getBBox();
    if (m = Math.max(m, n.width), g = Math.max(g, c.width), R = Math.max(n.height, c.height), h) {
      const d = T.attributeKeyTypeList !== void 0 ? T.attributeKeyTypeList.join(",") : "", E = t.append("text").classed("er entityLabel", true).attr("id", `${M}-key`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", Xn().fontFamily).style("font-size", p + "px").text(d);
      a.kn = E;
      const i = E.node().getBBox();
      x = Math.max(x, i.width), R = Math.max(R, i.height);
    }
    if (_) {
      const d = t.append("text").classed("er entityLabel", true).attr("id", `${M}-comment`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", Xn().fontFamily).style("font-size", p + "px").text(T.attributeComment || "");
      a.cn = d;
      const E = d.node().getBBox();
      y = Math.max(y, E.width), R = Math.max(R, E.height);
    }
    a.height = R, o.push(a), N += R + u * 2, I += 1;
  });
  let F = 4;
  h && (F += 2), _ && (F += 2);
  const W = m + g + x + y, C = {
    width: Math.max(
      k.minEntityWidth,
      Math.max(
        f.width + k.entityPadding * 2,
        W + l * F
      )
    ),
    height: r.length > 0 ? N : Math.max(k.minEntityHeight, f.height + k.entityPadding * 2)
  };
  if (r.length > 0) {
    const T = Math.max(
      0,
      (C.width - W - l * F) / (F / 2)
    );
    e.attr(
      "transform",
      "translate(" + C.width / 2 + "," + (u + f.height / 2) + ")"
    );
    let M = f.height + u * 2, R = "attributeBoxOdd";
    o.forEach((O) => {
      const L2 = M + u + O.height / 2;
      O.tn.attr("transform", "translate(" + l + "," + L2 + ")");
      const w = t.insert("rect", "#" + O.tn.node().id).classed(`er ${R}`, true).attr("x", 0).attr("y", M).attr("width", m + l * 2 + T).attr("height", O.height + u * 2), a = parseFloat(w.attr("x")) + parseFloat(w.attr("width"));
      O.nn.attr(
        "transform",
        "translate(" + (a + l) + "," + L2 + ")"
      );
      const n = t.insert("rect", "#" + O.nn.node().id).classed(`er ${R}`, true).attr("x", a).attr("y", M).attr("width", g + l * 2 + T).attr("height", O.height + u * 2);
      let c = parseFloat(n.attr("x")) + parseFloat(n.attr("width"));
      if (h) {
        O.kn.attr(
          "transform",
          "translate(" + (c + l) + "," + L2 + ")"
        );
        const d = t.insert("rect", "#" + O.kn.node().id).classed(`er ${R}`, true).attr("x", c).attr("y", M).attr("width", x + l * 2 + T).attr("height", O.height + u * 2);
        c = parseFloat(d.attr("x")) + parseFloat(d.attr("width"));
      }
      _ && (O.cn.attr(
        "transform",
        "translate(" + (c + l) + "," + L2 + ")"
      ), t.insert("rect", "#" + O.cn.node().id).classed(`er ${R}`, "true").attr("x", c).attr("y", M).attr("width", y + l * 2 + T).attr("height", O.height + u * 2)), M += O.height + u * 2, R = R === "attributeBoxOdd" ? "attributeBoxEven" : "attributeBoxOdd";
    });
  } else
    C.height = Math.max(k.minEntityHeight, N), e.attr("transform", "translate(" + C.width / 2 + "," + C.height / 2 + ")");
  return C;
};
var re = function(t, e, r) {
  const u = Object.keys(e);
  let l;
  return u.forEach(function(p) {
    const f = le(p, "entity");
    X.set(p, f);
    const o = t.append("g").attr("id", f);
    l = l === void 0 ? f : l;
    const h = "text-" + f, _ = o.append("text").classed("er entityLabel", true).attr("id", h).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "middle").style("font-family", Xn().fontFamily).style("font-size", k.fontSize + "px").text(e[p].alias ?? p), { width: m, height: g } = ee(
      o,
      _,
      e[p].attributes
    ), y = o.insert("rect", "#" + h).classed("er entityBox", true).attr("x", 0).attr("y", 0).attr("width", m).attr("height", g).node().getBBox();
    r.setNode(f, {
      width: y.width,
      height: y.height,
      shape: "rect",
      id: f
    });
  }), l;
};
var ie = function(t, e) {
  e.nodes().forEach(function(r) {
    r !== void 0 && e.node(r) !== void 0 && t.select("#" + r).attr(
      "transform",
      "translate(" + (e.node(r).x - e.node(r).width / 2) + "," + (e.node(r).y - e.node(r).height / 2) + " )"
    );
  });
};
var ut = function(t) {
  return (t.entityA + t.roleA + t.entityB).replace(/\s/g, "");
};
var ae = function(t, e) {
  return t.forEach(function(r) {
    e.setEdge(
      X.get(r.entityA),
      X.get(r.entityB),
      { relationship: r },
      ut(r)
    );
  }), t;
};
var ct = 0;
var ne = function(t, e, r, u, l) {
  ct++;
  const p = r.edge(
    X.get(e.entityA),
    X.get(e.entityB),
    ut(e)
  ), f = P().x(function(N) {
    return N.x;
  }).y(function(N) {
    return N.y;
  }).curve(Pf), o = t.insert("path", "#" + u).classed("er relationshipLine", true).attr("d", f(p.points)).style("stroke", k.stroke).style("fill", "none");
  e.relSpec.relType === l.db.Identification.NON_IDENTIFYING && o.attr("stroke-dasharray", "8,8");
  let h = "";
  switch (k.arrowMarkerAbsolute && (h = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, h = h.replace(/\(/g, "\\("), h = h.replace(/\)/g, "\\)")), e.relSpec.cardA) {
    case l.db.Cardinality.ZERO_OR_ONE:
      o.attr("marker-end", "url(" + h + "#" + B.ERMarkers.ZERO_OR_ONE_END + ")");
      break;
    case l.db.Cardinality.ZERO_OR_MORE:
      o.attr("marker-end", "url(" + h + "#" + B.ERMarkers.ZERO_OR_MORE_END + ")");
      break;
    case l.db.Cardinality.ONE_OR_MORE:
      o.attr("marker-end", "url(" + h + "#" + B.ERMarkers.ONE_OR_MORE_END + ")");
      break;
    case l.db.Cardinality.ONLY_ONE:
      o.attr("marker-end", "url(" + h + "#" + B.ERMarkers.ONLY_ONE_END + ")");
      break;
    case l.db.Cardinality.MD_PARENT:
      o.attr("marker-end", "url(" + h + "#" + B.ERMarkers.MD_PARENT_END + ")");
      break;
  }
  switch (e.relSpec.cardB) {
    case l.db.Cardinality.ZERO_OR_ONE:
      o.attr(
        "marker-start",
        "url(" + h + "#" + B.ERMarkers.ZERO_OR_ONE_START + ")"
      );
      break;
    case l.db.Cardinality.ZERO_OR_MORE:
      o.attr(
        "marker-start",
        "url(" + h + "#" + B.ERMarkers.ZERO_OR_MORE_START + ")"
      );
      break;
    case l.db.Cardinality.ONE_OR_MORE:
      o.attr(
        "marker-start",
        "url(" + h + "#" + B.ERMarkers.ONE_OR_MORE_START + ")"
      );
      break;
    case l.db.Cardinality.ONLY_ONE:
      o.attr("marker-start", "url(" + h + "#" + B.ERMarkers.ONLY_ONE_START + ")");
      break;
    case l.db.Cardinality.MD_PARENT:
      o.attr("marker-start", "url(" + h + "#" + B.ERMarkers.MD_PARENT_START + ")");
      break;
  }
  const _ = o.node().getTotalLength(), m = o.node().getPointAtLength(_ * 0.5), g = "rel" + ct, y = t.append("text").classed("er relationshipLabel", true).attr("id", g).attr("x", m.x).attr("y", m.y).style("text-anchor", "middle").style("dominant-baseline", "middle").style("font-family", Xn().fontFamily).style("font-size", k.fontSize + "px").text(e.roleA).node().getBBox();
  t.insert("rect", "#" + g).classed("er relationshipLabelBox", true).attr("x", m.x - y.width / 2).attr("y", m.y - y.height / 2).attr("width", y.width).attr("height", y.height);
};
var se = function(t, e, r, u) {
  k = Xn().er, A.info("Drawing ER diagram");
  const l = Xn().securityLevel;
  let p;
  l === "sandbox" && (p = Ct("#i" + e));
  const o = (l === "sandbox" ? Ct(p.nodes()[0].contentDocument.body) : Ct("body")).select(`[id='${e}']`);
  B.insertMarkers(o, k);
  let h;
  h = new L({
    multigraph: true,
    directed: true,
    compound: false
  }).setGraph({
    rankdir: k.layoutDirection,
    marginx: 20,
    marginy: 20,
    nodesep: 100,
    edgesep: 100,
    ranksep: 100
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  const _ = re(o, u.db.getEntities(), h), m = ae(u.db.getRelationships(), h);
  js(h), ie(o, h), m.forEach(function(I) {
    ne(o, I, h, _, u);
  });
  const g = k.diagramPadding;
  Ke.insertTitle(o, "entityTitleText", k.titleTopMargin, u.db.getDiagramTitle());
  const x = o.node().getBBox(), y = x.width + g * 2, N = x.height + g * 2;
  wl(o, N, y, k.useMaxWidth), o.attr("viewBox", `${x.x - g} ${x.y - g} ${y} ${N}`);
};
var oe = "28e9f9db-3c8d-5aa5-9faf-44286ae5937c";
function le(t = "", e = "") {
  const r = t.replace($t, "");
  return `${ht(e)}${ht(r)}${Jt(
    t,
    oe
  )}`;
}
function ht(t = "") {
  return t.length > 0 ? `${t}-` : "";
}
var ce = {
  setConf: te,
  draw: se
};
var he = (t) => `
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`;
var de = he;
var Ee = {
  parser: It,
  db: Zt,
  renderer: ce,
  styles: de
};
export {
  Ee as diagram
};
//# sourceMappingURL=erDiagram-a329e5de-LZQN3UGU.js.map