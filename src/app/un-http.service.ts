import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response,Headers,RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class unHttpservice {

  api = "http://localhost/parcial/index.php/personas/";
  cabecera = new Headers();
  
  constructor( public http: Http ) {
    this.cabecera.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8' );
   }

  public httpGetP ( url: string)
  {
    return this.http
    .get( this.api +url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  
  public httpPostData( url: string , data:any ){
    let params = {'title': 'foo',  'body': 'bar', 'userId': 1'};
    let params = {'nombre': 'gustavo', 'mail': 'gustavo@gmail.com', 'sexo': 'm', 'password':'1161'};
    let options = new RequestOptions({ headers: this.cabecera});
    return this.http
      .post( this.api + url, params)
      .toPromise()
      .then( this.extractData )
      .catch( this.handleError )
  }


  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}