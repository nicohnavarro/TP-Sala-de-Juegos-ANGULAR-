import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Poke } from '../../../clases/poke';
import { IPokemon } from '../../../clases/pokemon';
import { PokemonService } from '../../../servicios/pokemon.service';

@Component({
  selector: 'app-elegir-pokemon',
  templateUrl: './elegir-pokemon.component.html',
  styleUrls: ['./elegir-pokemon.component.css']
})
export class ElegirPokemonComponent implements OnInit {


  @Output() tuPokemon: EventEmitter<any> = new EventEmitter<any>();
  @Output() tuRival: EventEmitter<any> = new EventEmitter<any>();
  pokemons: IPokemon[];
  @Input() banner:string="Que Comience la batalla";
  @Input()pokemonSeleccionado1:boolean;
  @Input()pokemonSeleccionado2:boolean;


  constructor(private pokeSvc: PokemonService, private router: Router) {
    this.pokemons = [];
  }

  ngOnInit(): void {console.log(this.pokemonSeleccionado1,this.pokemonSeleccionado2)
    this.getPokemon(3);
    this.getPokemon(9);
    this.getPokemon(6);
    this.getPokemon(25);
    this.getPokemon(150);
    this.getPokemon(151);
    this.getPokemon(152);
    this.getPokemon(250);
    this.getPokemon(153);
    this.getPokemon(158);
    
  }

  getPokemon(id: number) {
    this.pokeSvc.getPokemonById(id).subscribe(data => {
      console.log(data);
      let pokemon: IPokemon = {
        'id': data.id,
        'nombre': data.name,
        'image': "" + data.sprites.front_default,
        'data': data,
        'hp':100
      }
      console.log(pokemon)
      this.pokemons.push(pokemon)
    })
  }

  elegirPokemon(pokemon){
    let tu_pokemon =new Poke(pokemon);
    this.tuPokemon.emit(tu_pokemon);
  }

  elegirRival(pokemon){
    let rival_pokemon =new Poke(pokemon)
    this.tuRival.emit(rival_pokemon);
  }

}
