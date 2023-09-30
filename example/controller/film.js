const fs = require("fs");
const readFile = require("../utils/readFile");

const getAllFilm = (req, res) => {
  const result = readFile("data.json");
  return res.status(200).json({ message: "success", data: result });
};

const getFilmLimit = (req, res) => {
  const result = readFile("data.json");
  const listFilm = result.filter((film) => !film.isFree);
  return res.status(200).json({ message: "success", data: listFilm });
};
module.exports = {
  getAllFilm,
  getFilmLimit,
};
