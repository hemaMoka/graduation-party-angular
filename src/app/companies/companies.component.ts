import { Component, OnInit } from '@angular/core';
import { CompaniesServiceService } from '../companies-service.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  constructor(private _CompaniesServiceService: CompaniesServiceService) { }
  companies: any[] = [];
  ngOnInit(): void {
    this._CompaniesServiceService.getCompanies().subscribe({
      next: (res) => {
        this.companies = res;
      }
      })
  }
}
