import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-overview',
  templateUrl: './goals-overview.component.html',
  styleUrls: ['./goals-overview.component.css']
})
export class GoalsOverviewComponent implements OnInit {

  goals = [];
  progress = [];
  finishedGoals = 0;

  constructor() { }

  ngOnInit(): void {
    this.setbg();
    this.addGoals();
    this.getProgress();
    this.countFinishedGoals();
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
      goalFinished: false,
      actions: 4,
      actionsFinished: 2
    }
    let temp2  = {
      goalName: "Maak nieuwe vrienden",
      goalFinished: false,
      actions: 4,
      actionsFinished: 3
    }
    let temp3  = {
      goalName: "Leer nieuwe mensen kennen",
      goalFinished: true,
      actions: 4,
      actionsFinished: 4
    }
    this.goals.push(temp1, temp2, temp3);
    console.log(this.goals);
  } 

  getProgress(){
    for(let i = 0; i < this.goals.length; i++){
      let value = this.goals[i].actionsFinished / this.goals[i].actions * 100;
      console.log(value);
      this.progress.push(value);
      console.log(this.progress);
    }
  }

  countFinishedGoals(){
    for(let i = 0; i < this.goals.length; i++){
      if(this.goals[i].goalFinished == true){
        this.finishedGoals += 1;
        console.log("finishedGoals: ",this.finishedGoals);
      }
    }
  }

}
