var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello user!!!');
  res.render('users', {title: "Users Page"})
});


// Getting user with id 
router.get('/:id', function(req, res, next) {
  // console.log(res);
  // res.send('Hello cool user ' + req.params.id);
  con.query('SELECT * FROM gistest', function(err, result) {
      // console.log(result);

      const userId = result.find(result => result.id === parseInt(req.params.id));
      console.log("User ", userId);
      if (userId) {
              
              // res.send(userId);
              obj = {result};
        res.render('partials/user-id', obj); 
      }   
    // if(err){
    //     throw err;
    // } else {
    //   if(req.params.id === result.id){
    //     obj = {result};
    //     res.render('partials/user-id', obj);    
    //   }            
    // }
});
});

module.exports = router;
