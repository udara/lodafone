module.exports = function(sequelize, DataTypes) {
    let SoldProducts = sequelize.define("sold_products", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    invoice_number: DataTypes.INTEGER,
    sku: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return SoldProducts;
  };