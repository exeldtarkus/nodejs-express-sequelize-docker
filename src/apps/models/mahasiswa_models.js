/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');
const {
  mahasiswaDbConnection,
} = require('../config/sequelize/sequelize_config');

const table = 'tbl_mahasiswa';

const options = {
  freezeTableName: 1,
  createdAt: false,
  updatedAt: false,
  underscored: true,
};

const column = {
  id: { type: DataTypes.BIGINT, primaryKey: true },
  uuid: { type: DataTypes.STRING },
  nim: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  created_at: { type: DataTypes.STRING },
  updated_at: { type: DataTypes.STRING },
  is_deleted: { type: DataTypes.BOOLEAN },
};

const mahasiswaModels = mahasiswaDbConnection.define(table, column, options);

const transfrom = (result) => JSON.parse(JSON.stringify(result));

module.exports = { mahasiswaModels, transfrom };
