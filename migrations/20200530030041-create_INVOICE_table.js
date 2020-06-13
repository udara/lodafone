'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoice', { 
      invoice_number:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
     customer_number: Sequelize.INTEGER(11),
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('invoice');
  }
};
