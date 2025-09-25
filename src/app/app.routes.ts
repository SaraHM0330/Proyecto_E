import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'Home', loadChildren: () => import('../home/home-routing.module').then(m => m.HomeRoutingModule) },
    {path:'Faropass', loadChildren: () => import('../faropass/faropass-routing.module').then(m => m.FaropassRoutingModule) }

];
