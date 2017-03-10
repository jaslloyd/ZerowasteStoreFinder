const express = require('express');
const router = express.Router();
const Store = require('../models/store');

/* Return all stores that match query */
router.get('/:query', function(req, res, next) {
  console.log(req.params.query);
  query = req.paras.query;
  Store.getStores(query, (err, stores) => {
    if(err) throw err;
    res.json({stores: stores});
  });
  res.send('respond with a resource');
});

/* Return specific store by ID */
// I hate this /id/:id
router.get('/id/:storeID', function(req, res, next) {
  console.log(req.params.storeID);
  storeID = req.paras.storeID;
  Store.getStore(storeID, (err, store) => {
    if(err) throw err;
    res.json({store: store});
  });
  res.send('respond with a resource');
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

  Store.addStore(newStore, (err, store) => {
    if(err){
      res.json({success: false, msg: 'Failed to add new store'});
    }else{
      res.json({success: true, msg: 'Added new store'});
    }
  });
});

module.exports = router;
