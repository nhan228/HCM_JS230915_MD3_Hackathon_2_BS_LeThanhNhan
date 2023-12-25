import todoModel from "../models/todo.model";

export default {
  createTodo: async (req, res) => {
    try {
      let { name, status } = req.body;
      let newtodo = await todoModel.createTodo({ name, status });
      res.json({newtodo, message: `Tạo thành công công việc: ${req.body.name}`});
    } catch (err) {
      res.status(500).json({ err: "Sever bảo trì" });
    }
  },

  getAllTodos: async (req, res) => {
    try {
      let todos = await todoModel.getAllTodos();
      res.json(todos);
    } catch (err) {
      res.status(500).json({ err: "Sever bảo trì" });
    }
  },

  getTodoById: async (req, res) => {
    try {
      let todoId = parseInt(req.params.id);
      let todo = await todoModel.getTodoById(todoId);
      res.json(todo);
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },

  updateTodo: async (req, res) => {
    try {
      let todoId = parseInt(req.params.id);
      let { name, status } = req.body;
      let updatedTodo = await todoModel.updateTodo(todoId, name, status);
      res.json({updatedTodo, message: `Cập nhật thành công công việc: ${updatedTodo.name}`});
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      let todoId = parseInt(req.params.id);
      await todoModel.deleteTodo(todoId);
      res.json({ message: `Xóa công việc id:${req.params.id} thành công` });
    } catch (err) {
      res.status(500).json({ err: "Server bảo trì" });
    }
  },
};
