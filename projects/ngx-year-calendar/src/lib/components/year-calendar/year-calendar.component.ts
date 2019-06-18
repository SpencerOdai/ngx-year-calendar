import { Component, OnInit, ViewChild } from '@angular/core';
import { IConfig } from '../../models/config';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'ngx-year-calendar',
  templateUrl: 'year-calendar.component.html',
  styleUrls: ['year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit {
  @ViewChild('calendar') public calendar: CalendarComponent;
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
  public selectedYear: number = new Date().getFullYear();

  public get years(): number[] {
    const currentYear = this.selectedYear + 10;
    const years = [];
    let startYear = 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  }

  public calendarConfig: IConfig = {
    clickDay: (day) => {},
    rightClickDay: (day) => {},
    mouseOver: (day) => {},
    mouseEnter: (day) => {},
    mouseLeave: (day) => {}
  };
  constructor() {}

  ngOnInit() {}

  public prevYear() {}
}
