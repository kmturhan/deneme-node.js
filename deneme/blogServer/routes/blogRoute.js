var express =require('express');
var router = express.Router();
var controller = require('../controller/blogController');

router.use(function(req,res,next){
    req.deneme = 'merhaba';
    next();
});
router.get('/',controller.index);
router.get('/login',controller.login);
router.get('/aa',controller.history);
module.exports = router;