const {User} = require('../models/index');

async function getUsers() {
  const users = await User.findAll().then((users) => {
    console.log(users);
  });
}

async function createUser(username, password) {
  const user = await User.create({
    username: username,
    password: password,
  });
  console.log(user);
}

// debug用
// createUser("user1", "pass1");
// getUsers();

module.exports = { createUser, getUsers };  
