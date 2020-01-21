import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipsComponent } from './starships/starships.component';


const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: '', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
