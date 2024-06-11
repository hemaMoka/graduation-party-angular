import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('user') != null) {
      this.isLogin.next(true)
    } else {
      this.isLogin.next(false)
    }
  }

  isLogin = new BehaviorSubject(false);

  signup(data: any): Observable<any> {
    return this._HttpClient.post('https://graduation-party.onrender.com/signUp', data)
  }

  getUsers(): Observable<any> {
    return this._HttpClient.get('https://graduation-party.onrender.com/signUp')
  }
}
