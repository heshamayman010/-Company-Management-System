import { TestBed } from '@angular/core/testing';

import { EntryapiService } from './entryapi.service';

describe('EntryapiService', () => {
  let service: EntryapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
