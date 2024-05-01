const Film = require('../models/filmModel');
class FilmController {
  constructor(filmService) {
    this.filmService = filmService;
  }
  async getAllFilms(req, res) {
    try {
      const films = await this.filmService.getAllFilms();
      res.json(films);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getFilmById(req, res) {
    try {
      const film = await this.filmService.getFilmById(req.params.id);
      if (!film) {
        return res.status(404).json({ error: 'Film not found' });
      }
      res.json(film);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async createFilm(req, res) {
    try {
      const filmData = req.body;
      const film = await this.filmService.createFilm(filmData);
      res.status(201).json(film);
    } catch (err) {
      if (err.name === 'StrictModeError') {
        // Handle validation error
        res.status(400).json({ message: err.message });
      } else if (err.name === 'ValidationError') {
        res.status(400).json({ message: err.message });
      } else {
        // Handle other errors
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }

  async updateFilm(req, res) {
    try {
      const id = req.params.id;
      const filmData = req.body;
      const updatedFilm = await this.filmService.updateFilm(id, filmData);
      if (!updatedFilm) {
        return res.status(404).json({ message: 'Film not found' });
      }
      res.json(updatedFilm);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
module.exports = FilmController;
