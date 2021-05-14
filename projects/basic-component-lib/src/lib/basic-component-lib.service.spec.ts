import { TestBed } from '@angular/core/testing';

import { BasicComponentLibService } from './basic-component-lib.service';

describe('BasicComponentLibService', () => {
  let service: BasicComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
