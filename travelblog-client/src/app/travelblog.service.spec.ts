import { TestBed } from '@angular/core/testing';

import { TravelblogService } from './travelblog.service';

describe('TravelblogService', () => {
  let service: TravelblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
