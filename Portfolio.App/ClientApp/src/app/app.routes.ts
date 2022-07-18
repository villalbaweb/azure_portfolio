import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'angular-samples', loadChildren: () => import('./angular-samples/angular-samples.module').then(m => m.AngularSamplesModule) },
  { path: 'csharp-samples', loadChildren: () => import('./csharp-samples/csharp-samples.module').then(m => m.CsharpSamplesModule) },
];
