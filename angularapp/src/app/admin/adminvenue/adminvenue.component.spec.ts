import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvenueComponent } from './adminvenue.component';

describe('AdminvenueComponent', () => {
  let component: AdminvenueComponent;
  let fixture: ComponentFixture<AdminvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
