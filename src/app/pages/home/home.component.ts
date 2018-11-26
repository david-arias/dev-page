import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeComponent implements OnInit {

  w:any;

  constructor() {
    this.w = window.innerWidth;
  }

  ngOnInit() {
  }

  onResize(event) {
    this.w = event.target.innerWidth;
  }

}
