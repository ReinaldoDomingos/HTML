class Curso{	
	id: number
	nome: string
	ciencia:string
	constructor(id:number,nome:string,ciencia:string) {
		this.nome=nome
		this.ciencia=ciencia
	}
};


class CRUD{
	cursos:Array<Curso>

	constructor(){		
		this.cursos= new Array()
	}	

	Consultar(id:number,nome:string,ciencia:string){

	}
}

angular.module('triagem',[]);