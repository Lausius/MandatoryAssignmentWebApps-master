import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from 'src/app/Services/fetch-movies.service';
import Movie from 'src/app/models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private fetchMovies: FetchMoviesService) {}
  ngOnInit(): void {
    // this.fetchMovies.getMovies();
  }
}
