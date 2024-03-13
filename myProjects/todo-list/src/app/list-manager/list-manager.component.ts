import { Component } from '@angular/core';
import { InputButtonUniComponent } from "../input-button-uni/input-button-uni.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-manager',
    standalone: true,
    imports: [CommonModule,InputButtonUniComponent],
    template: `
   <app-input-button-uni (submit)="addItem($event)"></app-input-button-uni>
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
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  addItem(title: string) {    
    this.todoList.push({ title });
  }

}
