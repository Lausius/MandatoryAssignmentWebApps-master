import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FetchMoviesService } from 'src/app/Services/fetch-movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private fetchMovie: FetchMoviesService, private route: Router) {}
  public searchTerm: string = "";
  
  // @Output() queryEvent = new EventEmitter();
  ngOnInit(): void {}


  search():any {
    this.route.navigate(["/movies", this.searchTerm])
    this.fetchMovie.getMoviesFromQuery(this.searchTerm)
  }
}
