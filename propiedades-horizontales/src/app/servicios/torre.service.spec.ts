import { TestBed } from '@angular/core/testing';

import { TorreService } from './torre.service';

 describe('TorreService', () => {
 let service: TorreService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TorreService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });