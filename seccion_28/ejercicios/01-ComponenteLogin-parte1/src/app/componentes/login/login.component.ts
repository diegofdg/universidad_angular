import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessagesService
  ) { }

  login(){
  }

}
