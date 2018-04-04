const express = require('express');
const router = express.Router();

router.get('/getUsersCountryCode', (req, res, next) => {
    const { lng, lat } = req.query;
    console.log({lng, lat});
});
