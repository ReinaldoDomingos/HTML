module.exports = () => {
	const data = { usuarios: [] }
// Create 1000 users
for (let i = 0; i < 1000; i++) {
	data.usuarios.push({ id: i+1, name: `usuario ${i+1}` })
}
return data
}

//http://localhost:3000/cursos
//http://localhost:3000/cursos/5
//http://localhost:3000/cursos?ciencia=exatas
//http://localhost:3000/cursos?_limit=3&_page=2
//http://localhost:3000/cursos?_sort=nome&_order=asc ou desc
//http://localhost:3000/cursos?_start=1&_limit=3  de 2 a 4
//http://localhost:3000/cursos?_start=2&_end=4
//http://localhost:3000/cursos?nome_like=h pesquisa por filtro
//http://localhost:3000/cursos?q=h pesuisa em tudo
//json-server http://jsonplaceholder.typicode.com/db CARREGAR JSON EXTERNO


//json-server index.js