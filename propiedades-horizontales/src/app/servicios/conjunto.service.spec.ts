import { TestBed } from '@angular/core/testing';

import { ConjuntoService } from './conjunto.service';

describe('ConjuntoService', () => {
  let service: ConjuntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjuntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
