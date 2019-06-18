import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearCalendarComponent } from './year-calendar.component';
import { YearCalendarService } from '../../services/year-calendar.service';
import { Input, Component } from '@angular/core';

describe('YearCalendarComponent', () => {
  let component: YearCalendarComponent;
  let fixture: ComponentFixture<YearCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YearCalendarComponent, CalenderComponentStub],
      providers: [YearCalendarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'ngx-calendar',
  template: ''
})
class CalenderComponentStub {
  @Input('month') public month: string[];
  @Input('year') public year: string[];
}
