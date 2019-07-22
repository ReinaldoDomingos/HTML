import {Component, Input} from '@angular/core';
import {Consulta} from '../consulta';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  consultas: Consulta[];

  constructor() {
  }
}
