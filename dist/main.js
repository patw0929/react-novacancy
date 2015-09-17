!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.NoVacancy=n(require("react")):e.NoVacancy=n(e.react)}(this,function(__WEBPACK_EXTERNAL_MODULE_13__){return function(e){function n(t){if(r[t])return r[t].exports;var s=r[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var r={};return n.m=e,n.c=r,n.p="./",n(0)}([function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(13);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _shortid = __webpack_require__(6);\n\nvar _shortid2 = _interopRequireDefault(_shortid);\n\n__webpack_require__(12);\n\nvar NoVacancy = (function (_Component) {\n  _inherits(NoVacancy, _Component);\n\n  function NoVacancy() {\n    _classCallCheck(this, NoVacancy);\n\n    _get(Object.getPrototypeOf(NoVacancy.prototype), 'constructor', this).call(this);\n\n    this._loopTimeout = undefined;\n    this.state = {\n      powerOn: false,\n      offChars: [],\n      blinking: [],\n      blinkArr: []\n    };\n  }\n\n  _createClass(NoVacancy, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n\n      var blinkArr = this.setBlinkChars();\n      blinkArr = blinkArr.concat(this.setOffChars());\n\n      this.setState(_extends({}, this.state, {\n        offChars: this.setOffChars(),\n        blinkArr: blinkArr\n      }), function () {\n        if (_this.props.start) {\n          _this.blinkOn();\n        }\n      });\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.start !== this.props.start) {\n        if (nextProps.start) {\n          this.blinkOn();\n        } else {\n          this.blinkOff();\n        }\n      }\n    }\n  }, {\n    key: 'rand',\n    value: function rand(min, max) {\n      return Math.floor(Math.random() * (max - min + 1) + min);\n    }\n  }, {\n    key: 'removeA',\n    value: function removeA(arr) {\n      var what = undefined,\n          a = arguments,\n          L = a.length,\n          ax = undefined;\n\n      while (L > 1 && arr.length) {\n        what = a[--L];\n        while ((ax = arr.indexOf(what)) !== -1) {\n          arr.splice(ax, 1);\n        }\n      }\n      return arr;\n    }\n  }, {\n    key: 'blink',\n    value: function blink(item) {\n      var _this2 = this;\n\n      // blink 1 time\n      this.setState(_extends({}, this.state, {\n        blinking: this.state.blinking.concat([item])\n      }), function () {\n        setTimeout(function () {\n          _this2.setState(_extends({}, _this2.state, {\n            blinking: _this2.removeA(_this2.state.blinking, item)\n          }), function () {\n            _this2.reblink(item);\n          });\n        }, _this2.rand(_this2.props.blinkMin * 1000, _this2.props.blinkMax * 1000));\n      });\n    }\n  }, {\n    key: 'reblink',\n    value: function reblink(item) {\n      var _this3 = this;\n\n      setTimeout(function () {\n        // continue blink check\n        if (_this3.rand(1, 100) <= _this3.props.reblinkProbability * 100) {\n          _this3.blink(item);\n        }\n      }, this.rand(this.props.blinkMin * 1000, this.props.blinkMax * 1000));\n    }\n  }, {\n    key: 'setOffChars',\n    value: function setOffChars() {\n      var len = this.props.text.length;\n      var randomArray = this.randomArray(len);\n      var offArr = undefined;\n      var off = this.props.off;\n\n      // off make\n      off = Math.min(off, len);\n      off = Math.max(0, off);\n\n      offArr = randomArray.splice(0, off);\n\n      return offArr.map(function (value) {\n        return value;\n      });\n    }\n  }, {\n    key: 'setBlinkChars',\n    value: function setBlinkChars() {\n      var len = this.props.text.length;\n      var randomArray = this.randomArray(len);\n      var blinkArr = undefined;\n      var blink = this.props.blink;\n      var off = this.props.off;\n\n      // off make\n      off = Math.min(off, len);\n      off = Math.max(0, off);\n\n      // blink array make\n      blink = blink === 0 ? len : blink;\n      blink = Math.min(blink, len - off);\n      blink = Math.max(0, blink);\n\n      blinkArr = randomArray.splice(0, blink);\n\n      return blinkArr;\n    }\n  }, {\n    key: 'randomArray',\n    value: function randomArray(n) {\n      var ary = [];\n      var i = undefined;\n      var r = undefined;\n      var t = undefined;\n\n      for (i = 0; i < n; ++i) {\n        ary[i] = i;\n      }\n\n      for (i = 0; i < n; ++i) {\n        r = parseInt(Math.random() * n, 10);\n        t = ary[r];\n        ary[r] = ary[i];\n        ary[i] = t;\n      }\n\n      return ary;\n    }\n  }, {\n    key: 'loop',\n    value: function loop() {\n      var _this4 = this;\n\n      if (!this.state.powerOn) {\n        return;\n      }\n\n      if (this.state.blinkArr.length === 0) {\n        return;\n      }\n\n      var num = this.state.blinkArr[this.rand(0, this.state.blinkArr.length - 1)];\n\n      if (this.state.blinking.indexOf(num) === -1) {\n        this.blink(num);\n      }\n\n      this._loopTimeout = setTimeout(function () {\n        _this4.loop();\n      }, this.rand(this.props.loopMin * 1000, this.props.loopMax * 1000));\n    }\n  }, {\n    key: 'blinkOn',\n    value: function blinkOn() {\n      var _this5 = this;\n\n      if (!this.state.powerOn) {\n        this.setState(_extends({}, this.state, {\n          powerOn: true\n        }), function () {\n          _this5._loopTimeout = setTimeout(function () {\n            _this5.loop();\n          }, _this5.rand(_this5.props.loopMin * 1000, _this5.props.loopMax * 1000));\n        });\n      }\n    }\n  }, {\n    key: 'blinkOff',\n    value: function blinkOff() {\n      var _this6 = this;\n\n      if (this.state.powerOn) {\n        this.setState(_extends({}, this.state, {\n          powerOn: false\n        }), function () {\n          clearTimeout(_this6._loopTimeout);\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this7 = this;\n\n      var generalStyle = {\n        textShadow: this.props.glow ? this.props.glow.toString() : '',\n        fontSize: this.props.fontSize ? this.props.fontSize : ''\n      };\n\n      var onStyle = {\n        color: this.props.lightColor ? this.props.lightColor : ''\n      };\n\n      var offStyle = {\n        color: this.props.darkColor ? this.props.darkColor : '',\n        opacity: '.3'\n      };\n\n      var offCharIndex = this.state.offChars;\n\n      var splitChars = this.props.text.split('').map(function (value, n) {\n        var key = _shortid2['default'].generate(),\n            itemStyle = onStyle;\n\n        if (_this7.state.blinking.length > 0 && _this7.state.blinking.indexOf(n) > -1) {\n          itemStyle = offStyle;\n        } else {\n          itemStyle = onStyle;\n        }\n\n        if (offCharIndex.length > 0 && offCharIndex.indexOf(n) > -1) {\n          itemStyle = offStyle;\n        }\n\n        return _react2['default'].createElement(\n          'span',\n          { key: key,\n            style: itemStyle,\n            className: 'novacancy' },\n          value\n        );\n      });\n\n      return _react2['default'].createElement(\n        'span',\n        { ref: 'wrapper',\n          className: this.props.className,\n          style: generalStyle },\n        splitChars\n      );\n    }\n  }], [{\n    key: 'propTypes',\n    value: {\n      className: _react.PropTypes.string,\n      reblinkProbability: _react.PropTypes.number,\n      blinkMin: _react.PropTypes.number,\n      blinkMax: _react.PropTypes.number,\n      loopMin: _react.PropTypes.number,\n      loopMax: _react.PropTypes.number,\n      lightColor: _react.PropTypes.string,\n      darkColor: _react.PropTypes.string,\n      glow: _react.PropTypes.arrayOf(_react.PropTypes.string),\n      off: _react.PropTypes.number,\n      blink: _react.PropTypes.number,\n      start: _react.PropTypes.bool,\n      fontSize: _react.PropTypes.string,\n      text: _react.PropTypes.string\n    },\n    enumerable: true\n  }, {\n    key: 'defaultProps',\n    value: {\n      className: '',\n      reblinkProbability: 1 / 3,\n      blinkMin: .01,\n      blinkMax: .5,\n      loopMin: .5,\n      loopMax: 2,\n      lightColor: '#fff',\n      darkColor: '#ffa500',\n      glow: ['0 0 80px Orange', '0 0 30px Red', '0 0 6px Yellow'],\n      off: 0,\n      blink: 0,\n      start: true,\n      fontSize: '',\n      text: ''\n    },\n    enumerable: true\n  }]);\n\n  return NoVacancy;\n})(_react.Component);\n\nexports['default'] = NoVacancy;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/NoVacancy.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/NoVacancy.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar randomFromSeed = __webpack_require__(9);\n\nvar ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';\nvar alphabet;\nvar previousSeed;\n\nvar shuffled;\n\nfunction reset() {\n    shuffled = false;\n}\n\nfunction setCharacters(_alphabet_) {\n    if (!_alphabet_) {\n        if (alphabet !== ORIGINAL) {\n            alphabet = ORIGINAL;\n            reset();\n        }\n        return;\n    }\n\n    if (_alphabet_ === alphabet) {\n        return;\n    }\n\n    if (_alphabet_.length !== ORIGINAL.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);\n    }\n\n    var unique = _alphabet_.split('').filter(function(item, ind, arr){\n       return ind !== arr.lastIndexOf(item);\n    });\n\n    if (unique.length) {\n        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));\n    }\n\n    alphabet = _alphabet_;\n    reset();\n}\n\nfunction characters(_alphabet_) {\n    setCharacters(_alphabet_);\n    return alphabet;\n}\n\nfunction setSeed(seed) {\n    randomFromSeed.seed(seed);\n    if (previousSeed !== seed) {\n        reset();\n        previousSeed = seed;\n    }\n}\n\nfunction shuffle() {\n    if (!alphabet) {\n        setCharacters(ORIGINAL);\n    }\n\n    var sourceArray = alphabet.split('');\n    var targetArray = [];\n    var r = randomFromSeed.nextValue();\n    var characterIndex;\n\n    while (sourceArray.length > 0) {\n        r = randomFromSeed.nextValue();\n        characterIndex = Math.floor(r * sourceArray.length);\n        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);\n    }\n    return targetArray.join('');\n}\n\nfunction getShuffled() {\n    if (shuffled) {\n        return shuffled;\n    }\n    shuffled = shuffle();\n    return shuffled;\n}\n\n/**\n * lookup shuffled letter\n * @param index\n * @returns {string}\n */\nfunction lookup(index) {\n    var alphabetShuffled = getShuffled();\n    return alphabetShuffled[index];\n}\n\nmodule.exports = {\n    characters: characters,\n    seed: setSeed,\n    lookup: lookup,\n    shuffled: getShuffled\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/alphabet.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/alphabet.js?")},function(module,exports,__webpack_require__){eval('module.exports = function() {\r\n	var list = [];\r\n	list.toString = function toString() {\r\n		var result = [];\r\n		for(var i = 0; i < this.length; i++) {\r\n			var item = this[i];\r\n			if(item[2]) {\r\n				result.push("@media " + item[2] + "{" + item[1] + "}");\r\n			} else {\r\n				result.push(item[1]);\r\n			}\r\n		}\r\n		return result.join("");\r\n	};\r\n	return list;\r\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader/cssToString.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/css-loader/cssToString.js?')},function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(2)();\nexports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Monoton);", ""]);\nexports.push([module.id, "", ""]);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/sass-loader?outputStyle=expanded!./src/styles/styles.scss\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/styles/styles.scss?./~/css-loader!./~/sass-loader?outputStyle=expanded')},function(module,exports,__webpack_require__){eval("'use strict';\nvar alphabet = __webpack_require__(1);\n\n/**\n * Decode the id to get the version and worker\n * Mainly for debugging and testing.\n * @param id - the shortid-generated id.\n */\nfunction decode(id) {\n    var characters = alphabet.shuffled();\n    return {\n        version: characters.indexOf(id.substr(0, 1)) & 0x0f,\n        worker: characters.indexOf(id.substr(1, 1)) & 0x0f\n    };\n}\n\nmodule.exports = decode;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/decode.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/decode.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar randomByte = __webpack_require__(8);\n\nfunction encode(lookup, number) {\n    var loopCounter = 0;\n    var done;\n\n    var str = '';\n\n    while (!done) {\n        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );\n        done = number < (Math.pow(16, loopCounter + 1 ) );\n        loopCounter++;\n    }\n    return str;\n}\n\nmodule.exports = encode;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/encode.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/encode.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar alphabet = __webpack_require__(1);\nvar encode = __webpack_require__(5);\nvar decode = __webpack_require__(4);\nvar isValid = __webpack_require__(7);\n\n// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.\n// This number should be updated every year or so to keep the generated id short.\n// To regenerate `new Date() - 0` and bump the version. Always bump the version!\nvar REDUCE_TIME = 1426452414093;\n\n// don't change unless we change the algos or REDUCE_TIME\n// must be an integer and less than 16\nvar version = 5;\n\n// if you are using cluster or multiple servers use this to make each instance\n// has a unique value for worker\n// Note: I don't know if this is automatically set when using third\n// party cluster solutions such as pm2.\nvar clusterWorkerId = __webpack_require__(10) || 0;\n\n// Counter is used when shortid is called multiple times in one second.\nvar counter;\n\n// Remember the last time shortid was called in case counter is needed.\nvar previousSeconds;\n\n/**\n * Generate unique id\n * Returns string id\n */\nfunction generate() {\n\n    var str = '';\n\n    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);\n\n    if (seconds === previousSeconds) {\n        counter++;\n    } else {\n        counter = 0;\n        previousSeconds = seconds;\n    }\n\n    str = str + encode(alphabet.lookup, version);\n    str = str + encode(alphabet.lookup, clusterWorkerId);\n    if (counter > 0) {\n        str = str + encode(alphabet.lookup, counter);\n    }\n    str = str + encode(alphabet.lookup, seconds);\n\n    return str;\n}\n\n\n/**\n * Set the seed.\n * Highly recommended if you don't want people to try to figure out your id schema.\n * exposed as shortid.seed(int)\n * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.\n */\nfunction seed(seedValue) {\n    alphabet.seed(seedValue);\n    return module.exports;\n}\n\n/**\n * Set the cluster worker or machine id\n * exposed as shortid.worker(int)\n * @param workerId worker must be positive integer.  Number less than 16 is recommended.\n * returns shortid module so it can be chained.\n */\nfunction worker(workerId) {\n    clusterWorkerId = workerId;\n    return module.exports;\n}\n\n/**\n *\n * sets new characters to use in the alphabet\n * returns the shuffled alphabet\n */\nfunction characters(newCharacters) {\n    if (newCharacters !== undefined) {\n        alphabet.characters(newCharacters);\n    }\n\n    return alphabet.shuffled();\n}\n\n\n// Export all other functions as properties of the generate function\nmodule.exports = generate;\nmodule.exports.generate = generate;\nmodule.exports.seed = seed;\nmodule.exports.worker = worker;\nmodule.exports.characters = characters;\nmodule.exports.decode = decode;\nmodule.exports.isValid = isValid;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/index.js?")},function(module,exports,__webpack_require__){eval("'use strict';\nvar alphabet = __webpack_require__(1);\n\nfunction isShortId(id) {\n    if (!id || typeof id !== 'string' || id.length < 6 ) {\n        return false;\n    }\n\n    var characters = alphabet.characters();\n    var invalidCharacters = id.split('').map(function(char){\n        if (characters.indexOf(char) === -1) {\n            return char;\n        }\n    }).join('').split('').join('');\n\n    return invalidCharacters.length === 0;\n}\n\nmodule.exports = isShortId;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/is-valid.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/is-valid.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar crypto = window.crypto || window.msCrypto; // IE 11 uses window.msCrypto\n\nfunction randomByte() {\n    if (!crypto || !crypto.getRandomValues) {\n        return Math.floor(Math.random() * 256) & 0x30;\n    }\n    var dest = new Uint8Array(1);\n    crypto.getRandomValues(dest);\n    return dest[0] & 0x30;\n}\n\nmodule.exports = randomByte;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/random/random-byte-browser.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/random/random-byte-browser.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\n// Found this seed-based random generator somewhere\n// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)\n\nvar seed = 1;\n\n/**\n * return a random number based on a seed\n * @param seed\n * @returns {number}\n */\nfunction getNextValue() {\n    seed = (seed * 9301 + 49297) % 233280;\n    return seed/(233280.0);\n}\n\nfunction setSeed(_seed_) {\n    seed = _seed_;\n}\n\nmodule.exports = {\n    nextValue: getNextValue,\n    seed: setSeed\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/random/random-from-seed.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/random/random-from-seed.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nmodule.exports = 0;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/shortid/lib/util/cluster-worker-id-browser.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/shortid/lib/util/cluster-worker-id-browser.js?")},function(module,exports,__webpack_require__){eval('/*\r\n	MIT License http://www.opensource.org/licenses/mit-license.php\r\n	Author Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n	memoize = function(fn) {\r\n		var memo;\r\n		return function () {\r\n			if (typeof memo === "undefined") memo = fn.apply(this, arguments);\r\n			return memo;\r\n		};\r\n	},\r\n	isIE9 = memoize(function() {\r\n		return /msie 9\\b/.test(window.navigator.userAgent.toLowerCase());\r\n	}),\r\n	getHeadElement = memoize(function () {\r\n		return document.head || document.getElementsByTagName("head")[0];\r\n	}),\r\n	singletonElement = null,\r\n	singletonCounter = 0;\r\n\r\nmodule.exports = function(list, options) {\r\n	if(false) {\r\n		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\r\n	}\r\n\r\n	options = options || {};\r\n	// Force single-tag solution on IE9, which has a hard limit on the # of <style>\r\n	// tags it will allow on a page\r\n	if (typeof options.singleton === "undefined") options.singleton = isIE9();\r\n\r\n	var styles = listToStyles(list);\r\n	addStylesToDom(styles, options);\r\n\r\n	return function update(newList) {\r\n		var mayRemove = [];\r\n		for(var i = 0; i < styles.length; i++) {\r\n			var item = styles[i];\r\n			var domStyle = stylesInDom[item.id];\r\n			domStyle.refs--;\r\n			mayRemove.push(domStyle);\r\n		}\r\n		if(newList) {\r\n			var newStyles = listToStyles(newList);\r\n			addStylesToDom(newStyles, options);\r\n		}\r\n		for(var i = 0; i < mayRemove.length; i++) {\r\n			var domStyle = mayRemove[i];\r\n			if(domStyle.refs === 0) {\r\n				for(var j = 0; j < domStyle.parts.length; j++)\r\n					domStyle.parts[j]();\r\n				delete stylesInDom[domStyle.id];\r\n			}\r\n		}\r\n	};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n	for(var i = 0; i < styles.length; i++) {\r\n		var item = styles[i];\r\n		var domStyle = stylesInDom[item.id];\r\n		if(domStyle) {\r\n			domStyle.refs++;\r\n			for(var j = 0; j < domStyle.parts.length; j++) {\r\n				domStyle.parts[j](item.parts[j]);\r\n			}\r\n			for(; j < item.parts.length; j++) {\r\n				domStyle.parts.push(addStyle(item.parts[j], options));\r\n			}\r\n		} else {\r\n			var parts = [];\r\n			for(var j = 0; j < item.parts.length; j++) {\r\n				parts.push(addStyle(item.parts[j], options));\r\n			}\r\n			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n		}\r\n	}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n	var styles = [];\r\n	var newStyles = {};\r\n	for(var i = 0; i < list.length; i++) {\r\n		var item = list[i];\r\n		var id = item[0];\r\n		var css = item[1];\r\n		var media = item[2];\r\n		var sourceMap = item[3];\r\n		var part = {css: css, media: media, sourceMap: sourceMap};\r\n		if(!newStyles[id])\r\n			styles.push(newStyles[id] = {id: id, parts: [part]});\r\n		else\r\n			newStyles[id].parts.push(part);\r\n	}\r\n	return styles;\r\n}\r\n\r\nfunction createStyleElement() {\r\n	var styleElement = document.createElement("style");\r\n	var head = getHeadElement();\r\n	styleElement.type = "text/css";\r\n	head.appendChild(styleElement);\r\n	return styleElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n	var styleElement, update, remove;\r\n\r\n	if (options.singleton) {\r\n		var styleIndex = singletonCounter++;\r\n		styleElement = singletonElement || (singletonElement = createStyleElement());\r\n		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n	} else {\r\n		styleElement = createStyleElement();\r\n		update = applyToTag.bind(null, styleElement);\r\n		remove = function () {\r\n			styleElement.parentNode.removeChild(styleElement);\r\n		};\r\n	}\r\n\r\n	update(obj);\r\n\r\n	return function updateStyle(newObj) {\r\n		if(newObj) {\r\n			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n				return;\r\n			update(obj = newObj);\r\n		} else {\r\n			remove();\r\n		}\r\n	};\r\n}\r\n\r\nfunction replaceText(source, id, replacement) {\r\n	var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];\r\n	var start = source.lastIndexOf(boundaries[0]);\r\n	var wrappedReplacement = replacement\r\n		? (boundaries[0] + replacement + boundaries[1])\r\n		: "";\r\n	if (source.lastIndexOf(boundaries[0]) >= 0) {\r\n		var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;\r\n		return source.slice(0, start) + wrappedReplacement + source.slice(end);\r\n	} else {\r\n		return source + wrappedReplacement;\r\n	}\r\n}\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n	var css = remove ? "" : obj.css;\r\n\r\n	if(styleElement.styleSheet) {\r\n		styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);\r\n	} else {\r\n		var cssNode = document.createTextNode(css);\r\n		var childNodes = styleElement.childNodes;\r\n		if (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n		if (childNodes.length) {\r\n			styleElement.insertBefore(cssNode, childNodes[index]);\r\n		} else {\r\n			styleElement.appendChild(cssNode);\r\n		}\r\n	}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n	var css = obj.css;\r\n	var media = obj.media;\r\n	var sourceMap = obj.sourceMap;\r\n\r\n	if(sourceMap && typeof btoa === "function") {\r\n		try {\r\n			css += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";\r\n			css = "@import url(\\"data:text/css;base64," + btoa(css) + "\\")";\r\n		} catch(e) {}\r\n	}\r\n\r\n	if(media) {\r\n		styleElement.setAttribute("media", media)\r\n	}\r\n\r\n	if(styleElement.styleSheet) {\r\n		styleElement.styleSheet.cssText = css;\r\n	} else {\r\n		while(styleElement.firstChild) {\r\n			styleElement.removeChild(styleElement.firstChild);\r\n		}\r\n		styleElement.appendChild(document.createTextNode(css));\r\n	}\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/style-loader/addStyles.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?')},function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(3);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(11)(content, {});\n// Hot Module Replacement\nif(false) {\n	// When the styles change, update the <style> tags\n	module.hot.accept(\"!!/Users/patw/Projects/react-novacancy/node_modules/css-loader/index.js!/Users/patw/Projects/react-novacancy/node_modules/sass-loader/index.js?outputStyle=expanded!/Users/patw/Projects/react-novacancy/src/styles/styles.scss\", function() {\n		var newContent = require(\"!!/Users/patw/Projects/react-novacancy/node_modules/css-loader/index.js!/Users/patw/Projects/react-novacancy/node_modules/sass-loader/index.js?outputStyle=expanded!/Users/patw/Projects/react-novacancy/src/styles/styles.scss\");\n		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n		update(newContent);\n	});\n	// When the module is disposed, remove the <style> tags\n	module.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/styles/styles.scss\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/styles/styles.scss?")},function(module,exports,__webpack_require__){eval('module.exports = __WEBPACK_EXTERNAL_MODULE_13__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external "react"\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?')}])});