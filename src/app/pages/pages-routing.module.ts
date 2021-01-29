import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { BibleStudyComponent } from './bible-study/bible-study.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrayerNightComponent } from './prayer-night/prayer-night.component';


const routes: Routes = [
    {path: 'home', component: HomePageComponent },
    {path: 'fellowship', component: FellowshipComponent},
    {path: 'bible-study', component: BibleStudyComponent },
    {path: 'about', component: AboutUsComponent},
    {path: 'prayer', component: PrayerNightComponent},
    { path: '**', redirectTo: 'home' }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }