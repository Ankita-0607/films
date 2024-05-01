import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes'; // Import your routes
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    AddFilmComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Add your routes to the RouterModule
    FormsModule,
    HttpClientModule,
    FormsModule, MatTableModule, MatFormFieldModule, HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
