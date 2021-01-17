import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private goalService: GoalService) {
    this.getGoalData()

  }

  amountOfGoals = 0;
  amountOfFinishedGoals = 0;
  action = "";
  ngOnInit(): void {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackground.png')";
    doc.style.backgroundColor = "#E0F2F8"
  }


  getGoalData() {
    this.goalService.getGoals().toPromise().then(data => {

      this.amountOfGoals = data.length;
      for (let i = 0; i < data.length; i++) {
        console.log()
        console.log(data[i].finished)
        if (data[i].finished == true) {
          this.amountOfFinishedGoals +=1
        } else {
          let randomIndex = Math.trunc(Math.random() * (data[i].actions.length - 0) + 0)
          this.action = data[i].actions[randomIndex].actionName
          console.log(randomIndex)
        }
      }

      console.log(this.amountOfFinishedGoals)
    })
  }

  goToEmotion() {

  }

  goToGoals() {
    this.router.navigate(['goals/overview']);
  }

  goToActions() {
    this.router.navigate(['actions/read']);
  }
}
