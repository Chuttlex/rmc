import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDispositifComponent } from './create-dispositif.component';

describe('DispositifFormComponent', () => {
  let component: CreateDispositifComponent;
  let fixture: ComponentFixture<CreateDispositifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDispositifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
