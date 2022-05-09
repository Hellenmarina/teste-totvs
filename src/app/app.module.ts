import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewListComponent } from './components/pages/new-list/new-list.component';
import { ListFormComponent } from './components/list-form/list-form.component';
import { TarefasFormComponent } from './components/tarefas-form/tarefas-form.component';
import { NewTarefaComponent } from './components/pages/new-tarefa/new-tarefa.component';
import { EditTarefaComponent } from './components/pages/edit-tarefa/edit-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewListComponent,
    ListFormComponent,
    TarefasFormComponent,
    NewTarefaComponent,
    EditTarefaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
