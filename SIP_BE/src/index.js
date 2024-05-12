import app from "./app.js";
import "./database.js";
import { PORT } from "./config.js";
import "./libs/initialSetup.js";


import http from "http";
import { Server } from 'socket.io'

const server = http.createServer(app)
// const io = new Server(server)

export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:19335", "http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],

  }
});

// Socket.io setup
io.on('connection', (socket) => {
  console.log('A user connected to Socket');


  socket.on('disconnect', () => {
    console.log('User disconnected to Socket');
  });
});
server.listen(PORT);
console.log("Server on port", app.get("port"));
