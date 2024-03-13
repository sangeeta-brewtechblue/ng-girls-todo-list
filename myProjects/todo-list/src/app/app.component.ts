import { Component } from '@angular/core';
import { CommonModule,NgFor } from '@angular/common';
//import { RouterOutlet } from '@angular/router';

import { ListManagerComponent } from "./list-manager/list-manager.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1>
    Welcome to {{ title }}!
  </h1>
   <h4>Hello</h4>
   <app-list-manager></app-list-manager>
  `,
    styleUrl: './app.component.scss',
    imports: [CommonModule, ListManagerComponent]
})
export class AppComponent {
  title = 'todo-list';
  
}
