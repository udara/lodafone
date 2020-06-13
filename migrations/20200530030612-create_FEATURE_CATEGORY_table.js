'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feature_category', { 
      id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      category_name: Sequelize.STRING(25),
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('feature_category');
  }
};
