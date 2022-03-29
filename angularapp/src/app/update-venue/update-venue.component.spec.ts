import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVenueComponent } from './update-venue.component';

describe('UpdateVenueComponent', () => {
  let component: UpdateVenueComponent;
  let fixture: ComponentFixture<UpdateVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
