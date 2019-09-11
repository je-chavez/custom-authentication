const express = require('express');
const app = express();
const PORT_NUMBER = 3000;
const mongoose = require('mongoose');
const config = require('./config');
//Init connection to 
mongoose.connect(config.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(err) console.log("There was an error connecting to mongo: ", err)
});

let loginRoute = require('./routes/login');
let registerRoute = require('./routes/register');

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}!`));
app.use('/login', loginRoute());
app.use('/register', registerRoute());
