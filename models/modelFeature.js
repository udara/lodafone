module.exports = function(sequelize, DataTypes) {
    let ModelFeature = sequelize.define("model_feature", {
    local_model_id: {type: DataTypes.INTEGER, primaryKey: true},
    feature_id: DataTypes.INTEGER,
    feature_description: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    
    return ModelFeature;
  };