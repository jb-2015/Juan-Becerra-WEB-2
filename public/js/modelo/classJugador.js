class Jugador{
	nombre
	puntos
	tiempo
	obj
	constructor(name){
		this.nombre=name
		this.puntos=0
		this.tiempo=0

		this.obj={
			nombre: this.nombre,
			puntos: this.puntos,
			tiempo: this.tiempo
		}
		return this
	}
	
}
export default Jugador