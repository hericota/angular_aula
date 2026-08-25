import { TestBed } from '@angular/core/testing';

import { Putting } from './putting';

describe('Putting', () => {
  let service: Putting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Putting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
