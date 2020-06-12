import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaDeleteComponent } from './turma-delete.component';

describe('TurmaDeleteComponent', () => {
  let component: TurmaDeleteComponent;
  let fixture: ComponentFixture<TurmaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
