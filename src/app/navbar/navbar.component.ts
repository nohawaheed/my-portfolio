import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      if (value) {
        this.jumbTo(value);
      }
    })
  }
  jumbTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }
}
