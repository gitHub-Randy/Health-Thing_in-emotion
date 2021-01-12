function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_emotion_description_emotion_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/emotion-description/emotion-description.component */
    "./src/app/components/emotion-description/emotion-description.component.ts");
    /* harmony import */


    var _components_emotion_selection_emotion_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/emotion-selection/emotion-selection.component */
    "./src/app/components/emotion-selection/emotion-selection.component.ts");
    /* harmony import */


    var _components_emotion_strengths_emotion_strengths_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/emotion-strengths/emotion-strengths.component */
    "./src/app/components/emotion-strengths/emotion-strengths.component.ts");
    /* harmony import */


    var _components_onboarding_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/onboarding/start/start.component */
    "./src/app/components/onboarding/start/start.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding1_onboarding1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/onboarding/onboarding1/onboarding1.component */
    "./src/app/components/onboarding/onboarding1/onboarding1.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding2_onboarding2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/onboarding/onboarding2/onboarding2.component */
    "./src/app/components/onboarding/onboarding2/onboarding2.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding3_onboarding3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/onboarding/onboarding3/onboarding3.component */
    "./src/app/components/onboarding/onboarding3/onboarding3.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding4_onboarding4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/onboarding/onboarding4/onboarding4.component */
    "./src/app/components/onboarding/onboarding4/onboarding4.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: '/onboarding',
      pathMatch: 'full'
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: "dashboard",
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    }, {
      path: "emotions",
      component: _components_emotion_selection_emotion_selection_component__WEBPACK_IMPORTED_MODULE_3__["EmotionSelectionComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
      path: "emotions/strengths",
      component: _components_emotion_strengths_emotion_strengths_component__WEBPACK_IMPORTED_MODULE_4__["EmotionStrengthsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
      path: "emotions/description",
      component: _components_emotion_description_emotion_description_component__WEBPACK_IMPORTED_MODULE_2__["EmotionDescriptionComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
      path: "onboarding",
      component: _components_onboarding_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"]
    }, {
      path: "onboarding/1",
      component: _components_onboarding_onboarding1_onboarding1_component__WEBPACK_IMPORTED_MODULE_6__["Onboarding1Component"]
    }, {
      path: "onboarding/2",
      component: _components_onboarding_onboarding2_onboarding2_component__WEBPACK_IMPORTED_MODULE_7__["Onboarding2Component"]
    }, {
      path: "onboarding/3",
      component: _components_onboarding_onboarding3_onboarding3_component__WEBPACK_IMPORTED_MODULE_8__["Onboarding3Component"]
    }, {
      path: "onboarding/4",
      component: _components_onboarding_onboarding4_onboarding4_component__WEBPACK_IMPORTED_MODULE_9__["Onboarding4Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_emotion_selection_emotion_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/emotion-selection/emotion-selection.component */
    "./src/app/components/emotion-selection/emotion-selection.component.ts");
    /* harmony import */


    var _components_emotion_strengths_emotion_strengths_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/emotion-strengths/emotion-strengths.component */
    "./src/app/components/emotion-strengths/emotion-strengths.component.ts");
    /* harmony import */


    var _components_emotion_description_emotion_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/emotion-description/emotion-description.component */
    "./src/app/components/emotion-description/emotion-description.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _components_onboarding_start_start_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/onboarding/start/start.component */
    "./src/app/components/onboarding/start/start.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding1_onboarding1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/onboarding/onboarding1/onboarding1.component */
    "./src/app/components/onboarding/onboarding1/onboarding1.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding2_onboarding2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/onboarding/onboarding2/onboarding2.component */
    "./src/app/components/onboarding/onboarding2/onboarding2.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding3_onboarding3_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/onboarding/onboarding3/onboarding3.component */
    "./src/app/components/onboarding/onboarding3/onboarding3.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_emotion_strengths_description_description_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/emotion-strengths/description/description.component */
    "./src/app/components/emotion-strengths/description/description.component.ts");
    /* harmony import */


    var _components_onboarding_onboarding4_onboarding4_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/onboarding/onboarding4/onboarding4.component */
    "./src/app/components/onboarding/onboarding4/onboarding4.component.ts");
    /* harmony import */


    var _components_emotion_strengths_help_pop_up_help_pop_up_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/emotion-strengths/help-pop-up/help-pop-up.component */
    "./src/app/components/emotion-strengths/help-pop-up/help-pop-up.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _components_emotion_strengths_help_pop_up2_help_pop_up2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/emotion-strengths/help-pop-up2/help-pop-up2.component */
    "./src/app/components/emotion-strengths/help-pop-up2/help-pop-up2.component.ts");
    /* harmony import */


    var _components_emotion_selection_help_pop_up3_help_pop_up3_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/emotion-selection/help-pop-up3/help-pop-up3.component */
    "./src/app/components/emotion-selection/help-pop-up3/help-pop-up3.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../app/components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MAT_DATE_LOCALE"],
        useValue: 'en-GB'
      }, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_emotion_selection_emotion_selection_component__WEBPACK_IMPORTED_MODULE_5__["EmotionSelectionComponent"], _components_emotion_strengths_emotion_strengths_component__WEBPACK_IMPORTED_MODULE_6__["EmotionStrengthsComponent"], _components_emotion_description_emotion_description_component__WEBPACK_IMPORTED_MODULE_7__["EmotionDescriptionComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_onboarding_start_start_component__WEBPACK_IMPORTED_MODULE_17__["StartComponent"], _components_onboarding_onboarding1_onboarding1_component__WEBPACK_IMPORTED_MODULE_18__["Onboarding1Component"], _components_onboarding_onboarding2_onboarding2_component__WEBPACK_IMPORTED_MODULE_19__["Onboarding2Component"], _components_onboarding_onboarding3_onboarding3_component__WEBPACK_IMPORTED_MODULE_20__["Onboarding3Component"], _components_emotion_strengths_description_description_component__WEBPACK_IMPORTED_MODULE_27__["DescriptionComponent"], _components_onboarding_onboarding4_onboarding4_component__WEBPACK_IMPORTED_MODULE_28__["Onboarding4Component"], _components_emotion_strengths_help_pop_up_help_pop_up_component__WEBPACK_IMPORTED_MODULE_29__["HelpPopUpComponent"], _components_emotion_strengths_help_pop_up2_help_pop_up2_component__WEBPACK_IMPORTED_MODULE_31__["HelpPopUp2Component"], _components_emotion_selection_help_pop_up3_help_pop_up3_component__WEBPACK_IMPORTED_MODULE_32__["HelpPopUp3Component"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"], _app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_emotion_selection_emotion_selection_component__WEBPACK_IMPORTED_MODULE_5__["EmotionSelectionComponent"], _components_emotion_strengths_emotion_strengths_component__WEBPACK_IMPORTED_MODULE_6__["EmotionStrengthsComponent"], _components_emotion_description_emotion_description_component__WEBPACK_IMPORTED_MODULE_7__["EmotionDescriptionComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_onboarding_start_start_component__WEBPACK_IMPORTED_MODULE_17__["StartComponent"], _components_onboarding_onboarding1_onboarding1_component__WEBPACK_IMPORTED_MODULE_18__["Onboarding1Component"], _components_onboarding_onboarding2_onboarding2_component__WEBPACK_IMPORTED_MODULE_19__["Onboarding2Component"], _components_onboarding_onboarding3_onboarding3_component__WEBPACK_IMPORTED_MODULE_20__["Onboarding3Component"], _components_emotion_strengths_description_description_component__WEBPACK_IMPORTED_MODULE_27__["DescriptionComponent"], _components_onboarding_onboarding4_onboarding4_component__WEBPACK_IMPORTED_MODULE_28__["Onboarding4Component"], _components_emotion_strengths_help_pop_up_help_pop_up_component__WEBPACK_IMPORTED_MODULE_29__["HelpPopUpComponent"], _components_emotion_strengths_help_pop_up2_help_pop_up2_component__WEBPACK_IMPORTED_MODULE_31__["HelpPopUp2Component"], _components_emotion_selection_help_pop_up3_help_pop_up3_component__WEBPACK_IMPORTED_MODULE_32__["HelpPopUp3Component"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_35__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"], _app_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_37__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"]],
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MAT_DATE_LOCALE"],
            useValue: 'en-GB'
          }, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_39__["AuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "auto";
          doc.style.backgroundImage = "url('../../../assets/header/headerbackground.png')";
          doc.style.backgroundColor = "#E0F2F8";
        }
      }, {
        key: "goToEmotion",
        value: function goToEmotion() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 17,
      vars: 2,
      consts: [[3, "title", "hideMenu"], [1, "content"], [1, "emotion"], ["routerLink", "/emotions"], [1, "history"], [1, "goals"], [1, "actions"], [1, "gif"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hoe voel je je op dit moment? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Historie COMING SOON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Doelen COMING SOON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Acties COMING SOON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "GIF COMING SOON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Jouw Overzicht")("hideMenu", false);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 41vw);\r\n  grid-template-rows: repeat(4, 14vh);\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-top: 20%;\r\n  gap: 3% 3%;\r\n}\r\n\r\n.emotion[_ngcontent-%COMP%] {\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  width: 40vw;\r\n  background-color: white;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  align-items: center;\r\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  line-height: 1.0;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n.history[_ngcontent-%COMP%] {\r\n  grid-row-start: 1;\r\n  grid-row-end: 3;\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  background-color: rgb(187, 187, 187);\r\n  border-radius: 18px;\r\n  width: 40vw;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  line-height: 1.0;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n.goals[_ngcontent-%COMP%] {\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  width: 40vw;\r\n  background-color: rgb(187, 187, 187);\r\n  border-radius: 18px;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  line-height: 1.0;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n.actions[_ngcontent-%COMP%] {\r\n  grid-row-start: 3;\r\n  grid-row-end: 5;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  width: 40vw;\r\n\r\n  background-color: rgb(187, 187, 187);\r\n  border-radius: 18px;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  line-height: 1.0;\r\n  font-weight: 600;\r\n\r\n\r\n}\r\n\r\n.gif[_ngcontent-%COMP%] {\r\n  grid-row-start: 3;\r\n  grid-row-end: 5;\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  width: 40vw;\r\n\r\n  background-color: rgb(187, 187, 187);\r\n  border-radius: 18px;\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  line-height: 1.0;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 80%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n    \r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    margin: auto;\r\n    width: 80%;\r\n    text-decoration: none;\r\n    color:#385863 ;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXOztFQUVYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXOztFQUVYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQxdncpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDE0dmgpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBnYXA6IDMlIDMlO1xyXG59XHJcblxyXG4uZW1vdGlvbiB7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICB3aWR0aDogNDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxuXHJcbi5oaXN0b3J5IHtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBsaW5lLWhlaWdodDogMS4wO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG4uZ29hbHMge1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gIGdyaWQtcm93LWVuZDogMztcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBncmlkLXJvdy1zdGFydDogMztcclxuICBncmlkLXJvdy1lbmQ6IDU7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuXHJcbn1cclxuXHJcbi5naWYge1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gIGdyaWQtcm93LWVuZDogNTtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgd2lkdGg6IDQwdnc7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBsaW5lLWhlaWdodDogMS4wO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG5cclxuc3BhbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5he1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiMzODU4NjMgO1xyXG4gICAgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-description/emotion-description.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/emotion-description/emotion-description.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmotionDescriptionComponent */

  /***/
  function srcAppComponentsEmotionDescriptionEmotionDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmotionDescriptionComponent", function () {
      return EmotionDescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmotionDescriptionComponent = /*#__PURE__*/function () {
      function EmotionDescriptionComponent() {
        _classCallCheck(this, EmotionDescriptionComponent);
      }

      _createClass(EmotionDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmotionDescriptionComponent;
    }();

    EmotionDescriptionComponent.ɵfac = function EmotionDescriptionComponent_Factory(t) {
      return new (t || EmotionDescriptionComponent)();
    };

    EmotionDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmotionDescriptionComponent,
      selectors: [["app-emotion-description"]],
      decls: 2,
      vars: 0,
      template: function EmotionDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "emotion-description works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1vdGlvbi1kZXNjcmlwdGlvbi9lbW90aW9uLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmotionDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emotion-description',
          templateUrl: './emotion-description.component.html',
          styleUrls: ['./emotion-description.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-selection/emotion-selection.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/emotion-selection/emotion-selection.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EmotionSelectionComponent */

  /***/
  function srcAppComponentsEmotionSelectionEmotionSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmotionSelectionComponent", function () {
      return EmotionSelectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/emotionEnum */
    "./src/app/models/emotionEnum.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./keyframes */
    "./src/app/components/emotion-selection/keyframes.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _help_pop_up3_help_pop_up3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./help-pop-up3/help-pop-up3.component */
    "./src/app/components/emotion-selection/help-pop-up3/help-pop-up3.component.ts");
    /* harmony import */


    var src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/interfaces/chipStates */
    "./src/app/interfaces/chipStates.ts");
    /* harmony import */


    var src_app_services_gif_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/gif-service.service */
    "./src/app/services/gif-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_anders_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/anders.service */
    "./src/app/services/anders.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/services/token-storage-service.service */
    "./src/app/services/token-storage-service.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function EmotionSelectionComponent_div_14_mat_chip_1_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_div_14_mat_chip_1_mat_icon_2_Template_mat_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r9.removeChosenEmotion($event.target);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var emotion_r6 = ctx_r11.$implicit;
        var i_r7 = ctx_r11.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", emotion_r6.emotionName, "-", i_r7, "");
      }
    }

    function EmotionSelectionComponent_div_14_mat_chip_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_div_14_mat_chip_1_Template_mat_chip_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.selectChip($event.target);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmotionSelectionComponent_div_14_mat_chip_1_mat_icon_2_Template, 2, 2, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emotion_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("gridItem-", i_r7, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", emotion_r6.emotionName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", emotion_r6.emotionName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", emotion_r6.chipState == "SELECTED");
      }
    }

    function EmotionSelectionComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmotionSelectionComponent_div_14_mat_chip_1_Template, 3, 6, "mat-chip", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.chipData);
      }
    }

    function EmotionSelectionComponent_div_15_img_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_div_15_img_3_Template_img_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17.selectGif($event.target);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var src_r15 = ctx.$implicit;
        var i_r16 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "gif-", i_r16, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", src_r15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function EmotionSelectionComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmotionSelectionComponent_div_15_img_3_Template, 1, 2, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.gifSources);
      }
    }

    function EmotionSelectionComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_div_35_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.sendEmotions();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Volgende");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EmotionSelectionComponent_ng_template_36_mat_chip_6_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_ng_template_36_mat_chip_6_mat_icon_2_Template_mat_icon_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r25.removeChosenEmotion($event.target);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var a_r22 = ctx_r27.$implicit;
        var i_r23 = ctx_r27.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", a_r22.emotionName, "-", i_r23, "");
      }
    }

    function EmotionSelectionComponent_ng_template_36_mat_chip_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_ng_template_36_mat_chip_6_Template_mat_chip_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28.selectChip($event.target);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmotionSelectionComponent_ng_template_36_mat_chip_6_mat_icon_2_Template, 2, 2, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", a_r22.emotionName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", a_r22.emotionName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", a_r22.chipState == "SELECTED");
      }
    }

    function EmotionSelectionComponent_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmotionSelectionComponent_ng_template_36_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r30.addToAnders($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_ng_template_36_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r32.deleteOtherEmotion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "emotie wissen");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmotionSelectionComponent_ng_template_36_mat_chip_6_Template, 3, 3, "mat-chip", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.deleteOtherDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.chipData);
      }
    }

    var POSSIBLE_CATEGROYS = ["VREUGDE", "VERDRIET", "ANGST", "BOOS", "VERRASSING", "AFSCHUW", "ANDERS"];

    var EmotionSelectionComponent = /*#__PURE__*/function () {
      function EmotionSelectionComponent(gifService, ref, router, andersService, help, snackbar, tokenStorage) {
        _classCallCheck(this, EmotionSelectionComponent);

        this.gifService = gifService;
        this.ref = ref;
        this.router = router;
        this.andersService = andersService;
        this.help = help;
        this.snackbar = snackbar;
        this.tokenStorage = tokenStorage;
        this.chipData = [];
        this.chosenEmotions = [];
        this.shouldShowGifs = false;
        this.gifSources = [];
        this.other = false;
        this.selectionComplete = false;
        this.shouldChange = false;
        this.andersInput = '';
        this.newAnders = [];
        this.deleteOtherDisabled = true;

        if (this.chosenEmotions.length != 0) {
          var navigation = this.router.getCurrentNavigation();
          var state = navigation.extras.state;
          this.chosenEmotions = state.chosenEmotions;
          console.log(this.chosenEmotions);
        }
      } //#endregion
      //#region  init methods


      _createClass(EmotionSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.tokenStorage.getUser();
          this.currentCategory = {
            categoryName: POSSIBLE_CATEGROYS[0],
            possibleCategroyIndex: 0
          };
          this.getChipData();
          this.setbg();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (localStorage.getItem("checkedSelectionDialog") == "false" || localStorage.getItem("checkedSelectionDialog") == null) {
            this.showHelp();
          }
        }
      }, {
        key: "showHelp",
        value: function showHelp() {
          this.help.open(_help_pop_up3_help_pop_up3_component__WEBPACK_IMPORTED_MODULE_6__["HelpPopUp3Component"], {
            maxWidth: '85vw',
            height: '390px',
            width: '600px',
            disableClose: true,
            backdropClass: 'backdropBackground',
            panelClass: 'help-panel'
          });
        } // checks the current categoryName and filss the chipData with corresponding emotions

      }, {
        key: "getChipData",
        value: function getChipData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.chipData = [];
                    _context.t0 = this.currentCategory.categoryName;
                    _context.next = _context.t0 === "VREUGDE" ? 4 : _context.t0 === "VERDRIET" ? 6 : _context.t0 === "ANGST" ? 8 : _context.t0 === "BOOS" ? 10 : _context.t0 === "VERRASSING" ? 12 : _context.t0 === "AFSCHUW" ? 14 : _context.t0 === "ANDERS" ? 16 : 19;
                    break;

                  case 4:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["vreugde"]);
                    return _context.abrupt("break", 19);

                  case 6:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["verdriet"]);
                    return _context.abrupt("break", 19);

                  case 8:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["angst"]);
                    return _context.abrupt("break", 19);

                  case 10:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["boos"]);
                    return _context.abrupt("break", 19);

                  case 12:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["verrassing"]);
                    return _context.abrupt("break", 19);

                  case 14:
                    this.chipData = this.convertEnumToArray(src_app_models_emotionEnum__WEBPACK_IMPORTED_MODULE_2__["afschuw"]);
                    return _context.abrupt("break", 19);

                  case 16:
                    _context.next = 18;
                    return this.fillAnders();

                  case 18:
                    this.chipData = _context.sent;

                  case 19:
                    this.ref.detectChanges();
                    this.initChips();
                    console.log(this.chipData);

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fillAnders",
        value: function fillAnders() {
          var emotionArray = [];
          var userId = this.tokenStorage.getUser().id;
          return this.andersService.getAndersChipData().toPromise().then(function (data) {
            data.forEach(function (element) {
              if (element.userId == userId) {
                var temp = {
                  emotionName: element.emotionName,
                  keyword: element.emotionName,
                  chipState: src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE
                };
                emotionArray.push(temp);
              }
            });
          }).then(function (data) {
            return emotionArray;
          });
        } // returns  an array filled with the avaiable emotions as strings

      }, {
        key: "convertEnumToArray",
        value: function convertEnumToArray(enumObject) {
          var emotionArray = [];

          for (var eObj in enumObject) {
            if (eObj.length > 1) {
              var tempObject = {
                emotionName: eObj.split("-")[0],
                keyword: eObj.split("-")[1],
                chipState: src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE
              };
              emotionArray.push(tempObject);
            }
          }

          return emotionArray;
        }
      }, {
        key: "setbg",
        value: function setbg() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "auto";
          doc.style.backgroundImage = "url('../../../assets/header/headerbackground.png')";
          doc.style.backgroundColor = "rgb(103, 188, 217, .2)";
        }
      }, {
        key: "initGifs",
        value: function initGifs() {
          var _this = this;

          this.chosenEmotions.forEach(function (emotion) {
            if (_this.currentChip.emotionName == emotion.emotionName) {
              var gifImageId = emotion.index;
              var test = document.getElementById("gif-".concat(emotion.index));

              _this.greyOutNotSelectedGifs(test);
            }
          });
        } // gets called after a category change
        // hide gifs, set the states of the chips depending on chosenEmotions

      }, {
        key: "initChips",
        value: function initChips() {
          var _this2 = this;

          this.hideGifs();
          this.chipData.forEach(function (data) {
            _this2.chosenEmotions.forEach(function (emotion) {
              if (emotion.emotionName == data.emotionName) {
                data.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].SELECTED;
                var chip = document.getElementById(data.emotionName);
                chip.style.border = "0px solid #ffffff";
                chip.style.backgroundColor = "#2B4D59";
                chip.style.color = "#ffffff";
              }
            });
          });
        } //#endregion init
        //#region animation

      }, {
        key: "startAnimation",
        value: function startAnimation(state) {
          if (!this.animationState) {
            this.animationState = state;
          }
        }
      }, {
        key: "resetAnimationState",
        value: function resetAnimationState() {
          if (this.animationState == "slideRight" && !this.shouldChange) {
            this.onLeft();
          }

          if (this.animationState == "slideLeft" && !this.shouldChange) {
            this.onRight();
          }

          this.animationState = '';
          this.shouldChange = false;
        } //#endregion
        //#region  remove

      }, {
        key: "removeChosenEmotion",
        value: function removeChosenEmotion(event) {
          var _this3 = this;

          // get chip
          var chip = document.getElementById(event.id.substring(0, event.id.length - 2));
          console.log(this.currentChip); // if currentChip is chip to remove

          if (this.currentChip.emotionName == chip.id) {
            this.chosenEmotions.forEach(function (cEmotion, index) {
              if (cEmotion.emotionName == chip.id) {
                _this3.chosenEmotions.splice(index, 1);

                _this3.chipData.forEach(function (cData) {
                  if (cData.emotionName == chip.id) {
                    cData.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].PRESELECTED;

                    _this3.changeColorOfChip(chip, cData);

                    _this3.makeAllGifsVisible();
                  }
                });
              }
            });
          } else {
            this.chosenEmotions.forEach(function (cEmotion, index) {
              if (cEmotion.emotionName == chip.id) {
                _this3.chosenEmotions.splice(index, 1);

                _this3.chipData.forEach(function (cData) {
                  if (cData.emotionName == chip.id) {
                    cData.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE;

                    _this3.changeColorOfChip(chip, cData);
                  }
                });
              }
            });
          }

          if (this.currentCategory.categoryName == "ANDERS" && this.currentChip.chipState.toString() != "SELECTED") {
            this.deleteOtherDisabled = false;
          } else {
            this.deleteOtherDisabled = true;
          }

          var formatText = chip.id.toLowerCase();
          this.showSnackBar(formatText + " verwijderd");
        } //#endregion remove
        //#region Chip SELECTION 

      }, {
        key: "changeColorOfChip",
        value: function changeColorOfChip(chip, newChipDataObject) {
          switch (newChipDataObject.chipState) {
            case src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE:
              chip.style.backgroundColor = "#FFFFFF";
              chip.style.border = "hidden";
              chip.style.color = "#000000";
              break;

            case src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].PRESELECTED:
              chip.style.backgroundColor = "#FFFFFF";
              chip.style.border = "2px solid #67BCD9";
              chip.style.color = "#000000";
              break;

            case src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].SELECTED:
              chip.style.backgroundColor = "#2B4D59";
              chip.style.border = "hidden";
              chip.style.color = "#FFFFFF";
              break;
          }
        }
      }, {
        key: "selectChip",
        value: function selectChip(chip) {
          var _this4 = this;

          this.chipData.forEach(function (cData) {
            // if there is an old chip; find old chip and make state NONE if state is not SELECTED
            if (_this4.currentChip != null) {
              if (cData.emotionName == _this4.currentChip.emotionName) {
                if (_this4.currentChip.chipState != src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].SELECTED) {
                  cData.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE;

                  _this4.changeColorOfChip(document.getElementById(cData.emotionName), cData);
                }
              }
            }
          });
          this.chipData.forEach(function (cData) {
            // find new chip and make state PRESELECTED if state is NONE; make this the currentChip
            if (cData.emotionName == chip.id) {
              _this4.currentChip = cData;

              if (cData.chipState == src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE) {
                cData.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].PRESELECTED;

                _this4.changeColorOfChip(document.getElementById(cData.emotionName), cData);
              }

              _this4.showGifs(cData.keyword);
            }
          });

          if (this.currentCategory.categoryName == "ANDERS" && this.currentChip.chipState.toString() != "SELECTED") {
            this.deleteOtherDisabled = false;
          } else {
            this.deleteOtherDisabled = true;
          }
        } //#endregion Chip Selection
        //#region  Gif Selection

      }, {
        key: "showGifs",
        value: function showGifs(emotionName) {
          this.shouldShowGifs = true;
          this.getGifs(emotionName);
        }
      }, {
        key: "getGifs",
        value: function getGifs(emotionName) {
          var _this5 = this;

          this.gifSources = [];
          this.gifService.getGifs(emotionName).toPromise().then(function (data) {
            var gifServiceData = data.results;
            gifServiceData.forEach(function (gifData) {
              _this5.gifSources.push(gifData.media[0].nanogif.url);
            });
          }).then(function () {
            _this5.ref.detectChanges();

            _this5.initGifs();
          });
        }
      }, {
        key: "greyOutNotSelectedGifs",
        value: function greyOutNotSelectedGifs(gifImageElement) {
          var gifImageId = parseInt(gifImageElement.id.charAt(4));

          for (var i = 0; i < this.gifSources.length; i++) {
            if (gifImageId != i) {
              var gifToGrayOut = document.getElementById("gif-".concat(i));
              console.log(gifToGrayOut);
              gifToGrayOut.style.filter = "opacity(20%)";
            } else {
              gifImageElement.style.filter = "opacity(100%)";
            }
          }
        }
      }, {
        key: "makeAllGifsVisible",
        value: function makeAllGifsVisible() {
          for (var i = 0; i < this.gifSources.length; i++) {
            var gifToMakeVisible = document.getElementById("gif-".concat(i));
            gifToMakeVisible.style.filter = "opacity(100%)";
          }
        }
      }, {
        key: "selectGif",
        value: function selectGif(gifElement) {
          var _this6 = this;

          // if emotion already exist in chosen emotion
          var emotionIsNew = false;
          this.chosenEmotions.forEach(function (emotion) {
            if (emotion.emotionName == _this6.currentChip.emotionName) {
              // update emotion
              emotion.gif = gifElement.src;
              emotion.index = parseInt(gifElement.id.charAt(4));
              emotionIsNew = true;
            }
          }); // if emotion is NEW; add to chosen emotions

          if (!emotionIsNew) {
            this.chosenEmotions.push({
              emotionName: this.currentChip.emotionName,
              emotionCategory: this.currentCategory.categoryName,
              gif: gifElement.src,
              index: parseInt(gifElement.id.charAt(4)),
              description: "",
              strength: 100
            });
          }

          this.currentChip.chipState = src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].SELECTED;
          this.changeColorOfChip(document.getElementById(this.currentChip.emotionName), {
            emotionName: this.currentChip.emotionName,
            chipState: this.currentChip.chipState,
            keyword: this.currentChip.keyword
          });
          this.greyOutNotSelectedGifs(gifElement);

          if (this.currentCategory.categoryName == "ANDERS") {
            this.deleteOtherDisabled = true;
          }

          var formatText = this.currentChip.emotionName.toLowerCase();
          this.showSnackBar(formatText + " toegevoegd");
        }
      }, {
        key: "showSnackBar",
        value: function showSnackBar(message) {
          this.snackbar.open(message, "", {
            duration: 1000,
            panelClass: "snackbar"
          });
        }
      }, {
        key: "hideGifs",
        value: function hideGifs() {
          this.shouldShowGifs = false;
        } //#endregion Gif Selection
        //#region  changeCategory

      }, {
        key: "goToIndex",
        value: function goToIndex(index) {
          var indexNew = index;

          if (indexNew > POSSIBLE_CATEGROYS.length - 1) {
            indexNew = 0;
          }

          if (indexNew < 0) {
            indexNew = POSSIBLE_CATEGROYS.length - 1;
          }

          var currentIndex = this.currentCategory.possibleCategroyIndex;

          if (indexNew > currentIndex) {
            this.shouldChange = true;
            this.startAnimation("slideLeft");
          } else if (indexNew < currentIndex) {
            this.shouldChange = true;
            this.startAnimation("slideRight");
          }

          this.changeSwipeControlColorToWhite();
          this.currentCategory.possibleCategroyIndex = indexNew;
          this.currentCategory.categoryName = POSSIBLE_CATEGROYS[this.currentCategory.possibleCategroyIndex];
          this.changeSwipeControlColorToBlue();
          this.getChipData();
        }
      }, {
        key: "changeSwipeControlColorToBlue",
        value: function changeSwipeControlColorToBlue() {
          var parentDiv = document.getElementById("swipeControls");
          var children = parentDiv.children;
          var iconToChange = children[this.currentCategory.possibleCategroyIndex];
          iconToChange.style.color = "#68BCD8";
          iconToChange.style.backgroundColor = "#68BCD8";
        }
      }, {
        key: "changeSwipeControlColorToWhite",
        value: function changeSwipeControlColorToWhite() {
          var parentDiv = document.getElementById("swipeControls");
          var children = parentDiv.children;
          var iconToChange = children[this.currentCategory.possibleCategroyIndex];
          iconToChange.style.color = "#FFFFFF";
          iconToChange.style.backgroundColor = "#FFFFFF";
        } // makes the currentCategory.possibleCategroyIndex the next index of POSSIBLE_CATEGORYS; 
        // if possibleCategroyIndex is more then length of POSSIBLE_CATEGORYS then it sets the current index to 0 
        // sets the categoryName of currentCategory to the POSSIBLE_CATEGORYS index using the possibleCategoryIndex
        // gets the new set of chips

      }, {
        key: "onRight",
        value: function onRight() {
          this.changeSwipeControlColorToWhite();

          if (this.currentCategory.possibleCategroyIndex < POSSIBLE_CATEGROYS.length - 1) {
            this.currentCategory.possibleCategroyIndex += 1;
            this.currentEmotionIndex += 1;
          } else {
            this.currentCategory.possibleCategroyIndex = 0;
            this.currentEmotionIndex = 0;
          }

          this.changeSwipeControlColorToBlue();
          this.currentCategory.categoryName = POSSIBLE_CATEGROYS[this.currentCategory.possibleCategroyIndex];
          this.getChipData();
        } // makes the currentCategory.possibleCategroyIndex the previeous index of POSSIBLE_CATEGORYS; 
        // if possibleCategroyIndex is smaller than 1, then it sets the current index to POSSIBLE_CATEGROYS.length -1
        // sets the categoryName of currentCategory to the POSSIBLE_CATEGORYS index using the possibleCategoryIndex
        // gets the new set of chips

      }, {
        key: "onLeft",
        value: function onLeft() {
          this.changeSwipeControlColorToWhite();

          if (this.currentCategory.possibleCategroyIndex > 0) {
            this.currentCategory.possibleCategroyIndex -= 1;
          } else {
            this.currentCategory.possibleCategroyIndex = POSSIBLE_CATEGROYS.length - 1;
            this.currentEmotionIndex = POSSIBLE_CATEGROYS.length - 1;
          }

          this.changeSwipeControlColorToBlue();
          this.currentCategory.categoryName = POSSIBLE_CATEGROYS[this.currentCategory.possibleCategroyIndex];
          this.getChipData();
        } //#endregion changeCategory
        //#region  ANDERS

      }, {
        key: "addToAnders",
        value: function addToAnders(emotionName) {
          var _this7 = this;

          this.andersService.addAndersChipData([{
            emotionName: emotionName,
            userId: this.tokenStorage.getUser().id
          }]).toPromise().then(function (data) {
            if (emotionName != '') {
              var temp = {
                emotionName: emotionName,
                chipState: src_app_interfaces_chipStates__WEBPACK_IMPORTED_MODULE_7__["chipState"].NONE,
                keyword: emotionName
              }; // this.newAnders.push(temp);

              _this7.chipData.push(temp);
            }

            var input = document.getElementById("andersInput");
            input.value = '';
          });
        }
      }, {
        key: "saveAndersInDB",
        value: function saveAndersInDB() {
          var _this8 = this;

          var tokenizedAnders = {
            emotionName: this.newAnders
          };
          var test = this.andersService.addAndersChipData(this.newAnders).subscribe(function (data) {
            _this8.router.navigate(['emotions/strengths'], {
              state: {
                chosenEmotions: _this8.chosenEmotions
              }
            });
          });
        } //#endregion ANDERS

      }, {
        key: "sendEmotions",
        value: function sendEmotions() {
          this.saveAndersInDB();
        }
      }, {
        key: "deleteOtherEmotion",
        value: function deleteOtherEmotion() {
          var _this9 = this;

          this.andersService.deleteAndersChip(this.currentChip.emotionName).toPromise().then(function (data) {
            _this9.getChipData();
          });
        }
      }]);

      return EmotionSelectionComponent;
    }();

    EmotionSelectionComponent.ɵfac = function EmotionSelectionComponent_Factory(t) {
      return new (t || EmotionSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_gif_service_service__WEBPACK_IMPORTED_MODULE_8__["GifServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_anders_service__WEBPACK_IMPORTED_MODULE_10__["AndersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_13__["TokenStorageService"]));
    };

    EmotionSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmotionSelectionComponent,
      selectors: [["app-emotion-selection"]],
      decls: 38,
      vars: 8,
      consts: [[3, "title"], [1, "help"], [1, "carrousel"], ["mat-icon-button", "", "id", "leftBtn", 3, "click"], ["id", "categoryArrowLeft"], [1, "selection", 3, "swipeRight", "swipeLeft"], [1, "categorySelect"], [1, "categoryWord"], [1, "chipDiv"], ["multiple", "", 3, "selectable"], ["class", "gridContainer", "aria-label", "emotion selection", 4, "ngIf", "ngIfElse"], ["class", "gifs", 4, "ngIf"], ["mat-icon-button", "", "id", "rightBtn", 3, "click"], ["id", "categoryArrowRight"], ["id", "swipeControls", 1, "swipeControls"], ["id", "swipeCircle", 2, "color", "#68BCD8", "background-color", "#68BCD8", 3, "click"], ["id", "swipeCircle", 2, "color", "#FFFFFF", "background-color", "#FFFFFF", 3, "click"], [1, "bottom-bar"], ["class", "next", 4, "ngIf"], ["anders", ""], ["aria-label", "emotion selection", 1, "gridContainer"], [3, "class", "id", "click", 4, "ngFor", "ngForOf"], [3, "id", "click"], ["matChipRemove", "", "style", "color: white; opacity: 100%;", 3, "id", "click", 4, "ngIf"], ["matChipRemove", "", 2, "color", "white", "opacity", "100%", 3, "id", "click"], [1, "gifs"], ["itemSize", "77", 1, "scrollContainer"], [1, "gifGrid"], ["alt", "Card image cap", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], ["alt", "Card image cap", 3, "id", "src", "click"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"], [1, "flexContainer"], [1, "addEmotion"], ["id", "andersInput", "name", "andersInput", "placeholder", "Typ hier je emotie in", "type", "text", 1, "andersInput", 3, "change"], ["mat-raised-button", "", "id", "deleteBtn", 3, "disabled", "click"], [1, "FlexItems"], [3, "id", "click", 4, "ngFor", "ngForOf"]],
      template: function EmotionSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HOE VOEL JE JE VANDAAG?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_button_click_5_listener() {
            return ctx.goToIndex(ctx.currentCategory.possibleCategroyIndex - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@emotionTrigger.done", function EmotionSelectionComponent_Template_div_animation_emotionTrigger_done_8_listener() {
            return ctx.resetAnimationState();
          })("swipeRight", function EmotionSelectionComponent_Template_div_swipeRight_8_listener() {
            return ctx.startAnimation("slideRight");
          })("swipeLeft", function EmotionSelectionComponent_Template_div_swipeLeft_8_listener() {
            return ctx.startAnimation("slideLeft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-chip-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EmotionSelectionComponent_div_14_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmotionSelectionComponent_div_15_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_button_click_16_listener() {
            return ctx.goToIndex(ctx.currentCategory.possibleCategroyIndex + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_20_listener() {
            return ctx.goToIndex(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_22_listener() {
            return ctx.goToIndex(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_24_listener() {
            return ctx.goToIndex(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_26_listener() {
            return ctx.goToIndex(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_28_listener() {
            return ctx.goToIndex(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_30_listener() {
            return ctx.goToIndex(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmotionSelectionComponent_Template_mat_icon_click_32_listener() {
            return ctx.goToIndex(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, EmotionSelectionComponent_div_35_Template, 5, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, EmotionSelectionComponent_ng_template_36_Template, 7, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Hoi");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@emotionTrigger", ctx.animationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentCategory.categoryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentCategory.categoryName != "ANDERS")("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShowGifs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chosenEmotions.length != 0);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipRemove"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkFixedSizeVirtualScroll"]],
      styles: [".andersInput[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 400;\r\n  color: black;\r\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);\r\n  border-radius: 22px;\r\n  border: none;\r\n  width: 50%;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.andersInput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus {\r\n  outline: none; \r\n}\r\n\r\n#deleteBtn[_ngcontent-%COMP%] {\r\n  background-color: #ff4f5b;\r\n  color: white;\r\n  border-radius: 20px;\r\n  height: 22px;\r\n  margin-top: 5px;\r\n  line-height: 0%;\r\n  margin-left: 5px;\r\n  height: 110%;\r\n\r\n}\r\n\r\n#deleteBtn[_ngcontent-%COMP%]:disabled {\r\n  background-color: #f5d4d7 !important;\r\n}\r\n\r\n.carrousel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#categoryArrowLeft[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-left: -4px;\r\n}\r\n\r\n#categoryArrowRight[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-left: -2px;\r\n}\r\n\r\n#leftBtn[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  background-color: #ffffff;\r\n  width: 5%;\r\n  height: 200px;\r\n  border-radius: 0px 18px 18px 0px; \r\n  padding-left: 0;\r\n}\r\n\r\n#rightBtn[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  background-color: #ffffff;\r\n  width: 5%;\r\n  height: 200px;\r\n  border-radius: 18px 0px 0px 18px; \r\n}\r\n\r\n#swipeCircle[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);\r\n  border-radius: 100%;\r\n  margin: 4px;\r\n  width: 10px;\r\n  height: 10px;\r\n  font-size: 10px;\r\n}\r\n\r\n.help[_ngcontent-%COMP%] {\r\n  margin-top: 8%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 50px auto 20px auto;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.selection[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 85%;\r\n  margin: auto;\r\n  border-radius: 18px;\r\n  box-shadow: 0px 5px 60px 0px rgba(0, 0, 0, 0.2);\r\n  padding-top: 3%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.categorySelect[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.categoryWord[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  margin-bottom: 5%;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.chipDiv[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7; \r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 18px;\r\n  width: 95%;\r\n  margin-bottom: -2%;\r\n  \r\n  padding-bottom: 2%;\r\n}\r\n\r\n.other[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  width: 86%;\r\n  border-radius: 8px;\r\n  height: 125px;\r\n  position: absolute;\r\n  z-index: 200;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%] {\r\n  margin-left: 80%;\r\n  margin-top: 10%;\r\n}\r\n\r\n.gifs[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n\r\n\r\nheight: 100%  ;\r\n}\r\n\r\n.swipeControls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.bottom-bar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  \r\n  margin: 19% 7% auto 7%;\r\n}\r\n\r\n.prev[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n}\r\n\r\n.prevButton[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-column-start: 2;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 13px;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n}\r\n\r\n.nextButton[_ngcontent-%COMP%] {\r\n  background-color: #67bcd9;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n}\r\n\r\n  .nextButton .mat-button-wrapper{\r\n  padding: 13px 0 0 4px !important;\r\n  \r\n}\r\n\r\n  .mat-chip-list-wrapper {\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n  .mat-chip-list{\r\n  width: -webkit-fill-available;\r\n}\r\n\r\n\r\n\r\n.mat-chip[_ngcontent-%COMP%] {\r\n  \r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16);\r\n  border-radius: 22px;\r\n  font-size: 13px;\r\n  \r\n  \r\n  \r\n  \r\n\r\n  \r\n}\r\n\r\n.emotionChipName[_ngcontent-%COMP%] {\r\n  \r\n  font-size: 14px;\r\n  text-align: center;\r\n  margin: auto;\r\n  font-weight: 400;\r\n  max-width: 95%;\r\n  min-width: 95%;\r\n}\r\n\r\n.mat-standard-chip[_ngcontent-%COMP%]:hover::after {\r\n  background-color: #2b4d59 !important;\r\n  opacity: 0.2;\r\n}\r\n\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\r\n  background-color: #2b4d59;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.flexContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  height: 22vh;\r\n  margin-top: 5px;\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  width: 100%;\r\n  height: 19vh;\r\n  padding-bottom: 4%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.flexItems[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.flex-left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n}\r\n\r\n.flex-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.addEmotion[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.gridContainer[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding-top: 1%;\r\n  width: 100%;\r\n  padding: 2%;\r\n  padding-bottom: 5%;\r\n  display: grid;\r\n  grid-auto-rows:  40px;\r\n  grid-template-columns: repeat( 2, minmax(120px,1fr) );\r\n  max-height: 25vh;\r\n\r\n  \r\n  justify-content: space-evenly;\r\n  align-content: space-evenly;\r\n  gap: 1% 0%;\r\n}\r\n\r\n.gridItem-0[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: auto;\r\n}\r\n\r\n.gridItem-1[_ngcontent-%COMP%] {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: auto;\r\n\r\n}\r\n\r\n.gridItem-2[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: auto;\r\n\r\n}\r\n\r\n.gridItem-3[_ngcontent-%COMP%] {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: auto;\r\n\r\n}\r\n\r\n.gridItem-4[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 3;\r\n  grid-row-end: 3;\r\n  display: flex;\r\n  width: auto;\r\n  justify-content: center;\r\n}\r\n\r\n.gridItem-5[_ngcontent-%COMP%] {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 3;\r\n  grid-row-end: 3;\r\n  display: flex;\r\n  width: auto;\r\n\r\n  justify-content: center;\r\n}\r\n\r\n.gridItem-6[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 4;\r\n  grid-row-end: 4;\r\n  display: flex;\r\n  width: auto;\r\n\r\n  justify-content: center;\r\n}\r\n\r\n.gridItem-7[_ngcontent-%COMP%] {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 4;\r\n  grid-row-end: 4;\r\n  display: flex;\r\n  width: auto;\r\n\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n.scrollContainer[_ngcontent-%COMP%] {\r\n  height: 20vh;\r\n  width: 100vw;\r\n  margin-top: 4px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  -webkit-appearance: none;\r\n  width: 7px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 40px;\r\n  width: 5px;\r\n  height: 1px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.gifGrid[_ngcontent-%COMP%] {\r\n  height: 40vh;\r\n  margin: auto;\r\n  margin-left: 2%;\r\n  display: grid;\r\n  grid-template-rows: repeat( 4, minmax(20%,1fr) );\r\n  grid-template-columns: repeat( 3, minmax(41%,1fr) );\r\n\r\n  \r\n  gap: 1% 0%;\r\n}\r\n\r\n#gif-0[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: -1px;\r\n}\r\n\r\n#gif-1[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n\r\n  border: hidden;\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 2px;\r\n\r\n}\r\n\r\n#gif-2[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: -1px;\r\n\r\n}\r\n\r\n#gif-3[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 2px;\r\n\r\n}\r\n\r\n#gif-4[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 3;\r\n  grid-row-end: 3;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: -1px;\r\n\r\n}\r\n\r\n#gif-5[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 3;\r\n  grid-row-end: 3;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 2px;\r\n\r\n}\r\n\r\n#gif-6[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border: hidden;\r\n\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n  grid-row-start: 4;\r\n  grid-row-end: 4;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: -1px;\r\n\r\n}\r\n\r\n#gif-7[_ngcontent-%COMP%] {\r\n  width: 37vw;\r\n  height: 9vh;\r\n  border-radius: 10px;\r\n  border-style: solid;\r\n  border: hidden;\r\n\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 4;\r\n  grid-row-end: 4;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 2px;\r\n\r\n}\r\n\r\n  .snackbar{\r\n  background-color: white;  \r\n}\r\n\r\n  .mat-simple-snackbar{\r\n  text-transform: capitalize;\r\n  font-family: \"poppins\";\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #403D46;\r\n}\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n  width: auto !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto auto 26% auto !important;\r\n  border-radius: 18px !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXNlbGVjdGlvbi9lbW90aW9uLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osK0NBQStDO0VBQy9DLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYSxFQUFFLGlCQUFpQjtBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQyxFQUFFLG1EQUFtRDtFQUNyRixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQyxFQUFFLG1EQUFtRDtBQUN2Rjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsWUFBWTtFQUN2QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQsd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQ0FBZ0M7O0FBRWxDOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUdBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBLFVBQVU7O0FBQ1Y7RUFDRSxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFEQUFxRDtFQUNyRCxnQkFBZ0I7O0VBRWhCLDRDQUE0QztFQUM1Qyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXOztBQUViOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVzs7RUFFWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7O0VBRVgsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXOztFQUVYLHVCQUF1QjtBQUN6Qjs7QUFFQSxRQUFROztBQUVSO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsbURBQW1EOztFQUVuRCw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1COztFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7O0VBRWQsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLDhCQUE4Qjs7QUFFaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vtb3Rpb24tc2VsZWN0aW9uL2Vtb3Rpb24tc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5kZXJzSW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5hbmRlcnNJbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lOyAvKiBvcmFuZ2VzISB5ZXkgKi9cclxufVxyXG5cclxuI2RlbGV0ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGY1YjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwJTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGhlaWdodDogMTEwJTtcclxuXHJcbn1cclxuXHJcbiNkZWxldGVCdG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWQ0ZDcgIWltcG9ydGFudDtcclxufVxyXG4uY2Fycm91c2VsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNjYXRlZ29yeUFycm93TGVmdCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG59XHJcblxyXG4jY2F0ZWdvcnlBcnJvd1JpZ2h0IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbn1cclxuI2xlZnRCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDUlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE4cHggMThweCAwcHg7IC8qIHRvcCBsZWZ0LCB0b3AgcmlnaHQsIGJvdHRvbSByaWdodCwgYm90dG9tIGxlZnQgKi9cclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNyaWdodEJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogNSU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4IDBweCAwcHggMThweDsgLyogdG9wIGxlZnQsIHRvcCByaWdodCwgYm90dG9tIHJpZ2h0LCBib3R0b20gbGVmdCAqL1xyXG59XHJcblxyXG4jc3dpcGVDaXJjbGUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWxwIHtcclxuICBtYXJnaW4tdG9wOiA4JTtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvIDIwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5cclxuLnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDYwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlTZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeVdvcmQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jaGlwRGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyAvKiAgZjdmN2Y3ICovXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTIlO1xyXG4gIC8qIGhlaWdodDogMjF2aDsgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5vdGhlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogODYlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uZ2lmcyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuLyogcGFkZGluZy1ib3R0b206IDUlOyAqL1xyXG5oZWlnaHQ6IDEwMCUgIDtcclxufVxyXG5cclxuLnN3aXBlQ29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tLWJhciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLyogdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0ICovXHJcbiAgbWFyZ2luOiAxOSUgNyUgYXV0byA3JTtcclxufVxyXG5cclxuLnByZXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxufVxyXG5cclxuLnByZXZCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5uZXh0e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5uZXh0IHB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubmV4dEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3YmNkOTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxufVxyXG46Om5nLWRlZXAgLm5leHRCdXR0b24gLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAxM3B4IDAgMCA0cHggIWltcG9ydGFudDtcclxuICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoaXAtbGlzdHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4vKiBjaGlwcyAqL1xyXG4ubWF0LWNoaXAge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLyogbWF4LXdpZHRoOiA5NSU7ICovXHJcbiAgLyogbWluLXdpZHRoOiA5NSU7ICAqL1xyXG4gIC8qIG1pbi13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgKi9cclxuICAvKiBoZWlnaHQ6IDMwcHg7ICovXHJcblxyXG4gIC8qIHBhZGRpbmctdG9wOiAycHg7ICovXHJcbn1cclxuXHJcbi5lbW90aW9uQ2hpcE5hbWUge1xyXG4gIC8qIHRleHQtb3ZlcmZsb3c6IGNsaXA7ICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxuICBtaW4td2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm1hdC1zdGFuZGFyZC1jaGlwOmhvdmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNGQ1OSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0ZDU5O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5mbGV4Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMjJ2aDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE5dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmZsZXhJdGVtcyB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmZsZXgtcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFkZEVtb3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5ncmlkQ29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1yb3dzOiAgNDBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMiwgbWlubWF4KDEyMHB4LDFmcikgKTtcclxuICBtYXgtaGVpZ2h0OiAyNXZoO1xyXG5cclxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAxJSAwJTtcclxufVxyXG5cclxuLmdyaWRJdGVtLTAge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmdyaWRJdGVtLTEge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5ncmlkSXRlbS0yIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG59XHJcblxyXG4uZ3JpZEl0ZW0tMyB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmdyaWRJdGVtLTQge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICBncmlkLXJvdy1zdGFydDogMztcclxuICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWRJdGVtLTUge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBncmlkLXJvdy1zdGFydDogMztcclxuICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkSXRlbS02IHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZEl0ZW0tNyB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gIGdyaWQtcm93LWVuZDogNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogR0lGICovXHJcblxyXG4uc2Nyb2xsQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDdweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5naWZHcmlkIHtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCA0LCBtaW5tYXgoMjAlLDFmcikgKTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMywgbWlubWF4KDQxJSwxZnIpICk7XHJcblxyXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlOyAqL1xyXG4gIGdhcDogMSUgMCU7XHJcbn1cclxuXHJcbiNnaWYtMCB7XHJcbiAgd2lkdGg6IDM3dnc7XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IGhpZGRlbjtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbn1cclxuXHJcbiNnaWYtMSB7XHJcbiAgd2lkdGg6IDM3dnc7XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcblxyXG59XHJcblxyXG4jZ2lmLTIge1xyXG4gIHdpZHRoOiAzN3Z3O1xyXG4gIGhlaWdodDogOXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG5cclxufVxyXG5cclxuI2dpZi0zIHtcclxuICB3aWR0aDogMzd2dztcclxuICBoZWlnaHQ6IDl2aDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogaGlkZGVuO1xyXG5cclxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuXHJcbn1cclxuXHJcbiNnaWYtNCB7XHJcbiAgd2lkdGg6IDM3dnc7XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IGhpZGRlbjtcclxuXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gIGdyaWQtcm93LWVuZDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG5cclxufVxyXG5cclxuI2dpZi01IHtcclxuICB3aWR0aDogMzd2dztcclxuICBoZWlnaHQ6IDl2aDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogaGlkZGVuO1xyXG5cclxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuXHJcbn1cclxuXHJcbiNnaWYtNiB7XHJcbiAgd2lkdGg6IDM3dnc7XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IGhpZGRlbjtcclxuXHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gIGdyaWQtcm93LWVuZDogNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG5cclxufVxyXG5cclxuI2dpZi03IHtcclxuICB3aWR0aDogMzd2dztcclxuICBoZWlnaHQ6IDl2aDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcblxyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBncmlkLXJvdy1zdGFydDogNDtcclxuICBncmlkLXJvdy1lbmQ6IDQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbmFja2JhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgIFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zaW1wbGUtc25hY2tiYXJ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNDAzRDQ2O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItaGFuZHNldCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG8gYXV0byAyNiUgYXV0byAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcclxuXHJcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('emotionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideOutRight"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideInLeft"]))])], {
          optional: false
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideOutLeft"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideInRight"]))])], {
          optional: false
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmotionSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-emotion-selection',
          templateUrl: './emotion-selection.component.html',
          styleUrls: ['./emotion-selection.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('emotionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideOutRight"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideInLeft"]))])], {
            optional: false
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideOutLeft"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_4__["slideInRight"]))])], {
            optional: false
          })])])]
        }]
      }], function () {
        return [{
          type: src_app_services_gif_service_service__WEBPACK_IMPORTED_MODULE_8__["GifServiceService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_services_anders_service__WEBPACK_IMPORTED_MODULE_10__["AndersService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]
        }, {
          type: src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_13__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-selection/help-pop-up3/help-pop-up3.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/emotion-selection/help-pop-up3/help-pop-up3.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: HelpPopUp3Component */

  /***/
  function srcAppComponentsEmotionSelectionHelpPopUp3HelpPopUp3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPopUp3Component", function () {
      return HelpPopUp3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var HelpPopUp3Component = /*#__PURE__*/function () {
      function HelpPopUp3Component(dialogRef) {
        _classCallCheck(this, HelpPopUp3Component);

        this.dialogRef = dialogRef;
        this.checked = false;
      }

      _createClass(HelpPopUp3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close();
          var check = "" + this.checked;
          localStorage.setItem('checkedSelectionDialog', check);
        }
      }, {
        key: "onCheck",
        value: function onCheck() {
          this.checked = !this.checked;
          console.log(this.checked);
        }
      }]);

      return HelpPopUp3Component;
    }();

    HelpPopUp3Component.ɵfac = function HelpPopUp3Component_Factory(t) {
      return new (t || HelpPopUp3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    HelpPopUp3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpPopUp3Component,
      selectors: [["app-help-pop-up3"]],
      decls: 18,
      vars: 0,
      consts: [[1, "content"], [1, "close"], [1, "closeButton", 3, "click"], ["id", "closeIcon"], [1, "bottom"], [1, "checkbox"], [3, "[ngModel]", "change"], [1, "ok"], [1, "okButton", 3, "click"]],
      template: function HelpPopUp3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUp3Component_Template_button_click_2_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Kies per geselecteerde");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " emotie een GIF die");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " dit gevoel weergeeft. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HelpPopUp3Component_Template_mat_checkbox__ngModel__13_listener() {
            return ctx.checked;
          })("change", function HelpPopUp3Component_Template_mat_checkbox_change_13_listener() {
            return ctx.onCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Niet meer weergeven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUp3Component_Template_button_click_16_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]],
      styles: [".content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n  }\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: #403D46;\r\n    text-align: center;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 25px;\r\n\r\n}\r\n\r\nmat-checkbox[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-frame {\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #F5F5F5;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    width: 21px;\r\n    height: 21px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-label{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    opacity: .5;\r\n}\r\n\r\n  .mat-checkbox-checked .mat-checkbox-background{\r\n    background-color: #F5F5F5 !important;\r\n \r\n}\r\n\r\n  mat-checkbox .mat-checkbox-checkmark-path {\r\n    stroke: #66BA8B !important;\r\n    transform: scale(1.3);\r\n}\r\n\r\n.ok[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 100%;\r\n   \r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    background-color: #67BCD9;\r\n    border: none;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: white;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 9% 1% 9%;\r\n    margin-top: 5%;\r\n    margin-right: 10px;\r\n    width: 55%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n  }\r\n\r\n  .help-panel .mat-dialog-container{\r\n      margin: auto;\r\n      margin-top: 0%;\r\n      padding: 12px 12px 20px 12px;\r\n      height: 70%;\r\n      border-radius: 18px;\r\n\r\n  }\r\n\r\n   .backdropBackground{\r\n    background-color: rgba(0,0,0,.50);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXNlbGVjdGlvbi9oZWxwLXBvcC11cDMvaGVscC1wb3AtdXAzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVzs7QUFFZjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0Msb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFHQTtNQUNJLFlBQVk7TUFDWixjQUFjO01BQ2QsNEJBQTRCO01BQzVCLFdBQVc7TUFDWCxtQkFBbUI7O0VBRXZCOztBQUVEO0lBQ0csaUNBQWlDO0VBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXNlbGVjdGlvbi9oZWxwLXBvcC11cDMvaGVscC1wb3AtdXAzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmNsb3Nle1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzQwM0Q0NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5tYXQtY2hlY2tib3h7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjUgIWltcG9ydGFudDtcclxuIFxyXG59IFxyXG5cclxuOjpuZy1kZWVwIG1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcclxuICAgIHN0cm9rZTogIzY2QkE4QiAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG5cclxuLm9re1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbn1cclxuLm9rQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2N0JDRDk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICBwYWRkaW5nOiAxJSA5JSAxJSA5JTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG5cclxuLm9rQnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICA6Om5nLWRlZXAgLmhlbHAtcGFuZWwgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDEycHggMjBweCAxMnB4O1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuXHJcbiAgfVxyXG5cclxuIDo6bmctZGVlcCAgLmJhY2tkcm9wQmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUwKTtcclxuICB9IFxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpPopUp3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-pop-up3',
          templateUrl: './help-pop-up3.component.html',
          styleUrls: ['./help-pop-up3.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-selection/keyframes.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/emotion-selection/keyframes.ts ***!
    \***********************************************************/

  /*! exports provided: slideInLeft, slideInRight, slideOutLeft, slideOutRight */

  /***/
  function srcAppComponentsEmotionSelectionKeyframesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInLeft", function () {
      return slideInLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInRight", function () {
      return slideInRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutLeft", function () {
      return slideOutLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideOutRight", function () {
      return slideOutRight;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideInLeft = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(-330px,0px,0px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0,0,0)'
    })];
    var slideInRight = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(100%,0,0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0,0,0)'
    })];
    var slideOutLeft = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0,0,0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(-330px,0px,0px)'
    })];
    var slideOutRight = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(0,0,0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translate3d(100%,0,0)'
    })];
    /***/
  },

  /***/
  "./src/app/components/emotion-strengths/description/description.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/emotion-strengths/description/description.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DescriptionComponent */

  /***/
  function srcAppComponentsEmotionStrengthsDescriptionDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function () {
      return DescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DescriptionComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.charLimit - ctx_r1.description.length, " ");
      }
    }

    var DescriptionComponent = /*#__PURE__*/function () {
      function DescriptionComponent(dialogRef, data, snackbar) {
        _classCallCheck(this, DescriptionComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.snackbar = snackbar;
        this.charLimit = 300;
        console.log(data);
        console.log(data.emotion);
        this.description = data.emotion.description;
        this.emotionName = data.emotion.emotionName;
        console.log(this.emotionName);
        this.formattedstring = this.emotionName.toLowerCase();
        console.log(this.formattedstring);
      }

      _createClass(DescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close({
            event: 'close',
            data: this.description
          });
          this.showSnackBar("beschrijving toegevoegd");
        }
      }, {
        key: "showSnackBar",
        value: function showSnackBar(message) {
          this.snackbar.open(message, "", {
            duration: 1000,
            panelClass: "snackbar2"
          });
        }
      }]);

      return DescriptionComponent;
    }();

    DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) {
      return new (t || DescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionComponent,
      selectors: [["app-description"]],
      decls: 14,
      vars: 6,
      consts: [[1, "close"], [1, "closeButton", 3, "click"], ["id", "closeIcon"], ["floatLabel", "never"], ["matInput", "", "autocomplete", "off", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "12", "cdkAutosizeMaxRows", "12", 3, "ngModel", "placeholder", "maxlength", "ngModelChange"], ["autosize", "cdkTextareaAutosize"], ["class", "count-div", 4, "ngIf"], [1, "ok"], [1, "okButton", 3, "click"], [1, "count-div"]],
      template: function DescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_Template_button_click_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DescriptionComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DescriptionComponent_div_10_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_Template_button_click_12_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ik voel me ", ctx.formattedstring, " omdat...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "ik voel me ", ctx.formattedstring, " omdat...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("maxlength", ctx.charLimit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \n            ", ctx.description, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description.length);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [".close[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    background-color: #F7F7F7;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    width: 100%;\r\n    height: 78%;\r\n}\r\n\r\n  .mat-form-field-appearance-legacy .mat-form-field-underline{\r\n    background: transparent;\r\n}\r\n\r\n  .mat-form-field-appearance-legacy .mat-form-field-infix{\r\n    background: transparent;\r\n    margin: 0 10px 0 10px;\r\n    padding: 0;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #403D46;\r\n\r\n}\r\n\r\n  .mat-form-field.mat-focused  .mat-form-field-ripple {\r\n    background: transparent;\r\n}\r\n\r\n  .mat-form-field-ripple {\r\n    background: transparent;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-required-marker{\r\n    background: transparent;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-input-element {\r\n    background: transparent;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n\r\n.count-div[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    margin: 5px 5px 0 0;\r\n}\r\n\r\n.ok[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    margin-top: 5%;\r\n    width: 100%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    background-color: #F8CB75;\r\n    border: none;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: white;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 0% 1% 0%;\r\n    margin-right: 10px;\r\n    width: 24%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXN0cmVuZ3Rocy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0Msb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1vdGlvbi1zdHJlbmd0aHMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2xvc2VCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2xvc2VCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3OCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICM0MDNENDY7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY291bnQtZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiA1cHggNXB4IDAgMDtcclxufVxyXG5cclxuLm9re1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub2tCdXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4Q0I3NTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIHBhZGRpbmc6IDElIDAlIDElIDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI0JTtcclxufVxyXG5cclxuLm9rQnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-description',
          templateUrl: './description.component.html',
          styleUrls: ['./description.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-strengths/emotion-strengths.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/emotion-strengths/emotion-strengths.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EmotionStrengthsComponent */

  /***/
  function srcAppComponentsEmotionStrengthsEmotionStrengthsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmotionStrengthsComponent", function () {
      return EmotionStrengthsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _description_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./description/description.component */
    "./src/app/components/emotion-strengths/description/description.component.ts");
    /* harmony import */


    var _help_pop_up_help_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./help-pop-up/help-pop-up.component */
    "./src/app/components/emotion-strengths/help-pop-up/help-pop-up.component.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../emotion-selection/keyframes */
    "./src/app/components/emotion-selection/keyframes.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _help_pop_up2_help_pop_up2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./help-pop-up2/help-pop-up2.component */
    "./src/app/components/emotion-strengths/help-pop-up2/help-pop-up2.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_emotion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/emotion.service */
    "./src/app/services/emotion.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/token-storage-service.service */
    "./src/app/services/token-storage-service.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmotionStrengthsComponent_ng_container_29_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_ng_container_29_mat_icon_1_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.goToIndex(x_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lens");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmotionStrengthsComponent_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmotionStrengthsComponent_ng_container_29_mat_icon_1_Template, 2, 0, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var x_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", x_r2 > 0);
      }
    }

    var EmotionStrengthsComponent = /*#__PURE__*/function () {
      function EmotionStrengthsComponent(router, description, help, help2, EmotionService, tokenStorage) {
        _classCallCheck(this, EmotionStrengthsComponent);

        this.router = router;
        this.description = description;
        this.help = help;
        this.help2 = help2;
        this.EmotionService = EmotionService;
        this.tokenStorage = tokenStorage;
        this.chosenEmotions = [];
        this.currentIndex = 0;
        this.shouldChange = false;
        var navigation = this.router.getCurrentNavigation();
        var state = navigation.extras.state;
        this.chosenEmotions = state.chosenEmotions;
        console.log(this.chosenEmotions);
      }

      _createClass(EmotionStrengthsComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.setT();

          if (localStorage.getItem("checkedStrengthDialog2") == "false" || localStorage.getItem("checkedStrengthDialog2") == null) {
            this.showHelp3();
          }

          if (localStorage.getItem("checkedStrengthDialog") == "false" || localStorage.getItem("checkedStrengthDialog") == null) {
            this.showHelp2();
          }

          this.showLeftButton();
          this.showRightButton();
          this.showSwipeControls();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setbg();
          this.setT();
        }
      }, {
        key: "onLeft",
        value: function onLeft() {
          this.changeSwipeControlColorToWhite();

          if (this.currentIndex > 0) {
            this.currentIndex -= 1;
          } else {
            this.currentIndex = this.chosenEmotions.length - 1;
          }

          this.changeSwipeControlColorToYellow();
          this.startAnimation("slideRight");
          var slider = document.getElementsByClassName('mat-slider-track-wrapper')[0];
          console.log(this.chosenEmotions[this.currentIndex]);
          slider.style.borderRight = "".concat(this.chosenEmotions[this.currentIndex].strength * 230 / 100, "px solid #f8ca75");
        }
      }, {
        key: "onRight",
        value: function onRight() {
          this.changeSwipeControlColorToWhite();

          if (this.currentIndex < this.chosenEmotions.length - 1) {
            this.currentIndex += 1;
          } else {
            this.currentIndex = 0;
          }

          this.changeSwipeControlColorToYellow();
          this.startAnimation("slideLeft");
          var slider = document.getElementsByClassName('mat-slider-track-wrapper')[0];
          console.log(this.chosenEmotions[this.currentIndex]);
          slider.style.borderRight = "".concat(this.chosenEmotions[this.currentIndex].strength * 230 / 100, "px solid #f8ca75");
        }
      }, {
        key: "describe",
        value: function describe() {
          var _this10 = this;

          var dialogRef = this.description.open(_description_description_component__WEBPACK_IMPORTED_MODULE_2__["DescriptionComponent"], {
            maxWidth: '85vw',
            height: '390px',
            width: '600px',
            disableClose: true,
            backdropClass: 'backdropBackground4',
            panelClass: 'describe-panel',
            data: {
              emotion: this.chosenEmotions[this.currentIndex]
            }
          });
          dialogRef.afterClosed().subscribe(function (res) {
            console.log("Dialog description " + res.data);
            _this10.chosenEmotions[_this10.currentIndex].description = res.data;
            console.log("New Descriptions " + _this10.chosenEmotions[_this10.currentIndex].description);
          });
        }
      }, {
        key: "showHelp2",
        value: function showHelp2() {
          this.help.open(_help_pop_up_help_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["HelpPopUpComponent"], {
            maxWidth: '85vw',
            height: '390px',
            width: '600px',
            disableClose: true,
            backdropClass: 'backdropBackground2',
            panelClass: 'help-panel2'
          });
        }
      }, {
        key: "showHelp3",
        value: function showHelp3() {
          this.help2.open(_help_pop_up2_help_pop_up2_component__WEBPACK_IMPORTED_MODULE_7__["HelpPopUp2Component"], {
            maxWidth: '85vw',
            height: '390px',
            width: '600px',
            disableClose: true,
            backdropClass: 'backdropBackground3',
            panelClass: 'help-panel3'
          });
        }
      }, {
        key: "setbg",
        value: function setbg() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "auto";
          doc.style.backgroundImage = "url('../../../assets/header/headerbackgroundYellow.png')";
          doc.style.backgroundColor = "#FDF4E3";
        }
      }, {
        key: "setT",
        value: function setT() {
          this.childComponent.setTitle("Jouw gevoelens van vandaag");
          var t = document.getElementById('center');
          t.style.marginTop = "10%";
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          this.router.navigate(['emotions'], {
            state: {
              chosenEmotions: this.chosenEmotions
            }
          });
        }
      }, {
        key: "next",
        value: function next() {
          this.saveEmotions();
          this.router.navigateByUrl('/dashboard');
        }
      }, {
        key: "showLeftButton",
        value: function showLeftButton() {
          var leftBtn = document.getElementById("leftBtn");

          if (this.chosenEmotions.length <= 1) {
            leftBtn.style.backgroundColor = "transparent";
            leftBtn.removeChild(leftBtn.childNodes[0]);
          } else {
            leftBtn.style.display = "block";
          }
        }
      }, {
        key: "showRightButton",
        value: function showRightButton() {
          var rightBtn = document.getElementById("rightBtn");

          if (this.chosenEmotions.length <= 1) {
            rightBtn.style.backgroundColor = "transparent";
            rightBtn.removeChild(rightBtn.childNodes[0]);
          } else {
            rightBtn.style.display = "block";
          }
        }
      }, {
        key: "showSwipeControls",
        value: function showSwipeControls() {
          var swipeBtn = document.getElementById("swipeCircle");

          if (this.chosenEmotions.length <= 1) {
            swipeBtn.style.display = "none";
          } else {
            swipeBtn.style.display = "block";
          }
        }
      }, {
        key: "changeSwipeControlColorToYellow",
        value: function changeSwipeControlColorToYellow() {
          var parentDiv = document.getElementById("swipeControls");
          var children = parentDiv.children;
          var iconToChange = children[this.currentIndex];
          iconToChange.style.color = "#F8CB75";
          iconToChange.style.backgroundColor = "#F8CB75";
        }
      }, {
        key: "changeSwipeControlColorToWhite",
        value: function changeSwipeControlColorToWhite() {
          var parentDiv = document.getElementById("swipeControls");
          var children = parentDiv.children;
          var iconToChange = children[this.currentIndex];
          iconToChange.style.color = "#FFFFFF";
          iconToChange.style.backgroundColor = "#FFFFFF";
        }
      }, {
        key: "startAnimation",
        value: function startAnimation(state) {
          console.log(state);

          if (this.chosenEmotions.length > 1) {
            if (!this.animationState) {
              this.animationState = state;
            }
          }
        }
      }, {
        key: "resetAnimationState",
        value: function resetAnimationState() {
          if (this.animationState == "slideRight" && !this.shouldChange) {
            this.onLeft();
          }

          if (this.animationState == "slideLeft" && !this.shouldChange) {
            this.onRight();
          }

          this.animationState = '';
          this.shouldChange = false;
        }
      }, {
        key: "goToIndex",
        value: function goToIndex(index) {
          var indexNew = index;
          console.log(indexNew);

          if (indexNew > this.chosenEmotions.length - 1) {
            indexNew = 0;
          }

          if (indexNew < 0) {
            indexNew = this.chosenEmotions.length - 1;
          }

          console.log(indexNew);
          var currentIndex = this.currentIndex;

          if (indexNew > currentIndex) {
            this.shouldChange = true;
            this.startAnimation("slideLeft");
          } else if (indexNew < currentIndex) {
            this.shouldChange = true;
            this.startAnimation("slideRight");
          }

          this.changeSwipeControlColorToWhite();
          this.currentIndex = indexNew;
          this.changeSwipeControlColorToYellow();
        }
      }, {
        key: "getValue",
        value: function getValue(event) {
          var test = document.getElementsByClassName("mat-slider")[0];
          var value = parseInt(test.getAttribute("aria-valuenow")); //console.log(test.getAttribute("aria-valuenow"));

          this.chosenEmotions[this.currentIndex].strength = value; //console.log(this.chosenEmotions[this.currentIndex].strength);

          var slider = document.getElementsByClassName('mat-slider-track-wrapper')[0];
          slider.style.borderRight = "".concat(value * 230 / 100, "px solid #f8ca75");
        }
      }, {
        key: "getValueClick",
        value: function getValueClick(event) {
          this.chosenEmotions[this.currentIndex].strength = event.value;
          console.log(this.chosenEmotions[this.currentIndex].strength);
          var slider = document.getElementsByClassName('mat-slider-track-wrapper')[0];
          slider.style.borderRight = "".concat(parseInt(event.value) * 230 / 100, "px solid #f8ca75");
        }
      }, {
        key: "saveEmotions",
        value: function saveEmotions() {
          var tempChosenEmotionIndex;
          var tempChosenEmotionArray = [];
          this.chosenEmotions.forEach(function (emotion) {
            tempChosenEmotionIndex = {
              category: emotion.emotionCategory,
              emotionName: emotion.emotionName,
              strength: emotion.strength,
              description: emotion.description,
              gifUrl: emotion.gif
            };
            tempChosenEmotionArray.push(tempChosenEmotionIndex);
            tempChosenEmotionIndex = null;
          });
          this.EmotionService.addNewEmotion({
            emotionData: tempChosenEmotionArray,
            userId: this.tokenStorage.getUser().id
          }).subscribe(function (data) {});
        }
      }]);

      return EmotionStrengthsComponent;
    }();

    EmotionStrengthsComponent.ɵfac = function EmotionStrengthsComponent_Factory(t) {
      return new (t || EmotionStrengthsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emotion_service__WEBPACK_IMPORTED_MODULE_10__["EmotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_11__["TokenStorageService"]));
    };

    EmotionStrengthsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmotionStrengthsComponent,
      selectors: [["app-emotion-strengths"]],
      viewQuery: function EmotionStrengthsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childComponent = _t.first);
        }
      },
      decls: 41,
      vars: 8,
      consts: [[1, "page"], [3, "title"], [1, "tekst"], [1, "carrousel"], ["mat-icon-button", "", "id", "leftBtn", 3, "disabled", "click"], ["id", "categoryArrow"], [1, "card", 3, "swipeRight", "swipeLeft"], [1, "gif"], [3, "src"], [1, "slider"], ["id", "slider", 3, "ngModel", "ngModelChange", "change", "pan"], [1, "describe"], ["mat-fab", "", 1, "desButton", 3, "click"], ["src", "../../../assets/icons/editIcon.png"], ["mat-icon-button", "", "id", "rightBtn", 3, "disabled", "click"], ["id", "swipeControls", 1, "swipeControls"], ["id", "swipeCircle", 2, "color", "#F8CB75", "background-color", "#F8CB75", 3, "click"], [4, "ngFor", "ngForOf"], [1, "bottom-bar"], [1, "prev"], ["mat-fab", "", 1, "prevButton", 3, "click"], ["src", "../../../assets/icons/prev.png"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"], ["id", "swipeCircle", "style", "color: #FFFFFF; background-color: #FFFFFF;", 3, "click", 4, "ngIf"], ["id", "swipeCircle", 2, "color", "#FFFFFF", "background-color", "#FFFFFF", 3, "click"]],
      template: function EmotionStrengthsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HOE STERK ZIJN DEZE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " GEVOELENS?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_button_click_8_listener() {
            return ctx.startAnimation("slideRight");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@emotionTrigger.done", function EmotionStrengthsComponent_Template_div_animation_emotionTrigger_done_11_listener() {
            return ctx.resetAnimationState();
          })("swipeRight", function EmotionStrengthsComponent_Template_div_swipeRight_11_listener() {
            return ctx.startAnimation("slideRight");
          })("swipeLeft", function EmotionStrengthsComponent_Template_div_swipeLeft_11_listener() {
            return ctx.startAnimation("slideLeft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-slider", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmotionStrengthsComponent_Template_mat_slider_ngModelChange_17_listener($event) {
            return ctx.chosenEmotions[ctx.currentIndex].strength = $event;
          })("change", function EmotionStrengthsComponent_Template_mat_slider_change_17_listener($event) {
            return ctx.getValueClick($event);
          })("pan", function EmotionStrengthsComponent_Template_mat_slider_pan_17_listener($event) {
            return ctx.getValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_button_click_20_listener() {
            return ctx.describe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Beschrijven ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_button_click_23_listener() {
            return ctx.startAnimation("slideLeft");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_mat_icon_click_27_listener() {
            return ctx.goToIndex(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "lens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EmotionStrengthsComponent_ng_container_29_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_button_click_32_listener() {
            return ctx.prevpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vorige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmotionStrengthsComponent_Template_button_click_37_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Volgende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Jouw gevoelens van vandaag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.chosenEmotions.length <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@emotionTrigger", ctx.animationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chosenEmotions[ctx.currentIndex].emotionName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.chosenEmotions[ctx.currentIndex].gif, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chosenEmotions[ctx.currentIndex].strength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.chosenEmotions.length <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chosenEmotions);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]],
      styles: [".page[_ngcontent-%COMP%]{\r\n    z-index: 2;\r\n    position: relative;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-top: 15%;\r\n}\r\n\r\n.tekst[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.tekst[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    margin: 15% auto auto auto;\r\n    line-height: 1.2;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.carrousel[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n#categoryArrow[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    float:right;\r\n\r\n}\r\n\r\n#leftBtn[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    background-color: #ffffff;\r\n    width: 20px;\r\n    height: 270px;\r\n    border-radius: 0px 18px 18px 0px; \r\n    padding-left: 0;\r\n}\r\n\r\n#rightBtn[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n    background-color: #ffffff;\r\n    width: 20px;\r\n    height: 270px;\r\n    border-radius: 18px 0px 0px 18px; \r\n }\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 18px;\r\n    box-shadow: 0px 5px 60px 0px rgba(0, 0, 0, 0.20);\r\n    margin: 2% auto auto auto;\r\n    width: auto;\r\n    height: auto;\r\n    padding: 5% 5% 5% 5%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.gif[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n  height: 160px;\r\n  border-radius: 15px;\r\n  margin-top: 5%;\r\n}\r\n\r\n.describe[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n.desButton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-color: #786238;\r\n    text-align: center;\r\n    box-shadow: none;\r\n\r\n}\r\n\r\n  .desButton .mat-button-wrapper{\r\n  padding: 0px 0 0 0px !important;\r\n  \r\n}\r\n\r\n.swipeControls[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 10px;\r\n    justify-content: center;\r\n    height: auto;\r\n  }\r\n\r\n#swipeCircle[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 3px 5px  rgba(0, 0, 0, 0.2);\r\n    border-radius: 100%;\r\n    margin: 4px;\r\n    width: 10px;\r\n    height: 10px;\r\n    font-size: 10px;\r\n  }\r\n\r\n.bottom-bar[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: space-between;\r\n    margin: 21% 7% auto 7%;\r\n  }\r\n\r\n.prev[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;   \r\n    font-size: 13px;\r\n    margin: auto;\r\n\r\n  }\r\n\r\n.prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n   }\r\n\r\n.prevButton[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 51px;\r\n    height: 51px;\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n  .prevButton .mat-button-wrapper{\r\n  padding: 13px 5px 0 0px !important;\r\n  \r\n}\r\n\r\n.next[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    grid-row-start: 1;\r\n    grid-row-end: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 13px;\r\n  }\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n  }\r\n\r\n.nextButton[_ngcontent-%COMP%]{\r\n    background-color: #F8CB75;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 51px;\r\n    height: 51px;\r\n  }\r\n\r\n  .nextButton .mat-button-wrapper{\r\n    padding: 13px 0 0 4px !important;\r\n    \r\n  }\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.mat-slider[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-right: 20%;\r\n    z-index: 0;\r\n}\r\n\r\n  .mat-slider.mat-slider-horizontal .mat-slider-wrapper {\r\n    top: 15px;\r\n}\r\n\r\n  .mat-slider.mat-slider-horizontal .mat-slider-track-wrapper {\r\n  border-bottom: 10px solid transparent;\r\n  border-right: 230px solid #F8CB75;\r\n  border-left: 0px solid transparent;\r\n  border-top: 10px solid transparent;\r\n    \r\n  border-radius: 5px;\r\n  box-sizing:border-box;\r\n  width: auto;\r\n  filter: drop-shadow(0px 1px 3px #0000002f);\r\n}\r\n\r\n  .mat-slider.mat-slider-horizontal .mat-slider-track-background,   .mat-slider.mat-slider-horizontal .mat-slider-track-fill {\r\n    height: 100%;\r\n    background: transparent;\r\n}\r\n\r\n\r\n\r\n  .mat-accent .mat-slider-thumb {\r\n    height: 20px;   \r\n    width: 20px;\r\n    background-color: #F8CB75;\r\n    border: solid 6px white;\r\n    bottom: -18px;\r\n    right: -20px; \r\n    box-shadow:  0px 3px 6px 0px rgba(0, 0, 0, 0.20);\r\n    transform: none;\r\n}\r\n\r\n  .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\r\n    background-color:  #F8CB75;\r\n    border: solid 6px white;\r\n    \r\n  }\r\n\r\n  .mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,   .mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,   .mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb {\r\n    background-color:  #F8CB75 !important;\r\n    border: solid 6px white !important;    \r\n    transform: none !important;\r\n  }\r\n\r\n\r\n\r\n  .describe-panel {\r\n      margin-top: 10% !important;\r\n  }\r\n\r\n  .describe-panel .mat-dialog-container{\r\n    border-radius: 18px;\r\n    padding: 12px 12px 20px 12px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n   .backdropBackground4{\r\n  background-color: rgba(0,0,0,.50);\r\n}\r\n\r\n\r\n\r\n  .help-panel2 {\r\n    margin-top: 10% !important;\r\n}\r\n\r\n  .help-panel2 .mat-dialog-container{\r\n  border-radius: 18px;\r\n  padding: 12px 12px 20px 12px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n   .backdropBackground2{\r\n  background-color: rgba(0,0,0, 0);\r\n}\r\n\r\n\r\n\r\n  .help-panel3 {\r\n    margin-top: 10% !important;\r\n}\r\n\r\n  .help-panel3 .mat-dialog-container{\r\n  border-radius: 18px;\r\n  padding: 12px 12px 20px 12px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n   .backdropBackground3{\r\n  background-color: rgba(0,0,0,.50);\r\n}\r\n\r\n  .snackbar2{\r\n  background-color: white;  \r\n}\r\n\r\n  .mat-simple-snackbar{\r\n  text-transform: capitalize;\r\n  font-family: \"poppins\";\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #403D46;\r\n}\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n  width: auto !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto auto 26% auto !important;\r\n  border-radius: 18px !important;\r\n\r\n}\r\n\r\n  .mat-slider-horizontal .mat-slider-thumb-container {\r\n width: 115% !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXN0cmVuZ3Rocy9lbW90aW9uLXN0cmVuZ3Rocy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdDQUFnQyxFQUFFLG1EQUFtRDtJQUNyRixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdDQUFnQyxFQUFFLG1EQUFtRDtDQUN4Rjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0VBQ0UsK0JBQStCOztBQUVqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7O0VBRWQ7O0FBRUE7SUFDRSxZQUFZO0dBQ2I7O0FBRUQ7SUFDRSx5QkFBeUI7SUFDekIsK0NBQStDO0lBQy9DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0FBRUY7RUFDRSxrQ0FBa0M7O0FBRXBDOztBQUVFO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxnQ0FBZ0M7O0VBRWxDOztBQUlGLFdBQVc7O0FBQ1g7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxrQ0FBa0M7SUFDaEM7Ozs7TUFJRTtFQUNKLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFJQTs7SUFFSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCOztFQUV6Qjs7QUFFRjs7O0lBR0kscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywwQkFBMEI7RUFDNUI7O0FBRUEsb0JBQW9COztBQUN0QjtNQUNNLDBCQUEwQjtFQUM5Qjs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBLGtCQUFrQjs7QUFDbEI7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyw4QkFBOEI7O0FBRWhDOztBQUdBO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXN0cmVuZ3Rocy9lbW90aW9uLXN0cmVuZ3Rocy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG4gXHJcbi50ZWtzdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50ZWtzdCBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0byBhdXRvIGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fycm91c2Vse1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY2F0ZWdvcnlBcnJvd3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG5cclxufVxyXG4gIFxyXG4jbGVmdEJ0bntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMThweCAxOHB4IDBweDsgLyogdG9wIGxlZnQsIHRvcCByaWdodCwgYm90dG9tIHJpZ2h0LCBib3R0b20gbGVmdCAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbiAgXHJcbiNyaWdodEJ0bntcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4IDBweCAwcHggMThweDsgLyogdG9wIGxlZnQsIHRvcCByaWdodCwgYm90dG9tIHJpZ2h0LCBib3R0b20gbGVmdCAqL1xyXG4gfVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDYwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICBtYXJnaW46IDIlIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIGgze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5naWYgaW1ne1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5kZXNjcmliZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbiAgXHJcbi5kZXNCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3ODYyMzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5kZXNCdXR0b24gLm1hdC1idXR0b24td3JhcHBlcntcclxuICBwYWRkaW5nOiAwcHggMCAwIDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG4uc3dpcGVDb250cm9sc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgI3N3aXBlQ2lyY2xle1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbi5ib3R0b20tYmFye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMjElIDclIGF1dG8gNyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gIH1cclxuXHJcbiAgLnByZXYgcHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgfVxyXG5cclxuICAucHJldkJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5wcmV2QnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMTNweCA1cHggMCAwcHggIWltcG9ydGFudDtcclxuICBcclxufVxyXG5cclxuICAubmV4dHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLm5leHQgcHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4ubmV4dEJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOENCNzU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5leHRCdXR0b24gLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDEzcHggMCAwIDRweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKiBTbGlkZXIgKi9cclxuLnNsaWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItd3JhcHBlciB7XHJcbiAgICB0b3A6IDE1cHg7XHJcbn0gXHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLXdyYXBwZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyMzBweCBzb2xpZCAjRjhDQjc1O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSByaWdodCwgXHJcbiAgICB0cmFuc3BhcmVudCA0OSUsXHJcbiAgICAjRjhDQjc1IDUxJVxyXG4gICk7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICB3aWR0aDogYXV0bztcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggM3B4ICMwMDAwMDAyZik7XHJcbn0gXHJcblxyXG5cclxuICBcclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuICBcclxuLyogOjpuZy1kZWVwIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXHJcbn0gKi9cclxuICBcclxuOjpuZy1kZWVwIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGhlaWdodDogMjBweDsgICBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4Q0I3NTtcclxuICAgIGJvcmRlcjogc29saWQgNnB4IHdoaXRlO1xyXG4gICAgYm90dG9tOiAtMThweDtcclxuICAgIHJpZ2h0OiAtMjBweDsgXHJcbiAgICBib3gtc2hhZG93OiAgMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRjhDQjc1O1xyXG4gICAgYm9yZGVyOiBzb2xpZCA2cHggd2hpdGU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlcjpub3QoLm1hdC1zbGlkZXItZGlzYWJsZWQpLmNkay1tb3VzZS1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZXI6bm90KC5tYXQtc2xpZGVyLWRpc2FibGVkKS5jZGstdG91Y2gtZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYixcclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyOm5vdCgubWF0LXNsaWRlci1kaXNhYmxlZCkuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0Y4Q0I3NSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCA2cHggd2hpdGUgIWltcG9ydGFudDsgICAgXHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIC8qRGVzY3JpYmUgcG9wLXVwICAqL1xyXG46Om5nLWRlZXAgLmRlc2NyaWJlLXBhbmVsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5kZXNjcmliZS1wYW5lbCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxMnB4IDIwcHggMTJweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwICAuYmFja2Ryb3BCYWNrZ3JvdW5kNHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41MCk7XHJcbn0gXHJcbi8qIGhlbHAgcG9wLXVwIDIgKi9cclxuOjpuZy1kZWVwIC5oZWxwLXBhbmVsMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5oZWxwLXBhbmVsMiAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMjBweCAxMnB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwICAuYmFja2Ryb3BCYWNrZ3JvdW5kMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwKTtcclxufSBcclxuXHJcbi8qIGhlbHAgcG9wLXVwIDMqL1xyXG46Om5nLWRlZXAgLmhlbHAtcGFuZWwzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmhlbHAtcGFuZWwzIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAyMHB4IDEycHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC5iYWNrZHJvcEJhY2tncm91bmQze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUwKTtcclxufSBcclxuXHJcbjo6bmctZGVlcCAuc25hY2tiYXIye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNpbXBsZS1zbmFja2JhcntcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM0MDNENDY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1oYW5kc2V0IC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvIDI2JSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRodW1iLWNvbnRhaW5lciB7XHJcbiB3aWR0aDogMTE1JSAhaW1wb3J0YW50O1xyXG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('emotionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => slideRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideOutRight"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideInLeft"]))])], {
          optional: false
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => slideLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideOutLeft"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideInRight"]))])], {
          optional: false
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmotionStrengthsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emotion-strengths',
          templateUrl: './emotion-strengths.component.html',
          styleUrls: ['./emotion-strengths.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('emotionTrigger', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => slideRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideOutRight"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideInLeft"]))])], {
            optional: false
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => slideLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(1000, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideOutLeft"])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_emotion_selection_keyframes__WEBPACK_IMPORTED_MODULE_5__["slideInRight"]))])], {
            optional: false
          })])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _services_emotion_service__WEBPACK_IMPORTED_MODULE_10__["EmotionService"]
        }, {
          type: src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_11__["TokenStorageService"]
        }];
      }, {
        childComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-strengths/help-pop-up/help-pop-up.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/emotion-strengths/help-pop-up/help-pop-up.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: HelpPopUpComponent */

  /***/
  function srcAppComponentsEmotionStrengthsHelpPopUpHelpPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPopUpComponent", function () {
      return HelpPopUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var HelpPopUpComponent = /*#__PURE__*/function () {
      function HelpPopUpComponent(dialogRef) {
        _classCallCheck(this, HelpPopUpComponent);

        this.dialogRef = dialogRef;
        this.checked = false;
      }

      _createClass(HelpPopUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close();
          var check = "" + this.checked;
          localStorage.setItem('checkedStrengthDialog', check);
        }
      }, {
        key: "onCheck",
        value: function onCheck() {
          this.checked = !this.checked;
          console.log(this.checked);
        }
      }]);

      return HelpPopUpComponent;
    }();

    HelpPopUpComponent.ɵfac = function HelpPopUpComponent_Factory(t) {
      return new (t || HelpPopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    HelpPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpPopUpComponent,
      selectors: [["app-help-pop-up"]],
      decls: 16,
      vars: 0,
      consts: [[1, "content"], [1, "close"], [1, "closeButton", 3, "click"], ["id", "closeIcon"], [1, "bottom"], [1, "checkbox"], [3, "[ngModel]", "change"], [1, "ok"], [1, "okButton", 3, "click"]],
      template: function HelpPopUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUpComponent_Template_button_click_2_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Geef met de slider aan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " hoe sterk jouw gevoelens zijn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HelpPopUpComponent_Template_mat_checkbox__ngModel__11_listener() {
            return ctx.checked;
          })("change", function HelpPopUpComponent_Template_mat_checkbox_change_11_listener() {
            return ctx.onCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Niet meer weergeven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUpComponent_Template_button_click_14_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]],
      styles: [".content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    line-height: 1.2;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: #403D46;\r\n    text-align: center;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nmat-checkbox[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-frame {\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #F5F5F5;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    width: 21px;\r\n    height: 21px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-label{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    opacity: .5;\r\n\r\n}\r\n\r\n  .mat-checkbox-checked .mat-checkbox-background{\r\n    background-color: #F5F5F5 !important;\r\n \r\n}\r\n\r\n  mat-checkbox .mat-checkbox-checkmark-path {\r\n    stroke: #66BA8B !important;\r\n    transform: scale(1.3);\r\n}\r\n\r\n.ok[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    background-color: #F8CB75;\r\n    border: none;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: white;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 9% 1% 9%;\r\n    margin-top: 5%;\r\n    margin-right: 10px;\r\n    width: 55%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXN0cmVuZ3Rocy9oZWxwLXBvcC11cC9oZWxwLXBvcC11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0Msb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vtb3Rpb24tc3RyZW5ndGhzL2hlbHAtcG9wLXVwL2hlbHAtcG9wLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmNsb3Nle1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM0MDNENDY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtY2hlY2tib3h7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1ICFpbXBvcnRhbnQ7XHJcbiBcclxufSBcclxuXHJcbjo6bmctZGVlcCBtYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XHJcbiAgICBzdHJva2U6ICM2NkJBOEIgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuLm9re1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm9rQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOENCNzU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICBwYWRkaW5nOiAxJSA5JSAxJSA5JTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG5cclxuLm9rQnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpPopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-pop-up',
          templateUrl: './help-pop-up.component.html',
          styleUrls: ['./help-pop-up.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/emotion-strengths/help-pop-up2/help-pop-up2.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/emotion-strengths/help-pop-up2/help-pop-up2.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: HelpPopUp2Component */

  /***/
  function srcAppComponentsEmotionStrengthsHelpPopUp2HelpPopUp2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpPopUp2Component", function () {
      return HelpPopUp2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var HelpPopUp2Component = /*#__PURE__*/function () {
      function HelpPopUp2Component(dialogRef) {
        _classCallCheck(this, HelpPopUp2Component);

        this.dialogRef = dialogRef;
        this.checked = false;
      }

      _createClass(HelpPopUp2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "ok",
        value: function ok() {
          this.dialogRef.close();
          var check = "" + this.checked;
          localStorage.setItem('checkedStrengthDialog2', check);
        }
      }, {
        key: "onCheck",
        value: function onCheck() {
          this.checked = !this.checked;
          console.log(this.checked);
        }
      }]);

      return HelpPopUp2Component;
    }();

    HelpPopUp2Component.ɵfac = function HelpPopUp2Component_Factory(t) {
      return new (t || HelpPopUp2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    HelpPopUp2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpPopUp2Component,
      selectors: [["app-help-pop-up2"]],
      decls: 18,
      vars: 0,
      consts: [[1, "content"], [1, "close"], [1, "closeButton", 3, "click"], ["id", "closeIcon"], [1, "bottom"], [1, "checkbox"], [3, "[ngModel]", "change"], [1, "ok"], [1, "okButton", 3, "click"]],
      template: function HelpPopUp2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUp2Component_Template_button_click_2_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Geef een extra beschrijving, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " zodat je weet hoe je je die dag ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " voelde! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HelpPopUp2Component_Template_mat_checkbox__ngModel__13_listener() {
            return ctx.checked;
          })("change", function HelpPopUp2Component_Template_mat_checkbox_change_13_listener() {
            return ctx.onCheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Niet meer weergeven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpPopUp2Component_Template_button_click_16_listener() {
            return ctx.ok();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]],
      styles: [".content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    line-height: 1.2;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n  }\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: #403D46;\r\n    text-align: center;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nmat-checkbox[_ngcontent-%COMP%]{\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-frame {\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #F5F5F5;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    width: 21px;\r\n    height: 21px;\r\n}\r\n\r\n  .mat-checkbox .mat-checkbox-label{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n    opacity: .5;\r\n\r\n}\r\n\r\n  .mat-checkbox-checked .mat-checkbox-background{\r\n    background-color: #F5F5F5 !important;\r\n \r\n}\r\n\r\n  mat-checkbox .mat-checkbox-checkmark-path {\r\n    stroke: #66BA8B !important;\r\n    transform: scale(1.3);\r\n}\r\n\r\n.ok[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    width: 100%;\r\n   \r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    background-color: #F8CB75;\r\n    border: none;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: white;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 9% 1% 9%;\r\n    margin-top: 5%;\r\n    margin-right: 10px;\r\n    width: 55%;\r\n}\r\n\r\n.okButton[_ngcontent-%COMP%]:focus {\r\n    outline:none;\r\n    border: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbW90aW9uLXN0cmVuZ3Rocy9oZWxwLXBvcC11cDIvaGVscC1wb3AtdXAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVzs7QUFFZjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0Msb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1vdGlvbi1zdHJlbmd0aHMvaGVscC1wb3AtdXAyL2hlbHAtcG9wLXVwMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmNsb3Nle1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzQwM0Q0NjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1jaGVja2JveHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1mcmFtZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjFweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjUgIWltcG9ydGFudDtcclxuIFxyXG59IFxyXG5cclxuOjpuZy1kZWVwIG1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcclxuICAgIHN0cm9rZTogIzY2QkE4QiAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4ub2t7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxufVxyXG4ub2tCdXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4Q0I3NTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIHBhZGRpbmc6IDElIDklIDElIDklO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcblxyXG4ub2tCdXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpPopUp2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-pop-up2',
          templateUrl: './help-pop-up2.component.html',
          styleUrls: ['./help-pop-up2.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage-service.service */
    "./src/app/services/token-storage-service.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HeaderComponent_button_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_37_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_img_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(breakpointObserver, tokenStorage, snackbar) {
        _classCallCheck(this, HeaderComponent);

        this.breakpointObserver = breakpointObserver;
        this.tokenStorage = tokenStorage;
        this.snackbar = snackbar;
        this.headerbackground = "headerbackground.png";
        this.shouldShowMenu = false;
        this.menuState = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.title === "Hoi") {
            console.log(this.tokenStorage.getUser().name);
            this.setTitle("Hoi ".concat(this.tokenStorage.getUser().name, ","));
          }

          if (!this.hideMenu) {// let doc = document.get("html")[0] as HTMLElement;
            // doc.style.background-image: url(./assets//header/headerbackground.png);
          }
        }
      }, {
        key: "showMenu",
        value: function showMenu() {
          this.shouldShowMenu = !this.shouldShowMenu;
        }
      }, {
        key: "close",
        value: function close() {
          this.menuState = !this.menuState;
        }
      }, {
        key: "setBackground",
        value: function setBackground(bg) {
          this.headerbackground = bg;
        }
      }, {
        key: "setTitle",
        value: function setTitle(t) {
          this.title = t;
        }
      }, {
        key: "comingSoon",
        value: function comingSoon() {
          this.snackbar.open("Coming soon", "", {
            duration: 1000,
            panelClass: "snackbar"
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        title: "title",
        hideMenu: "hideMenu"
      },
      decls: 42,
      vars: 5,
      consts: [[1, "content"], [1, "left"], [1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "menuTitle"], ["id", "logo", "src", "../../../assets/Group 38.png", "alt", "menuButton"], ["id", "closeIcon", 1, "closeButton", 3, "click"], [1, "link"], ["mat-list-item", "", "href", "/emotions"], ["id", "arrowRight"], ["mat-list-item", "", "href", "/dashboard"], ["mat-list-item", "", 3, "click"], [1, "lastlink"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["id", "center", 1, "center"], ["id", "right", 1, "right"], ["src", "../../../assets/header/bellIcon.png", "alt", "menubutton", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["src", "../../../assets/header/menuIcon.png", "alt", "menuButton"], ["src", "../../../assets/header/bellIcon.png", "alt", "menubutton"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MENU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HOE VOEL JE JE?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "OVERZICHT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
            return ctx.comingSoon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DOELEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_28_listener() {
            return ctx.comingSoon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ACTIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_33_listener() {
            return ctx.comingSoon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "GEGEVENS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_button_37_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HeaderComponent_img_41_Template, 1, 0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "over")("opened", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideMenu);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: [".content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n  justify-content: space-between;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-top: 7%;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  margin-right: 5%;\r\n  margin-top: 10%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin-top: 20%;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  line-height: 1.2;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  background-color: tomato;\r\n\r\n  z-index: 200;\r\n  position: absolute;\r\n}\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  left: 0px;\r\n}\r\n\r\n.menuTitle[_ngcontent-%COMP%] {\r\n  border-bottom: solid 1px rgb(112,112,112,0.22);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding-left: 41px;\r\n  margin-top: 40px;\r\n  padding-bottom: 20px;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 50px;\r\n  margin: auto;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n background-color: rgba(255, 255, 255, 0);\r\n border-style: none;\r\n width: 25px ;\r\n margin: 16px 45px 10px 0px;\r\n\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]:focus {\r\n  outline:none;\r\n  border: none;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: solid 1px rgb(112,112,112,0.22);\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n  padding-left: 25px;\r\n  font-weight: 600;\r\n\r\n\r\n}\r\n\r\n.lastlink[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n  padding-left: 25px;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n#arrowRight[_ngcontent-%COMP%]{\r\n  width: 11px;\r\n  height: 16px;\r\n  margin: 12px 58px 10px 0px;\r\n  color: #403D46;\r\n\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\n.mat-drawer-content[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .snackbar{\r\n  background-color: white;  \r\n}\r\n\r\n  .mat-simple-snackbar{\r\n  text-transform: capitalize;\r\n  font-family: \"poppins\";\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #403D46;\r\n}\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n  width: auto !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto auto 26% auto !important;\r\n  border-radius: 18px !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3Qjs7RUFFeEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7O0FBRWxCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWiwwQkFBMEI7O0FBRTNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFJQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7O0FBR2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsY0FBYzs7QUFFaEI7O0FBSUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyw4QkFBOEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYmFja2dyb3VuZCB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59ICovXHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcblxyXG4gIHotaW5kZXg6IDIwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5tZW51VGl0bGUge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoMTEyLDExMiwxMTIsMC4yMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDQxcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuXHJcbiNsb2dve1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiB3aWR0aDogMjVweCA7XHJcbiBtYXJnaW46IDE2cHggNDVweCAxMHB4IDBweDtcclxuXHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4ubGlua3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYigxMTIsMTEyLDExMiwwLjIyKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcblxyXG59XHJcblxyXG4ubGFzdGxpbmt7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuI2Fycm93UmlnaHR7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMTJweCA1OHB4IDEwcHggMHB4O1xyXG4gIGNvbG9yOiAjNDAzRDQ2O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuc25hY2tiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2ltcGxlLXNuYWNrYmFye1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQwM0Q0NjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWhhbmRzZXQgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMjYlIGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/token-storage-service.service */
    "./src/app/services/token-storage-service.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, authService, tokenStorage, snackbar) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.snackbar = snackbar;
        this.isLoggedIn = false;
        this.loginInvalid = false;
        this.errorMessage = '';
        this.roles = [];
        this.hide = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.authService.isAuthenticated());
          this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          var doc = document.getElementById('html');
          doc.style.backgroundImage = "url(./assets/header/headerbackground.png)";
          console.log(doc); // doc.style.backgroundImage =  "url(./assets/header/headerbackground.png);"
        }
      }, {
        key: "showSnackBar",
        value: function showSnackBar(message) {
          this.snackbar.open(message, "", {
            duration: 1000,
            panelClass: "snackbar"
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          console.log("username: ", this.form.value.username);
          console.log("password: ", this.form.value.password);
          this.authService.login(this.form.value).toPromise().then(function (data) {
            _this11.tokenStorage.saveToken(data.accessToken);

            console.log(data);

            _this11.tokenStorage.saveUser(data);

            _this11.router.navigateByUrl('/dashboard'); // this.isSuccessful = true;
            // this.isSignUpFailed = false;

          }, function (err) {
            _this11.showSnackBar("De ingevoerde gegevens zijn ongeldig!");
          }); // this.authenticationService.login(this.f.username.value, this.f.password.value)
          //   .pipe(first())
          //   .subscribe(
          //     data => {
          //       this.router.navigate([this.returnUrl]);
          //     },
          //     error => {
          //       this.alertService.error(error);
          //       this.loading = false;
          //     });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 35,
      vars: 5,
      consts: [[3, "title", "hideMenu"], [1, "login"], [1, "loginForm"], [3, "formGroup", "ngSubmit"], [1, "label"], ["for", "username"], [1, "requieredStar"], [1, "form-group"], ["floatLabel", "never", 1, "full-width-input"], ["placeholder", "Jouw gebruikersnaam", "matInput", "", "type", "text", "name", "username", "formControlName", "username", "required", "", 1, "form-control"], ["for", "password"], [1, "inputWrapper"], ["matInput", "", "placeholder", "Wachtwoord", "formControlName", "password", "required", "", 1, "form-control", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 1, "iconBtn", 3, "click"], ["type", "submit", "id", "loginBtn", "mat-raised-button", ""], [1, "register"], [1, "registerLabel"], ["routerLink", "/register", 1, "btn", "btn-link"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gebruikersnaam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Vul een gebruikersnaam in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wachtwoord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " vul een wachtwoord in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inloggen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Heb je nog geen account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Meld je aan!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Inloggen")("hideMenu", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", !ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off_outline" : "visibility_outline");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".login[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 15vh;\r\n}\r\n\r\n.loginForm[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 18px;\r\n    padding: 4% 5% 5% 5%;\r\n    width: 80vw;\r\n    height: 4vh;\r\n    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]{\r\n    margin-top: -5%;\r\n    width: 100%;\r\n    font-size: 12px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%]{\r\n    font-size: 20px !important;\r\n}\r\n\r\n.label[_ngcontent-%COMP%]{\r\n    margin-right: 10%;\r\n    width: 100%;\r\n    font-size: 12px;\r\n}\r\n\r\n  .mat-placeholder-required{\r\n    color: white;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-ripple{\r\n    color: violet !important;\r\n    background-color: #B8B8BB;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label{\r\n    color: #DBDCE1 !important;\r\n    \r\n}\r\n\r\n  .mat-form-field-ripple{\r\n    color: black !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    caret-color:#67BCD9 !important;\r\n  }\r\n\r\n.requieredStar[_ngcontent-%COMP%]{\r\n    color: #67BCD9\r\n}\r\n\r\n#loginBtn[_ngcontent-%COMP%]{\r\n    border-radius: 18px;\r\n    width: 70%;\r\n    height: 7vh;\r\n    margin: auto 15% ;\r\n    background-color: #67BCD9;\r\n    color: white;\r\n    font-size: 16px ;\r\n    font-weight: 500;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: 15% 13%;\r\n    justify-content: space-between;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #67BCD9;\r\n    -webkit-text-decoration-color: #67BCD9;\r\n            text-decoration-color: #67BCD9;\r\n}\r\n\r\n.registerLabel[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    color: #707070;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n    font-family: 'Material Icons Outlined', 'Material Icons';\r\n    color: #A3A6B1;\r\n}\r\n\r\n  .snackbar{\r\n    background-color: white;  \r\n  }\r\n\r\n  .mat-simple-snackbar{\r\n    text-transform: capitalize;\r\n    font-family: \"poppins\";\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #403D46;\r\n  }\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n    width: auto !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: auto auto 26% auto !important;\r\n    border-radius: 18px !important;\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsV0FBVztJQUNYLDhDQUE4QztJQUM5QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFHQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHdEQUF3RDtJQUN4RCxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsOEJBQThCOztFQUVoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcclxufVxyXG5cclxuLmxvZ2luRm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIHBhZGRpbmc6IDQlIDUlIDUlIDUlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDR2aDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5sYWJlbHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXBsYWNlaG9sZGVyLXJlcXVpcmVke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xyXG4gICAgY29sb3I6IHZpb2xldCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4QjhCQjtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgY29sb3I6ICNEQkRDRTEgIWltcG9ydGFudDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNCOEI4QkI7ICovXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxle1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5pbnB1dCB7XHJcbiAgICBjYXJldC1jb2xvcjojNjdCQ0Q5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnJlcXVpZXJlZFN0YXJ7XHJcbiAgICBjb2xvcjogIzY3QkNEOVxyXG59XHJcblxyXG4jbG9naW5CdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgbWFyZ2luOiBhdXRvIDE1JSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdCQ0Q5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4IDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yZWdpc3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDE1JSAxMyU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5he1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2N0JDRDk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM2N0JDRDk7XHJcbn1cclxuXHJcblxyXG4ucmVnaXN0ZXJMYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnLCAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgY29sb3I6ICNBM0E2QjE7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLnNuYWNrYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtc2ltcGxlLXNuYWNrYmFye1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LWZhbWlseTogXCJwb3BwaW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0MDNENDY7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1oYW5kc2V0IC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMjYlIGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggIWltcG9ydGFudDtcclxuICBcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: src_app_services_token_storage_service_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/onboarding/onboarding1/onboarding1.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/onboarding/onboarding1/onboarding1.component.ts ***!
    \****************************************************************************/

  /*! exports provided: Onboarding1Component */

  /***/
  function srcAppComponentsOnboardingOnboarding1Onboarding1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Onboarding1Component", function () {
      return Onboarding1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var Onboarding1Component = /*#__PURE__*/function () {
      function Onboarding1Component(router) {
        _classCallCheck(this, Onboarding1Component);

        this.router = router;
      }

      _createClass(Onboarding1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "hidden";
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigateByUrl('dashboard');
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          this.router.navigateByUrl('onboarding/2');
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          this.router.navigateByUrl('onboarding');
        }
      }]);

      return Onboarding1Component;
    }();

    Onboarding1Component.ɵfac = function Onboarding1Component_Factory(t) {
      return new (t || Onboarding1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    Onboarding1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Onboarding1Component,
      selectors: [["app-onboarding1"]],
      decls: 31,
      vars: 0,
      consts: [[1, "cloud"], ["src", "../../../../assets/onboarding/cloud2.png"], [1, "cloud2"], ["src", "../../../../assets/onboarding/cloud.png"], [1, "cloud3"], [1, "page"], [1, "skip"], [1, "skipbutton", 3, "click"], [1, "content"], [1, "square"], ["src", "../../../../assets/onboarding/square.png"], [1, "bottom-bar"], [1, "prev"], ["mat-fab", "", 1, "prevButton", 3, "click"], ["src", "../../../assets/icons/prev.png"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"]],
      template: function Onboarding1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding1Component_Template_button_click_9_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SKIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Houd elke dag ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "je mentale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " gezondheid bij.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding1Component_Template_button_click_22_listener() {
            return ctx.prevpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vorige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding1Component_Template_button_click_27_listener() {
            return ctx.nextpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Volgende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n    background-color:#E8F4EE; \r\n    height: 110%;  \r\n    \r\n}\r\n\r\n\r\n.cloud[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 1%;\r\n  margin-left: -22%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n\r\n.cloud2[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 78%;\r\n  margin-left: 43%;\r\n  transform: scale(0.9);\r\n}\r\n\r\n\r\n.cloud3[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: fixed;\r\n  bottom: -13%;\r\n  left: -27%;\r\n}\r\n\r\n\r\n.page[_ngcontent-%COMP%]{\r\n  z-index: 2;\r\n  position: relative;\r\n  display: grid;\r\n    grid-template-rows: 15vh auto 25vh;\r\n    height: 90%;\r\n}\r\n\r\n\r\n.skip[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n\r\n.skipbutton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 18px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 550;\r\n    color: #403D46;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 4% 1% 4%;\r\n    margin-top: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n.bottom-bar[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: space-between;\r\n    margin: auto 7% 2% 7%;\r\n    }\r\n\r\n\r\n.prev[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;   \r\n    font-size: 13px;\r\n    margin: auto;\r\n\r\n  }\r\n\r\n\r\n.prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n   }\r\n\r\n\r\n.prevButton[_ngcontent-%COMP%]{\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 51px;\r\n    height: 51px;\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n\r\n  .prevButton .mat-button-wrapper{\r\n  padding: 13px 5px 0 0px !important;\r\n  \r\n}\r\n\r\n\r\n.next[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    grid-row-start: 1;\r\n    grid-row-end: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 13px;\r\n  }\r\n\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n  }\r\n\r\n\r\n.nextButton[_ngcontent-%COMP%]{\r\n    background-color: #66BA8B;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 51px;\r\n    height: 51px;\r\n  }\r\n\r\n\r\n  .nextButton .mat-button-wrapper{\r\n    padding: 13px 0 0 4px !important;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmcxL29uYm9hcmRpbmcxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTs7QUFFaEI7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7SUFDWCxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQjs7O0FBRUY7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZOztFQUVkOzs7QUFFQTtJQUNFLFlBQVk7R0FDYjs7O0FBRUQ7SUFDRSx5QkFBeUI7SUFDekIsK0NBQStDO0lBQy9DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7OztBQUVGO0VBQ0Usa0NBQWtDOztBQUVwQzs7O0FBRUU7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsWUFBWTtFQUNkOzs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtFQUNkOzs7QUFDQTtJQUNFLGdDQUFnQzs7RUFFbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29uYm9hcmRpbmcvb25ib2FyZGluZzEvb25ib2FyZGluZzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFOEY0RUU7IFxyXG4gICAgaGVpZ2h0OiAxMTAlOyAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5jbG91ZHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tbGVmdDogLTIyJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbn1cclxuXHJcbi5jbG91ZDJ7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNzglO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4uY2xvdWQze1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTEzJTtcclxuICBsZWZ0OiAtMjclO1xyXG59XHJcblxyXG5cclxuLnBhZ2V7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCBhdXRvIDI1dmg7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnNraXB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNraXBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgY29sb3I6ICM0MDNENDY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIHBhZGRpbmc6IDElIDQlIDElIDQlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IGgxe1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5ib3R0b20tYmFye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogYXV0byA3JSAyJSA3JTtcclxuICAgIH1cclxuICBcclxuICAucHJldntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgIFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB9XHJcblxyXG4gIC5wcmV2IHB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgIH1cclxuXHJcbiAgLnByZXZCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTFweDtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAucHJldkJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDEzcHggNXB4IDAgMHB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuXHJcbiAgLm5leHR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIC5uZXh0IHB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXh0QnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2QkE4QjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUxcHg7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubmV4dEJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgcGFkZGluZzogMTNweCAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('shrinkOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Onboarding1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onboarding1',
          templateUrl: './onboarding1.component.html',
          styleUrls: ['./onboarding1.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('shrinkOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/onboarding/onboarding2/onboarding2.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/onboarding/onboarding2/onboarding2.component.ts ***!
    \****************************************************************************/

  /*! exports provided: Onboarding2Component */

  /***/
  function srcAppComponentsOnboardingOnboarding2Onboarding2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Onboarding2Component", function () {
      return Onboarding2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var Onboarding2Component = /*#__PURE__*/function () {
      function Onboarding2Component(router) {
        _classCallCheck(this, Onboarding2Component);

        this.router = router;
      }

      _createClass(Onboarding2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "hidden";
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigateByUrl('dashboard');
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          this.router.navigateByUrl('onboarding/3');
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          this.router.navigateByUrl('onboarding/1');
        }
      }]);

      return Onboarding2Component;
    }();

    Onboarding2Component.ɵfac = function Onboarding2Component_Factory(t) {
      return new (t || Onboarding2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    Onboarding2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Onboarding2Component,
      selectors: [["app-onboarding2"]],
      decls: 30,
      vars: 0,
      consts: [[1, "onboardingBody"], [1, "cloud1"], ["src", "../../../../assets/onboarding/cloud2.png"], [1, "cloud2"], ["src", "../../../../assets/onboarding/cloud.png"], [1, "cloud3"], [1, "page"], [1, "skip"], [1, "circle"], ["src", "../../../../assets/onboarding/circle.png"], [1, "button"], [1, "skipbutton", 3, "click"], [1, "content"], [1, "bottom-bar"], [1, "prev"], ["mat-fab", "", 1, "prevButton", 3, "click"], ["src", "../../../assets/icons/prev.png"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"]],
      template: function Onboarding2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding2Component_Template_button_click_12_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SKIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Word bewust van je ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " eigen emoties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding2Component_Template_button_click_21_listener() {
            return ctx.prevpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vorige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding2Component_Template_button_click_26_listener() {
            return ctx.nextpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Volgende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".onboardingBody[_ngcontent-%COMP%]{\r\n    background-color:#FDF4E3;\r\n    overflow-y: hidden;\r\n    height: 110%;\r\n}\r\n\r\n\r\n\r\n\r\n.cloud1[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 10%;\r\n  margin-left: 30%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n\r\n\r\n\r\n.cloud2[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 120%;\r\n  margin-left: -20%;\r\n}\r\n\r\n\r\n\r\n\r\n.cloud3[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 160%;\r\n  margin-left: 50%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n\r\n\r\n\r\n.page[_ngcontent-%COMP%]{\r\n  z-index: 2;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: 15vh auto 25vh;\r\n  height: 90%;\r\n}\r\n\r\n\r\n\r\n\r\n.skip[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-align: right;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.circle[_ngcontent-%COMP%]{\r\n    margin-left: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    margin-right: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n.skipbutton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 18px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 550;\r\n    color: #403D46;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20); \r\n    margin: auto;\r\n    width: 135%;\r\n    height: 33%;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n\r\n\r\n.bottom-bar[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  justify-content: space-between;\r\n  margin: auto 7% 2% 7%;\r\n}\r\n\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;   \r\n  font-size: 13px;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n }\r\n\r\n\r\n\r\n\r\n.prevButton[_ngcontent-%COMP%]{\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n  .prevButton .mat-button-wrapper{\r\n  padding: 13px 5px 0 0px !important;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n.next[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-column-start: 2;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n\r\n.nextButton[_ngcontent-%COMP%]{\r\n    background-color: #F8CB75;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 51px;\r\n    height: 51px;\r\n  }\r\n\r\n\r\n\r\n\r\n  .nextButton .mat-button-wrapper{\r\n    padding: 13px 0 0 4px !important;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmcyL29uYm9hcmRpbmcyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7Ozs7O0FBS0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOzs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COzs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7Ozs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7Ozs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjs7O0FBR3JCOzs7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7Ozs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwrQ0FBK0M7SUFDL0MsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXOztBQUVmOzs7OztBQUVBO0VBQ0UsYUFBYTtJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7Ozs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7Ozs7O0FBRUE7RUFDRSxZQUFZO0NBQ2I7Ozs7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsK0NBQStDO0VBQy9DLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7Ozs7O0FBRUE7RUFDRSxrQ0FBa0M7O0FBRXBDOzs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOzs7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7OztBQUVFO0lBQ0UseUJBQXlCO0lBQ3pCLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7Ozs7O0FBQ0E7SUFDRSxnQ0FBZ0M7O0VBRWxDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmcyL29uYm9hcmRpbmcyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25ib2FyZGluZ0JvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGREY0RTM7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jbG91ZDF7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG59XHJcblxyXG4uY2xvdWQye1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDEyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMCU7XHJcbn1cclxuXHJcbi5jbG91ZDN7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTYwJTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggYXV0byAyNXZoO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uc2tpcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcblxyXG59XHJcblxyXG4uY2lyY2xle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5za2lwYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIGNvbG9yOiAjNDAzRDQ2O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEzNSU7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRlbnQgaDF7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmJvdHRvbS1iYXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiBhdXRvIDclIDIlIDclO1xyXG59XHJcblxyXG4ucHJldntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbi5wcmV2IHB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gfVxyXG5cclxuLnByZXZCdXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wcmV2QnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMTNweCA1cHggMCAwcHggIWltcG9ydGFudDtcclxuICBcclxufVxyXG5cclxuLm5leHR7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm5leHQgcHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuICBcclxuICAubmV4dEJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOENCNzU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5leHRCdXR0b24gLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDEzcHggMCAwIDRweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Onboarding2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onboarding2',
          templateUrl: './onboarding2.component.html',
          styleUrls: ['./onboarding2.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/onboarding/onboarding3/onboarding3.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/onboarding/onboarding3/onboarding3.component.ts ***!
    \****************************************************************************/

  /*! exports provided: Onboarding3Component */

  /***/
  function srcAppComponentsOnboardingOnboarding3Onboarding3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Onboarding3Component", function () {
      return Onboarding3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var Onboarding3Component = /*#__PURE__*/function () {
      function Onboarding3Component(router) {
        _classCallCheck(this, Onboarding3Component);

        this.router = router;
      }

      _createClass(Onboarding3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "hidden";
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigateByUrl('dashboard');
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          this.router.navigateByUrl('onboarding/4');
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          this.router.navigateByUrl('onboarding/2');
        }
      }]);

      return Onboarding3Component;
    }();

    Onboarding3Component.ɵfac = function Onboarding3Component_Factory(t) {
      return new (t || Onboarding3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    Onboarding3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Onboarding3Component,
      selectors: [["app-onboarding3"]],
      decls: 29,
      vars: 0,
      consts: [[1, "cloud"], ["src", "../../../../assets/onboarding/cloud2.png"], [1, "cloud2"], [1, "cloud3"], [1, "page"], [1, "skip"], [1, "skipbutton", 3, "click"], [1, "content"], [1, "pentagon"], ["src", "../../../../assets/onboarding/pentagon.png"], [1, "bottom-bar"], [1, "prev"], ["mat-fab", "", 1, "prevButton", 3, "click"], ["src", "../../../assets/icons/prev.png"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"]],
      template: function Onboarding3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding3Component_Template_button_click_9_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SKIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Stel doelen voor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " jezelf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding3Component_Template_button_click_20_listener() {
            return ctx.prevpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Vorige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding3Component_Template_button_click_25_listener() {
            return ctx.nextpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Volgende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #fbe2e4;\r\n  height: 110%;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 15%;\r\n  margin-left: -30%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n.cloud2[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 110%;\r\n  margin-left: 50%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n.cloud3[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 152%;\r\n  margin-left: -5%;\r\n  transform: scale(0.7);\r\n}\r\n\r\n.page[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: 15vh auto 16vh;\r\n  height: 90%;\r\n}\r\n\r\n.skip[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.skipbutton[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: none;\r\n  border-radius: 18px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 550;\r\n  color: #403d46;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  padding: 1% 4% 1% 4%;\r\n  margin-top: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: auto auto 22vh auto;\r\n}\r\n\r\n.pentagon[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  margin-left: 42%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n}\r\n\r\n.bottom-bar[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  margin: auto 7% 2% 7%;\r\n}\r\n\r\n.prev[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 13px;\r\n  margin: auto;\r\n}\r\n\r\n.prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n  margin: auto;\r\n}\r\n\r\n.prevButton[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n  .prevButton .mat-button-wrapper {\r\n  padding: 13px 5px 0 0px !important;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-column-start: 2;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 13px;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n\r\n}\r\n\r\n.nextButton[_ngcontent-%COMP%] {\r\n  background-color: #e35663;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n}\r\n\r\n  .nextButton .mat-button-wrapper {\r\n  padding: 13px 0 0 4px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmczL29uYm9hcmRpbmczLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw4Q0FBOEM7RUFDOUMsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOENBQThDO0VBQzlDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nMy9vbmJvYXJkaW5nMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZTJlNDtcclxuICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuXHJcbi5jbG91ZCB7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxufVxyXG5cclxuLmNsb3VkMiB7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTEwJTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxufVxyXG5cclxuLmNsb3VkMyB7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTUyJTtcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIGF1dG8gMTZ2aDtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnNraXAge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5za2lwYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgY29sb3I6ICM0MDNkNDY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAxJSA0JSAxJSA0JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvIDIydmggYXV0bztcclxufVxyXG5cclxuLnBlbnRhZ29uIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDIlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudCBoMSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmJvdHRvbS1iYXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogYXV0byA3JSAyJSA3JTtcclxufVxyXG5cclxuLnByZXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJldiBwIHtcclxuXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJldkJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgaGVpZ2h0OiA1MXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnByZXZCdXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTNweCA1cHggMCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5leHQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5uZXh0IHAge1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbi5uZXh0QnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1NjYzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNTFweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5uZXh0QnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEzcHggMCAwIDRweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Onboarding3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onboarding3',
          templateUrl: './onboarding3.component.html',
          styleUrls: ['./onboarding3.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/onboarding/onboarding4/onboarding4.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/onboarding/onboarding4/onboarding4.component.ts ***!
    \****************************************************************************/

  /*! exports provided: Onboarding4Component */

  /***/
  function srcAppComponentsOnboardingOnboarding4Onboarding4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Onboarding4Component", function () {
      return Onboarding4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var Onboarding4Component = /*#__PURE__*/function () {
      function Onboarding4Component(router, snackbar) {
        _classCallCheck(this, Onboarding4Component);

        this.router = router;
        this.snackbar = snackbar;
      }

      _createClass(Onboarding4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "hidden";
        }
      }, {
        key: "showInfo",
        value: function showInfo() {
          this.snackbar.open("Coming soon", "", {
            duration: 1000,
            panelClass: "snackbar"
          });
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigateByUrl('dashboard');
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          this.router.navigateByUrl('dashboard');
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          this.router.navigateByUrl('onboarding/3');
        }
      }]);

      return Onboarding4Component;
    }();

    Onboarding4Component.ɵfac = function Onboarding4Component_Factory(t) {
      return new (t || Onboarding4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    Onboarding4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Onboarding4Component,
      selectors: [["app-onboarding4"]],
      decls: 31,
      vars: 0,
      consts: [[1, "cloud"], ["src", "../../../../assets/onboarding/cloud2.png"], [1, "cloud2"], [1, "cloud3"], [1, "page"], [1, "skip"], [1, "skipbutton", 3, "click"], [1, "content"], ["mat-fab", "", 1, "info", 3, "click"], [1, "bottom-bar"], [1, "prev"], ["mat-fab", "", 1, "prevButton", 3, "click"], ["src", "../../../assets/icons/prev.png"], [1, "next"], ["mat-fab", "", 1, "nextButton", 3, "click"], ["src", "../../../assets/icons/next.png"]],
      template: function Onboarding4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding4Component_Template_button_click_9_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SKIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Jouw gegevens zijn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " priv\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding4Component_Template_button_click_16_listener() {
            return ctx.showInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Meer informatie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding4Component_Template_button_click_22_listener() {
            return ctx.prevpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vorige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Onboarding4Component_Template_button_click_27_listener() {
            return ctx.nextpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Volgende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: ["body[_ngcontent-%COMP%]{\r\n    background-color:#FCEEE6;\r\n    height: 110%;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 15%;\r\n  margin-left: -30%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n.cloud2[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 40%;\r\n  margin-left: 50%;\r\n  transform: scale(0.5);\r\n}\r\n\r\n.cloud3[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  margin-top: 152%;\r\n  margin-left: -5%;\r\n  transform: scale(0.7);\r\n}\r\n\r\n.page[_ngcontent-%COMP%]{\r\n  z-index: 2;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: 15vh auto 25vh;\r\n  height: 90%;\r\n}\r\n\r\n.skip[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.skipbutton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: none;\r\n    border-radius: 18px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 550;\r\n    color: #403D46;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    padding: 1% 4% 1% 4%;\r\n    margin-top: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-bottom: 25%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n    background-color: #EE7A39;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n    width: 43px;\r\n    height: 43px;\r\n}\r\n\r\n  .info .mat-button-wrapper{\r\n  padding: 10px 0 0 0 !important;\r\n  \r\n}\r\n\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    margin: auto;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  line-height: 1.2;\r\n}\r\n\r\n.bottom-bar[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  justify-content: space-between;\r\n  margin: auto 7% 2% 7%;\r\n}\r\n\r\n.prev[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;   \r\n  font-size: 13px;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.prev[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n }\r\n\r\n.prevButton[_ngcontent-%COMP%]{\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n  .prevButton .mat-button-wrapper{\r\n  padding: 13px 5px 0 0px !important;\r\n  \r\n}\r\n\r\n.next[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-column-start: 2;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 13px;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n}\r\n\r\n.nextButton[_ngcontent-%COMP%]{\r\n  background-color: #EE7A39;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.20);\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 51px;\r\n  height: 51px;\r\n  }\r\n\r\n  .nextButton .mat-button-wrapper{\r\n    padding: 13px 0 0 4px !important;\r\n    \r\n  }\r\n\r\n  .snackbar{\r\n  background-color: white;  \r\n}\r\n\r\n  .mat-simple-snackbar{\r\n  text-transform: capitalize;\r\n  font-family: \"poppins\";\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #403D46;\r\n}\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n  width: auto !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto auto 26% auto !important;\r\n  border-radius: 18px !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL29uYm9hcmRpbmc0L29uYm9hcmRpbmc0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtFQUNFLDhCQUE4Qjs7QUFFaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsK0NBQStDO0VBQy9DLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7O0FBRXBDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLCtDQUErQztFQUMvQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O0FBRUY7SUFDSSxnQ0FBZ0M7O0VBRWxDOztBQUtGO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsOEJBQThCOztBQUVoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb25ib2FyZGluZy9vbmJvYXJkaW5nNC9vbmJvYXJkaW5nNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZDRUVFNjtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG5cclxuLmNsb3Vke1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogLTMwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbn1cclxuXHJcbi5jbG91ZDJ7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG59XHJcblxyXG4uY2xvdWQze1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1MiU7XHJcbiAgbWFyZ2luLWxlZnQ6IC01JTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbn1cclxuXHJcbi5wYWdle1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIGF1dG8gMjV2aDtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnNraXB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc2tpcGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICBjb2xvcjogIzQwM0Q0NjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gICAgcGFkZGluZzogMSUgNCUgMSUgNCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjUlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmluZm97XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUU3QTM5O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIHdpZHRoOiA0M3B4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcbjo6bmctZGVlcCAuaW5mbyAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDAgIWltcG9ydGFudDtcclxuICBcclxufVxyXG4uY29udGVudCBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQgaDF7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmJvdHRvbS1iYXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiBhdXRvIDclIDIlIDclO1xyXG59XHJcblxyXG4ucHJldntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbi5wcmV2IHB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gfVxyXG5cclxuLnByZXZCdXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wcmV2QnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMTNweCA1cHggMCAwcHggIWltcG9ydGFudDtcclxuICBcclxufVxyXG4ubmV4dHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubmV4dCBwe1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4gIFxyXG4ubmV4dEJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUU3QTM5O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbiAgaGVpZ2h0OiA1MXB4O1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubmV4dEJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgcGFkZGluZzogMTNweCAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbjo6bmctZGVlcCAuc25hY2tiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2ltcGxlLXNuYWNrYmFye1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzQwM0Q0NjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWhhbmRzZXQgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMjYlIGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Onboarding4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onboarding4',
          templateUrl: './onboarding4.component.html',
          styleUrls: ['./onboarding4.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/onboarding/start/start.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/onboarding/start/start.component.ts ***!
    \****************************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppComponentsOnboardingStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(router) {
        _classCallCheck(this, StartComponent);

        this.router = router;
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setbg();
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          this.router.navigateByUrl('onboarding/1');
        }
      }, {
        key: "setbg",
        value: function setbg() {
          var doc = document.getElementById('html');
          doc.style.backgroundImage = "none";
          doc.style.overflowY = "hidden";
          var header = document.getElementById("headercontent");
          header.style.backgroundImage = "url('../../../assets/onboarding/header.png')";
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 11,
      vars: 0,
      consts: [["id", "headercontent", 1, "headercontent"], [1, "welcome"], [3, "click"], [1, "content"], [1, "logo"], ["src", "../../../../assets/onboarding/cloud.png", 1, "cloud"], ["src", "../../../../assets/onboarding/start_logo_big.png", 1, "cross"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welkom bij Health-Thing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_button_click_3_listener() {
            return ctx.nextpage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "START");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Met het dagelijks invoeren van jouw mentale gezondheid! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\r\n  z-index: -10;\r\n  position: absolute;\r\n}\r\n\r\n.headercontent[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  background-repeat: no-repeat;\r\n  background-position: top;\r\n  position: fixed;\r\n  top: 0%;\r\n  bottom: 52%;\r\n  width: 100%;\r\n  height: 110%;\r\n  background-size: 100% 50%;\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n  color: white;\r\n  position: absolute;\r\n  top: 12%;\r\n  margin: 0px 20%;\r\n  font-family: \"poppins\";\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: #403D46;\r\n  line-height: 1.2;\r\n}\r\n\r\n.headercontent[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: 0 35%;\r\n  top: 25%;\r\n  position: absolute;\r\n\r\n}\r\n\r\n.headercontent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: white;\r\n  position: absolute;\r\n  top: 32%;\r\n  left: 20%;\r\n  padding-right: 15%;\r\n  width: 64vw;\r\n  line-height: 1.2;\r\n  font-weight: 500;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #498598;\r\n  border: none;\r\n  border-radius: 24px;\r\n  color: white;\r\n  font-family: \"poppins\";\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  padding: 2.5% 7% 2.5% 7%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 25vh);\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  grid-row-start: 3;\r\n  grid-row-end: 5;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.cross[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n}\r\n\r\n.cloud[_ngcontent-%COMP%] {\r\n  z-index: -1;\r\n  position: absolute;\r\n  margin: -25% 0% 0% -50%;\r\n  transform: scale(0.6);\r\n}\r\n\r\n.health[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n  margin-bottom: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmJvYXJkaW5nL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsUUFBUTtFQUNSLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhDQUE4QztFQUM5Qyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29uYm9hcmRpbmcvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oZWFkZXJjb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwJTtcclxuICBib3R0b206IDUyJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMiU7XHJcbiAgbWFyZ2luOiAwcHggMjAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzQwM0Q0NjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uaGVhZGVyY29udGVudCBidXR0b24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiAwIDM1JTtcclxuICB0b3A6IDI1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyY29udGVudCBwIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzIlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgd2lkdGg6IDY0dnc7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTg1OTg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAyLjUlIDclIDIuNSUgNyU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDI1dmgpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uY3Jvc3Mge1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uY2xvdWQge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IC0yNSUgMCUgMCUgLTUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbn1cclxuXHJcbi5oZWFsdGgge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './start.component.html',
          styleUrls: ['./start.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, router, authService, snackbar) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.snackbar = snackbar;
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.hide = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var doc = document.getElementById('html');
          doc.style.overflowY = "scroll";
          this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "showSnackBar",
        value: function showSnackBar(message) {
          this.snackbar.open(message, "", {
            duration: 1000,
            panelClass: "snackbar"
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          console.log("name: ", this.form.value.name);
          console.log("username: ", this.form.value.username);
          console.log("password: ", this.form.value.password);
          console.log("email: ", this.form.value.email);
          console.log("dob: ", this.form.value.dob);
          this.form.value.name = this.form.value.name.charAt(0).toUpperCase() + this.form.value.name.slice(1);
          this.authService.register(this.form.value).toPromise().then(function (data) {
            _this12.isSuccessful = true;
            _this12.isSignUpFailed = false;

            _this12.router.navigateByUrl('/login');
          }, function (err) {
            _this12.showSnackBar("De ingevoerde gegevens zijn incorrect");

            _this12.errorMessage = err.error.message;
            _this12.isSignUpFailed = true;
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 64,
      vars: 5,
      consts: [[3, "title", "hideMenu"], [1, "title"], [1, "a"], [1, "b"], [1, "login"], [1, "loginForm"], [3, "formGroup"], [1, "form-group"], [1, "label"], ["for", "name"], ["floatLabel", "never", 1, "full-width-input"], ["placeholder", "Jouw naam", "matInput", "", "type", "text", "name", "name", "formControlName", "name", "required", "", 1, "form-control"], ["for", "username"], ["placeholder", "Jouw gebruikersnaam", "matInput", "", "type", "text", "name", "username", "formControlName", "username", "required", "", 1, "form-control"], ["placeholder", "voorbeeld@gmail.com", "matInput", "", "type", "email", "name", "email", "formControlName", "email", "required", "", 1, "form-control"], ["placeholder", "01-01-1998", "matInput", "", "type", "date", "name", "dob", "formControlName", "dob", "required", "", 1, "form-control"], ["for", "password"], [1, "inputWrapper"], ["matInput", "", "placeholder", "Wachtwoord", "formControlName", "password", "required", "", 1, "form-control", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "iconBtn", 3, "click"], ["type", "submit", "id", "loginBtn", "mat-raised-button", "", 3, "click"], [1, "register"], [1, "registerLabel"], ["routerLink", "/login", 1, "btn", "btn-link"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VUL JOUW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GEGEVENS IN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Naam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Vul een naam in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gebruikersnaam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Vul een gebruikersnaam in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-mail adres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Vul een e-mail adres in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Geboortedatum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Vul een geboortedatum in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Wachtwoord");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_52_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " vul een wachtwoord in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_57_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Aanmelden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Heb je al een account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Log in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Aanmelden")("hideMenu", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", !ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".login[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  border-radius: 18px;\r\n  width: 80vw;\r\n  margin: auto;\r\n  \r\n}\r\n\r\n.loginForm[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n  width: 60vw;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]{\r\n  margin-top: -5%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%]{\r\n  font-size: 20px !important;\r\n}\r\n\r\n.label[_ngcontent-%COMP%]{\r\n  margin-right: 10%;\r\n  width: 100%;\r\n  font-size: 12px;\r\n}\r\n\r\n  .mat-placeholder-required{\r\n  color: white;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-ripple{\r\n  color: violet !important;\r\n  background-color: #B8B8BB;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label{\r\n  color: #DBDCE1 !important;\r\n  \r\n}\r\n\r\n  .mat-form-field-ripple{\r\n  color: black !important;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  caret-color:#67BCD9 !important;\r\n}\r\n\r\n.requieredStar[_ngcontent-%COMP%]{\r\n  color: #67BCD9\r\n}\r\n\r\n#loginBtn[_ngcontent-%COMP%]{\r\n  border-radius: 18px;\r\n  width: 90%;\r\n  height: 6vh;\r\n  margin: auto 15% ;\r\n  background-color: #67BCD9;\r\n  color: white;\r\n  font-size: 16px ;\r\n  font-weight: 500;\r\n  margin-top: 5%;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin: 15% 18%;\r\n  justify-content: space-between;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: #67BCD9;\r\n  -webkit-text-decoration-color: #67BCD9;\r\n          text-decoration-color: #67BCD9;\r\n}\r\n\r\n.registerLabel[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: #707070;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  align-items: center;\r\n  \r\n  font-weight: 700;\r\n  margin: auto;\r\n  margin-top: 10vh;\r\n  margin-bottom: 2%;\r\n  justify-content: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.a[_ngcontent-%COMP%]{\r\n  width: 31vw;\r\n}\r\n\r\n.b[_ngcontent-%COMP%]{\r\n  width: 40vw;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n  font-family: 'Material Icons Outlined', 'Material Icons';\r\n  color: #A3A6B1;\r\n}\r\n\r\n  .snackbar{\r\n  background-color: white;  \r\n}\r\n\r\n  .mat-simple-snackbar{\r\n  text-transform: capitalize;\r\n  font-family: \"poppins\";\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #403D46;\r\n}\r\n\r\n  .mat-snack-bar-handset .mat-snack-bar-container {\r\n  width: auto !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto auto 26% auto !important;\r\n  border-radius: 18px !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNDQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQjt5QkFDdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0Usd0RBQXdEO0VBQ3hELGNBQWM7QUFDaEI7O0FBS0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyw4QkFBOEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAvKiBtYXJnaW4tdG9wOiAyMHZoOyAqL1xyXG59XHJcblxyXG4ubG9naW5Gb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIG1hcmdpbi10b3A6IC01JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG5mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtaWNvbntcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5sYWJlbHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXBsYWNlaG9sZGVyLXJlcXVpcmVke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcclxuICBjb2xvcjogdmlvbGV0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4QjhCQjtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIGNvbG9yOiAjREJEQ0UxICFpbXBvcnRhbnQ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0I4QjhCQjsgKi9cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5pbnB1dCB7XHJcbiAgY2FyZXQtY29sb3I6IzY3QkNEOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVxdWllcmVkU3RhcntcclxuICBjb2xvcjogIzY3QkNEOVxyXG59XHJcblxyXG4jbG9naW5CdG57XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIG1hcmdpbjogYXV0byAxNSUgO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N0JDRDk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbi5yZWdpc3RlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTUlIDE4JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5he1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzY3QkNEOTtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM2N0JDRDk7XHJcbn1cclxuXHJcblxyXG4ucmVnaXN0ZXJMYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBtYXJnaW46IDI1JSAyNSUgMCUgMjUlO1xyXG4gIHBhZGRpbmc6IDAlIDAlIDAlIDAlOyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uYXtcclxuICB3aWR0aDogMzF2dztcclxufVxyXG5cclxuLmJ7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbn1cclxuXHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnLCAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gIGNvbG9yOiAjQTNBNkIxO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLnNuYWNrYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNpbXBsZS1zbmFja2JhcntcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM0MDNENDY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1oYW5kc2V0IC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvIDI2JSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweCAhaW1wb3J0YW50O1xyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interfaces/chipStates.ts":
  /*!******************************************!*\
    !*** ./src/app/interfaces/chipStates.ts ***!
    \******************************************/

  /*! exports provided: chipState */

  /***/
  function srcAppInterfacesChipStatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chipState", function () {
      return chipState;
    });

    var chipState;

    (function (chipState) {
      chipState["NONE"] = "NONE";
      chipState["PRESELECTED"] = "PRESELECTED";
      chipState["SELECTED"] = "SELECTED";
    })(chipState || (chipState = {}));
    /***/

  },

  /***/
  "./src/app/models/emotionEnum.ts":
  /*!***************************************!*\
    !*** ./src/app/models/emotionEnum.ts ***!
    \***************************************/

  /*! exports provided: vreugde, verdriet, angst, boos, verrassing, afschuw */

  /***/
  function srcAppModelsEmotionEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "vreugde", function () {
      return vreugde;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "verdriet", function () {
      return verdriet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "angst", function () {
      return angst;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "boos", function () {
      return boos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "verrassing", function () {
      return verrassing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "afschuw", function () {
      return afschuw;
    });

    var vreugde;

    (function (vreugde) {
      vreugde[vreugde["GELUKKIG-JOY"] = 0] = "GELUKKIG-JOY";
      vreugde[vreugde["ENTHOUSIAST-ENTHOUSIAST"] = 1] = "ENTHOUSIAST-ENTHOUSIAST";
      vreugde[vreugde["TEVREDEN-SATISFIED"] = 2] = "TEVREDEN-SATISFIED";
      vreugde[vreugde["VERLIEFD-IN LOVE"] = 3] = "VERLIEFD-IN LOVE";
      vreugde[vreugde["BLIJ-GLAD"] = 4] = "BLIJ-GLAD";
      vreugde[vreugde["ZELFVERZEKERD-CONFIDENT"] = 5] = "ZELFVERZEKERD-CONFIDENT";
      vreugde[vreugde["ONTSPANNEN-RELAXED"] = 6] = "ONTSPANNEN-RELAXED";
    })(vreugde || (vreugde = {}));

    var verdriet;

    (function (verdriet) {
      verdriet[verdriet["ZWAARMOEDIG-MELANCHOLIC"] = 0] = "ZWAARMOEDIG-MELANCHOLIC";
      verdriet[verdriet["ZELFMEDELIJDEN-SELF PITTY"] = 1] = "ZELFMEDELIJDEN-SELF PITTY";
      verdriet[verdriet["BEDROEFD-SAD"] = 2] = "BEDROEFD-SAD";
      verdriet[verdriet["WANHOPIG-DISPAIR"] = 3] = "WANHOPIG-DISPAIR";
      verdriet[verdriet["EENZAAM-LONELY"] = 4] = "EENZAAM-LONELY";
      verdriet[verdriet["DEPRESSIEF-DEPRESSIVE"] = 5] = "DEPRESSIEF-DEPRESSIVE";
      verdriet[verdriet["ROUWEND-GRIEF"] = 6] = "ROUWEND-GRIEF";
    })(verdriet || (verdriet = {}));

    var angst;

    (function (angst) {
      angst[angst["RUSTELOOS-RESTLESS"] = 0] = "RUSTELOOS-RESTLESS";
      angst[angst["FOBISCH-SCARED"] = 1] = "FOBISCH-SCARED";
      angst[angst["PANIEKERIG-PANIC"] = 2] = "PANIEKERIG-PANIC";
      angst[angst["ZENUWACHTIG-NERVOUS"] = 3] = "ZENUWACHTIG-NERVOUS";
      angst[angst["ONGERUST-WORRIED"] = 4] = "ONGERUST-WORRIED";
      angst[angst["BEZORGD-CONCERNED"] = 5] = "BEZORGD-CONCERNED";
      angst[angst["WANTROUWEND-SUSPICIOUS"] = 6] = "WANTROUWEND-SUSPICIOUS";
    })(angst || (angst = {}));

    var boos;

    (function (boos) {
      boos[boos["VERBOLGEN-ANGRY"] = 0] = "VERBOLGEN-ANGRY";
      boos[boos["ERGEREN-ANNOY"] = 1] = "ERGEREN-ANNOY";
      boos[boos["VERBITTERD-BITTER"] = 2] = "VERBITTERD-BITTER";
      boos[boos["GEIRRITEERD-IRRITATED"] = 3] = "GEIRRITEERD-IRRITATED";
      boos[boos["VIJANDIG-HOSTILE"] = 4] = "VIJANDIG-HOSTILE";
      boos[boos["FURIEUS-FURIOUS"] = 5] = "FURIEUS-FURIOUS";
      boos[boos["VERONTWAARDIGD-OUTRAGED"] = 6] = "VERONTWAARDIGD-OUTRAGED";
    })(boos || (boos = {}));

    var verrassing;

    (function (verrassing) {
      verrassing[verrassing["GECHIQUEERD-CHEATED"] = 0] = "GECHIQUEERD-CHEATED";
      verrassing[verrassing["VERBIJSTERD-BAFFLED"] = 1] = "VERBIJSTERD-BAFFLED";
      verrassing[verrassing["VERWONDERD-AMAZED"] = 2] = "VERWONDERD-AMAZED";
      verrassing[verrassing["OVERROMPELD-SUPRISED"] = 3] = "OVERROMPELD-SUPRISED";
      verrassing[verrassing["ONTSTELT-UPSET"] = 4] = "ONTSTELT-UPSET";
    })(verrassing || (verrassing = {}));

    var afschuw;

    (function (afschuw) {
      afschuw[afschuw["MINACHTEND-DESPICABLE"] = 0] = "MINACHTEND-DESPICABLE";
      afschuw[afschuw["AVERSIE-DISLIKE"] = 1] = "AVERSIE-DISLIKE";
      afschuw[afschuw["WEERZIN-DISGUST"] = 2] = "WEERZIN-DISGUST";
      afschuw[afschuw["ONTZET-HORRIEFIED"] = 3] = "ONTZET-HORRIEFIED";
    })(afschuw || (afschuw = {}));
    /***/

  },

  /***/
  "./src/app/services/anders.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/anders.service.ts ***!
    \********************************************/

  /*! exports provided: AndersService */

  /***/
  function srcAppServicesAndersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AndersService", function () {
      return AndersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/emotion/anders");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AndersService = /*#__PURE__*/function () {
      function AndersService(http) {
        _classCallCheck(this, AndersService);

        this.http = http;
      }

      _createClass(AndersService, [{
        key: "addAndersChipData",
        value: function addAndersChipData(newEmotions) {
          console.log(newEmotions);
          return this.http.post("".concat(API_URL), newEmotions, httpOptions);
        }
      }, {
        key: "getAndersChipData",
        value: function getAndersChipData() {
          return this.http.get(API_URL, httpOptions);
        }
      }, {
        key: "updateAndersChip",
        value: function updateAndersChip(emotionName, newEmotionName) {
          return this.http.put("".concat(API_URL, ":id"), {
            newEmotionName: newEmotionName
          }, httpOptions);
        }
      }, {
        key: "deleteAndersChip",
        value: function deleteAndersChip(emotionName) {
          console.log("delete Service");
          return this.http["delete"]("".concat(API_URL, "/").concat(emotionName), httpOptions);
        }
      }]);

      return AndersService;
    }();

    AndersService.ɵfac = function AndersService_Factory(t) {
      return new (t || AndersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AndersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AndersService,
      factory: AndersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AndersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./token-storage-service.service */
    "./src/app/services/token-storage-service.service.ts");

    var AUTH_API = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/auth/");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, tokenStorageService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.tokenStorageService = tokenStorageService;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(credentials) {
          return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
          }, httpOptions);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password,
            name: user.name,
            dateOfBirth: user.dob
          }, httpOptions);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.tokenStorageService.getToken();

          if (token != null) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _token_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/emotion.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/emotion.service.ts ***!
    \*********************************************/

  /*! exports provided: EmotionService */

  /***/
  function srcAppServicesEmotionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmotionService", function () {
      return EmotionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/emotion/chosenEmotions");
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var EmotionService = /*#__PURE__*/function () {
      function EmotionService(http) {
        _classCallCheck(this, EmotionService);

        this.http = http;
      }

      _createClass(EmotionService, [{
        key: "addNewEmotion",
        value: function addNewEmotion(newEmotionsData) {
          console.log(newEmotionsData);
          return this.http.post("".concat(API_URL), newEmotionsData, httpOptions);
        }
      }]);

      return EmotionService;
    }();

    EmotionService.ɵfac = function EmotionService_Factory(t) {
      return new (t || EmotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EmotionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmotionService,
      factory: EmotionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmotionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/gif-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/gif-service.service.ts ***!
    \*************************************************/

  /*! exports provided: GifServiceService */

  /***/
  function srcAppServicesGifServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GifServiceService", function () {
      return GifServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = 'https://api.tenor.com/v1/search?q=';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var GifServiceService = /*#__PURE__*/function () {
      function GifServiceService(http) {
        _classCallCheck(this, GifServiceService);

        this.http = http;
      }

      _createClass(GifServiceService, [{
        key: "getGifs",
        value: function getGifs(searchTerm) {
          // set the apikey and limit
          var apikey = "EKR1X9BVCG3C";
          var lmt = 8; // test search term

          var search_term = searchTerm; // using default locale of en_US

          var search_url = API_URL + search_term + "&key=" + apikey + "&limit=" + lmt;
          return this.http.get("".concat(search_url));
        }
      }]);

      return GifServiceService;
    }();

    GifServiceService.ɵfac = function GifServiceService_Factory(t) {
      return new (t || GifServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GifServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GifServiceService,
      factory: GifServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GifServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-storage-service.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/token-storage-service.service.ts ***!
    \***********************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppServicesTokenStorageServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          window.sessionStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.sessionStorage.removeItem(TOKEN_KEY);
          window.sessionStorage.setItem(TOKEN_KEY, token); // window.sessionStorage.setItem(uId: )
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(sessionStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: ""
    }; // local: http://localhost:8080

    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\School_projects\Health-Thing_in-emotion\app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map