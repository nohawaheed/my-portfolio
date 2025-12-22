import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GsapService } from '../gsap.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _gsapService: GsapService) { }

  @ViewChild('circleContainer') circleContainer!: ElementRef<HTMLElement>;
  ngOnInit(): void {
  }
  @ViewChildren('icon') icons!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const elements: HTMLElement[] = this.icons.toArray().map(i => i.nativeElement);
    this._gsapService.animateSkillIcons(elements);
  }
}
