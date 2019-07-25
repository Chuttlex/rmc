import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifComponent } from './dispositif.component';

describe('DispositifComponent', () => {
  let component: DispositifComponent;
  let fixture: ComponentFixture<DispositifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
