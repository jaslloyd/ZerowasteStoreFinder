const express = require('express');
const router = express.Router();
const Store = require('../models/store');

/* Return all stores that match query */
router.get('/search/:query', (req, res, next) => {
  const query = req.params.query;
  const nameQuery = {name: {"$regex": "^"+ query, "$options": "i"}};
  const locationQuery = {address: {"$regex": query, "$options": "i"}};
  const fullQuery = {$or: [nameQuery, locationQuery]};
  Store.getStores(fullQuery, (err, stores) => {
    if(err) throw err;
    res.json(stores);
  });
});

router.get('/all', (req, res, next) => {
  Store.getStores({}, (err, stores) => {
    if(err) throw err;
    res.json(stores);
  });
});

router.post('/addStore', (req, res, next) => {
  const newStore = new Store({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    products: req.body.products,
    openingHours:  req.body.openingHours,
    lat: req.body.lat,
    lng:  req.body.lng
  });

  // Could move this logic into store object to Encapsulate functionality
  Store.getStore(newStore.id, (err, store) => {
    if(err) throw err;
    if(!store){
      Store.addStore(newStore, (err, store) => {
        if(err){
          res.json({success: false, msg: 'Failed to add new store'});
        }else{
          res.json({success: true, msg: 'Added new store'});
        }
      });
    }else{
        res.json({success: false, msg: 'Store already exists...'});
    }
  });
});

/* Return specific store by ID */
router.get('/:storeID', (req, res, next) => {
  const storeID = req.params.storeID;
  Store.getStore(storeID, (err, store) => {
    if(err) throw err;
    res.json(store);
  });
});

// This needs to be the last post since it will anything that matches /api/stores/xxxx
router.put('/:storeID', (req, res, next) => {
  const editedStore = {
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    products: req.body.products,
    openingHours:  req.body.openingHours,
    lat: req.body.lat,
    lng:  req.body.lng
  };

  console.log(editedStore);
  //
  // TODO: Find existing store then update it here...
  Store.getStore(editedStore.id, (err, store) => {
    if(err) throw err;
    // Edit the store values to match new one
    store.products = editedStore.products;
    // Call the editStore function with the edited store...
    Store.editStore(store, (err) => {
      if (err){
        res.json({success: false, msg: 'Failed to update store'});
      }else{
        res.json({success: true, msg: 'Updated store'});
      }
    });
  });
});

router.delete('/:storeID', (req, res, next) => {
  const storeID = req.params.storeID;
  // TODO: Find store from id and delete it here...
  Store.deleteStore(storeID, (err) => {
    if (err){
      res.json({success: false, msg: 'Failed to delete store'});
    }else{
      res.json({success: true, msg: 'Deleted store'});
    }
  });
});

module.exports = router;
