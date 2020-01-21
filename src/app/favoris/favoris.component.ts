import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  peopleSave;
  planetSave;
  starshipsSave;

  peopleSaveInfos;
  planetSaveInfos;
  starshipsSaveInfos;

  constructor() { }

  ngOnInit() {

    this.peopleSaveInfos = [];
    this.planetSaveInfos = [];
    this.starshipsSaveInfos = [];

    this.getFavPeople();
    this.getFavPlanet();
    this.getFavStarship();

  }

  getFavPeople() {
    this.peopleSave = this.removeDuplicates(JSON.parse(localStorage.getItem('people_fav')));

    // get fav people
    let currentPeople = [];
    this.peopleSave.forEach(function (i) {
      let temp = [];
      fetch(i)
          .then((response) => response.json())
          .then((json) => {
            temp['name'] = json.name;
            temp['gender'] = json.gender;
          });
      currentPeople.push(temp);
    });
    this.peopleSaveInfos.push(currentPeople);
    this.peopleSaveInfos = this.peopleSaveInfos[0];
  }

  getFavPlanet() {
    this.planetSave = this.removeDuplicates(JSON.parse(localStorage.getItem('planet_fav'))) ;

    // get fav planet
    let currentPlanet = [];
    this.planetSave.forEach(function (i) {
      let temp = [];
      fetch(i)
          .then((response) => response.json())
          .then((json) => {
            temp['name'] = json.name;
            temp['population'] = json.population;
          });
      currentPlanet.push(temp);
    });
    this.planetSaveInfos.push(currentPlanet);
    this.planetSaveInfos = this.planetSaveInfos[0];

  }

  getFavStarship() {
    this.starshipsSave = this.removeDuplicates(JSON.parse(localStorage.getItem('starships_fav'))) ;

    // get fav starships
    let currentStarships = [];
    this.starshipsSave.forEach(function (i) {
      let temp = [];
      fetch(i)
          .then((response) => response.json())
          .then((json) => {
            temp['name'] = json.name;
            temp['manufacturer'] = json.manufacturer;
          });
      currentStarships.push(temp);
    });
    this.starshipsSaveInfos.push(currentStarships);
    this.starshipsSaveInfos = this.starshipsSaveInfos[0];
  }

  removeDuplicates(arrayT) {
  let unique = {};
    arrayT.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

}
