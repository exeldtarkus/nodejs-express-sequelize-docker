const Sequelize = require('sequelize');
const { mahasiswaDB } = require('../database_config');

const mahasiswaDbConnection = new Sequelize(
  mahasiswaDB.DB,
  mahasiswaDB.USER,
  mahasiswaDB.PASSWORD,
  {
    host: mahasiswaDB.HOST,
    dialect: 'mysql',
    port: mahasiswaDB.port,
    operatorsAliases: 0,

    pool: {
      max: mahasiswaDB.pool.max,
      min: mahasiswaDB.pool.min,
      acquire: mahasiswaDB.pool.acquire,
      idle: mahasiswaDB.pool.idle,
    },
  }
);

module.exports = { mahasiswaDbConnection };
