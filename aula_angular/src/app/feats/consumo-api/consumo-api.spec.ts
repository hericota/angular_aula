import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoApi } from './consumo-api';

describe('ConsumoApi', () => {
  let component: ConsumoApi;
  let fixture: ComponentFixture<ConsumoApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumoApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumoApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
