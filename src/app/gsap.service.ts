import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() { }

  animateImage(img: HTMLElement) {
    // Animate opacity and scale
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out',
        onComplete: () => {
          // free memory
          img.style.willChange = 'auto';
        }
      },
    );
  }

  animateMap(iframe: HTMLElement) {
    gsap.fromTo(
      iframe,
      { opacity: 0 },
      {
        opacity: 1, duration: 0.4, ease: 'power1.out',
        onComplete: () => {
          // free memory
          iframe.style.willChange = 'auto';
        }
      }
    );
  }

  animateWorkCard(card: HTMLElement) {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'back.out(1.4)',
        delay: gsap.utils.random(0, 0.15),
        onComplete: () => {
          // free memory
          card.style.willChange = 'auto';
        }
      }
    );
  }

  animateSkillIcons(elements: HTMLElement[]) {
    gsap.from(elements, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08
    });
  }
}
