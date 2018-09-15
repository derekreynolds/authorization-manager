import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGroupComponent } from './security-group.component';

describe('SecurityGroupComponent', () => {
  let component: SecurityGroupComponent;
  let fixture: ComponentFixture<SecurityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
