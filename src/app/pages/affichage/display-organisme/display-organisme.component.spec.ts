import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOrganismeComponent } from './display-organisme.component';

describe('DisplayOrganismeComponent', () => {
  let component: DisplayOrganismeComponent;
  let fixture: ComponentFixture<DisplayOrganismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOrganismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
