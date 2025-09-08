import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos implements AfterViewInit {

  ngAfterViewInit(): void {
    document.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function (this: HTMLButtonElement) {
        // Remove 'active' class from all tab buttons
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active');
        });

        // Remove 'active' class from all tab content sections
        document.querySelectorAll('.tab-content').forEach(tc => {
          tc.classList.remove('active');
        });

        // Add 'active' to the clicked button
        this.classList.add('active');

        // Get corresponding tab content by data-tab attribute
        const tabId = this.dataset['tab'];

        if (tabId) {
          const contentEl = document.getElementById(tabId);
          if (contentEl) {
            contentEl.classList.add('active');
          } else {
            console.warn(`No element found with ID '${tabId}'`);
          }
        } else {
          console.warn('No data-tab attribute found on button.');
        }
      });
    });
  }

}
