import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoggedIn = false;
  loginInvalid = false;
  errorMessage = '';
  roles: string[] = [];

  hide = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthenticationService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }


  onSubmit() {


    console.log("username: ", this.form.value.username)
    console.log("password: ", this.form.value.password)
    this.authService.login(this.form.value).toPromise().then(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data)
        this.tokenStorage.saveUser(data);
        this.router.navigateByUrl('/dashboard')
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
      },
      err => {
        console.log(err)
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
      }
    );
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
  }
}
