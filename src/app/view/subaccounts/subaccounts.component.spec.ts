import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaccountsComponent } from './subaccounts.component';

describe('SubaccountsComponent', () => {
  let component: SubaccountsComponent;
  let fixture: ComponentFixture<SubaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
