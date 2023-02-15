'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_games', [
      {
      username: 'khairyel',
      password: 'beauty31',
      created_at: new Date(),
      updated_at: new Date()
    },
      {
      username: 'vernandes',
      password: 'vauili73',
      created_at: new Date(),
      updated_at: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_games', null, {});
  }
};
