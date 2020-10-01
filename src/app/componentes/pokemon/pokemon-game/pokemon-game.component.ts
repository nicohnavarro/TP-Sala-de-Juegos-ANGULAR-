import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-game',
  templateUrl: './pokemon-game.component.html',
  styleUrls: ['./pokemon-game.component.css']
})
export class PokemonGameComponent implements OnInit,OnDestroy {
  pokemonElegido;
  rivalElegido;
  pokemon1: boolean;
  pokemon2: boolean;
  constructor(private router: Router) { 
    this.pokemon1=false;
    this.pokemon2=false;
  }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit(): void {
  }
  

  tomarTuPokemon(pokemon) {
    this.pokemonElegido = pokemon;
  }

  tomarTuRival(pokemon) {
    this.rivalElegido = pokemon;
  }

  terminarJuego(ganador) {
    this.pokemonElegido = null;
    this.rivalElegido = null;
    this.pokemon1 = null;
    this.pokemon2 = null;
    console.log("otra vez ")
    console.info(this.pokemon1, this.pokemon2)
  }

}
