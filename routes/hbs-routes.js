'use strict';
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// ============================================================

// Home page / Products main page route.
module.exports = function (app) {
  app.get("/", function (req, res) {

    let brand = req.query.brand;

    let includeBrand = {
      model: db.brand,
    }

    if (brand !== undefined) {
      // user has specified a brand
      // we want to add a 'where' statement to the includeBrand obj
      includeBrand.where = {
        brand_name: brand
      }
    } 

    db.model.findAll({ include: [
      includeBrand
      , { model: db.product }, db.feature] })
      .then(function (model) {

        var modeldata = model.values; // Gets the object values in an array

        modeldata.model = model.map(function (model) {
          return model.toJSON()
        });

        var model = modeldata.model;
        model = model.map(function (model) {
          let screen;
          let processor;
          let os;

          for (const feature of model.features) {
            if (feature.id === 12) {
              screen = feature.model_feature.feature_description;
            }

            if (feature.id === 17) {
              os = feature.model_feature.feature_description;
            }

            if (feature.id === 18) {
              processor = feature.model_feature.feature_description;
            }
          }

          model.screen = screen;
          model.os = os;
          model.processor = processor;

          console.log(model)

          return model;

        })

        // res.send(model)
        res.render("products_main", { model })

      })
  })

  // Get products by brand from the Database.
  // app.get('/api/brand', function (req, res) {
  //   db.model.findAll({
  //     include: [
  //       { association: "products" },
  //       { association: "brand" },
  //       { association: "features" }
  //     ]
  //   })
  //     .then(function (model) {
  //       // console.log(model)
  //       let model_by_brand_arr = [];

  //       editedModel = model.map(item => item.get());

  //       model.forEach(function (item) {
  //         let model_by_brand = {};
  //         if (item.brand.brand_name === "Samsung") {
  //           // console.log(item)
  //           if (item.products[0]) {

  //             model_by_brand.price = item.products[0].price;
  //             model_by_brand.brand_name = item.brand.brand_name;
  //             model_by_brand.model_name = item.model_name;

  //             item.features.forEach(feature => {

  //               if (feature.id === 12) {
  //                 model_by_brand.screen = feature.model_feature.feature_description;
  //               }

  //               if (feature.id === 17) {
  //                 model_by_brand.os = feature.model_feature.feature_description;
  //               }

  //               if (feature.id === 18) {
  //                 model_by_brand.processor = feature.model_feature.feature_description;
  //               }

  //             });
  //             model_by_brand_arr.push(model_by_brand);
  //           }
  //         }

  //       })

  //       // res.render("products_by_brand", { model_by_brand_arr })
  //       res.json(model_by_brand_arr)

  //     })
  // });


  app.get("/shopping_cart", function (req, res) {
    res.render("shopping_cart", {})
  });


  app.get("/single_product/:model_id", function (req, res) {
    db.model.findAll(
      {
        include: [
          db.brand,
          {
            model: db.product,
          },
          db.feature
        ],

        where: { 'local_model_id': req.params.model_id }
      })
      .then(function (model) {

        var modeldata = model.values; // Gets the object values in an array


        modeldata.model = model.map(function (model) {

          return model.toJSON()
        });

        var model = modeldata.model;
        model = model.map(function (model) {
          let screen;
          let weight;
          let os;
          for (const feature of model.features) {
            if (feature.id === 12) {
              screen = feature.model_feature.feature_description;
            }
          }

          model.screen = screen;

          return model;

        })
        console.log(model)
        res.render("single_product", { model })

      })

  })
}