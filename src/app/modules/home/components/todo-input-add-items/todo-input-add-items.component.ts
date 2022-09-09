import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  // Do tipo evento de emissão, irá emitir para os componentes externos essas informações
  @Output() public emmitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {

    // Remove espaços
    this.addItemTaskList = this.addItemTaskList.trim()

    // Verifica se o campo foi preenchido
    if (this.addItemTaskList === '') { alert(`Impossível cadastrar um campo vazio`); return}
    
    // Emite para fora do componente
    this.emmitItemTaskList.emit(this.addItemTaskList)
    this.addItemTaskList = ''
  }

}
