import { TestBed, inject } from '@angular/core/testing';

import { FactsService } from './facts.service';

describe('FactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactsService]
    });
  });

  it('should ...', inject([FactsService], (service: FactsService) => {
    expect(service).toBeTruthy();
  }));
});
