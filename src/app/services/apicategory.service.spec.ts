import { TestBed } from '@angular/core/testing';

import { ApicategoryService } from './apicategory.service';

describe('ApicategoryService', () => {
  let service: ApicategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
