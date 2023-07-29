import { TestBed } from '@angular/core/testing';

import { CommonFormControlsService } from './common-form-controls.service';

describe('CommonFormControlsService', () => {
  let service: CommonFormControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFormControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
