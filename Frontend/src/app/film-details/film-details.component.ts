import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film = { id: '', title: '', director: '', releaseDate: new Date() };
  formattedReleaseDate: any; // Variable to hold formatted release date
  constructor(private route: ActivatedRoute, private router: Router, private filmService: FilmService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.params['id'];
    this.getFilmDetails(filmId);
  }

  getFilmDetails(id: string): void {
    this.filmService.getFilmById(id).subscribe((film: Film) => {
      this.film = film;
      this.formattedReleaseDate = this.datePipe.transform(this.film.releaseDate, 'yyyy-MM-dd');

    });
  }

  onSubmit(): void {
    this.filmService.updateFilm(this.route.snapshot.params['id'], this.film).subscribe(() => {
      // Navigate back to the list page after updating the film
      this.router.navigate(['/films']);
    });
  }
  formatReleaseDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);

  }
}
