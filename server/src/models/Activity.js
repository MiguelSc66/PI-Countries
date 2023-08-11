const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type:DataTypes.UUID,
            primaryKey: true,
            allowNull : false,
            defaultValue: DataTypes.UUIDV4
        },
        Nombre: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5,
            },
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Temporada: {
            type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
            allowNull:false,
        },
    }, { timestamps: false });
}