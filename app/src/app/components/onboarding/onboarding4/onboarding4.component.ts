import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding4',
  templateUrl: './onboarding4.component.html',
  styleUrls: ['./onboarding4.component.css']
})
export class Onboarding4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let doc = document.getElementById('html');
    doc.style.overflowY = "hidden"
  }

  showInfo(){
   
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
