import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHabitanteComponent } from './buscar-habitante.component';

describe('BuscarHabitanteComponent', () => {
  let component: BuscarHabitanteComponent;
  let fixture: ComponentFixture<BuscarHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarHabitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
