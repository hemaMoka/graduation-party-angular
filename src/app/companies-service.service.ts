import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompaniesServiceService {

  constructor(private _HttpClient: HttpClient) { }

  getCompanies(): Observable<any>{
    return this._HttpClient.get("https://graduation-party.onrender.com/companys");
  }

  getSpacificCompany(id: any): Observable<any>{
    return this._HttpClient.get(`https://graduation-party.onrender.com/companys/${id}`)
  }
}
