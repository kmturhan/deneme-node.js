var express = require('express');

var router = express.Router();

var girisCtrl = require('../controller/girisController');

router.get('/',girisCtrl);

module.exports = router;