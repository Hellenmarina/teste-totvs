import { Component, OnInit } from '@angular/core';
import { TarefasService } from 'src/app/services/tarefas.service';
import { Tarefas } from 'src/app/Tarefas';

@Component({
  selector: 'app-new-tarefa',
  templateUrl: './new-tarefa.component.html',
  styleUrls: ['./new-tarefa.component.css'],
})
export class NewTarefaComponent implements OnInit {
  btnText = 'Adicionar tarefa';
  constructor(private tarefasService: TarefasService) {}

  ngOnInit(): void {}

  async createManipulation(tarefas: Tarefas) {
    const formData = new FormData();

    formData.append('name', tarefas.name);
    formData.append('status', tarefas.status);

    await this.tarefasService.createTarefa(formData).subscribe();
  }
}
