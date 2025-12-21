import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
