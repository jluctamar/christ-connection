import { Component } from '@angular/core';
import { SlideInOutAnimation, SlideUpDownAnimation } from './shared/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ SlideUpDownAnimation]
})
export class AppComponent {
  title = 'christ-connection';
  isVisible = false;

  // gets the screen size for footer trasition
  // limitation: if screen size changes variable only updates after refresh
  isSmallScreen =  (window.innerWidth || document.documentElement.clientWidth) <= 480;

  onDisplayPassageEvent(): void {

    if (!this.isVisible) {

      this.isVisible = true;
    }
    // must account for alreaady open scenario 
      // should the nav-bar button prompt for another verse?
  }

  onClosePassageDisplayEvent(): void {
      this.isVisible = false;
  }
}
