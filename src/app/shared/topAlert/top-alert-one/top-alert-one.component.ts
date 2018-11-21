import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-top-alert-one',
  templateUrl: './top-alert-one.component.html',
  styleUrls: ['./top-alert-one.component.scss']
})
export class TopAlertOneComponent implements OnInit {

  @Input('type') alertStyle: string = "";

  constructor() { }

  ngOnInit() {
  }

  closeAlert() {
    $(".topAlertWrap").slideUp();
  }

}
