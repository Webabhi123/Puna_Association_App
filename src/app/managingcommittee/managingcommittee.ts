import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-managingcommittee',
  imports: [],
  templateUrl: './managingcommittee.html',
  styleUrl: './managingcommittee.css'
})
export class Managingcommittee implements AfterViewInit {
  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLElement>('.committee-accordion-header').forEach(header => {
      header.addEventListener('click', function (this: HTMLElement) {
        const content = this.nextElementSibling as HTMLElement | null;
        const isActive = this.classList.contains('active');
        // Close all
        document.querySelectorAll<HTMLElement>('.committee-accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll<HTMLElement>('.committee-accordion-content').forEach(c => c.style.display = 'none');
        // Open clicked
        if (!isActive && content) {
          this.classList.add('active');
          content.style.display = 'block';
        }
      });
    });
  }
}
