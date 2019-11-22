import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
products;
  constructor(private catalogueService:CatalogueService, private route:ActivatedRoute, private router:Router) { 

    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let url = atob(route.snapshot.params.urlProds);
        //console.log(url);
        this.getProducts(url);
      }
    })
   
   
  }

  ngOnInit() {
  
  }

  getProducts(url){
this.catalogueService.getRessource(url)
.subscribe(data=>{
this.products=data;
},err=>{
  console.log(err);
})
  }

}
