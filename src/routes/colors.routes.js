const { Router } = require("express");
const {
  getColors,
  createColor,
  deleteColor,
} = require("../controllers/colors.controller");
const { validateColor, validateDeleteColor } = require("../middlewares/color");
const router = Router();

router.get("/", getColors);
router.post("/crearColor", validateColor, createColor);
router.delete("/borrarColor/:id", validateDeleteColor, deleteColor);

module.exports = router;
