const Color = require("../models/Color");

const getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    if (colors.length === 0) {
     return res.status(404).json({ message: "No se encontraron colores" });
    }

    return res.status(200).json({
      ok: true,
      message: "Colores encontrados",
      colors,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

const createColor = async (req, res) => {
  try {
    const color = new Color(req.body);

    if (!color) {
      return res.status(400).json({
        ok: false,
        message: "No se pudo crear el color",
      });
    }

    await color.save();

    return res.status(201).json({
      ok: true,
      message: "Color creado",
      color,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

module.exports = {
  getColors,
  createColor,
}
