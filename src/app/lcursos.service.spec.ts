import { TestBed } from '@angular/core/testing';

import { LcursosService } from './lcursos.service';

describe('LcursosService', () => {
  let service: LcursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
