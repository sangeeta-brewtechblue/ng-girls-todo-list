import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputButtonUniComponent } from './input-button-uni/input-button-uni.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputButtonUniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
}
