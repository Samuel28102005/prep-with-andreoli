
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchResult } from '../search_module';
import { Product_Api } from '../product_api';


@Injectable({
  providedIn: 'root'
})
export class PastaService {

  constructor(private http:HttpClient) { }

  SearchProd(query:string | null){
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`
    let obsprod = this.http.get<SearchResult>(url);
    return obsprod;
  }

  getProd(id:string |null){
    const url= `https://world.openfoodfacts.org/api/v0/product/${id}` ; console.log(url)
    return this.http.get<Product_Api>(url)
  }

}
