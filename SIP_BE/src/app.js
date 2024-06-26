import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from 'dotenv';

dotenv.config();


// Routes
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import payrateRoutes from './routes/payrate.routes.js'
// import personalRoutes from './routes/personal.router.js'
import sqlRoutes from "./routes/sqlRouter.js";

import { PORT } from "./config.js";

import { connectToQueue, consumeMessageFromQueue } from "./rabbitmq.js";

// const channel = await connectToQueue();

// consumeMessageFromQueue(channel)


const app = express();

// Settings
app.set("port", process.env.PORT || 5000);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors({
    // origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes[=]
app.use("/api/sql", sqlRoutes);
app.use("/api", indexRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes)

// });Routes);
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);

app.use("/api/payrate", payrateRoutes);
// app.use("/api/personal", personalRoutes);
app.get('/', (req, res) => {
  res.json("helmet")

});



export default app;