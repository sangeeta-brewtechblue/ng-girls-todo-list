import { CommonModule } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item.ts';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
  {{ item.title }}
`,
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input()
  item!: TodoItem;
}
