import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1Component } from './session1.component';

describe('Session1Component', () => {
  let component: Session1Component;
  let fixture: ComponentFixture<Session1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Session1Component]
    });
    fixture = TestBed.createComponent(Session1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
