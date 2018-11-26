import { Component, OnInit } from '@angular/core';

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
  zoom:number = 9;

  mapOffset:number = 0.6;
  
  latCenter:number = this.lat; 
  lngCenter:number = this.lng - this.mapOffset;
  zoomCenter:number = this.zoom

  /* markers */
  markers:any = [
      {
        type: "sede",
        lat: -31.323688,
        lng: -64.219615,
        name: "Campus Universitario",
        dir: "Calle De Los Latinos 8555",
        tel: "0810-555-0202",
        mail: "",
      }, {
        type: "centro",
        lat: -31.325898,
        lng: -64.305101,
        name: "CAU PASEO RIVERA INDARTE - CÓRDOBA",
        dir: "Ricardo Rojas 9200",
        tel: "8105550202",
        mail: "andres.tula@ues21.edu.ar",
      }, {
        type: "centro",
        lat: -31.421383, 
        lng: -64.509264,
        name: "CENTRO DE APRENDIZAJE UNIVERSITARIO CARLOS PAZ - VILLA CARLOS PAZ",
        dir: "Quilmes 89",
        tel: "(03541)428343 | (03541)15201111",
        mail: "caucarlospaz@gmail.com",
      }, {
        type: "centro",
        lat: -31.091946,
        lng:  -64.470149,
        name: "CENTRO DE APRENDIZAJE UNIVERSITARIO LA FALDA - LA FALDA",
        dir: "EDEN 1400",
        tel: "543548425522",
        mail: "ues21.lafalda@outlook.com",
      }, {
        type: "centro",
        lat: -30.973698, 
        lng:  -64.098096,
        name: "Jesús María",
        dir: "Palermo 578",
        tel: "543525444552",
        mail: "admisionjm@hotmail.com.ar",
      }, {
        type: "centro",
        lat: -31.150157,
        lng:  -63.410297,
        name: "CENTRO DE APRENDIZAJE UNIVERSITARIO MUTUAL ATLETICO - SANTA ROSA DE RIO PRIMERO",
        dir: "CASEROS 1039",
        tel: "5493574454348",
        mail: "caumutual@hotmail.com",
      }, {
        type: "centro",
        lat: -31.553319,
        lng:  -63.534626,
        name: "CENTRO DE APRENDIZAJE UNIVERSITARIO VILLA DEL ROSARIO - VILLA DEL ROSARIO",
        dir: "Hipolito Yrigoyen 912",
        tel: "543572547099",
        mail: "siglo21villadelrosario@hotmail.com",
      }, {
        type: "centro",
        lat: -31.910360, 
        lng:  -63.688543,
        name: "COOP ELEC DE SERVICIOS Y OBRAS PUBLICAS DE ONCATIVO LTDA - ONCATIVO",
        dir: "25 de Mayo Esq. Colón s/nº",
        tel: "543572457100",
        mail: "informescau@oncativo.net.ar",
      }, {
        type: "centro",
        lat: -31.722916, 
        lng: -65.008179,
        name: "CENTRO DE APRENDIZAJE UNIVERSITARIO MINA CLAVERO - MINA CLAVERO",
        dir: "La Piedad esq. Milac Navira",
        tel: "(03544) 472601 | (03544) 464142 | 560073",
        mail: "cauminaclavero@hotmail.com",
      },
    ]

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
      if( this.selMarkers[i].name.toLowerCase().includes(val)  ) {
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