import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dukkan-detay',
  templateUrl: 'dukkan-detay.page.html',
  styleUrls: ['dukkan-detay.page.scss']
})
export class DukkanDetayPage {
  shopId: string;
  shopProducts : object;
  user : object;
  
  constructor(public toastController: ToastController,route: ActivatedRoute,private router:Router,public http: HttpClient,private alertController: AlertController) { 
    this.shopId = route.snapshot.params['id']; 
  
    this.http.get( 'https://localhost:44383/api/app/get_products/' + parseInt(this.shopId) ).toPromise()
      .then(data =>{         
        this.shopProducts = data;
     })   


  }
  async urunuSepeteEkle() {
    const toast = await this.toastController.create({
      message: 'Ürün sepetinize eklendi.',
      duration: 2000
    });
    toast.present();
  }
}
