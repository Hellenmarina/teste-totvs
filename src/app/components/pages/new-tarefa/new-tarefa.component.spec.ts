import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTarefaComponent } from './new-tarefa.component';

describe('NewTarefaComponent', () => {
  let component: NewTarefaComponent;
  let fixture: ComponentFixture<NewTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
