import { TestBed } from '@angular/core/testing';

import { SequenceGeneratorService } from './sequence-generator.service';

describe('SequenceGeneratorService', () => {
  let service: SequenceGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SequenceGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a sequence value', () => {
    expect(service.sequence).toBe(1);
    expect(service.sequence).toBe(2);
  });
});
