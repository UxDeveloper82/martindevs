import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email : string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    if(this.email == '') {
      alert('Please Enter email');
      return;
    }
    if(this.password == '') {
      alert('Please Enter Password');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
