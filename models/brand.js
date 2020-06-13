module.exports = function (sequelize, DataTypes) {
  let Brand = sequelize.define("brand", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    brand_name: DataTypes.STRING,
  },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  // Model associations
  Brand.associate = model => {
    Brand.hasMany(model.model, { foreignKey: 'brand_id' });
  }
  return Brand;
};
