import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css',
})
export class AddFilmComponent {
  error: string = ''; // Variable to store error message
  constructor(private filmService: FilmService, private router: Router) { }
  film: Film = { id: '', title: '', director: '', releaseDate: new Date() };

  onSubmit(): void {
    this.error = ''; // Clear previous error message
    this.filmService.addFilm(this.film).subscribe(
      () => {
        this.router.navigate(['/films']);
        this.film = { title: '', director: '', releaseDate: new Date() };
      },
      (error) => {
        // Handle error response from backend
        if (error.error && error.error.message) {
          this.error = error.error.message; // Display error message on UI
        } else {
          this.error = 'An error occurred while processing your request.'; // Default error message
        }
      }
    );
  }
}
