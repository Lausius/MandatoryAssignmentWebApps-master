import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/Home/home/home.component';
import { MovieComponent } from './component/Movie/movie/movie.component';
import { MovielistComponent } from './component/Movie/movielist/movielist.component';
import { FetchMoviesService } from './Services/fetch-movies.service';
import { MoviedetailComponent } from './component/Movie/moviedetail/moviedetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    MovielistComponent,
    MoviedetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [FetchMoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
