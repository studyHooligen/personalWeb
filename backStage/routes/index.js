var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,next){
  res.redirect("/index");
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'HTML' });
});

module.exports = router;
