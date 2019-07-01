import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

	constructor(private http: Http) { }

	// API: GET /todos
	public getAllTodos() : Observable<AppComponent[]> {
		return this.http
		.get(API_URL + '/todos')
		.map(response => {
			const todos = response.json();
			return todos.map((todo) => new AppComponent(todo));
		})
		.catch(this.handleError);
	}

	// API: POST /todos
	public createTodo(todo: AppComponent) {
		// will use this.http.post()
	}

	// API: GET /todos/:id
	public getTodoById(todoId: number) {
		// will use this.http.get()
	}

	// API: PUT /todos/:id
	public updateTodo(todo: AppComponent) {
		// will use this.http.put()
	}

	// DELETE /todos/:id
	public deleteTodoById(todoId: number) {
		// will use this.http.delete()
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}
	
}
