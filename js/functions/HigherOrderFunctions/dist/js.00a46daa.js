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
})({"js/cart.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "product": "Tea - Decaf 1 Cup",
  "cost": 5.19,
  "quantity": 5
}, {
  "id": 2,
  "product": "Wine - Cotes Du Rhone",
  "cost": 8.17,
  "quantity": 4
}, {
  "id": 3,
  "product": "Rice - 7 Grain Blend",
  "cost": 8.12,
  "quantity": 4
}, {
  "id": 4,
  "product": "Garam Masala Powder",
  "cost": 3.76,
  "quantity": 2
}, {
  "id": 5,
  "product": "French Pastries",
  "cost": 9.79,
  "quantity": 2
}, {
  "id": 6,
  "product": "Flour - Pastry",
  "cost": 3.23,
  "quantity": 4
}, {
  "id": 7,
  "product": "Mix Pina Colada",
  "cost": 11.9,
  "quantity": 2
}, {
  "id": 8,
  "product": "Appetizer - Tarragon Chicken",
  "cost": 9.47,
  "quantity": 4
}, {
  "id": 9,
  "product": "Flour - All Purpose",
  "cost": 14.04,
  "quantity": 3
}, {
  "id": 10,
  "product": "Fuji Apples",
  "cost": 3.36,
  "quantity": 1
}, {
  "id": 11,
  "product": "Lobster - Tail, 3 - 4 Oz",
  "cost": 10.58,
  "quantity": 3
}, {
  "id": 12,
  "product": "Juice - Apple 284ml",
  "cost": 8.41,
  "quantity": 1
}, {
  "id": 13,
  "product": "Juice - Tomato, 10 Oz",
  "cost": 8.96,
  "quantity": 5
}, {
  "id": 14,
  "product": "Wine - Cousino Macul Antiguas",
  "cost": 10.34,
  "quantity": 3
}, {
  "id": 15,
  "product": "Mushroom - Oyster, Fresh",
  "cost": 13.21,
  "quantity": 4
}, {
  "id": 16,
  "product": "Chicken - White Meat, No Tender",
  "cost": 5.08,
  "quantity": 2
}, {
  "id": 17,
  "product": "Chick Peas - Canned",
  "cost": 12.17,
  "quantity": 2
}, {
  "id": 18,
  "product": "Spice - Peppercorn Melange",
  "cost": 11.32,
  "quantity": 3
}, {
  "id": 19,
  "product": "Tahini Paste",
  "cost": 6.31,
  "quantity": 3
}, {
  "id": 20,
  "product": "Cassis",
  "cost": 5.14,
  "quantity": 2
}];
},{}],"js/currencyRates.json":[function(require,module,exports) {
module.exports = {
  "USD": 1,
  "INR": 73,
  "EUR": 0.83,
  "YEN": 105.26,
  "HKD": 7.75,
  "SGD": 1.32
};
},{}],"js/Row.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = (product, quantity, cost) => `<div class="cart-row">
<div class="item">${product}</div>
<div class="quantity">${quantity}</div>
<div class="cost">${cost}</div>
</div>`;
exports.default = _default;
},{}],"js/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTotals = exports.renderRows = void 0;
var _Row = _interopRequireDefault(require("./Row"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const totalQuantity = document.querySelector('.total-quantity');
const totalCost = document.querySelector('.total-cost');
const itemRows = document.querySelector('.item-rows');
const renderTotals = cart => {
  const cost = cart.reduce((prev, item) => prev + item.cost * item.quantity, 0).toPrecision(6);
  const quantity = cart.reduce((prev, item) => prev + item.quantity, 0);
  totalQuantity.innerText = quantity;
  totalCost.innerText = cost;
};
exports.renderTotals = renderTotals;
const renderRows = rows => {
  const domNodes = rows.map(({
    product,
    quantity,
    cost
  }) => (0, _Row.default)(product, quantity, cost.toPrecision(6)));
  itemRows.innerHTML = domNodes.join('');
};
exports.renderRows = renderRows;
},{"./Row":"js/Row.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _cart = _interopRequireDefault(require("./cart.json"));
var _currencyRates = _interopRequireDefault(require("./currencyRates.json"));
var _view = require("./view");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const currencyPicker = document.querySelector("select[name='currency-picker']");
currencyPicker.innerHTML = Object.keys(_currencyRates.default).map(key => `<option> ${key} </option>`).join("");

//Higher order function
const currencyConvert = (currency, rates, fn) => {
  const converionRate = rates[currency] ?? 1;
  return cart => {
    const revised = cart.map(item => {
      return {
        ...item,
        cost: item.cost * converionRate
      };
    });
    return fn(revised);
  };
};
const computeCart = function () {
  const currency = this?.value;
  currencyConvert(currency, _currencyRates.default, _view.renderRows)(_cart.default);
  currencyConvert(currency, _currencyRates.default, _view.renderTotals)(_cart.default);
  //   renderRows(cart);
  //   renderTotals(cart);
};

currencyPicker.addEventListener("change", computeCart);
computeCart();
},{"./cart.json":"js/cart.json","./currencyRates.json":"js/currencyRates.json","./view":"js/view.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55482" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map