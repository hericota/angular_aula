import { TestBed } from '@angular/core/testing';

import { MediaAlunosService } from './media-alunos-service';

describe('MediaAlunosService', () => {
  let service: MediaAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
