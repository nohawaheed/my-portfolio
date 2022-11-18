import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screenWidth: number = 0;
  showIcons: boolean = window.matchMedia('(min-width: 768px)').matches;
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.showIcons = false;
    } else {
      this.showIcons = true;
    }
  }

  ngOnInit(): void {}
}
