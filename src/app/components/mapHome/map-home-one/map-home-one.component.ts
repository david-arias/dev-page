import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/* leaftlet */
import { latLng, tileLayer, marker, icon } from 'leaflet';


declare var $:any;
// declare var L:any;

@Component({
  selector: 'app-map-home-one',
  templateUrl: './map-home-one.component.html',
  styleUrls: ['./map-home-one.component.scss']
})
export class MapHomeOneComponent implements OnInit {

  token:string = "pk.eyJ1IjoiZGF2aWQtYXJpYXMiLCJhIjoiY2puMHVlbDYzMDZvaTN3bzBoem1qYTNrdSJ9.uTB6W7deCpIpTTVmJg48cQ"
  
  lat:number = -31.428519; 
  lng:number = -64.184759;
  zoom:number = 10;
  
  latCenter:number = this.lat; 
  lngCenter:number = this.lng - 1.3;

  mapOptions = {
    layers: [
      tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution: '&copy; OpenStreetMap contributors',
        detectRetina: true,
      })
    ],
    zoom: this.zoom,
    scrollWheelZoom: false,
  };
  mapCenter:any = latLng([0,0]);
  mapZoom:any;
  mapLayers:any = [];

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

  /* search box */
  locatInput = new FormControl();
  options: any[] = [];
  filteredOptions: Observable<any[]>;

  constructor() {

    for (let i = 0; i < this.markers.length; i++) {
      // this.options.push( this.markers[i].name.charAt(0).toUpperCase() + this.markers[i].name.slice(1).toLowerCase() );
      this.options.push( this.markers[i] );
    }

  }

  ngOnInit() {
    // init map
    this.initMap();

    // init filter
    this.filteredOptions = this.locatInput.valueChanges.pipe( startWith(''), map(value => this._filter(value)) );
  }


  /* fitlter string */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  /* initialize map | leaflet - mapbox */
  initMap() {
    this.mapOptions['center'] = latLng([ this.latCenter, this.lngCenter ]);
    this.mapOptions.layers.push(
      marker([ this.lat, this.lng ], {
        icon: icon({
          iconSize: [ 14, 14 ],
          iconAnchor: [ 7, 7 ],
          iconUrl: 'assets/img/map/mapCenter.png',
          shadowUrl: '',
        })
      })
    );
    this.changePins('all');
  }

  /* click action btns */
  changePins( type:string ) {
    $(".mapBtn").removeClass('active');
    $(`.mapBtn-${type}`).addClass('active');

    this.mapLayers = []  
    if ( type == 'all' ) {
      for (let i = 0; i < this.markers.length; i++) { 
        if ( this.markers[i].type == "sede") {
          this.mapLayers.push(
            marker([ this.markers[i].lat, this.markers[i].lng ], {
              icon: icon({
                iconSize: [ 60, 60 ],
                iconAnchor: [ 26, 60 ],
                iconUrl: 'assets/img/map/map_sede.png',
                shadowUrl: 'assets/img/map/map_pinShadow.png',
              })
            }).bindPopup( this.pinPopUp( this.markers[i] ) )
          )
        } else if ( this.markers[i].type == "centro") {
          this.mapLayers.push(
            marker([ this.markers[i].lat, this.markers[i].lng ], {
              icon: icon({
                iconSize: [ 60, 60 ],
                iconAnchor: [ 26, 60 ],
                iconUrl: 'assets/img/map/map_centro.png',
                shadowUrl: 'assets/img/map/map_pinShadow.png',
              })
            }).bindPopup( this.pinPopUp( this.markers[i] ) )
          )
        }
      }
    } else if ( type == 'sedes' ) {
      for (let i = 0; i < this.markers.length; i++) { 
        if ( this.markers[i].type == "sede") {
          this.mapLayers.push(
            marker([ this.markers[i].lat, this.markers[i].lng ], {
              icon: icon({
                iconSize: [ 60, 60 ],
                iconAnchor: [ 26, 60 ],
                iconUrl: 'assets/img/map/map_sede.png',
                shadowUrl: 'assets/img/map/map_pinShadow.png',
              })
            }).bindPopup( this.pinPopUp( this.markers[i] ) )
          )
        }   
      }
    } else if ( type == 'centros' ) {
      for (let i = 0; i < this.markers.length; i++) { 
        if ( this.markers[i].type == "centro") {
          this.mapLayers.push(
            marker([ this.markers[i].lat, this.markers[i].lng ], {
              icon: icon({
                iconSize: [ 60, 60 ],
                iconAnchor: [ 26, 60 ],
                iconUrl: 'assets/img/map/map_centro.png',
                shadowUrl: 'assets/img/map/map_pinShadow.png',
              })
            }).bindPopup( this.pinPopUp( this.markers[i] ) )
          )
        }   
      }
    }

  }

  pinPopUp( mark:string ) {
    let icon;
    if ( mark['type'] == "sede") {
      icon = '<i class="icm icm-sedePin"></i>';
    } else if ( mark['type'] == "centro") {
      icon = '<i class="icm icm-centrosPin"></i>';
    }
    let name =  mark['name'].charAt(0).toUpperCase() + mark['name'].slice(1).toLowerCase();
    let type;
    if ( mark['type'] == "sede") {
      type = '<span >Sede Principal</span>';
    } else if ( mark['type'] == "centro") {
      type = '<span >CSU - Centro de Servicio Universitario</span>';
    }
    let dir =  mark['dir'].charAt(0).toUpperCase() + mark['dir'].slice(1).toLowerCase();
    let tel =  mark['tel'];

    let popCont = `
    <div class="autoCont">
      <div class="icon"> ${icon} </div>
      <div class="text">
        <div class="name"> ${name} </div>
        <div class="type"> ${type} </div>
        <div class="dis">${dir}</div>
        <div class="tel">${tel}</div>
      </div>
    </div>
    `;
    return popCont;
  }
  
  centerMap() {
    this.mapCenter = latLng([ this.latCenter, this.lngCenter ]);
    this.mapZoom = this.zoom;
  }


  searchLocation() {
    
    for (let i = 0; i < this.markers.length; i++) {
      if ( this.markers[i].name.toLowerCase() == this.locatInput.value.toLowerCase() ) {

        this.mapCenter = latLng([ this.markers[i].lat , (this.markers[i].lng - 0.005) ]);
        this.mapZoom = 16;
      }
    }
  }

}
