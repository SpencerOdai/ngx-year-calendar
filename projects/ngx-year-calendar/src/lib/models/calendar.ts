import { DayStatus, IDay } from './day';

export class ICalendar {
  constructor(
    public year: number,
    public month: number,
    public events: any[] = [],
    public disabledDates?: Date[],
    private _days: IDay[] = []
  ) {
    if (_days.length > 0) {
      return;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < daysInMonth + 1; i++) {
      const calEvents: any[] = [];
      const date = new Date(year, month, i);
      const dayInWeek = date.getDay();
      events.forEach((eventItem) => {
        const _eventItem = Object.assign({}, eventItem);
        const start = this.startOfDay(eventItem.start);
        const end = this.endOfDay(eventItem.start);
        if (date >= start && date <= end) {
          calEvents.push(_eventItem);
        }
      });
      this._days.push({
        dayInMonth: i,
        dayInWeek,
        date,
        status:
          disabledDates && this.disabledStatus(date)
            ? DayStatus.Disabled
            : DayStatus.Open,
        events: calEvents.length > 0 ? calEvents : null
      });
    }
  }

  get currentDay() {
    return this._days.find((d) => d.dayInMonth === new Date().getDate());
  }

  get days() {
    return [...this._days];
  }

  disabledStatus(currentDate: Date): boolean {
    return !!this.disabledDates.find(
      (date) => this.startOfDay(date).getTime() === currentDate.getTime()
    );
  }

  startOfDay(date): Date {
    return new Date(date.setHours(0, 0, 0, 0));
  }

  endOfDay(date): Date {
    return new Date(date.setHours(23, 59, 59, 999));
  }
}
