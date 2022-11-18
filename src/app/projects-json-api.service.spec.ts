import { TestBed } from '@angular/core/testing';

import { ProjectsJsonApiService } from './projects-json-api.service';

describe('ProjectsJsonApiService', () => {
  let service: ProjectsJsonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsJsonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
