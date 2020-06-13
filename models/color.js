module.exports = function (sequelize, DataTypes) {
  let Color = sequelize.define("color", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    hex_code: DataTypes.STRING
  },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  Color.associate = model => {
    Color.hasMany(model.model_images, { foreignKey: 'color_id' })
  }
  Color.associate = model => {
    Color.hasMany(model.product, { foreignKey: 'color_id' })
  }
  return Color;
};