const Sequelize = require("sequelize");
const sequelize = new Sequelize("travel_api_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.mobil = require("./mobil.js")(sequelize, Sequelize);
db.pelanggan = require("./pelanggan.js")(sequelize, Sequelize);
db.pemesanan = require("./pemesanan.js")(sequelize, Sequelize);

db.pemesanan.hasOne(models.pelanggan);
db.pemesanan.belongToMany(models.mobil, {
  through: "pemesanan_mobil", // Nama tabel perantara
  foreignKey: "pemesanan_id",
});
db.pelanggan.belongsTo(models.pemesanan);
db.mobil.belongsTo(models.pemesanan, {
  through: "pemesanan_mobil", // Nama tabel perantara
  foreignKey: "mobil_id",
});

module.exports = db;
