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
})({"assets/vendor/purecounter/purecounter.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      n.d(r, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/", n(n.s = 2);
}([,, function (e, t, n) {
  e.exports = n(3);
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  n.r(t);
  new (function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.registerEventListeners();
    }

    var t, n, a;
    return t = e, (n = [{
      key: "registerEventListeners",
      value: function value() {
        var e = this,
            t = document.querySelectorAll(".purecounter");
        if (this.intersectionListenerSupported()) for (var n = new IntersectionObserver(this.animateElements.bind(this), {
          root: null,
          rootMargin: "20px",
          threshold: .5
        }), r = 0; r < t.length; r++) {
          n.observe(t[r]);
        } else window.addEventListener && (this.animateLegacy(t), window.addEventListener("scroll", function (n) {
          e.animateLegacy(t);
        }, {
          passive: !0
        }));
      }
    }, {
      key: "animateLegacy",
      value: function value(e) {
        for (var t = 0; t < e.length; t++) {
          !0 === this.parseConfig(e[t]).legacy && this.elementIsInView(e[t]) && this.animateElements([e[t]]);
        }
      }
    }, {
      key: "animateElements",
      value: function value(e, t) {
        var n = this;
        e.forEach(function (e) {
          var r = void 0 !== e.target ? n.parseConfig(e.target) : n.parseConfig(e);
          return r.duration <= 0 ? e.innerHTML = r.end.toFixed(r.decimals) : !t && !n.elementIsInView(e) || t && e.intersectionRatio < .5 ? e.target.innerHTML = r.start > r.end ? r.end : r.start : void setTimeout(function () {
            return void 0 !== e.target ? n.startCounter(e.target, r) : n.startCounter(e, r);
          }, r.delay);
        });
      }
    }, {
      key: "startCounter",
      value: function value(e, t) {
        var n = this,
            r = (t.end - t.start) / (t.duration / t.delay),
            a = "inc";
        t.start > t.end && (a = "dec", r *= -1), r < 1 && t.decimals <= 0 && (r = 1);
        var i = t.decimals <= 0 ? parseInt(t.start) : parseFloat(t.start).toFixed(t.decimals);
        e.innerHTML = i, !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
        var o = setInterval(function () {
          var s = n.nextNumber(i, r, t, a);
          e.innerHTML = n.formatNumber(s, t), ((i = s) >= t.end && "inc" == a || i <= t.end && "dec" == a) && (clearInterval(o), i != t.end && (e.innerHTML = t.decimals <= 0 ? parseInt(t.end) : parseFloat(t.end).toFixed(t.decimals)));
        }, t.delay);
      }
    }, {
      key: "parseConfig",
      value: function value(e) {
        for (var t = [].filter.call(e.attributes, function (e) {
          return /^data-purecounter-/.test(e.name);
        }), n = {
          start: 0,
          end: 9001,
          duration: 2e3,
          delay: 10,
          once: !0,
          decimals: 0,
          legacy: !0
        }, r = 0; r < t.length; r++) {
          var a = t[r].name.replace("data-purecounter-", "");
          n[a.toLowerCase()] = "duration" == a.toLowerCase() ? parseInt(1e3 * this.castDataType(t[r].value)) : this.castDataType(t[r].value);
        }

        return n;
      }
    }, {
      key: "nextNumber",
      value: function value(e, t, n, r) {
        return r || (r = "inc"), "inc" === r ? n.decimals <= 0 ? parseInt(e) + parseInt(t) : parseFloat(e) + parseFloat(t) : n.decimals <= 0 ? parseInt(e) - parseInt(t) : parseFloat(e) - parseFloat(t);
      }
    }, {
      key: "formatNumber",
      value: function value(e, t) {
        return t.decimals <= 0 ? parseInt(e) : e.toLocaleString(void 0, {
          minimumFractionDigits: t.decimals,
          maximumFractionDigits: t.decimals
        });
      }
    }, {
      key: "castDataType",
      value: function value(e) {
        return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : e;
      }
    }, {
      key: "elementIsInView",
      value: function value(e) {
        for (var t = e.offsetTop, n = e.offsetLeft, r = e.offsetWidth, a = e.offsetHeight; e.offsetParent;) {
          t += (e = e.offsetParent).offsetTop, n += e.offsetLeft;
        }

        return t >= window.pageYOffset && n >= window.pageXOffset && t + a <= window.pageYOffset + window.innerHeight && n + r <= window.pageXOffset + window.innerWidth;
      }
    }, {
      key: "intersectionListenerSupported",
      value: function value() {
        return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
      }
    }]) && r(t.prototype, n), a && r(t, a), e;
  }())();
}]);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51621" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/vendor/purecounter/purecounter.js"], null)
//# sourceMappingURL=/purecounter.83a35c11.js.map