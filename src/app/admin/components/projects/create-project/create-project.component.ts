import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Iproject } from 'src/app/_models/Iproject';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  private projectsCollection: AngularFirestoreCollection<Iproject>
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(private projectService: ProjectsService) { }

  public newProjectForm = new FormGroup({
      titleProject: new FormControl('', Validators.required),
      imageProject: new FormControl('', Validators.required),
      contentProject: new FormControl('', Validators.required),
      tagsProject: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }


  addNewProject(data: Iproject) {
    console.log('New Project', data);
    this.projectService.preAddAndUpdateProject(data, this.filePath)
  }

  handleImage(event: any) {
    this.filePath = event.target.files[0];
  }
}
