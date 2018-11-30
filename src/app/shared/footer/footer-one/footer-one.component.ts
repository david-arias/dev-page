import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class FooterOneComponent implements OnInit {

  w:any;

  favOpen:boolean = false;

  footerLinks:any = [
    {
      label: 'Programas y carreras',
      link: '#',
      children: [
        {
          label: 'Áreas de estudio',
          link: '#'
        }, {
          label: 'Según tipos de estudio',
          link: '#'
        }, {
          label: 'Modalidades',
          link: '#'
        }
      ]
    }, {
      label: 'Admisión',
      link: '#',
      children: [
        {
          label: 'Charlas informativas',
          link: '#'
        }, {
          label: 'Cursos de nivelación',
          link: '#'
        }, {
          label: 'Equivalencias',
          link: '#'
        }, {
          label: 'Paso a paso para ingresar',
          link: '#'
        }
      ]
    }, {
      label: 'La universidad',
      link: '#',
      children: [
        {
          label: 'Sobre la Siglo 21',
          link: '#'
        }, {
          label: 'Vida universitaría',
          link: '#'
        }, {
          label: 'Novedades',
          link: '#'
        }, {
          label: 'Contacto',
          link: '#'
        }
      ]
    }, {
      label: 'Servicios',
      link: '#',
      children: [
        {
          label: 'Biblioteca',
          link: '#'
        }, {
          label: 'Campus virtual',
          link: '#'
        }, {
          label: 'Trabajar en Siglo 21',
          link: '#'
        }
      ]
    }
  ]

  footerSocial:any = [
    {
      label: "Facebook",
      icon: "icm-socialFb",
      link: "#"
    }, {
      label: "Twitter",
      icon: "icm-socialTw",
      link: "#"
    }, {
      label: "Youtube",
      icon: "icm-socialYt",
      link: "#"
    }, {
      label: "Instagram",
      icon: "icm-socialIn",
      link: "#"
    }, {
      label: "Google Plus",
      icon: "icm-socialGp",
      link: "#"
    }, {
      label: "LinkedIn",
      icon: "icm-socialLi",
      link: "#"
    }, {
      label: "Pinterest",
      icon: "icm-socialPn",
      link: "#"
    }
  ]

  constructor() {
    this.w = window.innerWidth;
  }

  ngOnInit() {
  }

  onResize(event) {
    this.w = event.target.innerWidth;
  }

  openFavBtn() {
    $("body").toggleClass("noScroll");
    
    this.favOpen = !this.favOpen;
  }
  
  openleadSm() {
    this.favOpen = false;
    $("body").addClass("leadSmOpen");
  }
  closeleadSm() {
    $("body").removeClass("leadSmOpen");
  }

}
