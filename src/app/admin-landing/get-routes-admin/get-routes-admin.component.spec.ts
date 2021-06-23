import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRoutesAdminComponent } from './get-routes-admin.component';

describe('GetRoutesAdminComponent', () => {
  let component: GetRoutesAdminComponent;
  let fixture: ComponentFixture<GetRoutesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRoutesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRoutesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
