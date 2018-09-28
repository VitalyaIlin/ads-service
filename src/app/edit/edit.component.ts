import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editAdForm: FormGroup;
  id: string;
  index: number;
  allAds: {[k: string]: any}[] = JSON.parse(localStorage.getItem('ads')) == null ? [] : JSON.parse(localStorage.getItem('ads'));
  months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  currentAd: {[k: string]: any};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.currentAd = this.allAds.find((e ,i) => {
      this.index = i;
      return e.id == this.id;
    })

    this.editAdForm = new FormGroup({
      title: new FormControl(this.currentAd.title, Validators.required),
      description: new FormControl(this.currentAd.description, Validators.required)
    });
  }

  editAd(data){
    this.allAds[this.index].title = data.title;
    this.allAds[this.index].description = data.description;
    this.allAds[this.index].creationDate = `${new Date().getFullYear()}/${this.months[new Date().getMonth()]}/${this.days[new Date().getDay()]}/${new Date().getHours()}:${new Date().getMinutes()}`;
    
    localStorage.setItem('ads', JSON.stringify(this.allAds));
    this.router.navigate(['/', this.id]);

  }

}
