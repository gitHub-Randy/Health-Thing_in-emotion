import { collectExternalReferences } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { chipState } from 'src/app/interfaces/chipStates';
import { HeaderComponent } from '../../header/header.component';
import { HelpPopUp4Component } from '../goals-selection/help-pop-up4/help-pop-up4.component';

@Component({
  selector: 'app-goals-selection2',
  templateUrl: './goals-selection2.component.html',
  styleUrls: ['./goals-selection2.component.css']
})
export class GoalsSelection2Component implements OnInit, AfterViewInit {
 
  @ViewChild(HeaderComponent) childComponent: HeaderComponent;

  goals = [];
  toggle = false;

  constructor(private router: Router, private help4: MatDialog) { }

  ngAfterViewInit(): void {
    this.setT();
  }

  ngOnInit(): void {
    this.setbg();
    this.addGoals();
  }


  addGoals(){
    let temp1  = {
      goalName: "Leer nieuwe mensen kennen",
      goalState: chipState.NONE
    }
    let temp2  = {
      goalName: "Maak nieuwe vrienden",
      goalState: chipState.NONE
    }
    this.goals.push(temp1, temp2);
  } 

  addOwnGoals(goal: string){
    console.log(goal);
    if(goal != ''){
      let temp  = {
        goalName: goal,
        goalState: chipState.NONE
      }
      this.goals.unshift(temp);
    }
  }

  selectGoals(button: HTMLElement){
    console.log(button.id);
    if(this.goals[button.id].goalState == chipState.NONE){
       button.style.boxShadow = " 0 0 0 6px #D5A7AA";
       this.goals[button.id].goalState = chipState.SELECTED;
       console.log("selected",this.goals[button.id]);
     } else {
       console.log("not selected",this.goals);
       button.style.boxShadow = "none";
       this.goals[button.id].goalState = chipState.NONE;
     };
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
    this.childComponent.setTitle("Stel jouw doel");
  }

  
}
