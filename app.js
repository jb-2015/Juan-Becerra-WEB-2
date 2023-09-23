import express from 'express';
import http from 'http';

import handler from './routes/handler.js';

const cl = console.log;
const app = express();
app.use(express.static('public'));
app.use(handler);
const server = http.createServer(app);


server.listen(3000, () => {
  cl("Servidor iniciado en el puerto 3000");
});
