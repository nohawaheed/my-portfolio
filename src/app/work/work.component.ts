import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Projects } from '../projects';
import { ProjectsJsonApiService } from './../projects-json-api.service';
import { GsapService } from '../gsap.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  constructor(private _projectsJsonApiService: ProjectsJsonApiService, private _gsapService: GsapService) { }
  projects: Projects[] = [];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
    navText: ['<i class="fa fa-arrow-left text-light"></i>', '<i class="fa fa-arrow-right text-light"></i>']
  };

  ngOnInit(): void {
    this._projectsJsonApiService.getProjects().subscribe((response) => {
      this.projects = response.results;
    });
  }

  onCardImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    const card = img.closest('.card') as HTMLElement;

    if (!card || card.classList.contains('animated')) return;
    card.classList.add('animated');
    this._gsapService.animateWorkCard(card);
  }
}
