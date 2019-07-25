import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifhascompetenceComponent } from './dispositifhascompetence.component';

describe('DispositifhascompetenceComponent', () => {
  let component: DispositifhascompetenceComponent;
  let fixture: ComponentFixture<DispositifhascompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositifhascompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifhascompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
