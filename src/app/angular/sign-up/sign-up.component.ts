import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Account, User } from '../types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public myFormLogin!: FormGroup
  user!: User;
  account!: Account;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myFormLogin = this.crearForm();
  }
  crearForm(): FormGroup {
    return this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', Validators.required],
        passwordRepeat: ['', Validators.required],
      }
    )
  }
  public submit() {
    if (this.myFormLogin.invalid) {
      alert("Digite todos los datos")
      return;
    } else {
      console.log("datos completos");
      if (this.myFormLogin.value.password != this.myFormLogin.value.passwordRepeat) {
        console.log("las contrasseñas deben de coincidir");
      } else {
        this.user = this.myFormLogin.value;
        console.log(this.user);
        this.authService.signUp(this.user).subscribe(
          data => {
            this.asignarAccount(data);
          }
        );
        console.log(this.account);

        this.router.navigate(['../thanks'], {relativeTo:this.route})
        // console.log(this.myFormLogin.value);
        // this.myFormLogin.removeControl('passwordRepeat');
        // console.log(this.myFormLogin.value);
      }
    }
  }
  asignarAccount(data: Account) {
    this.account = data;
  }

  public get f(): any {
    return this.myFormLogin.controls;
  }
}
