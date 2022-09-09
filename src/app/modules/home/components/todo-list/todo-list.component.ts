import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: 'estudar',
      checked: true
    },
    {
      task: 'dormir',
      checked: false
    },
    {
      task: 'comer',
      checked: true
    },
    {
      task: 'exercitar',
      checked: false
    }
  ]

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

  ngOnInit(): void {
  }

}
