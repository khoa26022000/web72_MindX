const router = require("express").Router();
const { getAllFilm, getFilmLimit } = require("../controllers/films");
const authentication = require("../middleware/authentication");

router.get("/", authentication, getAllFilm);
router.get("/film-limit", getFilmLimit);

module.exports = router;
