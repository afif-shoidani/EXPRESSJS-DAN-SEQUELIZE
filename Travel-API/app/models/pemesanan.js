module.exports = (sequelize, Sequelize) => {
  const Pemesanan = sequelize.define("pemesanan", {
    pemesanan_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tanggal_pemesanan: {
      type: Sequelize.DATE,
    },
    lama_pemesanan: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status_bayar: {
      type: Sequelize.ENUM,
      values: ["Lunas", "Belum"],
    },
    pelanggan_Id: {
      type: Sequelize.INTEGER,
      Reference: {
        model: "pelanggan",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    },
  });
  const Pemesanan_mobil = sequelize.define("pemesanan_mobil", {
    pemesanan_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mobil_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return {
    Pemesanan: Pemesanan,
    Pemesanan_mobil: Pemesanan_mobil,
  };
};
