import { TestBed } from '@angular/core/testing';

import { Getting } from './getting';

describe('Getting', () => {
  let service: Getting;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getting);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
