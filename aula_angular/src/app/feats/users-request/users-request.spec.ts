import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRequest } from './users-request';

describe('UsersRequest', () => {
  let component: UsersRequest;
  let fixture: ComponentFixture<UsersRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
