var express = require('express');
var router = express.Router();

var obj = {};
router.get('/', function(req, res){

    con.query('SELECT * FROM gistest', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {result};
            res.render('about', obj);                
        }
    });

});

  module.exports = router;