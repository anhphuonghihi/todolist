const router = require("express").Router();
const todo= require("../controllers/todo")
router.route("/").get(todo.getTopics).post(todo.createTopic);
router
  .route("/:id")
  .get(todo.getTopic)
  .delete(todo.deleteTopic)
  .put(todo.updateTopic);

module.exports = router;
