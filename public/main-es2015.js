(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/mijuego/mijuego.component */ "./src/app/componentes/mijuego/mijuego.component.ts");
/* harmony import */ var _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/nav-bar/nav-bar.component */ "./src/app/componentes/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_pokemon_elegir_pokemon_elegir_pokemon_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/pokemon/elegir-pokemon/elegir-pokemon.component */ "./src/app/componentes/pokemon/elegir-pokemon/elegir-pokemon.component.ts");
/* harmony import */ var _componentes_pokemon_pokemon_game_pokemon_game_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/pokemon/pokemon-game/pokemon-game.component */ "./src/app/componentes/pokemon/pokemon-game/pokemon-game.component.ts");
/* harmony import */ var _componentes_pokemon_batalla_batalla_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/pokemon/batalla/batalla.component */ "./src/app/componentes/pokemon/batalla/batalla.component.ts");




















// declaro donde quiero que se dirija
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




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__["JugadoresService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"]
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__["AdivinaElNumeroComponent"],
        _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__["ListadoDeResultadosComponent"],
        _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
        _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"],
        _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AgilidadAritmeticaComponent"],
        _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
        _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"],
        _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AgilidadMasListadoComponent"],
        _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__["ListadoComponent"],
        _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__["ListadosComponent"],
        _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__["JuegosComponent"],
        _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"],
        _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__["MenuCardComponent"],
        _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__["CabeceraComponent"],
        _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__["QuienSoyComponent"],
        _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__["AnagramaComponent"],
        _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__["ListadoDePaisesComponent"],
        _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__["MapaDeGoogleComponent"],
        _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__["JugadoresListadoComponent"],
        _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__["InputJugadoresComponent"],
        _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__["SexoPipe"],
        _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__["MijuegoComponent"],
        _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavBarComponent"],
        _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_40__["PiedraPapelTijeraComponent"],
        _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_41__["TatetiComponent"],
        _componentes_pokemon_elegir_pokemon_elegir_pokemon_component__WEBPACK_IMPORTED_MODULE_42__["ElegirPokemonComponent"],
        _componentes_pokemon_pokemon_game_pokemon_game_component__WEBPACK_IMPORTED_MODULE_43__["PokemonGameComponent"],
        _componentes_pokemon_batalla_batalla_component__WEBPACK_IMPORTED_MODULE_44__["BatallaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"]
        // NgbModule.forRoot(MiRuteo),
        // importo el ruteo
        // RouterModule.forRoot(MiRuteo)
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__["AdivinaElNumeroComponent"],
                    _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__["ListadoDeResultadosComponent"],
                    _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                    _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"],
                    _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AgilidadAritmeticaComponent"],
                    _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                    _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"],
                    _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AgilidadMasListadoComponent"],
                    _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__["ListadoComponent"],
                    _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__["ListadosComponent"],
                    _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__["JuegosComponent"],
                    _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"],
                    _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__["MenuCardComponent"],
                    _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__["CabeceraComponent"],
                    _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__["QuienSoyComponent"],
                    _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__["AnagramaComponent"],
                    _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__["ListadoDePaisesComponent"],
                    _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__["MapaDeGoogleComponent"],
                    _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__["JugadoresListadoComponent"],
                    _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__["InputJugadoresComponent"],
                    _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__["SexoPipe"],
                    _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_34__["MijuegoComponent"],
                    _componentes_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavBarComponent"],
                    _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_40__["PiedraPapelTijeraComponent"],
                    _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_41__["TatetiComponent"],
                    _componentes_pokemon_elegir_pokemon_elegir_pokemon_component__WEBPACK_IMPORTED_MODULE_42__["ElegirPokemonComponent"],
                    _componentes_pokemon_pokemon_game_pokemon_game_component__WEBPACK_IMPORTED_MODULE_43__["PokemonGameComponent"],
                    _componentes_pokemon_batalla_batalla_component__WEBPACK_IMPORTED_MODULE_44__["BatallaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
                    }),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_36__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_37__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_39__["AngularFirestoreModule"]
                    // NgbModule.forRoot(MiRuteo),
                    // importo el ruteo
                    // RouterModule.forRoot(MiRuteo)
                ],
                providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__["JugadoresService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");

class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_0__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    }
}


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
class JuegoAgilidad {
}


/***/ }),

/***/ "./src/app/clases/juego-piedra-papel-tijera.ts":
/*!*****************************************************!*\
  !*** ./src/app/clases/juego-piedra-papel-tijera.ts ***!
  \*****************************************************/
/*! exports provided: JuegoPiedraPapelTijera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPiedraPapelTijera", function() { return JuegoPiedraPapelTijera; });
class JuegoPiedraPapelTijera {
    constructor(uno, dos) {
    }
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}


/***/ }),

/***/ "./src/app/clases/poke.ts":
/*!********************************!*\
  !*** ./src/app/clases/poke.ts ***!
  \********************************/
/*! exports provided: Poke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poke", function() { return Poke; });
class Poke {
    constructor(pokemon) {
        this.image = pokemon.image;
        this.data = pokemon.data;
        this.id = pokemon.id;
        this.nombre = pokemon.nombre;
        this.hp = pokemon.hp;
    }
}


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AdivinaElNumeroComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdivinaElNumeroComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.verificar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdivinaElNumeroComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdivinaElNumeroComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.generarnumero(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nuevo n\u00FAmero secreto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdivinaElNumeroComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Esperando que ingrese un n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdivinaElNumeroComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
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
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    }
    ngOnInit() {
    }
}
AdivinaElNumeroComponent.ɵfac = function AdivinaElNumeroComponent_Factory(t) { return new (t || AdivinaElNumeroComponent)(); };
AdivinaElNumeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdivinaElNumeroComponent, selectors: [["app-adivina-el-numero"]], outputs: { enviarJuego: "enviarJuego" }, decls: 23, vars: 10, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [2, "text-align", "center"], ["name", "juego"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], [3, "hidden"], ["class", "btn btn-success btn-lg", 3, "click", 4, "ngIf"], ["class", "btn btn-info btn-lg", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "snackbar"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "fa", "fa-spinner", "fa-spin"]], template: function AdivinaElNumeroComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdivinaElNumeroComponent_Template_input_ngModelChange_8_listener($event) { return ctx.nuevoJuego.numeroIngresado = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "usted adivino el n\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "usted a\u00FAn no gano ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["form[_ngcontent-%COMP%] {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    \r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw[_ngcontent-%COMP%] {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador[_ngcontent-%COMP%] {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor[_ngcontent-%COMP%] {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7T0FDRyxjQUFjO09BQ2QsV0FBVztJQUNkO0lBQ0E7T0FDRyxXQUFXO0lBQ2Q7QUFDSjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvcm0ge1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDpncmF5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FuY2VsYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG4uYWNlcHRidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xyXG59XHJcbi5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG59XHJcblxyXG5pbWcuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuc3Bhbi5wc3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgc3Bhbi5wc3cge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuI3NuYWNrYmFyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuI3NuYWNrYmFyLkdhbmFkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1OUYyRjtcclxufVxyXG4jc25hY2tiYXIuUGVyZGVkb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG4jc25hY2tiYXIuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxyXG4gICAgdG8ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO30gXHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XHJcbiAgICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdivinaElNumeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adivina-el-numero',
                templateUrl: './adivina-el-numero.component.html',
                styleUrls: ['./adivina-el-numero.component.css']
            }]
    }], function () { return []; }, { enviarJuego: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");




class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
}
AdivinaMasListadoComponent.ɵfac = function AdivinaMasListadoComponent_Factory(t) { return new (t || AdivinaMasListadoComponent)(); };
AdivinaMasListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdivinaMasListadoComponent, selectors: [["app-adivina-mas-listado"]], decls: 4, vars: 1, consts: [[3, "enviarJuego"], [3, "listado"]], template: function AdivinaMasListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-adivina-el-numero", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("enviarJuego", function AdivinaMasListadoComponent_Template_app_adivina_el_numero_enviarJuego_0_listener($event) { return ctx.tomarJuegoTerminado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-listado-de-resultados", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
    } }, directives: [_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_1__["AdivinaElNumeroComponent"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListadoDeResultadosComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdivinaMasListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adivina-mas-listado',
                templateUrl: './adivina-mas-listado.component.html',
                styleUrls: ['./adivina-mas-listado.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class AgilidadAritmeticaComponent {
    constructor() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__["JuegoAgilidad"]();
        console.info("Inicio agilidad");
    }
    ngOnInit() {
    }
    NuevoJuego() {
        this.ocultarVerificar = false;
        this.repetidor = setInterval(() => {
            this.Tiempo--;
            console.log("llego", this.Tiempo);
            if (this.Tiempo == 0) {
                clearInterval(this.repetidor);
                this.verificar();
                this.ocultarVerificar = true;
                this.Tiempo = 5;
            }
        }, 900);
    }
    verificar() {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    }
}
AgilidadAritmeticaComponent.ɵfac = function AgilidadAritmeticaComponent_Factory(t) { return new (t || AgilidadAritmeticaComponent)(); };
AgilidadAritmeticaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgilidadAritmeticaComponent, selectors: [["app-agilidad-aritmetica"]], outputs: { enviarJuego: "enviarJuego" }, decls: 31, vars: 9, consts: [["name", "juego"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", "readonly", "", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], ["placeholder", "ingrese numero", "name", "numeroIngresado", "type", "text", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], [3, "hidden"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "btn", "btn-info", "btn-lg", 3, "click"], [1, "fa", "fa-spinner", "fa-spin"]], template: function AgilidadAritmeticaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Primer n\u00FAmero: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_4_listener($event) { return ctx.nuevoJuego.numeroIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Operador: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_7_listener($event) { return ctx.nuevoJuego.numeroIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Segundo n\u00FAmero: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.nuevoJuego.numeroIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Respuesta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgilidadAritmeticaComponent_Template_input_ngModelChange_13_listener($event) { return ctx.nuevoJuego.numeroIngresado = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadAritmeticaComponent_Template_button_click_16_listener() { return ctx.verificar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgilidadAritmeticaComponent_Template_button_click_20_listener() { return ctx.NuevoJuego(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "usted adivino el n\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "usted a\u00FAn no gano ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLWFyaXRtZXRpY2EvYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgilidadAritmeticaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agilidad-aritmetica',
                templateUrl: './agilidad-aritmetica.component.html',
                styleUrls: ['./agilidad-aritmetica.component.css']
            }]
    }], function () { return []; }, { enviarJuego: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");




class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
}
AgilidadMasListadoComponent.ɵfac = function AgilidadMasListadoComponent_Factory(t) { return new (t || AgilidadMasListadoComponent)(); };
AgilidadMasListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgilidadMasListadoComponent, selectors: [["app-agilidad-mas-listado"]], decls: 4, vars: 1, consts: [[3, "enviarJuego"], [3, "listado"]], template: function AgilidadMasListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-agilidad-aritmetica", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("enviarJuego", function AgilidadMasListadoComponent_Template_app_agilidad_aritmetica_enviarJuego_0_listener($event) { return ctx.tomarJuegoTerminado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Listado de Resultados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-listado-de-resultados", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
    } }, directives: [_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_1__["AgilidadAritmeticaComponent"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_2__["ListadoDeResultadosComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgilidadMasListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agilidad-mas-listado',
                templateUrl: './agilidad-mas-listado.component.html',
                styleUrls: ['./agilidad-mas-listado.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnagramaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnagramaComponent.ɵfac = function AnagramaComponent_Factory(t) { return new (t || AnagramaComponent)(); };
AnagramaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnagramaComponent, selectors: [["app-anagrama"]], decls: 2, vars: 0, template: function AnagramaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " anagrama works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FuYWdyYW1hL2FuYWdyYW1hLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnagramaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anagrama',
                templateUrl: './anagrama.component.html',
                styleUrls: ['./anagrama.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/componentes/nav-bar/nav-bar.component.ts");



class CabeceraComponent {
    constructor() { }
    ngOnInit() {
    }
}
CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) { return new (t || CabeceraComponent)(); };
CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabeceraComponent, selectors: [["app-cabecera"]], decls: 8, vars: 0, consts: [[1, "contenedor"]], template: function CabeceraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sala de Juegos .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nicolas Navarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]], styles: [".black[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: auto;\r\n    display: table;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 2%;\r\n    float: left;\r\n    position: relative;\r\n    color:white;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 0;\r\n    background-color: #234;\r\n    border-left: 1.5px solid #000;\r\n    -webkit-animation: maquina 4s infinite alternate steps(16);\r\n            animation: maquina 4s infinite alternate steps(16);\r\n    z-index: 1;\r\n}\r\n\r\n@-webkit-keyframes maquina {\r\n    from {\r\n        width: 100%;\r\n    }\r\n    to {\r\n        width: 0;\r\n    }\r\n}\r\n\r\n@keyframes maquina {\r\n    from {\r\n        width: 100%;\r\n    }\r\n    to {\r\n        width: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMERBQWtEO1lBQWxELGtEQUFrRDtJQUNsRCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgxIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzAwMDtcclxuICAgIGFuaW1hdGlvbjogbWFxdWluYSA0cyBpbmZpbml0ZSBhbHRlcm5hdGUgc3RlcHMoMTYpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXF1aW5hIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabeceraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabecera',
                templateUrl: './cabecera.component.html',
                styleUrls: ['./cabecera.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 21, vars: 0, consts: [[1, "panel", "panel-default"], [1, "hero-text"], [2, "font-size", "50px"], ["href", "https://github.com/octaviovillegas", "target", "_blank"], [1, "fa", "fa-github"], ["routerLink", "/QuienSoy", "target", "_blank"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "#"], [1, "glyphicon", "glyphicon-user"], [1, "glyphicon", "glyphicon-log-in"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputJugadoresComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputJugadoresComponent.ɵfac = function InputJugadoresComponent_Factory(t) { return new (t || InputJugadoresComponent)(); };
InputJugadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputJugadoresComponent, selectors: [["app-input-jugadores"]], decls: 2, vars: 0, template: function InputJugadoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " input-jugadores works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputJugadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-jugadores',
                templateUrl: './input-jugadores.component.html',
                styleUrls: ['./input-jugadores.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/componentes/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
}
JuegosComponent.ɵfac = function JuegosComponent_Factory(t) { return new (t || JuegosComponent)(); };
JuegosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JuegosComponent, selectors: [["app-juegos"]], decls: 5, vars: 0, consts: [[2, "text-align", "center"], [2, "color", "white"]], template: function JuegosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sala de Juegos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JuegosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-juegos',
                templateUrl: './juegos.component.html',
                styleUrls: ['./juegos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");







function JugadoresListadoComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const jugador_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.usuario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.cuit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, jugador_r18.sexo)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", jugador_r18.gano, " ");
} }
class JugadoresListadoComponent {
    constructor(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    ngOnInit() {
    }
    TraerTodos() {
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerGanadores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerPerdedores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
}
JugadoresListadoComponent.ɵfac = function JugadoresListadoComponent_Factory(t) { return new (t || JugadoresListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["JugadoresService"])); };
JugadoresListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JugadoresListadoComponent, selectors: [["app-jugadores-listado"]], decls: 26, vars: 1, consts: [[1, "nav", "nav-pills", "nav-justified"], [1, "active"], ["routerLink", "/Principal"], [3, "click"], [1, "table", "table-condensed"], [4, "ngFor", "ngForOf"]], template: function JugadoresListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ir a inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_5_listener() { return ctx.TraerTodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Todos los jugadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_8_listener() { return ctx.TraerGanadores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Los ganadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JugadoresListadoComponent_Template_a_click_11_listener() { return ctx.TraerPerdedores(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listado);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_4__["SexoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JugadoresListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jugadores-listado',
                templateUrl: './jugadores-listado.component.html',
                styleUrls: ['./jugadores-listado.component.css']
            }]
    }], function () { return [{ type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["JugadoresService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListadoDePaisesComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const pais_r16 = ctx.$implicit;
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
} }
class ListadoDePaisesComponent {
    constructor(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ngOnInit() {
        this.miServicioDePaises.listar()
            .then(datos => {
            console.info("listado de paises", datos);
            this.listadoDePaises = datos;
        });
    }
}
ListadoDePaisesComponent.ɵfac = function ListadoDePaisesComponent_Factory(t) { return new (t || ListadoDePaisesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__["PaisesService"])); };
ListadoDePaisesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoDePaisesComponent, selectors: [["app-listado-de-paises"]], decls: 23, vars: 1, consts: [[1, "table", "table-condensed"], [4, "ngFor", "ngForOf"], ["width", "50px", 3, "src"]], template: function ListadoDePaisesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sub Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Poblaci\u00F3n");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listadoDePaises);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoDePaisesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado-de-paises',
                templateUrl: './listado-de-paises.component.html',
                styleUrls: ['./listado-de-paises.component.css']
            }]
    }], function () { return [{ type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__["PaisesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ListadoDeResultadosComponent_tr_10_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gano ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListadoDeResultadosComponent_tr_10_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perdio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListadoDeResultadosComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const juego_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", juego_r8.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", juego_r8.jugador, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", juego_r8.gano);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !juego_r8.gano);
} }
class ListadoDeResultadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
}
ListadoDeResultadosComponent.ɵfac = function ListadoDeResultadosComponent_Factory(t) { return new (t || ListadoDeResultadosComponent)(); };
ListadoDeResultadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoDeResultadosComponent, selectors: [["app-listado-de-resultados"]], inputs: { listado: "listado" }, decls: 11, vars: 1, consts: [[1, "table", "table-condensed"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function ListadoDeResultadosComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoDeResultadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado-de-resultados',
                templateUrl: './listado-de-resultados.component.html',
                styleUrls: ['./listado-de-resultados.component.css']
            }]
    }], function () { return []; }, { listado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");






class ListadoComponent {
    constructor(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ngOnInit() {
    }
    llamaService() {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    }
    llamaServicePromesa() {
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then((listado) => {
            this.listadoParaCompartir = listado;
        });
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"])); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 14, vars: 1, consts: [[1, "nav", "nav-pills", "nav-justified"], [1, "active"], ["routerLink", "/Principal"], [3, "click"], [3, "listado"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sala de Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_5_listener() { return ctx.llamaService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_8_listener() { return ctx.llamaServicePromesa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Serv Promesa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_a_click_11_listener() { return ctx.llamaServicePromesa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Serv observable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-listado-de-resultados", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listado", ctx.listadoParaCompartir);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_3__["ListadoDeResultadosComponent"]], styles: [".fa[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n\r\n.fa-facebook[_ngcontent-%COMP%] {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cclxuLmZhIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGlmIHlvdSB3YW50ICovXHJcbi5mYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXHJcblxyXG4vKiBGYWNlYm9vayAqL1xyXG4uZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogVHdpdHRlciAqL1xyXG4uZmEtdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado',
                templateUrl: './listado.component.html',
                styleUrls: ['./listado.component.css']
            }]
    }], function () { return [{ type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListadosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListadosComponent.ɵfac = function ListadosComponent_Factory(t) { return new (t || ListadosComponent)(); };
ListadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadosComponent, selectors: [["app-listados"]], decls: 2, vars: 0, template: function ListadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " listados works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listados',
                templateUrl: './listados.component.html',
                styleUrls: ['./listados.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm2015/observable/TimerObservable.js");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function LoginComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.MoverBarraDeProgreso(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.clase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r12.ProgresoDeAncho);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r12.progresoMensaje, " - ", ctx_r12.progreso, "% ");
} }
class LoginComponent {
    constructor(route, usuariosService, router) {
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
    ngOnInit() {
    }
    Entrar() {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
        this.usuariosService.logIn(this.usuario, this.clave).subscribe((resp) => __awaiter(this, void 0, void 0, function* () {
            if (resp) {
                localStorage.setItem("user", this.usuario);
                this.router.navigate(['/Principal']);
            }
            else {
            }
            this.clave = null;
            this.usuario = null;
        }));
    }
    MoverBarraDeProgreso() {
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        let timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(t => {
            console.log("inicio");
            this.progreso = this.progreso + 1;
            this.ProgresoDeAncho = this.progreso + 20 + "%";
            switch (this.progreso) {
                case 15:
                    this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    this.subscription.unsubscribe();
                    this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    }
    ingresoAdmin() {
        this.usuario = 'admin@admin.com';
        this.clave = '1111';
    }
    ingresoUsuario() {
        this.usuario = 'usuario@usuario.com';
        this.clave = '3333';
    }
    ingresoInvitado() {
        this.usuario = 'invitado@invitado.com';
        this.clave = '2222';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 4, consts: [[1, "container2"], ["action", "return true;"], [1, "card"], [1, "jumbotron"], [1, "imgcontainer"], ["src", "./assets/imagenes/login.png", "alt", "Avatar", "max-width", "104", 1, "avatar"], [1, "container", "control"], ["type", "text", "placeholder", "Usuario", "name", "uname", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Clave", "name", "psw", "required", "", 3, "ngModel", "ngModelChange"], [3, "click", 4, "ngIf"], ["class", "progress", 4, "ngIf"], ["type", "checkbox", "checked", "checked"], [1, "container3"], [1, "users2"], ["type", "button", 1, "cancelbtn"], ["type", "button", "routerLink", "/Registro", 1, "aceptbtn"], ["href", "#"], [1, "users"], ["type", "button", 1, "btn-user", 3, "click"], [3, "click"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", "active"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.usuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Clave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.clave = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() { return ctx.ingresoAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() { return ctx.ingresoUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() { return ctx.ingresoInvitado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Invitado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clave);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logeando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logeando);
    } }, directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\r\n  background-color: #234;\r\n  border: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: row !important;\r\n  padding-bottom: 3rem;\r\n  margin-bottom: 0;\r\n  border-radius: 10%;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: 1px solid #234;\r\n}\r\n\r\n.control[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column !important;\r\n  margin: 0;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: 1% 3% auto;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 3% auto;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 4%;\r\n  max-height: 50vh;\r\n}\r\n\r\n.users[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: transparent !important;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.users2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: transparent !important;\r\n  margin: 0.5rem 1rem 2rem 0px;\r\n}\r\n\r\n.users2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 2rem;\r\n}\r\n\r\n.container3[_ngcontent-%COMP%] {\r\n  background-color: #234;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsU0FBUztBQUNYOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzNDtcclxufVxyXG5cclxuLmNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udHJvbCBpbnB1dCB7XHJcbiAgbWFyZ2luOiAxJSAzJSBhdXRvO1xyXG59XHJcbi5jb250cm9sIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAzJSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIG1heC1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi51c2VycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi51c2VyczIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDJyZW0gMHB4O1xyXG59XHJcblxyXG4udXNlcnMyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class MapaDeGoogleComponent {
    constructor() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    ngOnInit() {
    }
    mapClicked(algo) {
        console.log(algo);
    }
}
MapaDeGoogleComponent.ɵfac = function MapaDeGoogleComponent_Factory(t) { return new (t || MapaDeGoogleComponent)(); };
MapaDeGoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaDeGoogleComponent, selectors: [["app-mapa-de-google"]], decls: 6, vars: 7, consts: [[3, "latitude", "longitude", "mapClick"], [3, "latitude", "longitude"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function MapaDeGoogleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapaDeGoogleComponent_Template_agm_map_mapClick_2_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "agm-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapaDeGoogleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.lat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapaDeGoogleComponent_Template_input_ngModelChange_5_listener($event) { return ctx.lng = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaDeGoogleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa-de-google',
                templateUrl: './mapa-de-google.component.html',
                styleUrls: ['./mapa-de-google.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class MenuCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
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
            case 'PPT':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'Tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'Pokemon':
                this.router.navigate(['/Juegos/Pokemon']);
                break;
        }
    }
}
MenuCardComponent.ɵfac = function MenuCardComponent_Factory(t) { return new (t || MenuCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuCardComponent, selectors: [["app-menu-card"]], decls: 71, vars: 0, consts: [[1, "card-deck", 2, "margin", "1% 5%"], [1, "card"], ["src", "../../../assets/imagenes/pokemon.png", "alt", "Card image cap", 1, "card-img-top", 2, "border-radius", "50%", "margin-top", "3%"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "button", "bounce", "animated", 3, "click"], [1, "fas", "fa-gamepad"], ["src", "../../../assets/imagenes/cerebro.png", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../../assets/imagenes/ppt2.PNG", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../../assets/imagenes/adivina.png", "alt", "Card image cap", 1, "card-img-top"], ["src", "../../../assets/imagenes/tateti.png", "alt", "Card image cap", 1, "card-img-top", 2, "border-radius", "50%", "margin-top", "3%"], ["src", "../../../assets/imagenes/anagrama.png", "alt", "Card image cap", 1, "card-img-top", 2, "border-radius", "50%", "margin-top", "3%"], ["src", "../../../assets/imagenes/memoriza.PNG", "alt", "Card image cap", 1, "card-img-top"]], template: function MenuCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Juego para Desarrollar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Batalla Pokemon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_8_listener() { return ctx.Juego("Pokemon"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Velocidad y agilidad aritm\u00E9tica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Juego de agilidad mental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_18_listener() { return ctx.Juego("Agilidad"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Piedra Papel o Tijera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Juega contra la m\u00E1quina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_28_listener() { return ctx.Juego("PPT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Adivina el n\u00FAmero secreto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Juego de estrategia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_38_listener() { return ctx.Juego("Adivina"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Tateti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Tateti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_48_listener() { return ctx.Juego("Tateti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Anagrama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Juego de estrategia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_58_listener() { return ctx.Juego("Anagrama"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Memotest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Encontra el par de cada carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCardComponent_Template_button_click_68_listener() { return ctx.Juego("Mijuego"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Jugar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-deck[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0 !important;\r\n  min-height: 60vh;\r\n  background-color: #234;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  color: white;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  background-color: #234 !important;\r\n  transition: 0.3s;\r\n  border-radius: 25px;\r\n  \r\n  min-width: 20%;\r\n  width: 30%;\r\n  max-width: 20%;\r\n  height: 400px;\r\n  margin: 10px 5%;\r\n  padding-bottom: 10px;\r\n  float: left;\r\n  text-align: center;\r\n  \r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  border-radius: 5px 5px 0 0;\r\n  width: 30%;\r\n  height: 40%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2px 16px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin: 2% 4%;\r\n  height: 100px;\r\n  border-radius: 15px;\r\n  font-size: x-large;\r\n  color: white;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: #18449c !important;\r\n  margin: 2% 8%;\r\n  border-radius: 50px;\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    min-width: 100%;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQSw4RUFBOEU7O0FBRTlFO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51LWNhcmQvbWVudS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNrIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cclxuICBtaW4td2lkdGg6IDIwJTtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBtYXgtaGVpZ2h0OiA1MDBweDsgKi9cclxufVxyXG5cclxuLyogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgdG9wIGxlZnQgYW5kIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSAqL1xyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAyJSA0JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDQ5YyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMiUgOCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-card',
                templateUrl: './menu-card.component.html',
                styleUrls: ['./menu-card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
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
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 38, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-gamepad"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", 2, "background-color", "#343A40", "color", "white"], ["data-toggle", "tooltip ", "title", "Hooray! ", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], ["href", "# ", 1, "nav-link", "disabled"], [1, "nav", "navbar-nav", "navbar-right"], ["type", "button ", 1, "btn", "btn-success", "mr-3"], [1, "fas", "fa-address-card"], ["type", "button ", 1, "btn", "btn-outline-light"], [1, "fas", "fa-sign-out-alt"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_19_listener() { return ctx.Juego("Adivina"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Adivina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_21_listener() { return ctx.Juego("Agilidad"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Agilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_24_listener() { return ctx.Juego("AdivinaMasListado"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adivina+listado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_26_listener() { return ctx.Juego("AgilidadaMasListado"); });
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
    } }, styles: ["a[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    border-radius: 15px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/mijuego/mijuego.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/mijuego/mijuego.component.ts ***!
  \**********************************************************/
/*! exports provided: MijuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MijuegoComponent", function() { return MijuegoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MijuegoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MijuegoComponent_div_2_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.Voltear($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carta_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", carta_r20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MijuegoComponent {
    constructor() {
        this.cartas = ['../../../assets/imagenes/angular.png',
            '../../../assets/imagenes/golang.png',
            '../../../assets/imagenes/golang.png',
            '../../../assets/imagenes/python.png',
            '../../../assets/imagenes/javascript.jpg',
            '../../../assets/imagenes/angular.png',
            '../../../assets/imagenes/ionic.png',
            '../../../assets/imagenes/react.png',
            '../../../assets/imagenes/react.png',
            '../../../assets/imagenes/javascript.jpg',
            '../../../assets/imagenes/ionic.png',
            '../../../assets/imagenes/python.png'];
    }
    ngOnInit() {
    }
    Voltear(carta) {
        console.log("no anda", carta);
        carta.target.classList.toggle('voltear');
    }
}
MijuegoComponent.ɵfac = function MijuegoComponent_Factory(t) { return new (t || MijuegoComponent)(); };
MijuegoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MijuegoComponent, selectors: [["app-mijuego"]], decls: 3, vars: 1, consts: [[1, "contenedor"], [1, "gameContainer"], [4, "ngFor", "ngForOf"], [1, "memoryCard", 3, "click"], ["alt", "", 1, "front", 3, "src"], ["src", "../../../assets/imagenes/cartas.PNG", "alt", "", 1, "back"]], template: function MijuegoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MijuegoComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".voltear[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.contenedor[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    background-color: #ff3434;\r\n    display: flex;\r\n}\r\n\r\n.gameContainer[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 600px;\r\n    margin: auto;\r\n    display: inline-block;\r\n    perspective: 800px;\r\n    background-color: black;\r\n}\r\n\r\n.memoryCard[_ngcontent-%COMP%] {\r\n    width: 83%;\r\n    height: 23%;\r\n    margin: 5px;\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    transition: transform 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.memoryCard[_ngcontent-%COMP%]:active {\r\n    transform: scale(0.95);\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.memoryCard.flip[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n    cursor: pointer;\r\n}\r\n\r\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\r\n    background-color: #ff5252;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.front[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWlqdWVnby9taWp1ZWdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRUc7O0FBRUg7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21panVlZ28vbWlqdWVnby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRlbmVkb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xyXG59XHJcblxyXG4ubWFpbmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4udGhlY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGhlZnJvbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGVmcm9udCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4udGhlYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGViYWNrIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50aGVjYXJkOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufSAqL1xyXG5cclxuLnZvbHRlYXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM0MzQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ2FtZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tZW1vcnlDYXJkIHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBoZWlnaHQ6IDIzJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVtb3J5Q2FyZDphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWVtb3J5Q2FyZC5mbGlwIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnJvbnQsXHJcbi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZnJvbnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MijuegoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mijuego',
                templateUrl: './mijuego.component.html',
                styleUrls: ['./mijuego.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/nav-bar/nav-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/nav-bar/nav-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavBarComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ul_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.usuario);
} }
class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.usuario = localStorage.getItem("user");
    }
    logOut() {
        localStorage.removeItem("user");
        this.router.navigate(['/']);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 22, vars: 2, consts: [[1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], [1, "fas", "fa-gamepad"], [1, "navbar-nav", "mr-auto", "mt-lg-0"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "https://github.com/nicohnavarro", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-github"], ["routerLink", "/QuienSoy", 1, "nav-link"], [1, "fa", "fa-user"], ["class", "nav navbar-nav navbar-right", "style", "margin-left: 1rem;", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right", 2, "margin-left", "1rem"], ["routerLink", "/Login", 1, "btn", "btn-success", "my-2", "my-sm-0", 2, "margin-right", "1rem"], ["routerLink", "/Registro", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n    font-family: 'Play', sans-serif !important;\r\n    background-color: #4579e2!important;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color:white;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: #2d55aa;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]{\r\n    background-color: #2d55aa;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]:hover{\r\n    background-color: #2d55aa;\r\n    color: white;\r\n    border:1px solid #2d55aa;\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\n.navbar-toggler-icon[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTc5ZTIhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5idG4tc3VjY2Vzczpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMyZDU1YWE7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDU1YWE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMyZDU1YWE7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNTVhYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzJkNTVhYTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/juego-piedra-papel-tijera */ "./src/app/clases/juego-piedra-papel-tijera.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function PiedraPapelTijeraComponent_div_5_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_div_5_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.eleccion("piedra"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_5_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_div_5_img_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.eleccion("papel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_5_img_7_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_div_5_img_7_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.eleccion("tijera"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PiedraPapelTijeraComponent_div_5_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} }
function PiedraPapelTijeraComponent_div_5_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} }
function PiedraPapelTijeraComponent_div_5_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function PiedraPapelTijeraComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Elegir una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PiedraPapelTijeraComponent_div_5_img_5_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PiedraPapelTijeraComponent_div_5_img_6_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PiedraPapelTijeraComponent_div_5_img_7_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Oponente (PC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PiedraPapelTijeraComponent_div_5_img_11_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PiedraPapelTijeraComponent_div_5_img_12_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PiedraPapelTijeraComponent_div_5_img_13_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoPiedra);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoPapel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoTijera);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoPiedraPC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoPapelPC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.seleccionadoTijeraPC);
} }
function PiedraPapelTijeraComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PiedraPapelTijeraComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.comenzar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Comenzar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PiedraPapelTijeraComponent {
    constructor(jugadorServices, juegoService) {
        this.jugadorServices = jugadorServices;
        this.juegoService = juegoService;
        this.seleccionadoPiedra = false;
        this.seleccionadoPapel = false;
        this.seleccionadoTijera = false;
        this.nuevoJuego = true;
    }
    ngOnInit() {
        this.visibilidadesDefault();
    }
    comenzar() {
        this.visibilidadesDefault();
        this.juego = new _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_1__["JuegoPiedraPapelTijera"](this.jugadorServices.getUsuarioActual(), 1);
        this.nuevoJuego = false;
    }
    eleccion(opcion) {
        this.cambiaVisibilidadImagenesUsuario(opcion);
        // this.cambiaVisibilidadImagenesPC(this.juego.eleccionPC);
        // this.juego.eleccionJugador = opcion;
        // if(this.juego.verificar()==null){
        //   Swal.fire({
        //     position: 'bottom',
        //     icon:'warning',
        //     iconHtml:'<i class="fa fa-thumbs-up"></i>',
        //     title: 'Empate!! Vuelve a jugar!',
        //   }).then(()=>{
        //     this.nuevoJuego=true;
        //   })
        //   this.juegoService.postJuego(this.juego).subscribe(()=>{});
        // }else{
        //   if(this.juego.verificar()){
        //     Swal.fire({
        //       position: 'bottom',
        //       icon:'success',
        //       iconHtml:'<i class="fa fa-thumbs-up"></i>',
        //       title: 'Felicidades, ha gandado!'
        //     }).then(()=>{this.nuevoJuego=true})
        //   }else{
        //     Swal.fire({
        //       position: 'bottom',
        //       icon: "error",
        //       iconHtml:'<i class="fa fa-thumbs-down"></i>',
        //       title: 'Oops!! has fallado!',
        //       text: "No te desanimes! Seguí intentando!"
        //     }).then(()=>{this.nuevoJuego=true})
        //   }
        //   this.jugadorServices.updateJugador(this.juego.idJugador,this.juego.gano);
        //   this.juegoService.postJuego(this.juego).subscribe(()=>{});
        // }
    }
    cambiaVisibilidadImagenesUsuario(opcionElegida) {
        if (opcionElegida === 'piedra') {
            this.seleccionadoTijera = true;
            this.seleccionadoPapel = true;
        }
        else if (opcionElegida === 'papel') {
            this.seleccionadoPiedra = true;
            this.seleccionadoTijera = true;
        }
        else {
            this.seleccionadoPapel = true;
            this.seleccionadoPiedra = true;
        }
    }
    cambiaVisibilidadImagenesPC(opcionElegida) {
        if (opcionElegida === 'piedra') {
            this.seleccionadoTijeraPC = true;
            this.seleccionadoPapelPC = true;
        }
        else if (opcionElegida === 'papel') {
            this.seleccionadoPiedraPC = true;
            this.seleccionadoTijeraPC = true;
        }
        else {
            this.seleccionadoPapelPC = true;
            this.seleccionadoPiedraPC = true;
        }
    }
    visibilidadesDefault() {
        this.seleccionadoPapel = false;
        this.seleccionadoPiedra = false;
        this.seleccionadoTijera = false;
        this.seleccionadoPapelPC = false;
        this.seleccionadoPiedraPC = false;
        this.seleccionadoTijeraPC = false;
    }
}
PiedraPapelTijeraComponent.ɵfac = function PiedraPapelTijeraComponent_Factory(t) { return new (t || PiedraPapelTijeraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_3__["JuegoServiceService"])); };
PiedraPapelTijeraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PiedraPapelTijeraComponent, selectors: [["app-piedra-papel-tijera"]], decls: 8, vars: 2, consts: [[1, "container"], [1, "card", "text-center"], [1, "card-header"], ["class", "card-body text-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "animated-button1", 3, "click", 4, "ngIf"], [1, "card-body", "text-center"], [1, "fila"], [1, "columna"], ["class", "imagen", "src", "../../../assets/imagenes/piedra.PNG", "alt", "", 3, "click", 4, "ngIf"], ["class", "imagen", "src", "../../../assets/imagenes/papel.PNG", "alt", "", 3, "click", 4, "ngIf"], ["class", "imagen", "src", "../../../assets/imagenes/tijera.PNG", "alt", "", 3, "click", 4, "ngIf"], ["class", "imagen invierte", "src", "../../../assets/imagenes/piedra.PNG", "alt", "", 4, "ngIf"], ["class", "imagen invierte", "src", "../../../assets/imagenes/papel.PNG", "alt", "", 4, "ngIf"], ["class", "imagen invierte", "src", "../../../assets/imagenes/tijera.PNG", "alt", "", 4, "ngIf"], ["src", "../../../assets/imagenes/piedra.PNG", "alt", "", 1, "imagen", 3, "click"], ["src", "../../../assets/imagenes/papel.PNG", "alt", "", 1, "imagen", 3, "click"], ["src", "../../../assets/imagenes/tijera.PNG", "alt", "", 1, "imagen", 3, "click"], ["src", "../../../assets/imagenes/piedra.PNG", "alt", "", 1, "imagen", "invierte"], ["src", "../../../assets/imagenes/papel.PNG", "alt", "", 1, "imagen", "invierte"], ["src", "../../../assets/imagenes/tijera.PNG", "alt", "", 1, "imagen", "invierte"], [1, "animated-button1", 3, "click"]], template: function PiedraPapelTijeraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Piedra, Papel o Tijera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PiedraPapelTijeraComponent_div_5_Template, 14, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PiedraPapelTijeraComponent_a_7_Template, 6, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nuevoJuego);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nuevoJuego);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".imagen[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 150px;\r\n    display: flex;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    \r\n  }\r\n  \r\n  .invierte[_ngcontent-%COMP%]{\r\n    transform: scaleX(-1);\r\n    -webkit-filter: FlipH;\r\n            filter: FlipH;\r\n    -ms-filter: \"FlipH\";\r\n  }\r\n  \r\n  .imagen[_ngcontent-%COMP%]:hover{\r\n    margin: auto;\r\n    width: 200px;\r\n  }\r\n  \r\n  .imagen[_ngcontent-%COMP%]:active{\r\n    margin: auto;\r\n    box-shadow: 0 4px 8px 0 red, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  \r\n  }\r\n  \r\n  .columna[_ngcontent-%COMP%]{\r\n      \r\n      flex-direction: column;\r\n      width: 50%;\r\n  }\r\n  \r\n  .fila[_ngcontent-%COMP%]{\r\n      \r\n      display: flex;\r\n      flex-direction: row;\r\n  }\r\n  \r\n  .block[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      display: block;\r\n      width: 50%;\r\n  }\r\n  \r\n  \r\n  \r\n  .animated-button[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b1b3d 50%, #08142b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4e0f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #8592ad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 20, 43, 0), #2662d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @-webkit-keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 20, 43, 0), #2662d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @-webkit-keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 20, 43, 0), #2662d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @-webkit-keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 20, 43, 0), #2662d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @-webkit-keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #3d0b0b 50%, #2b0808 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #f7d4d4;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #ad8585;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(43, 8, 8, 0), #d92626);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(43, 8, 8, 0), #d92626);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(43, 8, 8, 0), #d92626);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #d92626);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #3d240b 50%, #2b1a08 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #f7e6d4;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #ad9985;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(43, 26, 8, 0), #d98026);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(43, 26, 8, 0), #d98026);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(43, 26, 8, 0), #d98026);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(43, 26, 8, 0), #d98026);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #3d3d0b 50%, #2b2b08 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #f7f7d4;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #adad85;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(43, 43, 8, 0), #d9d926);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(43, 43, 8, 0), #d9d926);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(43, 43, 8, 0), #d9d926);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(43, 43, 8, 0), #d9d926);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #243d0b 50%, #1a2b08 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #e6f7d4;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #99ad85;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(26, 43, 8, 0), #80d926);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(26, 43, 8, 0), #80d926);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(26, 43, 8, 0), #80d926);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(26, 43, 8, 0), #80d926);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b3d0b 50%, #082b08 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4f7d4;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #85ad85;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 43, 8, 0), #26d926);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 43, 8, 0), #26d926);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 43, 8, 0), #26d926);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 43, 8, 0), #26d926);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b3d24 50%, #082b1a 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4f7e6;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #85ad99;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 43, 26, 0), #26d980);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 43, 26, 0), #26d980);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 43, 26, 0), #26d980);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 43, 26, 0), #26d980);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b3d3d 50%, #082b2b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4f7f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #85adad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 43, 43, 0), #26d9d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 43, 43, 0), #26d9d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 43, 43, 0), #26d9d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 43, 43, 0), #26d9d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b243d 50%, #081a2b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4e6f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #8599ad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 26, 43, 0), #2680d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 26, 43, 0), #2680d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 26, 43, 0), #2680d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button8[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 26, 43, 0), #2680d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #0b0b3d 50%, #08082b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #d4d4f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #8585ad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(8, 8, 43, 0), #2626d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(8, 8, 43, 0), #2626d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(8, 8, 43, 0), #2626d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button9[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(8, 8, 43, 0), #2626d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #240b3d 50%, #1a082b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #e6d4f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #9985ad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(26, 8, 43, 0), #8026d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(26, 8, 43, 0), #8026d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(26, 8, 43, 0), #8026d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button10[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(26, 8, 43, 0), #8026d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #3d0b3d 50%, #2b082b 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #f7d4f7;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #ad85ad;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(43, 8, 43, 0), #d926d9);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(43, 8, 43, 0), #d926d9);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(43, 8, 43, 0), #d926d9);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button11[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(43, 8, 43, 0), #d926d9);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%] {\r\n      background: linear-gradient(-30deg, #3d0b24 50%, #2b081a 50%);\r\n      padding: 20px 40px;\r\n      margin: 12px;\r\n      display: inline-block;\r\n      transform: translate(0%, 0%);\r\n      overflow: hidden;\r\n      color: #f7d4e6;\r\n      font-size: 20px;\r\n      letter-spacing: 2.5px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      text-decoration: none;\r\n      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]::before {\r\n      content: '';\r\n      position: absolute;\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #ad8599;\r\n      opacity: 0;\r\n      transition: .2s opacity ease-in-out;\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]:hover::before {\r\n      opacity: 0.2;\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n      top: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to left, rgba(43, 8, 26, 0), #d92680);\r\n      -webkit-animation: 2s animateTop linear infinite;\r\n              animation: 2s animateTop linear infinite;\r\n    }\r\n  \r\n  @keyframes animateTop {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n      top: 0px;\r\n      right: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to top, rgba(43, 8, 26, 0), #d92680);\r\n      -webkit-animation: 2s animateRight linear -1s infinite;\r\n              animation: 2s animateRight linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateRight {\r\n      0% {\r\n        transform: translateY(100%);\r\n      }\r\n      100% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n      bottom: 0px;\r\n      left: 0px;\r\n      width: 100%;\r\n      height: 2px;\r\n      background: linear-gradient(to right, rgba(43, 8, 26, 0), #d92680);\r\n      -webkit-animation: 2s animateBottom linear infinite;\r\n              animation: 2s animateBottom linear infinite;\r\n    }\r\n  \r\n  @keyframes animateBottom {\r\n      0% {\r\n        transform: translateX(-100%);\r\n      }\r\n      100% {\r\n        transform: translateX(100%);\r\n      }\r\n    }\r\n  \r\n  .animated-button12[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n      top: 0px;\r\n      left: 0px;\r\n      height: 100%;\r\n      width: 2px;\r\n      background: linear-gradient(to bottom, rgba(43, 8, 26, 0), #d92680);\r\n      -webkit-animation: 2s animateLeft linear -1s infinite;\r\n              animation: 2s animateLeft linear -1s infinite;\r\n    }\r\n  \r\n  @keyframes animateLeft {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n      100% {\r\n        transform: translateY(100%);\r\n      }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw0RUFBNEU7O0VBRTlFOztFQUVBO0lBR0UscUJBQXFCO0lBQ3JCLHFCQUFhO1lBQWIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNkRBQTZEOztFQUUvRDs7RUFJQTs7TUFFSSxzQkFBc0I7TUFDdEIsVUFBVTtFQUNkOztFQUVBOztNQUVJLGFBQWE7TUFDYixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFVBQVU7RUFDZDs7RUFHQTs7Ozs7SUFLRTs7RUFDRDtNQUNHLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxnRUFBZ0U7TUFDaEUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFViwrREFBK0Q7TUFDL0Qsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixrRUFBa0U7TUFDbEUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxnRUFBZ0U7TUFDaEUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFViwrREFBK0Q7TUFDL0Qsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixrRUFBa0U7TUFDbEUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxnRUFBZ0U7TUFDaEUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFViwrREFBK0Q7TUFDL0Qsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixrRUFBa0U7TUFDbEUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLDZEQUE2RDtNQUM3RCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLHFCQUFxQjtNQUViLDRCQUE0QjtNQUNwQyxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFFYiwwQ0FBMEM7SUFDcEQ7O0VBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsVUFBVTtNQUVWLG1DQUFtQztJQUNyQzs7RUFFQTtNQUNFLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxpRUFBaUU7TUFDakUsZ0RBQWdEO2NBQ3hDLHdDQUF3QztJQUNsRDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsWUFBWTtNQUNaLFVBQVU7TUFFVixnRUFBZ0U7TUFDaEUsc0RBQXNEO2NBQzlDLDhDQUE4QztJQUN4RDs7RUFFQTtNQUNFO1FBRVUsMkJBQTJCO01BQ3JDO01BQ0E7UUFFVSw0QkFBNEI7TUFDdEM7SUFDRjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLFdBQVc7TUFFWCxrRUFBa0U7TUFDbEUsbURBQW1EO2NBQzNDLDJDQUEyQztJQUNyRDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRjs7RUFFQTtNQUNFLFFBQVE7TUFDUixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFFVixtRUFBbUU7TUFDbkUscURBQXFEO2NBQzdDLDZDQUE2QztJQUN2RDs7RUFFQTtNQUNFO1FBRVUsNEJBQTRCO01BQ3RDO01BQ0E7UUFFVSwyQkFBMkI7TUFDckM7SUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BpZWRyYS1wYXBlbC10aWplcmEvcGllZHJhLXBhcGVsLXRpamVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZpZXJ0ZXtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICBmaWx0ZXI6IEZsaXBIO1xyXG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xyXG4gIH1cclxuICAuaW1hZ2VuOmhvdmVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VuOmFjdGl2ZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJlZCwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5jb2x1bW5he1xyXG4gICAgICBcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGF7XHJcbiAgICAgIFxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICBcclxuICAuYmxvY2t7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qXHJcbiAgICogQW5pbWF0ZWQgQ1NTIGJ1dHRvblxyXG4gICAqIENvcHlyaWdodCBBbGV4YW5kZXIgQm9kaW4gMjAxOS0wOS0wN1xyXG4gICAqXHJcbiAgICogVXNlYWdlOiAuY2xhc3Mge0BpbXBvcnQgYnV0dG9uKCRidXR0b24tc2l6ZSwgJGh1ZSwgJHNhdCk7fVxyXG4gICAqL1xyXG4gICAuYW5pbWF0ZWQtYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzBiMWIzZCA1MCUsICMwODE0MmIgNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZDRlMGY3O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1OTJhZDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b246aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDgsIDIwLCA0MywgMCkpLCB0bygjMjY2MmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsIDIwLCA0MywgMCksICMyNjYyZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDgsIDIwLCA0MywgMCkpLCB0bygjMjY2MmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoOCwgMjAsIDQzLCAwKSwgIzI2NjJkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDgsIDIwLCA0MywgMCkpLCB0bygjMjY2MmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg4LCAyMCwgNDMsIDApLCAjMjY2MmQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlQm90dG9tIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlQm90dG9tIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDgsIDIwLCA0MywgMCkpLCB0bygjMjY2MmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoOCwgMjAsIDQzLCAwKSwgIzI2NjJkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVMZWZ0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzNkMGIwYiA1MCUsICMyYjA4MDggNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZjdkNGQ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjE6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDg1ODU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMSBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMSBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg0MywgOCwgOCwgMCkpLCB0bygjZDkyNjI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDQzLCA4LCA4LCAwKSwgI2Q5MjYyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSg0MywgOCwgOCwgMCkpLCB0bygjZDkyNjI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNDMsIDgsIDgsIDApLCAjZDkyNjI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoNDMsIDgsIDgsIDApKSwgdG8oI2Q5MjYyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDMsIDgsIDgsIDApLCAjZDkyNjI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoNDMsIDgsIDgsIDApKSwgdG8oI2Q5MjYyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDQzLCA4LCA4LCAwKSwgI2Q5MjYyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24yIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzNkMjQwYiA1MCUsICMyYjFhMDggNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZjdlNmQ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjI6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDk5ODU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg0MywgMjYsIDgsIDApKSwgdG8oI2Q5ODAyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg0MywgMjYsIDgsIDApLCAjZDk4MDI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVRvcCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24yIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDQzLCAyNiwgOCwgMCkpLCB0bygjZDk4MDI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNDMsIDI2LCA4LCAwKSwgI2Q5ODAyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVSaWdodCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24yIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDQzLCAyNiwgOCwgMCkpLCB0bygjZDk4MDI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MywgMjYsIDgsIDApLCAjZDk4MDI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24yIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoNDMsIDI2LCA4LCAwKSksIHRvKCNkOTgwMjYpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg0MywgMjYsIDgsIDApLCAjZDk4MDI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMZWZ0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTMwZGVnLCAjM2QzZDBiIDUwJSwgIzJiMmIwOCA1MCUpO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgY29sb3I6ICNmN2Y3ZDQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMzo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYWQ4NTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24zOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24zIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24zIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDQzLCA0MywgOCwgMCkpLCB0bygjZDlkOTI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDQzLCA0MywgOCwgMCksICNkOWQ5MjYpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlVG9wIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjMgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKHJnYmEoNDMsIDQzLCA4LCAwKSksIHRvKCNkOWQ5MjYpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg0MywgNDMsIDgsIDApLCAjZDlkOTI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjMgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoNDMsIDQzLCA4LCAwKSksIHRvKCNkOWQ5MjYpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQzLCA0MywgOCwgMCksICNkOWQ5MjYpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlQm90dG9tIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjMgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSg0MywgNDMsIDgsIDApKSwgdG8oI2Q5ZDkyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDQzLCA0MywgOCwgMCksICNkOWQ5MjYpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsICMyNDNkMGIgNTAlLCAjMWEyYjA4IDUwJSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBjb2xvcjogI2U2ZjdkNDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b240OjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlhZDg1O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjQ6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjQgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjQgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoMjYsIDQzLCA4LCAwKSksIHRvKCM4MGQ5MjYpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjYsIDQzLCA4LCAwKSwgIzgwZDkyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNCBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSgyNiwgNDMsIDgsIDApKSwgdG8oIzgwZDkyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI2LCA0MywgOCwgMCksICM4MGQ5MjYpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNCBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgyNiwgNDMsIDgsIDApKSwgdG8oIzgwZDkyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsIDQzLCA4LCAwKSwgIzgwZDkyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVCb3R0b20ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNCBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDI2LCA0MywgOCwgMCkpLCB0bygjODBkOTI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjYsIDQzLCA4LCAwKSwgIzgwZDkyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b241IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzBiM2QwYiA1MCUsICMwODJiMDggNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZDRmN2Q0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjU6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWFkODU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNSBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNSBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCA0MywgOCwgMCkpLCB0bygjMjZkOTI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsIDQzLCA4LCAwKSwgIzI2ZDkyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCA0MywgOCwgMCkpLCB0bygjMjZkOTI2KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoOCwgNDMsIDgsIDApLCAjMjZkOTI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjUgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoOCwgNDMsIDgsIDApKSwgdG8oIzI2ZDkyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoOCwgNDMsIDgsIDApLCAjMjZkOTI2KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b241IHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoOCwgNDMsIDgsIDApKSwgdG8oIzI2ZDkyNikpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDgsIDQzLCA4LCAwKSwgIzI2ZDkyNik7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b242IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzBiM2QyNCA1MCUsICMwODJiMWEgNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZDRmN2U2O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWFkOTk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNjpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNiBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCA0MywgMjYsIDApKSwgdG8oIzI2ZDk4MCkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg4LCA0MywgMjYsIDApLCAjMjZkOTgwKTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVRvcCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b242IHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDgsIDQzLCAyNiwgMCkpLCB0bygjMjZkOTgwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoOCwgNDMsIDI2LCAwKSwgIzI2ZDk4MCk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVSaWdodCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b242IHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDgsIDQzLCAyNiwgMCkpLCB0bygjMjZkOTgwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg4LCA0MywgMjYsIDApLCAjMjZkOTgwKTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b242IHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoOCwgNDMsIDI2LCAwKSksIHRvKCMyNmQ5ODApKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg4LCA0MywgMjYsIDApLCAjMjZkOTgwKTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMZWZ0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTMwZGVnLCAjMGIzZDNkIDUwJSwgIzA4MmIyYiA1MCUpO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgY29sb3I6ICNkNGY3Zjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uNzo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1YWRhZDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b243OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b243IHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b243IHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDgsIDQzLCA0MywgMCkpLCB0bygjMjZkOWQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsIDQzLCA0MywgMCksICMyNmQ5ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlVG9wIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjcgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKHJnYmEoOCwgNDMsIDQzLCAwKSksIHRvKCMyNmQ5ZDkpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg4LCA0MywgNDMsIDApLCAjMjZkOWQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjcgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoOCwgNDMsIDQzLCAwKSksIHRvKCMyNmQ5ZDkpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDgsIDQzLCA0MywgMCksICMyNmQ5ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlQm90dG9tIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjcgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSg4LCA0MywgNDMsIDApKSwgdG8oIzI2ZDlkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDgsIDQzLCA0MywgMCksICMyNmQ5ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsICMwYjI0M2QgNTAlLCAjMDgxYTJiIDUwJSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBjb2xvcjogI2Q0ZTZmNztcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b244OjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU5OWFkO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjg6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjggc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjggc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoOCwgMjYsIDQzLCAwKSksIHRvKCMyNjgwZDkpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoOCwgMjYsIDQzLCAwKSwgIzI2ODBkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOCBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCAyNiwgNDMsIDApKSwgdG8oIzI2ODBkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDgsIDI2LCA0MywgMCksICMyNjgwZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOCBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSg4LCAyNiwgNDMsIDApKSwgdG8oIzI2ODBkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoOCwgMjYsIDQzLCAwKSwgIzI2ODBkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVCb3R0b20ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOCBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDgsIDI2LCA0MywgMCkpLCB0bygjMjY4MGQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoOCwgMjYsIDQzLCAwKSwgIzI2ODBkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b245IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzBiMGIzZCA1MCUsICMwODA4MmIgNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZDRkNGY3O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjk6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1YWQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOSBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOSBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCA4LCA0MywgMCkpLCB0bygjMjYyNmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDgsIDgsIDQzLCAwKSwgIzI2MjZkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uOSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSg4LCA4LCA0MywgMCkpLCB0bygjMjYyNmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoOCwgOCwgNDMsIDApLCAjMjYyNmQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjkgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoOCwgOCwgNDMsIDApKSwgdG8oIzI2MjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoOCwgOCwgNDMsIDApLCAjMjYyNmQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b245IHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoOCwgOCwgNDMsIDApKSwgdG8oIzI2MjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDgsIDgsIDQzLCAwKSwgIzI2MjZkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsICMyNDBiM2QgNTAlLCAjMWEwODJiIDUwJSk7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBjb2xvcjogI2U2ZDRmNztcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMDo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5ODVhZDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMDpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEwIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDI2LCA4LCA0MywgMCkpLCB0bygjODAyNmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI2LCA4LCA0MywgMCksICM4MDI2ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlVG9wIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEwIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDI2LCA4LCA0MywgMCkpLCB0bygjODAyNmQ5KSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjYsIDgsIDQzLCAwKSwgIzgwMjZkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVSaWdodCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMCBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgyNiwgOCwgNDMsIDApKSwgdG8oIzgwMjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjYsIDgsIDQzLCAwKSwgIzgwMjZkOSk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVCb3R0b20ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTAgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyNiwgOCwgNDMsIDApKSwgdG8oIzgwMjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI2LCA4LCA0MywgMCksICM4MDI2ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTMwZGVnLCAjM2QwYjNkIDUwJSwgIzJiMDgyYiA1MCUpO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgY29sb3I6ICNmN2Q0Zjc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTE6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDg1YWQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjExIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMSBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSg0MywgOCwgNDMsIDApKSwgdG8oI2Q5MjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg0MywgOCwgNDMsIDApLCAjZDkyNmQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVRvcCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVRvcCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSg0MywgOCwgNDMsIDApKSwgdG8oI2Q5MjZkOSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDQzLCA4LCA0MywgMCksICNkOTI2ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlUmlnaHQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoNDMsIDgsIDQzLCAwKSksIHRvKCNkOTI2ZDkpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQzLCA4LCA0MywgMCksICNkOTI2ZDkpO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlQm90dG9tIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlQm90dG9tIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjExIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoNDMsIDgsIDQzLCAwKSksIHRvKCNkOTI2ZDkpKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg0MywgOCwgNDMsIDApLCAjZDkyNmQ5KTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVMZWZ0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMZWZ0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zMGRlZywgIzNkMGIyNCA1MCUsICMyYjA4MWEgNTAlKTtcclxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiAjZjdkNGU2O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEyOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWQ4NTk5O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEyOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMiBzcGFuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTIgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoNDMsIDgsIDI2LCAwKSksIHRvKCNkOTI2ODApKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoNDMsIDgsIDI2LCAwKSwgI2Q5MjY4MCk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlVG9wIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IDJzIGFuaW1hdGVUb3AgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVUb3Age1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYW5pbWF0ZWQtYnV0dG9uMTIgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKHJnYmEoNDMsIDgsIDI2LCAwKSksIHRvKCNkOTI2ODApKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg0MywgOCwgMjYsIDApLCAjZDkyNjgwKTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVSaWdodCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZVJpZ2h0IGxpbmVhciAtMXMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZVJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFuaW1hdGVkLWJ1dHRvbjEyIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDQzLCA4LCAyNiwgMCkpLCB0bygjZDkyNjgwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MywgOCwgMjYsIDApLCAjZDkyNjgwKTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IDJzIGFuaW1hdGVCb3R0b20gbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUJvdHRvbSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUJvdHRvbSB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hbmltYXRlZC1idXR0b24xMiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDQzLCA4LCAyNiwgMCkpLCB0bygjZDkyNjgwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNDMsIDgsIDI2LCAwKSwgI2Q5MjY4MCk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBhbmltYXRlTGVmdCBsaW5lYXIgLTFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgYW5pbWF0ZUxlZnQgbGluZWFyIC0xcyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PiedraPapelTijeraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-piedra-papel-tijera',
                templateUrl: './piedra-papel-tijera.component.html',
                styleUrls: ['./piedra-papel-tijera.component.css']
            }]
    }], function () { return [{ type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"] }, { type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_3__["JuegoServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/pokemon/batalla/batalla.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/pokemon/batalla/batalla.component.ts ***!
  \******************************************************************/
/*! exports provided: BatallaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatallaComponent", function() { return BatallaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BatallaComponent_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatallaComponent_div_2_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.atacar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Atacar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BatallaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BatallaComponent_div_2_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r48.clase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r48.ProgresoDeAncho);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HP: ", ctx_r48.tuPokemon.hp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r48.claseAtaque);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r48.tuPokemon.data.sprites.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.tuRival && ctx_r48.puedoAtacar);
} }
function BatallaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.clase);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r49.ProgresoDeAnchoRival);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HP: ", ctx_r49.tuRival.hp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.claseAtaqueRival);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r49.tuRival.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BatallaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatallaComponent_div_4_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.reinicio($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Otra Vez!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.resultado);
} }
class BatallaComponent {
    constructor() {
        this.puedoAtacar = true;
        this.ganador = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.claseAtaque = "";
        this.claseAtaqueRival = "";
        this.ProgresoDeAncho = "100%";
        this.ProgresoDeAnchoRival = "100%";
        this.termino = false;
        this.effects = ["pulse", "rubberBand", "shake", "swing", "tada"];
    }
    ngOnInit() {
    }
    atacar() {
        this.puedoAtacar = false;
        setTimeout(() => {
            this.claseAtaque = "miAtaque " + this.effects[Math.floor(Math.random() * (4 - 0)) + 1] + " animated";
        }, 100);
        setTimeout(() => {
            this.claseAtaque = "";
        }, 1000);
        let ataque = Math.floor(Math.random() * (50 - 1)) + 1;
        let vidaOp = this.tuRival.hp - ataque;
        if (vidaOp >= 0) {
            this.tuRival.hp -= ataque;
            this.ProgresoDeAnchoRival = this.tuRival.hp + "%";
        }
        else {
            this.tuRival.hp = 0;
            this.ProgresoDeAnchoRival = "0%";
        }
        setTimeout(() => {
            setTimeout(() => {
                this.claseAtaqueRival = "miAtaque " + this.effects[Math.floor(Math.random() * (4 - 0)) + 1] + " animated";
            }, 100);
            setTimeout(() => {
                this.claseAtaqueRival = "";
            }, 1000);
            let ataque = Math.floor(Math.random() * (50 - 1)) + 1;
            let vidaTuya = this.tuPokemon.hp - ataque;
            if (vidaTuya >= 0) {
                this.tuPokemon.hp -= ataque;
                this.ProgresoDeAncho = this.tuPokemon.hp + "%";
                this.validarBatalla(this.tuPokemon.hp, this.tuRival.hp);
            }
            else {
                this.tuPokemon.hp = 0;
                this.ProgresoDeAncho = "0%";
                this.validarBatalla(this.tuPokemon.hp, this.tuRival.hp);
            }
            this.puedoAtacar = true;
        }, 1000);
    }
    validarBatalla(hpTuyo, hpRival) {
        setTimeout(() => {
            if (hpTuyo > 0 && hpRival > 0) {
                this.termino = false;
            }
            else if (hpTuyo == 0 && hpRival > 0) {
                this.resultado = "PERDISTE!";
                this.claseAtaqueRival = "victoria bounce animated";
                this.termino = true;
                this.puedoAtacar = false;
            }
            else if (hpRival == 0 && hpTuyo > 0) {
                this.resultado = "GANASTE!";
                this.claseAtaque = "victoria bounce animated";
                this.termino = true;
                this.puedoAtacar = false;
            }
            else if (hpRival == 0 && hpTuyo == 0) {
                this.resultado = "EMPATE!";
                this.termino = true;
                this.puedoAtacar = false;
            }
        }, 1000);
    }
    reinicio($event) {
        this.tuRival = null;
        this.tuPokemon = null;
        this.miPokemon = null;
        this.mirival = null;
        this.ProgresoDeAncho = "100%";
        this.ProgresoDeAnchoRival = "100%";
        this.claseAtaque = "";
        this.claseAtaqueRival = "";
        this.puedoAtacar = true;
        console.log($event);
        this.termino = false;
        this.ganador.emit($event);
    }
}
BatallaComponent.ɵfac = function BatallaComponent_Factory(t) { return new (t || BatallaComponent)(); };
BatallaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BatallaComponent, selectors: [["app-batalla"]], inputs: { tuPokemon: "tuPokemon", tuRival: "tuRival" }, outputs: { ganador: "ganador" }, decls: 5, vars: 3, consts: [[1, "container"], [1, "container2"], ["class", "tuPokemon", 4, "ngIf"], ["class", "tuRival", 4, "ngIf"], ["class", "popup", 4, "ngIf"], [1, "tuPokemon"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100"], ["alt", "", 3, "src"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "tuRival"], [1, "popup"], [1, "info"], [1, "btns"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger"]], template: function BatallaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BatallaComponent_div_2_Template, 6, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BatallaComponent_div_3_Template, 5, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BatallaComponent_div_4_Template, 9, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tuPokemon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tuRival);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.termino);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  margin-top: 10%;\r\n\r\n}\r\n.container2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: rgba(56, 54, 54, 0.801);\r\n  justify-content: space-around;\r\n  border-radius: 2rem;\r\n  background-image: url('arena.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  border:1px solid white;\r\n  width: 50vw;\r\n  height: 40vh;\r\n  margin-right: 5%;\r\n}\r\n.progress[_ngcontent-%COMP%] {\r\n  width: 20vw;\r\n  margin-top: 1%;\r\n}\r\n.tuPokemon[_ngcontent-%COMP%] {\r\n  height: 25vh;\r\n  width: 25vw;\r\n  bottom: 0;\r\n  margin-top:15%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n.tuPokemon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n  width: 80%;\r\n}\r\n.tuPokemon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n.tuRival[_ngcontent-%COMP%] {\r\n  height: 20vh;\r\n  width: 20vw;\r\n  margin-top: 5%;\r\n}\r\n.tuRival[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.miAtaque[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\r\n  -webkit-animation-iteration-count: initial;\r\n          animation-iteration-count: initial;\r\n}\r\n.victoria[_ngcontent-%COMP%] {\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 1s;\r\n          animation-delay: 1s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n.popup[_ngcontent-%COMP%] {\r\n  margin: 3% auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 20vw;\r\n  height: 10vh;\r\n  background-color: rgba(255, 255, 255, 0.842);\r\n  border-radius: 2rem;\r\n  padding: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 1%;\r\n}\r\n.btns[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin-bottom: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcG9rZW1vbi9iYXRhbGxhL2JhdGFsbGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtDQUE4RDtFQUM5RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcG9rZW1vbi9iYXRhbGxhL2JhdGFsbGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxufVxyXG4uY29udGFpbmVyMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuODAxKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9hcmVuYS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4udHVQb2tlbW9uIHtcclxuICBoZWlnaHQ6IDI1dmg7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6MTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR1UG9rZW1vbiBpbWcge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50dVBva2Vtb24gYnV0dG9uIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udHVSaXZhbCB7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4udHVSaXZhbCBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1pQXRhcXVlIHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5pdGlhbDtcclxufVxyXG4udmljdG9yaWEge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICBtYXJnaW46IDMlIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQyKTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuLmJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BatallaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-batalla',
                templateUrl: './batalla.component.html',
                styleUrls: ['./batalla.component.css']
            }]
    }], function () { return []; }, { tuPokemon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tuRival: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ganador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/componentes/pokemon/elegir-pokemon/elegir-pokemon.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/pokemon/elegir-pokemon/elegir-pokemon.component.ts ***!
  \********************************************************************************/
/*! exports provided: ElegirPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElegirPokemonComponent", function() { return ElegirPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clases_poke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clases/poke */ "./src/app/clases/poke.ts");
/* harmony import */ var _servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../servicios/pokemon.service */ "./src/app/servicios/pokemon.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ElegirPokemonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirPokemonComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const pokemon_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.elegirPokemon(pokemon_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Elegir tu Pokemon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirPokemonComponent_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const pokemon_r40 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.elegirRival(pokemon_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elegir tu Rival!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r40.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemon_r40.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ElegirPokemonComponent {
    constructor(pokeSvc, router) {
        this.pokeSvc = pokeSvc;
        this.router = router;
        this.tuPokemon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tuRival = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.banner = "Que Comience la batalla";
        this.pokemons = [];
    }
    ngOnInit() {
        console.log(this.pokemonSeleccionado1, this.pokemonSeleccionado2);
        this.getPokemon(3);
        this.getPokemon(9);
        this.getPokemon(6);
        this.getPokemon(25);
        this.getPokemon(150);
        this.getPokemon(151);
        this.getPokemon(152);
        this.getPokemon(250);
        this.getPokemon(153);
        this.getPokemon(158);
    }
    getPokemon(id) {
        this.pokeSvc.getPokemonById(id).subscribe(data => {
            console.log(data);
            let pokemon = {
                'id': data.id,
                'nombre': data.name,
                'image': "" + data.sprites.front_default,
                'data': data,
                'hp': 100
            };
            console.log(pokemon);
            this.pokemons.push(pokemon);
        });
    }
    elegirPokemon(pokemon) {
        let tu_pokemon = new _clases_poke__WEBPACK_IMPORTED_MODULE_2__["Poke"](pokemon);
        this.tuPokemon.emit(tu_pokemon);
    }
    elegirRival(pokemon) {
        let rival_pokemon = new _clases_poke__WEBPACK_IMPORTED_MODULE_2__["Poke"](pokemon);
        this.tuRival.emit(rival_pokemon);
    }
}
ElegirPokemonComponent.ɵfac = function ElegirPokemonComponent_Factory(t) { return new (t || ElegirPokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ElegirPokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElegirPokemonComponent, selectors: [["app-elegir-pokemon"]], inputs: { banner: "banner", pokemonSeleccionado1: "pokemonSeleccionado1", pokemonSeleccionado2: "pokemonSeleccionado2" }, outputs: { tuPokemon: "tuPokemon", tuRival: "tuRival" }, decls: 4, vars: 2, consts: [[2, "color", "white", "text-align", "center"], [1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["alt", "", 3, "src"], [1, "botones"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ElegirPokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ElegirPokemonComponent_div_3_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.banner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pokemons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    overflow-y: scroll;\r\n    height: 50vh;\r\n    width: 100%;\r\n    margin: 0 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    max-width: 25%;\r\n    width: 25%;\r\n    margin: 3%;\r\n    border-radius: 2rem;\r\n    color: white;\r\n    padding:1rem;\r\n    background-color: #234;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%] {\r\n    margin: 1% 1%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    border: 1px white solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   .tuyo[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n    margin-top: 2%;\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   .rival[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcG9rZW1vbi9lbGVnaXItcG9rZW1vbi9lbGVnaXItcG9rZW1vbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wb2tlbW9uL2VsZWdpci1wb2tlbW9uL2VsZWdpci1wb2tlbW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0O1xyXG59XHJcblxyXG4uY2FyZCAuYm90b25lcyB7XHJcbiAgICBtYXJnaW46IDElIDElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNhcmQgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4gLnR1eW97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG5cclxufVxyXG5cclxuLmJ0biAucml2YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElegirPokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-elegir-pokemon',
                templateUrl: './elegir-pokemon.component.html',
                styleUrls: ['./elegir-pokemon.component.css']
            }]
    }], function () { return [{ type: _servicios_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { tuPokemon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tuRival: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], banner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pokemonSeleccionado1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pokemonSeleccionado2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/componentes/pokemon/pokemon-game/pokemon-game.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/pokemon/pokemon-game/pokemon-game.component.ts ***!
  \****************************************************************************/
/*! exports provided: PokemonGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonGameComponent", function() { return PokemonGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _elegir_pokemon_elegir_pokemon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elegir-pokemon/elegir-pokemon.component */ "./src/app/componentes/pokemon/elegir-pokemon/elegir-pokemon.component.ts");
/* harmony import */ var _batalla_batalla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../batalla/batalla.component */ "./src/app/componentes/pokemon/batalla/batalla.component.ts");






class PokemonGameComponent {
    constructor(router) {
        this.router = router;
        this.pokemon1 = false;
        this.pokemon2 = false;
    }
    ngOnDestroy() {
        console.log('Method not implemented.');
    }
    ngOnInit() {
    }
    tomarTuPokemon(pokemon) {
        this.pokemonElegido = pokemon;
    }
    tomarTuRival(pokemon) {
        this.rivalElegido = pokemon;
    }
    terminarJuego(ganador) {
        this.pokemonElegido = null;
        this.rivalElegido = null;
        this.pokemon1 = null;
        this.pokemon2 = null;
        console.log("otra vez ");
        console.info(this.pokemon1, this.pokemon2);
    }
}
PokemonGameComponent.ɵfac = function PokemonGameComponent_Factory(t) { return new (t || PokemonGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PokemonGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonGameComponent, selectors: [["app-pokemon-game"]], decls: 3, vars: 4, consts: [[1, "caja"], [3, "pokemonSeleccionado1", "pokemonSeleccionado2", "tuPokemon", "tuRival"], [3, "tuPokemon", "tuRival", "ganador"]], template: function PokemonGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-elegir-pokemon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuPokemon", function PokemonGameComponent_Template_app_elegir_pokemon_tuPokemon_1_listener($event) { return ctx.tomarTuPokemon($event); })("tuRival", function PokemonGameComponent_Template_app_elegir_pokemon_tuRival_1_listener($event) { return ctx.tomarTuRival($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-batalla", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ganador", function PokemonGameComponent_Template_app_batalla_ganador_2_listener($event) { return ctx.terminarJuego($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemonSeleccionado1", ctx.pokemon1)("pokemonSeleccionado2", ctx.pokemon2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuPokemon", ctx.pokemonElegido)("tuRival", ctx.rivalElegido);
    } }, directives: [_elegir_pokemon_elegir_pokemon_component__WEBPACK_IMPORTED_MODULE_2__["ElegirPokemonComponent"], _batalla_batalla_component__WEBPACK_IMPORTED_MODULE_3__["BatallaComponent"]], styles: [".caja[_ngcontent-%COMP%] {\r\n    height: 65vh;\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: start;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcG9rZW1vbi9wb2tlbW9uLWdhbWUvcG9rZW1vbi1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcG9rZW1vbi9wb2tlbW9uLWdhbWUvcG9rZW1vbi1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYSB7XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-game',
                templateUrl: './pokemon-game.component.html',
                styleUrls: ['./pokemon-game.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class PrincipalComponent {
    constructor() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    ngOnInit() {
    }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) { return new (t || PrincipalComponent)(); };
PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrincipalComponent, selectors: [["app-principal"]], decls: 24, vars: 0, consts: [[1, "principal"], [1, "containr"], ["routerLink", "/Juegos", 1, "car"], [1, "imgBx"], ["src", "../../../assets/imagenes/listado.png", "alt", ""], [1, "content"], ["src", "./assets/imagenes/saladejuegos.png", "alt", ""], ["src", "../../../assets/imagenes/Configuracion.png", "alt", ""]], template: function PrincipalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " El m\u00E9todo l\u00FAdico es un conjunto de estrategias dise\u00F1adas para crear un ambiente de armon\u00EDa en los estudiantes que est\u00E1n inmersos en el proceso de aprendizaje. Este m\u00E9todo busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ajustes de la aplicacion y los m\u00E9todos de autentificaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_1__["CabeceraComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".principal[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nmin-height: 60vh;\r\nbackground-color: #234;\r\noverflow: hidden;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 10% 5% auto;\r\n  width: 1050px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  transition: 0.5s;\r\n  transform: skewY(-10deg);\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 400px;\r\n  background-color: #234;\r\n  transition: 0.5;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 15px;\r\n  background: #4579e2;\r\n  transform-origin: bottom;\r\n  transform: skewX(45deg);\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -15px;\r\n  left: -15px;\r\n  width: 15px;\r\n  height: 50%;\r\n  background-color: #4579e2;\r\n  transform-origin: left;\r\n  transform: skewY(45deg);\r\n  transition: 0.5s;\r\n  border-bottom: 400px solid #2d55aa;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-40px);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 200px;\r\n  background-color: #3461c1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100px;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #fff;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 200px;\r\n  padding: 20px;\r\n  color: #777;\r\n  background-color: #234;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 400px;\r\n  background: linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1));\r\n  transform-origin: bottom;\r\n  transform: skewX(45deg);\r\n  transition: 0.5s;\r\n  pointer-events: none;\r\n  z-index: -1;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]:before {\r\n    transform: skewX(45deg) translateY(40px);\r\n    -webkit-filter: blur(5px);\r\n            filter: blur(5px);\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(1){\r\n    z-index: 3;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(2){\r\n    z-index: 2;\r\n}\r\n\r\n\r\n.containr[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%]:nth-child(3){\r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7OztBQUdIO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IseUVBQXlFO0VBQ3pFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7OztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tZWRpYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMTNhOGI0O1xyXG59XHJcblxyXG4ubWVkaWEtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbi5zb2xhcGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hLnNvbGFwYSA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTg0ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IC01ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdW1ib3RyYW4ge1xyXG4gICAgbWFyZ2luOiAwJSA1JTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTcsIDc3LCAwLjEwMik7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbn0gKi9cclxuXHJcblxyXG4ucHJpbmNpcGFse1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxubWluLWhlaWdodDogNjB2aDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzIzNDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMCUgNSUgYXV0bztcclxuICB3aWR0aDogMTA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRyYW5zZm9ybTogc2tld1koLTEwZGVnKTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0O1xyXG4gIHRyYW5zaXRpb246IDAuNTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzQ1NzllMjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogLTE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NzllMjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIHRyYW5zZm9ybTogc2tld1koNDVkZWcpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm9yZGVyLWJvdHRvbTogNDAwcHggc29saWQgIzJkNTVhYTtcclxufVxyXG5cclxuLmNvbnRhaW5yIC5jYXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhciAuaW1nQngge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2MWMxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb250YWluciAuY2FyIC5pbWdCeCBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluciAuY2FyIC5pbWdCeCBoMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluciAuY2FyIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhciAuY29udGVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uY29udGFpbnIgLmNhcjpob3ZlciAuY29udGVudDpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY29udGFpbnIgLmNhcjpudGgtY2hpbGQoMSl7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcbi5jb250YWluciAuY2FyOm50aC1jaGlsZCgyKXtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmNvbnRhaW5yIC5jYXI6bnRoLWNoaWxkKDMpe1xyXG4gICAgei1pbmRleDogMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-principal',
                templateUrl: './principal.component.html',
                styleUrls: ['./principal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/componentes/nav-bar/nav-bar.component.ts");



class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuienSoyComponent.ɵfac = function QuienSoyComponent_Factory(t) { return new (t || QuienSoyComponent)(); };
QuienSoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuienSoyComponent, selectors: [["app-quien-soy"]], decls: 34, vars: 0, consts: [["id", "quiwn", 1, "container-fluid", "bg-1", "text-center"], [1, "margin"], ["src", "../../../assets/imagenes/turquia.jpg", "alt", "Bird", "width", "350", "height", "350", 1, "img-responsive", "img-circle", "margin", 2, "display", "inline"], ["id", "que", 1, "container-fluid", "bg-2", "text-center"], ["id", "donde", 1, "container-fluid", "bg-3", "text-center"], [1, "row"], [1, "col-sm-4"], ["src", "../../../assets/imagenes/angular1.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], ["src", "../../../assets/imagenes/github.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], ["src", "../../../assets/imagenes/utnfra.PNG", "alt", "Image", 1, "img-responsive", "margin", "imagenDeQuienSoy"], [1, "container-fluid", "bg-4", "text-center"], ["href", "https://www.nicohnavarro.com.ar"]], template: function QuienSoyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Qui\u00E9n Soy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Soy Un alumno de la UTN FRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Esto es un trabajo pr\u00E1ctico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias did\u00E1cticas y formas de evaluaci\u00F3n diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluaci\u00F3n son elementales tanto para las instituciones y profesores como para los alumnos. A trav\u00E9s de la evaluaci\u00F3n formativa el educador busca informaci\u00F3n en el alumno para lograr comprender c\u00F3mo se est\u00E1 produciendo el proceso de aprendizaje y poder reajustar los objetivos pedag\u00F3gicos. Y para el alumno es una muestra del progreso que est\u00E1 logrando y si puede aplicar, materializar y darle visibilidad a la comprensi\u00F3n del tema. Seg\u00FAn Black y William (1998), la evaluaci\u00F3n formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "D\u00F3nde Funciona?");
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
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]], styles: ["h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color:white;\r\n}\r\n.img-circle[_ngcontent-%COMP%]{\r\n    border-radius: 2rem;\r\n}\r\n.imagenDeQuienSoy[_ngcontent-%COMP%]{\r\n    border-radius: 3rem;\r\n    width:80%;\r\n    height: 60%;\r\n}\r\n.col-sm-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    min-height: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMsIHAge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmltZy1jaXJjbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uaW1hZ2VuRGVRdWllblNveXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmNvbC1zbS00IHB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuienSoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quien-soy',
                templateUrl: './quien-soy.component.html',
                styleUrls: ['./quien-soy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
class RegistroComponent {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    constructor() { }
    ngOnInit() {
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 46, vars: 0, consts: [[1, "jumbotron"], ["id", "terminos"], ["onclick", "document.getElementById('id01').style.display='block'", 2, "width", "auto"], ["routerLink", "/Principal", 1, "cancelbtn", 2, "width", "auto"], ["id", "id01", 1, "modal"], ["onclick", "document.getElementById('id01').style.display='none'", "title", "Close Modal", 1, "close"], [1, "modal-content", "animate"], [1, "container"], ["type", "text", "placeholder", "Ingresa tu correo", "name", "email", "required", ""], ["type", "password", "placeholder", "Aca la clave", "name", "psw", "required", ""], ["type", "password", "placeholder", "Aca repeti la misa clave  de arriba", "name", "psw-repeat", "required", ""], ["type", "checkbox", "checked", "checked"], ["onclick", "document.getElementById('id01').style.display='none'"], [1, "clearfix"], ["type", "button", "onclick", "document.getElementById('id01').style.display='none'", 1, "cancelbtn"], ["type", "submit", 1, "signupbtn"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "El Gobierno de la Rep\u00FAblica Argentina (en adelante el \u201CGobierno Nacional\u201D) no es responsable por los da\u00F1os y perjuicios que puedan surgir, incluyendo, sin l\u00EDmite, da\u00F1os, p\u00E9rdidas o gastos directos, indirectos, que surjan en relaci\u00F3n con el uso de los Activos Digitales o la imposibilidad de uso, en relaci\u00F3n con cualquier falla en el vencimiento, error, omisi\u00F3n, interrupci\u00F3n, defecto, demora en la operaci\u00F3n o transmisi\u00F3n, virus de computadora o falla del sistema de l\u00EDnea, a\u00FAn en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos da\u00F1os, p\u00E9rdidas o gastos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema inform\u00E1tico (software y hardware) o en los documentos electr\u00F3nicos y ficheros almacenados en su sistema inform\u00E1tico.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "El Gobierno Nacional no puede garantizar que la transmisi\u00F3n de informaci\u00F3n por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00D7");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n\r\n\r\n.cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%] {float:left;width:50%}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    padding-top: 60px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; \r\n    border: 1px solid #888;\r\n    width: 98%; \r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn[_ngcontent-%COMP%], .signupbtn[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBLGdDQUFnQzs7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUEsMkRBQTJEOztBQUMzRCx1QkFBdUIsVUFBVSxDQUFDLFNBQVM7O0FBRTNDLHNDQUFzQzs7QUFDdEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUN0QjtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0IsRUFBRSxzREFBc0Q7SUFDaEYsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDcEU7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUEsNkVBQTZFOztBQUM3RTtJQUNJO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGVzIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xyXG4uY2FuY2VsYnRuIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi8qIEZsb2F0IGNhbmNlbCBhbmQgc2lnbnVwIGJ1dHRvbnMgYW5kIGFkZCBhbiBlcXVhbCB3aWR0aCAqL1xyXG4uY2FuY2VsYnRuLC5zaWdudXBidG4ge2Zsb2F0OmxlZnQ7d2lkdGg6NTAlfVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDk4JTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jbGVhcmZpeDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.ts ***!
  \********************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TatetiComponent {
    constructor() { }
    ngOnInit() {
    }
}
TatetiComponent.ɵfac = function TatetiComponent_Factory(t) { return new (t || TatetiComponent)(); };
TatetiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TatetiComponent, selectors: [["app-tateti"]], decls: 2, vars: 0, template: function TatetiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tateti works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TatetiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tateti',
                templateUrl: './tateti.component.html',
                styleUrls: ['./tateti.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SexoPipe {
    transform(value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    }
}
SexoPipe.ɵfac = function SexoPipe_Factory(t) { return new (t || SexoPipe)(); };
SexoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sexo", type: SexoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SexoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sexo'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/mijuego/mijuego.component */ "./src/app/componentes/mijuego/mijuego.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_pokemon_pokemon_game_pokemon_game_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../componentes/pokemon/pokemon-game/pokemon-game.component */ "./src/app/componentes/pokemon/pokemon-game/pokemon-game.component.ts");

// importo del module principal























// declaro donde quiero que se dirija
const MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__["QuienSoyComponent"] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__["ListadoComponent"] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__["ListadoDePaisesComponent"] },
    { path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__["JuegosComponent"],
        children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"] },
            { path: 'PiedraPapelTijera', component: _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_18__["PiedraPapelTijeraComponent"] },
            { path: 'Mijuego', component: _componentes_mijuego_mijuego_component__WEBPACK_IMPORTED_MODULE_17__["MijuegoComponent"] },
            { path: 'Tateti', component: _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_19__["TatetiComponent"] },
            { path: 'Anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_20__["AnagramaComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"] },
            { path: 'Pokemon', component: _componentes_pokemon_pokemon_game_pokemon_game_component__WEBPACK_IMPORTED_MODULE_21__["PokemonGameComponent"] }
        ]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
class RuteandoModule {
}
RuteandoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RuteandoModule });
RuteandoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RuteandoModule_Factory(t) { return new (t || RuteandoModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MiRuteo)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RuteandoModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuteandoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MiRuteo)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




class ArchivosJugadoresService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    traerJugadores(ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(data => {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, err => {
            console.log(err);
        });
    }
}
ArchivosJugadoresService.ɵfac = function ArchivosJugadoresService_Factory(t) { return new (t || ArchivosJugadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"])); };
ArchivosJugadoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArchivosJugadoresService, factory: ArchivosJugadoresService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchivosJugadoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");





class JuegoServiceService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    listar() {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
        this.peticion
            .subscribe(data => {
            console.log("En listar");
            console.log(data);
        }, err => {
            console.info("error: ", err);
        });
        let miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    }
    listarPromesa() {
        this.peticion
            .subscribe(data => {
            console.log("En listarPromesa");
            console.log(data);
        }, err => {
            console.log(err);
        });
        let promesa = new Promise((resolve, reject) => {
            let miArray = new Array();
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
}
JuegoServiceService.ɵfac = function JuegoServiceService_Factory(t) { return new (t || JuegoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"])); };
JuegoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JuegoServiceService, factory: JuegoServiceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JuegoServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");




class JugadoresService {
    //peticion:any;
    constructor(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    traertodos(ruta, filtro) {
        return this.miHttp.traerJugadores(ruta).then(data => {
            console.info("jugadores service", data);
            this.filtrado = data;
            let ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            this.filtrado = this.filtrado.filter(data => data.gano === ganador || filtro == "todos");
            return this.filtrado;
        })
            .catch(errror => {
            console.log("error");
            return this.filtrado;
        });
    }
    getUsuarioActual() {
        return localStorage.getItem("user");
    }
}
JugadoresService.ɵfac = function JugadoresService_Factory(t) { return new (t || JugadoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["ArchivosJugadoresService"])); };
JugadoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JugadoresService, factory: JugadoresService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JugadoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["ArchivosJugadoresService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class MiHttpService {
    constructor(http) {
        this.http = http;
    }
    httpGetP(url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    httpPostP(url, objeto) {
        return this.http
            .get(url)
            .subscribe(data => {
            console.log(data);
            return data;
        });
    }
    httpGetO(url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err.json().error || 'Server error')));
    }
    extractData(res) {
        return res.json() || {};
    }
    handleError(error) {
        return error;
    }
}
MiHttpService.ɵfac = function MiHttpService_Factory(t) { return new (t || MiHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MiHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MiHttpService, factory: MiHttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MiHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




class PaisesService {
    constructor(miHttp) {
        this.miHttp = miHttp;
    }
    listar() {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
            console.log(err);
            return null;
        });
        //return null;
    }
}
PaisesService.ɵfac = function PaisesService_Factory(t) { return new (t || PaisesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"])); };
PaisesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaisesService, factory: PaisesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaisesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/pokemon.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/pokemon.service.ts ***!
  \**********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PokemonService {
    constructor(http) {
        this.http = http;
        this.baseURL = "https://pokeapi.co/api/v2/";
    }
    getPokemonById(id) {
        return this.http.get(`${this.baseURL}pokemon/${id}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servicios/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class UserService {
    constructor(db) {
        this.usuariosCollection = db.collection('usuarios');
        this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getUsuarios() {
        return this.usuarios;
    }
    getUsuario(id) {
        return this.usuariosCollection.doc(id).valueChanges();
    }
    logIn(correo, clave) {
        console.log('aca');
        return this.getUsuarios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => this.verificaUsuarioYclave(resp, correo, clave)));
    }
    verificaUsuarioYclave(elementos, correo, clave) {
        let respuesta = false;
        elementos.forEach((dato) => {
            if (dato.clave == clave && dato.correo == correo) {
                console.log(dato);
                localStorage.setItem('usuario', JSON.stringify(dato));
                respuesta = true;
            }
        });
        return respuesta;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nicolas\Desktop\Laboratorio4\TP-Sala-de-Juegos-ANGULAR-\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map