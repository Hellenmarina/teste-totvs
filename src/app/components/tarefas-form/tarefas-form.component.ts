import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarefas } from 'src/app/Tarefas';
import { TarefasService } from 'src/app/services/tarefas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css'],
})
export class TarefasFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Tarefas>();
  @Input() btnText!: string;
  @Input() tarefasData: Tarefas | null = null;

  tarefasForm!: FormGroup;

  constructor(private tarefaService: TarefasService, router: Router) {}

  ngOnInit(): void {
    this.tarefasForm = new FormGroup({
      id: new FormControl(this.tarefasData ? this.tarefasData.id : ''),
      name: new FormControl(this.tarefasData ? this.tarefasData.name : '', [
        Validators.required,
      ]),
      status: new FormControl(this.tarefasData ? this.tarefasData.status : '', [
        Validators.required,
      ]),
    });
  }

  get name() {
    return this.tarefasForm.get('name')!;
  }

  get status() {
    return this.tarefasForm.get('status')!;
  }

  submit() {
    if (this.tarefasForm.invalid) {
      return;
    }

    if (this.tarefasForm.value.id) {
      this.tarefaService
        .updateTarefa(this.tarefasForm.value.id, this.tarefasForm.value)
        .subscribe();
      alert('tarefa atualizada');
      location.reload();
    } else {
      this.tarefaService.createTarefa(this.tarefasForm.value).subscribe();
      alert('tarefa adicionada com sucesso');
      location.reload();
    }
  }
}
