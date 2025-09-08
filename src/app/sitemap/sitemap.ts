import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sitemap',
  imports: [],
  templateUrl: './sitemap.html',
  styleUrl: './sitemap.css'
})
export class Sitemap implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // First, scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Then handle fragment navigation if any
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            // Calculate the position to scroll to (accounting for fixed header if any)
            const yOffset = -100; // Reduced offset for better visibility
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300); // Increased delay to ensure smooth scrolling after page load
      }
    });
  }
}
