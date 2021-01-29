import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() displayPassageEvent = new EventEmitter();
  
  title = 'Christ Connection';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  // routing to the home page
  goToHome(){
    this.router.navigate(['home']);
  }

  // routing to the gallery page
  goToFellowship(){
    this.router.navigate(['fellowship']);
  }

  // routing to bible study page
  goToBibleStudy(){
    this.router.navigate(['bible-study']);
  }

  // routing to prayer page
  goToPrayerNight(){
    this.router.navigate(['prayer']);
  }

  // routing to about page
  goToAboutUs(){
    this.router.navigate(['about']);
  }
  

  //function takes in information about the currently selected tab and routes to the corresponding page 
  tabChange( tabChangeEvent: MatTabChangeEvent){

    switch(tabChangeEvent.index){
      case 0: this.goToHome(); break;
      case 1: this.goToBibleStudy(); break;
      case 2: this.goToFellowship(); break;
      case 3: this.goToPrayerNight(); break;
      case 4: this.goToAboutUs(); break;
    }
  }


  onShowPassageDisplay() {
    this.displayPassageEvent.emit();
  }

}
