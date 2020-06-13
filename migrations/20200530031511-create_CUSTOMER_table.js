'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customer', { 
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      first_name: Sequelize.STRING(50),
      last_name: Sequelize.STRING(50),
      email: Sequelize.STRING(75),
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('customer');
  }
};


