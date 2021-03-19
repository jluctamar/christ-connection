import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {
  DomSanitizer,

  SafeUrl
} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CurrentLessonTheme, Lesson } from 'src/app/interfaces/bible-study.interface';
import { ShutterOutAnimation } from 'src/app/shared/animations';
import * as CurrentLessonData from 'src/app/shared/curr-lesson-data.json';
import * as PreviousLessonsData from 'src/app/shared/prev-lessons-repo.json';

@Component({
  selector: 'bible-study',
  templateUrl: './bible-study.component.html',
  styleUrls: ['./bible-study.component.scss'],
  animations: [ShutterOutAnimation],
})
export class BibleStudyComponent implements OnInit, OnDestroy, AfterViewInit {
  zoomLink = 'https://us02web.zoom.us/j/2535558117';
  currentLesson: CurrentLessonTheme = (CurrentLessonData as any).default;
  prevLessonsArray: Lesson[]  = (PreviousLessonsData as any).default;

  activeMeeting = false;
  openLessonView = false;
  lessonURL: SafeUrl;

  lessonContainer: HTMLElement;
  lessonElements: HTMLElement[] = [];
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  lastLeftScrollPos = 0;

  constructor(private domSanitizer: DomSanitizer, private router: Router) {}

  ngOnInit(): void {    
    // Todo: Disable the zoom connect buttons on the basis of the designated meeting date and time
    // meaning the buttons will be enabled for the two hour time slots on the given meeting day

    window.addEventListener('scroll', 
    (this.viewportWidth < 768 && this.isPortrait() ? this.wheelScroll : this.scroll) , true); // third parameter
    
    this.activeMeeting = this.activeMeetingCheck();
  }
  ngAfterViewInit():void { 
    this.lessonContainer = document.querySelector('.lesson-wrapper');
    document.querySelectorAll('.lesson').forEach( elem => this.lessonElements.push(elem as HTMLElement))
    this.positionDiv();

  }


  scroll = (event: any): void => { 
    // Here scroll is a variable holding the anonymous function
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    const scrollVal = event.srcElement.scrollTop;
    const parentCoords = document.querySelector(
      '.past-lessons-container'
    ) as HTMLElement; // gets the position of the parent Div

    const target = document.querySelector('.lesson-wrapper') as HTMLElement;
    const scrollRate =
      ((scrollVal - parentCoords.offsetTop) / parentCoords.offsetTop) * 45;
    if (scrollVal >= parentCoords.offsetTop) {
      target.style.transform = 'translateX(-' + scrollRate + '%)';
    } else {
      target.style.transform = 'translateX(0%)';
    }
  };

  wheelScroll = (event: any): void => {
    if (event.srcElement.scrollLeft !== 0 ) { this.lastLeftScrollPos = event.srcElement.scrollLeft; } // keeps track of last left position

    if (event.srcElement.scrollLeft === 0 && event.srcElement.scrollTop === 0) {
      this.lessonContainer.style.transform = 'translateX(0%) rotate(270deg)'; // Set initial wheel position to the worksheet
    } else if (event.srcElement.scrollLeft === 0 && event.srcElement.scrollTop !== 0) { // maintains wheel position while up/down scroll
      this.lessonContainer.style.transform = 
        'translateX(' +
        this.lastLeftScrollPos * 0.25 +
        '%) rotate(' +
        this.lastLeftScrollPos * 0.4 +
        'deg)';
    } else { 
      this.lessonContainer.style.transform =
        'translateX(' +
        event.srcElement.scrollLeft * 0.25 +
        '%) rotate(' +
        event.srcElement.scrollLeft * 0.4 +
        'deg)';
    }

    this.lessonElements.forEach((elem) => {
      const htmlElem = elem as HTMLElement;
      if (event.srcElement.scrollLeft === 0 && event.srcElement.scrollTop === 0) {
        (htmlElem.style.transform = 'translate(-50%, -50%) rotate(90deg)');
      } else if (event.srcElement.scrollLeft === 0 && event.srcElement.scrollTop !== 0) { // maintains wheel position while up/down scroll
        (htmlElem.style.transform =
          'translate(-50%, -50%) rotate(' +
          -1.0 * (this.lastLeftScrollPos * 0.4) +
          'deg)'
          ); 
      } else {
        (htmlElem.style.transform =
              'translate(-50%, -50%) rotate(' +
              -1.0 * (event.srcElement.scrollLeft * 0.4) +
              'deg)'
              ); // keeps the child elements from rotating upside down by spining them in the opposite direction of parent element
      }
    });
  };


  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event): void {
    if (this.openLessonView) { return; }
    // Reload the page (This ensures the onInit function is called, which ensures the proper scroll method is executed in the EventListener)
    this.router.navigateByUrl('/BibleStudyComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/bible-study']);
  });
  }

  isPortrait(): boolean {
    return (window.innerHeight || document.documentElement.clientHeight) > (window.innerWidth || document.documentElement.clientWidth)
  }

  getWheelCenterX(): number {
    return (
      parseFloat(window.getComputedStyle(this.lessonContainer).width) / 2.0
    );
  }
  getWheelCenterY(): number {
    return (
      parseFloat(window.getComputedStyle(this.lessonContainer).height) / 2.0
    );
  }

  getLessonCoordinatesX(theta, radius): number {
    return Math.cos(theta) * radius;
  }
  getLessonCoordinatesY(theta, radius): number {
    return Math.sin(theta) * radius;
  }

  positionDiv(): void {    
    let pi = Math.PI;
    let theta = 360 / this.prevLessonsArray.length;
    let radians = theta * (pi / 180);

    for (let i = 0; i < this.prevLessonsArray.length; i++) {
      let div = this.lessonElements[i] as HTMLElement;
      let xCoord =
        this.getWheelCenterX() + this.getLessonCoordinatesX(radians * i, 450);
      let yCoord =
        this.getWheelCenterY() - this.getLessonCoordinatesY(radians * i, 450);
      // console.log('######## lesson', i, 'coord:', xCoord + ',' + yCoord);
      div.style.left = xCoord.toString() + 'px';
      div.style.top = yCoord.toString() + 'px';
    }
  }

  onZoomConnect(): void {
    document.location.href = this.zoomLink;
  }

  onViewLesson(urlLocation: string): void {
    this.openLessonView = true;
    this.lessonURL = this.domSanitizer.bypassSecurityTrustResourceUrl(
      urlLocation
    );
  }

  onClosePassageDisplay(): void {
    this.openLessonView = false;
  }

  activeMeetingCheck(): boolean {
    let isActive;
    const date = new Date();
    const currDay = date.getDay(); // returns the numeric value of the day ie sunday = 0, Monday= 1, tuesday = 2 etc...

    // specify the day
    isActive = currDay === 2 ? true : false;
    return isActive;

    // TODO: specify the time range (6-8)
    // TODO: if both conditions are met, return true
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
