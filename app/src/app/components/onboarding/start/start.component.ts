import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
    this.setbg()
  }


  nextpage(){
    this.router.navigateByUrl('onboarding/1');
  }

  setbg() {
    let doc = document.getElementById('html')
    doc.style.backgroundImage = "none";
    doc.style.overflowY = "hidden"
    let header = document.getElementById("headercontent");
    header.style.backgroundImage = "url('../../../assets/onboarding/header.png')";
    }
}
