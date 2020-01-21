import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets;
  planetSave;

  constructor() { }

  ngOnInit() {

    fetch('https://swapi.co/api/planets')
        .then((response) => response.json())
        .then((json) => {
          this.planets = json.results;
        });

  }

    saveToFav(url) {

        this.planetSave = JSON.parse(localStorage.getItem('planet_fav'));
        console.log(this.planetSave);

        if (this.planetSave == null) {
            this.planetSave = [];
        }

        this.planetSave.push(url);
        let planet_fav_save_str = JSON.stringify(this.planetSave);

        localStorage.setItem('planet_fav', planet_fav_save_str);
    }

}
