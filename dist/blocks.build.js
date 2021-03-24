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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: PanelBody, PanelRow, SelectControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_sidebar_js__ = __webpack_require__(/*! ./block/sidebar.js */ 8);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vYmxvY2svc2lkZWJhci5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(/*! ./edit */ 6);\n/**\n * BLOCK: primary-categories\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('pc/primary-posts', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Primary Category Posts'), // Block title.\n\ticon: 'format-aside', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('posts'), __('category'), __('primary category')],\n\tattributes: {\n\t\tnewCategory: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: __WEBPACK_IMPORTED_MODULE_2__edit__[\"a\" /* default */],\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHByaW1hcnktY2F0ZWdvcmllc1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3BjL3ByaW1hcnktcG9zdHMnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ByaW1hcnkgQ2F0ZWdvcnkgUG9zdHMnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdmb3JtYXQtYXNpZGUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ3Bvc3RzJyksIF9fKCdjYXRlZ29yeScpLCBfXygncHJpbWFyeSBjYXRlZ29yeScpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdG5ld0NhdGVnb3J5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiBlZGl0LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thumbnail__ = __webpack_require__(/*! ./thumbnail */ 7);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar withSelect = wp.data.withSelect;\nvar decodeEntities = wp.htmlEntities.decodeEntities;\n\n\n\n\n\n\nvar primaryPosts = function (_Component) {\n\t_inherits(primaryPosts, _Component);\n\n\tfunction primaryPosts() {\n\t\t_classCallCheck(this, primaryPosts);\n\n\t\treturn _possibleConstructorReturn(this, (primaryPosts.__proto__ || Object.getPrototypeOf(primaryPosts)).apply(this, arguments));\n\t}\n\n\t_createClass(primaryPosts, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    posts = _props.posts,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    setAttributes = _props.setAttributes;\n\t\t\tvar newCategory = attributes.newCategory;\n\n\t\t\tvar filteredCategories = cgbGlobal.myVar;\n\t\t\tvar onChangeCategories = function onChangeCategories(newCategory) {\n\t\t\t\tsetAttributes({ newCategory: newCategory });\n\t\t\t};\n\t\t\tvar primaryCatPosts = posts && posts.map(function (post) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\t{ className: 'primary-posts', key: post.id },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'primary-posts__featured-image' },\n\t\t\t\t\t\tundefined !== post.featured_media && 0 !== post.featured_media && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__thumbnail__[\"a\" /* default */], {\n\t\t\t\t\t\t\tid: post.featured_media,\n\t\t\t\t\t\t\tlink: post.link,\n\t\t\t\t\t\t\talt: post.title.rendered,\n\t\t\t\t\t\t\tsize: attributes.imageSize //set image size, should add this setting on the inspeactorControl\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'primary-posts__title ' },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: post.link },\n\t\t\t\t\t\t\t\t\tdecodeEntities(post.title.rendered)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"InspectorControls\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"PanelBody\"],\n\t\t\t\t\t\t{ title: 'Select Primary Category', initialOpen: true },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"PanelRow\"],\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"SelectControl\"], {\n\t\t\t\t\t\t\t\tlabel: __('Categories'),\n\t\t\t\t\t\t\t\tonChange: onChangeCategories,\n\t\t\t\t\t\t\t\toptions: filteredCategories && filteredCategories.map(function (category) {\n\t\t\t\t\t\t\t\t\treturn { value: category.term_id, label: category.name };\n\t\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\t\tvalue: newCategory\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tprimaryCatPosts\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn primaryPosts;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (withSelect(function (select, props) {\n\tvar attributes = props.attributes;\n\tvar newCategory = attributes.newCategory;\n\n\treturn {\n\n\t\tposts: select('core').getEntityRecords('postType', 'post', {\n\t\t\tcategories: newCategory\n\t\t})\n\n\t};\n})(primaryPosts));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIF93cCRlbGVtZW50ID0gd3AuZWxlbWVudCxcbiAgICBDb21wb25lbnQgPSBfd3AkZWxlbWVudC5Db21wb25lbnQsXG4gICAgRnJhZ21lbnQgPSBfd3AkZWxlbWVudC5GcmFnbWVudDtcbnZhciB3aXRoU2VsZWN0ID0gd3AuZGF0YS53aXRoU2VsZWN0O1xudmFyIGRlY29kZUVudGl0aWVzID0gd3AuaHRtbEVudGl0aWVzLmRlY29kZUVudGl0aWVzO1xuXG5pbXBvcnQgeyBQYW5lbEJvZHksIFBhbmVsUm93LCBEaXNhYmxlZCwgU2VsZWN0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IFRodW1ibmFpbCBmcm9tICcuL3RodW1ibmFpbCc7XG5cbnZhciBwcmltYXJ5UG9zdHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMocHJpbWFyeVBvc3RzLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBwcmltYXJ5UG9zdHMoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIHByaW1hcnlQb3N0cyk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKHByaW1hcnlQb3N0cy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByaW1hcnlQb3N0cykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKHByaW1hcnlQb3N0cywgW3tcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBwb3N0cyA9IF9wcm9wcy5wb3N0cyxcblx0XHRcdCAgICBhdHRyaWJ1dGVzID0gX3Byb3BzLmF0dHJpYnV0ZXMsXG5cdFx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9wcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXHRcdFx0dmFyIG5ld0NhdGVnb3J5ID0gYXR0cmlidXRlcy5uZXdDYXRlZ29yeTtcblxuXHRcdFx0dmFyIGZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNnYkdsb2JhbC5teVZhcjtcblx0XHRcdHZhciBvbkNoYW5nZUNhdGVnb3JpZXMgPSBmdW5jdGlvbiBvbkNoYW5nZUNhdGVnb3JpZXMobmV3Q2F0ZWdvcnkpIHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IG5ld0NhdGVnb3J5OiBuZXdDYXRlZ29yeSB9KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgcHJpbWFyeUNhdFBvc3RzID0gcG9zdHMgJiYgcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2xpJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3ByaW1hcnktcG9zdHMnLCBrZXk6IHBvc3QuaWQgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncHJpbWFyeS1wb3N0c19fZmVhdHVyZWQtaW1hZ2UnIH0sXG5cdFx0XHRcdFx0XHR1bmRlZmluZWQgIT09IHBvc3QuZmVhdHVyZWRfbWVkaWEgJiYgMCAhPT0gcG9zdC5mZWF0dXJlZF9tZWRpYSAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsLCB7XG5cdFx0XHRcdFx0XHRcdGlkOiBwb3N0LmZlYXR1cmVkX21lZGlhLFxuXHRcdFx0XHRcdFx0XHRsaW5rOiBwb3N0LmxpbmssXG5cdFx0XHRcdFx0XHRcdGFsdDogcG9zdC50aXRsZS5yZW5kZXJlZCxcblx0XHRcdFx0XHRcdFx0c2l6ZTogYXR0cmlidXRlcy5pbWFnZVNpemUgLy9zZXQgaW1hZ2Ugc2l6ZSwgc2hvdWxkIGFkZCB0aGlzIHNldHRpbmcgb24gdGhlIGluc3BlYWN0b3JDb250cm9sXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAncHJpbWFyeS1wb3N0c19fdGl0bGUgJyB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J2gyJyxcblx0XHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgaHJlZjogcG9zdC5saW5rIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWNvZGVFbnRpdGllcyhwb3N0LnRpdGxlLnJlbmRlcmVkKVxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRcdHsgdGl0bGU6ICdTZWxlY3QgUHJpbWFyeSBDYXRlZ29yeScsIGluaXRpYWxPcGVuOiB0cnVlIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ2F0ZWdvcmllcycpLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUNhdGVnb3JpZXMsXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uczogZmlsdGVyZWRDYXRlZ29yaWVzICYmIGZpbHRlcmVkQ2F0ZWdvcmllcy5tYXAoZnVuY3Rpb24gKGNhdGVnb3J5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4geyB2YWx1ZTogY2F0ZWdvcnkudGVybV9pZCwgbGFiZWw6IGNhdGVnb3J5Lm5hbWUgfTtcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3Q2F0ZWdvcnlcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdHByaW1hcnlDYXRQb3N0c1xuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gcHJpbWFyeVBvc3RzO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QsIHByb3BzKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblx0dmFyIG5ld0NhdGVnb3J5ID0gYXR0cmlidXRlcy5uZXdDYXRlZ29yeTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0cG9zdHM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnLCB7XG5cdFx0XHRjYXRlZ29yaWVzOiBuZXdDYXRlZ29yeVxuXHRcdH0pXG5cblx0fTtcbn0pKHByaW1hcnlQb3N0cyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************!*\
  !*** ./src/block/thumbnail.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Featured Image\n */\nvar _wp$components = wp.components,\n    Placeholder = _wp$components.Placeholder,\n    Spinner = _wp$components.Spinner;\nvar useSelect = wp.data.useSelect;\n\n\nvar Thumbnail = function Thumbnail(_ref) {\n\tvar id = _ref.id,\n\t    link = _ref.link,\n\t    alt = _ref.alt,\n\t    size = _ref.size;\n\n\tvar _useSelect = useSelect(function (select) {\n\t\tvar image = select('core').getMedia(id);\n\n\t\tvar featuredImage = image ? 0 < Object.keys(image.media_details.sizes).length ? image.media_details.sizes[size] ? image.media_details.sizes[size].source_url : image.source_url : image.source_url : null;\n\n\t\treturn {\n\t\t\tfeaturedImage: featuredImage,\n\t\t\taltText: image && image.alt_text ? image.alt_text : alt\n\t\t};\n\t}, [size]),\n\t    featuredImage = _useSelect.featuredImage,\n\t    altText = _useSelect.altText;\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"wp-block-post-thumbnail\" },\n\t\twp.element.createElement(\n\t\t\t\"a\",\n\t\t\t{ href: link },\n\t\t\tfeaturedImage ? wp.element.createElement(\"img\", { src: featuredImage, size: size, alt: altText, \"data-id\": id }) : wp.element.createElement(\n\t\t\t\tPlaceholder,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(Spinner, null)\n\t\t\t)\n\t\t)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Thumbnail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay90aHVtYm5haWwuanM/ZDhhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZlYXR1cmVkIEltYWdlXG4gKi9cbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGxhY2Vob2xkZXIgPSBfd3AkY29tcG9uZW50cy5QbGFjZWhvbGRlcixcbiAgICBTcGlubmVyID0gX3dwJGNvbXBvbmVudHMuU3Bpbm5lcjtcbnZhciB1c2VTZWxlY3QgPSB3cC5kYXRhLnVzZVNlbGVjdDtcblxuXG52YXIgVGh1bWJuYWlsID0gZnVuY3Rpb24gVGh1bWJuYWlsKF9yZWYpIHtcblx0dmFyIGlkID0gX3JlZi5pZCxcblx0ICAgIGxpbmsgPSBfcmVmLmxpbmssXG5cdCAgICBhbHQgPSBfcmVmLmFsdCxcblx0ICAgIHNpemUgPSBfcmVmLnNpemU7XG5cblx0dmFyIF91c2VTZWxlY3QgPSB1c2VTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdHZhciBpbWFnZSA9IHNlbGVjdCgnY29yZScpLmdldE1lZGlhKGlkKTtcblxuXHRcdHZhciBmZWF0dXJlZEltYWdlID0gaW1hZ2UgPyAwIDwgT2JqZWN0LmtleXMoaW1hZ2UubWVkaWFfZGV0YWlscy5zaXplcykubGVuZ3RoID8gaW1hZ2UubWVkaWFfZGV0YWlscy5zaXplc1tzaXplXSA/IGltYWdlLm1lZGlhX2RldGFpbHMuc2l6ZXNbc2l6ZV0uc291cmNlX3VybCA6IGltYWdlLnNvdXJjZV91cmwgOiBpbWFnZS5zb3VyY2VfdXJsIDogbnVsbDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRmZWF0dXJlZEltYWdlOiBmZWF0dXJlZEltYWdlLFxuXHRcdFx0YWx0VGV4dDogaW1hZ2UgJiYgaW1hZ2UuYWx0X3RleHQgPyBpbWFnZS5hbHRfdGV4dCA6IGFsdFxuXHRcdH07XG5cdH0sIFtzaXplXSksXG5cdCAgICBmZWF0dXJlZEltYWdlID0gX3VzZVNlbGVjdC5mZWF0dXJlZEltYWdlLFxuXHQgICAgYWx0VGV4dCA9IF91c2VTZWxlY3QuYWx0VGV4dDtcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0eyBjbGFzc05hbWU6IFwid3AtYmxvY2stcG9zdC10aHVtYm5haWxcIiB9LFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiYVwiLFxuXHRcdFx0eyBocmVmOiBsaW5rIH0sXG5cdFx0XHRmZWF0dXJlZEltYWdlID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBmZWF0dXJlZEltYWdlLCBzaXplOiBzaXplLCBhbHQ6IGFsdFRleHQsIFwiZGF0YS1pZFwiOiBpZCB9KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGxhY2Vob2xkZXIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuXHRcdFx0KVxuXHRcdClcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay90aHVtYm5haWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************!*\
  !*** ./src/block/sidebar.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__ = __webpack_require__(/*! @wordpress/plugins */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_plugins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__ = __webpack_require__(/*! @wordpress/edit-post */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__wordpress_block_editor__);\n\n\n\n\n\n\n\nvar PluginMetaFields = function PluginMetaFields(props, setAtrributes) {\n\treturn wp.element.createElement(\n\t\t'fragment',\n\t\tnull,\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"SelectControl\"], {\n\t\t\tlabel: Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__[\"__\"])('Select Primary Category'),\n\t\t\tonChange: function onChange(value) {\n\t\t\t\treturn props.onMetaFieldChange(value);\n\t\t\t},\n\t\t\toptions: props.categories && props.categories.map(function (category) {\n\t\t\t\treturn { value: category.id, label: category.name };\n\t\t\t}),\n\t\t\tvalue: props.primaryCategory\n\t\t})\n\t);\n};\n\n/**\n * Returns categories selected in this post\n * Returns metabox value _primary_category\n * use withSelect to get data using REST SidebarJS\n */\nPluginMetaFields = Object(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__[\"withSelect\"])(function (select) {\n\treturn {\n\t\t//postType: select('core/editor').getCurrentPostType(),\n\n\t\tprimaryCategory: select('core/editor').getEditedPostAttribute('meta')._primary_category,\n\t\tcategories: select('core').getEntityRecords('taxonomy', 'category', { post: select('core/editor').getCurrentPostId() })\n\t};\n})(PluginMetaFields);\n\n/**\n * saves custom metabox value\n *\n */\nPluginMetaFields = Object(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__[\"withDispatch\"])(function (dispatch) {\n\treturn {\n\t\tonMetaFieldChange: function onMetaFieldChange(value) {\n\t\t\tdispatch('core/editor').editPost({ meta: { _primary_category: value } });\n\t\t}\n\t};\n})(PluginMetaFields);\n\n/**\n * Creates panel for the primary category\n *\n */\nvar PrimaryCategoriesDemo = function PrimaryCategoriesDemo() {\n\treturn wp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__[\"PluginDocumentSettingPanel\"],\n\t\t{\n\t\t\tname: 'primary-category-panel',\n\t\t\ttitle: 'Primary Category',\n\t\t\tclassName: 'primary-category-panel'\n\t\t},\n\t\tPluginMetaFields\n\t);\n};\n\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__[\"registerPlugin\"])('plugin-document-setting-panel-demo', {\n\trender: PrimaryCategoriesDemo,\n\ticon: 'paperclip',\n\tattributes: {\n\t\tcategory: {\n\t\t\ttype: 'string'\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zaWRlYmFyLmpzPzdlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAd29yZHByZXNzL3BsdWdpbnMnO1xuaW1wb3J0IHsgUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWwgfSBmcm9tICdAd29yZHByZXNzL2VkaXQtcG9zdCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBQYW5lbEJvZHksIFBhbmVsUm93LCBEaXNhYmxlZCwgU2VsZWN0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbnZhciBQbHVnaW5NZXRhRmllbGRzID0gZnVuY3Rpb24gUGx1Z2luTWV0YUZpZWxkcyhwcm9wcywgc2V0QXRycmlidXRlcykge1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdmcmFnbWVudCcsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0bGFiZWw6IF9fKCdTZWxlY3QgUHJpbWFyeSBDYXRlZ29yeScpLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wcy5vbk1ldGFGaWVsZENoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uczogcHJvcHMuY2F0ZWdvcmllcyAmJiBwcm9wcy5jYXRlZ29yaWVzLm1hcChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdFx0cmV0dXJuIHsgdmFsdWU6IGNhdGVnb3J5LmlkLCBsYWJlbDogY2F0ZWdvcnkubmFtZSB9O1xuXHRcdFx0fSksXG5cdFx0XHR2YWx1ZTogcHJvcHMucHJpbWFyeUNhdGVnb3J5XG5cdFx0fSlcblx0KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBjYXRlZ29yaWVzIHNlbGVjdGVkIGluIHRoaXMgcG9zdFxuICogUmV0dXJucyBtZXRhYm94IHZhbHVlIF9wcmltYXJ5X2NhdGVnb3J5XG4gKiB1c2Ugd2l0aFNlbGVjdCB0byBnZXQgZGF0YSB1c2luZyBSRVNUIFNpZGViYXJKU1xuICovXG5QbHVnaW5NZXRhRmllbGRzID0gd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdHJldHVybiB7XG5cdFx0Ly9wb3N0VHlwZTogc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEN1cnJlbnRQb3N0VHlwZSgpLFxuXG5cdFx0cHJpbWFyeUNhdGVnb3J5OiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpLl9wcmltYXJ5X2NhdGVnb3J5LFxuXHRcdGNhdGVnb3JpZXM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3RheG9ub215JywgJ2NhdGVnb3J5JywgeyBwb3N0OiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RJZCgpIH0pXG5cdH07XG59KShQbHVnaW5NZXRhRmllbGRzKTtcblxuLyoqXG4gKiBzYXZlcyBjdXN0b20gbWV0YWJveCB2YWx1ZVxuICpcbiAqL1xuUGx1Z2luTWV0YUZpZWxkcyA9IHdpdGhEaXNwYXRjaChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRvbk1ldGFGaWVsZENoYW5nZTogZnVuY3Rpb24gb25NZXRhRmllbGRDaGFuZ2UodmFsdWUpIHtcblx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHsgbWV0YTogeyBfcHJpbWFyeV9jYXRlZ29yeTogdmFsdWUgfSB9KTtcblx0XHR9XG5cdH07XG59KShQbHVnaW5NZXRhRmllbGRzKTtcblxuLyoqXG4gKiBDcmVhdGVzIHBhbmVsIGZvciB0aGUgcHJpbWFyeSBjYXRlZ29yeVxuICpcbiAqL1xudmFyIFByaW1hcnlDYXRlZ29yaWVzRGVtbyA9IGZ1bmN0aW9uIFByaW1hcnlDYXRlZ29yaWVzRGVtbygpIHtcblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCxcblx0XHR7XG5cdFx0XHRuYW1lOiAncHJpbWFyeS1jYXRlZ29yeS1wYW5lbCcsXG5cdFx0XHR0aXRsZTogJ1ByaW1hcnkgQ2F0ZWdvcnknLFxuXHRcdFx0Y2xhc3NOYW1lOiAncHJpbWFyeS1jYXRlZ29yeS1wYW5lbCdcblx0XHR9LFxuXHRcdFBsdWdpbk1ldGFGaWVsZHNcblx0KTtcbn07XG5cbnJlZ2lzdGVyUGx1Z2luKCdwbHVnaW4tZG9jdW1lbnQtc2V0dGluZy1wYW5lbC1kZW1vJywge1xuXHRyZW5kZXI6IFByaW1hcnlDYXRlZ29yaWVzRGVtbyxcblx0aWNvbjogJ3BhcGVyY2xpcCcsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjYXRlZ29yeToge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NpZGViYXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************!*\
  !*** external "wp.plugins" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: registerPlugin */
/***/ (function(module, exports) {

module.exports = wp.plugins;

/***/ }),
/* 10 */
/*!******************************!*\
  !*** external "wp.editPost" ***!
  \******************************/
/*! dynamic exports provided */
/*! exports used: PluginDocumentSettingPanel */
/***/ (function(module, exports) {

module.exports = wp.editPost;

/***/ }),
/* 11 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 12 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: withDispatch, withSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ })
/******/ ]);