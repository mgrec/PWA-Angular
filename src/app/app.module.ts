import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatButtonModule,
  MatIconModule
} from '@angular/material';
import { PeopleComponent } from './people/people.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipsComponent } from './starships/starships.component';
import { FavorisComponent } from './favoris/favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlanetComponent,
    StarshipsComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
