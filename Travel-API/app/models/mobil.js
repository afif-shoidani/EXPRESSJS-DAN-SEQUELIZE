module.exports = (sequelize, Sequelize) => {
  const Mobil = sequelize.define("mobil", {
    mobil_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    merk: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tahun: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    harga_sewa: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Mobil;
};
