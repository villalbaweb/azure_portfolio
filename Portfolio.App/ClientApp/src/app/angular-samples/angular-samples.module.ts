import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularSamplesComponent } from './angular-samples.component';


const routes: Routes = [
  { path: '', component: AngularSamplesComponent }
];

@NgModule({
  declarations: [
    AngularSamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularSamplesModule { }
