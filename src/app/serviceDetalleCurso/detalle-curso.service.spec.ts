import { TestBed } from '@angular/core/testing';

import { DetalleCursoService } from './detalle-curso.service';

describe('DetalleCursoService', () => {
  let service: DetalleCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
