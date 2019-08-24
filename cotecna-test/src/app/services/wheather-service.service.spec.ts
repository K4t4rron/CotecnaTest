import { TestBed } from '@angular/core/testing';

import { WheatherServiceService } from './wheather-service.service';

describe('WheatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheatherServiceService = TestBed.get(WheatherServiceService);
    expect(service).toBeTruthy();
  });
});
