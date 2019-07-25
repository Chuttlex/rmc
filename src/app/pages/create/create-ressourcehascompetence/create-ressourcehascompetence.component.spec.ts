import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRessourcehascompetenceComponent } from './create-ressourcehascompetence.component';

describe('CreateRessourcehascompetenceComponent', () => {
  let component: CreateRessourcehascompetenceComponent;
  let fixture: ComponentFixture<CreateRessourcehascompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRessourcehascompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRessourcehascompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
