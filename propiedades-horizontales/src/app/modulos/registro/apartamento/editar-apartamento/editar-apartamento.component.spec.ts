import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApartamentoComponent } from './editar-apartamento.component';

describe('EditarApartamentoComponent', () => {
  let component: EditarApartamentoComponent;
  let fixture: ComponentFixture<EditarApartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarApartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
