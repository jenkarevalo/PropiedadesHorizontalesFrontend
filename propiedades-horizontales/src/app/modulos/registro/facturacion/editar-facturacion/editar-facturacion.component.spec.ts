import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFacturacionComponent } from './editar-facturacion.component';

describe('EditarFacturacionComponent', () => {
  let component: EditarFacturacionComponent;
  let fixture: ComponentFixture<EditarFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFacturacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
