"use strict";
(self["webpackChunktei_shell"] = self["webpackChunktei_shell"] || []).push([["common"],{

/***/ 79057:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tei/booking-tee-times-shared/fesm2020/tei-booking-tee-times-shared.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeeTimesSharedModule": () => (/* binding */ TeeTimesSharedModule),
/* harmony export */   "ViewCourseDetailsComponent": () => (/* binding */ ViewCourseDetailsComponent),
/* harmony export */   "ViewCourseDetailsModule": () => (/* binding */ ViewCourseDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-card */ 77315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _tei_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tei/core */ 13545);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 59121);












function ViewCourseDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCourseDetailsComponent_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.notify.emit({
        course: item_r1,
        settings: ctx_r2.model["TeeTimeCategorySettings"]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8)(8, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.CourseName, " ");
  }
}
class CourseDetailsService {
  constructor(apiBaseUrlProvider, http) {
    this.apiBaseUrlProvider = apiBaseUrlProvider;
    this.http = http;
    this.serviceUrl = this.apiBaseUrlProvider.getBaseUrl() + '/Booking/TeeTimes/CourseDetails';
  }
  Get(request) {
    const apiUrl = this.serviceUrl + '';
    return this.http.get(apiUrl, {
      params: request
    });
  }
  Post(request) {
    const apiUrl = this.serviceUrl + '';
    return this.http.post(apiUrl, request);
  }
}
/** @nocollapse */
CourseDetailsService.ɵfac = function CourseDetailsService_Factory(t) {
  return new (t || CourseDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('IAPIBaseUrlProvider'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
/** @nocollapse */
CourseDetailsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CourseDetailsService,
  factory: CourseDetailsService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['IAPIBaseUrlProvider']
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }];
  }, null);
})();
class GetCourseDetailsRequest {}
class GetCourseDetailsResponse {}
class CoursesSetting {}
class TeeTimeCategorySettings {}
class PostCourseDetailsRequest {}
class PostCourseDetailsRequestForm extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup {
  constructor() {
    super({
      // Title: new FormControl(''),
    });
  }
  setValue(value, options) {
    const request = new PostCourseDetailsRequest();
    // request.Title = value.Title;
    super.setValue(request, options);
  }
}
class PostCourseDetailsResponse {}
class ViewCourseDetailsComponent extends _tei_core__WEBPACK_IMPORTED_MODULE_3__.AbstractFormGroupControlValueAccessor {
  constructor(_errorStateMatcher, CourseDetailsService) {
    super(_errorStateMatcher);
    this._errorStateMatcher = _errorStateMatcher;
    this.CourseDetailsService = CourseDetailsService;
    this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.form = new PostCourseDetailsRequestForm();
    const request = new GetCourseDetailsRequest();
    this.load(request);
  }
  load(request) {
    if (!this.model) {
      this.model = new GetCourseDetailsResponse();
    }
    this.CourseDetailsService.Get(request).subscribe(response => {
      this.model = response;
      this.writeValue(this.model);
    });
  }
}
/** @nocollapse */
ViewCourseDetailsComponent.ɵfac = function ViewCourseDetailsComponent_Factory(t) {
  return new (t || ViewCourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('ICourseDetailsService'));
};
/** @nocollapse */
ViewCourseDetailsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ViewCourseDetailsComponent,
  selectors: [["tei-tee-times-shared-view-course-details"]],
  outputs: {
    notify: "notify"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_tei_core__WEBPACK_IMPORTED_MODULE_3__.ngFormGroupControlValueAccessorProviders)(ViewCourseDetailsComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 2,
  consts: [[3, "formGroup"], ["class", "o-setting", 4, "ngFor", "ngForOf"], [1, "o-setting"], ["mat-ripple", "", 1, "o-setting-row", "m-setting-row-button", "mat-ripple", 3, "click"], [1, "row", "align-items-center"], [1, "col"], [1, "d-block"], [1, "a-text-primary"], [1, "col-auto"], [1, "material-icons", "float-right"]],
  template: function ViewCourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewCourseDetailsComponent_div_1_Template, 10, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model["TeeTimeCourses"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCourseDetailsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'tei-tee-times-shared-view-course-details',
      providers: [(0,_tei_core__WEBPACK_IMPORTED_MODULE_3__.ngFormGroupControlValueAccessorProviders)(ViewCourseDetailsComponent)],
      template: "<ng-container [formGroup]=\"form\">\n    <div class=\"o-setting\" *ngFor=\"let item of model['TeeTimeCourses']\">\n        <div mat-ripple class=\"o-setting-row m-setting-row-button mat-ripple\"\n            (click)=\"notify.emit({course: item, settings : model['TeeTimeCategorySettings']})\">\n            <div class=\"row align-items-center\">\n                <div class=\"col\">\n                    <div class=\"d-block\">\n                        <div class=\"a-text-primary\">\n                            {{ item.CourseName }}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-auto\">\n                    <mat-icon class=\"material-icons float-right\">arrow_right</mat-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n"
    }]
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['ICourseDetailsService']
      }]
    }];
  }, {
    notify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
const BASE_MODULES$1 = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule];
const MATERIAL_MODULES = [_angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_7__.MatLegacyCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule];
const TEI_MATERIAL_MODULES = [];
const COMPONENTS$1 = [ViewCourseDetailsComponent];
class ViewCourseDetailsModule {}
/** @nocollapse */
ViewCourseDetailsModule.ɵfac = function ViewCourseDetailsModule_Factory(t) {
  return new (t || ViewCourseDetailsModule)();
};
/** @nocollapse */
ViewCourseDetailsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ViewCourseDetailsModule
});
/** @nocollapse */
ViewCourseDetailsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'ICourseDetailsService',
    useClass: CourseDetailsService
  }],
  imports: [BASE_MODULES$1, MATERIAL_MODULES, TEI_MATERIAL_MODULES, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_7__.MatLegacyCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCourseDetailsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [...COMPONENTS$1],
      imports: [...BASE_MODULES$1, ...MATERIAL_MODULES, ...TEI_MATERIAL_MODULES],
      exports: [...BASE_MODULES$1, ...MATERIAL_MODULES, ...TEI_MATERIAL_MODULES, ...COMPONENTS$1],
      providers: [{
        provide: 'ICourseDetailsService',
        useClass: CourseDetailsService
      }]
    }]
  }], null, null);
})();
const BASE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule];
const MODULES = [];
const COMPONENTS = [];
const PIPES = [];
class TeeTimesSharedModule {}
/** @nocollapse */
TeeTimesSharedModule.ɵfac = function TeeTimesSharedModule_Factory(t) {
  return new (t || TeeTimesSharedModule)();
};
/** @nocollapse */
TeeTimesSharedModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TeeTimesSharedModule
});
/** @nocollapse */
TeeTimesSharedModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [BASE_MODULES, MODULES, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeeTimesSharedModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [...BASE_MODULES, ...MODULES],
      exports: [...BASE_MODULES, ...MODULES, ...COMPONENTS, ...PIPES],
      declarations: [...COMPONENTS, ...PIPES],
      providers: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of theme
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map