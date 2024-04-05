import express from "express";
import {
  createTodosController,
  deleteTodosController,
  getTodosByIdController,
  getTodosController,
  updateTodosController,
} from "../controllers/sqlController.js";
const Router = express.Router();

//Routing:
Router.get("/getAll", getTodosController);
Router.get("/getAll/:id", getTodosByIdController);
Router.post("/create", createTodosController);
Router.put("/update/:id", updateTodosController);
Router.delete("/delete/:id", deleteTodosController);

export default Router;
