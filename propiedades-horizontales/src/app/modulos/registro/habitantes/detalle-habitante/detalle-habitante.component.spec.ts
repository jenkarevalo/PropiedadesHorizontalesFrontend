import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHabitanteComponent } from './detalle-habitante.component';

describe('DetalleHabitanteComponent', () => {
  let component: DetalleHabitanteComponent;
  let fixture: ComponentFixture<DetalleHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHabitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
