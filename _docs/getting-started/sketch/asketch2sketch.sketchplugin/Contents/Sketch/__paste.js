var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./asketch2sketch/paste.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asketch2sketch/asketch2sketch.js":
/*!******************************************!*\
  !*** ./asketch2sketch/asketch2sketch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asketch2sketch; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketchapp-json-plugin */ "./node_modules/sketchapp-json-plugin/lib/index.js");
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_fixFont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/fixFont */ "./asketch2sketch/helpers/fixFont.js");
/* harmony import */ var _helpers_fixImageFill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/fixImageFill */ "./asketch2sketch/helpers/fixImageFill.js");
/* harmony import */ var _helpers_fixBitmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/fixBitmap */ "./asketch2sketch/helpers/fixBitmap.js");
/* harmony import */ var _helpers_fixSVG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/fixSVG */ "./asketch2sketch/helpers/fixSVG.js");
/* harmony import */ var _helpers_zoomToFit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/zoomToFit */ "./asketch2sketch/helpers/zoomToFit.js");









function removeExistingLayers(context) {
  if (context.containsLayers()) {
    var loop = context.children().objectEnumerator();
    var currLayer = loop.nextObject();

    while (currLayer) {
      if (currLayer !== context) {
        currLayer.removeFromParent();
      }

      currLayer = loop.nextObject();
    }
  }
}

function getNativeLayer(failingLayers, layer) {
  // debug
  // console.log('Processing ' + layer.name + ' (' + layer._class + ')');
  if (layer._class === 'text') {
    Object(_helpers_fixFont__WEBPACK_IMPORTED_MODULE_3__["fixTextLayer"])(layer);
  } else if (layer._class === 'svg') {
    Object(_helpers_fixSVG__WEBPACK_IMPORTED_MODULE_6__["default"])(layer);
  } else if (layer._class === 'bitmap') {
    Object(_helpers_fixBitmap__WEBPACK_IMPORTED_MODULE_5__["default"])(layer);
  } else {
    Object(_helpers_fixImageFill__WEBPACK_IMPORTED_MODULE_4__["default"])(layer);
  } // Create native object for the current layer, ignore the children for now
  // this alows us to catch and ignore failing layers and finish the import


  var children = layer.layers;
  var nativeObj = null;
  layer.layers = [];

  try {
    nativeObj = Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(layer);
  } catch (e) {
    failingLayers.push(layer.name);
    console.log("Layer failed to import: ".concat(layer.name));
    return null;
  } // Get native object for all child layers and append them to the current object


  if (children && children.length) {
    children.forEach(function (child) {
      var nativeChild = getNativeLayer(failingLayers, child);

      if (nativeChild) {
        nativeObj.addLayer(nativeChild);
      }
    });
  }

  return nativeObj;
}

function removeSharedTextStyles(document) {
  document.documentData().layerTextStyles().setObjects([]);
}

function removeSharedLayerStyles(document) {
  document.documentData().layerStyles().setObjects([]);
}

function addSharedTextStyle(document, style) {
  var container = context.document.documentData().layerTextStyles();

  if (container.addSharedStyleWithName_firstInstance) {
    container.addSharedStyleWithName_firstInstance(style.name, Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(style.value));
  } else {
    var sharedStyle;
    var allocator = MSSharedStyle.alloc();

    if (allocator.initWithName_firstInstance) {
      sharedStyle = allocator.initWithName_firstInstance(style.name, Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(style.value));
    } else {
      sharedStyle = allocator.initWithName_style(style.name, Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(style.value));
    }

    container.addSharedObject(sharedStyle);
  }
}

function addSharedLayerStyle(document, _ref) {
  var name = _ref.name,
      style = _ref.style;
  sketch_dom__WEBPACK_IMPORTED_MODULE_1__["SharedStyle"].fromStyle({
    name: name,
    style: Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(style),
    document: document
  });
}

function removeSharedColors(document) {
  var assets = document.documentData().assets();
  assets.removeAllColorAssets();
}

function addSharedColor(document, colorJSON) {
  var assets = document.documentData().assets();
  var color = Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["fromSJSONDictionary"])(colorJSON);
  assets.addAsset(color);
}

function asketch2sketch(context, asketchFiles) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    removeSharedStyles: true,
    clearPage: true
  };
  var document = context.document;
  var page = document.currentPage();
  var asketchDocument = null;
  var asketchPage = null;
  asketchFiles.forEach(function (asketchFile) {
    if (asketchFile && asketchFile._class === 'document') {
      asketchDocument = asketchFile;
    } else if (asketchFile && asketchFile._class === 'page') {
      asketchPage = asketchFile;
    }
  });

  if (asketchDocument) {
    if (options && options.removeSharedStyles) {
      removeSharedColors(document);
      removeSharedTextStyles(document);
      removeSharedLayerStyles(document);
    }

    if (asketchDocument.assets.colors) {
      asketchDocument.assets.colors.forEach(function (color) {
        return addSharedColor(document, color);
      });
      console.log("Shared colors added: ".concat(asketchDocument.assets.colors.length));
    }

    if (asketchDocument.layerTextStyles && asketchDocument.layerTextStyles.objects) {
      asketchDocument.layerTextStyles.objects.forEach(function (style) {
        Object(_helpers_fixFont__WEBPACK_IMPORTED_MODULE_3__["fixSharedTextStyle"])(style);
        addSharedTextStyle(document, style);
      });
      console.log("Shared text styles added: ".concat(asketchDocument.layerTextStyles.objects.length));
    }

    if (asketchDocument.layerStyles && asketchDocument.layerStyles.objects) {
      asketchDocument.layerStyles.objects.forEach(function (sharedStyle) {
        addSharedLayerStyle(document, sharedStyle);
      });
      console.log("Shared layer styles added: ".concat(asketchDocument.layerStyles.objects.length));
    }
  }

  if (asketchPage) {
    if (options && options.clearPage) {
      removeExistingLayers(page);
    }

    page.name = asketchPage.name;
    var failingLayers = [];
    asketchPage.layers.map(getNativeLayer.bind(null, failingLayers)).forEach(function (layer) {
      return layer && page.addLayer(layer);
    });

    if (failingLayers.length === 1) {
      sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.alert('asketch2sketch', 'One layer couldn\'t be imported and was skipped.');
    } else if (failingLayers.length > 1) {
      sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.alert('asketch2sketch', "".concat(failingLayers.length, " layers couldn't be imported and were skipped."));
    } else {
      var emojis = ['👌', '👍', '✨', '😍', '🍾', '🤩', '🎉', '👏', '💪', '🤘', '💅', '🏆', '🚀'];
      sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message("Import successful ".concat(emojis[Math.floor(emojis.length * Math.random())]));
    }

    Object(_helpers_zoomToFit__WEBPACK_IMPORTED_MODULE_7__["default"])(context);
  }
}

/***/ }),

/***/ "./asketch2sketch/helpers/findFont.js":
/*!********************************************!*\
  !*** ./asketch2sketch/helpers/findFont.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashStyle */ "./asketch2sketch/helpers/hashStyle.js");
// taken from https://github.com/airbnb/react-sketchapp/blob/master/src/utils/findFont.js
 // Font displayed if San Francisco fonts are not found

var APPLE_BROKEN_SYSTEM_FONT = '.AppleSystemUIFont'; // this borrows heavily from react-native's RCTFont class
// thanks y'all
// https://github.com/facebook/react-native/blob/master/React/Views/RCTFont.mm

var FONT_STYLES = {
  normal: false,
  italic: true,
  oblique: true
};
var FONT_WEIGHTS = {
  normal: NSFontWeightRegular,
  bold: NSFontWeightBold,
  '100': NSFontWeightUltraLight,
  '200': NSFontWeightThin,
  '300': NSFontWeightLight,
  '400': NSFontWeightRegular,
  '500': NSFontWeightMedium,
  '600': NSFontWeightSemibold,
  '700': NSFontWeightBold,
  '800': NSFontWeightHeavy,
  '900': NSFontWeightBlack
};

var isItalicFont = function isItalicFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);
  var symbolicTraits = traits[NSFontSymbolicTrait].unsignedIntValue();
  return (symbolicTraits & NSFontItalicTrait) !== 0;
};

var isCondensedFont = function isCondensedFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);
  var symbolicTraits = traits[NSFontSymbolicTrait].unsignedIntValue();
  return (symbolicTraits & NSFontCondensedTrait) !== 0;
};

var weightOfFont = function weightOfFont(font) {
  var traits = font.fontDescriptor().objectForKey(NSFontTraitsAttribute);
  var weight = traits[NSFontWeightTrait].doubleValue();

  if (weight === 0.0) {
    var weights = Object.keys(FONT_WEIGHTS);

    for (var i = 0; i < weights.length; i += 1) {
      var w = weights[i];

      if (font.fontName().toLowerCase().endsWith(w)) {
        return FONT_WEIGHTS[w];
      }
    }
  }

  return weight;
};

var fontNamesForFamilyName = function fontNamesForFamilyName(familyName) {
  var manager = NSFontManager.sharedFontManager();
  var members = NSArray.arrayWithArray(manager.availableMembersOfFontFamily(familyName));
  var results = [];

  for (var i = 0; i < members.length; i += 1) {
    results.push(members[i][0]);
  }

  return results;
};

var useCache = true;

var _cache = new Map();

var getCached = function getCached(key) {
  if (!useCache) {
    return undefined;
  }

  return _cache.get(key);
};

var findFont = function findFont(style) {
  var cacheKey = Object(_hashStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style);
  var font = getCached(cacheKey);

  if (font) {
    return font;
  }

  var defaultFontFamily = NSFont.systemFontOfSize(14).familyName();
  var defaultFontWeight = NSFontWeightRegular;
  var defaultFontSize = 14;
  var fontSize = style.fontSize ? style.fontSize : defaultFontSize;
  var fontWeight = style.fontWeight ? FONT_WEIGHTS[style.fontWeight] : defaultFontWeight; // Default to Helvetica if fonts are missing

  var familyName = // Must use two equals (==) for compatibility with Cocoascript
  // eslint-disable-next-line eqeqeq
  defaultFontFamily == APPLE_BROKEN_SYSTEM_FONT ? 'Helvetica' : defaultFontFamily;
  var isItalic = false;
  var isCondensed = false;

  if (style.fontFamily) {
    familyName = style.fontFamily;
  }

  if (style.fontStyle) {
    isItalic = FONT_STYLES[style.fontStyle] || false;
  }

  var didFindFont = false; // Handle system font as special case. This ensures that we preserve
  // the specific metrics of the standard system font as closely as possible.

  if (familyName === defaultFontFamily || familyName === 'System') {
    font = NSFont.systemFontOfSize_weight(fontSize, fontWeight);

    if (font) {
      didFindFont = true;

      if (isItalic || isCondensed) {
        var fontDescriptor = font.fontDescriptor();
        var symbolicTraits = fontDescriptor.symbolicTraits();

        if (isItalic) {
          symbolicTraits |= NSFontItalicTrait;
        }

        if (isCondensed) {
          symbolicTraits |= NSFontCondensedTrait;
        }

        fontDescriptor = fontDescriptor.fontDescriptorWithSymbolicTraits(symbolicTraits);
        font = NSFont.fontWithDescriptor_size(fontDescriptor, fontSize);
      }
    }
  }

  var fontNames = fontNamesForFamilyName(familyName); // Gracefully handle being given a font name rather than font family, for
  // example: "Helvetica Light Oblique" rather than just "Helvetica".

  if (!didFindFont && fontNames.length === 0) {
    font = NSFont.fontWithName_size(familyName, fontSize);

    if (font) {
      // It's actually a font name, not a font family name,
      // but we'll do what was meant, not what was said.
      familyName = font.familyName();
      fontWeight = style.fontWeight ? fontWeight : weightOfFont(font);
      isItalic = style.fontStyle ? isItalic : isItalicFont(font);
      isCondensed = isCondensedFont(font);
    } else {
      console.log("Unrecognized font family '".concat(familyName, "'"));
      font = NSFont.systemFontOfSize_weight(fontSize, fontWeight);
    }
  } // Get the closest font that matches the given weight for the fontFamily


  var closestWeight = Infinity;

  for (var i = 0; i < fontNames.length; i += 1) {
    var match = NSFont.fontWithName_size(fontNames[i], fontSize);

    if (isItalic === isItalicFont(match) && isCondensed === isCondensedFont(match)) {
      var testWeight = weightOfFont(match);

      if (Math.abs(testWeight - fontWeight) < Math.abs(closestWeight - fontWeight)) {
        font = match;
        closestWeight = testWeight;
      }
    }
  } // If we still don't have a match at least return the first font in the fontFamily
  // This is to support built-in font Zapfino and other custom single font families like Impact


  if (!font) {
    if (fontNames.length > 0) {
      font = NSFont.fontWithName_size(fontNames[0], fontSize);
    }
  } // TODO(gold): support opentype features: small-caps & number types


  if (font) {
    _cache.set(cacheKey, font);
  }

  return font;
};

/* harmony default export */ __webpack_exports__["default"] = (findFont);

/***/ }),

/***/ "./asketch2sketch/helpers/fixBitmap.js":
/*!*********************************************!*\
  !*** ./asketch2sketch/helpers/fixBitmap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fixBitmapLayer; });
/* harmony import */ var _fixImageFill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixImageFill */ "./asketch2sketch/helpers/fixImageFill.js");

function fixBitmapLayer(layer) {
  Object(_fixImageFill__WEBPACK_IMPORTED_MODULE_0__["fixImageFill"])(layer, layer);
}

/***/ }),

/***/ "./asketch2sketch/helpers/fixFont.js":
/*!*******************************************!*\
  !*** ./asketch2sketch/helpers/fixFont.js ***!
  \*******************************************/
/*! exports provided: fixTextLayer, fixSharedTextStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTextLayer", function() { return fixTextLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixSharedTextStyle", function() { return fixSharedTextStyle; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./asketch2sketch/helpers/utils.js");
/* harmony import */ var sketch_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-constants */ "./node_modules/sketch-constants/lib/index.js");
/* harmony import */ var sketch_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketchapp-json-plugin */ "./node_modules/sketchapp-json-plugin/lib/index.js");
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _findFont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findFont */ "./asketch2sketch/helpers/findFont.js");
/* harmony import */ var _getSketchVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSketchVersion */ "./asketch2sketch/helpers/getSketchVersion.js");
// taken from https://github.com/airbnb/react-sketchapp/blob/master/src/jsonUtils/hacksForJSONImpl.js





var TEXT_ALIGN = {
  auto: sketch_constants__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"].Left,
  left: sketch_constants__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"].Left,
  right: sketch_constants__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"].Right,
  center: sketch_constants__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"].Center,
  justify: sketch_constants__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"].Justified
};
var TEXT_DECORATION_UNDERLINE = {
  none: 0,
  underline: 1,
  "double": 9
};
var TEXT_DECORATION_LINETHROUGH = {
  none: 0,
  'line-through': 1
}; // this doesn't exist in constants

var TEXT_TRANSFORM = {
  uppercase: 1,
  lowercase: 2,
  initial: 0,
  inherit: 0,
  none: 0,
  capitalize: 0
};

function makeParagraphStyle(textStyle) {
  var pStyle = NSMutableParagraphStyle.alloc().init();

  if (textStyle.lineHeight !== undefined) {
    pStyle.minimumLineHeight = textStyle.lineHeight;
    pStyle.lineHeightMultiple = 1.0;
    pStyle.maximumLineHeight = textStyle.lineHeight;
  }

  if (textStyle.textAlign) {
    pStyle.alignment = TEXT_ALIGN[textStyle.textAlign];
  }

  return pStyle;
}

function encodeSketchJSON(sketchObj) {
  var encoded = Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_2__["toSJSON"])(sketchObj);
  return encoded ? JSON.parse(encoded) : {};
} // This shouldn't need to call into Sketch, but it does currently, which is bad for perf :(


function createStringAttributes(textStyles) {
  var font = Object(_findFont__WEBPACK_IMPORTED_MODULE_3__["default"])(textStyles);
  var attribs = {
    MSAttributedStringFontAttribute: font.fontDescriptor(),
    NSFont: font,
    NSParagraphStyle: makeParagraphStyle(textStyles),
    NSUnderline: TEXT_DECORATION_UNDERLINE[textStyles.textDecoration] || 0,
    NSStrikethrough: TEXT_DECORATION_LINETHROUGH[textStyles.textDecoration] || 0
  };
  var color = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeColorFromCSS"])(textStyles.color || 'black');

  if (Object(_getSketchVersion__WEBPACK_IMPORTED_MODULE_4__["default"])() >= 50) {
    attribs.MSAttributedStringColorAttribute = color;
  } else {
    attribs.NSColor = NSColor.colorWithDeviceRed_green_blue_alpha(color.red, color.green, color.blue, color.alpha);
  }

  if (textStyles.letterSpacing !== undefined) {
    attribs.NSKern = textStyles.letterSpacing;
  }

  if (textStyles.textTransform !== undefined) {
    attribs.MSAttributedStringTextTransformAttribute = TEXT_TRANSFORM[textStyles.textTransform] * 1;
  }

  return attribs;
}

function createAttributedString(textNode) {
  var content = textNode.content,
      textStyles = textNode.textStyles;
  var attribs = createStringAttributes(textStyles);
  var result = null;

  try {
    result = NSAttributedString.attributedStringWithString_attributes_(content, attribs);
  } catch (e) {
    console.log("Failed to create attributed string: ".concat(e));
  }

  return result;
}

function makeEncodedAttributedString(textNodes) {
  var fullStr = NSMutableAttributedString.alloc().init();
  textNodes.forEach(function (textNode) {
    var newString = createAttributedString(textNode);

    if (newString !== null) {
      fullStr.appendAttributedString(newString);
    }
  });
  var encodedAttribStr = MSAttributedString.encodeAttributedString(fullStr);
  var msAttribStr = MSAttributedString.alloc().initWithEncodedAttributedString(encodedAttribStr);
  return encodeSketchJSON(msAttribStr);
}

function makeTextStyle(textStyle) {
  var pStyle = makeParagraphStyle(textStyle);
  var font = Object(_findFont__WEBPACK_IMPORTED_MODULE_3__["default"])(textStyle);
  var color = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeColorFromCSS"])(textStyle.color || 'black');
  var value = {
    _class: 'textStyle',
    encodedAttributes: {
      MSAttributedStringFontAttribute: encodeSketchJSON(font.fontDescriptor()),
      NSFont: font,
      NSColor: encodeSketchJSON(NSColor.colorWithDeviceRed_green_blue_alpha(color.red, color.green, color.blue, color.alpha)),
      NSParagraphStyle: encodeSketchJSON(pStyle),
      NSKern: textStyle.letterSpacing || 0,
      MSAttributedStringTextTransformAttribute: TEXT_TRANSFORM[textStyle.textTransform || 'initial'] * 1
    }
  };
  return {
    _class: 'style',
    sharedObjectID: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["generateID"])(),
    miterLimit: 10,
    startDecorationType: 0,
    endDecorationType: 0,
    textStyle: value
  };
}

function fixTextLayer(layer) {
  layer.attributedString = makeEncodedAttributedString([{
    content: layer.text,
    textStyles: layer.style
  }]);
  delete layer.style;
  delete layer.text;
}
function fixSharedTextStyle(sharedStyle) {
  sharedStyle.value = makeTextStyle(sharedStyle.style);
  delete sharedStyle.style;
}

/***/ }),

/***/ "./asketch2sketch/helpers/fixImageFill.js":
/*!************************************************!*\
  !*** ./asketch2sketch/helpers/fixImageFill.js ***!
  \************************************************/
/*! exports provided: fixImageFill, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixImageFill", function() { return fixImageFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fixImageFillsInLayer; });
/* harmony import */ var _fixSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixSVG */ "./asketch2sketch/helpers/fixSVG.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./asketch2sketch/helpers/utils.js");
// based on https://github.com/airbnb/react-sketchapp/blob/master/src/jsonUtils/hacksForJSONImpl.js


var IMG_SVG = 'svg';
var IMG_BLOB = 'blob';
var IMG_UNSUPPORTED = 'unsupported';
var IMG_ERROR = 'error';

function getImageDataFromUrl(url) {
  var fetchedData = NSData.dataWithContentsOfURL(NSURL.URLWithString(url));

  if (!fetchedData) {
    return {
      type: IMG_ERROR,
      data: null
    };
  }

  var firstByte = fetchedData.subdataWithRange(NSMakeRange(0, 1)).description(); // Check for first byte. Must use non-type-exact matching (!=).
  // 0xFF = JPEG, 0x89 = PNG, 0x47 = GIF, 0x49 = TIFF, 0x4D = TIFF

  if (
  /* eslint-disable eqeqeq */
  firstByte == '<3c>'
  /* eslint-enable eqeqeq */
  ) {
      var rawSVGString = NSString.alloc().initWithData_encoding_(fetchedData, NSUTF8StringEncoding);
      return {
        type: IMG_SVG,
        data: rawSVGString
      };
    } else if (
  /* eslint-disable eqeqeq */
  firstByte != '<ff>' && firstByte != '<89>' && firstByte != '<47>' && firstByte != '<49>' && firstByte != '<4d>'
  /* eslint-enable eqeqeq */
  ) {
      return {
        type: IMG_UNSUPPORTED,
        data: null
      };
    } else {
    return {
      type: IMG_BLOB,
      data: fetchedData
    };
  }
}
/**
 * @returns {NSImage} big red rectangle - our error image
 */


function getErrorImage() {
  // eslint-disable-next-line max-len
  var errorUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8w8DwHwAEOQHNmnaaOAAAAABJRU5ErkJggg==';
  return NSImage.alloc().initWithContentsOfURL(NSURL.URLWithString(errorUrl));
}

function fixImageFill(layer, fill) {
  if (!fill.image || !fill.image.url) {
    return null;
  }

  var _getImageDataFromUrl = getImageDataFromUrl(fill.image.url),
      imageType = _getImageDataFromUrl.type,
      imageData = _getImageDataFromUrl.data;

  if (imageType === IMG_SVG) {
    var svgLayer = {
      x: layer.frame.x,
      y: layer.frame.y,
      width: layer.frame.width,
      height: layer.frame.height,
      rawSVGString: imageData
    };
    Object(_fixSVG__WEBPACK_IMPORTED_MODULE_0__["default"])(svgLayer); // we are replacing the parent layer with SVGLayer

    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceProperties"])(layer, svgLayer);
  } else {
    var nsImage, msImage;

    if (imageType === IMG_ERROR || imageType === IMG_UNSUPPORTED) {
      nsImage = getErrorImage();
    } else {
      nsImage = NSImage.alloc().initWithData(imageData);
    }

    if (MSImageData.alloc().initWithImage_convertColorSpace !== undefined) {
      msImage = MSImageData.alloc().initWithImage_convertColorSpace(nsImage, false);
    } else {
      msImage = MSImageData.alloc().initWithImage(nsImage);
    }

    var data = msImage.data().base64EncodedStringWithOptions(NSDataBase64EncodingEndLineWithCarriageReturn);
    var sha1 = msImage.sha1().base64EncodedStringWithOptions(NSDataBase64EncodingEndLineWithCarriageReturn);
    fill.image.data = {
      _data: data
    };
    fill.image.sha1 = {
      _data: sha1
    };
    delete fill.image.url;
  }

  return imageType;
}
function fixImageFillsInLayer(layer) {
  if (!layer.style || !layer.style.fills) {
    return;
  }

  var fills = layer.style.fills;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fill = _step.value;
      var imageType = fixImageFill(layer, fill);

      if (imageType === IMG_SVG) {
        // since we can't replace the parent twice, we have to bail out
        return;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./asketch2sketch/helpers/fixSVG.js":
/*!******************************************!*\
  !*** ./asketch2sketch/helpers/fixSVG.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fixSVGLayer; });
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketchapp-json-plugin */ "./node_modules/sketchapp-json-plugin/lib/index.js");
/* harmony import */ var sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./asketch2sketch/helpers/utils.js");



function makeNativeSVGLayer(layer) {
  var svgString = NSString.stringWithString(layer.rawSVGString);
  var svgData = svgString.dataUsingEncoding(NSUTF8StringEncoding);
  var svgImporter = MSSVGImporter.svgImporter();
  var svgLayer = null;

  try {
    svgImporter.prepareToImportFromData(svgData);
    svgLayer = svgImporter.importAsLayer();
  } catch (e) {
    console.log("SVG import failed: ".concat(e));
  }

  if (svgLayer === null) {
    return null;
  }

  while (svgLayer["class"]() instanceof MSLayerGroup && svgLayer.layers().length === 1) {
    svgLayer = svgLayer.layers()[0];
  }

  svgLayer.resizingConstraint = layer.resizingConstraint;
  svgLayer.hasClippingMask = layer.hasClippingMask;
  var currentSize = svgLayer.rect().size;
  var scale = Math.min(layer.width / currentSize.width, layer.height / currentSize.height);

  if (scale !== 1) {
    // scaling instead of resizing (changing width and height directly) recalculates border radius
    svgLayer.multiplyBy(scale);
  }

  svgLayer.rect = {
    origin: {
      x: layer.x,
      y: layer.y
    },
    size: {
      width: layer.width,
      height: layer.height
    }
  };
  return svgLayer;
}

function fixSVGLayer(layer) {
  var svgLayer = makeNativeSVGLayer(layer);

  if (svgLayer === null) {
    return;
  }

  var newLayerString = Object(sketchapp_json_plugin__WEBPACK_IMPORTED_MODULE_0__["toSJSON"])(svgLayer);
  var newLayerObject = JSON.parse(newLayerString);
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceProperties"])(layer, newLayerObject);
}

/***/ }),

/***/ "./asketch2sketch/helpers/getSketchVersion.js":
/*!****************************************************!*\
  !*** ./asketch2sketch/helpers/getSketchVersion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSketchVersion; });
function getSketchVersion() {
  if (typeof NSBundle !== 'undefined') {
    return parseFloat(NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString);
  }

  return 0;
}

/***/ }),

/***/ "./asketch2sketch/helpers/hashStyle.js":
/*!*********************************************!*\
  !*** ./asketch2sketch/helpers/hashStyle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hashStyle; });
/* harmony import */ var murmur2js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! murmur2js */ "./node_modules/murmur2js/index.js");
/* harmony import */ var murmur2js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(murmur2js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sortObjectKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortObjectKeys */ "./asketch2sketch/helpers/sortObjectKeys.js");


function hashStyle(obj) {
  return obj ? murmur2js__WEBPACK_IMPORTED_MODULE_0___default()(JSON.stringify(Object(_sortObjectKeys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj))) : 0;
}

/***/ }),

/***/ "./asketch2sketch/helpers/sortObjectKeys.js":
/*!**************************************************!*\
  !*** ./asketch2sketch/helpers/sortObjectKeys.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sortObjectKeys = function sortObjectKeys(obj) {
  var keys = Object.keys(obj).sort();
  return keys.reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, key, obj[key]));
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (sortObjectKeys);

/***/ }),

/***/ "./asketch2sketch/helpers/utils.js":
/*!*****************************************!*\
  !*** ./asketch2sketch/helpers/utils.js ***!
  \*****************************************/
/*! exports provided: generateID, makeColorFromCSS, replaceProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return generateID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorFromCSS", function() { return makeColorFromCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceProperties", function() { return replaceProperties; });
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-css-color */ "./node_modules/normalize-css-color/index.js");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);

var lut = [];

for (var i = 0; i < 256; i += 1) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
} // Hack (http://stackoverflow.com/a/21963136)


function e7() {
  var d0 = Math.random() * 0xffffffff | 0;
  var d1 = Math.random() * 0xffffffff | 0;
  var d2 = Math.random() * 0xffffffff | 0;
  var d3 = Math.random() * 0xffffffff | 0;
  return "".concat(lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff], "-").concat(lut[d1 & 0xff]).concat(lut[d1 >> 8 & 0xff], "-").concat(lut[d1 >> 16 & 0x0f | 0x40]).concat(lut[d1 >> 24 & 0xff], "-").concat(lut[d2 & 0x3f | 0x80]).concat(lut[d2 >> 8 & 0xff], "-").concat(lut[d2 >> 16 & 0xff]).concat(lut[d2 >> 24 & 0xff]).concat(lut[d3 & 0xff]).concat(lut[d3 >> 8 & 0xff]).concat(lut[d3 >> 16 & 0xff]).concat(lut[d3 >> 24 & 0xff]);
}

function generateID() {
  return e7();
}

var safeToLower = function safeToLower(input) {
  if (typeof input === 'string') {
    return input.toLowerCase();
  }

  return input;
}; // Takes colors as CSS hex, name, rgb, rgba, hsl or hsla


var makeColorFromCSS = function makeColorFromCSS(input) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var nullableColor = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(safeToLower(input));
  var colorInt = nullableColor === null ? 0x00000000 : nullableColor;

  var _normalizeColor$rgba = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default.a.rgba(colorInt),
      r = _normalizeColor$rgba.r,
      g = _normalizeColor$rgba.g,
      b = _normalizeColor$rgba.b,
      a = _normalizeColor$rgba.a;

  return {
    _class: 'color',
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a * alpha
  };
};
function replaceProperties(dest, src) {
  for (var prop in dest) {
    if (dest.hasOwnProperty(prop)) {
      delete dest[prop];
    }
  }

  for (var _prop in src) {
    if (src.hasOwnProperty(_prop)) {
      dest[_prop] = src[_prop];
    }
  }
}

/***/ }),

/***/ "./asketch2sketch/helpers/zoomToFit.js":
/*!*********************************************!*\
  !*** ./asketch2sketch/helpers/zoomToFit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zoomToFit; });
function _getCurrentView(doc) {
  if (doc.currentView) {
    return doc.currentView();
  } else if (doc.contentDrawView) {
    return doc.contentDrawView();
  }

  console.log('zoomToFit: can not get the currentView');
  return null;
}

function zoomToFit(context) {
  var doc = context.document;
  var page = doc.currentPage();
  var layers = page.layers();

  var view = _getCurrentView(doc);

  var rect = layers.reduce(function (result, layer) {
    var frame = layer.frame();
    var minX = frame.x();
    var minY = frame.y();
    var maxX = frame.x() + frame.width();
    var maxY = frame.y() + frame.height();

    if (result === null) {
      return {
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY
      };
    }

    if (minX < result.minX) {
      result.minX = minX;
    }

    if (minY < result.minY) {
      result.minY = minY;
    }

    if (maxX > result.maxX) {
      result.maxX = maxX;
    }

    if (maxY > result.maxY) {
      result.maxY = maxY;
    }

    return result;
  }, null);

  if (!rect) {
    return;
  }

  var x = rect.minX;
  var y = rect.minY;
  var width = rect.maxX - rect.minX;
  var height = rect.maxY - rect.minY;
  view.zoomToFitRect(NSMakeRect(x, y, width, height));
}

/***/ }),

/***/ "./asketch2sketch/paste.js":
/*!*********************************!*\
  !*** ./asketch2sketch/paste.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return paste; });
/* harmony import */ var _asketch2sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asketch2sketch */ "./asketch2sketch/asketch2sketch.js");

function paste(context) {
  var clipboardContent = NSPasteboard.generalPasteboard().stringForType(NSPasteboardTypeString);
  var clipboardJson = null;

  try {
    clipboardJson = JSON.parse(clipboardContent);
  } catch (e) {
    var alert = NSAlert.alloc().init();
    alert.setMessageText('Clipboard content is not valid JSON.');
    alert.runModal();
    return;
  }

  var asketchFiles = Array.isArray(clipboardJson) ? clipboardJson : [clipboardJson];
  Object(_asketch2sketch__WEBPACK_IMPORTED_MODULE_0__["default"])(context, asketchFiles);
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/murmur2js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/murmur2js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {int} hash result
 */
module.exports = function murmur2js(str) {
  var l = str.length;
  var h = l;
  var i = 0;
  var k;

  while (l >= 4) {
    k = ((str.charCodeAt(i) & 0xff)) |
      ((str.charCodeAt(++i) & 0xff) << 8) |
      ((str.charCodeAt(++i) & 0xff) << 16) |
      ((str.charCodeAt(++i) & 0xff) << 24);

    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
    k ^= k >>> 24;
    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

    h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1: h ^= (str.charCodeAt(i) & 0xff);
      h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  }

  h ^= h >>> 13;
  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
  h ^= h >>> 15;

  return h >>> 0;
};


/***/ }),

/***/ "./node_modules/normalize-css-color/index.js":
/*!***************************************************!*\
  !*** ./node_modules/normalize-css-color/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "./node_modules/sketch-constants/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/sketch-constants/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FillType = exports.FillType = {
    Solid: 0,
    Gradient: 1,
    Pattern: 4,
    Noise: 5
};

var GradientType = exports.GradientType = {
    Linear: 0,
    Radial: 1,
    Circular: 2
};

var PatternFillType = exports.PatternFillType = {
    Tile: 0,
    Fill: 1,
    Stretch: 2,
    Fit: 3
};

var NoiseFillType = exports.NoiseFillType = {
    Original: 0,
    Black: 1,
    White: 2,
    Color: 3
};

var BorderLineCapsStyle = exports.BorderLineCapsStyle = {
    Butt: 0,
    Round: 1,
    Square: 2
};

var BorderLineJoinStyle = exports.BorderLineJoinStyle = {
    Miter: 0,
    Round: 1,
    Bevel: 2
};

var LineDecorationType = exports.LineDecorationType = {
    None: 0,
    OpenedArrow: 1,
    ClosedArrow: 2,
    Bar: 3
};

var BlurType = exports.BlurType = {
    GaussianBlur: 0,
    MotionBlur: 1,
    ZoomBlur: 2,
    BackgroundBlur: 3
};

var BorderPosition = exports.BorderPosition = {
    Center: 0,
    Inside: 1,
    Outside: 2
};

var MaskMode = exports.MaskMode = {
    Outline: 0,
    Alpha: 1
};

var BooleanOperation = exports.BooleanOperation = {
    None: -1,
    Union: 0,
    Subtract: 1,
    Intersect: 2,
    Difference: 3
};

var ExportOptionsFormat = exports.ExportOptionsFormat = {
    PNG: 'png',
    JPG: 'jpg',
    TIFF: 'tiff',
    PDF: 'pdf',
    EPS: 'eps',
    SVG: 'svg'
};

var BlendingMode = exports.BlendingMode = {
    Normal: 0,
    Darken: 1,
    Multiply: 2,
    ColorBurn: 3,
    Lighten: 4,
    Screen: 5,
    ColorDodge: 6,
    Overlay: 7,
    SoftLight: 8,
    HardLight: 9,
    Difference: 10,
    Exclusion: 11,
    Hue: 12,
    Saturation: 13,
    Color: 14,
    Luminosity: 15
};

var TextAlignment = exports.TextAlignment = {
    Left: 0,
    Right: 1,
    Center: 2,
    Justified: 3
};

var TextBehaviour = exports.TextBehaviour = {
    Auto: 0,
    Fixed: 1
};

var CurvePointMode = exports.CurvePointMode = {
    Straight: 1,
    Mirrored: 2,
    Disconnected: 4,
    Asymmetric: 3
};

/***/ }),

/***/ "./node_modules/sketchapp-json-plugin/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sketchapp-json-plugin/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appVersionSupported = appVersionSupported;
exports.toSJSON = toSJSON;
exports.fromSJSON = fromSJSON;
exports.fromSJSONDictionary = fromSJSONDictionary;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
This is pretty simplistic at the moment, since it doesn't handle references. More work is needed to actually
*/

/*
Versions based on discussion info: http://sketchplugins.com/d/316-sketch-version
*/
// Internal Sketch Version (ex: 95 => v47 and below)
var SKETCH_HIGHEST_COMPATIBLE_VERSION = '95';
// External Sketch Version
var SKETCH_LOWEST_COMPATIBLE_APP_VERSION = '43';

var envOK = typeof MSJSONDataArchiver !== 'undefined' && typeof MSJSONDictionaryUnarchiver !== 'undefined';

function appVersion() {
  if (typeof NSBundle !== 'undefined') {
    return NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString;
  } else {
    return undefined;
  }
}

var _checkEnv = function _checkEnv() {
  return (0, _invariant2.default)(envOK, 'sketchapp-json-plugin needs to run within Sketch v' + SKETCH_LOWEST_COMPATIBLE_APP_VERSION + '+. You are running ' + appVersion());
};

function appVersionSupported() {
  return envOK;
}

// Converts an object, eg from context.selection into its JSON string representation
function toSJSON(sketchObject) {
  _checkEnv();
  if (!sketchObject) {
    return null;
  }
  var imm = sketchObject.immutableModelObject();
  return MSJSONDataArchiver.archiveStringWithRootObject_error_(imm, null);
}

function fromSJSON(json) {
  _checkEnv();
  var dict = JSON.parse(json);
  if (!dict) return null;
  if (dict._class.length <= 0) {
    return null;
  }
  return fromSJSONDictionary(dict);
}

// Takes a Sketch JSON tree and turns it into a native object. May throw on invalid data
function fromSJSONDictionary(jsonTree) {
  _checkEnv();
  var decoded = MSJSONDictionaryUnarchiver.unarchiveObjectFromDictionary_asVersion_corruptionDetected_error(jsonTree, SKETCH_HIGHEST_COMPATIBLE_VERSION, null, null);
  var mutableClass = decoded.class().mutableClass();
  return mutableClass.alloc().initWithImmutableModelObject(decoded);
}

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__paste.js.map