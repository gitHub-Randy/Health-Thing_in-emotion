import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-overview',
  templateUrl: './goals-overview.component.html',
  styleUrls: ['./goals-overview.component.css']
})
export class GoalsOverviewComponent implements OnInit {

  goals = [];


  constructor() { }

  ngOnInit(): void {
    this.setbg();
    this.addGoals();
  }

  setbg() {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackgroundRed.png')";
    doc.style.backgroundColor = "#fbe2e4"
  }

    addGoals(){
    let temp1  = {
      goalName: "Leer nieuwe mensen kennen",
    }
    let temp2  = {
      goalName: "Maak nieuwe vrienden",
    }
    this.goals.push(temp1, temp2);
    console.log(this.goals);
  } 

}
