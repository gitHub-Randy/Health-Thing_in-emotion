import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService } from '../../services/authentication.service'
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
    private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }


  onSubmit() {
   
    console.log("name: ", this.form.value.name)
    console.log("username: ", this.form.value.username)
    console.log("password: ", this.form.value.password)
    console.log("email: ", this.form.value.email)
    console.log("dob: ", this.form.value.dob)


    this.authService.register(this.form.value).toPromise().then(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login')
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
