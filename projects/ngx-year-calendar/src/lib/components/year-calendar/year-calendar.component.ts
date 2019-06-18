import { Component, OnInit, ViewChild } from '@angular/core';
import { ICalendarConfig } from '../../models';
import { YearCalendarService } from '../../services/year-calendar.service';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'ngx-year-calendar',
  templateUrl: 'year-calendar.component.html',
  styleUrls: ['year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit {
  @ViewChild('calendar') public calendar: CalendarComponent;
  public months = [];
  public selectedYear: number = new Date().getFullYear();
  public calendarConfig: ICalendarConfig = null;

  public get years(): number[] {
    const currentYear = this.selectedYear + 10;
    const years = [];
    let startYear = 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  }

  constructor(private _yearCalendarService: YearCalendarService) {}

  public ngOnInit() {
    this.calendarConfig = this._yearCalendarService.configureCalendar();
    this.months = this.calendarConfig.months;
  }

  public prevYear() {}
}
