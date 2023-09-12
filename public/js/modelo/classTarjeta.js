class Tarjeta{
	nombre
	capital
	bandera
	card
	constructor(name,capital,flag){
		this.nombre=name
		this.capital=capital
		this.bandera=flag
			const div= document.createElement("div")
			div.classList.add('c1','tarjeta')
			const img = document.createElement('img')
			img.src= flag
			div.appendChild(img)
			const h2= document.createElement('h2')
			h2.innerText= name
			const h3= document.createElement('h3')
			h3.innerText= capital
			h3.style.color= "gray"

			div.appendChild(h2)
			div.appendChild(h3)

			this.card=div
	}
}
export default Tarjeta = Tarjeta;