import { TestBed } from '@angular/core/testing';

import { DepjobService } from './depjob.service';

describe('DepjobService', () => {
  let service: DepjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
