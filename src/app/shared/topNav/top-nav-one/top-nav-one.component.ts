import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-top-nav-one',
  templateUrl: './top-nav-one.component.html',
  styleUrls: ['./top-nav-one.component.scss']
})
export class TopNavOneComponent implements OnInit {

  menuItems:any = [
    {
      label: "Programas y carreras",
      link: "#",
      topLinks: [
        {
          label: "Encontrá",
          link: "#",
          children: [
            {
              label: "Todos los programas y carreras",
              link: "#",
            }
          ]
        }
      ],
      childen: [
        {
          label: "Áreas de estudio",
          link: "#",
          children: [
            {
              label: "Derecho y Ciencias Sociales",
              link: "#",
            }, {
              label: "Diseño y Comunicación",
              link: "#",
            }, {
              label: "Educación y Psicología",
              link: "#",
            }, {
              label: "Ingenieria y Sistemas",
              link: "#",
            }, {
              label: "Management y Finanzas",
              link: "#",
            }, {
              label: "Sustentabilidad y Agro",
              link: "#",
            }, {
              label: "Turismo y Hotelería",
              link: "#",
            }

          ]
        }, {
          label: "Tipos de estudio",
          link: "#",
          children: [
            {
              label: "Carreras de Pregrado",
              link: "#",
            }, {
              label: "Carreras de Grado",
              link: "#",
            }, {
              label: "Certificación Internacional",
              link: "#",
            }, {
              label: "Cloud 21: formación continua 100% online",
              link: "#",
            }, {
              label: "Diplomaturas y Certificados",
              link: "#",
            }, {
              label: "Posgrados (Maestrías y Especializaciones)",
              link: "#",
            }, {
              label: "Seminarios y Workshops",
              link: "#",
            }
          ]
        }, {
          label: "Modalidades",
          link: "#",
          children: [
            {
              label: "Presencial",
              link: "#",
            }, {
              label: "Semi - Presencial Sedes",
              link: "#",
            }, {
              label: "Semi - Presencial Centros",
              link: "#",
            }, {
              label: "Distancia",
              link: "#",
            }
          ]
        }
      ],
    }, {
      label: "Admisión",
      link: "#",
      topLinks: [],
      childen: [
        {
          label: "Información",
          link: "#",
          children: [
            {
              label: "Charlas Informativas",
              link: "#",
            }, {
              label: "Visitas a colegios",
              link: "#",
            }, {
              label: "¿Cómo elegir una carrera?",
              link: "#",
            }
          ]
        },{
          label: "Ingreso e Inscripción",
          link: "#",
          children: [
            {
              label: "Curso de Nivelación",
              link: "#",
            },{
              label: "Equivalencias",
              link: "#",
            },{
              label: "Paso a paso para Ingresar",
              link: "#",
            }
          ]
        },{
          label: "Becas Beneficios y Pagos",
          link: "#",
          children: [
            {
              label: "Becas",
              link: "#",
            },{
              label: "Beneficios y promociones",
              link: "#",
            },{
              label: "Financiación y medios de pago",
              link: "#",
            }
          ]
        }
      ],
    }, {
      label: "Modalidades",
      link: "#",
      topLinks: [],
      childen: [
        {
          label: "Presenciales",
          link: "#",
          children: [
            {
              label: "Modalidad Presencial",
              link: "#",
            },{
              label: "Modalidad Presencial Home",
              link: "#",
            }
          ]
        },{
          label: "Online",
          link: "#",
          children: [
            {
              label: "Educación Distribuida",
              link: "#",
            }, {
              label: "Distribuida Home (Distancia)",
              link: "#",
            }, {
              label: "Formación Continua y Posgrado",
              link: "#",
            }
          ]
        },{
          label: "Sobre la Educación Online",
          link: "#",
          children: [
            {
              label: "Consejos para estudiar online",
              link: "#",
            }, {
              label: "Ventajas de estudiar online",
              link: "#",
            }
          ]
        }
      ],
    }, {
      label: "La universidad",
      link: "#",
      topLinks: [],
      childen: [
        {
          label: "Sobre la Siglo 21",
          link: "#",
          children: [
            {
              label: "Historia y valores",
              link: "#",
            }, {
              label: "Autoridades",
              link: "#",
            }, {
              label: "Alianzas Internacionales",
              link: "#",
            }, {
              label: "Institutos y Centros de Excelencia",
              link: "#",
            }, {
              label: "Innovación",
              link: "#",
            }, {
              label: "Investigación",
              link: "#",
            }, {
              label: "Acreditaciones y reconocimientos",
              link: "#",
            }, {
              label: "Escuela de Negocios y Posgrados",
              link: "#",
            }, {
              label: "Dónde estudiar",
              link: "#",
            }, {
              label: "Trabajar en Siglo 21",
              link: "#",
            }
          ]
        },{
          label: "Vida Universitaria",
          link: "#",
          children: [
            {
              label: "Vida 21",
              link: "#",
            }, {
              label: "Intercambio Internacional",
              link: "#",
            }, {
              label: "Empleabilidad",
              link: "#",
            }, {
              label: "Campus",
              link: "#",
            }, {
              label: "Emprendimiento",
              link: "#",
            }, {
              label: "Práctica solidaria y voluntariado",
              link: "#",
            }
          ]
        },{
          label: "Novedades",
          link: "#",
          children: [
            {
              label: "Blog Identidad 21",
              link: "#",
            }, {
              label: "Eventos",
              link: "#",
            }, {
              label: "Sala de Prensa Virtual",
              link: "#",
            }
          ]
        }
      ],
    }
  ]
  
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
    $(".lft .menuItems").hide();
    $(".topbar").addClass('searchShow');
    $('#searchInput').focus();
  }
  closeMainSearch() {
    $('.searchList').hide();
    setTimeout(() => {
      $(".lft .menuItems").fadeIn();
    }, 200);
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


}
