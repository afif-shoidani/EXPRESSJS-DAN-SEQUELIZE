// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, Sequelize) => {
//   class Mobil extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Mobil.belongsToMany(models.Pemesanan, {
//         through: "pemesanan_mobil",
//         foreignKey: "mobilId",
//       });
//     }
//   }
//   Mobil.init(
//     {
//       mobil_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//       },
//       merk: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       model: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       tahun: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       harga_sewa: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Mobil",
//     }
//   );
//   return Mobil;
// };
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
