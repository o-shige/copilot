const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Add this line
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myapp");

// Define user schema and model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // In a real-world application, never store passwords in plain text. Always hash and salt the passwords.
});
const User = mongoose.model("User", UserSchema);

app.get("/api/users", async (req, res) => {
  const username = req.query.username;
  //const user = await User.find({ username: username });

    let users;

    if (username) {
      // If a username is provided, find that user
      users = await User.find({ username: username });
    } else {
      // If no username is provided, return all users
      users = await User.find();
    }

  // Set the Content-Type header to application/json
  res.setHeader("Content-Type", "application/json");

  // Send the user data as a JSON string
  res.send(JSON.stringify(users));
});

app.post("/api/users", async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ username: username });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create a new user
  const user = new User({ username: username, password: password });
  await user.save();

  res.status(201).json(user);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
