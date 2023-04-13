const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_mahasiswa.init(
    {
      uuid: DataTypes.STRING,
      nim: { type: DataTypes.INTEGER },
      name: DataTypes.STRING,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING,
      is_deleted: { type: DataTypes.BIGINT },
    },
    {
      sequelize,
      modelName: 'tbl_mahasiswa',
    }
  );
  return tbl_mahasiswa;
};
