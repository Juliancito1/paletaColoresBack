const { Router } = require("express");
const { getColors, createColor } = require("../controllers/colors.controller");
const { validateColor } = require("../middlewares/color");
const router = Router();


router.get("/", getColors)
router.post("/crearColor", validateColor, createColor)

module.exports = router