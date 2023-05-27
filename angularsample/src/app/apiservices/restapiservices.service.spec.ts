import { TestBed } from '@angular/core/testing';

import { RestapiservicesService } from './restapiservices.service';

describe('RestapiservicesService', () => {
  let service: RestapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
