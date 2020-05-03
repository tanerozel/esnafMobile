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
  shop: object;
  user : object;

  constructor(public toastController: ToastController,public route: ActivatedRoute,public router:Router,public http: HttpClient,private alertController: AlertController) { 
    
  }


  ionViewWillEnter(){
    this.shopId = this.route.snapshot.params['id']; 

  
    this.http.get( 'https://localhost:44383/api/app/get_shop/' + parseInt(this.shopId) ).toPromise()
      .then(data =>{         
        this.shop = data;
     })   
  
  }

  async urunuSepeteEkle(orderProduct) {
    let product = {};

    this.user = JSON.parse(localStorage.getItem('user'));    
    product["urunId"] = orderProduct.id;
    product["dukkanId"] = this.shopId;
    product["musteriId"] = this.user['id'];
    product["urunAdi"] = orderProduct.urun_adi
    product["urunFiyat"] = orderProduct.fiyat;

    const toast = await this.toastController.create({
      message: 'Ürün sepetinize eklendi.',
      duration: 2000
    });
    
    this.http.post<any>('https://localhost:44383/api/app/add_order_product', product).subscribe(data => {
      toast.present();

    })
   
  }
}
