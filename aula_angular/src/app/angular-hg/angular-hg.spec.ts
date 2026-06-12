import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHg } from './angular-hg';

describe('AngularHg', () => {
  let component: AngularHg;
  let fixture: ComponentFixture<AngularHg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularHg],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularHg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
