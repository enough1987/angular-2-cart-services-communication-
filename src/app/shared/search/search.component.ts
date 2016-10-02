import { Component } from '@angular/core';


import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    SearchService
  ]
})
export class SearchComponent {

  public search = '';

  constructor( private searchService: SearchService ){}

  send_search (){
       this.searchService.send(this.search);
  };

}
