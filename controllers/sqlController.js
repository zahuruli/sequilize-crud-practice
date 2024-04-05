import Task from "../models/todoModel.js";

//get all:
export const getTodosController = async (req, res) => {
  try {
    const allTasks = await Task.findAll({});
    res.status(200).json({
      success: true,
      message: "Successfully found all tasks",
      length: allTasks.length,
      allTasks,
    });
  } catch (error) {
    console.log(error);
  }
};

//getTodosByIdController
export const getTodosByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const foundTask = await Task.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      success: true,
      message: "Successfully found all tasks",
      length: foundTask.length,
      foundTask,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while getting tasks by id",
    });
  }
};

//createTodosController
export const createTodosController = async (req, res) => {
  try {
    const { id, content, desc, is_complete } = req.body;
    const newTask = await Task.build({ id, content, desc, is_complete });
    await newTask.save();
    res.status(200).json({
      success: true,
      message: "Successfully created tasks",
      newTask,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while creating tasks",
    });
  }
};

//updateTodosController
export const updateTodosController = async (req, res) => {
  try {
    const { content, desc, is_complete } = req.body;
    const id = req.params.id;
    const foundTask = await Task.update(
      { content, desc, is_complete },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "Successfully uddated tasks",
      length: foundTask.length,
      foundTask,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while updating tasks by id",
    });
  }
};

//deleteTodosController
export const deleteTodosController = async (req, res) => {
  try {
    const id = req.params.id;
    const foundTask = await Task.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      success: true,
      message: "Successfully deleted tasks",
      length: foundTask.length,
      foundTask,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Error while deleting tasks by id",
    });
  }
};
