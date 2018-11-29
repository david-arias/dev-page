import { Component, OnInit } from '@angular/core';

declare var emergence:any;

@Component({
  selector: 'app-leads-form-one',
  templateUrl: './leads-form-one.component.html',
  styleUrls: ['./leads-form-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class LeadsFormOneComponent implements OnInit {

  w:any;

  constructor() {
    this.w = window.innerWidth;
  }

  ngOnInit() {
    this.initEmergence();
  }

  onResize(event) {
    this.w = event.target.innerWidth;
  }

  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }

}
