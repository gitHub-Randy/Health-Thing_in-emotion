import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isLoggedIn = false;
  loginInvalid = false;
  errorMessage = '';
  roles: string[] = [];

  hide = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

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
