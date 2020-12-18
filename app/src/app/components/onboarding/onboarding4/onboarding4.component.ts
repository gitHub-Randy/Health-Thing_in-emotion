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
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO", "_blank");
  }

  skip(){
    this.router.navigateByUrl('emotions')
  }

  nextpage(){
    this.router.navigateByUrl('emotions');
  }

  prevpage(){
    this.router.navigateByUrl('onboarding/3');
  }
}