import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-batalla',
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.css']
})
export class BatallaComponent implements OnInit {
  @Input() tuPokemon
  @Input() tuRival
  puedoAtacar: boolean = true;
  @Output() ganador: EventEmitter<any> = new EventEmitter<any>()
  effects: string[];
  ProgresoDeAncho: string;
  ProgresoDeAnchoRival: string;
  clase = "progress-bar progress-bar-info progress-bar-striped ";
  claseAtaque = "";
  claseAtaqueRival = "";
  termino: boolean;
  miPokemon
  mirival
  resultado: string;
  constructor() {
    this.ProgresoDeAncho = "100%"
    this.ProgresoDeAnchoRival = "100%"
    this.termino = false;
    this.effects = ["pulse", "rubberBand", "shake", "swing", "tada"];
  }

  ngOnInit(): void {
  }

  atacar() {
    this.puedoAtacar = false;
    setTimeout(() => {
      this.claseAtaque = "miAtaque " + this.effects[Math.floor(Math.random() * (4 - 0)) + 1] + " animated";
    }, 100);
    setTimeout(() => {
      this.claseAtaque = "";

    }, 1000);
    let ataque = Math.floor(Math.random() * (50 - 1)) + 1
    let vidaOp = this.tuRival.hp - ataque;
    if (vidaOp >= 0) {
      this.tuRival.hp -= ataque
      this.ProgresoDeAnchoRival = this.tuRival.hp + "%"
    }
    else {
      this.tuRival.hp = 0
      this.ProgresoDeAnchoRival = "0%"
    }

    setTimeout(() => {
      setTimeout(() => {
        this.claseAtaqueRival = "miAtaque " + this.effects[Math.floor(Math.random() * (4 - 0)) + 1] + " animated";
      }, 100);
      setTimeout(() => {
        this.claseAtaqueRival = "";

      }, 1000);
      let ataque = Math.floor(Math.random() * (50 - 1)) + 1
      let vidaTuya = this.tuPokemon.hp - ataque;
      if (vidaTuya >= 0) {
        this.tuPokemon.hp -= ataque
        this.ProgresoDeAncho = this.tuPokemon.hp + "%"
        this.validarBatalla(this.tuPokemon.hp, this.tuRival.hp);
      }
      else {
        this.tuPokemon.hp = 0
        this.ProgresoDeAncho = "0%"
        this.validarBatalla(this.tuPokemon.hp, this.tuRival.hp);
      }
      this.puedoAtacar = true;

    }, 1000);
  }

  validarBatalla(hpTuyo, hpRival) {
    setTimeout(() => {

      if (hpTuyo > 0 && hpRival > 0) {
        this.termino = false;
      }

      else if (hpTuyo == 0 && hpRival > 0) {
        this.resultado = "PERDISTE!"
        this.claseAtaqueRival = "victoria bounce animated";
        this.termino = true;
        this.puedoAtacar = false;
      }
      else if (hpRival == 0 && hpTuyo > 0) {

        this.resultado = "GANASTE!"
        this.claseAtaque = "victoria bounce animated";
        this.termino = true;
        this.puedoAtacar = false;
      }
      else if (hpRival == 0 && hpTuyo == 0) {
        this.resultado = "EMPATE!"
        this.termino = true;
        this.puedoAtacar = false;
      }
    }, 1000);

  }

  reinicio($event) {
    this.tuRival = null;
    this.tuPokemon = null;
    this.miPokemon = null;
    this.mirival = null; 
    this.ProgresoDeAncho = "100%"
    this.ProgresoDeAnchoRival = "100%"
    this.claseAtaque = "";
    this.claseAtaqueRival = "";
    this.puedoAtacar=true;
    console.log($event);
    this.termino = false;
    this.ganador.emit($event);
  }


}


