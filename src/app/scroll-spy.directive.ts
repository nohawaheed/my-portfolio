import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements OnInit, OnDestroy {

  constructor() { }
  @Input('appScrollSpy') sectionId!: string;

  @HostBinding('class.active') isActive = false;

  private observer!: IntersectionObserver;

  ngOnInit() {
    const section = document.getElementById(this.sectionId);
    if (!section) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isActive = entry.isIntersecting;
      },
      {
        root: null,
        threshold: 0.6, // adjust for when it becomes active
      }
    );

    this.observer.observe(section);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
