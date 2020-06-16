var express = require('express');
var router = express.Router();
var Account = require('../models/account.model.js');

/* Open account */
router.post('/open-account', function(req, res, next) {
  console.log(req.body);
  Account.create(req.body, function (err, post) {
    if (err) return next(err);
    console.log(req.body);
    console.log(post);
    res.json(post);
  });
});

/* GET ALL Todo */
router.get('/list', function(req, res, next) {
  Account.find(function (err, account) {
    if (err) return next(err);
    res.json(account);
  });
});

/* GET ALL Todo */
router.get('/listByName/:name', function(req, res, next) {
  console.log('The name is %s', req.params.name);
  Account
  .findOne({ name: req.params.name})
  .exec(function (err, account) {
    if (err) return handleError(err);
  //  console.log('The author is %s', account.balance);
    // prints "The author is Bob Smith"
    res.json(account);
  });
});

/* GET ALL Todo */
router.put('/:name', function(req, res, next) {
  console.log('The name is %s', req.params.name);
  Account.findOneAndUpdate({
    name: req.params.name
    },
    { $set: { balance: req.body.balance }
   }, {upsert: true}, (err, account) => {
    if (err) {
     res.send('error updating ');
    } else {
     console.log(account);
     res.send(account);
   }
  })
 
});


/* DELETE Todo  */
router.delete('/:id', function(req, res, next) {
  Account.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
