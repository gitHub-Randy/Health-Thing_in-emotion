import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding4',
  templateUrl: './onboarding4.component.html',
  styleUrls: ['./onboarding4.component.css']
})
export class Onboarding4Component implements OnInit {

  constructor(private router:Router,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    let doc = document.getElementById('html');
    doc.style.overflowY = "hidden"
  }

  showInfo(){
    this.snackbar.open("Coming soon", "", {
      duration: 1000,
      panelClass: "snackbar"
    });
  }

  skip(){
    this.router.navigateByUrl('dashboard')
  }

  nextpage(){
    this.router.navigateByUrl('dashboard');
  }

  prevpage(){
    this.router.navigateByUrl('onboarding/3');
  }
}
