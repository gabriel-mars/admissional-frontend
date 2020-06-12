import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCrudComponent } from './professor-crud.component';

describe('ProfessorCrudComponent', () => {
  let component: ProfessorCrudComponent;
  let fixture: ComponentFixture<ProfessorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
