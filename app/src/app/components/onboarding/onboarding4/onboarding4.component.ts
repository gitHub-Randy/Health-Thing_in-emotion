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
  }

  showInfo(){
   
  }

  skip(){
    this.router.navigateByUrl('login')
  }

  nextpage(){
    this.router.navigateByUrl('login');
  }

  prevpage(){
    this.router.navigateByUrl('onboarding/3');
  }
}
