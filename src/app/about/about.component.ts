import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  @ViewChild('circleContainer') circleContainer!: ElementRef<HTMLElement>;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const items: HTMLElement[] = Array.from(
      this.circleContainer.nativeElement.querySelectorAll('.item')
    );

    const radius = 150; // distance from container center
    const total = items.length;

    items.forEach((item, index) => {
      const angle = (index / total) * Math.PI * 2;

      // position icons in a circle relative to container
      gsap.set(item, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });

      // subtle floating
      this.float(item);
    });
  }

  float(element: HTMLElement) {
    gsap.to(element, {
      x: `+=${gsap.utils.random(-15, 15)}`,
      y: `+=${gsap.utils.random(-15, 15)}`,
      duration: gsap.utils.random(3, 6),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      onComplete: () => this.float(element),
    });
  }
}
