import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICalendar } from '../../models/calendar';
import { IDay } from '../../models/day';
import { YearCalendarService } from '../../services/year-calendar.service';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges, OnInit, OnDestroy {
  public months: string[] = [];
  @Input('month') public selectedMonth: number = new Date().getMonth();
  @Input('year') public selectedYear: number = new Date().getFullYear();
  public calendarConfig: any;
  public weekDays: string[] = [];
  public currentCalendar: ICalendar = new ICalendar(this.selectedYear, this.selectedMonth, []);
  public loading = false;
  public selectedDay: IDay;
  private curICalendarSub: Subscription;

  constructor(private _yearCalendarService: YearCalendarService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    const prevYear = changes.selectedYear.previousValue;
    const currentYear = changes.selectedYear.currentValue;
    if (prevYear !== currentYear) {
      this.currentCalendar = new ICalendar(this.selectedYear, this.selectedMonth, [], [new Date()]);
    }
  }

  public ngOnInit() {
    this.calendarConfig = this._yearCalendarService.configureCalendar();
    this.selectedDay = this.currentCalendar.currentDay;
    this._yearCalendarService.dateChangeEvent.subscribe((day) => {
      if (day) {
        this.selectedDay = day;
      }
    });
  }

  public getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 2;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }

  public onChangeStatus(day: IDay) {
    this._yearCalendarService.dateChangeEvent.next(day);
  }

  public ngOnDestroy() {
    if (this.curICalendarSub) {
      this.curICalendarSub.unsubscribe();
    }
  }
}
