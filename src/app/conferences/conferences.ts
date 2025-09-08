import { Component,AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-conferences',
  imports: [],
  templateUrl: './conferences.html',
  styleUrl: './conferences.css'
})
export class Conferences implements AfterViewInit {
 constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const modal = document.getElementById('imgModal') as HTMLElement;
    const modalImg = document.getElementById('modalImg') as HTMLImageElement;
    const modalClose = document.getElementById('modalClose') as HTMLElement;
    const images = document.querySelectorAll('.conference-card img');

    // Add click listener to each image
    images.forEach(img => {
      this.renderer.listen(img, 'click', () => {
        modal.style.display = 'block';
        modalImg.src = (img as HTMLImageElement).src;
      });
    });

    // Close modal on close button click
    if (modalClose) {
      this.renderer.listen(modalClose, 'click', () => {
        modal.style.display = 'none';
      });
    }

    // Close modal when clicking outside the image
    this.renderer.listen(window, 'click', (event: Event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}
