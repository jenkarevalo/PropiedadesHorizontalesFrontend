import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFacturacionComponent } from './buscar-facturacion.component';

describe('BuscarFacturacionComponent', () => {
  let component: BuscarFacturacionComponent;
  let fixture: ComponentFixture<BuscarFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFacturacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
