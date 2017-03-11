const mongoose = require('mongoose');
const config = require('../config/database.js');

//Setup user schema
const StoreSchema = mongoose.Schema({
    id: String,
    name: String,
    address: String,
    openingHours: Array,
    products: String,
    lat: Number,
    lng: Number
});

const Store = mongoose.model('Store', StoreSchema);
//Exports our Store model
module.exports = Store;

// Encapsulate the DB functions inside of users model
module.exports.getStore = function(storeId, callback){
  const storeIdJSON = {id : storeId};
  Store.findOne(storeIdJSON, callback);
};

module.exports.getStores = function(queryString, callback){
  const nameQuery = {name: {"$regex": "^"+ queryString, "$options": "i"}};
  const locationQuery = {address: {"$regex": queryString, "$options": "i"}};
  Store.find({$or: [nameQuery, locationQuery]}, callback);
};

module.exports.addStore = function(newStore, callback){
  // Add store here...
  newStore.save(callback);
};
