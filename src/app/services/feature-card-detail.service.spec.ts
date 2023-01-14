import { TestBed } from '@angular/core/testing';

import { FeatureCardDetailService } from './feature-card-detail.service';

describe('FeatureCardDetailService', () => {
  let service: FeatureCardDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureCardDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
