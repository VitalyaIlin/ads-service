import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adds',
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
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css']
})
export class AddsComponent implements OnInit {

  ads: Array<Object> = [];
  currentUserName: string = localStorage.getItem("currentUserName");
  indexOfDeletedEl: number;

  constructor(private us: UserService) {
  }

  ngOnInit() {
    this.ads = JSON.parse(localStorage.getItem('ads'));

    this.us.currentUsername.subscribe(
      (value) => {
        this.currentUserName = value;
      }
    )
    
  }

  deleteAd(elem){
    this.indexOfDeletedEl = this.ads.indexOf(elem);
    this.ads.splice(this.indexOfDeletedEl, 1);
    localStorage.setItem('ads', JSON.stringify(this.ads));
  }

}
