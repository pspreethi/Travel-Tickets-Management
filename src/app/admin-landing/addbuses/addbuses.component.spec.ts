import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbusesComponent } from './addbuses.component';

describe('AddbusesComponent', () => {
  let component: AddbusesComponent;
  let fixture: ComponentFixture<AddbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
