import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define("Task", {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: false,
  //   },
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  desc: {
    type: DataTypes.TEXT,
  },
  is_complete: {
    type: DataTypes.BOOLEAN,
  },
});

sequelize.sync({ force: false });
export default Task;
