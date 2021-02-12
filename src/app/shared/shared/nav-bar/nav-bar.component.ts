import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
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
  togglePageMenu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // routing to the home page
  goToHome(): void {
    this.router.navigate(['home']);
    this.togglePageMenu = false;
  }

  // routing to the gallery page
  goToFellowship(): void {
    this.router.navigate(['fellowship']);
    this.togglePageMenu = false;

  }

  // routing to bible study page
  goToBibleStudy(): void {
    this.router.navigate(['bible-study']);
    this.togglePageMenu = false;

  }

  // routing to prayer page
  goToPrayerNight(): void {
    this.router.navigate(['prayer']);
    this.togglePageMenu = false;

  }

  // routing to about page
  goToAboutUs(): void {
    this.router.navigate(['about']);
    this.togglePageMenu = false;

  }



  onShowPassageDisplay(): void {
    this.displayPassageEvent.emit();
  }

  onTogglePageMenu(): void {
    this.togglePageMenu = !this.togglePageMenu;
  }

}
