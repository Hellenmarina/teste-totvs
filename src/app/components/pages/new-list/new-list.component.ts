import { Component, OnInit } from '@angular/core';
import { Listas } from 'src/app/Listas';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit {
  btnText = 'Criar lista';

  constructor(private listasService: ListasService) {}

  ngOnInit(): void {}

  async createHandler(listas: Listas) {
    const formData = new FormData();

    formData.append('nameLista', listas.nameList);

    await this.listasService.createList(formData).subscribe();
  }
}
