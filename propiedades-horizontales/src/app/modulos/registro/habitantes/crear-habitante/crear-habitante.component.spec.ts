import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabitanteComponent } from './crear-habitante.component';

describe('CrearHabitanteComponent', () => {
  let component: CrearHabitanteComponent;
  let fixture: ComponentFixture<CrearHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHabitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
