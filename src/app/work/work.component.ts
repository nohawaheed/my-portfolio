import { Component, OnInit } from '@angular/core';
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
