import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarApartamentoComponent } from './buscar-apartamento.component';

describe('BuscarApartamentoComponent', () => {
  let component: BuscarApartamentoComponent;
  let fixture: ComponentFixture<BuscarApartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarApartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
