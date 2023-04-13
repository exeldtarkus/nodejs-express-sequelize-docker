const { rencanaKuliahModel } = require('../models/rencana_studi_models');

// ·       1 Mahasiswa bisa mengambil maksimal 3 Mata Kuliah.
// ·       1 Mata Kuliah bisa memiliki maksimal 4 Mahasiswa.

const checkKoutaMahasiswa = async ({ mahasiswaId }) => {
  const params = {
    mahasiswa_id: mahasiswaId,
  };
  const checkKouta = await rencanaKuliahModel.count({ where: params });
  if (checkKouta >= 3) {
    return false;
  }
  return true;
};

const checkKoutaMataKuliah = async ({ mataKuliahId }) => {
  const params = {
    mata_kuliah_id: mataKuliahId,
  };
  const checkKouta = await rencanaKuliahModel.count({ where: params });
  if (checkKouta >= 4) {
    return false;
  }
  return true;
};

module.exports = { checkKoutaMahasiswa, checkKoutaMataKuliah };
