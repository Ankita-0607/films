import { Routes } from '@angular/router';

import { FilmListComponent } from './film-list/film-list.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
export const routes: Routes = [{ path: '', redirectTo: '/films', pathMatch: 'full' },
{ path: 'films', component: FilmListComponent },
{ path: 'add-film', component: AddFilmComponent },
{ path: 'edit-film/:id', component: FilmDetailsComponent },
{ path: '**', redirectTo: '/films' },
];


