import { Component } from '@angular/core';
import { OutletContext, RouterOutlet } from '@angular/router';
// import { slider, transformer, fader, stepper } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   fader,
  //   slider,
  //   stepper,
  //   transformer
  // ]
})
export class AppComponent {
  title = 'medical-system';
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  // }
}
