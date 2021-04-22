import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalsComponent } from './hospitals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [HospitalsComponent],
  imports: [
    CommonModule,
    HospitalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
      
  ]
})
export class HospitalsModule { }
