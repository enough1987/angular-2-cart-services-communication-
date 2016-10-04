import { Component } from '@angular/core';


import { CrudService } from '../shared/services/crud.service';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  public products = [];

  constructor( private crudService : CrudService ){
    this.crudService.get('./app/shared/services/test.json')
                     .subscribe(
                       products => this.products = products,
                       error =>  console.log( error ) 
                     );
  }


}
