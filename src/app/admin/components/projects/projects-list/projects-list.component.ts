import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  public projects$: Observable<Iproject[]>;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAllProjectList();
  }

  onToggleSidenav(event:any) {
    this.sidenavToggle.emit(false);
  }


}
