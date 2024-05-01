const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/filmController');
const FilmService = require('../services/filmService');
const FilmModel = require('../models/filmModel'); // Assuming you have a Film model

const filmService = new FilmService(FilmModel);
const filmController = new FilmController(filmService);
// Define routes
router.get('/', filmController.getAllFilms.bind(filmController));
router.post('/', filmController.createFilm.bind(filmController));
router.get('/:id', filmController.getFilmById.bind(filmController));
router.put('/:id', filmController.updateFilm.bind(filmController));

module.exports = router