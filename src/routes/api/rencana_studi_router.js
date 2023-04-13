const express = require('express');
const rencanaKuliahController = require('../../apps/controllers/rencana_studi_controller');

const rencanaStudiRouter = express.Router();

rencanaStudiRouter.get('/', rencanaKuliahController.index);
rencanaStudiRouter.get('/:id', rencanaKuliahController.findOne);

rencanaStudiRouter.post('/', rencanaKuliahController.create);

rencanaStudiRouter.put('/:id', rencanaKuliahController.update);

rencanaStudiRouter.delete('/:id', rencanaKuliahController.deleted);

module.exports = rencanaStudiRouter;
