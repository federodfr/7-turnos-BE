//Forzando a usar los servidores DNS de google por problemas en local
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import app from "./app.js";
import config from "./config/env.config.js"
import {Server} from 'socket.io'
import {connectDB} from "./config/database.config.js"

const PORT = config.port;
const NODE_ENV = config.nodeEnv;

const startServer = async() => {
    await connectDB()
}

const httpServer = app.listen(PORT, () => {
    startServer()
    console.log(`Servidor HTTP en http://localhost:${PORT} (${NODE_ENV})`);
});

export const socketServer = new Server(httpServer);

socketServer.on("connection", (socketClient) => {
    console.log("nuevo cliente conectado", socketClient.id)
})

