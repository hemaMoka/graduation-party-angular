import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _Router:Router,private _AuthService:AuthService) {
  this._AuthService.isLogin.subscribe({
      next: () => {
        if (this._AuthService.isLogin.getValue() == true) {
          this.isLogin=true
        } else {
          this.isLogin = false;
        }
      }
    })
  }
  logOut() {
  this._AuthService.isLogin.next(false);
  localStorage.removeItem('user');
  this._Router.navigate(['/login']);
  }
  isLogin:boolean = false;
}

