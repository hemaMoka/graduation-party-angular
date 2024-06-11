import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    constructor(private _Router:Router,private _ToastrService:ToastrService, private _AuthService:AuthService){}

  register: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required])
  })

  handleRegister(form: FormGroup) {
    this._AuthService.signup(form.value).subscribe({
      next: () => {
        this._Router.navigate(['/login']);
        this._ToastrService.success("Register Confirm", "Success");
      },
      error: (err) => {
        this._ToastrService.error("Error Sign Up", "Technecal Error")
        console.log(err);

      }
    })
  }

}
