import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alliances-one',
  templateUrl: './alliances-one.component.html',
  styleUrls: ['./alliances-one.component.scss']
})
export class AlliancesOneComponent implements OnInit {

  alliancesItems:any = [
    {
      img: "coneau.png",
      alt: "coneau"
    }, {
      img: "cladea.png",
      alt: "cladea"
    }, {
      img: "aacsb.png",
      alt: "aacsb"
    }, {
      img: "dnvgl.png",
      alt: "aacsb"
    }, {
      img: "recla.png",
      alt: "recla"
    }, {
      img: "barca.png",
      alt: "barca"
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
