import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApprovalMessageComponent } from './credit-approval-message.component';

describe('CreditApprovalMessageComponent', () => {
  let component: CreditApprovalMessageComponent;
  let fixture: ComponentFixture<CreditApprovalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditApprovalMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditApprovalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
