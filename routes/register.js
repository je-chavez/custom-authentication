const express = require('express');
const bodyParser = require('body-parser')
const User = require('../models/user');

module.exports = function(config){
    let router = express.Router();

    router.get('/', bodyParser.json(), async (req, res, next) => {
        let {username, password, first, last} = req.query;
        let user = User({
            username,
            password,
            name: {
                first,
                last
            }
        })
        await user.save();
        res.status(200).send({username, password, first, last});
    });

    return router;
}
