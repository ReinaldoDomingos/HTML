import { Component, Output, EventEmitter } from '@angular/core';
import { Consulta} from '../consulta';

@Component({
	selector: 'app-todo-list-header',
	templateUrl: './todo-list-header.component.html',
	styleUrls: ['./todo-list-header.component.css']
})

export class TodoListHeaderComponent {
	newConsulta: Consulta = new Consulta();

	@Output()
	add: EventEmitter<Consulta> = new EventEmitter();

	constructor() { }

	addConsulta() {
		this.add.emit(this.newConsulta);
		this.newConsulta = new Consulta();
	}
}

