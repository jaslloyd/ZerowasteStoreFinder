const express = require('express');
const router = express.Router();
const Store = require('../models/store');

/* Return all stores that match query */
router.get('/search/:query', function(req, res, next) {
  const query = req.params.query;
  const nameQuery = {name: {"$regex": "^"+ query, "$options": "i"}};
  const locationQuery = {address: {"$regex": query, "$options": "i"}};
  const fullQuery = {$or: [nameQuery, locationQuery]};
  Store.getStores(fullQuery, (err, stores) => {
    if(err) throw err;
    res.json({stores: stores});
  });
});

router.get('/all', function(req, res, next) {
  Store.getStores({}, (err, stores) => {
    if(err) throw err;
    res.json({stores: stores});
  });
});

/* Return specific store by ID */
router.get('/:storeID', function(req, res, next) {
  storeID = req.params.storeID;
  Store.getStore(storeID, (err, store) => {
    if(err) throw err;
    console.log(store);
    res.json({store: store});
  });
});


router.post('/addStore', function(req, res, next) {
  console.log(req.body);
  let newStore = new Store({
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
        res.json({success: false, msg: 'Store already exists...'});
    }
  });
});

module.exports = router;
