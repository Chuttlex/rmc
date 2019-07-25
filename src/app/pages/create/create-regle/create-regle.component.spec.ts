import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegleComponent } from './create-regle.component';

describe('CreateRegleComponent', () => {
  let component: CreateRegleComponent;
  let fixture: ComponentFixture<CreateRegleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
