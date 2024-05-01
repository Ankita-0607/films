import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model'; // Assuming you have a Film model

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private baseUrl = 'http://localhost:3000/'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}${id}`);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl, film);
  }

  updateFilm(id: string, film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.baseUrl}${id}`, film);
  }

  deleteFilm(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
