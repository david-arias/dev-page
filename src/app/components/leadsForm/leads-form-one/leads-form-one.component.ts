import { Component, OnInit } from '@angular/core';

declare var emergence:any;

@Component({
  selector: 'app-leads-form-one',
  templateUrl: './leads-form-one.component.html',
  styleUrls: ['./leads-form-one.component.scss']
})
export class LeadsFormOneComponent implements OnInit {

  typeSel:string = "";
  careerSel:string = "";
  modSel:string = "";

  constructor() { }

  ngOnInit() {
    this.initEmergence();
  }

  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }

}
