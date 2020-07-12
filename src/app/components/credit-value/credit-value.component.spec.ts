import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditValueComponent } from './credit-value.component';

describe('CreditValueComponent', () => {
  let component: CreditValueComponent;
  let fixture: ComponentFixture<CreditValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
