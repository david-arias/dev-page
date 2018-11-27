import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuicerApiService {

  juicerAPI_Url:string = "https://www.juicer.io/api/feeds/";
  juicerAPI_User:string = "lasiglo21";

  constructor(public _http:Http) { }

  getFeeds( query:string ) {
    let apiUrl:string = this.juicerAPI_Url + this.juicerAPI_User + query ;
    return this._http.get( apiUrl ).pipe(
      map( res => res.json() )
    )
    
  }
}
