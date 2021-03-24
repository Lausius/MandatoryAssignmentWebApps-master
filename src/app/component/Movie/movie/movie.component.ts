import { Component, Input, OnInit } from '@angular/core';
import Movie from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  public movieUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.movieUrl = `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }
}
