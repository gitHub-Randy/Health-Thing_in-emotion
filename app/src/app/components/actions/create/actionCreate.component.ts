import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { chipState } from 'src/app/interfaces/chipStates';
import { HeaderComponent } from '../../header/header.component';
import { trigger, keyframes, animate, transition, sequence, stagger, query } from '@angular/animations'
import * as kf from '../../emotion-selection/keyframes';
import 'hammerjs';
import { GoalService } from 'src/app/services/goal.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { ActionService } from 'src/app/services/action.service';
@Component({
  selector: 'app-action-create',
  templateUrl: './action-create.component.html',
  styleUrls: ['./action-create.component.css'],
  animations: [
    trigger('emotionTrigger', [
      transition('* => slideRight', [
        query(':self', [
          stagger(1000, [
            animate(100, keyframes(kf.slideOutRight)),
            animate(100, keyframes(kf.slideInLeft)),
          ])
        ], { optional: false })
      ] ,

      ),
      transition('* => slideLeft', [
        query(':self', [
          stagger(1000, [
            animate(100, keyframes(kf.slideOutLeft)),
            animate(100, keyframes(kf.slideInRight)),

          ])
        ], { optional: false })
      ] ,

      ),
    ]),
  ]

})
export class ActionCreateComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent) childComponent: HeaderComponent;

  goals: any[];
  actions = [];
  currentIndex: number = 0;
  animationState: string;
  shouldChange: boolean = false;
  selectedAction = 0;
  userId: string;
  constructor(private router: Router, private goalService: GoalService, private actionService: ActionService, private tokenStorage: TokenStorageService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { goals: any[] };
    this.goals = state.goals;
  }
  ngAfterViewInit(): void {
    this.setT();
    this.showLeftButton();
    this.showRightButton();
    this.showSwipeControls();
  }

  ngOnInit(): void {
    this.setbg();
    this.addActions();
    this.userId = this.tokenStorage.getUser().id

  }

  selectAction(button: HTMLElement) {
    console.log(button.id);
    if (this.goals[this.currentIndex].actions[button.id].actionState == chipState.NONE) {
      button.style.boxShadow = " 0 0 0 6px #AEC4B9";
      this.goals[this.currentIndex].actions[button.id].actionState = chipState.SELECTED;
      this.selectedAction += 1;
    } else {
      button.style.boxShadow = "none";

      this.goals[this.currentIndex].actions[button.id].actionState = chipState.NONE;
      this.selectedAction -= 1;

    };
  }

  addActions() {
    let newGoalObjects = [];
    this.goals.forEach(goal => {
      console.log(goal.goalName)
      if (goal.goalName === "Leer nieuwe mensen kennen") {
        let temp1 = {
          actionName: "Spreek iemand aan op straat",
          actionState: chipState.NONE
        }
        let temp2 = {
          actionName: "Ben actief op social media",
          actionState: chipState.NONE
        }
        let temp3 = {
          actionName: "Doe eens iets voor een onbekende",
          actionState: chipState.NONE
        }

        newGoalObjects.push({
          goalName: goal.goalName,
          goalState: goal.goalState,
          actions: [temp1, temp2, temp3]
        })
      } else if (goal.goalName === "Maak nieuwe vrienden") {
        let temp1 = {
          actionName: "Benader een oude vriend van vroeger",
          actionState: chipState.NONE
        }
        let temp2 = {
          actionName: "Download Bumble om connecties te maken",
          actionState: chipState.NONE
        }
        let temp3 = {
          actionName: "Schrijf je in voor een event",
          actionState: chipState.NONE
        }

        newGoalObjects.push({
          goalName: goal.goalName,
          goalState: goal.goalState,
          actions: [temp1, temp2, temp3]
        })
      }
      else {
        newGoalObjects.push({
          goalName: goal.goalName,
          goalState: goal.goalState,
          actions: []
        })
      }
    });

    this.goals = newGoalObjects
  }




  addOwnAction(action: string) {
    console.log(action);
    if (action != '') {
      let temp = {
        actionName: action,
        actionState: chipState.NONE
      }
      this.goals[this.currentIndex].actions.unshift(temp);
      let input = document.getElementsByClassName("customAction")[0] as HTMLInputElement;
      input.value = ''
    }
  }

  showInfo() {

  }

  prevPage() {
    this.router.navigate(['goals/edit']);


  }

  nextPage() {
    // get selectedActions
    let selectedActions = [];

    this.goals.forEach(goal => {
      goal.actions.forEach(action => {
        if (action.actionState == chipState.SELECTED) {
          selectedActions.push({
            actionName: action.actionName,
            done: false,
            goalName: goal.goalName
          })
        }
      });
    })
    let newActions = []
    this.actionService.addAction(selectedActions).toPromise().then(data => {
      console.log(data)
      newActions = data
      let goalData = []
      this.goals.forEach(goal => {
        let tempActions = []
        newActions.forEach(action => {
          goal.actions.forEach(goalAction => {
            if (action.actionName == goalAction.actionName) {
              tempActions.push({ _id: action._id, actionName: action.actionName, done: false } );
            }
          });

        })
        let temp = {
          goalName: goal.goalName,
          progress: 0,
          finished: false,
          actions: tempActions,
          userId: this.userId
        }
        goalData.push(temp);
      })

      let formattedGoalData = goalData;
      
      this.goalService.addGoalData(formattedGoalData).toPromise().then(data => {
        console.log("new goals", data)
        this.router.navigate(['dashboard']);

      })


    })

    


  }



  setbg() {
    let doc = document.getElementById('html');
    doc.style.overflowY = "auto"

    doc.style.backgroundImage = "url('../../../assets/header/headerbackgroundGreen.png')";
    doc.style.backgroundColor = "#EAF5EF"

  }

  setT() {
    this.childComponent.setTitle("Kies jouw acties");
  }

  showLeftButton() {
    let leftBtn = document.getElementById("leftBtn");
    if (this.goals.length <= 1) {
      leftBtn.style.backgroundColor = "transparent";
      leftBtn.removeChild(leftBtn.childNodes[0]);
    } else {
      leftBtn.style.display = "block"
    }
  }

  showRightButton() {
    let rightBtn = document.getElementById("rightBtn");
    if (this.goals.length <= 1) {
      rightBtn.style.backgroundColor = "transparent";
      rightBtn.removeChild(rightBtn.childNodes[0]);
    } else {
      rightBtn.style.display = "block"
    }
  }

  showSwipeControls() {
    let swipeBtn = document.getElementById("swipeCircle");
    if (this.goals.length <= 1) {
      swipeBtn.style.display = "none";
    } else {
      swipeBtn.style.display = "block"
    }
  }


  onLeft() {
    this.changeSwipeControlColorToWhite()
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.goals.length - 1;
    }
    this.changeSwipeControlColorToGreen()

  }

  onRight() {
    this.changeSwipeControlColorToWhite()

    if (this.currentIndex < this.goals.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
    this.changeSwipeControlColorToGreen()

  }



  changeSwipeControlColorToGreen() {
    let parentDiv = document.getElementById("swipeControls");
    let children = parentDiv.children as HTMLCollectionOf<HTMLElement>;
    let iconToChange = children[this.currentIndex];
    iconToChange.style.color = "#8AC8A8";
    iconToChange.style.backgroundColor = "#8AC8A8"
  }

  changeSwipeControlColorToWhite() {
    let parentDiv = document.getElementById("swipeControls");
    let children = parentDiv.children as HTMLCollectionOf<HTMLElement>;
    let iconToChange = children[this.currentIndex];
    iconToChange.style.color = "#FFFFFF";
    iconToChange.style.backgroundColor = "#FFFFFF"
  }


  startAnimation(state) {
    if (this.goals.length > 1) {
      if (!this.animationState) {
        this.animationState = state
      }
    }
  }

  resetAnimationState() {
    if (this.animationState == "slideRight" && !this.shouldChange) {
      this.onLeft();
    }
    if (this.animationState == "slideLeft" && !this.shouldChange) {

      this.onRight();
    }
    this.animationState = '';
    this.shouldChange = false;
  }


  goToIndex(index) {
    let indexNew = index
    if (indexNew > this.goals.length - 1) {
      indexNew = 0
    }
    if (indexNew < 0) {
      indexNew = this.goals.length - 1
    }

    let currentIndex = this.currentIndex;
    if (indexNew > currentIndex) {
      this.shouldChange = true;
      this.startAnimation("slideLeft")
    } else if (indexNew < currentIndex) {
      this.shouldChange = true;
      this.startAnimation("slideRight")
    }

    this.changeSwipeControlColorToWhite();

    this.currentIndex = indexNew;

    this.changeSwipeControlColorToGreen();


  }

}
