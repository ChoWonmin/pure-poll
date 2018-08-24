var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
    res.render('register');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/registerResponder', function(req, res, next) {
    res.render('registerResponder');
});

router.get('/makePoll', function(req, res, next) {
    res.render('makePoll');
});

router.get('/registerOrg', function(req, res, next) {
    res.render('registerOrg');
});

module.exports = router;
