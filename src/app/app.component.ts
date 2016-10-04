import { Component } from '@angular/core';


import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    CrudService
  ]
})
export class AppComponent {

  public products = [];

  constructor( private crudService : CrudService ){
    this.crudService.get('./app/services/test.json')
                     .subscribe(
                       products => this.products = products,
                       error =>  console.log( error ) 
                     );
  }

}
