var express = require('express');
var router = express.Router();


// router.get('/', function(req, res, next) {
//     res.render('index', {title: "Homepage"});

//   });

var obj = {};
router.get('/', function(req, res){
  con.query('SELECT * FROM gistest', function(err, result) {

    if(err){
        throw err;
    } else {
        obj = {result};
        res.render('index', obj);                
    }
});

});

  
// router.get('/users', function(req, res, next) {
//     res.send('Hello user!!!');
//   });

  // GET about
// router.get('/about', function(req, res, next) {
//     res.send('about');
//   });

module.exports = router;


