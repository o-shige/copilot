const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp');

// Define user schema and model
const UserSchema = new mongoose.Schema({
    username: String,
    password: String, // In a real-world application, never store passwords in plain text. Always hash and salt the passwords.
});
const User = mongoose.model('User', UserSchema);

// Define the users to be added
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'user6', password: 'password6' },
];

// Add the users to the database
users.forEach(async (user) => {
    const newUser = new User(user);
    await newUser.save();
});

console.log('Users have been added');