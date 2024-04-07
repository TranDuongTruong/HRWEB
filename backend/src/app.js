import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();


// Routes
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import payrateRoutes from './routes/payrate.routes.js'
import personalRoutes from './routes/personal.router.js'
import jobHistoryRoutes from "./routes/jobHistory.routes.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
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

const SQL_SERVER_CONFIG = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,

};
const sqlConfig = {
  user: SQL_SERVER_CONFIG.user,
  password: SQL_SERVER_CONFIG.password,
  server: SQL_SERVER_CONFIG.server,
  database: SQL_SERVER_CONFIG.database,
  options: {
    encrypt: true, // For Azure SQL
    trustServerCertificate: true, // For Azure SQL
  },
};

async function connectToSqlServer() {
  try {
    await sql.connect(sqlConfig);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Error connecting to SQL Server:", error.message);
  }
}

connectToSqlServer();

// Routes
app.use("/api", indexRoutes);
app.use("/api/jobHistory", jobHistoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);

app.use("/api/payrate", payrateRoutes);
app.use("/api/personal", personalRoutes);


export default app;
