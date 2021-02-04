import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bible-study',
  templateUrl: './bible-study.component.html',
  styleUrls: ['./bible-study.component.scss']
})
export class BibleStudyComponent implements OnInit {

  christConnection = `Jesus' mission was to seek and save the lost. He is the One who seeks us while we 
  are undeserving sinners, saves us according to His mercy through His work on the cross,
  and delights in our hearfelt expressions of repentance.`

  constructor() { }

  ngOnInit(): void {
  }

}
