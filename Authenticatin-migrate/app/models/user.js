"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Role, { through: "user_roles", foreignKey: "userId" });
      User.hasOne(models.Status);
    }
  }
  User.init(
    {
      // id: Sequelize.STRING,
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};