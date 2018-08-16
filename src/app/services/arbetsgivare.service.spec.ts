import { TestBed, inject } from '@angular/core/testing';

import { ArbetsgivareService } from './arbetsgivare.service';

describe('ArbetsgivareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArbetsgivareService]
    });
  });

  it('should be created', inject([ArbetsgivareService], (service: ArbetsgivareService) => {
    expect(service).toBeTruthy();
  }));
});
