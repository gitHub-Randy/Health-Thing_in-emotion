import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService } from '../../services/authentication.service'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  hide = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthenticationService,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

  
  showSnackBar(message){
    this.snackbar.open(message, "", {
      duration: 1000,
      panelClass: "snackbar"
    });
  }



  onSubmit() {
   
    console.log("name: ", this.form.value.name)
    console.log("username: ", this.form.value.username)
    console.log("password: ", this.form.value.password)
    console.log("email: ", this.form.value.email)
    console.log("dob: ", this.form.value.dob)
    this.form.value.name =  this.form.value.name.charAt(0).toUpperCase() +  this.form.value.name.slice(1)


    this.authService.register(this.form.value).toPromise().then(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login')
      },
      err => {
        this.showSnackBar("De ingevoerde gegevens zijn incorrect")
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
