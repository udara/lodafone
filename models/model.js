module.exports = function(sequelize, DataTypes) {
  let Model = sequelize.define("model", {
  local_model_id: {type: DataTypes.INTEGER, primaryKey: true},
  brand_id: DataTypes.STRING,
  model_number: DataTypes.STRING,
  model_name: DataTypes.STRING,
  description: DataTypes.STRING
  },
  { 
    timestamps:false,
    freezeTableName: true
  }
  );

  Model.associate = model => {
      Model.belongsTo(model.brand, { foreignKey:'brand_id', sourceKey: 'id' });
      Model.hasMany(model.product, { foreignKey:'local_model_id' })
      Model.belongsToMany(model.feature, { foreignKey:'local_model_id', sourceKey:'local_model_id', through:'model_feature' });
  }
  return Model;
};