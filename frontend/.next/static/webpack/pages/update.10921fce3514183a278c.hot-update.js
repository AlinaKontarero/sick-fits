webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateProduct; });
/* harmony import */ var C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");






var _jsxFileName = "C:\\projects\\advanced-react\\Advanced-React\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { id: $id, name: $name, description: $description, price: $price }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SINGLE_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()); // eslint-disable-next-line react/prop-types

function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  // 1. get the existing item
  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading; // 2. get the mutation to update the item


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // updates to the product:

    }
  }),
      _useMutation2 = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      mutationResponse = _useMutation2[1]; // inputs state:


  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_9__["default"])(data === null || data === void 0 ? void 0 : data.Product),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  console.log(inputs); // 3. we need the form to handle the updates

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: "Loading! "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // @TODO: handle submit
                // Submit input fields to the backend:
                // const res = await createProduct();
                // clearForm();
                // // Redirect toi the Products page:
                // Router.push({
                //   pathname: `/product/${res.data.createProduct.id}`,
                // });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: mutationResponse.error || error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("fieldset", {
      disabled: mutationResponse.loading,
      "aria-busy": mutationResponse.loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: function onClick() {
          return console.log('inputs::: ', inputs);
        },
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "RlXDDZiN4+QgpjxoVFQtgkuT8Wk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _lib_useForm__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = UpdateProduct;

var _c;

$RefreshReg$(_c, "UpdateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJtdXRhdGlvblJlc3BvbnNlIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msa0RBQUgsbUJBQTFCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUdELGtEQUFILG9CQUE3QixDLENBbUJBOztBQUNlLFNBQVNFLGFBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQzVDO0FBRDRDLGtCQUVYQywrREFBUSxDQUFDTCxvQkFBRCxFQUF1QjtBQUM5RE0sYUFBUyxFQUFFO0FBQUVGLFFBQUUsRUFBRkE7QUFBRjtBQURtRCxHQUF2QixDQUZHO0FBQUEsTUFFcENHLElBRm9DLGFBRXBDQSxJQUZvQztBQUFBLE1BRTlCQyxLQUY4QixhQUU5QkEsS0FGOEI7QUFBQSxNQUV2QkMsT0FGdUIsYUFFdkJBLE9BRnVCLEVBUTVDOzs7QUFSNEMscUJBU0ZDLGtFQUFXLENBQ25EUix1QkFEbUQsRUFFbkQ7QUFDRUksYUFBUyxFQUFFO0FBQ1RGLFFBQUUsRUFBRkEsRUFEUyxDQUVU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QTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0VEOztHQTlGdUJaLGE7VUFFV0UsdUQsRUFPU0ssMEQsRUFVYUcsb0Q7OztLQW5CakNWLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLjEwOTIxZmNlMzUxNDE4M2EyNzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuXHJcbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XHJcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJG5hbWU6IFN0cmluZ1xyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgICRwcmljZTogSW50XHJcbiAgKSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGRhdGE6IHsgaWQ6ICRpZCwgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSkge1xyXG4gIC8vIDEuIGdldCB0aGUgZXhpc3RpbmcgaXRlbVxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvLyAyLiBnZXQgdGhlIG11dGF0aW9uIHRvIHVwZGF0ZSB0aGUgaXRlbVxyXG4gIGNvbnN0IFt1cGRhdGVQcm9kdWN0LCBtdXRhdGlvblJlc3BvbnNlXSA9IHVzZU11dGF0aW9uKFxyXG4gICAgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIC8vIHVwZGF0ZXMgdG8gdGhlIHByb2R1Y3Q6XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuICAvLyBpbnB1dHMgc3RhdGU6XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oZGF0YT8uUHJvZHVjdCk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcbiAgLy8gMy4gd2UgbmVlZCB0aGUgZm9ybSB0byBoYW5kbGUgdGhlIHVwZGF0ZXNcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmchIDwvcD47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gQFRPRE86IGhhbmRsZSBzdWJtaXRcclxuXHJcbiAgICAgICAgLy8gU3VibWl0IGlucHV0IGZpZWxkcyB0byB0aGUgYmFja2VuZDpcclxuICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XHJcbiAgICAgICAgLy8gY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgLy8gLy8gUmVkaXJlY3QgdG9pIHRoZSBQcm9kdWN0cyBwYWdlOlxyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e211dGF0aW9uUmVzcG9uc2UuZXJyb3IgfHwgZXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldFxyXG4gICAgICAgIGRpc2FibGVkPXttdXRhdGlvblJlc3BvbnNlLmxvYWRpbmd9XHJcbiAgICAgICAgYXJpYS1idXN5PXttdXRhdGlvblJlc3BvbnNlLmxvYWRpbmd9XHJcbiAgICAgID5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnaW5wdXRzOjo6ICcsIGlucHV0cyl9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFVwZGF0ZSBQcm9kdWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9