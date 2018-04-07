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
    lng: Number,
    location: {
      lat: Number,
      lng: Number
    }
});

const Store = mongoose.model('Store', StoreSchema);
//Exports our Store model
module.exports = Store;

// Encapsulate the DB functions inside of users model
module.exports.getStore = (storeId, callback) => {
  const storeIdJSON = {id : storeId};
  Store.findOne(storeIdJSON, callback);
};

module.exports.getStores = (queryString, callback) => {
  Store.find(queryString, callback);
};

module.exports.addStore = (newStore, callback) => {
  newStore.save(callback);
};

module.exports.editStore = (editedStore, callback) => {
  editedStore.save(callback);
};

module.exports.deleteStore = (storeId, callback) => {
  const storeIdJSON = {id : storeId};
  Store.remove(storeIdJSON, callback);
};
