import { Component, OnInit } from '@angular/core';

declare var emergence:any;
declare var $:any;

@Component({
  selector: 'app-stats-home-one',
  templateUrl: './stats-home-one.component.html',
  styleUrls: ['./stats-home-one.component.scss']
})
export class StatsHomeOneComponent implements OnInit {

  bgCampus:string = "assets/img/campusBg.jpg";

  facts:any = [
    {
      icon: 'icm-student',
      mainStat: '61<small>mil</small>',
      bottomStat: 'Estudiantes',
    }, {
      icon: 'icm-centro',
      mainStat: '300',
      bottomStat: 'Centros de servicio al estudiante',
    }, {
      icon: 'icm-uni',
      mainStat: '24',
      bottomStat: 'Años de trayectoria ',
    }, {
      icon: 'icm-career',
      mainStat: '40',
      bottomStat: 'Carreras',
    }
  ]

  // video vars
  YT: any;
  video:string;
  player: any;

  ytAPI_Src:string = "https://www.youtube.com/iframe_api";

  constructor() { }

  ngOnInit() {
    this.initEmergence();

    this.initVideo();
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence

  // open modal
  openVideo() {
    $(".vidBtnWrap").addClass('openVidAnim');
    
    setTimeout(() => {
      $(".vidBtnWrap").addClass('openedVid');
    }, 700);
    setTimeout(() => {
      $(".vidWrapCont").fadeIn();
    }, 1000);
    setTimeout(() => {
      this.player.playVideo();
    }, 1200);
  }
  closeVid() {
    this.player.stopVideo();
    $(".vidWrapCont").hide();
    $(".vidBtnWrap").removeClass('openVidAnim openedVid');
  }

  // init video
  initVideo () {
    let tag = document.createElement('script');
    tag.src = this.ytAPI_Src;
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.video = 'auW6lm0X3zE';

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];

      this.player = new window['YT'].Player('player', {
        videoId: this.video,
        suggestedQuality: 'dafault',
        playerVars: {
          'autoplay': 0,
          'showinfo': 1,
          'controls': 1,
          'iv_load_policy': 3,
          'rel': 0
        },
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            // console.log( 'vid on Ready' );
          }
        }
      });
      // console.log( 'init api video' );
    }
  }

  onPlayerStateChange() {
    // console.log( 'vid state change' );
  }
  onPlayerError() {
    // console.log( 'vid error' ); 
  }



}
