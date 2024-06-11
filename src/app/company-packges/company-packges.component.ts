import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesServiceService } from '../companies-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-company-packges',
  templateUrl: './company-packges.component.html',
  styleUrls: ['./company-packges.component.scss']
})
export class CompanyPackgesComponent implements OnInit {
  constructor( private _ToastrService:ToastrService,private _ActivatedRoute:ActivatedRoute , private _CompaniesServiceService:CompaniesServiceService){}
  company: any;
  id: any = 0;
    userData: any;

  ngOnInit(): void {
    this.userData = JSON.parse(`${localStorage.getItem('user')}`)
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.id = res.get('id');
      }
    })

    this._CompaniesServiceService.getSpacificCompany(this.id).subscribe({
      next: (res) => {
        this.company=res
      }
    })
  }

    book: FormGroup = new FormGroup({
    name: new FormControl(JSON.parse(`${localStorage.getItem('user')}`).name, [Validators.required]),
    email: new FormControl(JSON.parse(`${localStorage.getItem('user')}`).email, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone: new FormControl(JSON.parse(`${localStorage.getItem('user')}`).phone, [Validators.required]),
    date:new FormControl(null,[Validators.required])
    })
  isOverLay:boolean=false

  handleBook(form:FormGroup) {
    this._ToastrService.success("تم تأكيد الحجز سيتم التواصل معك ", "عمليه ناجحة");
    this.isOverLay=false
  }

  ToggleOverLay() {
    this.isOverLay = !this.isOverLay;
  }
}

