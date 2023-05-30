const fs = require("fs");
const path = require("path");
const process = require("process");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("travel_api_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/configDatabase.json")[env];

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.mobil = require("./mobil.js")(sequelize, Sequelize);
db.pelanggan = require("./pelanggan.js")(sequelize, Sequelize);
db.pemesanan = require("./pemesanan.js")(sequelize, Sequelize);

let pemesanan = require("./pemesanan.js")(sequelize, Sequelize);
db.pemesanan = pemesanan.Pemesanan;
db.pemesanan_mobil = pemesanan.pemesanan_Mobil;

db.pemesanan.hasOne(db.pelanggan);
db.pelanggan.belongsTo(db.pemesanan);

db.pemesanan.belongsToMany(db.mobil, {
  through: "pemesanan_mobil", // Nama tabel perantara
  foreignKey: "pemesanan_id",
});
db.mobil.belongsToMany(db.pemesanan, {
  through: "pemesanan_mobil", // Nama tabel perantara
  foreignKey: "mobil_id",
});

module.exports = db;
