const express = require("express");
var router = express.Router();
const Todo = require("../models/Todo");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send({ message: "to do endpoint" });
});

router.post("/", (req, res, next) => {
  const dataToSave = req.body;

  new Todo(dataToSave).save();

  res.send({ message: "Created Todo succefull" });
});

router.put("/:id", async (req, res, next) => {
  const dataToUpdate = req.body;
  const { id } = req.params;

  console.log(req.params);
  await Todo.updateOne({ _id: id }, dataToUpdate);

  res.send({ message: "Updated Todo succefull" });
});

module.exports = router;
