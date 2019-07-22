import { Component, EventEmitter, Input, Output  } from '@angular/core';
import {Consulta } from '../consulta';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

	@Input()
	consultas: Consulta[];

	@Output()
	remove: EventEmitter<Consulta> = new EventEmitter();

	@Output()
	toggleComplete: EventEmitter<Consulta> = new EventEmitter();

	constructor() { }

	onToggleConsultaComplete(consulta: Consulta) {
		this.toggleComplete.emit(consulta);
	}

	onRemoveConsulta(consulta: Consulta) {
		console.log(consulta.id)		
		this.remove.emit(consulta);
	}
}
