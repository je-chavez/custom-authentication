const express = require('express');
const bodyParser = require('body-parser')

module.exports = function(config){
    let router = express.Router();

    router.get('/', bodyParser.json(), async (req, res, next) => {
        let {username, password, firstName, lastName} = req.query;
        res.status(200).send({username, password, firstName, lastName});
    });

    return router;
}
