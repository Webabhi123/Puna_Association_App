import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true
})
export class Navbar implements OnDestroy,OnInit {
  openCategory: string | null = null;
  isMenuOpen = false;
  ngOnInit(): void {
    (window as any).closeAngularDropdown = () => {
      this.openCategory = null;
    };
  }
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.openCategory = null; // Close any open dropdown
  }
  
  toggleMegaMenu(event: Event, category: string) {
    event.preventDefault();
    event.stopPropagation();
    this.openCategory = this.openCategory === category ? null : category;
  }

  // Close dropdown when clicking on a dropdown item
  onDropdownItemClick() {
    this.openCategory = null;
    // This will automatically hide the dropdown due to the [class.show] binding in the template
  }

  // @HostListener('document:click', ['$event'])
  // closeMegaMenuOnClickOutside(event: MouseEvent) {
  //   if (this.openCategory) {
  //     const target = event.target as HTMLElement;
  //     if (!target.closest('.dropdown') && !target.closest('a[href="#"]')) {
  //       this.openCategory = null;
  //     }
  //   }
  // }

  ngOnDestroy() {
    // Cleanup if needed
  }
}
