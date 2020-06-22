// Requiring our models.
var db = require("../models");
const { Sequelize } = require("sequelize");

// Routes.
// =============================================================
module.exports = function (app) {
  // Get all customers.
  app.get('/api/product_cards', function (req, res) {
    db.model.findAll({
      include: [{ association: "products" }, { association: "brand" }]
    }).then(models => {
      res.json(models)
    })
  })

    // Post to local storage.
  app.post("/api/shoppingcart_items", function (req, res) {

    db.model.findAll({
      include: [
        db.product
      ]
    })
      .then(function (model) {
        var modeldata = model.values;

        modeldata.model = model.map(function (model) {
          return model.toJSON()
        });

        var model = modeldata.model;
        let shopping_cart_arr = [];

        model.forEach(item => {
          shopping_cart_item = {}
          if (item.products[0]) {
            shopping_cart_item.product_id = item.products[0].sku;
            shopping_cart_item.product_description = item.model_name;
            shopping_cart_item.item_price = item.products[0].price;
            shopping_cart_item.product_image = item.products[0].product_image;
            shopping_cart_arr.push(shopping_cart_item);
          }
        });

        res.send(shopping_cart_arr);
      })
  })
}




