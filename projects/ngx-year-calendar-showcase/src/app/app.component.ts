import { Component, OnInit } from '@angular/core';
import { YearCalendarService } from 'projects/ngx-year-calendar/src/lib/services/year-calendar.service';
import { IDay } from 'ngx-year-calendar/lib/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public logs: string[] = [];
  public eventTypes: string[] = ['click', 'mouseover', 'mouseenter', 'mouseleave', 'contextclick'];
  private selectedEvents: string[] = [];
  constructor(private _yearCalendar: YearCalendarService) {}

  public ngOnInit(): void {
    this._yearCalendar.configureCalendar({
      clickDay: (day: IDay) => {
        this.addLog('click', day);
      },
      mouseEnter: (day: IDay) => {
        this.addLog('mouseenter', day);
      },
      mouseLeave: (day: IDay) => {
        this.addLog('mouseleave', day);
      },
      mouseOver: (day: IDay) => {
        this.addLog('mouseover', day);
      },
      rightClickDay: (day: IDay) => {
        this.addLog('contextclick', day);
      }
    });
  }

  public addLog(type, day: IDay): void {
    const event = this.selectedEvents.find((item) => item === type);
    if (event) {
      this.logs.push(`event <strong>${type}</strong> => day: ${day.date.toDateString()}`);
    }
  }

  public selectEvents(event): void {
    const index = this.selectedEvents.findIndex((item) => item === event);
    if (index > -1) {
      this.selectedEvents.splice(index, 1);
    } else {
      this.selectedEvents.push(event);
    }
  }
}
