import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsJsonApiService {
  constructor(private _httpClient: HttpClient) {}

  getProjects(): Observable<any> {
    return this._httpClient.get(
      'https://nohawaheed.github.io/projects/projects.json'
    );
  }
}
