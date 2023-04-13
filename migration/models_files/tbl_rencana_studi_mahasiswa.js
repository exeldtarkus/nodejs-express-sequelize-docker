const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_rencana_studi_mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_rencana_studi_mahasiswa.init(
    {
      uuid: { type: DataTypes.STRING },
      mahasiswa_id: { type: DataTypes.STRING },
      mata_kuliah_id: { type: DataTypes.STRING },
      created_at: { type: DataTypes.STRING },
      updated_at: { type: DataTypes.STRING },
      is_deleted: { type: DataTypes.BIGINT },
    },
    {
      sequelize,
      modelName: 'tbl_rencana_studi_mahasiswa',
    }
  );
  return tbl_rencana_studi_mahasiswa;
};
