const express = require('express');
const mataKuliahController = require('../../apps/controllers/mata_kuliah_controller');

const mataKuliahRouter = express.Router();

mataKuliahRouter.get('/', mataKuliahController.index);
mataKuliahRouter.get('/:id', mataKuliahController.findOne);

mataKuliahRouter.post('/', mataKuliahController.create);

mataKuliahRouter.put('/:id', mataKuliahController.update);

mataKuliahRouter.delete('/:id', mataKuliahController.deleted);

module.exports = mataKuliahRouter;
