import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AnimatedDigitComponent } from '../shared/animated-digit/animated-digit.component';
@NgModule({
  declarations: [HomeComponent,AnimatedDigitComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgImageSliderModule,
    AnimateOnScrollModule.forRoot()
  ]
})
export class HomeModule { }
