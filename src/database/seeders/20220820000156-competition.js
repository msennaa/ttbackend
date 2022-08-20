'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('competitions', [
      {
        competition_name: 'competição yoga',
        in_progress: true,
      },
      {
        competition_name: 'competição hidratação',
        in_progress: true,
      },
      {
        competition_name: 'competição perda de peso',
        in_progress: true,
      },
      {
        competition_name: 'competição dardos',
        in_progress: true,
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
