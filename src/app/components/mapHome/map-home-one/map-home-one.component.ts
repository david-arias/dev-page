import { Component, OnInit } from '@angular/core';
import { MAPMARKERS } from '../markers.data';

declare var $:any;

@Component({
  selector: 'app-map-home-one',
  templateUrl: './map-home-one.component.html',
  styleUrls: ['./map-home-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MapHomeOneComponent implements OnInit {

  w:any;

  lat:number = -31.428519; 
  lng:number = -64.184759;
  // zoom:number = 9;
  zoom:number = 5;

  mapOffset:number = 0.6;
  
  latCenter:number = this.lat; 
  lngCenter:number = this.lng - this.mapOffset;
  zoomCenter:number = this.zoom

  /* markers */
  markers:any = MAPMARKERS;

  mapSearchInp:string = "";
  selMarkers:any = [];
  mapResults:any = [];

  previous:any;

  constructor() {
  }

  ngOnInit() {
    this.w = window.innerWidth;
    if ( this.w <= 769 ) { 
      this.mapOffset = 0;
      this.lngCenter = this.lng - this.mapOffset;
    }

    /* */
    this.changePins('all');
    this.mapResults = this.markers;
  }

  onResize(event) {
    this.w = event.target.innerWidth;

    if ( this.w <= 769 ) { 
      this.mapOffset = 0;
      this.lngCenter = this.lng - this.mapOffset;
    } else { 
      this.mapOffset = 0.6;
      this.lngCenter = this.lng - this.mapOffset;
    }
  }

  changePins( type:string ) {
    $(".mapBtn").removeClass('active');
    $(`.mapBtn-${type}`).addClass('active');
    this.selMarkers = [];

    if ( type == 'all' ) {

      this.selMarkers = this.markers;

    } else if ( type == 'sedes' ) {

      for (let i = 0; i < this.markers.length; i++) {
        if ( this.markers[i].type == "sede" ) {
          this.selMarkers.push( this.markers[i] )
        }
      }

    } else if ( type == 'centros' ) {

      for (let i = 0; i < this.markers.length; i++) {
        if ( this.markers[i].type == "centro" ) {
          this.selMarkers.push( this.markers[i] )
        }
      }

    }

  }

  // center map
  centerMap() {
    this.latCenter = 0;
    this.lngCenter = 0;
    this.zoomCenter = 0;
    
    setTimeout(() => {
      this.latCenter = this.lat;
      this.lngCenter = this.lng - this.mapOffset;
      this.zoomCenter = this.zoom;
    }, 200);
  }
  clickedMarker( infowindow:any ) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  // search in markers
  searchQuery( evnt:any ) {
    let val = evnt.target.value;
    this.mapResults = [];
    
    for (let i = 0; i < this.selMarkers.length; i++) {
      let allVal = `${this.selMarkers[i].name} | ${this.selMarkers[i].dir}`
      if( this.valueNoAcutes(allVal).includes(val)  ) {
        this.mapResults.push( this.selMarkers[i] );
      }
    }

    if ( val.length <= 0) {
      this.mapResults = [];
      $(".autoCompleteWrap").removeClass('activeSearch');
    } else {
      $(".autoCompleteWrap").addClass('activeSearch');
    }   

  }
  valueNoAcutes( val:string ) {
    let value = val.toLowerCase();
    value = value.replace(new RegExp(/[àáâãäå]/g),"a");
    value = value.replace(new RegExp(/[èéêë]/g),"e");
    value = value.replace(new RegExp(/[ìíîï]/g),"i");
    value = value.replace(new RegExp(/[òóôõö]/g),"o");
    value = value.replace(new RegExp(/[ùúûü]/g),"u");

    return value;
  }

  goToPin( pin:any ) {
    console.log(pin);

    // center pin map
    this.latCenter = 0;
    this.lngCenter = 0;
    this.zoomCenter = 0;

    setTimeout(() => {
      this.latCenter = pin.lat;
      this.lngCenter = pin.lng;
      this.zoomCenter = 14;
    }, 200);

    // Input
    this.mapSearchInp = pin.name;
  }

}