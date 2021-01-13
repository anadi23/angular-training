import { TestBed } from '@angular/core/testing';

import { FormRouteGuardService } from './form-route-guard.service';

describe('FormRouteGuardService', () => {
  let service: FormRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
