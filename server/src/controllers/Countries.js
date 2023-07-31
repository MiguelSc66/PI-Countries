const {Country, Activity} = require("../db");
const { Op} = require("sequelize")

async function getCountries(req, res) {
    try {
        const countries = await Country.findAll({ include: Activity });
        res.status(200).json(countries);
    } catch (err) {
        console.error("Error al obtener los paises", err)
        res.status(404).json({error: "Error al obtener los paises"})
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

async function nameCountry(req, res) {
    const {pais} = req.params;
    try {
        const minMayus = {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: `%${pais}%`,
                    },
                },
                {
                    name: {
                        [Op.ilike]: `%${pais}%`
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

module.exports = {
    getCountries,
    idCountry,
    nameCountry
}