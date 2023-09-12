import axios from "axios";

const cl= console.log;
export function getData(dataRes){
	
	axios.get('https://restcountries.com/v3.1/lang/spanish')
	.then(data=>{
		let tarjetas= data.data.map(ob=>{			
			return {
				name: ob.name.common,
				capital: ob.capital[0],
				flags: ob.flags.png
			}
		})
		
		
		dataRes(tarjetas)

	})
}
