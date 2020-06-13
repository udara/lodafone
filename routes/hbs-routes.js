'use strict';
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// ============================================================

module.exports = function (app) {
  app.get("/", function (req, res) {

    db.model.findAll({ include: [
        db.brand,
        {
          model:db.product,
        },
        db.feature
      ]
  })
      .then(function (model) {
        
        var modeldata = model.values; // Gets the object values in an array
        // console.log(modeldata)


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

          return model;

        })

        console.log(model)
        console.log(model[0].features[0])
        console.log(model[0].features[1])
        console.log(model[0].features[2])
        console.log(model[0].features[3])
        console.log(model[0].features[4])
        console.log(model[0].features[5])

        res.render("products_main", { model })

      })

  })

  app.get("/shopping_cart", function (req, res) {
    res.render("shopping_cart", {})
  });

  app.get("/single_product/:model_id", function (req, res) {
    db.model.findAll(
      { include: [
        db.brand,
        {
          model:db.product,
        },
        db.feature
      ],
      where: { 'local_model_id' : req.params.model_id}
  })
      .then(function (model) {
        
        var modeldata = model.values; // Gets the object values in an array
        // console.log(modeldata)


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

   

        //res.render("products_main", { model })

      })

  })
}


// [db.model]
