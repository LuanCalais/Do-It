import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  // Verifica a existência de informações no localStorage na hora de setar
  // Se houver algum erro ele retorna uma lista vazia
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

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

    // Evento disparado a cada alteração
    this.setLocalStorage()
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

  public setLocalStorage():void{
    
    if(this.taskList){
      // Ordena, convertemos o checked em number para fazer uma ordenação a partir dos checados e não checados
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      // Atualiza no banco local do navegador
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

}
