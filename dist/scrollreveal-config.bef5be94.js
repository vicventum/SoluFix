// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"app/vendor/scrollreveal/scrollreveal.min.js":[function(require,module,exports) {
"use strict";

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal = function () {
  "use strict";

  var r = {
    delay: 0,
    distance: "0",
    duration: 600,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 0,
    opacity: 0,
    origin: "bottom",
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: 1,
    cleanup: !1,
    container: document.documentElement,
    desktop: !0,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
  };
  var n = {
    success: function success() {
      document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function () {
        document.body.style.height = "100%";
      });
    },
    failure: function failure() {
      return document.documentElement.classList.remove("sr"), {
        clean: function clean() {},
        destroy: function destroy() {},
        reveal: function reveal() {},
        sync: function sync() {},

        get noop() {
          return !0;
        }

      };
    }
  };

  function o(e) {
    return "object" == (0, _typeof2.default)(window.Node) ? e instanceof window.Node : null !== e && "object" == (0, _typeof2.default)(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
  }

  function u(e, t) {
    if (void 0 === t && (t = document), e instanceof Array) return e.filter(o);
    if (o(e)) return [e];
    if (n = e, i = Object.prototype.toString.call(n), "object" == (0, _typeof2.default)(window.NodeList) ? n instanceof window.NodeList : null !== n && "object" == (0, _typeof2.default)(n) && "number" == typeof n.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(i) && (0 === n.length || o(n[0]))) return Array.prototype.slice.call(e);
    var n, i;
    if ("string" == typeof e) try {
      var r = t.querySelectorAll(e);
      return Array.prototype.slice.call(r);
    } catch (e) {
      return [];
    }
    return [];
  }

  function s(e) {
    return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e));
  }

  function f(n, i) {
    if (s(n)) return Object.keys(n).forEach(function (e) {
      return i(n[e], e, n);
    });
    if (n instanceof Array) return n.forEach(function (e, t) {
      return i(e, t, n);
    });
    throw new TypeError("Expected either an array or object literal.");
  }

  function h(e) {
    for (var t = [], n = arguments.length - 1; 0 < n--;) {
      t[n] = arguments[n + 1];
    }

    if (this.constructor.debug && console) {
      var i = "%cScrollReveal: " + e;
      t.forEach(function (e) {
        return i += "\n — " + e;
      }), console.log(i, "color: #ea654b;");
    }
  }

  function t() {
    var n = this,
        i = {
      active: [],
      stale: []
    },
        t = {
      active: [],
      stale: []
    },
        r = {
      active: [],
      stale: []
    };

    try {
      f(u("[data-sr-id]"), function (e) {
        var t = parseInt(e.getAttribute("data-sr-id"));
        i.active.push(t);
      });
    } catch (e) {
      throw e;
    }

    f(this.store.elements, function (e) {
      -1 === i.active.indexOf(e.id) && i.stale.push(e.id);
    }), f(i.stale, function (e) {
      return delete n.store.elements[e];
    }), f(this.store.elements, function (e) {
      -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === t.active.indexOf(e.sequence.id) && t.active.push(e.sequence.id);
    }), f(this.store.containers, function (e) {
      -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
    }), f(r.stale, function (e) {
      var t = n.store.containers[e].node;
      t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate), delete n.store.containers[e];
    }), f(this.store.sequences, function (e) {
      -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
    }), f(t.stale, function (e) {
      return delete n.store.sequences[e];
    });
  }

  function N(e) {
    if (e.constructor !== Array) throw new TypeError("Expected array.");
    if (16 === e.length) return e;
    if (6 !== e.length) throw new RangeError("Expected array with either 6 or 16 values.");
    var t = z();
    return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t;
  }

  function z() {
    for (var e = [], t = 0; t < 16; t++) {
      t % 5 == 0 ? e.push(1) : e.push(0);
    }

    return e;
  }

  function F(e, t) {
    for (var n = N(e), i = N(t), r = [], o = 0; o < 4; o++) {
      for (var s = [n[o], n[o + 4], n[o + 8], n[o + 12]], a = 0; a < 4; a++) {
        var c = 4 * a,
            l = [i[c], i[c + 1], i[c + 2], i[c + 3]],
            d = s[0] * l[0] + s[1] * l[1] + s[2] * l[2] + s[3] * l[3];
        r[o + c] = d;
      }
    }

    return r;
  }

  function D(e, t) {
    var n = z();
    return n[0] = e, n[5] = "number" == typeof t ? t : e, n;
  }

  var S = function () {
    var n = {},
        i = document.documentElement.style;

    function e(e, t) {
      if (void 0 === t && (t = i), e && "string" == typeof e) {
        if (n[e]) return n[e];
        if ("string" == typeof t[e]) return n[e] = e;
        if ("string" == typeof t["-webkit-" + e]) return n[e] = "-webkit-" + e;
        throw new RangeError('Unable to find "' + e + '" style property.');
      }

      throw new TypeError("Expected a string.");
    }

    return e.clearCache = function () {
      return n = {};
    }, e;
  }();

  function p(e) {
    var t = window.getComputedStyle(e.node),
        n = t.position,
        i = e.config,
        r = {},
        o = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    r.computed = o ? o.map(function (e) {
      return e.trim();
    }).join("; ") + ";" : "", r.generated = o.some(function (e) {
      return e.match(/visibility\s?:\s?visible/i);
    }) ? r.computed : o.concat(["visibility: visible"]).map(function (e) {
      return e.trim();
    }).join("; ") + ";";
    var s,
        a,
        c,
        l,
        d,
        u,
        f,
        h,
        p,
        m,
        y,
        v,
        g,
        b = parseFloat(t.opacity),
        w = isNaN(parseFloat(i.opacity)) ? parseFloat(t.opacity) : parseFloat(i.opacity),
        E = {
      computed: b !== w ? "opacity: " + b + ";" : "",
      generated: b !== w ? "opacity: " + w + ";" : ""
    },
        j = [];

    if (parseFloat(i.distance)) {
      var T = "top" === i.origin || "bottom" === i.origin ? "Y" : "X",
          k = i.distance;
      "top" !== i.origin && "left" !== i.origin || (k = /^-/.test(k) ? k.substr(1) : "-" + k);
      var O = k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
          x = O[0];

      switch (O[1]) {
        case "em":
          k = parseInt(t.fontSize) * x;
          break;

        case "px":
          k = x;
          break;

        case "%":
          k = "Y" === T ? e.node.getBoundingClientRect().height * x / 100 : e.node.getBoundingClientRect().width * x / 100;
          break;

        default:
          throw new RangeError("Unrecognized or missing distance unit.");
      }

      "Y" === T ? j.push((c = k, (l = z())[13] = c, l)) : j.push((s = k, (a = z())[12] = s, a));
    }

    i.rotate.x && j.push((d = i.rotate.x, u = Math.PI / 180 * d, (f = z())[5] = f[10] = Math.cos(u), f[6] = f[9] = Math.sin(u), f[9] *= -1, f)), i.rotate.y && j.push((h = i.rotate.y, p = Math.PI / 180 * h, (m = z())[0] = m[10] = Math.cos(p), m[2] = m[8] = Math.sin(p), m[2] *= -1, m)), i.rotate.z && j.push((y = i.rotate.z, v = Math.PI / 180 * y, (g = z())[0] = g[5] = Math.cos(v), g[1] = g[4] = Math.sin(v), g[4] *= -1, g)), 1 !== i.scale && (0 === i.scale ? j.push(D(2e-4)) : j.push(D(i.scale)));
    var R = {};

    if (j.length) {
      R.property = S("transform"), R.computed = {
        raw: t[R.property],
        matrix: function (e) {
          if ("string" == typeof e) {
            var t = e.match(/matrix(3d)?\(([^)]+)\)/);
            if (t) return N(t[2].split(", ").map(parseFloat));
          }

          return z();
        }(t[R.property])
      }, j.unshift(R.computed.matrix);
      var q = j.reduce(F);
      R.generated = {
        initial: R.property + ": matrix3d(" + q.join(", ") + ");",
        final: R.property + ": matrix3d(" + R.computed.matrix.join(", ") + ");"
      };
    } else R.generated = {
      initial: "",
      final: ""
    };

    var A = {};

    if (E.generated || R.generated.initial) {
      A.property = S("transition"), A.computed = t[A.property], A.fragments = [];
      var P = i.delay,
          L = i.duration,
          M = i.easing;
      E.generated && A.fragments.push({
        delayed: "opacity " + L / 1e3 + "s " + M + " " + P / 1e3 + "s",
        instant: "opacity " + L / 1e3 + "s " + M + " 0s"
      }), R.generated.initial && A.fragments.push({
        delayed: R.property + " " + L / 1e3 + "s " + M + " " + P / 1e3 + "s",
        instant: R.property + " " + L / 1e3 + "s " + M + " 0s"
      }), A.computed && !A.computed.match(/all 0s|none 0s/) && A.fragments.unshift({
        delayed: A.computed,
        instant: A.computed
      });
      var I = A.fragments.reduce(function (e, t, n) {
        return e.delayed += 0 === n ? t.delayed : ", " + t.delayed, e.instant += 0 === n ? t.instant : ", " + t.instant, e;
      }, {
        delayed: "",
        instant: ""
      });
      A.generated = {
        delayed: A.property + ": " + I.delayed + ";",
        instant: A.property + ": " + I.instant + ";"
      };
    } else A.generated = {
      delayed: "",
      instant: ""
    };

    return {
      inline: r,
      opacity: E,
      position: n,
      transform: R,
      transition: A
    };
  }

  function m(r, e) {
    e.split(";").forEach(function (e) {
      var t = e.split(":"),
          n = t[0],
          i = t.slice(1);
      n && i && (r.style[n.trim()] = i.join(":"));
    });
  }

  function y(e) {
    var i,
        r = this;

    try {
      f(u(e), function (e) {
        var t = e.getAttribute("data-sr-id");

        if (null !== t) {
          i = !0;
          var n = r.store.elements[t];
          n.callbackTimer && window.clearTimeout(n.callbackTimer.clock), m(n.node, n.styles.inline.generated), e.removeAttribute("data-sr-id"), delete r.store.elements[t];
        }
      });
    } catch (e) {
      return h.call(this, "Clean failed.", e.message);
    }

    if (i) try {
      t.call(this);
    } catch (e) {
      return h.call(this, "Clean failed.", e.message);
    }
  }

  function v(n) {
    for (var e = [], t = arguments.length - 1; 0 < t--;) {
      e[t] = arguments[t + 1];
    }

    if (s(n)) return f(e, function (e) {
      f(e, function (e, t) {
        s(e) ? (n[t] && s(n[t]) || (n[t] = {}), v(n[t], e)) : n[t] = e;
      });
    }), n;
    throw new TypeError("Target must be an object literal.");
  }

  function g(e) {
    return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
  }

  var e,
      b = (e = 0, function () {
    return e++;
  });

  function w() {
    var n = this;
    t.call(this), f(this.store.elements, function (e) {
      var t = [e.styles.inline.generated];
      e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), e.revealed = !0) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), e.revealed = !1), m(e.node, t.filter(function (e) {
        return "" !== e;
      }).join(" "));
    }), f(this.store.containers, function (e) {
      var t = e.node === document.documentElement ? window : e.node;
      t.addEventListener("scroll", n.delegate), t.addEventListener("resize", n.delegate);
    }), this.delegate(), this.initTimeout = null;
  }

  function c(e, t) {
    void 0 === t && (t = {});
    var n = t.pristine || this.pristine,
        i = "always" === e.config.useDelay || "onload" === e.config.useDelay && n || "once" === e.config.useDelay && !e.seen,
        r = e.visible && !e.revealed,
        o = !e.visible && e.revealed && e.config.reset;
    return t.reveal || r ? function (e, t) {
      var n = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
      t ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant);
      e.revealed = e.seen = !0, m(e.node, n.filter(function (e) {
        return "" !== e;
      }).join(" ")), a.call(this, e, t);
    }.call(this, e, i) : t.reset || o ? function (e) {
      var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
      e.revealed = !1, m(e.node, t.filter(function (e) {
        return "" !== e;
      }).join(" ")), a.call(this, e);
    }.call(this, e) : void 0;
  }

  function a(e, t) {
    var n = this,
        i = t ? e.config.duration + e.config.delay : e.config.duration,
        r = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
        o = e.revealed ? e.config.afterReveal : e.config.afterReset,
        s = 0;
    e.callbackTimer && (s = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), r(e.node), e.callbackTimer = {
      start: Date.now(),
      clock: window.setTimeout(function () {
        o(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && y.call(n, e.node);
      }, i - s)
    };
  }

  function l(e, t) {
    if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return c.call(this, e, {
      reset: !0
    });
    var n = this.store.sequences[e.sequence.id],
        i = e.sequence.index;

    if (n) {
      var r = new d(n, "visible", this.store),
          o = new d(n, "revealed", this.store);

      if (n.models = {
        visible: r,
        revealed: o
      }, !o.body.length) {
        var s = n.members[r.body[0]],
            a = this.store.elements[s];
        if (a) return j.call(this, n, r.body[0], -1, t), j.call(this, n, r.body[0], 1, t), c.call(this, a, {
          reveal: !0,
          pristine: t
        });
      }

      if (!n.blocked.head && i === [].concat(o.head).pop() && i >= [].concat(r.body).shift()) return j.call(this, n, i, -1, t), c.call(this, e, {
        reveal: !0,
        pristine: t
      });
      if (!n.blocked.foot && i === [].concat(o.foot).shift() && i <= [].concat(r.body).pop()) return j.call(this, n, i, 1, t), c.call(this, e, {
        reveal: !0,
        pristine: t
      });
    }
  }

  function E(e) {
    var t = Math.abs(e);
    if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
    this.id = b(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = {
      head: !1,
      foot: !1
    };
  }

  function d(e, i, r) {
    var o = this;
    this.head = [], this.body = [], this.foot = [], f(e.members, function (e, t) {
      var n = r.elements[e];
      n && n[i] && o.body.push(t);
    }), this.body.length && f(e.members, function (e, t) {
      var n = r.elements[e];
      n && !n[i] && (t < o.body[0] ? o.head.push(t) : o.foot.push(t));
    });
  }

  function j(e, t, n, i) {
    var r = this,
        o = ["head", null, "foot"][1 + n],
        s = e.members[t + n],
        a = this.store.elements[s];
    e.blocked[o] = !0, setTimeout(function () {
      e.blocked[o] = !1, a && l.call(r, a, i);
    }, e.interval);
  }

  function i(e, a, t) {
    var c = this;
    void 0 === a && (a = {}), void 0 === t && (t = !1);
    var l,
        d = [],
        n = a.interval || r.interval;

    try {
      n && (l = new E(n));
      var i = u(e);
      if (!i.length) throw new Error("Invalid reveal target.");
      f(i.reduce(function (e, t) {
        var n = {},
            i = t.getAttribute("data-sr-id");
        i ? (v(n, c.store.elements[i]), m(n.node, n.styles.inline.computed)) : (n.id = b(), n.node = t, n.seen = !1, n.revealed = !1, n.visible = !1);
        var r = v({}, n.config || c.defaults, a);
        if (!r.mobile && g() || !r.desktop && !g()) return i && y.call(c, n), e;
        var o,
            s = u(r.container)[0];
        if (!s) throw new Error("Invalid container.");
        return s.contains(t) && (null === (o = function (t) {
          var e = [],
              n = arguments.length - 1;

          for (; 0 < n--;) {
            e[n] = arguments[n + 1];
          }

          var i = null;
          return f(e, function (e) {
            f(e, function (e) {
              null === i && e.node === t && (i = e.id);
            });
          }), i;
        }(s, d, c.store.containers)) && (o = b(), d.push({
          id: o,
          node: s
        })), n.config = r, n.containerId = o, n.styles = p(n), l && (n.sequence = {
          id: l.id,
          index: l.members.length
        }, l.members.push(n.id)), e.push(n)), e;
      }, []), function (e) {
        (c.store.elements[e.id] = e).node.setAttribute("data-sr-id", e.id);
      });
    } catch (e) {
      return h.call(this, "Reveal failed.", e.message);
    }

    f(d, function (e) {
      c.store.containers[e.id] = {
        id: e.id,
        node: e.node
      };
    }), l && (this.store.sequences[l.id] = l), !0 !== t && (this.store.history.push({
      target: e,
      options: a
    }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(w.bind(this), 0));
  }

  var T,
      k = Math.sign || function (e) {
    return (0 < e) - (e < 0) || +e;
  },
      O = (T = Date.now(), function (e) {
    var t = Date.now();
    16 < t - T ? e(T = t) : setTimeout(function () {
      return O(e);
    }, 0);
  }),
      x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || O;

  function R(e, t) {
    for (var n = t ? e.node.clientHeight : e.node.offsetHeight, i = t ? e.node.clientWidth : e.node.offsetWidth, r = 0, o = 0, s = e.node; isNaN(s.offsetTop) || (r += s.offsetTop), isNaN(s.offsetLeft) || (o += s.offsetLeft), s = s.offsetParent;) {
      ;
    }

    return {
      bounds: {
        top: r,
        right: o + i,
        bottom: r + n,
        left: o
      },
      height: n,
      width: i
    };
  }

  function q(e, t) {
    var i = this;
    void 0 === e && (e = {
      type: "init"
    }), void 0 === t && (t = this.store.elements), x(function () {
      var n = "init" === e.type || "resize" === e.type;
      f(i.store.containers, function (e) {
        n && (e.geometry = R.call(i, e, !0));

        var t = function (e) {
          var t, n;
          return n = e.node === document.documentElement ? (t = window.pageYOffset, window.pageXOffset) : (t = e.node.scrollTop, e.node.scrollLeft), {
            top: t,
            left: n
          };
        }.call(i, e);

        e.scroll && (e.direction = {
          x: k(t.left - e.scroll.left),
          y: k(t.top - e.scroll.top)
        }), e.scroll = t;
      }), f(t, function (e) {
        (n || void 0 === e.geometry) && (e.geometry = R.call(i, e)), e.visible = function (e) {
          void 0 === e && (e = {});
          var t = this.store.containers[e.containerId];

          if (t) {
            var n = Math.max(0, Math.min(1, e.config.viewFactor)),
                i = e.config.viewOffset,
                r = e.geometry.bounds.top + e.geometry.height * n,
                o = e.geometry.bounds.right - e.geometry.width * n,
                s = e.geometry.bounds.bottom - e.geometry.height * n,
                a = e.geometry.bounds.left + e.geometry.width * n,
                c = t.geometry.bounds.top + t.scroll.top + i.top,
                l = t.geometry.bounds.right + t.scroll.left - i.right,
                d = t.geometry.bounds.bottom + t.scroll.top - i.bottom,
                u = t.geometry.bounds.left + t.scroll.left + i.left;
            return r < d && u < o && c < s && a < l || "fixed" === e.styles.position;
          }
        }.call(i, e);
      }), f(t, function (e) {
        e.sequence ? l.call(i, e) : c.call(i, e);
      }), i.pristine = !1;
    });
  }

  var A,
      P,
      L,
      M,
      I,
      C,
      W,
      Y,
      $ = "4.0.9";

  function H(e) {
    var t;
    if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== H.prototype) return new H(e);
    if (!H.isSupported()) return h.call(this, "Instantiation failed.", "This browser is not supported."), n.failure();

    try {
      t = v({}, C || r, e);
    } catch (e) {
      return h.call(this, "Invalid configuration.", e.message), n.failure();
    }

    try {
      if (!u(t.container)[0]) throw new Error("Invalid container.");
    } catch (e) {
      return h.call(this, e.message), n.failure();
    }

    return !(C = t).mobile && g() || !C.desktop && !g() ? (h.call(this, "This device is disabled.", "desktop: " + C.desktop, "mobile: " + C.mobile), n.failure()) : (n.success(), this.store = {
      containers: {},
      elements: {},
      history: [],
      sequences: {}
    }, this.pristine = !0, A = A || q.bind(this), P = P || function () {
      var n = this;
      f(this.store.elements, function (e) {
        m(e.node, e.styles.inline.generated), e.node.removeAttribute("data-sr-id");
      }), f(this.store.containers, function (e) {
        var t = e.node === document.documentElement ? window : e.node;
        t.removeEventListener("scroll", n.delegate), t.removeEventListener("resize", n.delegate);
      }), this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
      };
    }.bind(this), L = L || i.bind(this), M = M || y.bind(this), I = I || function () {
      var t = this;
      f(this.store.history, function (e) {
        i.call(t, e.target, e.options, !0);
      }), w.call(this);
    }.bind(this), Object.defineProperty(this, "delegate", {
      get: function get() {
        return A;
      }
    }), Object.defineProperty(this, "destroy", {
      get: function get() {
        return P;
      }
    }), Object.defineProperty(this, "reveal", {
      get: function get() {
        return L;
      }
    }), Object.defineProperty(this, "clean", {
      get: function get() {
        return M;
      }
    }), Object.defineProperty(this, "sync", {
      get: function get() {
        return I;
      }
    }), Object.defineProperty(this, "defaults", {
      get: function get() {
        return C;
      }
    }), Object.defineProperty(this, "version", {
      get: function get() {
        return $;
      }
    }), Object.defineProperty(this, "noop", {
      get: function get() {
        return !1;
      }
    }), Y || (Y = this));
  }

  return H.isSupported = function () {
    return ("transform" in (t = document.documentElement.style) || "WebkitTransform" in t) && ("transition" in (e = document.documentElement.style) || "WebkitTransition" in e);
    var e, t;
  }, Object.defineProperty(H, "debug", {
    get: function get() {
      return W || !1;
    },
    set: function set(e) {
      return W = "boolean" == typeof e ? e : W;
    }
  }), H(), H;
}();
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js"}],"app/js/scrollreveal-config.js":[function(require,module,exports) {
"use strict";

var _scrollreveal = require("../vendor/scrollreveal/scrollreveal.min");

var sr = (0, _scrollreveal.ScrollReveal)();
sr.reveal('h1');
},{"../vendor/scrollreveal/scrollreveal.min":"app/vendor/scrollreveal/scrollreveal.min.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49727" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/js/scrollreveal-config.js"], null)
//# sourceMappingURL=/scrollreveal-config.bef5be94.js.map