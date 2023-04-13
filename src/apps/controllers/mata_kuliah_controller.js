const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const { mataKuliahModel, transfrom } = require('../models/mata_kuliah_models');

const index = async (req, res) => {
  const params = {
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };

  const mataKuliah = transfrom(
    await mataKuliahModel.findAll({ where: params })
  );

  return res.json({ data: mataKuliah });
};

const findOne = async (req, res) => {
  const params = {
    uuid: req.params.id,
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };

  const mataKuliah = transfrom(
    await mataKuliahModel.findOne({ where: params })
  );

  return res.json({ data: mataKuliah });
};

const create = async (req, res) => {
  const { name } = req.body;
  const data = {
    name,
    uuid: uuidv4(),
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  await mataKuliahModel.create(data);
  return res.json({ message: 'data saved' });
};

const update = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const data = {
    name,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  await mataKuliahModel.update(data, { where: { uuid: id } });
  return res.json({ message: 'data updated' });
};

const deleted = async (req, res) => {
  const { id } = req.params;

  await mataKuliahModel.update({ is_deleted: 1 }, { where: { uuid: id } });
  return res.json({ message: `success deleted [ ${id} ]` });
};

module.exports = { index, findOne, create, update, deleted };
