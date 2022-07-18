import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CsharpSamplesComponent } from './csharp-samples.component';


const routes: Routes = [
  { path: '', component: CsharpSamplesComponent }
];

@NgModule({
  declarations: [
    CsharpSamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CsharpSamplesModule { }
