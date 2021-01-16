import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private goalService: GoalService) { }

  ngOnInit(): void {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackground.png')";
    doc.style.backgroundColor = "#E0F2F8"
  }


  goToEmotion() {
    
  }

  goToGoals() {
    this.router.navigate(['goals/overview']);
  }

  goToActions() {
    this.goalService.getGoals().toPromise().then(data => {
      console.log("dashboard:",data)
      this.router.navigate(['actions/read'],{ state: { goals: data } });

    })
  }
}
