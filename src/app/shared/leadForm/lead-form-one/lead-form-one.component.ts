import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lead-form-one',
  templateUrl: './lead-form-one.component.html',
  styleUrls: ['./lead-form-one.component.scss']
})
export class LeadFormOneComponent implements OnInit {

  @Input() styleForm: string = "";

  typeSel:string = "";
  careerSel:string = "";
  modSel:string = "";

  constructor() {
    console.log( this.styleForm );
    
  }

  ngOnInit() {
  }

}
