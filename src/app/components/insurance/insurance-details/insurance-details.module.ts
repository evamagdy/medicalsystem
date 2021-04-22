import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceDetailsRoutingModule } from './insurance-details-routing.module';
import { InsuranceDetailsComponent } from './insurance-details.component';


@NgModule({
  declarations: [InsuranceDetailsComponent],
  imports: [
    CommonModule,
    InsuranceDetailsRoutingModule
  ]
})
export class InsuranceDetailsModule { }
