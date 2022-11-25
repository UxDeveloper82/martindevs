import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public projects$: Observable<Iproject>

  constructor(private route: ActivatedRoute,
            private projectService: ProjectsService) { }

  ngOnInit(): void {
    const idProject = this.route.snapshot.params.id;
    this.projects$ = this.projectService.getOneProject(idProject);
  }

}
