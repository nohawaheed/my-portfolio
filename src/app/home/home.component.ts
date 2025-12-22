import { Component, HostListener, OnInit } from '@angular/core';
import { GsapService } from '../gsap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screenWidth: number = 0;
  showIcons: boolean = window.matchMedia('(min-width: 768px)').matches;
  constructor(private _gsapService: GsapService) { }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.showIcons = false;
    } else {
      this.showIcons = true;
    }
  }

  ngOnInit(): void { }

  animateImage(event: Event) {
    const img = event.target as HTMLElement;
    this._gsapService.animateImage(img)
  }
}
