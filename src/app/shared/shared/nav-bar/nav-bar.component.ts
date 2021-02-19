import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RotateAnimation, SlideUpDownAnimation } from '../animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [SlideUpDownAnimation, RotateAnimation]
})
export class NavBarComponent implements OnInit {
  @Output() displayPassageEvent = new EventEmitter();

  title = 'Christ Connection';
  zoomLink = 'https://us02web.zoom.us/j/2535558117';
  togglePageMenu = false;
  activeMeeting = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeMeetingCheck();
  }


  // routing to the home page
  goToHome(): void {
    this.router.navigate(['home']);
    this.togglePageMenu = false;
    this.activeMeetingCheck();
  }

  // routing to the gallery page
  goToFellowship(): void {
    this.router.navigate(['fellowship']);
    this.togglePageMenu = false;
    this.activeMeetingCheck();

  }

  // routing to bible study page
  goToBibleStudy(): void {
    this.router.navigate(['bible-study']);
    this.togglePageMenu = false;
    this.activeMeetingCheck();

  }

  // routing to prayer page
  goToPrayerNight(): void {
    this.router.navigate(['prayer']);
    this.togglePageMenu = false;
    this.activeMeetingCheck();

  }

  // routing to about page
  goToAboutUs(): void {
    this.router.navigate(['about']);
    this.togglePageMenu = false;
    this.activeMeetingCheck();

  }



  onShowPassageDisplay(): void {
    this.displayPassageEvent.emit();
  }

  onTogglePageMenu(): void {
    this.togglePageMenu = !this.togglePageMenu;
  }

  onZoomConnect(): void {
    document.location.href = this.zoomLink;
  }
  activeMeetingCheck(): void {
    const date = new Date();
    const currDay = date.getDay(); // returns the numeric value of the day ie sunday = 0, Monday= 1, tuesday = 2 etc... 


    // specify the day
    this.activeMeeting = ( currDay === 2 ) ? true: false;
    
    // TODO: specify the time range (6-8)  
    // TODO: if both conditions are met, return true

  }

}
