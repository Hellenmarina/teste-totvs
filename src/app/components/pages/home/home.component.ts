import { Component, OnInit } from '@angular/core';
import { TarefasService } from 'src/app/services/tarefas.service';
import { environment } from 'src/environments/environment';
import { Tarefas } from 'src/app/Tarefas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allTarefas: Tarefas[] = [];
  baseUrl = environment.baseURL;

  constructor(private tarefasService: TarefasService) {}

  ngOnInit(): void {
    this.tarefasService.getAllTarefas().subscribe((t) => (this.allTarefas = t));
  }

  async removeTarefa(id: number) {
    await this.tarefasService.removeTarefa(id).subscribe();

    alert('tarefa excluída com sucesso');

    location.reload();
  }
}
