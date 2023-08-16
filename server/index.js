const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;
require("dotenv").config();

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  const allCountries = Country.findAll();
  if(!allCountries.length) {
    const response = await axios('http://localhost:5000/countries');
    let countryBD = response.data.map((country) => {
      return {
        id:country.cca3,
        nombre: country.name.common,
        bandera: country.flags.png,
        continente: country.region,
        capital:country.capital ? country.capital[0] : "Not found",
        subregion: country.subregion,
        poblacion: country.population
      }
    })
    await Country.bulkCreate(countryBD)
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
