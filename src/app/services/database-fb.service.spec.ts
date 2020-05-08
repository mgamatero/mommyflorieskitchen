import { TestBed } from '@angular/core/testing';

import { DatabaseFBService } from './database-fb.service';

describe('DatabaseFBService', () => {
  let service: DatabaseFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
