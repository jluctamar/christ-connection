import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerseService } from 'src/app/services/verseService';
import { SlideUpAnimation} from 'src/app/shared/shared/animations'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations:[SlideUpAnimation]
})
export class HomePageComponent implements OnInit {

  christConnection = `      Jesus' mission was to seek and save the lost. He is the One who seeks us while we 
  are undeserving sinners, saves us according to His mercy through His work on the cross,
  and delights in our hearfelt expressions of repentance.`
  refPassage = '(Luke 19:1-10)';

  constructor(private verseService: VerseService, private router: Router) { }

  ngOnInit() {

  }

  goToAboutUs(){
    this.router.navigate(['about']);
  }
  goToBibleStudy(){
    this.router.navigate(['bible-study']);
  }
}
