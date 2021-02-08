import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ShutterOutAnimation } from 'src/app/shared/shared/animations';

@Component({
  selector: 'bible-study',
  templateUrl: './bible-study.component.html',
  styleUrls: ['./bible-study.component.scss'],
  animations: [ShutterOutAnimation],
})
export class BibleStudyComponent implements OnInit {
  christConnection = `Jesus' mission was to seek and save the lost. He is the One who seeks us while we 
  are undeserving sinners, saves us according to His mercy through His work on the cross,
  and delights in our hearfelt expressions of repentance.`;

  zoomLink = 'https://us02web.zoom.us/j/2535558117';

  activeMeeting: boolean;
  openLessonView = false;
  lessonURL: SafeUrl;

  constructor(private domSanitizer : DomSanitizer) {}

  ngOnInit(): void {
    // Todo: Disable the zoom connect buttons on the basis of the designated meeting date and time
    // meaning the buttons will be enabled for the two hour time slots on the given meeting day
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll = (event: any): void => {
    // Here scroll is a variable holding the anonymous function
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    const scrollVal = event.srcElement.scrollTop;
    var parentCoords = document.querySelector('.past-lessons-container')as HTMLElement; // gets the position of the parent Div

    let target = document.querySelector('.lesson-wrapper') as HTMLElement;
    let scrollRate = (scrollVal-parentCoords.offsetTop)/parentCoords.offsetTop * 45
    if(scrollVal >= parentCoords.offsetTop){
      target.style.transform = 'translateX(-'+scrollRate+'%)'
    } else {
      target.style.transform = 'translateX(0%)'
    }
  };


  onZoomConnect() {
    document.location.href = this.zoomLink;
  }

  onViewLesson(urlLocation: string) {
    this.openLessonView = true;
    this.lessonURL = this.domSanitizer.bypassSecurityTrustResourceUrl(urlLocation);
    console.log("##################", this.lessonURL)
  }

  onClosePassageDisplay() {
    this.openLessonView = false;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
