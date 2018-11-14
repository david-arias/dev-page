import { Component, OnInit, AfterViewInit } from '@angular/core';

// jQuery
declare var $ :any;


@Component({
  selector: 'app-regular-banner-one',
  templateUrl: './regular-banner-one.component.html',
  styleUrls: ['./regular-banner-one.component.scss']
})
export class RegularBannerOneComponent implements OnInit, AfterViewInit {

  regSliderCont:any = [
    {
      img: "regBnnr_1.jpg",
      label: "Innovación",
      ttl: "La educación evoluciona",
      body: "Con acento en la práctica profesional y la innovación, se desarrolló Experimenta 21: un edificio de 1400 m2, en el que se concentran tecnologías al servicio del desarrollo de estrategias para la formación de los alumnos y la generación de proyectos que los preparen para la realidad profesional.",
      btn: [
        {
          label: "Conocé más",
          style: "fill"
        }
      ]
    }, {
      img: "regBnnr_2.jpg",
      label: "01 - Innovación",
      ttl: "La educación evoluciona",
      body: "Con acento en la práctica profesional y la innovación, se desarrolló Experimenta 21: un edificio de 1400 m2, en el que se concentran tecnologías al servicio del desarrollo de estrategias para la formación de los alumnos y la generación de proyectos que los preparen para la realidad profesional.",
      btn: [
        {
          label: "Conocé más",
          style: "fill"
        }
      ]
    }, {
      img: "regBnnr_3.jpg",
      label: "02 - Innovación",
      ttl: "La educación evoluciona",
      body: "Con acento en la práctica profesional y la innovación, se desarrolló Experimenta 21: un edificio de 1400 m2, en el que se concentran tecnologías al servicio del desarrollo de estrategias para la formación de los alumnos y la generación de proyectos que los preparen para la realidad profesional.",
      btn: [
        {
          label: "Conocé más",
          style: "fill"
        }
      ]
    }
  ]

  regBnnrInfoActive:boolean = true;
  regBnnrInfo:any = {
    label: this.regSliderCont[0].label,
    ttl: this.regSliderCont[0].ttl,
    body: this.regSliderCont[0].body,
    btn: this.regSliderCont[0].btn
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //init slide
    this.sliderChangeMouseDown();

    // set slide to 0
    $(".carRegItm-0").addClass("active");
    $(".pageRegitem-0").addClass("active");

  }

  // SWIPE SLIDER ACTION
  sliderChangeMouseDown( ) {

    // swipe action
    $(".regBnnrSlider").swipe({
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
    $(".regBnnrSlider").bind('slide.bs.carousel', () => {
      this.regBnnrInfoActive = false;
    });
    
    /* change slider after */
    $(".regBnnrSlider").bind('slid.bs.carousel', () => {
      let curr = $('#regBnnrSlider .active').index() ;      

      $('.pageRegitem').removeClass('active');
      $(`.pageRegitem-${curr}`).addClass('active');

      this.regBnnrInfo = {
        label: this.regSliderCont[curr].label,
        ttl: this.regSliderCont[curr].ttl,
        body: this.regSliderCont[curr].body,
        btn: this.regSliderCont[curr].btn
      }

      this.regBnnrInfoActive = true;
      
    });

  }

  // pager
  pagerSlide( num:number ) {

    $('.pageRegitem').removeClass('active');
    $(`.pageRegitem-${num}`).addClass('active');
    
    $(".regBnnrSlider").carousel( num )
  }
  // arrows
  arrowChangeSlide( side:string ) {
    if ( side == 'prev') {
      $(".regBnnrSlider").carousel('prev');
    } else if ( side == 'next') {
      $(".regBnnrSlider").carousel('next');
    }
  }

}
