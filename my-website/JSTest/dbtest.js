async function addUser(username, password) {
  const mongoose = require("mongoose");

  // Connect to MongoDB
  mongoose.connect("mongodb://localhost:27017/myapp");

  // Define user schema and model
  const UserSchema = new mongoose.Schema({
    username: String,
    password: String, // In a real-world application, never store passwords in plain text. Always hash and salt the passwords.
  });
  const User = mongoose.model("User", UserSchema);

  // Define the users to be added
//   const users = [
//     { username: "user1", password: "password1" },
//     { username: "user2", password: "password2" },
//     { username: "user3", password: "password3" },
//     { username: "user4", password: "password4" },
//     { username: "user5", password: "password5" },
//   ];

//   // Add the users to the database
//   users.forEach(async (user) => {
//     const newUser = new User(user);
//     await newUser.save();
//   });

  const user = new User({ username: username, password: password });
  await user.save();

  console.log("Users have been added");
}

async function getAllUsers(){
    fetch('http://localhost:3000/api/users')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(users => {
      console.log(users);
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}


async function getUser(username){
    const response = await fetch(`http://localhost:3000/api/users?username=${username}`);

    //console.log(response.status);
    //console.log(response.headers.get("content-type"));
  
    if (!response.ok || !response.headers.get("content-type").startsWith("application/json")) {
      throw new Error("Unexpected response from server");
    }
  
    const users = await response.json();
    console.log(users);

}

//addUser("user6", "password6");
//getAllUsers();
console.log("test");
getUser("user1");
// getUser("user2");
// getUser("user3");
// getUser("user4");
// getUser("user5");
//getUser("user6");
