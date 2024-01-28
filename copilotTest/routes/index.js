var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  //res.render("index", {title: 'home', message: 'hello'});
  res.render("index", {title: 'this is login'});
  //res.send("hello");
});

module.exports = router;
