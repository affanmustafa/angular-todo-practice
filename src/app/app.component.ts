import {Component} from '@angular/core';
import {TodoItem} from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
}
