import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  usuario;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.usuario = localStorage.getItem("user");
  }

  logOut(){
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
