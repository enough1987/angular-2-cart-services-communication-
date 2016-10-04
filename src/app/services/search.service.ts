import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SearchService {

  static instance: SearchService;

  private subject = new Subject();

  constructor() {
    return SearchService.instance = SearchService.instance || this;
  }

  get listener() {
    return this.subject.asObservable();
  }

  send(item) {
    console.log(item);
    this.subject.next(item);
  }

}
