'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('color', { 
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
     name: Sequelize.STRING(25),
     hex_code: Sequelize.STRING(25),
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('color');
  }
};
