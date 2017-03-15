/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = __webpack_require__(1)["default"];

	var AnimetePripherals = _interopRequire(__webpack_require__(2));

	/**
	 * codeのfadeIn, fadeOut
	 */
	var playground = document.querySelector(".playground");
	var answerBtns = document.querySelectorAll(".answerBtn");

	playground.addEventListener("click", function (ev) {
		var target = ev.target;
		if (target.classList.contains("step-num")) {
			var elitem = target.parentElement.nextSibling.nextSibling;
			var elmark = target.childNodes[0];

			if (elitem.classList.contains("is-open")) {
				elitem.classList.remove("is-open");
				elmark.classList.remove("fa-minus-square");
				elmark.classList.add("fa-plus-square");
			} else {
				elitem.classList.add("is-open");
				elmark.classList.remove("fa-plus-square");
				elmark.classList.add("fa-minus-square");
			}
		}
	});

	for (var i = 0; i < answerBtns.length; i++) {
		answerBtns[i].addEventListener("click", function (ev) {
			var target = ev.target.nextSibling.nextSibling;
			if (target.classList.contains("hidden")) {
				target.classList.remove("hidden");
			} else {
				target.classList.add("hidden");
			}
		});
	};

	// ================ ペリペラルのアニメーション ===============
	new AnimetePripherals();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(3)["default"];

	var _createClass = __webpack_require__(4)["default"];

	var AnimetePripherals = (function () {
	  function AnimetePripherals() {
	    _classCallCheck(this, AnimetePripherals);

	    this.canvas = document.getElementById("canvas-peripherals");
	    this.ctx = this.canvas.getContext("2d");
	    this.speed = 2;
	    this.circle_scale = 0;
	    this.requestId;
	    this.image = new Image();
	    this.image.src = "./images/iphone.png";
	    this.init();
	  }

	  _createClass(AnimetePripherals, {
	    drawImage: {

	      // 画像を描画

	      value: function drawImage() {
	        this.ctx.drawImage(this.image, 85, 48, 32, 64);
	      }
	    },
	    drawCircle: {

	      // 円を描画

	      value: function drawCircle(circle_scale) {
	        this.ctx.beginPath();
	        this.ctx.arc(100, 80, this.circle_scale, 0, Math.PI * 2, false);
	        this.ctx.strokeStyle = "#4169e1";
	        this.ctx.stroke();
	      }
	    },
	    loopAnimate: {

	      // アニメーション

	      value: function loopAnimate() {
	        var self = this;
	        this.requestId = window.requestAnimFrame(function () {
	          self.loopAnimate();
	        });
	        // 描画をクリア
	        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	        // 円を拡大
	        this.circle_scale += this.speed;
	        // 円を描画
	        this.drawCircle(this.circle_scale);
	        // 画像を描画
	        this.drawImage();
	      }
	    },
	    init: {
	      value: function init() {
	        var _this = this;

	        // requestAnimFrameの設定
	        window.requestAnimFrame = (function () {
	          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	            window.setTimeout(callback, 1000 / 60);
	          };
	        })();

	        // 3秒間隔でアニメーションを繰り返す。
	        setInterval(function () {
	          var cancelAnimationFrame = window.cancelAnimationFrame || window.mozcancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame;
	          window.cancelAnimationFrame = cancelAnimationFrame;
	          window.cancelAnimationFrame(_this.requestId);
	          _this.circle_scale = 0;
	          _this.loopAnimate();
	        }, 3000);
	      }
	    }
	  });

	  return AnimetePripherals;
	})();

	module.exports = AnimetePripherals;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var key in props) {
	      var prop = props[key];
	      prop.configurable = true;
	      if (prop.value) prop.writable = true;
	    }

	    Object.defineProperties(target, props);
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ }
/******/ ]);