import { Routes } from '@angular/router';
import { User } from './manage-user/user/user';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { CreateUser } from './manage-user/create-user/create-user';
import { Event } from './manage-event/event/event';
import { ManageAds } from './manage-ads/manage-ads/manage-ads';
import { CreateAds } from './manage-ads/create-ads/create-ads';
import { Memberdirectory } from './memberdirectory/memberdirectory';
import { TransportData } from './transport-data/transport-data';
import { AuthGuard } from './auth/auth.guard';
import { RenderMode } from '@angular/ssr';
import { Dashboard } from './dashboard/dashboard';
import { BusTransportData } from './bus-transport-data/bus-transport-data';
import { RailwayTransportData } from './railway-transport-data/railway-transport-data';
import { LogisticsTransportData } from './logistics-transport-data/logistics-transport-data';
export const adminroutes: Routes = [
  {
    path: '',
    component: AdminLayout,
    canActivate: [AuthGuard], // Protect all admin routes
    children: [
      { path: 'user', component: User },
      { path: 'create-user', component: CreateUser },
      { path: 'create-user/:id', component: CreateUser,
        data:{
          renderMode: RenderMode.Server
      }},
      { path:'event', component:Event},
      { path:'ads', component:ManageAds},
      { path:'ads/:id', component:CreateAds,
        data:{
          renderMode: RenderMode.Server
      }},
      { path:'create-ads', component:CreateAds},
      { path:'memberdirectory', component:Memberdirectory},
      { path:'transport', component:TransportData},
      {path:'bus-transport-data',component:BusTransportData},
      {path:'logistics-transport-data',component:LogisticsTransportData},
      {path:'railway-transport-data',component:RailwayTransportData},
      { path:'dashboard', component:Dashboard},
      // add other admin child routes here
      { path: '', redirectTo: 'user', pathMatch: 'full' }


    ]
  }
];