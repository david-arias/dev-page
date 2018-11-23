import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TOPMENU } from '../top-nav.data';

declare var $:any;

@Component({
  selector: 'app-top-nav-two',
  templateUrl: './top-nav-two.component.html',
  styleUrls: ['./top-nav-two.component.scss']
})
export class TopNavTwoComponent implements OnInit, AfterViewInit {

  menuItems:any = TOPMENU;
  menuSubCol:any = [];
  menuSubSecCol:any = [];
  
  searchInput = new FormControl();
  searchList:any = [
    {
      label: "DIPLOMATURA AVANZADA EN MARKETING DIGITAL Y SOCIAL MEDIA - SMART",
      link: "#",
      category: "Diseño y Comunicación",
    }, {
      label: "LICENCIATURA EN DISEÑO Y ANIMACIÓN DIGITAL",
      link: "#",
      category: "Diseño y Comunicación",
    }, {
      label: "LICENCIATURA EN PERIODISMO",
      link: "#",
      category: "Diseño y Comunicación",
    }, {
      label: "LICENCIATURA EN CRIMINOLOGÍA Y SEGURIDAD",
      link: "#",
      category: "Derecho y Ciencias Sociales",
    }, {
      label: "DIPLOMATURA EN COMPLIANCE, PREVENCIÓN DE CORRUPCIÓN Y LAVADO DE ACTIVOS",
      link: "#",
      category: "Derecho y Ciencias Sociales",
    }, {
      label: "CURSO DE INTRODUCCIÓN AL DERECHO DEPORTIVO",
      link: "#",
      category: "Derecho y Ciencias Sociales",
    }, {
      label: "CERTIFICADO EN PSICOLOGÍA DEL DEPORTE PARA EL DESARROLLO DE ATLETAS",
      link: "#",
      category: "Educación y psicología",
    }, {
      label: "CERTIFICADO EN PSICOLOGÍA DE ALTO RENDIMIENTO DEPORTIVO",
      link: "#",
      category: "Educación y psicología",
    }, {
      label: "CERTIFICADO EN MÉDICO DE EQUIPO",
      link: "#",
      category: "Educación y psicología",
    }
  ];
  searchResults:any = [];


  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // this.mainItemHover( 0 )
  }
  
  // hover events
  mainItemHover( idx:number ) {
    $(".midItems").removeClass('active');
    $(".midItems-0").addClass('active');
    $(".midSecItems").removeClass('active');
    $(".midSecItems-0").addClass('active');
    
    this.menuSubCol = [];
    this.menuSubCol = this.menuItems[idx].children[0];
    this.menuSubSecCol = [];
    this.menuSubSecCol = this.menuSubCol.children[0].children;

    $(`.layer`).hide();
    $(`.layer-${idx}`).show();

    // console.log( idx, this.menuSubCol );
  }
  subItemHover( idx:number, idxSec:number ) {
    $(".midItems").removeClass('active');
    $(`.midItems-${idxSec}`).addClass('active');
    this.menuSubSecCol = [];
    this.menuSubCol = this.menuItems[idx].children[idxSec];
    // console.log( idx, idxSec, this.menuSubCol );
  }
  subSecItemHover( idx:number ) {
    $(".midSecItems").removeClass('active');
    $(`.midSecItems-${idx}`).addClass('active');
    this.menuSubSecCol = this.menuSubCol.children[idx].children;
    // console.log( idx, this.menuSubSecCol );
  }

  // window scroll
  winScroll( evnt:any ) {
    let scrolled = $(window).scrollTop();
    let w = window.innerWidth;

    if ( w >= 640 ) {
      if ( scrolled >= 200 ) {
        $(".topbar").addClass("scrolled");
      } else {
        $(".topbar").removeClass("scrolled");
      }
    } else {
      if ( scrolled >= 100 ) {
        $(".topbar").addClass("scrolled");
      } else {
        $(".topbar").removeClass("scrolled");
      }
    }
  }

  // search Main bar
  mainSearch() {
    $(".searchLabel").fadeIn();
    $(".topbar").addClass('searchShow');
    $('#searchInput').focus();
  }
  closeMainSearch() {
    $('.searchList').hide();
    $(".searchLabel").hide();
    $(".topbar").removeClass('searchShow');
  }

  searchQuery( evnt:any ) {

    $('.searchList').fadeIn();

    let val = evnt.target.value;
    let cats = [];

    this.searchResults = [];
    // segment categories
    for (let i = 0; i < this.searchList.length; i++) {
      if( this.searchList[i].label.toLowerCase().includes(val)  ) {

        let catName = this.searchList[i].category;
        if ( cats.indexOf( catName ) === -1 ) {
          cats.push(catName);
        }
      }
    }
    
    for (let c = 0; c < cats.length; c++) {
      let singleCat = {
        cat: "",
        items: []
      };

      for (let i = 0; i < this.searchList.length; i++) {
        if( this.searchList[i].label.toLowerCase().includes(val)  ) {
          if ( this.searchList[i].category == cats[c] ) {
            singleCat['cat'] = this.searchList[i].category;
            singleCat['items'].push(this.searchList[i]);
          }
        }
      }
      this.searchResults.push(singleCat);
    }

    if (evnt.target.value == "") {
      $('.searchList').hide();
    }
  }

  // close menu arrow
  closeMenu() {
    $(".menuLayer .layer").addClass("closing");
    
    setTimeout(() => {
      $(".menuLayer .layer").removeClass("closing");
    }, 400);
  };

}
