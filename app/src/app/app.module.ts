import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmotionSelectionComponent } from './components/emotion-selection/emotion-selection.component';
import { EmotionStrengthsComponent } from './components/emotion-strengths/emotion-strengths.component';
import { EmotionDescriptionComponent } from './components/emotion-description/emotion-description.component';
import { HeaderComponent } from './components/header/header.component';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { StartComponent } from './components/onboarding/start/start.component';
import { Onboarding1Component } from './components/onboarding/onboarding1/onboarding1.component';
import { Onboarding2Component } from './components/onboarding/onboarding2/onboarding2.component';
import { Onboarding3Component } from './components/onboarding/onboarding3/onboarding3.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HammerModule} from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { DescriptionComponent } from './components/emotion-strengths/description/description.component';
import { Onboarding4Component } from './components/onboarding/onboarding4/onboarding4.component';
import { HelpPopUpComponent } from './components/emotion-strengths/help-pop-up/help-pop-up.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HelpPopUp2Component } from './components/emotion-strengths/help-pop-up2/help-pop-up2.component';
import { HelpPopUp3Component } from './components/emotion-selection/help-pop-up3/help-pop-up3.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthGuard } from './guards/auth.guard';
import { GoalsSelectionComponent } from './components/goals/goals-selection/goals-selection.component';
import { GoalsOverviewComponent } from './components/goals/goals-overview/goals-overview.component';
import { HelpPopUp4Component } from './components/goals/goals-selection/help-pop-up4/help-pop-up4.component';



@NgModule({
  declarations: [
    AppComponent,
    EmotionSelectionComponent,
    EmotionStrengthsComponent,
    EmotionDescriptionComponent,
    HeaderComponent,
    StartComponent,
    Onboarding1Component,
    Onboarding2Component,
    Onboarding3Component,
    DescriptionComponent,
    Onboarding4Component,
    HelpPopUpComponent,
    HelpPopUp2Component,
    HelpPopUp3Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GoalsSelectionComponent,
    GoalsOverviewComponent,
    HelpPopUp4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    HammerModule,
    MatSliderModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, AuthGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
