import { Component, OnInit } from '@angular/core';

declare var emergence:any;

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


  constructor() { }

  ngOnInit() {
    this.initEmergence();
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence

}
