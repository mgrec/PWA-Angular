import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships;
  starshipsSave;

  constructor() { }

  ngOnInit() {

    fetch('https://swapi.co/api/starships')
        .then((response) => response.json())
        .then((json) => {
          this.starships = json.results;
        });

  }

    saveToFav(url) {

        this.starshipsSave = JSON.parse(localStorage.getItem('starships_fav'));
        console.log(this.starshipsSave);

        if (this.starshipsSave == null) {
            this.starshipsSave = [];
        }

        this.starshipsSave.push(url);
        let starships_fav_save_str = JSON.stringify(this.starshipsSave);

        localStorage.setItem('starships_fav', starships_fav_save_str);
    }

}
