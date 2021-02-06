import { Component, OnInit } from '@angular/core';
import { ShutterOutAnimation } from 'src/app/shared/shared/animations';


@Component({
  selector: 'bible-study',
  templateUrl: './bible-study.component.html',
  styleUrls: ['./bible-study.component.scss'],
  animations: [ShutterOutAnimation]
})
export class BibleStudyComponent implements OnInit {

  christConnection = `Jesus' mission was to seek and save the lost. He is the One who seeks us while we 
  are undeserving sinners, saves us according to His mercy through His work on the cross,
  and delights in our hearfelt expressions of repentance.`

  zoomLink = "https://us02web.zoom.us/j/2535558117"

  activeMeeting: boolean 

  constructor() { }

  ngOnInit(): void {
  
    // Todo: Disable the zoom connect buttons on the basis of the designated meeting date and time
          // meaning the buttons will be enabled for the two hour time slots on the given meeting day
  }

  onZoomConnect() {
    document.location.href = "https://us02web.zoom.us/j/2535558117";
  }

}
