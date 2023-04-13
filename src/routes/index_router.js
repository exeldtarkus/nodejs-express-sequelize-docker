const express = require('express');
const apiRouter = require('./api/api_router');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.json({ title: 'RSM - Services' });
});

indexRouter.use('/api', apiRouter);

module.exports = indexRouter;
