import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusesAdminComponent } from './get-buses-admin.component';

describe('GetBusesAdminComponent', () => {
  let component: GetBusesAdminComponent;
  let fixture: ComponentFixture<GetBusesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBusesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
