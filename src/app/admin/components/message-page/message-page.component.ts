import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { AuthService } from 'src/app/_services/auth.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
  messagesList: Message[] = [];
  id: string = '';
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private auth: AuthService,
    private messageService: MessageService) { }

  ngOnInit(): void {
     this.getAllMessages();
  }

  getAllMessages() {
    this.messageService.getAllMessages().subscribe( res => {
      this.messagesList = res.map( (e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id
        return data;
      })
    }, err => {
       alert('Error while fetching messages data');
    })
  }

  deleteMessage(message: Message) {
    if(window.confirm('Are you sure you want to delete the message ?')) {
      this.messageService.deleteMessage(message);
    }
  }

}
