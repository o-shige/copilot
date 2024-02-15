"use strict";

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
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: 1,
          fullName: "user1 name1",
          location: "newyork",
          interests: "cooking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          fullName: "user2 name2",
          location: "東京",
          interests: "料理",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          fullName: "user3 name3",
          location: "brazil",
          interests: "motercycle",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Profile", null, {});
  },
};
