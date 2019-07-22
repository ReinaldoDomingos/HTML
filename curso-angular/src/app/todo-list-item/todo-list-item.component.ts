import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Consulta} from '../consulta';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
 
 
  @Input() consulta: Consulta;

  @Output()
  remove: EventEmitter<Consulta> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Consulta> = new EventEmitter();

  constructor() {
  }

  toggleConsultaComplete(consulta: Consulta) {
    this.toggleComplete.emit(consulta);
  }

  removeConsulta(consulta: Consulta) {
    console.log(consulta.id)
    this.remove.emit(consulta);
  }
}
