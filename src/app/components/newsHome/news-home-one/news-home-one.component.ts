import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

declare var emergence:any;

@Component({
  selector: 'app-news-home-one',
  templateUrl: './news-home-one.component.html',
  styleUrls: ['./news-home-one.component.scss']
})
export class NewsHomeOneComponent implements OnInit {

  news:any = [
    {
      type: "news",
      img: "ciencia21.jpg",
      topTtl: "Noticia",
      time: new Date(2018, 10, 22),
      place: "",
      duration: "",
      mainTtl: "Ciencia 21",
      bodyTxt: "Investigadores, emprendedores y profesionales por el desarrollo social"
    }, {
      type: "event",
      img: "",
      topTtl: "Conferencia",
      time: new Date(2018, 10, 5),
      place: "Teatro Colón, Libertad 621 Buenos Aires",
      duration: "13 Hs - 21 Hs",
      mainTtl: "Ted X Rio de la Plata 2018",
      bodyTxt: ""
    }, {
      type: "event",
      img: "",
      topTtl: "Conferencia",
      time: new Date(2018, 10, 8),
      place: "Centro Universitario Siglo 21 - Buenos Aires Av del Libertador 107",
      duration: "13 Hs - 21 Hs",
      mainTtl: "Mujeres 2030",
      bodyTxt: ""
    }, {
      type: "news",
      img: "campusUrbano.jpg",
      topTtl: "Noticia",
      time: new Date(2018, 10, 22),
      place: "",
      duration: "",
      mainTtl: "Campus Urbano",
      bodyTxt: "Jóvenes por el futuro de las ciudades en Latinoamérica"
    }, {
      type: "blog",
      img: "mapWeb.jpg",
      topTtl: "BLOG | por Emma Muñoz",
      time: "",
      place: "",
      duration: "",
      mainTtl: "",
      bodyTxt: "Un Egresado desarrollo un sistema de infoemación geográfica Web"
    }, {
      type: "event",
      img: "",
      topTtl: "Charlas informativas",
      time: new Date(2018, 10, 9),
      place: "Centro Cultural de la CIencia, CABA Godoy Cruz 2270, Buenos Aires",
      duration: "19 Hs - 20 Hs",
      mainTtl: "Administración de empresas",
      bodyTxt: ""
    }, {
      type: "blog",
      img: "directora.jpg",
      topTtl: "BLOG | Por María Belén Mendé, REctora de la Universidad Siglo 21",
      time: "",
      place: "",
      duration: "",
      mainTtl: "",
      bodyTxt: "La necesidad de asumir los cambios"
    },

    {
      type: "news",
      img: "ciencia21.jpg",
      topTtl: "Noticia",
      time: new Date(2018, 10, 22),
      place: "",
      duration: "",
      mainTtl: "Ciencia 21",
      bodyTxt: "Investigadores, emprendedores y profesionales por el desarrollo social"
    }, {
      type: "event",
      img: "",
      topTtl: "Conferencia",
      time: new Date(2018, 10, 5),
      place: "Teatro Colón, Libertad 621 Buenos Aires",
      duration: "13 Hs - 21 Hs",
      mainTtl: "Ted X Rio de la Plata 2018",
      bodyTxt: ""
    }, {
      type: "event",
      img: "",
      topTtl: "Conferencia",
      time: new Date(2018, 10, 8),
      place: "Centro Universitario Siglo 21 - Buenos Aires Av del Libertador 107",
      duration: "13 Hs - 21 Hs",
      mainTtl: "Mujeres 2030",
      bodyTxt: ""
    }, {
      type: "news",
      img: "campusUrbano.jpg",
      topTtl: "Noticia",
      time: new Date(2018, 10, 22),
      place: "",
      duration: "",
      mainTtl: "Campus Urbano",
      bodyTxt: "Jóvenes por el futuro de las ciudades en Latinoamérica"
    }, {
      type: "blog",
      img: "mapWeb.jpg",
      topTtl: "BLOG | por Emma Muñoz",
      time: "",
      place: "",
      duration: "",
      mainTtl: "",
      bodyTxt: "Un Egresado desarrollo un sistema de infoemación geográfica Web"
    },

  ];

  selItems:any = [];

  masonryOpt:any = {
    // columnWidth: 350
    percentPosition: true,
    columnWidth: '.colItem',
  }

  constructor() {
    this.changeNewsTab( 'all' );
  }
  
  ngOnInit() {
    this.initEmergence();
  }
  ngAfterViewInit() {
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence


  changeNewsTab( type:string ) {

    $(".btnItem").removeClass('active');
    this.selItems = [];
    
    if ( type == 'all') {

      $(".btnItem-all").addClass('active');
      this.selItems = this.news;

    } else if ( type == 'news') {

      $(".btnItem-news").addClass('active');
      for (let i = 0; i < this.news.length; i++) {
        if( this.news[i].type == 'news' ) {
          this.selItems.push( this.news[i] );
        }
      }

    } else if ( type == 'event') {

      $(".btnItem-events").addClass('active');
      for (let i = 0; i < this.news.length; i++) {
        if( this.news[i].type == 'event' ) {
          this.selItems.push( this.news[i] );
        }
      }

    } else if ( type == 'blog') {

      $(".btnItem-blog").addClass('active');
      for (let i = 0; i < this.news.length; i++) {
        if( this.news[i].type == 'blog' ) {
          this.selItems.push( this.news[i] );
        }
      }

    }
  }

}
