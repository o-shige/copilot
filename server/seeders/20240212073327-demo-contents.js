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
      "Contents",
      [
        {
          userId: 1,
          title: "hello",
          description: "hello world this is world",
          publishDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "hello1",
          description: "hello world this is world1",
          publishDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "hello2",
          description: "hello world this is world2",
          publishDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    await queryInterface.bulkDelete("Content", null, {});
  },
};
