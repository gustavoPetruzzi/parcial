import { TestBed, inject } from '@angular/core/testing';

import { UnHttpService } from './un-http.service';

describe('UnHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnHttpService]
    });
  });

  it('should be created', inject([UnHttpService], (service: UnHttpService) => {
    expect(service).toBeTruthy();
  }));
});
