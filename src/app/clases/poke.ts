import { IPokemon } from "./pokemon";

export class Poke implements IPokemon {
    image: string;
    data: any;
    id: number;
    nombre: string;
    hp: number;

    constructor(pokemon:IPokemon){
        this.image = pokemon.image;
        this.data = pokemon.data;
        this.id = pokemon.id;
        this.nombre = pokemon.nombre;
        this.hp = pokemon.hp;
    }
}