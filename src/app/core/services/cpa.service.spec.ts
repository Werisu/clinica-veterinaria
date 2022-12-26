/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CpaService } from './cpa.service';

describe('Service: Cpa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpaService]
    });
  });

  it('should ...', inject([CpaService], (service: CpaService) => {
    expect(service).toBeTruthy();
  }));
});
