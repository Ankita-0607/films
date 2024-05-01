import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film.model';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent implements OnInit {
  constructor(private filmService: FilmService, private datePipe: DatePipe) { }
  films: MatTableDataSource<Film> = new MatTableDataSource<Film>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['title', 'director', 'releaseDate'];
  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getAllFilms().subscribe(films => {
      this.films = new MatTableDataSource<Film>(films);
      this.films.paginator = this.paginator;
    });
  }
  formatReleaseDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);

  }

}

