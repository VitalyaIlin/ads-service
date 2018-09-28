import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})

export class CreateAdComponent implements OnInit {

  createAdForm: FormGroup;
  ad: {[k: string]: any} = {};
  allAds: {[k: string]: any}[] = JSON.parse(localStorage.getItem('ads')) == null ? [] : JSON.parse(localStorage.getItem('ads'));
  months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.createAdForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }

  createAd(data){
    this.ad.id = Date.now();
    this.ad.title = data.title;
    this.ad.description = data.description;
    this.ad.author = localStorage.getItem('currentUserName');
    this.ad.creationDate = `${new Date().getFullYear()}/${this.months[new Date().getMonth()]}/${this.days[new Date().getDay()]}/${new Date().getHours()}:${new Date().getMinutes()}`;

    this.allAds.push(this.ad);
    localStorage.setItem('ads', JSON.stringify(this.allAds));
    
    this.router.navigate(['/', this.ad.id]);
  }

}
