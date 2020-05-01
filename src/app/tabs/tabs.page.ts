import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public user : object;

  constructor(public authService: AuthService,public route:Router) {
    this.user = JSON.parse(localStorage.getItem('user'));    
   
  }
  
  goLogin(){
    this.route.navigateByUrl("/login");
  }
}
