module.exports = function(sequelize, DataTypes) {
    let Feature = sequelize.define("feature", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    feature_name: DataTypes.STRING,
    feature_category_id: DataTypes.INTEGER
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    Feature.associate = model => {
    Feature.belongsToMany(model.model, { foreignKey:'feature_id', sourceKey:'id', through:'model_feature' });
    }
    return Feature;
  };