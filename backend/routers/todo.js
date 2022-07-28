const router = require("express").Router();
const todo = require("../controllers/todo");
router.route("/").get(todo.getAll).post(todo.createTodo);
router
  .route("/:id")
  .get(todo.getOne)
  .delete(todo.deleteTodo)
  .put(todo.updateTodo);

module.exports = router;
