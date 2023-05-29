const db = require("../models/index");
const Pemesanan = db.pemesanan;
const Op = db.Sequelize.Op;
//Create mobil method
exports.create = (req, res) => {
  if (!req.body.tanggal_pemesanan) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.lama_pemesanan) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.status_bayar) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.pelanggan_Id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //create pemesanan object
  const pemesanan = {
    tanggal_pemesanan: req.body.tanggal_pemesanan,
    lama_pemesanan: req.body.lama_pemesanan,
    status_bayar: req.body.status_bayar,
    pelanggan_Id: req.body.pelanggan_Id,
  };
  // Save Pemesanan to database
  Pemesanan.create(pemesanan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error occurred while inserting Pemesanan.",
      });
    });
};
exports.findAll = (req, res) => {
  Pemesanan.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving Pemesanans",
      });
    });
};
exports.findOne = (req, res) => {
  Pemesanan.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while finding Pemesanan",
      });
    });
};
