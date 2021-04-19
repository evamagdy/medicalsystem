import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsDetailsRoutingModule } from './hospitals-details-routing.module';
import { HospitalsDetailsComponent } from './hospitals-details.component';


@NgModule({
  declarations: [HospitalsDetailsComponent],
  imports: [
    CommonModule,
    HospitalsDetailsRoutingModule
  ]
})
export class HospitalsDetailsModule { }
