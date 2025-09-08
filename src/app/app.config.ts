import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { AuthInterceptor } from './interceptors/auth.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()), // <-- enable hash-based routing here
    provideClientHydration(withEventReplay()),
      provideHttpClient(withInterceptors([tokenInterceptor])), // only this
  ]
};
