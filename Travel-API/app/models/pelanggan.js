module.exports = (sequelize, Sequelize) => {
  const Pelanggan = sequelize.define("pelanggan", {
    pelanggan_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_telp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Pelanggan;
};
