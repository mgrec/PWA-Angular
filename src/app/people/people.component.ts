import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples;
  peopleSave;

  constructor() { }

  ngOnInit() {
    fetch('https://swapi.co/api/people')
        .then((response) => response.json())
        .then((json) => {
          this.peoples = json.results;
        });

  }

    saveToFav(url) {

        this.peopleSave = JSON.parse(localStorage.getItem('people_fav'));
        console.log(this.peopleSave);

        if (this.peopleSave == null) {
            this.peopleSave = [];
        }

        this.peopleSave.push(url);
        let peopleSave_str = JSON.stringify(this.peopleSave);

        localStorage.setItem('people_fav', peopleSave_str);
    }

}