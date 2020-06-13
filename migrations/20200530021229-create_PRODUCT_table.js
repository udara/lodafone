'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   /*
     Author : Udara Ranasinghe
    */
   return queryInterface.createTable('product', { 
    sku:{
      type: Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    local_model_id: Sequelize.INTEGER(11),
    color_id: Sequelize.INTEGER(11),
    price: Sequelize.DECIMAL(10,2),
    units_in_stock: Sequelize.INTEGER(11),
  });
},

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('product');

  }
};
