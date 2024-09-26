const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newCategoryData) => {
        newCategoryData.category_name = newCategoryData.category_name.trim();
        return newCategoryData;
      },
      beforeUpdate: async (updatedCategoryData) => {
        updatedCategoryData.category_name = updatedCategoryData.category_name.trim();
        return updatedCategoryData;
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
