import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-testimonial-one',
  templateUrl: './testimonial-one.component.html',
  styleUrls: ['./testimonial-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class TestimonialOneComponent implements OnInit, AfterViewInit {

  w:any;

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
  sliderItem_width:number = 470;
  slider_pager:any = [];

  sliderOptions:any = {};

  arrowsView:boolean = true;

  constructor() {
  }
  
  ngOnInit() {
    this.w = window.innerWidth;
    this.reAsignVars( this.w );
  }
  ngAfterViewInit() {
    this.initSlider();
  }

  /* * * */
  reAsignVars( width:number ) {

    if ( this.w <= 766 ) {

      this.arrowsView = false;
      this.sliderMaxItems_count = 1;
      this.sliderItem_width = 0;
      
    } else if ( this.w <= 769 ) {

      this.arrowsView = true;
      this.sliderMaxItems_count = 2;
      this.sliderItem_width = 300;
      
    } else if ( this.w <= 1028 ) {

      this.arrowsView = true;
      this.sliderMaxItems_count = 2;
      this.sliderItem_width = 400;
      
    } else {

      this.arrowsView = true;
      this.sliderMaxItems_count = 2;
      this.sliderItem_width = 470;

    }

    this.sliderOptions = {
      pager: false,
      controls: false,
      infiniteLoop: false,
      minSlides: 1,
      maxSlides: this.sliderMaxItems_count,
      slideWidth: this.sliderItem_width,
      onSliderLoad: () => {
        this.sliderChanges();
      },
      onSlideAfter: () => {
        this.sliderChanges();
      }, 
      onSliderResize: () => {
        this.sliderReload();
      }
    }

  }
  /* * * */
  onResize(event) {
    this.w = event.target.innerWidth;
    this.reAsignVars( this.w );
  }
  /* * * */

  initSlider() {
    this.slider =  $('.slider-testimonial').bxSlider(
      this.sliderOptions,
    );
    
    this.sliderPager()
  }

  sliderPager() {
    this.slider_pager = [];
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

  sliderReload() {
    this.reAsignVars( this.w );
    this.slider.reloadSlider(
      this.sliderOptions,
    );
    this.sliderPager();
    console.log("resized!!");
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
