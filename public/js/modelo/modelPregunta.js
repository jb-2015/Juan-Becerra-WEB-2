import Tarjeta from '../modelo/classTarjeta.js'
import {Contenido} from '../contenido.js'
import {Juego} from '../juego.js'

const tipos=['¿Cual es la capital de ','¿De que país es la bandera?']

class Pregunta{
	pais
	resCorrect
	numCorrect
	constructor(tarjeta){
		this.pais=tarjeta
		let cuadro = document.createElement('div')
		cuadro.classList.add('c3','pregunta')

		switch(this.numRand(0,1)){
			case 0:
				cuadro.appendChild(this.preguntaT1(tarjeta))
				break
			case 1:
				cuadro.appendChild(this.preguntaT2(tarjeta))
				break
		}
		return cuadro
	}

	numRand(min,max){

		return Math.floor(Math.random()*(max-min+1))+min
	}
	preguntaT1(pais){
		const preg = document.createElement('div')
		preg.classList.add('preguntaT1')
		let h1P= document.createElement('h1')
		h1P.innerText= `${tipos[0]} ${pais.nombre}?`

		let opciones = []
		//cargo la opcion correcta para luego cargar la cantidad restante
		this.resCorrect=this.opcion(pais.capital)
		opciones.push(this.resCorrect)
		//lleno el arreglo con hasta 4 opciones, y me aseguro de que no se ponga ninguna opcion repetida
		do{
			let o= this.opcionCap(this.resCorrect)
			if(!opciones.includes(o)){
				opciones.push(o)
			}
		}while(opciones.length<4)
		//ahora intercambio la posicion del a respuesta correcta por una posicion aleatoria entre las otras opciones
		let n= this.numRand(0,3)
		this.numCorrect=n
		opciones[0]=opciones[n]
		opciones[n]= this.opcion(pais.capital)


		//Agrego los elementos de la pregunta
		preg.appendChild(h1P);
		for(const o of opciones){
			preg.appendChild(o)
		}

		return preg
	}
	preguntaT2(pais){
		const preg = document.createElement('div')
		preg.classList.add('preguntaT1')
		let h1P= document.createElement('h1')
		h1P.innerText= `${tipos[1]}`

		let bandera = document.createElement('img')
		bandera.src= pais.bandera

		let opciones = []
		//cargo la opcion correcta para luego cargar la cantidad restante
		this.resCorrect= this.opcion(pais.nombre)
		opciones.push(this.resCorrect)
		//lleno el arreglo con hasta 4 opciones, y me aseguro de que no se ponga ninguna opcion repetida
		do{
			let o= this.opcionPais()
			if(!opciones.includes(o)){
				opciones.push(o)
			}
		}while(opciones.length<4)
		//ahora intercambio la posicion del a respuesta correcta por una posicion aleatoria entre las otras opciones
		let n= this.numRand(0,3)
		this.numCorrect=n
		opciones[0]=opciones[n]
		opciones[n]= this.opcion(pais.nombre)

		preg.appendChild(h1P)
		preg.appendChild(bandera)
		for(const o of opciones){
			preg.appendChild(o)
		}

		return preg


	}

	opcionCap(){
		let box= document.createElement('div')
		box.classList.add('opcion')
		let h2Op= document.createElement('h2')
		Contenido.getAleatorio(p=>{
			h2Op.innerText= p.capital

		})
		box.appendChild(h2Op)
		box.addEventListener('click',()=>{
				
				Juego.respuestaIncorrecta(this.numCorrect)
				
				
			})
		return box

	}
	opcionPais(){
		let box= document.createElement('div')
		box.classList.add('opcion')
		let h2Op= document.createElement('h2')
		Contenido.getAleatorio(p=>{
			h2Op.innerText= p.nombre
		})
		box.appendChild(h2Op)
		box.addEventListener('click',()=>{
			
			Juego.respuestaIncorrecta(this.numCorrect)

			
		})

		return box
	}
	opcion(valor){
		let box= document.createElement('div')
		box.classList.add('opcion')
		let h2Op= document.createElement('h2')
		
		h2Op.innerText= valor
		
		box.appendChild(h2Op)
		box.addEventListener('click',()=>{
			
			Juego.respuestaCorrecta()
		})
		return box
	}
}
export default Pregunta