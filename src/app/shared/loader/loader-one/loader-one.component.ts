import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-loader-one',
  templateUrl: './loader-one.component.html',
  styleUrls: ['./loader-one.component.scss']
})
export class LoaderOneComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $( window ).on( "load", function() {
      setTimeout(() => {
        $(".mainLoaderWrap").fadeOut();
      }, 500);
    });
  }


}
