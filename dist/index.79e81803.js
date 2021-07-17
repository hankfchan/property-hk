// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"mUwFC":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "ca65a27e79e81803"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets /*: {|[string]: boolean|} */ , acceptedAssets /*: {|[string]: boolean|} */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event /*: {data: string, ...} */ ) {
        checkedAssets = {
        } /*: {|[string]: boolean|} */ ;
        acceptedAssets = {
        } /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        if (process.env.PARCEL_BUILD_ENV !== 'test') console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["mUwFC"], null, "parcelRequiree334")
!function(e) {
    var t = {
    };
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {
            }
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    n.m = e, n.c = t, n.d = function(e1, t1, r) {
        n.o(e1, t1) || Object.defineProperty(e1, t1, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e1) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e1, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e1, "__esModule", {
            value: !0
        });
    }, n.t = function(e1, t1) {
        if (1 & t1 && (e1 = n(e1)), 8 & t1) return e1;
        if (4 & t1 && "object" == typeof e1 && e1 && e1.__esModule) return e1;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e1
        }), 2 & t1 && "string" != typeof e1) for(var a in e1)n.d(r, a, (function(t2) {
            return e1[t2];
        }).bind(null, a));
        return r;
    }, n.n = function(e1) {
        var t1 = e1 && e1.__esModule ? function() {
            return e1.default;
        } : function() {
            return e1;
        };
        return n.d(t1, "a", t1), t1;
    }, n.o = function(e1, t1) {
        return Object.prototype.hasOwnProperty.call(e1, t1);
    }, n.p = "/", n(n.s = 2);
}([
    ,
    ,
    function(e, t, n) {
        e.exports = n(3);
    },
    function(e, t, n) {
        "use strict";
        function r(e1, t1) {
            for(var n1 = 0; n1 < t1.length; n1++){
                var r1 = t1[n1];
                r1.enumerable = r1.enumerable || !1, r1.configurable = !0, "value" in r1 && (r1.writable = !0), Object.defineProperty(e1, r1.key, r1);
            }
        }
        n.r(t);
        new (function() {
            function e1() {
                !function(e2, t1) {
                    if (!(e2 instanceof t1)) throw new TypeError("Cannot call a class as a function");
                }(this, e1), this.registerEventListeners();
            }
            var t1, n1, a;
            return t1 = e1, n1 = [
                {
                    key: "registerEventListeners",
                    value: function() {
                        var e2 = this, t2 = document.querySelectorAll(".purecounter");
                        if (this.intersectionListenerSupported()) for(var n2 = new IntersectionObserver(this.animateElements.bind(this), {
                            root: null,
                            rootMargin: "20px",
                            threshold: 0.5
                        }), r2 = 0; r2 < t2.length; r2++)n2.observe(t2[r2]);
                        else window.addEventListener && (this.animateLegacy(t2), window.addEventListener("scroll", function(n3) {
                            e2.animateLegacy(t2);
                        }, {
                            passive: !0
                        }));
                    }
                },
                {
                    key: "animateLegacy",
                    value: function(e2) {
                        for(var t2 = 0; t2 < e2.length; t2++)!0 === this.parseConfig(e2[t2]).legacy && this.elementIsInView(e2[t2]) && this.animateElements([
                            e2[t2]
                        ]);
                    }
                },
                {
                    key: "animateElements",
                    value: function(e2, t2) {
                        var n2 = this;
                        e2.forEach(function(e3) {
                            var r2 = (void 0) !== e3.target ? n2.parseConfig(e3.target) : n2.parseConfig(e3);
                            return r2.duration <= 0 ? e3.innerHTML = r2.end.toFixed(r2.decimals) : !t2 && !n2.elementIsInView(e3) || t2 && e3.intersectionRatio < 0.5 ? e3.target.innerHTML = r2.start > r2.end ? r2.end : r2.start : void setTimeout(function() {
                                return (void 0) !== e3.target ? n2.startCounter(e3.target, r2) : n2.startCounter(e3, r2);
                            }, r2.delay);
                        });
                    }
                },
                {
                    key: "startCounter",
                    value: function(e2, t2) {
                        var n2 = this, r2 = (t2.end - t2.start) / (t2.duration / t2.delay), a1 = "inc";
                        t2.start > t2.end && (a1 = "dec", r2 *= -1), r2 < 1 && t2.decimals <= 0 && (r2 = 1);
                        var i = t2.decimals <= 0 ? parseInt(t2.start) : parseFloat(t2.start).toFixed(t2.decimals);
                        e2.innerHTML = i, !0 === t2.once && e2.setAttribute("data-purecounter-duration", 0);
                        var o = setInterval(function() {
                            var s = n2.nextNumber(i, r2, t2, a1);
                            e2.innerHTML = n2.formatNumber(s, t2), ((i = s) >= t2.end && "inc" == a1 || i <= t2.end && "dec" == a1) && (clearInterval(o), i != t2.end && (e2.innerHTML = t2.decimals <= 0 ? parseInt(t2.end) : parseFloat(t2.end).toFixed(t2.decimals)));
                        }, t2.delay);
                    }
                },
                {
                    key: "parseConfig",
                    value: function(e2) {
                        for(var t2 = [].filter.call(e2.attributes, function(e3) {
                            return /^data-purecounter-/.test(e3.name);
                        }), n2 = {
                            start: 0,
                            end: 9001,
                            duration: 2000,
                            delay: 10,
                            once: !0,
                            decimals: 0,
                            legacy: !0
                        }, r2 = 0; r2 < t2.length; r2++){
                            var a1 = t2[r2].name.replace("data-purecounter-", "");
                            n2[a1.toLowerCase()] = "duration" == a1.toLowerCase() ? parseInt(1000 * this.castDataType(t2[r2].value)) : this.castDataType(t2[r2].value);
                        }
                        return n2;
                    }
                },
                {
                    key: "nextNumber",
                    value: function(e2, t2, n2, r2) {
                        return r2 || (r2 = "inc"), "inc" === r2 ? n2.decimals <= 0 ? parseInt(e2) + parseInt(t2) : parseFloat(e2) + parseFloat(t2) : n2.decimals <= 0 ? parseInt(e2) - parseInt(t2) : parseFloat(e2) - parseFloat(t2);
                    }
                },
                {
                    key: "formatNumber",
                    value: function(e2, t2) {
                        return t2.decimals <= 0 ? parseInt(e2) : e2.toLocaleString(void 0, {
                            minimumFractionDigits: t2.decimals,
                            maximumFractionDigits: t2.decimals
                        });
                    }
                },
                {
                    key: "castDataType",
                    value: function(e2) {
                        return /^[0-9]+\.[0-9]+$/.test(e2) ? parseFloat(e2) : /^[0-9]+$/.test(e2) ? parseInt(e2) : e2;
                    }
                },
                {
                    key: "elementIsInView",
                    value: function(e2) {
                        for(var t2 = e2.offsetTop, n2 = e2.offsetLeft, r2 = e2.offsetWidth, a2 = e2.offsetHeight; e2.offsetParent;)t2 += (e2 = e2.offsetParent).offsetTop, n2 += e2.offsetLeft;
                        return t2 >= window.pageYOffset && n2 >= window.pageXOffset && t2 + a2 <= window.pageYOffset + window.innerHeight && n2 + r2 <= window.pageXOffset + window.innerWidth;
                    }
                },
                {
                    key: "intersectionListenerSupported",
                    value: function() {
                        return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
                    }
                }
            ], r(t1.prototype, n1), a && r(t1, a), e1;
        }());
    }
]);

//# sourceMappingURL=index.79e81803.js.map
