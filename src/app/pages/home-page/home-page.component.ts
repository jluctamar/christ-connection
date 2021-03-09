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

  christConnection = `     Jesus is the Sower who scattered the seed (God’s Word)
  through his ministry on earth. Today, He continues to proclaim the gospel through his disciples,
  and the gospel continues to bear fruit among those who receive the message.`
  refPassage = '(Mark 4:1-9, 14-20)';

  constructor(private verseService: VerseService, private router: Router) { }

  ngOnInit(): void {

  }

  goToAboutUs(): void {
    this.router.navigate(['about']);
  }
  goToBibleStudy(): void{
    this.router.navigate(['bible-study']);
  }
}
