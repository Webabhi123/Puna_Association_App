import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
  standalone: true
})
export class PrivacyPolicy implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top when component initializes
    window.scrollTo(0, 0);
    
    // Handle route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
