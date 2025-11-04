"use strict";
(self["webpackChunktei_shell"] = self["webpackChunktei_shell"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 39730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tei_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tei/core */ 13545);
/* harmony import */ var _tei_pos_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tei/pos-shared */ 70053);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/dashboard/dashboard.component */ 47292);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_default_route_handler_default_route_handler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/default-route-handler/default-route-handler.component */ 75839);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_miscellaneous_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/miscellaneous/forbidden/forbidden.component */ 88407);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/miscellaneous/not-found/not-found.component */ 42750);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_miscellaneous_NotApplicableAction_not_applicable_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/miscellaneous/NotApplicableAction/not-applicable-action.component */ 14574);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/pages.component */ 98147);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_portal_groups_portal_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/portal-groups/portal-groups.component */ 12626);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_portals_portals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/portals/portals.component */ 61208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
var _PagesRoutingModule;













const routes = [{
  path: '',
  component: _projects_app_core_lib_src_lib_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent,
  children: [{
    path: '',
    component: _projects_app_core_lib_src_lib_pages_default_route_handler_default_route_handler_component__WEBPACK_IMPORTED_MODULE_1__.DefaultRouteHandlerComponent,
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Host
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'dashboard',
    component: _projects_app_core_lib_src_lib_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Host
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'portal-groups',
    component: _projects_app_core_lib_src_lib_pages_portal_groups_portal_groups_component__WEBPACK_IMPORTED_MODULE_6__.PortalGroupsComponent,
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.PortalGroup
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'portals',
    component: _projects_app_core_lib_src_lib_pages_portals_portals_component__WEBPACK_IMPORTED_MODULE_7__.PortalsComponent
  }, {
    path: 'pos',
    component: _tei_pos_shared__WEBPACK_IMPORTED_MODULE_9__.PosContainerComponent,
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Pos
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    },
    children: [{
      path: 'food-and-beverage/:sideId/orders/:orderId/payment',
      loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_common-payment-processor_fesm2020_tei-common-payment-processor_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-payment-processor */ 24725)).then(m => m.PaymentProcessorModule)
    }, {
      path: 'retail/:sideId/sell/payment',
      loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_common-payment-processor_fesm2020_tei-common-payment-processor_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-payment-processor */ 24725)).then(m => m.PaymentProcessorModule)
    }, {
      path: 'retail/:sideId/tee-sheet/payment',
      loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_common-payment-processor_fesm2020_tei-common-payment-processor_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-payment-processor */ 24725)).then(m => m.PaymentProcessorModule)
    }, {
      path: 'retail',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_tei_pos-tee-sheet_fesm2020_tei-pos-tee-sheet_mjs"), __webpack_require__.e("node_modules_tei_pos-retail_fesm2020_tei-pos-retail_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/pos-retail */ 5186)).then(m => m.RetailModule),
      data: {
        appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Retail,
        posIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Retail
      },
      resolve: {
        data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
      }
    }, {
      path: 'food-and-beverage',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @tei/pos-food-and-beverage */ 18946)).then(m => m.FoodAndBeverageModule),
      data: {
        appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.FoodAndBeverage,
        posIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.FoodAndBeverage
      },
      resolve: {
        data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
      }
    }]
  }, {
    path: 'admin-center',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer_fesm2020_ng2-pdf-viewer_mjs"), __webpack_require__.e("default-node_modules_tei_analytics-group-analytics_fesm2020_tei-analytics-group-analytics_mjs"), __webpack_require__.e("default-node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center-tei-admin-admin-c-b70de7"), __webpack_require__.e("node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/admin-admin-center */ 10784)).then(m => m.AdminCenterModule),
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.WebAdminCenter
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'office/bookings/setup',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer_fesm2020_ng2-pdf-viewer_mjs"), __webpack_require__.e("default-node_modules_tei_analytics-group-analytics_fesm2020_tei-analytics-group-analytics_mjs"), __webpack_require__.e("default-node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center-tei-admin-admin-c-b70de7"), __webpack_require__.e("node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/admin-admin-center */ 10784)).then(m => m.BookingSetupModule)
  }, {
    path: 'office/portal-admin-center/setup',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer_fesm2020_ng2-pdf-viewer_mjs"), __webpack_require__.e("default-node_modules_tei_analytics-group-analytics_fesm2020_tei-analytics-group-analytics_mjs"), __webpack_require__.e("default-node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center-tei-admin-admin-c-b70de7"), __webpack_require__.e("node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/admin-admin-center */ 10784)).then(m => m.PortalAdminCenterSettingsModule),
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.WebAdminCenter
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'payment',
    component: _tei_pos_shared__WEBPACK_IMPORTED_MODULE_9__.PosContainerComponent,
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_common-payment-processor_fesm2020_tei-common-payment-processor_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-payment-processor */ 24725)).then(m => m.PaymentProcessorModule),
      data: {
        appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.PaymentProcess
      },
      resolve: {
        data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
      }
    }]
  }, {
    path: 'payment-engine',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tei_common-my-account-shared_fesm2020_tei-common-my-account-shared_mjs-n-c21041"), __webpack_require__.e("node_modules_tei_common-payment-engine_fesm2020_tei-common-payment-engine_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-payment-engine */ 51360)).then(m => m.PaymentEngineModule)
  }, {
    path: 'office/module-settings',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-slider_ngx-slider_fesm2020_angular-slider-ngx-slider_mjs"), __webpack_require__.e("common"), __webpack_require__.e("node_modules_tei_common-module-settings_fesm2020_tei-common-module-settings_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-module-settings */ 67228)).then(m => m.ModuleSettingsModule)
  }, {
    path: 'office/activities/settings',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_booking-activities_fesm2020_tei-booking-activities_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/booking-activities */ 93384)).then(m => m.ActivitiesSettingModule)
  }, {
    path: 'office/user-management/translations',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_admin-translations_fesm2020_tei-admin-translations_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/admin-translations */ 87562)).then(m => m.TranslationsModule)
  }, {
    path: 'office/user-management',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer_fesm2020_ng2-pdf-viewer_mjs"), __webpack_require__.e("default-node_modules_tei_analytics-group-analytics_fesm2020_tei-analytics-group-analytics_mjs"), __webpack_require__.e("default-node_modules_tei_admin-admin-center_fesm2020_tei-admin-admin-center-tei-admin-admin-c-b70de7"), __webpack_require__.e("node_modules_tei_security-user-management_fesm2020_tei-security-user-management_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/security-user-management */ 20308)).then(m => m.UserManagementModule)
  }, {
    path: 'office/marketing/content-management',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_cms-admin_fesm2020_tei-cms-admin_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/cms-admin */ 63849)).then(m => m.CMSAdminModule)
  }, {
    path: 'office/food-and-beverage',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_food-and-beverage-administration_fesm2020_tei-food-and-beverage-administration_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/food-and-beverage-administration */ 11519)).then(m => m.FBAdministrationModule)
  }, {
    path: 'office/marketing/notifications',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-slider_ngx-slider_fesm2020_angular-slider-ngx-slider_mjs"), __webpack_require__.e("default-node_modules_tei_material-generic-filter_fesm2020_tei-material-generic-filter_mjs"), __webpack_require__.e("node_modules_tei_common-automated-notification_fesm2020_tei-common-automated-notification_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/common-automated-notification */ 60417)).then(m => m.AutomatedNotificationModule)
  }, {
    path: 'office/contacts/member-directory',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_contacts-member-directory_fesm2020_tei-contacts-member-directory_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/contacts-member-directory */ 54961)).then(m => m.MemberDirectoryModule)
  }, {
    path: 'office/contacts',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @tei/office-contacts */ 20981)).then(m => m.ContactsModule)
  }, {
    path: 'office/retail',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_retail-admin_fesm2020_tei-retail-admin_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/retail-admin */ 56514)).then(m => m.RetailAdminModule)
  }, {
    path: 'office/home',
    loadChildren: () => __webpack_require__.e(/*! import() */ "node_modules_tei_office-dashboard_esm2020_tei-office-dashboard_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @tei/office-dashboard */ 60554)).then(m => m.DashboardModule),
    data: {
      appIdentifier: _tei_core__WEBPACK_IMPORTED_MODULE_8__.ApplicationIdentifier.Contacts
    },
    resolve: {
      data: _tei_core__WEBPACK_IMPORTED_MODULE_8__.RouteChangeResolver
    }
  }, {
    path: 'office/bookings/events',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @tei/office-event-management */ 63772)).then(m => m.EventManagementModule)
  }, {
    path: 'office/bookings/dining',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @tei/booking-dining */ 45429)).then(m => m.OfficeDiningModule)
  }, {
    path: 'office/bookings/tee-sheet',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tei_formly-custom-components_esm2020_lib_formly-custom-setting-card-wrap-82c20b"), __webpack_require__.e("node_modules_tei_tee-sheet-administration_fesm2020_tei-tee-sheet-administration_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/tee-sheet-administration */ 3158)).then(m => m.TeeSheetAdministrationModule)
  }, {
    path: 'office/analytics',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_chips_mjs"), __webpack_require__.e("default-node_modules_ng2-pdf-viewer_fesm2020_ng2-pdf-viewer_mjs"), __webpack_require__.e("default-node_modules_tei_analytics-group-analytics_fesm2020_tei-analytics-group-analytics_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @tei/analytics-group-analytics */ 18348)).then(m => m.AnalyticsGroupModule)
  }, {
    path: 'web',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_web-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/web-routing.module */ 76293)).then(m => m.WebModule)
    // children: [
    //   {
    //     path: 'tee-times',
    //     loadChildren: () => import('@tei/booking-tee-times').then(m => m.TeeTimesModule),
    //     data: { appIdentifier: ApplicationIdentifier.TeeTime },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   },
    //   {
    //     path: 'lottery/lottery-settings',
    //     loadChildren: () => import('@tei/tee-sheet-administration').then(m => m.LotteryRequestsModule)
    //   },
    //   {
    //     path: 'lottery',
    //     loadChildren: () => import('@tei/booking-lottery').then(m => m.LotteryModule),
    //     data: { appIdentifier: ApplicationIdentifier.Lottery },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   },
    //   {
    //     path: 'dining',
    //     loadChildren: () => import('@tei/booking-dining').then(m => m.DiningModule),
    //     data: { appIdentifier: ApplicationIdentifier.Dining },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   },
    //   {
    //     path: 'field-management',
    //     loadChildren: () => import('@tei/common-field-management').then(m => m.FieldManagementModule)
    //   },
    //   {
    //     path: 'my-account',
    //     loadChildren: () => import('@tei/common-my-account').then(m => m.MyAccountModule)
    //   },
    //   {
    //     path: 'event',
    //     loadChildren: () => import('@tei/booking-event').then(m => m.EventModule),
    //     data: { appIdentifier: ApplicationIdentifier.BookingEvent },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   },
    //   {
    //     path: 'activities',
    //     loadChildren: () => import('@tei/booking-activities').then(m => m.ActivitiesModule),
    //     data: { appIdentifier: ApplicationIdentifier.BookingActivities },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   },
    //   {
    //     path: 'shop',
    //     loadChildren: () => import('@tei/retail-ecommerce').then(m => m.ECommerceModule),
    //   },
    //   {
    //     path: 'contacts/member-directory',
    //     loadChildren: () => import('@tei/contacts-member-directory').then(m => m.MemberDirectoryModule),
    //   },
    //   {
    //     path: "",
    //     loadChildren: () => import('@tei/marketing-cms').then(m => m.CMSModule),
    //     data: { appIdentifier: ApplicationIdentifier.Web },
    //     resolve: {
    //       data: RouteChangeResolver
    //     }
    //   }
    // ]
  }, {
    path: 'not-found',
    component: _projects_app_core_lib_src_lib_pages_miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent
  }, {
    path: 'forbidden',
    component: _projects_app_core_lib_src_lib_pages_miscellaneous_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__.ForbiddenComponent
  }, {
    path: 'not-applicable-action',
    component: _projects_app_core_lib_src_lib_pages_miscellaneous_NotApplicableAction_not_applicable_action_component__WEBPACK_IMPORTED_MODULE_4__.NotApplicableActionComponent
  }, {
    path: '**',
    redirectTo: 'not-found'
  }]
}];
class PagesRoutingModule {}
_PagesRoutingModule = PagesRoutingModule;
_PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) {
  return new (t || _PagesRoutingModule)();
};
_PagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _PagesRoutingModule
});
_PagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _tei_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tei/core */ 13545);
/* harmony import */ var _tei_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tei/material */ 81231);
/* harmony import */ var _tei_nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tei/nebular-theme */ 39229);
/* harmony import */ var _tei_pos_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tei/pos-shared */ 70053);
/* harmony import */ var _projects_app_core_lib_src_lib_core_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/@core/environments/environment */ 8097);
/* harmony import */ var _projects_app_core_lib_src_lib_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/@theme/theme.module */ 49229);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/dashboard/dashboard.module */ 94589);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_default_route_handler_default_route_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/default-route-handler/default-route-handler.component */ 75839);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/miscellaneous/miscellaneous.module */ 9280);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/pages.component */ 98147);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_portal_groups_portal_groups_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/portal-groups/portal-groups.module */ 24943);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_portals_portals_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/portals/portals.module */ 12716);
/* harmony import */ var _projects_app_core_lib_src_lib_pages_web_web_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../projects/app-core-lib/src/lib/pages/web/web.module */ 30945);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages-routing.module */ 39730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
var _PagesModule;
















class PagesModule {}
_PagesModule = PagesModule;
_PagesModule.ɵfac = function PagesModule_Factory(t) {
  return new (t || _PagesModule)();
};
_PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _PagesModule
});
_PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [..._tei_core__WEBPACK_IMPORTED_MODULE_11__.CORE_PROVIDERS, {
    provide: _tei_core__WEBPACK_IMPORTED_MODULE_11__.ENVIRONMENT,
    useValue: _projects_app_core_lib_src_lib_core_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment
  }, {
    provide: 'IConfigService',
    useClass: _tei_core__WEBPACK_IMPORTED_MODULE_11__.ConfigService
  }, {
    provide: 'IAPIBaseUrlProvider',
    useClass: _tei_core__WEBPACK_IMPORTED_MODULE_11__.APIBaseUrlProvider
  }, {
    provide: 'IExtendedAuthenticationService',
    useClass: _tei_pos_shared__WEBPACK_IMPORTED_MODULE_12__.ExtendedAuthenticationService
  }],
  imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _projects_app_core_lib_src_lib_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _tei_nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbMenuModule, _projects_app_core_lib_src_lib_pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__.DashboardModule, _projects_app_core_lib_src_lib_pages_portal_groups_portal_groups_module__WEBPACK_IMPORTED_MODULE_6__.PortalGroupsModule, _projects_app_core_lib_src_lib_pages_portals_portals_module__WEBPACK_IMPORTED_MODULE_7__.PortalsModule, _projects_app_core_lib_src_lib_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__.MiscellaneousModule, _projects_app_core_lib_src_lib_pages_web_web_module__WEBPACK_IMPORTED_MODULE_8__.WebModule, _tei_material__WEBPACK_IMPORTED_MODULE_14__.LoadingModule, _tei_pos_shared__WEBPACK_IMPORTED_MODULE_12__.ExtendedAuthenticationModule.forRoot({
    modules: [{
      moduleKey: _tei_core__WEBPACK_IMPORTED_MODULE_11__.ApplicationIdentifier.Retail,
      moduleStrategy: {
        login: {
          endpoint: '/login',
          redirect: {
            success: '/sell'
          }
        },
        logout: {
          endpoint: '/logout',
          redirect: {
            success: '/login'
          }
        }
      }
    }, {
      moduleKey: _tei_core__WEBPACK_IMPORTED_MODULE_11__.ApplicationIdentifier.FoodAndBeverage,
      moduleStrategy: {
        login: {
          endpoint: '/login',
          redirect: {
            success: '/orders'
          }
        },
        logout: {
          endpoint: '/logout',
          redirect: {
            success: '/login'
          }
        }
      }
    }]
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_projects_app_core_lib_src_lib_pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent, _projects_app_core_lib_src_lib_pages_default_route_handler_default_route_handler_component__WEBPACK_IMPORTED_MODULE_3__.DefaultRouteHandlerComponent],
    imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_9__.PagesRoutingModule, _projects_app_core_lib_src_lib_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _tei_nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbMenuModule, _projects_app_core_lib_src_lib_pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__.DashboardModule, _projects_app_core_lib_src_lib_pages_portal_groups_portal_groups_module__WEBPACK_IMPORTED_MODULE_6__.PortalGroupsModule, _projects_app_core_lib_src_lib_pages_portals_portals_module__WEBPACK_IMPORTED_MODULE_7__.PortalsModule, _projects_app_core_lib_src_lib_pages_miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_4__.MiscellaneousModule, _projects_app_core_lib_src_lib_pages_web_web_module__WEBPACK_IMPORTED_MODULE_8__.WebModule, _tei_material__WEBPACK_IMPORTED_MODULE_14__.LoadingModule, _tei_pos_shared__WEBPACK_IMPORTED_MODULE_12__.ExtendedAuthenticationModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map