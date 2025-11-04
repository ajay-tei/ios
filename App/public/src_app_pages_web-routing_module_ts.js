"use strict";
(self["webpackChunktei_shell"] = self["webpackChunktei_shell"] || []).push([["src_app_pages_web-routing_module_ts"],{

/***/ 76293:
/*!*********************************************!*\
  !*** ./src/app/pages/web-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebModule": () => (/* binding */ WebModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _projects_app_core_lib_src_lib_services_web_dynamic_routing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/@services/web-dynamic-routing.service */ 54285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
var _WebModule;



class WebModule {}
_WebModule = WebModule;
_WebModule.ɵfac = function WebModule_Factory(t) {
  return new (t || _WebModule)();
};
_WebModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _WebModule
});
_WebModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ROUTES,
    useFactory: webDynamicRoutingService => {
      return webDynamicRoutingService.dynamicChildRoutes;
    },
    deps: [_projects_app_core_lib_src_lib_services_web_dynamic_routing_service__WEBPACK_IMPORTED_MODULE_0__.WebDynamicRoutingService],
    multi: true
  }]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_web-routing_module_ts.js.map