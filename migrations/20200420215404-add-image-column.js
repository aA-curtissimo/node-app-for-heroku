'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pets', 'petImageUrl', {
      type: Sequelize.DataTypes.STRING(1000),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pets', 'petImageUrl');
  }
};
