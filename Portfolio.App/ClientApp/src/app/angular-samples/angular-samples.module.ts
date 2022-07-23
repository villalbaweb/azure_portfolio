import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularSamplesComponent } from './angular-samples.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


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
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class AngularSamplesModule { }
