"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.User, { foreignKey: "userId" });
      Content.hasMany(models.Comment, { foreignKey: "contentId" });
    }
  }
  Content.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      publishDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
