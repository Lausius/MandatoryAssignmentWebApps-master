import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/Home/home/home.component';
import { MoviedetailComponent } from './component/Movie/moviedetail/moviedetail.component';
import { MovielistComponent } from './component/Movie/movielist/movielist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movie/:id', component: MoviedetailComponent },
  { path: 'movies/:term', component: MovielistComponent },
  { path: 'movies', component: MovielistComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
