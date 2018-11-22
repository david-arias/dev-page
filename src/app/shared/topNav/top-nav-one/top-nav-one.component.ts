import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TOPMENU } from '../top-nav.data';

declare var $:any;

@Component({
  selector: 'app-top-nav-one',
  templateUrl: './top-nav-one.component.html',
  styleUrls: ['./top-nav-one.component.scss']
})
export class TopNavOneComponent implements OnInit {

  menuItems:any = TOPMENU;
  
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

  constructor() {
  }

  ngOnInit() {
  }

  // window scroll
  winScroll( evnt:any ) {
    let scrolled = $(window).scrollTop(); 
    
    if ( scrolled >= 200 ) {
      $(".topbar").addClass("scrolled");
    } else {
      $(".topbar").removeClass("scrolled");
    }
  }

  // close menu arrow
  closeMenu() {
    $(".menuLayer .layer").addClass("closing");
    
    setTimeout(() => {
      $(".menuLayer .layer").removeClass("closing");
    }, 400);
  };


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

  mainItemHover( idx:number ) {
    $(`.layer`).hide();
    $(`.layer-${idx}`).show();
  }

}
