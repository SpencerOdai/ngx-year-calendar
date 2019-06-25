(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.html":
/*!********************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/calendar/calendar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\" *ngIf=\"currentCalendar\">\n  <span class=\"grid__weekday-label\" *ngFor=\"let weekDay of weekDays; let i = index\">\n    {{ weekDay | slice: 0: calendarConfig.weekdayCharLength }}\n  </span>\n  <div *ngFor=\"let day of currentCalendar.days; let i = index\" class=\"grid__day\" [ngClass]=\"{\n        selected: day === selectedDay,\n        completed: day.status === 1,\n        disabled: day.status === 2,\n        failed: day.status === 3\n      }\" [ngStyle]=\"{ 'grid-row': getRow(i, day), 'grid-column': day.dayInWeek + 1 }\"\n    (click)=\"calendarConfig.clickDay(day) || onChangeStatus(day)\" (mouseover)=\"calendarConfig.mouseOver(day)\"\n    (mouseenter)=\"calendarConfig.mouseEnter(day)\" (mouseleave)=\"calendarConfig.mouseLeave(day)\"\n    (contextmenu)=\"calendarConfig.rightClickDay(day)\">\n    <span>{{ day.dayInMonth }}</span>\n    <!-- <div class=\"events\" *ngIf=\"day.events && day.events.length > 0\">\n      <span class=\"event\" [ngStyle]=\"{'backgroundColor': item.color}\"\n        *ngFor=\"let item of day.events | slice: 0: 3\"></span>\n      <span *ngIf=\"day.events.length > 3\"> + </span>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.scss":
/*!********************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/calendar/calendar.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid {\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr); }\n  :host .grid__weekday-label {\n    color: #6096BA;\n    font-weight: 500;\n    margin: 10px 0;\n    font-size: 13px;\n    text-align: center; }\n  :host .grid__day {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    border-color: #274C77;\n    color: #3C3744;\n    font-size: 13px;\n    border-radius: 4px;\n    cursor: pointer; }\n  :host .grid__day:hover {\n      background: #C1BFC3; }\n  :host .grid__day.selected {\n      background: #C1BFC3; }\n  :host .grid__day.disabled {\n      color: #8B8C89;\n      cursor: not-allowed; }\n  :host .grid__day span {\n      width: 25px;\n      height: 20px;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-justify-content: center;\n              justify-content: center;\n      -webkit-align-items: center;\n              align-items: center;\n      border-width: 1px;\n      border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9TcGVuY2VyT2RhaS9uZ3gteWVhci1jYWxlbmRhci9wcm9qZWN0cy9uZ3gteWVhci1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvU3BlbmNlck9kYWkvbmd4LXllYXItY2FsZW5kYXIvcHJvamVjdHMvbmd4LXllYXItY2FsZW5kYXIvc3JjL2xpYi9zdHlsZS9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0ksZUFBZTtFQUNmLGFBQWE7RUFDYixxQ0FBcUMsRUFBQTtFQUx6QztJQVFNLGNDVGM7SURVZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQVp4QjtJQWdCTSxxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixxQkN0Qm9CO0lEdUJwQixjQ1pTO0lEYVQsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUF4QnJCO01BMkJRLG1CQ3BCUyxFQUFBO0VEUGpCO01BK0JRLG1CQ3hCUyxFQUFBO0VEUGpCO01BbUNRLGNDM0JTO01ENEJULG1CQUFtQixFQUFBO0VBcEMzQjtNQXdDUSxXQUFXO01BQ1gsWUFBWTtNQUNaLHFCQUFhO01BQWIsYUFBYTtNQUNiLCtCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsMkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LXllYXItY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGUvc3R5bGUuc2Nzcyc7XG5cbjpob3N0IHtcblxuICAuZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcblxuICAgICZfX3dlZWtkYXktbGFiZWwge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19kYXkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JzLCBkYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgc3RhYmxlKTtcbiAgICAgIH1cblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgc3RhYmxlKTtcbiAgICAgIH1cblxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIG1lZGl1bSk7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuXG4gICAgfVxuICB9XG5cblxuXG5cbn1cbiIsIiRjb2xvcnM6IChwcmltYXJ5OiAjMjc0Qzc3LFxuICBzZWNvbmRhcnk6ICM2MDk2QkEsXG4gIHRlcnRpYXJ5OiAjQTNDRUYxLFxuICBhY2NlbnQ6ICNDNkQ4RDMsXG4gIGJhc2ljOiAjQTU5NEY5LFxuICBpbmZvOiAjNUQ3MzdFLFxuICBzdWNjZXNzOiAjNjlCQTYwLFxuICB3YXJuOiAjRjJFRUE0LFxuICBkYW5nZXI6ICNCQTZFNjAsXG4gIHN0YWJsZTogI0MxQkZDMyxcbiAgbWVkaXVtOiAjOEI4Qzg5LFxuICBkYXJrOiAjM0MzNzQ0LFxuICBsaWdodDogI0U3RUNFRilcbiJdfQ== */"

/***/ }),

/***/ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.ts":
/*!******************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/calendar/calendar.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/calendar */ "../ngx-year-calendar/src/lib/models/calendar.ts");
/* harmony import */ var _services_year_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/year-calendar.service */ "../ngx-year-calendar/src/lib/services/year-calendar.service.ts");




var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(_yearCalendarService) {
        this._yearCalendarService = _yearCalendarService;
        this.months = [];
        this.selectedMonth = new Date().getMonth();
        this.selectedYear = new Date().getFullYear();
        this.weekDays = [];
        this.currentCalendar = new _models_calendar__WEBPACK_IMPORTED_MODULE_2__["ICalendar"](this.selectedYear, this.selectedMonth, []);
        this.loading = false;
    }
    CalendarComponent.prototype.ngOnChanges = function (changes) {
        var prevYear = changes.selectedYear.previousValue;
        var currentYear = changes.selectedYear.currentValue;
        if (prevYear !== currentYear) {
            this.currentCalendar = new _models_calendar__WEBPACK_IMPORTED_MODULE_2__["ICalendar"](this.selectedYear, this.selectedMonth, [], [new Date()]);
        }
    };
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarConfig = this._yearCalendarService.configureCalendar();
        this.selectedDay = this.currentCalendar.currentDay;
        this._yearCalendarService.dateChangeEvent.subscribe(function (day) {
            if (day) {
                _this.selectedDay = day;
            }
        });
    };
    CalendarComponent.prototype.getRow = function (index, day) {
        var startRow = 2;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CalendarComponent.prototype.onChangeStatus = function (day) {
        this._yearCalendarService.dateChangeEvent.next(day);
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.curICalendarSub) {
            this.curICalendarSub.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('month'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "selectedMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('year'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "selectedYear", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_year_calendar_service__WEBPACK_IMPORTED_MODULE_3__["YearCalendarService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.html":
/*!******************************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar\">\n  <div class=\"years\">\n    <div class=\"years__left-arrow\" (click)=\"selectedYear = selectedYear - 1\">\n      <i class=\"fa fa-chevron-left\"></i>\n    </div>\n    <div class=\"years__content\">\n      <div (click)=\"selectedYear = selectedYear - 2\">{{selectedYear - 2}}</div>\n      <div (click)=\"selectedYear = selectedYear - 1\">{{selectedYear - 1}}</div>\n      <div class=\"current\">{{selectedYear}}</div>\n      <div (click)=\"selectedYear = selectedYear + 1\">{{selectedYear + 1 }}</div>\n      <div (click)=\"selectedYear = selectedYear + 2\">{{selectedYear + 2}}</div>\n    </div>\n    <div class=\"years__right-arrow\" (click)=\"selectedYear = selectedYear + 1\">\n      <i class=\"fa fa-chevron-right\"></i>\n    </div>\n  </div>\n\n  <div class=\"months\">\n    <div class=\"month\" *ngFor=\"let month of months; let i = index\">\n      <h3>{{month}}</h3>\n      <ngx-calendar #calendar [month]=\"i\" [year]=\"selectedYear\"></ngx-calendar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.scss":
/*!******************************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .calendar {\n    overflow: hidden;\n    width: 100%; }\n  :host .calendar .years {\n      display: -webkit-flex;\n      display: flex;\n      margin-bottom: 20px; }\n  :host .calendar .years__left-arrow, :host .calendar .years__right-arrow, :host .calendar .years__content {\n        display: -webkit-flex;\n        display: flex; }\n  :host .calendar .years__left-arrow, :host .calendar .years__right-arrow {\n        padding: 10px 20px 10px 20px;\n        border: 1px solid #C1BFC3;\n        cursor: pointer; }\n  :host .calendar .years__left-arrow {\n        border-top-left-radius: 6px;\n        border-bottom-left-radius: 6px; }\n  :host .calendar .years__right-arrow {\n        border-top-right-radius: 6px;\n        border-bottom-right-radius: 6px; }\n  :host .calendar .years__content {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1;\n                flex: 1; }\n  :host .calendar .years__content div {\n          -webkit-flex: 1;\n                  flex: 1;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-justify-content: center;\n                  justify-content: center;\n          -webkit-align-items: center;\n                  align-items: center;\n          border: 1px solid #C1BFC3;\n          border-left: 0; }\n  :host .calendar .years__content div:last-of-type {\n            border-right: 0; }\n  :host .calendar .years__content div.current {\n            background: #6096BA;\n            color: #E7ECEF; }\n  :host .calendar .months {\n      width: 100%;\n      display: grid;\n      grid-template-columns: repeat(auto-fill, 200px);\n      grid-gap: 10px;\n      -webkit-align-items: center;\n              align-items: center;\n      -webkit-justify-content: center;\n              justify-content: center; }\n  :host .calendar .months .month {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-align-items: center;\n                align-items: center;\n        border-color: #274C77;\n        color: #3C3744;\n        cursor: pointer; }\n  :host .calendar .months .month h3 {\n          margin: 3px 0;\n          font-weight: 14px;\n          font-weight: 500;\n          color: #274C77; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9TcGVuY2VyT2RhaS9uZ3gteWVhci1jYWxlbmRhci9wcm9qZWN0cy9uZ3gteWVhci1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMveWVhci1jYWxlbmRhci95ZWFyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL1NwZW5jZXJPZGFpL25neC15ZWFyLWNhbGVuZGFyL3Byb2plY3RzL25neC15ZWFyLWNhbGVuZGFyL3NyYy9saWIvc3R5bGUvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWMsRUFBQTtFQURoQjtJQUlJLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFMZjtNQVFNLHFCQUFhO01BQWIsYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBVHpCO1FBY1EscUJBQWE7UUFBYixhQUFhLEVBQUE7RUFkckI7UUFtQlEsNEJBQTRCO1FBQzVCLHlCQ2JTO1FEY1QsZUFBZSxFQUFBO0VBckJ2QjtRQXlCUSwyQkFBMkI7UUFDM0IsOEJBQThCLEVBQUE7RUExQnRDO1FBOEJRLDRCQUE0QjtRQUM1QiwrQkFBK0IsRUFBQTtFQS9CdkM7UUFtQ1EscUJBQWE7UUFBYixhQUFhO1FBQ2IsZUFBTztnQkFBUCxPQUFPLEVBQUE7RUFwQ2Y7VUF1Q1UsZUFBTztrQkFBUCxPQUFPO1VBQ1AscUJBQWE7VUFBYixhQUFhO1VBQ2IsK0JBQXVCO2tCQUF2Qix1QkFBdUI7VUFDdkIsMkJBQW1CO2tCQUFuQixtQkFBbUI7VUFDbkIseUJDcENPO1VEcUNQLGNBQWMsRUFBQTtFQTVDeEI7WUErQ1ksZUFBZSxFQUFBO0VBL0MzQjtZQW1EWSxtQkNwRFE7WURxRFIsY0MxQ0ksRUFBQTtFRFZoQjtNQTJETSxXQUFXO01BQ1gsYUFBYTtNQUNiLCtDQUErQztNQUMvQyxjQUFjO01BQ2QsMkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFoRTdCO1FBbUVRLHFCQUFhO1FBQWIsYUFBYTtRQUNiLDhCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDJCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLHFCQ3hFa0I7UUR5RWxCLGNDOURPO1FEK0RQLGVBQWUsRUFBQTtFQXhFdkI7VUEyRVUsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQixnQkFBZ0I7VUFDaEIsY0NoRmdCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LXllYXItY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3llYXItY2FsZW5kYXIveWVhci1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZS9zdHlsZS5zY3NzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmNhbGVuZGFyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnllYXJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAmX19sZWZ0LWFycm93LFxuICAgICAgJl9fcmlnaHQtYXJyb3csXG4gICAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgJl9fbGVmdC1hcnJvdyxcbiAgICAgICZfX3JpZ2h0LWFycm93IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbWFwLWdldCgkY29sb3JzLCBzdGFibGUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgICZfX2xlZnQtYXJyb3cge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgJl9fcmlnaHQtYXJyb3cge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgfVxuXG4gICAgICAmX19jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hcC1nZXQoJGNvbG9ycywgc3RhYmxlKTtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcblxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmN1cnJlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkY29sb3JzLCBzZWNvbmRhcnkpO1xuICAgICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgbGlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb250aHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMDBweCk7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLm1vbnRoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkY29sb3JzLCBkYXJrKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvcnM6IChwcmltYXJ5OiAjMjc0Qzc3LFxuICBzZWNvbmRhcnk6ICM2MDk2QkEsXG4gIHRlcnRpYXJ5OiAjQTNDRUYxLFxuICBhY2NlbnQ6ICNDNkQ4RDMsXG4gIGJhc2ljOiAjQTU5NEY5LFxuICBpbmZvOiAjNUQ3MzdFLFxuICBzdWNjZXNzOiAjNjlCQTYwLFxuICB3YXJuOiAjRjJFRUE0LFxuICBkYW5nZXI6ICNCQTZFNjAsXG4gIHN0YWJsZTogI0MxQkZDMyxcbiAgbWVkaXVtOiAjOEI4Qzg5LFxuICBkYXJrOiAjM0MzNzQ0LFxuICBsaWdodDogI0U3RUNFRilcbiJdfQ== */"

/***/ }),

/***/ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.ts":
/*!****************************************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: YearCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearCalendarComponent", function() { return YearCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_year_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/year-calendar.service */ "../ngx-year-calendar/src/lib/services/year-calendar.service.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/calendar.component */ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.ts");




var YearCalendarComponent = /** @class */ (function () {
    function YearCalendarComponent(_yearCalendarService) {
        this._yearCalendarService = _yearCalendarService;
        this.months = [];
        this.selectedYear = new Date().getFullYear();
        this.calendarConfig = null;
    }
    Object.defineProperty(YearCalendarComponent.prototype, "years", {
        get: function () {
            var currentYear = this.selectedYear + 10;
            var years = [];
            var startYear = 1980;
            while (startYear <= currentYear) {
                years.push(startYear++);
            }
            return years;
        },
        enumerable: true,
        configurable: true
    });
    YearCalendarComponent.prototype.ngOnInit = function () {
        this.calendarConfig = this._yearCalendarService.configureCalendar();
        this.months = this.calendarConfig.months;
    };
    YearCalendarComponent.prototype.prevYear = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"])
    ], YearCalendarComponent.prototype, "calendar", void 0);
    YearCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-year-calendar',
            template: __webpack_require__(/*! ./year-calendar.component.html */ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.html"),
            styles: [__webpack_require__(/*! ./year-calendar.component.scss */ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_year_calendar_service__WEBPACK_IMPORTED_MODULE_2__["YearCalendarService"]])
    ], YearCalendarComponent);
    return YearCalendarComponent;
}());



/***/ }),

/***/ "../ngx-year-calendar/src/lib/helpers/config.ts":
/*!******************************************************!*\
  !*** ../ngx-year-calendar/src/lib/helpers/config.ts ***!
  \******************************************************/
/*! exports provided: CALENDARCONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDARCONFIG", function() { return CALENDARCONFIG; });
var CALENDARCONFIG = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdayCharLength: 3,
    monthCharLength: null,
    clickDay: function () { },
    mouseEnter: function () { },
    mouseLeave: function () { },
    mouseOver: function () { },
    rightClickDay: function () { }
};


/***/ }),

/***/ "../ngx-year-calendar/src/lib/helpers/index.ts":
/*!*****************************************************!*\
  !*** ../ngx-year-calendar/src/lib/helpers/index.ts ***!
  \*****************************************************/
/*! exports provided: CALENDARCONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../ngx-year-calendar/src/lib/helpers/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALENDARCONFIG", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["CALENDARCONFIG"]; });




/***/ }),

/***/ "../ngx-year-calendar/src/lib/models/calendar.ts":
/*!*******************************************************!*\
  !*** ../ngx-year-calendar/src/lib/models/calendar.ts ***!
  \*******************************************************/
/*! exports provided: ICalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICalendar", function() { return ICalendar; });
/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day */ "../ngx-year-calendar/src/lib/models/day.ts");

var ICalendar = /** @class */ (function () {
    function ICalendar(year, month, events, disabledDates, _days) {
        if (events === void 0) { events = []; }
        if (_days === void 0) { _days = []; }
        var _this = this;
        this.year = year;
        this.month = month;
        this.events = events;
        this.disabledDates = disabledDates;
        this._days = _days;
        if (_days.length > 0) {
            return;
        }
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var _loop_1 = function (i) {
            var calEvents = [];
            var date = new Date(year, month, i);
            var dayInWeek = date.getDay();
            events.forEach(function (eventItem) {
                var _eventItem = Object.assign({}, eventItem);
                var start = _this.startOfDay(eventItem.start);
                var end = _this.endOfDay(eventItem.start);
                if (date >= start && date <= end) {
                    calEvents.push(_eventItem);
                }
            });
            this_1._days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: disabledDates && this_1.disabledStatus(date) ? _day__WEBPACK_IMPORTED_MODULE_0__["DayStatus"].Disabled : _day__WEBPACK_IMPORTED_MODULE_0__["DayStatus"].Open,
                events: calEvents.length > 0 ? calEvents : null
            });
        };
        var this_1 = this;
        for (var i = 1; i < daysInMonth + 1; i++) {
            _loop_1(i);
        }
    }
    Object.defineProperty(ICalendar.prototype, "currentDay", {
        get: function () {
            var _this = this;
            return this._days.find(function (d) { return _this.startOfDay(d.date).getTime() === _this.startOfDay(new Date()).getTime(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ICalendar.prototype, "days", {
        get: function () {
            return this._days.slice();
        },
        enumerable: true,
        configurable: true
    });
    ICalendar.prototype.disabledStatus = function (currentDate) {
        var _this = this;
        return !!this.disabledDates.find(function (date) { return _this.startOfDay(date).getTime() === currentDate.getTime(); });
    };
    ICalendar.prototype.startOfDay = function (date) {
        return new Date(date.setHours(0, 0, 0, 0));
    };
    ICalendar.prototype.endOfDay = function (date) {
        return new Date(date.setHours(23, 59, 59, 999));
    };
    return ICalendar;
}());



/***/ }),

/***/ "../ngx-year-calendar/src/lib/models/day.ts":
/*!**************************************************!*\
  !*** ../ngx-year-calendar/src/lib/models/day.ts ***!
  \**************************************************/
/*! exports provided: DayStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayStatus", function() { return DayStatus; });
var DayStatus;
(function (DayStatus) {
    DayStatus[DayStatus["Open"] = 0] = "Open";
    DayStatus[DayStatus["Completed"] = 1] = "Completed";
    DayStatus[DayStatus["Disabled"] = 2] = "Disabled";
    DayStatus[DayStatus["Failed"] = 3] = "Failed";
})(DayStatus || (DayStatus = {}));


/***/ }),

/***/ "../ngx-year-calendar/src/lib/models/index.ts":
/*!****************************************************!*\
  !*** ../ngx-year-calendar/src/lib/models/index.ts ***!
  \****************************************************/
/*! exports provided: ICalendar, DayStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "../ngx-year-calendar/src/lib/models/calendar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICalendar", function() { return _calendar__WEBPACK_IMPORTED_MODULE_0__["ICalendar"]; });

/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day */ "../ngx-year-calendar/src/lib/models/day.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayStatus", function() { return _day__WEBPACK_IMPORTED_MODULE_1__["DayStatus"]; });





/***/ }),

/***/ "../ngx-year-calendar/src/lib/ngx-year-calendar.module.ts":
/*!****************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/ngx-year-calendar.module.ts ***!
  \****************************************************************/
/*! exports provided: NgxYearCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxYearCalendarModule", function() { return NgxYearCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.ts");
/* harmony import */ var _components_year_calendar_year_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/year-calendar/year-calendar.component */ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.ts");
/* harmony import */ var _services_year_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/year-calendar.service */ "../ngx-year-calendar/src/lib/services/year-calendar.service.ts");







var NgxYearCalendarModule = /** @class */ (function () {
    function NgxYearCalendarModule() {
    }
    NgxYearCalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_year_calendar_year_calendar_component__WEBPACK_IMPORTED_MODULE_5__["YearCalendarComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]],
            entryComponents: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_components_year_calendar_year_calendar_component__WEBPACK_IMPORTED_MODULE_5__["YearCalendarComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]],
            providers: [_services_year_calendar_service__WEBPACK_IMPORTED_MODULE_6__["YearCalendarService"]]
        })
    ], NgxYearCalendarModule);
    return NgxYearCalendarModule;
}());



/***/ }),

/***/ "../ngx-year-calendar/src/lib/services/year-calendar.service.ts":
/*!**********************************************************************!*\
  !*** ../ngx-year-calendar/src/lib/services/year-calendar.service.ts ***!
  \**********************************************************************/
/*! exports provided: YearCalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearCalendarService", function() { return YearCalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "../ngx-year-calendar/src/lib/helpers/index.ts");




var YearCalendarService = /** @class */ (function () {
    function YearCalendarService() {
        this.dateChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._calendarConfig = _helpers__WEBPACK_IMPORTED_MODULE_3__["CALENDARCONFIG"];
    }
    YearCalendarService.prototype.configureCalendar = function (config) {
        if (config === void 0) { config = null; }
        if (config) {
            this._calendarConfig = Object.assign(this._calendarConfig, config);
        }
        return this._calendarConfig;
    };
    YearCalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YearCalendarService);
    return YearCalendarService;
}());



/***/ }),

/***/ "../ngx-year-calendar/src/public-api.ts":
/*!**********************************************!*\
  !*** ../ngx-year-calendar/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: CalendarComponent, YearCalendarComponent, ICalendar, NgxYearCalendarModule, DayStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/calendar/calendar.component */ "../ngx-year-calendar/src/lib/components/calendar/calendar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return _lib_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__["CalendarComponent"]; });

/* harmony import */ var _lib_components_year_calendar_year_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/year-calendar/year-calendar.component */ "../ngx-year-calendar/src/lib/components/year-calendar/year-calendar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearCalendarComponent", function() { return _lib_components_year_calendar_year_calendar_component__WEBPACK_IMPORTED_MODULE_1__["YearCalendarComponent"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models */ "../ngx-year-calendar/src/lib/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICalendar", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_2__["ICalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayStatus", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_2__["DayStatus"]; });

/* harmony import */ var _lib_ngx_year_calendar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ngx-year-calendar.module */ "../ngx-year-calendar/src/lib/ngx-year-calendar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxYearCalendarModule", function() { return _lib_ngx_year_calendar_module__WEBPACK_IMPORTED_MODULE_3__["NgxYearCalendarModule"]; });

/*
 * Public API Surface of ngx-year-calendar
 */






/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"title\">ngx-year-calendar <span class=\"right\"><a href=\"https://github.com/SpencerOdai/ngx-year-calendar\">\n        <i class=\"fa fa-github\"></i></a>\n      <i class=\"fab fa-node\"></i></span>\n  </div>\n  <div class=\"content\">\n    <div class=\"big-text\">Lightweight Angular Year Calendar</div>\n    <div class=\"small-text\">Year calendar enables a user to see the entire year view of a calendar and add events to the\n      calendar via the YearCalendarService.</div>\n  </div>\n</div>\n<div class=\"container-fluid mb-3\">\n\n  <h2>Getting Started</h2>\n  <ul>\n    <li>\n      <p>install the package via npm and add module to your app.module.ts file</p>\n      <pre>npm install ngx-year-calendar --save</pre>\n      <img src=\"assets/docs/app-module.png\" alt=\"\" class=\"border\">\n    </li>\n\n    <li>\n      <p>add component to html page</p>\n      <img src=\"assets/docs/component.png\" alt=\"\" class=\"border\">\n    </li>\n\n    <li>\n      <p>install font awesome for calendar icons</p>\n      <pre>npm install font-awesome --save</pre>\n      <img src=\"assets/docs/font-awesome.png\" alt=\"\" class=\"border\">\n    </li>\n  </ul>\n  <h2>Demo</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">Calendar</div>\n        <div class=\"card-body\">\n          <ngx-year-calendar></ngx-year-calendar>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-sm-12 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">User Action Events</div>\n        <div class=\"card-body logs\">\n          <div class=\"form-check form-check-inline\" *ngFor=\"let item of eventTypes\">\n            <input class=\"form-check-input\" type=\"checkbox\" [id]=\"item\" value=\"item\" (click)=\"selectEvents(item)\">\n            <label class=\"form-check-label\" [for]=\"item\">{{item}}</label>\n          </div>\n\n          <p *ngFor=\"let item of logs\" [innerHTML]=\"item\"></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h2>Configure</h2>\n  <p>include <strong> YearCalendarService</strong> into your component. The </p>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .header {\n  height: 300px;\n  padding: 50px;\n  margin-bottom: 20px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  background: #A594F9;\n  color: white; }\n  :host .header .title {\n    font-size: 26px;\n    font-weight: 400; }\n  :host .header .title a {\n      color: white; }\n  :host .header .big-text {\n    font-size: 34px;\n    margin-bottom: 15px; }\n  :host img {\n  width: 500px; }\n  :host .logs {\n  height: 580px;\n  overflow-y: auto; }\n  :host .logs p {\n    font-size: 13px;\n    border: 1px solid rgba(128, 128, 128, 0.2);\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9TcGVuY2VyT2RhaS9uZ3gteWVhci1jYWxlbmRhci9wcm9qZWN0cy9uZ3gteWVhci1jYWxlbmRhci1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0VBVGhCO0lBWU0sZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBYnRCO01BZ0JRLFlBQVksRUFBQTtFQWhCcEI7SUFxQk0sZUFBZTtJQUNmLG1CQUFtQixFQUFBO0VBdEJ6QjtFQTJCSSxZQUFZLEVBQUE7RUEzQmhCO0VBK0JJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTtFQWhDcEI7SUFtQ00sZUFBZTtJQUNmLDBDQUEyQjtJQUMzQixhQUFhLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmd4LXllYXItY2FsZW5kYXItc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBiYWNrZ3JvdW5kOiAjQTU5NEY5O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iaWctdGV4dCB7XG4gICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgLmxvZ3Mge1xuICAgIGhlaWdodDogNTgwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYShncmF5LCAwLjIpO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_year_calendar_src_lib_services_year_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ngx-year-calendar/src/lib/services/year-calendar.service */ "../ngx-year-calendar/src/lib/services/year-calendar.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_yearCalendar) {
        this._yearCalendar = _yearCalendar;
        this.logs = [];
        this.eventTypes = ['click', 'mouseover', 'mouseenter', 'mouseleave', 'contextclick'];
        this.selectedEvents = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._yearCalendar.configureCalendar({
            clickDay: function (day) {
                _this.addLog('click', day);
            },
            mouseEnter: function (day) {
                _this.addLog('mouseenter', day);
            },
            mouseLeave: function (day) {
                _this.addLog('mouseleave', day);
            },
            mouseOver: function (day) {
                _this.addLog('mouseover', day);
            },
            rightClickDay: function (day) {
                _this.addLog('contextclick', day);
            }
        });
    };
    AppComponent.prototype.addLog = function (type, day) {
        var event = this.selectedEvents.find(function (item) { return item === type; });
        if (event) {
            this.logs.push("event <strong>" + type + "</strong> => day: " + day.date.toDateString());
        }
    };
    AppComponent.prototype.selectEvents = function (event) {
        var index = this.selectedEvents.findIndex(function (item) { return item === event; });
        if (index > -1) {
            this.selectedEvents.splice(index, 1);
        }
        else {
            this.selectedEvents.push(event);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ngx_year_calendar_src_lib_services_year_calendar_service__WEBPACK_IMPORTED_MODULE_2__["YearCalendarService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var projects_ngx_year_calendar_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-year-calendar/src/public-api */ "../ngx-year-calendar/src/public-api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], projects_ngx_year_calendar_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxYearCalendarModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/SpencerOdai/ngx-year-calendar/projects/ngx-year-calendar-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map