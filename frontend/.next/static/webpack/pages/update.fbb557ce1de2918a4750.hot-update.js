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
  var data = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n"]);

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
var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2());
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
      loading = _useQuery.loading;

  console.log('data from updates: ', data); // 2. get the mutation to update the item

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
      lineNumber: 61,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return C_projects_advanced_react_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateProduct({
                  variables: {
                    id: id,
                    name: inputs.name,
                    description: inputs.description,
                    price: inputs.price
                  }
                })["catch"](console.error);

              case 3:
                res = _context.sent;
                console.log('res::: ', res); // @TODO: handle submit

              case 5:
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
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: function onClick() {
          return console.log('inputs::: ', inputs);
        },
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlTXV0YXRpb24iLCJ1cGRhdGVQcm9kdWN0IiwibXV0YXRpb25SZXNwb25zZSIsInVzZUZvcm0iLCJQcm9kdWN0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msa0RBQUgsbUJBQTFCO0FBV0EsSUFBTUMsdUJBQXVCLEdBQUdELGtEQUFILG9CQUE3QjtBQW1CZSxTQUFTRSxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUM1QztBQUQ0QyxrQkFFWEMsK0RBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDOURNLGFBQVMsRUFBRTtBQUFFRixRQUFFLEVBQUZBO0FBQUY7QUFEbUQsR0FBdkIsQ0FGRztBQUFBLE1BRXBDRyxJQUZvQyxhQUVwQ0EsSUFGb0M7QUFBQSxNQUU5QkMsS0FGOEIsYUFFOUJBLEtBRjhCO0FBQUEsTUFFdkJDLE9BRnVCLGFBRXZCQSxPQUZ1Qjs7QUFNNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSixJQUFuQyxFQU40QyxDQVE1Qzs7QUFSNEMscUJBU0ZLLGtFQUFXLENBQ25EVix1QkFE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LEdBQVIsQ0FBWSxZQUFaLEVBQTBCTSxNQUExQixDQUFOO0FBQUEsU0FBakI7QUFBMEQsWUFBSSxFQUFDLFFBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0FyRnVCZCxhO1VBRVdFLHVELEVBT1NPLDBELEVBVWFHLG9EOzs7S0FuQmpDWixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS5mYmI1NTdjZTFkZTI5MThhNDc1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcblxyXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xyXG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcmljZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRuYW1lOiBTdHJpbmdcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICAkcHJpY2U6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlUHJvZHVjdChcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBkYXRhOiB7IG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcclxuICAvLyAxLiBnZXQgdGhlIGV4aXN0aW5nIGl0ZW1cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfUFJPRFVDVF9RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gdXBkYXRlczogJywgZGF0YSk7XHJcblxyXG4gIC8vIDIuIGdldCB0aGUgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBpdGVtXHJcbiAgY29uc3QgW3VwZGF0ZVByb2R1Y3QsIG11dGF0aW9uUmVzcG9uc2VdID0gdXNlTXV0YXRpb24oXHJcbiAgICBVUERBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLy8gdXBkYXRlcyB0byB0aGUgcHJvZHVjdDpcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG4gIC8vIGlucHV0cyBzdGF0ZTpcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShkYXRhPy5Qcm9kdWN0KTtcclxuICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG5cclxuICAvLyAzLiB3ZSBuZWVkIHRoZSBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlc1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZyEgPC9wPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dHMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlOiBpbnB1dHMucHJpY2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXM6OjogJywgcmVzKTtcclxuICAgICAgICAvLyBAVE9ETzogaGFuZGxlIHN1Ym1pdFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXttdXRhdGlvblJlc3BvbnNlLmVycm9yIHx8IGVycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXRcclxuICAgICAgICBkaXNhYmxlZD17bXV0YXRpb25SZXNwb25zZS5sb2FkaW5nfVxyXG4gICAgICAgIGFyaWEtYnVzeT17bXV0YXRpb25SZXNwb25zZS5sb2FkaW5nfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnaW5wdXRzOjo6ICcsIGlucHV0cyl9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFVwZGF0ZSBQcm9kdWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9