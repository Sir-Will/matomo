(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", ], factory);
	else if(typeof exports === 'object')
		exports["CorePluginsAdmin"] = factory(require("CoreHome"), require("vue"));
	else
		root["CorePluginsAdmin"] = factory(root["CoreHome"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "plugins/CorePluginsAdmin/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FormField", function() { return /* reexport */ FormField; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FormField.vue?vue&type=template&id=a293a630
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _hoisted_1 = {
  class: "form-group row"
};
var _hoisted_2 = {
  key: 0,
  class: "col s12"
};
var _hoisted_3 = {
  key: 0,
  class: "form-help"
};
var _hoisted_4 = {
  class: "inline-help",
  ref: "inlineHelp"
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [_ctx.formField.introduction ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h3", _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formField.introduction), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])(_ctx.childComponent), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: ["col s12", {
      'input-field': _ctx.formField.uiControl !== 'checkbox' && _ctx.formField.uiControl !== 'radio',
      'file-field': _ctx.formField.uiControl === 'file',
      'm6': !_ctx.formField.fullWidth
    }],
    onload: "templateLoaded()"
  }, _objectSpread(_objectSpread({}, _ctx.formField), {}, {
    availableOptions: _ctx.availableOptions
  }, _ctx.extraChildComponentParams), {
    value: _ctx.processedModelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }), null, 16, ["class", "value"])), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["col s12", {
      'm6': !_ctx.formField.fullWidth
    }])
  }, [_ctx.showFormHelp ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "form-description"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.formField.description), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.formField.description]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_4, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Default')) + ": ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.defaultValuePretty.substring(0, 50)), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showDefaultValue]])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)], 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showField]]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FormField.vue?vue&type=template&id=a293a630

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckbox.vue?vue&type=template&id=66df3730

var FieldCheckboxvue_type_template_id_66df3730_hoisted_1 = {
  class: "checkbox"
};
var FieldCheckboxvue_type_template_id_66df3730_hoisted_2 = ["checked", "id", "name"];
var FieldCheckboxvue_type_template_id_66df3730_hoisted_3 = ["innerHTML"];
function FieldCheckboxvue_type_template_id_66df3730_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FieldCheckboxvue_type_template_id_66df3730_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange();
    })
  }, _ctx.uiControlAttributes, {
    value: 1,
    checked: !!_ctx.modelValue,
    type: "checkbox",
    id: _ctx.name,
    name: _ctx.name
  }), null, 16, FieldCheckboxvue_type_template_id_66df3730_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldCheckboxvue_type_template_id_66df3730_hoisted_3)])]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckbox.vue?vue&type=template&id=66df3730

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckbox.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldCheckboxvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: null,
    uiControlAttributes: Object,
    value: null,
    name: String,
    title: String
  },
  emits: ['update:modelValue'],
  methods: {
    onChange: function onChange(event) {
      if (this.modelValue !== event.target.checked) {
        this.$emit('update:modelValue', event.target.checked);
      }
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckbox.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckbox.vue



FieldCheckboxvue_type_script_lang_ts.render = FieldCheckboxvue_type_template_id_66df3730_render

/* harmony default export */ var FieldCheckbox = (FieldCheckboxvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckboxArray.vue?vue&type=template&id=6e9cfb20

var FieldCheckboxArrayvue_type_template_id_6e9cfb20_hoisted_1 = ["value", "checked", "onChange", "id", "name"];
function FieldCheckboxArrayvue_type_template_id_6e9cfb20_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    class: "fieldRadioTitle"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.title]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.availableOptions, function (checkboxModel, $index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
      key: $index,
      class: "checkbox"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
      value: checkboxModel.key,
      checked: !!_ctx.checkboxStates[$index],
      onChange: function onChange($event) {
        return _ctx.onChangeState($index);
      }
    }, _ctx.uiControlAttributes, {
      type: "checkbox",
      id: "".concat(_ctx.name).concat(checkboxModel.key),
      name: checkboxModel.name
    }), null, 16, FieldCheckboxArrayvue_type_template_id_6e9cfb20_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(checkboxModel.value), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "form-description"
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(checkboxModel.description), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], checkboxModel.description]])])]);
  }), 128))]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckboxArray.vue?vue&type=template&id=6e9cfb20

// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/utilities.ts
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
function processCheckboxAndRadioAvailableValues(availableValues, type) {
  if (!availableValues) {
    return [];
  } // TODO: check Object.entries([...]) on old browsers


  var flatValues = [];
  Object.entries(availableValues).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        valueObjKey = _ref2[0],
        value = _ref2[1];

    if (_typeof(value) === 'object' && typeof value.key !== 'undefined') {
      flatValues.push(value);
      return;
    }

    var key = valueObjKey;

    if (type === 'integer' && typeof valueObjKey === 'string') {
      key = parseInt(key, 10);
    }

    flatValues.push({
      key: key,
      value: value
    });
  });
  return flatValues;
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckboxArray.vue?vue&type=script&lang=ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || FieldCheckboxArrayvue_type_script_lang_ts_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FieldCheckboxArrayvue_type_script_lang_ts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FieldCheckboxArrayvue_type_script_lang_ts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FieldCheckboxArrayvue_type_script_lang_ts_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return FieldCheckboxArrayvue_type_script_lang_ts_arrayLikeToArray(arr); }

function FieldCheckboxArrayvue_type_script_lang_ts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // TODO: how often is this called

function getCheckboxStates(availableOptions, modelValue) {
  return Object.values(availableOptions).map(function (o) {
    return modelValue.indexOf(o.key) !== -1;
  });
}

/* harmony default export */ var FieldCheckboxArrayvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: Object,
    name: String,
    title: String,
    availableValues: Array,
    uiControlAttributes: Object,
    type: String
  },
  emits: ['update:modelValue'],
  computed: {
    checkboxStates: function checkboxStates() {
      return getCheckboxStates(this.availableOptions, this.modelValue);
    },
    availableOptions: function availableOptions() {
      return processCheckboxAndRadioAvailableValues(this.availableValues, this.type);
    }
  },
  mounted: function mounted() {
    window.Materialize.updateTextFields();
  },
  methods: {
    onChange: function onChange(changedIndex) {
      var checkboxStates = _toConsumableArray(this.checkboxStates);

      checkboxStates[changedIndex] = !checkboxStates[changedIndex];
      var newValue = [];
      Object.values(this.availableOptions).forEach(function (option, index) {
        if (checkboxStates[index]) {
          newValue.push(option.key);
        }
      });
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckboxArray.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldCheckboxArray.vue



FieldCheckboxArrayvue_type_script_lang_ts.render = FieldCheckboxArrayvue_type_template_id_6e9cfb20_render

/* harmony default export */ var FieldCheckboxArray = (FieldCheckboxArrayvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldExpandableSelect.vue?vue&type=template&id=420aae86

var FieldExpandableSelectvue_type_template_id_420aae86_hoisted_1 = {
  class: "expandableSelector"
};

var FieldExpandableSelectvue_type_template_id_420aae86_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("svg", {
  class: "caret",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  d: "M7 10l5 5 5-5z"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
})], -1);

var FieldExpandableSelectvue_type_template_id_420aae86_hoisted_3 = ["value"];
var FieldExpandableSelectvue_type_template_id_420aae86_hoisted_4 = {
  class: "expandableList z-depth-2"
};
var FieldExpandableSelectvue_type_template_id_420aae86_hoisted_5 = {
  class: "searchContainer"
};
var _hoisted_6 = {
  class: "collection firstLevel"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  class: "collection secondLevel"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  class: "primary-content"
};
var _hoisted_11 = ["title"];
function FieldExpandableSelectvue_type_template_id_420aae86_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_focus_if = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("focus-if");

  var _directive_focus_anywhere_but_here = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("focus-anywhere-but-here");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FieldExpandableSelectvue_type_template_id_420aae86_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.showSelect = !_ctx.showSelect;
    }),
    class: "select-wrapper"
  }, [FieldExpandableSelectvue_type_template_id_420aae86_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    class: "select-dropdown",
    readonly: "readonly",
    value: _ctx.title
  }, null, 8, FieldExpandableSelectvue_type_template_id_420aae86_hoisted_3)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FieldExpandableSelectvue_type_template_id_420aae86_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FieldExpandableSelectvue_type_template_id_420aae86_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    placeholder: "Search",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.searchTerm = $event;
    }),
    class: "expandableSearch browser-default"
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.searchTerm], [_directive_focus_if, _ctx.showSelect]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_6, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.availableOptions, function (options, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      class: "collection-item",
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", {
      class: "expandableListCategory",
      onClick: function onClick($event) {
        return _ctx.onCategoryClicked(options);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(options.group) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["secondary-content", {
        "icon-arrow-right": _ctx.showCategory !== options.group,
        "icon-arrow-bottom": _ctx.showCategory === options.group
      }])
    }, null, 2)], 8, _hoisted_7), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_8, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(options.values.filter(function (x) {
      return x.indexOf(_ctx.searchTerm) !== -1;
    }), function (children) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
        class: "expandableListItem collection-item valign-wrapper",
        key: children.key,
        onClick: function onClick($event) {
          return _ctx.onValueClicked($event, children);
        }
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(children.value), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        title: children.tooltip,
        class: "secondary-content icon-help"
      }, null, 8, _hoisted_11), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], children.tooltip]])], 8, _hoisted_9);
    }), 128))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showCategory === options.group || _ctx.searchTerm]])], 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], options.values.filter(function (x) {
      return x.indexOf(_ctx.searchTerm) !== -1;
    }).length]]);
  }), 128))])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showSelect]])], 512)), [[_directive_focus_anywhere_but_here, {
    blur: _ctx.onBlur
  }]]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldExpandableSelect.vue?vue&type=template&id=420aae86

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldExpandableSelect.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldExpandableSelectvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: String,
    availableValues: Array
  },
  directives: {
    FocusAnywhereButHere: external_CoreHome_["FocusAnywhereButHere"],
    FocusIf: external_CoreHome_["FocusIf"]
  },
  // emits modelValue update, but doesn't sync to input value. same as angularjs directive.
  emits: ['update:modelValue'],
  computed: {
    availableOptions: function availableOptions() {
      var availableValues = this.availableValues;
      var flatValues = [];
      var groups = {};
      Object.values(availableValues).forEach(function (uncastedValue) {
        var value = uncastedValue;
        var group = value.group || '';

        if (!(group in groups) || !groups[group]) {
          groups[group] = {
            values: [],
            group: group
          };
        }

        var formatted = {
          key: value.key,
          value: value.value
        };

        if ('tooltip' in value && value.tooltip) {
          formatted.tooltip = value.tooltip;
        }

        groups[group].values.push(formatted);
      });
      Object.values(groups).forEach(function (group) {
        if (group.values.length) {
          flatValues.push(group);
        }
      });
      return flatValues;
    }
  },
  data: function data() {
    return {
      showSelect: false,
      searchTerm: '',
      showCategory: ''
    };
  },
  methods: {
    onBlur: function onBlur() {
      this.showSelect = false;
    },
    onCategoryClicked: function onCategoryClicked(options) {
      if (this.showCategory === options.group) {
        this.showCategory = '';
      } else {
        this.showCategory = options.group;
      }
    },
    onValueClicked: function onValueClicked(selectedValue) {
      this.$emit('update:modelValue', selectedValue.key);
      this.showSelect = false;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldExpandableSelect.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldExpandableSelect.vue



FieldExpandableSelectvue_type_script_lang_ts.render = FieldExpandableSelectvue_type_template_id_420aae86_render

/* harmony default export */ var FieldExpandableSelect = (FieldExpandableSelectvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldFieldArray.vue?vue&type=template&id=64be045e

var FieldFieldArrayvue_type_template_id_64be045e_hoisted_1 = ["for", "innerHTML"];
function FieldFieldArrayvue_type_template_id_64be045e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FieldArray = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("FieldArray");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldFieldArrayvue_type_template_id_64be045e_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_FieldArray, {
    name: _ctx.name,
    "model-value": _ctx.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onValueUpdate($event);
    }),
    field: _ctx.uiControlAttributes.field
  }, null, 8, ["name", "model-value", "field"])]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFieldArray.vue?vue&type=template&id=64be045e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldFieldArray.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldFieldArrayvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    FieldArray: external_CoreHome_["FieldArray"]
  },
  props: {
    name: String,
    title: String,
    value: null,
    uiControlAttributes: Object
  },
  emits: ['update:modelValue'],
  methods: {
    onValueUpdate: function onValueUpdate(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFieldArray.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFieldArray.vue



FieldFieldArrayvue_type_script_lang_ts.render = FieldFieldArrayvue_type_template_id_64be045e_render

/* harmony default export */ var FieldFieldArray = (FieldFieldArrayvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldFile.vue?vue&type=template&id=79077467

var FieldFilevue_type_template_id_79077467_hoisted_1 = {
  class: "btn"
};
var FieldFilevue_type_template_id_79077467_hoisted_2 = ["for", "innerHTML"];
var FieldFilevue_type_template_id_79077467_hoisted_3 = ["name", "id"];
var FieldFilevue_type_template_id_79077467_hoisted_4 = {
  class: "file-path-wrapper"
};
var FieldFilevue_type_template_id_79077467_hoisted_5 = ["value"];
function FieldFilevue_type_template_id_79077467_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FieldFilevue_type_template_id_79077467_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldFilevue_type_template_id_79077467_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    ref: "fileInput",
    name: _ctx.name,
    type: "file",
    id: _ctx.name,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, null, 40, FieldFilevue_type_template_id_79077467_hoisted_3)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", FieldFilevue_type_template_id_79077467_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    class: "file-path validate",
    value: _ctx.value,
    type: "text"
  }, null, 8, FieldFilevue_type_template_id_79077467_hoisted_5)])]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFile.vue?vue&type=template&id=79077467

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldFile.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldFilevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    title: String,
    value: String
  },
  emits: ['update:modelValue'],
  setup: function setup(props) {
    var fileInput = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.value;
    }, function (v) {
      if (v === '') {
        var fileInputElement = fileInput.value;
        fileInputElement.value = '';
      }
    });
    return {
      fileInput: fileInput
    };
  },
  methods: {
    onChange: function onChange(event) {
      var file = event.target.files.item(0);
      this.$emit('update:modelValue', file);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFile.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldFile.vue



FieldFilevue_type_script_lang_ts.render = FieldFilevue_type_template_id_79077467_render

/* harmony default export */ var FieldFile = (FieldFilevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldHidden.vue?vue&type=template&id=b1fb9210

var FieldHiddenvue_type_template_id_b1fb9210_hoisted_1 = ["type", "name", "value"];
function FieldHiddenvue_type_template_id_b1fb9210_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: _ctx.uiControl,
    name: _ctx.name,
    value: _ctx.value,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, null, 40, FieldHiddenvue_type_template_id_b1fb9210_hoisted_1)]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldHidden.vue?vue&type=template&id=b1fb9210

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldHidden.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldHiddenvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    value: null,
    uiControl: String,
    name: String
  },
  emits: ['update:modelValue'],
  methods: {
    onChange: function onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldHidden.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldHidden.vue



FieldHiddenvue_type_script_lang_ts.render = FieldHiddenvue_type_template_id_b1fb9210_render

/* harmony default export */ var FieldHidden = (FieldHiddenvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldMultituple.vue?vue&type=template&id=0b8dc11a

var FieldMultituplevue_type_template_id_0b8dc11a_hoisted_1 = {
  class: "fieldMultiTuple"
};
var FieldMultituplevue_type_template_id_0b8dc11a_hoisted_2 = ["for", "innerHTML"];
function FieldMultituplevue_type_template_id_0b8dc11a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MultiPairField = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MultiPairField");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", FieldMultituplevue_type_template_id_0b8dc11a_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldMultituplevue_type_template_id_0b8dc11a_hoisted_2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_MultiPairField, {
    name: _ctx.name,
    "model-value": _ctx.value,
    "onUpdate:modelValue": _ctx.onUpdateValue,
    field1: _ctx.uiControlAttributes.field1,
    field2: _ctx.uiControlAttributes.field2,
    field3: _ctx.uiControlAttributes.field3,
    field4: _ctx.uiControlAttributes.field4
  }, null, 8, ["name", "model-value", "onUpdate:modelValue", "field1", "field2", "field3", "field4"])]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldMultituple.vue?vue&type=template&id=0b8dc11a

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldMultituple.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldMultituplevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    title: String,
    value: null,
    uiControlAttributes: Object
  },
  components: {
    MultiPairField: external_CoreHome_["MultiPairField"]
  },
  emits: ['update:modelValue'],
  methods: {
    onUpdateValue: function onUpdateValue(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldMultituple.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldMultituple.vue



FieldMultituplevue_type_script_lang_ts.render = FieldMultituplevue_type_template_id_0b8dc11a_render

/* harmony default export */ var FieldMultituple = (FieldMultituplevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldNumber.vue?vue&type=template&id=2d203ea5

var FieldNumbervue_type_template_id_2d203ea5_hoisted_1 = ["type", "id", "name", "value"];
var FieldNumbervue_type_template_id_2d203ea5_hoisted_2 = ["for", "innerHTML"];
function FieldNumbervue_type_template_id_2d203ea5_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: "control_".concat(_ctx.uiControl),
    type: _ctx.uiControl,
    id: _ctx.name,
    name: _ctx.name,
    value: _ctx.value.toString(),
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, _ctx.uiControlAttributes), null, 16, FieldNumbervue_type_template_id_2d203ea5_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldNumbervue_type_template_id_2d203ea5_hoisted_2)], 64);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldNumber.vue?vue&type=template&id=2d203ea5

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldNumber.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldNumbervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    uiControl: String,
    name: String,
    title: String,
    value: [Number, String],
    uiControlAttributes: Object
  },
  emits: ['update:modelValue'],
  methods: {
    onChange: function onChange(event) {
      var value = parseFloat(event.target.value);
      this.$emit('update:modelValue', value);
    }
  },
  mounted: function mounted() {
    window.Materialize.updateTextFields();
  },
  watch: {
    modelValue: function modelValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        // TODO: removed $timeout
        setTimeout(function () {
          window.Materialize.updateTextFields();
        });
      }
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldNumber.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldNumber.vue



FieldNumbervue_type_script_lang_ts.render = FieldNumbervue_type_template_id_2d203ea5_render

/* harmony default export */ var FieldNumber = (FieldNumbervue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldRadio.vue?vue&type=template&id=4bb7a9a8

var FieldRadiovue_type_template_id_4bb7a9a8_hoisted_1 = ["value", "id", "name", "disabled"];
function FieldRadiovue_type_template_id_4bb7a9a8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    class: "fieldRadioTitle"
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.title]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.availableOptions, function (radioModel) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
      key: radioModel.key,
      class: "radio"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
      value: radioModel.key,
      onChange: _cache[0] || (_cache[0] = function ($event) {
        return _ctx.onChange($event);
      }),
      type: "radio",
      id: "".concat(_ctx.name).concat(radioModel.key),
      name: _ctx.name,
      disabled: radioModel.disabled || _ctx.disabled
    }, _ctx.uiControlAttributes), null, 16, FieldRadiovue_type_template_id_4bb7a9a8_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(radioModel.value) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "form-description"
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(radioModel.description), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], radioModel.description]])])])]);
  }), 128))]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldRadio.vue?vue&type=template&id=4bb7a9a8

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldRadio.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldRadiovue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: String,
    availableValues: Array,
    name: String,
    disabled: Boolean,
    uiControlAttributes: Object
  },
  emits: ['update:modelValue'],
  computed: {
    availableOptions: function availableOptions() {
      return processCheckboxAndRadioAvailableValues(this.availableValues, this.type);
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldRadio.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldRadio.vue



FieldRadiovue_type_script_lang_ts.render = FieldRadiovue_type_template_id_4bb7a9a8_render

/* harmony default export */ var FieldRadio = (FieldRadiovue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldSelect.vue?vue&type=template&id=6af3f164
function FieldSelectvue_type_template_id_6af3f164_slicedToArray(arr, i) { return FieldSelectvue_type_template_id_6af3f164_arrayWithHoles(arr) || FieldSelectvue_type_template_id_6af3f164_iterableToArrayLimit(arr, i) || FieldSelectvue_type_template_id_6af3f164_unsupportedIterableToArray(arr, i) || FieldSelectvue_type_template_id_6af3f164_nonIterableRest(); }

function FieldSelectvue_type_template_id_6af3f164_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FieldSelectvue_type_template_id_6af3f164_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FieldSelectvue_type_template_id_6af3f164_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FieldSelectvue_type_template_id_6af3f164_arrayLikeToArray(o, minLen); }

function FieldSelectvue_type_template_id_6af3f164_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FieldSelectvue_type_template_id_6af3f164_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function FieldSelectvue_type_template_id_6af3f164_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var FieldSelectvue_type_template_id_6af3f164_hoisted_1 = ["multiple", "name"];
var FieldSelectvue_type_template_id_6af3f164_hoisted_2 = ["label"];
var FieldSelectvue_type_template_id_6af3f164_hoisted_3 = ["value", "selected"];
var FieldSelectvue_type_template_id_6af3f164_hoisted_4 = ["multiple", "name"];
var FieldSelectvue_type_template_id_6af3f164_hoisted_5 = ["value"];
var FieldSelectvue_type_template_id_6af3f164_hoisted_6 = ["for", "innerHTML"];
function FieldSelectvue_type_template_id_6af3f164_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.groupedOptions ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("select", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 0,
    ref: "select",
    multiple: _ctx.multiple,
    name: _ctx.name,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, _ctx.uiControlAttributes), [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.groupedOptions, function (_ref) {
    var _ref2 = FieldSelectvue_type_template_id_6af3f164_slicedToArray(_ref, 2),
        group = _ref2[0],
        options = _ref2[1];

    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("optgroup", {
      key: group,
      label: group
    }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(options, function (option) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("option", {
        key: option.key,
        value: option.key,
        selected: _ctx.value === option.key
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(option.value), 9, FieldSelectvue_type_template_id_6af3f164_hoisted_3);
    }), 128))], 8, FieldSelectvue_type_template_id_6af3f164_hoisted_2);
  }), 128))], 16, FieldSelectvue_type_template_id_6af3f164_hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.groupedOptions ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("select", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    key: 1,
    ref: "select",
    multiple: _ctx.multiple,
    name: _ctx.name,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.onChange($event);
    })
  }, _ctx.uiControlAttributes), [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.availableOptions, function (option) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("option", {
      key: option.key,
      value: option.key
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(option.value), 9, FieldSelectvue_type_template_id_6af3f164_hoisted_5);
  }), 128))], 16, FieldSelectvue_type_template_id_6af3f164_hoisted_4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.title
  }, null, 8, FieldSelectvue_type_template_id_6af3f164_hoisted_6)], 64);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSelect.vue?vue&type=template&id=6af3f164

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldSelect.vue?vue&type=script&lang=ts
function FieldSelectvue_type_script_lang_ts_slicedToArray(arr, i) { return FieldSelectvue_type_script_lang_ts_arrayWithHoles(arr) || FieldSelectvue_type_script_lang_ts_iterableToArrayLimit(arr, i) || FieldSelectvue_type_script_lang_ts_unsupportedIterableToArray(arr, i) || FieldSelectvue_type_script_lang_ts_nonIterableRest(); }

function FieldSelectvue_type_script_lang_ts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FieldSelectvue_type_script_lang_ts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FieldSelectvue_type_script_lang_ts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FieldSelectvue_type_script_lang_ts_arrayLikeToArray(o, minLen); }

function FieldSelectvue_type_script_lang_ts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function FieldSelectvue_type_script_lang_ts_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function FieldSelectvue_type_script_lang_ts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FieldSelectvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FieldSelectvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { FieldSelectvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FieldSelectvue_type_script_lang_ts_typeof(obj); }



function initMaterialSelect(select, placeholder) {
  var uiControlOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $select = window.$(select);
  $select.formSelect(uiControlOptions); // add placeholder to input

  if (placeholder) {
    var $materialInput = $select.closest('.select-wrapper').find('input');
    $materialInput.attr('placeholder', placeholder);
  }
}

function hasGroupedValues(availableValues) {
  if (availableValues instanceof Array || !(FieldSelectvue_type_script_lang_ts_typeof(availableValues) === 'object')) {
    return false;
  }

  return Object.values(availableValues).some(function (v) {
    return FieldSelectvue_type_script_lang_ts_typeof(v) === 'object';
  });
}

/* harmony default export */ var FieldSelectvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    value: null,
    multiple: Boolean,
    name: String,
    title: String,
    availableValues: Object,
    uiControlAttributes: Object,
    uiControlOptions: Object
  },
  emits: ['update:modelValue'],
  computed: {
    availableOptions: function availableOptions() {
      var _this = this;

      if (!this.availableValues) {
        return [];
      }

      var availableValues = this.availableValues;

      if (!hasGroupedValues(availableValues)) {
        availableValues = {
          '': availableValues
        };
      }

      var flatValues = [];
      Object.entries(availableValues).forEach(function (_ref) {
        var _ref2 = FieldSelectvue_type_script_lang_ts_slicedToArray(_ref, 2),
            values = _ref2[0],
            group = _ref2[1];

        Object.entries(values).forEach(function (_ref3) {
          var _ref4 = FieldSelectvue_type_script_lang_ts_slicedToArray(_ref3, 2),
              value = _ref4[0],
              valueObjKey = _ref4[1];

          if (FieldSelectvue_type_script_lang_ts_typeof(value) === 'object' && typeof value.key !== 'undefined') {
            flatValues.push(value);
            return;
          }

          var key = valueObjKey;

          if (_this.type === 'integer' && typeof key === 'string') {
            key = parseInt(key, 10);
          }

          flatValues.push({
            group: group,
            key: key,
            value: value
          });
        });
      });
      return flatValues;
    },
    groupedOptions: function groupedOptions() {
      var availableOptions = this.availableOptions;

      if (!availableOptions[0] || !availableOptions[0].group) {
        return null;
      }

      var groups = {};
      availableOptions.forEach(function (entry) {
        groups[entry.group] = groups[entry.group] || [];
        groups[entry.group].push(entry);
      });
      var result = Object.entries(groups);
      result.sort(function (lhs, rhs) {
        if (lhs[0] < rhs[0]) {
          return -1;
        }

        if (lhs[0] > rhs[0]) {
          return 1;
        }

        return 0;
      });
      return result;
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
  watch: {
    modelValue: function modelValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        // TODO: $timeout here
        initMaterialSelect(this.$refs.select, this.uiControlAttributes.placeholder, this.uiControlOptions);
      }
    },
    // TODO: Test this
    'uiControlAttributes.disabled': {
      handler: function handler(newVal, oldVal) {
        // TODO: $timeout here
        if (newVal !== oldVal) {
          initMaterialSelect(this.$refs.select, this.uiControlAttributes.placeholder, this.uiControlOptions);
        }
      }
    },
    availableOptions: function availableOptions(newVal, oldVal) {
      // TODO: $timeout here
      if (newVal !== oldVal) {
        initMaterialSelect(this.$refs.select, this.uiControlAttributes.placeholder, this.uiControlOptions);
      }
    }
  },
  mounted: function mounted() {
    initMaterialSelect(this.$refs.select, this.uiControlAttributes.placeholder, this.uiControlOptions);
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSelect.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSelect.vue



FieldSelectvue_type_script_lang_ts.render = FieldSelectvue_type_template_id_6af3f164_render

/* harmony default export */ var FieldSelect = (FieldSelectvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldSite.vue?vue&type=template&id=3fbe1a6f

var FieldSitevue_type_template_id_3fbe1a6f_hoisted_1 = ["for", "innerHTML"];
function FieldSitevue_type_template_id_3fbe1a6f_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SiteSelector = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SiteSelector");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    class: "siteSelectorLabel",
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldSitevue_type_template_id_3fbe1a6f_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SiteSelector, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: "sites_autocomplete",
    "model-value": _ctx.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    }),
    siteid: _ctx.value.id,
    sitename: _ctx.value.name,
    id: _ctx.name,
    "show-all-sites-item": _ctx.uiControlAttributes.showAllSitesItem || false,
    "switch-site-on-select": false,
    "show-selected-site": true,
    "only-sites-with-admin-access": _ctx.uiControlAttributes.onlySitesWithAdminAccess || false
  }, _ctx.uiControlAttributes), null, 16, ["model-value", "siteid", "sitename", "id", "show-all-sites-item", "only-sites-with-admin-access"])]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSite.vue?vue&type=template&id=3fbe1a6f

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldSite.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldSitevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    title: String,
    value: null,
    uiControlAttributes: Object
  },
  components: {
    SiteSelector: external_CoreHome_["SiteSelector"]
  },
  emits: ['update:modelValue'],
  methods: {
    onChange: function onChange(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSite.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldSite.vue



FieldSitevue_type_script_lang_ts.render = FieldSitevue_type_template_id_3fbe1a6f_render

/* harmony default export */ var FieldSite = (FieldSitevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldText.vue?vue&type=template&id=5c5eb0ea

var FieldTextvue_type_template_id_5c5eb0ea_hoisted_1 = ["type", "id", "name", "value"];
var FieldTextvue_type_template_id_5c5eb0ea_hoisted_2 = ["for", "innerHTML"];
function FieldTextvue_type_template_id_5c5eb0ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: "control_".concat(_ctx.uiControl),
    type: _ctx.uiControl,
    id: _ctx.name,
    name: _ctx.name,
    value: _ctx.value,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, _ctx.uiControlAttributes), null, 16, FieldTextvue_type_template_id_5c5eb0ea_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldTextvue_type_template_id_5c5eb0ea_hoisted_2)], 64);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldText.vue?vue&type=template&id=5c5eb0ea

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldText.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldTextvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    title: String,
    name: String,
    uiControlAttributes: Object,
    value: String,
    uiControl: String
  },
  emits: ['update:modelValue'],
  mounted: function mounted() {
    window.Materialize.updateTextFields();
  },
  watch: {
    modelValue: function modelValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        // TODO: removed $timeout
        setTimeout(function () {
          window.Materialize.updateTextFields();
        });
      }
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldText.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldText.vue



FieldTextvue_type_script_lang_ts.render = FieldTextvue_type_template_id_5c5eb0ea_render

/* harmony default export */ var FieldText = (FieldTextvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextarea.vue?vue&type=template&id=e8445c06

var FieldTextareavue_type_template_id_e8445c06_hoisted_1 = ["name", "id", "value"];
var FieldTextareavue_type_template_id_e8445c06_hoisted_2 = ["for", "innerHTML"];
function FieldTextareavue_type_template_id_e8445c06_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    name: _ctx.name
  }, _ctx.uiControlAttributes, {
    id: _ctx.name,
    value: _ctx.modelValue,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    }),
    class: "materialize-textarea",
    ref: "textarea"
  }), null, 16, FieldTextareavue_type_template_id_e8445c06_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldTextareavue_type_template_id_e8445c06_hoisted_2)], 64);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextarea.vue?vue&type=template&id=e8445c06

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextarea.vue?vue&type=script&lang=ts

/* harmony default export */ var FieldTextareavue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    uiControlAttributes: Object,
    modelValue: String,
    title: String
  },
  emits: ['update:modelValue'],
  methods: {
    onChange: function onChange(event) {
      this.$emit('update:modelValue', event.value);
    }
  },
  watch: {
    modelValue: function modelValue(newVal, oldVal) {
      var _this = this;

      if (newVal !== oldVal) {
        // TODO: removed a $timeout
        // TODO: does this happen multiple times initially
        setTimeout(function () {
          window.Materialize.textareaAutoResize(_this.$refs.textarea);
          window.Materialize.updateTextFields();
        });
      }
    }
  },
  mounted: function mounted() {
    window.Materialize.textareaAutoResize(this.$refs.textarea);
    window.Materialize.updateTextFields();
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextarea.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextarea.vue



FieldTextareavue_type_script_lang_ts.render = FieldTextareavue_type_template_id_e8445c06_render

/* harmony default export */ var FieldTextarea = (FieldTextareavue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextareaArray.vue?vue&type=template&id=08545277

var FieldTextareaArrayvue_type_template_id_08545277_hoisted_1 = ["for", "innerHTML"];
var FieldTextareaArrayvue_type_template_id_08545277_hoisted_2 = ["name", "value"];
function FieldTextareaArrayvue_type_template_id_08545277_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, FieldTextareaArrayvue_type_template_id_08545277_hoisted_1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    name: _ctx.name
  }, _ctx.uiControlAttributes, {
    value: _ctx.concattedValue,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    }),
    class: "materialize-textarea"
  }), null, 16, FieldTextareaArrayvue_type_template_id_08545277_hoisted_2)]);
}
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextareaArray.vue?vue&type=template&id=08545277

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextareaArray.vue?vue&type=script&lang=ts

var SEPARATOR = '&#10;';
/* harmony default export */ var FieldTextareaArrayvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    title: String,
    uiControlAttributes: Object,
    modelValue: Array
  },
  emits: ['update:modelValue'],
  computed: {
    concattedValue: function concattedValue() {
      return this.modelValue.join(SEPARATOR);
    }
  },
  methods: {
    onChange: function onChange($event) {
      var value = $event.value.split(SEPARATOR).map(function (v) {
        return v.trim();
      });
      this.$emit('update:modelValue', value);
    }
  },
  watch: {
    modelValue: function modelValue(newVal, oldVal) {
      var _this = this;

      if (newVal !== oldVal) {
        // TODO: removed a $timeout
        // TODO: does this happen multiple times initially
        setTimeout(function () {
          window.Materialize.textareaAutoResize(_this.$refs.textarea);
          window.Materialize.updateTextFields();
        });
      }
    }
  },
  mounted: function mounted() {
    window.Materialize.textareaAutoResize(this.$refs.textarea);
    window.Materialize.updateTextFields();
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextareaArray.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FieldTextareaArray.vue



FieldTextareaArrayvue_type_script_lang_ts.render = FieldTextareaArrayvue_type_template_id_08545277_render

/* harmony default export */ var FieldTextareaArray = (FieldTextareaArrayvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/@vue/cli-plugin-typescript/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-3!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CorePluginsAdmin/vue/src/FormField/FormField.vue?vue&type=script&lang=ts
function FormFieldvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormFieldvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { FormFieldvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormFieldvue_type_script_lang_ts_typeof(obj); }

function FormFieldvue_type_script_lang_ts_toConsumableArray(arr) { return FormFieldvue_type_script_lang_ts_arrayWithoutHoles(arr) || FormFieldvue_type_script_lang_ts_iterableToArray(arr) || FormFieldvue_type_script_lang_ts_unsupportedIterableToArray(arr) || FormFieldvue_type_script_lang_ts_nonIterableSpread(); }

function FormFieldvue_type_script_lang_ts_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function FormFieldvue_type_script_lang_ts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return FormFieldvue_type_script_lang_ts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return FormFieldvue_type_script_lang_ts_arrayLikeToArray(o, minLen); }

function FormFieldvue_type_script_lang_ts_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function FormFieldvue_type_script_lang_ts_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return FormFieldvue_type_script_lang_ts_arrayLikeToArray(arr); }

function FormFieldvue_type_script_lang_ts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















/*
4. go through directive JS/controller JS and distribute code
5. template here
6. other code here
7. all in source TODO that is for code
8. get to build
9. test the shit out of it.
*/

var TEXT_CONTROLS = ['password', 'url', 'search', 'email'];
var CONTROLS_SUPPORTING_ARRAY = ['textarea', 'checkbox', 'text'];
var CONTROL_TO_COMPONENT_MAP = {
  checkbox: FieldCheckbox,
  'expandable-select': FieldExpandableSelect,
  'field-array': FieldFieldArray,
  file: FieldFile,
  hidden: FieldHidden,
  multiselect: FieldSelect,
  multituple: FieldMultituple,
  number: FieldNumber,
  radio: FieldRadio,
  select: FieldSelect,
  site: FieldSite,
  text: FieldText,
  textarea: FieldTextarea
};
/* harmony default export */ var FormFieldvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: null,
    formField: Object,
    allSettings: [Object, Array]
  },
  emits: ['update:modelValue'],
  components: {
    FieldCheckbox: FieldCheckbox,
    FieldCheckboxArray: FieldCheckboxArray,
    FieldExpandableSelect: FieldExpandableSelect,
    FieldFieldArray: FieldFieldArray,
    FieldFile: FieldFile,
    FieldHidden: FieldHidden,
    FieldMultituple: FieldMultituple,
    FieldNumber: FieldNumber,
    FieldRadio: FieldRadio,
    FieldSelect: FieldSelect,
    FieldSite: FieldSite,
    FieldText: FieldText,
    FieldTextarea: FieldTextarea,
    FieldTextareaArray: FieldTextareaArray
  },
  watch: {
    'formField.inlineHelp': {
      handler: function handler(newValue) {
        var field = this.formField;
        var toAppend;

        if (typeof newValue === 'string' && field.inlineHelp && field.inlineHelp.indexOf('#') === 0) {
          toAppend = window.$(field.inlineHelp);
        } else {
          toAppend = window.vueSanitize(field.inlineHelp);
        }

        window.$(this.$refs.inlineHelp).html('').append(toAppend); // TODO: used to have $timeout here
      }
    }
  },
  computed: {
    childComponent: function childComponent() {
      var control = CONTROL_TO_COMPONENT_MAP[this.formField.uiControl];

      if (TEXT_CONTROLS.indexOf(control) !== -1) {
        control = 'FieldText'; // we use same template for text and password both
      }

      if (this.formField.type === 'array' && CONTROLS_SUPPORTING_ARRAY.indexOf(control) !== -1) {
        control = "".concat(control, "Array");
      }

      return control;
    },
    extraChildComponentParams: function extraChildComponentParams() {
      if (this.formField.uiControl === 'multiselect') {
        return {
          multiple: true
        };
      }

      return {};
    },
    showFormHelp: function showFormHelp() {
      return this.formField.description || this.formField.inlineHelp || this.formField.defaultValue && this.formField.uiControl !== 'checkbox' && this.formField.uiControl !== 'radio';
    },
    showDefaultValue: function showDefaultValue() {
      return this.formField.defaultValuePretty && this.formField.uiControl !== 'checkbox' && this.formField.uiControl !== 'radio';
    },
    showField: function showField() {
      if (!this.formField.condition || !this.allSettings || !Object.values(this.allSettings).length) {
        // TODO: condition is now a function, must be mapped properly
        return true;
      }

      var values = {};
      Object.values(this.allSettings).forEach(function (setting) {
        if (setting.value === '0') {
          values[setting.name] = 0;
        } else {
          values[setting.name] = setting.value;
        }
      });
      return this.formField.condition(values); // TODO: condition shouldn't be on formField, but...
    },
    processedModelValue: function processedModelValue() {
      var field = this.formField; // convert boolean values since angular 1.6 uses strict equals when determining if a model
      // value matches the ng-value of an input.

      if (field.type === 'boolean') {
        var valueIsTruthy = this.modelValue && this.modelValue > 0 && this.modelValue !== '0'; // for checkboxes, the value MUST be either true or faluse

        if (field.uiControl === 'checkbox') {
          return valueIsTruthy;
        }

        if (field.uiControl === 'radio') {
          return valueIsTruthy ? '1' : '0';
        }
      }

      return this.modelValue;
    },
    defaultValue: function defaultValue() {
      var defaultValue = this.formField.defaultValue;

      if (Array.isArray(defaultValue)) {
        defaultValue = defaultValue.join(',');
      }

      return defaultValue;
    },
    availableOptions: function availableOptions() {
      // TODO: availableOptions is assumed to be an array here? make the change everywhere.
      var field = this.formField;

      function hasOption(key) {
        return field.availableOptions.some(function (f) {
          return f.key === key;
        });
      } // for selects w/ a placeholder, add an option to unset the select


      if (field.uiControl === 'select' && field.uiControlAttributes.placeholder && !hasOption('')) {
        return [{
          key: '',
          value: ''
        }].concat(FormFieldvue_type_script_lang_ts_toConsumableArray(field.availableOptions));
      }

      return field.availableOptions;
    },
    defaultValuePretty: function defaultValuePretty() {
      var defaultValue = this.defaultValue;
      var availableOptions = this.availableOptions;

      if (typeof defaultValue === 'string' && defaultValue) {
        // eg default value for multi tuple
        var defaultParsed = null;

        try {
          defaultParsed = JSON.parse(defaultValue);
        } catch (e) {// invalid JSON
        } // TODO: additional check for null + typeof !== object'


        if (defaultParsed !== null && FormFieldvue_type_script_lang_ts_typeof(defaultParsed) === 'object') {
          return null;
        }
      } // TODO: change all instanceof Array to Array.isArray


      if (!Array.isArray(availableOptions)) {
        if (Array.isArray(defaultValue)) {
          return null;
        }

        return defaultValue;
      }

      var prettyValues = [];

      if (!Array.isArray(defaultValue)) {
        defaultValue = [defaultValue];
      }

      Object.values(availableOptions).forEach(function (value) {
        if (defaultValue.indexOf(value.key) !== -1 && typeof value.value !== 'undefined') {
          prettyValues.push(value.value);
        }
      });
      return prettyValues.join(', ');
    }
  },
  methods: {
    onChange: function onChange(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FormField.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FormField.vue



FormFieldvue_type_script_lang_ts.render = render

/* harmony default export */ var FormField = (FormFieldvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/FormField/FormField.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var FormField_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: FormField,
  scope: {
    piwikFormField: {
      angularJsBind: '='
    },
    allSettings: {
      angularJsBind: '='
    }
  },
  directiveName: 'piwikFormField'
}));
// CONCATENATED MODULE: ./plugins/CorePluginsAdmin/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
*/


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=CorePluginsAdmin.umd.js.map