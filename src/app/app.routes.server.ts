import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'admin/create-user/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'admin/ads/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path:'reset-password/:id',
    renderMode: RenderMode.Server
  }
];
