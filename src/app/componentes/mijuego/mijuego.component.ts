import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.css']
})
export class MijuegoComponent implements OnInit {
  carta:string;
  cartas:string[]=['../../../assets/imagenes/angular.png',
  '../../../assets/imagenes/golang.png',
  '../../../assets/imagenes/golang.png',
  '../../../assets/imagenes/python.png',
  '../../../assets/imagenes/javascript.jpg',
  '../../../assets/imagenes/angular.png',
  '../../../assets/imagenes/ionic.png',
  '../../../assets/imagenes/react.png',
  '../../../assets/imagenes/react.png',
  '../../../assets/imagenes/javascript.jpg',
  '../../../assets/imagenes/ionic.png',
  '../../../assets/imagenes/python.png'];

  constructor() { }

  ngOnInit(): void {
  }

  Voltear(){
    console.log("no anda");
  }
}
