import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { HelpPopUp4Component } from '../goals-selection/help-pop-up4/help-pop-up4.component';

@Component({
  selector: 'app-goals-selection2',
  templateUrl: './goals-selection2.component.html',
  styleUrls: ['./goals-selection2.component.css']
})
export class GoalsSelection2Component implements OnInit, AfterViewInit {
 
  @ViewChild(HeaderComponent) childComponent: HeaderComponent;

  constructor(private router: Router, private help4: MatDialog) { }

  ngAfterViewInit(): void {
    this.setT();
  }

  ngOnInit(): void {
    this.setbg();
  }


  showInfo(){
    this.help4.open(HelpPopUp4Component, {
      maxWidth: '85vw',
      height: '290px',
      width: '600px',
      disableClose: true,
      backdropClass: 'backdropBackground4',
      panelClass: 'help-panel4'
    })
  }


  prevpage(){
    this.router.navigate(['goals']);
  }

  setbg() {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackgroundRed.png')";
    doc.style.backgroundColor = "#fbe2e4"
  }

  setT(){
    this.childComponent.setTitle("Stel jouw maandelijkse doel");
   
  }

  
}
