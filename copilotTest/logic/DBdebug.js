const { User } = require("../models/index");

async function getUsers() {
  // const users = await User.findAll().then((users) => {
  //   console.log(users);
  // });
  try {
    const users = await User.findAll();
    //console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}

async function getUser(username) {
  try {
    const user = await User.findOne({ where: { username: username } });
    //console.log(user);
    return user;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
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

module.exports = { createUser, getUsers, getUser };
