import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BibleStudyComponent } from './bible-study/bible-study.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrayerNightComponent } from './prayer-night/prayer-night.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { TriviaChallengeComponent } from './bible-study/trivia-challenge/trivia-challenge.component';
import { QuestionContainerComponent } from './bible-study/trivia-challenge/question-container/question-container.component';
import { CountdownTimerComponent } from './bible-study/trivia-challenge/question-container/countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [AboutUsComponent, BibleStudyComponent, HomePageComponent, PrayerNightComponent, FellowshipComponent, TriviaChallengeComponent, QuestionContainerComponent, CountdownTimerComponent],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
