const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const {
  rencanaKuliahModel,
  transfrom,
} = require('../models/rencana_studi_models');
const {
  checkKoutaMahasiswa,
  checkKoutaMataKuliah,
} = require('../helper/rs_check_kouta_helper');

const index = async (req, res) => {
  const params = {
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };

  const mahasiswa = transfrom(
    await rencanaKuliahModel.findAll({ where: params })
  );

  return res.json({ data: mahasiswa });
};

const findOne = async (req, res) => {
  const params = {
    uuid: req.params.id,
    is_deleted: req.query.is_deleted ? req.query.is_deleted : 0,
  };
  const mahasiswa = transfrom(
    await rencanaKuliahModel.findOne({ where: params })
  );

  return res.json({ data: mahasiswa });
};

const create = async (req, res) => {
  const { mahasiswa_id, mata_kuliah_id } = req.body;
  const data = {
    mahasiswa_id,
    mata_kuliah_id,
    uuid: uuidv4(),
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    is_deleted: 0,
  };

  const checkKoutaMhs = await checkKoutaMahasiswa({
    mahasiswaId: mahasiswa_id,
  });

  const checkKoutaMatkul = await checkKoutaMataKuliah({
    mataKuliahId: mata_kuliah_id,
  });

  if (checkKoutaMhs && checkKoutaMatkul) {
    await rencanaKuliahModel.create(data);
    return res.json({ message: 'data rencana studi save' });
  }

  return res.json({ message: 'data rencana studi not save' });
};

const update = async (req, res) => {
  const { mahasiswa_id, mata_kuliah_id } = req.body;
  const { id } = req.params;

  const data = {
    mahasiswa_id,
    mata_kuliah_id,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  await rencanaKuliahModel.update(data, { where: { uuid: id } });
  return res.json({ message: 'data updated' });
};

const deleted = async (req, res) => {
  const { id } = req.params;

  await rencanaKuliahModel.update({ is_deleted: 1 }, { where: { uuid: id } });
  return res.json({ message: `success deleted [ ${id} ]` });
};

module.exports = { index, findOne, create, update, deleted };
