const express = require('express');
const router = express.Router();
const Store = require('../models/store');

router.get('/nextsearch', (req, res, next) => {
  const { query, location } = req.query;
  const nameQuery = {name: {"$regex": query, "$options": "i"}};
  const productsQuery = {products: {"$regex": query, "$options": "i"}};
  
  let fullQuery;
  // Check for the store names or product names in that location
  if(location.length > 0){
    const locations = location.split(',');
    const locationsQueries = locations.map(location => {
      return {
        address: {"$regex": location, "$options": "i"},
      }
    })

    fullQuery = {
      $or: [nameQuery, productsQuery],
      $and: [...locationsQueries]
    };
  }else{
    // use regular query if location is empty, might be able to rediect to above route
    const locationQuery = {address: {"$regex": query, "$options": "i"}};
    fullQuery = {$or: [nameQuery, locationQuery, productsQuery]};
  }

  Store.getStores(fullQuery, (err, stores) => {
    if(err) throw err;
    res.json(stores)
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
        res.json({success: false, msg: 'Store already exists'});
    }
  });
});

/* Return specific store by ID */
// This needs to be the last GET post since it will anything that matches /api/stores/xxxx
router.get('/:storeID', (req, res, next) => {
  const storeID = req.params.storeID;
  Store.getStore(storeID, (err, store) => {
    if(err) throw err;
    res.json(store);
  });
});

router.put('/:storeID', (req, res, next) => {
  const editedStore = {
    id: req.body.id,
    products: req.body.products
  };

  Store.getStore(editedStore.id, (err, store) => {
    if(err) throw err;
    store.products = editedStore.products;
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
  Store.deleteStore(storeID, (err) => {
    if (err){
      res.json({success: false, msg: 'Failed to delete store'});
    }else{
      res.json({success: true, msg: 'Deleted store'});
    }
  });
});

module.exports = router;
