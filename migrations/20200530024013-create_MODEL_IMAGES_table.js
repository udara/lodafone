'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     /*
     Author : Udara Ranasinghe
    */
   return queryInterface.createTable('model_images', { 
    id:{
      type: Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    local_model_id: Sequelize.INTEGER(11),
    color_id: Sequelize.INTEGER(11),
    image_url: Sequelize.STRING(100),
  });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('model_images');
  }
};
