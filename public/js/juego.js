import Pregunta from './modelo/modelPregunta.js'
import {Contenido} from './contenido.js'
import Resultado from './modelo/classResultado.js'

const askContent= document.getElementById('askContent')
const btnStart= document.querySelector('.btnStart')
const hPuntos= document.getElementById('hPuntos')
const LIMIT_PREGUNTAS=10
let elegidos= []
let setI

let nombre
let correctas=0
let preguntas=0
let time=0


window.addEventListener('load',()=>{
	const allCookies=document.cookie
	const arrCokies= allCookies.split(";")

	for(const cookie of arrCokies){
		const [usuario,valor]=cookie.split("=")
		console.log(`Nombre: ${usuario}, Valor: ${valor}`)
		let h1Nom= document.getElementById('hNombreJugador')

		h1Nom.innerText= valor
		nombre=valor
	}
	Contenido.loadCountries()
	
})

function conteoInicial(){
	
}

function preguntar(){
	if(preguntas<LIMIT_PREGUNTAS){
		Contenido.getAleatorio(pais=>{
			if(!elegidos.includes(pais)){
				elegidos.push(pais)
				askContent.appendChild(new Pregunta(pais))
				preguntas++
			}else{
				preguntar()
			}

			
		})
		
	}
	else{
		finalizar()
		
	}
}

function respuestaCorrecta(){
	correctas++

	setTimeout(()=>{
		askContent.innerHTML=""
		const div=document.createElement('div')
		div.classList.add('c1')
		const ok= document.createElement('img')
		ok.src= 'sources/correcto.gif'
		ok.classList.add('gifCorrect')
		div.appendChild(ok)
		askContent.appendChild(div)
		hPuntos.innerText= correctas+" ptos."
	},500)
	setTimeout(()=>{
		askContent.innerHTML=""
		siguiente()
	},3000)
	

}
function respuestaIncorrecta(num){
	let opciones= document.querySelectorAll('.opcion')

	setTimeout(()=>{
		askContent.classList.add('error')
		opciones[num].classList.add('correcta')
	},500)
	setTimeout(()=>{
		askContent.innerHTML=""
		askContent.classList.remove('error')
		
		siguiente()
	},2000)
}
function siguiente(){
	preguntar()
}

function comenzar(){
	preguntar()
	iniciarTiempo()
}
function finalizar(){
	
	pararTiempo()
	let res = new Resultado(nombre,correctas,time);
	askContent.appendChild(res)
	guardarPuntuacion()
	
}
function guardarPuntuacion(){
	let datos= {
			name: nombre,
			puntos: correctas,
			tiempo: time,
			T_P: (time/correctas).toFixed(2)
		}
	fetch('/guardar',{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify(datos)
	}).then(res=>res.tex())
	.then(message=>{
		console.log(message)
	}).catch(error=>{
		console.log(error)
	})
}
function iniciarTiempo(){
	let seg= 0
	let reloj= document.getElementById('hTiempo')
	let s= reloj.querySelector('h1')
	setI= setInterval(()=>{
		seg++
		s.innerText=seg+" seg"
		time=seg
	},1000)
}
function pararTiempo(){
	clearInterval(setI)
}


export const Juego ={
	preguntar,
	respuestaCorrecta,
	respuestaIncorrecta,
	comenzar
}


