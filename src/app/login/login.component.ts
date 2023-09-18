import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login-media.component.css']
})
export class LoginComponent {

  constructor (private _authService: AuthService, private _router: Router) {}
  isInvalid : boolean = false;
  loader : boolean = false;
  alreadyExist: any ;
  loggedin : any;
    loginForm: FormGroup = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/) ])
    });
    login (form: FormGroup) {
      console.log("done", form);
      if (form.valid) {
        this.loader = true;
        this._authService.login(form.value).subscribe({
          next: res => {
            console.log('res: ', res);
            this.loader = false;
            localStorage.setItem("user token", res.token);
            this._authService.getUserData();
          },
          error: err =>  {
          this.isInvalid = err},
          complete: () => {
            this._router.navigate(['/home']);
            console.log('done');
          }
        })
      } else {
        this.isInvalid = true;
      };
    };
}
