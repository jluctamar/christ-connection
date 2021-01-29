import { Component } from '@angular/core';
import { SlideInOutAnimation } from './shared/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ SlideInOutAnimation]
})
export class AppComponent {
  title = 'christ-connection';
  isVisible = false; 

  onDisplayPassageEvent() {
    if(!this.isVisible) {
      this.isVisible = true
    }
    // must account for alreaady open scenario 
      // should the nav-bar button prompt for another verse?
  }

  onClosePassageDisplayEvent() {
      this.isVisible = false;
  }
}
