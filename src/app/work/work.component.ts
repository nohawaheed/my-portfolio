import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Projects } from '../projects';
import { ProjectsJsonApiService } from './../projects-json-api.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  constructor(private _projectsJsonApiService: ProjectsJsonApiService) {}
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
  };

  ngOnInit(): void {
    this._projectsJsonApiService.getProjects().subscribe((response) => {
      this.projects = response.results;
      // console.log(this.projects);
    });
  }
}
