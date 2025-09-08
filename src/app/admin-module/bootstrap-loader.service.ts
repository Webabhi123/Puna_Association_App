import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapLoaderService {
  private loaded = false;

  loadBootstrap() {
    if (this.loaded) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.defer = true;
    document.body.appendChild(script);
    this.loaded = true;
  }
}