import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { YearCalendarComponent } from './components/year-calendar/year-calendar.component';
import { YearCalendarService } from './services/year-calendar.service';

@NgModule({
  declarations: [YearCalendarComponent, CalendarComponent],
  entryComponents: [],
  imports: [CommonModule, FormsModule],
  exports: [YearCalendarComponent, CalendarComponent],
  providers: [YearCalendarService]
})
export class NgxYearCalendarModule {}
