var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');

const { catchErrors } = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/*
  API
*/
router.get('/api/feed', catchErrors(apiController.getFeed));

module.exports = router;
