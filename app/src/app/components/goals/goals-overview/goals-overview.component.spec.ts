import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsOverviewComponent } from './goals-overview.component';

describe('GoalsOverviewComponent', () => {
  let component: GoalsOverviewComponent;
  let fixture: ComponentFixture<GoalsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
