import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goals-overview',
  templateUrl: './goals-overview.component.html',
  styleUrls: ['./goals-overview.component.css']
})
export class GoalsOverviewComponent implements OnInit {

  goals = [];
  progress = [];
  finishedGoals = 0;

  constructor(private router: Router, private goalsService: GoalService) { }

  ngOnInit(): void {
    this.setbg();
    this.getGoals();
    // this.getProgress();
  }

  setbg() {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackgroundRed.png')";
    doc.style.backgroundColor = "#fbe2e4"
  }

  getGoals() {
    this.goalsService.getGoals().toPromise().then(data => {
      this.goals = data;
      this.goals.sort(function (a, b) {
        if (a.finished == true && b.finished == false) {
          return 1
        }
        if (a.finished == true && b.finished == true) {
          return 0
        }
        if (a.finished == false && b.finished == true) {
          return -1
        }
        if (a.finished == false && b.finished == false) {
          return 0
        }
      })
    }).then(data => {
      this.getProgress();
      this.countFinishedGoals();


    })
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
    let temp4  = {
      goalName: "Leer nieuwe mensen kennen",
      goalFinished: true,
      actions: 4,
      actionsFinished: 4
    }
    this.goals.push(temp1, temp2, temp3, temp4);
    console.log(this.goals);
  } 

  getProgress() {

    for (let i = 0; i < this.goals.length; i++){
      let value = this.goals[i].progress / this.goals[i].actions.length * 100;
      console.log(value);
      this.progress.push(value);
      console.log("progress: ",this.progress);
    }
  }

  countFinishedGoals(){
    for(let i = 0; i < this.goals.length; i++){
      if(this.goals[i].finished == true){
        this.finishedGoals += 1;
        console.log("finishedGoals: ",this.finishedGoals);
      }
    }
  }

  addNewGoal(){
    this.router.navigateByUrl('/goals');
  }

  prevpage(){
    this.router.navigate(['dashboard']);
  }

}
