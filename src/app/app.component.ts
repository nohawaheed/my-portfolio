import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { moveFromTop } from 'ngx-router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveFromTop', [transition('* => *', useAnimation(moveFromTop))]),
  ],
})
export class AppComponent {
  title = 'my-portfolio';
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
