import { TestBed } from '@angular/core/testing';

import { KeepServiceService } from './keep-service.service';

describe('KeepServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepServiceService = TestBed.get(KeepServiceService);
    expect(service).toBeTruthy();
  });
});
