import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-testimonial-one',
  templateUrl: './testimonial-one.component.html',
  styleUrls: ['./testimonial-one.component.scss']
})
export class TestimonialOneComponent implements OnInit, AfterViewInit {

  testimonialItems:any = [
    {
      photo: "avatar1.jpg",
      name: "Evelin Rigonat",
      position: "Gerente RRHH Tulum Resorts",
      text: 'La Universidad y la carrera forjaron las bases profesionales para llegar al día de hoy. “Aprendo cada día de la cultura del país, intentando dar lo mejor de mí”...'
    },{
      photo: "avatar2.jpg",
      name: "Joaquín García",
      position: "Diseñador Industrial  Walt Disney.",
      text: '“ Los productos en los que trabajo se venden en más de 80 países en cantidades que muchas veces superan los millones de unidades”...'
    },{
      photo: "avatar3.jpg",
      name: "Santiago Petrone",
      position: "UX Developer",
      text: '“Me parece increíblemente fascinante encontrarme de repente en reuniones de trabajo online donde los integrantes están repartidos a lo largo de tres continentes y cuentan con tres o cuatro husos horarios distintos”'
    },{
      photo: "avatar1.jpg",
      name: "Evelin Rigonat",
      position: "Gerente RRHH Tulum Resorts",
      text: 'La Universidad y la carrera forjaron las bases profesionales para llegar al día de hoy. “Aprendo cada día de la cultura del país, intentando dar lo mejor de mí”...'
    },{
      photo: "avatar2.jpg",
      name: "Joaquín García",
      position: "Diseñador Industrial  Walt Disney.",
      text: '“ Los productos en los que trabajo se venden en más de 80 países en cantidades que muchas veces superan los millones de unidades”...'
    },{
      photo: "avatar3.jpg",
      name: "Santiago Petrone",
      position: "UX Developer",
      text: '“Me parece increíblemente fascinante encontrarme de repente en reuniones de trabajo online donde los integrantes están repartidos a lo largo de tres continentes y cuentan con tres o cuatro husos horarios distintos”'
    }
  ]

  slider:any;
  sliderMaxItems_count:number = 2;
  slider_pager:any = [];

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    this.slider =  $('.slider-testimonial').bxSlider({
      pager: false,
      controls: false,
      infiniteLoop: false,
      minSlides: 1,
      maxSlides: this.sliderMaxItems_count,
      slideWidth: 470,
      onSliderLoad: () => {
        this.sliderChanges();
      },
      onSlideAfter: () => {
        this.sliderChanges();
      }
    });
    
    for (let i = 0; i < this.testimonialItems.length / this.sliderMaxItems_count ; i++) {
      this.slider_pager.push( i )
    }

  }

  sliderChanges () {
    let total = (this.slider.getSlideCount() / this.sliderMaxItems_count) - 1;
    let curr = this.slider.getCurrentSlide();

    if ( curr == 0 ) {
      $(".prevArrow button").fadeIn();
      $(".nextArrow button").hide();
    } else if ( curr == total ) {
      $(".prevArrow button").hide();
      $(".nextArrow button").fadeIn();
    } else {
      $(".prevArrow button").hide();
      $(".nextArrow button").hide();
    }

    $(".pagerBtn_testi").removeClass('active');
    $(`.pagerBtn_testi-${curr}`).addClass('active');
  }

  chngSlider( side:string ) {
    if ( side == 'prev' ) {
      this.slider.goToPrevSlide()
    } else if ( side == 'next' ) {
      this.slider.goToNextSlide()
    } 
  }

  pagerBtn( num:number ) {
    $(".pagerBtn_testi").removeClass('active');
    $(`.pagerBtn_testi-${num}`).addClass('active');

    this.slider.goToSlide(num);
  }

}
