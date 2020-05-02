import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user : object;
  orders : object;
  totalPrice : number;
  shopId : number;
  orderCheck : boolean;

  constructor(public toastController: ToastController,public route: ActivatedRoute,public router:Router,public http: HttpClient,public alertController: AlertController) { 
  }


  ionViewWillEnter(){
    this.user = JSON.parse(localStorage.getItem('user'));    
    this.totalPrice = 0;

    this.http.get( 'https://localhost:44383/api/app/get_order/' + parseInt(this.user['id']) ).toPromise()
      .then(data =>{         
        this.orders = data;

        if(this.orders[0]){
          this.orderCheck = true;
        }
        else{
          this.orderCheck = false;

        }

        for (let i in this.orders) {
          this.totalPrice = this.totalPrice + this.orders[i]['urun_fiyat'];
      }

     })   

  }

  async orderApproved(orders){
    let product = {};

    this.user = JSON.parse(localStorage.getItem('user'));    
    product["dukkanId"] = orders[0].dukkan_id;
    product["musteriId"] = this.user['id'];
    product["toplamTutar"] = this.totalPrice;   

    const toast = await this.toastController.create({
      message: 'Siparişiniz başarılı bir şekilde oluşturuldu.',
      duration: 2000
    });
    
    this.http.post<any>('https://localhost:44383/api/app/order_approved', product).subscribe(data => {
      toast.present();
    })
  }

  goHome(){
    this.router.navigateByUrl("/tabs/tab1");
  }

}
