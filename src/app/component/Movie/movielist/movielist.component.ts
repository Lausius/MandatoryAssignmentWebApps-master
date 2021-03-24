import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import Movie from 'src/app/models/movie';
import { FetchMoviesService } from 'src/app/Services/fetch-movies.service';
import { ActivatedRoute } from '@angular/router';
import { map, mapTo, mergeMap, merge } from 'rxjs/operators';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  public movies$: Movie[];

  constructor(private fetchMovieService: FetchMoviesService,
    private route: ActivatedRoute) { }

  // getMovies(): void {
  //   this.fetchMovieService.getBufferedMovies().subscribe(m => this.movies$ = m);
  // }

  searchMovies(): void {
    this.route.paramMap.subscribe((params) => {
      this.fetchMovieService.getMoviesFromQuery(params.get('term')).subscribe(movies => this.movies$ = movies)
    });
  }
  // var newlist = [...oldlist, nexttwenty]
  nextPage(): void {
    console.log("Nextpage Clicked!")
    this.fetchMovieService.currentPage++;
    this.route.paramMap.subscribe((params) => {
      // TODO: Reset current page on new request
      this.fetchMovieService.getMoviesFromQuery(params.get('term')).subscribe(data => this.movies$ = [...this.movies$, ...data])
    })
  }
  ngOnInit(): void {
    this.fetchMovieService.currentPage = 1;
    this.searchMovies();

  }
}
  //TODO kunne søge efter Insturktør osv. :D INSTURKTØR
