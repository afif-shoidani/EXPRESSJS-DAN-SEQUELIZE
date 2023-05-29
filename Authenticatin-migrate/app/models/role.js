"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.belongsToMany(models.User, {
        through: "user_roles",
        foreignKey: "roleId",
      });
    }
  }
  Role.init(
    {
      // id: Sequelize.INTEGER,
      // name: Sequelize.STRING,
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
