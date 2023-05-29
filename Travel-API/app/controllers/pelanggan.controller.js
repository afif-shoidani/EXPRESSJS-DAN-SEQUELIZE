const db = require("../models/index");
const Pelanggan = db.pelanggan;
const Op = db.Sequelize.Op;
//Create mobil method
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.alamat) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.no_telp) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //create mobil object
  const pelanggan = {
    name: req.body.name,
    alamat: req.body.alamat,
    no_telp: req.body.no_telp,
  };
  // Save Pelanggan to database
  Pelanggan.create(pelanggan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error occurred while inserting Pelanggan.",
      });
    });
};
exports.findAll = (req, res) => {
  Pelanggan.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving Pelanggans",
      });
    });
};
exports.findOne = (req, res) => {
  Pelanggan.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while finding Pelanggan",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pelanggan.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pelanggan was deleted successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Mobil with id=${id}. Pelanggan not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Pelanggan with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.alamat) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.no_telp) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Pelanggan.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      data.name = req.body.name;
      data.alamat = req.body.alamat;
      data.no_telp = req.body.no_telp;
      data.save();

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Pelanggan with id=" + id,
      });
    });
};
