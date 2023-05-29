const db = require("../models/index");
const Mobil = db.mobil;
const Op = db.Sequelize.Op;
//Create mobil method
exports.create = (req, res) => {
  if (!req.body.merk) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //create mobil object
  const mobil = {
    merk: req.body.merk,
    model: req.body.model,
    tahun: req.body.tahun,
    harga_sewa: req.body.harga_sewa,
  };
  // Save mobil to database
  Mobil.create(mobil)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error occurred while inserting Mobil.",
      });
    });
};
exports.findAll = (req, res) => {
  Mobil.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving Mobils",
      });
    });
};
exports.findOne = (req, res) => {
  Mobil.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while finding Mobil",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Mobil.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Mobil was deleted successfully.",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Mobil with id=${id}. Mobil not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Mobil with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.author) {
    res.status(400).send({
      message: "author can not be empty! ",
    });
    return;
  }
  if (!req.body.release_date) {
    res.status(400).send({
      message: " release_date can not be empty!",
    });
    return;
  }
  if (!req.body.subject) {
    res.status(400).send({
      message: " subject can not be empty!",
    });
    return;
  }
  Mobil.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      data.merk = req.body.merk;
      data.model = req.body.model;
      data.tahun = req.body.tahun;
      data.harga_sewa = req.body.harga_sewa;
      data.save();

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Mobil with id=" + id,
      });
    });
};
