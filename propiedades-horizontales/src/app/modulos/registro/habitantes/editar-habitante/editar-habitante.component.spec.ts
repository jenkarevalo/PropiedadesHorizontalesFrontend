import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabitanteComponent } from './editar-habitante.component';

describe('EditarHabitanteComponent', () => {
  let component: EditarHabitanteComponent;
  let fixture: ComponentFixture<EditarHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHabitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
