import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCreditoComponent } from './fact-credito.component';

describe('FactCreditoComponent', () => {
  let component: FactCreditoComponent;
  let fixture: ComponentFixture<FactCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
