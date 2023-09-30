const { readFile } = require("../utils/readFile");

const getAllFilm = (req, res) => {
  const result = readFile("data.json");
  return res.status(200).json({ result });
};

const getFilmLimit = (req, res) => {
  const result = readFile("data.json");
  const filmLitmit = result.filter((film) => film.isFree == false);
  return res.status(200).json({ filmLitmit });
};

module.exports = {
  getAllFilm,
  getFilmLimit,
};
