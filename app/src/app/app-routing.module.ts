import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmotionDescriptionComponent} from './components/emotion-description/emotion-description.component';
import {EmotionSelectionComponent} from "./components/emotion-selection/emotion-selection.component";
import { EmotionStrengthsComponent } from "./components/emotion-strengths/emotion-strengths.component";
import { StartComponent } from "./components/onboarding/start/start.component";
import { Onboarding1Component } from './components/onboarding/onboarding1/onboarding1.component';
import { Onboarding2Component } from './components/onboarding/onboarding2/onboarding2.component';
import { Onboarding3Component } from './components/onboarding/onboarding3/onboarding3.component';
import { Onboarding4Component } from './components/onboarding/onboarding4/onboarding4.component';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {  AuthGuard } from './guards/auth.guard'
import { GoalsSelectionComponent } from './components/goals/goals-selection/goals-selection.component';
import { GoalsSelection2Component } from './components/goals/goals-selection2/goals-selection2.component';
import { ActionCreateComponent } from './components/actions/create/actionCreate.component'
import { ActionReadComponent } from './components/actions/read/actionRead.component'
import { ActionUpdateComponent } from './components/actions/update/actionUpdate.component'


const routes: Routes = [
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "dashboard",  component:DashboardComponent , canActivate: [AuthGuard]},
  { path: "register",  component:RegisterComponent},
  { path: "emotions",  component:EmotionSelectionComponent , canActivate: [AuthGuard]},
  { path: "emotions/strengths",  component:EmotionStrengthsComponent , canActivate: [AuthGuard]},
  { path: "emotions/description",  component:EmotionDescriptionComponent , canActivate: [AuthGuard]},
  { path: "goals",  component:GoalsSelectionComponent},
  { path: "goals/edit", component: GoalsSelection2Component },
  { path: "actions/read",  component:ActionReadComponent},
  { path: "actions/create", component: ActionCreateComponent },
  { path: "actions/update",  component:ActionUpdateComponent},
  { path: "onboarding",  component:StartComponent},
  { path: "onboarding/1",  component:Onboarding1Component},
  { path: "onboarding/2",  component:Onboarding2Component},
  { path: "onboarding/3",  component:Onboarding3Component},
  { path: "onboarding/4",  component:Onboarding4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
