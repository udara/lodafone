'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
     Author : Udara Ranasinghe
    */
   return queryInterface.createTable('brand', { 

    id:{
      type: Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    brand_name: Sequelize.STRING(25),

   });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('brand');
  }
};
