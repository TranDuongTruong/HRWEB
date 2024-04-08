// import express from "express";

// import cors from "cors";
// import morgan from "morgan";
// import helmet from "helmet";


// // Routes
// import indexRoutes from "./routes/index.routes.js";
// import productRoutes from "./routes/products.routes.js";
// import usersRoutes from "./routes/user.routes.js";
// import authRoutes from "./routes/auth.routes.js";
// import employeeRoutes from "./routes/employee.routes.js";
// import payrateRoutes from './routes/payrate.routes.js'
// import jobHistoryRoutes from "./routes/jobHistory.routes.js";
// import sql from'mssql';
// import personalRoutes from "./routes/personal.router.js"

// const app = express();

// // Settings
// app.set("port", process.env.PORT || 4000);
// app.set("json spaces", 4);

// // Middlewares
// app.use(
//   cors({
//     // origin: "http://localhost:3000",
//   })
// );
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// const config = {
//   user: 'sa',
//   password: 'truong123',
//   server: 'DESKTOP-VLSVRCN\\TRANTRUONG',
//   database: 'HR',
//   options: {
//       encrypt: true, // Nếu bạn đang sử dụng kết nối qua SSL/TLS
//       trustServerCertificate: true // Chỉ sử dụng nếu bạn sử dụng SSL/TLS và không có chứng chỉ xác thực
//     }
// };

// app.get('/api/personal_sql', async (req, res) => {
//   try {
//       // Kết nối với cơ sở dữ liệu
//       await sql.connect(config);

//       // Thực hiện truy vấn SQL để lấy dữ liệu
//       const result = await sql.query('SELECT * FROM Personal');

//       // Gửi kết quả về cho client
//       res.send(result);
//   } catch (err) {
//       console.error(err);
//       res.status(500).send('Lỗi máy chủ');
//   } finally {
//       // Đóng kết nối sau khi hoàn thành
//       sql.close();
//   }
// });

// // Routes
// app.use("/api", indexRoutes);
// app.use("/api/jobHistory", jobHistoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/employee", employeeRoutes);
// app.use("/api/payrate", payrateRoutes);
// app.use("/api/personal",personalRoutes)

// export default app;



// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import helmet from "helmet";


// // Routes
// import indexRoutes from "./routes/index.routes.js";
// import productRoutes from "./routes/products.routes.js";
// import usersRoutes from "./routes/user.routes.js";
// import authRoutes from "./routes/auth.routes.js";
// import employeeRoutes from "./routes/employee.routes.js";
// import payrateRoutes from './routes/payrate.routes.js'
// import jobHistoryRoutes from "./routes/jobHistory.routes.js";
// import sql from'mssql';
// import personalRoutes from "./routes/personal.router.js"
// import sqlRoutes from "./routes/sqlRouter.js";

// const app = express();

// // Settings
// app.set("port", process.env.PORT || 4000);
// app.set("json spaces", 4);

// // Middlewares
// app.use(
//   cors({
//     // origin: "http://localhost:3000",
//   })
// );
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/api/sql", sqlRoutes);



// // Routes
// app.use("/api", indexRoutes);
// app.use("/api/jobHistory", jobHistoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/employee", employeeRoutes);
// app.use("/api/payrate", payrateRoutes);
// app.use("/api/personal",personalRoutes)

// export default app;


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
<<<<<<< HEAD
import benefitRoutes from "./routes/benefitplan.routes.js";


=======
import sqlRoutes from "./routes/sqlRouter.js";
import sqlConfig from './sqlConfig.js'
>>>>>>> fe1ba23633c03528a1e796e3ca1ad8e1681ca4a2
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


// const sqlConfig = {
//   user: SQL_SERVER_CONFIG.user,
//   password: SQL_SERVER_CONFIG.password,
//   server: SQL_SERVER_CONFIG.server,
//   database: SQL_SERVER_CONFIG.database,
//   options: {
//     encrypt: true, // For Azure SQL
//     trustServerCertificate: true, // For Azure SQL
//   },
// };

async function connectToSqlServer() {
  try {
    await sql.connect(sqlConfig);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Error connecting to SQL Server:", error.message);
  }
}

connectToSqlServer();

// Routes[=]
app.use("/api/sql", sqlRoutes);
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
