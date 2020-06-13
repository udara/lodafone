'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feature', { 
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      feature_name: Sequelize.STRING(50),
      feature_category_id: Sequelize.INTEGER(11),
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('feature');
  }
};
