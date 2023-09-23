import fs from 'fs'
let jugador = []
let puntuaciones =[]
let cantPlay=0
const cl= console.log
function guardarPuntuacion(puntuacion,callback){
		// Leer el archivo JSON existente
		fs.readFile('./data/puntuaciones.json', 'utf8', (err, data) => {
		  if (err) {
		    console.error('Error al leer el archivo:', err);
		    return;
		  }

		  if(data.length===0){
		  	cl('El archivo esta vacio')
		  	//puntuaciones.push(puntuacion)

		  }else{
		  	// Analizar el contenido JSON en un objeto JavaScript
		     puntuaciones = JSON.parse(data);
		  }

		  try {		    

		    // Agregar el nuevo dato al arreglo existente
		    puntuaciones.push(puntuacion);
		    
		    puntuaciones.sort((a,b)=>{
		    	return a.T_P - b.T_P
		    })

		    let i=0
		    puntuaciones.forEach(p=>{
		    	if(p===puntuacion){
		    		callback(i+1)
		    		
		    	}
		    	i++
		    })

		    // Convertir el objeto JavaScript actualizado en una cadena JSON
		    const datosActualizados = JSON.stringify(puntuaciones, null, 2);

		    // Escribir la cadena JSON actualizada de vuelta al archivo
		    fs.writeFile('./data/puntuaciones.json', datosActualizados, 'utf8', (err) => {
		      if (err) {
		        console.error('Error al escribir en el archivo:', err);
		        return;
		      }
		      console.log('Datos actualizados y guardados en el archivo.');
		    });
		  } catch (error) {
		    console.error('Error al analizar el contenido JSON:', error);
		  }
		  console.log('guardado')
		});
		
}
function crearJugador(player){	
	jugador.push(player)
	cantPlay++
	cl(cantPlay)
	return cantPlay-1
}
function leerDatos(){
	return new Promise((res,rej)=>{
		fs.readFile('./data/puntuaciones.json','utf8',(err,data)=>{
			if(err) throw err

			const jsonData= JSON.stringify(data)
			if(Object.keys(jsonData).length === 0){
				res("Archivo vacio")
			}else{
				puntuaciones.push(...jsonData)
			}
		})
	})
	
}
function obtenerRanking(callback){
	fs.readFile('./data/puntuaciones.json','utf8',(err,data)=>{
			if(err) throw err

			console.log('Ranking')	
			callback(data)
	})
}

export const Controlador= {
	guardarPuntuacion,
	crearJugador,
	obtenerRanking
}