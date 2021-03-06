import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudService {

  constructor( private http: Http ) {}

  get(url) {
      // http://plnkr.co/edit/?p=preview
      return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      console.log( body );
      return body || []; //body.data
  }

  private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
