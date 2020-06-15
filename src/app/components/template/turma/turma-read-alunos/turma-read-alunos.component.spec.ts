import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaReadAlunosComponent } from './turma-read-alunos.component';

describe('TurmaReadAlunosComponent', () => {
  let component: TurmaReadAlunosComponent;
  let fixture: ComponentFixture<TurmaReadAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaReadAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaReadAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
