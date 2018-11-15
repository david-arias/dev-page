import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var emergence:any;

@Component({
  selector: 'app-careers-home-one',
  templateUrl: './careers-home-one.component.html',
  styleUrls: ['./careers-home-one.component.scss']
})
export class CareersHomeOneComponent implements OnInit, AfterViewInit {

  careers:any = [
    {
      name: "Ingeniería en Innovación y Desarrollo",
      type: "Carreras de Grado", 
      time: "5 años",
      img: "career_1.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: false,
        virtual: true,
      }
    },{
      name: "Licenciatura en Criminología y Seguridad" ,
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_2.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: false,
        virtual: false,
      }
    },{
      name: "Ingeniería en Transportes y Caminos",
      type: "Carreras de Grado", 
      time: "5 años",
      img: "career_3.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: false,
        virtual: true,
      }
    },{
      name: "Licenciatura en Diseño y Animación Digital",
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_4.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: false,
        virtual: true,
      }
    },{
      name: "Licenciatura en Periodismo",
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_5.jpg",
      modalidad: {
        presencial: true,
        semiSede: true,
        semiCentro: false,
        virtual: true,
      }
    },{
      name: "Licenciatura en Ambiente y Energías Renovables",
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_6.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: true,
        virtual: false,
      }
    },{
      name: "Abogacía",
      type: "Carreras de Grado", 
      time: "4 años y medio",
      img: "career_7.jpg",
      modalidad: {
        presencial: true,
        semiSede: true,
        semiCentro: false,
        virtual: true,
      }
    },{
      name: "Contador Público",
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_8.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: true,
        virtual: true,
      }
    },{
      name: "Licenciatura en Administración",
      type: "Carreras de Grado", 
      time: "4 años",
      img: "career_9.jpg",
      modalidad: {
        presencial: true,
        semiSede: true,
        semiCentro: false,
        virtual: false,
      }
    },{
      name: "Licenciatura de gestión de recursos humano",
      type: "Carreras de grado",
      time: "4 años",
      img: "career_10.jpg",
      modalidad: {
        presencial: true,
        semiSede: false,
        semiCentro: true,
        virtual: false,
      }
    },{
      name: "Licenciatura en Higiene, Seguridad Y Medio Ambiente Del Trabajo",
      type: "Carreras de grado",
      time: "4 años",
      img: "career_11.jpg",
      modalidad: {
        presencial: true,
        semiSede: true,
        semiCentro: true,
        virtual: true,
      }
    },{
      name: "Licenciatura en Comercialización (Marketing)",
      type: "Carreras de grado",
      time: "4 años",
      img: "career_12.jpg",
      modalidad: {
        presencial: true,
        semiSede: true,
        semiCentro: true,
        virtual: true,
      }
    }
  ]

  car_presencial: any = [];
  car_presencial_pager: any = [];

  car_semiSede: any = [];
  car_semiSede_pager: any = [];

  car_semiCentro: any = [];
  car_semiCentro_pager: any = [];

  car_virtual: any = [];
  car_virtual_pager: any = [];

  slider:any;
  currSlide:string;

  constructor() {
    this.segmentCareers();
  }

  ngOnInit() {
    this.currSlide = "presencial";
    this.initEmergence();
  }
  
  ngAfterViewInit() {
    this.initSlider();
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence

  
  segmentCareers() {
    for (let i = 0; i < this.careers.length; i++) {
      
      if ( this.careers[i].modalidad.presencial ) {
        this.car_presencial.push(this.careers[i]);
      }

      if ( this.careers[i].modalidad.semiSede ) {
        this.car_semiSede.push(this.careers[i]);
      }

      if ( this.careers[i].modalidad.semiCentro ) {
        this.car_semiCentro.push(this.careers[i]);
      }

      if ( this.careers[i].modalidad.virtual ) {
        this.car_virtual.push(this.careers[i]);
      }
    }

    let presencialItm = Math.ceil(this.car_presencial.length / 4);
    for (let i = 0; i < presencialItm; i++) {
      this.car_presencial_pager.push( i )
    }    
    
    let semiSedeItm =  Math.ceil(this.car_semiSede.length / 4);
    for (let i = 0; i < semiSedeItm; i++) {
      this.car_semiSede_pager.push( i )
    } 

    let semiCentroItm =  Math.ceil(this.car_semiCentro.length / 4);
    for (let i = 0; i < semiCentroItm; i++) {
      this.car_semiCentro_pager.push( i )
    } 

    let virtualItm =  Math.ceil(this.car_virtual.length / 4);
    for (let i = 0; i < virtualItm; i++) {
      this.car_virtual_pager.push( i )
    }     
    
  }

  initSlider() {
    this.slider = $('.slider').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      slideWidth: 340,
      useCss: false,
      pager: false,
      controls: false,
      onSlideAfter: () => {
        let curr = this.slider.getCurrentSlide();
        $(".pagerItem").removeClass("active");
        $(`.pagerItem${curr}`).addClass("active");
      }
    });  
    
    $(".pagerItem").removeClass("active");
    $(".pagerItem0").addClass("active");
  }

  pgrSlide( slideNum:number ) {
    $(".pagerItem").removeClass("active");
    $(`.pagerItem${slideNum}`).addClass("active");
    this.slider.goToSlide( slideNum );
  }

  changeSlide( type:string ) {

    $(".btnTabItem").removeClass("active");
    $(`.btnTab-${type}`).addClass("active");
    this.currSlide = type;

    setTimeout( () => {
      this.initSlider();
    },5)

    
  }

}
