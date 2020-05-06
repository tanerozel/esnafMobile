import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 public userCheck : boolean;
 public user : object;
 public url : string;
  constructor(
    public ngZone: NgZone,
    public http : HttpClient,
    public route : Router,
    public toastController: ToastController
  ) {  
    this.userCheck = false;
  }


  async Login(user){

    const toast = await this.toastController.create({
      message: 'Kullanıcı adı veya şifre hatalı.',
      position : 'bottom',
      color : 'danger',
      duration: 2000
    });

    this.http.post<any>('https://localhost:44383/api/app/login', user.form.value).subscribe(data => {
      this.user = data; 

      if(this.user !=null){
        localStorage.setItem('user', JSON.stringify(this.user));
        this.route.navigateByUrl("/tabs/tab1");
        this.userCheck = true;
      }
      else{
        toast.present();
      }      
    })

  
  }
  

  Register(user){
    this.http.post<any>('https://localhost:44383/api/app/add_user', user.form.value).subscribe(data => {
    localStorage.setItem('user', JSON.stringify(data));
    this.route.navigateByUrl("/tabs/tab1");
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  
}
