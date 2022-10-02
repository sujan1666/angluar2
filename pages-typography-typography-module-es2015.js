(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-typography-typography-module"],{

/***/ "9Z6h":
/*!******************************************************!*\
  !*** ./src/app/pages/typography/containers/index.ts ***!
  \******************************************************/
/*! exports provided: TypographyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography-page/typography-page.component */ "AXdn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyPageComponent", function() { return _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_0__["TypographyPageComponent"]; });




/***/ }),

/***/ "AXdn":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/typography/containers/typography-page/typography-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypographyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyPageComponent", function() { return TypographyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/footer/footer.component */ "jQpT");





class TypographyPageComponent {
}
TypographyPageComponent.ɵfac = function TypographyPageComponent_Factory(t) { return new (t || TypographyPageComponent)(); };
TypographyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyPageComponent, selectors: [["app-typography-page"]], decls: 78, vars: 0, consts: [["role", "heading", 1, "page-header"], [1, "typography-content"], [1, "typography-content__wrapper"], [1, "typography-content__item-wrapper"], [1, "typography-content__headings"], [1, "typography-content__colors"], [1, "typography-content__colors_blue"], [1, "typography-content__colors_green"], [1, "typography-content__colors_pink"], [1, "typography-content__colors_yellow"], [1, "typography-content__colors_light-blue"], [1, "typography-content__colors_violet"], [1, "typography-content__settings"], [1, "fw-light"], [1, "fw-medium"], [1, "fw-bold"], [1, "font-uppercase"], [1, "font-lowercase"], [1, "fst-italic"], [1, "typography-content__size"], [1, "fs-sm"], [1, "fs-regular"], [1, "fs-md"], [1, "fs-xl"], [1, "fs-xxl"]], template: function TypographyPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "h1. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "h2. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "h3. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "h4. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "h5. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "h6. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Typography Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "h1. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "h2. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "h3. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "h4. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "h5. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "h6. Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Basic Text Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Basic text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Basic light text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Basic medium text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Basic bold text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "basic lowercase text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "basic lowercase text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Basic Capitalized Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Basic Cursive Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Text Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Heading Typography SM Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Heading Typography Regular Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Heading Typography MD Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Heading Typography XL Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Heading Typography XXL Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".typography-content__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 8px;\n}\n@media (max-width: 576px) {\n  .typography-content__wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.typography-content__item-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  width: 100%;\n  margin: 16px;\n}\n.typography-content__headings[_ngcontent-%COMP%], .typography-content__colors[_ngcontent-%COMP%], .typography-content__settings[_ngcontent-%COMP%], .typography-content__size[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border: 1px dashed #536DFE;\n  padding: 32px 16px;\n}\n@media (max-width: 576px) {\n  .typography-content__headings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__colors[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__settings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__size[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n}\n.typography-content__colors_blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.typography-content__colors_green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.typography-content__colors_pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.typography-content__colors_yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.typography-content__colors_light-blue[_ngcontent-%COMP%] {\n  color: #798DFE;\n}\n.typography-content__colors_violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.fw-light[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.font-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n.fst-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.fs-sm[_ngcontent-%COMP%] {\n  font-size: 11.2px;\n}\n.fs-regular[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.fs-md[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.fs-xl[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.fs-xxl[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHR5cG9ncmFwaHktcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUxKO0FBT0k7RUFKRjtJQUtJLGVBQUE7RUFKSjtBQUNGO0FBT0U7RUFDRSxpRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEo7QUFRRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFTTTtFQURGO0lBRUksaUJBQUE7RUFOTjtBQUNGO0FBV0k7RUFDRSxjQ2xDQztBRHlCUDtBQVlJO0VBQ0UsY0NoQ0U7QURzQlI7QUFhSTtFQUNFLGNDdENDO0FEMkJQO0FBY0k7RUFDRSxjQy9DRztBRG1DVDtBQWVJO0VBQ0UsY0NqRE87QURvQ2I7QUFnQkk7RUFDRSxjQy9DRztBRGlDVDtBQW1CQTtFQUNFLGdCRTdEVztBRjZDYjtBQW1CQTtFQUNFLGdCRWhFVTtBRmdEWjtBQW1CQTtFQUNFLGdCRW5FUTtBRm1EVjtBQW1CQTtFQUNFLHlCQUFBO0FBaEJGO0FBbUJBO0VBQ0UseUJBQUE7QUFoQkY7QUFtQkE7RUFDRSxrQkFBQTtBQWhCRjtBQW1CQTtFQUNFLGlCRWhGTTtBRmdFUjtBQW1CQTtFQUNFLGVFbkZTO0FGbUVYO0FBbUJBO0VBQ0UsZUVwRlU7QUZvRVo7QUFtQkE7RUFDRSxlRXRGTTtBRnNFUjtBQW1CQTtFQUNFLGVFeEZRO0FGd0VWIiwiZmlsZSI6InR5cG9ncmFwaHktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2ZvbnQnO1xyXG5cclxuLnR5cG9ncmFwaHktY29udGVudCB7XHJcblxyXG4gICZfX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faXRlbS13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDNweCAzcHggLTJweCAjQjJCMkIyMUEsIDAgMXB4IDhweCAwICM5QTlBOUExQTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJl9faGVhZGluZ3MsICZfX2NvbG9ycywgJl9fc2V0dGluZ3MsICZfX3NpemUge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICRibHVlO1xyXG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb2xvcnMge1xyXG4gICAgJl9ibHVlIHtcclxuICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgfVxyXG5cclxuICAgICZfZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICZfcGluayB7XHJcbiAgICAgIGNvbG9yOiAkcGluaztcclxuICAgIH1cclxuXHJcbiAgICAmX3llbGxvdyB7XHJcbiAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgfVxyXG5cclxuICAgICZfbGlnaHQtYmx1ZSB7XHJcbiAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmX3Zpb2xldCB7XHJcbiAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZ3LWxpZ2h0IHtcclxuICBmb250LXdlaWdodDogJGZ3LWxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5mdy1tZWRpdW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiAkZnctbm9ybWFsO1xyXG59XHJcblxyXG4uZnctYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6ICRmdy1ib2xkO1xyXG59XHJcblxyXG4uZm9udC11cHBlcmNhc2Uge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mb250LWxvd2VyY2FzZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5cclxuLmZzdC1pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZzLXNtIHtcclxuICBmb250LXNpemU6ICRmcy14cztcclxufVxyXG5cclxuLmZzLXJlZ3VsYXIge1xyXG4gIGZvbnQtc2l6ZTogJGZzLXNtYWxsO1xyXG59XHJcblxyXG4uZnMtbWQge1xyXG4gIGZvbnQtc2l6ZTogJGZzLW1lZGl1bTtcclxufVxyXG5cclxuLmZzLXhsIHtcclxuICBmb250LXNpemU6ICRmcy14bDtcclxufVxyXG5cclxuLmZzLXh4bCB7XHJcbiAgZm9udC1zaXplOiAkZnMteHh4bDtcclxufVxyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ "LBeg":
/*!***************************************************************!*\
  !*** ./src/app/pages/typography/typography-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TypographyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyRoutingModule", function() { return TypographyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "9Z6h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_1__["TypographyPageComponent"]
    }
];
class TypographyRoutingModule {
}
TypographyRoutingModule.ɵfac = function TypographyRoutingModule_Factory(t) { return new (t || TypographyRoutingModule)(); };
TypographyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TypographyRoutingModule });
TypographyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TypographyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "R+Zu":
/*!*******************************************************!*\
  !*** ./src/app/pages/typography/typography.module.ts ***!
  \*******************************************************/
/*! exports provided: TypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return TypographyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "9Z6h");
/* harmony import */ var _typography_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography-routing.module */ "LBeg");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class TypographyModule {
}
TypographyModule.ɵfac = function TypographyModule_Factory(t) { return new (t || TypographyModule)(); };
TypographyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TypographyModule });
TypographyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _typography_routing_module__WEBPACK_IMPORTED_MODULE_4__["TypographyRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TypographyModule, { declarations: [_containers__WEBPACK_IMPORTED_MODULE_3__["TypographyPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _typography_routing_module__WEBPACK_IMPORTED_MODULE_4__["TypographyRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-typography-typography-module-es2015.js.map