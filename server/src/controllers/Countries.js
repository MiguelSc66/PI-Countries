const {Country, Activity} = require("../db");
const { Op} = require("sequelize")

async function getCountries(req, res) {
    try {
        const countries = await Country.findAll({ include: Activity, through: {
            attribute: [],
          } });
        res.status(200).json(countries);
    } catch (err) {
        console.error("Error al obtener los paises", err)
        res.status(404).json({error: "Error al obtener los paises"})
    }
}

async function nameCountry(req, res) {
    const {pais} = req.query;
    try {
        const minMayus = {
            [Op.or]: [
                {
                    nombre: {
                        [Op.like]: `${pais}%`,
                    },
                },
                {
                    nombre: {
                        [Op.iLike]: `${pais}%`
                    },
                },
            ],
        }
        const countryName = await Country.findAll({
            where: minMayus,
            include: Activity
          });
          res.send(countryName);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function idCountry(req, res)  {
    const { idPais } = req.params;
    try {
      const countryID = await Country.findOne({
        where: {
          id: idPais,
        },
        include: Activity,
      });
      res.send(countryID);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getCountries,
    nameCountry,
    idCountry
}