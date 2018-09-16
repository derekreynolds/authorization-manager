import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityGroupComponent } from './add-security-group.component';

describe('AddSecurityGroupComponent', () => {
  let component: AddSecurityGroupComponent;
  let fixture: ComponentFixture<AddSecurityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecurityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecurityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
