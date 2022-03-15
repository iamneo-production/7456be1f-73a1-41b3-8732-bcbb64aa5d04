import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrefereeComponent } from './addreferee.component';

describe('AddrefereeComponent', () => {
  let component: AddrefereeComponent;
  let fixture: ComponentFixture<AddrefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrefereeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
