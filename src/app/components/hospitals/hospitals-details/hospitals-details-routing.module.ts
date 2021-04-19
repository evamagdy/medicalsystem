import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalsDetailsComponent } from './hospitals-details.component';

const routes: Routes = [
  { path: '', component: HospitalsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsDetailsRoutingModule { }
