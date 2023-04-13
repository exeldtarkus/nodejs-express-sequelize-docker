const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const { mahasiswaModels, transfrom } = require('../models/mahasiswa_models');

const index = async (req, res) => {
  const params = {
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };

  const mahasiswa = transfrom(
    await mahasiswaModels.findAll({ where: { is_deleted: params.is_deleted } })
  );

  return res.json({ data: mahasiswa });
};

const findOne = async (req, res) => {
  const params = {
    uuid: req.params.id,
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };
  const mahasiswa = transfrom(await mahasiswaModels.findOne({ where: params }));

  return res.json({ data: mahasiswa });
};

const create = async (req, res) => {
  const { nim, name } = req.body;
  const data = {
    nim,
    name,
    uuid: uuidv4(),
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    is_deleted: 0,
  };

  await mahasiswaModels.create(data);
  return res.json({ message: 'data saved' });
};

const update = async (req, res) => {
  const { nim, name } = req.body;
  const { id } = req.params;

  const data = {
    nim,
    name,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  await mahasiswaModels.update(data, { where: { uuid: id } });
  return res.json({ message: 'data updated' });
};

const deleted = async (req, res) => {
  const { id } = req.params;

  await mahasiswaModels.update({ is_deleted: 1 }, { where: { uuid: id } });
  return res.json({ message: `success deleted [ ${id} ]` });
};

module.exports = { index, findOne, create, update, deleted };
