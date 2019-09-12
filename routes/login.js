const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'super_secret_jwt_passcode';

module.exports = function() {
  let router = express.Router();

  router.get('/', bodyParser.json(), async (req, res, next) => {
    let { username, password } = req.query;
    let user = await User.findOne({ username: username }).exec();
    if (!user) {
      res
        .status(400)
        .send({ success: false, error: 'Error logging in. Check username.' });
      return;
    }

    let pwTest = await bcrypt.compare(password, user.password);
    if (!pwTest) {
      res
        .status(400)
        .send({ success: false, error: 'Error logging in. Check password.' });
      return;
    }

    let expiration = new Date().setUTCDate(new Date().getUTCDate() + 30);
    let token = jwt.sign(
      {
        exp: expiration / 1000,
        user: user.id
      },
      JWT_SECRET
    );

    res.status(200).send({ success: true, token });
  });

  return router;
};
