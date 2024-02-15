var express = require("express");
var router = express.Router();
const User = require("../models/index");
const { createUser, getUsers, getUser } = require("../logic/dbAccess");
const bcrypt = require('bcrypt');

router.get("/", async function (req, res) {
  const users = await getUsers();
  res.json(users);
  console.log(users);
  // const data = "hello from server";
  // res.json(data);
});

router.post("/", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  //console.log(username);
  try {
    const user = await getUser(username);
    const hashedPassword = user.password;
    console.log("user: " + user.username);
    console.log("password: " + hashedPassword);

    const match = await bcrypt.compare(password, hashedPassword);
    console.log("match: " + match);
    if (match) {
      //console.log("to nextpage");
      return res.json({ success: true, token: "認証トークン" });
    } else if (err) {
      console.log(err);
    } else {
      //console.log("Invalid username or password");
      return res.json({
        success: false,
        message: "パスワードが一致しません",
      });
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    return res.json({ success: false, message: "パスワードが一致しません" });
    throw error;
  } finally {
    console.log("finally");
  }
});

module.exports = router;
