import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Listas } from 'src/app/Listas';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
})
export class ListFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Listas>();
  @Input() btnText!: string;

  listForm!: FormGroup;

  constructor(private listasService: ListasService) {}

  ngOnInit(): void {
    this.listForm = new FormGroup({
      id: new FormControl(''),
      nameList: new FormControl('', [Validators.required]),
    });
  }

  get nameList() {
    return this.listForm.get('nameList')!;
  }

  submit() {
    if (this.listForm.invalid) {
      return;
    }
    this.listasService.createList(this.listForm.value).subscribe();
  }
}
