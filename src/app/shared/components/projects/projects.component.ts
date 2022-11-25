import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproject  } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Iproject [] = [];
  public filterCategory: any;

  public projects$: Observable<Iproject[]>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    //  this.projectsService.getProjects().subscribe((res) => {
    //   this.projects = res;
    //   this.filterCategory = res;
    //  });
    this.projects$ = this.projectsService.getAllProjectList();
  }

  filter(category: string) {
     this.filterCategory = this.projects
     .filter((a: any) => {
      if(a.category == category || category == '') {
        return a;
      }
     })
  }

}
