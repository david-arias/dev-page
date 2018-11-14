import { Component, OnInit, AfterViewInit } from '@angular/core';

// jQuery
declare var $ :any;
// parallax-js
declare var Parallax:any;


@Component({
  selector: 'app-main-home-banner-one',
  templateUrl: './main-home-banner-one.component.html',
  styleUrls: ['./main-home-banner-one.component.scss']
})
export class MainHomeBannerOneComponent implements OnInit, AfterViewInit {

  sliderContent:any = [
    {
      type: "mouseParallax",
      class: "dark",
      bgImgs: [
        {
          src: "assets/img/mainBanner/bg_mainBnnr_1.jpg",
          depth: "0",
        }, {
          src: "assets/img/mainBanner/bg_mainBnnrTop_1.png",
          depth: "0.3",
        }
      ],
      bnnrText: [
        {
          hasSearch: true,
          title: "Inscripciones abiertas",
          subtitle: "Ingreso 2019",
          body: "Conseguí un 15 % de descuento si te inscribís antes del 31 de Octubre del 2018",
          bnnrBtn: [
            {
              type: "fill",
              btntext: "iniciar experiencia",
              icon: "",
            }, {
              type: "clear",
              btntext: "Ver video",
              icon: "rgtArrow",
            }
          ]
        }
      ]      
    }, {
      type: "basic",
      class: "dark",
      bgImgs: [
        {
          src: "assets/img/mainBanner/bg_mainBnnr_2.jpg",
          depth: "0",
        }
      ],
      bnnrText: [
        {
          hasSearch: true,
          title: "6 Nuevas carreras",
          subtitle: "Profesionales del futuro",
          body: "Formate en Transportes y Caminos, Innovación y Desarrollo, Criminología y seguridad",
          bnnrBtn: [
            {
              type: "fill",
              btntext: "Obtené una beca",
              icon: "",
            }
          ]
        }
      ]      
    }, {
      type: "scrollParallax", 
      class: "light",
      bgImgs: [
        {
          src: "assets/img/mainBanner/bg_mainBnnr_3.jpg",
          depth: "0",
        },{
          src: "assets/img/mainBanner/bg_mainBnnrMid_3.png",
          depth: "0.3",
        },{
          src: "assets/img/mainBanner/bg_mainBnnrTop_3.png",
          depth: "0.6",
        }
      ],
      bnnrText: [
        {
          hasSearch: false,
          title: "Certificate con el MIT",
          subtitle: "Internet of things",
          body: "Obtené una certificación del Computer Science and Artificial Intelligence Laboratory en acuerdo con Ilumno y Siglo 21",
          bnnrBtn: [
            {
              type: "fill",
              btntext: "Conocé más",
              icon: "",
            }
          ]
        }
      ]      
    },
  ];

  // banner info
  bnnrInfoActive:boolean = true;
  bnnrInfo:any = {
    class: this.sliderContent[0].class,
    hasSearch: this.sliderContent[0].bnnrText[0].hasSearch,
    title: this.sliderContent[0].bnnrText[0].title,
    subtitle: this.sliderContent[0].bnnrText[0].subtitle,
    body: this.sliderContent[0].bnnrText[0].body,
    bnnrBtn: this.sliderContent[0].bnnrText[0].bnnrBtn,
  };

  // search select
  levelsSel:string = "all";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //init slide
    this.parallaxBg();
    this.sliderChangeMouseDown();

    // set slide to 0
    $(".carItm0").addClass( "active" );
    $(".pagerItm-0").addClass( "active" );
  }

  /* PARALLAX BACKGROUND */
  parallaxBg() {
    for (let i = 0; i < this.sliderContent.length; i++) {

      if ( this.sliderContent[i].type == 'mouseParallax') {
        const element = this.sliderContent[i];
        let scene = document.getElementById( `bannrSlider${i}` );
        let parallaxInstance = new Parallax(scene);
      }

    }
  }

  // SWIPE SLIDER ACTION
  sliderChangeMouseDown( ) {

    // swipe action
    $(".mainBnnrSlider").swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
      }
    });

    // change slide info
    this.sliderChange();
    
  }

  sliderChange () {

    /* change slider before */
    $(".mainBnnrSlider").bind('slide.bs.carousel', () => {
      this.bnnrInfoActive = false;      
    });

    /* change slider after */
    $(".mainBnnrSlider").bind('slid.bs.carousel', () => {
      let curr = $('#mainBnnrSlider .active').index() ;

      $('.pagerItm').removeClass('active');
      $(`.pagerItm-${curr}`).addClass('active');

      this.bnnrInfo = {
        class: this.sliderContent[curr].class,
        hasSearch: this.sliderContent[curr].bnnrText[0].hasSearch,
        title: this.sliderContent[curr].bnnrText[0].title,
        subtitle: this.sliderContent[curr].bnnrText[0].subtitle,
        body: this.sliderContent[curr].bnnrText[0].body,
        bnnrBtn: this.sliderContent[curr].bnnrText[0].bnnrBtn,
      } 
      this.bnnrInfoActive = true;
    });

  }
  // pager
  pagerSlide( num:number ) {

    $('.pagerItm').removeClass('active');
    $(`.pagerItm-${num}`).addClass('active');
    
    $(".mainBnnrSlider").carousel( num )
  }

  // Scroll window parallax 
  bnnrScroll( evnt:any ) {
    let h = $(window).innerHeight();
    let scrolled = $(window).scrollTop(); 
    
    if ( scrolled <= h ) {
      $(`.scllParLyr1`).css('top',(0-(scrolled*.5))+'px');
      $(`.scllParLyr2`).css('top',(0+(scrolled*.5))+'px');
    }
  }

}