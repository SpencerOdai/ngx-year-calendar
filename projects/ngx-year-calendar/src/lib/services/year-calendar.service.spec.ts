import { TestBed } from '@angular/core/testing';

import { YearCalendarService } from './year-calendar.service';

describe('YearCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YearCalendarService = TestBed.get(YearCalendarService);
    expect(service).toBeTruthy();
  });
});
