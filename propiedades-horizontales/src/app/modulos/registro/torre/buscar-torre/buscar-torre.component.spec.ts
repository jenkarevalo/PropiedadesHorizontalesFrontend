import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTorreComponent } from './buscar-torre.component';

describe('BuscarTorreComponent', () => {
  let component: BuscarTorreComponent;
  let fixture: ComponentFixture<BuscarTorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTorreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
