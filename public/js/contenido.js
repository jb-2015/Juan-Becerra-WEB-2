import Tarjeta from "./modelo/classTarjeta.js"
import {Juego} from './juego.js'
const cl= console.log;
const loading = document.getElementById('gifLoad')
const askContent= document.getElementById('askContent')


let countries= []

function loadCountries(){
	fetch('/api')
	.then(res=> res.json())
	.then(data=>{		
		cl(data)
		data.forEach(p=>{
			countries.push(new Tarjeta(p.name,p.capital,p.flags))			
		})
			
	}).then(()=>{
		askContent.removeChild(loading)
		const div= document.createElement('div')
		div.classList.add('c1')
		const btnStart= document.createElement('button')
		btnStart.classList.add('btnStart')
		btnStart.textContent="COMENZAR"
		div.appendChild(btnStart)
		askContent.appendChild(div)

		btnStart.addEventListener('click',()=>{
			askContent.removeChild(div)
			Juego.comenzar()
		})
	})
	.catch(error=>{
		
		cl(error)
	})
}
function getAleatorio(callback){
	const min = 0
	const max = countries.length-1

	const numRand= Math.floor(Math.random()*(max-min+1))+min

	callback(countries[numRand])

}

export const Contenido = {
	getAleatorio,
	loadCountries
}