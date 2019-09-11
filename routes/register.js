const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const PasswordValidator = require('owasp-password-strength-test');
PasswordValidator.config({
  allowPassphrases: true,
  maxLength: 64,
  minLength: 6,
  minPhraseLength: 20,
  minOptionalTestsToPass: 4
});

module.exports = function() {
  let router = express.Router();

  router.get('/', bodyParser.json(), async (req, res, next) => {
    let { username, password, first, last } = req.query;

    let validationTest = PasswordValidator.test(password);
    if (validationTest['errors'].length >= 2) {
      res.status(400).send(validationTest['errors'][0]);
      return;
    }

    let userCheck = await User.find({ username });
    if (userCheck.length >= 1) {
      res.status(400).send('Username already exists');
      return;
    }

    let user = User({
      username,
      password,
      name: {
        first,
        last
      }
    });

    await user.save(err => {
      if (err) {
        console.log('Error inserting document to db');
        res.status(500).send('Error creating new user.');
      }
    });

    res.status(200).send({ username, password, first, last });
  });

  return router;
};
