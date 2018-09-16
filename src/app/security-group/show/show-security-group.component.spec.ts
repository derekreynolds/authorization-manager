import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecurityGroupComponent } from './show-security-group.component';

describe('ShowUSecurityGroupComponent', () => {
  let component: ShowSecurityGroupComponent;
  let fixture: ComponentFixture<ShowSecurityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSecurityGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSecurityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
