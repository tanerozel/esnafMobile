import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  adresFiltresi : boolean;
  tumDukkanlar : object;

  constructor(private route:Router,public http: HttpClient) {  
    this.http.get ( 'https://localhost:44383/api/app/get_all_shops')
  .subscribe (data => {  
  this.tumDukkanlar = data;  
  })  
  }

  goDukkanDetay (){
    this.route.navigateByUrl("/tabs/dukkan-detay");
  }
  adresSec(){
    if(this.adresFiltresi == true)
    this.adresFiltresi = false;
    else  
    this.adresFiltresi = true;
  }
}
