import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io'; // Importar específicamente el Server de socket.io
import handler from './routes/handler.js';

const cl = console.log;
const app = express();
app.use(express.static('public'));
app.use(handler);
const server = http.createServer(app);

// Usar la clase SocketIOServer para crear una instancia de socket.io
const sk = new SocketIOServer(server);

const clients = {};

sk.on('connection', (socket) => {
  cl("Un cliente se ha conectado: ", socket.id);
  clients[socket.id] = true;

  sk.emit('updateClients', Object.keys(clients));
  

  socket.on('disconnect', () => {
    cl("Un cliente se ha desconectado: ", socket.id);
    delete clients[socket.id];


    sk.emit('updateClients', Object.keys(clients));
  });
});



server.listen(3000, () => {
  cl("Servidor iniciado en el puerto 3000");
});
