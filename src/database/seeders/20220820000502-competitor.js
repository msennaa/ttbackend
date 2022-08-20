'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('athletes', [
      {
        athlete: 'João das Neves',
        value: true,
        unity: '10',
        competition: 1
      },
      {
        athlete: 'João das Areias',
        value: true,
        unity: '10',
        competition: 1
      },
    ], {});
  },

  down: async (queryInterface) => {
    
  },
};