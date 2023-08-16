const express = require("express")
const router = express.Router();
const {getActivities, createActivity, deleteActivity} = require("../controllers/Activities")

router.get("/activities", getActivities);
router.post("/activities", createActivity)
router.delete("/activities/:id", deleteActivity)




module.exports = router;