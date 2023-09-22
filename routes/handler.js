import express from "express";
import fs from "fs";
import {getData} from "../api.js"
import {Controlador} from '../controller/controlerJugador.js'
import bodyParser from 'body-parser'
const cl= console.log;
const handler = express.Router();
handler.use(express.json())
handler.get(["/","/home"] ,(req,res)=>{
	fs.readFile('public/index.html','utf-8',(error,data)=>{
		if(error) throw error;
		res.send(data);		
	})	
	cl(`Peticion para ${req.url}`);
})
handler.post('/nuevoJugador',(req,res)=>{
	Controlador.crearJugador(req.body)
	res.send(req.url)
})
handler.post('/guardar',(req,res)=>{
	Controlador.guardarPuntuacion(req.body, (pos)=>{
		res.send({"pos":pos})
	})
	
})
handler.get('/juego',(req,res)=>{	
	
	fs.readFile('public/juego.html','utf-8',(error,data)=>{
		if(error) throw error;
		res.end(data)

	})
})

handler.get('/ranking',(req,res)=>{
	Controlador.obtenerRanking(rank=>{
		res.send(JSON.parse(rank))
	})
})

 handler.get("/api",(req,res)=>{
	cl("Peticion a API")
	getData(dataRes=>{
		
		res.json(dataRes)

	})
})
 


export default handler;