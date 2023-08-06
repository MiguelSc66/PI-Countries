const express = require("express")
const router = express.Router();
const {getCountries, idCountry, nameCountry} = require("../controllers/Countries")

router.get("/countries", getCountries);
router.get("/countries/name", nameCountry)
router.get("/countries/:idPais", idCountry)



module.exports = router;