const express = require('express');
const router = express.Router();
const Store = require('../models/store');

/* Return all stores that match query */
// Use queryStrings for reading query
router.get('/search/:query', function(req, res, next) {
  console.log(req.params.query);
  query = req.params.query;
  Store.getStores(query, (err, stores) => {
    if(err) throw err;
    console.log(query);
    res.json({stores: stores});
  });
});

/* Return specific store by ID */
router.get('/:storeID', function(req, res, next) {
  console.log('we made it!');
  console.log(req.params.storeID);
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

  console.log(newStore);

  Store.addStore(newStore, (err, store) => {
    if(err){
      res.json({success: false, msg: 'Failed to add new store'});
    }else{
      res.json({success: true, msg: 'Added new store'});
    }
  });
});

module.exports = router;
