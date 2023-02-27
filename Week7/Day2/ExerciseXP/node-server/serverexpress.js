const express = require('express');
const app = express();

const r = "<h1>Express server is running</h1>";

app.get('/', (req, res) => res.send(r));

app.listen(3000);