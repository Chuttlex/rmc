import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRegleComponent } from './display-regle.component';

describe('DisplayRegleComponent', () => {
  let component: DisplayRegleComponent;
  let fixture: ComponentFixture<DisplayRegleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRegleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
