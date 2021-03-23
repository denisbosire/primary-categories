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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_sidebar_js__ = __webpack_require__(/*! ./block/sidebar.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vYmxvY2svc2lkZWJhci5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(/*! ./edit */ 10);\n/**\n * BLOCK: primary-categories\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('pc/primary-posts', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Primary Category Posts'), // Block title.\n\ticon: 'format-aside', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('primary-categories — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: __WEBPACK_IMPORTED_MODULE_2__edit__[\"a\" /* default */],\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the frontend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'primary-categories'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHByaW1hcnktY2F0ZWdvcmllc1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3BjL3ByaW1hcnktcG9zdHMnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ByaW1hcnkgQ2F0ZWdvcnkgUG9zdHMnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdmb3JtYXQtYXNpZGUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ3ByaW1hcnktY2F0ZWdvcmllcyDigJQgQ0dCIEJsb2NrJyksIF9fKCdDR0IgRXhhbXBsZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0ZWRpdDogZWRpdCxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1xcdTIwMTQgSGVsbG8gZnJvbSB0aGUgZnJvbnRlbmQuJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnQ0dCIEJMT0NLOiAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J3ByaW1hcnktY2F0ZWdvcmllcydcblx0XHRcdFx0KSxcblx0XHRcdFx0JyBpcyBhIG5ldyBHdXRlbmJlcmcgYmxvY2suJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnSXQgd2FzIGNyZWF0ZWQgdmlhJyxcblx0XHRcdFx0JyAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0eyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWFkYXdhaXMvY3JlYXRlLWd1dGVuLWJsb2NrJyB9LFxuXHRcdFx0XHRcdFx0J2NyZWF0ZS1ndXRlbi1ibG9jaydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcuJ1xuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./src/block/sidebar.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__ = __webpack_require__(/*! @wordpress/plugins */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_plugins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__ = __webpack_require__(/*! @wordpress/edit-post */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__);\n\n\n\n\n\n\nvar PluginMetaFields = function PluginMetaFields(props, setAtrributes) {\n\treturn wp.element.createElement(\n\t\t'fragment',\n\t\tnull,\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"SelectControl\"], {\n\t\t\tlabel: Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_i18n__[\"__\"])('Select Primary Category'),\n\t\t\tonChange: function onChange(value) {\n\t\t\t\treturn props.onMetaFieldChange(value);\n\t\t\t},\n\t\t\toptions: props.categories && props.categories.map(function (category) {\n\t\t\t\treturn { value: category.id, label: category.name };\n\t\t\t}),\n\t\t\tvalue: props.primaryCategory\n\t\t})\n\t);\n};\n\n/**\n * Returns categories selected in this post\n * Returns metabox value _primary_category\n * use withSelect to get data using REST SidebarJS\n */\nPluginMetaFields = Object(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__[\"withSelect\"])(function (select) {\n\treturn {\n\t\tprimaryCategory: select('core/editor').getEditedPostAttribute('meta')._primary_category,\n\t\tcategories: select('core').getEntityRecords('taxonomy', 'category', { post: select('core/editor').getCurrentPostId() })\n\t};\n})(PluginMetaFields);\n\n/**\n * saves custom metabox value\n *\n */\nPluginMetaFields = Object(__WEBPACK_IMPORTED_MODULE_4__wordpress_data__[\"withDispatch\"])(function (dispatch) {\n\treturn {\n\t\tonMetaFieldChange: function onMetaFieldChange(value) {\n\t\t\tdispatch('core/editor').editPost({ meta: { _primary_category: value } });\n\t\t}\n\t};\n})(PluginMetaFields);\n\n/**\n * Creates panel for the primary category\n *\n */\nvar PrimaryCategoriesDemo = function PrimaryCategoriesDemo() {\n\treturn wp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_edit_post__[\"PluginDocumentSettingPanel\"],\n\t\t{\n\t\t\tname: 'custom-panel',\n\t\t\ttitle: 'Primary Category',\n\t\t\tclassName: 'custom-panel'\n\t\t},\n\t\tPluginMetaFields\n\t);\n};\n\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_plugins__[\"registerPlugin\"])('plugin-document-setting-panel-demo', {\n\trender: PrimaryCategoriesDemo,\n\ticon: 'paperclip',\n\tattributes: {\n\t\tcategory: {\n\t\t\ttype: 'string'\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zaWRlYmFyLmpzPzdlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAd29yZHByZXNzL3BsdWdpbnMnO1xuaW1wb3J0IHsgUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWwgfSBmcm9tICdAd29yZHByZXNzL2VkaXQtcG9zdCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBTZWxlY3RDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHdpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbnZhciBQbHVnaW5NZXRhRmllbGRzID0gZnVuY3Rpb24gUGx1Z2luTWV0YUZpZWxkcyhwcm9wcywgc2V0QXRycmlidXRlcykge1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdmcmFnbWVudCcsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0bGFiZWw6IF9fKCdTZWxlY3QgUHJpbWFyeSBDYXRlZ29yeScpLFxuXHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wcy5vbk1ldGFGaWVsZENoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uczogcHJvcHMuY2F0ZWdvcmllcyAmJiBwcm9wcy5jYXRlZ29yaWVzLm1hcChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblx0XHRcdFx0cmV0dXJuIHsgdmFsdWU6IGNhdGVnb3J5LmlkLCBsYWJlbDogY2F0ZWdvcnkubmFtZSB9O1xuXHRcdFx0fSksXG5cdFx0XHR2YWx1ZTogcHJvcHMucHJpbWFyeUNhdGVnb3J5XG5cdFx0fSlcblx0KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBjYXRlZ29yaWVzIHNlbGVjdGVkIGluIHRoaXMgcG9zdFxuICogUmV0dXJucyBtZXRhYm94IHZhbHVlIF9wcmltYXJ5X2NhdGVnb3J5XG4gKiB1c2Ugd2l0aFNlbGVjdCB0byBnZXQgZGF0YSB1c2luZyBSRVNUIFNpZGViYXJKU1xuICovXG5QbHVnaW5NZXRhRmllbGRzID0gd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdHJldHVybiB7XG5cdFx0cHJpbWFyeUNhdGVnb3J5OiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpLl9wcmltYXJ5X2NhdGVnb3J5LFxuXHRcdGNhdGVnb3JpZXM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3RheG9ub215JywgJ2NhdGVnb3J5JywgeyBwb3N0OiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RJZCgpIH0pXG5cdH07XG59KShQbHVnaW5NZXRhRmllbGRzKTtcblxuLyoqXG4gKiBzYXZlcyBjdXN0b20gbWV0YWJveCB2YWx1ZVxuICpcbiAqL1xuUGx1Z2luTWV0YUZpZWxkcyA9IHdpdGhEaXNwYXRjaChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRvbk1ldGFGaWVsZENoYW5nZTogZnVuY3Rpb24gb25NZXRhRmllbGRDaGFuZ2UodmFsdWUpIHtcblx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHsgbWV0YTogeyBfcHJpbWFyeV9jYXRlZ29yeTogdmFsdWUgfSB9KTtcblx0XHR9XG5cdH07XG59KShQbHVnaW5NZXRhRmllbGRzKTtcblxuLyoqXG4gKiBDcmVhdGVzIHBhbmVsIGZvciB0aGUgcHJpbWFyeSBjYXRlZ29yeVxuICpcbiAqL1xudmFyIFByaW1hcnlDYXRlZ29yaWVzRGVtbyA9IGZ1bmN0aW9uIFByaW1hcnlDYXRlZ29yaWVzRGVtbygpIHtcblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCxcblx0XHR7XG5cdFx0XHRuYW1lOiAnY3VzdG9tLXBhbmVsJyxcblx0XHRcdHRpdGxlOiAnUHJpbWFyeSBDYXRlZ29yeScsXG5cdFx0XHRjbGFzc05hbWU6ICdjdXN0b20tcGFuZWwnXG5cdFx0fSxcblx0XHRQbHVnaW5NZXRhRmllbGRzXG5cdCk7XG59O1xuXG5yZWdpc3RlclBsdWdpbigncGx1Z2luLWRvY3VtZW50LXNldHRpbmctcGFuZWwtZGVtbycsIHtcblx0cmVuZGVyOiBQcmltYXJ5Q2F0ZWdvcmllc0RlbW8sXG5cdGljb246ICdwYXBlcmNsaXAnLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y2F0ZWdvcnk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zaWRlYmFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** external "wp.plugins" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: registerPlugin */
/***/ (function(module, exports) {

module.exports = wp.plugins;

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "wp.editPost" ***!
  \******************************/
/*! dynamic exports provided */
/*! exports used: PluginDocumentSettingPanel */
/***/ (function(module, exports) {

module.exports = wp.editPost;

/***/ }),
/* 7 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 8 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: SelectControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 9 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: withDispatch, withSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),
/* 10 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(/*! ./thumbnail */ 11);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar withSelect = wp.data.withSelect;\nvar decodeEntities = wp.htmlEntities.decodeEntities;\n\n\n\n\nvar primaryPosts = function (_Component) {\n\t_inherits(primaryPosts, _Component);\n\n\tfunction primaryPosts() {\n\t\t_classCallCheck(this, primaryPosts);\n\n\t\treturn _possibleConstructorReturn(this, (primaryPosts.__proto__ || Object.getPrototypeOf(primaryPosts)).apply(this, arguments));\n\t}\n\n\t_createClass(primaryPosts, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar posts = this.props.posts;\n\n\n\t\t\tvar primaryCatPosts = posts && posts.map(function (post) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\t{ className: 'primary-posts', key: post.id },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'primary-posts__featured-image' },\n\t\t\t\t\t\tundefined !== post.featured_media && 0 !== post.featured_media && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__thumbnail__[\"a\" /* default */], {\n\t\t\t\t\t\t\tid: post.featured_media,\n\t\t\t\t\t\t\tlink: post.link,\n\t\t\t\t\t\t\talt: post.title.rendered,\n\t\t\t\t\t\t\tsize: attributes.imageSize //set image size, should add this setting on the inspeactorControl\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'primary-posts__title ' },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: post.link },\n\t\t\t\t\t\t\t\t\tdecodeEntities(post.title.rendered)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\tprimaryCatPosts\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn primaryPosts;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (withSelect(function (select) {\n\treturn {\n\t\tposts: select('core').getEntityRecords('postType', 'post', {\n\t\t\t// Custom args.\n\t\t\tmetaKey: select('core/editor').getEditedPostAttribute('meta')._primary_category // filter by metadata\n\n\t\t})\n\t};\n})(primaryPosts));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svZWRpdC5qcz8zZmUxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBfd3AkZWxlbWVudCA9IHdwLmVsZW1lbnQsXG4gICAgQ29tcG9uZW50ID0gX3dwJGVsZW1lbnQuQ29tcG9uZW50LFxuICAgIEZyYWdtZW50ID0gX3dwJGVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgd2l0aFNlbGVjdCA9IHdwLmRhdGEud2l0aFNlbGVjdDtcbnZhciBkZWNvZGVFbnRpdGllcyA9IHdwLmh0bWxFbnRpdGllcy5kZWNvZGVFbnRpdGllcztcblxuXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4vdGh1bWJuYWlsJztcblxudmFyIHByaW1hcnlQb3N0cyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhwcmltYXJ5UG9zdHMsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIHByaW1hcnlQb3N0cygpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgcHJpbWFyeVBvc3RzKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAocHJpbWFyeVBvc3RzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJpbWFyeVBvc3RzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MocHJpbWFyeVBvc3RzLCBbe1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBwb3N0cyA9IHRoaXMucHJvcHMucG9zdHM7XG5cblxuXHRcdFx0dmFyIHByaW1hcnlDYXRQb3N0cyA9IHBvc3RzICYmIHBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsaScsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdwcmltYXJ5LXBvc3RzJywga2V5OiBwb3N0LmlkIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3ByaW1hcnktcG9zdHNfX2ZlYXR1cmVkLWltYWdlJyB9LFxuXHRcdFx0XHRcdFx0dW5kZWZpbmVkICE9PSBwb3N0LmZlYXR1cmVkX21lZGlhICYmIDAgIT09IHBvc3QuZmVhdHVyZWRfbWVkaWEgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbCwge1xuXHRcdFx0XHRcdFx0XHRpZDogcG9zdC5mZWF0dXJlZF9tZWRpYSxcblx0XHRcdFx0XHRcdFx0bGluazogcG9zdC5saW5rLFxuXHRcdFx0XHRcdFx0XHRhbHQ6IHBvc3QudGl0bGUucmVuZGVyZWQsXG5cdFx0XHRcdFx0XHRcdHNpemU6IGF0dHJpYnV0ZXMuaW1hZ2VTaXplIC8vc2V0IGltYWdlIHNpemUsIHNob3VsZCBhZGQgdGhpcyBzZXR0aW5nIG9uIHRoZSBpbnNwZWFjdG9yQ29udHJvbFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3ByaW1hcnktcG9zdHNfX3RpdGxlICcgfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdoMicsXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHQnYScsXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGhyZWY6IHBvc3QubGluayB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVjb2RlRW50aXRpZXMocG9zdC50aXRsZS5yZW5kZXJlZClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwcmltYXJ5Q2F0UG9zdHNcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIHByaW1hcnlQb3N0cztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdHJldHVybiB7XG5cdFx0cG9zdHM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgJ3Bvc3QnLCB7XG5cdFx0XHQvLyBDdXN0b20gYXJncy5cblx0XHRcdG1ldGFLZXk6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJykuX3ByaW1hcnlfY2F0ZWdvcnkgLy8gZmlsdGVyIGJ5IG1ldGFkYXRhXG5cblx0XHR9KVxuXHR9O1xufSkocHJpbWFyeVBvc3RzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9lZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************!*\
  !*** ./src/block/thumbnail.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Featured Image\n */\nvar _wp$components = wp.components,\n    Placeholder = _wp$components.Placeholder,\n    Spinner = _wp$components.Spinner;\nvar useSelect = wp.data.useSelect;\n\n\nvar Thumbnail = function Thumbnail(_ref) {\n\tvar id = _ref.id,\n\t    link = _ref.link,\n\t    alt = _ref.alt,\n\t    size = _ref.size;\n\n\tvar _useSelect = useSelect(function (select) {\n\t\tvar image = select('core').getMedia(id);\n\n\t\tvar featuredImage = image ? 0 < Object.keys(image.media_details.sizes).length ? image.media_details.sizes[size] ? image.media_details.sizes[size].source_url : image.source_url : image.source_url : null;\n\n\t\treturn {\n\t\t\tfeaturedImage: featuredImage,\n\t\t\taltText: image && image.alt_text ? image.alt_text : alt\n\t\t};\n\t}, [size]),\n\t    featuredImage = _useSelect.featuredImage,\n\t    altText = _useSelect.altText;\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"wp-block-post-thumbnail\" },\n\t\twp.element.createElement(\n\t\t\t\"a\",\n\t\t\t{ href: link },\n\t\t\tfeaturedImage ? wp.element.createElement(\"img\", { src: featuredImage, size: size, alt: altText, \"data-id\": id }) : wp.element.createElement(\n\t\t\t\tPlaceholder,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(Spinner, null)\n\t\t\t)\n\t\t)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Thumbnail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svdGh1bWJuYWlsLmpzP2Q4YWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGZWF0dXJlZCBJbWFnZVxuICovXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBsYWNlaG9sZGVyID0gX3dwJGNvbXBvbmVudHMuUGxhY2Vob2xkZXIsXG4gICAgU3Bpbm5lciA9IF93cCRjb21wb25lbnRzLlNwaW5uZXI7XG52YXIgdXNlU2VsZWN0ID0gd3AuZGF0YS51c2VTZWxlY3Q7XG5cblxudmFyIFRodW1ibmFpbCA9IGZ1bmN0aW9uIFRodW1ibmFpbChfcmVmKSB7XG5cdHZhciBpZCA9IF9yZWYuaWQsXG5cdCAgICBsaW5rID0gX3JlZi5saW5rLFxuXHQgICAgYWx0ID0gX3JlZi5hbHQsXG5cdCAgICBzaXplID0gX3JlZi5zaXplO1xuXG5cdHZhciBfdXNlU2VsZWN0ID0gdXNlU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0XHR2YXIgaW1hZ2UgPSBzZWxlY3QoJ2NvcmUnKS5nZXRNZWRpYShpZCk7XG5cblx0XHR2YXIgZmVhdHVyZWRJbWFnZSA9IGltYWdlID8gMCA8IE9iamVjdC5rZXlzKGltYWdlLm1lZGlhX2RldGFpbHMuc2l6ZXMpLmxlbmd0aCA/IGltYWdlLm1lZGlhX2RldGFpbHMuc2l6ZXNbc2l6ZV0gPyBpbWFnZS5tZWRpYV9kZXRhaWxzLnNpemVzW3NpemVdLnNvdXJjZV91cmwgOiBpbWFnZS5zb3VyY2VfdXJsIDogaW1hZ2Uuc291cmNlX3VybCA6IG51bGw7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZmVhdHVyZWRJbWFnZTogZmVhdHVyZWRJbWFnZSxcblx0XHRcdGFsdFRleHQ6IGltYWdlICYmIGltYWdlLmFsdF90ZXh0ID8gaW1hZ2UuYWx0X3RleHQgOiBhbHRcblx0XHR9O1xuXHR9LCBbc2l6ZV0pLFxuXHQgICAgZmVhdHVyZWRJbWFnZSA9IF91c2VTZWxlY3QuZmVhdHVyZWRJbWFnZSxcblx0ICAgIGFsdFRleHQgPSBfdXNlU2VsZWN0LmFsdFRleHQ7XG5cblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcImRpdlwiLFxuXHRcdHsgY2xhc3NOYW1lOiBcIndwLWJsb2NrLXBvc3QtdGh1bWJuYWlsXCIgfSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImFcIixcblx0XHRcdHsgaHJlZjogbGluayB9LFxuXHRcdFx0ZmVhdHVyZWRJbWFnZSA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogZmVhdHVyZWRJbWFnZSwgc2l6ZTogc2l6ZSwgYWx0OiBhbHRUZXh0LCBcImRhdGEtaWRcIjogaWQgfSkgOiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBsYWNlaG9sZGVyLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgbnVsbClcblx0XHRcdClcblx0XHQpXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svdGh1bWJuYWlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ })
/******/ ]);