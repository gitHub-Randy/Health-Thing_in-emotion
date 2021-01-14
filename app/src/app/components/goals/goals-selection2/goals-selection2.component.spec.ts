import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSelection2Component } from './goals-selection2.component';

describe('GoalsSelection2Component', () => {
  let component: GoalsSelection2Component;
  let fixture: ComponentFixture<GoalsSelection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsSelection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSelection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
