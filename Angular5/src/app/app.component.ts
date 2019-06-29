import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	private	url:string = 'http://127.0.0.1:8887/frete.json'
	private curso: object
	private query: string

	constructor(todo){		
	}

	consultar(){
		//this.$http.get();
	}
}

/*@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent], //todas as diretivas, servicos e componentes da aplicacao
    bootstrap:[AppComponent] //diz qual o componente principal
})*/