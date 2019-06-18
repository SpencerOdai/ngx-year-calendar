import { ICalendarConfig } from '../models';

export const CALENDARCONFIG: ICalendarConfig = {
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
  clickDay: () => {},
  mouseEnter: () => {},
  mouseLeave: () => {},
  mouseOver: () => {},
  rightClickDay: () => {}
};
