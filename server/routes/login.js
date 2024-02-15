var express = require("express");
var router = express.Router();
const User = require("../models/index");
const { createUser, getUsers, getUser } = require("../logic/dbAccess");

router.get("/", function (req, res) {
  //res.render("index", {title: 'home', message: 'hello'});
  res.render("login", { title: "this is login" });
  //res.send("hello");
});

router.post("/", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  // ログインが成功したらユーザーを次のページにリダイレクト;
  if (username.length > 0 && password.length > 0) {
    // DBから、ユーザー名とパスワードが一致するユーザーを取得
    // const users = getUsers();
    // (user) => console.log(user);
    let user;
    try {
      user = await getUser(username);
      //console.log(user.password);
    } catch (error) {
      console.error("Error fetching users: ", error);
      throw error;
    }

    // パスワード評価
    if (password === user.password) {
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
