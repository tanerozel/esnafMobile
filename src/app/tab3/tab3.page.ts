import { Component } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public user : object;

  constructor(public authService: AuthService) {
    this.user = JSON.parse(localStorage.getItem('user'));    

}
ngOnit(){

}
}