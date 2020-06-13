module.exports = function(sequelize, DataTypes) {
    let FeatureCategory = sequelize.define("feature_category", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    category_name: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return FeatureCategory;
  };