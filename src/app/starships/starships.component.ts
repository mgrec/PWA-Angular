import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships;

  constructor() { }

  ngOnInit() {

    fetch('https://swapi.co/api/starships')
        .then((response) => response.json())
        .then((json) => {
          this.starships = json.results;
        });

  }

}
