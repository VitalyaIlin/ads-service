import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Ad{
  title: string,
  author: string,
  description: string,
  creationDate: string
}

@Component({
  selector: 'app-selected-add',
  templateUrl: './selected-add.component.html',
  styleUrls: ['./selected-add.component.css']
})

export class SelectedAddComponent implements OnInit {

  id: string;
  ad: Ad;
  allAds: Array<any>;
  flag: boolean = false;
  currentAdIndex: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.allAds = JSON.parse(localStorage.getItem('ads'));
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ad = this.allAds.find((e, i) => {
      this.currentAdIndex = i;
      return e.id == this.id;
    })

    if(this.ad.author == localStorage.getItem('currentUserName')){
      this.flag = true;
    }

  }

  deleteAd(){
    this.allAds.splice(this.currentAdIndex, 1);
    localStorage.setItem('ads', JSON.stringify(this.allAds));
    this.router.navigate([''])
  }

}
