'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
     Author : Udara Ranasinghe
    */
   return queryInterface.createTable('sold_products', { 
    id:{
      type: Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    invoice_number: Sequelize.INTEGER(11),
    sku: Sequelize.INTEGER(11),
    quantity: Sequelize.INTEGER(5),
  });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('sold_products');
  }
};
