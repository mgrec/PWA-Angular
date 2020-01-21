import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets;

  constructor() { }

  ngOnInit() {

    fetch('https://swapi.co/api/planets')
        .then((response) => response.json())
        .then((json) => {
          this.planets = json.results;
        });

  }

}
