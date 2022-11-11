import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConjuntoComponent } from './editar-conjunto.component';

describe('EditarConjuntoComponent', () => {
  let component: EditarConjuntoComponent;
  let fixture: ComponentFixture<EditarConjuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConjuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
