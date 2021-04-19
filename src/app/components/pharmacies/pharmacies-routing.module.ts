import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaciesComponent } from './pharmacies.component';

const routes: Routes = [
  { path: '', component: PharmaciesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaciesRoutingModule { }
