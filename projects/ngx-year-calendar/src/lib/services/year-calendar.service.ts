import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CALENDARCONFIG } from '../helpers';
import { ICalendarConfig, IDay } from '../models';

@Injectable()
export class YearCalendarService {
  public dateChangeEvent: BehaviorSubject<IDay> = new BehaviorSubject<IDay>(null);
  private _calendarConfig: ICalendarConfig = CALENDARCONFIG;
  constructor() {}

  public configureCalendar(config: ICalendarConfig = null): ICalendarConfig {
    if (config) {
      this._calendarConfig = Object.assign(this._calendarConfig, config);
    }
    return this._calendarConfig;
  }
}
