const {Country, Activity} = require("../db");


async function getActivities(req, res) {
  try {
    const activities = await Activity.findAll({ include: Country, through: {
      attribute: [],
    } });
    res.status(200).json(activities);
  } catch (err) {
    console.error("Error al obtener las actividades", err);
    res.status(404).json({ error: "Error al obtener las actividades" });
  }
}

async function createActivity(req, res) {
  const { Nombre, Dificultad, Duracion, Temporada, countries } = req.body;
  

  try {
    // Crea la actividad turística en la base de datos
    if(!Nombre || !Dificultad || !Duracion || !Temporada || !countries) throw Error("Faltan propiedades");

    const newActivity = await Activity.create({
      Nombre,
      Dificultad,
      Duracion,
      Temporada,
    });
    await newActivity.setCountries(countries);

    const createActiviti = await Activity.findOne({
      where: {id: newActivity.id},
      include: {
        model: Country,
        through: {
          attribute: [],
        },
      },
    });


    res.status(200).json(createActiviti);
  } catch (err) {
    console.error("Error al crear la actividad", err);
    res.status(500).json({ error: "Error al crear la actividad" });
  }
}

module.exports = {
  getActivities,
  createActivity,
};
