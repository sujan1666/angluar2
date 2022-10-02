(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "JZxs":
/*!************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/info-toastr/info-toastr.component.ts ***!
  \************************************************************************************/
/*! exports provided: InfoToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoToastrComponent", function() { return InfoToastrComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class InfoToastrComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
InfoToastrComponent.ɵfac = function InfoToastrComponent_Factory(t) { return new (t || InfoToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastPackage"])); };
InfoToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InfoToastrComponent, selectors: [["app-info-toastr"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function InfoToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InfoToastrComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #536DFE;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZm8tdG9hc3RyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHRvYXNydC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEREY7O0FBRUE7RUNpQkUsZ0JDUFM7RURRVCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEZkY7O0FBSEE7RUNzQkUsYUFBQTtFQUNBLG1CQUFBO0FEZkY7O0FBTEU7RUN3QkEsU0FBQTtBRGhCRjs7QUFIQTtFQ3VCRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURoQkY7O0FBTEE7RUNiRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUNQTTtFRFFOLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ2xCSztFRG1CTCxZQUFBO0FEc0JGIiwiZmlsZSI6ImluZm8tdG9hc3RyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdG9hc3J0JztcclxuXHJcbi50b2FzdHItd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLXdyYXBwZXI7XHJcbn1cclxuXHJcbi50b2FzdHItd3JhcHBlci1pY29uIHtcclxuICBAaW5jbHVkZSB0b2FzdHItd3JhcHBlci1pY29uO1xyXG59XHJcblxyXG4udG9hc3RyLWNvbnRlbnQge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci1jb250ZW50O1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBAaW5jbHVkZSB0b2FzdHItY29udGVudC10aXRsZTtcclxuICB9XHJcbn1cclxuXHJcbi50b2FzdHItaWNvbiB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLWljb247XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBAaW5jbHVkZSB0b2FzdHIoJGJsdWUpO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbkBtaXhpbiB0b2FzdHItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1peGluIHRvYXN0cigkY29sb3IpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMCA2cHggMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjU3cHg7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci13cmFwcGVyLWljb24ge1xyXG4gIGNvbG9yOiR3aGl0ZS04MDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1jb250ZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItaWNvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });


/***/ }),

/***/ "UUPU":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "hgcd");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-routing.module */ "lyFq");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotificationRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_containers__WEBPACK_IMPORTED_MODULE_5__["NotificationPageComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_5__["SuccessToastComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_5__["ErrorToastrComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_5__["InfoToastrComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotificationRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();


/***/ }),

/***/ "gDqv":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/success-toast/success-toast.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SuccessToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessToastComponent", function() { return SuccessToastComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class SuccessToastComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
SuccessToastComponent.ɵfac = function SuccessToastComponent_Factory(t) { return new (t || SuccessToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastPackage"])); };
SuccessToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SuccessToastComponent, selectors: [["app-success-toast"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function SuccessToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessToastComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #3CD4A0;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN1Y2Nlc3MtdG9hc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcdG9hc3J0LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNBRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURERjs7QUFFQTtFQ2lCRSxnQkNQUztFRFFULFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURmRjs7QUFIQTtFQ3NCRSxhQUFBO0VBQ0EsbUJBQUE7QURmRjs7QUFMRTtFQ3dCQSxTQUFBO0FEaEJGOztBQUhBO0VDdUJFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRGhCRjs7QUFMQTtFQ2JFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQ1BNO0VEUU4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDWk07RURhTixZQUFBO0FEc0JGIiwiZmlsZSI6InN1Y2Nlc3MtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy90b2FzcnQnO1xyXG5cclxuLnRvYXN0ci13cmFwcGVyIHtcclxuICBAaW5jbHVkZSB0b2FzdHItd3JhcHBlcjtcclxufVxyXG5cclxuLnRvYXN0ci13cmFwcGVyLWljb24ge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci13cmFwcGVyLWljb247XHJcbn1cclxuXHJcbi50b2FzdHItY29udGVudCB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLWNvbnRlbnQ7XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIEBpbmNsdWRlIHRvYXN0ci1jb250ZW50LXRpdGxlO1xyXG4gIH1cclxufVxyXG5cclxuLnRvYXN0ci1pY29uIHtcclxuICBAaW5jbHVkZSB0b2FzdHItaWNvbjtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIEBpbmNsdWRlIHRvYXN0cigkZ3JlZW4pO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbkBtaXhpbiB0b2FzdHItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1peGluIHRvYXN0cigkY29sb3IpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMCA2cHggMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjU3cHg7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci13cmFwcGVyLWljb24ge1xyXG4gIGNvbG9yOiR3aGl0ZS04MDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1jb250ZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItaWNvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });


/***/ }),

/***/ "hgcd":
/*!********************************************************!*\
  !*** ./src/app/pages/notification/containers/index.ts ***!
  \********************************************************/
/*! exports provided: NotificationPageComponent, SuccessToastComponent, ErrorToastrComponent, InfoToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-page/notification-page.component */ "wYh4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationPageComponent", function() { return _notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_0__["NotificationPageComponent"]; });

/* harmony import */ var _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-toast/success-toast.component */ "gDqv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessToastComponent", function() { return _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__["SuccessToastComponent"]; });

/* harmony import */ var _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-toastr/error-toastr.component */ "rMT1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorToastrComponent", function() { return _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__["ErrorToastrComponent"]; });

/* harmony import */ var _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-toastr/info-toastr.component */ "JZxs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoToastrComponent", function() { return _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__["InfoToastrComponent"]; });







/***/ }),

/***/ "lyFq":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "hgcd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_1__["NotificationPageComponent"]
    }
];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵfac = function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); };
NotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "rMT1":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/error-toastr/error-toastr.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ErrorToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorToastrComponent", function() { return ErrorToastrComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ErrorToastrComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
ErrorToastrComponent.ɵfac = function ErrorToastrComponent_Factory(t) { return new (t || ErrorToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastPackage"])); };
ErrorToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ErrorToastrComponent, selectors: [["app-error-toastr"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function ErrorToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Message was not sent!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ErrorToastrComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #ff4081;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVycm9yLXRvYXN0ci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx0b2FzcnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0FFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRERGOztBQUVBO0VDaUJFLGdCQ1BTO0VEUVQsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRGZGOztBQUhBO0VDc0JFLGFBQUE7RUFDQSxtQkFBQTtBRGZGOztBQUxFO0VDd0JBLFNBQUE7QURoQkY7O0FBSEE7RUN1QkUsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEaEJGOztBQUxBO0VDYkUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlDUE07RURRTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNkSztFRGVMLFlBQUE7QURzQkYiLCJmaWxlIjoiZXJyb3ItdG9hc3RyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdG9hc3J0JztcclxuXHJcbi50b2FzdHItd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLXdyYXBwZXI7XHJcbn1cclxuXHJcbi50b2FzdHItd3JhcHBlci1pY29uIHtcclxuICBAaW5jbHVkZSB0b2FzdHItd3JhcHBlci1pY29uO1xyXG59XHJcblxyXG4udG9hc3RyLWNvbnRlbnQge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci1jb250ZW50O1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBAaW5jbHVkZSB0b2FzdHItY29udGVudC10aXRsZTtcclxuICB9XHJcbn1cclxuXHJcbi50b2FzdHItaWNvbiB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLWljb247XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBAaW5jbHVkZSB0b2FzdHIoJHBpbmspO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbkBtaXhpbiB0b2FzdHItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1peGluIHRvYXN0cigkY29sb3IpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMCA2cHggMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjU3cHg7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci13cmFwcGVyLWljb24ge1xyXG4gIGNvbG9yOiR3aGl0ZS04MDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1jb250ZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItaWNvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });


/***/ }),

/***/ "wYh4":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/notification-page/notification-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NotificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageComponent", function() { return NotificationPageComponent; });
/* harmony import */ var _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../success-toast/success-toast.component */ "gDqv");
/* harmony import */ var _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error-toastr/error-toastr.component */ "rMT1");
/* harmony import */ var _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-toastr/info-toastr.component */ "JZxs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/footer/footer.component */ "jQpT");












const _c0 = function (a0) { return { active: a0 }; };
var ToastPositionTypes;
(function (ToastPositionTypes) {
    ToastPositionTypes["bottomCenter"] = "toast-bottom-center";
    ToastPositionTypes["bottomRight"] = "toast-bottom-right";
    ToastPositionTypes["bottomLeft"] = "toast-bottom-left";
    ToastPositionTypes["topCenter"] = "toast-top-center";
    ToastPositionTypes["topRight"] = "toast-top-right";
    ToastPositionTypes["topLeft"] = "toast-top-left";
})(ToastPositionTypes || (ToastPositionTypes = {}));
class NotificationPageComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.toastrPositionTypes = ToastPositionTypes;
        this.toastrPosition = this.toastrPositionTypes.topRight;
        this.timeOut = 3000;
        this.toastrLink = 'https://github.com/scttcper/ngx-toastr';
    }
    setToastrPosition(position) {
        this.toastrPosition = position;
    }
    showSuccess() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_0__["SuccessToastComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
    showErrorToastr() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_1__["ErrorToastrComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
    showInfoToastr() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_2__["InfoToastrComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
}
NotificationPageComponent.ɵfac = function NotificationPageComponent_Factory(t) { return new (t || NotificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
NotificationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationPageComponent, selectors: [["app-notification-page"]], decls: 181, vars: 29, consts: [["role", "heading", 1, "page-header"], [1, "page-content"], [1, "page-content__first-item-wrapper"], [1, "page-content__first-item-element"], [1, "select-position"], [1, "select-position__items-wrapper"], [1, "select-position__item-top", 3, "ngClass", "click"], [1, "select-position__center-top-item", 3, "ngClass", "click"], [1, "select-position__title"], [1, "select-position__item-bottom", 3, "ngClass", "click"], [1, "select-position__center-bottom-item", 3, "ngClass", "click"], [1, "position-buttons-wrapper"], ["mat-raised-button", "", 1, "position-button", "position-button_blue", 3, "click"], ["mat-raised-button", "", 1, "position-button", "position-button_pink", 3, "click"], ["mat-raised-button", "", 1, "position-button", "position-button_green", 3, "click"], [1, "link", 3, "href"], [1, "code-block"], [1, "code-wrapper"], [1, "code"], [1, "page-content__items-wrapper"], [1, "page-content__item"], [1, "notification", "notification_solid-pink"], [1, "notification__icon-wrapper", "notification__icon-wrapper_transparent"], [1, "notification__title", "notification__title_white"], [1, "notification", "notification_solid-blue"], [1, "notification", "notification_solid-green"], [1, "notification", "notification_solid-yellow"], [1, "notification", "notification_solid-violet"], [1, "notification", "notification_transparent-pink"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-pink"], [1, "notification__title"], [1, "notification", "notification_transparent-blue"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-blue"], [1, "notification", "notification_transparent-green"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-green"], [1, "notification", "notification_transparent-yellow"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-yellow"], [1, "icon-rotate"], [1, "notification", "notification_transparent-violet"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-violet"], [1, "notification"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-pink"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-blue"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-green"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-yellow"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-violet"]], template: function NotificationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Layout Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "There are few position options available for notifications. You can click any of them to change notifications position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_16_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topLeft); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_17_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topCenter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_18_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topRight); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Click any position");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_22_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomLeft); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_23_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomCenter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_24_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomRight); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Notifications Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Different types of notifications for lost of use cases. Custom classes are also supported.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_34_listener() { return ctx.showInfoToastr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Info Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_36_listener() { return ctx.showErrorToastr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Error + Retry Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_38_listener() { return ctx.showSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Success Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Notifications are created with the help of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "ngx-toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "For more API information refer to the library documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Thanks for Checking out Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "New customer is registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "The order was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "business_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "The order was delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "5 Defence alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "New report has been received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "The new message from user @nahawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "get_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Your file is ready to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "disc_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "The disc is full");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "New report has been received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "The new message from user @nahawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "get_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Your file is ready to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "disc_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "The disc is full");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topCenter));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topRight));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomCenter));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomRight));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.toastrLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolateV"](["\nimport ", "{", " ToastrService ", "}", " from 'ngx-toastr';\n\n@Component(", "{", "...", "}", ")\n  export class YourComponent ", "{", "\n  constructor(private toastr: ToastrService) ", "{", "", "}", "\n\n  showSuccess() ", "{", "\n    this.toastr.success(\n      'Hello world!', 'Toastr fun!'\n    );\n  ", "}", "\n", "}", "\n"]);
    } }, directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".page-content[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.page-content__item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.page-content__items-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n@media (max-width: 576px) {\n  .page-content__items-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.page-content__first-item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n@media (max-width: 576px) {\n  .page-content__first-item-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding-bottom: 0;\n  }\n}\n.page-content__first-item-element[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n}\n@media (max-width: 576px) {\n  .page-content__first-item-element[_ngcontent-%COMP%] {\n    padding: 0 0 16px 0;\n  }\n}\n.page-content__item[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  width: 100%;\n}\n.select-position[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 200px;\n  border: 1px dashed #536DFE;\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 576px) {\n  .select-position[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.select-position__items-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n}\n.select-position__item[_ngcontent-%COMP%], .select-position__item-bottom[_ngcontent-%COMP%], .select-position__item-top[_ngcontent-%COMP%], .select-position__center-bottom-item[_ngcontent-%COMP%], .select-position__center-top-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-color: #F3F5FF;\n  border: 0;\n  outline: none;\n}\n.select-position__item.active[_ngcontent-%COMP%], .active.select-position__item-bottom[_ngcontent-%COMP%], .active.select-position__item-top[_ngcontent-%COMP%], .active.select-position__center-bottom-item[_ngcontent-%COMP%], .active.select-position__center-top-item[_ngcontent-%COMP%] {\n  background-color: #c0caff;\n  cursor: default;\n}\n.select-position__center-top-item[_ngcontent-%COMP%] {\n  border-left: 1px dashed #536DFE;\n  border-right: 1px dashed #536DFE;\n  border-top: none;\n  border-bottom: 1px dashed #536DFE;\n}\n.select-position__center-bottom-item[_ngcontent-%COMP%] {\n  border-left: 1px dashed #536DFE;\n  border-right: 1px dashed #536DFE;\n  border-top: 1px dashed #536DFE;\n  border-bottom: none;\n}\n.select-position__item-top[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 1px dashed #536DFE;\n}\n.select-position__item-bottom[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: 1px dashed #536DFE;\n  border-bottom: none;\n}\n.select-position__title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  color: #c0caff;\n  font-size: 21px;\n  font-weight: 400;\n}\n.mat-card-content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child.position-buttons-wrapper {\n  margin-top: 33px;\n}\n.position-button[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  margin-bottom: 8px;\n}\n.position-button_blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.position-button_pink[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n.position-button_green[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media (max-width: 576px) {\n  .code-block[_ngcontent-%COMP%] {\n    margin-top: 33px;\n  }\n}\n.code-wrapper[_ngcontent-%COMP%] {\n  margin-top: 49px;\n  font-size: 11.2px;\n  display: block;\n  overflow-x: auto;\n  padding: 7px;\n  color: #4A4A4A;\n  background: #F3F5FF;\n  height: 277px;\n  overflow-y: hidden;\n}\n.code[_ngcontent-%COMP%] {\n  text-wrap: none;\n}\n.link[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  height: 45px;\n  border-radius: 45px;\n}\n.notification_solid-pink[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n.notification_solid-blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.notification_solid-green[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.notification_solid-yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.notification_solid-violet[_ngcontent-%COMP%] {\n  background-color: #9013FE;\n}\n.notification_transparent-pink[_ngcontent-%COMP%] {\n  background-color: rgba(255, 92, 147, 0.15);\n}\n.notification_transparent-blue[_ngcontent-%COMP%] {\n  background-color: rgba(83, 109, 254, 0.15);\n}\n.notification_transparent-green[_ngcontent-%COMP%] {\n  background-color: rgba(60, 212, 160, 0.15);\n}\n.notification_transparent-yellow[_ngcontent-%COMP%] {\n  background-color: rgba(255, 194, 96, 0.15);\n}\n.notification_transparent-violet[_ngcontent-%COMP%] {\n  background-color: rgba(144, 19, 254, 0.15);\n}\n.notification__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.notification__title_white[_ngcontent-%COMP%] {\n  color: white;\n}\n.notification__icon-wrapper[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification__icon-wrapper_transparent[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n}\n.notification__icon-wrapper_transparent-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.notification__icon-wrapper_transparent-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification__icon-wrapper_transparent-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.notification__icon-wrapper_transparent-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.notification__icon-wrapper_transparent-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.notification__icon-wrapper_solid-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.notification__icon-wrapper_solid-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification__icon-wrapper_solid-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.notification__icon-wrapper_solid-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.notification__icon-wrapper_solid-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.notification__icon-wrapper-circle[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 45px;\n  margin-right: 16px;\n}\n.notification__icon-wrapper-circle_transparent-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n  background-color: rgba(255, 92, 147, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n  background-color: rgba(83, 109, 254, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n  background-color: rgba(60, 212, 160, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n  background-color: rgba(255, 194, 96, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n  background-color: rgba(144, 19, 254, 0.15);\n}\n.icon-rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGNBQUE7QUFIRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUpKO0FBTUk7RUFKRjtJQUtJLGVBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsaUZBQUE7QUFKSjtBQU1JO0VBSkY7SUFLSSxlQUFBO0lBQ0EsaUJBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpKO0FBTUk7RUFKRjtJQUtJLG1CQUFBO0VBSEo7QUFDRjtBQU1FO0VBQ0UsaUZBQUE7RUFDQSxXQUFBO0FBSko7QUFTQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBTkY7QUFRRTtFQVRGO0lBVUksV0FBQTtFQUxGO0FBQ0Y7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxKO0FBUUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNsRVM7RURtRVQsU0FBQTtFQUNBLGFBQUE7QUFOSjtBQVFJO0VBQ0UseUJDOURBO0VEK0RBLGVBQUE7QUFOTjtBQVVFO0VBRUUsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFUSjtBQVlFO0VBRUUsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFiSjtBQWdCRTtFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQ3RHRTtFRHVHRixlRTNHUTtFRjRHUixnQkVySFM7QUZxR2I7QUFvQkE7RUFDRSxnQkFBQTtBQWpCRjtBQW9CQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFqQkY7QUFtQkU7RUFDRSx5QkNsSUc7QURpSFA7QUFvQkU7RUFDRSx5QkNsSUc7QURnSFA7QUFxQkU7RUFDRSx5QkNwSUk7QURpSFI7QUF1QkE7RUFDRSxnQkFBQTtBQXBCRjtBQXNCRTtFQUhGO0lBSUksZ0JBQUE7RUFuQkY7QUFDRjtBQXNCQTtFQUNFLGdCQUFBO0VBQ0EsaUJFcEpNO0VGcUpOLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ25KVTtFRG9KVixtQkMxSlc7RUQySlgsYUFBQTtFQUNBLGtCQUFBO0FBbkJGO0FBc0JBO0VBQ0UsZUFBQTtBQW5CRjtBQXNCQTtFQUNFLGNDdktLO0FEb0pQO0FBc0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbkJGO0FBc0JJO0VBQ0UseUJDaExDO0FENEpQO0FBdUJJO0VBQ0UseUJDeExDO0FEbUtQO0FBd0JJO0VBQ0UseUJDdExFO0FEZ0tSO0FBeUJJO0VBQ0UseUJDak1HO0FEMEtUO0FBMEJJO0VBQ0UseUJDN0xHO0FEcUtUO0FBNkJJO0VBQ0UsMENDbExJO0FEdUpWO0FBOEJJO0VBQ0UsMENDckxJO0FEeUpWO0FBK0JJO0VBQ0UsMENDeExLO0FEMkpYO0FBZ0NJO0VBQ0UsMENDM0xNO0FENkpaO0FBaUNJO0VBQ0UsMENDOUxNO0FEK0paO0FBbUNFO0VBQ0UsU0FBQTtBQWpDSjtBQW1DSTtFQUNFLFlDMU5FO0FEeUxSO0FBcUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW5DSjtBQXFDSTtFQUNFLGdCQzlOSztBRDJMWDtBQXFDTTtFQUNFLGNDN09EO0FEME1QO0FBc0NNO0VBQ0UsY0NyUEQ7QURpTlA7QUF1Q007RUFDRSxjQ25QQTtBRDhNUjtBQXdDTTtFQUNFLGNDOVBDO0FEd05UO0FBeUNNO0VBQ0UsY0MxUEM7QURtTlQ7QUE0Q007RUFDRSxjQ25RRDtBRHlOUDtBQTZDTTtFQUNFLGNDM1FEO0FEZ09QO0FBOENNO0VBQ0UsY0N6UUE7QUQ2TlI7QUErQ007RUFDRSxjQ3BSQztBRHVPVDtBQWdETTtFQUNFLGNDaFJDO0FEa09UO0FBbURFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqREo7QUFvRE07RUFDRSxjQ25TRDtFRG9TQywwQ0NoUkU7QUQ4TlY7QUFxRE07RUFDRSxjQzVTRDtFRDZTQywwQ0NwUkU7QURpT1Y7QUFzRE07RUFDRSxjQzNTQTtFRDRTQSwwQ0N4Ukc7QURvT1g7QUF1RE07RUFDRSxjQ3ZUQztFRHdURCwwQ0M1Ukk7QUR1T1o7QUF3RE07RUFDRSxjQ3BUQztFRHFURCwwQ0NoU0k7QUQwT1o7QUE0REE7RUFDRSx5QkFBQTtBQXpERiIsImZpbGUiOiJub3RpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZm9udFwiO1xyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcblxyXG4gICZfX2l0ZW0td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZmlyc3QtaXRlbS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgJHNoYWRvdy13aGl0ZSwgMCAzcHggM3B4IC0ycHggJHNoYWRvdy1ncmV5LCAwIDFweCA4cHggMCAkc2hhZG93LWRhcmstZ3JleTtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ZpcnN0LWl0ZW0tZWxlbWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgcGFkZGluZzogMCAwIDE2cHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICNFOEVBRkMsIDAgM3B4IDNweCAtMnB4ICNCMkIyQjIxQSwgMCAxcHggOHB4IDAgIzlBOUE5QTFBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdC1wb3NpdGlvbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbXMtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS13aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2t5O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jZW50ZXItdG9wLWl0ZW0ge1xyXG4gICAgQGV4dGVuZCAuc2VsZWN0LXBvc2l0aW9uX19pdGVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfX2NlbnRlci1ib3R0b20taXRlbSB7XHJcbiAgICBAZXh0ZW5kIC5zZWxlY3QtcG9zaXRpb25fX2l0ZW07XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbS10b3Age1xyXG4gICAgQGV4dGVuZCAuc2VsZWN0LXBvc2l0aW9uX19pdGVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0tYm90dG9tIHtcclxuICAgIEBleHRlbmQgLnNlbGVjdC1wb3NpdGlvbl9faXRlbTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogJHNreTtcclxuICAgIGZvbnQtc2l6ZTogJGZzLW1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkLnBvc2l0aW9uLWJ1dHRvbnMtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMzNweDtcclxufVxyXG5cclxuLnBvc2l0aW9uLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICZfYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfcGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICB9XHJcblxyXG4gICZfZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvZGUtYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgIG1hcmdpbi10b3A6IDMzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29kZS13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA0OXB4O1xyXG4gIGZvbnQtc2l6ZTogJGZzLXhzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGNvbG9yOiAkZGFyay1ncmV5O1xyXG4gIGJhY2tncm91bmQ6ICRibHVlLXdoaXRlO1xyXG4gIGhlaWdodDogMjc3cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgdGV4dC13cmFwOiBub25lO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuXHJcbiAgJl9zb2xpZCB7XHJcbiAgICAmLXBpbmsge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgIH1cclxuXHJcbiAgICAmLWJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICYteWVsbG93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuXHJcbiAgICAmLXZpb2xldCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX3RyYW5zcGFyZW50IHtcclxuICAgICYtcGluayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rLTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tMTU7XHJcbiAgICB9XHJcblxyXG4gICAgJi15ZWxsb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtdmlvbGV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpb2xldC0xNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmX3doaXRlIHtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJl90cmFuc3BhcmVudCB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGUtODA7XHJcblxyXG4gICAgICAmLXBpbmsge1xyXG4gICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ibHVlIHtcclxuICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtZ3JlZW4ge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYteWVsbG93IHtcclxuICAgICAgICBjb2xvcjogJHllbGxvdztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi12aW9sZXQge1xyXG4gICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9zb2xpZCB7XHJcbiAgICAgICYtcGluayB7XHJcbiAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWJsdWUge1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi15ZWxsb3cge1xyXG4gICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXZpb2xldCB7XHJcbiAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24td3JhcHBlci1jaXJjbGUge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuXHJcbiAgICAmX3RyYW5zcGFyZW50IHtcclxuICAgICAgJi1waW5rIHtcclxuICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbmstMTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtYmx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLTE1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWdyZWVuIHtcclxuICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JGdyZWVuLTE1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXllbGxvdyB7XHJcbiAgICAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdy0xNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi12aW9sZXQge1xyXG4gICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQtMTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pY29uLXJvdGF0ZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es2015.js.map