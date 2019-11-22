import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string='http://localhost:8087';
  constructor(private http:HttpClient) { }
getAllcategories(){
  return this.http.get(this.host+"/categories");
}
getRessource(url){
  return this.http.get(url);
}
}
