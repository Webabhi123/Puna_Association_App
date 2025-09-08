import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { TopBar } from './shared/top-bar/top-bar';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TopBar,Header,Navbar,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  
  isLoginPage: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide header for specific route
        this.isLoginPage = !event.url.includes('/memberlogin');
      }
    });
  }
}
