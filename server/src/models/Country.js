const { DataTypes } = require('sequelize');
const generateRandomCode = require('../utils/RandomCode')

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      defaultValue: generateRandomCode(),
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregion: {
      type: DataTypes.STRING,
    },
    Area: {
      type: DataTypes.FLOAT,
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

