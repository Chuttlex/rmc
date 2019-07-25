import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDispositifhascompetenceComponent } from './display-dispositifhascompetence.component';

describe('DisplayDispositifhascompetenceComponent', () => {
  let component: DisplayDispositifhascompetenceComponent;
  let fixture: ComponentFixture<DisplayDispositifhascompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDispositifhascompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDispositifhascompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
