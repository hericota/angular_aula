import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAlunos } from './media-alunos';

describe('MediaAlunos', () => {
  let component: MediaAlunos;
  let fixture: ComponentFixture<MediaAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
