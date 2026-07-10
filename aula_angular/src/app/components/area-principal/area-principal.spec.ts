import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPrincipal } from './area-principal';

describe('AreaPrincipal', () => {
  let component: AreaPrincipal;
  let fixture: ComponentFixture<AreaPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
