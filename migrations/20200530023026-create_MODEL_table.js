'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  /*
     Author : Udara Ranasinghe
    */
   return queryInterface.createTable('model', { 
    local_model_id:{
      type: Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    brand_id: Sequelize.INTEGER(11),
    model_number: Sequelize.STRING(50),
    model_name: Sequelize.STRING(50),
    description: Sequelize.STRING(250),
  });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('model');

  }
};
