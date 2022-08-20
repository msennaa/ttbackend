'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('competitions', [
      {
        competition_name: 'campeonato de yoga',
        in_progress: true,
      },
      {
        competition_name: 'campeonato de futebol',
        in_progress: false,
      },
      {
        competition_name: 'campeonato de hidratação',
        in_progress: true,
      },
      {
        competition_name: 'campeonato de perda de peso',
        in_progress: true,
      },
      {
        competition_name: 'campeonato de dardos',
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
