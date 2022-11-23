import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleApartamentoComponent } from './detalle-apartamento.component';

describe('DetalleApartamentoComponent', () => {
  let component: DetalleApartamentoComponent;
  let fixture: ComponentFixture<DetalleApartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleApartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
