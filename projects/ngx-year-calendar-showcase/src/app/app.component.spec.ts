import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { YearCalendarService } from 'projects/ngx-year-calendar/src/lib/services/year-calendar.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, YearCalendarComponentStub],
      providers: [{ provide: YearCalendarService, useClass: YearCalendarServiceStub }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-year-calendar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.query(By.css('ngx-year-calendar'));
    expect(app).toBeDefined();
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngx-year-calendar-showcase!');
  // });
});

@Component({
  selector: 'ngx-year-calendar',
  template: ''
})
class YearCalendarComponentStub {}

class YearCalendarServiceStub {}
