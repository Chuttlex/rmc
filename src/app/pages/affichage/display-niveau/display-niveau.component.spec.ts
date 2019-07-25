import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNiveauComponent } from './display-niveau.component';

describe('DisplayNiveauComponent', () => {
  let component: DisplayNiveauComponent;
  let fixture: ComponentFixture<DisplayNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
