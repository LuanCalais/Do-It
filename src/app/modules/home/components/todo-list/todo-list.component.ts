import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = []

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1)
  }

  public deleteAll(): void {
    const confirm: boolean = window.confirm(`Você deseja realmente deletar essas tasks?`)

    if (confirm === true) {
      this.taskList = []
    }

  }

  constructor() { }

  ngDoCheck(): void {
    // Ordena, convertemos o checked em number para fazer uma ordenação a partir dos checados e não checados
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  setItemList(e: string): void {
    this.taskList.push({ task: e, checked: false })
    console.log(this.taskList)
  }

  public validaInput(event: string, index: number): void{

    if(!event.length){
      const confirm = window.confirm('Task, vazia! Deseja deletar?')

      confirm === true ? this.deleteItemTaskList(index) : ''
    }

  } 

}
