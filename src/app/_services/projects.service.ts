import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Ifile } from '../_models/Ifile';
import { Iproject } from '../_models/Iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsCollection: AngularFirestoreCollection<Iproject>;
  private filePath: any;
  private downloadUrl: Observable<string>;
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient,
              private afs: AngularFirestore,
              private storage: AngularFireStorage) {
      this.projectsCollection = afs.collection<any>('Projects', (ref) =>
      ref.orderBy('id', 'asc'));
               }

  getProjects() {
      return this.http.get<Iproject[]>("data/ProjectsSeedData.json");
  }

  public getAllProjectList(): Observable<Iproject[]>{
    return this.afs
        .collection('Projects')
        .snapshotChanges()
        .pipe(
          map((action) =>
            action.map((a) => {
              const data = a.payload.doc.data() as Iproject;
              const id = a.payload.doc.id;
              return { id, ...data};
            }))
        );
  }

  public getOneProject(id: Iproject): Observable<Iproject> {
    return this.afs.doc<Iproject>(`Projects/${id}`).valueChanges();
  }

  public onEditProject(project: Iproject) {
    return this.projectsCollection.doc(project.id).update(project);
  }

  public deleteProject(project: Iproject) {
    return this.projectsCollection.doc(project.id).delete();
  }

  public preAddAndUpdateProject(project: Iproject, image: Ifile): void{
    this.uploadImage(project, image);
  }

  private saveProject(project: Iproject) {
     const projectObj = {
         titleProject: project.titleProject,
         contentProject: project.contentProject,
         imageProject: this.downloadUrl,
         fileRef: this.filePath,
         tagsProject: project.tagsProject,
     };
    // Todo Editors
    this.projectsCollection.add(projectObj);
  }

  private uploadImage(project: Iproject, image: Ifile) {
      this.filePath = `image/${image.name}`;
      const fileRef = this.storage.ref(this.filePath);
      const task = this.storage.upload(this.filePath, image);
      task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImage) => {
            this.downloadUrl = urlImage;
            this.saveProject(project);
          })
        })
      )
      .subscribe();
  }
}
