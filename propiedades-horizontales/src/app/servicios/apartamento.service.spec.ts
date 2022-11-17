import { TestBed } from '@angular/core/testing';

import { ApartamentoService } from './apartamento.service';

describe('ApartamentoService', () => {
let service: ApartamentoService;

   beforeEach(() => {
     TestBed.configureTestingModule({});
     service = TestBed.inject(ApartamentoService);
   });

   it('should be created', () => {
     expect(service).toBeTruthy();
   });
 });