var express = require("express");
var router = express.Router();
const User = require("../models/index");
const { createUser, getUsers, getUser } = require("../logic/dbAccess");

router.get("/", async function (req, res) {
    const users = await getUsers();
    res.json(users);
    console.log(users);
    // const data = "hello from server";
    // res.json(data);
});

module.exports = router;
