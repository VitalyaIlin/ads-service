import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  animations: [
    trigger('isVissible', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('0s', style({opacity: 0}))
      ])
    ])
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  authForm: FormGroup;
  username: string = localStorage.getItem('currentUserName') ? localStorage.getItem('currentUserName') : "";
  password: string;
  isAuthrizated: boolean = (localStorage.getItem('isAuthrizated') == 'true');
  alertText: string;

  constructor(private us: UserService) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9\-]+$')]),
      password: new FormControl("", [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})')])
    });
  }

  authrization(data){
    this.username = data.username;
    this.password = data.password;
    let lsData = localStorage.getItem(this.username);

    if(lsData === null){
      localStorage.setItem(this.username, this.password);
      this.alertText = "You profile was created! You are authorized!"
      localStorage.setItem('isAuthrizated', 'true');
      localStorage.setItem('currentUserName', this.username);
      this.isAuthrizated = true;
      this.us.currentUsername.next(this.username);
    }else if(lsData == this.password){
      localStorage.setItem('isAuthrizated', 'true');
      localStorage.setItem('currentUserName', this.username);
      this.alertText = "You are authorized!"
      this.isAuthrizated = true;
      this.us.currentUsername.next(this.username);   
    }else{
      this.alertText = "Wrong password!"
    }

  }

  logout(){
    localStorage.removeItem('currentUserName');
    localStorage.setItem('isAuthrizated', 'false');
    this.us.currentUsername.next("");
    this.isAuthrizated = false;
  }
  
}
