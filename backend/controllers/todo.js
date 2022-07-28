const Todo = require("../models/todo");
const todo = {
  getAll: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createTodo: async (req, res) => {
    try {
      const { name, post } = req.body;
      const newNote = new Todo({
        name,
      });
      //   res.json({newNote})
      await newNote.save();
      res.json("create todo");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const note = await Todo.findById(req.params.id);
      res.json(note);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await todos.findByIdAndDelete(req.params.id);
      res.json("delete todo");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateTodo: async (req, res) => {
    try {
      const { name } = req.body;
      await Todo.findOneAndUpdate(
        { _id: req.params.id },
        {
          name,
        }
      );
      res.json("update todo");
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = todo;
