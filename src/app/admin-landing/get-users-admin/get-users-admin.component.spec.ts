import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsersAdminComponent } from './get-users-admin.component';

describe('GetUsersAdminComponent', () => {
  let component: GetUsersAdminComponent;
  let fixture: ComponentFixture<GetUsersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUsersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUsersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
