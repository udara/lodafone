'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('model_feature', { 
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      local_model_id: Sequelize.INTEGER(11),
      feature_id: Sequelize.INTEGER(11),
      feature_description: Sequelize.STRING(150)
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('model_feature');
  }
};
