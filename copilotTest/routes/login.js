var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  // ログインが成功したらユーザーを次のページにリダイレクト
  if (username.length > 0 && password.length > 0) {
    if (password === "pass") {
      //res.send("to nextpage");
      res.render("profile", {title: 'profilePage'});
    } else {
      res.send("Invalid username or password");
    }
  } else {
    res.send("Invalid username or password");
  }
});

module.exports = router;
