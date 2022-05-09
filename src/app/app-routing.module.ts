import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTarefaComponent } from './components/pages/edit-tarefa/edit-tarefa.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewListComponent } from './components/pages/new-list/new-list.component';
import { NewTarefaComponent } from './components/pages/new-tarefa/new-tarefa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefas/new', component: NewTarefaComponent },
  { path: 'listas/new', component: NewListComponent },
  { path: 'tarefas/edit/:id', component: EditTarefaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
