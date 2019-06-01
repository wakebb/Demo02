import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogoutComponent } from './admin-logout.component';

describe('AdminLogoutComponent', () => {
  let component: AdminLogoutComponent;
  let fixture: ComponentFixture<AdminLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
