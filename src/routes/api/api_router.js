const express = require('express');
const mahasiswaRouter = require('./mahasiswa_router');
const mataKuliahRouter = require('./mata_kuliah_router');
const rencanaStudiRouter = require('./rencana_studi_router');

const apiRouter = express.Router();

apiRouter.use('/mahasiswa', mahasiswaRouter);
apiRouter.use('/mata-kuliah', mataKuliahRouter);
apiRouter.use('/rencana-studi', rencanaStudiRouter);

module.exports = apiRouter;
