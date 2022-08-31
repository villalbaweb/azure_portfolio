import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular-samples', loadChildren: () => import('./angular-samples/angular-samples.module').then(m => m.AngularSamplesModule) },
  { path: 'csharp-samples', loadChildren: () => import('./csharp-samples/csharp-samples.module').then(m => m.CsharpSamplesModule) },
];
