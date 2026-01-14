const Color = require("../models/Color");
const { body, param, validationResult } = require("express-validator");

const handleValidationsErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      message: "Errores de validación",
      errors: errors.mapped(),
    });
  }

  next();
};

const validateColor = [
  body("color")
    .notEmpty()
    .withMessage("El color es requerido")
    .isString()
    .withMessage("El color debe ser un string")
    .trim()
    .isLength({ min: 3 })
    .withMessage("El color debe tener al menos 3 caracteres")
    .custom(async (color) => {
      const colorExiste = await Color.findOne({ color });
      if (colorExiste) {
        throw new Error("El color ya existe");
      }
    }),

  handleValidationsErrors,
];

const validateDeleteColor = [
  param("id")
    .notEmpty()
    .withMessage("El id es requerido")
    .isMongoId()
    .withMessage("El id debe ser un id de mongo"),
  handleValidationsErrors,
];

module.exports = {
  validateColor,
  validateDeleteColor,
  handleValidationsErrors,
};
