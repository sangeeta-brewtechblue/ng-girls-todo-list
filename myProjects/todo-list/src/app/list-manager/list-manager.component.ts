import { Component } from '@angular/core';
import { InputButtonUniComponent } from "../input-button-uni/input-button-uni.component";
import { CommonModule } from '@angular/common';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item.ts';

@Component({
    selector: 'app-list-manager',
    standalone: true,
    imports: [CommonModule,InputButtonUniComponent],
    template: `
   <app-input-button-uni (submitOne)="addItem($event)"></app-input-button-uni>
  <ul>
    @for(todoItem of todoList ; track todoItem.title) {
      <li>
        {{ todoItem.title }}
      </li>
    }
  </ul>

`,
    styleUrl: './list-manager.component.scss',
    
})
export class ListManagerComponent {
  todoListService!: TodoListService;
  todoList: TodoItem[];
 
 
  constructor(todoListService: TodoListService) {
    this.todoList =  todoListService.getTodoList();
  }

  addItem(title: string) { 
    alert('hi'+"here"+title)   
   // this.todoListService.addItem(title);
   this.todoList.push({'title':title});
  }

}
