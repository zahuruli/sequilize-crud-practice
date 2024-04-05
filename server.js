import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mysqlRouter from "./routes/sqlRoute.js";
import { connectedToDb } from "./config/db.js";

//configuration:
dotenv.config();

//rest object
const app = express();

//api config:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.use("/api", mysqlRouter);

//rest Api:
// app.use("/", (req, res) => {
//   res.send({
//     message: "Welcome to  our server",
//     Writer: " Zahurul islam",
//   });
// });

//Port:

const PORT = process.env.PORT || 8000;
const HostName = "127.0.0.1";

//server listening:

app.listen(PORT, () => {
  connectedToDb();
  console.log(
    `Server is running in ${process.env.DEV_MODE} at http://${HostName}:${PORT}`
      .bgCyan.red
  );
});
