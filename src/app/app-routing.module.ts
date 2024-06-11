import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyPackgesComponent } from './company-packges/company-packges.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"" , redirectTo:"register" , pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "companies", component: CompaniesComponent },
  { path: "companyPackges/:id", component: CompanyPackgesComponent },
  { path: "login", component: LoginComponent },
  {path:"register" , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
