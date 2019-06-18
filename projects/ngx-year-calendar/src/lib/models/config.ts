import { IDay } from './day';

export interface IConfig {
  clickDay: (day: IDay) => void;
  rightClickDay: (day: IDay) => void;
  mouseOver: (day: IDay) => void;
  mouseEnter: (day: IDay) => void;
  mouseLeave: (day: IDay) => void;
}
