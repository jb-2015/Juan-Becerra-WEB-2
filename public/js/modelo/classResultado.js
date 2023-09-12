class Resultado{
	reg
	constructor(nombre,puntos,tiempo){
		let box= document.createElement('div')
		box.classList.add('boxResultado')

		let nom = document.createElement('h1')
		nom.innerText=nombre

		let linea= document.createElement('hr')
		let point = document.createElement('h2')
		point.innerText= "Puntos: "+puntos

		let time= document.createElement('h2')
		time.innerText="Tiempo: "+tiempo

		let tp= document.createElement('h2')
		tp.innerText= "Tiempo/Puntos: "+(tiempo/puntos)
		let btnHome= document.createElement('button')
		btnHome.innerText= "Pagina principal"
		btnHome.classList.add('btnStart')
		box.appendChild(nom)
		box.appendChild(linea)
		box.appendChild(point)
		box.appendChild(time)
		box.appendChild(tp)
		box.appendChild(btnHome)

		btnHome.addEventListener('click',()=>{
			window.location.assign('/home')
		})

		let tpoint= tiempo/puntos
		this.reg={
			n: nombre,
			p: puntos,
			t: tiempo,
			timep: tpoint
		}
		return box
	}
}
export default Resultado