import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./register-media.component.css']
})
export class RegisterComponent {
  loader: boolean = false;
  isInvalid: boolean = false;
  alreadyExist: any;
  constructor ( private _authServices: AuthService, private _router: Router ) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(12) ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/) ]),
    rePassword: new FormControl('', [ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/) ]),
    phone: new FormControl('', [ Validators.required, Validators.minLength(10), Validators.maxLength(12) ])
  });  
  
  register(form: FormGroup) {
    console.log("done",form);
    if (form.valid) {
      this.loader = true;
      this._authServices.register(form.value).subscribe({
        next: res => {
          this.loader = false;
          console.log(res)
        },
        error: err => {this.alreadyExist = err.error.message},
        complete: () => {
          this._router.navigate(['/login'])
          console.log('done')
      }
      })
    } else {
      this.isInvalid = true;
    };
  }


}

