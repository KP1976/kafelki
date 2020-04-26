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
})({"change-theme-color-mode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var HTMLTag = document.documentElement;
var switchButton = document.querySelector('.switch-mode-container__switch');

var changeThemeColorMode = function changeThemeColorMode() {
  switchButton.addEventListener('change', function (e) {
    if (e.target.checked) {
      HTMLTag.dataset.colormode = 'light';
    } else {
      HTMLTag.dataset.colormode = 'dark';
    }
  });
};

var _default = changeThemeColorMode;
exports.default = _default;
},{}],"generate-tiles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var generateTiles = function generateTiles(rows, columns, container, tileClassName) {
  for (var i = 0; i < rows * columns; i++) {
    var tile = document.createElement('li');
    tile.classList.add(tileClassName);
    container.appendChild(tile);
  }
};

var _default = generateTiles;
exports.default = _default;
},{}],"change-board-dimension.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generateTiles = _interopRequireDefault(require("./generate-tiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var radioButtonInputs = document.querySelectorAll('.radios-container__radio-input');
var tilesContainer = document.querySelector('.tiles-container');
var tilesGrid = document.querySelector('.tiles-grid');

var changeBoardDimension = function changeBoardDimension() {
  radioButtonInputs.forEach(function (radioButtonInput) {
    radioButtonInput.addEventListener('change', function () {
      var _event$target$nextEle = event.target.nextElementSibling.textContent.split('x'),
          _event$target$nextEle2 = _slicedToArray(_event$target$nextEle, 2),
          rows = _event$target$nextEle2[0],
          columns = _event$target$nextEle2[1]; // Usuwanie wszystkich kafelków i ustawienie odpowiedniego grida dla kontenera
      // (zarówno na stronie początkowej jak i w grze)


      tilesGrid.innerHTML = '';
      tilesGrid.dataset.gridRows = rows;
      tilesGrid.dataset.gridColumns = columns;
      tilesContainer.dataset.gridRows = rows;
      tilesContainer.dataset.gridColumns = columns;
      (0, _generateTiles.default)(+rows, +columns, tilesGrid, 'tiles-grid__tile');
    });
  });
};

var _default = changeBoardDimension;
exports.default = _default;
},{"./generate-tiles":"generate-tiles.js"}],"create-array-of-double-colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var tilesColors = ['black', 'purple', 'light-blue', 'orange', 'red', 'blue', 'green', 'yellow', 'pink', 'brown'];

var createArrayOfDoubleColors = function createArrayOfDoubleColors(numberOfTiles) {
  var colorsOfTiles = [];
  var availableTileColors = numberOfTiles / 2;
  var j = 0;

  for (var i = 0; i < numberOfTiles; i++) {
    colorsOfTiles[i] = tilesColors[j];
    j++;

    if (j > availableTileColors - 1) {
      j = 0;
    }
  }

  return colorsOfTiles;
};

var _default = createArrayOfDoubleColors;
exports.default = _default;
},{}],"generate-random-index-numbers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var generateRandomIndexNumbers = function generateRandomIndexNumbers(numberOfTiles) {
  var randomIndexNumbers = new Set();

  if (numberOfTiles) {
    while (randomIndexNumbers.size !== numberOfTiles) {
      randomIndexNumbers.add(Math.floor(Math.random() * numberOfTiles));
    }
  }

  return randomIndexNumbers;
};

var _default = generateRandomIndexNumbers;
exports.default = _default;
},{}],"generate-random-tiles-colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffleTilesColors = exports.generateRandomTilesColors = void 0;

var _createArrayOfDoubleColors = _interopRequireDefault(require("./create-array-of-double-colors"));

var _generateRandomIndexNumbers = _interopRequireDefault(require("./generate-random-index-numbers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var randomIndexNumbers = [];
var shuffleTilesColors = [];
exports.shuffleTilesColors = shuffleTilesColors;

var generateRandomTilesColors = function generateRandomTilesColors(numberOfTiles) {
  var colorsOfTiles = (0, _createArrayOfDoubleColors.default)(numberOfTiles);
  var tiles = document.querySelectorAll('.tiles-container__tile');
  randomIndexNumbers = _toConsumableArray((0, _generateRandomIndexNumbers.default)(numberOfTiles));

  for (var i = 0; i < numberOfTiles; i++) {
    shuffleTilesColors[i] = colorsOfTiles[randomIndexNumbers[i]];
  }

  tiles.forEach(function (tile, index) {
    return tile.classList.add("".concat(shuffleTilesColors[index]));
  });
  return tiles;
};

exports.generateRandomTilesColors = generateRandomTilesColors;
},{"./create-array-of-double-colors":"create-array-of-double-colors.js","./generate-random-index-numbers":"generate-random-index-numbers.js"}],"click-tile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generateRandomTilesColors = require("./generate-random-tiles-colors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var topBar = document.querySelector('.top-bar');
var tilesContainer = document.querySelector('.tiles-container');
var mainContainer = document.querySelector('.container');
var startTime;
var activeTile = '';
var pairsActiveTiles = [];
var correctAnswers = 0;
var gameScore;

var clickTile = function clickTile(tiles) {
  // Usuwa po 2,5 sekundach kolory z kafelków i ustawia event listenery na każdy kafelek
  setTimeout(function () {
    tiles.forEach(function (tile) {
      tile.className = 'tiles-container__tile';
      tile.addEventListener('click', clickTileHandler);
    });
    startTime = new Date().getTime();
  }, 2500);
};

var clickTileHandler = function clickTileHandler(e) {
  var tiles = document.querySelectorAll('.tiles-container__tile');

  var index = _toConsumableArray(tiles).indexOf(e.target);

  activeTile = e.target; // Jeżeli klikniemy w ten sam kafelek

  if (activeTile === pairsActiveTiles[0]) return;

  if (pairsActiveTiles.length === 0) {
    pairsActiveTiles[0] = activeTile;
    activeTile.classList.add("".concat(_generateRandomTilesColors.shuffleTilesColors[index]));
    return;
  } else {
    tiles.forEach(function (tile) {
      return tile.removeEventListener('click', clickTileHandler);
    });
    pairsActiveTiles[1] = activeTile;
    activeTile.classList.add("".concat(_generateRandomTilesColors.shuffleTilesColors[index]));
    setTimeout(function () {
      if (pairsActiveTiles[0].attributes[0].value === pairsActiveTiles[1].attributes[0].value) {
        pairsActiveTiles.forEach(function (singleActiveTile) {
          var correctAnswerSign = document.createElement('i');
          singleActiveTile.className = 'tiles-container__tile guessed';
          correctAnswerSign.className = 'fa fa-check';
          singleActiveTile.appendChild(correctAnswerSign);
        });
        correctAnswers++;

        if (correctAnswers === tiles.length / 2) {
          var endTime = new Date().getTime();
          gameScore = endTime - startTime;
          tiles.forEach(function (tile) {
            return tile.remove();
          });
          document.querySelector('body').insertAdjacentHTML('afterBegin', "\n\t\t\t\t\t\t\t<div class=\"wrapper\">\n\t\t\t\t\t\t\t\t<h1 class=\"wrapper__score-text\">Tw\xF3j wynik to <span class=\"time\">".concat((gameScore / 1000).toFixed(1), "</span> s.</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t"));
          setTimeout(function () {
            document.querySelector('.wrapper').remove();
            topBar.classList.add('is-visible');
            mainContainer.classList.add('is-visible');
            tilesContainer.classList.remove('is-visible');
            correctAnswers = 0;
          }, 3000);
        }
      } else {
        pairsActiveTiles.forEach(function (tile) {
          return tile.className = 'tiles-container__tile';
        });
      } // Resetowanie


      activeTile = '';
      pairsActiveTiles = []; // Ponowne ustawienie click eventa dla każdego kafelka

      tiles.forEach(function (tile) {
        return tile.addEventListener('click', clickTileHandler);
      });
    }, 500);
  }
};

var _default = clickTile;
exports.default = _default;
},{"./generate-random-tiles-colors":"generate-random-tiles-colors.js"}],"start-game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _generateTiles = _interopRequireDefault(require("./generate-tiles"));

var _generateRandomTilesColors = require("./generate-random-tiles-colors");

var _clickTile = _interopRequireDefault(require("./click-tile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var topBar = document.querySelector('.top-bar');
var tilesContainer = document.querySelector('.tiles-container');
var mainContainer = document.querySelector('.container');
var tilesGrid = document.querySelector('.tiles-grid');
var startButton = document.querySelector('.start-button');

var startGame = function startGame() {
  startButton.addEventListener('click', function () {
    var rows = +tilesGrid.getAttribute('data-grid-rows');
    var columns = +tilesGrid.getAttribute('data-grid-columns');
    var tiles;
    topBar.classList.remove('is-visible');
    mainContainer.classList.remove('is-visible');
    tilesContainer.classList.add('is-visible');
    (0, _generateTiles.default)(rows, columns, tilesContainer, 'tiles-container__tile');
    tiles = (0, _generateRandomTilesColors.generateRandomTilesColors)(rows * columns);
    (0, _clickTile.default)(tiles);
  });
};

var _default = startGame;
exports.default = _default;
},{"./generate-tiles":"generate-tiles.js","./generate-random-tiles-colors":"generate-random-tiles-colors.js","./click-tile":"click-tile.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _changeThemeColorMode = _interopRequireDefault(require("./change-theme-color-mode"));

var _generateTiles = _interopRequireDefault(require("./generate-tiles"));

var _changeBoardDimension = _interopRequireDefault(require("./change-board-dimension"));

var _startGame = _interopRequireDefault(require("./start-game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tilesGrid = document.querySelector('.tiles-grid');
(0, _changeThemeColorMode.default)();
(0, _generateTiles.default)(4, 3, tilesGrid, 'tiles-grid__tile');
(0, _changeBoardDimension.default)();
(0, _startGame.default)();
},{"./change-theme-color-mode":"change-theme-color-mode.js","./generate-tiles":"generate-tiles.js","./change-board-dimension":"change-board-dimension.js","./start-game":"start-game.js"}],"C:/Users/Krzysiek/AppData/Roaming/nvm/v10.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50346" + '/');

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
},{}]},{},["C:/Users/Krzysiek/AppData/Roaming/nvm/v10.16.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map