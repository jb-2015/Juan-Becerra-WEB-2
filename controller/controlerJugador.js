import fs from 'fs'
let jugador = []
let cantPlay=0
const cl= console.log
function guardarPuntuacion(puntuacion){
	const archivo= '../data/puntuaciones.json'
	try{
		fs.writeFileSync(archivo,JSON.stringify(puntuacion))
		cl('Puntuacion guardada')
	}catch(error){
		cl('Error al guardar puntuacion:'+error)
	}
}
function crearJugador(player){	
	jugador.push(player)
	cantPlay++
	cl(cantPlay)
	return cantPlay-1
}

export const Controlador= {
	guardarPuntuacion,
	crearJugador
}