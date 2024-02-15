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
      "Comments",
      [
        {
          contentId: 1,
          userId: 1,
          commentText: "comment",
          commentDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          contentId: 1,
          userId: 1,
          commentText: "comment for 1 (twice)",
          commentDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          contentId: 2,
          userId: 1,
          commentText: "comment for 2",
          commentDate: new Date(),
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
    await queryInterface.bulkDelete("Comment", null, {});
  },
};
