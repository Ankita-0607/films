import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFilmComponent } from './add-film.component';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
class MockFilmService {
  addFilm(film: any) {
    // Mock implementation of addFilm method
    return of(null); // Return a dummy observable
  }
}
describe('AddFilmComponent', () => {
  let component: AddFilmComponent;
  let fixture: ComponentFixture<AddFilmComponent>;
  let filmService: FilmService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFilmComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: FilmService, useClass: MockFilmService },
        Router,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFilmComponent);
    component = fixture.componentInstance;
    filmService = TestBed.inject(FilmService);
    router = TestBed.inject(Router);
  });
  it('should call addFilm service method and navigate to /films on successful submission', () => {
    // Arrange
    const navigateSpy = spyOn(router, 'navigate');
    const addFilmSpy = spyOn(filmService, 'addFilm').and.returnValue(of());

    // Act
    component.onSubmit();

    // Assert
    expect(addFilmSpy).toHaveBeenCalledWith(component.film);
    expect(navigateSpy).toHaveBeenCalledWith(['/films']);
  });

  it('should handle error response from addFilm service method', () => {
    // Arrange
    spyOn(filmService, 'addFilm').and.returnValue(throwError({ error: { message: 'Error message' } }));

    // Act
    component.onSubmit();

    // Assert
    expect(component.error).toBe('Error message');
  });
});

