import { Component } from '@angular/core';
import { Product, SearchResult } from '../search_module';
import { Observable } from 'rxjs';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { PastaService } from '../service/service_module';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  stringa!:string
  trovaprodotti!: Observable <SearchResult> 
  ritprod : Product[]=[]
  constructor(public http:HttpClientModule, public passcomp: PastaService){

  }
search(name:HTMLInputElement):void{
this.stringa = name.value
this.trovaprodotti = this.passcomp.SearchProd(this.stringa)
this.trovaprodotti.subscribe((dis:SearchResult)=>{this.ritprod=dis.products})
}
}
