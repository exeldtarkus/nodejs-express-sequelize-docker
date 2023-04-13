const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbl_mata_kuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_mata_kuliah.init(
    {
      uuid: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING },
      created_at: { type: DataTypes.STRING },
      updated_at: { type: DataTypes.STRING },
      is_deleted: { type: DataTypes.BIGINT },
    },
    {
      sequelize,
      modelName: 'tbl_mata_kuliah',
    }
  );
  return tbl_mata_kuliah;
};
