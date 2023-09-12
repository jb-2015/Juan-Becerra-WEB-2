import fs from 'fs'
let jugador = []
let cantPlay=0
const cl= console.log
function guardarJugador(player){
	
}
function crearJugador(player){	
	jugador.push(player)
	cantPlay++
	cl(jugador)
	cl(cantPlay)
	return cantPlay-1
}

export const Controlador= {
	guardarJugador,
	crearJugador
}