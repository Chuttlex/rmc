import { TestBed } from '@angular/core/testing';

import { DispositifhascompetenceService } from './dispositifhascompetence.service';

describe('DispositifhascompetenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispositifhascompetenceService = TestBed.get(DispositifhascompetenceService);
    expect(service).toBeTruthy();
  });
});
