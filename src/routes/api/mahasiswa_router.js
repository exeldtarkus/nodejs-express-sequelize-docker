const express = require('express');
const mahasiswaController = require('../../apps/controllers/mahasiswa_controller');

const mahasiswaRouter = express.Router();

mahasiswaRouter.get('/', mahasiswaController.index);
mahasiswaRouter.get('/:id', mahasiswaController.findOne);

mahasiswaRouter.post('/', mahasiswaController.create);

mahasiswaRouter.put('/:id', mahasiswaController.update);

mahasiswaRouter.delete('/:id', mahasiswaController.deleted);

module.exports = mahasiswaRouter;
