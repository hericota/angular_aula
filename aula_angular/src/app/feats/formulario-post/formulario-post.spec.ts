import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPost } from './formulario-post';

describe('FormularioPost', () => {
  let component: FormularioPost;
  let fixture: ComponentFixture<FormularioPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPost],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
