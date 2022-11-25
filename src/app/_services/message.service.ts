import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../_models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private afs: AngularFirestore) { }

  // add message
  addMessage(message: Message) {
     message.id = this.afs.createId();
     return this.afs.collection('/Messages').add(message);
  }

  // get all messages
  getAllMessages() {
    return this.afs.collection('/Messages').snapshotChanges();
  }

  deleteMessage(message: Message) {
     return this.afs.doc('/Messages/' + message.id).delete();
  }

  updateMessage(message: Message) {
    this.deleteMessage(message);
    this.addMessage(message);
  }

}
