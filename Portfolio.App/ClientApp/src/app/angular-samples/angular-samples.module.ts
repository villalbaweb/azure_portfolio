import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularSamplesComponent } from './angular-samples.component';
import { NgxBootstrapSharedModule } from '../ngx-bootstrap-shared/ngx-bootstrap-shared.module';

const routes: Routes = [
  { path: '', component: AngularSamplesComponent }
];

@NgModule({
  declarations: [
    AngularSamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxBootstrapSharedModule
  ]
})
export class AngularSamplesModule { }
