"use strict";

const bcrypt = require('bcrypt');
// 本当はuuidでidを設定したいが、ほかテーブルとリレーションを行いたいのでこちらで設定
// const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const saltRounds = 10;
    const users = [
      {
        id: 1,
        username: "user1",
        password: "pass1",
        email: "user1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "user2",
        password: "pass2",
        email: "user2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "user3",
        password: "pass3",
        email: "user3@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let user of users){
      user.password = await bcrypt.hash(user.password, saltRounds);
    }
    
    await queryInterface.bulkInsert('Users', users, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
