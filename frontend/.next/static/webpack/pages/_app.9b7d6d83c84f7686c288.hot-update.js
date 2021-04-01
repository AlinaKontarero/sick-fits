webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return paginationField; });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,
    // tells Apollo we'll care of everything
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      console.log({
        existing: existing,
        args: args,
        cache: cache
      });
      var skip = args.skip,
          first = args.first; // Read the items number on the page from the cache:

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["PAGINATION_QUERY"]
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // Check if we have existing items:

      var items = existing.slice(skip, skip + first).filter(function (item) {
        return item;
      });

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // If no any items, go to the network to fetch them
        return false;
      } // If there are items, return thwm without fetching the network:


      if (items.length) {
        console.log("There are ".concat(items.length, " items in a cache! Gonna send em to apollo"));
        return items;
      } // console.log(data);


      return false; // Fallback to network
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // Runs when apollo client comes back from the network with our product:

      console.log("Merging items from the network: ".concat(incoming.length, " items"));
      var merged = existing ? existing.slice(0) : []; // eslint-disable-next-line no-plusplus

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged);
      return merged;
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwiY29uc29sZSIsImxvZyIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDeEMsU0FBTztBQUNMQyxXQUFPLEVBQUUsS0FESjtBQUNXO0FBQ2hCQyxRQUZLLGtCQUVnQztBQUFBOztBQUFBLFVBQWhDQyxRQUFnQyx1RUFBckIsRUFBcUI7O0FBQUE7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ25DQyxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSixnQkFBUSxFQUFSQSxRQUFGO0FBQVlDLFlBQUksRUFBSkEsSUFBWjtBQUFrQkMsYUFBSyxFQUFMQTtBQUFsQixPQUFaO0FBRG1DLFVBRTNCRyxJQUYyQixHQUVYSixJQUZXLENBRTNCSSxJQUYyQjtBQUFBLFVBRXJCQyxLQUZxQixHQUVYTCxJQUZXLENBRXJCSyxLQUZxQixFQUduQzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sU0FBTixDQUFnQjtBQUFFQyxhQUFLLEVBQUVDLHVFQUFnQkE7QUFBekIsT0FBaEIsQ0FBYjtBQUNBLFVBQU1DLEtBQUssR0FBR0osSUFBSCxhQUFHQSxJQUFILGdEQUFHQSxJQUFJLENBQUVLLGdCQUFULDBEQUFHLHNCQUF3QkQsS0FBdEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdSLElBQUksR0FBR0MsS0FBUCxHQUFlLENBQTVCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHTCxLQUFsQixDQUFkLENBUG1DLENBU25DOztBQUNBLFVBQU1XLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQVY7QUFBQSxPQUExQyxDQUFkOztBQUNBLFVBQUdILEtBQUssQ0FBQ0ksTUFBTixJQUFnQkosS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFqQyxJQUEwQ08sSUFBSSxLQUFLQyxLQUF0RCxFQUE2RDtBQUMzRCxlQUFPRyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBSUEsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFyQixFQUE0QjtBQUMxQjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BakJrQyxDQWtCbkM7OztBQUNBLFVBQUlXLEtBQUssQ0FBQ0ksTUFBVixFQUFrQjtBQUNoQmxCLGVBQU8sQ0FBQ0MsR0FBUixxQkFDZWEsS0FBSyxDQUFDSSxNQURyQjtBQUdBLGVBQU9KLEtBQVA7QUFDRCxPQXhCa0MsQ0F5Qm5DOzs7QUFDQSxhQUFPLEtBQVAsQ0ExQm1DLENBMEJyQjtBQUNmLEtBN0JJO0FBOEJMSyxTQTlCSyxpQkE4QkN0QixRQTlCRCxFQThCV3VCLFFBOUJYLFNBOEIrQjtBQUFBLFVBQVJ0QixJQUFRLFNBQVJBLElBQVE7QUFBQSxVQUMxQkksSUFEMEIsR0FDVkosSUFEVSxDQUMxQkksSUFEMEI7QUFBQSxVQUNwQkMsS0FEb0IsR0FDVkwsSUFEVSxDQUNwQkssS0FEb0IsRUFFbEM7O0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUiwyQ0FBK0NtQixRQUFRLENBQUNGLE1BQXhEO0FBQ0EsVUFBTUcsTUFBTSxHQUFHeEIsUUFBUSxHQUFHQSxRQUFRLENBQUNrQixLQUFULENBQWUsQ0FBZixDQUFILEdBQXVCLEVBQTlDLENBSmtDLENBTWxDOztBQUNBLFdBQUssSUFBSU8sQ0FBQyxHQUFHcEIsSUFBYixFQUFtQm9CLENBQUMsR0FBR3BCLElBQUksR0FBR2tCLFFBQVEsQ0FBQ0YsTUFBdkMsRUFBK0MsRUFBRUksQ0FBakQsRUFBb0Q7QUFDbERELGNBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlGLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHcEIsSUFBTCxDQUFwQjtBQUNEOztBQUNERixhQUFPLENBQUNDLEdBQVIsQ0FBWW9CLE1BQVo7QUFDQSxhQUFPQSxNQUFQO0FBQ0Q7QUExQ0ksR0FBUDtBQTRDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjliN2Q2ZDgzYzg0Zjc2ODZjMjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsIC8vIHRlbGxzIEFwb2xsbyB3ZSdsbCBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICAvLyBSZWFkIHRoZSBpdGVtcyBudW1iZXIgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGU6XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcclxuICAgICAgY29uc3QgY291bnQgPSBkYXRhPy5fYWxsUHJvZHVjdHNNZXRhPy5jb3VudDtcclxuICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBleGlzdGluZyBpdGVtczpcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XHJcbiAgICAgIGlmKGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGggIT09IGZpcnN0ICYmIHBhZ2UgPT09IHBhZ2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICAvLyBJZiBubyBhbnkgaXRlbXMsIGdvIHRvIHRoZSBuZXR3b3JrIHRvIGZldGNoIHRoZW1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zLCByZXR1cm4gdGh3bSB3aXRob3V0IGZldGNoaW5nIHRoZSBuZXR3b3JrOlxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcyBpbiBhIGNhY2hlISBHb25uYSBzZW5kIGVtIHRvIGFwb2xsb2BcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBGYWxsYmFjayB0byBuZXR3b3JrXHJcbiAgICB9LFxyXG4gICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICAvLyBSdW5zIHdoZW4gYXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIG5ldHdvcmsgd2l0aCBvdXIgcHJvZHVjdDpcclxuICAgICAgY29uc29sZS5sb2coYE1lcmdpbmcgaXRlbXMgZnJvbSB0aGUgbmV0d29yazogJHtpbmNvbWluZy5sZW5ndGh9IGl0ZW1zYCk7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhtZXJnZWQpO1xyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=