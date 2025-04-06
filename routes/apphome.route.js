// apphome.js - LapeluApp route module.

var express = require('express');
var router = express.Router();




// Home page route.

router.get('/', function(req, res) {
    res.json({ info: 'GovCarpeta APIs for Backend Home' });
});

// About page route.
router.get('/about', function(req, res) {
    res.send('About this GovCarpeta backend Apis');
})


module.exports = router;