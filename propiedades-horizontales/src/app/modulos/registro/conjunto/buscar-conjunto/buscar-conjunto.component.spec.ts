import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConjuntoComponent } from './buscar-conjunto.component';

describe('BuscarConjuntoComponent', () => {
  let component: BuscarConjuntoComponent;
  let fixture: ComponentFixture<BuscarConjuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarConjuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
