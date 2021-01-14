import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPopUp4Component } from './help-pop-up4.component';

describe('HelpPopUp4Component', () => {
  let component: HelpPopUp4Component;
  let fixture: ComponentFixture<HelpPopUp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpPopUp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPopUp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
