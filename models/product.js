module.exports = function (sequelize, DataTypes) {
  let Product = sequelize.define("product", {
    sku: { type: DataTypes.INTEGER, primaryKey: true },
    local_model_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    units_in_stock: DataTypes.INTEGER,
    product_image: DataTypes.INTEGER
  },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  Product.associate = model => {
    Product.belongsTo(model.model, { foreignKey: 'local_model_id', sourceKey: 'local_model_id' });
  }

  return Product;
};

