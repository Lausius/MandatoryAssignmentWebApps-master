import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';
import { catchError, filter, find, map, tap } from 'rxjs/operators';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  constructor(private http: HttpClient) { }
  public currentPage: number = 1;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: new HttpParams()
      .set('api_key', 'f096b92105251111f68717954f508196')
      .set('language', 'en-US')
  };
  public Movies: Observable<Movie[]>;

  //returns observable
  getMoviesFromQuery(query: string): Observable<Movie[]> {
    if (query === null || query === "") { return this.getMovies(); }
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${this.currentPage}`, this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.results.map((item: Movie) => {
            return item;
          });
        })
      );
  }

  getMovies(): Observable<Movie[]> {
    return this.http
      .get(this.httpOptions.baseUrl + 'popular' + `?page=${this.currentPage}`, this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.results.map((item: Movie) => {
            return item;
          });
        })
      );
  }

  getMovie(id: number): Observable<Movie> {
    // let movie = this.getBufferedMovies().pipe(map(movies => movies.find((m: Movie) => m.id === id))) 
    return this.http
      .get<Movie>(this.httpOptions.baseUrl + `${id}`, this.httpOptions)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  getBufferedMovies(): Observable<Movie[]> {
    if (!this.Movies) { this.Movies = this.getMovies(); }
    return this.Movies;
  }
}
