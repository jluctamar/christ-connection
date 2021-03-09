import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { ShutterOutAnimation } from 'src/app/shared/shared/animations';

@Component({
  selector: 'bible-study',
  templateUrl: './bible-study.component.html',
  styleUrls: ['./bible-study.component.scss'],
  animations: [ShutterOutAnimation],
})
export class BibleStudyComponent implements OnInit, OnDestroy {
  christConnection = `    Jesus is the Sower who scattered the seed (God’s Word)
  through his ministry on earth. Today, He continues to proclaim the gospel through his disciples,
  and the gospel continues to bear fruit among those who receive the message.`;

  refPassage = '(Mark 4:1-9, 14-20)';
  currLessonSubject = 'The Sower and the Soils';
  currLessonSummary = `The good news of the Gospel of Jesus Christ is the preemptive love of God (1 John 4:10)
  to pay the price of our sins by offering his son’s life as the perfect payment on our behalf.
  Those who accept this truth walk in the blessed assurance that they have been made right with God.
  But it does not end there, God calls those whom He has redeemed to live, in a still darkened and rebellious world,
  as a light to point others to this gracious gift of salvation.
  God call us to spread the good news just as a sower spreads seed upon his field, far and wide with reckless abandon,
  trusting that God will bring good fruit from the gospel. Join us as we delve into the parable of the Sower and the Soils,
  where we learn from Jesus about the different types of ways people can respond to the message of the gospel.`;

  zoomLink = 'https://us02web.zoom.us/j/2535558117';

  activeMeeting = false;
  openLessonView = false;
  lessonURL: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Todo: Disable the zoom connect buttons on the basis of the designated meeting date and time
    // meaning the buttons will be enabled for the two hour time slots on the given meeting day

    window.addEventListener('scroll', this.scroll, true); // third parameter

    this.activeMeeting = this.activeMeetingCheck();
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
