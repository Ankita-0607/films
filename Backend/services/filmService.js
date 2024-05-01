// services/filmService.js

class FilmService {
    constructor(filmModel) {
        this.filmModel = filmModel;
    }

    async getAllFilms() {
        return await this.filmModel.find();
    }

    async getFilmById(id) {
        return await this.filmModel.findById(id);
    }

    async createFilm(filmData) {
        return await this.filmModel.create(filmData);
    }

    async updateFilm(id, filmData) {
        return await this.filmModel.findByIdAndUpdate(id, filmData, { new: true });
    }

    async deleteFilm(id) {
        return await this.filmModel.findByIdAndDelete(id);
    }
}

module.exports = FilmService;
