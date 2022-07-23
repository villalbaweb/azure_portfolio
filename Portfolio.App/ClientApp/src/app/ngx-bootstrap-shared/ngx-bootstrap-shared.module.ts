import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    TooltipModule,
    BsDatepickerModule
  ]
})
export class NgxBootstrapSharedModule { }
