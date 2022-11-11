import { TestBed } from '@angular/core/testing';

import { HabitantesService } from './habitantes.service';

describe('HabitantesService', () => {
  let service: HabitantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
