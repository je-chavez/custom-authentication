const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

let loginRoute = require('./routes/login');

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}!`));
app.use('/login', loginRoute());
