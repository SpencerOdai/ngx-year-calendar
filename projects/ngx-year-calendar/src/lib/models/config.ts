import { IDay } from './day';

export interface ICalendarConfig {
  months: string[];
  weekdays: string[];
  weekdayCharLength: number;
  monthCharLength: number;
  clickDay?: (day: IDay) => void;
  rightClickDay?: (day: IDay) => void;
  mouseOver?: (day: IDay) => void;
  mouseEnter?: (day: IDay) => void;
  mouseLeave?: (day: IDay) => void;
}
