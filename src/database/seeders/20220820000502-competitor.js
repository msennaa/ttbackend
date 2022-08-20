'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('athletes', [
      {
        athlete: "Joao das Neves", 
        value: "10", 
        unity: "s",
        competition_id: 1
      },
      {
        athlete: 'Renata',
        value: "2",
        unity: 'm',
        competition_id: 1
      },
      {
        athlete: "Yuri", 
        value: "10", 
        unity: "m",
        competition_id: 1
      },
      {
        athlete: 'Rui',
        value: "2",
        unity: 's',
        competition_id: 1
      },
      {
        athlete: "Joao", 
        value: "500", 
        unity: "ml",
        competition_id: 2
      },
      {
        athlete: 'Marcio',
        value: "2",
        unity: 'l',
        competition_id: 2
      },
      {
        athlete: "Rubens", 
        value: "8", 
        unity: "l",
        competition_id: 2
      },
      {
        athlete: 'Oseias',
        value: "150",
        unity: 'ml',
        competition_id: 2
      },
      {
        athlete: 'Ricardo',
        value: "2",
        unity: 'kg',
        competition_id: 3
      },
      {
        athlete: 'Paula',
        value: "500",
        unity: 'g',
        competition_id: 3
      },
      {
        athlete: 'Brenda',
        value: "30",
        unity: 'kg',
        competition_id: 3
      },
      {
        athlete: 'Andre',
        value: "100",
        unity: 'g',
        competition_id: 3
      },
      {
        athlete: 'Ursula',
        value: "15",
        unity: 'm',
        competition_id: 4
      },
      {
        athlete: 'Roberto',
        value: "50",
        unity: 'cm',
        competition_id: 4
      },
      {
        athlete: 'Marco',
        value: "30",
        unity: 'm',
        competition_id: 4
      },
      {
        athlete: 'Irineu',
        value: "10",
        unity: 'cm',
        competition_id: 4
      },
    ], {});
  },

  down: async (queryInterface) => {
    
  },
};