class Posicion{
	posicion
	nombre
	aciertos
	tiempo
	nodo
	constructor(puntuacion,p){
		let box= document.createElement('div')
		box.classList.add('r','posicion')

		let divPos = document.createElement('div')
		divPos.classList.add('c1')
		let h1Pos= document.createElement('h1')
		h1Pos.innerText= `# ${p}`
		divPos.appendChild(h1Pos)

		let divNombre= document.createElement('div')
		divNombre.classList.add('c1')
		let h1Nombre= document.createElement('h1')
		h1Nombre.innerText= puntuacion.name
		divNombre.appendChild(h1Nombre)

		let divAciertos= document.createElement('div')
		divAciertos.classList.add('c1')
		let h1Aciertos= document.createElement('h1')
		h1Aciertos.innerText=puntuacion.puntos
		divAciertos.appendChild(h1Aciertos)

		let divTiempo= document.createElement('div')
		divTiempo.classList.add('c1')
		let h1Tiempo= document.createElement('h1')
		h1Tiempo.innerText= puntuacion.tiempo
		divTiempo.appendChild(h1Tiempo)

		box.appendChild(divPos)
		box.appendChild(divNombre)
		box.appendChild(divAciertos)
		box.appendChild(divTiempo)


		this.posicion=p
		this.nombre=puntuacion.name
		this.aciertos= puntuacion.puntos
		this.tiempo=puntuacion.tiempo
		this.nodo=box




	}
}
export default Posicion