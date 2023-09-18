import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
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
  registerForm: FormGroup;
  constructor ( private _authServices: AuthService, private _router: Router, private _formBilder: FormBuilder ) {
  this.registerForm  = this._formBilder.group({
    name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)] ],
    email: ['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/) ]],
    rePassword:['', [Validators.required, this.passwordMatcher.bind(this)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)] ]
  });  
}
  passwordMatcher(control: FormControl) {
    let pass = this.registerForm?.get('password');
    if (control.value === pass?.value) {
      return null;
    } else {
      return {passMatch : true}
    }
  }
  register(form: FormGroup) {
    console.log("done",form);
    if (form.valid) {
      this.loader = true;
      this._authServices.register(form.value).subscribe({
        next: res => {
          this.loader = false;
          console.log(res)
        },
        error: err => {this.alreadyExist = err.error.message,this.loader = false;},
        complete: () => {
          this._router.navigate(['/login']);
          console.log('done');
      }
      })
    } else {
      this.isInvalid = true;
    };
  }


}

