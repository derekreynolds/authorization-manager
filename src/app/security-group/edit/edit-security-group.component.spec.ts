import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecurityGroupComponent } from './edit-security-group.component';

describe('EditSecurityGroupComponent', () => {
  let component: EditSecurityGroupComponent;
  let fixture: ComponentFixture<EditSecurityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSecurityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSecurityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
