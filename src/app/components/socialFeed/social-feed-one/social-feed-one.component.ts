import { Component, OnInit, AfterContentInit } from '@angular/core';

// services
import { JuicerApiService } from '../../../services/juicer-api.service';


declare var emergence:any;

@Component({
  selector: 'app-social-feed-one',
  templateUrl: './social-feed-one.component.html',
  styleUrls: ['./social-feed-one.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SocialFeedOneComponent implements OnInit, AfterContentInit {

  w:any;
  // totalPost:number = 11;
  // totalCols:number = 4;

  allPostFeed:any = [];
  allPostFilters:any = [];

  viewPostFeed:any = [];
  perPost:number = 10;
  totalPost:number;

  today:Date = new Date();

  viewedFeed:boolean = false;
  loaderFeed:boolean = false;


  constructor( public _juicer:JuicerApiService ) {
    this.w = window.innerWidth;
    if ( this.w <= 766 ) {
      this.perPost = 3;
    } else {
      this.perPost = 10;
    }
    this.totalPost = this.perPost;
    
  }
  
  ngOnInit() {
    this.initEmergence();
    
    // get posts
    this.getAllPosts();
    this.getFeedPost( '' );
  }
  ngAfterContentInit() {
  }

  // emmergence
  initEmergence() {
    emergence.init({
      reset: false,
      throttle: 80,
    });
  }
  // END emmergence
  
  onResize(event) {
    this.w = event.target.innerWidth;
    if ( this.w <= 766 ) {
      this.perPost = 3;
    } else {
      this.perPost = 10;
    }
    this.totalPost = this.perPost;
    // this.colRedistribute(this.w);
  }

  // GET POSTS
  // all
  getAllPosts() {
    this._juicer.getFeeds("").subscribe(all => {
      this.allPostFilters = all.sources;
      // console.log( this.allPostFilters );
    })
  }

  getFeedPost( query:string ) {

    this._juicer.getFeeds(query).subscribe( posts => {
      this.viewPostFeed = posts.posts;
      // console.log( this.viewPostFeed );
    })

  }

  getFeedFilter( filter:string ) {
    this.viewPostFeed = [];
    this.loaderFeed = true;
    this.viewedFeed = true;
    
    setTimeout(() => {
      this._juicer.getFeeds( `?filter=${filter}` ).subscribe( posts => {
        this.viewPostFeed = posts.posts;
        // console.log( this.viewPostFeed );
      })
    }, 1000);
    setTimeout(() => {
      this.loaderFeed = false;
      this.viewedFeed = false;
    }, 1250);

  }

  moreFeeds() {
    this.loaderFeed = true;
    
    setTimeout(() => {
      this.loaderFeed = false;
      this.totalPost = this.totalPost + this.perPost;
    }, 1000);
  }

  getDateAgo(date) {
    let dateAgo = new Date( date ).getDate();
    let dateToday = this.today.getDate();

    let dayDiff = dateToday - dateAgo
    
    return dayDiff + "d";
  }
  



}
