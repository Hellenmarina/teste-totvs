import { Component, OnInit } from '@angular/core';

import { Tarefas } from 'src/app/Tarefas';

import { TarefasService } from 'src/app/services/tarefas.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tarefa',
  templateUrl: './edit-tarefa.component.html',
  styleUrls: ['./edit-tarefa.component.css'],
})
export class EditTarefaComponent implements OnInit {
  tarefas!: Tarefas;
  btnText: string = 'pronto!';

  constructor(
    private tarefasService: TarefasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tarefasService.editTarefa(id).subscribe((t: any) => {
      this.tarefas = t;
    });
  }

  async editTarefa(tarefasData: Tarefas) {
    const id = this.tarefas.id;

    const formData = new FormData();

    formData.append('name', tarefasData.name);
    formData.append('status', tarefasData.status);

    await this.tarefasService.updateTarefa(id!, formData).subscribe();
  }
}
