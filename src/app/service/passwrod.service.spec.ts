import { TestBed, inject } from '@angular/core/testing';

import { PasswrodService } from './passwrod.service';

describe('PasswrodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswrodService]
    });
  });

  it('should be created', inject([PasswrodService], (service: PasswrodService) => {
    expect(service).toBeTruthy();
  }));
});
