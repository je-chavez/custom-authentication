const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = function() {
  let router = express.Router();

  router.get('/', bodyParser.json(), async (req, res, next) => {
    let { username, password } = req.query;
    let user = await User.findOne({ 'username': username }).exec();
    if (!user) {
      res.status(400).send('Error logging in. Check username.');
      return;
    }
    let pwTest = await bcrypt.compare(password, user.password);
    if(!pwTest){
        res.status(400).send('Error logging in. Check password.');
        return;
    }
    
    res.status(200).send({ username, password });
  });

  return router;
};
