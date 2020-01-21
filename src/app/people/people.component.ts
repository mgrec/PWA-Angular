import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples;

  constructor() { }

  ngOnInit() {

    fetch('https://swapi.co/api/people')
        .then((response) => response.json())
        .then((json) => {
          this.peoples = json.results;
        });

  }

}