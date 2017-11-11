import { TestBed, inject } from '@angular/core/testing';

import { NasaApiService } from './nasa-api.service';

describe('NasaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaApiService]
    });
  });

  it('should be created', inject([NasaApiService], (service: NasaApiService) => {
    expect(service).toBeTruthy();
  }));
});
