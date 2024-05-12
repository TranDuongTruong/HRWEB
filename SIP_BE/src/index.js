import app from "./app.js";
import "./database.js";
import { PORT } from "./config.js";
import "./libs/initialSetup.js";


import http from "http";

const server = http.createServer(app)
// const io = new Server(server)




server.listen(PORT);
console.log("Server on port", app.get("port"));
