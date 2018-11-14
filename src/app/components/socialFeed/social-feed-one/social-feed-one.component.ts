import { Component, OnInit } from '@angular/core';


declare var emergence:any;

@Component({
  selector: 'app-social-feed-one',
  templateUrl: './social-feed-one.component.html',
  styleUrls: ['./social-feed-one.component.scss']
})
export class SocialFeedOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initEmergence();
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence

}
