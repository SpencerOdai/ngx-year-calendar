import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxYearCalendarModule } from 'projects/ngx-year-calendar/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxYearCalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
