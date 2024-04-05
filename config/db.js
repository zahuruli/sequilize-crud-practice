// import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("sequelizeDb", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export const connectedToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database".bgMagenta);
  } catch (error) {
    console.log(error);
  }
};
