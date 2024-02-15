const { User, Comment, Content, Profile } = require("../models/index");

async function getUsers() {
  try {
    const users = await User.findAll();
    //console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}
async function getProfiles() {
  try {
    const profiles = await Profile.findAll();
    console.log(profiles);
    //return profiles;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}
async function getContents() {
  try {
    const contents = await Content.findAll();
    console.log(contents);
    //return contents;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}

async function getComments() {
  try {
    const comments = await Comment.findAll();
    console.log(comments);
    //return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
}

// ユーザーIDからプロフィールとコンテンツとコメントを取得
async function getUserWithDetails(userId) {
  const userWithDetails = await User.findByPk(userId, {
    include: [{ model: Profile }, { model: Content }, { model: Comment }],
  });

  console.log(userWithDetails.toJSON());

  console.log("プロフィール");
  console.log(userWithDetails.Profile.toJSON());

  console.log("コンテンツ");
  console.log(userWithDetails.Contents.map((content) => content.toJSON()));
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

// // users
// console.log("ユーザーですよ");
// getUsers();

// // profile
// console.log("プロフィールですよ");
// getProfiles();

// comments
// console.log("コメントですよ");
// getComments();

// // contents
// console.log("コンテンツですよ");
// getContents();

// ID1に紐づく情報を提示
// console.log("testですよ");
// getUserWithDetails(1);

module.exports = { createUser, getUsers, getUser };
