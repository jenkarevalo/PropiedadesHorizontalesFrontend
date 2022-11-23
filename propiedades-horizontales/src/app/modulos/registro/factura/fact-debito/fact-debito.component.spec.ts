import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactDebitoComponent } from './fact-debito.component';

describe('FactDebitoComponent', () => {
  let component: FactDebitoComponent;
  let fixture: ComponentFixture<FactDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactDebitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
