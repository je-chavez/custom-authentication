const express = require('express');
const app = express();
const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}!`))
