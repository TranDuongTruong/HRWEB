import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";


// Routes
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import payrateRoutes from './routes/payrate.routes.js'
import personalRoutes from './routes/personal.router.js'
import jobHistoryRoutes from "./routes/jobHistory.routes.js";
import benefitRoutes from "./routes/benefitplan.routes.js";


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

// Routes
app.use("/api", indexRoutes);
app.use("/api/jobHistory", jobHistoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);

app.use("/api/payrate", payrateRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/benefitplan",benefitRoutes);


export default app;
