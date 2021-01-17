import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPopUp5Component } from './help-pop-up5.component';

describe('HelpPopUp4Component', () => {
  let component: HelpPopUp5Component;
  let fixture: ComponentFixture<HelpPopUp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPopUp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPopUp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
