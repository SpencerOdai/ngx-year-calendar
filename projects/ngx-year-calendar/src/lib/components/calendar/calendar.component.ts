import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ICalendar } from '../../models/calendar';
import { IDay } from '../../models/day';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges, OnInit, OnDestroy {
  public months = [
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
  ];
  @Input('month') public selectedMonth: number = new Date().getMonth();
  @Input('year') public selectedYear: number = new Date().getFullYear();
  @Input('config') public calendarConfig: any;
  public weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  public currentCalendar: ICalendar = new ICalendar(
    this.selectedYear,
    this.selectedMonth,
    []
  );
  public loading = false;
  public selectedDay: IDay;
  private curICalendarSub: Subscription;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const prevYear = changes.selectedYear.previousValue;
    const currentYear = changes.selectedYear.currentValue;
    if (prevYear !== currentYear) {
      this.currentCalendar = new ICalendar(
        this.selectedYear,
        this.selectedMonth,
        [],
        [new Date()]
      );
    }
  }

  public ngOnInit() {
    this.loading = true;

    this.currentCalendar = new ICalendar(
      this.selectedYear,
      this.selectedMonth,
      [],
      [new Date()]
    );
  }

  // public ngAfterContentInit(): void {
  //   this.currentCalendar = new ICalendar(
  //     this.selectedYear,
  //     this.selectedMonth,
  //     [],
  //     [new Date()]
  //   );
  // }

  public getIsSettable(dayInMonth: number) {
    return dayInMonth <= new Date().getDate();
  }

  public getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 2;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      this.selectedYear,
      this.selectedMonth,
      1
    ).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }

  public onChangeStatus(day: IDay) {
    this.selectedDay = day;
  }

  public ngOnDestroy() {
    if (this.curICalendarSub) {
      this.curICalendarSub.unsubscribe();
    }
  }

  public changeMonth(event): void {
    console.log(event);
    this.selectedMonth = event.detail.value;
    this.currentCalendar = new ICalendar(
      this.selectedYear,
      this.selectedMonth,
      []
    );
  }

  public changeYear(event): void {
    console.log(event);
    this.selectedYear = event.detail.value;
    this.currentCalendar = new ICalendar(
      this.selectedYear,
      this.selectedMonth,
      []
    );
  }
}
