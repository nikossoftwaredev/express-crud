const express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send({ message: "get is working" });
});

module.exports = router;
