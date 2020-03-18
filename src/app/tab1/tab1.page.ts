import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  adresFiltresi : boolean;
  constructor(private route:Router) {  
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
