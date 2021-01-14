import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSelectionComponent } from './goals-selection.component';

describe('GoalsSelectionComponent', () => {
  let component: GoalsSelectionComponent;
  let fixture: ComponentFixture<GoalsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
