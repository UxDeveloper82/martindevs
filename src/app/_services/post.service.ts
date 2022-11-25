import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Ifile } from '../_models/Ifile';
import { Ipost } from '../_models/Ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsCollection: AngularFirestoreCollection<Ipost>
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.postsCollection = afs.collection<Ipost>('posts', ref => ref.orderBy('id','asc'));
  }

  public getAllPosts(): Observable<Ipost[]> {
     return this.afs.collection('posts')
     .snapshotChanges()
     .pipe(
      map(actions =>
        actions.map(a => {
            const data = a.payload.doc.data() as Ipost;
            const id = a.payload.doc.id;
            return { id, ...data };
         })
        )
     );
  }

  public getOnePost(id: Ipost): Observable<Ipost> {
      return this.afs.doc<Ipost>(`posts/${id}`).valueChanges();
  }

  public onEditPost(post: Ipost) {
     return this.postsCollection.doc(post.id).update(post);
  }

  public deletePostById(post: Ipost) {
    return this.postsCollection.doc(post.id).delete();
  }

  public preAddAndUpdatePost(post: Ipost, image: Ifile): void{
    this.uploadImage(post, image);
  }

  private savePost(post: Ipost) {
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    };
    // Todo EditPost
    this.postsCollection.add(postObj);
  }

  private uploadImage(post: Ipost, image: Ifile) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
      })
    ).subscribe();
  }


}
