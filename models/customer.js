module.exports = function(sequelize, DataTypes) {
    let Customer = sequelize.define("customer", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
    },
    { 
      timestamps:false,
      freezeTableName: true
    }
    );
    return Customer;
  };