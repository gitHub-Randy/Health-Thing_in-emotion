import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router, private authService: AuthenticationService, private tokenStorage: TokenStorageService,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated())
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    let doc = document.getElementById('html')
    doc.style.backgroundImage = "url(./assets/header/headerbackground.png)";
    console.log(doc)
      // doc.style.backgroundImage =  "url(./assets/header/headerbackground.png);"


  }


  showSnackBar(message){
    this.snackbar.open(message, "", {
      duration: 1000,
      panelClass: "snackbar"
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
        this.showSnackBar("De ingevoerde gegevens zijn ongeldig!")

      
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
