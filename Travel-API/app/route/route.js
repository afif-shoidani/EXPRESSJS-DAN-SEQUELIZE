const mobil = require("../controllers/mobil.controller");
const pelanggan = require("../controllers/pelanggan.controller");
const pemesanan = require("../controllers/pemesanan.controller");

module.exports = function (app) {
  //mobil route
  app.post("/mobil", (req, res) => {
    mobil.create(req, res);
  });
  app.get("/mobil", (req, res) => {
    mobil.findAll(req, res);
  });
  app.get("/mobil/:id", (req, res) => {
    mobil.findOne(req, res);
  });
  app.delete("/mobil/:id", (req, res) => {
    mobil.delete(req, res);
  });
  app.put("/mobil/:id", (req, res) => {
    mobil.update(req, res);
  });
  //pelanggan route
  app.post("/pelanggan", (req, res) => {
    pelanggan.create(req, res);
  });
  app.get("/pelanggan", (req, res) => {
    pelanggan.findAll(req, res);
  });
  app.get("/pelanggan/:id", (req, res) => {
    pelanggan.findOne(req, res);
  });
  app.delete("/pelanggan/:id", (req, res) => {
    pelanggan.delete(req, res);
  });
  app.put("/pelanggan/:id", (req, res) => {
    pelanggan.update(req, res);
  });
  // pemesanan route
  app.post("/pemesanan", (req, res) => {
    pemesanan.create(req, res);
  });
  app.get("/pemesanan", (req, res) => {
    pemesanan.findAll(req, res);
  });
  app.get("/pemesanan/:id", (req, res) => {
    pemesanan.findOne(req, res);
  });
};
