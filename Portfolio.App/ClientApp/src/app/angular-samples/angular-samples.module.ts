import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularSamplesComponent } from './angular-samples.component';
import { NgxBootstrapSharedModule } from '../ngx-bootstrap-shared/ngx-bootstrap-shared.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  { path: '', component: AngularSamplesComponent }
];

@NgModule({
  declarations: [
    AngularSamplesComponent,
    DatePickerComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxBootstrapSharedModule
  ]
})
export class AngularSamplesModule { }
