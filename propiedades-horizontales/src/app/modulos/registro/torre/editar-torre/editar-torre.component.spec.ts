import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTorreComponent } from './editar-torre.component';

describe('EditarTorreComponent', () => {
  let component: EditarTorreComponent;
  let fixture: ComponentFixture<EditarTorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTorreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
