const express = require("express")
const router = express.Router();
const {getActivities, createActivity} = require("../controllers/Activities")

router.get("/activities", getActivities);
router.post("/activities", createActivity)




module.exports = router;