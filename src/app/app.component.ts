import { Component, OnInit } from '@angular/core';
import { PokeService } from './services/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poke-api';
  pokemonList: any;
  searchText: string = '';

  constructor(private pokeService: PokeService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokeService.getPokeList()
      .subscribe((data: any) => {
        this.pokemonList = data.results;
        console.log(this.pokemonList);
      });
  }

  getPokeDetails(infoStatus: any) {
    console.log(infoStatus);
  }
}
