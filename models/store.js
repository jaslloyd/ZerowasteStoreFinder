const mongoose = require('mongoose');
const config = require('../config/database.js');

//Setup user schema
const StoreSchema = mongoose.Schema({
    id: String,
    name: String,
    address: String,
    openingHours: String,
    products: String,
    lat: Number,
    lng: Number
});

const Store = mongoose.model('Store', StoreSchema);
//Exports our Store model
module.exports = Store;

// Encapsulate the DB functions inside of users model
module.exports.getStore = function(id, callback){
  Store.findById(id, callback);
};

module.exports.getStores = function(queryString, callback){
  // Need to find a way to search name, products and location column(when added)
  const query = {name: queryString};
  Store.findOne(query, callback);
};

module.exports.addStore = function(store, callback){
  // Add store here...
};
