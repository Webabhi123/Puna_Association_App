import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Keyinitiative } from './keyinitiative/keyinitiative';
import { Contactus } from './contactus/contactus';

export const routes: Routes = [
  { path: '', component: Home },
  {path: 'about', component: About},
  {path: 'keyinitiative', component: Keyinitiative},
  {path: 'contactus', component: Contactus},
  // Add other routes here
];