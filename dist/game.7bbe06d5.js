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
})({"create_tiles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMTilesContainer = exports.generateTiles = void 0;
var DOMTilesContainer = document.querySelector('.tiles-container');
exports.DOMTilesContainer = DOMTilesContainer;

var generateTiles = function generateTiles(numberOfTiles) {
  for (var i = 0; i < numberOfTiles; i++) {
    var tile = document.createElement('li');
    tile.classList.add('tiles-container__tile');
    DOMTilesContainer.appendChild(tile);
  }
};

exports.generateTiles = generateTiles;
},{}],"random-numbers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var randomNumbers = new Set();

var generateRandomNumber = function generateRandomNumber(numbersOfTiles) {
  if (numbersOfTiles) {
    while (randomNumbers.size !== numbersOfTiles) {
      randomNumbers.add(Math.floor(Math.random() * numbersOfTiles));
    }

    return randomNumbers;
  }
};

var _default = generateRandomNumber;
exports.default = _default;
},{}],"click-tile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickTile = clickTile;
var howManyClicks = 0;
var pairClicks = [];
var correctAnswers = 0;
var gameTiles = document.querySelector('.tiles-container');
var topBar = document.querySelector('.top-bar');
var mainContainer = document.querySelector('.container');
var bottomBar = document.querySelector('.bottom-bar.is-visible');

function clickTile(index, startTime, tiles, randomArrayOfPairColors, event) {
  howManyClicks += 1;
  pairClicks.push(index);
  event.target.classList.add(randomArrayOfPairColors[index]);
  event.target.classList.add('clicked');

  if (howManyClicks === 2) {
    howManyClicks = 0;
    var firstClickedTile = tiles[pairClicks[0]];
    var secondClickedTile = tiles[pairClicks[1]];
    console.log(firstClickedTile, secondClickedTile);

    if (firstClickedTile.classList[1] === secondClickedTile.classList[1]) {
      var correctSign1 = document.createElement('i');
      var correctSign2 = document.createElement('i');
      correctSign1.className = 'fas fa-check';
      correctSign2.className = 'fas fa-check';
      firstClickedTile.className = 'tiles-container__tile guessed';
      secondClickedTile.className = 'tiles-container__tile guessed';
      firstClickedTile.insertAdjacentElement('afterbegin', correctSign1);
      secondClickedTile.insertAdjacentElement('afterbegin', correctSign2);
      correctAnswers++;

      if (correctAnswers === tiles.length / 2) {
        var finalText = document.createElement('h1');
        var endTime = new Date().getTime();
        gameTiles.classList.remove('is-visible');
        gameTiles.insertAdjacentElement('afterend', finalText);
        finalText.className = 'final-text';
        finalText.textContent = "Wygra\u0142e\u015B z czasem: ".concat((endTime - startTime) / 1000, "s");
        console.log((endTime - startTime) / 1000);

        if (document.querySelector('html').getAttribute('data-colormode') === 'dark') {
          finalText.classList.add('text-white');
        } else {
          finalText.classList.add('text-black');
        }

        setTimeout(function () {
          topBar.classList.add('is-visible');
          mainContainer.classList.add('is-visible');
          bottomBar.classList.add('is-visible');

          while (gameTiles.firstChild) {
            gameTiles.firstChild.remove();
          }

          finalText.remove();
        }, 1500);
      }
    } else {
      setTimeout(function () {
        event.target.classList.add('clicked');
        firstClickedTile.className = 'tiles-container__tile';
        secondClickedTile.className = 'tiles-container__tile';
      }, 1000);
    }

    pairClicks = [];
  }
}
},{}],"game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startGame = void 0;

var _create_tiles = require("./create_tiles");

var _randomNumbers = _interopRequireDefault(require("./random-numbers"));

var _clickTile = require("./click-tile");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import allTiles from './get-colors-for-tiles';
var gameTiles = document.querySelector('.tiles-container');
var topBar = document.querySelector('.top-bar');
var mainContainer = document.querySelector('.container');
var bottomBar = document.querySelector('.bottom-bar.is-visible');
var tilesContainer = document.querySelector('.tiles-grid');

var startGame = function startGame() {
  gameTiles.classList.add('is-visible');
  topBar.classList.remove('is-visible');
  mainContainer.classList.remove('is-visible');
  bottomBar.classList.remove('is-visible');
  var allColors = ['black', 'purple', 'light-blue', 'orange', 'red', 'blue', 'green', 'yellow', 'pink', 'brown'];
  var randomNumbers;
  var numbersOfTiles = tilesContainer.dataset.gridRows * tilesContainer.dataset.gridColumns;
  var pairColors = numbersOfTiles / 2;
  var arrayOfPairColors = [];
  var randomArrayOfPairColors = [];
  var j = 0; // let howManyClicks = 0;
  // let pairClicks = [];
  // let correctAnswers = 0;

  if (numbersOfTiles === 12 || numbersOfTiles === 18) {
    (0, _create_tiles.generateTiles)(numbersOfTiles);
  }

  if (numbersOfTiles === 16 || numbersOfTiles === 20) {
    _create_tiles.DOMTilesContainer.classList.add('four-columns');

    (0, _create_tiles.generateTiles)(numbersOfTiles);
  }

  var tiles = document.querySelectorAll('.tiles-container__tile');
  randomNumbers = _toConsumableArray((0, _randomNumbers.default)(numbersOfTiles));

  for (var i = 0; i < numbersOfTiles; i++) {
    arrayOfPairColors[i] = allColors[j];

    if (j > pairColors - 2) {
      j = -1;
    }

    j++;
  }

  for (var _i = 0; _i < numbersOfTiles; _i++) {
    randomArrayOfPairColors[_i] = arrayOfPairColors[randomNumbers[_i]];
  }

  tiles.forEach(function (tile, index) {
    tile.classList.add(randomArrayOfPairColors[index]);
  });
  setTimeout(function () {
    var startTime = new Date().getTime();
    tiles.forEach(function (tile, index) {
      tile.className = 'tiles-container__tile';
      tile.addEventListener('click', _clickTile.clickTile.bind(_this, index, startTime, tiles, randomArrayOfPairColors));
    });
  }, 3000);
};

exports.startGame = startGame;
},{"./create_tiles":"create_tiles.js","./random-numbers":"random-numbers.js","./click-tile":"click-tile.js"}],"C:/Users/Krzysiek/AppData/Roaming/nvm/v10.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52424" + '/');

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
},{}]},{},["C:/Users/Krzysiek/AppData/Roaming/nvm/v10.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","game.js"], null)
//# sourceMappingURL=/game.7bbe06d5.js.map