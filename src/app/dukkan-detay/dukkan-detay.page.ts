import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dukkan-detay',
  templateUrl: 'dukkan-detay.page.html',
  styleUrls: ['dukkan-detay.page.scss']
})
export class DukkanDetayPage {

  constructor(public toastController: ToastController) {}
  
  async urunuSepeteEkle() {
    const toast = await this.toastController.create({
      message: 'Ürün sepetinize eklendi.',
      duration: 2000
    });
    toast.present();
  }
}
