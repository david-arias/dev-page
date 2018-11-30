import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lead-form-one',
  templateUrl: './lead-form-one.component.html',
  styleUrls: ['./lead-form-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class LeadFormOneComponent implements OnInit {


  @Input('styleForm') formTheme: string = "light";

  typeSel:string = "";
  careerSel:string = "";
  modSel:string = "";

  constructor() {
  }
  
  
  ngOnInit() {
    // console.log( this.formTheme );
  }

  onResize(event) {
  }

}
