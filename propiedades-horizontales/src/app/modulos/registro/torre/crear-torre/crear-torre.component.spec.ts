import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTorreComponent } from './crear-torre.component';

describe('CrearTorreComponent', () => {
  let component: CrearTorreComponent;
  let fixture: ComponentFixture<CrearTorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTorreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
