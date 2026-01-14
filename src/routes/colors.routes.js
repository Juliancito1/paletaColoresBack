const { Router } = require("express");
const {
  getColors,
  createColor,
  deleteColor,
  editarColor,
} = require("../controllers/colors.controller");
const { validateColor, validateDeleteColor } = require("../middlewares/color");
const router = Router();

router.get("/", getColors);
router.post("/crearColor", validateColor, createColor);
router.delete("/borrarColor/:id", validateDeleteColor, deleteColor);
router.patch("/editarColor/:id", validateColor, editarColor)

module.exports = router;
