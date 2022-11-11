import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConjuntoComponent } from './crear-conjunto.component';

describe('CrearConjuntoComponent', () => {
  let component: CrearConjuntoComponent;
  let fixture: ComponentFixture<CrearConjuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConjuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
