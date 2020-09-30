function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./componentes/adivina-el-numero/adivina-el-numero.component */
    "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
    /* harmony import */


    var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./componentes/listado-de-resultados/listado-de-resultados.component */
    "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
    /* harmony import */


    var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./componentes/login/login.component */
    "./src/app/componentes/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./servicios/mi-http/mi-http.service */
    "./src/app/servicios/mi-http/mi-http.service.ts");
    /* harmony import */


    var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./servicios/paises.service */
    "./src/app/servicios/paises.service.ts");
    /* harmony import */


    var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./servicios/jugadores.service */
    "./src/app/servicios/jugadores.service.ts");
    /* harmony import */


    var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./servicios/archivos-jugadores.service */
    "./src/app/servicios/archivos-jugadores.service.ts");
    /* harmony import */


    var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./componentes/error/error.component */
    "./src/app/componentes/error/error.component.ts");
    /* harmony import */


    var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./componentes/principal/principal.component */
    "./src/app/componentes/principal/principal.component.ts");
    /* harmony import */


    var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */
    "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
    /* harmony import */


    var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./componentes/menu/menu.component */
    "./src/app/componentes/menu/menu.component.ts");
    /* harmony import */


    var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */
    "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
    /* harmony import */


    var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */
    "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
    /* harmony import */


    var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ruteando/ruteando.module */
    "./src/app/ruteando/ruteando.module.ts");
    /* harmony import */


    var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./componentes/listado/listado.component */
    "./src/app/componentes/listado/listado.component.ts");
    /* harmony import */


    var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./componentes/jugadores-listado/jugadores-listado.component */
    "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
    /* harmony import */


    var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./servicios/juego-service.service */
    "./src/app/servicios/juego-service.service.ts");
    /* harmony import */


    var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./componentes/listados/listados.component */
    "./src/app/componentes/listados/listados.component.ts");
    /* harmony import */


    var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./componentes/juegos/juegos.component */
    "./src/app/componentes/juegos/juegos.component.ts");
    /* harmony import */


    var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./componentes/registro/registro.component */
    "./src/app/componentes/registro/registro.component.ts");
    /* harmony import */


    var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./componentes/menu-card/menu-card.component */
    "./src/app/componentes/menu-card/menu-card.component.ts");
    /* harmony import */


    var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./componentes/cabecera/cabecera.component */
    "./src/app/componentes/cabecera/cabecera.component.ts");
    /* harmony import */


    var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./componentes/quien-soy/quien-soy.component */
    "./src/app/componentes/quien-soy/quien-soy.component.ts");
    /* harmony import */


    var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./componentes/anagrama/anagrama.component */
    "./src/app/componentes/anagrama/anagrama.component.ts");
    /* harmony import */


    var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./componentes/listado-de-paises/listado-de-paises.component */
    "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
    /* harmony import */


    var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./componentes/mapa-de-google/mapa-de-google.component */
    "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./componentes/input-jugadores/input-jugadores.component */
    "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
    /* harmony import */


    var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pipes/sexo.pipe */
    "./src/app/pipes/sexo.pipe.ts");
    /* harmony import */


    var _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./componentes/mijuego/mijuego.component */
    "./src/app/componentes/mijuego/mijuego.component.ts");
    /* harmony import */


    var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./componentes/nav-bar/nav-bar.component */
    "./src/app/componentes/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js"); // declaro donde quiero que se dirija

    /*
    const MiRuteo = [{path: 'error' , component: ErrorComponent},
    {path: 'Login' , component: LoginComponent},
    {path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
    {path: 'Adivina' , component: AdivinaElNumeroComponent},
    {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
    {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
    {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
    {path: '' , component: LoginComponent , pathMatch: 'full'},
    
    {path: '**' , component: ErrorComponent} ];
    */


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
      providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__["JugadoresService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"] // NgbModule.forRoot(MiRuteo),
      // importo el ruteo
      // RouterModule.forRoot(MiRuteo)
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__["AdivinaElNumeroComponent"], _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__["ListadoDeResultadosComponent"], _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"], _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AgilidadAritmeticaComponent"], _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"], _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AgilidadMasListadoComponent"], _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__["ListadoComponent"], _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__["ListadosComponent"], _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__["JuegosComponent"], _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"], _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__["MenuCardComponent"], _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__["CabeceraComponent"], _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__["QuienSoyComponent"], _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__["AnagramaComponent"], _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__["ListadoDePaisesComponent"], _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__["MapaDeGoogleComponent"], _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__["JugadoresListadoComponent"], _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__["InputJugadoresComponent"], _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__["SexoPipe"], _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__["MijuegoComponent"], _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavBarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"] // NgbModule.forRoot(MiRuteo),
        // importo el ruteo
        // RouterModule.forRoot(MiRuteo)
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__["AdivinaElNumeroComponent"], _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__["ListadoDeResultadosComponent"], _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"], _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"], _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AgilidadAritmeticaComponent"], _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"], _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AgilidadMasListadoComponent"], _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__["ListadoComponent"], _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__["ListadosComponent"], _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__["JuegosComponent"], _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"], _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__["MenuCardComponent"], _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__["CabeceraComponent"], _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__["QuienSoyComponent"], _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__["AnagramaComponent"], _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__["ListadoDePaisesComponent"], _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__["MapaDeGoogleComponent"], _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__["JugadoresListadoComponent"], _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__["InputJugadoresComponent"], _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__["SexoPipe"], _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__["MijuegoComponent"], _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavBarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
          }), _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"] // NgbModule.forRoot(MiRuteo),
          // importo el ruteo
          // RouterModule.forRoot(MiRuteo)
          ],
          providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__["JugadoresService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clases/juego-adivina.ts":
  /*!*****************************************!*\
    !*** ./src/app/clases/juego-adivina.ts ***!
    \*****************************************/

  /*! exports provided: JuegoAdivina */

  /***/
  function srcAppClasesJuegoAdivinaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function () {
      return JuegoAdivina;
    });
    /* harmony import */


    var _clases_juego__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../clases/juego */
    "./src/app/clases/juego.ts");

    var JuegoAdivina = /*#__PURE__*/function (_clases_juego__WEBPAC) {
      _inherits(JuegoAdivina, _clases_juego__WEBPAC);

      var _super = _createSuper(JuegoAdivina);

      function JuegoAdivina(nombre, gano, jugador) {
        var _this;

        _classCallCheck(this, JuegoAdivina);

        _this = _super.call(this, "Adivina el número", gano, jugador);
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
      }

      _createClass(JuegoAdivina, [{
        key: "verificar",
        value: function verificar() {
          if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
          }

          if (this.gano) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "generarnumero",
        value: function generarnumero() {
          this.numeroSecreto = Math.floor(Math.random() * 100 + 1);
          console.info('numero Secreto:' + this.numeroSecreto);
          this.gano = false;
        }
      }, {
        key: "retornarAyuda",
        value: function retornarAyuda() {
          if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
          }

          return "Te pasate";
        }
      }]);

      return JuegoAdivina;
    }(_clases_juego__WEBPACK_IMPORTED_MODULE_0__["Juego"]);
    /***/

  },

  /***/
  "./src/app/clases/juego-agilidad.ts":
  /*!******************************************!*\
    !*** ./src/app/clases/juego-agilidad.ts ***!
    \******************************************/

  /*! exports provided: JuegoAgilidad */

  /***/
  function srcAppClasesJuegoAgilidadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function () {
      return JuegoAgilidad;
    });

    var JuegoAgilidad = function JuegoAgilidad() {
      _classCallCheck(this, JuegoAgilidad);
    };
    /***/

  },

  /***/
  "./src/app/clases/juego.ts":
  /*!*********************************!*\
    !*** ./src/app/clases/juego.ts ***!
    \*********************************/

  /*! exports provided: Juego */

  /***/
  function srcAppClasesJuegoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Juego", function () {
      return Juego;
    });

    var Juego = /*#__PURE__*/function () {
      function Juego(nombre, gano, jugador) {
        _classCallCheck(this, Juego);

        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre) this.nombre = nombre;
        if (gano) this.gano = gano;
        if (jugador) this.jugador = jugador;else this.jugador = "natalia natalia";
      }

      _createClass(Juego, [{
        key: "retornarAyuda",
        value: function retornarAyuda() {
          return "NO hay Ayuda definida";
        }
      }]);

      return Juego;
    }();
    /***/

  },

  /***/
  "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdivinaElNumeroComponent */

  /***/
  function srcAppComponentesAdivinaElNumeroAdivinaElNumeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function () {
      return AdivinaElNumeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../clases/juego-adivina */
    "./src/app/clases/juego-adivina.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdivinaElNumeroComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdivinaElNumeroComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.verificar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verificar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdivinaElNumeroComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdivinaElNumeroComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.generarnumero();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nuevo n\xFAmero secreto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdivinaElNumeroComponent_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Esperando que ingrese un n\xFAmero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AdivinaElNumeroComponent = /*#__PURE__*/function () {
      function AdivinaElNumeroComponent() {
        _classCallCheck(this, AdivinaElNumeroComponent);

        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
      }

      _createClass(AdivinaElNumeroComponent, [{
        key: "generarnumero",
        value: function generarnumero() {
          this.nuevoJuego.generarnumero();
          this.contador = 0;
        }
      }, {
        key: "verificar",
        value: function verificar() {
          this.contador++;
          this.ocultarVerificar = true;
          console.info("numero Secreto:", this.nuevoJuego.gano);

          if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
          } else {
            var mensaje;

            switch (this.contador) {
              case 1:
                mensaje = "No, intento fallido, animo";
                break;

              case 2:
                mensaje = "No,Te estaras Acercando???";
                break;

              case 3:
                mensaje = "No es, Yo crei que la tercera era la vencida.";
                break;

              case 4:
                mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                break;

              case 5:
                mensaje = " intentos y nada.";
                break;

              case 6:
                mensaje = "Afortunado en el amor";
                break;

              default:
                mensaje = "Ya le erraste " + this.contador + " veces";
                break;
            }

            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
          }

          console.info("numero Secreto:", this.nuevoJuego.gano);
        }
      }, {
        key: "MostarMensaje",
        value: function MostarMensaje() {
          var mensaje = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "este es el mensaje";
          var ganador = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.Mensajes = mensaje;
          var x = document.getElementById("snackbar");

          if (ganador) {
            x.className = "show Ganador";
          } else {
            x.className = "show Perdedor";
          }

          var modelo = this;
          setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
          }, 3000);
          console.info("objeto", x);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdivinaElNumeroComponent;
    }();

    AdivinaElNumeroComponent.ɵfac = function AdivinaElNumeroComponent_Factory(t) {
      return new (t || AdivinaElNumeroComponent)();
    };

    AdivinaElNumeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdivinaElNumeroComponent,
      selectors: [["app-adivina-el-numero"]],
      outputs: {
        enviarJuego: "enviarJuego"
      },
      decls: 23,
      vars: 10,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [2, "text-align", "center"], ["name", "juego"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], [3, "hidden"], ["class", "btn btn-success btn-lg", 3, "click", 4, "ngIf"], ["class", "btn btn-info btn-lg", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "snackbar"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "fa", "fa-spinner", "fa-spin"]],
      template: function AdivinaElNumeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ingrese numero: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdivinaElNumeroComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.nuevoJuego.numeroIngresado = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdivinaElNumeroComponent_button_12_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdivinaElNumeroComponent_button_14_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdivinaElNumeroComponent_p_16_Template, 3, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "usted adivino el n\xFAmero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "usted a\xFAn no gano ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.nuevoJuego.nombre, "! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoJuego.numeroIngresado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.nuevoJuego.numeroIngresado, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarVerificar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nuevoJuego.numeroSecreto != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nuevoJuego.numeroSecreto == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nuevoJuego.numeroSecreto != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.nuevoJuego.gano);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.nuevoJuego.gano);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Mensajes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["form[_ngcontent-%COMP%] {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    \r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw[_ngcontent-%COMP%] {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador[_ngcontent-%COMP%] {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor[_ngcontent-%COMP%] {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvcm0ge1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDpncmF5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FuY2VsYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG4uYWNlcHRidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xyXG59XHJcbi5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG59XHJcblxyXG5pbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuc3Bhbi5wc3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgc3Bhbi5wc3cge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxyXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdivinaElNumeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adivina-el-numero',
          templateUrl: './adivina-el-numero.component.html',
          styleUrls: ['./adivina-el-numero.component.css']
        }]
      }], function () {
        return [];
      }, {
        enviarJuego: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AdivinaMasListadoComponent */

  /***/
  function srcAppComponentesAdivinaMasListadoAdivinaMasListadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function () {
      return AdivinaMasListadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../adivina-el-numero/adivina-el-numero.component */
    "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
    /* harmony import */


    var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../listado-de-resultados/listado-de-resultados.component */
    "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");

    var AdivinaMasListadoComponent = /*#__PURE__*/function () {
      function AdivinaMasListadoComponent() {
        _classCallCheck(this, AdivinaMasListadoComponent);

        this.listadoParaCompartir = new Array();
      }

      _createClass(AdivinaMasListadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tomarJuegoTerminado",
        value: function tomarJuegoTerminado(juego) {
          this.listadoParaCompartir.push(juego); // console.info("en app",this.listadoParaCompartir);
        }
      }]);

      return AdivinaMasListadoComponent;
    }();

    AdivinaMasListadoComponent.ɵfac = function AdivinaMasListadoComponent_Factory(t) {
      return new (t || AdivinaMasListadoComponent)();
    };

    AdivinaMasListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdivinaMasListadoComponent,
      selectors: [["app-adivina-mas-listado"]],
      decls: 4,
      vars: 1,
      consts: [[3, "enviarJuego"], [3, "listado"]],
      template: function AdivinaMasListadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-adivina-el-numero", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("enviarJuego", function AdivinaMasListadoComponent_Template_app_adivina_el_numero_enviarJuego_0_listener($event) {
            return ctx.tomarJuegoTerminado($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " listado ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-listado-de-resultados", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
        }
      },
      directives: [_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_1__["AdivinaElNumeroComponent"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListadoDeResultadosComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdivinaMasListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adivina-mas-listado',
          templateUrl: './adivina-mas-listado.component.html',
          styleUrls: ['./adivina-mas-listado.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AgilidadAritmeticaComponent */

  /***/
  function srcAppComponentesAgilidadAritmeticaAgilidadAritmeticaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function () {
      return AgilidadAritmeticaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../clases/juego-agilidad */
    "./src/app/clases/juego-agilidad.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AgilidadAritmeticaComponent = /*#__PURE__*/function () {
      function AgilidadAritmeticaComponent() {
        _classCallCheck(this, AgilidadAritmeticaComponent);

        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__["JuegoAgilidad"]();
        console.info("Inicio agilidad");
      }

      _createClass(AgilidadAritmeticaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "NuevoJuego",
        value: function NuevoJuego() {
          var _this2 = this;

          this.ocultarVerificar = false;
          this.repetidor = setInterval(function () {
            _this2.Tiempo--;
            console.log("llego", _this2.Tiempo);

            if (_this2.Tiempo == 0) {
              clearInterval(_this2.repetidor);

              _this2.verificar();

              _this2.ocultarVerificar = true;
              _this2.Tiempo = 5;
            }
          }, 900);
        }
      }, {
        key: "verificar",
        value: function verificar() {
          this.ocultarVerificar = false;
          clearInterval(this.repetidor);
        }
      }]);

      return AgilidadAritmeticaComponent;
    }();

    AgilidadAritmeticaComponent.ɵfac = function AgilidadAritmeticaComponent_Factory(t) {
      return new (t || AgilidadAritmeticaComponent)();
    };

    AgilidadAritmeticaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgilidadAritmeticaComponent,
      selectors: [["app-agilidad-aritmetica"]],
      outputs: {
        enviarJuego: "enviarJuego"
      },
      decls: 31,
      vars: 9,
      consts: [["name", "juego"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", "readonly", "", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], [3, "hidden"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "fa", "fa-spinner", "fa-spin"]],
      template: function AgilidadAritmeticaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Primer n\xFAmero: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.nuevoJuego.numeroIngresado = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Operador: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.nuevoJuego.numeroIngresado = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Segundo n\xFAmero: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.nuevoJuego.numeroIngresado = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Respuesta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.nuevoJuego.numeroIngresado = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadAritmeticaComponent_Template_button_click_16_listener() {
            return ctx.verificar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadAritmeticaComponent_Template_button_click_20_listener() {
            return ctx.NuevoJuego();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Esperando numero...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "usted adivino el n\xFAmero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "usted a\xFAn no gano ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoJuego.numeroIngresado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoJuego.numeroIngresado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoJuego.numeroIngresado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoJuego.numeroIngresado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarVerificar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Verificar ", ctx.Tiempo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.ocultarVerificar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.nuevoJuego.gano);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.nuevoJuego.gano);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgilidadAritmeticaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agilidad-aritmetica',
          templateUrl: './agilidad-aritmetica.component.html',
          styleUrls: ['./agilidad-aritmetica.component.css']
        }]
      }], function () {
        return [];
      }, {
        enviarJuego: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AgilidadMasListadoComponent */

  /***/
  function srcAppComponentesAgilidadMasListadoAgilidadMasListadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function () {
      return AgilidadMasListadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../agilidad-aritmetica/agilidad-aritmetica.component */
    "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
    /* harmony import */


    var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../listado-de-resultados/listado-de-resultados.component */
    "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");

    var AgilidadMasListadoComponent = /*#__PURE__*/function () {
      function AgilidadMasListadoComponent() {
        _classCallCheck(this, AgilidadMasListadoComponent);

        this.listadoParaCompartir = new Array();
      }

      _createClass(AgilidadMasListadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tomarJuegoTerminado",
        value: function tomarJuegoTerminado(juego) {
          this.listadoParaCompartir.push(juego);
          console.info("en app", this.listadoParaCompartir);
        }
      }]);

      return AgilidadMasListadoComponent;
    }();

    AgilidadMasListadoComponent.ɵfac = function AgilidadMasListadoComponent_Factory(t) {
      return new (t || AgilidadMasListadoComponent)();
    };

    AgilidadMasListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgilidadMasListadoComponent,
      selectors: [["app-agilidad-mas-listado"]],
      decls: 4,
      vars: 1,
      consts: [[3, "enviarJuego"], [3, "listado"]],
      template: function AgilidadMasListadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-agilidad-aritmetica", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("enviarJuego", function AgilidadMasListadoComponent_Template_app_agilidad_aritmetica_enviarJuego_0_listener($event) {
            return ctx.tomarJuegoTerminado($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Listado de Resultados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-listado-de-resultados", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
        }
      },
      directives: [_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_1__["AgilidadAritmeticaComponent"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListadoDeResultadosComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgilidadMasListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agilidad-mas-listado',
          templateUrl: './agilidad-mas-listado.component.html',
          styleUrls: ['./agilidad-mas-listado.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/anagrama/anagrama.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
    \************************************************************/

  /*! exports provided: AnagramaComponent */

  /***/
  function srcAppComponentesAnagramaAnagramaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function () {
      return AnagramaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnagramaComponent = /*#__PURE__*/function () {
      function AnagramaComponent() {
        _classCallCheck(this, AnagramaComponent);
      }

      _createClass(AnagramaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnagramaComponent;
    }();

    AnagramaComponent.ɵfac = function AnagramaComponent_Factory(t) {
      return new (t || AnagramaComponent)();
    };

    AnagramaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnagramaComponent,
      selectors: [["app-anagrama"]],
      decls: 2,
      vars: 0,
      template: function AnagramaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " anagrama works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FuYWdyYW1hL2FuYWdyYW1hLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnagramaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-anagrama',
          templateUrl: './anagrama.component.html',
          styleUrls: ['./anagrama.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/cabecera/cabecera.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
    \************************************************************/

  /*! exports provided: CabeceraComponent */

  /***/
  function srcAppComponentesCabeceraCabeceraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function () {
      return CabeceraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/componentes/nav-bar/nav-bar.component.ts");

    var CabeceraComponent = /*#__PURE__*/function () {
      function CabeceraComponent() {
        _classCallCheck(this, CabeceraComponent);
      }

      _createClass(CabeceraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CabeceraComponent;
    }();

    CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) {
      return new (t || CabeceraComponent)();
    };

    CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CabeceraComponent,
      selectors: [["app-cabecera"]],
      decls: 8,
      vars: 0,
      consts: [[1, "contenedor"]],
      template: function CabeceraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sala de Juegos .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nicolas Navarro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]],
      styles: [".black[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: auto;\r\n    display: table;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    float: left;\r\n    position: relative;\r\n    color:white;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 0;\r\n    background-color: #234;\r\n    border-left: 1.5px solid #000;\r\n    -webkit-animation: maquina 4s infinite alternate steps(16);\r\n            animation: maquina 4s infinite alternate steps(16);\r\n    z-index: 1;\r\n}\r\n\r\n@-webkit-keyframes maquina {\r\n    from {\r\n        width: 100%;\r\n    }\r\n    to {\r\n        width: 0;\r\n    }\r\n}\r\n\r\n@keyframes maquina {\r\n    from {\r\n        width: 100%;\r\n    }\r\n    to {\r\n        width: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMERBQWtEO1lBQWxELGtEQUFrRDtJQUNsRCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgxIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzAwMDtcclxuICAgIGFuaW1hdGlvbjogbWFxdWluYSA0cyBpbmZpbml0ZSBhbHRlcm5hdGUgc3RlcHMoMTYpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXF1aW5hIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabeceraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cabecera',
          templateUrl: './cabecera.component.html',
          styleUrls: ['./cabecera.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/error/error.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/componentes/error/error.component.ts ***!
    \******************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentesErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/switchMap */
    "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 21,
      vars: 0,
      consts: [[1, "panel", "panel-default"], [1, "hero-text"], [2, "font-size", "50px"], ["href", "https://github.com/octaviovillegas", "target", "_blank"], [1, "fa", "fa-github"], ["routerLink", "/QuienSoy", "target", "_blank"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "#"], [1, "glyphicon", "glyphicon-user"], [1, "glyphicon", "glyphicon-log-in"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sala de Juegos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Octavio villegas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "en GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quien Soy? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Registrase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InputJugadoresComponent */

  /***/
  function srcAppComponentesInputJugadoresInputJugadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function () {
      return InputJugadoresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InputJugadoresComponent = /*#__PURE__*/function () {
      function InputJugadoresComponent() {
        _classCallCheck(this, InputJugadoresComponent);
      }

      _createClass(InputJugadoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputJugadoresComponent;
    }();

    InputJugadoresComponent.ɵfac = function InputJugadoresComponent_Factory(t) {
      return new (t || InputJugadoresComponent)();
    };

    InputJugadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputJugadoresComponent,
      selectors: [["app-input-jugadores"]],
      decls: 2,
      vars: 0,
      template: function InputJugadoresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " input-jugadores works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputJugadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-jugadores',
          templateUrl: './input-jugadores.component.html',
          styleUrls: ['./input-jugadores.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/juegos/juegos.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/componentes/juegos/juegos.component.ts ***!
    \********************************************************/

  /*! exports provided: JuegosComponent */

  /***/
  function srcAppComponentesJuegosJuegosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegosComponent", function () {
      return JuegosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/componentes/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var JuegosComponent = /*#__PURE__*/function () {
      function JuegosComponent() {
        _classCallCheck(this, JuegosComponent);
      }

      _createClass(JuegosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JuegosComponent;
    }();

    JuegosComponent.ɵfac = function JuegosComponent_Factory(t) {
      return new (t || JuegosComponent)();
    };

    JuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JuegosComponent,
      selectors: [["app-juegos"]],
      decls: 5,
      vars: 0,
      consts: [[2, "text-align", "center"]],
      template: function JuegosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sala de Juegos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JuegosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-juegos',
          templateUrl: './juegos.component.html',
          styleUrls: ['./juegos.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
    \******************************************************************************/

  /*! exports provided: JugadoresListadoComponent */

  /***/
  function srcAppComponentesJugadoresListadoJugadoresListadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function () {
      return JugadoresListadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/jugadores.service */
    "./src/app/servicios/jugadores.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/sexo.pipe */
    "./src/app/pipes/sexo.pipe.ts");

    function JugadoresListadoComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "sexo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var jugador_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.usuario, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.cuit, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, jugador_r18.sexo)), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.gano, " ");
      }
    }

    var JugadoresListadoComponent = /*#__PURE__*/function () {
      function JugadoresListadoComponent(serviceJugadores) {
        _classCallCheck(this, JugadoresListadoComponent);

        this.miJugadoresServicio = serviceJugadores;
      }

      _createClass(JugadoresListadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "TraerTodos",
        value: function TraerTodos() {
          var _this3 = this;

          //alert("totos");
          this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this3.listado = data;
          });
        }
      }, {
        key: "TraerGanadores",
        value: function TraerGanadores() {
          var _this4 = this;

          this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this4.listado = data;
          });
        }
      }, {
        key: "TraerPerdedores",
        value: function TraerPerdedores() {
          var _this5 = this;

          this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this5.listado = data;
          });
        }
      }]);

      return JugadoresListadoComponent;
    }();

    JugadoresListadoComponent.ɵfac = function JugadoresListadoComponent_Factory(t) {
      return new (t || JugadoresListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["JugadoresService"]));
    };

    JugadoresListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JugadoresListadoComponent,
      selectors: [["app-jugadores-listado"]],
      decls: 26,
      vars: 1,
      consts: [[1, "nav", "nav-pills", "nav-justified"], [1, "active"], ["routerLink", "/Principal"], [3, "click"], [1, "table", "table-condensed"], [4, "ngFor", "ngForOf"]],
      template: function JugadoresListadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ir a inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_5_listener() {
            return ctx.TraerTodos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Todos los jugadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_8_listener() {
            return ctx.TraerGanadores();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Los ganadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_11_listener() {
            return ctx.TraerPerdedores();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Los perdedores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cuit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "sexo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "gano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, JugadoresListadoComponent_tr_25_Template, 11, 8, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listado);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_4__["SexoPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JugadoresListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jugadores-listado',
          templateUrl: './jugadores-listado.component.html',
          styleUrls: ['./jugadores-listado.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["JugadoresService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ListadoDePaisesComponent */

  /***/
  function srcAppComponentesListadoDePaisesListadoDePaisesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function () {
      return ListadoDePaisesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/paises.service */
    "./src/app/servicios/paises.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListadoDePaisesComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pais_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.region, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.nativeName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.subregion, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.population, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", pais_r16.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.capital, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.borders, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", pais_r16.latlng, " ");
      }
    }

    var ListadoDePaisesComponent = /*#__PURE__*/function () {
      function ListadoDePaisesComponent(servicioPaises) {
        _classCallCheck(this, ListadoDePaisesComponent);

        this.miServicioDePaises = servicioPaises;
      }

      _createClass(ListadoDePaisesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.miServicioDePaises.listar().then(function (datos) {
            console.info("listado de paises", datos);
            _this6.listadoDePaises = datos;
          });
        }
      }]);

      return ListadoDePaisesComponent;
    }();

    ListadoDePaisesComponent.ɵfac = function ListadoDePaisesComponent_Factory(t) {
      return new (t || ListadoDePaisesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__["PaisesService"]));
    };

    ListadoDePaisesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadoDePaisesComponent,
      selectors: [["app-listado-de-paises"]],
      decls: 23,
      vars: 1,
      consts: [[1, "table", "table-condensed"], [4, "ngFor", "ngForOf"], ["width", "50px", 3, "src"]],
      template: function ListadoDePaisesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Listado de paises\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Regi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre local");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sub Regi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Poblaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bandera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Capital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListadoDePaisesComponent_tr_22_Template, 19, 9, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listadoDePaises);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoDePaisesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listado-de-paises',
          templateUrl: './listado-de-paises.component.html',
          styleUrls: ['./listado-de-paises.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__["PaisesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ListadoDeResultadosComponent */

  /***/
  function srcAppComponentesListadoDeResultadosListadoDeResultadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function () {
      return ListadoDeResultadosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListadoDeResultadosComponent_tr_10_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gano ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListadoDeResultadosComponent_tr_10_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perdio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListadoDeResultadosComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListadoDeResultadosComponent_tr_10_td_5_Template, 2, 0, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListadoDeResultadosComponent_tr_10_td_6_Template, 2, 0, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var juego_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", juego_r8.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", juego_r8.jugador, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", juego_r8.gano);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !juego_r8.gano);
      }
    }

    var ListadoDeResultadosComponent = /*#__PURE__*/function () {
      function ListadoDeResultadosComponent() {
        _classCallCheck(this, ListadoDeResultadosComponent);
      }

      _createClass(ListadoDeResultadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ver",
        value: function ver() {
          console.info(this.listado);
        }
      }]);

      return ListadoDeResultadosComponent;
    }();

    ListadoDeResultadosComponent.ɵfac = function ListadoDeResultadosComponent_Factory(t) {
      return new (t || ListadoDeResultadosComponent)();
    };

    ListadoDeResultadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadoDeResultadosComponent,
      selectors: [["app-listado-de-resultados"]],
      inputs: {
        listado: "listado"
      },
      decls: 11,
      vars: 1,
      consts: [[1, "table", "table-condensed"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function ListadoDeResultadosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Juego");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jugador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resultado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListadoDeResultadosComponent_tr_10_Template, 7, 4, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listado);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoDeResultadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listado-de-resultados',
          templateUrl: './listado-de-resultados.component.html',
          styleUrls: ['./listado-de-resultados.component.css']
        }]
      }], function () {
        return [];
      }, {
        listado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/componentes/listado/listado.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/listado/listado.component.ts ***!
    \**********************************************************/

  /*! exports provided: ListadoComponent */

  /***/
  function srcAppComponentesListadoListadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoComponent", function () {
      return ListadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../servicios/juego-service.service */
    "./src/app/servicios/juego-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../listado-de-resultados/listado-de-resultados.component */
    "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");

    var ListadoComponent = /*#__PURE__*/function () {
      function ListadoComponent(servicioJuego) {
        _classCallCheck(this, ListadoComponent);

        this.miServicioJuego = servicioJuego;
      }

      _createClass(ListadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "llamaService",
        value: function llamaService() {
          console.log("llamaService");
          this.listadoParaCompartir = this.miServicioJuego.listar();
        }
      }, {
        key: "llamaServicePromesa",
        value: function llamaServicePromesa() {
          var _this7 = this;

          console.log("llamaServicePromesa");
          this.miServicioJuego.listarPromesa().then(function (listado) {
            _this7.listadoParaCompartir = listado;
          });
        }
      }]);

      return ListadoComponent;
    }();

    ListadoComponent.ɵfac = function ListadoComponent_Factory(t) {
      return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"]));
    };

    ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadoComponent,
      selectors: [["app-listado"]],
      decls: 14,
      vars: 1,
      consts: [[1, "nav", "nav-pills", "nav-justified"], [1, "active"], ["routerLink", "/Principal"], [3, "click"], [3, "listado"]],
      template: function ListadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sala de Juegos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_5_listener() {
            return ctx.llamaService();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Servicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_8_listener() {
            return ctx.llamaServicePromesa();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Serv Promesa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_11_listener() {
            return ctx.llamaServicePromesa();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Serv observable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-listado-de-resultados", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_3__["ListadoDeResultadosComponent"]],
      styles: [".fa[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n\r\n.fa-facebook[_ngcontent-%COMP%] {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cclxuLmZhIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGlmIHlvdSB3YW50ICovXHJcbi5mYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXHJcblxyXG4vKiBGYWNlYm9vayAqL1xyXG4uZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogVHdpdHRlciAqL1xyXG4uZmEtdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listado',
          templateUrl: './listado.component.html',
          styleUrls: ['./listado.component.css']
        }]
      }], function () {
        return [{
          type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/listados/listados.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/componentes/listados/listados.component.ts ***!
    \************************************************************/

  /*! exports provided: ListadosComponent */

  /***/
  function srcAppComponentesListadosListadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadosComponent", function () {
      return ListadosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ListadosComponent = /*#__PURE__*/function () {
      function ListadosComponent() {
        _classCallCheck(this, ListadosComponent);
      }

      _createClass(ListadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListadosComponent;
    }();

    ListadosComponent.ɵfac = function ListadosComponent_Factory(t) {
      return new (t || ListadosComponent)();
    };

    ListadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadosComponent,
      selectors: [["app-listados"]],
      decls: 2,
      vars: 0,
      template: function ListadosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " listados works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listados',
          templateUrl: './listados.component.html',
          styleUrls: ['./listados.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/login/login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/componentes/login/login.component.ts ***!
    \******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/observable/TimerObservable */
    "./node_modules/rxjs-compat/_esm2015/observable/TimerObservable.js");
    /* harmony import */


    var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../servicios/user.service */
    "./src/app/servicios/user.service.ts");
    /* harmony import */


    var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cabecera/cabecera.component */
    "./src/app/componentes/cabecera/cabecera.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    function LoginComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.MoverBarraDeProgreso();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.clase);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r12.ProgresoDeAncho);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r12.progresoMensaje, " - ", ctx_r12.progreso, "% ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, usuariosService, router) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.usuariosService = usuariosService;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Entrar",
        value: function Entrar() {
          var _this8 = this;

          if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
          }

          this.usuariosService.logIn(this.usuario, this.clave).subscribe(function (resp) {
            return __awaiter(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (resp) {
                        localStorage.setItem("user", this.usuario);
                        this.router.navigate(['/Principal']);
                      } else {}

                      this.clave = null;
                      this.usuario = null;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "MoverBarraDeProgreso",
        value: function MoverBarraDeProgreso() {
          var _this9 = this;

          this.logeando = false;
          this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
          this.progresoMensaje = "NSA spy...";
          var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__["TimerObservable"].create(200, 50);
          this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this9.progreso = _this9.progreso + 1;
            _this9.ProgresoDeAncho = _this9.progreso + 20 + "%";

            switch (_this9.progreso) {
              case 15:
                _this9.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                _this9.progresoMensaje = "Verificando ADN...";
                break;

              case 30:
                _this9.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                _this9.progresoMensaje = "Adjustando encriptación..";
                break;

              case 60:
                _this9.clase = "progress-bar progress-bar-success progress-bar-striped active";
                _this9.progresoMensaje = "Recompilando Info del dispositivo..";
                break;

              case 75:
                _this9.clase = "progress-bar progress-bar-success progress-bar-striped active";
                _this9.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                break;

              case 85:
                _this9.clase = "progress-bar progress-bar-success progress-bar-striped active";
                _this9.progresoMensaje = "Instalando KeyLogger..";
                break;

              case 100:
                console.log("final");

                _this9.subscription.unsubscribe();

                _this9.Entrar();

                break;
            }
          }); //this.logeando=true;
        }
      }, {
        key: "ingresoAdmin",
        value: function ingresoAdmin() {
          this.usuario = 'admin@admin.com';
          this.clave = '1111';
        }
      }, {
        key: "ingresoUsuario",
        value: function ingresoUsuario() {
          this.usuario = 'usuario@usuario.com';
          this.clave = '3333';
        }
      }, {
        key: "ingresoInvitado",
        value: function ingresoInvitado() {
          this.usuario = 'invitado@invitado.com';
          this.clave = '2222';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 38,
      vars: 4,
      consts: [[1, "container2"], ["action", "return true;"], [1, "card"], [1, "jumbotron"], [1, "imgcontainer"], ["src", "./assets/imagenes/login.png", "alt", "Avatar", "max-width", "104", 1, "avatar"], [1, "container", "control"], ["type", "text", "placeholder", "Usuario", "name", "uname", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Clave", "name", "psw", "required", "", 3, "ngModel", "ngModelChange"], [3, "click", 4, "ngIf"], ["class", "progress", 4, "ngIf"], ["type", "checkbox", "checked", "checked"], [1, "container3"], [1, "users2"], ["type", "button", 1, "cancelbtn"], ["type", "button", "routerLink", "/Registro", 1, "aceptbtn"], ["href", "#"], [1, "users"], ["type", "button", 1, "btn-user", 3, "click"], [3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", "active"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.usuario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Clave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.clave = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_button_16_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recordar mis datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Te olvidaste ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "la clave?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.ingresoAdmin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() {
            return ctx.ingresoUsuario();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() {
            return ctx.ingresoInvitado();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Invitado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clave);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logeando);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logeando);
        }
      },
      directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n  background-color: #234;\r\n  border: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: row !important;\r\n  padding-bottom: 3rem;\r\n  margin-bottom: 0;\r\n  border-radius: 10%;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: 1px solid #234;\r\n}\r\n\r\n.control[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column !important;\r\n  margin: 0;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 1% 3% auto;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 3% auto;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 4%;\r\n  max-height: 50vh;\r\n}\r\n\r\n.users[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: transparent !important;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.users2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: transparent !important;\r\n  margin: 0.5rem 1rem 2rem 0px;\r\n}\r\n\r\n.users2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 2rem;\r\n}\r\n\r\n.container3[_ngcontent-%COMP%] {\r\n  background-color: #234;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsU0FBUztBQUNYOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzNDtcclxufVxyXG5cclxuLmNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udHJvbCBpbnB1dCB7XHJcbiAgbWFyZ2luOiAxJSAzJSBhdXRvO1xyXG59XHJcbi5jb250cm9sIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAzJSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIG1heC1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi51c2VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi51c2VyczIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDJyZW0gMHB4O1xyXG59XHJcblxyXG4udXNlcnMyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDtcclxufVxyXG4iXX0= */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
    \************************************************************************/

  /*! exports provided: MapaDeGoogleComponent */

  /***/
  function srcAppComponentesMapaDeGoogleMapaDeGoogleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function () {
      return MapaDeGoogleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MapaDeGoogleComponent = /*#__PURE__*/function () {
      function MapaDeGoogleComponent() {
        _classCallCheck(this, MapaDeGoogleComponent);

        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007; // google maps zoom level

        this.zoom = 8;
      }

      _createClass(MapaDeGoogleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mapClicked",
        value: function mapClicked(algo) {
          console.log(algo);
        }
      }]);

      return MapaDeGoogleComponent;
    }();

    MapaDeGoogleComponent.ɵfac = function MapaDeGoogleComponent_Factory(t) {
      return new (t || MapaDeGoogleComponent)();
    };

    MapaDeGoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapaDeGoogleComponent,
      selectors: [["app-mapa-de-google"]],
      decls: 6,
      vars: 7,
      consts: [[3, "latitude", "longitude", "mapClick"], [3, "latitude", "longitude"], ["type", "text", 3, "ngModel", "ngModelChange"]],
      template: function MapaDeGoogleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapaDeGoogleComponent_Template_agm_map_mapClick_2_listener($event) {
            return ctx.mapClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "agm-marker", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapaDeGoogleComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.lat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapaDeGoogleComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.lng = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lng);
        }
      },
      directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaDeGoogleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mapa-de-google',
          templateUrl: './mapa-de-google.component.html',
          styleUrls: ['./mapa-de-google.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/menu-card/menu-card.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
    \**************************************************************/

  /*! exports provided: MenuCardComponent */

  /***/
  function srcAppComponentesMenuCardMenuCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function () {
      return MenuCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuCardComponent = /*#__PURE__*/function () {
      function MenuCardComponent(route, router) {
        _classCallCheck(this, MenuCardComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(MenuCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Juego",
        value: function Juego(tipo) {
          switch (tipo) {
            case 'Adivina':
              this.router.navigate(['/Juegos/Adivina']);
              break;

            case 'Agilidad':
              this.router.navigate(['/Juegos/Agilidad']);
              break;

            case 'AdivinaMasListado':
              this.router.navigate(['/Juegos/AdivinaMasListado']);
              break;

            case 'AgilidadaMasListado':
              this.router.navigate(['/Juegos/AgilidadaMasListado']);
              break;

            case 'Mijuego':
              this.router.navigate(['/Juegos/Mijuego']);
              break;
          }
        }
      }]);

      return MenuCardComponent;
    }();

    MenuCardComponent.ɵfac = function MenuCardComponent_Factory(t) {
      return new (t || MenuCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MenuCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuCardComponent,
      selectors: [["app-menu-card"]],
      decls: 71,
      vars: 0,
      consts: [[1, "card-deck", 2, "margin", "1% 5%"], [1, "card"], ["src", "../../../assets/imagenes/cerebro.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "button", "bounce", "animated", 3, "click"], [1, "fas", "fa-gamepad"], ["src", "../../../assets/imagenes/ppt2.PNG", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../../assets/imagenes/adivina.png", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../../assets/imagenes/memoriza.PNG", "alt", "Card image cap", 1, "card-img-top"]],
      template: function MenuCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Velocidad y agilidad aritm\xE9tica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Juego de agilidad mental");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_8_listener() {
            return ctx.Juego("Agilidad");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Piedra Papel o Tijera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Juega contra la m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_18_listener() {
            return ctx.Juego("PPT");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adivina el n\xFAmero secreto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Juego de estrategia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_28_listener() {
            return ctx.Juego("Adivina");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Juego para Desarrollar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Encontra el par de cada carta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_38_listener() {
            return ctx.Juego("Mijuego");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Piedra Papel o Tijera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Juega contra la m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_48_listener() {
            return ctx.Juego("PPT");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Adivina el n\xFAmero secreto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Juego de estrategia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_58_listener() {
            return ctx.Juego("Adivina");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Juego para Desarrollar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Encontra el par de cada carta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_68_listener() {
            return ctx.Juego("Mijuego");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Jugar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-deck[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0 !important;\r\n  min-height: 60vh;\r\n  background-color: #234;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  background-color: #234 !important;\r\n  transition: 0.3s;\r\n  border-radius: 25px;\r\n  \r\n  min-width: 20%;\r\n  width: 20%;\r\n  max-width: 20%;\r\n  height: 400px;\r\n  margin: 10px;\r\n  padding-bottom: 10px;\r\n  float: left;\r\n  text-align: center;\r\n  \r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 5px 5px 0 0;\r\n  width: 30%;\r\n  height: 40%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin: 2% 4%;\r\n  height: 100px;\r\n  border-radius: 15px;\r\n  font-size: x-large;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #18449c !important;\r\n  margin: 2% 8%;\r\n  border-radius: 50px;\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    min-width: 100%;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBLDhFQUE4RTs7QUFFOUU7RUFDRSwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0NBQStDOztBQUUvQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVjayB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cclxuICBtaW4td2lkdGg6IDIwJTtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBtYXgtaGVpZ2h0OiA1MDBweDsgKi9cclxufVxyXG5cclxuLyogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgdG9wIGxlZnQgYW5kIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSAqL1xyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAyJSA0JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0NDljICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAyJSA4JTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-card',
          templateUrl: './menu-card.component.html',
          styleUrls: ['./menu-card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/menu/menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/componentes/menu/menu.component.ts ***!
    \****************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentesMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(route, router) {
        _classCallCheck(this, MenuComponent);

        this.route = route;
        this.router = router;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Juego",
        value: function Juego(tipo) {
          switch (tipo) {
            case 'Adivina':
              this.router.navigate(['/Juegos/Adivina']);
              break;

            case 'Agilidad':
              this.router.navigate(['/Juegos/Agilidad']);
              break;

            case 'AdivinaMasListado':
              this.router.navigate(['/Juegos/AdivinaMasListado']);
              break;

            case 'AgilidadaMasListado':
              this.router.navigate(['/Juegos/AgilidadaMasListado']);
              break;
          }
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 38,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-gamepad"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 2, "background-color", "#343A40", "color", "white"], ["data-toggle", "tooltip ", "title", "Hooray! ", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], ["href", "# ", 1, "nav-link", "disabled"], [1, "nav", "navbar-nav", "navbar-right"], ["type", "button ", 1, "btn", "btn-success", "mr-3"], [1, "fas", "fa-address-card"], ["type", "button ", 1, "btn", "btn-outline-light"], [1, "fas", "fa-sign-out-alt"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Juegos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_19_listener() {
            return ctx.Juego("Adivina");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Adivina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_21_listener() {
            return ctx.Juego("Agilidad");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Agilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_24_listener() {
            return ctx.Juego("AdivinaMasListado");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adivina+listado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_26_listener() {
            return ctx.Juego("AgilidadaMasListado");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Agilidad+listado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mis Datos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Salir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["a[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    border-radius: 15px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/mijuego/mijuego.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/mijuego/mijuego.component.ts ***!
    \**********************************************************/

  /*! exports provided: MijuegoComponent */

  /***/
  function srcAppComponentesMijuegoMijuegoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MijuegoComponent", function () {
      return MijuegoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MijuegoComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MijuegoComponent_div_2_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.Voltear($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var carta_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carta_r20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var MijuegoComponent = /*#__PURE__*/function () {
      function MijuegoComponent() {
        _classCallCheck(this, MijuegoComponent);

        this.cartas = ['../../../assets/imagenes/angular.png', '../../../assets/imagenes/golang.png', '../../../assets/imagenes/golang.png', '../../../assets/imagenes/python.png', '../../../assets/imagenes/javascript.jpg', '../../../assets/imagenes/angular.png', '../../../assets/imagenes/ionic.png', '../../../assets/imagenes/react.png', '../../../assets/imagenes/react.png', '../../../assets/imagenes/javascript.jpg', '../../../assets/imagenes/ionic.png', '../../../assets/imagenes/python.png'];
      }

      _createClass(MijuegoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Voltear",
        value: function Voltear(carta) {
          console.log("no anda", carta);
          carta.target.classList.toggle('voltear');
        }
      }]);

      return MijuegoComponent;
    }();

    MijuegoComponent.ɵfac = function MijuegoComponent_Factory(t) {
      return new (t || MijuegoComponent)();
    };

    MijuegoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MijuegoComponent,
      selectors: [["app-mijuego"]],
      decls: 3,
      vars: 1,
      consts: [[1, "contenedor"], [1, "gameContainer"], [4, "ngFor", "ngForOf"], [1, "memoryCard", 3, "click"], ["alt", "", 1, "front", 3, "src"], ["src", "../../../assets/imagenes/cartas.PNG", "alt", "", 1, "back"]],
      template: function MijuegoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MijuegoComponent_div_2_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartas);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".voltear[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    background-color: #ff3434;\r\n    display: flex;\r\n}\r\n\r\n.gameContainer[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 600px;\r\n    margin: auto;\r\n    display: inline-block;\r\n    perspective: 800px;\r\n    background-color: black;\r\n}\r\n\r\n.memoryCard[_ngcontent-%COMP%] {\r\n    width: 83%;\r\n    height: 23%;\r\n    margin: 5px;\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    transition: transform 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.memoryCard[_ngcontent-%COMP%]:active {\r\n    transform: scale(0.95);\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.memoryCard.flip[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n    cursor: pointer;\r\n}\r\n\r\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n    background-color: #ff5252;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.front[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWlqdWVnby9taWp1ZWdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRUc7O0FBRUg7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21panVlZ28vbWlqdWVnby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRlbmVkb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xyXG59XHJcblxyXG4ubWFpbmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4udGhlY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGhlZnJvbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGVmcm9udCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4udGhlYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGViYWNrIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGVjYXJkOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufSAqL1xyXG5cclxuLnZvbHRlYXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ2FtZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tZW1vcnlDYXJkIHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBoZWlnaHQ6IDIzJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVtb3J5Q2FyZDphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWVtb3J5Q2FyZC5mbGlwIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnJvbnQsXHJcbi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZnJvbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MijuegoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mijuego',
          templateUrl: './mijuego.component.html',
          styleUrls: ['./mijuego.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/nav-bar/nav-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/componentes/nav-bar/nav-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentesNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavBarComponent_ul_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingresar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrarse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavBarComponent_ul_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ul_21_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Salir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.usuario);
      }
    }

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(router) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = localStorage.getItem("user");
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem("user");
          this.router.navigate(['/Principal']);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 22,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-gamepad"], [1, "navbar-nav", "mr-auto", "mt-lg-0"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "https://github.com/nicohnavarro", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-github"], ["routerLink", "/QuienSoy", 1, "nav-link"], [1, "fa", "fa-user"], ["class", "nav navbar-nav navbar-right", "style", "margin-left: 1rem;", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right", 2, "margin-left", "1rem"], ["routerLink", "/Login", 1, "btn", "btn-success", "my-2", "my-sm-0", 2, "margin-right", "1rem"], ["routerLink", "/Registro", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Juegos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "en GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quien Soy? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavBarComponent_ul_20_Template, 5, 0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavBarComponent_ul_21_Template, 5, 1, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.usuario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["nav[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n    font-family: 'Play', sans-serif !important;\r\n    background-color: #4579e2!important;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color:white;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: #2d55aa;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]{\r\n    background-color: #2d55aa;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]:hover{\r\n    background-color: #2d55aa;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\n.navbar-toggler-icon[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTc5ZTIhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5idG4tc3VjY2Vzczpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMyZDU1YWE7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDU1YWE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNTVhYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzJkNTVhYTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.css']
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
  "./src/app/componentes/principal/principal.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/componentes/principal/principal.component.ts ***!
    \**************************************************************/

  /*! exports provided: PrincipalComponent */

  /***/
  function srcAppComponentesPrincipalPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function () {
      return PrincipalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cabecera/cabecera.component */
    "./src/app/componentes/cabecera/cabecera.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrincipalComponent = /*#__PURE__*/function () {
      function PrincipalComponent() {
        _classCallCheck(this, PrincipalComponent);

        this.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };
      }

      _createClass(PrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrincipalComponent;
    }();

    PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) {
      return new (t || PrincipalComponent)();
    };

    PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrincipalComponent,
      selectors: [["app-principal"]],
      decls: 24,
      vars: 0,
      consts: [[1, "principal"], [1, "containr"], ["routerLink", "/Juegos", 1, "car"], [1, "imgBx"], ["src", "../../../assets/imagenes/listado.png", "alt", ""], [1, "content"], ["src", "./assets/imagenes/saladejuegos.png", "alt", ""], ["src", "../../../assets/imagenes/Configuracion.png", "alt", ""]],
      template: function PrincipalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Listados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Los listados de los resultados con ordenamiento y busqueda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Juegos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " El m\xE9todo l\xFAdico es un conjunto de estrategias dise\xF1adas para crear un ambiente de armon\xEDa en los estudiantes que est\xE1n inmersos en el proceso de aprendizaje. Este m\xE9todo busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Configuraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ajustes de la aplicacion y los m\xE9todos de autentificaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__["CabeceraComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".principal[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nmin-height: 60vh;\r\nbackground-color: #234;\r\noverflow: hidden;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 10% 5% auto;\r\n  width: 1050px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  transition: 0.5s;\r\n  transform: skewY(-10deg);\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: #234;\r\n  transition: 0.5;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 15px;\r\n  background: #4579e2;\r\n  transform-origin: bottom;\r\n  transform: skewX(45deg);\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -15px;\r\n  left: -15px;\r\n  width: 15px;\r\n  height: 50%;\r\n  background-color: #4579e2;\r\n  transform-origin: left;\r\n  transform: skewY(45deg);\r\n  transition: 0.5s;\r\n  border-bottom: 400px solid #2d55aa;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-40px);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 200px;\r\n  background-color: #3461c1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #fff;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 200px;\r\n  padding: 20px;\r\n  color: #777;\r\n  background-color: #234;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 400px;\r\n  background: linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1));\r\n  transform-origin: bottom;\r\n  transform: skewX(45deg);\r\n  transition: 0.5s;\r\n  pointer-events: none;\r\n  z-index: -1;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]:before {\r\n    transform: skewX(45deg) translateY(40px);\r\n    -webkit-filter: blur(5px);\r\n            filter: blur(5px);\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(1){\r\n    z-index: 3;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(2){\r\n    z-index: 2;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(3){\r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7OztBQUdIO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IseUVBQXlFO0VBQ3pFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7OztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tZWRpYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMTNhOGI0O1xyXG59XHJcblxyXG4ubWVkaWEtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5zb2xhcGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hLnNvbGFwYSA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTg0ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IC01ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdW1ib3RyYW4ge1xyXG4gICAgbWFyZ2luOiAwJSA1JTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTcsIDc3LCAwLjEwMik7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbn0gKi9cclxuXHJcblxyXG4ucHJpbmNpcGFse1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxubWluLWhlaWdodDogNjB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzIzNDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMCUgNSUgYXV0bztcclxuICB3aWR0aDogMTA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zZm9ybTogc2tld1koLTEwZGVnKTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0O1xyXG4gIHRyYW5zaXRpb246IDAuNTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzQ1NzllMjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogLTE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NzllMjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIHRyYW5zZm9ybTogc2tld1koNDVkZWcpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm9yZGVyLWJvdHRvbTogNDAwcHggc29saWQgIzJkNTVhYTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhciAuaW1nQngge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2MWMxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb250YWluciAuY2FyIC5pbWdCeCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluciAuY2FyIC5pbWdCeCBoMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluciAuY2FyIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhciAuY29udGVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uY29udGFpbnIgLmNhcjpob3ZlciAuY29udGVudDpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhcjpudGgtY2hpbGQoMSl7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcbi5jb250YWluciAuY2FyOm50aC1jaGlsZCgyKXtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmNvbnRhaW5yIC5jYXI6bnRoLWNoaWxkKDMpe1xyXG4gICAgei1pbmRleDogMTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-principal',
          templateUrl: './principal.component.html',
          styleUrls: ['./principal.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/quien-soy/quien-soy.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
    \**************************************************************/

  /*! exports provided: QuienSoyComponent */

  /***/
  function srcAppComponentesQuienSoyQuienSoyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function () {
      return QuienSoyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/componentes/nav-bar/nav-bar.component.ts");

    var QuienSoyComponent = /*#__PURE__*/function () {
      function QuienSoyComponent() {
        _classCallCheck(this, QuienSoyComponent);
      }

      _createClass(QuienSoyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuienSoyComponent;
    }();

    QuienSoyComponent.ɵfac = function QuienSoyComponent_Factory(t) {
      return new (t || QuienSoyComponent)();
    };

    QuienSoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuienSoyComponent,
      selectors: [["app-quien-soy"]],
      decls: 34,
      vars: 0,
      consts: [["id", "quiwn", 1, "container-fluid", "bg-1", "text-center"], [1, "margin"], ["src", "../../../assets/imagenes/turquia.jpg", "alt", "Bird", "width", "350", "height", "350", 1, "img-responsive", "img-circle", "margin", 2, "display", "inline"], ["id", "que", 1, "container-fluid", "bg-2", "text-center"], ["id", "donde", 1, "container-fluid", "bg-3", "text-center"], [1, "row"], [1, "col-sm-4"], ["src", "../../../assets/imagenes/angular1.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], ["src", "../../../assets/imagenes/github.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], ["src", "../../../assets/imagenes/utnfra.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], [1, "container-fluid", "bg-4", "text-center"], ["href", "https://www.nicohnavarro.com.ar"]],
      template: function QuienSoyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Qui\xE9n Soy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Soy Un alumno de la UTN FRA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Esto es un trabajo pr\xE1ctico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias did\xE1cticas y formas de evaluaci\xF3n diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluaci\xF3n son elementales tanto para las instituciones y profesores como para los alumnos. A trav\xE9s de la evaluaci\xF3n formativa el educador busca informaci\xF3n en el alumno para lograr comprender c\xF3mo se est\xE1 produciendo el proceso de aprendizaje y poder reajustar los objetivos pedag\xF3gicos. Y para el alumno es una muestra del progreso que est\xE1 logrando y si puede aplicar, materializar y darle visibilidad a la comprensi\xF3n del tema. Seg\xFAn Black y William (1998), la evaluaci\xF3n formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluaci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "D\xF3nde Funciona?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Para los sistemas operativos lideres en el mercado del consumo masivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Modificado por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "www.nicohnavarro.com.ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]],
      styles: ["h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color:white;\r\n}\r\n.img-circle[_ngcontent-%COMP%]{\r\n    border-radius: 2rem;\r\n}\r\n.imagenDeQuienSoy[_ngcontent-%COMP%]{\r\n    border-radius: 3rem;\r\n    width:80%;\r\n    height: 60%;\r\n}\r\n.col-sm-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    min-height: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMsIHAge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmltZy1jaXJjbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uaW1hZ2VuRGVRdWllblNveXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmNvbC1zbS00IHB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuienSoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quien-soy',
          templateUrl: './quien-soy.component.html',
          styleUrls: ['./quien-soy.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/componentes/registro/registro.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/componentes/registro/registro.component.ts ***!
    \************************************************************/

  /*! exports provided: RegistroComponent */

  /***/
  function srcAppComponentesRegistroRegistroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
      return RegistroComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); //para poder hacer las validaciones
    //import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';


    var RegistroComponent = /*#__PURE__*/function () {
      /* constructor( private miConstructor:FormBuilder) { }
       email=new FormControl('',[Validators.email]);
       formRegistro:FormGroup=this.miConstructor.group({
         usuario:this.email
       });*/
      function RegistroComponent() {
        _classCallCheck(this, RegistroComponent);
      }

      _createClass(RegistroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistroComponent;
    }();

    RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
      return new (t || RegistroComponent)();
    };

    RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistroComponent,
      selectors: [["app-registro"]],
      decls: 46,
      vars: 0,
      consts: [[1, "jumbotron"], ["id", "terminos"], ["onclick", "document.getElementById('id01').style.display='block'", 2, "width", "auto"], ["routerLink", "/Principal", 1, "cancelbtn", 2, "width", "auto"], ["id", "id01", 1, "modal"], ["onclick", "document.getElementById('id01').style.display='none'", "title", "Close Modal", 1, "close"], [1, "modal-content", "animate"], [1, "container"], ["type", "text", "placeholder", "Ingresa tu correo", "name", "email", "required", ""], ["type", "password", "placeholder", "Aca la clave", "name", "psw", "required", ""], ["type", "password", "placeholder", "Aca repeti la misa clave  de arriba", "name", "psw-repeat", "required", ""], ["type", "checkbox", "checked", "checked"], ["onclick", "document.getElementById('id01').style.display='none'"], [1, "clearfix"], ["type", "button", "onclick", "document.getElementById('id01').style.display='none'", 1, "cancelbtn"], ["type", "submit", 1, "signupbtn"]],
      template: function RegistroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terminos y condiciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "El Gobierno de la Rep\xFAblica Argentina (en adelante el \u201CGobierno Nacional\u201D) no es responsable por los da\xF1os y perjuicios que puedan surgir, incluyendo, sin l\xEDmite, da\xF1os, p\xE9rdidas o gastos directos, indirectos, que surjan en relaci\xF3n con el uso de los Activos Digitales o la imposibilidad de uso, en relaci\xF3n con cualquier falla en el vencimiento, error, omisi\xF3n, interrupci\xF3n, defecto, demora en la operaci\xF3n o transmisi\xF3n, virus de computadora o falla del sistema de l\xEDnea, a\xFAn en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos da\xF1os, p\xE9rdidas o gastos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema inform\xE1tico (software y hardware) o en los documentos electr\xF3nicos y ficheros almacenados en su sistema inform\xE1tico.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "El Gobierno Nacional no puede garantizar que la transmisi\xF3n de informaci\xF3n por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Acepto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "No acepto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Clave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Repita la clave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Recordar mis datos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "creando la cuenta aceptando los");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Terminos y condiciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Me arrepenti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Registrarme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%] {float:left;width:50%}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    padding-top: 60px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; \r\n    border: 1px solid #888;\r\n    width: 98%; \r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUEsMkRBQTJEOztBQUMzRCx1QkFBdUIsVUFBVSxDQUFDLFNBQVM7O0FBRTNDLHNDQUFzQzs7QUFDdEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7SUFDaEYsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDcEU7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUEsNkVBQTZFOztBQUM3RTtJQUNJO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLC5zaWdudXBidG4ge2Zsb2F0OmxlZnQ7d2lkdGg6NTAlfVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDk4JTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registro',
          templateUrl: './registro.component.html',
          styleUrls: ['./registro.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/sexo.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/sexo.pipe.ts ***!
    \************************************/

  /*! exports provided: SexoPipe */

  /***/
  function srcAppPipesSexoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SexoPipe", function () {
      return SexoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SexoPipe = /*#__PURE__*/function () {
      function SexoPipe() {
        _classCallCheck(this, SexoPipe);
      }

      _createClass(SexoPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (value = 'M') {
            return "machito";
          } else {
            return "señorita";
          }
        }
      }]);

      return SexoPipe;
    }();

    SexoPipe.ɵfac = function SexoPipe_Factory(t) {
      return new (t || SexoPipe)();
    };

    SexoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sexo",
      type: SexoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SexoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sexo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ruteando/ruteando.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/ruteando/ruteando.module.ts ***!
    \*********************************************/

  /*! exports provided: RuteandoModule */

  /***/
  function srcAppRuteandoRuteandoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuteandoModule", function () {
      return RuteandoModule;
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


    var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../componentes/adivina-el-numero/adivina-el-numero.component */
    "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
    /* harmony import */


    var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../componentes/login/login.component */
    "./src/app/componentes/login/login.component.ts");
    /* harmony import */


    var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../componentes/error/error.component */
    "./src/app/componentes/error/error.component.ts");
    /* harmony import */


    var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../componentes/principal/principal.component */
    "./src/app/componentes/principal/principal.component.ts");
    /* harmony import */


    var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */
    "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
    /* harmony import */


    var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */
    "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
    /* harmony import */


    var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */
    "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
    /* harmony import */


    var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../componentes/listado/listado.component */
    "./src/app/componentes/listado/listado.component.ts");
    /* harmony import */


    var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../componentes/juegos/juegos.component */
    "./src/app/componentes/juegos/juegos.component.ts");
    /* harmony import */


    var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../componentes/registro/registro.component */
    "./src/app/componentes/registro/registro.component.ts");
    /* harmony import */


    var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../componentes/menu-card/menu-card.component */
    "./src/app/componentes/menu-card/menu-card.component.ts");
    /* harmony import */


    var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../componentes/quien-soy/quien-soy.component */
    "./src/app/componentes/quien-soy/quien-soy.component.ts");
    /* harmony import */


    var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../componentes/listado-de-paises/listado-de-paises.component */
    "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
    /* harmony import */


    var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../componentes/mapa-de-google/mapa-de-google.component */
    "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
    /* harmony import */


    var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../componentes/jugadores-listado/jugadores-listado.component */
    "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
    /* harmony import */


    var _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../componentes/mijuego/mijuego.component */
    "./src/app/componentes/mijuego/mijuego.component.ts"); // importo del module principal
    // declaro donde quiero que se dirija


    var MiRuteo = [{
      path: 'Jugadores',
      component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__["JugadoresListadoComponent"]
    }, {
      path: '',
      component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"]
    }, {
      path: 'Login',
      component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'Mapa',
      component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__["MapaDeGoogleComponent"]
    }, {
      path: 'QuienSoy',
      component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__["QuienSoyComponent"]
    }, {
      path: 'Registro',
      component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"]
    }, {
      path: 'Principal',
      component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"]
    }, {
      path: 'Listado',
      component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__["ListadoComponent"]
    }, {
      path: 'Paises',
      component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__["ListadoDePaisesComponent"]
    }, {
      path: 'Juegos',
      component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__["JuegosComponent"],
      children: [{
        path: '',
        component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"]
      }, {
        path: 'Adivina',
        component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__["AdivinaElNumeroComponent"]
      }, {
        path: 'AdivinaMasListado',
        component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"]
      }, {
        path: 'AgilidadaMasListado',
        component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"]
      }, {
        path: 'Mijuego',
        component: _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_17__["MijuegoComponent"]
      }, {
        path: 'Agilidad',
        component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"]
      }]
    }, {
      path: '**',
      component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }, {
      path: 'error',
      component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }];

    var RuteandoModule = function RuteandoModule() {
      _classCallCheck(this, RuteandoModule);
    };

    RuteandoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RuteandoModule
    });
    RuteandoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RuteandoModule_Factory(t) {
        return new (t || RuteandoModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MiRuteo)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RuteandoModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuteandoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MiRuteo)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/archivos-jugadores.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
    \*********************************************************/

  /*! exports provided: ArchivosJugadoresService */

  /***/
  function srcAppServiciosArchivosJugadoresServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function () {
      return ArchivosJugadoresService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mi-http/mi-http.service */
    "./src/app/servicios/mi-http/mi-http.service.ts");

    var ArchivosJugadoresService = /*#__PURE__*/function () {
      function ArchivosJugadoresService(miHttp) {
        _classCallCheck(this, ArchivosJugadoresService);

        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
      }

      _createClass(ArchivosJugadoresService, [{
        key: "traerJugadores",
        value: function traerJugadores(ruta) {
          return this.miHttp.httpGetO(this.api + ruta).toPromise().then(function (data) {
            console.log("Archivo jugadores"); // console.log( data );

            return data;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ArchivosJugadoresService;
    }();

    ArchivosJugadoresService.ɵfac = function ArchivosJugadoresService_Factory(t) {
      return new (t || ArchivosJugadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]));
    };

    ArchivosJugadoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArchivosJugadoresService,
      factory: ArchivosJugadoresService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchivosJugadoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/juego-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/servicios/juego-service.service.ts ***!
    \****************************************************/

  /*! exports provided: JuegoServiceService */

  /***/
  function srcAppServiciosJuegoServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function () {
      return JuegoServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clases/juego-adivina */
    "./src/app/clases/juego-adivina.ts");
    /* harmony import */


    var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mi-http/mi-http.service */
    "./src/app/servicios/mi-http/mi-http.service.ts");

    var JuegoServiceService = /*#__PURE__*/function () {
      function JuegoServiceService(miHttp) {
        _classCallCheck(this, JuegoServiceService);

        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003"); //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
      }

      _createClass(JuegoServiceService, [{
        key: "listar",
        value: function listar() {
          this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all").then(function (data) {
            console.log(data);
          })["catch"](function (err) {
            console.log(err);
          });
          this.peticion.subscribe(function (data) {
            console.log("En listar");
            console.log(data);
          }, function (err) {
            console.info("error: ", err);
          });
          var miArray = new Array();
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 1", false));
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Pepe", true));
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 3", false));
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 4", false));
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 5", false));
          miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 6", false));
          return miArray;
        }
      }, {
        key: "listarPromesa",
        value: function listarPromesa() {
          this.peticion.subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
          }, function (err) {
            console.log(err);
          });
          var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
          });
          return promesa;
        }
      }]);

      return JuegoServiceService;
    }();

    JuegoServiceService.ɵfac = function JuegoServiceService_Factory(t) {
      return new (t || JuegoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]));
    };

    JuegoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JuegoServiceService,
      factory: JuegoServiceService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JuegoServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/jugadores.service.ts":
  /*!************************************************!*\
    !*** ./src/app/servicios/jugadores.service.ts ***!
    \************************************************/

  /*! exports provided: JugadoresService */

  /***/
  function srcAppServiciosJugadoresServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JugadoresService", function () {
      return JugadoresService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./archivos-jugadores.service */
    "./src/app/servicios/archivos-jugadores.service.ts");

    var JugadoresService = /*#__PURE__*/function () {
      //peticion:any;
      function JugadoresService(miHttp) {
        _classCallCheck(this, JugadoresService);

        this.miHttp = miHttp; // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
      }

      _createClass(JugadoresService, [{
        key: "traertodos",
        value: function traertodos(ruta, filtro) {
          var _this10 = this;

          return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this10.filtrado = data;
            var ganador;

            if (filtro == "ganadores") {
              ganador = true;
            } else {
              ganador = false;
            }

            _this10.filtrado = _this10.filtrado.filter(function (data) {
              return data.gano === ganador || filtro == "todos";
            });
            return _this10.filtrado;
          })["catch"](function (errror) {
            console.log("error");
            return _this10.filtrado;
          });
        }
      }]);

      return JugadoresService;
    }();

    JugadoresService.ɵfac = function JugadoresService_Factory(t) {
      return new (t || JugadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["ArchivosJugadoresService"]));
    };

    JugadoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JugadoresService,
      factory: JugadoresService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JugadoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["ArchivosJugadoresService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/mi-http/mi-http.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
    \******************************************************/

  /*! exports provided: MiHttpService */

  /***/
  function srcAppServiciosMiHttpMiHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiHttpService", function () {
      return MiHttpService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MiHttpService = /*#__PURE__*/function () {
      function MiHttpService(http) {
        _classCallCheck(this, MiHttpService);

        this.http = http;
      }

      _createClass(MiHttpService, [{
        key: "httpGetP",
        value: function httpGetP(url) {
          return this.http.get(url).toPromise().then(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "httpPostP",
        value: function httpPostP(url, objeto) {
          return this.http.get(url).subscribe(function (data) {
            console.log(data);
            return data;
          });
        }
      }, {
        key: "httpGetO",
        value: function httpGetO(url) {
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.json();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err.json().error || 'Server error');
          }));
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          return res.json() || {};
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return error;
        }
      }]);

      return MiHttpService;
    }();

    MiHttpService.ɵfac = function MiHttpService_Factory(t) {
      return new (t || MiHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    MiHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MiHttpService,
      factory: MiHttpService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MiHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/paises.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/servicios/paises.service.ts ***!
    \*********************************************/

  /*! exports provided: PaisesService */

  /***/
  function srcAppServiciosPaisesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaisesService", function () {
      return PaisesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mi-http/mi-http.service */
    "./src/app/servicios/mi-http/mi-http.service.ts");

    var PaisesService = /*#__PURE__*/function () {
      function PaisesService(miHttp) {
        _classCallCheck(this, PaisesService);

        this.miHttp = miHttp;
      }

      _createClass(PaisesService, [{
        key: "listar",
        value: function listar() {
          return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all").then(function (data) {
            console.log(data);
            return data;
          })["catch"](function (err) {
            console.log(err);
            return null;
          }); //return null;
        }
      }]);

      return PaisesService;
    }();

    PaisesService.ɵfac = function PaisesService_Factory(t) {
      return new (t || PaisesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]));
    };

    PaisesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaisesService,
      factory: PaisesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaisesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicios/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/servicios/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiciosUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(db) {
        _classCallCheck(this, UserService);

        this.usuariosCollection = db.collection('usuarios');
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
      }

      _createClass(UserService, [{
        key: "getUsuarios",
        value: function getUsuarios() {
          return this.usuarios;
        }
      }, {
        key: "getUsuario",
        value: function getUsuario(id) {
          return this.usuariosCollection.doc(id).valueChanges();
        }
      }, {
        key: "logIn",
        value: function logIn(correo, clave) {
          var _this11 = this;

          console.log('aca');
          return this.getUsuarios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return _this11.verificaUsuarioYclave(resp, correo, clave);
          }));
        }
      }, {
        key: "verificaUsuarioYclave",
        value: function verificaUsuarioYclave(elementos, correo, clave) {
          var respuesta = false;
          elementos.forEach(function (dato) {
            if (dato.clave == clave && dato.correo == correo) {
              console.log(dato);
              localStorage.setItem('usuario', JSON.stringify(dato));
              respuesta = true;
            }
          });
          return respuesta;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
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
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyB-aohn1hAkaaIAdmsQHeLOjDAIrU8Xp9A",
        authDomain: "pps-nicohnavarro.firebaseapp.com",
        databaseURL: "https://pps-nicohnavarro.firebaseio.com",
        projectId: "pps-nicohnavarro",
        storageBucket: "pps-nicohnavarro.appspot.com",
        messagingSenderId: "446095739612",
        appId: "1:446095739612:web:564899af99242b693e4219",
        measurementId: "G-KE8138G0YR"
      }
    };
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


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
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
    /*! C:\Users\nicolas\Desktop\Laboratorio4\TP-Sala-de-Juegos-ANGULAR-\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map