import { TestBed, inject } from '@angular/core/testing';

import { GroShowService } from './gro-show.service';

describe('GroShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroShowService]
    });
  });

  it('should be created', inject([GroShowService], (service: GroShowService) => {
    expect(service).toBeTruthy();
  }));
});
