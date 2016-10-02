import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SearchService {

  static instance: SearchService;

  private _subject = new Subject();

  constructor() {
    return SearchService.instance = SearchService.instance || this;
  }

  get listener() {
    return this._subject.asObservable();
  }

  send(item) {
    console.log(item);
    this._subject.next(item);
  }

}
