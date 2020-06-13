module.exports = function(sequelize, DataTypes) {
    let Invoice = sequelize.define("invoice", {
      invoice_number: {type: DataTypes.INTEGER, primaryKey: true},
      customer_number: DataTypes.INTEGER
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Invoice;
  };