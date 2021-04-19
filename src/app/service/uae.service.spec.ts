import { TestBed } from '@angular/core/testing';

import { UaeService } from './uae.service';

describe('UaeService', () => {
  let service: UaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
