let frm = document.getElementById('frmInicial')
import Jugador from './modelo/classJugador.js'
const cl= console.log
let player = null
frm.addEventListener('submit',(e)=>{

	e.preventDefault()	
	player = new Jugador(frm.elements.nombre.value)	
	
	//window.location.assign(`/juego?nombre=${player.nombre}&puntos=${player.puntos}&tiempo=${player.tiempo}`)
	fetch('/nuevoJugador',{
		method: 'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body: JSON.stringify(player)
	}).then(res=>{
		const fechaExpiracion = new Date()
		fechaExpiracion.setDate(fechaExpiracion.getDate()+1)
		const fExpGTM = fechaExpiracion.toUTCString()
		document.cookie = `usuario= ${player.nombre}; expires=${fExpGTM}; path=/`
		window.location.assign('/juego')
		
	}).catch(error=>{
		cl("Error: "+error)
	})


	

})