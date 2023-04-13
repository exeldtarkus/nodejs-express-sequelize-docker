const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index_router');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text({type: '*/*'}));

app.use(indexRouter);

module.exports = app;
