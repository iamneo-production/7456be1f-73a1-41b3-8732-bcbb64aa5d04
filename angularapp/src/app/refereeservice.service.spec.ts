import { TestBed } from '@angular/core/testing';

import { RefereeserviceService } from './refereeservice.service';

describe('RefereeserviceService', () => {
  let service: RefereeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefereeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
