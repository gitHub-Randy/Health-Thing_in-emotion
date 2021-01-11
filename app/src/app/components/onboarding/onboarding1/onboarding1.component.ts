import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-onboarding1',
  templateUrl: './onboarding1.component.html',
  styleUrls: ['./onboarding1.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class Onboarding1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let doc = document.getElementById('html');
    doc.style.overflowY = "hidden"
  }

  skip(){
    this.router.navigateByUrl('login')
  }

  nextpage(){
    this.router.navigateByUrl('onboarding/2');
  }

  prevpage(){
    this.router.navigateByUrl('onboarding');
  }
}
