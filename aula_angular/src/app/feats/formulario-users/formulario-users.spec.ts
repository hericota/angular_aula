import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formularioUsers } from './formulario-users';

describe('FormularioPost', () => {
  let component: formularioUsers;
  let fixture: ComponentFixture<formularioUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [formularioUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(formularioUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
