// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bVViz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "ae8d76df5380a4a9";
module.bundle.HMR_BUNDLE_ID = "da23b8d7cb66ed5f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"5cqIW":[function(require,module,exports) {
var _indexJs = require("./component_build/index.js");

},{"./component_build/index.js":"1d2BW"}],"1d2BW":[function(require,module,exports) {
(()=>{
    var p = Object.create;
    var c = Object.defineProperty;
    var f = Object.getOwnPropertyDescriptor;
    var g = Object.getOwnPropertyNames;
    var b = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty;
    var y = (e, t)=>()=>(t || e((t = {
                exports: {}
            }).exports, t), t.exports);
    var v = (e, t, a, s)=>{
        if (t && typeof t == "object" || typeof t == "function") for (let i of g(t))!w.call(e, i) && i !== a && c(e, i, {
            get: ()=>t[i],
            enumerable: !(s = f(t, i)) || s.enumerable
        });
        return e;
    };
    var _ = (e, t, a)=>(a = e != null ? p(b(e)) : {}, v(t || !e || !e.__esModule ? c(a, "default", {
            value: e,
            enumerable: !0
        }) : a, e));
    var h = y((u)=>{
        u.get = function() {};
    });
    Cake.create("alert", null, {
        handlers: {},
        subscribe: {
            error: {
                components: [
                    "api",
                    "view_project",
                    "login",
                    "radio",
                    "sidebar",
                    "form"
                ],
                handler (e) {
                    return swal.fire({
                        title: "Error",
                        icon: "error",
                        text: e || "something went wrong"
                    });
                }
            },
            success: {
                components: [
                    "api",
                    "view_project",
                    "login",
                    "radio",
                    "sidebar",
                    "form"
                ],
                handler (e) {
                    return this.utils.isDesktop() ? swal.fire({
                        title: "Success",
                        icon: "success",
                        text: e || "success"
                    }) : new Promise((t, a)=>{
                        navigator.notification.alert(e, function() {
                            t();
                        }, "Success", "ok");
                    });
                }
            },
            question: {
                components: [
                    "api",
                    "view_project",
                    "login",
                    "radio",
                    "sidebar",
                    "form"
                ],
                handler (e) {
                    return swal.fire({
                        title: "Question",
                        icon: "question",
                        text: e || "Are you sure?",
                        showCancelButton: !0
                    });
                }
            },
            warning: {
                components: [
                    "api",
                    "login",
                    "radio",
                    "sidebar",
                    "form"
                ],
                handler (e) {
                    return swal.fire({
                        title: "Warning",
                        icon: "warning",
                        text: e || "warning alert"
                    });
                }
            }
        }
    });
    var m = _(h());
    Cake.create("login", "#login", {
        root: "#app",
        data () {
            this.superadmin = {
                username: "superadmin",
                password: "123456",
                role: "superadmin"
            };
        },
        handlers: {
            async destroy () {
                await this.reset();
            },
            async submit (e) {
                let t = this.utils.toFormData(e.target, {
                    json: !0
                }), { username: a , password: s  } = t;
                await this.fire("spin", "login");
                try {
                    let i = await m.default.get({
                        username: a
                    });
                    if (i && i.length) {
                        if (this.fire("spinout", "login"), i[0].status != "active") {
                            this.fire("error", "account is inactive");
                            return;
                        }
                        let r = this;
                        i[0].password == s ? (await this.fire("success", "login successful"), await this.$router.login({
                            token: moment().format(),
                            role: i[0].role,
                            data: i[0]
                        })) : this.fire("error", "wrong password");
                    } else this.fire("spinout", "login"), this.fire("error", "user not found");
                } catch (i1) {
                    this.fire("spinout", "login"), this.fire("error", i1.message);
                }
            }
        },
        subscribe: {}
    });
    Cake.create("modal", "#modal", {
        root: "#app",
        handlers: {
            async destroy () {
                await this.reset();
            },
            isConnected (e) {
                let { emit: { has_footer: t  }  } = e, a = this;
                this.data.modal = new bootstrap.Modal(this.container.modal, {}), this.data.modal.show(), this.container.modal.addEventListener("hidden.bs.modal", (s)=>{
                    a.fire.destroy();
                }), t != null && this.$scope.set("has_footer", t);
            }
        },
        subscribe: {
            toolbar: {
                add () {
                    let e = "add-form";
                    this.render({
                        data: {
                            form: e,
                            display: "Add Record"
                        }
                    }).then(()=>{
                        this.fire("openForm", {
                            form: e
                        });
                    });
                }
            },
            radio: {
                editRecord (e) {
                    let t = "edit-form";
                    this.render({
                        data: {
                            form: t,
                            display: "Edit Record"
                        }
                    }).then(()=>{
                        this.fire("openForm", {
                            form: t,
                            data: e
                        });
                    });
                },
                viewRecord (e) {
                    this.render({
                        data: {
                            form: "",
                            display: "View"
                        },
                        emit: {
                            has_footer: !1
                        }
                    }).then(()=>{
                        this.$router.name == "project" ? e && e.id && this.fire("openProjectView", e.id) : this.$router.name == "user" && e && e.id && this.fire("openUserView", e.id);
                    });
                }
            },
            sidebar: {
                edit_profile (e) {
                    console.log(e);
                    let t = "profile-form";
                    this.render({
                        data: {
                            form: t,
                            display: "Profile"
                        }
                    }).then(()=>{
                        this.fire("openForm", {
                            form: t,
                            data: e,
                            formControls: [
                                {
                                    name: "first_name",
                                    placeholder: "first name",
                                    tag: "input",
                                    display: "First Name",
                                    type: "text"
                                },
                                {
                                    name: "last_name",
                                    placeholder: "last name",
                                    tag: "input",
                                    display: "Last Name",
                                    type: "text"
                                },
                                {
                                    name: "username",
                                    placeholder: "username",
                                    tag: "input",
                                    display: "Username",
                                    type: "text"
                                },
                                {
                                    name: "password",
                                    placeholder: "password",
                                    tag: "input",
                                    display: "Password",
                                    type: "text"
                                }
                            ]
                        });
                    });
                }
            },
            uploadRecord: {
                components: [
                    "radio",
                    "view_project"
                ],
                handler (e) {
                    console.log(e);
                    let t = "upload-form";
                    this.render({
                        data: {
                            form: t,
                            display: "Upload Images"
                        }
                    }).then(()=>{
                        this.fire("openForm", {
                            form: t,
                            id: e.id
                        });
                    });
                }
            },
            destroy: {
                components: [
                    "view_project"
                ],
                handler (e) {
                    return this.data.modal.hide();
                }
            }
        }
    });
    Cake.create("radio", "#radio", {
        root: ".radio-container",
        router () {
            this.data.menu = this.$router.name;
        },
        handlers: {
            destroy () {
                return this.reset();
            },
            async isConnected (e) {
                let t = [];
                await this.$scope.set("radios", t);
            },
            renderRadio (e) {
                let { root: t  } = e;
                t.children.namedItem("radio-container") ? this.fire.destroy() : this.fire.destroy().then(()=>{
                    this.render({
                        root: t
                    });
                });
            },
            edit (e) {
                this.fire("editRecord", e);
            },
            delete: function(e) {
                this.fire("deleteRecord", e);
            },
            upload: function(e) {
                console.log(e), this.fire("uploadRecord", e);
            },
            view (e) {
                this.fire("viewRecord", e), console.log("view");
            },
            async toggle (e) {},
            async updateStatus (e) {}
        },
        subscribe: {
            table: {
                tableRowClick (e) {
                    this.fire.renderRadio(e);
                },
                radioClicked (e) {
                    statusList.includes(e.action) ? this.fire.updateStatus(e) : this.fire[e.action](e);
                },
                destroy (e) {
                    return this.fire.destroy();
                }
            }
        }
    });
    Cake.create("spinner", "#spinner", {
        root: "#app",
        handlers: {
            async destroy () {
                await this.reset();
            }
        },
        subscribe: {
            spin: {
                components: [
                    "login",
                    "api",
                    "table",
                    "view_user",
                    "view_project",
                    "tabs",
                    "login",
                    "page_controller",
                    "radio",
                    "sidebar",
                    "form",
                    "chart",
                    "summary"
                ],
                handler (e) {
                    return this.render({
                        data: {
                            type: e || "transparent"
                        }
                    });
                }
            },
            spinout: {
                components: [
                    "login",
                    "api",
                    "view_user",
                    "view_project",
                    "tabs",
                    "login",
                    "page_controller",
                    "radio",
                    "sidebar",
                    "form",
                    "chart",
                    "summary"
                ],
                handler (e) {
                    return this.fire.destroy();
                }
            }
        }
    });
    Cake.create("table", "#table", {
        root: ".table-container",
        data () {
            this.settings = {
                persistence: {},
                columnDefaults: {
                    tooltip: !0
                },
                headerFilterLiveFilterDelay: 100,
                index: "_id",
                reactiveData: !0,
                printAsHtml: !0,
                printRowRange: "selected",
                persistenceID: "breddas",
                pagination: !0,
                paginationMode: "remote",
                paginationSize: 100,
                paginationSizeSelector: [
                    5,
                    10,
                    25,
                    50
                ],
                filterMode: "remote",
                layout: "fitDataFill",
                responsiveLayout: "collapse",
                addRowPos: "top",
                movableColumns: !0,
                resizableRows: !0
            };
        },
        utils () {
            this.dateTimeFormat = function(e, t, a) {
                try {
                    return e.getValue().length < 15 ? e.getValue() : moment(e.getValue()).format("YYYY-MM-DD");
                } catch (e1) {
                    return e.getValue();
                }
            };
        },
        handlers: {
            async destroy () {
                await this.reset();
            },
            async isConnected () {
                let e = this.$router.name, t = this.$router.state, a = [];
                if (this.$router.name == "project" ? a = await this.$cache.get("project_columns", !0) : this.$router.name == "user" && (a = await this.$cache.get("user_columns", !0)), !a && !a.length) {
                    this.fire("spin", "colDef"), setTimeout(()=>{
                        location.reload();
                    }, 1e4);
                    return;
                }
                this.fire.renderTable({
                    colDef: a
                });
            },
            async renderTable ({ colDef: e  }) {
                let t = e.filter((r)=>r.table == 1).map((r)=>{
                    let o = {
                        title: r.display,
                        field: r.name
                    };
                    return (r.name.includes("_at") || r.name.includes("date")) && (o.formatter = this.utils.dateTimeFormat), o;
                }), a = this, s = Object.assign(this.data.settings, {
                    columns: t,
                    rowFormatter: function(r) {
                        r.getElement().setAttribute("data-id", r.getData().id), r.getElement().setAttribute("data-_id", r.getData()._id), r.getElement().setAttribute("data-_rev", r.getData()._rev), r.getElement().setAttribute("data-isEditable", r.getData()._isEditable || !0);
                    },
                    ajaxURL: "http://www.getmydata.com/now",
                    ajaxResponse: (r, o, l)=>({
                            last_page: l.length,
                            page: o.page,
                            data: l
                        }),
                    ajaxRequestFunc: (r, o, l)=>[
                            "project"
                        ].includes(a.$router.name) ? a.fire("getCurrentTab").then((n)=>a.fire("getCurrentFilter").then((d)=>ProjectControllers.paginate(n, d))) : [
                            "user"
                        ].includes(a.$router.name) ? a.fire("getCurrentTab").then((n)=>UserController.paginate(n)) : a.fire("getData", {
                            params: l
                        })
                });
                this.data.table = new Tabulator("#dtable", s);
                let i = "rowTap";
                this.utils.isDesktop() && (console.log("desktop"), i = "rowClick"), this.data.table && this.data.table.on(i, (function(r, o) {
                    let l = o.getData(), n = o.getElement();
                    if (r.target.closest("[name=radio-container]")) {
                        let d = r.target.closest("button");
                        this.fire("radioClicked", {
                            id: n.dataset.id,
                            _id: n.dataset._id,
                            _rev: n.dataset._rev,
                            action: d.dataset.name
                        });
                    } else this.fire("tableRowClick", {
                        data: l,
                        root: n
                    });
                }).bind(this));
            }
        },
        subscribe: {
            sync: {
                components: [
                    "tabs",
                    "filter"
                ],
                handler (e) {
                    this.data.table.setData();
                }
            }
        }
    });
    Cake.create("toolbar", "#toolbar", {
        root: ".toolbar-container",
        handlers: {
            async destroy () {
                await this.reset();
            },
            async isConnected () {
                let e = await this.fire("rolePermission"), t = [
                    {
                        name: "sync",
                        display: "Sync"
                    }
                ];
                e.action.includes("add") && t.unshift({
                    name: "add",
                    display: "Add Record"
                }), this.$scope.set("toolbars", t);
            },
            click (e) {
                let a = e.target.dataset.name;
                this.fire(a);
            }
        },
        subscribe: {}
    });
    Cake.create("tabs", "#tabs", {
        root: ".tabs-container",
        toggle: {
            activeTab: {
                ns: "tab",
                cls: "active",
                sel: "data-name"
            }
        },
        handlers: {
            async destroy () {
                await this.reset();
            },
            async isConnected (e) {
                await this.fire.getProjects();
            },
            async getProjects () {
                let e = [];
                await this.fire("spin", "tabs"), [
                    "project"
                ].includes(this.$router.name) ? e = await ProjectControllers.branches(this.$router.auth()) : [
                    "user"
                ].includes(this.$router.name) && (e = await UserController.branches(this.$router.auth())), console.log(e), e.length && (this.data.tab ? e.find((a)=>a.name == this.data.tab) || (this.data.tab = e[0].name) : this.data.tab = e[0].name, await this.$scope.set("tabs", e), await this.toggler("activeTab", this.data.tab), await this.fire("resetStatusFilter", this.data.tab), await this.fire("spinout", "tabs"));
            },
            async click (e) {
                let s = e.target.closest("a").dataset.name;
                s && (this.toggler("activeTab", s), this.data.tab = s, this.fire("resetStatusFilter", this.data.tab), await this.fire("sync"));
            }
        },
        subscribe: {
            table: {
                getCurrentTab () {
                    return this.data.tab;
                }
            },
            page_controller: {
                async refreshTabs () {
                    await this.fire.getProjects();
                }
            },
            form: {
                currentBranch (e) {
                    return this.data.tab;
                }
            }
        }
    });
})();

},{}]},["bVViz","5cqIW"], "5cqIW", "parcelRequirefe81")

//# sourceMappingURL=index.cb66ed5f.js.map
