import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from '../../header/header.component';
import { HelpPopUp4Component } from './help-pop-up4/help-pop-up4.component';
import { EmotionService } from 'src/app/services/emotion.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { Router } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler';
import { chipState } from 'src/app/interfaces/chipStates';

@Component({
  selector: 'app-goals-selection',
  templateUrl: './goals-selection.component.html',
  styleUrls: ['./goals-selection.component.css']
})
export class GoalsSelectionComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent) childComponent: HeaderComponent;

  filteredArray = [];

  constructor(private emotionService: EmotionService, private tokenStorage: TokenStorageService , private router: Router, private help4: MatDialog) { }

  ngAfterViewInit(): void {
    this.setT();
    if(localStorage.getItem("checkedStrengthDialog4") == "false" || localStorage.getItem("checkedStrengthDialog4") == null) {
      this.showHelp4();
    }
  }

  ngOnInit(): void {
    this.setbg();
    this.getEmotions();
  }


  getEmotions(){
    let emotionArray = [];
    let userId = this.tokenStorage.getUser().id;
    return this.emotionService.getEmotions().toPromise().then(data => {
      data.forEach(e => {
        if(e.userId == userId) {
            for(let i = 0; i < e.chosenEmotions.length; i++) {
          let temp ={
            emotionName: e.chosenEmotions[i].emotionName,
            emotionState: chipState.NONE
          };
          emotionArray.push(temp);
            }
        this.filteredArray = emotionArray.reduce((acc, current) => {
          const x = acc.find(item => item.emotionName === current.emotionName);
          if (!x){
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        }
        this.addLonelyTest();
      });
    }).then(data => {
      console.log("filtered array: ", this.filteredArray );
      return this.filteredArray;
    })
  }

  addLonelyTest(){
    let lonely = {
      emotionName: "EENZAAM",
      emotionState: chipState.NONE
    }
    this.filteredArray.push(lonely);
  }

  selectChip(chip: HTMLElement){
    if(this.filteredArray[chip.id].emotionState == chipState.NONE) {
      chip.style.backgroundColor = "#AB5057";
      chip.style.color = "white";
      this.filteredArray[chip.id].emotionState = chipState.SELECTED;
    } else {
      chip.style.backgroundColor = "white";
      chip.style.color = "#403D46";
      this.filteredArray[chip.id].emotionState = chipState.NONE;
    }
  }

  addEmotion(){
    this.router.navigate(['emotions']);

  }

  skip(){
    this.router.navigate(['dashboard']);
  }

  nextPage(){
    this.router.navigate(['goals/edit']);
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

  showHelp4(){
    this.help4.open(HelpPopUp4Component, {
      maxWidth: '85vw',
      height: '290px',
      width: '600px',
      disableClose: true,
      backdropClass: 'backdropBackground4',
      panelClass: 'help-panel4'
    })
  }

}
