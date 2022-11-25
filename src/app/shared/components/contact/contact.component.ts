import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messagesList: Message[] = [];
  messageObj : Message = {
       id: '',
       name: '',
       email: '',
       message: ''
  };
  id: string = '';
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_2ylnysq', 'template_ighdhzf', e.target as HTMLFormElement, 'fLDz7S4Uxp8uS8UnP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

   resetForm() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.message = '';
   }


  sendMessage() {
    if(this.name == '' || this.email == '' || this.message == '') {
      alert('Fill all input fields');
      return;
    }
    this.messageObj.id = '';
    this.messageObj.name = this.name;
    this.messageObj.email = this.email;
    this.messageObj.message = this.message;

    this.messageService.addMessage(this.messageObj);
    this.resetForm();
  }
}
