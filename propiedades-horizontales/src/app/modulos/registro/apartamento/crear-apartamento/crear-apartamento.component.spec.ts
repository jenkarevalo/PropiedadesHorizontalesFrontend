import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApartamentoComponent } from './crear-apartamento.component';

describe('CrearApartamentoComponent', () => {
  let component: CrearApartamentoComponent;
  let fixture: ComponentFixture<CrearApartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
